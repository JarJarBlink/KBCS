# v16.0.2 → v16.0.3 · 最優先の変更候補 (78)

[一覧の目次](README.md)

<a id="compare-1a08b8c3ddab191ef5240227d7da107b"></a>

### [`00af0810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0810.md) → [`00af1804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1804.md) FUN_00af1804

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
      "definition_site": "00af180c",
      "incomplete_value": false,
      "site": "00af1810",
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
      "unmatched:00af0828",
      "DATA",
      [
        "storage",
        "00c8e548",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00af082c",
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
      "00af181c",
      "DATA",
      [
        "storage",
        "00c8f518",
        null,
        "undefined *"
      ]
    ],
    [
      "00af1820",
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
- 00af081c ["INT_ADD", "register:40f0:8", ["const:af081c:8", "const:4:8"]]
- 00af081c ["CALL", null, ["callee:00c58f30:8"]]
+ 00af1810 ["INT_ADD", "register:40f0:8", ["const:af1810:8", "const:4:8"]]
+ 00af1810 ["CALL", null, ["callee:00c58f30:8"]]
- 00af0820 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af1814 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af0824 ["COPY", "tmp:0:8", ["const:548:8"]]
- 00af0824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af0824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af0824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6f36781ace5b862ee8eba81ffaaecb54"></a>

### [`00af0834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0834.md) → [`00af1828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1828.md) FUN_00af1828

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
      "definition_site": "00af182c",
      "incomplete_value": false,
      "site": "00af1830",
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
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af0838",
      "incomplete_value": false,
      "site": "00af083c",
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
            "const:548:8"
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
      "00af1830",
      "DATA",
      [
        "storage",
        "00c8e548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af1830",
      "DATA",
      [
        "storage",
        "00c8f518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0834 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af1828 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af0838 ["COPY", "tmp:0:8", ["const:548:8"]]
- 00af0838 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af0838 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af0838 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af182c ["COPY", "tmp:0:8", ["const:518:8"]]
+ 00af182c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af182c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af182c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5de555dfae19e3f53827616a95fd37ed"></a>

### [`00af084c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af084c.md) → [`00af1840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1840.md) FUN_00af1840

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af1868",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af0874",
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
      "unmatched:00af0854",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af1888"
      ]
    ],
    [
      "00af1868",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af1848",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af1888"
      ]
    ],
    [
      "00af1868",
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
- 00af0874 ["INT_ADD", "register:40f0:8", ["const:af0874:8", "const:4:8"]]
- 00af0874 ["CALL", null, ["ram:47ad34:8"]]
+ 00af1868 ["INT_ADD", "register:40f0:8", ["const:af1868:8", "const:4:8"]]
+ 00af1868 ["CALL", null, ["ram:47b054:8"]]
- 00af084c ["COPY", "tmp:0:8", ["register:4010:8"]]
- 00af084c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00af084c ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 00af0850 ["COPY", "tmp:0:4", ["const:2:4"]]
- 00af0850 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 00af0850 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 00af0850 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-017feffc1e0a58b257690ab550ad6a7c"></a>

### [`00af08c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af08c4.md) → [`00af18b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af18b8.md) FUN_00af18b8

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
      "unmatched:00af08e8",
      "DATA",
      [
        "storage",
        "00c8e5c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00af08ec",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af08f0",
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
      "00af18dc",
      "DATA",
      [
        "storage",
        "00c8f598",
        null,
        "undefined *"
      ]
    ],
    [
      "00af18e0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af18e4",
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
- 00af08d8 ["INT_ADD", "register:40f0:8", ["const:af08d8:8", "const:4:8"]]
- 00af08d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af18cc ["INT_ADD", "register:40f0:8", ["const:af18cc:8", "const:4:8"]]
+ 00af18cc ["CALL", null, ["callee:00c58f30:8"]]
- 00af08e0 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af18d4 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af08e4 ["COPY", "tmp:0:8", ["const:5c8:8"]]
- 00af08e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af08e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af08e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6ec34250c9034064a66ddcea453293ff"></a>

### [`00af08f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af08f8.md) → [`00af18ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af18ec.md) FUN_00af18ec

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
      "definition_site": "00af18f8",
      "incomplete_value": false,
      "site": "00af18f8",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af0904",
      "incomplete_value": false,
      "site": "00af0904",
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
            "const:5c8:8"
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
      "00af18f8",
      "DATA",
      [
        "storage",
        "00c8e5c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af18f8",
      "DATA",
      [
        "storage",
        "00c8f598",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af08fc ["COPY", "register:4048:8", ["const:c8e000:8"]]
+ 00af18f0 ["COPY", "register:4048:8", ["const:c8f000:8"]]
- 00af0900 ["COPY", "tmp:0:8", ["const:5c8:8"]]
- 00af0900 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af0900 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af0900 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af18f4 ["COPY", "tmp:0:8", ["const:598:8"]]
+ 00af18f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af18f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af18f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c5b72a54b5147ca2a3852882483a7880"></a>

### [`00af0914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0914.md) → [`00af1908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1908.md) FUN_00af1908

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b9624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9624.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008ba5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba5d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.83% / 新版 85.83%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af1940",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af094c",
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
      "definition_site": "00af09d0",
      "incomplete_value": true,
      "site": "00af09e8",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af09d4",
      "incomplete_value": true,
      "site": "00af09e8",
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
      "00af1940",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00af0994",
      "READ",
      [
        "storage",
        "002adfd3",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00af099c",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00af1940",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00af1988",
      "READ",
      [
        "storage",
        "002ae0a0",
        null,
        "string"
      ]
    ],
    [
      "00af1990",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af094c ["INT_ADD", "register:40f0:8", ["const:af094c:8", "const:4:8"]]
- 00af094c ["CALL", null, ["ram:47ad34:8"]]
+ 00af1940 ["INT_ADD", "register:40f0:8", ["const:af1940:8", "const:4:8"]]
+ 00af1940 ["CALL", null, ["ram:47b054:8"]]
- 00af09e8 ["INT_ADD", "register:40f0:8", ["const:af09e8:8", "const:4:8"]]
- 00af09e8 ["CALL", null, ["callee:008bbccc:8"]]
+ 00af19dc ["INT_ADD", "register:40f0:8", ["const:af19dc:8", "const:4:8"]]
+ 00af19dc ["CALL", null, ["callee:008bbccc:8"]]
- 00af0958 ["INT_ADD", "register:40f0:8", ["const:af0958:8", "const:4:8"]]
- 00af0958 ["CALL", null, ["callee:0047d134:8"]]
+ 00af194c ["INT_ADD", "register:40f0:8", ["const:af194c:8", "const:4:8"]]
+ 00af194c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-cef7a1cf9ea3f4d534e4f79a33d8b13b"></a>

### [`00af0c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0c20.md) → [`00af1c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1c14.md) FUN_00af1c14

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
      "definition_site": "00af0c30",
      "incomplete_value": false,
      "site": "00af0c34",
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
      "unmatched:00af0c44",
      "DATA",
      [
        "storage",
        "00c8e638",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00af0c48",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af0c4c",
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
      "00af1c38",
      "DATA",
      [
        "storage",
        "00c8f608",
        null,
        "undefined *"
      ]
    ],
    [
      "00af1c3c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af1c40",
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
- 00af0c34 ["INT_ADD", "register:40f0:8", ["const:af0c34:8", "const:4:8"]]
- 00af0c34 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af1c28 ["INT_ADD", "register:40f0:8", ["const:af1c28:8", "const:4:8"]]
+ 00af1c28 ["CALL", null, ["callee:00c58f30:8"]]
- 00af0c3c ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af1c30 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af0c40 ["COPY", "tmp:0:8", ["const:638:8"]]
- 00af0c40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af0c40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af0c40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-06158878fae6863868b7f0b65035551d"></a>

### [`00af0c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0c54.md) → [`00af1c48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1c48.md) FUN_00af1c48

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
      "definition_site": "00af1c54",
      "incomplete_value": false,
      "site": "00af1c54",
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
            "const:608:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af0c60",
      "incomplete_value": false,
      "site": "00af0c60",
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
      "00af1c54",
      "DATA",
      [
        "storage",
        "00c8e638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af1c54",
      "DATA",
      [
        "storage",
        "00c8f608",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0c58 ["COPY", "register:4048:8", ["const:c8e000:8"]]
+ 00af1c4c ["COPY", "register:4048:8", ["const:c8f000:8"]]
- 00af0c5c ["COPY", "tmp:0:8", ["const:638:8"]]
- 00af0c5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af0c5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af0c5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af1c50 ["COPY", "tmp:0:8", ["const:608:8"]]
+ 00af1c50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af1c50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af1c50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-33065a275342eb27538b8ada51492bd2"></a>

### [`00af0c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0c70.md) → [`00af1c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1c64.md) FUN_00af1c64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 80.77% / 新版 80.77%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00af0cbc"
      ],
      [
        "FALL_THROUGH",
        "00af1cb0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00af1cb0",
      "incomplete_value": true,
      "site": "00af1cc0",
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
      "definition_site": "00af0cbc",
      "incomplete_value": true,
      "site": "00af0ccc",
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
      "00af1cb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af1cac"
      ]
    ],
    [
      "unmatched:00af0c98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00af0cbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af1cc8"
      ]
    ]
  ],
  "added": [
    [
      "00af1c70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af1cac"
      ]
    ],
    [
      "00af1c8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00af1cb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af1cc8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0c70 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 00af0c70 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00af0c70 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 00af0c74 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00af0c74 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00af0c78 ["COPY", "tmp:0:4", ["const:2:4"]]
- 00af0c78 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 00af0c78 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 00af0c78 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-6c0d5e3070128f51aeae54d62f7d0bdd"></a>

### [`00af0d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0d04.md) → [`00af1cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1cf8.md) FUN_00af1cf8

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
      "definition_site": "00af1d08",
      "incomplete_value": false,
      "site": "00af1d0c",
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
      "unmatched:00af0d04",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af0d08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af0d28",
      "DATA",
      [
        "storage",
        "00c8e6b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af1cf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af1cfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af1d1c",
      "DATA",
      [
        "storage",
        "00c8f688",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0d18 ["INT_ADD", "register:40f0:8", ["const:af0d18:8", "const:4:8"]]
- 00af0d18 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af1d0c ["INT_ADD", "register:40f0:8", ["const:af1d0c:8", "const:4:8"]]
+ 00af1d0c ["CALL", null, ["callee:00c58f30:8"]]
- 00af0d04 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af0d04 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af0d04 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af0d04 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af0d08 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af0d08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-a27ddc3759f443bf113eb06277adc020"></a>

### [`00af0d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0d38.md) → [`00af1d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1d2c.md) FUN_00af1d2c

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
      "unmatched:00af0d44",
      "DATA",
      [
        "storage",
        "00c8e6b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af1d38",
      "DATA",
      [
        "storage",
        "00c8f688",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0d38 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00af0d38 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00af0d3c ["COPY", "register:4048:8", ["const:c8e000:8"]]
- 00af0d40 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00af0d40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af0d40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af0d40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c1f0bc5b7a5460c38684f6a472cad9c6"></a>

### [`00af0d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0d9c.md) → [`00af1d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1d90.md) FUN_00af1d90

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
      "definition_site": "00af1db4",
      "incomplete_value": false,
      "site": "00af1db4",
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
            "const:708:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af0dc0",
      "incomplete_value": false,
      "site": "00af0dc0",
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
            "const:738:8"
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
      "00af1db4",
      "DATA",
      [
        "storage",
        "00c8e738",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af1db4",
      "DATA",
      [
        "storage",
        "00c8f708",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0db0 ["INT_ADD", "register:40f0:8", ["const:af0db0:8", "const:4:8"]]
- 00af0db0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af1da4 ["INT_ADD", "register:40f0:8", ["const:af1da4:8", "const:4:8"]]
+ 00af1da4 ["CALL", null, ["callee:00c58f30:8"]]
- 00af0db8 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af1dac ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af0dbc ["COPY", "tmp:0:8", ["const:738:8"]]
- 00af0dbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af0dbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af0dbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af1db0 ["COPY", "tmp:0:8", ["const:708:8"]]
+ 00af1db0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af1db0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af1db0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b3bb4a7b1f530b88bc6aa05e5473819"></a>

### [`00af0dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0dd0.md) → [`00af1dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1dc4.md) FUN_00af1dc4

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
      "unmatched:00af0ddc",
      "DATA",
      [
        "storage",
        "00c8e738",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af1dd0",
      "DATA",
      [
        "storage",
        "00c8f708",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0dd0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00af0dd0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00af0dd4 ["COPY", "register:4048:8", ["const:c8e000:8"]]
- 00af0dd8 ["COPY", "tmp:0:8", ["const:738:8"]]
- 00af0dd8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af0dd8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af0dd8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-46b48ad1bf401ef5223f256829677aa6"></a>

### [`00af0dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0dec.md) → [`00af1de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1de0.md) FUN_00af1de0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`00aea7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aea/00aea7c0.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00468fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc0.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046dcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcd4.md) [`00aeb7b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aeb/00aeb7b4.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 87.72% / 新版 87.72%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00af1e18",
      "incomplete_value": true,
      "site": "00af1e18",
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
      "definition_site": "00af0e24",
      "incomplete_value": true,
      "site": "00af0e24",
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
      "definition_site": "00af1e20",
      "incomplete_value": true,
      "site": "00af1e30",
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
            "const:ef8:8"
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
      "definition_site": "00af1e28",
      "incomplete_value": false,
      "site": "00af1e30",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af0e34",
      "incomplete_value": true,
      "site": "00af0e3c",
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
            "const:a20:8"
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
      "00af1e04",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00af0e2c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:00af0e34",
      "PARAM",
      [
        "storage",
        "00c8da20",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00af1e04",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00af1e20",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00af1e28",
      "PARAM",
      [
        "storage",
        "00c8e9f0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af0e3c ["INT_ADD", "register:40f0:8", ["const:af0e3c:8", "const:4:8"]]
- 00af0e3c ["CALL", null, ["callee:00c596b0:8"]]
+ 00af1e30 ["INT_ADD", "register:40f0:8", ["const:af1e30:8", "const:4:8"]]
+ 00af1e30 ["CALL", null, ["callee:00c596b0:8"]]
- 00af0e54 ["INT_ADD", "register:40f0:8", ["const:af0e54:8", "const:4:8"]]
- 00af0e54 ["CALL", null, ["callee:00aeb7b4:8"]]
+ 00af1e48 ["INT_ADD", "register:40f0:8", ["const:af1e48:8", "const:4:8"]]
+ 00af1e48 ["CALL", null, ["callee:00aeb7b4:8"]]
- 00af0eac ["INT_ADD", "register:40f0:8", ["const:af0eac:8", "const:4:8"]]
- 00af0eac ["CALL", null, ["callee:00469f64:8"]]
+ 00af1ea0 ["INT_ADD", "register:40f0:8", ["const:af1ea0:8", "const:4:8"]]
+ 00af1ea0 ["CALL", null, ["callee:00469f64:8"]]
~~~


<a id="compare-c47422eb01526f7a64def9d87bb25138"></a>

### [`00af1290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1290.md) → [`00af2284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2284.md) FUN_00af2284

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af22b0",
      "incomplete_value": false,
      "site": "00af22b8",
      "value": [
        "leaf",
        "const:b:8"
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
      "unmatched:00af12b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af22ac",
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
- 00af12c4 ["INT_ADD", "register:40f0:8", ["const:af12c4:8", "const:4:8"]]
- 00af12c4 ["CALL", null, ["callee:0047d134:8"]]
+ 00af22b8 ["INT_ADD", "register:40f0:8", ["const:af22b8:8", "const:4:8"]]
+ 00af22b8 ["CALL", null, ["callee:0047d134:8"]]
- 00af12a0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00af12a0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00af2294 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00af2294 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00af12a4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00af12a4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00af2298 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00af2298 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-2ae22b023c3229a41a7f1a71f9e603e9"></a>

### [`00af1324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1324.md) → [`00af2318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2318.md) FUN_00af2318

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
      "definition_site": "00af233c",
      "incomplete_value": false,
      "site": "00af233c",
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
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1348",
      "incomplete_value": false,
      "site": "00af1348",
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
            "const:9c8:8"
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
      "00af233c",
      "DATA",
      [
        "storage",
        "00c8e9c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af233c",
      "DATA",
      [
        "storage",
        "00c8f998",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1338 ["INT_ADD", "register:40f0:8", ["const:af1338:8", "const:4:8"]]
- 00af1338 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af232c ["INT_ADD", "register:40f0:8", ["const:af232c:8", "const:4:8"]]
+ 00af232c ["CALL", null, ["callee:00c58f30:8"]]
- 00af1340 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af2334 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af1344 ["COPY", "tmp:0:8", ["const:9c8:8"]]
- 00af1344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af1344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af1344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af2338 ["COPY", "tmp:0:8", ["const:998:8"]]
+ 00af2338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-653e6ef706b7e0cfad16bb5601e6a7df"></a>

### [`00af1358`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1358.md) → [`00af234c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af234c.md) FUN_00af234c

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
      "definition_site": "00af2358",
      "incomplete_value": false,
      "site": "00af2358",
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
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1364",
      "incomplete_value": false,
      "site": "00af1364",
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
            "const:9c8:8"
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
      "00af2358",
      "DATA",
      [
        "storage",
        "00c8e9c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2358",
      "DATA",
      [
        "storage",
        "00c8f998",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af135c ["COPY", "register:4048:8", ["const:c8e000:8"]]
+ 00af2350 ["COPY", "register:4048:8", ["const:c8f000:8"]]
- 00af1360 ["COPY", "tmp:0:8", ["const:9c8:8"]]
- 00af1360 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af1360 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af1360 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af2354 ["COPY", "tmp:0:8", ["const:998:8"]]
+ 00af2354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af2354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af2354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1259510bd6579ce5d0c497cbf62d1089"></a>

### [`00af13bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af13bc.md) → [`00af23b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af23b0.md) FUN_00af23b0

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
      "unmatched:00af13e0",
      "DATA",
      [
        "storage",
        "00c8ea48",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00af13e4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af13e8",
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
      "00af23d4",
      "DATA",
      [
        "storage",
        "00c8fa18",
        null,
        "undefined *"
      ]
    ],
    [
      "00af23d8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af23dc",
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
- 00af13d0 ["INT_ADD", "register:40f0:8", ["const:af13d0:8", "const:4:8"]]
- 00af13d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af23c4 ["INT_ADD", "register:40f0:8", ["const:af23c4:8", "const:4:8"]]
+ 00af23c4 ["CALL", null, ["callee:00c58f30:8"]]
- 00af13d8 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af23cc ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af13dc ["COPY", "tmp:0:8", ["const:a48:8"]]
- 00af13dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af13dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af13dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c0f20f43156fb94d11ce7453678643b"></a>

### [`00af13f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af13f0.md) → [`00af23e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af23e4.md) FUN_00af23e4

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
      "definition_site": "00af23f0",
      "incomplete_value": false,
      "site": "00af23f0",
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
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af13fc",
      "incomplete_value": false,
      "site": "00af13fc",
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
            "const:a48:8"
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
      "00af23f0",
      "DATA",
      [
        "storage",
        "00c8ea48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af23f0",
      "DATA",
      [
        "storage",
        "00c8fa18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af13f4 ["COPY", "register:4048:8", ["const:c8e000:8"]]
+ 00af23e8 ["COPY", "register:4048:8", ["const:c8f000:8"]]
- 00af13f8 ["COPY", "tmp:0:8", ["const:a48:8"]]
- 00af13f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af13f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af13f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af23ec ["COPY", "tmp:0:8", ["const:a18:8"]]
+ 00af23ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af23ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af23ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6b55f6950b2f2d5391ec611bb9231b14"></a>

### [`00af140c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af140c.md) → [`00af2400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2400.md) FUN_00af2400

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0046bba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bba8.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`0046d9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0046bec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046bec8.md) [`0046dcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcd4.md) [`0046dd0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dd0c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7da0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 87.63% / 新版 87.63%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af243c",
      "incomplete_value": false,
      "site": "00af244c",
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
      "definition_site": "00af1448",
      "incomplete_value": false,
      "site": "00af1458",
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
      "definition_site": "00af2444",
      "incomplete_value": false,
      "site": "00af244c",
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
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1450",
      "incomplete_value": false,
      "site": "00af1458",
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
            "const:a20:8"
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
      "unmatched:00af1438",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00af1440",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af2458"
      ]
    ],
    [
      "unmatched:00af1448",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00af242c",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00af2434",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af2458"
      ]
    ],
    [
      "00af243c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1458 ["INT_ADD", "register:40f0:8", ["const:af1458:8", "const:4:8"]]
- 00af1458 ["CALL", null, ["callee:00c596b0:8"]]
+ 00af244c ["INT_ADD", "register:40f0:8", ["const:af244c:8", "const:4:8"]]
+ 00af244c ["CALL", null, ["callee:00c596b0:8"]]
- 00af1428 ["COPY", "tmp:0:8", ["const:38:8"]]
- 00af1428 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00af1428 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00af1428 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00af142c ["COPY", "register:4040:8", ["register:4000:8"]]
~~~


<a id="compare-8dda88a8fb056a72749a87d35dad1a06"></a>

### [`00af15bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af15bc.md) → [`00af25b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af25b0.md) FUN_00af25b0

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
      "unmatched:00af15d4",
      "DATA",
      [
        "storage",
        "00c8eac8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00af15d8",
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
      "00af25c8",
      "DATA",
      [
        "storage",
        "00c8fa98",
        null,
        "undefined *"
      ]
    ],
    [
      "00af25cc",
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
- 00af15c8 ["INT_ADD", "register:40f0:8", ["const:af15c8:8", "const:4:8"]]
- 00af15c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af25bc ["INT_ADD", "register:40f0:8", ["const:af25bc:8", "const:4:8"]]
+ 00af25bc ["CALL", null, ["callee:00c58f30:8"]]
- 00af15cc ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af25c0 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af15d0 ["COPY", "tmp:0:8", ["const:ac8:8"]]
- 00af15d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af15d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af15d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-be6c3df5b02d5ec46689ad4220ea62ad"></a>

### [`00af15e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af15e0.md) → [`00af25d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af25d4.md) FUN_00af25d4

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
      "definition_site": "00af25d8",
      "incomplete_value": false,
      "site": "00af25dc",
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
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af15e4",
      "incomplete_value": false,
      "site": "00af15e8",
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
            "const:ac8:8"
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
      "00af25dc",
      "DATA",
      [
        "storage",
        "00c8eac8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af25dc",
      "DATA",
      [
        "storage",
        "00c8fa98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af15e0 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af25d4 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af15e4 ["COPY", "tmp:0:8", ["const:ac8:8"]]
- 00af15e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af15e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af15e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af25d8 ["COPY", "tmp:0:8", ["const:a98:8"]]
+ 00af25d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af25d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af25d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d150db922a905ca7c76905a2087d16f3"></a>

### [`00af15f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af15f8.md) → [`00af25ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af25ec.md) FUN_00af25ec

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
      "site": "00af2608",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af1614",
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
      "00af2608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af2608",
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
- 00af1614 ["INT_ADD", "register:40f0:8", ["const:af1614:8", "const:4:8"]]
- 00af1614 ["CALL", null, ["ram:47ad34:8"]]
+ 00af2608 ["INT_ADD", "register:40f0:8", ["const:af2608:8", "const:4:8"]]
+ 00af2608 ["CALL", null, ["ram:47b054:8"]]
- 00af1620 ["INT_ADD", "register:40f0:8", ["const:af1620:8", "const:4:8"]]
- 00af1620 ["CALL", null, ["callee:0047d134:8"]]
+ 00af2614 ["INT_ADD", "register:40f0:8", ["const:af2614:8", "const:4:8"]]
+ 00af2614 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-a591599e01f9ade2d19b528fb64875e4"></a>

### [`00af1664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1664.md) → [`00af2658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2658.md) FUN_00af2658

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
      "definition_site": "00af266c",
      "incomplete_value": false,
      "site": "00af2670",
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
            "const:b18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1678",
      "incomplete_value": false,
      "site": "00af167c",
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
            "const:b48:8"
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
      "00af2670",
      "DATA",
      [
        "storage",
        "00c8eb48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2670",
      "DATA",
      [
        "storage",
        "00c8fb18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1670 ["INT_ADD", "register:40f0:8", ["const:af1670:8", "const:4:8"]]
- 00af1670 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af2664 ["INT_ADD", "register:40f0:8", ["const:af2664:8", "const:4:8"]]
+ 00af2664 ["CALL", null, ["callee:00c58f30:8"]]
- 00af1674 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af2668 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af1678 ["COPY", "tmp:0:8", ["const:b48:8"]]
- 00af1678 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af1678 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af1678 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af266c ["COPY", "tmp:0:8", ["const:b18:8"]]
+ 00af266c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af266c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af266c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-26920e2cbd2f25a58dec88dc146c04f1"></a>

### [`00af1688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1688.md) → [`00af267c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af267c.md) FUN_00af267c

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
      "definition_site": "00af2680",
      "incomplete_value": false,
      "site": "00af2684",
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
            "const:b18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af168c",
      "incomplete_value": false,
      "site": "00af1690",
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
            "const:b48:8"
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
      "00af2684",
      "DATA",
      [
        "storage",
        "00c8eb48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2684",
      "DATA",
      [
        "storage",
        "00c8fb18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1688 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af267c ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af168c ["COPY", "tmp:0:8", ["const:b48:8"]]
- 00af168c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af168c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af168c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af2680 ["COPY", "tmp:0:8", ["const:b18:8"]]
+ 00af2680 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2680 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2680 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5215cebe01094a766f7e039d2d70cf1b"></a>

### [`00af16a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af16a0.md) → [`00af2694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2694.md) FUN_00af2694

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
      "site": "00af26b0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af16bc",
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
      "00af26b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af26b0",
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
- 00af16bc ["INT_ADD", "register:40f0:8", ["const:af16bc:8", "const:4:8"]]
- 00af16bc ["CALL", null, ["ram:47ad34:8"]]
+ 00af26b0 ["INT_ADD", "register:40f0:8", ["const:af26b0:8", "const:4:8"]]
+ 00af26b0 ["CALL", null, ["ram:47b054:8"]]
- 00af16c8 ["INT_ADD", "register:40f0:8", ["const:af16c8:8", "const:4:8"]]
- 00af16c8 ["CALL", null, ["callee:0047d134:8"]]
+ 00af26bc ["INT_ADD", "register:40f0:8", ["const:af26bc:8", "const:4:8"]]
+ 00af26bc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-c56a911b8fe7e6406e54364ce8a2a256"></a>

### [`00af170c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af170c.md) → [`00af2700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2700.md) FUN_00af2700

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
      "definition_site": "00af2714",
      "incomplete_value": false,
      "site": "00af2718",
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
            "const:b98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1720",
      "incomplete_value": false,
      "site": "00af1724",
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
            "const:bc8:8"
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
      "00af2718",
      "DATA",
      [
        "storage",
        "00c8ebc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2718",
      "DATA",
      [
        "storage",
        "00c8fb98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1718 ["INT_ADD", "register:40f0:8", ["const:af1718:8", "const:4:8"]]
- 00af1718 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af270c ["INT_ADD", "register:40f0:8", ["const:af270c:8", "const:4:8"]]
+ 00af270c ["CALL", null, ["callee:00c58f30:8"]]
- 00af171c ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af2710 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af1720 ["COPY", "tmp:0:8", ["const:bc8:8"]]
- 00af1720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af1720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af1720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af2714 ["COPY", "tmp:0:8", ["const:b98:8"]]
+ 00af2714 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2714 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2714 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6388bb10bdba5a57af683a64bcb96cd3"></a>

### [`00af1730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1730.md) → [`00af2724`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2724.md) FUN_00af2724

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
      "definition_site": "00af2728",
      "incomplete_value": false,
      "site": "00af272c",
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
            "const:b98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1734",
      "incomplete_value": false,
      "site": "00af1738",
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
            "const:bc8:8"
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
      "00af272c",
      "DATA",
      [
        "storage",
        "00c8ebc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af272c",
      "DATA",
      [
        "storage",
        "00c8fb98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1730 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af2724 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af1734 ["COPY", "tmp:0:8", ["const:bc8:8"]]
- 00af1734 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af1734 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af1734 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af2728 ["COPY", "tmp:0:8", ["const:b98:8"]]
+ 00af2728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-06b4332e1820e7ee6331db05ae6a8049"></a>

### [`00af1748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1748.md) → [`00af273c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af273c.md) FUN_00af273c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00ad047c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad047c.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00ad1470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad1470.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af2764",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af1770",
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
      "site": "00af27dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af17e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00af2764",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00af27dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af2764",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00af27dc",
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
- 00af1770 ["INT_ADD", "register:40f0:8", ["const:af1770:8", "const:4:8"]]
- 00af1770 ["CALL", null, ["ram:47ad34:8"]]
+ 00af2764 ["INT_ADD", "register:40f0:8", ["const:af2764:8", "const:4:8"]]
+ 00af2764 ["CALL", null, ["ram:47b054:8"]]
- 00af17e8 ["INT_ADD", "register:40f0:8", ["const:af17e8:8", "const:4:8"]]
- 00af17e8 ["CALL", null, ["ram:47ad34:8"]]
+ 00af27dc ["INT_ADD", "register:40f0:8", ["const:af27dc:8", "const:4:8"]]
+ 00af27dc ["CALL", null, ["ram:47b054:8"]]
- 00af177c ["INT_ADD", "register:40f0:8", ["const:af177c:8", "const:4:8"]]
- 00af177c ["CALL", null, ["callee:0047d134:8"]]
+ 00af2770 ["INT_ADD", "register:40f0:8", ["const:af2770:8", "const:4:8"]]
+ 00af2770 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-31cc45805c73345c6ab74e1f0b4cd242"></a>

### [`00af1864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1864.md) → [`00af2858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2858.md) FUN_00af2858

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
      "definition_site": "00af286c",
      "incomplete_value": false,
      "site": "00af2870",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1878",
      "incomplete_value": false,
      "site": "00af187c",
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
            "const:c48:8"
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
      "00af2870",
      "DATA",
      [
        "storage",
        "00c8ec48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2870",
      "DATA",
      [
        "storage",
        "00c8fc18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1870 ["INT_ADD", "register:40f0:8", ["const:af1870:8", "const:4:8"]]
- 00af1870 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af2864 ["INT_ADD", "register:40f0:8", ["const:af2864:8", "const:4:8"]]
+ 00af2864 ["CALL", null, ["callee:00c58f30:8"]]
- 00af1874 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af2868 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af1878 ["COPY", "tmp:0:8", ["const:c48:8"]]
- 00af1878 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af1878 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af1878 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af286c ["COPY", "tmp:0:8", ["const:c18:8"]]
+ 00af286c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af286c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af286c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1431f6ec5aca16b80f609163dac326f3"></a>

### [`00af1888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1888.md) → [`00af287c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af287c.md) FUN_00af287c

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
      "definition_site": "00af2880",
      "incomplete_value": false,
      "site": "00af2884",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af188c",
      "incomplete_value": false,
      "site": "00af1890",
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
      "00af2884",
      "DATA",
      [
        "storage",
        "00c8ec48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2884",
      "DATA",
      [
        "storage",
        "00c8fc18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1888 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af287c ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af188c ["COPY", "tmp:0:8", ["const:c48:8"]]
- 00af188c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af188c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af188c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af2880 ["COPY", "tmp:0:8", ["const:c18:8"]]
+ 00af2880 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2880 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2880 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-abc25f8e50c9bbb3329f3f1b3db2262c"></a>

### [`00af18a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af18a0.md) → [`00af2894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2894.md) FUN_00af2894

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af28bc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af18c8",
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
      "site": "00af2930",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af193c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00af28bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00af2930",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af28bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00af2930",
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
- 00af18c8 ["INT_ADD", "register:40f0:8", ["const:af18c8:8", "const:4:8"]]
- 00af18c8 ["CALL", null, ["ram:47ad34:8"]]
+ 00af28bc ["INT_ADD", "register:40f0:8", ["const:af28bc:8", "const:4:8"]]
+ 00af28bc ["CALL", null, ["ram:47b054:8"]]
- 00af193c ["INT_ADD", "register:40f0:8", ["const:af193c:8", "const:4:8"]]
- 00af193c ["CALL", null, ["ram:47ad34:8"]]
+ 00af2930 ["INT_ADD", "register:40f0:8", ["const:af2930:8", "const:4:8"]]
+ 00af2930 ["CALL", null, ["ram:47b054:8"]]
- 00af18d4 ["INT_ADD", "register:40f0:8", ["const:af18d4:8", "const:4:8"]]
- 00af18d4 ["CALL", null, ["callee:0047d134:8"]]
+ 00af28c8 ["INT_ADD", "register:40f0:8", ["const:af28c8:8", "const:4:8"]]
+ 00af28c8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-677744eacf33cbb0155be033ae559b0c"></a>

### [`00af1980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1980.md) → [`00af2974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2974.md) FUN_00af2974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af1980",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af1984",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af19a4",
      "DATA",
      [
        "storage",
        "00c8ecc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2974",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af2978",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af2998",
      "DATA",
      [
        "storage",
        "00c8fc98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1980 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af1980 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af1980 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af1980 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af1984 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af1984 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00af1988 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-070f5e76cf44e096a8632677cc0e5e3f"></a>

### [`00af19b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af19b8.md) → [`00af29ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af29ac.md) FUN_00af29ac

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
      "unmatched:00af19c0",
      "DATA",
      [
        "storage",
        "00c8ecc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af29b4",
      "DATA",
      [
        "storage",
        "00c8fc98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af19b8 ["COPY", "register:4040:8", ["const:c8e000:8"]]
- 00af19bc ["COPY", "tmp:0:8", ["const:cc8:8"]]
- 00af19bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af19bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af19bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00af19c0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00af19c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-b3d15f5c1b941b7a05e79cade50fbbea"></a>

### [`00af19d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af19d8.md) → [`00af29cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af29cc.md) FUN_00af29cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 19件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.43% / 新版 83.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 25件, `store_condition` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00af2d00",
      "incomplete_value": true,
      "site": "00af2d00",
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
      "definition_site": "00af1d0c",
      "incomplete_value": true,
      "site": "00af1d0c",
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
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af2a10",
      "incomplete_value": true,
      "site": "00af2a14",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af1a28",
      "incomplete_value": true,
      "site": "00af1a34",
      "value": [
        "live",
        "register:40a0:8"
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
      "00af2a44",
      "DATA",
      [
        "storage",
        "00436258",
        null,
        "byte[63]"
      ]
    ],
    [
      "unmatched:00af1ae8",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af1be0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004682b4"
      ]
    ]
  ],
  "added": [
    [
      "00af2a44",
      "DATA",
      [
        "storage",
        "00436258",
        null,
        "dword"
      ]
    ],
    [
      "00af2adc",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "00af2bd4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004682b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1a20 ["INT_ADD", "register:40f0:8", ["const:af1a20:8", "const:4:8"]]
- 00af1a20 ["CALL", null, ["callee:008ba294:8"]]
+ 00af2a14 ["INT_ADD", "register:40f0:8", ["const:af2a14:8", "const:4:8"]]
+ 00af2a14 ["CALL", null, ["callee:008ba294:8"]]
- 00af1a34 ["INT_ADD", "register:40f0:8", ["const:af1a34:8", "const:4:8"]]
- 00af1a34 ["CALL", null, ["callee:008ba29c:8"]]
+ 00af2a28 ["INT_ADD", "register:40f0:8", ["const:af2a28:8", "const:4:8"]]
+ 00af2a28 ["CALL", null, ["callee:008ba29c:8"]]
- 00af1a8c ["INT_ADD", "register:40f0:8", ["const:af1a8c:8", "const:4:8"]]
- 00af1a8c ["CALL", null, ["callee:004699bc:8"]]
+ 00af2a80 ["INT_ADD", "register:40f0:8", ["const:af2a80:8", "const:4:8"]]
+ 00af2a80 ["CALL", null, ["callee:004699bc:8"]]
~~~


<a id="compare-1f8f6c46db929d4f4be1d1f29253af1b"></a>

### [`00af1f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1f94.md) → [`00af2f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2f88.md) FUN_00af2f88

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
      "definition_site": "00af2f9c",
      "incomplete_value": false,
      "site": "00af2fa0",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1fa8",
      "incomplete_value": false,
      "site": "00af1fac",
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
            "const:d48:8"
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
      "00af2fa0",
      "DATA",
      [
        "storage",
        "00c8ed48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2fa0",
      "DATA",
      [
        "storage",
        "00c8fd18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1fa0 ["INT_ADD", "register:40f0:8", ["const:af1fa0:8", "const:4:8"]]
- 00af1fa0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af2f94 ["INT_ADD", "register:40f0:8", ["const:af2f94:8", "const:4:8"]]
+ 00af2f94 ["CALL", null, ["callee:00c58f30:8"]]
- 00af1fa4 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af2f98 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af1fa8 ["COPY", "tmp:0:8", ["const:d48:8"]]
- 00af1fa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af1fa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af1fa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af2f9c ["COPY", "tmp:0:8", ["const:d18:8"]]
+ 00af2f9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2f9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2f9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-39d289bd3d5ca9e4c4611ec929e68cc0"></a>

### [`00af1fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1fb8.md) → [`00af2fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2fac.md) FUN_00af2fac

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
      "definition_site": "00af2fb0",
      "incomplete_value": false,
      "site": "00af2fb4",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af1fbc",
      "incomplete_value": false,
      "site": "00af1fc0",
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
            "const:d48:8"
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
      "00af2fb4",
      "DATA",
      [
        "storage",
        "00c8ed48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af2fb4",
      "DATA",
      [
        "storage",
        "00c8fd18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af1fb8 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af2fac ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af1fbc ["COPY", "tmp:0:8", ["const:d48:8"]]
- 00af1fbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af1fbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af1fbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af2fb0 ["COPY", "tmp:0:8", ["const:d18:8"]]
+ 00af2fb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2fb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af2fb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-342c9890abe44d9566bd00a9a64ea261"></a>

### [`00af1fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af1/00af1fd0.md) → [`00af2fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af2/00af2fc4.md) FUN_00af2fc4

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
      "site": "00af2fe0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af1fec",
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
      "00af2fe0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af2fe0",
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
- 00af1fec ["INT_ADD", "register:40f0:8", ["const:af1fec:8", "const:4:8"]]
- 00af1fec ["CALL", null, ["ram:47ad34:8"]]
+ 00af2fe0 ["INT_ADD", "register:40f0:8", ["const:af2fe0:8", "const:4:8"]]
+ 00af2fe0 ["CALL", null, ["ram:47b054:8"]]
- 00af1ff8 ["INT_ADD", "register:40f0:8", ["const:af1ff8:8", "const:4:8"]]
- 00af1ff8 ["CALL", null, ["callee:0047d134:8"]]
+ 00af2fec ["INT_ADD", "register:40f0:8", ["const:af2fec:8", "const:4:8"]]
+ 00af2fec ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-4424575b2b82defbf3c7f5dc0d8eaa03"></a>

### [`00af203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af203c.md) → [`00af3030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af3030.md) FUN_00af3030

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
      "definition_site": "00af3044",
      "incomplete_value": false,
      "site": "00af3048",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af2050",
      "incomplete_value": false,
      "site": "00af2054",
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
            "const:dc8:8"
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
      "00af3048",
      "DATA",
      [
        "storage",
        "00c8edc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af3048",
      "DATA",
      [
        "storage",
        "00c8fd98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af2048 ["INT_ADD", "register:40f0:8", ["const:af2048:8", "const:4:8"]]
- 00af2048 ["CALL", null, ["callee:00c58f30:8"]]
+ 00af303c ["INT_ADD", "register:40f0:8", ["const:af303c:8", "const:4:8"]]
+ 00af303c ["CALL", null, ["callee:00c58f30:8"]]
- 00af204c ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af3040 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af2050 ["COPY", "tmp:0:8", ["const:dc8:8"]]
- 00af2050 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af2050 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af2050 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af3044 ["COPY", "tmp:0:8", ["const:d98:8"]]
+ 00af3044 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af3044 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af3044 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ad1dbb48ebce7aa022f5940027580b0"></a>

### [`00af2060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2060.md) → [`00af3054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af3054.md) FUN_00af3054

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
      "definition_site": "00af3058",
      "incomplete_value": false,
      "site": "00af305c",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af2064",
      "incomplete_value": false,
      "site": "00af2068",
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
            "const:dc8:8"
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
      "00af305c",
      "DATA",
      [
        "storage",
        "00c8edc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af305c",
      "DATA",
      [
        "storage",
        "00c8fd98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af2060 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af3054 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af2064 ["COPY", "tmp:0:8", ["const:dc8:8"]]
- 00af2064 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af2064 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af2064 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af3058 ["COPY", "tmp:0:8", ["const:d98:8"]]
+ 00af3058 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af3058 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af3058 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b948f771072fda64dfff406029899ade"></a>

### [`00af2078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2078.md) → [`00af306c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af306c.md) FUN_00af306c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af2098",
      "incomplete_value": false,
      "site": "00af20a0",
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
      "definition_site": "00af209c",
      "incomplete_value": false,
      "site": "00af20a0",
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
      "unmatched:00af2094",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af3088",
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
- 00af20a0 ["INT_ADD", "register:40f0:8", ["const:af20a0:8", "const:4:8"]]
- 00af20a0 ["CALL", null, ["callee:0047d134:8"]]
+ 00af3094 ["INT_ADD", "register:40f0:8", ["const:af3094:8", "const:4:8"]]
+ 00af3094 ["CALL", null, ["callee:0047d134:8"]]
- 00af2080 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00af2080 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00af3074 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00af3074 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00af2094 ["INT_ADD", "register:40f0:8", ["const:af2094:8", "const:4:8"]]
- 00af2094 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-373b54eb67efcc535a133389a41f71fc"></a>

### [`00af20e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af20e4.md) → [`00af30d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af30d8.md) FUN_00af30d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af20e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af20f0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:00af20fc",
      "DATA",
      [
        "storage",
        "00c8ee48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af30d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af30e4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "00af30f0",
      "DATA",
      [
        "storage",
        "00c8fe18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af20e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af20e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af20e4 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00af20e4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af20e8 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af20ec ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-b2ea685da3ae2e3c0ba9b0a9d4a6f8eb"></a>

### [`00af2108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2108.md) → [`00af30fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af30fc.md) FUN_00af30fc

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
      "definition_site": "00af3100",
      "incomplete_value": false,
      "site": "00af3104",
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
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af210c",
      "incomplete_value": false,
      "site": "00af2110",
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
            "const:e48:8"
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
      "00af3104",
      "DATA",
      [
        "storage",
        "00c8ee48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00af3104",
      "DATA",
      [
        "storage",
        "00c8fe18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af2108 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00af30fc ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00af210c ["COPY", "tmp:0:8", ["const:e48:8"]]
- 00af210c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00af210c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00af210c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00af3100 ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 00af3100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00af3100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00af3100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f83540d8c36c3c2cc372cfef25f87f4c"></a>

### [`00af2120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2120.md) → [`00af3114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af3114.md) FUN_00af3114

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
      "site": "00af3130",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af213c",
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
      "00af3130",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af3130",
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
- 00af213c ["INT_ADD", "register:40f0:8", ["const:af213c:8", "const:4:8"]]
- 00af213c ["CALL", null, ["ram:47ad34:8"]]
+ 00af3130 ["INT_ADD", "register:40f0:8", ["const:af3130:8", "const:4:8"]]
+ 00af3130 ["CALL", null, ["ram:47b054:8"]]
- 00af2148 ["INT_ADD", "register:40f0:8", ["const:af2148:8", "const:4:8"]]
- 00af2148 ["CALL", null, ["callee:0047d134:8"]]
+ 00af313c ["INT_ADD", "register:40f0:8", ["const:af313c:8", "const:4:8"]]
+ 00af313c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-54e8dfdf7e7af79afe65c42124b4cad8"></a>

### [`00af2188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2188.md) → [`00af317c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af317c.md) _INIT_248

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af32e4",
      "incomplete_value": true,
      "site": "00af32f0",
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
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af32e8",
      "incomplete_value": true,
      "site": "00af32f0",
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
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af3328",
      "incomplete_value": true,
      "site": "00af332c",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af21b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af21c4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00af21cc",
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
      "00af31ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00af31b8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00af31c0",
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
- 00af22fc ["INT_ADD", "register:40f0:8", ["const:af22fc:8", "const:4:8"]]
- 00af22fc ["CALL", null, ["callee:0043bb58:8"]]
+ 00af32f0 ["INT_ADD", "register:40f0:8", ["const:af32f0:8", "const:4:8"]]
+ 00af32f0 ["CALL", null, ["callee:0043bb58:8"]]
- 00af2338 ["INT_ADD", "register:40f0:8", ["const:af2338:8", "const:4:8"]]
- 00af2338 ["CALL", null, ["callee:0043bb58:8"]]
+ 00af332c ["INT_ADD", "register:40f0:8", ["const:af332c:8", "const:4:8"]]
+ 00af332c ["CALL", null, ["callee:0043bb58:8"]]
- 00af2360 ["INT_ADD", "register:40f0:8", ["const:af2360:8", "const:4:8"]]
- 00af2360 ["CALL", null, ["callee:0043bb58:8"]]
+ 00af3354 ["INT_ADD", "register:40f0:8", ["const:af3354:8", "const:4:8"]]
+ 00af3354 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-2d7c9beb9ee3efe4ebee290a28fdbb75"></a>

### [`00af2518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af2518.md) → [`00af350c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af350c.md) _INIT_249

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 75.71% / 新版 75.71%

優先判定に残った影響 `call_argument_candidate` 10件, `store_value` 5件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00af3548",
      "incomplete_value": true,
      "site": "00af3564",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af2554",
      "incomplete_value": true,
      "site": "00af2570",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af356c",
      "incomplete_value": true,
      "site": "00af3588",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af2578",
      "incomplete_value": true,
      "site": "00af2594",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af358c",
      "incomplete_value": true,
      "site": "00af35a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af2598",
      "incomplete_value": true,
      "site": "00af25b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00af3548",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00af356c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00af358c",
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
      "00af3548",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00af356c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00af358c",
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
- 00af2678 ["INT_ADD", "register:40f0:8", ["const:af2678:8", "const:4:8"]]
- 00af2678 ["CALL", null, ["callee:0043bb58:8"]]
+ 00af366c ["INT_ADD", "register:40f0:8", ["const:af366c:8", "const:4:8"]]
+ 00af366c ["CALL", null, ["callee:0043bb58:8"]]
- 00af26a0 ["INT_ADD", "register:40f0:8", ["const:af26a0:8", "const:4:8"]]
- 00af26a0 ["CALL", null, ["callee:0043bb58:8"]]
+ 00af3694 ["INT_ADD", "register:40f0:8", ["const:af3694:8", "const:4:8"]]
+ 00af3694 ["CALL", null, ["callee:0043bb58:8"]]
- 00af26b4 ["INT_ADD", "register:40f0:8", ["const:af26b4:8", "const:4:8"]]
- 00af26b4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00af36a8 ["INT_ADD", "register:40f0:8", ["const:af36a8:8", "const:4:8"]]
+ 00af36a8 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-1cf422d4be6122ee688a244167414dac"></a>

### [`00af3284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3284.md) → [`00af4278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4278.md) FUN_00af4278

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af32a8",
      "incomplete_value": true,
      "site": "00af32b4",
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
    "slot": 0
  }
]
~~~


~~~diff
- 00af3294 ["INT_ADD", "register:40f0:8", ["const:af3294:8", "const:4:8"]]
- 00af3294 ["CALL", null, ["callee:008524fc:8"]]
+ 00af4288 ["INT_ADD", "register:40f0:8", ["const:af4288:8", "const:4:8"]]
+ 00af4288 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f5d02a290f0817f4fb6367c16098e80f"></a>

### [`00af3324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3324.md) → [`00af4318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4318.md) FUN_00af4318

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af3350",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af3354",
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
      "00af4344",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af4348",
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
- 00af3338 ["INT_ADD", "register:40f0:8", ["const:af3338:8", "const:4:8"]]
- 00af3338 ["CALL", null, ["callee:008524fc:8"]]
+ 00af432c ["INT_ADD", "register:40f0:8", ["const:af432c:8", "const:4:8"]]
+ 00af432c ["CALL", null, ["callee:008524fc:8"]]
- 00af334c ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af334c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af334c ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af334c ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
- 00af3350 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af3350 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af3350 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af3350 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-a7670f22c778d07754b38f43dfef2745"></a>

### [`00af33d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af33d0.md) → [`00af43c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af43c4.md) FUN_00af43c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af33e0 ["INT_ADD", "register:40f0:8", ["const:af33e0:8", "const:4:8"]]
- 00af33e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af43d4 ["INT_ADD", "register:40f0:8", ["const:af43d4:8", "const:4:8"]]
+ 00af43d4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-cb0f8732d6b86d1b264b7d9175a6a4ab"></a>

### [`00af35fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af35fc.md) → [`00af45f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af45f0.md) _INIT_250

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
      "definition_site": "00af462c",
      "incomplete_value": true,
      "site": "00af4648",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af3638",
      "incomplete_value": true,
      "site": "00af3654",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af4650",
      "incomplete_value": true,
      "site": "00af466c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af365c",
      "incomplete_value": true,
      "site": "00af3678",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af4670",
      "incomplete_value": true,
      "site": "00af468c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00af367c",
      "incomplete_value": true,
      "site": "00af3698",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00af462c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00af4650",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00af4670",
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
      "00af462c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00af4650",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00af4670",
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
- 00af375c ["INT_ADD", "register:40f0:8", ["const:af375c:8", "const:4:8"]]
- 00af375c ["CALL", null, ["callee:0043bb58:8"]]
+ 00af4750 ["INT_ADD", "register:40f0:8", ["const:af4750:8", "const:4:8"]]
+ 00af4750 ["CALL", null, ["callee:0043bb58:8"]]
- 00af3830 ["INT_ADD", "register:40f0:8", ["const:af3830:8", "const:4:8"]]
- 00af3830 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00af4824 ["INT_ADD", "register:40f0:8", ["const:af4824:8", "const:4:8"]]
+ 00af4824 ["CALL", null, ["callee:00c58ed0:8"]]
- 00af3624 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00af4618 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-129d36fa36cffecf21e255415566ab07"></a>

### [`00af398c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af398c.md) → [`00af4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4980.md) FUN_00af4980

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 17件 [`005e09e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e09e0.md) [`005f8860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8860.md) [`005f96f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f9/005f96f0.md) [`005fb480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb480.md) [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 17件 [`005e0d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e0d90.md) [`005f8c10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f8/005f8c10.md) [`005f9aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f9/005f9aa0.md) [`005fb830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fb830.md) [`005fe048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe048.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 65.62% / 新版 65.62%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af3990",
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
      "00af4984",
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
- 00af3990 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af3990 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af3990 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af3990 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af3994 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af39a0 ["INT_ADD", "register:40f0:8", ["const:af39a0:8", "const:4:8"]]
- 00af39a0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af4994 ["INT_ADD", "register:40f0:8", ["const:af4994:8", "const:4:8"]]
+ 00af4994 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-83627ef6bef3b0d493827effeddacd8a"></a>

### [`00af3a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3a0c.md) → [`00af4a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4a00.md) FUN_00af4a00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005e0960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0960.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005e0d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e0d10.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af3a40",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af3a44",
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
      "00af4a34",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af4a38",
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
- 00af3a20 ["INT_ADD", "register:40f0:8", ["const:af3a20:8", "const:4:8"]]
- 00af3a20 ["CALL", null, ["callee:008524fc:8"]]
+ 00af4a14 ["INT_ADD", "register:40f0:8", ["const:af4a14:8", "const:4:8"]]
+ 00af4a14 ["CALL", null, ["callee:008524fc:8"]]
- 00af3a3c ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af3a3c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af3a3c ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af3a3c ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af3a40 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af3a40 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af3a40 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af3a40 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-896dca8d4e91ae0c77559cd5ec9bdbb5"></a>

### [`00af3a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3a4c.md) → [`00af4a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4a40.md) FUN_00af4a40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 10件 [`005e4638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4638.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`0066b704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066b704.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 10件 [`005e49e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e49e8.md) [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`0066bab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066bab4.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af3a60 ["INT_ADD", "register:40f0:8", ["const:af3a60:8", "const:4:8"]]
- 00af3a60 ["CALL", null, ["callee:008524fc:8"]]
+ 00af4a54 ["INT_ADD", "register:40f0:8", ["const:af4a54:8", "const:4:8"]]
+ 00af4a54 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0ac611e8b530ae2def53b8f3f3b01931"></a>

### [`00af3a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3a90.md) → [`00af4a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4a84.md) FUN_00af4a84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af3a90",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af3a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af3a98",
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
      "00af4a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af4a88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af4a8c",
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
- 00af3a90 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af3a90 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af3a90 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af3a90 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af3a94 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af3a94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af3a98 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af3a98 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af3a98 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af3a98 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-052f5b657abda7b38db59ef84ae5ba1f"></a>

### [`00af3cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af3/00af3cf8.md) → [`00af4cec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af4/00af4cec.md) FUN_00af4cec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 9件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716ae8.md) · 呼出先 5件 [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 9件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00716e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716e98.md) · 呼出先 5件 [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.89% / 新版 98.89%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af4d74",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00af3d80",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00af4d74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00af4d74",
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
- 00af3d80 ["INT_ADD", "register:40f0:8", ["const:af3d80:8", "const:4:8"]]
- 00af3d80 ["CALL", null, ["ram:47ad34:8"]]
+ 00af4d74 ["INT_ADD", "register:40f0:8", ["const:af4d74:8", "const:4:8"]]
+ 00af4d74 ["CALL", null, ["ram:47b054:8"]]
- 00af3d20 ["INT_ADD", "register:40f0:8", ["const:af3d20:8", "const:4:8"]]
- 00af3d20 ["CALL", null, ["callee:008524fc:8"]]
+ 00af4d14 ["INT_ADD", "register:40f0:8", ["const:af4d14:8", "const:4:8"]]
+ 00af4d14 ["CALL", null, ["callee:008524fc:8"]]
- 00af3d50 ["INT_ADD", "register:40f0:8", ["const:af3d50:8", "const:4:8"]]
- 00af3d50 ["CALL", null, ["callee:0046db10:8"]]
+ 00af4d44 ["INT_ADD", "register:40f0:8", ["const:af4d44:8", "const:4:8"]]
+ 00af4d44 ["CALL", null, ["callee:0046db10:8"]]
~~~


<a id="compare-e21cae68880652e7fc0b7706718af11e"></a>

### [`00af41d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af41d0.md) → [`00af51c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af51c4.md) FUN_00af51c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00716f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716f88.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af4200",
      "incomplete_value": true,
      "site": "00af420c",
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
    "slot": 0
  }
]
~~~


~~~diff
- 00af41e4 ["INT_ADD", "register:40f0:8", ["const:af41e4:8", "const:4:8"]]
- 00af41e4 ["CALL", null, ["callee:008524fc:8"]]
+ 00af51d8 ["INT_ADD", "register:40f0:8", ["const:af51d8:8", "const:4:8"]]
+ 00af51d8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-ae7ac235d27b7c83e6f1ba4d0c486a28"></a>

### [`00af4210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4210.md) → [`00af5204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5204.md) FUN_00af5204

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 8件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716ae8.md) [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 8件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00716e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716e98.md) [`00716f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716f88.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af422c ["INT_ADD", "register:40f0:8", ["const:af422c:8", "const:4:8"]]
- 00af422c ["CALL", null, ["callee:008524fc:8"]]
+ 00af5220 ["INT_ADD", "register:40f0:8", ["const:af5220:8", "const:4:8"]]
+ 00af5220 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-2a70a05c10c7cfef19fd072d4388bd0c"></a>

### [`00af425c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af425c.md) → [`00af5250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5250.md) FUN_00af5250

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a51c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a51/00a51c48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00716f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716f88.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00a52c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a52/00a52c3c.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af4278 ["INT_ADD", "register:40f0:8", ["const:af4278:8", "const:4:8"]]
- 00af4278 ["CALL", null, ["callee:008524fc:8"]]
+ 00af526c ["INT_ADD", "register:40f0:8", ["const:af526c:8", "const:4:8"]]
+ 00af526c ["CALL", null, ["callee:008524fc:8"]]
- 00af4288 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af4288 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af4288 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af4288 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af428c ["COPY", "register:4048:8", ["const:48d0:8"]]
~~~


<a id="compare-b39f1ae1de88300d2f0f4e3e634552fd"></a>

### [`00af42b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af42b0.md) → [`00af52a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af52a4.md) FUN_00af52a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 15件 [`005f7980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f7980.md) [`005f8860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8860.md) [`005f8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8ec0.md) [`005f96f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f9/005f96f0.md) [`005fb480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb480.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 15件 [`005f7d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f7/005f7d30.md) [`005f8c10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f8/005f8c10.md) [`005f9270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f9/005f9270.md) [`005f9aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f9/005f9aa0.md) [`005fb830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fb830.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af52d4",
      "incomplete_value": true,
      "site": "00af52e0",
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
    "slot": 0
  }
]
~~~


~~~diff
- 00af42c4 ["INT_ADD", "register:40f0:8", ["const:af42c4:8", "const:4:8"]]
- 00af42c4 ["CALL", null, ["callee:008524fc:8"]]
+ 00af52b8 ["INT_ADD", "register:40f0:8", ["const:af52b8:8", "const:4:8"]]
+ 00af52b8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6ddc835bc448d4291a10845236c16ea2"></a>

### [`00af42f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af42f0.md) → [`00af52e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af52e4.md) FUN_00af52e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) [`00af292c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af292c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 5件 [`005fe048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe048.md) [`00716f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716f88.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) [`00af3920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af3920.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af430c ["INT_ADD", "register:40f0:8", ["const:af430c:8", "const:4:8"]]
- 00af430c ["CALL", null, ["callee:008524fc:8"]]
+ 00af5300 ["INT_ADD", "register:40f0:8", ["const:af5300:8", "const:4:8"]]
+ 00af5300 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c2dede2cf4c07d755e51835e80a454d3"></a>

### [`00af4390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4390.md) → [`00af5384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5384.md) FUN_00af5384

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00af46e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af46e4.md) [`00af4790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4790.md) · 呼出先 12件 [`0046e76c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e76c.md) [`0046e7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7ec.md) [`0046e7f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7f4.md) [`0046e7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7fc.md) [`0047016c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/0047016c.md)
- 新版 呼出元 2件 [`00af56d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af56d8.md) [`00af5784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5784.md) · 呼出先 12件 [`0046ea8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ea8c.md) [`0046eb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb0c.md) [`0046eb14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb14.md) [`0046eb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb1c.md) [`0047048c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/0047048c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 96.76% / 新版 96.76%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af454c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005e10b0"
      ]
    ],
    [
      "unmatched:00af459c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005e10b0"
      ]
    ],
    [
      "unmatched:00af464c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af5664"
      ]
    ]
  ],
  "added": [
    [
      "00af5540",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005e10b0"
      ]
    ],
    [
      "00af5590",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005e10b0"
      ]
    ],
    [
      "00af5640",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af5664"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af43d0 ["INT_ADD", "register:40f0:8", ["const:af43d0:8", "const:4:8"]]
- 00af43d0 ["CALL", null, ["callee:005e12dc:8"]]
+ 00af53c4 ["INT_ADD", "register:40f0:8", ["const:af53c4:8", "const:4:8"]]
+ 00af53c4 ["CALL", null, ["callee:005e12dc:8"]]
- 00af43d8 ["INT_ADD", "register:40f0:8", ["const:af43d8:8", "const:4:8"]]
- 00af43d8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af53cc ["INT_ADD", "register:40f0:8", ["const:af53cc:8", "const:4:8"]]
+ 00af53cc ["CALL", null, ["callee:008524fc:8"]]
- 00af43f0 ["INT_ADD", "register:40f0:8", ["const:af43f0:8", "const:4:8"]]
- 00af43f0 ["CALL", null, ["callee:005e7810:8"]]
+ 00af53e4 ["INT_ADD", "register:40f0:8", ["const:af53e4:8", "const:4:8"]]
+ 00af53e4 ["CALL", null, ["callee:005e7810:8"]]
~~~


<a id="compare-a72c4e15a8f985fe457255a29647ed2a"></a>

### [`00af4674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4674.md) → [`00af5668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5668.md) FUN_00af5668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`005e09e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e09e0.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 5件 [`005e0d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e0d90.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af568c",
      "incomplete_value": true,
      "site": "00af5690",
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
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af4698",
      "incomplete_value": true,
      "site": "00af469c",
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
      "unmatched:00af4674",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af4678",
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
      "00af5668",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af566c",
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
- 00af469c ["INT_ADD", "register:40f0:8", ["const:af469c:8", "const:4:8"]]
- 00af469c ["CALL", null, ["callee:005e7810:8"]]
+ 00af5690 ["INT_ADD", "register:40f0:8", ["const:af5690:8", "const:4:8"]]
+ 00af5690 ["CALL", null, ["callee:005e7810:8"]]
- 00af4674 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af4674 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af4674 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af4674 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af4678 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af4678 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af4678 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af4678 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b4d0633846fa2042df3fe4f8f668b5ab"></a>

### [`00af46e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af46e4.md) → [`00af56d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af56d8.md) FUN_00af56d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00af4390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4390.md)
- 新版 呼出元 4件 [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00716f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716f88.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00720498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00720/00720498.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00af5384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5384.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af4704",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af5738"
      ]
    ]
  ],
  "added": [
    [
      "00af56f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00af5738"
      ]
    ]
  ]
}
~~~


~~~diff
- 00af46fc ["INT_ADD", "register:40f0:8", ["const:af46fc:8", "const:4:8"]]
- 00af46fc ["CALL", null, ["callee:00af5384:8"]]
+ 00af56f0 ["INT_ADD", "register:40f0:8", ["const:af56f0:8", "const:4:8"]]
+ 00af56f0 ["CALL", null, ["callee:00af5384:8"]]
- 00af4704 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 00af470c ["INT_ADD", "register:40f0:8", ["const:af470c:8", "const:4:8"]]
- 00af470c ["CALL", null, ["callee:008524fc:8"]]
+ 00af5700 ["INT_ADD", "register:40f0:8", ["const:af5700:8", "const:4:8"]]
+ 00af5700 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-fad333312fe472eb45d59bb7c7df091d"></a>

### [`00af4790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4790.md) → [`00af5784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5784.md) FUN_00af5784

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00af4390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4390.md)
- 新版 呼出元 4件 [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00716f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716f88.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00720498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00720/00720498.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00af5384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5384.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af47ac ["INT_ADD", "register:40f0:8", ["const:af47ac:8", "const:4:8"]]
- 00af47ac ["CALL", null, ["callee:00af5384:8"]]
+ 00af57a0 ["INT_ADD", "register:40f0:8", ["const:af57a0:8", "const:4:8"]]
+ 00af57a0 ["CALL", null, ["callee:00af5384:8"]]
- 00af47b4 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 00af57a8 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00af47b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:4", "const:0:4"]]
- 00af47b8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00af57ac ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:4", "const:0:4"]]
+ 00af57ac ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-d3013138031239cce45bfaf64af4bde9"></a>

### [`00af4c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4c10.md) → [`00af5c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5c04.md) FUN_00af5c04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af4c18",
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
      "00af5c0c",
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
- 00af4c18 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af4c18 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af4c18 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af4c18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af4c1c ["COPY", "register:40e8:8", ["register:8:8"]]
- 00af4c2c ["INT_ADD", "register:40f0:8", ["const:af4c2c:8", "const:4:8"]]
- 00af4c2c ["CALL", null, ["callee:008524fc:8"]]
+ 00af5c20 ["INT_ADD", "register:40f0:8", ["const:af5c20:8", "const:4:8"]]
+ 00af5c20 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0a4d4709fded506df89e9b8b9f80d28e"></a>

### [`00af4d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4d30.md) → [`00af5d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5d24.md) FUN_00af5d24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af4d4c ["INT_ADD", "register:40f0:8", ["const:af4d4c:8", "const:4:8"]]
- 00af4d4c ["CALL", null, ["callee:008524fc:8"]]
+ 00af5d40 ["INT_ADD", "register:40f0:8", ["const:af5d40:8", "const:4:8"]]
+ 00af5d40 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6a7785cc65b6887ef0c7da33e1f41840"></a>

### [`00af4d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4d7c.md) → [`00af5d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5d70.md) FUN_00af5d70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af5da0",
      "incomplete_value": true,
      "site": "00af5dac",
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
    "slot": 0
  }
]
~~~


~~~diff
- 00af4d90 ["INT_ADD", "register:40f0:8", ["const:af4d90:8", "const:4:8"]]
- 00af4d90 ["CALL", null, ["callee:008524fc:8"]]
+ 00af5d84 ["INT_ADD", "register:40f0:8", ["const:af5d84:8", "const:4:8"]]
+ 00af5d84 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-15bd283e7d77484b8db386ddaf5c20af"></a>

### [`00af4dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4dbc.md) → [`00af5db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5db0.md) FUN_00af5db0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af4dd8 ["INT_ADD", "register:40f0:8", ["const:af4dd8:8", "const:4:8"]]
- 00af4dd8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af5dcc ["INT_ADD", "register:40f0:8", ["const:af5dcc:8", "const:4:8"]]
+ 00af5dcc ["CALL", null, ["callee:008524fc:8"]]
- 00af4df4 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af4df4 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af4df4 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af4df4 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af5de8 ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00af5de8 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af5de8 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af5de8 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-ff1f89455da9003c38a9c2e70699df27"></a>

### [`00af4e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4e08.md) → [`00af5dfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5dfc.md) FUN_00af5dfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af4e24 ["INT_ADD", "register:40f0:8", ["const:af4e24:8", "const:4:8"]]
- 00af4e24 ["CALL", null, ["callee:008524fc:8"]]
+ 00af5e18 ["INT_ADD", "register:40f0:8", ["const:af5e18:8", "const:4:8"]]
+ 00af5e18 ["CALL", null, ["callee:008524fc:8"]]
- 00af4e40 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af4e40 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af4e40 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af4e40 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af4e44 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af4e44 ["INT_CARRY", "register:105:1", ["register:4050:4", "tmp:0:4"]]
- 00af4e44 ["INT_SCARRY", "register:106:1", ["register:4050:4", "tmp:0:4"]]
- 00af4e44 ["INT_ADD", "tmp:1:4", ["register:4050:4", "tmp:0:4"]]
~~~


<a id="compare-42cc695a8221f022a599a2a42b8c72fb"></a>

### [`00af4e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4e9c.md) → [`00af5e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5e90.md) FUN_00af5e90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`005fe048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe048.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af4eb8 ["INT_ADD", "register:40f0:8", ["const:af4eb8:8", "const:4:8"]]
- 00af4eb8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af5eac ["INT_ADD", "register:40f0:8", ["const:af5eac:8", "const:4:8"]]
+ 00af5eac ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-826d55254fd6c1caa4e8ddbe5b4821e7"></a>

### [`00af4ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4ee8.md) → [`00af5edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5edc.md) FUN_00af5edc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af4f04 ["INT_ADD", "register:40f0:8", ["const:af4f04:8", "const:4:8"]]
- 00af4f04 ["CALL", null, ["callee:008524fc:8"]]
+ 00af5ef8 ["INT_ADD", "register:40f0:8", ["const:af5ef8:8", "const:4:8"]]
+ 00af5ef8 ["CALL", null, ["callee:008524fc:8"]]
- 00af4f20 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af4f20 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af4f20 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af4f20 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af4f24 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af4f24 ["INT_CARRY", "register:105:1", ["register:4050:4", "tmp:0:4"]]
- 00af4f24 ["INT_SCARRY", "register:106:1", ["register:4050:4", "tmp:0:4"]]
- 00af4f24 ["INT_ADD", "tmp:1:4", ["register:4050:4", "tmp:0:4"]]
~~~


<a id="compare-516d0acfc4c3a4eba2fc89e7beb4fadf"></a>

### [`00af4f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4f7c.md) → [`00af5f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5f70.md) FUN_00af5f70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af4f98 ["INT_ADD", "register:40f0:8", ["const:af4f98:8", "const:4:8"]]
- 00af4f98 ["CALL", null, ["callee:008524fc:8"]]
+ 00af5f8c ["INT_ADD", "register:40f0:8", ["const:af5f8c:8", "const:4:8"]]
+ 00af5f8c ["CALL", null, ["callee:008524fc:8"]]
- 00af4fb4 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af4fb4 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00af4fb4 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00af4fb4 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
+ 00af5fa8 ["COPY", "tmp:0:4", ["register:4098:4"]]
+ 00af5fa8 ["COPY", "tmp:1:8", ["register:4048:8"]]
+ 00af5fa8 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00af5fa8 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-6b10e9b28768486a75b0dd3279054e9b"></a>

### [`00af4fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af4/00af4fc8.md) → [`00af5fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af5/00af5fbc.md) FUN_00af5fbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af4ffc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af5000",
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
      "00af5ff0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af5ff4",
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
- 00af4fdc ["INT_ADD", "register:40f0:8", ["const:af4fdc:8", "const:4:8"]]
- 00af4fdc ["CALL", null, ["callee:008524fc:8"]]
+ 00af5fd0 ["INT_ADD", "register:40f0:8", ["const:af5fd0:8", "const:4:8"]]
+ 00af5fd0 ["CALL", null, ["callee:008524fc:8"]]
- 00af4ff8 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af4ff8 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af4ff8 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af4ff8 ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af4ffc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af4ffc ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00af4ffc ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00af4ffc ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-3192652ff3c125bd3269d57a315adeb2"></a>

### [`00af509c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af509c.md) → [`00af6090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6090.md) FUN_00af6090

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af50b8 ["INT_ADD", "register:40f0:8", ["const:af50b8:8", "const:4:8"]]
- 00af50b8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af60ac ["INT_ADD", "register:40f0:8", ["const:af60ac:8", "const:4:8"]]
+ 00af60ac ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0ebb7e0575bec30915a85fc57870bb2c"></a>

### [`00af50e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af50e8.md) → [`00af60dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af60dc.md) FUN_00af60dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00af5120",
      "incomplete_value": true,
      "site": "00af512c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
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


~~~diff
- 00af50fc ["INT_ADD", "register:40f0:8", ["const:af50fc:8", "const:4:8"]]
- 00af50fc ["CALL", null, ["callee:008524fc:8"]]
+ 00af60f0 ["INT_ADD", "register:40f0:8", ["const:af60f0:8", "const:4:8"]]
+ 00af60f0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-777b0e973081f51f3b5a0fd0f3ae2640"></a>

### [`00af5130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5130.md) → [`00af6124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6124.md) FUN_00af6124

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af514c ["INT_ADD", "register:40f0:8", ["const:af514c:8", "const:4:8"]]
- 00af514c ["CALL", null, ["callee:008524fc:8"]]
+ 00af6140 ["INT_ADD", "register:40f0:8", ["const:af6140:8", "const:4:8"]]
+ 00af6140 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b4b96ddc600a3e03d32a6d65f184df8d"></a>

### [`00af517c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af517c.md) → [`00af6170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6170.md) FUN_00af6170

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af517c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af5180",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af51b0",
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
      "00af6170",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af6174",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af61a4",
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
- 00af517c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af517c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af517c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00af517c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af5180 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af5180 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af5180 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00af5180 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00af5184 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-fd89e0dc9ee0b73d232a2eb18fbf0679"></a>

### [`00af51bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af51bc.md) → [`00af61b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af61b0.md) FUN_00af61b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af51d8 ["INT_ADD", "register:40f0:8", ["const:af51d8:8", "const:4:8"]]
- 00af51d8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af61cc ["INT_ADD", "register:40f0:8", ["const:af61cc:8", "const:4:8"]]
+ 00af61cc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-71fc25f6b34560af6deb7f0cc37a9b1e"></a>

### [`00af5208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5208.md) → [`00af61fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af61fc.md) FUN_00af61fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af5224 ["INT_ADD", "register:40f0:8", ["const:af5224:8", "const:4:8"]]
- 00af5224 ["CALL", null, ["callee:008524fc:8"]]
+ 00af6218 ["INT_ADD", "register:40f0:8", ["const:af6218:8", "const:4:8"]]
+ 00af6218 ["CALL", null, ["callee:008524fc:8"]]
- 00af5234 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af5234 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af5234 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af5234 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af5238 ["COPY", "register:4048:8", ["const:4c8c:8"]]
~~~


<a id="compare-d925ba3ac43229de3134a49ce6683de5"></a>

### [`00af5254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5254.md) → [`00af6248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6248.md) FUN_00af6248

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af5270 ["INT_ADD", "register:40f0:8", ["const:af5270:8", "const:4:8"]]
- 00af5270 ["CALL", null, ["callee:008524fc:8"]]
+ 00af6264 ["INT_ADD", "register:40f0:8", ["const:af6264:8", "const:4:8"]]
+ 00af6264 ["CALL", null, ["callee:008524fc:8"]]
- 00af528c ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00af528c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af528c ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00af528c ["INT_ADD", "tmp:2:8", ["register:4040:8", "tmp:1:8"]]
- 00af5290 ["COPY", "tmp:0:4", ["register:4098:4"]]
- 00af5290 ["INT_CARRY", "register:105:1", ["register:4050:4", "tmp:0:4"]]
- 00af5290 ["INT_SCARRY", "register:106:1", ["register:4050:4", "tmp:0:4"]]
- 00af5290 ["INT_ADD", "tmp:1:4", ["register:4050:4", "tmp:0:4"]]
~~~


<a id="compare-a536e31c1a1c887445f3ca610779a334"></a>

### [`00af52a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af52a8.md) → [`00af629c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af629c.md) FUN_00af629c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 11件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 11件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`005fe048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe048.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af52dc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af52e0",
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
      "00af62d0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af62d4",
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
- 00af52bc ["INT_ADD", "register:40f0:8", ["const:af52bc:8", "const:4:8"]]
- 00af52bc ["CALL", null, ["callee:008524fc:8"]]
+ 00af62b0 ["INT_ADD", "register:40f0:8", ["const:af62b0:8", "const:4:8"]]
+ 00af62b0 ["CALL", null, ["callee:008524fc:8"]]
- 00af52cc ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af52cc ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af52cc ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af52cc ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af52d0 ["COPY", "register:4048:8", ["const:48e4:8"]]
~~~


<a id="compare-c171c87d42cb4f5d47fe608d15c0bb51"></a>

### [`00af52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af52e8.md) → [`00af62dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af62dc.md) FUN_00af62dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00af29c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af2/00af29c0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005fe048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe048.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00af39b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af3/00af39b4.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af5304 ["INT_ADD", "register:40f0:8", ["const:af5304:8", "const:4:8"]]
- 00af5304 ["CALL", null, ["callee:008524fc:8"]]
+ 00af62f8 ["INT_ADD", "register:40f0:8", ["const:af62f8:8", "const:4:8"]]
+ 00af62f8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-11a4372e7cfa2f22825296051c085f75"></a>

### [`00af5334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5334.md) → [`00af6328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6328.md) FUN_00af6328

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 10件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707984.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 10件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00707d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00707/00707d34.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af5368",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af536c",
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
      "00af635c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af6360",
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
- 00af5348 ["INT_ADD", "register:40f0:8", ["const:af5348:8", "const:4:8"]]
- 00af5348 ["CALL", null, ["callee:008524fc:8"]]
+ 00af633c ["INT_ADD", "register:40f0:8", ["const:af633c:8", "const:4:8"]]
+ 00af633c ["CALL", null, ["callee:008524fc:8"]]
- 00af5358 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af5358 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af5358 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af5358 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af535c ["COPY", "register:4048:8", ["const:48e8:8"]]
~~~


<a id="compare-53aaf6e50d1b25af4ddd81a9d9a0837b"></a>

### [`00af5374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5374.md) → [`00af6368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6368.md) FUN_00af6368

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`005fe048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe048.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af5390 ["INT_ADD", "register:40f0:8", ["const:af5390:8", "const:4:8"]]
- 00af5390 ["CALL", null, ["callee:008524fc:8"]]
+ 00af6384 ["INT_ADD", "register:40f0:8", ["const:af6384:8", "const:4:8"]]
+ 00af6384 ["CALL", null, ["callee:008524fc:8"]]
- 00af53bc ["COPY", "register:0:8", ["register:40f0:8"]]
- 00af53bc ["RETURN", null, ["register:0:8"]]
+ 00af63b0 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00af63b0 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-13ae7ea5638bf4384417955edb2a0965"></a>

### [`00af53c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af53c0.md) → [`00af63b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af63b4.md) FUN_00af63b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.95% / 新版 80.95%

アドレスに依存する影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af53c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af53c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af53c8",
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
      "00af63b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af63b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af63bc",
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
- 00af53c0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af53c0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af53c0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af53c0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af53c4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af53c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af53c8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af53c8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af53c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af53c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7ca542111f6ac32dd23f643b14a45314"></a>

### [`00af54ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af54ec.md) → [`00af64e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af64e0.md) FUN_00af64e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af6528",
      "incomplete_value": true,
      "site": "00af6538",
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
      "definition_site": "00af5534",
      "incomplete_value": true,
      "site": "00af5544",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00af6518",
      "DATA",
      [
        "storage",
        "0030a3a8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00af6518",
      "DATA",
      [
        "storage",
        "0030a3e8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af5508 ["INT_ADD", "register:40f0:8", ["const:af5508:8", "const:4:8"]]
- 00af5508 ["CALL", null, ["callee:008524fc:8"]]
+ 00af64fc ["INT_ADD", "register:40f0:8", ["const:af64fc:8", "const:4:8"]]
+ 00af64fc ["CALL", null, ["callee:008524fc:8"]]
- 00af5520 ["COPY", "tmp:0:8", ["const:3a8:8"]]
- 00af5520 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af5520 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af5520 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af6514 ["COPY", "tmp:0:8", ["const:3e8:8"]]
+ 00af6514 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af6514 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af6514 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-213271330fe544bf12ca91552cc7237c"></a>

### [`00af5548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5548.md) → [`00af653c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af653c.md) FUN_00af653c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af5584",
      "DATA",
      [
        "storage",
        "0030a3a8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00af6578",
      "DATA",
      [
        "storage",
        "0030a3e8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af5568 ["INT_ADD", "register:40f0:8", ["const:af5568:8", "const:4:8"]]
- 00af5568 ["CALL", null, ["callee:008524fc:8"]]
+ 00af655c ["INT_ADD", "register:40f0:8", ["const:af655c:8", "const:4:8"]]
+ 00af655c ["CALL", null, ["callee:008524fc:8"]]
- 00af5580 ["COPY", "tmp:0:8", ["const:3a8:8"]]
- 00af5580 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af5580 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af5580 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00af5584 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af5584 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af5584 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:2:8"]]
- 00af5584 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
~~~


<a id="compare-e3a8f150bec77ec8b15ef6cf83e48b8b"></a>

### [`00af5654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5654.md) → [`00af6648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6648.md) FUN_00af6648

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00af6690",
      "incomplete_value": true,
      "site": "00af66a0",
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
      "definition_site": "00af569c",
      "incomplete_value": true,
      "site": "00af56ac",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00af6680",
      "DATA",
      [
        "storage",
        "0030a3b4",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00af6680",
      "DATA",
      [
        "storage",
        "0030a3f4",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af5670 ["INT_ADD", "register:40f0:8", ["const:af5670:8", "const:4:8"]]
- 00af5670 ["CALL", null, ["callee:008524fc:8"]]
+ 00af6664 ["INT_ADD", "register:40f0:8", ["const:af6664:8", "const:4:8"]]
+ 00af6664 ["CALL", null, ["callee:008524fc:8"]]
- 00af5688 ["COPY", "tmp:0:8", ["const:3b4:8"]]
- 00af5688 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af5688 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af5688 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af667c ["COPY", "tmp:0:8", ["const:3f4:8"]]
+ 00af667c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af667c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af667c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8fa45c0bb84268fe9857b073cf1e0491"></a>

### [`00af56b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af56b0.md) → [`00af66a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af66a4.md) FUN_00af66a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af56c4 ["INT_ADD", "register:40f0:8", ["const:af56c4:8", "const:4:8"]]
- 00af56c4 ["CALL", null, ["callee:008524fc:8"]]
+ 00af66b8 ["INT_ADD", "register:40f0:8", ["const:af66b8:8", "const:4:8"]]
+ 00af66b8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-72bcc536f2f7aad63e7d525ad3a51898"></a>

### [`00af56f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af56f0.md) → [`00af66e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af66e4.md) FUN_00af66e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af570c ["INT_ADD", "register:40f0:8", ["const:af570c:8", "const:4:8"]]
- 00af570c ["CALL", null, ["callee:008524fc:8"]]
+ 00af6700 ["INT_ADD", "register:40f0:8", ["const:af6700:8", "const:4:8"]]
+ 00af6700 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-e5e1cff6f49ddc6ac78ac08dc0289b3c"></a>

### [`00af58a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af58a0.md) → [`00af6894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6894.md) FUN_00af6894

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00af68e0",
      "incomplete_value": true,
      "site": "00af68e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00af58ec",
      "incomplete_value": true,
      "site": "00af58ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
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
      "00af68d0",
      "DATA",
      [
        "storage",
        "0030a3b4",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00af68d0",
      "DATA",
      [
        "storage",
        "0030a3f4",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af58c0 ["INT_ADD", "register:40f0:8", ["const:af58c0:8", "const:4:8"]]
- 00af58c0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af68b4 ["INT_ADD", "register:40f0:8", ["const:af68b4:8", "const:4:8"]]
+ 00af68b4 ["CALL", null, ["callee:008524fc:8"]]
- 00af58d8 ["COPY", "tmp:0:8", ["const:3b4:8"]]
- 00af58d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af58d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af58d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00af68cc ["COPY", "tmp:0:8", ["const:3f4:8"]]
+ 00af68cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00af68cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00af68cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d8a0cd95728b43955f41c398745e7266"></a>

### [`00af5900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5900.md) → [`00af68f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af68f4.md) FUN_00af68f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00716ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716ae8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00716e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716e98.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af5934",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af5938",
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
      "00af6928",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00af692c",
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
- 00af5914 ["INT_ADD", "register:40f0:8", ["const:af5914:8", "const:4:8"]]
- 00af5914 ["CALL", null, ["callee:008524fc:8"]]
+ 00af6908 ["INT_ADD", "register:40f0:8", ["const:af6908:8", "const:4:8"]]
+ 00af6908 ["CALL", null, ["callee:008524fc:8"]]
- 00af5924 ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af5924 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af5924 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af5924 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af5928 ["COPY", "register:4048:8", ["const:4aa0:8"]]
~~~


<a id="compare-f5df89d558f5e6cdadc37add04bbf8c7"></a>

### [`00af5940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5940.md) → [`00af6934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6934.md) FUN_00af6934

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.95% / 新版 78.95%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af595c ["INT_ADD", "register:40f0:8", ["const:af595c:8", "const:4:8"]]
- 00af595c ["CALL", null, ["callee:008524fc:8"]]
+ 00af6950 ["INT_ADD", "register:40f0:8", ["const:af6950:8", "const:4:8"]]
+ 00af6950 ["CALL", null, ["callee:008524fc:8"]]
- 00af596c ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af596c ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af596c ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af596c ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af5970 ["COPY", "register:4048:8", ["const:4aa0:8"]]
~~~


<a id="compare-348dc6246f32ed856c090c600d62bda5"></a>

### [`00af59f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af59f0.md) → [`00af69e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af69e4.md) FUN_00af69e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af5a2c",
      "DATA",
      [
        "storage",
        "0030a3c0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00af6a20",
      "DATA",
      [
        "storage",
        "0030a400",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00af5a10 ["INT_ADD", "register:40f0:8", ["const:af5a10:8", "const:4:8"]]
- 00af5a10 ["CALL", null, ["callee:008524fc:8"]]
+ 00af6a04 ["INT_ADD", "register:40f0:8", ["const:af6a04:8", "const:4:8"]]
+ 00af6a04 ["CALL", null, ["callee:008524fc:8"]]
- 00af5a28 ["COPY", "tmp:0:8", ["const:3c0:8"]]
- 00af5a28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00af5a28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00af5a28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00af5a2c ["INT_SEXT", "tmp:0:8", ["register:4098:4"]]
- 00af5a2c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00af5a2c ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:2:8"]]
- 00af5a2c ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
~~~


<a id="compare-4562f1d911321284ca5b33e0b7e9dbfc"></a>

### [`00af5a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5a90.md) → [`00af6a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6a84.md) FUN_00af6a84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.68% / 新版 73.68%

アドレスに依存する影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00af5a90",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af5a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af5a98",
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
      "00af6a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00af6a88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00af6a8c",
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
- 00af5a90 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00af5a90 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00af5a90 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00af5a90 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00af5a94 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00af5a94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00af5a98 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00af5a98 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00af5a98 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00af5a98 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bb5ab9e06ca3b66045e236966d2111ae"></a>

### [`00af5adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5adc.md) → [`00af6ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6ad0.md) FUN_00af6ad0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00af5af8 ["INT_ADD", "register:40f0:8", ["const:af5af8:8", "const:4:8"]]
- 00af5af8 ["CALL", null, ["callee:008524fc:8"]]
+ 00af6aec ["INT_ADD", "register:40f0:8", ["const:af6aec:8", "const:4:8"]]
+ 00af6aec ["CALL", null, ["callee:008524fc:8"]]
- 00af5b08 ["INT_SEXT", "tmp:0:8", ["register:40a0:4"]]
- 00af5b08 ["INT_SEXT", "tmp:1:8", ["register:4048:4"]]
- 00af5b08 ["INT_MULT", "tmp:2:8", ["tmp:0:8", "tmp:1:8"]]
- 00af5b08 ["INT_ADD", "register:4040:8", ["register:4040:8", "tmp:2:8"]]
- 00af5b0c ["COPY", "register:4048:8", ["const:4c68:8"]]
~~~


<a id="compare-78574eb1bff30300d84313a482f6d721"></a>

### [`00af5b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5b30.md) → [`00af6b24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6b24.md) FUN_00af6b24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 17件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`005e0f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0f2c.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 17件 [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`005e12dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e12dc.md) [`005e1f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f20.md) [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.64% / 新版 97.64%

アドレスに依存する影響 `call_argument_candidate` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af6bb8",
      "incomplete_value": true,
      "site": "00af6bc8",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af5bdc",
      "incomplete_value": true,
      "site": "00af5bec",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af5c48",
      "incomplete_value": true,
      "site": "00af5c58",
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
    "ordinal": 10,
    "slot": 1
  }
]
~~~


~~~diff
- 00af5bd4 ["INT_ADD", "register:40f0:8", ["const:af5bd4:8", "const:4:8"]]
- 00af5bd4 ["CALL", null, ["callee:00b03d04:8"]]
+ 00af6bc8 ["INT_ADD", "register:40f0:8", ["const:af6bc8:8", "const:4:8"]]
+ 00af6bc8 ["CALL", null, ["callee:00b03d04:8"]]
- 00af5bec ["INT_ADD", "register:40f0:8", ["const:af5bec:8", "const:4:8"]]
- 00af5bec ["CALL", null, ["callee:00b03dd4:8"]]
+ 00af6be0 ["INT_ADD", "register:40f0:8", ["const:af6be0:8", "const:4:8"]]
+ 00af6be0 ["CALL", null, ["callee:00b03dd4:8"]]
- 00af5c58 ["INT_ADD", "register:40f0:8", ["const:af5c58:8", "const:4:8"]]
- 00af5c58 ["CALL", null, ["callee:00b04044:8"]]
+ 00af6c4c ["INT_ADD", "register:40f0:8", ["const:af6c4c:8", "const:4:8"]]
+ 00af6c4c ["CALL", null, ["callee:00b04044:8"]]
~~~


<a id="compare-894cb48d64b79e376be8d05c309a0b24"></a>

### [`00af5d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af5/00af5d2c.md) → [`00af6d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af6/00af6d20.md) FUN_00af6d20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 4件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00af6bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6bcc.md) [`00af6c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af6c3c.md)
- 新版 呼出元 4件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 4件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00af7bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7bc0.md) [`00af7c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7c30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 50.24% / 新版 50.24%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 25件, `unresolved_call_alignment` 39件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af6dfc",
      "incomplete_value": true,
      "site": "00af6e00",
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
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00af5e08",
      "incomplete_value": true,
      "site": "00af5e0c",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00af6f8c",
      "incomplete_value": true,
      "site": "00af6f90",
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
    "old": {
      "definition_site": "00af5f98",
      "incomplete_value": true,
      "site": "00af5f9c",
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
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00af6020",
      "incomplete_value": true,
      "site": "00af6024",
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
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
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
      "unmatched:00af5d2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af5d30",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00af5d34",
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
      "00af6d20",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00af6d24",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00af6d28",
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
- 00af5e0c ["INT_ADD", "register:40f0:8", ["const:af5e0c:8", "const:4:8"]]
- 00af5e0c ["CALL", null, ["callee:005e7810:8"]]
+ 00af6e00 ["INT_ADD", "register:40f0:8", ["const:af6e00:8", "const:4:8"]]
+ 00af6e00 ["CALL", null, ["callee:005e7810:8"]]
- 00af5f9c ["INT_ADD", "register:40f0:8", ["const:af5f9c:8", "const:4:8"]]
- 00af5f9c ["CALL", null, ["callee:005e7810:8"]]
+ 00af6f90 ["INT_ADD", "register:40f0:8", ["const:af6f90:8", "const:4:8"]]
+ 00af6f90 ["CALL", null, ["callee:005e7810:8"]]
- 00af6024 ["INT_ADD", "register:40f0:8", ["const:af6024:8", "const:4:8"]]
- 00af6024 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7018 ["INT_ADD", "register:40f0:8", ["const:af7018:8", "const:4:8"]]
+ 00af7018 ["CALL", null, ["callee:005e7810:8"]]
~~~


<a id="compare-0a114b81d2b654cc8a6f6d58b4516e79"></a>

### [`00af63cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af63cc.md) → [`00af73c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af73c0.md) FUN_00af73c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`005f3158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f3/005f3158.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00af63e0 ["INT_ADD", "register:40f0:8", ["const:af63e0:8", "const:4:8"]]
- 00af63e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00af73d4 ["INT_ADD", "register:40f0:8", ["const:af73d4:8", "const:4:8"]]
+ 00af73d4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b2905f646182877c73eeacda143bc811"></a>

### [`00af644c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af6/00af644c.md) → [`00af7440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af7/00af7440.md) FUN_00af7440

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00710128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710128.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007104d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007104d8.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00af6460 ["INT_ADD", "register:40f0:8", ["const:af6460:8", "const:4:8"]]
- 00af6460 ["CALL", null, ["callee:008524fc:8"]]
+ 00af7454 ["INT_ADD", "register:40f0:8", ["const:af7454:8", "const:4:8"]]
+ 00af7454 ["CALL", null, ["callee:008524fc:8"]]
- 00af6474 ["INT_ADD", "register:40f0:8", ["const:af6474:8", "const:4:8"]]
- 00af6474 ["CALL", null, ["callee:005e7810:8"]]
+ 00af7468 ["INT_ADD", "register:40f0:8", ["const:af7468:8", "const:4:8"]]
+ 00af7468 ["CALL", null, ["callee:005e7810:8"]]
- 00af6488 ["INT_ADD", "register:40f0:8", ["const:af6488:8", "const:4:8"]]
- 00af6488 ["CALL", null, ["callee:008524fc:8"]]
+ 00af747c ["INT_ADD", "register:40f0:8", ["const:af747c:8", "const:4:8"]]
+ 00af747c ["CALL", null, ["callee:008524fc:8"]]
~~~


