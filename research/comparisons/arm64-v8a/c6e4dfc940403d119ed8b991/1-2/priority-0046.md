# v16.0.2 → v16.0.3 · 最優先の変更候補 (46)

[一覧の目次](README.md)

<a id="compare-664f4c53b73ffee44ac56016b311904c"></a>

### [`007f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f39fc.md) → [`007f4960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4960.md) FUN_007f4960

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
      "definition_site": "007f4974",
      "incomplete_value": false,
      "site": "007f4978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3a10",
      "incomplete_value": false,
      "site": "007f3a14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
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
      "007f4978",
      "DATA",
      [
        "storage",
        "00c7b1f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4978",
      "DATA",
      [
        "storage",
        "00c7c1c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3a08 ["INT_ADD", "register:40f0:8", ["const:7f3a08:8", "const:4:8"]]
- 007f3a08 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f496c ["INT_ADD", "register:40f0:8", ["const:7f496c:8", "const:4:8"]]
+ 007f496c ["CALL", null, ["callee:00c58f30:8"]]
- 007f3a0c ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f4970 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f3a10 ["COPY", "tmp:0:8", ["const:1f8:8"]]
- 007f3a10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4974 ["COPY", "tmp:0:8", ["const:1c8:8"]]
+ 007f4974 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4974 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4974 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ee33854d4740e41e741daaf1e7d926b"></a>

### [`007f3a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3a20.md) → [`007f4984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4984.md) FUN_007f4984

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
      "definition_site": "007f4988",
      "incomplete_value": false,
      "site": "007f498c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3a24",
      "incomplete_value": false,
      "site": "007f3a28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:1f8:8"
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
      "007f498c",
      "DATA",
      [
        "storage",
        "00c7b1f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f498c",
      "DATA",
      [
        "storage",
        "00c7c1c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3a20 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f4984 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f3a24 ["COPY", "tmp:0:8", ["const:1f8:8"]]
- 007f3a24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4988 ["COPY", "tmp:0:8", ["const:1c8:8"]]
+ 007f4988 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4988 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4988 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a933c9abf66db3ea42bfdbfd4593248b"></a>

### [`007f3a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3a7c.md) → [`007f49e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f49e0.md) FUN_007f49e0

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
      "definition_site": "007f4a04",
      "incomplete_value": false,
      "site": "007f4a04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3aa0",
      "incomplete_value": false,
      "site": "007f3aa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:288:8"
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
      "007f4a04",
      "DATA",
      [
        "storage",
        "00c7b288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4a04",
      "DATA",
      [
        "storage",
        "00c7c258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3a90 ["INT_ADD", "register:40f0:8", ["const:7f3a90:8", "const:4:8"]]
- 007f3a90 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f49f4 ["INT_ADD", "register:40f0:8", ["const:7f49f4:8", "const:4:8"]]
+ 007f49f4 ["CALL", null, ["callee:00c58f30:8"]]
- 007f3a98 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f49fc ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f3a9c ["COPY", "tmp:0:8", ["const:288:8"]]
- 007f3a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4a00 ["COPY", "tmp:0:8", ["const:258:8"]]
+ 007f4a00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4a00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4a00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d9f83259d817a3cb3e4c320a1784b7ef"></a>

### [`007f3e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3e14.md) → [`007f4d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4d78.md) FUN_007f4d78

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
      "definition_site": "007f4d8c",
      "incomplete_value": false,
      "site": "007f4d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:2c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f3e28",
      "incomplete_value": false,
      "site": "007f3e2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:2f8:8"
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
      "007f4d90",
      "DATA",
      [
        "storage",
        "00c7b2f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f4d90",
      "DATA",
      [
        "storage",
        "00c7c2c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f3e20 ["INT_ADD", "register:40f0:8", ["const:7f3e20:8", "const:4:8"]]
- 007f3e20 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f4d84 ["INT_ADD", "register:40f0:8", ["const:7f4d84:8", "const:4:8"]]
+ 007f4d84 ["CALL", null, ["callee:00c58f30:8"]]
- 007f3e24 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f4d88 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f3e28 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 007f3e28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f3e28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f3e28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f4d8c ["COPY", "tmp:0:8", ["const:2c8:8"]]
+ 007f4d8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4d8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f4d8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ee3212889640013cce8c25056d7a538e"></a>

### [`007f3e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3e50.md) → [`007f4db4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4db4.md) FUN_007f4db4

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
      "site": "007f4dd8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f3e74",
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
      "007f4dd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f4dd8",
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
- 007f3e74 ["INT_ADD", "register:40f0:8", ["const:7f3e74:8", "const:4:8"]]
- 007f3e74 ["CALL", null, ["ram:47ad34:8"]]
+ 007f4dd8 ["INT_ADD", "register:40f0:8", ["const:7f4dd8:8", "const:4:8"]]
+ 007f4dd8 ["CALL", null, ["ram:47b054:8"]]
- 007f3e80 ["INT_ADD", "register:40f0:8", ["const:7f3e80:8", "const:4:8"]]
- 007f3e80 ["CALL", null, ["callee:0047d134:8"]]
+ 007f4de4 ["INT_ADD", "register:40f0:8", ["const:7f4de4:8", "const:4:8"]]
+ 007f4de4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-04b76ec9ca37eda90d7a4a8c4c44f522"></a>

### [`007f3ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ee4.md) → [`007f4e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4e48.md) FUN_007f4e48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 10件 [`006d73e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d73e4.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 10件 [`006d7794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7794.md) [`006d7a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7a58.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`006d7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aec.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.39% / 新版 86.39%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f40f0",
      "incomplete_value": true,
      "site": "007f40fc",
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
                "register:40b8:8"
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f5108",
      "incomplete_value": false,
      "site": "007f510c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2aa000:8"
          ],
          [
            "leaf",
            "const:42:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f41a4",
      "incomplete_value": false,
      "site": "007f41a8",
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
      "unmatched:007f3ee8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f3eec",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f3ef0",
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
      "007f4e4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007f4e50",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007f4e54",
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
- 007f40fc ["INT_ADD", "register:40f0:8", ["const:7f40fc:8", "const:4:8"]]
- 007f40fc ["CALL", null, ["callee:00c5b930:8"]]
+ 007f5060 ["INT_ADD", "register:40f0:8", ["const:7f5060:8", "const:4:8"]]
+ 007f5060 ["CALL", null, ["callee:00c5b930:8"]]
- 007f41a8 ["INT_ADD", "register:40f0:8", ["const:7f41a8:8", "const:4:8"]]
- 007f41a8 ["CALL", null, ["callee:006d7a58:8"]]
+ 007f510c ["INT_ADD", "register:40f0:8", ["const:7f510c:8", "const:4:8"]]
+ 007f510c ["CALL", null, ["callee:006d7a58:8"]]
- 007f3ee4 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-270f4f58b5f5298349f5a4b92c6e28d1"></a>

### [`007f41e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f41e8.md) → [`007f514c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f514c.md) FUN_007f514c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d7be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7be8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 9件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`006d7a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7a58.md) [`006d7f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7f98.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f428c",
      "incomplete_value": true,
      "site": "007f4298",
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
    "new": null,
    "old": {
      "definition_site": "007f4290",
      "incomplete_value": false,
      "site": "007f4298",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f4294",
      "incomplete_value": true,
      "site": "007f4298",
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
      "unmatched:007f41ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f41f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f41f4",
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
      "007f5150",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007f5154",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007f5158",
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
- 007f4298 ["INT_ADD", "register:40f0:8", ["const:7f4298:8", "const:4:8"]]
- 007f4298 ["CALL", null, ["callee:00c59130:8"]]
+ 007f51fc ["INT_ADD", "register:40f0:8", ["const:7f51fc:8", "const:4:8"]]
+ 007f51fc ["CALL", null, ["callee:00c59130:8"]]
- 007f42cc ["INT_ADD", "register:40f0:8", ["const:7f42cc:8", "const:4:8"]]
- 007f42cc ["CALL", null, ["callee:00c5b060:8"]]
+ 007f5230 ["INT_ADD", "register:40f0:8", ["const:7f5230:8", "const:4:8"]]
+ 007f5230 ["CALL", null, ["callee:00c5b060:8"]]
- 007f4364 ["INT_ADD", "register:40f0:8", ["const:7f4364:8", "const:4:8"]]
- 007f4364 ["CALL", null, ["callee:00c5b060:8"]]
+ 007f52c8 ["INT_ADD", "register:40f0:8", ["const:7f52c8:8", "const:4:8"]]
+ 007f52c8 ["CALL", null, ["callee:00c5b060:8"]]
~~~


<a id="compare-3502acfffe54e67276d22a5a69dbd080"></a>

### [`007f4600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4600.md) → [`007f5564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5564.md) FUN_007f5564

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
      "unmatched:007f4624",
      "DATA",
      [
        "storage",
        "00c7b400",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f4628",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f462c",
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
      "007f5588",
      "DATA",
      [
        "storage",
        "00c7c3d0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f558c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f5590",
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
- 007f4614 ["INT_ADD", "register:40f0:8", ["const:7f4614:8", "const:4:8"]]
- 007f4614 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f5578 ["INT_ADD", "register:40f0:8", ["const:7f5578:8", "const:4:8"]]
+ 007f5578 ["CALL", null, ["callee:00c58f30:8"]]
- 007f461c ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f5580 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f4620 ["COPY", "tmp:0:8", ["const:400:8"]]
- 007f4620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5346a0ab8d10f8a484d953e1f397d683"></a>

### [`007f4634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4634.md) → [`007f5598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5598.md) FUN_007f5598

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
      "definition_site": "007f55a4",
      "incomplete_value": false,
      "site": "007f55a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4640",
      "incomplete_value": false,
      "site": "007f4640",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:400:8"
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
      "007f55a4",
      "DATA",
      [
        "storage",
        "00c7b400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f55a4",
      "DATA",
      [
        "storage",
        "00c7c3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4638 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f559c ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f463c ["COPY", "tmp:0:8", ["const:400:8"]]
- 007f463c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f463c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f463c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f55a0 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 007f55a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f55a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f55a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-33677e386d5209a41a09503010c1ffe2"></a>

### [`007f4650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4650.md) → [`007f55b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f55b4.md) FUN_007f55b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f469c",
      "incomplete_value": true,
      "site": "007f46a4",
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
            "const:2f38:8"
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
      "definition_site": "007f4698",
      "incomplete_value": false,
      "site": "007f46a4",
      "value": [
        "leaf",
        "const:d:8"
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
      "definition_site": "007f46ac",
      "incomplete_value": true,
      "site": "007f46b4",
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
            "register:40a0:8"
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
      "unmatched:007f4668",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f55e4"
      ]
    ]
  ],
  "added": [
    [
      "007f55cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f55e4"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f46a4 ["INT_ADD", "register:40f0:8", ["const:7f46a4:8", "const:4:8"]]
- 007f46a4 ["CALL", null, ["callee:008b89cc:8"]]
+ 007f5608 ["INT_ADD", "register:40f0:8", ["const:7f5608:8", "const:4:8"]]
+ 007f5608 ["CALL", null, ["callee:008b89cc:8"]]
- 007f46b4 ["INT_ADD", "register:40f0:8", ["const:7f46b4:8", "const:4:8"]]
- 007f46b4 ["CALL", null, ["callee:008b89cc:8"]]
+ 007f5618 ["INT_ADD", "register:40f0:8", ["const:7f5618:8", "const:4:8"]]
+ 007f5618 ["CALL", null, ["callee:008b89cc:8"]]
- 007f4668 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f4668 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-822fbc2d5989aa8bf3e038420aee42f3"></a>

### [`007f4700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4700.md) → [`007f5664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5664.md) FUN_007f5664

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
      "unmatched:007f4724",
      "DATA",
      [
        "storage",
        "00c7b480",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f4728",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f472c",
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
      "007f5688",
      "DATA",
      [
        "storage",
        "00c7c450",
        null,
        "undefined *"
      ]
    ],
    [
      "007f568c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f5690",
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
- 007f4714 ["INT_ADD", "register:40f0:8", ["const:7f4714:8", "const:4:8"]]
- 007f4714 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f5678 ["INT_ADD", "register:40f0:8", ["const:7f5678:8", "const:4:8"]]
+ 007f5678 ["CALL", null, ["callee:00c58f30:8"]]
- 007f471c ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f5680 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f4720 ["COPY", "tmp:0:8", ["const:480:8"]]
- 007f4720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9dbe9349c218a64e26c68c1b268e765c"></a>

### [`007f4734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4734.md) → [`007f5698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5698.md) FUN_007f5698

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
      "definition_site": "007f56a4",
      "incomplete_value": false,
      "site": "007f56a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4740",
      "incomplete_value": false,
      "site": "007f4740",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "007f56a4",
      "DATA",
      [
        "storage",
        "00c7b480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f56a4",
      "DATA",
      [
        "storage",
        "00c7c450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4738 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f569c ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f473c ["COPY", "tmp:0:8", ["const:480:8"]]
- 007f473c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f473c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f473c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f56a0 ["COPY", "tmp:0:8", ["const:450:8"]]
+ 007f56a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f56a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f56a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2fd70c874276c4fc9c2addea86b7fb47"></a>

### [`007f4750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4750.md) → [`007f56b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f56b4.md) FUN_007f56b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f476c ["INT_ADD", "register:40f0:8", ["const:7f476c:8", "const:4:8"]]
- 007f476c ["CALL", null, ["callee:008b89cc:8"]]
+ 007f56d0 ["INT_ADD", "register:40f0:8", ["const:7f56d0:8", "const:4:8"]]
+ 007f56d0 ["CALL", null, ["callee:008b89cc:8"]]
- 007f4770 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007f4770 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007f56d4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007f56d4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007f477c ["INT_ADD", "register:40f0:8", ["const:7f477c:8", "const:4:8"]]
- 007f477c ["CALL", null, ["callee:008b89cc:8"]]
+ 007f56e0 ["INT_ADD", "register:40f0:8", ["const:7f56e0:8", "const:4:8"]]
+ 007f56e0 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-4fa9a31259e71670eda86cb45a0fb1e2"></a>

### [`007f47e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f47e8.md) → [`007f574c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f574c.md) FUN_007f574c

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
      "definition_site": "007f5770",
      "incomplete_value": false,
      "site": "007f5770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f480c",
      "incomplete_value": false,
      "site": "007f480c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:500:8"
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
      "007f5770",
      "DATA",
      [
        "storage",
        "00c7b500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5770",
      "DATA",
      [
        "storage",
        "00c7c4d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f47fc ["INT_ADD", "register:40f0:8", ["const:7f47fc:8", "const:4:8"]]
- 007f47fc ["CALL", null, ["callee:00c58f30:8"]]
+ 007f5760 ["INT_ADD", "register:40f0:8", ["const:7f5760:8", "const:4:8"]]
+ 007f5760 ["CALL", null, ["callee:00c58f30:8"]]
- 007f4804 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f5768 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f4808 ["COPY", "tmp:0:8", ["const:500:8"]]
- 007f4808 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4808 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4808 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f576c ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 007f576c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f576c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f576c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6b7d44c50eaf829a48752104754e089c"></a>

### [`007f481c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f481c.md) → [`007f5780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5780.md) FUN_007f5780

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
      "definition_site": "007f578c",
      "incomplete_value": false,
      "site": "007f578c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4828",
      "incomplete_value": false,
      "site": "007f4828",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:500:8"
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
      "007f578c",
      "DATA",
      [
        "storage",
        "00c7b500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f578c",
      "DATA",
      [
        "storage",
        "00c7c4d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4820 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f5784 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f4824 ["COPY", "tmp:0:8", ["const:500:8"]]
- 007f4824 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f4824 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f4824 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f5788 ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 007f5788 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5788 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f5788 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-98a68ce2a0b7f4e5b0639fb4f32a18c3"></a>

### [`007f4838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4838.md) → [`007f579c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f579c.md) FUN_007f579c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008b7da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7da0.md) [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f487c ["INT_ADD", "register:40f0:8", ["const:7f487c:8", "const:4:8"]]
- 007f487c ["CALL", null, ["callee:008b89cc:8"]]
+ 007f57e0 ["INT_ADD", "register:40f0:8", ["const:7f57e0:8", "const:4:8"]]
+ 007f57e0 ["CALL", null, ["callee:008b89cc:8"]]
- 007f488c ["INT_ADD", "register:40f0:8", ["const:7f488c:8", "const:4:8"]]
- 007f488c ["CALL", null, ["callee:008b89cc:8"]]
+ 007f57f0 ["INT_ADD", "register:40f0:8", ["const:7f57f0:8", "const:4:8"]]
+ 007f57f0 ["CALL", null, ["callee:008b89cc:8"]]
- 007f4898 ["INT_ADD", "register:40f0:8", ["const:7f4898:8", "const:4:8"]]
- 007f4898 ["CALL", null, ["callee:008ba294:8"]]
+ 007f57fc ["INT_ADD", "register:40f0:8", ["const:7f57fc:8", "const:4:8"]]
+ 007f57fc ["CALL", null, ["callee:008ba294:8"]]
~~~


<a id="compare-b21c761692aff5fee1c3d1f3e0f77ef9"></a>

### [`007f48f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f48f0.md) → [`007f5854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5854.md) FUN_007f5854

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
      "definition_site": "007f5864",
      "incomplete_value": false,
      "site": "007f5868",
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
      "unmatched:007f48f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f48f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f4914",
      "DATA",
      [
        "storage",
        "00c7b580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5854",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f5858",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f5878",
      "DATA",
      [
        "storage",
        "00c7c550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4904 ["INT_ADD", "register:40f0:8", ["const:7f4904:8", "const:4:8"]]
- 007f4904 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f5868 ["INT_ADD", "register:40f0:8", ["const:7f5868:8", "const:4:8"]]
+ 007f5868 ["CALL", null, ["callee:00c58f30:8"]]
- 007f48f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f48f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f48f0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007f48f0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f48f4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f48f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-117eae275827f64cda38f5ffd9f29d3c"></a>

### [`007f4924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4924.md) → [`007f5888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5888.md) FUN_007f5888

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
      "unmatched:007f4930",
      "DATA",
      [
        "storage",
        "00c7b580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5894",
      "DATA",
      [
        "storage",
        "00c7c550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4924 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f4924 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f4928 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f492c ["COPY", "tmp:0:8", ["const:580:8"]]
- 007f492c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f492c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f492c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d8b7d86c1d32a14f3fb917ddc5b54ba9"></a>

### [`007f4940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4940.md) → [`007f58a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f58a4.md) FUN_007f58a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f494c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f58bc"
      ]
    ]
  ],
  "added": [
    [
      "007f58b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f58bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4940 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 007f4940 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007f4940 ["INT_ZEXT", "register:4048:8", ["tmp:1:4"]]
- 007f4944 ["COPY", "tmp:0:8", ["register:4018:8"]]
- 007f4944 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007f4944 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 007f4948 ["COPY", "tmp:0:4", ["const:2:4"]]
- 007f4948 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4048:4"]]
- 007f4948 ["INT_SBORROW", "register:106:1", ["register:4048:4", "const:2:4"]]
- 007f4948 ["INT_SUB", "tmp:1:4", ["register:4048:4", "tmp:0:4"]]
~~~


<a id="compare-f5ca7a559ed1f84ef487020c0d10d9ef"></a>

### [`007f4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4a5c.md) → [`007f59c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f59c0.md) FUN_007f59c0

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
      "unmatched:007f4a5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f4a60",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f4a80",
      "DATA",
      [
        "storage",
        "00c7b600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f59c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f59c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f59e4",
      "DATA",
      [
        "storage",
        "00c7c5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4a5c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f4a5c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f4a5c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007f4a5c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f4a60 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f4a60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007f4a64 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-8e17cb814cbd28da3ff878d2ba674722"></a>

### [`007f4a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4a90.md) → [`007f59f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f59f4.md) FUN_007f59f4

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
      "unmatched:007f4a9c",
      "DATA",
      [
        "storage",
        "00c7b600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5a00",
      "DATA",
      [
        "storage",
        "00c7c5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4a90 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f4a90 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f4a94 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f4a98 ["COPY", "tmp:0:8", ["const:600:8"]]
- 007f4a98 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f4a98 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f4a98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-611d38a03fe1dd5b212de3d7873e326b"></a>

### [`007f4aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4aac.md) → [`007f5a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5a10.md) FUN_007f5a10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~diff
- 007f4abc ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f4abc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 007f5a20 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f5a20 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 007f4ae4 ["COPY", "tmp:0:4", ["register:4050:4"]]
- 007f4ae4 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 007f4ae4 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 007f4ae4 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
- 007f4ae8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:9e8:8"]]
- 007f4ae8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4058:4"]]
~~~


<a id="compare-95db5df5ac883915280384d7184575e4"></a>

### [`007f4b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4b24.md) → [`007f5a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5a88.md) FUN_007f5a88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f5aac",
      "incomplete_value": false,
      "site": "007f5ab0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4b48",
      "incomplete_value": false,
      "site": "007f4b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:680:8"
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
      "007f5ab0",
      "DATA",
      [
        "storage",
        "00c7b680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5ab0",
      "DATA",
      [
        "storage",
        "00c7c650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4b38 ["INT_ADD", "register:40f0:8", ["const:7f4b38:8", "const:4:8"]]
- 007f4b38 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f5a9c ["INT_ADD", "register:40f0:8", ["const:7f5a9c:8", "const:4:8"]]
+ 007f5a9c ["CALL", null, ["callee:00c58f30:8"]]
- 007f4b44 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f5aa8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f4b48 ["COPY", "tmp:0:8", ["const:680:8"]]
- 007f4b48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4b48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4b48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5aac ["COPY", "tmp:0:8", ["const:650:8"]]
+ 007f5aac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5aac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5aac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6eb34a8e46ba9604f3dc3e48d97d6ca7"></a>

### [`007f4b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4b64.md) → [`007f5ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5ac8.md) FUN_007f5ac8

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
      "definition_site": "007f5acc",
      "incomplete_value": false,
      "site": "007f5ad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f4b68",
      "incomplete_value": false,
      "site": "007f4b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:680:8"
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
      "007f5ad0",
      "DATA",
      [
        "storage",
        "00c7b680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f5ad0",
      "DATA",
      [
        "storage",
        "00c7c650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f4b64 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f5ac8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f4b68 ["COPY", "tmp:0:8", ["const:680:8"]]
- 007f4b68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f4b68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f4b68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f5acc ["COPY", "tmp:0:8", ["const:650:8"]]
+ 007f5acc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5acc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f5acc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7c74dc21727d1e39d6a6b7dc81ebf6ff"></a>

### [`007f4b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4b8c.md) → [`007f5af0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f5/007f5af0.md) FUN_007f5af0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 20件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.87% / 新版 80.87%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `store_condition` 5件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f5b48",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f4be4",
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
    "new": {
      "definition_site": "007f5d00",
      "incomplete_value": true,
      "site": "007f5d04",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": null,
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f5d94",
      "incomplete_value": true,
      "site": "007f5dc8",
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
      "unmatched:007f4bb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "007f5b48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007f4c3c",
      "READ",
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
      "007f5b1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "007f5b48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f5ba0",
      "READ",
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
- 007f4be4 ["INT_ADD", "register:40f0:8", ["const:7f4be4:8", "const:4:8"]]
- 007f4be4 ["CALL", null, ["ram:47ad34:8"]]
+ 007f5b48 ["INT_ADD", "register:40f0:8", ["const:7f5b48:8", "const:4:8"]]
+ 007f5b48 ["CALL", null, ["ram:47b054:8"]]
- 007f4da0 ["INT_ADD", "register:40f0:8", ["const:7f4da0:8", "const:4:8"]]
- 007f4da0 ["CALL", null, ["callee:0043bf04:8"]]
+ 007f5d04 ["INT_ADD", "register:40f0:8", ["const:7f5d04:8", "const:4:8"]]
+ 007f5d04 ["CALL", null, ["callee:0043bf04:8"]]
- 007f4e64 ["INT_ADD", "register:40f0:8", ["const:7f4e64:8", "const:4:8"]]
- 007f4e64 ["CALL", null, ["callee:00802f44:8"]]
+ 007f5dc8 ["INT_ADD", "register:40f0:8", ["const:7f5dc8:8", "const:4:8"]]
+ 007f5dc8 ["CALL", null, ["callee:00802f44:8"]]
~~~


<a id="compare-d3a2fd4afe59d08a781f01832b94ef40"></a>

### [`007f526c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f526c.md) → [`007f61d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f61d0.md) FUN_007f61d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f5290",
      "DATA",
      [
        "storage",
        "00c7b6f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f61f4",
      "DATA",
      [
        "storage",
        "00c7c6c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5280 ["INT_ADD", "register:40f0:8", ["const:7f5280:8", "const:4:8"]]
- 007f5280 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f61e4 ["INT_ADD", "register:40f0:8", ["const:7f61e4:8", "const:4:8"]]
+ 007f61e4 ["CALL", null, ["callee:00c58f30:8"]]
- 007f5288 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f61ec ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f528c ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 007f528c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f528c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f528c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9add51502cc395d7f73fcd1af099a8eb"></a>

### [`007f52a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f52a4.md) → [`007f6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6208.md) FUN_007f6208

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
      "definition_site": "007f620c",
      "incomplete_value": false,
      "site": "007f6210",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f52a8",
      "incomplete_value": false,
      "site": "007f52ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
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
      "007f6210",
      "DATA",
      [
        "storage",
        "00c7b6f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6210",
      "DATA",
      [
        "storage",
        "00c7c6c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f52a4 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f6208 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f52a8 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 007f52a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f52a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f52a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f620c ["COPY", "tmp:0:8", ["const:6c0:8"]]
+ 007f620c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f620c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f620c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-95de074ddd3ca6d92af4c4460cd3c51b"></a>

### [`007f56f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f56f4.md) → [`007f6658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6658.md) FUN_007f6658

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
      "definition_site": "007f666c",
      "incomplete_value": false,
      "site": "007f6670",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5708",
      "incomplete_value": false,
      "site": "007f570c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:780:8"
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
      "007f6670",
      "DATA",
      [
        "storage",
        "00c7b780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6670",
      "DATA",
      [
        "storage",
        "00c7c750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5700 ["INT_ADD", "register:40f0:8", ["const:7f5700:8", "const:4:8"]]
- 007f5700 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f6664 ["INT_ADD", "register:40f0:8", ["const:7f6664:8", "const:4:8"]]
+ 007f6664 ["CALL", null, ["callee:00c58f30:8"]]
- 007f5704 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f6668 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f5708 ["COPY", "tmp:0:8", ["const:780:8"]]
- 007f5708 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5708 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5708 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f666c ["COPY", "tmp:0:8", ["const:750:8"]]
+ 007f666c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f666c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f666c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-61a98860b248dfca76fd8e996b1431d1"></a>

### [`007f5718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5718.md) → [`007f667c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f667c.md) FUN_007f667c

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
      "definition_site": "007f6680",
      "incomplete_value": false,
      "site": "007f6684",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f571c",
      "incomplete_value": false,
      "site": "007f5720",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
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
      "007f6684",
      "DATA",
      [
        "storage",
        "00c7b780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6684",
      "DATA",
      [
        "storage",
        "00c7c750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5718 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f667c ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f571c ["COPY", "tmp:0:8", ["const:780:8"]]
- 007f571c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f571c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f571c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f6680 ["COPY", "tmp:0:8", ["const:750:8"]]
+ 007f6680 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6680 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f6680 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-045e3d75375e585502140b2ea58812ec"></a>

### [`007f5730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5730.md) → [`007f6694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6694.md) FUN_007f6694

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f66dc",
      "incomplete_value": true,
      "site": "007f66dc",
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
      "definition_site": "007f5778",
      "incomplete_value": true,
      "site": "007f5778",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f66e4",
      "incomplete_value": false,
      "site": "007f66f4",
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
      "definition_site": "007f5780",
      "incomplete_value": false,
      "site": "007f5790",
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
      "definition_site": "007f66ec",
      "incomplete_value": false,
      "site": "007f66f4",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5788",
      "incomplete_value": false,
      "site": "007f5790",
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
            "const:a60:8"
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
      "007f66d8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f66e4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f66ec",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007f66d8",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007f66e4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f66ec",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5790 ["INT_ADD", "register:40f0:8", ["const:7f5790:8", "const:4:8"]]
- 007f5790 ["CALL", null, ["callee:00c596b0:8"]]
+ 007f66f4 ["INT_ADD", "register:40f0:8", ["const:7f66f4:8", "const:4:8"]]
+ 007f66f4 ["CALL", null, ["callee:00c596b0:8"]]
- 007f58d0 ["INT_ADD", "register:40f0:8", ["const:7f58d0:8", "const:4:8"]]
- 007f58d0 ["CALL", null, ["callee:0046b26c:8"]]
+ 007f6834 ["INT_ADD", "register:40f0:8", ["const:7f6834:8", "const:4:8"]]
+ 007f6834 ["CALL", null, ["callee:0046b26c:8"]]
- 007f5768 ["INT_ADD", "register:40f0:8", ["const:7f5768:8", "const:4:8"]]
- 007f5768 ["CALL", null, ["callee:008ba294:8"]]
+ 007f66cc ["INT_ADD", "register:40f0:8", ["const:7f66cc:8", "const:4:8"]]
+ 007f66cc ["CALL", null, ["callee:008ba294:8"]]
~~~


<a id="compare-2244ce2dd2436e9794d242c8d5709ba7"></a>

### [`007f5934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5934.md) → [`007f6898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6898.md) FUN_007f6898

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
      "unmatched:007f5958",
      "DATA",
      [
        "storage",
        "00c7b800",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f595c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5960",
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
      "007f68bc",
      "DATA",
      [
        "storage",
        "00c7c7d0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f68c0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f68c4",
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
- 007f5948 ["INT_ADD", "register:40f0:8", ["const:7f5948:8", "const:4:8"]]
- 007f5948 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f68ac ["INT_ADD", "register:40f0:8", ["const:7f68ac:8", "const:4:8"]]
+ 007f68ac ["CALL", null, ["callee:00c58f30:8"]]
- 007f5950 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f68b4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f5954 ["COPY", "tmp:0:8", ["const:800:8"]]
- 007f5954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-769adca2e619b7dfc35af4f6ac13ef99"></a>

### [`007f5968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5968.md) → [`007f68cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f68cc.md) FUN_007f68cc

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
      "unmatched:007f5974",
      "DATA",
      [
        "storage",
        "00c7b800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f68d8",
      "DATA",
      [
        "storage",
        "00c7c7d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5968 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f5968 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f596c ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f5970 ["COPY", "tmp:0:8", ["const:800:8"]]
- 007f5970 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f5970 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f5970 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2f8f85c49e8c7e58d308aabb828fc9e5"></a>

### [`007f5984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5984.md) → [`007f68e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f68e8.md) FUN_007f68e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f59e4",
      "incomplete_value": false,
      "site": "007f59ec",
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
      "definition_site": "007f59e8",
      "incomplete_value": false,
      "site": "007f59ec",
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
      "unmatched:007f5990",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f6900"
      ]
    ],
    [
      "unmatched:007f59d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f59e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f68f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f6900"
      ]
    ],
    [
      "007f6938",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f6944",
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
- 007f59ec ["INT_ADD", "register:40f0:8", ["const:7f59ec:8", "const:4:8"]]
- 007f59ec ["CALL", null, ["callee:0047d134:8"]]
+ 007f6950 ["INT_ADD", "register:40f0:8", ["const:7f6950:8", "const:4:8"]]
+ 007f6950 ["CALL", null, ["callee:0047d134:8"]]
- 007f5984 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 007f5984 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007f5984 ["INT_ZEXT", "register:4048:8", ["tmp:1:4"]]
- 007f5988 ["COPY", "tmp:0:8", ["register:4018:8"]]
- 007f5988 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007f5988 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
~~~


<a id="compare-1bf09c443e8b53c7bd8a5d149890e39d"></a>

### [`007f5a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5a38.md) → [`007f699c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f699c.md) FUN_007f699c

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
      "unmatched:007f5a38",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5a44",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:007f5a50",
      "DATA",
      [
        "storage",
        "00c7b880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f699c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f69a8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "007f69b4",
      "DATA",
      [
        "storage",
        "00c7c850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5a38 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f5a38 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f5a38 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 007f5a38 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f5a3c ["COPY", "register:40e8:8", ["register:8:8"]]
- 007f5a40 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-76582f7cf5feafc9b94595b66c7eb5b7"></a>

### [`007f5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5a5c.md) → [`007f69c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f69c0.md) FUN_007f69c0

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
      "definition_site": "007f69c4",
      "incomplete_value": false,
      "site": "007f69c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5a60",
      "incomplete_value": false,
      "site": "007f5a64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "007f69c8",
      "DATA",
      [
        "storage",
        "00c7b880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f69c8",
      "DATA",
      [
        "storage",
        "00c7c850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5a5c ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f69c0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f5a60 ["COPY", "tmp:0:8", ["const:880:8"]]
- 007f5a60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5a60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5a60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f69c4 ["COPY", "tmp:0:8", ["const:850:8"]]
+ 007f69c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f69c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f69c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-90dcffeb9681ffab710023b2dfcee6e7"></a>

### [`007f5a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5a74.md) → [`007f69d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f69d8.md) FUN_007f69d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f6a00",
      "incomplete_value": false,
      "site": "007f6a08",
      "value": [
        "leaf",
        "const:b:8"
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
      "definition_site": "007f6a04",
      "incomplete_value": false,
      "site": "007f6a08",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:007f5a98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f69fc",
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
- 007f5aa4 ["INT_ADD", "register:40f0:8", ["const:7f5aa4:8", "const:4:8"]]
- 007f5aa4 ["CALL", null, ["callee:0047d134:8"]]
+ 007f6a08 ["INT_ADD", "register:40f0:8", ["const:7f6a08:8", "const:4:8"]]
+ 007f6a08 ["CALL", null, ["callee:0047d134:8"]]
- 007f5a7c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f5a7c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007f69e0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f69e0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007f5a84 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f5a84 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007f69e8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f69e8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-83c53c4fafd12ad16e7eea94543eb5c5"></a>

### [`007f5ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ae8.md) → [`007f6a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6a4c.md) FUN_007f6a4c

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
      "unmatched:007f5ae8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5aec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5b0c",
      "DATA",
      [
        "storage",
        "00c7b900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f6a50",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f6a70",
      "DATA",
      [
        "storage",
        "00c7c8d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5ae8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f5ae8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f5ae8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007f5ae8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f5aec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f5aec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007f5af0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-60ccf98f5d5cc8d33727f806d0eb461d"></a>

### [`007f5b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5b1c.md) → [`007f6a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6a80.md) FUN_007f6a80

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
      "definition_site": "007f6a8c",
      "incomplete_value": false,
      "site": "007f6a8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5b28",
      "incomplete_value": false,
      "site": "007f5b28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:900:8"
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
      "007f6a8c",
      "DATA",
      [
        "storage",
        "00c7b900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6a8c",
      "DATA",
      [
        "storage",
        "00c7c8d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5b20 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f6a84 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f5b24 ["COPY", "tmp:0:8", ["const:900:8"]]
- 007f5b24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f5b24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f5b24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f6a88 ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 007f6a88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6a88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6a88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-606d9a075157932b0531b1bae458d793"></a>

### [`007f5b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5b38.md) → [`007f6a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6a9c.md) FUN_007f6a9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.93% / 新版 93.93%

優先判定に残った影響 `call_argument_candidate` 14件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f6ae0",
      "incomplete_value": true,
      "site": "007f6ae0",
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
      "definition_site": "007f5b7c",
      "incomplete_value": true,
      "site": "007f5b7c",
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
      "definition_site": "007f5b84",
      "incomplete_value": false,
      "site": "007f5b94",
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
    "new": null,
    "old": {
      "definition_site": "007f5b8c",
      "incomplete_value": false,
      "site": "007f5b94",
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
            "const:a60:8"
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
      "007f6ad4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:007f5b84",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:007f5b8c",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007f6ad4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007f6ae8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f6af0",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5b7c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 007f5b7c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 007f6ae0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 007f6ae0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007f5b94 ["INT_ADD", "register:40f0:8", ["const:7f5b94:8", "const:4:8"]]
- 007f5b94 ["CALL", null, ["callee:00c596b0:8"]]
+ 007f6af8 ["INT_ADD", "register:40f0:8", ["const:7f6af8:8", "const:4:8"]]
+ 007f6af8 ["CALL", null, ["callee:00c596b0:8"]]
- 007f5c00 ["INT_ADD", "register:40f0:8", ["const:7f5c00:8", "const:4:8"]]
- 007f5c00 ["CALL", null, ["callee:004692e8:8"]]
+ 007f6b64 ["INT_ADD", "register:40f0:8", ["const:7f6b64:8", "const:4:8"]]
+ 007f6b64 ["CALL", null, ["callee:004692e8:8"]]
~~~


<a id="compare-c70e5f496ab1b573dc1daa3b4474b803"></a>

### [`007f5ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ebc.md) → [`007f6e20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6e20.md) FUN_007f6e20

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
      "unmatched:007f5ee0",
      "DATA",
      [
        "storage",
        "00c7b980",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f5ee4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5ee8",
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
      "007f6e44",
      "DATA",
      [
        "storage",
        "00c7c950",
        null,
        "undefined *"
      ]
    ],
    [
      "007f6e48",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f6e4c",
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
- 007f5ed0 ["INT_ADD", "register:40f0:8", ["const:7f5ed0:8", "const:4:8"]]
- 007f5ed0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f6e34 ["INT_ADD", "register:40f0:8", ["const:7f6e34:8", "const:4:8"]]
+ 007f6e34 ["CALL", null, ["callee:00c58f30:8"]]
- 007f5ed8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f6e3c ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f5edc ["COPY", "tmp:0:8", ["const:980:8"]]
- 007f5edc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f5edc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f5edc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b08df61bc1c8b3caee187d831b65671c"></a>

### [`007f5ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ef0.md) → [`007f6e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6e54.md) FUN_007f6e54

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
      "definition_site": "007f6e60",
      "incomplete_value": false,
      "site": "007f6e60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f5efc",
      "incomplete_value": false,
      "site": "007f5efc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:980:8"
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
      "007f6e60",
      "DATA",
      [
        "storage",
        "00c7b980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6e60",
      "DATA",
      [
        "storage",
        "00c7c950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5ef4 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f6e58 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f5ef8 ["COPY", "tmp:0:8", ["const:980:8"]]
- 007f5ef8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f5ef8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f5ef8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f6e5c ["COPY", "tmp:0:8", ["const:950:8"]]
+ 007f6e5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6e5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f6e5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-251087f0ca6d4d474c24ce47f3bb2d63"></a>

### [`007f5f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5f0c.md) → [`007f6e70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6e70.md) FUN_007f6e70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f5f54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f6eb8",
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
- 007f5f24 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f5f24 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007f6e88 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f6e88 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 007f5f4c ["COPY", "register:40e8:8", ["register:8:8"]]
- 007f5f50 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007f5f50 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c100788499e7e7610c6d7c45f80cf3d2"></a>

### [`007f5fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5fa0.md) → [`007f6f04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6f04.md) FUN_007f6f04

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
      "unmatched:007f5fa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5fa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5fc4",
      "DATA",
      [
        "storage",
        "00c7ba00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6f04",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f6f08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f6f28",
      "DATA",
      [
        "storage",
        "00c7c9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5fa0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f5fa0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f5fa0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007f5fa0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f5fa4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f5fa4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007f5fa8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-fb3db3379c3ada90e18775f644225c87"></a>

### [`007f5fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5fd4.md) → [`007f6f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6f38.md) FUN_007f6f38

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
      "unmatched:007f5fe0",
      "DATA",
      [
        "storage",
        "00c7ba00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f6f44",
      "DATA",
      [
        "storage",
        "00c7c9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f5fd4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f5fd4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f5fd8 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f5fdc ["COPY", "tmp:0:8", ["const:a00:8"]]
- 007f5fdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f5fdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f5fdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7e82919a36b0b4b5b56bc512ae02a8a9"></a>

### [`007f5ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f5/007f5ff0.md) → [`007f6f54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f6/007f6f54.md) FUN_007f6f54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.71% / 新版 76.71%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f6f80",
      "incomplete_value": false,
      "site": "007f6f90",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f6f88",
      "incomplete_value": false,
      "site": "007f6f90",
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
            "const:a30:8"
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
      "definition_site": "007f7014",
      "incomplete_value": true,
      "site": "007f702c",
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
      "unmatched:007f5ff0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5ff4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f5ff8",
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
      "007f6f54",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f6f58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f6f5c",
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
- 007f602c ["INT_ADD", "register:40f0:8", ["const:7f602c:8", "const:4:8"]]
- 007f602c ["CALL", null, ["callee:00c596b0:8"]]
+ 007f6f90 ["INT_ADD", "register:40f0:8", ["const:7f6f90:8", "const:4:8"]]
+ 007f6f90 ["CALL", null, ["callee:00c596b0:8"]]
- 007f60c8 ["INT_ADD", "register:40f0:8", ["const:7f60c8:8", "const:4:8"]]
- 007f60c8 ["CALL", null, ["callee:00469f64:8"]]
+ 007f702c ["INT_ADD", "register:40f0:8", ["const:7f702c:8", "const:4:8"]]
+ 007f702c ["CALL", null, ["callee:00469f64:8"]]
- 007f5ff0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f5ff0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f5ff0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 007f5ff0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f8fb522a62c8a6d8babd2860ddce0868"></a>

### [`007f6140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6140.md) → [`007f70a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f70a4.md) FUN_007f70a4

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
      "unmatched:007f6158",
      "DATA",
      [
        "storage",
        "00c7ba80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f615c",
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
      "007f70bc",
      "DATA",
      [
        "storage",
        "00c7ca50",
        null,
        "undefined *"
      ]
    ],
    [
      "007f70c0",
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
- 007f614c ["INT_ADD", "register:40f0:8", ["const:7f614c:8", "const:4:8"]]
- 007f614c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f70b0 ["INT_ADD", "register:40f0:8", ["const:7f70b0:8", "const:4:8"]]
+ 007f70b0 ["CALL", null, ["callee:00c58f30:8"]]
- 007f6150 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f70b4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f6154 ["COPY", "tmp:0:8", ["const:a80:8"]]
- 007f6154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6041f762af3fe6fc52def7ca79f03524"></a>

### [`007f6164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6164.md) → [`007f70c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f70c8.md) FUN_007f70c8

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
      "definition_site": "007f70cc",
      "incomplete_value": false,
      "site": "007f70d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6168",
      "incomplete_value": false,
      "site": "007f616c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "007f70d0",
      "DATA",
      [
        "storage",
        "00c7ba80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f70d0",
      "DATA",
      [
        "storage",
        "00c7ca50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6164 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f70c8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f6168 ["COPY", "tmp:0:8", ["const:a80:8"]]
- 007f6168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f70cc ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 007f70cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f70cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f70cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-456b035ca2b5e847b701e328148cc5ec"></a>

### [`007f617c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f617c.md) → [`007f70e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f70e0.md) FUN_007f70e0

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
      "site": "007f70fc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6198",
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
      "007f70fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f70fc",
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
- 007f6198 ["INT_ADD", "register:40f0:8", ["const:7f6198:8", "const:4:8"]]
- 007f6198 ["CALL", null, ["ram:47ad34:8"]]
+ 007f70fc ["INT_ADD", "register:40f0:8", ["const:7f70fc:8", "const:4:8"]]
+ 007f70fc ["CALL", null, ["ram:47b054:8"]]
- 007f61a4 ["INT_ADD", "register:40f0:8", ["const:7f61a4:8", "const:4:8"]]
- 007f61a4 ["CALL", null, ["callee:0047d134:8"]]
+ 007f7108 ["INT_ADD", "register:40f0:8", ["const:7f7108:8", "const:4:8"]]
+ 007f7108 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-626e3a6474457b252d4e15694b5468e4"></a>

### [`007f61e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f61e8.md) → [`007f714c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f714c.md) FUN_007f714c

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
      "definition_site": "007f7170",
      "incomplete_value": false,
      "site": "007f7170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f620c",
      "incomplete_value": false,
      "site": "007f620c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:b00:8"
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
      "007f7170",
      "DATA",
      [
        "storage",
        "00c7bb00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7170",
      "DATA",
      [
        "storage",
        "00c7cad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f61fc ["INT_ADD", "register:40f0:8", ["const:7f61fc:8", "const:4:8"]]
- 007f61fc ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7160 ["INT_ADD", "register:40f0:8", ["const:7f7160:8", "const:4:8"]]
+ 007f7160 ["CALL", null, ["callee:00c58f30:8"]]
- 007f6204 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f7168 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f6208 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 007f6208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f716c ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007f716c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f716c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f716c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0323d0dbed273bb90b106d92c8d845b9"></a>

### [`007f621c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f621c.md) → [`007f7180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7180.md) FUN_007f7180

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
      "definition_site": "007f718c",
      "incomplete_value": false,
      "site": "007f718c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6228",
      "incomplete_value": false,
      "site": "007f6228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:b00:8"
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
      "007f718c",
      "DATA",
      [
        "storage",
        "00c7bb00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f718c",
      "DATA",
      [
        "storage",
        "00c7cad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6220 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f7184 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f6224 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 007f6224 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6224 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6224 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f7188 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007f7188 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7188 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7188 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-08d7221e59f610025e3cd9e7100dd089"></a>

### [`007f6238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6238.md) → [`007f719c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f719c.md) FUN_007f719c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f6554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6554.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f74b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f74b8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.10% / 新版 79.10%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f636c",
      "incomplete_value": true,
      "site": "007f6370",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f638c",
      "incomplete_value": true,
      "site": "007f63a4",
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
      "definition_site": "007f6390",
      "incomplete_value": true,
      "site": "007f63a4",
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
      "unmatched:007f623c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6240",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6244",
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
      "007f71a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f71a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f71a8",
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
- 007f6370 ["INT_ADD", "register:40f0:8", ["const:7f6370:8", "const:4:8"]]
- 007f6370 ["CALL", null, ["callee:0048d1b4:8"]]
+ 007f72d4 ["INT_ADD", "register:40f0:8", ["const:7f72d4:8", "const:4:8"]]
+ 007f72d4 ["CALL", null, ["callee:0048d1b4:8"]]
- 007f63a4 ["INT_ADD", "register:40f0:8", ["const:7f63a4:8", "const:4:8"]]
- 007f63a4 ["CALL", null, ["callee:008bbccc:8"]]
+ 007f7308 ["INT_ADD", "register:40f0:8", ["const:7f7308:8", "const:4:8"]]
+ 007f7308 ["CALL", null, ["callee:008bbccc:8"]]
- 007f63ac ["INT_ADD", "register:40f0:8", ["const:7f63ac:8", "const:4:8"]]
- 007f63ac ["CALL", null, ["callee:008ba85c:8"]]
+ 007f7310 ["INT_ADD", "register:40f0:8", ["const:7f7310:8", "const:4:8"]]
+ 007f7310 ["CALL", null, ["callee:008ba85c:8"]]
~~~


<a id="compare-8e8cb7b0bc05c7e03ce827eb11b953df"></a>

### [`007f650c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f650c.md) → [`007f7470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7470.md) FUN_007f7470

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
      "unmatched:007f6530",
      "DATA",
      [
        "storage",
        "00c7bb70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f6534",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6538",
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
      "007f7494",
      "DATA",
      [
        "storage",
        "00c7cb40",
        null,
        "undefined *"
      ]
    ],
    [
      "007f7498",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f749c",
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
- 007f6520 ["INT_ADD", "register:40f0:8", ["const:7f6520:8", "const:4:8"]]
- 007f6520 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7484 ["INT_ADD", "register:40f0:8", ["const:7f7484:8", "const:4:8"]]
+ 007f7484 ["CALL", null, ["callee:00c58f30:8"]]
- 007f6528 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f748c ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f652c ["COPY", "tmp:0:8", ["const:b70:8"]]
- 007f652c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f652c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f652c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cd37f0a5117146bebda5edd1259faaec"></a>

### [`007f6540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6540.md) → [`007f74a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f74a4.md) FUN_007f74a4

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
      "definition_site": "007f74b0",
      "incomplete_value": false,
      "site": "007f74b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f654c",
      "incomplete_value": false,
      "site": "007f654c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:b70:8"
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
      "007f74b0",
      "DATA",
      [
        "storage",
        "00c7bb70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f74b0",
      "DATA",
      [
        "storage",
        "00c7cb40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6544 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f74a8 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f6548 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 007f6548 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6548 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6548 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f74ac ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 007f74ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f74ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f74ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-50ed4faa0555cc13345d8176295cd225"></a>

### [`007f655c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f655c.md) → [`007f74c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f74c0.md) FUN_007f74c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f67f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f67f0.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f7754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7754.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.00% / 新版 87.00%

優先判定に残った影響 `call_argument_candidate` 13件, `store_condition` 4件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f7500",
      "incomplete_value": false,
      "site": "007f7508",
      "value": [
        "leaf",
        "const:b:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f6628",
      "incomplete_value": true,
      "site": "007f6640",
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
      "definition_site": "007f662c",
      "incomplete_value": true,
      "site": "007f6640",
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
      "unmatched:007f6578",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6598",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007f65d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f7628"
      ]
    ]
  ],
  "added": [
    [
      "007f74dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007f74fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f7538",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007f7628"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f65a4 ["INT_ADD", "register:40f0:8", ["const:7f65a4:8", "const:4:8"]]
- 007f65a4 ["CALL", null, ["callee:0047d134:8"]]
+ 007f7508 ["INT_ADD", "register:40f0:8", ["const:7f7508:8", "const:4:8"]]
+ 007f7508 ["CALL", null, ["callee:0047d134:8"]]
- 007f6640 ["INT_ADD", "register:40f0:8", ["const:7f6640:8", "const:4:8"]]
- 007f6640 ["CALL", null, ["callee:008bbccc:8"]]
+ 007f75a4 ["INT_ADD", "register:40f0:8", ["const:7f75a4:8", "const:4:8"]]
+ 007f75a4 ["CALL", null, ["callee:008bbccc:8"]]
- 007f6648 ["INT_ADD", "register:40f0:8", ["const:7f6648:8", "const:4:8"]]
- 007f6648 ["CALL", null, ["callee:008ba85c:8"]]
+ 007f75ac ["INT_ADD", "register:40f0:8", ["const:7f75ac:8", "const:4:8"]]
+ 007f75ac ["CALL", null, ["callee:008ba85c:8"]]
~~~


<a id="compare-db193240b12f8ca8eb7910ab8835d557"></a>

### [`007f67a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f67a8.md) → [`007f770c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f770c.md) FUN_007f770c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f67ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f67cc",
      "DATA",
      [
        "storage",
        "00c7bbe0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7710",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f7730",
      "DATA",
      [
        "storage",
        "00c7cbb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f67ac ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f67ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007f67b0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007f67bc ["INT_ADD", "register:40f0:8", ["const:7f67bc:8", "const:4:8"]]
- 007f67bc ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7720 ["INT_ADD", "register:40f0:8", ["const:7f7720:8", "const:4:8"]]
+ 007f7720 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-fe938b51193760a49e9cd68c2e1ff5e7"></a>

### [`007f67dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f67dc.md) → [`007f7740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7740.md) FUN_007f7740

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
      "definition_site": "007f774c",
      "incomplete_value": false,
      "site": "007f774c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f67e8",
      "incomplete_value": false,
      "site": "007f67e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:be0:8"
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
      "007f774c",
      "DATA",
      [
        "storage",
        "00c7bbe0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f774c",
      "DATA",
      [
        "storage",
        "00c7cbb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f67e0 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f7744 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f67e4 ["COPY", "tmp:0:8", ["const:be0:8"]]
- 007f67e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f67e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f67e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f7748 ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 007f7748 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7748 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7748 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d23a560f9ce781c16e69282b37479218"></a>

### [`007f67f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f67f8.md) → [`007f775c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f775c.md) FUN_007f775c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f7798",
      "incomplete_value": true,
      "site": "007f77a8",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:007f6820",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f7784",
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
- 007f6844 ["INT_ADD", "register:40f0:8", ["const:7f6844:8", "const:4:8"]]
- 007f6844 ["CALL", null, ["callee:00a1b6a4:8"]]
+ 007f77a8 ["INT_ADD", "register:40f0:8", ["const:7f77a8:8", "const:4:8"]]
+ 007f77a8 ["CALL", null, ["callee:00a1b6a4:8"]]
- 007f6800 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f6800 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007f7764 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f7764 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007f6808 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f6808 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007f776c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f776c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-07621cfad4f5f98270373b571b7ea3ff"></a>

### [`007f6888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6888.md) → [`007f77ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f77ec.md) FUN_007f77ec

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
      "unmatched:007f68ac",
      "DATA",
      [
        "storage",
        "00c7bc80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f68b0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f68b4",
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
      "007f7810",
      "DATA",
      [
        "storage",
        "00c7cc50",
        null,
        "undefined *"
      ]
    ],
    [
      "007f7814",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f7818",
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
- 007f689c ["INT_ADD", "register:40f0:8", ["const:7f689c:8", "const:4:8"]]
- 007f689c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7800 ["INT_ADD", "register:40f0:8", ["const:7f7800:8", "const:4:8"]]
+ 007f7800 ["CALL", null, ["callee:00c58f30:8"]]
- 007f68a4 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f7808 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f68a8 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 007f68a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f68a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f68a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fcde2f3a2179a0d38a490745e479da1a"></a>

### [`007f68bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f68bc.md) → [`007f7820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7820.md) FUN_007f7820

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
      "unmatched:007f68c8",
      "DATA",
      [
        "storage",
        "00c7bc80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f782c",
      "DATA",
      [
        "storage",
        "00c7cc50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f68bc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f68bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f68c0 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f68c4 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 007f68c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f68c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f68c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1fa2557666ed9ee8b5615263903d86f5"></a>

### [`007f68d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f68d8.md) → [`007f783c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f783c.md) FUN_007f783c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f6b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b6c.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f7ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7ad0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.00% / 新版 87.00%

優先判定に残った影響 `call_argument_candidate` 10件, `call_target` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f7878",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6914",
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
    "new": {
      "definition_site": "007f7908",
      "incomplete_value": true,
      "site": "007f7920",
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
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f790c",
      "incomplete_value": true,
      "site": "007f7920",
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
      "007f7878",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007f6964",
      "READ",
      [
        "storage",
        "002ba6f7",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007f6978",
      "WRITE",
      [
        "storage",
        "Stack[-0x9f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007f7878",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007f78c8",
      "READ",
      [
        "storage",
        "002ba7d5",
        null,
        "string"
      ]
    ],
    [
      "007f78dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x9f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6914 ["INT_ADD", "register:40f0:8", ["const:7f6914:8", "const:4:8"]]
- 007f6914 ["CALL", null, ["ram:47ad34:8"]]
+ 007f7878 ["INT_ADD", "register:40f0:8", ["const:7f7878:8", "const:4:8"]]
+ 007f7878 ["CALL", null, ["ram:47b054:8"]]
- 007f69bc ["INT_ADD", "register:40f0:8", ["const:7f69bc:8", "const:4:8"]]
- 007f69bc ["CALL", null, ["callee:008bbccc:8"]]
+ 007f7920 ["INT_ADD", "register:40f0:8", ["const:7f7920:8", "const:4:8"]]
+ 007f7920 ["CALL", null, ["callee:008bbccc:8"]]
- 007f69e0 ["INT_ADD", "register:40f0:8", ["const:7f69e0:8", "const:4:8"]]
- 007f69e0 ["CALL", null, ["callee:0046de54:8"]]
+ 007f7944 ["INT_ADD", "register:40f0:8", ["const:7f7944:8", "const:4:8"]]
+ 007f7944 ["CALL", null, ["callee:0046de54:8"]]
~~~


<a id="compare-e0ecaf9b2a2d5e96f43740a737846146"></a>

### [`007f6b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b24.md) → [`007f7a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7a88.md) FUN_007f7a88

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
      "unmatched:007f6b48",
      "DATA",
      [
        "storage",
        "00c7bcf0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f6b4c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6b50",
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
      "007f7aac",
      "DATA",
      [
        "storage",
        "00c7ccc0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f7ab0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f7ab4",
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
- 007f6b38 ["INT_ADD", "register:40f0:8", ["const:7f6b38:8", "const:4:8"]]
- 007f6b38 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7a9c ["INT_ADD", "register:40f0:8", ["const:7f7a9c:8", "const:4:8"]]
+ 007f7a9c ["CALL", null, ["callee:00c58f30:8"]]
- 007f6b40 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f7aa4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f6b44 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 007f6b44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6b44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6b44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9fc3638a0de2e75d05a24afd3f3a2eaf"></a>

### [`007f6b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b58.md) → [`007f7abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7abc.md) FUN_007f7abc

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
      "definition_site": "007f7ac8",
      "incomplete_value": false,
      "site": "007f7ac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f6b64",
      "incomplete_value": false,
      "site": "007f6b64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
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
      "007f7ac8",
      "DATA",
      [
        "storage",
        "00c7bcf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7ac8",
      "DATA",
      [
        "storage",
        "00c7ccc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6b5c ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f7ac0 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f6b60 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 007f6b60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6b60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6b60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f7ac4 ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 007f7ac4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7ac4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7ac4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8d3cc9b803f35e84b407de03461f9ab1"></a>

### [`007f6b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6b74.md) → [`007f7ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7ad8.md) FUN_007f7ad8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f7b00",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f6b9c",
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
      "007f7b00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f7b00",
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
- 007f6b9c ["INT_ADD", "register:40f0:8", ["const:7f6b9c:8", "const:4:8"]]
- 007f6b9c ["CALL", null, ["ram:47ad34:8"]]
+ 007f7b00 ["INT_ADD", "register:40f0:8", ["const:7f7b00:8", "const:4:8"]]
+ 007f7b00 ["CALL", null, ["ram:47b054:8"]]
- 007f6ba8 ["INT_ADD", "register:40f0:8", ["const:7f6ba8:8", "const:4:8"]]
- 007f6ba8 ["CALL", null, ["callee:0047d134:8"]]
+ 007f7b0c ["INT_ADD", "register:40f0:8", ["const:7f7b0c:8", "const:4:8"]]
+ 007f7b0c ["CALL", null, ["callee:0047d134:8"]]
- 007f6bc0 ["INT_ADD", "register:40f0:8", ["const:7f6bc0:8", "const:4:8"]]
- 007f6bc0 ["CALL", null, ["callee:00a1b6a4:8"]]
+ 007f7b24 ["INT_ADD", "register:40f0:8", ["const:7f7b24:8", "const:4:8"]]
+ 007f7b24 ["CALL", null, ["callee:00a1b6a4:8"]]
~~~


<a id="compare-957cdfe3fb32e53d20845da3136a7a7b"></a>

### [`007f6c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6c04.md) → [`007f7b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7b68.md) FUN_007f7b68

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
    "new": null,
    "old": {
      "definition_site": "007f6c14",
      "incomplete_value": false,
      "site": "007f6c18",
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
      "unmatched:007f6c04",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6c08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6c28",
      "DATA",
      [
        "storage",
        "00c7bd80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7b68",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f7b6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f7b8c",
      "DATA",
      [
        "storage",
        "00c7cd50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6c18 ["INT_ADD", "register:40f0:8", ["const:7f6c18:8", "const:4:8"]]
- 007f6c18 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7b7c ["INT_ADD", "register:40f0:8", ["const:7f7b7c:8", "const:4:8"]]
+ 007f7b7c ["CALL", null, ["callee:00c58f30:8"]]
- 007f6c04 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f6c04 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f6c04 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007f6c04 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f6c08 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f6c08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-fdffe033da256e9c484beae9ff2d84e2"></a>

### [`007f6c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6c38.md) → [`007f7b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7b9c.md) FUN_007f7b9c

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
      "unmatched:007f6c44",
      "DATA",
      [
        "storage",
        "00c7bd80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7ba8",
      "DATA",
      [
        "storage",
        "00c7cd50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6c38 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f6c38 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f6c3c ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f6c40 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 007f6c40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6c40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6c40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-135d29e97aeae8723f3c9ca21874ad55"></a>

### [`007f6c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6c54.md) → [`007f7bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7bb8.md) FUN_007f7bb8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f6fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6fc4.md) [`007f6fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6fc8.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f7f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7f28.md) [`007f7f2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7f2c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.78% / 新版 63.78%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f6d08",
      "incomplete_value": true,
      "site": "007f6d0c",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:007f6c58",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6c5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6c60",
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
      "007f7bbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f7bc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f7bc4",
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
- 007f6d0c ["INT_ADD", "register:40f0:8", ["const:7f6d0c:8", "const:4:8"]]
- 007f6d0c ["CALL", null, ["callee:0048d1b4:8"]]
+ 007f7c70 ["INT_ADD", "register:40f0:8", ["const:7f7c70:8", "const:4:8"]]
+ 007f7c70 ["CALL", null, ["callee:0048d1b4:8"]]
- 007f6c54 ["INT_SUB", "register:8:8", ["register:8:8", "const:100:8"]]
- 007f6c58 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f6c58 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f6c58 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:d0:8"]]
- 007f6c58 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e1cc6067dcd1871b9200df674e14e405"></a>

### [`007f6f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6f7c.md) → [`007f7ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7ee0.md) FUN_007f7ee0

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
      "unmatched:007f6fa0",
      "DATA",
      [
        "storage",
        "00c7bdf0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f6fa4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f6fa8",
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
      "007f7f04",
      "DATA",
      [
        "storage",
        "00c7cdc0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f7f08",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f7f0c",
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
- 007f6f90 ["INT_ADD", "register:40f0:8", ["const:7f6f90:8", "const:4:8"]]
- 007f6f90 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7ef4 ["INT_ADD", "register:40f0:8", ["const:7f7ef4:8", "const:4:8"]]
+ 007f7ef4 ["CALL", null, ["callee:00c58f30:8"]]
- 007f6f98 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f7efc ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f6f9c ["COPY", "tmp:0:8", ["const:df0:8"]]
- 007f6f9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f6f9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f6f9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cf4c4fded591036589b2b625770056ab"></a>

### [`007f6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6fb0.md) → [`007f7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7f14.md) FUN_007f7f14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f6fbc",
      "DATA",
      [
        "storage",
        "00c7bdf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7f20",
      "DATA",
      [
        "storage",
        "00c7cdc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f6fb4 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f7f18 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f6fb8 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 007f6fb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f6fb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f6fb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007f6fbc ["COPY", "tmp:0:8", ["register:4048:8"]]
- 007f6fbc ["COPY", "tmp:1:8", ["register:4040:8"]]
- 007f6fbc ["COPY", "tmp:2:8", ["register:4008:8"]]
- 007f6fbc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-74c6b801b6de58150cb8729eaf2eea97"></a>

### [`007f6ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f6/007f6ffc.md) → [`007f7f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7f60.md) FUN_007f7f60

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
      "definition_site": "007f700c",
      "incomplete_value": false,
      "site": "007f7010",
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
      "unmatched:007f7020",
      "DATA",
      [
        "storage",
        "00c7be70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f7024",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7028",
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
      "007f7f84",
      "DATA",
      [
        "storage",
        "00c7ce40",
        null,
        "undefined *"
      ]
    ],
    [
      "007f7f88",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f7f8c",
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
- 007f7010 ["INT_ADD", "register:40f0:8", ["const:7f7010:8", "const:4:8"]]
- 007f7010 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f7f74 ["INT_ADD", "register:40f0:8", ["const:7f7f74:8", "const:4:8"]]
+ 007f7f74 ["CALL", null, ["callee:00c58f30:8"]]
- 007f7018 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f7f7c ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f701c ["COPY", "tmp:0:8", ["const:e70:8"]]
- 007f701c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f701c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f701c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4036fd2d17d8b07a1c31a800cb82199a"></a>

### [`007f7030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7030.md) → [`007f7f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7f94.md) FUN_007f7f94

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
      "unmatched:007f703c",
      "DATA",
      [
        "storage",
        "00c7be70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7fa0",
      "DATA",
      [
        "storage",
        "00c7ce40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7030 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f7030 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f7034 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f7038 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 007f7038 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7038 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7038 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2705e5d0faed272f5c7f58756364cf86"></a>

### [`007f704c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f704c.md) → [`007f7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7fb0.md) FUN_007f7fb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085c2a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2a8.md) [`0085c2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, unresolved_call_alignment

命令の説明率　旧版 98.70% / 新版 98.70%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f7fe0",
      "incomplete_value": true,
      "site": "007f7fe4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:2f38:8"
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
      "definition_site": "007f7fdc",
      "incomplete_value": false,
      "site": "007f7fe4",
      "value": [
        "leaf",
        "const:f:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f70d8",
      "incomplete_value": true,
      "site": "007f70dc",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:007f7148",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f80ac",
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
- 007f7080 ["INT_ADD", "register:40f0:8", ["const:7f7080:8", "const:4:8"]]
- 007f7080 ["CALL", null, ["callee:008b89cc:8"]]
+ 007f7fe4 ["INT_ADD", "register:40f0:8", ["const:7f7fe4:8", "const:4:8"]]
+ 007f7fe4 ["CALL", null, ["callee:008b89cc:8"]]
- 007f70dc ["INT_ADD", "register:40f0:8", ["const:7f70dc:8", "const:4:8"]]
- 007f70dc ["CALL", null, ["callee:008b7e5c:8"]]
+ 007f8040 ["INT_ADD", "register:40f0:8", ["const:7f8040:8", "const:4:8"]]
+ 007f8040 ["CALL", null, ["callee:008b7e5c:8"]]
- 007f7124 ["INT_ADD", "register:40f0:8", ["const:7f7124:8", "const:4:8"]]
- 007f7124 ["CALL", null, ["callee:008b7e64:8"]]
+ 007f8088 ["INT_ADD", "register:40f0:8", ["const:7f8088:8", "const:4:8"]]
+ 007f8088 ["CALL", null, ["callee:008b7e64:8"]]
~~~


<a id="compare-1ae3f776454bb1910446643d58ed11b4"></a>

### [`007f71ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f71ac.md) → [`007f8110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8110.md) FUN_007f8110

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f71d0",
      "DATA",
      [
        "storage",
        "00c7bef0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f71d4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f71d8",
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
      "007f8134",
      "DATA",
      [
        "storage",
        "00c7cec0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f8138",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f813c",
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
- 007f71c0 ["INT_ADD", "register:40f0:8", ["const:7f71c0:8", "const:4:8"]]
- 007f71c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f8124 ["INT_ADD", "register:40f0:8", ["const:7f8124:8", "const:4:8"]]
+ 007f8124 ["CALL", null, ["callee:00c58f30:8"]]
- 007f71c8 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f812c ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f71cc ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 007f71cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f71cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f71cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b8baa2c4dbef6174023d8439256285d2"></a>

### [`007f71e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f71e0.md) → [`007f8144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8144.md) FUN_007f8144

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
      "definition_site": "007f8150",
      "incomplete_value": false,
      "site": "007f8150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f71ec",
      "incomplete_value": false,
      "site": "007f71ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:ef0:8"
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
      "007f8150",
      "DATA",
      [
        "storage",
        "00c7bef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8150",
      "DATA",
      [
        "storage",
        "00c7cec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f71e4 ["COPY", "register:4048:8", ["const:c7b000:8"]]
+ 007f8148 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f71e8 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 007f71e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f71e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f71e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f814c ["COPY", "tmp:0:8", ["const:ec0:8"]]
+ 007f814c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f814c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f814c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2ae4aecfa2880700ab03cdb1a527d641"></a>

### [`007f71fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f71fc.md) → [`007f8160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8160.md) FUN_007f8160

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) [`008b6eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb0.md) [`008b6eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb8.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0046bbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046bbe0.md) [`0046dcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcd4.md) [`008b7da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7da0.md) [`008b7e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e5c.md) [`008b7e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7e64.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.43% / 新版 81.43%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f818c",
      "incomplete_value": true,
      "site": "007f8190",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7228",
      "incomplete_value": true,
      "site": "007f722c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "live",
            "register:4040:8"
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
      "definition_site": "007f8188",
      "incomplete_value": false,
      "site": "007f8190",
      "value": [
        "leaf",
        "const:f:8"
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
      "definition_site": "007f8194",
      "incomplete_value": false,
      "site": "007f81a0",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f7200",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7204",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7208",
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
      "007f8164",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007f8168",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007f816c",
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
- 007f722c ["INT_ADD", "register:40f0:8", ["const:7f722c:8", "const:4:8"]]
- 007f722c ["CALL", null, ["callee:008b89cc:8"]]
+ 007f8190 ["INT_ADD", "register:40f0:8", ["const:7f8190:8", "const:4:8"]]
+ 007f8190 ["CALL", null, ["callee:008b89cc:8"]]
- 007f723c ["INT_ADD", "register:40f0:8", ["const:7f723c:8", "const:4:8"]]
- 007f723c ["CALL", null, ["callee:008b7da0:8"]]
+ 007f81a0 ["INT_ADD", "register:40f0:8", ["const:7f81a0:8", "const:4:8"]]
+ 007f81a0 ["CALL", null, ["callee:008b7da0:8"]]
- 007f725c ["INT_ADD", "register:40f0:8", ["const:7f725c:8", "const:4:8"]]
- 007f725c ["CALL", null, ["callee:00c596b0:8"]]
+ 007f81c0 ["INT_ADD", "register:40f0:8", ["const:7f81c0:8", "const:4:8"]]
+ 007f81c0 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-8d3797846ff58f3a993ee5aa204c2530"></a>

### [`007f7340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7340.md) → [`007f82a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f82a4.md) FUN_007f82a4

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
      "unmatched:007f7364",
      "DATA",
      [
        "storage",
        "00c7bf80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f7368",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f736c",
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
      "007f82c8",
      "DATA",
      [
        "storage",
        "00c7cf50",
        null,
        "undefined *"
      ]
    ],
    [
      "007f82cc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f82d0",
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
- 007f7354 ["INT_ADD", "register:40f0:8", ["const:7f7354:8", "const:4:8"]]
- 007f7354 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f82b8 ["INT_ADD", "register:40f0:8", ["const:7f82b8:8", "const:4:8"]]
+ 007f82b8 ["CALL", null, ["callee:00c58f30:8"]]
- 007f735c ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f82c0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f7360 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007f7360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-017f35ac5a0c0f6fa6f3908ca10f5cae"></a>

### [`007f7374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7374.md) → [`007f82d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f82d8.md) FUN_007f82d8

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
      "unmatched:007f7380",
      "DATA",
      [
        "storage",
        "00c7bf80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f82e4",
      "DATA",
      [
        "storage",
        "00c7cf50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7374 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f7374 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f7378 ["COPY", "register:4048:8", ["const:c7b000:8"]]
- 007f737c ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007f737c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f737c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f737c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2d035a1c3ccbc7a357beb062d91a8a6c"></a>

### [`007f7390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7390.md) → [`007f82f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f82f4.md) FUN_007f82f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008b7da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7da0.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 90.91% / 新版 90.91%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f8308",
      "incomplete_value": true,
      "site": "007f830c",
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
      "definition_site": "007f73a4",
      "incomplete_value": true,
      "site": "007f73a8",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 007f73a8 ["INT_ADD", "register:40f0:8", ["const:7f73a8:8", "const:4:8"]]
- 007f73a8 ["CALL", null, ["callee:008b89cc:8"]]
+ 007f830c ["INT_ADD", "register:40f0:8", ["const:7f830c:8", "const:4:8"]]
+ 007f830c ["CALL", null, ["callee:008b89cc:8"]]
- 007f73a4 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 007f73a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f73a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f73a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8308 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 007f8308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-210750c2cd1a84d2b12c7ff9ae9695d9"></a>

### [`007f73e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f73e8.md) → [`007f834c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f834c.md) FUN_007f834c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f7400",
      "DATA",
      [
        "storage",
        "00c7c000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8364",
      "DATA",
      [
        "storage",
        "00c7cfd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f73f4 ["INT_ADD", "register:40f0:8", ["const:7f73f4:8", "const:4:8"]]
- 007f73f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f8358 ["INT_ADD", "register:40f0:8", ["const:7f8358:8", "const:4:8"]]
+ 007f8358 ["CALL", null, ["callee:00c58f30:8"]]
- 007f73fc ["COPY", "tmp:0:8", ["const:0:8"]]
- 007f73fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f73fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f73fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f7400 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 007f7400 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-ee1dca16926b0ec9ffdd009aba3ae3a1"></a>

### [`007f740c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f740c.md) → [`007f8370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8370.md) FUN_007f8370

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
      "definition_site": "007f8374",
      "incomplete_value": false,
      "site": "007f8378",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7410",
      "incomplete_value": false,
      "site": "007f7414",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
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
      "007f8378",
      "DATA",
      [
        "storage",
        "00c7c000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8378",
      "DATA",
      [
        "storage",
        "00c7cfd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7410 ["COPY", "tmp:0:8", ["const:0:8"]]
- 007f7410 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7410 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7410 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8374 ["COPY", "tmp:0:8", ["const:fd0:8"]]
+ 007f8374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dd7ae03e7d5ab888c380d369bad0c2ef"></a>

### [`007f7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7424.md) → [`007f8388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8388.md) FUN_007f8388

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
      "unmatched:007f7448",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f83ac",
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
- 007f742c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f742c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007f8390 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f8390 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007f7434 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f7434 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007f8398 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f8398 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007f7448 ["INT_ADD", "register:40f0:8", ["const:7f7448:8", "const:4:8"]]
- 007f7448 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-957ab79cf87223294168d1c90aa6fe9f"></a>

### [`007f7498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7498.md) → [`007f83fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f83fc.md) FUN_007f83fc

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
      "definition_site": "007f8410",
      "incomplete_value": false,
      "site": "007f8414",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f74ac",
      "incomplete_value": false,
      "site": "007f74b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
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
      "007f8414",
      "DATA",
      [
        "storage",
        "00c7c080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8414",
      "DATA",
      [
        "storage",
        "00c7d050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f74a4 ["INT_ADD", "register:40f0:8", ["const:7f74a4:8", "const:4:8"]]
- 007f74a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f8408 ["INT_ADD", "register:40f0:8", ["const:7f8408:8", "const:4:8"]]
+ 007f8408 ["CALL", null, ["callee:00c58f30:8"]]
- 007f74a8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f840c ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f74ac ["COPY", "tmp:0:8", ["const:80:8"]]
- 007f74ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f74ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f74ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8410 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 007f8410 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8410 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8410 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dbc2b6068771ace8f361ded1fa7b72cc"></a>

### [`007f74bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f74bc.md) → [`007f8420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8420.md) FUN_007f8420

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
      "definition_site": "007f8424",
      "incomplete_value": false,
      "site": "007f8428",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f74c0",
      "incomplete_value": false,
      "site": "007f74c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:80:8"
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
      "007f8428",
      "DATA",
      [
        "storage",
        "00c7c080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8428",
      "DATA",
      [
        "storage",
        "00c7d050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f74bc ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f8420 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f74c0 ["COPY", "tmp:0:8", ["const:80:8"]]
- 007f74c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f74c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f74c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8424 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 007f8424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d1d69cf3fd97775693831fbc172a82e7"></a>

### [`007f74d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f74d4.md) → [`007f8438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8438.md) FUN_007f8438

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
      "site": "007f845c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f74f8",
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
      "007f845c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f845c",
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
- 007f74f8 ["INT_ADD", "register:40f0:8", ["const:7f74f8:8", "const:4:8"]]
- 007f74f8 ["CALL", null, ["ram:47ad34:8"]]
+ 007f845c ["INT_ADD", "register:40f0:8", ["const:7f845c:8", "const:4:8"]]
+ 007f845c ["CALL", null, ["ram:47b054:8"]]
- 007f7504 ["INT_ADD", "register:40f0:8", ["const:7f7504:8", "const:4:8"]]
- 007f7504 ["CALL", null, ["callee:0047d134:8"]]
+ 007f8468 ["INT_ADD", "register:40f0:8", ["const:7f8468:8", "const:4:8"]]
+ 007f8468 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-b88d8bf3a9397f4d38e334c1300b41db"></a>

### [`007f7548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7548.md) → [`007f84ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f84ac.md) FUN_007f84ac

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
      "unmatched:007f7560",
      "DATA",
      [
        "storage",
        "00c7c100",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f7564",
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
      "007f84c4",
      "DATA",
      [
        "storage",
        "00c7d0d0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f84c8",
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
- 007f7554 ["INT_ADD", "register:40f0:8", ["const:7f7554:8", "const:4:8"]]
- 007f7554 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f84b8 ["INT_ADD", "register:40f0:8", ["const:7f84b8:8", "const:4:8"]]
+ 007f84b8 ["CALL", null, ["callee:00c58f30:8"]]
- 007f7558 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f84bc ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f755c ["COPY", "tmp:0:8", ["const:100:8"]]
- 007f755c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f755c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f755c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-757584b12e5b5da03371da9bbd7554c4"></a>

### [`007f756c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f756c.md) → [`007f84d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f84d0.md) FUN_007f84d0

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
      "definition_site": "007f84d4",
      "incomplete_value": false,
      "site": "007f84d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7570",
      "incomplete_value": false,
      "site": "007f7574",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:100:8"
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
      "007f84d8",
      "DATA",
      [
        "storage",
        "00c7c100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f84d8",
      "DATA",
      [
        "storage",
        "00c7d0d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f756c ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f84d0 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f7570 ["COPY", "tmp:0:8", ["const:100:8"]]
- 007f7570 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7570 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7570 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f84d4 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 007f84d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f84d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f84d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c94a8bbc68283513b6993024dbbd4501"></a>

### [`007f7584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7584.md) → [`007f84e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f84e8.md) FUN_007f84e8

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
      "unmatched:007f75a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f850c",
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
- 007f758c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f758c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007f84f0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f84f0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007f7594 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f7594 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007f84f8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f84f8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 007f75a8 ["INT_ADD", "register:40f0:8", ["const:7f75a8:8", "const:4:8"]]
- 007f75a8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-0d8ebd36636fb5f9d59b9cf264d0e123"></a>

### [`007f75f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f75f8.md) → [`007f855c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f855c.md) FUN_007f855c

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
      "unmatched:007f75f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7604",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:007f7610",
      "DATA",
      [
        "storage",
        "00c7c180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f855c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f8568",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "007f8574",
      "DATA",
      [
        "storage",
        "00c7d150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f75f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f75f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f75f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 007f75f8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f75fc ["COPY", "register:40e8:8", ["register:8:8"]]
- 007f7600 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-befe067c47171688fe2b0277abf50a64"></a>

### [`007f761c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f761c.md) → [`007f8580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8580.md) FUN_007f8580

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
      "definition_site": "007f8584",
      "incomplete_value": false,
      "site": "007f8588",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7620",
      "incomplete_value": false,
      "site": "007f7624",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:180:8"
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
      "007f8588",
      "DATA",
      [
        "storage",
        "00c7c180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8588",
      "DATA",
      [
        "storage",
        "00c7d150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f761c ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f8580 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f7620 ["COPY", "tmp:0:8", ["const:180:8"]]
- 007f7620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8584 ["COPY", "tmp:0:8", ["const:150:8"]]
+ 007f8584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b503e4f964be168d8cf32ed3665a072b"></a>

### [`007f7634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7634.md) → [`007f8598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8598.md) FUN_007f8598

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
      "unmatched:007f7658",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f85bc",
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
- 007f763c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f763c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007f85a0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f85a0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 007f7644 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007f7644 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007f85a8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007f85a8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 007f7658 ["INT_ADD", "register:40f0:8", ["const:7f7658:8", "const:4:8"]]
- 007f7658 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-8017b5ddf6f3d36790b744cb006bc3dc"></a>

### [`007f76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f76a8.md) → [`007f860c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f860c.md) FUN_007f860c

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
      "unmatched:007f76cc",
      "DATA",
      [
        "storage",
        "00c7c200",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f76d0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f76d4",
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
      "007f8630",
      "DATA",
      [
        "storage",
        "00c7d1d0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f8634",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f8638",
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
- 007f76bc ["INT_ADD", "register:40f0:8", ["const:7f76bc:8", "const:4:8"]]
- 007f76bc ["CALL", null, ["callee:00c58f30:8"]]
+ 007f8620 ["INT_ADD", "register:40f0:8", ["const:7f8620:8", "const:4:8"]]
+ 007f8620 ["CALL", null, ["callee:00c58f30:8"]]
- 007f76c4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f8628 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f76c8 ["COPY", "tmp:0:8", ["const:200:8"]]
- 007f76c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f76c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f76c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-117ed1dfdb6afd13fe58891e3f7162d4"></a>

### [`007f76dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f76dc.md) → [`007f8640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8640.md) FUN_007f8640

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
      "definition_site": "007f864c",
      "incomplete_value": false,
      "site": "007f864c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f76e8",
      "incomplete_value": false,
      "site": "007f76e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:200:8"
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
      "007f864c",
      "DATA",
      [
        "storage",
        "00c7c200",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f864c",
      "DATA",
      [
        "storage",
        "00c7d1d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f76e0 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007f8644 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f76e4 ["COPY", "tmp:0:8", ["const:200:8"]]
- 007f76e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f76e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f76e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f8648 ["COPY", "tmp:0:8", ["const:1d0:8"]]
+ 007f8648 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8648 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8648 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4a0fa0fedc8d1596ed9f5d458758ab30"></a>

### [`007f76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f76f8.md) → [`007f865c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f865c.md) FUN_007f865c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f79dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79dc.md) [`007f79e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79e0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f8940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8940.md) [`007f8944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8944.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.36% / 新版 77.36%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f7734",
      "incomplete_value": false,
      "site": "007f773c",
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
      "definition_site": "007f7738",
      "incomplete_value": false,
      "site": "007f773c",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007f77cc",
      "incomplete_value": false,
      "site": "007f77d4",
      "value": [
        "leaf",
        "const:ffffffc4:8"
      ]
    },
    "ordinal": 4,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f76fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7700",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7704",
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
      "007f8660",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f8664",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f8668",
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
- 007f773c ["INT_ADD", "register:40f0:8", ["const:7f773c:8", "const:4:8"]]
- 007f773c ["CALL", null, ["callee:0047d134:8"]]
+ 007f86a0 ["INT_ADD", "register:40f0:8", ["const:7f86a0:8", "const:4:8"]]
+ 007f86a0 ["CALL", null, ["callee:0047d134:8"]]
- 007f77d4 ["INT_ADD", "register:40f0:8", ["const:7f77d4:8", "const:4:8"]]
- 007f77d4 ["CALL", null, ["callee:008bb86c:8"]]
+ 007f8738 ["INT_ADD", "register:40f0:8", ["const:7f8738:8", "const:4:8"]]
+ 007f8738 ["CALL", null, ["callee:008bb86c:8"]]
- 007f76f8 ["INT_SUB", "register:8:8", ["register:8:8", "const:d0:8"]]
~~~


<a id="compare-a408970432d675a12900dce5fe5ae94a"></a>

### [`007f7994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7994.md) → [`007f88f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f88f8.md) FUN_007f88f8

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
      "unmatched:007f7994",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7998",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f79b8",
      "DATA",
      [
        "storage",
        "00c7c270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f88f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f88fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f891c",
      "DATA",
      [
        "storage",
        "00c7d240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7994 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007f7994 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007f7994 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007f7994 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007f7998 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f7998 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007f799c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-b2b33dae1c4b84f648cca21839dacbd0"></a>

### [`007f79c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79c8.md) → [`007f892c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f892c.md) FUN_007f892c

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
      "definition_site": "007f8938",
      "incomplete_value": false,
      "site": "007f8938",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f79d4",
      "incomplete_value": false,
      "site": "007f79d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
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
      "007f8938",
      "DATA",
      [
        "storage",
        "00c7c270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8938",
      "DATA",
      [
        "storage",
        "00c7d240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f79cc ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007f8930 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f79d0 ["COPY", "tmp:0:8", ["const:270:8"]]
- 007f79d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f79d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f79d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f8934 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 007f8934 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8934 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8934 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f914588b3f652bb67f71b4371fbdc58e"></a>

### [`007f79e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79e4.md) → [`007f8948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8948.md) FUN_007f8948

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f7d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7d3c.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f8ca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8ca0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f89f8",
      "incomplete_value": true,
      "site": "007f8a0c",
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
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f89fc",
      "incomplete_value": true,
      "site": "007f8a0c",
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
    "old": null,
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f89e4",
      "incomplete_value": true,
      "site": "007f8a0c",
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
    "ordinal": 6,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007f79e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f79ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f79f0",
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
      "007f894c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f8950",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f8954",
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
- 007f7aa8 ["INT_ADD", "register:40f0:8", ["const:7f7aa8:8", "const:4:8"]]
- 007f7aa8 ["CALL", null, ["callee:008bb86c:8"]]
+ 007f8a0c ["INT_ADD", "register:40f0:8", ["const:7f8a0c:8", "const:4:8"]]
+ 007f8a0c ["CALL", null, ["callee:008bb86c:8"]]
- 007f7ae0 ["INT_ADD", "register:40f0:8", ["const:7f7ae0:8", "const:4:8"]]
- 007f7ae0 ["CALL", null, ["callee:008ba6a8:8"]]
+ 007f8a44 ["INT_ADD", "register:40f0:8", ["const:7f8a44:8", "const:4:8"]]
+ 007f8a44 ["CALL", null, ["callee:008ba6a8:8"]]
- 007f7b8c ["INT_ADD", "register:40f0:8", ["const:7f7b8c:8", "const:4:8"]]
- 007f7b8c ["CALL", null, ["callee:00c58f50:8"]]
+ 007f8af0 ["INT_ADD", "register:40f0:8", ["const:7f8af0:8", "const:4:8"]]
+ 007f8af0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-31dee3aa7c3c3489bfe9845c0bb65283"></a>

### [`007f7cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7cf4.md) → [`007f8c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8c58.md) FUN_007f8c58

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
      "unmatched:007f7d18",
      "DATA",
      [
        "storage",
        "00c7c2e0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f7d1c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7d20",
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
      "007f8c7c",
      "DATA",
      [
        "storage",
        "00c7d2b0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f8c80",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f8c84",
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
- 007f7d08 ["INT_ADD", "register:40f0:8", ["const:7f7d08:8", "const:4:8"]]
- 007f7d08 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f8c6c ["INT_ADD", "register:40f0:8", ["const:7f8c6c:8", "const:4:8"]]
+ 007f8c6c ["CALL", null, ["callee:00c58f30:8"]]
- 007f7d10 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f8c74 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f7d14 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 007f7d14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7d14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7d14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-84e2c7698015a914d0e2fb7960729509"></a>

### [`007f7d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7d28.md) → [`007f8c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8c8c.md) FUN_007f8c8c

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
      "unmatched:007f7d34",
      "DATA",
      [
        "storage",
        "00c7c2e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8c98",
      "DATA",
      [
        "storage",
        "00c7d2b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7d28 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f7d28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f7d2c ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f7d30 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 007f7d30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7d30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7d30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5ee0517998498627d8173389cc74b362"></a>

### [`007f7d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7d44.md) → [`007f8ca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8ca8.md) FUN_007f8ca8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f7fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fe4.md) [`007f7fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fe8.md) [`007f80a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f80a0.md) [`007f80a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f80a4.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007f8f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8f48.md) [`007f8f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8f4c.md) [`007f9004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9004.md) [`007f9008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9008.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.40% / 新版 76.40%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f8d08",
      "incomplete_value": true,
      "site": "007f8d0c",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "007f8d28",
      "incomplete_value": true,
      "site": "007f8d40",
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
    "old": {
      "definition_site": "007f7dc4",
      "incomplete_value": true,
      "site": "007f7ddc",
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
            "register:4048:8"
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
      "unmatched:007f7d84",
      "READ",
      [
        "storage",
        "002c0400",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007f7d88",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7d8c",
      "READ",
      [
        "storage",
        "002c0406",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f8ce8",
      "READ",
      [
        "storage",
        "002c044a",
        null,
        "string"
      ]
    ],
    [
      "007f8cec",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ],
    [
      "007f8cf0",
      "READ",
      [
        "storage",
        "002c0450",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7da8 ["INT_ADD", "register:40f0:8", ["const:7f7da8:8", "const:4:8"]]
- 007f7da8 ["CALL", null, ["callee:0048d1b4:8"]]
+ 007f8d0c ["INT_ADD", "register:40f0:8", ["const:7f8d0c:8", "const:4:8"]]
+ 007f8d0c ["CALL", null, ["callee:0048d1b4:8"]]
- 007f7ddc ["INT_ADD", "register:40f0:8", ["const:7f7ddc:8", "const:4:8"]]
- 007f7ddc ["CALL", null, ["callee:008bb86c:8"]]
+ 007f8d40 ["INT_ADD", "register:40f0:8", ["const:7f8d40:8", "const:4:8"]]
+ 007f8d40 ["CALL", null, ["callee:008bb86c:8"]]
- 007f7d6c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f7d6c ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
+ 007f8cd0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f8cd0 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
~~~


<a id="compare-5158aadac73400650cc3d3c4f70c6f41"></a>

### [`007f7f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7f9c.md) → [`007f8f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8f00.md) FUN_007f8f00

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
      "unmatched:007f7fc0",
      "DATA",
      [
        "storage",
        "00c7c350",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007f7fc4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f7fc8",
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
      "007f8f24",
      "DATA",
      [
        "storage",
        "00c7d320",
        null,
        "undefined *"
      ]
    ],
    [
      "007f8f28",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007f8f2c",
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
- 007f7fb0 ["INT_ADD", "register:40f0:8", ["const:7f7fb0:8", "const:4:8"]]
- 007f7fb0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f8f14 ["INT_ADD", "register:40f0:8", ["const:7f8f14:8", "const:4:8"]]
+ 007f8f14 ["CALL", null, ["callee:00c58f30:8"]]
- 007f7fb8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f8f1c ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f7fbc ["COPY", "tmp:0:8", ["const:350:8"]]
- 007f7fbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7fbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7fbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-90d79ab9dc16737beb744fd64abdc470"></a>

### [`007f7fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fd0.md) → [`007f8f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8f34.md) FUN_007f8f34

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
      "definition_site": "007f8f40",
      "incomplete_value": false,
      "site": "007f8f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7d000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7fdc",
      "incomplete_value": false,
      "site": "007f7fdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7c000:8"
          ],
          [
            "leaf",
            "const:350:8"
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
      "007f8f40",
      "DATA",
      [
        "storage",
        "00c7c350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8f40",
      "DATA",
      [
        "storage",
        "00c7d320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7fd4 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007f8f38 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f7fd8 ["COPY", "tmp:0:8", ["const:350:8"]]
- 007f7fd8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7fd8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7fd8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f8f3c ["COPY", "tmp:0:8", ["const:320:8"]]
+ 007f8f3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8f3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8f3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


