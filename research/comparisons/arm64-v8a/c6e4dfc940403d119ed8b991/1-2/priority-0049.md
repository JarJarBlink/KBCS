# v16.0.2 → v16.0.3 · 最優先の変更候補 (49)

[一覧の目次](README.md)

<a id="compare-38219faa0bf38b6df30f64f320c2459b"></a>

### [`007ffabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffabc.md) → [`00800a20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800a20.md) FUN_00800a20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00800a80",
      "incomplete_value": true,
      "site": "00800a8c",
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
      "unmatched:007ffabc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ffac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ffaf0",
      "DATA",
      [
        "storage",
        "00c7e400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00800a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00800a24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00800a54",
      "DATA",
      [
        "storage",
        "00c7f3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ffabc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007ffabc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007ffabc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007ffabc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007ffac0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 007ffac0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 007ffac0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 007ffac0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007ffac4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-89c0d075d71820032506d99aac018705"></a>

### [`007ffb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffb40.md) → [`00800aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800aa4.md) FUN_00800aa4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 78.95% / 新版 78.95%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00800aa8",
      "incomplete_value": false,
      "site": "00800aac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ffb44",
      "incomplete_value": false,
      "site": "007ffb48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
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
      "00800aac",
      "DATA",
      [
        "storage",
        "00c7e400",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007ffb88",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043be80"
      ]
    ]
  ],
  "added": [
    [
      "00800aac",
      "DATA",
      [
        "storage",
        "00c7f3d0",
        null,
        "undefined *"
      ]
    ],
    [
      "00800aec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043be80"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ffb40 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00800aa4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 007ffb44 ["COPY", "tmp:0:8", ["const:400:8"]]
- 007ffb44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ffb44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ffb44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00800aa8 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 00800aa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00800aa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00800aa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ffb84 ["COPY", "register:4008:8", ["register:4040:8"]]
~~~


<a id="compare-5fcd96fbb6dd2e21c8ec9b39ca2756e6"></a>

### [`007ffb8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffb8c.md) → [`00800af0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800af0.md) FUN_00800af0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-a699c0addd5c4d2ad94c3925bd2fa04a"></a>

### [`007ffba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffba0.md) → [`00800b04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800b04.md) FUN_00800b04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007cba84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cba84.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00800b20",
      "incomplete_value": true,
      "site": "00800b24",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ffbbc",
      "incomplete_value": true,
      "site": "007ffbc0",
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


~~~diff
- 007ffbc0 ["INT_ADD", "register:40f0:8", ["const:7ffbc0:8", "const:4:8"]]
- 007ffbc0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00800b24 ["INT_ADD", "register:40f0:8", ["const:800b24:8", "const:4:8"]]
+ 00800b24 ["CALL", null, ["callee:00c58f50:8"]]
- 007ffba4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 007ffba4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 007ffba4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 007ffba4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00800b08 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00800b08 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00800b08 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00800b08 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 007ffbbc ["COPY", "register:4000:8", ["register:4040:8"]]
~~~


<a id="compare-0aca0d4a58dacc9a7758cead6676298c"></a>

### [`007ffbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffbd4.md) → [`00800b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800b38.md) FUN_00800b38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007ffe4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffe4c.md) [`007ffe50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffe50.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00800db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800db0.md) [`00800db4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800db4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.39% / 新版 87.39%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007ffc08",
      "incomplete_value": true,
      "site": "007ffc0c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00800b8c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ffc28",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00800bf8",
      "incomplete_value": true,
      "site": "00800bfc",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "00800b84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007ffc44"
      ]
    ],
    [
      "00800b8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:007ffc44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00800b84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00800ba8"
      ]
    ],
    [
      "00800b8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00800ba8",
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
- 007ffc0c ["INT_ADD", "register:40f0:8", ["const:7ffc0c:8", "const:4:8"]]
- 007ffc0c ["CALL", null, ["callee:008b7f54:8"]]
+ 00800b70 ["INT_ADD", "register:40f0:8", ["const:800b70:8", "const:4:8"]]
+ 00800b70 ["CALL", null, ["callee:008b7f54:8"]]
- 007ffc28 ["INT_ADD", "register:40f0:8", ["const:7ffc28:8", "const:4:8"]]
- 007ffc28 ["CALL", null, ["ram:47ad34:8"]]
+ 00800b8c ["INT_ADD", "register:40f0:8", ["const:800b8c:8", "const:4:8"]]
+ 00800b8c ["CALL", null, ["ram:47b054:8"]]
- 007ffc98 ["INT_ADD", "register:40f0:8", ["const:7ffc98:8", "const:4:8"]]
- 007ffc98 ["CALL", null, ["callee:0048d1b4:8"]]
+ 00800bfc ["INT_ADD", "register:40f0:8", ["const:800bfc:8", "const:4:8"]]
+ 00800bfc ["CALL", null, ["callee:0048d1b4:8"]]
~~~


<a id="compare-a7b06d5fec7984ee94f83362800f2cb8"></a>

### [`007ffe18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffe18.md) → [`00800d7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800d7c.md) FUN_00800d7c

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
      "definition_site": "00800d90",
      "incomplete_value": false,
      "site": "00800d94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ffe2c",
      "incomplete_value": false,
      "site": "007ffe30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:470:8"
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
      "00800d94",
      "DATA",
      [
        "storage",
        "00c7e470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00800d94",
      "DATA",
      [
        "storage",
        "00c7f440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ffe24 ["INT_ADD", "register:40f0:8", ["const:7ffe24:8", "const:4:8"]]
- 007ffe24 ["CALL", null, ["callee:00c58f30:8"]]
+ 00800d88 ["INT_ADD", "register:40f0:8", ["const:800d88:8", "const:4:8"]]
+ 00800d88 ["CALL", null, ["callee:00c58f30:8"]]
- 007ffe28 ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00800d8c ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 007ffe2c ["COPY", "tmp:0:8", ["const:470:8"]]
- 007ffe2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ffe2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ffe2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00800d90 ["COPY", "tmp:0:8", ["const:440:8"]]
+ 00800d90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00800d90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00800d90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3dd1a5f8640ccd0c5ccb44de63f17e37"></a>

### [`007ffe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffe3c.md) → [`00800da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800da0.md) FUN_00800da0

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
      "definition_site": "00800da4",
      "incomplete_value": false,
      "site": "00800da8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ffe40",
      "incomplete_value": false,
      "site": "007ffe44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:470:8"
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
      "00800da8",
      "DATA",
      [
        "storage",
        "00c7e470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00800da8",
      "DATA",
      [
        "storage",
        "00c7f440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ffe3c ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 00800da0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 007ffe40 ["COPY", "tmp:0:8", ["const:470:8"]]
- 007ffe40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ffe40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ffe40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00800da4 ["COPY", "tmp:0:8", ["const:440:8"]]
+ 00800da4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00800da4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00800da4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2e51c93942a7825933e026fab5486836"></a>

### [`007ffe94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ffe94.md) → [`00800df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00800/00800df8.md) _INIT_146

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 53.67% / 新版 53.67%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_store_alignment` 39件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00800f54",
      "incomplete_value": true,
      "site": "00800f58",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "007ffff0",
      "incomplete_value": false,
      "site": "007ffff4",
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
            "const:e8:8"
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
      "definition_site": "00800f44",
      "incomplete_value": true,
      "site": "00800f58",
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
    "old": {
      "definition_site": "007fffe0",
      "incomplete_value": false,
      "site": "007ffff4",
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
                "const:ca8000:8"
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00800f4c",
      "incomplete_value": true,
      "site": "00800f58",
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
    "old": {
      "definition_site": "007fffe8",
      "incomplete_value": true,
      "site": "007ffff4",
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
      "unmatched:007ffec4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:007ffed0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007ffed8",
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
      "00800e28",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00800e34",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00800e3c",
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
- 007ffff4 ["INT_ADD", "register:40f0:8", ["const:7ffff4:8", "const:4:8"]]
- 007ffff4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00800f58 ["INT_ADD", "register:40f0:8", ["const:800f58:8", "const:4:8"]]
+ 00800f58 ["CALL", null, ["callee:0043bb58:8"]]
- 00800008 ["INT_ADD", "register:40f0:8", ["const:800008:8", "const:4:8"]]
- 00800008 ["CALL", null, ["callee:0043bb58:8"]]
+ 00800f6c ["INT_ADD", "register:40f0:8", ["const:800f6c:8", "const:4:8"]]
+ 00800f6c ["CALL", null, ["callee:0043bb58:8"]]
- 0080001c ["INT_ADD", "register:40f0:8", ["const:80001c:8", "const:4:8"]]
- 0080001c ["CALL", null, ["callee:0043bb58:8"]]
+ 00800f80 ["INT_ADD", "register:40f0:8", ["const:800f80:8", "const:4:8"]]
+ 00800f80 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-851287c636d6be536879b2427a275d16"></a>

### [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) → [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) FUN_00801334

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 74件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`00615950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615950.md) [`0063d954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d954.md) [`006755f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/006755f8.md) · 呼出先 0件 
- 新版 呼出元 74件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`00615d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00615/00615d00.md) [`0063dd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063dd04.md) [`006759a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00675/006759a8.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 97.69% / 新版 97.69%

優先判定に残った影響 `return_value_candidate` 2件

アドレスに依存する影響 `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "008013ac",
      "incomplete_value": false,
      "site": "008013b0",
      "value": [
        "leaf",
        "const:3:8"
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00801490",
      "incomplete_value": false,
      "site": "00801494",
      "value": [
        "leaf",
        "const:fffffff4:8"
      ]
    },
    "old": null,
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
      "unmatched:00800400",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00801370"
      ]
    ],
    [
      "unmatched:0080048c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008013fc"
      ]
    ],
    [
      "unmatched:008004b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00801424"
      ]
    ]
  ],
  "added": [
    [
      "00801364",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00801370"
      ]
    ],
    [
      "008013f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008013fc"
      ]
    ],
    [
      "00801418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00801424"
      ]
    ]
  ]
}
~~~


~~~diff
- 00800400 ["CBRANCH", null, ["local:b7:8", "register:102:1"]]
- 00800414 ["CBRANCH", null, ["local:b9:8", "register:102:1"]]
+ 00801378 ["CBRANCH", null, ["local:b8:8", "register:102:1"]]
- 0080042c ["CBRANCH", null, ["local:b11:8", "register:102:1"]]
+ 00801390 ["CBRANCH", null, ["local:b10:8", "register:102:1"]]
~~~


<a id="compare-6347a49da81daf2050623777bf4fc69d"></a>

### [`008006d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008006d0.md) → [`00801634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801634.md) FUN_00801634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 0件 
- 新版 呼出元 2件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00aa4e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa4/00aa4e88.md) · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.90% / 新版 93.90%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008006e8",
      "DATA",
      [
        "storage",
        "002ec943",
        "switchD_008006f0::switchdataD_002ec943",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "0080164c",
      "DATA",
      [
        "storage",
        "002ec983",
        "switchD_00801654::switchdataD_002ec983",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 008006e0 ["COPY", "tmp:0:8", ["const:943:8"]]
- 008006e0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 008006e0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 008006e0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 008006e4 ["COPY", "register:4058:8", ["const:8006f4:8"]]
- 008006e8 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 008006e8 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 008006e8 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 008006e8 ["INT_ADD", "tmp:2:8", ["register:4050:8", "tmp:1:8"]]
~~~


<a id="compare-b8a0cf310462ea487c33d93681c34f52"></a>

### [`00800818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800818.md) → [`0080177c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/0080177c.md) FUN_0080177c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00729160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729160.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`00a52ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52ea0.md) · 呼出先 0件 
- 新版 呼出元 3件 [`00729510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00729/00729510.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) [`00a53e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53e94.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.77% / 新版 90.77%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00800834",
      "DATA",
      [
        "storage",
        "002ec962",
        "switchD_0080083c::switchdataD_002ec962",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00801798",
      "DATA",
      [
        "storage",
        "002ec9a2",
        "switchD_008017a0::switchdataD_002ec9a2",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080082c ["COPY", "tmp:0:8", ["const:962:8"]]
- 0080082c ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 0080082c ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 0080082c ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
- 00800830 ["COPY", "register:4060:8", ["const:800840:8"]]
- 00800834 ["COPY", "tmp:0:8", ["register:4050:8"]]
- 00800834 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00800834 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 00800834 ["INT_ADD", "tmp:2:8", ["register:4058:8", "tmp:1:8"]]
~~~


<a id="compare-c1f8efe3be5dca2256018897e904b090"></a>

### [`00800994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800994.md) → [`008018f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008018f8.md) FUN_008018f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007fe838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe838.md) · 呼出先 0件 
- 新版 呼出元 6件 [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007ff79c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ff/007ff79c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080099c",
      "READ",
      [
        "storage",
        "00ca8130",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0080099c",
      "READ",
      [
        "storage",
        "00ca8138",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008009a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00801928"
      ]
    ]
  ],
  "added": [
    [
      "00801900",
      "READ",
      [
        "storage",
        "00ca90f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00801900",
      "READ",
      [
        "storage",
        "00ca90f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00801908",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00801928"
      ]
    ]
  ]
}
~~~


~~~diff
- 00800994 ["COPY", "register:4040:8", ["const:ca8000:8"]]
- 00800998 ["COPY", "tmp:0:8", ["const:130:8"]]
- 00800998 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00800998 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00800998 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0080099c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0080099c ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 0080099c ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 0080099c ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
~~~


<a id="compare-334249ad498ee5be0961432b3c28657a"></a>

### [`008009d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008009d0.md) → [`00801934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801934.md) FUN_00801934

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 22件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00470cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470cf4.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.00% / 新版 93.00%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008029e4",
      "incomplete_value": true,
      "site": "008029e8",
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
      "definition_site": "00801a80",
      "incomplete_value": true,
      "site": "00801a84",
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
    "ordinal": 239,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008029e0",
      "incomplete_value": true,
      "site": "008029ec",
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
      "definition_site": "00801a7c",
      "incomplete_value": true,
      "site": "00801a88",
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
    "ordinal": 240,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008029f8",
      "incomplete_value": true,
      "site": "008029f8",
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
      "definition_site": "00801a94",
      "incomplete_value": true,
      "site": "00801a94",
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
    "ordinal": 241,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00800a20",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00800a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00800bb4",
      "READ",
      [
        "storage",
        "002a23f4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00801984",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00801984",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "00801b18",
      "READ",
      [
        "storage",
        "002a24bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00800a84 ["INT_ADD", "register:40f0:8", ["const:800a84:8", "const:4:8"]]
- 00800a84 ["CALL", null, ["callee:005c426c:8"]]
+ 008019e8 ["INT_ADD", "register:40f0:8", ["const:8019e8:8", "const:4:8"]]
+ 008019e8 ["CALL", null, ["callee:005c426c:8"]]
- 00800b24 ["INT_ADD", "register:40f0:8", ["const:800b24:8", "const:4:8"]]
- 00800b24 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00801a88 ["INT_ADD", "register:40f0:8", ["const:801a88:8", "const:4:8"]]
+ 00801a88 ["CALL", null, ["callee:005c1b8c:8"]]
- 00800b58 ["INT_ADD", "register:40f0:8", ["const:800b58:8", "const:4:8"]]
- 00800b58 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00801abc ["INT_ADD", "register:40f0:8", ["const:801abc:8", "const:4:8"]]
+ 00801abc ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-2d68eb181a1fe91383b7ac1048b768a2"></a>

### [`00801c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801c9c.md) → [`00802c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802c00.md) FUN_00802c00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 13件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 0件 
- 新版 呼出元 13件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00801cd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802c40"
      ]
    ]
  ],
  "added": [
    [
      "00802c34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802c40"
      ]
    ]
  ]
}
~~~


~~~diff
- 00801ca0 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00801ca0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00802c04 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00802c04 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00801cc4 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 00802c28 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 00801cd0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00801cd0 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00801cd0 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
~~~


<a id="compare-3463c3d473491c39c0fca75fd6e6a5d2"></a>

### [`00801f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801f00.md) → [`00802e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802e64.md) FUN_00802e64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 0件 
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00801f38",
      "incomplete_value": false,
      "site": "00801f3c",
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
      "unmatched:00801f34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802ea4"
      ]
    ]
  ],
  "added": [
    [
      "00802e98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802ea4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00801f04 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00801f04 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00802e68 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00802e68 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00801f28 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 00802e8c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 00801f34 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00801f34 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00801f34 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
~~~


<a id="compare-93744c2db7a09b075322ca15893895d1"></a>

### [`00801f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801f90.md) → [`00802ef4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802ef4.md) FUN_00802ef4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 10件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`00729d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729d4c.md) [`00730c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730c14.md) [`00730dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730dd4.md) · 呼出先 0件 
- 新版 呼出元 10件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`0072a0fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072a/0072a0fc.md) [`00730fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00730/00730fc4.md) [`00731184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731184.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

アドレスに依存する影響 `unresolved_branch_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00801f94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802f2c"
      ]
    ],
    [
      "unmatched:00801fb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00801f9c"
      ]
    ],
    [
      "unmatched:00801fb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802f2c"
      ]
    ]
  ],
  "added": [
    [
      "00802ef8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802f2c"
      ]
    ],
    [
      "00802f14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802f00"
      ]
    ],
    [
      "00802f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802f2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00801f90 ["INT_ADD", "register:4000:8", ["register:4000:8", "const:98:8"]]
- 00801f90 ["LOAD", "register:4048:8", ["const:1b1:8", "register:4000:8"]]
- 00801f94 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00801f94 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00801f9c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:1c:8"]]
- 00801f9c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00801f9c ["INT_ZEXT", "register:4050:8", ["tmp:1:4"]]
~~~


<a id="compare-63ff6e51c1ef47d350027871834e25b9"></a>

### [`00801fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801fe0.md) → [`00802f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802f44.md) FUN_00802f44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`0062714c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00627/0062714c.md) [`00729d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729d4c.md) [`00730dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730dd4.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 8件 [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`006274fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00627/006274fc.md) [`0072a0fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072a/0072a0fc.md) [`00731184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731184.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.56% / 新版 80.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00802fc0",
      "incomplete_value": false,
      "site": "00802fc4",
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
      "definition_site": "0080205c",
      "incomplete_value": false,
      "site": "00802060",
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
      "unmatched:00801fe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00801fec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802f90"
      ]
    ],
    [
      "00802fc0",
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
      "00802f44",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00802f50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00802f90"
      ]
    ],
    [
      "00802fc0",
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
- 00802060 ["INT_ADD", "register:40f0:8", ["const:802060:8", "const:4:8"]]
- 00802060 ["CALL", null, ["callee:00442c90:8"]]
+ 00802fc4 ["INT_ADD", "register:40f0:8", ["const:802fc4:8", "const:4:8"]]
+ 00802fc4 ["CALL", null, ["callee:00442c90:8"]]
- 00801fe0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00801fe0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00801fe0 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00801fe0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00801fe4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2cd8298365a51b7f5a1ead5e8609ab9d"></a>

### [`00802070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802070.md) → [`00802fd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802fd4.md) FUN_00802fd4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`008021fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/008021fc.md) [`0080666c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080666c.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`00803160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803160.md) [`008075d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/008075d0.md) · 呼出先 3件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.99% / 新版 98.99%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080312c",
      "incomplete_value": false,
      "site": "00803130",
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
      "definition_site": "008021c8",
      "incomplete_value": false,
      "site": "008021cc",
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
      "00803034",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[39]"
      ]
    ],
    [
      "00803080",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[39]"
      ]
    ],
    [
      "0080312c",
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
      "00803034",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[31]"
      ]
    ],
    [
      "00803080",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[31]"
      ]
    ],
    [
      "0080312c",
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
- 008021cc ["INT_ADD", "register:40f0:8", ["const:8021cc:8", "const:4:8"]]
- 008021cc ["CALL", null, ["callee:00442c90:8"]]
+ 00803130 ["INT_ADD", "register:40f0:8", ["const:803130:8", "const:4:8"]]
+ 00803130 ["CALL", null, ["callee:00442c90:8"]]
- 008020c4 ["INT_ADD", "register:40f0:8", ["const:8020c4:8", "const:4:8"]]
- 008020c4 ["CALL", null, ["callee:008524fc:8"]]
+ 00803028 ["INT_ADD", "register:40f0:8", ["const:803028:8", "const:4:8"]]
+ 00803028 ["CALL", null, ["callee:008524fc:8"]]
- 00802110 ["INT_ADD", "register:40f0:8", ["const:802110:8", "const:4:8"]]
- 00802110 ["CALL", null, ["callee:008524fc:8"]]
+ 00803074 ["INT_ADD", "register:40f0:8", ["const:803074:8", "const:4:8"]]
+ 00803074 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-ab368c63e3dee74550578c51902224b2"></a>

### [`008021fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/008021fc.md) → [`00803160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803160.md) FUN_00803160

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00ab056c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab056c.md) · 呼出先 2件 [`00802070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802070.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00ab1560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab1/00ab1560.md) · 呼出先 2件 [`00802fd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802fd4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0080225c ["INT_ADD", "register:40f0:8", ["const:80225c:8", "const:4:8"]]
- 0080225c ["CALL", null, ["callee:008524fc:8"]]
+ 008031c0 ["INT_ADD", "register:40f0:8", ["const:8031c0:8", "const:4:8"]]
+ 008031c0 ["CALL", null, ["callee:008524fc:8"]]
- 008022bc ["INT_ADD", "register:40f0:8", ["const:8022bc:8", "const:4:8"]]
- 008022bc ["CALL", null, ["callee:00802fd4:8"]]
+ 00803220 ["INT_ADD", "register:40f0:8", ["const:803220:8", "const:4:8"]]
+ 00803220 ["CALL", null, ["callee:00802fd4:8"]]
~~~


<a id="compare-9d16c3898fc02919624559a8ccb4ffd9"></a>

### [`008023e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/008023e4.md) → [`00803348`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803348.md) FUN_00803348

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 6件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) [`00824388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00824/00824388.md) [`00824534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00824/00824534.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 6件 [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) [`00825334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00825/00825334.md) [`008254e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00825/008254e0.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0080243c ["BRANCH", null, ["local:b18:8"]]
+ 008033a0 ["BRANCH", null, ["local:b19:8"]]
- 00802458 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00802458 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 008033bc ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008033bc ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 00802494 ["INT_ADD", "register:40f0:8", ["const:802494:8", "const:4:8"]]
- 00802494 ["CALL", null, ["callee:00c58f30:8"]]
+ 008033f8 ["INT_ADD", "register:40f0:8", ["const:8033f8:8", "const:4:8"]]
+ 008033f8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-995d5e54592035e21407b4037b1b6419"></a>

### [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) → [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) FUN_00803674

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 71件 [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`005e4720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4720.md) [`005e48ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e48ec.md) [`005e4970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4970.md) [`005e4eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4eb4.md) · 呼出先 7件 [`007bbc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbc84.md) [`007bbd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbd08.md) [`008028b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/008028b8.md) [`00802a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802a90.md) [`00802b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802b20.md)
- 新版 呼出元 71件 [`005e3504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3504.md) [`005e4ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4ad0.md) [`005e4c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4c9c.md) [`005e4d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4d20.md) [`005e5264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e5264.md) · 呼出先 7件 [`007bcbe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcbe8.md) [`007bcc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcc6c.md) [`0080381c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/0080381c.md) [`008039f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/008039f4.md) [`00803a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803a84.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.23% / 新版 96.23%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008036ac",
      "value": [
        "leaf",
        "ram:7bcc6c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00802748",
      "value": [
        "leaf",
        "ram:7bbd08:8"
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
      "008036ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007bbd08"
      ]
    ],
    [
      "0080376c",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ],
    [
      "unmatched:008028b4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008037e0"
      ]
    ]
  ],
  "added": [
    [
      "008036ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007bcc6c"
      ]
    ],
    [
      "0080376c",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[11]"
      ]
    ],
    [
      "00803818",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008037e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00802748 ["INT_ADD", "register:40f0:8", ["const:802748:8", "const:4:8"]]
- 00802748 ["CALL", null, ["ram:7bbd08:8"]]
+ 008036ac ["INT_ADD", "register:40f0:8", ["const:8036ac:8", "const:4:8"]]
+ 008036ac ["CALL", null, ["ram:7bcc6c:8"]]
- 00802720 ["INT_ADD", "register:40f0:8", ["const:802720:8", "const:4:8"]]
- 00802720 ["CALL", null, ["callee:008524fc:8"]]
+ 00803684 ["INT_ADD", "register:40f0:8", ["const:803684:8", "const:4:8"]]
+ 00803684 ["CALL", null, ["callee:008524fc:8"]]
- 00802730 ["INT_ADD", "register:40f0:8", ["const:802730:8", "const:4:8"]]
- 00802730 ["CALL", null, ["callee:008524fc:8"]]
+ 00803694 ["INT_ADD", "register:40f0:8", ["const:803694:8", "const:4:8"]]
+ 00803694 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-9114c01ab48b634c2a1400da20524a01"></a>

### [`008028b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/008028b8.md) → [`0080381c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/0080381c.md) FUN_0080381c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md)
- 新版 呼出元 1件 [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) · 呼出先 3件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 80.51% / 新版 80.51%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00802994",
      "incomplete_value": false,
      "site": "00802998",
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
      "unmatched:00802964",
      "DATA",
      [
        "storage",
        "00333974",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:00802968",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008038d8"
      ]
    ],
    [
      "unmatched:00802970",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008038f4"
      ]
    ]
  ],
  "added": [
    [
      "008038c8",
      "DATA",
      [
        "storage",
        "00333974",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "008038cc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008038d8"
      ]
    ],
    [
      "008038d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008038f4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00802998 ["INT_ADD", "register:40f0:8", ["const:802998:8", "const:4:8"]]
- 00802998 ["CALL", null, ["callee:00442c90:8"]]
+ 008038fc ["INT_ADD", "register:40f0:8", ["const:8038fc:8", "const:4:8"]]
+ 008038fc ["CALL", null, ["callee:00442c90:8"]]
- 008028c4 ["INT_ADD", "register:40f0:8", ["const:8028c4:8", "const:4:8"]]
- 008028c4 ["CALL", null, ["callee:008524fc:8"]]
+ 00803828 ["INT_ADD", "register:40f0:8", ["const:803828:8", "const:4:8"]]
+ 00803828 ["CALL", null, ["callee:008524fc:8"]]
- 008028c8 ["INT_ADD", "register:40f0:8", ["const:8028c8:8", "const:4:8"]]
- 008028c8 ["CALL", null, ["callee:00854c74:8"]]
+ 0080382c ["INT_ADD", "register:40f0:8", ["const:80382c:8", "const:4:8"]]
+ 0080382c ["CALL", null, ["callee:00854c74:8"]]
~~~


<a id="compare-c88d80f9db245ab7a84e1eefcaebb28b"></a>

### [`00802b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802b20.md) → [`00803a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803a84.md) FUN_00803a84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) · 呼出先 3件 [`007de6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007de/007de6cc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md)
- 新版 呼出元 1件 [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) · 呼出先 3件 [`007df630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007df/007df630.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00802b2c ["INT_ADD", "register:40f0:8", ["const:802b2c:8", "const:4:8"]]
- 00802b2c ["CALL", null, ["callee:008524fc:8"]]
+ 00803a90 ["INT_ADD", "register:40f0:8", ["const:803a90:8", "const:4:8"]]
+ 00803a90 ["CALL", null, ["callee:008524fc:8"]]
- 00802b30 ["INT_ADD", "register:40f0:8", ["const:802b30:8", "const:4:8"]]
- 00802b30 ["CALL", null, ["callee:00854c74:8"]]
+ 00803a94 ["INT_ADD", "register:40f0:8", ["const:803a94:8", "const:4:8"]]
+ 00803a94 ["CALL", null, ["callee:00854c74:8"]]
- 00802b38 ["INT_ADD", "register:40f0:8", ["const:802b38:8", "const:4:8"]]
- 00802b38 ["CALL", null, ["callee:008524fc:8"]]
+ 00803a9c ["INT_ADD", "register:40f0:8", ["const:803a9c:8", "const:4:8"]]
+ 00803a9c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-662b144655135fc5b698999fae2285c2"></a>

### [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) → [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) FUN_00803b14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 87件 [`005b070c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b070c.md) [`005e2e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e2/005e2e80.md) [`005e6e3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e6/005e6e3c.md) [`005e7544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7544.md) [`005e7f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7f7c.md) · 呼出先 3件 [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md)
- 新版 呼出元 87件 [`005b0abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0abc.md) [`005e3230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3230.md) [`005e71ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e71ec.md) [`005e78f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e78f4.md) [`005e832c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e832c.md) · 呼出先 3件 [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md) [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`00803b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b48.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00802bb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00802bb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00802bcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ]
  ],
  "added": [
    [
      "00803b14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00803b18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00803b30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00802bb0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00802bb0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00802bb0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00802bb0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00802bb4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00802bb4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00802bb4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00802bb4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00802bb8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e0b97c87d27d8cf8f188760157cf11d9"></a>

### [`00802dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802dd0.md) → [`00803d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803d34.md) FUN_00803d34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00802da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802da4.md) [`00a06780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06780.md) · 呼出先 8件 [`0067678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/0067678c.md) [`007bbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbda0.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md)
- 新版 呼出元 3件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00803d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803d08.md) [`00a0772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a0772c.md) · 呼出先 8件 [`00676b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676b3c.md) [`007bcd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcd04.md) [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md) [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`00803b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b48.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 95.08% / 新版 95.08%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00802e4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ],
    [
      "unmatched:00802e80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00803d74"
      ]
    ],
    [
      "unmatched:00802ec0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ]
  ],
  "added": [
    [
      "00803db0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ],
    [
      "00803de4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00803d74"
      ]
    ],
    [
      "00803e24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00802ddc ["INT_ADD", "register:40f0:8", ["const:802ddc:8", "const:4:8"]]
- 00802ddc ["CALL", null, ["callee:008524fc:8"]]
+ 00803d40 ["INT_ADD", "register:40f0:8", ["const:803d40:8", "const:4:8"]]
+ 00803d40 ["CALL", null, ["callee:008524fc:8"]]
- 00802dec ["INT_ADD", "register:40f0:8", ["const:802dec:8", "const:4:8"]]
- 00802dec ["CALL", null, ["callee:00676b3c:8"]]
+ 00803d50 ["INT_ADD", "register:40f0:8", ["const:803d50:8", "const:4:8"]]
+ 00803d50 ["CALL", null, ["callee:00676b3c:8"]]
- 00802dfc ["INT_ADD", "register:40f0:8", ["const:802dfc:8", "const:4:8"]]
- 00802dfc ["CALL", null, ["callee:008524fc:8"]]
+ 00803d60 ["INT_ADD", "register:40f0:8", ["const:803d60:8", "const:4:8"]]
+ 00803d60 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-561587576b9ba4aa1d1ee0bbe55adede"></a>

### [`00802ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802ec4.md) → [`00803e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e28.md) FUN_00803e28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00a06780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06780.md) · 呼出先 4件 [`0067678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/0067678c.md) [`007bbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbda0.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00a0772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a0772c.md) · 呼出先 4件 [`00676b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676b3c.md) [`007bcd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcd04.md) [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00803e8c",
      "DATA",
      [
        "storage",
        "0040f050",
        null,
        "byte[63]"
      ]
    ]
  ],
  "added": [
    [
      "00803e8c",
      "DATA",
      [
        "storage",
        "0040f050",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00802ed0 ["INT_ADD", "register:40f0:8", ["const:802ed0:8", "const:4:8"]]
- 00802ed0 ["CALL", null, ["callee:008524fc:8"]]
+ 00803e34 ["INT_ADD", "register:40f0:8", ["const:803e34:8", "const:4:8"]]
+ 00803e34 ["CALL", null, ["callee:008524fc:8"]]
- 00802ee0 ["INT_ADD", "register:40f0:8", ["const:802ee0:8", "const:4:8"]]
- 00802ee0 ["CALL", null, ["callee:00676b3c:8"]]
+ 00803e44 ["INT_ADD", "register:40f0:8", ["const:803e44:8", "const:4:8"]]
+ 00803e44 ["CALL", null, ["callee:00676b3c:8"]]
- 00802ee8 ["INT_ADD", "register:40f0:8", ["const:802ee8:8", "const:4:8"]]
- 00802ee8 ["CALL", null, ["callee:008524fc:8"]]
+ 00803e4c ["INT_ADD", "register:40f0:8", ["const:803e4c:8", "const:4:8"]]
+ 00803e4c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-ee4f6ddb36941226cbb57739d76c11ab"></a>

### [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) → [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md) FUN_00803e9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 50件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00611ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00611/00611ea0.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 50件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00612250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00612/00612250.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`006bf164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bf/006bf164.md) [`0070d7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070d/0070d7c0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00803ee0",
      "DATA",
      [
        "storage",
        "0039badc",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "00803ee0",
      "DATA",
      [
        "storage",
        "0039badc",
        "fde_0039badc",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00802f40 ["INT_ADD", "register:40f0:8", ["const:802f40:8", "const:4:8"]]
- 00802f40 ["CALL", null, ["callee:008524fc:8"]]
+ 00803ea4 ["INT_ADD", "register:40f0:8", ["const:803ea4:8", "const:4:8"]]
+ 00803ea4 ["CALL", null, ["callee:008524fc:8"]]
- 00802f58 ["INT_ADD", "register:40f0:8", ["const:802f58:8", "const:4:8"]]
- 00802f58 ["CALL", null, ["callee:008524fc:8"]]
+ 00803ebc ["INT_ADD", "register:40f0:8", ["const:803ebc:8", "const:4:8"]]
+ 00803ebc ["CALL", null, ["callee:008524fc:8"]]
- 00802f6c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00802f6c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00803ed0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00803ed0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-e146a32f5e6e4e693474f30367ecab71"></a>

### [`00802f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f94.md) → [`00803ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803ef8.md) FUN_00803ef8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009cc660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc660.md) [`009cc69c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc69c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009cd60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd60c.md) [`009cd648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd648.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.89% / 新版 84.89%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00804018",
      "incomplete_value": true,
      "site": "00804024",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00804010",
      "incomplete_value": true,
      "site": "00804024",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00804014",
      "incomplete_value": true,
      "site": "00804024",
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
      "unmatched:00802ff0",
      "DATA",
      [
        "storage",
        "0038f289",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:00802ff4",
      "DATA",
      [
        "storage",
        "0038f341",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:00802ff8",
      "DATA",
      [
        "storage",
        "0038f28a",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00803f54",
      "DATA",
      [
        "storage",
        "0038f289",
        null,
        "dword"
      ]
    ],
    [
      "00803f58",
      "DATA",
      [
        "storage",
        "0038f341",
        null,
        "byte[63]"
      ]
    ],
    [
      "00803f5c",
      "DATA",
      [
        "storage",
        "0038f28a",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 008030c0 ["INT_ADD", "register:40f0:8", ["const:8030c0:8", "const:4:8"]]
- 008030c0 ["CALL", null, ["callee:009cd648:8"]]
+ 00804024 ["INT_ADD", "register:40f0:8", ["const:804024:8", "const:4:8"]]
+ 00804024 ["CALL", null, ["callee:009cd648:8"]]
- 00802fc8 ["INT_ADD", "register:40f0:8", ["const:802fc8:8", "const:4:8"]]
- 00802fc8 ["CALL", null, ["callee:008524fc:8"]]
+ 00803f2c ["INT_ADD", "register:40f0:8", ["const:803f2c:8", "const:4:8"]]
+ 00803f2c ["CALL", null, ["callee:008524fc:8"]]
- 00802fd8 ["INT_ADD", "register:40f0:8", ["const:802fd8:8", "const:4:8"]]
- 00802fd8 ["CALL", null, ["callee:008524fc:8"]]
+ 00803f3c ["INT_ADD", "register:40f0:8", ["const:803f3c:8", "const:4:8"]]
+ 00803f3c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a6114078a0c4768127cbc6a1aa1c56f8"></a>

### [`00803208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00803/00803208.md) → [`0080416c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00804/0080416c.md) FUN_0080416c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 10件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) · 呼出先 3件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md) [`0080323c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00803/0080323c.md)
- 新版 呼出元 10件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`006bf164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bf/006bf164.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) · 呼出先 3件 [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`00803b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b48.md) [`008041a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00804/008041a0.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00803224",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00802be4"
      ]
    ]
  ],
  "added": [
    [
      "00804188",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00803b48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00803218 ["INT_ADD", "register:40f0:8", ["const:803218:8", "const:4:8"]]
- 00803218 ["CALL", null, ["callee:00803674:8"]]
+ 0080417c ["INT_ADD", "register:40f0:8", ["const:80417c:8", "const:4:8"]]
+ 0080417c ["CALL", null, ["callee:00803674:8"]]
- 00803224 ["INT_ADD", "register:40f0:8", ["const:803224:8", "const:4:8"]]
- 00803224 ["CALL", null, ["ram:802be4:8"]]
+ 00804188 ["INT_ADD", "register:40f0:8", ["const:804188:8", "const:4:8"]]
+ 00804188 ["CALL", null, ["ram:803b48:8"]]
~~~


<a id="compare-663cb6a21bd6b523638a6157b843b3a5"></a>

### [`00803dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00803/00803dd4.md) → [`00804d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00804/00804d38.md) FUN_00804d38

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 12件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 3件 [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 12件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007cc59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc59c.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 3件 [`00744610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744610.md) [`00803674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803674.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 81.48% / 新版 81.48%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00803ddc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "unmatched:00803de8",
      "DATA",
      [
        "storage",
        "0039bae0",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "00804d40",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "00804d4c",
      "DATA",
      [
        "storage",
        "0039bae0",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00803dd8 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00803ddc ["INT_ADD", "register:40f0:8", ["const:803ddc:8", "const:4:8"]]
- 00803ddc ["CALL", null, ["callee:008524fc:8"]]
- 00803de0 ["COPY", "register:4040:8", ["const:bae0:8"]]
~~~


<a id="compare-9a63325df2ab2b7d247582e1cff35520"></a>

### [`00803e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00803/00803e40.md) → [`00804da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00804/00804da4.md) FUN_00804da4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`00a9c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c760.md) · 呼出先 5件 [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`0080323c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00803/0080323c.md) [`008040cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00804/008040cc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 4件 [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`00a9d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9d/00a9d754.md) · 呼出先 5件 [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008041a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00804/008041a0.md) [`00805030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00805/00805030.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 85.89% / 新版 85.89%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00804fd0",
      "value": [
        "leaf",
        "ram:805030:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0080406c",
      "value": [
        "leaf",
        "ram:8040cc:8"
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
      "00804f98",
      "READ",
      [
        "storage",
        "00ca8130",
        null,
        "undefined8"
      ]
    ],
    [
      "00804f98",
      "READ",
      [
        "storage",
        "00ca8138",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00804048",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00804fc0"
      ]
    ]
  ],
  "added": [
    [
      "00804f98",
      "READ",
      [
        "storage",
        "00ca90f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00804f98",
      "READ",
      [
        "storage",
        "00ca90f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00804fac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00804fc0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080406c ["INT_ADD", "register:40f0:8", ["const:80406c:8", "const:4:8"]]
- 0080406c ["CALL", null, ["ram:8040cc:8"]]
+ 00804fd0 ["INT_ADD", "register:40f0:8", ["const:804fd0:8", "const:4:8"]]
+ 00804fd0 ["CALL", null, ["ram:805030:8"]]
- 00803e58 ["INT_ADD", "register:40f0:8", ["const:803e58:8", "const:4:8"]]
- 00803e58 ["CALL", null, ["callee:008524fc:8"]]
+ 00804dbc ["INT_ADD", "register:40f0:8", ["const:804dbc:8", "const:4:8"]]
+ 00804dbc ["CALL", null, ["callee:008524fc:8"]]
- 00803e74 ["INT_ADD", "register:40f0:8", ["const:803e74:8", "const:4:8"]]
- 00803e74 ["CALL", null, ["callee:00c594f0:8"]]
+ 00804dd8 ["INT_ADD", "register:40f0:8", ["const:804dd8:8", "const:4:8"]]
+ 00804dd8 ["CALL", null, ["callee:00c594f0:8"]]
~~~


<a id="compare-74509a8927ded8ceb33dd095d8ae3a37"></a>

### [`008043c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00804/008043c0.md) → [`00805324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00805/00805324.md) FUN_00805324

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) [`00a9c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c760.md) · 呼出先 3件 [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`008040cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00804/008040cc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) [`00a9d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9d/00a9d754.md) · 呼出先 3件 [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`00805030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00805/00805030.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008054ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080550c"
      ]
    ],
    [
      "00805480",
      "READ",
      [
        "storage",
        "00ca8118",
        null,
        "undefined8"
      ]
    ],
    [
      "00805480",
      "READ",
      [
        "storage",
        "00ca8120",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00805414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080550c"
      ]
    ],
    [
      "00805480",
      "READ",
      [
        "storage",
        "00ca90d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00805480",
      "READ",
      [
        "storage",
        "00ca90e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008043e8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:4", "const:0:4"]]
- 008043e8 ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
+ 0080534c ["INT_NOTEQUAL", "tmp:0:1", ["register:4098:4", "const:0:4"]]
+ 0080534c ["CBRANCH", null, ["local:b33:8", "tmp:0:1"]]
- 008043ec ["INT_ADD", "register:40f0:8", ["const:8043ec:8", "const:4:8"]]
- 008043ec ["CALL", null, ["callee:008524fc:8"]]
+ 00805350 ["INT_ADD", "register:40f0:8", ["const:805350:8", "const:4:8"]]
+ 00805350 ["CALL", null, ["callee:008524fc:8"]]
- 00804400 ["CBRANCH", null, ["local:b36:8", "register:101:1"]]
+ 00805364 ["CBRANCH", null, ["local:b33:8", "register:101:1"]]
~~~


<a id="compare-86e5cddfbcbd900b61cae0109b6107e7"></a>

### [`0080502c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/0080502c.md) → [`00805f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00805/00805f90.md) FUN_00805f90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007c79d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c79d0.md) [`00809a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00809/00809a30.md) · 呼出先 2件 [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`007c8934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8934.md) [`0080a994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080a/0080a994.md) · 呼出先 2件 [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.81% / 新版 90.81%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080512c",
      "DATA",
      [
        "storage",
        "002ec9a0",
        "switchD_00805134::switchdataD_002ec9a0",
        "byte"
      ]
    ],
    [
      "00806158",
      "DATA",
      [
        "storage",
        "00389870",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:0080520c",
      "DATA",
      [
        "storage",
        "00389874",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00806090",
      "DATA",
      [
        "storage",
        "002ec9e0",
        "switchD_00806098::switchdataD_002ec9e0",
        "byte"
      ]
    ],
    [
      "00806158",
      "DATA",
      [
        "storage",
        "00389870",
        "fde_00389870",
        "dword"
      ]
    ],
    [
      "00806170",
      "DATA",
      [
        "storage",
        "00389874",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00805044 ["INT_ADD", "register:40f0:8", ["const:805044:8", "const:4:8"]]
- 00805044 ["CALL", null, ["callee:00801334:8"]]
+ 00805fa8 ["INT_ADD", "register:40f0:8", ["const:805fa8:8", "const:4:8"]]
+ 00805fa8 ["CALL", null, ["callee:00801334:8"]]
- 00805094 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00805094 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00805094 ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
+ 00805ff8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00805ff8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00805ff8 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
- 00805098 ["INT_ADD", "register:40f0:8", ["const:805098:8", "const:4:8"]]
- 00805098 ["CALL", null, ["callee:008524fc:8"]]
+ 00805ffc ["INT_ADD", "register:40f0:8", ["const:805ffc:8", "const:4:8"]]
+ 00805ffc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-722b7370684daee1743ff83d66230c2e"></a>

### [`00805744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805744.md) → [`008066a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/008066a8.md) FUN_008066a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 40件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) [`0067678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/0067678c.md) [`00677a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/00677a80.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0080fb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fb24.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 39件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`0060ef40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060ef40.md) [`00676b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676b3c.md) [`00677e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00677/00677e30.md) · 呼出先 3件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00810a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810a88.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.59% / 新版 96.59%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008067d8",
      "incomplete_value": false,
      "site": "008067dc",
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
      "definition_site": "00805874",
      "incomplete_value": false,
      "site": "00805878",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00806800",
      "incomplete_value": false,
      "site": "00806804",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b3000:8"
          ],
          [
            "leaf",
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0080589c",
      "incomplete_value": false,
      "site": "008058a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b3000:8"
          ],
          [
            "leaf",
            "const:da5:8"
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
      "00806720",
      "DATA",
      [
        "storage",
        "0039b738",
        null,
        "byte[35]"
      ]
    ],
    [
      "unmatched:008057dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00806730"
      ]
    ],
    [
      "008067a8",
      "DATA",
      [
        "storage",
        "0039b750",
        null,
        "byte[35]"
      ]
    ]
  ],
  "added": [
    [
      "00806720",
      "DATA",
      [
        "storage",
        "0039b738",
        null,
        "qword"
      ]
    ],
    [
      "00806740",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00806730"
      ]
    ],
    [
      "008067a8",
      "DATA",
      [
        "storage",
        "0039b750",
        "fde_0039b750",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00805878 ["INT_ADD", "register:40f0:8", ["const:805878:8", "const:4:8"]]
- 00805878 ["CALL", null, ["callee:00442c90:8"]]
+ 008067dc ["INT_ADD", "register:40f0:8", ["const:8067dc:8", "const:4:8"]]
+ 008067dc ["CALL", null, ["callee:00442c90:8"]]
- 008058a0 ["INT_ADD", "register:40f0:8", ["const:8058a0:8", "const:4:8"]]
- 008058a0 ["CALL", null, ["callee:00442c90:8"]]
+ 00806804 ["INT_ADD", "register:40f0:8", ["const:806804:8", "const:4:8"]]
+ 00806804 ["CALL", null, ["callee:00442c90:8"]]
- 008057a8 ["INT_ADD", "register:40f0:8", ["const:8057a8:8", "const:4:8"]]
- 008057a8 ["CALL", null, ["callee:008524fc:8"]]
+ 0080670c ["INT_ADD", "register:40f0:8", ["const:80670c:8", "const:4:8"]]
+ 0080670c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-4eeb84d927df6b5f604c04d90ac88ebb"></a>

### [`00805c4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805c4c.md) → [`00806bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/00806bb0.md) FUN_00806bb0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0072c8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c8a4.md) [`0072f230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072f230.md) [`00731864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731864.md) [`00a87b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a87b40.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`0072cc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072cc54.md) [`0072f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072f5e0.md) [`00731c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731c14.md) [`00a88b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a88/00a88b34.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.00% / 新版 95.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00806bdc",
      "DATA",
      [
        "storage",
        "002eca23",
        "switchD_00805c84::switchdataD_002eca23",
        "byte"
      ]
    ],
    [
      "00806ca0",
      "DATA",
      [
        "storage",
        "0038b098",
        null,
        "byte[39]"
      ]
    ],
    [
      "00806ca0",
      "DATA",
      [
        "storage",
        "0038a8c8",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00806bdc",
      "DATA",
      [
        "storage",
        "002eca63",
        "switchD_00806be8::switchdataD_002eca63",
        "byte"
      ]
    ],
    [
      "00806ca0",
      "DATA",
      [
        "storage",
        "0038b098",
        null,
        "qword"
      ]
    ],
    [
      "00806ca0",
      "DATA",
      [
        "storage",
        "0038a8c8",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00805c64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00805c64 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00805c64 ["CBRANCH", null, ["local:b22:8", "tmp:1:1"]]
+ 00806bc8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00806bc8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00806bc8 ["CBRANCH", null, ["local:b26:8", "tmp:1:1"]]
- 00805c6c ["COPY", "tmp:0:8", ["const:a23:8"]]
- 00805c6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00805c6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00805c6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00806bd0 ["COPY", "tmp:0:8", ["const:a63:8"]]
+ 00806bd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00806bd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00806bd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00805c74 ["COPY", "register:4050:8", ["const:805c88:8"]]
~~~


<a id="compare-ef4d663fdd654e2b651f195c2e0365f6"></a>

### [`00805d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805d8c.md) → [`00806cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/00806cf0.md) FUN_00806cf0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`006df76c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006df76c.md) [`006dfc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006dfc84.md) [`0072c8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c8a4.md) [`0072f230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072f230.md) [`00731864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731864.md) · 呼出先 5件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0072c89c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c89c.md) [`0072c994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c994.md) [`00730d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730d7c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`006dfb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006df/006dfb1c.md) [`006e0034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e0/006e0034.md) [`0072cc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072cc54.md) [`0072f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072f5e0.md) [`00731c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731c14.md) · 呼出先 5件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`0072cc4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072cc4c.md) [`0072cd44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072cd44.md) [`0073112c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/0073112c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.68% / 新版 94.68%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00806d1c",
      "DATA",
      [
        "storage",
        "002eca42",
        "switchD_00805dc0::switchdataD_002eca42",
        "byte"
      ]
    ],
    [
      "unmatched:00805ea0",
      "DATA",
      [
        "storage",
        "0038c8d0",
        null,
        "byte[23]"
      ]
    ],
    [
      "unmatched:00805ea0",
      "DATA",
      [
        "storage",
        "0038b930",
        null,
        "byte[23]"
      ]
    ]
  ],
  "added": [
    [
      "00806d1c",
      "DATA",
      [
        "storage",
        "002eca82",
        "switchD_00806d24::switchdataD_002eca82",
        "byte"
      ]
    ],
    [
      "00806e04",
      "DATA",
      [
        "storage",
        "0038c8d0",
        null,
        "byte[23]"
      ]
    ],
    [
      "00806e04",
      "DATA",
      [
        "storage",
        "0038b930",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00805da4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00805da4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00805da4 ["CBRANCH", null, ["local:b31:8", "tmp:1:1"]]
+ 00806d08 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00806d08 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00806d08 ["CBRANCH", null, ["local:b25:8", "tmp:1:1"]]
- 00805dac ["COPY", "tmp:0:8", ["const:a42:8"]]
- 00805dac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00805dac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00805dac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00806d10 ["COPY", "tmp:0:8", ["const:a82:8"]]
+ 00806d10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00806d10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00806d10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00805db4 ["COPY", "register:4050:8", ["const:805dc4:8"]]
~~~


<a id="compare-85816c7a4020935476cb469f7691b4b3"></a>

### [`0080603c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080603c.md) → [`00806fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/00806fa0.md) FUN_00806fa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 16件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00677a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/00677a80.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbda0.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 16件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00677e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00677/00677e30.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`007bcd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcd04.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.26% / 新版 89.26%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00807028",
      "incomplete_value": true,
      "site": "00807030",
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
      "unmatched:0080603c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00806060",
      "DATA",
      [
        "storage",
        "002eca80",
        "switchD_00806068::switchdataD_002eca80",
        "byte"
      ]
    ],
    [
      "unmatched:008060d8",
      "DATA",
      [
        "storage",
        "00331540",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "00806fa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00806fc4",
      "DATA",
      [
        "storage",
        "002ecac0",
        "switchD_00806fcc::switchdataD_002ecac0",
        "byte"
      ]
    ],
    [
      "0080703c",
      "DATA",
      [
        "storage",
        "00331540",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080603c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0080603c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0080603c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0080603c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00806040 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0080604c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0080604c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 0080604c ["CBRANCH", null, ["local:b24:8", "tmp:1:1"]]
+ 00806fb0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00806fb0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00806fb0 ["CBRANCH", null, ["local:b17:8", "tmp:1:1"]]
~~~


<a id="compare-a69d461dffd7cbc6a99a5c0b83f472f8"></a>

### [`0080666c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080666c.md) → [`008075d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/008075d0.md) FUN_008075d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) [`008719e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008719e0.md) [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) [`009af8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af8e0.md) [`00a9c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c760.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00802070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802070.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`0085e4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085e/0085e4f8.md) [`0087298c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/0087298c.md) [`009adf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adf68.md) [`009b088c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b088c.md) [`00a9d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9d/00a9d754.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00727dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727dd8.md) [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md) [`00802fd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802fd4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008066dc",
      "incomplete_value": false,
      "site": "008066e4",
      "value": [
        "leaf",
        "const:1f60:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008076fc",
      "incomplete_value": false,
      "site": "00807704",
      "value": [
        "leaf",
        "const:1f60:8"
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
      "definition_site": "008067ac",
      "incomplete_value": true,
      "site": "008067b8",
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
            "const:20:8"
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
      "00807600",
      "DATA",
      [
        "storage",
        "0039b768",
        null,
        "byte[75]"
      ]
    ],
    [
      "unmatched:008066a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00807620"
      ]
    ],
    [
      "00807670",
      "DATA",
      [
        "storage",
        "0039b768",
        null,
        "byte[75]"
      ]
    ]
  ],
  "added": [
    [
      "00807600",
      "DATA",
      [
        "storage",
        "0039b768",
        null,
        "byte[23]"
      ]
    ],
    [
      "00807604",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00807620"
      ]
    ],
    [
      "00807670",
      "DATA",
      [
        "storage",
        "0039b768",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 008066e4 ["INT_ADD", "register:40f0:8", ["const:8066e4:8", "const:4:8"]]
- 008066e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00807648 ["INT_ADD", "register:40f0:8", ["const:807648:8", "const:4:8"]]
+ 00807648 ["CALL", null, ["callee:00c58f30:8"]]
- 008067a0 ["INT_ADD", "register:40f0:8", ["const:8067a0:8", "const:4:8"]]
- 008067a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00807704 ["INT_ADD", "register:40f0:8", ["const:807704:8", "const:4:8"]]
+ 00807704 ["CALL", null, ["callee:00c58f30:8"]]
- 008067b8 ["INT_ADD", "register:40f0:8", ["const:8067b8:8", "const:4:8"]]
- 008067b8 ["CALL", null, ["callee:00c59130:8"]]
+ 0080771c ["INT_ADD", "register:40f0:8", ["const:80771c:8", "const:4:8"]]
+ 0080771c ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-146b3d40074f1a81f25d5c60f80415bf"></a>

### [`00806b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806b4c.md) → [`00807ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807ab0.md) FUN_00807ab0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`0078e2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e2d8.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`00807100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807100.md) [`00a993b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a993b0.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`00745804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745804.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00805744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805744.md)
- 新版 呼出元 6件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`0078e6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e6b4.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`00808064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/00808064.md) [`00a9a3a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a3a4.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md) [`00745bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745bb4.md) [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md) [`008066a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/008066a8.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.07% / 新版 97.07%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00807ae0",
      "DATA",
      [
        "storage",
        "00349b98",
        null,
        "byte[51]"
      ]
    ],
    [
      "00807b40",
      "DATA",
      [
        "storage",
        "00347398",
        "fde_00347398",
        "dword"
      ]
    ],
    [
      "unmatched:00806c00",
      "DATA",
      [
        "storage",
        "002ecacd",
        "switchD_00806c08::switchdataD_002ecacd",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00807ae0",
      "DATA",
      [
        "storage",
        "00349b98",
        null,
        "byte[43]"
      ]
    ],
    [
      "00807b40",
      "DATA",
      [
        "storage",
        "00347398",
        null,
        "dword"
      ]
    ],
    [
      "00807b64",
      "DATA",
      [
        "storage",
        "002ecb0d",
        "switchD_00807b6c::switchdataD_002ecb0d",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00806b68 ["INT_ADD", "register:40f0:8", ["const:806b68:8", "const:4:8"]]
- 00806b68 ["CALL", null, ["callee:008011a8:8"]]
+ 00807acc ["INT_ADD", "register:40f0:8", ["const:807acc:8", "const:4:8"]]
+ 00807acc ["CALL", null, ["callee:008011a8:8"]]
- 00806b70 ["INT_ADD", "register:40f0:8", ["const:806b70:8", "const:4:8"]]
- 00806b70 ["CALL", null, ["callee:008524fc:8"]]
+ 00807ad4 ["INT_ADD", "register:40f0:8", ["const:807ad4:8", "const:4:8"]]
+ 00807ad4 ["CALL", null, ["callee:008524fc:8"]]
- 00806b88 ["BRANCH", null, ["local:b45:8"]]
+ 00807aec ["BRANCH", null, ["local:b47:8"]]
~~~


<a id="compare-9fcf6fed393ac3ab4a28f0835397b422"></a>

### [`00806e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806e80.md) → [`00807de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807de4.md) FUN_00807de4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00730c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730c14.md) [`00807100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807100.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 5件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00730fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00730/00730fc4.md) [`00808064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/00808064.md) [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00807e24",
      "DATA",
      [
        "storage",
        "00349b98",
        null,
        "byte[51]"
      ]
    ],
    [
      "00807e8c",
      "DATA",
      [
        "storage",
        "00349b98",
        null,
        "byte[51]"
      ]
    ],
    [
      "00807e90",
      "DATA",
      [
        "storage",
        "00349b90",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00807e24",
      "DATA",
      [
        "storage",
        "00349b98",
        null,
        "byte[43]"
      ]
    ],
    [
      "00807e8c",
      "DATA",
      [
        "storage",
        "00349b98",
        null,
        "byte[43]"
      ]
    ],
    [
      "00807e90",
      "DATA",
      [
        "storage",
        "00349b90",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00806eac ["INT_ADD", "register:40f0:8", ["const:806eac:8", "const:4:8"]]
- 00806eac ["CALL", null, ["callee:008524fc:8"]]
+ 00807e10 ["INT_ADD", "register:40f0:8", ["const:807e10:8", "const:4:8"]]
+ 00807e10 ["CALL", null, ["callee:008524fc:8"]]
- 00806ebc ["INT_ADD", "register:40f0:8", ["const:806ebc:8", "const:4:8"]]
- 00806ebc ["CALL", null, ["callee:008011a8:8"]]
+ 00807e20 ["INT_ADD", "register:40f0:8", ["const:807e20:8", "const:4:8"]]
+ 00807e20 ["CALL", null, ["callee:008011a8:8"]]
- 00806f10 ["INT_ADD", "register:40f0:8", ["const:806f10:8", "const:4:8"]]
- 00806f10 ["CALL", null, ["callee:00c58f30:8"]]
+ 00807e74 ["INT_ADD", "register:40f0:8", ["const:807e74:8", "const:4:8"]]
+ 00807e74 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-eedc6ac4ec99f9d326b4e22a3c9e79ac"></a>

### [`00807100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807100.md) → [`00808064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/00808064.md) FUN_00808064

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 2件 [`00806b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806b4c.md) [`00806e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806e80.md)
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 2件 [`00807ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807ab0.md) [`00807de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807de4.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0080712c ["INT_ADD", "register:40f0:8", ["const:80712c:8", "const:4:8"]]
- 0080712c ["CALL", null, ["callee:00807ab0:8"]]
+ 00808090 ["INT_ADD", "register:40f0:8", ["const:808090:8", "const:4:8"]]
+ 00808090 ["CALL", null, ["callee:00807ab0:8"]]
~~~


<a id="compare-bef1fa03e0de6bbf960dd4ab3dba14a2"></a>

### [`00807790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807790.md) → [`008086f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/008086f4.md) FUN_008086f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`0080715c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/0080715c.md) [`00807850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807850.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 2件 [`008080c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/008080c0.md) [`008087b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/008087b4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00808798",
      "value": [
        "leaf",
        "ram:8080c0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00807834",
      "value": [
        "leaf",
        "ram:80715c:8"
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
      "00808798",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0080715c"
      ]
    ]
  ],
  "added": [
    [
      "00808798",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008080c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00807834 ["INT_ADD", "register:40f0:8", ["const:807834:8", "const:4:8"]]
- 00807834 ["CALL", null, ["ram:80715c:8"]]
+ 00808798 ["INT_ADD", "register:40f0:8", ["const:808798:8", "const:4:8"]]
+ 00808798 ["CALL", null, ["ram:8080c0:8"]]
- 008077b8 ["INT_ADD", "register:40f0:8", ["const:8077b8:8", "const:4:8"]]
- 008077b8 ["CALL", null, ["callee:008087b4:8"]]
+ 0080871c ["INT_ADD", "register:40f0:8", ["const:80871c:8", "const:4:8"]]
+ 0080871c ["CALL", null, ["callee:008087b4:8"]]
- 008077d8 ["INT_ADD", "register:40f0:8", ["const:8077d8:8", "const:4:8"]]
- 008077d8 ["CALL", null, ["callee:008087b4:8"]]
+ 0080873c ["INT_ADD", "register:40f0:8", ["const:80873c:8", "const:4:8"]]
+ 0080873c ["CALL", null, ["callee:008087b4:8"]]
~~~


<a id="compare-c853315e8b14f61d6f8794116b8a2fb5"></a>

### [`00807850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807850.md) → [`008087b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/008087b4.md) FUN_008087b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 19件 [`0075e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075e5e0.md) [`00785a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785a14.md) [`00787570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787570.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`007bbc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbc84.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00805744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805744.md) [`0080715c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/0080715c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 19件 [`0075e990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075e990.md) [`00785df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785df0.md) [`0078794c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/0078794c.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) [`007bcbe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcbe8.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008066a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/008066a8.md) [`008080c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/008080c0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 44.58% / 新版 44.58%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00808b44",
      "value": [
        "leaf",
        "ram:8080c0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00807be0",
      "value": [
        "leaf",
        "ram:80715c:8"
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
      "unmatched:00807874",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008088ec"
      ]
    ],
    [
      "00808804",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008078d0"
      ]
    ],
    [
      "00808810",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008078d0"
      ]
    ]
  ],
  "added": [
    [
      "008087d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008088ec"
      ]
    ],
    [
      "00808804",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00808834"
      ]
    ],
    [
      "00808810",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00808834"
      ]
    ]
  ]
}
~~~


~~~diff
- 00807be0 ["INT_ADD", "register:40f0:8", ["const:807be0:8", "const:4:8"]]
- 00807be0 ["CALL", null, ["ram:80715c:8"]]
+ 00808b44 ["INT_ADD", "register:40f0:8", ["const:808b44:8", "const:4:8"]]
+ 00808b44 ["CALL", null, ["ram:8080c0:8"]]
- 0080786c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 0080786c ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 0080786c ["CBRANCH", null, ["local:b25:8", "tmp:1:1"]]
+ 008087d0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008087d0 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 008087d0 ["CBRANCH", null, ["local:b21:8", "tmp:1:1"]]
- 00807874 ["CBRANCH", null, ["local:b28:8", "register:101:1"]]
~~~


<a id="compare-28cc117739c7a904c732d4becf9cced4"></a>

### [`00807cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807cb0.md) → [`00808c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/00808c14.md) FUN_00808c14

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`006adf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf88.md) [`00820934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00820/00820934.md) [`00827970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00827/00827970.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`006185f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185f0.md) [`006ae338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ae/006ae338.md) [`008218e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00821/008218e0.md) [`0082891c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00828/0082891c.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00808cc8",
      "incomplete_value": false,
      "site": "00808ccc",
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
      "definition_site": "00807d64",
      "incomplete_value": false,
      "site": "00807d68",
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
      "00808c3c",
      "DATA",
      [
        "storage",
        "0039b780",
        null,
        "byte[75]"
      ]
    ],
    [
      "00808c94",
      "DATA",
      [
        "storage",
        "0039b780",
        null,
        "byte[75]"
      ]
    ],
    [
      "00808cc8",
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
      "00808c3c",
      "DATA",
      [
        "storage",
        "0039b780",
        null,
        "dword"
      ]
    ],
    [
      "00808c94",
      "DATA",
      [
        "storage",
        "0039b780",
        null,
        "dword"
      ]
    ],
    [
      "00808cc8",
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
- 00807d68 ["INT_ADD", "register:40f0:8", ["const:807d68:8", "const:4:8"]]
- 00807d68 ["CALL", null, ["callee:00442c90:8"]]
+ 00808ccc ["INT_ADD", "register:40f0:8", ["const:808ccc:8", "const:4:8"]]
+ 00808ccc ["CALL", null, ["callee:00442c90:8"]]
- 00807cc4 ["INT_ADD", "register:40f0:8", ["const:807cc4:8", "const:4:8"]]
- 00807cc4 ["CALL", null, ["callee:008011a8:8"]]
+ 00808c28 ["INT_ADD", "register:40f0:8", ["const:808c28:8", "const:4:8"]]
+ 00808c28 ["CALL", null, ["callee:008011a8:8"]]
- 00807ccc ["INT_ADD", "register:40f0:8", ["const:807ccc:8", "const:4:8"]]
- 00807ccc ["CALL", null, ["callee:008524fc:8"]]
+ 00808c30 ["INT_ADD", "register:40f0:8", ["const:808c30:8", "const:4:8"]]
+ 00808c30 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f0c91045f297e21b75f3ffeda61e124f"></a>

### [`00807e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807e04.md) → [`00808d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/00808d68.md) FUN_00808d68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 21件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 21件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 61.10% / 新版 61.10%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件, `unresolved_branch_alignment` 35件, `unresolved_call_alignment` 17件, `unresolved_store_alignment` 74件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00808f30",
      "incomplete_value": true,
      "site": "00808f50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7b9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00807fcc",
      "incomplete_value": true,
      "site": "00807fec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6ee:8"
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
      "definition_site": "00809870",
      "incomplete_value": true,
      "site": "00809874",
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
      "definition_site": "0080890c",
      "incomplete_value": true,
      "site": "00808910",
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
    "ordinal": 151,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0080986c",
      "incomplete_value": true,
      "site": "00809878",
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
      "definition_site": "00808908",
      "incomplete_value": true,
      "site": "00808914",
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
    "ordinal": 152,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00807e54",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00807e54",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00807e58",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0080c324"
      ]
    ]
  ],
  "added": [
    [
      "00808db8",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00808db8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "00808dbc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0080c324"
      ]
    ]
  ]
}
~~~


~~~diff
- 00807e3c ["INT_ADD", "register:40f0:8", ["const:807e3c:8", "const:4:8"]]
- 00807e3c ["CALL", null, ["callee:00488180:8"]]
+ 00808da0 ["INT_ADD", "register:40f0:8", ["const:808da0:8", "const:4:8"]]
+ 00808da0 ["CALL", null, ["callee:00488180:8"]]
- 00807e44 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00808da8 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00807e48 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00807e48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00807e48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00807e48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-47d7a1a44f8ee65e3d78aaac8ce9233d"></a>

### [`00809a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00809/00809a30.md) → [`0080a994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080a/0080a994.md) FUN_0080a994

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 20件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.23% / 新版 82.23%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 30件, `unresolved_call_alignment` 19件, `unresolved_store_alignment` 64件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080b740",
      "incomplete_value": false,
      "site": "0080b748",
      "value": [
        "leaf",
        "const:38:8"
      ]
    },
    "old": null,
    "ordinal": 86,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080b8dc",
      "incomplete_value": true,
      "site": "0080b8f8",
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
    "ordinal": 92,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080b8e0",
      "incomplete_value": true,
      "site": "0080b8f8",
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
    "ordinal": 92,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0080aae4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00809bbc"
      ]
    ],
    [
      "0080aaec",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00809b98"
      ]
    ],
    [
      "unmatched:00809b94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00809bbc"
      ]
    ]
  ],
  "added": [
    [
      "0080aae4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080ab20"
      ]
    ],
    [
      "0080aaec",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0080aafc"
      ]
    ],
    [
      "0080aaf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080ab20"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080a7e4 ["INT_ADD", "register:40f0:8", ["const:80a7e4:8", "const:4:8"]]
- 0080a7e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0080b748 ["INT_ADD", "register:40f0:8", ["const:80b748:8", "const:4:8"]]
+ 0080b748 ["CALL", null, ["callee:00c58f30:8"]]
- 0080a994 ["INT_ADD", "register:40f0:8", ["const:80a994:8", "const:4:8"]]
- 0080a994 ["CALL", null, ["callee:00597ad8:8"]]
+ 0080b8f8 ["INT_ADD", "register:40f0:8", ["const:80b8f8:8", "const:4:8"]]
+ 0080b8f8 ["CALL", null, ["callee:00597ad8:8"]]
- 0080acf0 ["INT_ADD", "register:40f0:8", ["const:80acf0:8", "const:4:8"]]
- 0080acf0 ["CALL", null, ["callee:00a39bc4:8"]]
+ 0080bc54 ["INT_ADD", "register:40f0:8", ["const:80bc54:8", "const:4:8"]]
+ 0080bc54 ["CALL", null, ["callee:00a39bc4:8"]]
~~~


<a id="compare-c947d5c87b0686a7d4774f86a58a5c2f"></a>

### [`0080b098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b098.md) → [`0080bffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080b/0080bffc.md) FUN_0080bffc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00937b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00937/00937b14.md) [`00938104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938104.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00938ac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00938/00938ac0.md) [`009390b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/009390b0.md) [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0080b0f4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 0080b0f4 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 0080c058 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 0080c058 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
- 0080b10c ["BRANCH", null, ["local:b14:8"]]
+ 0080c070 ["BRANCH", null, ["local:b15:8"]]
- 0080b114 ["BRANCH", null, ["local:b19:8"]]
+ 0080c078 ["BRANCH", null, ["local:b21:8"]]
~~~


<a id="compare-091282e574de5dee8fe3aa8dd0f9bd49"></a>

### [`0080b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b420.md) → [`0080c384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080c384.md) FUN_0080c384

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00808ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00808/00808ad4.md) [`00abc948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00abc/00abc948.md) [`00abd34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00abd/00abd34c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`00809a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00809/00809a38.md) [`00abd93c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00abd/00abd93c.md) [`00abe340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00abe/00abe340.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080c390",
      "incomplete_value": false,
      "site": "0080c394",
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
      "definition_site": "0080b42c",
      "incomplete_value": false,
      "site": "0080b430",
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
      "0080c390",
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
      "0080c390",
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
- 0080b430 ["INT_ADD", "register:40f0:8", ["const:80b430:8", "const:4:8"]]
- 0080b430 ["CALL", null, ["callee:00442c90:8"]]
+ 0080c394 ["INT_ADD", "register:40f0:8", ["const:80c394:8", "const:4:8"]]
+ 0080c394 ["CALL", null, ["callee:00442c90:8"]]
- 0080b428 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0080c38c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0080b42c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0080b42c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0080b42c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0080b42c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0080c390 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0080c390 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0080c390 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0080c390 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8e82683218be627d6c6277dfa11d3458"></a>

### [`0080b434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b434.md) → [`0080c398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080c398.md) _INIT_147

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`0080097c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/0080097c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`008018e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008018e0.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.65% / 新版 72.65%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0080c3d8",
      "incomplete_value": true,
      "site": "0080c3f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0080b474",
      "incomplete_value": true,
      "site": "0080b490",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0080c3fc",
      "incomplete_value": true,
      "site": "0080c418",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0080b498",
      "incomplete_value": true,
      "site": "0080b4b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0080c41c",
      "incomplete_value": true,
      "site": "0080c438",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0080b4b8",
      "incomplete_value": true,
      "site": "0080b4d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0080c3d8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0080c3fc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0080c41c",
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
      "0080c3d8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0080c3fc",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0080c41c",
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
- 0080b598 ["INT_ADD", "register:40f0:8", ["const:80b598:8", "const:4:8"]]
- 0080b598 ["CALL", null, ["callee:0043bb58:8"]]
+ 0080c4fc ["INT_ADD", "register:40f0:8", ["const:80c4fc:8", "const:4:8"]]
+ 0080c4fc ["CALL", null, ["callee:0043bb58:8"]]
- 0080b6d0 ["INT_ADD", "register:40f0:8", ["const:80b6d0:8", "const:4:8"]]
- 0080b6d0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0080c634 ["INT_ADD", "register:40f0:8", ["const:80c634:8", "const:4:8"]]
+ 0080c634 ["CALL", null, ["callee:00c58ed0:8"]]
- 0080b71c ["INT_ADD", "register:40f0:8", ["const:80b71c:8", "const:4:8"]]
- 0080b71c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0080c680 ["INT_ADD", "register:40f0:8", ["const:80c680:8", "const:4:8"]]
+ 0080c680 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-3a8f6fe348a81b54e49f90c896b03555"></a>

### [`0080b87c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b87c.md) → [`0080c7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080c7e0.md) FUN_0080c7e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 17件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`004882ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/004882ac.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 17件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004885cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004885cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment

命令の説明率　旧版 95.54% / 新版 95.54%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 4件, `unresolved_branch_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0080c82c",
      "incomplete_value": false,
      "site": "0080c830",
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
      "definition_site": "0080b8c8",
      "incomplete_value": false,
      "site": "0080b8cc",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0080cb38",
      "incomplete_value": true,
      "site": "0080cb3c",
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
      "definition_site": "0080bbd4",
      "incomplete_value": true,
      "site": "0080bbd8",
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
    "ordinal": 45,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0080cb34",
      "incomplete_value": true,
      "site": "0080cb40",
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
      "definition_site": "0080bbd0",
      "incomplete_value": true,
      "site": "0080bbdc",
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
    "ordinal": 46,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0080c830",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0080b8fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080c850"
      ]
    ],
    [
      "0080cb28",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0080c830",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0080c860",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080c850"
      ]
    ],
    [
      "0080cb28",
      "READ",
      [
        "storage",
        "00c9bc50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080b94c ["INT_ADD", "register:40f0:8", ["const:80b94c:8", "const:4:8"]]
- 0080b94c ["CALL", null, ["callee:00b1217c:8"]]
+ 0080c8b0 ["INT_ADD", "register:40f0:8", ["const:80c8b0:8", "const:4:8"]]
+ 0080c8b0 ["CALL", null, ["callee:00b1217c:8"]]
- 0080b8bc ["INT_ADD", "register:40f0:8", ["const:80b8bc:8", "const:4:8"]]
- 0080b8bc ["CALL", null, ["callee:00488180:8"]]
+ 0080c820 ["INT_ADD", "register:40f0:8", ["const:80c820:8", "const:4:8"]]
+ 0080c820 ["CALL", null, ["callee:00488180:8"]]
- 0080b8c4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0080c828 ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-ffc94d70d7395fe3043915bd01edd28d"></a>

### [`0080bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080bd30.md) → [`0080cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080cc94.md) FUN_0080cc94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 11件 [`0047b54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b54c.md) [`0080dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080dc8c.md) [`0080deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080deac.md) [`0080e2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e2f0.md) [`0080e304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e304.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 11件 [`0047b86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b86c.md) [`0080ebf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ebf0.md) [`0080ee10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ee10.md) [`0080f254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f254.md) [`0080f268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f268.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.42% / 新版 70.42%

優先判定に残った影響 `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 21件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0080d070",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0080c1b0"
      ]
    ],
    [
      "unmatched:0080c11c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0080c1c4"
      ]
    ],
    [
      "unmatched:0080c120",
      "READ",
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
      "0080d070",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d114"
      ]
    ],
    [
      "0080d080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d128"
      ]
    ],
    [
      "0080d084",
      "READ",
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
- 0080bda4 ["INT_ADD", "register:40f0:8", ["const:80bda4:8", "const:4:8"]]
- 0080bda4 ["CALL", null, ["callee:0080ebf0:8"]]
+ 0080cd08 ["INT_ADD", "register:40f0:8", ["const:80cd08:8", "const:4:8"]]
+ 0080cd08 ["CALL", null, ["callee:0080ebf0:8"]]
- 0080bde0 ["INT_ADD", "register:40f0:8", ["const:80bde0:8", "const:4:8"]]
- 0080bde0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0080cd44 ["INT_ADD", "register:40f0:8", ["const:80cd44:8", "const:4:8"]]
+ 0080cd44 ["CALL", null, ["callee:00c58f50:8"]]
- 0080be18 ["INT_ADD", "register:40f0:8", ["const:80be18:8", "const:4:8"]]
- 0080be18 ["CALL", null, ["callee:0080ebf0:8"]]
+ 0080cd7c ["INT_ADD", "register:40f0:8", ["const:80cd7c:8", "const:4:8"]]
+ 0080cd7c ["CALL", null, ["callee:0080ebf0:8"]]
~~~


<a id="compare-df31a138ab3e8c409a0771f7c37d51f7"></a>

### [`0080c4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080c/0080c4b0.md) → [`0080d414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080d/0080d414.md) FUN_0080d414

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00850830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00850/00850830.md) · 呼出先 1件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`008517dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00851/008517dc.md) · 呼出先 1件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080c504",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d514"
      ]
    ]
  ],
  "added": [
    [
      "0080d468",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d514"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080c4b8 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
+ 0080d41c ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
- 0080c4e8 ["BRANCH", null, ["local:b4:8"]]
+ 0080d44c ["BRANCH", null, ["local:b3:8"]]
- 0080c4f8 ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:3:8"]]
~~~


<a id="compare-2343fbf3fb5c27d0ba5d64c768ba919f"></a>

### [`0080c5c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080c/0080c5c8.md) → [`0080d52c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080d/0080d52c.md) FUN_0080d52c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 2件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.36% / 新版 96.36%

~~~diff
- 0080c608 ["INT_ADD", "register:40f0:8", ["const:80c608:8", "const:4:8"]]
- 0080c608 ["CALL", null, ["callee:00480ef0:8"]]
+ 0080d56c ["INT_ADD", "register:40f0:8", ["const:80d56c:8", "const:4:8"]]
+ 0080d56c ["CALL", null, ["callee:00480ef0:8"]]
- 0080c614 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 0080d578 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
- 0080c644 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 0080c644 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 0080c644 ["CBRANCH", null, ["local:b11:8", "tmp:1:1"]]
+ 0080d5a8 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 0080d5a8 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 0080d5a8 ["CBRANCH", null, ["local:b10:8", "tmp:1:1"]]
~~~


<a id="compare-98f354e2a42bdcb99fb3bc99b7e0303a"></a>

### [`0080c780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080c/0080c780.md) → [`0080d6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080d/0080d6e4.md) FUN_0080d6e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 2件 [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0080c7a4",
      "incomplete_value": true,
      "site": "0080c7ac",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "0080c7dc",
      "incomplete_value": true,
      "site": "0080c7e0",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:0080c7b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d814"
      ]
    ],
    [
      "unmatched:0080c7c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080c7c8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d740"
      ]
    ]
  ],
  "added": [
    [
      "0080d71c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d814"
      ]
    ],
    [
      "0080d728",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "0080d72c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0080d740"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080c7ac ["INT_ADD", "register:40f0:8", ["const:80c7ac:8", "const:4:8"]]
- 0080c7ac ["CALL", null, ["callee:004804d8:8"]]
+ 0080d710 ["INT_ADD", "register:40f0:8", ["const:80d710:8", "const:4:8"]]
+ 0080d710 ["CALL", null, ["callee:004804d8:8"]]
- 0080c7e0 ["INT_ADD", "register:40f0:8", ["const:80c7e0:8", "const:4:8"]]
- 0080c7e0 ["CALL", null, ["callee:00480478:8"]]
+ 0080d744 ["INT_ADD", "register:40f0:8", ["const:80d744:8", "const:4:8"]]
+ 0080d744 ["CALL", null, ["callee:00480478:8"]]
- 0080c7b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 0080c7b8 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-3f12e8a7355c32bfdabf16d1b874f437"></a>

### [`0080d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d560.md) → [`0080e4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e4c4.md) FUN_0080e4c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 11件 [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`0080e798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e798.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 11件 [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`0080f6fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f6fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.79% / 新版 88.79%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080e5b4",
      "incomplete_value": true,
      "site": "0080e5b8",
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
      "definition_site": "0080e5d4",
      "incomplete_value": true,
      "site": "0080e5e8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "0080e5c8",
      "incomplete_value": true,
      "site": "0080e5e8",
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
      "unmatched:0080d5c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080d5c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080e5f4"
      ]
    ],
    [
      "0080e5d8",
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
      "0080e528",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "0080e52c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080e5f4"
      ]
    ],
    [
      "0080e5d8",
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
- 0080d654 ["INT_ADD", "register:40f0:8", ["const:80d654:8", "const:4:8"]]
- 0080d654 ["CALL", null, ["callee:004804d8:8"]]
+ 0080e5b8 ["INT_ADD", "register:40f0:8", ["const:80e5b8:8", "const:4:8"]]
+ 0080e5b8 ["CALL", null, ["callee:004804d8:8"]]
- 0080d684 ["INT_ADD", "register:40f0:8", ["const:80d684:8", "const:4:8"]]
- 0080d684 ["CALL", null, ["callee:0080f740:8"]]
+ 0080e5e8 ["INT_ADD", "register:40f0:8", ["const:80e5e8:8", "const:4:8"]]
+ 0080e5e8 ["CALL", null, ["callee:0080f740:8"]]
- 0080d6b0 ["INT_ADD", "register:40f0:8", ["const:80d6b0:8", "const:4:8"]]
- 0080d6b0 ["CALL", null, ["callee:004804d8:8"]]
+ 0080e614 ["INT_ADD", "register:40f0:8", ["const:80e614:8", "const:4:8"]]
+ 0080e614 ["CALL", null, ["callee:004804d8:8"]]
~~~


<a id="compare-d1b9938e1e7e3b2586b5a068809bfcbd"></a>

### [`0080d8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d8b8.md) → [`0080e81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e81c.md) FUN_0080e81c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0080b87c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b87c.md) [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) [`00b1b884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1b/00b1b884.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00794bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794bc4.md) [`0080dab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080dab4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0080c7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080c7e0.md) [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) [`00b1c878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b1c/00b1c878.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00794fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00794/00794fa0.md) [`0080ea18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ea18.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.07% / 新版 94.07%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0080d90c"
      ],
      [
        "FALL_THROUGH",
        "0080e870"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0080e870",
      "incomplete_value": true,
      "site": "0080e880",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "0080d90c",
      "incomplete_value": true,
      "site": "0080d91c",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
      "unmatched:0080d90c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080e9c4"
      ]
    ]
  ],
  "added": [
    [
      "0080e870",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080e9c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080d8f4 ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:3:8"]]
- 0080d8f8 ["INT_MULT", "register:40b0:8", ["register:4040:8", "register:4058:8"]]
- 0080d8fc ["COPY", "tmp:0:8", ["const:0:8"]]
- 0080d8fc ["INT_OR", "register:4040:8", ["tmp:0:8", "const:aaaaaaaaaaaaaaaa:8"]]
~~~


<a id="compare-d7da9aea17e7fb03d89074017b92b6e9"></a>

### [`0080dab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080dab4.md) → [`0080ea18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ea18.md) FUN_0080ea18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0080d8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d8b8.md) [`00b2ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ac68.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0080e81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e81c.md) [`00b2bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bc5c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0080dae8 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 0080ea4c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 0080db30 ["INT_ADD", "register:40f0:8", ["const:80db30:8", "const:4:8"]]
- 0080db30 ["CALL", null, ["callee:00c58f50:8"]]
+ 0080ea94 ["INT_ADD", "register:40f0:8", ["const:80ea94:8", "const:4:8"]]
+ 0080ea94 ["CALL", null, ["callee:00c58f50:8"]]
- 0080db3c ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 0080eaa0 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
~~~


<a id="compare-0fe12147f32eac18081d74291f594e6e"></a>

### [`0080dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080dc8c.md) → [`0080ebf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ebf0.md) FUN_0080ebf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080bd30.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0080de98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080de98.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`0080cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080cc94.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0080edfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080edfc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 97.71% / 新版 97.71%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0080de30"
      ],
      [
        "FALL_THROUGH",
        "0080ed94"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0080ed94",
      "incomplete_value": true,
      "site": "0080ed98",
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
      "definition_site": "0080de30",
      "incomplete_value": true,
      "site": "0080de34",
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
                "register:40c0:8"
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
      "unmatched:0080dcc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080ecac"
      ]
    ],
    [
      "unmatched:0080de30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080ed84"
      ]
    ]
  ],
  "added": [
    [
      "0080ec2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080ecac"
      ]
    ],
    [
      "0080ed94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080ed84"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080dcc4 ["INT_LESSEQUAL", "register:105:1", ["register:4008:8", "register:4050:8"]]
- 0080dcc4 ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:4008:8"]]
- 0080dcc4 ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:4008:8"]]
- 0080dcc4 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0080dcc8 ["CBRANCH", null, ["local:b5:8", "register:102:1"]]
- 0080dcec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0080dcec ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 0080dcec ["CBRANCH", null, ["local:b25:8", "tmp:1:1"]]
+ 0080ec50 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0080ec50 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 0080ec50 ["CBRANCH", null, ["local:b22:8", "tmp:1:1"]]
~~~


<a id="compare-cc96dee108b4cda4c1292563c590c911"></a>

### [`0080de98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080de98.md) → [`0080edfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080edfc.md) FUN_0080edfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080dc8c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0080ebf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ebf0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080de98",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080dea4",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0080dea8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "0080edfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0080ee08",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "0080ee0c",
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
- 0080de98 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0080de98 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0080de98 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0080de98 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0080de9c ["COPY", "register:40e8:8", ["register:8:8"]]
- 0080dea0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-72ea4ee621061e85b55defad579d9567"></a>

### [`0080deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080deac.md) → [`0080ee10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ee10.md) FUN_0080ee10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080bd30.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0080e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e104.md) [`0080e2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e2dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0080cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080cc94.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0080f068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f068.md) [`0080f240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f240.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.82% / 新版 85.82%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0080e0c0",
      "incomplete_value": true,
      "site": "0080e0c4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0080df1c"
      ],
      [
        "FALL_THROUGH",
        "0080ee80"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0080ee80",
      "incomplete_value": true,
      "site": "0080ee9c",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "0080df1c",
      "incomplete_value": true,
      "site": "0080df38",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
      "unmatched:0080debc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080ded0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080df1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f014"
      ]
    ]
  ],
  "added": [
    [
      "0080ee20",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0080ee34",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0080ee80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f014"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080e0c4 ["INT_ADD", "register:40f0:8", ["const:80e0c4:8", "const:4:8"]]
- 0080e0c4 ["CALL", null, ["callee:0080f240:8"]]
+ 0080f028 ["INT_ADD", "register:40f0:8", ["const:80f028:8", "const:4:8"]]
+ 0080f028 ["CALL", null, ["callee:0080f240:8"]]
- 0080debc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0080debc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0080debc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 0080debc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0080dec0 ["COPY", "tmp:0:8", ["const:30:8"]]
- 0080dec0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 0080dec0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 0080dec0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-72ac4c477d918a88398bc64381635282"></a>

### [`0080e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e104.md) → [`0080f068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f068.md) FUN_0080f068

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0080deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080deac.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0080ee10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ee10.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0080e138 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 0080f09c ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
- 0080e174 ["BRANCH", null, ["local:b7:8"]]
+ 0080f0d8 ["BRANCH", null, ["local:b8:8"]]
- 0080e180 ["INT_ADD", "register:40f0:8", ["const:80e180:8", "const:4:8"]]
- 0080e180 ["CALL", null, ["callee:00c58f50:8"]]
+ 0080f0e4 ["INT_ADD", "register:40f0:8", ["const:80f0e4:8", "const:4:8"]]
+ 0080f0e4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-deb027ce79e5947a04711b62e3283332"></a>

### [`0080e220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e220.md) → [`0080f184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f184.md) FUN_0080f184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080e280",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f1b4"
      ]
    ]
  ],
  "added": [
    [
      "0080f1e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f1b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080e240 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 0080f1a4 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 0080e248 ["BRANCH", null, ["local:b5:8"]]
+ 0080f1ac ["BRANCH", null, ["local:b6:8"]]
- 0080e254 ["INT_ADD", "register:40f0:8", ["const:80e254:8", "const:4:8"]]
- 0080e254 ["CALL", null, ["callee:00c58f50:8"]]
+ 0080f1b8 ["INT_ADD", "register:40f0:8", ["const:80f1b8:8", "const:4:8"]]
+ 0080f1b8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-94c9a48e5a09c98c427203ace885c53c"></a>

### [`0080e2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e2dc.md) → [`0080f240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f240.md) FUN_0080f240

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080deac.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0080ee10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ee10.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080e2dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080e2e8",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0080e2ec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "0080f240",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0080f24c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "0080f250",
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
- 0080e2dc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0080e2dc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0080e2dc ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0080e2dc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0080e2e0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0080e2e4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-c54c20eacbd84ab7967d195feb10f8bc"></a>

### [`0080e2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e2f0.md) → [`0080f254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f254.md) FUN_0080f254

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0080bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080bd30.md) [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`0080cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080cc94.md) [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080f260",
      "incomplete_value": false,
      "site": "0080f264",
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
      "definition_site": "0080e2fc",
      "incomplete_value": false,
      "site": "0080e300",
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
      "0080f260",
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
      "0080f260",
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
- 0080e300 ["INT_ADD", "register:40f0:8", ["const:80e300:8", "const:4:8"]]
- 0080e300 ["CALL", null, ["callee:0043bad8:8"]]
+ 0080f264 ["INT_ADD", "register:40f0:8", ["const:80f264:8", "const:4:8"]]
+ 0080f264 ["CALL", null, ["callee:0043bad8:8"]]
- 0080e2f8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0080f25c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0080e2fc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0080e2fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0080e2fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0080e2fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0080f260 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0080f260 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0080f260 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0080f260 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-391b2e1f7b5b8fb059eb0b800382d8ca"></a>

### [`0080e304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e304.md) → [`0080f268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f268.md) FUN_0080f268

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0080bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080bd30.md) [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0080e430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e430.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`0080cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080cc94.md) [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0080f394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f394.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080f328",
      "incomplete_value": true,
      "site": "0080f330",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": "0080e3c4",
      "incomplete_value": true,
      "site": "0080e3cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:3:4"
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
    "new": {
      "definition_site": "0080f32c",
      "incomplete_value": true,
      "site": "0080f330",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": {
      "definition_site": "0080e3c8",
      "incomplete_value": true,
      "site": "0080e3cc",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "leaf",
            "const:3:8"
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
      "unmatched:0080e344",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f388"
      ]
    ]
  ],
  "added": [
    [
      "0080f2a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f388"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080e3cc ["INT_ADD", "register:40f0:8", ["const:80e3cc:8", "const:4:8"]]
- 0080e3cc ["CALL", null, ["callee:00c59130:8"]]
+ 0080f330 ["INT_ADD", "register:40f0:8", ["const:80f330:8", "const:4:8"]]
+ 0080f330 ["CALL", null, ["callee:00c59130:8"]]
- 0080e32c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 0080e32c ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 0080e32c ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
+ 0080f290 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 0080f290 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 0080f290 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
- 0080e344 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 0080e344 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-4b5fe73557d0fb6c6e29a0fb52b46c28"></a>

### [`0080e430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e430.md) → [`0080f394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f394.md) FUN_0080f394

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080e304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e304.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0080f268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f268.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080e430",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080e43c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0080e440",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "0080f394",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0080f3a0",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "0080f3a4",
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
- 0080e430 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0080e430 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0080e430 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0080e430 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0080e434 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0080e438 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-febe037e450f4e2500fb94dbc76db819"></a>

### [`0080e444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e444.md) → [`0080f3a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f3a8.md) FUN_0080f3a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080bd30.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0080e650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e650.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`0080cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080cc94.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0080f5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f5b4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.89% / 新版 93.89%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080e480",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f464"
      ]
    ]
  ],
  "added": [
    [
      "0080f3e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f464"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080e47c ["INT_LESSEQUAL", "register:105:1", ["register:4008:8", "register:4050:8"]]
- 0080e47c ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:4008:8"]]
- 0080e47c ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:4008:8"]]
- 0080e47c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0080e480 ["CBRANCH", null, ["local:b5:8", "register:102:1"]]
- 0080e4a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0080e4a4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 0080e4a4 ["CBRANCH", null, ["local:b20:8", "tmp:1:1"]]
+ 0080f408 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0080f408 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 0080f408 ["CBRANCH", null, ["local:b22:8", "tmp:1:1"]]
~~~


<a id="compare-1f8d0ea342d646899a354281edade0fd"></a>

### [`0080e650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e650.md) → [`0080f5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f5b4.md) FUN_0080f5b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0080e444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e444.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0080f3a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f3a8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080f5c0",
      "incomplete_value": false,
      "site": "0080f5c4",
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
      "definition_site": "0080e65c",
      "incomplete_value": false,
      "site": "0080e660",
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
      "0080f5c0",
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
      "0080f5c0",
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
- 0080e660 ["INT_ADD", "register:40f0:8", ["const:80e660:8", "const:4:8"]]
- 0080e660 ["CALL", null, ["callee:0043bad8:8"]]
+ 0080f5c4 ["INT_ADD", "register:40f0:8", ["const:80f5c4:8", "const:4:8"]]
+ 0080f5c4 ["CALL", null, ["callee:0043bad8:8"]]
- 0080e658 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0080f5bc ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0080e65c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0080e65c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0080e65c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0080e65c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0080f5c0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0080f5c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0080f5c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0080f5c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-66bcf7e6691786a53ea2638fcb41474f"></a>

### [`0080e664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e664.md) → [`0080f5c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f5c8.md) FUN_0080f5c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080bd30.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0080e784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e784.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0080cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080cc94.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0080f6e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f6e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.39% / 新版 76.39%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0080e6e8",
      "incomplete_value": true,
      "site": "0080e6f4",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080f654",
      "incomplete_value": true,
      "site": "0080f658",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "0080e6f0",
      "incomplete_value": true,
      "site": "0080e6f4",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "leaf",
            "const:1:8"
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
      "definition_site": "0080f67c",
      "incomplete_value": true,
      "site": "0080f684",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": "0080e718",
      "incomplete_value": true,
      "site": "0080e720",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:40b8:8"
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080e664",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080e668",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080e66c",
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
      "0080f5c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0080f5cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0080f5d0",
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
- 0080e6f4 ["INT_ADD", "register:40f0:8", ["const:80e6f4:8", "const:4:8"]]
- 0080e6f4 ["CALL", null, ["callee:00c59130:8"]]
+ 0080f658 ["INT_ADD", "register:40f0:8", ["const:80f658:8", "const:4:8"]]
+ 0080f658 ["CALL", null, ["callee:00c59130:8"]]
- 0080e720 ["INT_ADD", "register:40f0:8", ["const:80e720:8", "const:4:8"]]
- 0080e720 ["CALL", null, ["callee:00c59130:8"]]
+ 0080f684 ["INT_ADD", "register:40f0:8", ["const:80f684:8", "const:4:8"]]
+ 0080f684 ["CALL", null, ["callee:00c59130:8"]]
- 0080e664 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0080e664 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0080e664 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 0080e664 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-0d6f971da2d2f2704d41be8cab35b1be"></a>

### [`0080e784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e784.md) → [`0080f6e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f6e8.md) FUN_0080f6e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0080e664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e664.md) [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) [`00b0a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a890.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`0080f5c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f5c8.md) [`00b0a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a798.md) [`00b0b884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0b884.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080f6f4",
      "incomplete_value": false,
      "site": "0080f6f8",
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
      "definition_site": "0080e790",
      "incomplete_value": false,
      "site": "0080e794",
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
      "0080f6f4",
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
      "0080f6f4",
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
- 0080e794 ["INT_ADD", "register:40f0:8", ["const:80e794:8", "const:4:8"]]
- 0080e794 ["CALL", null, ["callee:0043bad8:8"]]
+ 0080f6f8 ["INT_ADD", "register:40f0:8", ["const:80f6f8:8", "const:4:8"]]
+ 0080f6f8 ["CALL", null, ["callee:0043bad8:8"]]
- 0080e78c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0080f6f0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0080e790 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0080e790 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0080e790 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0080e790 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0080f6f4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0080f6f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0080f6f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0080f6f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4aac827dcb0aafc2a99c621b5c1af898"></a>

### [`0080e798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e798.md) → [`0080f6fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f6fc.md) FUN_0080f6fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`0080c8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080c/0080c8d0.md) [`0080d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d560.md) [`0080e798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e798.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849cf0.md) · 呼出先 2件 [`0080e798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e798.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0080d834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080d/0080d834.md) [`0080e4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e4c4.md) [`0080f6fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f6fc.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084ac9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084ac9c.md) · 呼出先 2件 [`0080f6fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f6fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "0080e7bc",
      "incomplete_value": true,
      "site": "0080e7c4",
      "value": [
        "LOAD",
        "8",
        [
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
- 0080e7c4 ["INT_ADD", "register:40f0:8", ["const:80e7c4:8", "const:4:8"]]
- 0080e7c4 ["CALL", null, ["local:b0:8"]]
+ 0080f728 ["INT_ADD", "register:40f0:8", ["const:80f728:8", "const:4:8"]]
+ 0080f728 ["CALL", null, ["local:b0:8"]]
- 0080e798 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0080e798 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0080f6fc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0080f6fc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0080e7b8 ["INT_ADD", "register:40f0:8", ["const:80e7b8:8", "const:4:8"]]
- 0080e7b8 ["CALL", null, ["local:b0:8"]]
+ 0080f71c ["INT_ADD", "register:40f0:8", ["const:80f71c:8", "const:4:8"]]
+ 0080f71c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-bfac06dcb668d537a0d894abf78056bd"></a>

### [`0080e7dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e7dc.md) → [`0080f740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f740.md) FUN_0080f740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0080d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d560.md) [`00a66524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a66/00a66524.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0080e4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e4c4.md) [`00a67518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a67/00a67518.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0080e87c",
      "incomplete_value": false,
      "site": "0080e884",
      "value": [
        "leaf",
        "const:30:8"
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
      "unmatched:0080e800",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f7d4"
      ]
    ]
  ],
  "added": [
    [
      "0080f764",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080f7d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080e884 ["INT_ADD", "register:40f0:8", ["const:80e884:8", "const:4:8"]]
- 0080e884 ["CALL", null, ["callee:00c58f30:8"]]
+ 0080f7e8 ["INT_ADD", "register:40f0:8", ["const:80f7e8:8", "const:4:8"]]
+ 0080f7e8 ["CALL", null, ["callee:00c58f30:8"]]
- 0080e800 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 0080e800 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 0080e80c ["BRANCH", null, ["local:b3:8"]]
+ 0080f770 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-43aff1c6025d8ca673ddd6cad9924105"></a>

### [`0080e8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e8f8.md) → [`0080f85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f85c.md) FUN_0080f85c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0080d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d560.md) [`0080e8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e8f8.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849cf0.md) · 呼出先 2件 [`0080e8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e8f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0080e4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e4c4.md) [`0080f85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f85c.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084ac9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084ac9c.md) · 呼出先 2件 [`0080f85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f85c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080e8fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080e900",
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
      "0080f860",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0080f864",
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
- 0080e8f8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0080e8f8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0080f85c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0080f85c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0080e8fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0080e8fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0080e8fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0080e8fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0080e900 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0080e900 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0080e900 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0080e900 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ebe0abe92083c7010006cc1a9c9cd192"></a>

### [`0080e93c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e93c.md) → [`0080f8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f8a0.md) FUN_0080f8a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0080d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d560.md) [`00a6712c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a6712c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0080e4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e4c4.md) [`00a68120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68120.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080f940",
      "incomplete_value": false,
      "site": "0080f948",
      "value": [
        "leaf",
        "const:30:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 0080e9e4 ["INT_ADD", "register:40f0:8", ["const:80e9e4:8", "const:4:8"]]
- 0080e9e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0080f948 ["INT_ADD", "register:40f0:8", ["const:80f948:8", "const:4:8"]]
+ 0080f948 ["CALL", null, ["callee:00c58f30:8"]]
- 0080e9cc ["BRANCH", null, ["local:b18:8"]]
+ 0080f930 ["BRANCH", null, ["local:b17:8"]]
- 0080ea1c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0080ea1c ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 0080f980 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0080f980 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
~~~


<a id="compare-4b89fd7d7ba98ab64e4f34cabc00f76e"></a>

### [`0080ea58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ea58.md) → [`0080f9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f9bc.md) FUN_0080f9bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0080d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d560.md) [`0080ea58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ea58.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849cf0.md) · 呼出先 2件 [`0080ea58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ea58.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0080e4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e4c4.md) [`0080f9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f9bc.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084ac9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084ac9c.md) · 呼出先 2件 [`0080f9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080f9bc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "0080ea7c",
      "incomplete_value": true,
      "site": "0080ea84",
      "value": [
        "LOAD",
        "8",
        [
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
- 0080ea84 ["INT_ADD", "register:40f0:8", ["const:80ea84:8", "const:4:8"]]
- 0080ea84 ["CALL", null, ["local:b0:8"]]
+ 0080f9e8 ["INT_ADD", "register:40f0:8", ["const:80f9e8:8", "const:4:8"]]
+ 0080f9e8 ["CALL", null, ["local:b0:8"]]
- 0080ea58 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 0080ea58 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0080f9bc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 0080f9bc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0080ea78 ["INT_ADD", "register:40f0:8", ["const:80ea78:8", "const:4:8"]]
- 0080ea78 ["CALL", null, ["local:b0:8"]]
+ 0080f9dc ["INT_ADD", "register:40f0:8", ["const:80f9dc:8", "const:4:8"]]
+ 0080f9dc ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-8faa1f44ff578ba748e05a976ec0a707"></a>

### [`0080ea9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ea9c.md) → [`0080fa00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080fa00.md) FUN_0080fa00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0080d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d560.md) [`00a67750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67750.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0080e4c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080e4c4.md) [`00a68744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68744.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.37% / 新版 94.37%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0080eb7c"
      ],
      [
        "FALL_THROUGH",
        "0080fae0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0080fae0",
      "incomplete_value": true,
      "site": "0080fae4",
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
      "definition_site": "0080eb7c",
      "incomplete_value": true,
      "site": "0080eb80",
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
      "unmatched:0080eac0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080fa94"
      ]
    ],
    [
      "unmatched:0080eb7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080faec"
      ]
    ]
  ],
  "added": [
    [
      "0080fa24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080fa94"
      ]
    ],
    [
      "0080fae0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0080faec"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080eabc ["INT_ADD", "register:40b0:8", ["register:40b0:8", "const:8:8"]]
- 0080eabc ["LOAD", "register:4058:8", ["const:1b1:8", "register:40b0:8"]]
- 0080eac0 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 0080eac0 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 0080eacc ["BRANCH", null, ["local:b4:8"]]
+ 0080fa30 ["BRANCH", null, ["local:b3:8"]]
~~~


<a id="compare-9f5e5aec97258db38592af16ccbd689d"></a>

### [`0080ebb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ebb8.md) → [`0080fb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080fb1c.md) _INIT_148

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.92% / 新版 81.92%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0080fc68",
      "incomplete_value": true,
      "site": "0080fc7c",
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
      "definition_site": "0080fd3c",
      "incomplete_value": false,
      "site": "0080fd50",
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
      "definition_site": "0080edd8",
      "incomplete_value": false,
      "site": "0080edec",
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
      "definition_site": "0080fd44",
      "incomplete_value": false,
      "site": "0080fd50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca9000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0080ede0",
      "incomplete_value": false,
      "site": "0080edec",
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
            "const:148:8"
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
      "unmatched:0080ebe8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080ebf4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0080ec10",
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
      "0080fb4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0080fb58",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0080fb74",
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
- 0080ed18 ["INT_ADD", "register:40f0:8", ["const:80ed18:8", "const:4:8"]]
- 0080ed18 ["CALL", null, ["callee:0043bb58:8"]]
+ 0080fc7c ["INT_ADD", "register:40f0:8", ["const:80fc7c:8", "const:4:8"]]
+ 0080fc7c ["CALL", null, ["callee:0043bb58:8"]]
- 0080edec ["INT_ADD", "register:40f0:8", ["const:80edec:8", "const:4:8"]]
- 0080edec ["CALL", null, ["callee:00c58ed0:8"]]
+ 0080fd50 ["INT_ADD", "register:40f0:8", ["const:80fd50:8", "const:4:8"]]
+ 0080fd50 ["CALL", null, ["callee:00c58ed0:8"]]
- 0080ebe0 ["COPY", "register:4098:8", ["const:ca8000:8"]]
+ 0080fb44 ["COPY", "register:4098:8", ["const:ca9000:8"]]
~~~


<a id="compare-ecdd5a9279c118a8e5da97661cd1cdca"></a>

### [`0080ef48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ef48.md) → [`0080feac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080f/0080feac.md) FUN_0080feac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007c7c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7c18.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`007f1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1efc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007c8b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c8/007c8b7c.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`007f2e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.55% / 新版 91.55%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0080f0e0",
      "incomplete_value": true,
      "site": "0080f0f8",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0080f0e4",
      "incomplete_value": true,
      "site": "0080f0f8",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0080f0e8",
      "incomplete_value": true,
      "site": "0080f0f8",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:0080ef58",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080ef5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080ef60",
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
      "0080febc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0080fec0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0080fec4",
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
- 0080f0f8 ["INT_ADD", "register:40f0:8", ["const:80f0f8:8", "const:4:8"]]
- 0080f0f8 ["CALL", null, ["callee:00c590a0:8"]]
+ 0081005c ["INT_ADD", "register:40f0:8", ["const:81005c:8", "const:4:8"]]
+ 0081005c ["CALL", null, ["callee:00c590a0:8"]]
- 0080ef58 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 0080ef58 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 0080ef58 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 0080ef58 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0080ef5c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0080ef5c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0080ef5c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 0080ef5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-960b6e29b138bf007d1f0c5c7c4f0a5a"></a>

### [`0080f180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080f180.md) → [`008100e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/008100e4.md) FUN_008100e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`009d9598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d9/009d9598.md) · 呼出先 22件 [`00440bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440bbc.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047d5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d5f4.md) [`0047d6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d6f8.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`009da544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009da/009da544.md) · 呼出先 22件 [`00440edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440edc.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047d914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d914.md) [`0047da18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047da18.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.28% / 新版 79.28%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00810670",
      "incomplete_value": true,
      "site": "00810674",
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
      "definition_site": "0080f70c",
      "incomplete_value": true,
      "site": "0080f710",
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
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00810164",
      "incomplete_value": true,
      "site": "00810170",
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
            "const:50:8"
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
    "new": null,
    "old": {
      "definition_site": "0080f294",
      "incomplete_value": true,
      "site": "0080f29c",
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
            "const:68:8"
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
      "unmatched:0080f1b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080f1bc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "unmatched:0080f1d0",
      "READ",
      [
        "storage",
        "002a46f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0081011c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00810120",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "00810134",
      "READ",
      [
        "storage",
        "002a47c3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080f20c ["INT_ADD", "register:40f0:8", ["const:80f20c:8", "const:4:8"]]
- 0080f20c ["CALL", null, ["callee:00b1217c:8"]]
+ 00810170 ["INT_ADD", "register:40f0:8", ["const:810170:8", "const:4:8"]]
+ 00810170 ["CALL", null, ["callee:00b1217c:8"]]
- 0080f29c ["INT_ADD", "register:40f0:8", ["const:80f29c:8", "const:4:8"]]
- 0080f29c ["CALL", null, ["callee:00487c9c:8"]]
+ 00810200 ["INT_ADD", "register:40f0:8", ["const:810200:8", "const:4:8"]]
+ 00810200 ["CALL", null, ["callee:00487c9c:8"]]
- 0080f2ec ["INT_ADD", "register:40f0:8", ["const:80f2ec:8", "const:4:8"]]
- 0080f2ec ["CALL", null, ["callee:00487c9c:8"]]
+ 00810250 ["INT_ADD", "register:40f0:8", ["const:810250:8", "const:4:8"]]
+ 00810250 ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-15364798a29d074682df9158842c1230"></a>

### [`0080f8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080f8f8.md) → [`0081085c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/0081085c.md) FUN_0081085c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 9件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 9件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md) [`00b1217c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b1217c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.04% / 新版 76.04%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0081095c",
      "incomplete_value": true,
      "site": "00810960",
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
      "definition_site": "0080f9f8",
      "incomplete_value": true,
      "site": "0080f9fc",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008108b8",
      "incomplete_value": true,
      "site": "008108c4",
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
      "definition_site": "00810914",
      "incomplete_value": true,
      "site": "00810918",
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
      "unmatched:0080f920",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080f924",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "unmatched:0080f938",
      "READ",
      [
        "storage",
        "002a46f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00810884",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00810888",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "0081089c",
      "READ",
      [
        "storage",
        "002a47c3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080f960 ["INT_ADD", "register:40f0:8", ["const:80f960:8", "const:4:8"]]
- 0080f960 ["CALL", null, ["callee:00448254:8"]]
+ 008108c4 ["INT_ADD", "register:40f0:8", ["const:8108c4:8", "const:4:8"]]
+ 008108c4 ["CALL", null, ["callee:00448254:8"]]
- 0080f9b4 ["INT_ADD", "register:40f0:8", ["const:80f9b4:8", "const:4:8"]]
- 0080f9b4 ["CALL", null, ["callee:004889b8:8"]]
+ 00810918 ["INT_ADD", "register:40f0:8", ["const:810918:8", "const:4:8"]]
+ 00810918 ["CALL", null, ["callee:004889b8:8"]]
- 0080f920 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0080f920 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0080f920 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-ae4ec49f85fc3ad8ca5aa9a93294681a"></a>

### [`0080fb6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fb6c.md) → [`00810ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810ad0.md) FUN_00810ad0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`008108a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108a4.md) [`008108b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108b8.md)
- 新版 呼出元 3件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 2件 [`00811808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811808.md) [`0081181c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/0081181c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080fbb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00810b28"
      ]
    ]
  ],
  "added": [
    [
      "00810b14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00810b28"
      ]
    ]
  ]
}
~~~


~~~diff
- 0080fb94 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 0080fb94 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 0080fb94 ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
+ 00810af8 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00810af8 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 00810af8 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
- 0080fbb0 ["CBRANCH", null, ["local:b5:8", "register:102:1"]]
- 0080fbc0 ["INT_ADD", "register:40f0:8", ["const:80fbc0:8", "const:4:8"]]
- 0080fbc0 ["CALL", null, ["callee:00811808:8"]]
+ 00810b24 ["INT_ADD", "register:40f0:8", ["const:810b24:8", "const:4:8"]]
+ 00810b24 ["CALL", null, ["callee:00811808:8"]]
~~~


<a id="compare-ca9988c6c96f3937e533e93511d6684e"></a>

### [`0080fc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fc60.md) → [`00810bc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810bc4.md) FUN_00810bc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.32% / 新版 80.32%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 12件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 22件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00811338",
      "incomplete_value": true,
      "site": "0081133c",
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
      "definition_site": "008103d4",
      "incomplete_value": true,
      "site": "008103d8",
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00811334",
      "incomplete_value": true,
      "site": "00811340",
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
      "definition_site": "008103d0",
      "incomplete_value": true,
      "site": "008103dc",
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
    "ordinal": 101,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0081134c",
      "incomplete_value": true,
      "site": "0081134c",
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
      "definition_site": "008103e8",
      "incomplete_value": true,
      "site": "008103e8",
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
    "ordinal": 102,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0080fc60",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080fc64",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0080fc68",
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
      "00810bc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00810bc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00810bcc",
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
- 0080fc9c ["INT_ADD", "register:40f0:8", ["const:80fc9c:8", "const:4:8"]]
- 0080fc9c ["CALL", null, ["callee:00488180:8"]]
+ 00810c00 ["INT_ADD", "register:40f0:8", ["const:810c00:8", "const:4:8"]]
+ 00810c00 ["CALL", null, ["callee:00488180:8"]]
- 0080fd70 ["INT_ADD", "register:40f0:8", ["const:80fd70:8", "const:4:8"]]
- 0080fd70 ["CALL", null, ["callee:00487c9c:8"]]
+ 00810cd4 ["INT_ADD", "register:40f0:8", ["const:810cd4:8", "const:4:8"]]
+ 00810cd4 ["CALL", null, ["callee:00487c9c:8"]]
- 0080fdf8 ["INT_ADD", "register:40f0:8", ["const:80fdf8:8", "const:4:8"]]
- 0080fdf8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00810d5c ["INT_ADD", "register:40f0:8", ["const:810d5c:8", "const:4:8"]]
+ 00810d5c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-864d36de6394855fa996dfd00c37d2d5"></a>

### [`008105a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008105a8.md) → [`0081150c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/0081150c.md) FUN_0081150c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080f180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080f180.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`007f1f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f10.md) [`00810820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810820.md) [`00810890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810890.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`008100e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/008100e4.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`007f2e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e74.md) [`00811784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811784.md) [`008117f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/008117f4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.94% / 新版 94.94%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 3件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0081173c",
      "incomplete_value": true,
      "site": "00811740",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00811750",
      "incomplete_value": true,
      "site": "00811758",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00810600"
      ],
      [
        "FALL_THROUGH",
        "00811564"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00811564",
      "incomplete_value": true,
      "site": "0081157c",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4040:8"
              ],
              "INT_ADD"
            ]
          ],
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
    "old": {
      "definition_site": "00810600",
      "incomplete_value": true,
      "site": "00810618",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
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
      "unmatched:00810600",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811700"
      ]
    ],
    [
      "unmatched:00810774",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811780"
      ]
    ],
    [
      "unmatched:008107c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811780"
      ]
    ]
  ],
  "added": [
    [
      "00811564",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811700"
      ]
    ],
    [
      "008116d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811780"
      ]
    ],
    [
      "00811724",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811780"
      ]
    ]
  ]
}
~~~


~~~diff
- 008107dc ["INT_ADD", "register:40f0:8", ["const:8107dc:8", "const:4:8"]]
- 008107dc ["CALL", null, ["callee:007f2e74:8"]]
+ 00811740 ["INT_ADD", "register:40f0:8", ["const:811740:8", "const:4:8"]]
+ 00811740 ["CALL", null, ["callee:007f2e74:8"]]
- 008107f4 ["INT_ADD", "register:40f0:8", ["const:8107f4:8", "const:4:8"]]
- 008107f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00811758 ["INT_ADD", "register:40f0:8", ["const:811758:8", "const:4:8"]]
+ 00811758 ["CALL", null, ["callee:00c58f50:8"]]
- 008105f0 ["INT_SRIGHT", "register:4070:8", ["register:4078:8", "const:3:8"]]
~~~


<a id="compare-d85e79e5527ee0cbe5b5a91d50831a43"></a>

### [`00810890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810890.md) → [`008117f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/008117f4.md) FUN_008117f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008105a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008105a8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0081150c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/0081150c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00811800",
      "incomplete_value": false,
      "site": "00811804",
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
      "definition_site": "0081089c",
      "incomplete_value": false,
      "site": "008108a0",
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
      "00811800",
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
      "00811800",
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
- 008108a0 ["INT_ADD", "register:40f0:8", ["const:8108a0:8", "const:4:8"]]
- 008108a0 ["CALL", null, ["callee:0043bad8:8"]]
+ 00811804 ["INT_ADD", "register:40f0:8", ["const:811804:8", "const:4:8"]]
+ 00811804 ["CALL", null, ["callee:0043bad8:8"]]
- 00810898 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 008117fc ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0081089c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0081089c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0081089c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0081089c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00811800 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00811800 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00811800 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00811800 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-107aee64c28e6d4f7d6194e48a8d8c1d"></a>

### [`008108a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108a4.md) → [`00811808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811808.md) FUN_00811808

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0080fb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fb24.md) [`0080fb6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fb6c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 2件 [`00810a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810a88.md) [`00810ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810ad0.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00811814",
      "incomplete_value": false,
      "site": "00811818",
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
      "definition_site": "008108b0",
      "incomplete_value": false,
      "site": "008108b4",
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
      "00811814",
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
      "00811814",
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
- 008108b4 ["INT_ADD", "register:40f0:8", ["const:8108b4:8", "const:4:8"]]
- 008108b4 ["CALL", null, ["callee:00442c90:8"]]
+ 00811818 ["INT_ADD", "register:40f0:8", ["const:811818:8", "const:4:8"]]
+ 00811818 ["CALL", null, ["callee:00442c90:8"]]
- 008108ac ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00811810 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008108b0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008108b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008108b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008108b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00811814 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00811814 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00811814 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00811814 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cec906c65b3efa1125c77067f8f61737"></a>

### [`008108b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108b8.md) → [`0081181c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/0081181c.md) FUN_0081181c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0080fb6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fb6c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`00810ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810ad0.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00811828",
      "incomplete_value": false,
      "site": "0081182c",
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
      "definition_site": "008108c4",
      "incomplete_value": false,
      "site": "008108c8",
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
      "00811828",
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
      "00811828",
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
- 008108c8 ["INT_ADD", "register:40f0:8", ["const:8108c8:8", "const:4:8"]]
- 008108c8 ["CALL", null, ["callee:00442c90:8"]]
+ 0081182c ["INT_ADD", "register:40f0:8", ["const:81182c:8", "const:4:8"]]
+ 0081182c ["CALL", null, ["callee:00442c90:8"]]
- 008108c0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00811824 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008108c4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008108c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008108c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008108c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00811828 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00811828 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00811828 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00811828 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4340490387466d1a31b824fd56d2766c"></a>

### [`008108cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108cc.md) → [`00811830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811830.md) FUN_00811830

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0080fbd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fbd8.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`00810b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810b3c.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0081183c",
      "incomplete_value": false,
      "site": "00811840",
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
      "definition_site": "008108d8",
      "incomplete_value": false,
      "site": "008108dc",
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
      "0081183c",
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
      "0081183c",
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
- 008108dc ["INT_ADD", "register:40f0:8", ["const:8108dc:8", "const:4:8"]]
- 008108dc ["CALL", null, ["callee:00442c90:8"]]
+ 00811840 ["INT_ADD", "register:40f0:8", ["const:811840:8", "const:4:8"]]
+ 00811840 ["CALL", null, ["callee:00442c90:8"]]
- 008108d4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00811838 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 008108d8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 008108d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008108d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008108d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0081183c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0081183c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0081183c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0081183c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-898a947793a3710916b66223c1eeaabb"></a>

### [`008108e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/008108e0.md) → [`00811844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811844.md) FUN_00811844

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080fc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fc04.md) · 呼出先 5件 [`007f1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1efc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00810b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810b68.md) · 呼出先 5件 [`007f2e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0081187c",
      "incomplete_value": true,
      "site": "00811888",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "008118cc",
      "incomplete_value": true,
      "site": "008118d0",
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
            "const:4:8"
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
      "unmatched:0081090c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811900"
      ]
    ],
    [
      "unmatched:00810960",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0081196c"
      ]
    ]
  ],
  "added": [
    [
      "00811870",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811900"
      ]
    ],
    [
      "008118c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0081196c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00810924 ["INT_ADD", "register:40f0:8", ["const:810924:8", "const:4:8"]]
- 00810924 ["CALL", null, ["callee:00c58f50:8"]]
+ 00811888 ["INT_ADD", "register:40f0:8", ["const:811888:8", "const:4:8"]]
+ 00811888 ["CALL", null, ["callee:00c58f50:8"]]
- 0081096c ["INT_ADD", "register:40f0:8", ["const:81096c:8", "const:4:8"]]
- 0081096c ["CALL", null, ["callee:00c58f30:8"]]
+ 008118d0 ["INT_ADD", "register:40f0:8", ["const:8118d0:8", "const:4:8"]]
+ 008118d0 ["CALL", null, ["callee:00c58f30:8"]]
- 0081090c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 0081090c ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 0081090c ["CBRANCH", null, ["local:b11:8", "tmp:1:1"]]
~~~


<a id="compare-828265a526aa360cc5d5a3716ccba962"></a>

### [`00810a10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810a10.md) → [`00811974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811974.md) FUN_00811974

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080fc24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fc24.md) · 呼出先 5件 [`007f1f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f10.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00810b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810b88.md) · 呼出先 5件 [`007f2e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e74.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `unresolved_branch_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00810a3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811a30"
      ]
    ],
    [
      "unmatched:00810a90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811a9c"
      ]
    ]
  ],
  "added": [
    [
      "008119a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811a30"
      ]
    ],
    [
      "008119f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811a9c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00810a34 ["INT_SUB", "register:4048:8", ["register:4040:8", "register:40a8:8"]]
- 00810a38 ["INT_SRIGHT", "tmp:0:8", ["register:4048:8", "const:3:4"]]
- 00810a38 ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4018:8"]]
- 00810a38 ["INT_SBORROW", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00810a38 ["INT_SUB", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
- 00810a3c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00810a3c ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00810a3c ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
~~~


<a id="compare-a365cb95f2da6804056d7382c31181db"></a>

### [`00810b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810b40.md) → [`00811aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811aa4.md) FUN_00811aa4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0080fc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fc60.md) [`00810b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810b40.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008483e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008483e8.md) · 呼出先 2件 [`00810b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810b40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00810bc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810bc4.md) [`00811aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811aa4.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849394.md) · 呼出先 2件 [`00811aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811aa4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00810b40 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00810b40 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00811aa4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00811aa4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00810b60 ["INT_ADD", "register:40f0:8", ["const:810b60:8", "const:4:8"]]
- 00810b60 ["CALL", null, ["local:b0:8"]]
+ 00811ac4 ["INT_ADD", "register:40f0:8", ["const:811ac4:8", "const:4:8"]]
+ 00811ac4 ["CALL", null, ["local:b0:8"]]
- 00810b6c ["INT_ADD", "register:40f0:8", ["const:810b6c:8", "const:4:8"]]
- 00810b6c ["CALL", null, ["local:b0:8"]]
+ 00811ad0 ["INT_ADD", "register:40f0:8", ["const:811ad0:8", "const:4:8"]]
+ 00811ad0 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-95314af33a8bc08e93bf509f8b359b39"></a>

### [`00810bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810bd4.md) → [`00811b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811b38.md) FUN_00811b38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0080fc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fc60.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00810d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810d7c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00810bc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00810/00810bc4.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00811ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811ce0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment

命令の説明率　旧版 88.68% / 新版 88.68%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00811cb0",
      "incomplete_value": true,
      "site": "00811cb4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00811cb8",
      "incomplete_value": true,
      "site": "00811cd0",
      "value": [
        "live",
        "register:40a8:8"
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
        "FALL_THROUGH",
        "00810d2c"
      ],
      [
        "FALL_THROUGH",
        "00811c90"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00811c90",
      "incomplete_value": true,
      "site": "00811c94",
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
      "definition_site": "00810d2c",
      "incomplete_value": true,
      "site": "00810d30",
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
                "register:40c8:8"
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
      "unmatched:00810c18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811cd4"
      ]
    ],
    [
      "unmatched:00810d14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811c40"
      ]
    ],
    [
      "unmatched:00810d2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811c80"
      ]
    ]
  ],
  "added": [
    [
      "00811b7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811cd4"
      ]
    ],
    [
      "00811c78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811c40"
      ]
    ],
    [
      "00811c90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00811c80"
      ]
    ]
  ]
}
~~~


~~~diff
- 00810d50 ["INT_ADD", "register:40f0:8", ["const:810d50:8", "const:4:8"]]
- 00810d50 ["CALL", null, ["callee:00c58f50:8"]]
+ 00811cb4 ["INT_ADD", "register:40f0:8", ["const:811cb4:8", "const:4:8"]]
+ 00811cb4 ["CALL", null, ["callee:00c58f50:8"]]
- 00810bf4 ["INT_AND", "register:4058:8", ["register:4058:8", "const:ffffffffffff0000:8"]]
- 00810bf4 ["INT_OR", "register:4058:8", ["register:4058:8", "const:cccd:8"]]
- 00810bf8 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-efe2cff87412c48adaebe510d779c3c1"></a>

### [`00810d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810d7c.md) → [`00811ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811ce0.md) FUN_00811ce0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00810bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810bd4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00811b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811b38.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00811cec",
      "incomplete_value": false,
      "site": "00811cf0",
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
      "definition_site": "00810d88",
      "incomplete_value": false,
      "site": "00810d8c",
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
      "00811cec",
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
      "00811cec",
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
- 00810d8c ["INT_ADD", "register:40f0:8", ["const:810d8c:8", "const:4:8"]]
- 00810d8c ["CALL", null, ["callee:0043bad8:8"]]
+ 00811cf0 ["INT_ADD", "register:40f0:8", ["const:811cf0:8", "const:4:8"]]
+ 00811cf0 ["CALL", null, ["callee:0043bad8:8"]]
- 00810d84 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00811ce8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00810d88 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00810d88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00810d88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00810d88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00811cec ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00811cec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00811cec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00811cec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ee2065b42b6d6db7ee891abb0a852e45"></a>

### [`00810d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810d90.md) → [`00811cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811cf4.md) _INIT_149

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.59% / 新版 48.59%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 39件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00811e50",
      "incomplete_value": true,
      "site": "00811e54",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "00810eec",
      "incomplete_value": false,
      "site": "00810ef0",
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
      "definition_site": "00811e40",
      "incomplete_value": true,
      "site": "00811e54",
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
    "old": {
      "definition_site": "00810edc",
      "incomplete_value": false,
      "site": "00810ef0",
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
                "const:ca8000:8"
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
    "new": {
      "definition_site": "00811e48",
      "incomplete_value": true,
      "site": "00811e54",
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
    "old": {
      "definition_site": "00810ee4",
      "incomplete_value": true,
      "site": "00810ef0",
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
      "unmatched:00810dc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00810dcc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00810dd4",
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
      "00811d24",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00811d30",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00811d38",
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
- 00810ef0 ["INT_ADD", "register:40f0:8", ["const:810ef0:8", "const:4:8"]]
- 00810ef0 ["CALL", null, ["callee:0043bb58:8"]]
+ 00811e54 ["INT_ADD", "register:40f0:8", ["const:811e54:8", "const:4:8"]]
+ 00811e54 ["CALL", null, ["callee:0043bb58:8"]]
- 00811020 ["INT_ADD", "register:40f0:8", ["const:811020:8", "const:4:8"]]
- 00811020 ["CALL", null, ["callee:00c58f50:8"]]
+ 00811f84 ["INT_ADD", "register:40f0:8", ["const:811f84:8", "const:4:8"]]
+ 00811f84 ["CALL", null, ["callee:00c58f50:8"]]
- 00810dac ["COPY", "tmp:0:8", ["const:8:8"]]
- 00810dac ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00810dac ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00810dac ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-5c9d0ef7e6f46b8782f32f72d5a05076"></a>

### [`00811e3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/00811e3c.md) → [`00812da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/00812da0.md) _INIT_150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.18% / 新版 84.18%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00812eec",
      "incomplete_value": true,
      "site": "00812f00",
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
      "definition_site": "00812ef4",
      "incomplete_value": true,
      "site": "00812f00",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00812f04",
      "incomplete_value": true,
      "site": "00812f14",
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
      "unmatched:00811e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00811e78",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00811e94",
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
      "00812dd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00812ddc",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00812df8",
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
- 00811f9c ["INT_ADD", "register:40f0:8", ["const:811f9c:8", "const:4:8"]]
- 00811f9c ["CALL", null, ["callee:0043bb58:8"]]
+ 00812f00 ["INT_ADD", "register:40f0:8", ["const:812f00:8", "const:4:8"]]
+ 00812f00 ["CALL", null, ["callee:0043bb58:8"]]
- 00811fb0 ["INT_ADD", "register:40f0:8", ["const:811fb0:8", "const:4:8"]]
- 00811fb0 ["CALL", null, ["callee:0043bb58:8"]]
+ 00812f14 ["INT_ADD", "register:40f0:8", ["const:812f14:8", "const:4:8"]]
+ 00812f14 ["CALL", null, ["callee:0043bb58:8"]]
- 00812014 ["INT_ADD", "register:40f0:8", ["const:812014:8", "const:4:8"]]
- 00812014 ["CALL", null, ["callee:0043bb58:8"]]
+ 00812f78 ["INT_ADD", "register:40f0:8", ["const:812f78:8", "const:4:8"]]
+ 00812f78 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-88ad1e9b8e4ed8534f9203e63a0a0087"></a>

### [`008121cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00812/008121cc.md) → [`00813130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00813/00813130.md) FUN_00813130

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 29件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md)
- 新版 呼出元 1件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 29件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`0046ac48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ac48.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 74.23% / 新版 74.23%

優先判定に残った影響 `call_argument_candidate` 13件, `store_condition` 7件, `unresolved_branch_alignment` 37件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 44件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00812394",
      "incomplete_value": true,
      "site": "0081239c",
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
              [
                "live",
                "register:4040:8"
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
      "definition_site": "0081339c",
      "incomplete_value": false,
      "site": "008133a4",
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
      "definition_site": "00812438",
      "incomplete_value": false,
      "site": "00812440",
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
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00812490",
      "incomplete_value": false,
      "site": "00812494",
      "value": [
        "leaf",
        "const:38:8"
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
      "unmatched:008121d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:008121d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:008121d8",
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
      "00813134",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "00813138",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "0081313c",
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
- 0081239c ["INT_ADD", "register:40f0:8", ["const:81239c:8", "const:4:8"]]
- 0081239c ["CALL", null, ["callee:0071d53c:8"]]
+ 00813300 ["INT_ADD", "register:40f0:8", ["const:813300:8", "const:4:8"]]
+ 00813300 ["CALL", null, ["callee:0071d53c:8"]]
- 00812440 ["INT_ADD", "register:40f0:8", ["const:812440:8", "const:4:8"]]
- 00812440 ["CALL", null, ["callee:0047e96c:8"]]
+ 008133a4 ["INT_ADD", "register:40f0:8", ["const:8133a4:8", "const:4:8"]]
+ 008133a4 ["CALL", null, ["callee:0047e96c:8"]]
- 00812494 ["INT_ADD", "register:40f0:8", ["const:812494:8", "const:4:8"]]
- 00812494 ["CALL", null, ["callee:00c58f30:8"]]
+ 008133f8 ["INT_ADD", "register:40f0:8", ["const:8133f8:8", "const:4:8"]]
+ 008133f8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d58e5a067cc9f69ebb5bc3bee09fa359"></a>

### [`00812f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00812/00812f24.md) → [`00813e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00813/00813e88.md) FUN_00813e88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 17件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4a0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 17件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046c7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7c0.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.74% / 新版 68.74%

優先判定に残った影響 `call_argument_candidate` 10件, `store_condition` 5件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 23件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 64件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00814748",
      "incomplete_value": true,
      "site": "0081474c",
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
      "definition_site": "008137e4",
      "incomplete_value": true,
      "site": "008137e8",
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
    "ordinal": 168,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00814744",
      "incomplete_value": true,
      "site": "00814750",
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
      "definition_site": "008137e0",
      "incomplete_value": true,
      "site": "008137ec",
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
    "ordinal": 169,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0081475c",
      "incomplete_value": true,
      "site": "0081475c",
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
      "definition_site": "008137f8",
      "incomplete_value": true,
      "site": "008137f8",
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
    "ordinal": 170,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00812f54",
      "WRITE",
      [
        "storage",
        "Stack[-0x240]",
        null,
        null
      ]
    ],
    [
      "unmatched:00812f5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00812f60",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ]
  ],
  "added": [
    [
      "00813eb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x240]",
        null,
        null
      ]
    ],
    [
      "00813ec0",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00813ec4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ]
  ]
}
~~~


~~~diff
- 00813000 ["INT_ADD", "register:40f0:8", ["const:813000:8", "const:4:8"]]
- 00813000 ["CALL", null, ["callee:00487c9c:8"]]
+ 00813f64 ["INT_ADD", "register:40f0:8", ["const:813f64:8", "const:4:8"]]
+ 00813f64 ["CALL", null, ["callee:00487c9c:8"]]
- 008132b8 ["INT_ADD", "register:40f0:8", ["const:8132b8:8", "const:4:8"]]
- 008132b8 ["CALL", null, ["callee:0043bf04:8"]]
+ 0081421c ["INT_ADD", "register:40f0:8", ["const:81421c:8", "const:4:8"]]
+ 0081421c ["CALL", null, ["callee:0043bf04:8"]]
- 008132dc ["INT_ADD", "register:40f0:8", ["const:8132dc:8", "const:4:8"]]
- 008132dc ["CALL", null, ["callee:00487cfc:8"]]
+ 00814240 ["INT_ADD", "register:40f0:8", ["const:814240:8", "const:4:8"]]
+ 00814240 ["CALL", null, ["callee:00487cfc:8"]]
~~~


<a id="compare-ad925c35ce2fe6cd822b6ded84e73ee8"></a>

### [`00813a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00813/00813a00.md) → [`00814964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00814/00814964.md) FUN_00814964

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`00813ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00813/00813ea8.md)
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00470cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470cf4.md) [`00814e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00814/00814e0c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00814c78",
      "incomplete_value": true,
      "site": "00814c7c",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40c0:8"
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00814c94",
      "incomplete_value": true,
      "site": "00814ca8",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00814c98",
      "incomplete_value": true,
      "site": "00814ca8",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "unmatched:00813b64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00814ab8"
      ]
    ],
    [
      "unmatched:00813c40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00814bc0"
      ]
    ],
    [
      "unmatched:00813ccc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00814cc4"
      ]
    ]
  ],
  "added": [
    [
      "00814ac8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00814ab8"
      ]
    ],
    [
      "00814ba4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00814bc0"
      ]
    ],
    [
      "00814c30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00814cc4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00813d18 ["INT_ADD", "register:40f0:8", ["const:813d18:8", "const:4:8"]]
- 00813d18 ["CALL", null, ["callee:00c58f30:8"]]
+ 00814c7c ["INT_ADD", "register:40f0:8", ["const:814c7c:8", "const:4:8"]]
+ 00814c7c ["CALL", null, ["callee:00c58f30:8"]]
- 00813d44 ["INT_ADD", "register:40f0:8", ["const:813d44:8", "const:4:8"]]
- 00813d44 ["CALL", null, ["callee:00c590a0:8"]]
+ 00814ca8 ["INT_ADD", "register:40f0:8", ["const:814ca8:8", "const:4:8"]]
+ 00814ca8 ["CALL", null, ["callee:00c590a0:8"]]
- 00813a94 ["CBRANCH", null, ["local:b19:8", "register:101:1"]]
+ 008149f8 ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
~~~


<a id="compare-f34c76df791a67cb00141b2da3fa3296"></a>

### [`00813e54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00813/00813e54.md) → [`00814db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00814/00814db8.md) FUN_00814db8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00813e68 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00813e68 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00814dcc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00814dcc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00813e70 ["INT_ADD", "register:40f0:8", ["const:813e70:8", "const:4:8"]]
- 00813e70 ["CALL", null, ["callee:00c58f50:8"]]
+ 00814dd4 ["INT_ADD", "register:40f0:8", ["const:814dd4:8", "const:4:8"]]
+ 00814dd4 ["CALL", null, ["callee:00c58f50:8"]]
- 00813e78 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00813e78 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00814ddc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00814ddc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-4f4accba28ea412df9bfdc46f15ca2d1"></a>

### [`00814030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/00814030.md) → [`00814f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00814/00814f94.md) FUN_00814f94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00813a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00813/00813a00.md) [`008b6f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f1c.md) · 呼出先 5件 [`0046c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4a0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`00814964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00814/00814964.md) [`008b7ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ec8.md) · 呼出先 5件 [`0046c7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7c0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00814030",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00814034",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00814038",
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
      "00814f94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00814f98",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00814f9c",
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
- 00814030 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00814030 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00814030 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00814030 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00814034 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00814034 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 00814038 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00814038 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00814038 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00814038 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-73958b28e2e792c189bb7b8f9e64ee20"></a>

### [`008141d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/008141d0.md) → [`00815134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00815/00815134.md) _INIT_151

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.32% / 新版 72.32%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00815280",
      "incomplete_value": true,
      "site": "00815294",
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
      "definition_site": "00815288",
      "incomplete_value": true,
      "site": "00815294",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0081528c",
      "incomplete_value": true,
      "site": "00815294",
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
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00814200",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0081420c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00814228",
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
      "00815164",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00815170",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0081518c",
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
- 00814330 ["INT_ADD", "register:40f0:8", ["const:814330:8", "const:4:8"]]
- 00814330 ["CALL", null, ["callee:0043bb58:8"]]
+ 00815294 ["INT_ADD", "register:40f0:8", ["const:815294:8", "const:4:8"]]
+ 00815294 ["CALL", null, ["callee:0043bb58:8"]]
- 00814344 ["INT_ADD", "register:40f0:8", ["const:814344:8", "const:4:8"]]
- 00814344 ["CALL", null, ["callee:0043bb58:8"]]
+ 008152a8 ["INT_ADD", "register:40f0:8", ["const:8152a8:8", "const:4:8"]]
+ 008152a8 ["CALL", null, ["callee:0043bb58:8"]]
- 00814404 ["INT_ADD", "register:40f0:8", ["const:814404:8", "const:4:8"]]
- 00814404 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00815368 ["INT_ADD", "register:40f0:8", ["const:815368:8", "const:4:8"]]
+ 00815368 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


