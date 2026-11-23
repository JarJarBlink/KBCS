# v16.0.2 → v16.0.3 · 最優先の変更候補 (23)

[一覧の目次](README.md)

<a id="compare-bace049b2b84400a9f2088ae35675c56"></a>

### [`005b1910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1910.md) → [`005b1cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1cc0.md) FUN_005b1cc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b17f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b17f8.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005b55a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b55a4.md) [`005b565c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b565c.md) [`005b5660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5660.md) [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md)
- 新版 呼出元 1件 [`005b1ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1ba8.md) · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005b5954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5954.md) [`005b5a0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5a0c.md) [`005b5a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5a10.md) [`0087ad8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ad8c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.48% / 新版 83.48%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b1d5c",
      "incomplete_value": true,
      "site": "005b1d60",
      "value": [
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
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b1d58",
      "incomplete_value": true,
      "site": "005b1d60",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "005b1d58",
      "incomplete_value": true,
      "site": "005b1d60",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:005b1920",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1924",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1944",
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
      "005b1cd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b1cd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b1cf4",
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
- 005b19b0 ["INT_ADD", "register:40f0:8", ["const:5b19b0:8", "const:4:8"]]
- 005b19b0 ["CALL", null, ["callee:0043be80:8"]]
+ 005b1d60 ["INT_ADD", "register:40f0:8", ["const:5b1d60:8", "const:4:8"]]
+ 005b1d60 ["CALL", null, ["callee:0043be80:8"]]
- 005b1a2c ["INT_ADD", "register:40f0:8", ["const:5b1a2c:8", "const:4:8"]]
- 005b1a2c ["CALL", null, ["callee:0087ad8c:8"]]
+ 005b1ddc ["INT_ADD", "register:40f0:8", ["const:5b1ddc:8", "const:4:8"]]
+ 005b1ddc ["CALL", null, ["callee:0087ad8c:8"]]
- 005b1920 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005b1920 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005b1920 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:e0:8"]]
- 005b1920 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-44bbb3f91531b4c977e306c07ac2b5bb"></a>

### [`005b1bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1bc4.md) → [`005b1f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1f74.md) FUN_005b1f74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b571c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b571c.md) · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`005b1d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1d10.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b5acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5acc.md) · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`004939f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/004939f0.md) [`005b20c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b20c0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.97% / 新版 81.97%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b202c",
      "incomplete_value": true,
      "site": "005b2038",
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
            "const:78:8"
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
      "definition_site": "005b2030",
      "incomplete_value": true,
      "site": "005b2038",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "unmatched:005b1bf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1bf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:005b1c04",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005b1fa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005b1fa4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "005b1fb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005b1c88 ["INT_ADD", "register:40f0:8", ["const:5b1c88:8", "const:4:8"]]
- 005b1c88 ["CALL", null, ["callee:00c594d0:8"]]
+ 005b2038 ["INT_ADD", "register:40f0:8", ["const:5b2038:8", "const:4:8"]]
+ 005b2038 ["CALL", null, ["callee:00c594d0:8"]]
- 005b1be8 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 005b1be8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b1bec ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-f04f2c7553548debb2ff426623dc3e8c"></a>

### [`005b1d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1d10.md) → [`005b20c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b20c0.md) FUN_005b20c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005b1bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1bc4.md) [`005b55d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b55d8.md) · 呼出先 6件 [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) [`005b584c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b584c.md) [`005b5850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5850.md) [`005b5b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5b18.md) [`005b5b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5b1c.md)
- 新版 呼出元 2件 [`005b1f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1f74.md) [`005b5988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5988.md) · 呼出先 6件 [`005b2214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2214.md) [`005b5bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5bfc.md) [`005b5c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5c00.md) [`005b5ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5ec8.md) [`005b5ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5ecc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b1d44",
      "incomplete_value": true,
      "site": "005b1d64",
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
              "INT_ADD"
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
      "unmatched:005b1d30",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1d3c",
      "DATA",
      [
        "storage",
        "00c6fab0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b1d3c",
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
      "005b20e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005b20ec",
      "DATA",
      [
        "storage",
        "00c70a80",
        null,
        "undefined *"
      ]
    ],
    [
      "005b20ec",
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
- 005b1d64 ["INT_ADD", "register:40f0:8", ["const:5b1d64:8", "const:4:8"]]
- 005b1d64 ["CALL", null, ["callee:005b2214:8"]]
+ 005b2114 ["INT_ADD", "register:40f0:8", ["const:5b2114:8", "const:4:8"]]
+ 005b2114 ["CALL", null, ["callee:005b2214:8"]]
- 005b1d28 ["COPY", "register:4098:8", ["register:8:8"]]
- 005b1d2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 005b1d2c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-42a765f3c0196631901bd2daac5918d1"></a>

### [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) → [`005b2214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2214.md) FUN_005b2214

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b1d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1d10.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005b4e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4e94.md) [`005b7774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7774.md) [`005b77ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b77ec.md)
- 新版 呼出元 1件 [`005b20c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b20c0.md) · 呼出先 13件 [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`005b5244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5244.md) [`005b7b24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7b24.md) [`005b7b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7b9c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.27% / 新版 82.27%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b224c",
      "incomplete_value": true,
      "site": "005b2250",
      "value": [
        "live",
        "register:4018:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b2048",
      "incomplete_value": true,
      "site": "005b2050",
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
      "unmatched:005b1e68",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b1e70",
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
      "005b2218",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b221c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b2220",
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
- 005b1ea0 ["INT_ADD", "register:40f0:8", ["const:5b1ea0:8", "const:4:8"]]
- 005b1ea0 ["CALL", null, ["callee:005b5244:8"]]
+ 005b2250 ["INT_ADD", "register:40f0:8", ["const:5b2250:8", "const:4:8"]]
+ 005b2250 ["CALL", null, ["callee:005b5244:8"]]
- 005b2050 ["INT_ADD", "register:40f0:8", ["const:5b2050:8", "const:4:8"]]
- 005b2050 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b2400 ["INT_ADD", "register:40f0:8", ["const:5b2400:8", "const:4:8"]]
+ 005b2400 ["CALL", null, ["callee:00c54d90:8"]]
- 005b1e64 ["INT_SUB", "register:8:8", ["register:8:8", "const:d0:8"]]
~~~


<a id="compare-c6e3b066fd6d5a6034083f2847312070"></a>

### [`005b216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b216c.md) → [`005b251c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b251c.md) FUN_005b251c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`005b2330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2330.md) [`005b5418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5418.md) [`005b5664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5664.md) [`005b57a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b57a0.md) [`005b5c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5c8c.md) · 呼出先 7件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005b0c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0c1c.md) [`005b5254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5254.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 7件 [`005b26e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b26e0.md) [`005b57c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b57c8.md) [`005b5a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5a14.md) [`005b5b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5b50.md) [`005b603c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b603c.md) · 呼出先 7件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005b0fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0fcc.md) [`005b5604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5604.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.21% / 新版 78.21%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 7件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b25b4",
      "incomplete_value": true,
      "site": "005b25c4",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": {
      "definition_site": "005b2204",
      "incomplete_value": true,
      "site": "005b2214",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b224c",
      "incomplete_value": true,
      "site": "005b2254",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b2608",
      "incomplete_value": true,
      "site": "005b260c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005b21b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2550"
      ]
    ],
    [
      "unmatched:005b21bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2610"
      ]
    ],
    [
      "unmatched:005b21cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2610"
      ]
    ]
  ],
  "added": [
    [
      "005b2564",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2550"
      ]
    ],
    [
      "005b256c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2610"
      ]
    ],
    [
      "005b257c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2610"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b2214 ["INT_ADD", "register:40f0:8", ["const:5b2214:8", "const:4:8"]]
- 005b2214 ["CALL", null, ["callee:005b0fcc:8"]]
+ 005b25c4 ["INT_ADD", "register:40f0:8", ["const:5b25c4:8", "const:4:8"]]
+ 005b25c4 ["CALL", null, ["callee:005b0fcc:8"]]
- 005b2254 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b2254 ["INT_ADD", "register:40f0:8", ["const:5b2254:8", "const:4:8"]]
- 005b2254 ["CALLIND", null, ["register:0:8"]]
+ 005b2604 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b2604 ["INT_ADD", "register:40f0:8", ["const:5b2604:8", "const:4:8"]]
+ 005b2604 ["CALLIND", null, ["register:0:8"]]
- 005b225c ["INT_ADD", "register:40f0:8", ["const:5b225c:8", "const:4:8"]]
- 005b225c ["CALL", null, ["callee:00c58f20:8"]]
+ 005b260c ["INT_ADD", "register:40f0:8", ["const:5b260c:8", "const:4:8"]]
+ 005b260c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-5b2f8cf57cc6022e6e7bbb0477187d5e"></a>

### [`005b22e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b22e0.md) → [`005b2690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2690.md) FUN_005b2690

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 call, call_count, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b231c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005b26cc",
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
- 005b22fc ["INT_ADD", "register:40f0:8", ["const:5b22fc:8", "const:4:8"]]
- 005b22fc ["CALL", null, ["callee:00c54d90:8"]]
+ 005b26ac ["INT_ADD", "register:40f0:8", ["const:5b26ac:8", "const:4:8"]]
+ 005b26ac ["CALL", null, ["callee:00c54d90:8"]]
- 005b231c ["COPY", "register:0:8", ["register:4040:8"]]
- 005b231c ["INT_ADD", "register:40f0:8", ["const:5b231c:8", "const:4:8"]]
- 005b231c ["CALLIND", null, ["register:0:8"]]
+ 005b26cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b26cc ["INT_ADD", "register:40f0:8", ["const:5b26cc:8", "const:4:8"]]
+ 005b26cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e2f1ea92eca21030be2f98b147d0724e"></a>

### [`005b2330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2330.md) → [`005b26e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b26e0.md) FUN_005b26e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`005b5b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5b20.md) [`005b5e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5e48.md) [`005b6410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6410.md) [`005b67a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b67a0.md) [`005b68c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b68c0.md) · 呼出先 6件 [`005b216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b216c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)
- 新版 呼出元 6件 [`005b5ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5ed0.md) [`005b61f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b61f8.md) [`005b67c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b67c0.md) [`005b6b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6b50.md) [`005b6c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6c70.md) · 呼出先 6件 [`005b251c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b251c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ff0.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.02% / 新版 86.02%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b2730",
      "incomplete_value": false,
      "site": "005b2738",
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
            "const:82a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b2380",
      "incomplete_value": false,
      "site": "005b2388",
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
            "const:6d2:8"
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
      "definition_site": "005b2748",
      "incomplete_value": false,
      "site": "005b2750",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b2398",
      "incomplete_value": false,
      "site": "005b23a0",
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
            "const:220:8"
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
      "definition_site": "005b277c",
      "incomplete_value": false,
      "site": "005b2788",
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
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b23cc",
      "incomplete_value": false,
      "site": "005b23d8",
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
            "const:dcb:8"
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
      "unmatched:005b2364",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b2368",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b236c",
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
      "005b2714",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "005b2718",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "005b271c",
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
- 005b2388 ["INT_ADD", "register:40f0:8", ["const:5b2388:8", "const:4:8"]]
- 005b2388 ["CALL", null, ["callee:00c59230:8"]]
+ 005b2738 ["INT_ADD", "register:40f0:8", ["const:5b2738:8", "const:4:8"]]
+ 005b2738 ["CALL", null, ["callee:00c59230:8"]]
- 005b23a0 ["INT_ADD", "register:40f0:8", ["const:5b23a0:8", "const:4:8"]]
- 005b23a0 ["CALL", null, ["callee:00c59230:8"]]
+ 005b2750 ["INT_ADD", "register:40f0:8", ["const:5b2750:8", "const:4:8"]]
+ 005b2750 ["CALL", null, ["callee:00c59230:8"]]
- 005b23d8 ["INT_ADD", "register:40f0:8", ["const:5b23d8:8", "const:4:8"]]
- 005b23d8 ["CALL", null, ["callee:00c59000:8"]]
+ 005b2788 ["INT_ADD", "register:40f0:8", ["const:5b2788:8", "const:4:8"]]
+ 005b2788 ["CALL", null, ["callee:00c59000:8"]]
~~~


<a id="compare-37a9d1c9e092b3e4cce82de0dd1c44c3"></a>

### [`005b24f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b24f4.md) → [`005b28a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b28a4.md) FUN_005b28a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`005b24ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b24ec.md) [`005b3f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3f0c.md) · 呼出先 6件 [`005b5be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5be4.md) [`005b5be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5be8.md) [`005b5c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5c84.md) [`005b5c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5c88.md) [`0087a63c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a63c.md)
- 新版 呼出元 2件 [`005b289c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b289c.md) [`005b42bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b42bc.md) · 呼出先 6件 [`005b5f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5f94.md) [`005b5f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5f98.md) [`005b6034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6034.md) [`005b6038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6038.md) [`0087b5e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b5e8.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 58.93% / 新版 58.93%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b24f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b24fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b2518",
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
      "005b28a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b28ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b28c8",
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
- 005b24f4 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 005b24f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b24f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b24f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 005b24f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005b24fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005b24fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005b24fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 005b24fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-52bdb2f68cf58646f362eccce8e41b05"></a>

### [`005b2650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2650.md) → [`005b2a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2a00.md) FUN_005b2a00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b5bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5bec.md) · 呼出先 6件 [`005b279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b279c.md) [`005b5d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5d18.md) [`005b5d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5d1c.md) [`005b5e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5e40.md) [`005b5e44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5e44.md)
- 新版 呼出元 1件 [`005b5f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5f9c.md) · 呼出先 6件 [`005b2b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2b4c.md) [`005b60c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b60c8.md) [`005b60cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b60cc.md) [`005b61f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b61f0.md) [`005b61f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b61f4.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 51.92% / 新版 51.92%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b2654",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b2658",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b266c",
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
      "005b2a04",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b2a08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b2a1c",
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
- 005b2650 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 005b2654 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b2654 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b2654 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 005b2654 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005b2658 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005b2658 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005b2658 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 005b2658 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-21fe8c92a3ae423a8105b071c86acf64"></a>

### [`005b279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b279c.md) → [`005b2b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2b4c.md) FUN_005b2b4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b2650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2650.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059f540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f540.md) [`005b811c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b811c.md)
- 新版 呼出元 1件 [`005b2a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2a00.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`0059f860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059f/0059f860.md) [`005b84cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b84cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.86% / 新版 86.86%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b27b8",
      "incomplete_value": false,
      "site": "005b27d0",
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
    "new": null,
    "old": {
      "definition_site": "005b2844",
      "incomplete_value": true,
      "site": "005b2848",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b2d44",
      "incomplete_value": true,
      "site": "005b2d4c",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": null,
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
      "unmatched:005b27cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b285c",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b2894",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2c5c"
      ]
    ]
  ],
  "added": [
    [
      "005b2b7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005b2c0c",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b2c44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b2c5c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b27d0 ["INT_ADD", "register:40f0:8", ["const:5b27d0:8", "const:4:8"]]
- 005b27d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b2b80 ["INT_ADD", "register:40f0:8", ["const:5b2b80:8", "const:4:8"]]
+ 005b2b80 ["CALL", null, ["callee:00c58f30:8"]]
- 005b2848 ["INT_ADD", "register:40f0:8", ["const:5b2848:8", "const:4:8"]]
- 005b2848 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b2bf8 ["INT_ADD", "register:40f0:8", ["const:5b2bf8:8", "const:4:8"]]
+ 005b2bf8 ["CALL", null, ["callee:00c58f50:8"]]
- 005b299c ["INT_ADD", "register:40f0:8", ["const:5b299c:8", "const:4:8"]]
- 005b299c ["CALL", null, ["callee:00599054:8"]]
+ 005b2d4c ["INT_ADD", "register:40f0:8", ["const:5b2d4c:8", "const:4:8"]]
+ 005b2d4c ["CALL", null, ["callee:00599054:8"]]
~~~


<a id="compare-877bc3dd29a5b777619bc2078c489147"></a>

### [`005b2b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2b48.md) → [`005b2ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2ef8.md) FUN_005b2ef8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 9件 [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) [`005b2cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2cd0.md) [`005b2f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2f28.md) [`005b5ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5ee0.md)
- 新版 呼出元 1件 [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) · 呼出先 9件 [`005b1904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1904.md) [`005b1a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1a40.md) [`005b3080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3080.md) [`005b32d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b32d8.md) [`005b6290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6290.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.36% / 新版 74.36%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b2b78",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b2b84",
      "DATA",
      [
        "storage",
        "00c6fe10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b2b84",
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
      "005b2f28",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005b2f34",
      "DATA",
      [
        "storage",
        "00c70de0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b2f34",
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
- 005b2b74 ["COPY", "register:40b8:8", ["register:8:8"]]
- 005b2b78 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005b2b78 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005b2b78 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 005b2b7c ["COPY", "register:4040:8", ["const:c6f000:8"]]
~~~


<a id="compare-deaa6b3c2ababf478be423976464822a"></a>

### [`005b2cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2cd0.md) → [`005b3080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3080.md) FUN_005b3080

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`005b2b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2b48.md) [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) [`008a7300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7300.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`005b93d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b93d8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`005b2ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2ef8.md) [`00866114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866114.md) [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) [`008a82ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a82ac.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`005b9788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9788.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.33% / 新版 91.33%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b3150",
      "incomplete_value": true,
      "site": "005b315c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "005b2e24",
      "incomplete_value": false,
      "site": "005b2e2c",
      "value": [
        "leaf",
        "const:60:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b326c",
      "incomplete_value": true,
      "site": "005b3278",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
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
      "unmatched:005b2d04",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b2d4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b31b4"
      ]
    ],
    [
      "unmatched:005b2d88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b3128"
      ]
    ]
  ],
  "added": [
    [
      "005b30b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "005b3138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b3128"
      ]
    ],
    [
      "005b316c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b317c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b2dac ["INT_ADD", "register:40f0:8", ["const:5b2dac:8", "const:4:8"]]
- 005b2dac ["CALL", null, ["callee:00494970:8"]]
+ 005b315c ["INT_ADD", "register:40f0:8", ["const:5b315c:8", "const:4:8"]]
+ 005b315c ["CALL", null, ["callee:00494970:8"]]
- 005b2e2c ["INT_ADD", "register:40f0:8", ["const:5b2e2c:8", "const:4:8"]]
- 005b2e2c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b31dc ["INT_ADD", "register:40f0:8", ["const:5b31dc:8", "const:4:8"]]
+ 005b31dc ["CALL", null, ["callee:00c58f30:8"]]
- 005b2ec8 ["INT_ADD", "register:40f0:8", ["const:5b2ec8:8", "const:4:8"]]
- 005b2ec8 ["CALL", null, ["callee:005b9788:8"]]
+ 005b3278 ["INT_ADD", "register:40f0:8", ["const:5b3278:8", "const:4:8"]]
+ 005b3278 ["CALL", null, ["callee:005b9788:8"]]
~~~


<a id="compare-490323cd19223d83f54c88adb62dcd48"></a>

### [`005b2f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2f28.md) → [`005b32d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b32d8.md) FUN_005b32d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`005b2b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2b48.md) [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) [`008a7300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7300.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`005b9540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9540.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`005b2ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2ef8.md) [`00866114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866114.md) [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) [`008a82ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a82ac.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`005b98f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b98f0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 89.33% / 新版 89.33%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_condition` 2件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b33a8",
      "incomplete_value": true,
      "site": "005b33b4",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "005b30b8",
      "incomplete_value": true,
      "site": "005b30bc",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b34d0",
      "value": [
        "leaf",
        "ram:5b98f0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": false,
      "site": "005b3120",
      "value": [
        "leaf",
        "callee:00889e80:8"
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
      "unmatched:005b2f84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b3320"
      ]
    ],
    [
      "unmatched:005b3014",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b33d4"
      ]
    ],
    [
      "unmatched:005b3068",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b3400"
      ]
    ]
  ],
  "added": [
    [
      "005b3334",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b3320"
      ]
    ],
    [
      "005b33c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b33d4"
      ]
    ],
    [
      "005b3418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b3400"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b3004 ["INT_ADD", "register:40f0:8", ["const:5b3004:8", "const:4:8"]]
- 005b3004 ["CALL", null, ["callee:00494970:8"]]
+ 005b33b4 ["INT_ADD", "register:40f0:8", ["const:5b33b4:8", "const:4:8"]]
+ 005b33b4 ["CALL", null, ["callee:00494970:8"]]
- 005b30bc ["INT_ADD", "register:40f0:8", ["const:5b30bc:8", "const:4:8"]]
- 005b30bc ["CALL", null, ["callee:0043bf04:8"]]
+ 005b346c ["INT_ADD", "register:40f0:8", ["const:5b346c:8", "const:4:8"]]
+ 005b346c ["CALL", null, ["callee:0043bf04:8"]]
- 005b3120 ["INT_ADD", "register:40f0:8", ["const:5b3120:8", "const:4:8"]]
- 005b3120 ["CALL", null, ["callee:00889e80:8"]]
+ 005b34d0 ["INT_ADD", "register:40f0:8", ["const:5b34d0:8", "const:4:8"]]
+ 005b34d0 ["CALL", null, ["ram:5b98f0:8"]]
~~~


<a id="compare-00090410c172bd482950e138c3616955"></a>

### [`005b3388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3388.md) → [`005b3738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3738.md) FUN_005b3738

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`005b3180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3180.md) [`005b3384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3384.md) [`005b603c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b603c.md) · 呼出先 6件 [`005b619c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b619c.md) [`005b61a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b61a0.md) [`005b622c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b622c.md) [`005b6230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6230.md) [`0087acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087acb0.md)
- 新版 呼出元 3件 [`005b3530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3530.md) [`005b3734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3734.md) [`005b63ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b63ec.md) · 呼出先 6件 [`005b654c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b654c.md) [`005b6550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6550.md) [`005b65dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b65dc.md) [`005b65e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b65e0.md) [`0087bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087bc5c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.21% / 新版 73.21%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b33a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b33b4",
      "DATA",
      [
        "storage",
        "00c6ff30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b33b4",
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
      "005b3758",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005b3764",
      "DATA",
      [
        "storage",
        "00c70f00",
        null,
        "undefined *"
      ]
    ],
    [
      "005b3764",
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
- 005b339c ["COPY", "tmp:0:8", ["const:30:8"]]
- 005b339c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 005b339c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 005b339c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 005b33a0 ["COPY", "register:4098:8", ["register:8:8"]]
- 005b33a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 005b33a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5ea6dbf2a8d21782a54f8fb93280e4b2"></a>

### [`005b34e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b34e4.md) → [`005b3894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3894.md) FUN_005b3894

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b61a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b61a4.md) · 呼出先 6件 [`005b3638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3638.md) [`005b62e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b62e0.md) [`005b62e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b62e4.md) [`005b6408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6408.md) [`005b640c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b640c.md)
- 新版 呼出元 1件 [`005b6554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6554.md) · 呼出先 6件 [`005b39e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b39e8.md) [`005b6690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6690.md) [`005b6694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6694.md) [`005b67b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b67b8.md) [`005b67bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b67bc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 85.19% / 新版 85.19%

優先判定に残った影響 `store_value` 2件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b38bc",
      "incomplete_value": false,
      "site": "005b38bc",
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
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b350c",
      "incomplete_value": false,
      "site": "005b350c",
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
            "const:30:8"
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
      "definition_site": "005b38d4",
      "incomplete_value": false,
      "site": "005b38d4",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b3524",
      "incomplete_value": false,
      "site": "005b3524",
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
            "const:b0:8"
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
      "005b38bc",
      "DATA",
      [
        "storage",
        "00c70030",
        null,
        "undefined *"
      ]
    ],
    [
      "005b38d4",
      "DATA",
      [
        "storage",
        "00c700b0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b3910",
      "READ",
      [
        "storage",
        "00c700d0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b38bc",
      "DATA",
      [
        "storage",
        "00c71000",
        null,
        "undefined *"
      ]
    ],
    [
      "005b38d4",
      "DATA",
      [
        "storage",
        "00c71080",
        null,
        "undefined *"
      ]
    ],
    [
      "005b3910",
      "READ",
      [
        "storage",
        "00c710a0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b3504 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b38b4 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b3508 ["COPY", "tmp:0:8", ["const:30:8"]]
- 005b3508 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b3508 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b3508 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b38b8 ["COPY", "tmp:0:8", ["const:0:8"]]
+ 005b38b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b38b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b38b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b3518 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b38c8 ["COPY", "register:4040:8", ["const:c71000:8"]]
~~~


<a id="compare-16b2aaeede8f2282c5cded9b388561d3"></a>

### [`005b3638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3638.md) → [`005b39e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b39e8.md) FUN_005b39e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b34e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b34e4.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059d394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d394.md) [`005b7d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7d38.md) [`005b8084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8084.md)
- 新版 呼出元 1件 [`005b3894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3894.md) · 呼出先 13件 [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`0059d6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059d/0059d6b4.md) [`005b80e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b80e8.md) [`005b8434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8434.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `store_value` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b3b24",
      "incomplete_value": false,
      "site": "005b3b28",
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
      "definition_site": "005b3774",
      "incomplete_value": false,
      "site": "005b3778",
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b3bb8",
      "incomplete_value": false,
      "site": "005b3bb8",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b3808",
      "incomplete_value": false,
      "site": "005b3808",
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
            "const:7f0:8"
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
      "unmatched:005b363c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b3640",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b3644",
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
      "005b39ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005b39f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b39f4",
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
- 005b3638 ["INT_SUB", "register:8:8", ["register:8:8", "const:f0:8"]]
- 005b363c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b363c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b363c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:b0:8"]]
- 005b363c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005b3640 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 005b3640 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 005b3640 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:c0:8"]]
- 005b3640 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-479b505951e2d730cac9b27fa87b1dde"></a>

### [`005b3a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3a68.md) → [`005b3e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3e18.md) FUN_005b3e18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 6件 [`005b3bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3bb4.md) [`005b64a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b64a0.md) [`005b64a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b64a4.md) [`005b6798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6798.md) [`005b679c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b679c.md)
- 新版 呼出元 1件 [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) · 呼出先 6件 [`005b3f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3f64.md) [`005b6850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6850.md) [`005b6854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6854.md) [`005b6b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6b48.md) [`005b6b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6b4c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 63.46% / 新版 63.46%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b3e5c",
      "incomplete_value": true,
      "site": "005b3e64",
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
                "const:90:8"
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
    "old": {
      "definition_site": "005b3aac",
      "incomplete_value": true,
      "site": "005b3ab4",
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
            "const:30:8"
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
      "definition_site": "005b3e60",
      "incomplete_value": true,
      "site": "005b3e64",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b3ab0",
      "incomplete_value": true,
      "site": "005b3ab4",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:005b3a6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b3a70",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b3a84",
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
      "005b3e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b3e20",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b3e34",
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
- 005b3ab4 ["INT_ADD", "register:40f0:8", ["const:5b3ab4:8", "const:4:8"]]
- 005b3ab4 ["CALL", null, ["callee:005b3f64:8"]]
+ 005b3e64 ["INT_ADD", "register:40f0:8", ["const:5b3e64:8", "const:4:8"]]
+ 005b3e64 ["CALL", null, ["callee:005b3f64:8"]]
- 005b3a68 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 005b3a6c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b3a6c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b3a6c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 005b3a6c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a9c8b6d1f2d564d6b82277c944ef46ea"></a>

### [`005b3bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3bb4.md) → [`005b3f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3f64.md) FUN_005b3f64

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b3a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3a68.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md) [`005b71c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b71c4.md) [`005b7560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7560.md)
- 新版 呼出元 1件 [`005b3e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3e18.md) · 呼出先 13件 [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md) [`005b7574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7574.md) [`005b7910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7910.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.62% / 新版 80.62%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b4190",
      "incomplete_value": false,
      "site": "005b4194",
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
      "definition_site": "005b3de0",
      "incomplete_value": false,
      "site": "005b3de4",
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b3f7c",
      "incomplete_value": false,
      "site": "005b3f90",
      "value": [
        "leaf",
        "const:38:8"
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
      "definition_site": "005b3fc4",
      "incomplete_value": true,
      "site": "005b3fcc",
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
            "const:40:8"
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
      "unmatched:005b3bdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b3c04",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b3c0c",
      "DATA",
      [
        "storage",
        "00c6deb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b3f8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b3fb4",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "005b3fbc",
      "DATA",
      [
        "storage",
        "00c6ee88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b3be0 ["INT_ADD", "register:40f0:8", ["const:5b3be0:8", "const:4:8"]]
- 005b3be0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b3f90 ["INT_ADD", "register:40f0:8", ["const:5b3f90:8", "const:4:8"]]
+ 005b3f90 ["CALL", null, ["callee:00c58f30:8"]]
- 005b3c1c ["INT_ADD", "register:40f0:8", ["const:5b3c1c:8", "const:4:8"]]
- 005b3c1c ["CALL", null, ["callee:005b7574:8"]]
+ 005b3fcc ["INT_ADD", "register:40f0:8", ["const:5b3fcc:8", "const:4:8"]]
+ 005b3fcc ["CALL", null, ["callee:005b7574:8"]]
- 005b3cd0 ["INT_ADD", "register:40f0:8", ["const:5b3cd0:8", "const:4:8"]]
- 005b3cd0 ["CALL", null, ["callee:00598e94:8"]]
+ 005b4080 ["INT_ADD", "register:40f0:8", ["const:5b4080:8", "const:4:8"]]
+ 005b4080 ["CALL", null, ["callee:00598e94:8"]]
~~~


<a id="compare-03c1d7b97555ee47c1baa0530841a1e0"></a>

### [`005b3f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3f14.md) → [`005b42c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b42c4.md) FUN_005b42c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b5bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5bec.md) · 呼出先 6件 [`005b4060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4060.md) [`005b6830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6830.md) [`005b6834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6834.md) [`005b68b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b68b8.md) [`005b68bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b68bc.md)
- 新版 呼出元 1件 [`005b5f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5f9c.md) · 呼出先 6件 [`005b4410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4410.md) [`005b6be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6be0.md) [`005b6be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6be4.md) [`005b6c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6c68.md) [`005b6c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6c6c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b3f3c",
      "DATA",
      [
        "storage",
        "00c70290",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b3f3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b3f44",
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
      "005b42ec",
      "DATA",
      [
        "storage",
        "00c71260",
        null,
        "undefined *"
      ]
    ],
    [
      "005b42ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005b42f4",
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
- 005b3f34 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b42e4 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b3f38 ["COPY", "tmp:0:8", ["const:290:8"]]
- 005b3f38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b3f38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b3f38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b3f3c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005b3f3c ["COPY", "tmp:1:8", ["register:4000:8"]]
- 005b3f3c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 005b3f3c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-af16a570e4f22f26bafb4699b892432f"></a>

### [`005b4060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4060.md) → [`005b4410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4410.md) FUN_005b4410

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b3f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3f14.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059eba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059eba0.md) [`005b8500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8500.md)
- 新版 呼出元 1件 [`005b42c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b42c4.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`0059eec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059e/0059eec0.md) [`005b88b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b88b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.71% / 新版 89.71%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b464c",
      "incomplete_value": false,
      "site": "005b4650",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "old": null,
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b4648",
      "incomplete_value": true,
      "site": "005b4650",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b42e8",
      "incomplete_value": true,
      "site": "005b42ec",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005b4120",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b41ac",
      "DATA",
      [
        "storage",
        "00c708f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b41b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b457c"
      ]
    ]
  ],
  "added": [
    [
      "005b44d0",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b455c",
      "DATA",
      [
        "storage",
        "00c718c0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b4560",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b457c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b42a0 ["INT_ADD", "register:40f0:8", ["const:5b42a0:8", "const:4:8"]]
- 005b42a0 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b4650 ["INT_ADD", "register:40f0:8", ["const:5b4650:8", "const:4:8"]]
+ 005b4650 ["CALL", null, ["callee:00c54d90:8"]]
- 005b42ec ["INT_ADD", "register:40f0:8", ["const:5b42ec:8", "const:4:8"]]
- 005b42ec ["CALL", null, ["callee:00c58f20:8"]]
+ 005b469c ["INT_ADD", "register:40f0:8", ["const:5b469c:8", "const:4:8"]]
+ 005b469c ["CALL", null, ["callee:00c58f20:8"]]
- 005b4094 ["INT_ADD", "register:40f0:8", ["const:5b4094:8", "const:4:8"]]
- 005b4094 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b4444 ["INT_ADD", "register:40f0:8", ["const:5b4444:8", "const:4:8"]]
+ 005b4444 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-e94bcfb5d9c7e2c2e3e4447665d10bc2"></a>

### [`005b440c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b440c.md) → [`005b47bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b47bc.md) FUN_005b47bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b6838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6838.md) · 呼出先 8件 [`005b45d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b45d0.md) [`005b6950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6950.md) [`005b6954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6954.md) [`005b6b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6b70.md) [`005b6b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6b74.md)
- 新版 呼出元 1件 [`005b6be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6be8.md) · 呼出先 8件 [`005b4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4980.md) [`005b6d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6d00.md) [`005b6d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6d04.md) [`005b6f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6f20.md) [`005b6f24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6f24.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 87.14% / 新版 87.14%

優先判定に残った影響 `store_value` 3件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b47e4",
      "incomplete_value": false,
      "site": "005b47e4",
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
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b4434",
      "incomplete_value": false,
      "site": "005b4434",
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
            "const:3a0:8"
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
      "definition_site": "005b47f8",
      "incomplete_value": false,
      "site": "005b47f8",
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
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b4448",
      "incomplete_value": false,
      "site": "005b4448",
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
            "const:430:8"
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
      "definition_site": "005b480c",
      "incomplete_value": false,
      "site": "005b480c",
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
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b445c",
      "incomplete_value": false,
      "site": "005b445c",
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
            "const:510:8"
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
      "005b47e4",
      "DATA",
      [
        "storage",
        "00c703a0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b47f8",
      "DATA",
      [
        "storage",
        "00c70430",
        null,
        "undefined *"
      ]
    ],
    [
      "005b480c",
      "DATA",
      [
        "storage",
        "00c70510",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b47e4",
      "DATA",
      [
        "storage",
        "00c71370",
        null,
        "undefined *"
      ]
    ],
    [
      "005b47f8",
      "DATA",
      [
        "storage",
        "00c71400",
        null,
        "undefined *"
      ]
    ],
    [
      "005b480c",
      "DATA",
      [
        "storage",
        "00c714e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b442c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b47dc ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b4430 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 005b4430 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b4430 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b4430 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b47e0 ["COPY", "tmp:0:8", ["const:370:8"]]
+ 005b47e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b47e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b47e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b4440 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b47f0 ["COPY", "register:4040:8", ["const:c71000:8"]]
~~~


<a id="compare-ae72f70e4f883432ee8eef9fbaceb662"></a>

### [`005b45d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b45d0.md) → [`005b4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4980.md) FUN_005b4980

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b440c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b440c.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`005a06a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a06a8.md) [`005ad32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad32c.md) [`005ad3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad3f8.md)
- 新版 呼出元 1件 [`005b47bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b47bc.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`005a09c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a0/005a09c8.md) [`005ad6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad6dc.md) [`005ad7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad7a8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.80% / 新版 83.80%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b4a40",
      "incomplete_value": false,
      "site": "005b4a44",
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
      "definition_site": "005b4690",
      "incomplete_value": false,
      "site": "005b4694",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b462c",
      "incomplete_value": true,
      "site": "005b4634",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "005b462c",
      "incomplete_value": true,
      "site": "005b4634",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b8:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b45d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b45d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b45dc",
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
      "005b4984",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005b4988",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b498c",
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
- 005b4634 ["INT_ADD", "register:40f0:8", ["const:5b4634:8", "const:4:8"]]
- 005b4634 ["CALL", null, ["callee:0043be80:8"]]
+ 005b49e4 ["INT_ADD", "register:40f0:8", ["const:5b49e4:8", "const:4:8"]]
+ 005b49e4 ["CALL", null, ["callee:0043be80:8"]]
- 005b4640 ["INT_ADD", "register:40f0:8", ["const:5b4640:8", "const:4:8"]]
- 005b4640 ["CALL", null, ["callee:005a09c8:8"]]
+ 005b49f0 ["INT_ADD", "register:40f0:8", ["const:5b49f0:8", "const:4:8"]]
+ 005b49f0 ["CALL", null, ["callee:005a09c8:8"]]
- 005b4664 ["INT_ADD", "register:40f0:8", ["const:5b4664:8", "const:4:8"]]
- 005b4664 ["CALL", null, ["callee:005b8e54:8"]]
+ 005b4a14 ["INT_ADD", "register:40f0:8", ["const:5b4a14:8", "const:4:8"]]
+ 005b4a14 ["CALL", null, ["callee:005b8e54:8"]]
~~~


<a id="compare-5eff3a1c99aac1aefb22a6b4f9bf3cc7"></a>

### [`005b498c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b498c.md) → [`005b4d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4d3c.md) FUN_005b4d3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008a7300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7300.md) · 呼出先 6件 [`005b4ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4ad8.md) [`005b7050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7050.md) [`005b7054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7054.md) [`005b717c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b717c.md) [`005b7180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7180.md)
- 新版 呼出元 1件 [`008a82ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a82ac.md) · 呼出先 6件 [`005b4e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4e88.md) [`005b7400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7400.md) [`005b7404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7404.md) [`005b752c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b752c.md) [`005b7530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7530.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.15% / 新版 71.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b49a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b49b4",
      "DATA",
      [
        "storage",
        "00c70590",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b49b4",
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
      "005b4d58",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005b4d64",
      "DATA",
      [
        "storage",
        "00c71560",
        null,
        "undefined *"
      ]
    ],
    [
      "005b4d64",
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
- 005b49a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 005b49a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b49a8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 005b49a8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 005b49a8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 005b49ac ["COPY", "register:4040:8", ["const:c70000:8"]]
~~~


<a id="compare-c86a6e93ef1f4096e43b27b70ae96383"></a>

### [`005b4ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4ad8.md) → [`005b4e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4e88.md) FUN_005b4e88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005b498c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b498c.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md) [`005b8ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8ff4.md) [`005b9340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9340.md)
- 新版 呼出元 1件 [`005b4d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4d3c.md) · 呼出先 13件 [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md) [`005b93a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b93a4.md) [`005b96f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b96f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.50% / 新版 82.50%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b4f9c",
      "incomplete_value": false,
      "site": "005b4f9c",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b4bec",
      "incomplete_value": false,
      "site": "005b4bec",
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
            "const:a40:8"
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
    "new": {
      "definition_site": "005b4ea0",
      "incomplete_value": false,
      "site": "005b4eb4",
      "value": [
        "leaf",
        "const:38:8"
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
      "definition_site": "005b4cbc",
      "incomplete_value": false,
      "site": "005b4cc0",
      "value": [
        "leaf",
        "const:1:8"
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
      "unmatched:005b4b00",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b4b28",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b4b30",
      "DATA",
      [
        "storage",
        "00c6e338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b4eb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005b4ed8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "005b4ee0",
      "DATA",
      [
        "storage",
        "00c6f308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b4b04 ["INT_ADD", "register:40f0:8", ["const:5b4b04:8", "const:4:8"]]
- 005b4b04 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b4eb4 ["INT_ADD", "register:40f0:8", ["const:5b4eb4:8", "const:4:8"]]
+ 005b4eb4 ["CALL", null, ["callee:00c58f30:8"]]
- 005b4cc0 ["INT_ADD", "register:40f0:8", ["const:5b4cc0:8", "const:4:8"]]
- 005b4cc0 ["CALL", null, ["callee:00c54d60:8"]]
+ 005b5070 ["INT_ADD", "register:40f0:8", ["const:5b5070:8", "const:4:8"]]
+ 005b5070 ["CALL", null, ["callee:00c54d60:8"]]
- 005b4cfc ["INT_ADD", "register:40f0:8", ["const:5b4cfc:8", "const:4:8"]]
- 005b4cfc ["CALL", null, ["callee:00c58f20:8"]]
+ 005b50ac ["INT_ADD", "register:40f0:8", ["const:5b50ac:8", "const:4:8"]]
+ 005b50ac ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-ba5d344fd61f71fdaa95efb8fc2c3169"></a>

### [`005b4e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4e30.md) → [`005b51e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b51e0.md) FUN_005b51e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 68.00% / 新版 68.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b4e30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b4e34",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b4e58",
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
      "005b51e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b51e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b5208",
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
- 005b4e30 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b4e30 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b4e30 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b4e30 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b4e34 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b4e34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b4e38 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-a5b1c664adc32aaaca49f0f7908131a2"></a>

### [`005b4e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4e94.md) → [`005b5244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5244.md) FUN_005b5244

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0059c8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c8dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b2214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2214.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0059cbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059c/0059cbfc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.58% / 新版 72.58%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b526c",
      "incomplete_value": false,
      "site": "005b527c",
      "value": [
        "leaf",
        "const:70:8"
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
      "definition_site": "005b52cc",
      "incomplete_value": true,
      "site": "005b52d4",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b52cc",
      "incomplete_value": true,
      "site": "005b52d4",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:005b4e98",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b4e9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b4ea0",
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
      "005b5248",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005b524c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b5250",
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
- 005b4ecc ["INT_ADD", "register:40f0:8", ["const:5b4ecc:8", "const:4:8"]]
- 005b4ecc ["CALL", null, ["callee:00c58f30:8"]]
+ 005b527c ["INT_ADD", "register:40f0:8", ["const:5b527c:8", "const:4:8"]]
+ 005b527c ["CALL", null, ["callee:00c58f30:8"]]
- 005b4f24 ["INT_ADD", "register:40f0:8", ["const:5b4f24:8", "const:4:8"]]
- 005b4f24 ["CALL", null, ["callee:0043be80:8"]]
+ 005b52d4 ["INT_ADD", "register:40f0:8", ["const:5b52d4:8", "const:4:8"]]
+ 005b52d4 ["CALL", null, ["callee:0043be80:8"]]
- 005b4f38 ["INT_ADD", "register:40f0:8", ["const:5b4f38:8", "const:4:8"]]
- 005b4f38 ["CALL", null, ["callee:0059cbfc:8"]]
+ 005b52e8 ["INT_ADD", "register:40f0:8", ["const:5b52e8:8", "const:4:8"]]
+ 005b52e8 ["CALL", null, ["callee:0059cbfc:8"]]
~~~


<a id="compare-7dbd39da3c3078394ca4d5d41d49a960"></a>

### [`005b4fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4fe0.md) → [`005b5390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5390.md) FUN_005b5390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b53e0",
      "incomplete_value": true,
      "site": "005b53e4",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:005b5018",
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
      "005b53c8",
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
- 005b5034 ["INT_ADD", "register:40f0:8", ["const:5b5034:8", "const:4:8"]]
- 005b5034 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b53e4 ["INT_ADD", "register:40f0:8", ["const:5b53e4:8", "const:4:8"]]
+ 005b53e4 ["CALL", null, ["callee:00c58f50:8"]]
- 005b4ff4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005b4ff4 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 005b53a4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 005b53a4 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 005b5004 ["INT_ADD", "register:40f0:8", ["const:5b5004:8", "const:4:8"]]
- 005b5004 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b53b4 ["INT_ADD", "register:40f0:8", ["const:5b53b4:8", "const:4:8"]]
+ 005b53b4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3121580eaf2d396170430739891c3afb"></a>

### [`005b5054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5054.md) → [`005b5404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5404.md) FUN_005b5404

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b5438",
      "incomplete_value": false,
      "site": "005b543c",
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
      "definition_site": "005b5088",
      "incomplete_value": false,
      "site": "005b508c",
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
      "005b543c",
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
      "005b543c",
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
- 005b5078 ["INT_ADD", "register:40f0:8", ["const:5b5078:8", "const:4:8"]]
- 005b5078 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b5428 ["INT_ADD", "register:40f0:8", ["const:5b5428:8", "const:4:8"]]
+ 005b5428 ["CALL", null, ["callee:00c58f50:8"]]
- 005b507c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005b542c ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005b5080 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005b5080 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5080 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5080 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b5430 ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005b5430 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5430 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5430 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f97fa92412115e85475b2b5ffe388dd2"></a>

### [`005b50c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b50c8.md) → [`005b5478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5478.md) FUN_005b5478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b54ac",
      "incomplete_value": false,
      "site": "005b54b0",
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
      "definition_site": "005b50fc",
      "incomplete_value": false,
      "site": "005b5100",
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
      "005b54b0",
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
      "005b54b0",
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
- 005b50ec ["INT_ADD", "register:40f0:8", ["const:5b50ec:8", "const:4:8"]]
- 005b50ec ["CALL", null, ["callee:00c58f50:8"]]
+ 005b549c ["INT_ADD", "register:40f0:8", ["const:5b549c:8", "const:4:8"]]
+ 005b549c ["CALL", null, ["callee:00c58f50:8"]]
- 005b50f0 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005b54a0 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005b50f4 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005b50f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b50f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b50f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b54a4 ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005b54a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b54a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b54a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e6485d4e3a0c71108f6765f1ccaf58a8"></a>

### [`005b513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b513c.md) → [`005b54ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b54ec.md) FUN_005b54ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b5520",
      "incomplete_value": false,
      "site": "005b5524",
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
      "definition_site": "005b5170",
      "incomplete_value": false,
      "site": "005b5174",
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
      "005b5524",
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
      "005b5524",
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
- 005b5160 ["INT_ADD", "register:40f0:8", ["const:5b5160:8", "const:4:8"]]
- 005b5160 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b5510 ["INT_ADD", "register:40f0:8", ["const:5b5510:8", "const:4:8"]]
+ 005b5510 ["CALL", null, ["callee:00c58f50:8"]]
- 005b5164 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005b5514 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005b5168 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005b5168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b5518 ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005b5518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7ed8a335b2cd14024e89400878d8982b"></a>

### [`005b51b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b51b0.md) → [`005b5560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5560.md) FUN_005b5560

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
      "definition_site": "005b5584",
      "incomplete_value": false,
      "site": "005b5588",
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
      "definition_site": "005b51d4",
      "incomplete_value": false,
      "site": "005b51d8",
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
      "005b5588",
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
      "005b5588",
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
- 005b51c8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005b5578 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005b51cc ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005b51cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b51cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b51cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b557c ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005b557c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b557c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b557c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b51e4 ["INT_ADD", "register:40f0:8", ["const:5b51e4:8", "const:4:8"]]
- 005b51e4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b5594 ["INT_ADD", "register:40f0:8", ["const:5b5594:8", "const:4:8"]]
+ 005b5594 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e014f7eef0c9641073595278a77593bb"></a>

### [`005b5214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5214.md) → [`005b55c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b55c4.md) FUN_005b55c4

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
      "definition_site": "005b55c8",
      "incomplete_value": false,
      "site": "005b55cc",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5218",
      "incomplete_value": false,
      "site": "005b521c",
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
      "005b55cc",
      "DATA",
      [
        "storage",
        "00c6f730",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b55cc",
      "DATA",
      [
        "storage",
        "00c70700",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5214 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b55c4 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5218 ["COPY", "tmp:0:8", ["const:730:8"]]
- 005b5218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b55c8 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 005b55c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b55c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b55c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fb244ae1e08318b2aafdb42eceed88ac"></a>

### [`005b5224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5224.md) → [`005b55d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b55d4.md) FUN_005b55d4

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
      "definition_site": "005b55e4",
      "incomplete_value": false,
      "site": "005b55ec",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5234",
      "incomplete_value": false,
      "site": "005b523c",
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
      "005b55ec",
      "DATA",
      [
        "storage",
        "00c6f730",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b55ec",
      "DATA",
      [
        "storage",
        "00c70700",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5230 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b55e0 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5234 ["COPY", "tmp:0:8", ["const:730:8"]]
- 005b5234 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5234 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5234 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b55e4 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 005b55e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b55e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b55e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b5240 ["INT_ADD", "register:40f0:8", ["const:5b5240:8", "const:4:8"]]
- 005b5240 ["CALL", null, ["callee:00c58f40:8"]]
+ 005b55f0 ["INT_ADD", "register:40f0:8", ["const:5b55f0:8", "const:4:8"]]
+ 005b55f0 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-162d40b3295d5785badcaec2c5b70db8"></a>

### [`005b52d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b52d0.md) → [`005b5680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5680.md) FUN_005b5680

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`005b13e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b13e8.md) [`005b1480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1480.md) [`005b52d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b52d0.md) · 呼出先 2件 [`005b52d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b52d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`005b1798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1798.md) [`005b1830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1830.md) [`005b5680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5680.md) · 呼出先 2件 [`005b5680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5680.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b5308",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b56cc"
      ]
    ]
  ],
  "added": [
    [
      "005b56b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b56cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b52d0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005b52d0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005b5680 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005b5680 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 005b52ec ["INT_ADD", "register:40f0:8", ["const:5b52ec:8", "const:4:8"]]
- 005b52ec ["CALL", null, ["local:b0:8"]]
+ 005b569c ["INT_ADD", "register:40f0:8", ["const:5b569c:8", "const:4:8"]]
+ 005b569c ["CALL", null, ["local:b0:8"]]
- 005b52f8 ["INT_ADD", "register:40f0:8", ["const:5b52f8:8", "const:4:8"]]
- 005b52f8 ["CALL", null, ["local:b0:8"]]
+ 005b56a8 ["INT_ADD", "register:40f0:8", ["const:5b56a8:8", "const:4:8"]]
+ 005b56a8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-ac8c67600c9a0d2019ecde2857353ddc"></a>

### [`005b5344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5344.md) → [`005b56f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b56f4.md) FUN_005b56f4

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
      "definition_site": "005b5354",
      "incomplete_value": false,
      "site": "005b5358",
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
      "unmatched:005b5368",
      "DATA",
      [
        "storage",
        "00c6f780",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b536c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b5370",
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
      "005b5718",
      "DATA",
      [
        "storage",
        "00c70750",
        null,
        "undefined *"
      ]
    ],
    [
      "005b571c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b5720",
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
- 005b5358 ["INT_ADD", "register:40f0:8", ["const:5b5358:8", "const:4:8"]]
- 005b5358 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b5708 ["INT_ADD", "register:40f0:8", ["const:5b5708:8", "const:4:8"]]
+ 005b5708 ["CALL", null, ["callee:00c58f30:8"]]
- 005b5360 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b5710 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5364 ["COPY", "tmp:0:8", ["const:780:8"]]
- 005b5364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-83b87dd128ae034553eb51e29c2ceb6b"></a>

### [`005b5378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5378.md) → [`005b5728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5728.md) FUN_005b5728

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
      "definition_site": "005b5734",
      "incomplete_value": false,
      "site": "005b5734",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5384",
      "incomplete_value": false,
      "site": "005b5384",
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
            "const:780:8"
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
      "005b5734",
      "DATA",
      [
        "storage",
        "00c6f780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5734",
      "DATA",
      [
        "storage",
        "00c70750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b537c ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b572c ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5380 ["COPY", "tmp:0:8", ["const:780:8"]]
- 005b5380 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5380 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5380 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b5730 ["COPY", "tmp:0:8", ["const:750:8"]]
+ 005b5730 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5730 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5730 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-43a1ee8a4945d0c3899a0e8e74be9ef3"></a>

### [`005b5394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5394.md) → [`005b5744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5744.md) FUN_005b5744

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`005b17f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b17f8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005b1ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1ba8.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b5398",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005b1ba8"
      ]
    ]
  ],
  "added": [
    [
      "005b5748",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005b1ba8"
      ]
    ]
  ]
}
~~~


<a id="compare-5c9ae5f60fa89ef71fece8edabb20349"></a>

### [`005b53c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b53c8.md) → [`005b5778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5778.md) FUN_005b5778

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
      "unmatched:005b53ec",
      "DATA",
      [
        "storage",
        "00c6f810",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b53f0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b53f4",
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
      "005b579c",
      "DATA",
      [
        "storage",
        "00c707e0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b57a0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b57a4",
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
- 005b53dc ["INT_ADD", "register:40f0:8", ["const:5b53dc:8", "const:4:8"]]
- 005b53dc ["CALL", null, ["callee:00c58f30:8"]]
+ 005b578c ["INT_ADD", "register:40f0:8", ["const:5b578c:8", "const:4:8"]]
+ 005b578c ["CALL", null, ["callee:00c58f30:8"]]
- 005b53e4 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b5794 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b53e8 ["COPY", "tmp:0:8", ["const:810:8"]]
- 005b53e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b53e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b53e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4a2db401df33107d7fde51139bfeb801"></a>

### [`005b53fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b53fc.md) → [`005b57ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b57ac.md) FUN_005b57ac

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
      "definition_site": "005b57b8",
      "incomplete_value": false,
      "site": "005b57b8",
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
            "const:7e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5408",
      "incomplete_value": false,
      "site": "005b5408",
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
      "005b57b8",
      "DATA",
      [
        "storage",
        "00c6f810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b57b8",
      "DATA",
      [
        "storage",
        "00c707e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5400 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b57b0 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5404 ["COPY", "tmp:0:8", ["const:810:8"]]
- 005b5404 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5404 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5404 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b57b4 ["COPY", "tmp:0:8", ["const:7e0:8"]]
+ 005b57b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b57b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b57b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a365e7def4c21ffbf7c4141b23010d96"></a>

### [`005b5418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5418.md) → [`005b57c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b57c8.md) FUN_005b57c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`005b216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b216c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005b251c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b251c.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-10c1f8a0014339ab18f173532dbfeb03"></a>

### [`005b5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5474.md) → [`005b5824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5824.md) FUN_005b5824

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
      "unmatched:005b5480",
      "DATA",
      [
        "storage",
        "00c6f8a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5830",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5474 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 005b5474 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 005b5474 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 005b5478 ["COPY", "register:4048:8", ["const:c6f000:8"]]
- 005b547c ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 005b547c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b547c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b547c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-69a76ae49545d297bc7dbd869ed3363e"></a>

### [`005b5494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5494.md) → [`005b5844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5844.md) FUN_005b5844

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b584c",
      "incomplete_value": false,
      "site": "005b5850",
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
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b549c",
      "incomplete_value": false,
      "site": "005b54a0",
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
            "const:8a0:8"
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
      "definition_site": "005b586c",
      "incomplete_value": true,
      "site": "005b5870",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "005b54bc",
      "incomplete_value": true,
      "site": "005b54c0",
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
      "005b5850",
      "DATA",
      [
        "storage",
        "00c6f8a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5850",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b54c0 ["INT_ADD", "register:40f0:8", ["const:5b54c0:8", "const:4:8"]]
- 005b54c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b5870 ["INT_ADD", "register:40f0:8", ["const:5b5870:8", "const:4:8"]]
+ 005b5870 ["CALL", null, ["callee:00c58f50:8"]]
- 005b5498 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b5848 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b549c ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 005b549c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b549c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b549c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b584c ["COPY", "tmp:0:8", ["const:870:8"]]
+ 005b584c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b584c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b584c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-62a3c76d350fb63db146b57d2c8c6d72"></a>

### [`005b54d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b54d4.md) → [`005b5884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5884.md) FUN_005b5884

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.08% / 新版 73.08%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b5524",
      "incomplete_value": true,
      "site": "005b5528",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005b5520",
      "incomplete_value": true,
      "site": "005b5528",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "005b5520",
      "incomplete_value": true,
      "site": "005b5528",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:18:8"
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
      "unmatched:005b54d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b54d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b5504",
      "DATA",
      [
        "storage",
        "00c6f8a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5884",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b5888",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b58b4",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5528 ["INT_ADD", "register:40f0:8", ["const:5b5528:8", "const:4:8"]]
- 005b5528 ["CALL", null, ["callee:0043be80:8"]]
+ 005b58d8 ["INT_ADD", "register:40f0:8", ["const:5b58d8:8", "const:4:8"]]
+ 005b58d8 ["CALL", null, ["callee:0043be80:8"]]
- 005b54d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b54d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b54d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b54d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b54d8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005b54d8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005b54d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005b54d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7a67b6cbd3fad9199a4082131d7065b4"></a>

### [`005b5550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5550.md) → [`005b5900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5900.md) FUN_005b5900

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b555c",
      "DATA",
      [
        "storage",
        "00c6f8a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b590c",
      "DATA",
      [
        "storage",
        "00c70870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5550 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005b5550 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b5554 ["COPY", "register:4048:8", ["const:c6f000:8"]]
- 005b5558 ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 005b5558 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5558 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5558 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-79d3b652b6fecbb7555591eb83bb9755"></a>

### [`005b5614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5614.md) → [`005b59c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b59c4.md) FUN_005b59c4

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
      "unmatched:005b5638",
      "DATA",
      [
        "storage",
        "00c6f930",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b563c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b5640",
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
      "005b59e8",
      "DATA",
      [
        "storage",
        "00c70900",
        null,
        "undefined *"
      ]
    ],
    [
      "005b59ec",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b59f0",
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
- 005b5628 ["INT_ADD", "register:40f0:8", ["const:5b5628:8", "const:4:8"]]
- 005b5628 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b59d8 ["INT_ADD", "register:40f0:8", ["const:5b59d8:8", "const:4:8"]]
+ 005b59d8 ["CALL", null, ["callee:00c58f30:8"]]
- 005b5630 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b59e0 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5634 ["COPY", "tmp:0:8", ["const:930:8"]]
- 005b5634 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5634 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5634 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc1428bab15183a168d6e8fa7a6683ad"></a>

### [`005b5648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5648.md) → [`005b59f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b59f8.md) FUN_005b59f8

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
      "unmatched:005b5654",
      "DATA",
      [
        "storage",
        "00c6f930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5a04",
      "DATA",
      [
        "storage",
        "00c70900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5648 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005b5648 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b564c ["COPY", "register:4048:8", ["const:c6f000:8"]]
- 005b5650 ["COPY", "tmp:0:8", ["const:930:8"]]
- 005b5650 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5650 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5650 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-278836f6479b8eb7975b54d1ec3b2dd7"></a>

### [`005b5664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5664.md) → [`005b5a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5a14.md) FUN_005b5a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`005b216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b216c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005b251c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b251c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005b5a34",
      "DATA",
      [
        "storage",
        "002d7368",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005b5a34",
      "DATA",
      [
        "storage",
        "002d73a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5678 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005b5678 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 005b5678 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
+ 005b5a28 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005b5a28 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 005b5a28 ["CBRANCH", null, ["local:b2:8", "tmp:1:1"]]
- 005b5680 ["COPY", "tmp:0:8", ["const:368:8"]]
- 005b5680 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5680 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5680 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b5a30 ["COPY", "tmp:0:8", ["const:3a8:8"]]
+ 005b5a30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5a30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5a30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b5688 ["BRANCH", null, ["local:b4:8"]]
+ 005b5a38 ["BRANCH", null, ["local:b3:8"]]
~~~


<a id="compare-7110e2cc6133d05637eb8150e01f7a35"></a>

### [`005b56cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b56cc.md) → [`005b5a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5a7c.md) FUN_005b5a7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b5a8c",
      "incomplete_value": false,
      "site": "005b5a90",
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
      "unmatched:005b56cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b56d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b56f0",
      "DATA",
      [
        "storage",
        "00c6f9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b5a80",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b5aa0",
      "DATA",
      [
        "storage",
        "00c70980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b56e0 ["INT_ADD", "register:40f0:8", ["const:5b56e0:8", "const:4:8"]]
- 005b56e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b5a90 ["INT_ADD", "register:40f0:8", ["const:5b5a90:8", "const:4:8"]]
+ 005b5a90 ["CALL", null, ["callee:00c58f30:8"]]
- 005b56cc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b56cc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b56cc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b56cc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b56d0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b56d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-bded801bc9d389d6029fc792f8b4f4ab"></a>

### [`005b5700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5700.md) → [`005b5ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5ab0.md) FUN_005b5ab0

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
      "definition_site": "005b5abc",
      "incomplete_value": false,
      "site": "005b5abc",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b570c",
      "incomplete_value": false,
      "site": "005b570c",
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
            "const:9b0:8"
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
      "005b5abc",
      "DATA",
      [
        "storage",
        "00c6f9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5abc",
      "DATA",
      [
        "storage",
        "00c70980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5704 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b5ab4 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5708 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 005b5708 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5708 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5708 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b5ab8 ["COPY", "tmp:0:8", ["const:980:8"]]
+ 005b5ab8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5ab8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5ab8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d77f0b04a16d3512d8462e261b9f7912"></a>

### [`005b5750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5750.md) → [`005b5b00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5b00.md) FUN_005b5b00

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
      "unmatched:005b5774",
      "DATA",
      [
        "storage",
        "00c6fa30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b5778",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b577c",
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
      "005b5b24",
      "DATA",
      [
        "storage",
        "00c70a00",
        null,
        "undefined *"
      ]
    ],
    [
      "005b5b28",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b5b2c",
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
- 005b5764 ["INT_ADD", "register:40f0:8", ["const:5b5764:8", "const:4:8"]]
- 005b5764 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b5b14 ["INT_ADD", "register:40f0:8", ["const:5b5b14:8", "const:4:8"]]
+ 005b5b14 ["CALL", null, ["callee:00c58f30:8"]]
- 005b576c ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b5b1c ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5770 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 005b5770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-edba763183858a71ae8f21f7521d787f"></a>

### [`005b5784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5784.md) → [`005b5b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5b34.md) FUN_005b5b34

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
      "definition_site": "005b5b40",
      "incomplete_value": false,
      "site": "005b5b40",
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
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5790",
      "incomplete_value": false,
      "site": "005b5790",
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
            "const:a30:8"
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
      "005b5b40",
      "DATA",
      [
        "storage",
        "00c6fa30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5b40",
      "DATA",
      [
        "storage",
        "00c70a00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5788 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b5b38 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b578c ["COPY", "tmp:0:8", ["const:a30:8"]]
- 005b578c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b578c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b578c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b5b3c ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 005b5b3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5b3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5b3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-879f59042293bacf37c9cd7acb92774b"></a>

### [`005b57a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b57a0.md) → [`005b5b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5b50.md) FUN_005b5b50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`005b216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b216c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005b251c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b251c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005b5b70",
      "DATA",
      [
        "storage",
        "002d735c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005b5b70",
      "DATA",
      [
        "storage",
        "002d739c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005b57b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005b57b4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 005b57b4 ["CBRANCH", null, ["local:b2:8", "tmp:1:1"]]
+ 005b5b64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005b5b64 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 005b5b64 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
- 005b57bc ["COPY", "tmp:0:8", ["const:35c:8"]]
- 005b57bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b57bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b57bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b5b6c ["COPY", "tmp:0:8", ["const:39c:8"]]
+ 005b5b6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5b6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5b6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b57c4 ["BRANCH", null, ["local:b3:8"]]
+ 005b5b74 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-eb180e2f6a6a757d30d3ef31b1bcf357"></a>

### [`005b5804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5804.md) → [`005b5bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5bb4.md) FUN_005b5bb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 46.15% / 新版 46.15%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b5808",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b5828",
      "DATA",
      [
        "storage",
        "00c6fab0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b582c",
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
      "005b5bb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b5bd8",
      "DATA",
      [
        "storage",
        "00c70a80",
        null,
        "undefined *"
      ]
    ],
    [
      "005b5bdc",
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
- 005b5808 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b5808 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b580c ["COPY", "register:40e8:8", ["register:8:8"]]
- 005b5818 ["INT_ADD", "register:40f0:8", ["const:5b5818:8", "const:4:8"]]
- 005b5818 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b5bc8 ["INT_ADD", "register:40f0:8", ["const:5b5bc8:8", "const:4:8"]]
+ 005b5bc8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-1017c4c410461191bb2e35f15577fa7e"></a>

### [`005b5838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5838.md) → [`005b5be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5be8.md) FUN_005b5be8

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
      "definition_site": "005b5bf4",
      "incomplete_value": false,
      "site": "005b5bf4",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5844",
      "incomplete_value": false,
      "site": "005b5844",
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
            "const:ab0:8"
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
      "005b5bf4",
      "DATA",
      [
        "storage",
        "00c6fab0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5bf4",
      "DATA",
      [
        "storage",
        "00c70a80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b583c ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b5bec ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5840 ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 005b5840 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5840 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5840 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b5bf0 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 005b5bf0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5bf0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5bf0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-817be4e2d0c95378e2082f57a419c7ed"></a>

### [`005b5854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5854.md) → [`005b5c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5c04.md) FUN_005b5c04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`005b5ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5ab4.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`005b5e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5e64.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 89.01% / 新版 89.01%

優先判定に残った影響 `call_target` 1件, `store_value` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b5c80",
      "incomplete_value": false,
      "site": "005b5c88",
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
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b58d0",
      "incomplete_value": false,
      "site": "005b58d8",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b5c30",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b5880",
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
      "005b5c30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:005b58ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b5c44"
      ]
    ],
    [
      "005b5c88",
      "DATA",
      [
        "storage",
        "00c6fb20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b5c30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "005b5c5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b5c44"
      ]
    ],
    [
      "005b5c88",
      "DATA",
      [
        "storage",
        "00c70af0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5880 ["INT_ADD", "register:40f0:8", ["const:5b5880:8", "const:4:8"]]
- 005b5880 ["CALL", null, ["ram:48cd38:8"]]
+ 005b5c30 ["INT_ADD", "register:40f0:8", ["const:5b5c30:8", "const:4:8"]]
+ 005b5c30 ["CALL", null, ["ram:48d058:8"]]
- 005b5884 ["INT_ADD", "register:40f0:8", ["const:5b5884:8", "const:4:8"]]
- 005b5884 ["CALL", null, ["callee:0048eb40:8"]]
+ 005b5c34 ["INT_ADD", "register:40f0:8", ["const:5b5c34:8", "const:4:8"]]
+ 005b5c34 ["CALL", null, ["callee:0048eb40:8"]]
- 005b588c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005b588c ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 005b5c3c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005b5c3c ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
~~~


<a id="compare-9f824bc25d8cee6616e120ffd696f177"></a>

### [`005b5a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5a74.md) → [`005b5e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5e24.md) FUN_005b5e24

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
      "definition_site": "005b5e28",
      "incomplete_value": false,
      "site": "005b5e2c",
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
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5a78",
      "incomplete_value": false,
      "site": "005b5a7c",
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
      "005b5e2c",
      "DATA",
      [
        "storage",
        "00c6fb20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b5e2c",
      "DATA",
      [
        "storage",
        "00c70af0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5a74 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b5e24 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5a78 ["COPY", "tmp:0:8", ["const:b20:8"]]
- 005b5a78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5a78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5a78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b5e28 ["COPY", "tmp:0:8", ["const:af0:8"]]
+ 005b5e28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5e28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5e28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-92ba67f9fd80ccadc1b6d310fd56d4f8"></a>

### [`005b5a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5a84.md) → [`005b5e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5e34.md) FUN_005b5e34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b5a9c",
      "DATA",
      [
        "storage",
        "00c6fb20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b5e4c",
      "DATA",
      [
        "storage",
        "00c70af0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5a90 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b5e40 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5a94 ["COPY", "tmp:0:8", ["const:b20:8"]]
- 005b5a94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5a94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5a94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b5a98 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-549c38287468686bc5e1310834e74624"></a>

### [`005b5ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5ad0.md) → [`005b5e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5e80.md) FUN_005b5e80

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
      "definition_site": "005b5ea4",
      "incomplete_value": false,
      "site": "005b5ea4",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5af4",
      "incomplete_value": false,
      "site": "005b5af4",
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
            "const:b80:8"
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
      "005b5ea4",
      "DATA",
      [
        "storage",
        "00c6fb80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5ea4",
      "DATA",
      [
        "storage",
        "00c70b50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5ae4 ["INT_ADD", "register:40f0:8", ["const:5b5ae4:8", "const:4:8"]]
- 005b5ae4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b5e94 ["INT_ADD", "register:40f0:8", ["const:5b5e94:8", "const:4:8"]]
+ 005b5e94 ["CALL", null, ["callee:00c58f30:8"]]
- 005b5aec ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b5e9c ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5af0 ["COPY", "tmp:0:8", ["const:b80:8"]]
- 005b5af0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5af0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5af0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b5ea0 ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 005b5ea0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5ea0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b5ea0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-66115440ca2392a045eaecfa69051130"></a>

### [`005b5b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5b04.md) → [`005b5eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5eb4.md) FUN_005b5eb4

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
      "definition_site": "005b5ec0",
      "incomplete_value": false,
      "site": "005b5ec0",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5b10",
      "incomplete_value": false,
      "site": "005b5b10",
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
            "const:b80:8"
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
      "005b5ec0",
      "DATA",
      [
        "storage",
        "00c6fb80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5ec0",
      "DATA",
      [
        "storage",
        "00c70b50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5b08 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b5eb8 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5b0c ["COPY", "tmp:0:8", ["const:b80:8"]]
- 005b5b0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5b0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5b0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b5ebc ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 005b5ebc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5ebc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b5ebc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9042d302888e0885d5f34f0f28e15d9a"></a>

### [`005b5b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5b20.md) → [`005b5ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5ed0.md) FUN_005b5ed0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`005b2330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b2330.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`005b26e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b26e0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b5eec",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b5b3c",
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
      "005b5eec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "005b5eec",
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
- 005b5b3c ["INT_ADD", "register:40f0:8", ["const:5b5b3c:8", "const:4:8"]]
- 005b5b3c ["CALL", null, ["ram:48cd38:8"]]
+ 005b5eec ["INT_ADD", "register:40f0:8", ["const:5b5eec:8", "const:4:8"]]
+ 005b5eec ["CALL", null, ["ram:48d058:8"]]
- 005b5b40 ["INT_ADD", "register:40f0:8", ["const:5b5b40:8", "const:4:8"]]
- 005b5b40 ["CALL", null, ["callee:0048eb40:8"]]
+ 005b5ef0 ["INT_ADD", "register:40f0:8", ["const:5b5ef0:8", "const:4:8"]]
+ 005b5ef0 ["CALL", null, ["callee:0048eb40:8"]]
~~~


<a id="compare-a9de26e44df39bcc1eb9a64da28c6e04"></a>

### [`005b5b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5b94.md) → [`005b5f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5f44.md) FUN_005b5f44

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
      "unmatched:005b5bb8",
      "DATA",
      [
        "storage",
        "00c6fc10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5f68",
      "DATA",
      [
        "storage",
        "00c70be0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5ba8 ["INT_ADD", "register:40f0:8", ["const:5b5ba8:8", "const:4:8"]]
- 005b5ba8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b5f58 ["INT_ADD", "register:40f0:8", ["const:5b5f58:8", "const:4:8"]]
+ 005b5f58 ["CALL", null, ["callee:00c58f30:8"]]
- 005b5bb0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b5f60 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5bb4 ["COPY", "tmp:0:8", ["const:c10:8"]]
- 005b5bb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5bb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5bb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3911b4c7e5a3260656e32c39d7e0ec20"></a>

### [`005b5bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5bcc.md) → [`005b5f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5f7c.md) FUN_005b5f7c

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
      "unmatched:005b5bd4",
      "DATA",
      [
        "storage",
        "00c6fc10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b5f84",
      "DATA",
      [
        "storage",
        "00c70be0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5bcc ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005b5bd0 ["COPY", "tmp:0:8", ["const:c10:8"]]
- 005b5bd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5bd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5bd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b5bd4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 005b5bd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-90cc70734c501ceb923c7561603729f6"></a>

### [`005b5c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5c3c.md) → [`005b5fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5fec.md) FUN_005b5fec

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
    "new": {
      "definition_site": "005b5ffc",
      "incomplete_value": false,
      "site": "005b6000",
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
      "unmatched:005b5c60",
      "DATA",
      [
        "storage",
        "00c6fc90",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b5c64",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b5c68",
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
      "005b6010",
      "DATA",
      [
        "storage",
        "00c70c60",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6014",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6018",
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
- 005b5c50 ["INT_ADD", "register:40f0:8", ["const:5b5c50:8", "const:4:8"]]
- 005b5c50 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6000 ["INT_ADD", "register:40f0:8", ["const:5b6000:8", "const:4:8"]]
+ 005b6000 ["CALL", null, ["callee:00c58f30:8"]]
- 005b5c58 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b6008 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5c5c ["COPY", "tmp:0:8", ["const:c90:8"]]
- 005b5c5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5c5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5c5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-13b0a49c55bc077da307a9d6ef989cb7"></a>

### [`005b5c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5c70.md) → [`005b6020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6020.md) FUN_005b6020

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
      "definition_site": "005b602c",
      "incomplete_value": false,
      "site": "005b602c",
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
            "const:c60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5c7c",
      "incomplete_value": false,
      "site": "005b5c7c",
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
            "const:c90:8"
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
      "005b602c",
      "DATA",
      [
        "storage",
        "00c6fc90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b602c",
      "DATA",
      [
        "storage",
        "00c70c60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5c74 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b6024 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5c78 ["COPY", "tmp:0:8", ["const:c90:8"]]
- 005b5c78 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5c78 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5c78 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6028 ["COPY", "tmp:0:8", ["const:c60:8"]]
+ 005b6028 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6028 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6028 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-bfdc94b594fa0ddaf04138c2743fc847"></a>

### [`005b5cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5cd0.md) → [`005b6080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6080.md) FUN_005b6080

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
      "definition_site": "005b60a4",
      "incomplete_value": false,
      "site": "005b60a4",
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
            "const:ce0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5cf4",
      "incomplete_value": false,
      "site": "005b5cf4",
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
            "const:d10:8"
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
      "005b60a4",
      "DATA",
      [
        "storage",
        "00c6fd10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b60a4",
      "DATA",
      [
        "storage",
        "00c70ce0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5ce4 ["INT_ADD", "register:40f0:8", ["const:5b5ce4:8", "const:4:8"]]
- 005b5ce4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6094 ["INT_ADD", "register:40f0:8", ["const:5b6094:8", "const:4:8"]]
+ 005b6094 ["CALL", null, ["callee:00c58f30:8"]]
- 005b5cec ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b609c ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5cf0 ["COPY", "tmp:0:8", ["const:d10:8"]]
- 005b5cf0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5cf0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5cf0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b60a0 ["COPY", "tmp:0:8", ["const:ce0:8"]]
+ 005b60a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b60a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b60a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-841b17bdd28961d0580b04d5277a3342"></a>

### [`005b5d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5d04.md) → [`005b60b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b60b4.md) FUN_005b60b4

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
      "definition_site": "005b60c0",
      "incomplete_value": false,
      "site": "005b60c0",
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
            "const:ce0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5d10",
      "incomplete_value": false,
      "site": "005b5d10",
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
            "const:d10:8"
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
      "005b60c0",
      "DATA",
      [
        "storage",
        "00c6fd10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b60c0",
      "DATA",
      [
        "storage",
        "00c70ce0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5d08 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b60b8 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5d0c ["COPY", "tmp:0:8", ["const:d10:8"]]
- 005b5d0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5d0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5d0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b60bc ["COPY", "tmp:0:8", ["const:ce0:8"]]
+ 005b60bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b60bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b60bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ac90dd99f1903ef1be4092e637e22f21"></a>

### [`005b5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5df8.md) → [`005b61a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b61a8.md) FUN_005b61a8

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
      "definition_site": "005b61cc",
      "incomplete_value": false,
      "site": "005b61cc",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5e1c",
      "incomplete_value": false,
      "site": "005b5e1c",
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
      "005b61cc",
      "DATA",
      [
        "storage",
        "00c6fd90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b61cc",
      "DATA",
      [
        "storage",
        "00c70d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5e0c ["INT_ADD", "register:40f0:8", ["const:5b5e0c:8", "const:4:8"]]
- 005b5e0c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b61bc ["INT_ADD", "register:40f0:8", ["const:5b61bc:8", "const:4:8"]]
+ 005b61bc ["CALL", null, ["callee:00c58f30:8"]]
- 005b5e14 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b61c4 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5e18 ["COPY", "tmp:0:8", ["const:d90:8"]]
- 005b5e18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5e18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5e18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b61c8 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 005b61c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b61c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b61c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-569ea1f2d0878b5fa4dad62aee9a75f6"></a>

### [`005b5e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5e2c.md) → [`005b61dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b61dc.md) FUN_005b61dc

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
      "definition_site": "005b61e8",
      "incomplete_value": false,
      "site": "005b61e8",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b5e38",
      "incomplete_value": false,
      "site": "005b5e38",
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
      "005b61e8",
      "DATA",
      [
        "storage",
        "00c6fd90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b61e8",
      "DATA",
      [
        "storage",
        "00c70d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5e30 ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b61e0 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b5e34 ["COPY", "tmp:0:8", ["const:d90:8"]]
- 005b5e34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b5e34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b5e34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b61e4 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 005b61e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b61e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b61e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4cfd7864cc2c388ec5653331ae9953ea"></a>

### [`005b5e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5e90.md) → [`005b6240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6240.md) FUN_005b6240

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b5eb4",
      "DATA",
      [
        "storage",
        "00c6fe10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b5ebc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b5ec0",
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
      "005b6264",
      "DATA",
      [
        "storage",
        "00c70de0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b626c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6270",
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
- 005b5ea4 ["INT_ADD", "register:40f0:8", ["const:5b5ea4:8", "const:4:8"]]
- 005b5ea4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6254 ["INT_ADD", "register:40f0:8", ["const:5b6254:8", "const:4:8"]]
+ 005b6254 ["CALL", null, ["callee:00c58f30:8"]]
- 005b5eac ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b625c ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b5eb0 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 005b5eb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5eb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5eb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-67dd7af16ccf9d07bfd10d35aa0c34a3"></a>

### [`005b5ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5ec8.md) → [`005b6278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6278.md) FUN_005b6278

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
      "unmatched:005b5ed0",
      "DATA",
      [
        "storage",
        "00c6fe10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6280",
      "DATA",
      [
        "storage",
        "00c70de0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5ec8 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005b5ecc ["COPY", "tmp:0:8", ["const:e10:8"]]
- 005b5ecc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b5ecc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b5ecc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b5ed0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 005b5ed0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-dc60395f0bdb169a21b61e5e081cee2d"></a>

### [`005b5ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5ee8.md) → [`005b6298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6298.md) FUN_005b6298

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005b3180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3180.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005b3530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3530.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b62e8",
      "incomplete_value": true,
      "site": "005b62ec",
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
      "definition_site": "005b62e4",
      "incomplete_value": true,
      "site": "005b62ec",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b62e4",
      "incomplete_value": true,
      "site": "005b62ec",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:005b5f2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b5f4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005b3180"
      ]
    ],
    [
      "unmatched:005b5f6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b6360"
      ]
    ]
  ],
  "added": [
    [
      "005b62dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005b62fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005b3530"
      ]
    ],
    [
      "005b631c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b6360"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b5f3c ["INT_ADD", "register:40f0:8", ["const:5b5f3c:8", "const:4:8"]]
- 005b5f3c ["CALL", null, ["callee:0043be80:8"]]
+ 005b62ec ["INT_ADD", "register:40f0:8", ["const:5b62ec:8", "const:4:8"]]
+ 005b62ec ["CALL", null, ["callee:0043be80:8"]]
- 005b5f0c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005b5f0c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 005b62bc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005b62bc ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 005b5f1c ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 005b5f1c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005b5f1c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005b5f1c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 005b62cc ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 005b62cc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005b62cc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005b62cc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-3c1ab7e99efd763dc20b8f59d4e0c7d5"></a>

### [`005b5fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5fe4.md) → [`005b6394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6394.md) FUN_005b6394

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b6008",
      "DATA",
      [
        "storage",
        "00c6fea0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b6010",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6014",
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
      "005b63b8",
      "DATA",
      [
        "storage",
        "00c70e70",
        null,
        "undefined *"
      ]
    ],
    [
      "005b63c0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b63c4",
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
- 005b5ff8 ["INT_ADD", "register:40f0:8", ["const:5b5ff8:8", "const:4:8"]]
- 005b5ff8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b63a8 ["INT_ADD", "register:40f0:8", ["const:5b63a8:8", "const:4:8"]]
+ 005b63a8 ["CALL", null, ["callee:00c58f30:8"]]
- 005b6000 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b63b0 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b6004 ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 005b6004 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6004 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6004 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b79e7ce24f5b3c122fa4062538bbdb9f"></a>

### [`005b601c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b601c.md) → [`005b63cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b63cc.md) FUN_005b63cc

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
      "unmatched:005b6024",
      "DATA",
      [
        "storage",
        "00c6fea0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b63d4",
      "DATA",
      [
        "storage",
        "00c70e70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b601c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005b6020 ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 005b6020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005b6024 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 005b6024 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-01982b315aec3478997ad964e58d5237"></a>

### [`005b603c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b603c.md) → [`005b63ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b63ec.md) FUN_005b63ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005b3388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3388.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005b3738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3738.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.70% / 新版 80.70%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b6058",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005b6448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005b60e8"
      ]
    ],
    [
      "005b646c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005b60e8"
      ]
    ]
  ],
  "added": [
    [
      "005b6408",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005b6448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b6498"
      ]
    ],
    [
      "005b646c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005b6498"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6054 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:28:8"]]
- 005b6054 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005b6058 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 005b6058 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 005b605c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 005b605c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2fb2ce12e73af2a12d8e705538427a16"></a>

### [`005b614c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b614c.md) → [`005b64fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b64fc.md) FUN_005b64fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b651c",
      "incomplete_value": false,
      "site": "005b6520",
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
            "const:f00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b616c",
      "incomplete_value": false,
      "site": "005b6170",
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
            "const:f30:8"
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
      "005b6520",
      "DATA",
      [
        "storage",
        "00c6ff30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6520",
      "DATA",
      [
        "storage",
        "00c70f00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6154 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005b6160 ["INT_ADD", "register:40f0:8", ["const:5b6160:8", "const:4:8"]]
- 005b6160 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6510 ["INT_ADD", "register:40f0:8", ["const:5b6510:8", "const:4:8"]]
+ 005b6510 ["CALL", null, ["callee:00c58f30:8"]]
- 005b6168 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b6518 ["COPY", "register:4040:8", ["const:c70000:8"]]
~~~


<a id="compare-91823c3f20c65d6f702f80259a878303"></a>

### [`005b6184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6184.md) → [`005b6534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6534.md) FUN_005b6534

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
      "definition_site": "005b6538",
      "incomplete_value": false,
      "site": "005b653c",
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
            "const:f00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6188",
      "incomplete_value": false,
      "site": "005b618c",
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
            "const:f30:8"
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
      "005b653c",
      "DATA",
      [
        "storage",
        "00c6ff30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b653c",
      "DATA",
      [
        "storage",
        "00c70f00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6184 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005b6534 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005b6188 ["COPY", "tmp:0:8", ["const:f30:8"]]
- 005b6188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b6538 ["COPY", "tmp:0:8", ["const:f00:8"]]
+ 005b6538 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6538 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6538 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3e89e8e7631828352bec2d442748c2d9"></a>

### [`005b61e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b61e4.md) → [`005b6594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6594.md) FUN_005b6594

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
      "unmatched:005b61e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b61e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6208",
      "DATA",
      [
        "storage",
        "00c6ffb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6594",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b6598",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b65b8",
      "DATA",
      [
        "storage",
        "00c70f80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b61e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b61e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b61e4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b61e4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b61e8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b61e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b61ec ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-32f2ff7ef25f11d46e282ae169d12a33"></a>

### [`005b6218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6218.md) → [`005b65c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b65c8.md) FUN_005b65c8

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
      "definition_site": "005b65d4",
      "incomplete_value": false,
      "site": "005b65d4",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6224",
      "incomplete_value": false,
      "site": "005b6224",
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
            "const:fb0:8"
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
      "005b65d4",
      "DATA",
      [
        "storage",
        "00c6ffb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b65d4",
      "DATA",
      [
        "storage",
        "00c70f80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b621c ["COPY", "register:4048:8", ["const:c6f000:8"]]
+ 005b65cc ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b6220 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 005b6220 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b6220 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b6220 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b65d0 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 005b65d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b65d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b65d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-68e4c273db6eeb3305796c26032caa20"></a>

### [`005b6234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6234.md) → [`005b65e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b65e4.md) FUN_005b65e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`005b216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b216c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005b251c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b251c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005b6604",
      "DATA",
      [
        "storage",
        "002d7368",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005b6604",
      "DATA",
      [
        "storage",
        "002d73a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6248 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005b6248 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 005b6248 ["CBRANCH", null, ["local:b2:8", "tmp:1:1"]]
+ 005b65f8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005b65f8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 005b65f8 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
- 005b6250 ["COPY", "tmp:0:8", ["const:368:8"]]
- 005b6250 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b6250 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b6250 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6600 ["COPY", "tmp:0:8", ["const:3a8:8"]]
+ 005b6600 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6600 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6600 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005b6258 ["BRANCH", null, ["local:b3:8"]]
+ 005b6608 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-a5b8159246c180f8228e13cfeab61137"></a>

### [`005b6298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6298.md) → [`005b6648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6648.md) FUN_005b6648

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
      "unmatched:005b62bc",
      "DATA",
      [
        "storage",
        "00c70030",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b62c0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b62c4",
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
      "005b666c",
      "DATA",
      [
        "storage",
        "00c71000",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6670",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6674",
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
- 005b62ac ["INT_ADD", "register:40f0:8", ["const:5b62ac:8", "const:4:8"]]
- 005b62ac ["CALL", null, ["callee:00c58f30:8"]]
+ 005b665c ["INT_ADD", "register:40f0:8", ["const:5b665c:8", "const:4:8"]]
+ 005b665c ["CALL", null, ["callee:00c58f30:8"]]
- 005b62b4 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6664 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b62b8 ["COPY", "tmp:0:8", ["const:30:8"]]
- 005b62b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b62b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b62b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-08bd0a72d17913167c46e2eaabcfa50b"></a>

### [`005b62cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b62cc.md) → [`005b667c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b667c.md) FUN_005b667c

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
      "definition_site": "005b6688",
      "incomplete_value": false,
      "site": "005b6688",
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
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b62d8",
      "incomplete_value": false,
      "site": "005b62d8",
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
            "const:30:8"
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
      "005b6688",
      "DATA",
      [
        "storage",
        "00c70030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6688",
      "DATA",
      [
        "storage",
        "00c71000",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b62d0 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b6680 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b62d4 ["COPY", "tmp:0:8", ["const:30:8"]]
- 005b62d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b62d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b62d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6684 ["COPY", "tmp:0:8", ["const:0:8"]]
+ 005b6684 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6684 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6684 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-21408d6ffdf80d0231927d8b79f1b86e"></a>

### [`005b62e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b62e8.md) → [`005b6698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6698.md) FUN_005b6698

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.72% / 新版 83.72%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b62ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b62f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6300",
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
      "005b669c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b66a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b66b0",
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
- 005b62e8 ["INT_SUB", "register:8:8", ["register:8:8", "const:30:8"]]
- 005b62ec ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b62ec ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b62ec ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005b62ec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005b62f0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 005b62f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-58b19818681c8d2b02e70d7e61248cb7"></a>

### [`005b63c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b63c0.md) → [`005b6770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6770.md) FUN_005b6770

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
      "definition_site": "005b6794",
      "incomplete_value": false,
      "site": "005b6794",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b63e4",
      "incomplete_value": false,
      "site": "005b63e4",
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
            "const:b0:8"
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
      "005b6794",
      "DATA",
      [
        "storage",
        "00c700b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6794",
      "DATA",
      [
        "storage",
        "00c71080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b63d4 ["INT_ADD", "register:40f0:8", ["const:5b63d4:8", "const:4:8"]]
- 005b63d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6784 ["INT_ADD", "register:40f0:8", ["const:5b6784:8", "const:4:8"]]
+ 005b6784 ["CALL", null, ["callee:00c58f30:8"]]
- 005b63dc ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b678c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b63e0 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 005b63e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b63e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b63e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b6790 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 005b6790 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6790 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6790 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7fffb36cceec960780f8525a8cdab62c"></a>

### [`005b63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b63f4.md) → [`005b67a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b67a4.md) FUN_005b67a4

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
      "definition_site": "005b67b0",
      "incomplete_value": false,
      "site": "005b67b0",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6400",
      "incomplete_value": false,
      "site": "005b6400",
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
            "const:b0:8"
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
      "005b67b0",
      "DATA",
      [
        "storage",
        "00c700b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b67b0",
      "DATA",
      [
        "storage",
        "00c71080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b63f8 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b67a8 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b63fc ["COPY", "tmp:0:8", ["const:b0:8"]]
- 005b63fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b63fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b63fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b67ac ["COPY", "tmp:0:8", ["const:80:8"]]
+ 005b67ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b67ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b67ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d78174ff5aa063905544f08ded07b421"></a>

### [`005b6458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6458.md) → [`005b6808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6808.md) FUN_005b6808

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
      "definition_site": "005b682c",
      "incomplete_value": false,
      "site": "005b682c",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b647c",
      "incomplete_value": false,
      "site": "005b647c",
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
            "const:130:8"
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
      "005b682c",
      "DATA",
      [
        "storage",
        "00c70130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b682c",
      "DATA",
      [
        "storage",
        "00c71100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b646c ["INT_ADD", "register:40f0:8", ["const:5b646c:8", "const:4:8"]]
- 005b646c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b681c ["INT_ADD", "register:40f0:8", ["const:5b681c:8", "const:4:8"]]
+ 005b681c ["CALL", null, ["callee:00c58f30:8"]]
- 005b6474 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6824 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6478 ["COPY", "tmp:0:8", ["const:130:8"]]
- 005b6478 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6478 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6478 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b6828 ["COPY", "tmp:0:8", ["const:100:8"]]
+ 005b6828 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6828 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6828 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-153119773c1149079a4929439be14cde"></a>

### [`005b648c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b648c.md) → [`005b683c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b683c.md) FUN_005b683c

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
      "definition_site": "005b6848",
      "incomplete_value": false,
      "site": "005b6848",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6498",
      "incomplete_value": false,
      "site": "005b6498",
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
      "005b6848",
      "DATA",
      [
        "storage",
        "00c70130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6848",
      "DATA",
      [
        "storage",
        "00c71100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6490 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b6840 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b6494 ["COPY", "tmp:0:8", ["const:130:8"]]
- 005b6494 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b6494 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b6494 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6844 ["COPY", "tmp:0:8", ["const:100:8"]]
+ 005b6844 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6844 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6844 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d82ac0ee374d901ba9cb608fec519fa5"></a>

### [`005b64a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b64a8.md) → [`005b6858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6858.md) FUN_005b6858

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0053f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f058.md) [`005b66cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b66cc.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0053f378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f378.md) [`005b6a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6a7c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b68d4",
      "incomplete_value": false,
      "site": "005b68ec",
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
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6524",
      "incomplete_value": false,
      "site": "005b653c",
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
            "const:1b0:8"
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
      "005b68ec",
      "DATA",
      [
        "storage",
        "00c701b0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005b65a0",
      "READ",
      [
        "storage",
        "00c701c0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b65a4",
      "COMPUTED_CALL",
      [
        "mapped_function",
        "005b6a7c"
      ]
    ]
  ],
  "added": [
    [
      "005b68ec",
      "DATA",
      [
        "storage",
        "00c71180",
        null,
        "pointer"
      ]
    ],
    [
      "005b6950",
      "READ",
      [
        "storage",
        "00c71190",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6954",
      "COMPUTED_CALL",
      [
        "mapped_function",
        "005b6a7c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b64d4 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 005b64d4 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 005b6884 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 005b6884 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 005b64f8 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
+ 005b68a8 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
- 005b6504 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005b6504 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 005b6504 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 005b6504 ["CBRANCH", null, ["local:b10:8", "tmp:2:1"]]
+ 005b68b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005b68b4 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 005b68b4 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 005b68b4 ["CBRANCH", null, ["local:b11:8", "tmp:2:1"]]
~~~


<a id="compare-50461d79367340b7d69bfcd521c6161f"></a>

### [`005b663c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b663c.md) → [`005b69ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b69ec.md) FUN_005b69ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b663c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6640",
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
      "005b69ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b69f0",
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
- 005b663c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b663c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b663c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b663c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b6640 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b6640 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b6644 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-8c74079087b3d13b581db284813c4609"></a>

### [`005b668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b668c.md) → [`005b6a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6a3c.md) FUN_005b6a3c

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
      "definition_site": "005b6a40",
      "incomplete_value": false,
      "site": "005b6a44",
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
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6690",
      "incomplete_value": false,
      "site": "005b6694",
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
            "const:1b0:8"
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
      "005b6a44",
      "DATA",
      [
        "storage",
        "00c701b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b6a44",
      "DATA",
      [
        "storage",
        "00c71180",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b668c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6a3c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6690 ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 005b6690 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6690 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6690 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005b6a40 ["COPY", "tmp:0:8", ["const:180:8"]]
+ 005b6a40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6a40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005b6a40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8699f38b8ee4c8661f04c6db53b08a89"></a>

### [`005b669c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b669c.md) → [`005b6a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6a4c.md) FUN_005b6a4c

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
      "unmatched:005b669c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b66a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b66b4",
      "DATA",
      [
        "storage",
        "00c701b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005b6a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b6a50",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6a64",
      "DATA",
      [
        "storage",
        "00c71180",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b669c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b669c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b669c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005b669c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b66a0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b66a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005b66a4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-1522750e3e7f1a30969126e21eec5097"></a>

### [`005b66cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b66cc.md) → [`005b6a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6a7c.md) FUN_005b6a7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005b64a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b64a8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b6858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6858.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005b66cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b66d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b66d4",
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
      "005b6a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b6a80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005b6a84",
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
- 005b66cc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b66cc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b66cc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005b66cc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005b66d0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005b66d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 005b66d4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005b66d4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005b66d4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005b66d4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-509ad8fd46cd5f822a9c3a75829614d3"></a>

### [`005b6750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6750.md) → [`005b6b00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6b00.md) FUN_005b6b00

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
      "unmatched:005b6774",
      "DATA",
      [
        "storage",
        "00c70210",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b6778",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b677c",
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
      "005b6b24",
      "DATA",
      [
        "storage",
        "00c711e0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6b28",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6b2c",
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
- 005b6764 ["INT_ADD", "register:40f0:8", ["const:5b6764:8", "const:4:8"]]
- 005b6764 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6b14 ["INT_ADD", "register:40f0:8", ["const:5b6b14:8", "const:4:8"]]
+ 005b6b14 ["CALL", null, ["callee:00c58f30:8"]]
- 005b676c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6b1c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6770 ["COPY", "tmp:0:8", ["const:210:8"]]
- 005b6770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d279dbecb388c9b7590988007b0a68f8"></a>

### [`005b6784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6784.md) → [`005b6b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6b34.md) FUN_005b6b34

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
      "definition_site": "005b6b40",
      "incomplete_value": false,
      "site": "005b6b40",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6790",
      "incomplete_value": false,
      "site": "005b6790",
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
            "const:210:8"
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
      "005b6b40",
      "DATA",
      [
        "storage",
        "00c70210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6b40",
      "DATA",
      [
        "storage",
        "00c711e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6788 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b6b38 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b678c ["COPY", "tmp:0:8", ["const:210:8"]]
- 005b678c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b678c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b678c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6b3c ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 005b6b3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6b3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6b3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-398c2a86a2c89fda638f8dbd80539a68"></a>

### [`005b67e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b67e8.md) → [`005b6b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6b98.md) FUN_005b6b98

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
      "unmatched:005b680c",
      "DATA",
      [
        "storage",
        "00c70290",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b6810",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6814",
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
      "005b6bbc",
      "DATA",
      [
        "storage",
        "00c71260",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6bc0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6bc4",
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
- 005b67fc ["INT_ADD", "register:40f0:8", ["const:5b67fc:8", "const:4:8"]]
- 005b67fc ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6bac ["INT_ADD", "register:40f0:8", ["const:5b6bac:8", "const:4:8"]]
+ 005b6bac ["CALL", null, ["callee:00c58f30:8"]]
- 005b6804 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6bb4 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6808 ["COPY", "tmp:0:8", ["const:290:8"]]
- 005b6808 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6808 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6808 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-69f20845dd22db427032355d4eea5735"></a>

### [`005b681c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b681c.md) → [`005b6bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6bcc.md) FUN_005b6bcc

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
      "unmatched:005b6828",
      "DATA",
      [
        "storage",
        "00c70290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6bd8",
      "DATA",
      [
        "storage",
        "00c71260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b681c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005b681c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005b6820 ["COPY", "register:4048:8", ["const:c70000:8"]]
- 005b6824 ["COPY", "tmp:0:8", ["const:290:8"]]
- 005b6824 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b6824 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b6824 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2a67d1a36c960de0bffc167760ede271"></a>

### [`005b6870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6870.md) → [`005b6c20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6c20.md) FUN_005b6c20

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
      "unmatched:005b6894",
      "DATA",
      [
        "storage",
        "00c70320",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b6898",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b689c",
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
      "005b6c44",
      "DATA",
      [
        "storage",
        "00c712f0",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6c48",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6c4c",
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
- 005b6884 ["INT_ADD", "register:40f0:8", ["const:5b6884:8", "const:4:8"]]
- 005b6884 ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6c34 ["INT_ADD", "register:40f0:8", ["const:5b6c34:8", "const:4:8"]]
+ 005b6c34 ["CALL", null, ["callee:00c58f30:8"]]
- 005b688c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6c3c ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6890 ["COPY", "tmp:0:8", ["const:320:8"]]
- 005b6890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-164c28b8bab8af4b49e3d248b1476d3c"></a>

### [`005b68a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b68a4.md) → [`005b6c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6c54.md) FUN_005b6c54

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
      "definition_site": "005b6c60",
      "incomplete_value": false,
      "site": "005b6c60",
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
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b68b0",
      "incomplete_value": false,
      "site": "005b68b0",
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
      "005b6c60",
      "DATA",
      [
        "storage",
        "00c70320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6c60",
      "DATA",
      [
        "storage",
        "00c712f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b68a8 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b6c58 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b68ac ["COPY", "tmp:0:8", ["const:320:8"]]
- 005b68ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b68ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b68ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6c5c ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 005b6c5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6c5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6c5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-956af22bbcf8b143d00e2a8f7c662043"></a>

### [`005b6908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6908.md) → [`005b6cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6cb8.md) FUN_005b6cb8

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
    "new": {
      "definition_site": "005b6cc8",
      "incomplete_value": false,
      "site": "005b6ccc",
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
      "unmatched:005b692c",
      "DATA",
      [
        "storage",
        "00c703a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005b6930",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6934",
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
      "005b6cdc",
      "DATA",
      [
        "storage",
        "00c71370",
        null,
        "undefined *"
      ]
    ],
    [
      "005b6ce0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005b6ce4",
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
- 005b691c ["INT_ADD", "register:40f0:8", ["const:5b691c:8", "const:4:8"]]
- 005b691c ["CALL", null, ["callee:00c58f30:8"]]
+ 005b6ccc ["INT_ADD", "register:40f0:8", ["const:5b6ccc:8", "const:4:8"]]
+ 005b6ccc ["CALL", null, ["callee:00c58f30:8"]]
- 005b6924 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 005b6cd4 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 005b6928 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 005b6928 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005b6928 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005b6928 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ddb0b0f6002f134061d180d557bf2a1b"></a>

### [`005b693c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b693c.md) → [`005b6cec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6cec.md) FUN_005b6cec

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
      "definition_site": "005b6cf8",
      "incomplete_value": false,
      "site": "005b6cf8",
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
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005b6948",
      "incomplete_value": false,
      "site": "005b6948",
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
      "005b6cf8",
      "DATA",
      [
        "storage",
        "00c703a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005b6cf8",
      "DATA",
      [
        "storage",
        "00c71370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005b6940 ["COPY", "register:4048:8", ["const:c70000:8"]]
+ 005b6cf0 ["COPY", "register:4048:8", ["const:c71000:8"]]
- 005b6944 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 005b6944 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005b6944 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005b6944 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005b6cf4 ["COPY", "tmp:0:8", ["const:370:8"]]
+ 005b6cf4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6cf4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005b6cf4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e3ef590f701a2fbfe95578e32d0985b8"></a>

### [`005b6958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b6958.md) → [`005b6d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6d08.md) FUN_005b6d08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005b0c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0c1c.md) [`005b5254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5254.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005b0fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0fcc.md) [`005b5604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5604.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 69.88% / 新版 69.88%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b6d9c",
      "incomplete_value": true,
      "site": "005b6da8",
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
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b6d98",
      "incomplete_value": true,
      "site": "005b6da8",
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
      "unmatched:005b695c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6960",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005b6964",
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
      "005b6d0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005b6d10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005b6d14",
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
- 005b69f8 ["INT_ADD", "register:40f0:8", ["const:5b69f8:8", "const:4:8"]]
- 005b69f8 ["CALL", null, ["callee:005b0fcc:8"]]
+ 005b6da8 ["INT_ADD", "register:40f0:8", ["const:5b6da8:8", "const:4:8"]]
+ 005b6da8 ["CALL", null, ["callee:005b0fcc:8"]]
- 005b6958 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 005b695c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005b695c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005b695c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005b695c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


