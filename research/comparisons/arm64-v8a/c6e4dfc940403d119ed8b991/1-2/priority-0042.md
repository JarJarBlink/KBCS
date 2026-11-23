# v16.0.2 → v16.0.3 · 最優先の変更候補 (42)

[一覧の目次](README.md)

<a id="compare-02b21c6a36c730bb97a7871162aeeb64"></a>

### [`00782dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782dbc.md) → [`00783198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783198.md) FUN_00783198

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_argument_candidate, call_count, constant, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007831c0",
      "incomplete_value": false,
      "site": "007831c8",
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
      "definition_site": "007831c4",
      "incomplete_value": false,
      "site": "007831c8",
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
      "unmatched:00782de0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007831bc",
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
- 00782dec ["INT_ADD", "register:40f0:8", ["const:782dec:8", "const:4:8"]]
- 00782dec ["CALL", null, ["callee:0047d134:8"]]
+ 007831c8 ["INT_ADD", "register:40f0:8", ["const:7831c8:8", "const:4:8"]]
+ 007831c8 ["CALL", null, ["callee:0047d134:8"]]
- 00782de0 ["INT_ADD", "register:40f0:8", ["const:782de0:8", "const:4:8"]]
- 00782de0 ["CALL", null, ["ram:47ad34:8"]]
+ 007831bc ["INT_ADD", "register:40f0:8", ["const:7831bc:8", "const:4:8"]]
+ 007831bc ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-f164c5444a01c4168ab06c6fbc0ce311"></a>

### [`00782e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782e30.md) → [`0078320c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/0078320c.md) FUN_0078320c

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
      "definition_site": "00783220",
      "incomplete_value": false,
      "site": "00783224",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:9c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782e44",
      "incomplete_value": false,
      "site": "00782e48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:9f0:8"
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
      "00783224",
      "DATA",
      [
        "storage",
        "00c789f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783224",
      "DATA",
      [
        "storage",
        "00c799c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782e3c ["INT_ADD", "register:40f0:8", ["const:782e3c:8", "const:4:8"]]
- 00782e3c ["CALL", null, ["callee:00c58f30:8"]]
+ 00783218 ["INT_ADD", "register:40f0:8", ["const:783218:8", "const:4:8"]]
+ 00783218 ["CALL", null, ["callee:00c58f30:8"]]
- 00782e40 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 0078321c ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00782e44 ["COPY", "tmp:0:8", ["const:9f0:8"]]
- 00782e44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782e44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782e44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00783220 ["COPY", "tmp:0:8", ["const:9c0:8"]]
+ 00783220 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00783220 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00783220 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f5fd11f5e11e5fb528ffbff6a2e8247d"></a>

### [`00782e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782e6c.md) → [`00783248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783248.md) FUN_00783248

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_target` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078326c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782e90",
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
      "0078326c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00782eb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0078326c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00783294",
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
- 00782e90 ["INT_ADD", "register:40f0:8", ["const:782e90:8", "const:4:8"]]
- 00782e90 ["CALL", null, ["ram:47ad34:8"]]
+ 0078326c ["INT_ADD", "register:40f0:8", ["const:78326c:8", "const:4:8"]]
+ 0078326c ["CALL", null, ["ram:47b054:8"]]
- 00782e9c ["INT_ADD", "register:40f0:8", ["const:782e9c:8", "const:4:8"]]
- 00782e9c ["CALL", null, ["callee:0047d134:8"]]
+ 00783278 ["INT_ADD", "register:40f0:8", ["const:783278:8", "const:4:8"]]
+ 00783278 ["CALL", null, ["callee:0047d134:8"]]
- 00782eb4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00782eb4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00783290 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00783290 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-36e8869d6ad2bf38d1f21223aa168b7f"></a>

### [`00782f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782f08.md) → [`007832e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007832e4.md) FUN_007832e4

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
      "definition_site": "007832f8",
      "incomplete_value": false,
      "site": "007832fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782f1c",
      "incomplete_value": false,
      "site": "00782f20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:a70:8"
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
      "007832fc",
      "DATA",
      [
        "storage",
        "00c78a70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007832fc",
      "DATA",
      [
        "storage",
        "00c79a40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782f14 ["INT_ADD", "register:40f0:8", ["const:782f14:8", "const:4:8"]]
- 00782f14 ["CALL", null, ["callee:00c58f30:8"]]
+ 007832f0 ["INT_ADD", "register:40f0:8", ["const:7832f0:8", "const:4:8"]]
+ 007832f0 ["CALL", null, ["callee:00c58f30:8"]]
- 00782f18 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 007832f4 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00782f1c ["COPY", "tmp:0:8", ["const:a70:8"]]
- 00782f1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782f1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782f1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007832f8 ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 007832f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007832f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007832f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-974d1989cd54b4187be4c39fd0d23566"></a>

### [`00782f44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782f44.md) → [`00783320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783320.md) FUN_00783320

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
      "unmatched:00782f68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00783344",
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
- 00782f4c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00782f4c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00783328 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00783328 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00782f54 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00782f54 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00783330 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00783330 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00782f68 ["INT_ADD", "register:40f0:8", ["const:782f68:8", "const:4:8"]]
- 00782f68 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-d6b02d9990d29ab1244e565038198c4c"></a>

### [`00782fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782fb8.md) → [`00783394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783394.md) FUN_00783394

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
      "definition_site": "007833a8",
      "incomplete_value": false,
      "site": "007833ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ac0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782fcc",
      "incomplete_value": false,
      "site": "00782fd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:af0:8"
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
      "007833ac",
      "DATA",
      [
        "storage",
        "00c78af0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007833ac",
      "DATA",
      [
        "storage",
        "00c79ac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782fc4 ["INT_ADD", "register:40f0:8", ["const:782fc4:8", "const:4:8"]]
- 00782fc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007833a0 ["INT_ADD", "register:40f0:8", ["const:7833a0:8", "const:4:8"]]
+ 007833a0 ["CALL", null, ["callee:00c58f30:8"]]
- 00782fc8 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 007833a4 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00782fcc ["COPY", "tmp:0:8", ["const:af0:8"]]
- 00782fcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782fcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782fcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007833a8 ["COPY", "tmp:0:8", ["const:ac0:8"]]
+ 007833a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007833a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007833a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c0b551ee5dd22c31a54f401593c4760a"></a>

### [`00782ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782ff4.md) → [`007833d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007833d0.md) FUN_007833d0

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
      "site": "007833ec",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00783010",
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
      "007833ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007833ec",
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
- 00783010 ["INT_ADD", "register:40f0:8", ["const:783010:8", "const:4:8"]]
- 00783010 ["CALL", null, ["ram:47ad34:8"]]
+ 007833ec ["INT_ADD", "register:40f0:8", ["const:7833ec:8", "const:4:8"]]
+ 007833ec ["CALL", null, ["ram:47b054:8"]]
- 0078301c ["INT_ADD", "register:40f0:8", ["const:78301c:8", "const:4:8"]]
- 0078301c ["CALL", null, ["callee:0047d134:8"]]
+ 007833f8 ["INT_ADD", "register:40f0:8", ["const:7833f8:8", "const:4:8"]]
+ 007833f8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-232038fab0f80771b340884e1958b8bd"></a>

### [`00783060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783060.md) → [`0078343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/0078343c.md) FUN_0078343c

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
      "unmatched:00783078",
      "DATA",
      [
        "storage",
        "00c78b70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078307c",
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
      "00783454",
      "DATA",
      [
        "storage",
        "00c79b40",
        null,
        "undefined *"
      ]
    ],
    [
      "00783458",
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
- 0078306c ["INT_ADD", "register:40f0:8", ["const:78306c:8", "const:4:8"]]
- 0078306c ["CALL", null, ["callee:00c58f30:8"]]
+ 00783448 ["INT_ADD", "register:40f0:8", ["const:783448:8", "const:4:8"]]
+ 00783448 ["CALL", null, ["callee:00c58f30:8"]]
- 00783070 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 0078344c ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00783074 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 00783074 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00783074 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00783074 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cfdb29266ee58114238cc677d150f2c9"></a>

### [`00783130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783130.md) → [`0078350c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/0078350c.md) FUN_0078350c

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
      "unmatched:00783130",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078313c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:00783148",
      "DATA",
      [
        "storage",
        "00c78bf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078350c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00783518",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "00783524",
      "DATA",
      [
        "storage",
        "00c79bc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783130 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00783130 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00783130 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00783130 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00783134 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00783138 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-117f0f6c11875a71ff5faf060c3fd8c5"></a>

### [`0078316c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078316c.md) → [`00783548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783548.md) FUN_00783548

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
      "site": "0078356c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00783190",
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
      "0078356c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0078356c",
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
- 00783190 ["INT_ADD", "register:40f0:8", ["const:783190:8", "const:4:8"]]
- 00783190 ["CALL", null, ["ram:47ad34:8"]]
+ 0078356c ["INT_ADD", "register:40f0:8", ["const:78356c:8", "const:4:8"]]
+ 0078356c ["CALL", null, ["ram:47b054:8"]]
- 0078319c ["INT_ADD", "register:40f0:8", ["const:78319c:8", "const:4:8"]]
- 0078319c ["CALL", null, ["callee:0047d134:8"]]
+ 00783578 ["INT_ADD", "register:40f0:8", ["const:783578:8", "const:4:8"]]
+ 00783578 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-d50420b14aa46dbab33de53543aa9f38"></a>

### [`007831e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007831e0.md) → [`007835bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007835bc.md) FUN_007835bc

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
      "definition_site": "007835d0",
      "incomplete_value": false,
      "site": "007835d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007831f4",
      "incomplete_value": false,
      "site": "007831f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:c70:8"
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
      "007835d4",
      "DATA",
      [
        "storage",
        "00c78c70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007835d4",
      "DATA",
      [
        "storage",
        "00c79c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007831ec ["INT_ADD", "register:40f0:8", ["const:7831ec:8", "const:4:8"]]
- 007831ec ["CALL", null, ["callee:00c58f30:8"]]
+ 007835c8 ["INT_ADD", "register:40f0:8", ["const:7835c8:8", "const:4:8"]]
+ 007835c8 ["CALL", null, ["callee:00c58f30:8"]]
- 007831f0 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 007835cc ["COPY", "register:4040:8", ["const:c79000:8"]]
- 007831f4 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 007831f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007831f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007831f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007835d0 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 007835d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007835d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007835d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eb8d998f0d98827696078b6035024291"></a>

### [`0078321c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078321c.md) → [`007835f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007835f8.md) FUN_007835f8

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
      "site": "0078361c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00783240",
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
      "0078361c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0078361c",
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
- 00783240 ["INT_ADD", "register:40f0:8", ["const:783240:8", "const:4:8"]]
- 00783240 ["CALL", null, ["ram:47ad34:8"]]
+ 0078361c ["INT_ADD", "register:40f0:8", ["const:78361c:8", "const:4:8"]]
+ 0078361c ["CALL", null, ["ram:47b054:8"]]
- 0078324c ["INT_ADD", "register:40f0:8", ["const:78324c:8", "const:4:8"]]
- 0078324c ["CALL", null, ["callee:0047d134:8"]]
+ 00783628 ["INT_ADD", "register:40f0:8", ["const:783628:8", "const:4:8"]]
+ 00783628 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-de9f41299d35f2b157d1d3194b9ac68f"></a>

### [`00783290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783290.md) → [`0078366c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/0078366c.md) FUN_0078366c

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
      "definition_site": "00783680",
      "incomplete_value": false,
      "site": "00783684",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007832a4",
      "incomplete_value": false,
      "site": "007832a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
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
      "00783684",
      "DATA",
      [
        "storage",
        "00c78cf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783684",
      "DATA",
      [
        "storage",
        "00c79cc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078329c ["INT_ADD", "register:40f0:8", ["const:78329c:8", "const:4:8"]]
- 0078329c ["CALL", null, ["callee:00c58f30:8"]]
+ 00783678 ["INT_ADD", "register:40f0:8", ["const:783678:8", "const:4:8"]]
+ 00783678 ["CALL", null, ["callee:00c58f30:8"]]
- 007832a0 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 0078367c ["COPY", "register:4040:8", ["const:c79000:8"]]
- 007832a4 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 007832a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007832a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007832a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00783680 ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 00783680 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00783680 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00783680 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bcdccd2e285dfaa19ec147fd05231d6f"></a>

### [`007832cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007832cc.md) → [`007836a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007836a8.md) FUN_007836a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0044bf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044bf54.md) [`0044c06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c06c.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0044c274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044c/0044c274.md) [`0044c38c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044c/0044c38c.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`0048f250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f250.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00783364",
      "incomplete_value": true,
      "site": "00783368",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:18:8"
              ]
            ]
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
      "unmatched:007832e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:007832ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:007832f0",
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
      "007836c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "007836c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007836cc",
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
- 00783368 ["INT_ADD", "register:40f0:8", ["const:783368:8", "const:4:8"]]
- 00783368 ["CALL", null, ["callee:00c58f50:8"]]
+ 00783744 ["INT_ADD", "register:40f0:8", ["const:783744:8", "const:4:8"]]
+ 00783744 ["CALL", null, ["callee:00c58f50:8"]]
- 007832e4 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007832e4 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 007832e4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 007832e8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007832e8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 007832e8 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-026b19ac2051f0e917b5d84986ec8eb6"></a>

### [`00783420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783420.md) → [`007837fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007837fc.md) FUN_007837fc

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
      "unmatched:00783438",
      "DATA",
      [
        "storage",
        "00c78d70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078343c",
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
      "00783814",
      "DATA",
      [
        "storage",
        "00c79d40",
        null,
        "undefined *"
      ]
    ],
    [
      "00783818",
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
- 0078342c ["INT_ADD", "register:40f0:8", ["const:78342c:8", "const:4:8"]]
- 0078342c ["CALL", null, ["callee:00c58f30:8"]]
+ 00783808 ["INT_ADD", "register:40f0:8", ["const:783808:8", "const:4:8"]]
+ 00783808 ["CALL", null, ["callee:00c58f30:8"]]
- 00783430 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 0078380c ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00783434 ["COPY", "tmp:0:8", ["const:d70:8"]]
- 00783434 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00783434 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00783434 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ec15b1c60562b56a87ba3cf3fa948bf7"></a>

### [`007834cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007834cc.md) → [`007838a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007838a8.md) FUN_007838a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007838b0",
      "incomplete_value": false,
      "site": "007838b4",
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
      "unmatched:007834e4",
      "DATA",
      [
        "storage",
        "00c78df0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007834e8",
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
      "007838c0",
      "DATA",
      [
        "storage",
        "00c79dc0",
        null,
        "undefined *"
      ]
    ],
    [
      "007838c4",
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
- 007834d8 ["INT_ADD", "register:40f0:8", ["const:7834d8:8", "const:4:8"]]
- 007834d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 007838b4 ["INT_ADD", "register:40f0:8", ["const:7838b4:8", "const:4:8"]]
+ 007838b4 ["CALL", null, ["callee:00c58f30:8"]]
- 007834dc ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 007838b8 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 007834e0 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 007834e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007834e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007834e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1800b2a083098c45ea3a6e46d59e7842"></a>

### [`00783508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783508.md) → [`007838e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/007838e4.md) FUN_007838e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0044ee7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ee7c.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0044f19c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044f19c.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`0048f250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f250.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_count, call_target, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.87% / 新版 83.87%

優先判定に残った影響 `call_target` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007839b0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007835d4",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "unmatched:00783520",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:00783534",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:00783550",
      "READ",
      [
        "storage",
        "002bb20f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007838fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00783910",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "0078392c",
      "READ",
      [
        "storage",
        "002bb2ed",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007835d4 ["INT_ADD", "register:40f0:8", ["const:7835d4:8", "const:4:8"]]
- 007835d4 ["CALL", null, ["ram:48cd38:8"]]
+ 007839b0 ["INT_ADD", "register:40f0:8", ["const:7839b0:8", "const:4:8"]]
+ 007839b0 ["CALL", null, ["ram:48d058:8"]]
- 00783520 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00783520 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00783520 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00783534 ["INT_ADD", "register:40f0:8", ["const:783534:8", "const:4:8"]]
- 00783534 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-86e3b420f21c6195b1f96c737589124a"></a>

### [`00783668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783668.md) → [`00783a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783a44.md) FUN_00783a44

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
      "definition_site": "00783a58",
      "incomplete_value": false,
      "site": "00783a5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078367c",
      "incomplete_value": false,
      "site": "00783680",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:e70:8"
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
      "00783a5c",
      "DATA",
      [
        "storage",
        "00c78e70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783a5c",
      "DATA",
      [
        "storage",
        "00c79e40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783674 ["INT_ADD", "register:40f0:8", ["const:783674:8", "const:4:8"]]
- 00783674 ["CALL", null, ["callee:00c58f30:8"]]
+ 00783a50 ["INT_ADD", "register:40f0:8", ["const:783a50:8", "const:4:8"]]
+ 00783a50 ["CALL", null, ["callee:00c58f30:8"]]
- 00783678 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00783a54 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 0078367c ["COPY", "tmp:0:8", ["const:e70:8"]]
- 0078367c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078367c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078367c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00783a58 ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00783a58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00783a58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00783a58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5347132c52ce5b61f86843fe7b7edb1"></a>

### [`007836a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007836a4.md) → [`00783a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783a80.md) FUN_00783a80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.97% / 新版 68.97%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007836a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007836a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007836c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00783a80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00783a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00783aa4",
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
- 007836a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007836a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007836a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007836a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007836a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007836a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007836ac ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-1427b9705beadf65412a90e7f602f319"></a>

### [`00783744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783744.md) → [`00783b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783b20.md) FUN_00783b20

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
      "unmatched:0078375c",
      "DATA",
      [
        "storage",
        "00c78ef0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00783760",
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
      "00783b38",
      "DATA",
      [
        "storage",
        "00c79ec0",
        null,
        "undefined *"
      ]
    ],
    [
      "00783b3c",
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
- 00783750 ["INT_ADD", "register:40f0:8", ["const:783750:8", "const:4:8"]]
- 00783750 ["CALL", null, ["callee:00c58f30:8"]]
+ 00783b2c ["INT_ADD", "register:40f0:8", ["const:783b2c:8", "const:4:8"]]
+ 00783b2c ["CALL", null, ["callee:00c58f30:8"]]
- 00783754 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00783b30 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00783758 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 00783758 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00783758 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00783758 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-16ab77560944e804341f13ef7b29f32a"></a>

### [`00783780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783780.md) → [`00783b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783b5c.md) FUN_00783b5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0078379c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00783b78",
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
- 00783788 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00783788 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00783b64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00783b64 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0078379c ["INT_ADD", "register:40f0:8", ["const:78379c:8", "const:4:8"]]
- 0078379c ["CALL", null, ["ram:47ad34:8"]]
- 007837a8 ["INT_ADD", "register:40f0:8", ["const:7837a8:8", "const:4:8"]]
- 007837a8 ["CALL", null, ["callee:0047d134:8"]]
+ 00783b84 ["INT_ADD", "register:40f0:8", ["const:783b84:8", "const:4:8"]]
+ 00783b84 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-c1f77689b6dc797be29186acc448483f"></a>

### [`007837e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007837e8.md) → [`00783bc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783bc4.md) FUN_00783bc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00783bd0",
      "incomplete_value": false,
      "site": "00783bd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007837f4",
      "incomplete_value": false,
      "site": "007837f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:f70:8"
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
      "00783bd4",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783bd4",
      "DATA",
      [
        "storage",
        "00c79f40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007837f0 ["COPY", "register:4048:8", ["const:c78000:8"]]
+ 00783bcc ["COPY", "register:4048:8", ["const:c79000:8"]]
- 007837f4 ["COPY", "tmp:0:8", ["const:f70:8"]]
- 007837f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007837f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007837f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00783bd0 ["COPY", "tmp:0:8", ["const:f40:8"]]
+ 00783bd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00783bd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00783bd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9ddaf8e9c523d625cf2eaba5b580004c"></a>

### [`0078380c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078380c.md) → [`00783be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783be8.md) FUN_00783be8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00783bf0",
      "incomplete_value": false,
      "site": "00783bf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00783814",
      "incomplete_value": false,
      "site": "00783818",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:f70:8"
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
      "00783bf4",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783bf4",
      "DATA",
      [
        "storage",
        "00c79f40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783810 ["COPY", "register:4048:8", ["const:c78000:8"]]
+ 00783bec ["COPY", "register:4048:8", ["const:c79000:8"]]
- 00783814 ["COPY", "tmp:0:8", ["const:f70:8"]]
- 00783814 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00783814 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00783814 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00783bf0 ["COPY", "tmp:0:8", ["const:f40:8"]]
+ 00783bf0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00783bf0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00783bf0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00783838 ["INT_ADD", "register:40f0:8", ["const:783838:8", "const:4:8"]]
- 00783838 ["CALL", null, ["callee:00c58f50:8"]]
+ 00783c14 ["INT_ADD", "register:40f0:8", ["const:783c14:8", "const:4:8"]]
+ 00783c14 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-df96691eb426e4f94e1bad6a0bd6549e"></a>

### [`0078384c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078384c.md) → [`00783c28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783c28.md) FUN_00783c28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0077c8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c8a4.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0077cc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077cc80.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00783cac",
      "incomplete_value": true,
      "site": "00783cbc",
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
      "definition_site": "00783cb0",
      "incomplete_value": true,
      "site": "00783cbc",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "007838c0"
      ],
      [
        "FALL_THROUGH",
        "00783c9c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00783c98",
      "incomplete_value": true,
      "site": "00783cb4",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007838bc",
      "incomplete_value": true,
      "site": "007838d8",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
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
      "unmatched:00783874",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007838c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783cd8"
      ]
    ]
  ],
  "added": [
    [
      "00783c50",
      "DATA",
      [
        "storage",
        "00c79f40",
        null,
        "undefined *"
      ]
    ],
    [
      "00783c9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783cd8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007838e0 ["INT_ADD", "register:40f0:8", ["const:7838e0:8", "const:4:8"]]
- 007838e0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00783cbc ["INT_ADD", "register:40f0:8", ["const:783cbc:8", "const:4:8"]]
+ 00783cbc ["CALL", null, ["callee:00c590a0:8"]]
- 00783864 ["INT_ADD", "register:40f0:8", ["const:783864:8", "const:4:8"]]
- 00783864 ["CALL", null, ["callee:00c58f30:8"]]
+ 00783c40 ["INT_ADD", "register:40f0:8", ["const:783c40:8", "const:4:8"]]
+ 00783c40 ["CALL", null, ["callee:00c58f30:8"]]
- 00783868 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00783c44 ["COPY", "register:4040:8", ["const:c79000:8"]]
~~~


<a id="compare-ff7d764d506c38dc4609dd86df643f2f"></a>

### [`0078392c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078392c.md) → [`00783d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783d08.md) FUN_00783d08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0077c8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c8a4.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0077cc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077cc80.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.00% / 新版 74.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00783da8",
      "incomplete_value": true,
      "site": "00783dac",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00783994"
      ],
      [
        "FALL_THROUGH",
        "00783d70"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00783d6c",
      "incomplete_value": true,
      "site": "00783d88",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00783990",
      "incomplete_value": true,
      "site": "007839ac",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00783994"
      ],
      [
        "FALL_THROUGH",
        "00783d70"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00783d6c",
      "incomplete_value": true,
      "site": "00783d88",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_SRIGHT",
              "INT_OR"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00783990",
      "incomplete_value": true,
      "site": "007839ac",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:1555000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4040:8"
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
      "unmatched:0078395c",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078396c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783d98"
      ]
    ],
    [
      "unmatched:00783994",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783da8"
      ]
    ]
  ],
  "added": [
    [
      "00783d38",
      "DATA",
      [
        "storage",
        "00c79f40",
        null,
        "undefined *"
      ]
    ],
    [
      "00783d48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783d98"
      ]
    ],
    [
      "00783d70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783da8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007839d0 ["INT_ADD", "register:40f0:8", ["const:7839d0:8", "const:4:8"]]
- 007839d0 ["CALL", null, ["callee:0077cc80:8"]]
+ 00783dac ["INT_ADD", "register:40f0:8", ["const:783dac:8", "const:4:8"]]
+ 00783dac ["CALL", null, ["callee:0077cc80:8"]]
- 0078394c ["COPY", "register:4058:8", ["const:c78000:8"]]
+ 00783d28 ["COPY", "register:4058:8", ["const:c79000:8"]]
- 00783950 ["COPY", "tmp:0:8", ["const:f70:8"]]
- 00783950 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00783950 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00783950 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
~~~


<a id="compare-0ee90c73fd517c70c86d080214aaa470"></a>

### [`00783a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783a0c.md) → [`00783de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783de8.md) FUN_00783de8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00783a10"
      ],
      [
        "FALL_THROUGH",
        "00783dec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00783dec",
      "incomplete_value": true,
      "site": "00783df0",
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
      "definition_site": "00783a10",
      "incomplete_value": true,
      "site": "00783a14",
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
        "00783a10"
      ],
      [
        "FALL_THROUGH",
        "00783dec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00783dec",
      "incomplete_value": true,
      "site": "00783df0",
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
      "definition_site": "00783a10",
      "incomplete_value": true,
      "site": "00783a14",
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
        "00783a10"
      ],
      [
        "FALL_THROUGH",
        "00783dec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00783dec",
      "incomplete_value": true,
      "site": "00783df4",
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
      "definition_site": "00783a10",
      "incomplete_value": true,
      "site": "00783a18",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00783a10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783e18"
      ]
    ]
  ],
  "added": [
    [
      "00783dec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783e18"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783a0c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:18:8"]]
- 00783a0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00783a10 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00783a10 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00783a2c ["INT_ADD", "register:40f0:8", ["const:783a2c:8", "const:4:8"]]
- 00783a2c ["CALL", null, ["callee:00c58f50:8"]]
+ 00783e08 ["INT_ADD", "register:40f0:8", ["const:783e08:8", "const:4:8"]]
+ 00783e08 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-24833a6b1c4e6a3b98af79a129e5f525"></a>

### [`00783a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783a40.md) → [`00783e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783e1c.md) FUN_00783e1c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.70% / 新版 79.70%

優先判定に残った影響 `call_argument_candidate` 8件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00784188",
      "incomplete_value": false,
      "site": "0078418c",
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
            "const:83b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00783dac",
      "incomplete_value": false,
      "site": "00783db0",
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
            "const:75d:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00784218",
      "incomplete_value": true,
      "site": "00784220",
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
    "old": null,
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0078421c",
      "incomplete_value": false,
      "site": "00784220",
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
    "ordinal": 29,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00783aa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x128]",
        null,
        null
      ]
    ],
    [
      "unmatched:00783ac0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00783adc"
      ]
    ],
    [
      "unmatched:00783acc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00783b00"
      ]
    ]
  ],
  "added": [
    [
      "00783e7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x128]",
        null,
        null
      ]
    ],
    [
      "00783e9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00783eb8"
      ]
    ],
    [
      "00783ea8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00783edc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783db0 ["INT_ADD", "register:40f0:8", ["const:783db0:8", "const:4:8"]]
- 00783db0 ["CALL", null, ["callee:00c59000:8"]]
+ 0078418c ["INT_ADD", "register:40f0:8", ["const:78418c:8", "const:4:8"]]
+ 0078418c ["CALL", null, ["callee:00c59000:8"]]
- 00783e44 ["INT_ADD", "register:40f0:8", ["const:783e44:8", "const:4:8"]]
- 00783e44 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00784220 ["INT_ADD", "register:40f0:8", ["const:784220:8", "const:4:8"]]
+ 00784220 ["CALL", null, ["callee:00c5b8d0:8"]]
- 00783ea0 ["INT_ADD", "register:40f0:8", ["const:783ea0:8", "const:4:8"]]
- 00783ea0 ["CALL", null, ["callee:007846b4:8"]]
+ 0078427c ["INT_ADD", "register:40f0:8", ["const:78427c:8", "const:4:8"]]
+ 0078427c ["CALL", null, ["callee:007846b4:8"]]
~~~


<a id="compare-036ac959589b0d157f738fefef634e51"></a>

### [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) → [`007846b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00784/007846b4.md) FUN_007846b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 12件 [`00783a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783a40.md) [`00796b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/00796b50.md) [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) [`00878f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f60.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 3件 [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9d0.md)
- 新版 呼出元 12件 [`00783e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00783/00783e1c.md) [`00796f2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796f2c.md) [`0087975c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/0087975c.md) [`00879f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/00879f0c.md) [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 3件 [`00c594d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594d0.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00784308 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00784308 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00784308 ["CBRANCH", null, ["local:b2:8", "tmp:1:1"]]
+ 007846e4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007846e4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 007846e4 ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
- 00784310 ["INT_ADD", "register:40f0:8", ["const:784310:8", "const:4:8"]]
- 00784310 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 007846ec ["INT_ADD", "register:40f0:8", ["const:7846ec:8", "const:4:8"]]
+ 007846ec ["CALL", null, ["callee:00c5b8d0:8"]]
- 00784348 ["INT_ADD", "register:40f0:8", ["const:784348:8", "const:4:8"]]
- 00784348 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00784724 ["INT_ADD", "register:40f0:8", ["const:784724:8", "const:4:8"]]
+ 00784724 ["CALL", null, ["callee:00c5b8d0:8"]]
~~~


<a id="compare-e43b2584c778f024d8c7d702590bdce9"></a>

### [`00784364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784364.md) → [`00784740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00784/00784740.md) FUN_00784740

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
      "definition_site": "00784764",
      "incomplete_value": false,
      "site": "00784764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00784388",
      "incomplete_value": false,
      "site": "00784388",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
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
      "00784764",
      "DATA",
      [
        "storage",
        "00c78ff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00784764",
      "DATA",
      [
        "storage",
        "00c79fc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00784378 ["INT_ADD", "register:40f0:8", ["const:784378:8", "const:4:8"]]
- 00784378 ["CALL", null, ["callee:00c58f30:8"]]
+ 00784754 ["INT_ADD", "register:40f0:8", ["const:784754:8", "const:4:8"]]
+ 00784754 ["CALL", null, ["callee:00c58f30:8"]]
- 00784380 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 0078475c ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00784384 ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 00784384 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00784384 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00784384 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00784760 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 00784760 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00784760 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00784760 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eeed7346eb434502d52e74fcb6d372c3"></a>

### [`007843b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007843b4.md) → [`00784790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00784/00784790.md) FUN_00784790

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007843f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007847d4",
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
- 007843cc ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 007843cc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 007847a8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007847a8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 007843f8 ["INT_ADD", "register:40f0:8", ["const:7843f8:8", "const:4:8"]]
- 007843f8 ["CALL", null, ["ram:47ad34:8"]]
- 00784404 ["INT_ADD", "register:40f0:8", ["const:784404:8", "const:4:8"]]
- 00784404 ["CALL", null, ["callee:0047d134:8"]]
+ 007847e0 ["INT_ADD", "register:40f0:8", ["const:7847e0:8", "const:4:8"]]
+ 007847e0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-692b327953ee489e20c6f36c50f0b0ed"></a>

### [`00784444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784444.md) → [`00784820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00784/00784820.md) FUN_00784820

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 37.50% / 新版 37.50%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00784444",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00784448",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078446c",
      "DATA",
      [
        "storage",
        "00c79070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00784820",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00784824",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00784848",
      "DATA",
      [
        "storage",
        "00c7a040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00784444 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00784444 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00784444 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00784444 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00784448 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00784448 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0078444c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-fa39be0cc7cdad543ccbfefb1ea1d075"></a>

### [`007844ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007844ac.md) → [`00784888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00784/00784888.md) FUN_00784888

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.51% / 新版 83.51%

優先判定に残った影響 `call_argument_candidate` 14件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007848e0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00784504",
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
      "definition_site": "0078495c",
      "incomplete_value": false,
      "site": "00784964",
      "value": [
        "leaf",
        "const:37:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007845e0",
      "incomplete_value": true,
      "site": "007845f8",
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
            "const:2f08:8"
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
      "007848e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00784548",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078505c"
      ]
    ],
    [
      "unmatched:007845a4",
      "READ",
      [
        "storage",
        "002a1440",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007848e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00784924",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078505c"
      ]
    ],
    [
      "00784930",
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
- 00784504 ["INT_ADD", "register:40f0:8", ["const:784504:8", "const:4:8"]]
- 00784504 ["CALL", null, ["ram:47ad34:8"]]
+ 007848e0 ["INT_ADD", "register:40f0:8", ["const:7848e0:8", "const:4:8"]]
+ 007848e0 ["CALL", null, ["ram:47b054:8"]]
- 00784588 ["INT_ADD", "register:40f0:8", ["const:784588:8", "const:4:8"]]
- 00784588 ["CALL", null, ["callee:0071c2e0:8"]]
+ 00784964 ["INT_ADD", "register:40f0:8", ["const:784964:8", "const:4:8"]]
+ 00784964 ["CALL", null, ["callee:0071c2e0:8"]]
- 007845f8 ["INT_ADD", "register:40f0:8", ["const:7845f8:8", "const:4:8"]]
- 007845f8 ["CALL", null, ["callee:008bc0f0:8"]]
+ 007849d4 ["INT_ADD", "register:40f0:8", ["const:7849d4:8", "const:4:8"]]
+ 007849d4 ["CALL", null, ["callee:008bc0f0:8"]]
~~~


<a id="compare-1744e02178c41d9653ecdb2e3544b56c"></a>

### [`00784cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784cb0.md) → [`0078508c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/0078508c.md) FUN_0078508c

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
      "unmatched:00784cd8",
      "DATA",
      [
        "storage",
        "00c790e0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00784ce4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00784ce8",
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
      "007850b4",
      "DATA",
      [
        "storage",
        "00c7a0b0",
        null,
        "undefined *"
      ]
    ],
    [
      "007850c0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007850c4",
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
- 00784cc4 ["INT_ADD", "register:40f0:8", ["const:784cc4:8", "const:4:8"]]
- 00784cc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007850a0 ["INT_ADD", "register:40f0:8", ["const:7850a0:8", "const:4:8"]]
+ 007850a0 ["CALL", null, ["callee:00c58f30:8"]]
- 00784cd0 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 007850ac ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 00784cd4 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 00784cd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00784cd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00784cd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6d2bd875ed0de909dc8aa5662caaa5ef"></a>

### [`00784cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784cf0.md) → [`007850cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/007850cc.md) FUN_007850cc

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
      "definition_site": "007850d0",
      "incomplete_value": false,
      "site": "007850d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00784cf4",
      "incomplete_value": false,
      "site": "00784cf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e0:8"
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
      "007850d4",
      "DATA",
      [
        "storage",
        "00c790e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007850d4",
      "DATA",
      [
        "storage",
        "00c7a0b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00784cf0 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 007850cc ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 00784cf4 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 00784cf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00784cf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00784cf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007850d0 ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 007850d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007850d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007850d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e848ef36b4beb459b4384d9b2c647beb"></a>

### [`00785184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785184.md) → [`00785560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785560.md) FUN_00785560

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
      "unmatched:007851a8",
      "DATA",
      [
        "storage",
        "00c79160",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007851ac",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007851b0",
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
      "00785584",
      "DATA",
      [
        "storage",
        "00c7a130",
        null,
        "undefined *"
      ]
    ],
    [
      "00785588",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078558c",
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
- 00785198 ["INT_ADD", "register:40f0:8", ["const:785198:8", "const:4:8"]]
- 00785198 ["CALL", null, ["callee:00c58f30:8"]]
+ 00785574 ["INT_ADD", "register:40f0:8", ["const:785574:8", "const:4:8"]]
+ 00785574 ["CALL", null, ["callee:00c58f30:8"]]
- 007851a0 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078557c ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007851a4 ["COPY", "tmp:0:8", ["const:160:8"]]
- 007851a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007851a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007851a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8a1ae1b560313f78272872908efb7ed9"></a>

### [`007851b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007851b8.md) → [`00785594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785594.md) FUN_00785594

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
      "definition_site": "007855a0",
      "incomplete_value": false,
      "site": "007855a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:130:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007851c4",
      "incomplete_value": false,
      "site": "007851c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "007855a0",
      "DATA",
      [
        "storage",
        "00c79160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007855a0",
      "DATA",
      [
        "storage",
        "00c7a130",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007851bc ["COPY", "register:4048:8", ["const:c79000:8"]]
+ 00785598 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 007851c0 ["COPY", "tmp:0:8", ["const:160:8"]]
- 007851c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007851c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007851c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078559c ["COPY", "tmp:0:8", ["const:130:8"]]
+ 0078559c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078559c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078559c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a92e423b02385d55a4247342fbe04b64"></a>

### [`007852a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007852a4.md) → [`00785680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785680.md) FUN_00785680

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
      "definition_site": "00785694",
      "incomplete_value": false,
      "site": "00785698",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007852b8",
      "incomplete_value": false,
      "site": "007852bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
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
      "00785698",
      "DATA",
      [
        "storage",
        "00c791f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785698",
      "DATA",
      [
        "storage",
        "00c7a1c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007852b0 ["INT_ADD", "register:40f0:8", ["const:7852b0:8", "const:4:8"]]
- 007852b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0078568c ["INT_ADD", "register:40f0:8", ["const:78568c:8", "const:4:8"]]
+ 0078568c ["CALL", null, ["callee:00c58f30:8"]]
- 007852b4 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00785690 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007852b8 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 007852b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007852b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007852b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00785694 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00785694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00785694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00785694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a360b642cef83379594a35c582909922"></a>

### [`007852e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007852e0.md) → [`007856bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/007856bc.md) FUN_007856bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00785704",
      "incomplete_value": true,
      "site": "00785704",
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
      "definition_site": "00785328",
      "incomplete_value": true,
      "site": "00785328",
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
      "definition_site": "0078570c",
      "incomplete_value": false,
      "site": "0078571c",
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
      "definition_site": "00785330",
      "incomplete_value": false,
      "site": "00785340",
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
      "definition_site": "00785714",
      "incomplete_value": false,
      "site": "0078571c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:aa8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00785338",
      "incomplete_value": false,
      "site": "00785340",
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
            "const:ad8:8"
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
      "00785700",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0078570c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00785714",
      "PARAM",
      [
        "storage",
        "00c77ad8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00785700",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0078570c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00785714",
      "PARAM",
      [
        "storage",
        "00c78aa8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00785340 ["INT_ADD", "register:40f0:8", ["const:785340:8", "const:4:8"]]
- 00785340 ["CALL", null, ["callee:00c596b0:8"]]
+ 0078571c ["INT_ADD", "register:40f0:8", ["const:78571c:8", "const:4:8"]]
+ 0078571c ["CALL", null, ["callee:00c596b0:8"]]
- 00785394 ["INT_ADD", "register:40f0:8", ["const:785394:8", "const:4:8"]]
- 00785394 ["CALL", null, ["callee:004692e8:8"]]
+ 00785770 ["INT_ADD", "register:40f0:8", ["const:785770:8", "const:4:8"]]
+ 00785770 ["CALL", null, ["callee:004692e8:8"]]
- 007853b4 ["INT_ADD", "register:40f0:8", ["const:7853b4:8", "const:4:8"]]
- 007853b4 ["CALL", null, ["callee:008ba29c:8"]]
+ 00785790 ["INT_ADD", "register:40f0:8", ["const:785790:8", "const:4:8"]]
+ 00785790 ["CALL", null, ["callee:008ba29c:8"]]
~~~


<a id="compare-64a6f95787fe6916c77a025ad8b2f70a"></a>

### [`007854e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007854e4.md) → [`007858c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/007858c0.md) FUN_007858c0

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
      "unmatched:007854fc",
      "DATA",
      [
        "storage",
        "00c79270",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00785500",
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
      "007858d8",
      "DATA",
      [
        "storage",
        "00c7a240",
        null,
        "undefined *"
      ]
    ],
    [
      "007858dc",
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
- 007854f0 ["INT_ADD", "register:40f0:8", ["const:7854f0:8", "const:4:8"]]
- 007854f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007858cc ["INT_ADD", "register:40f0:8", ["const:7858cc:8", "const:4:8"]]
+ 007858cc ["CALL", null, ["callee:00c58f30:8"]]
- 007854f4 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 007858d0 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007854f8 ["COPY", "tmp:0:8", ["const:270:8"]]
- 007854f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007854f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007854f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-73ca3009f033b56442b2703ff62dc00f"></a>

### [`00785520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785520.md) → [`007858fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/007858fc.md) FUN_007858fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00785924",
      "incomplete_value": false,
      "site": "0078592c",
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
      "definition_site": "00785928",
      "incomplete_value": false,
      "site": "0078592c",
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
      "unmatched:00785538",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00785544",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00785914",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00785920",
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
- 00785550 ["INT_ADD", "register:40f0:8", ["const:785550:8", "const:4:8"]]
- 00785550 ["CALL", null, ["callee:0047d134:8"]]
+ 0078592c ["INT_ADD", "register:40f0:8", ["const:78592c:8", "const:4:8"]]
+ 0078592c ["CALL", null, ["callee:0047d134:8"]]
- 00785528 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00785528 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00785904 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00785904 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00785530 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00785530 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0078590c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 0078590c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-52019d17ab0563771fa48f6c8b94b323"></a>

### [`00785594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785594.md) → [`00785970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785970.md) FUN_00785970

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
      "unmatched:007855ac",
      "DATA",
      [
        "storage",
        "00c792f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007855b0",
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
      "00785988",
      "DATA",
      [
        "storage",
        "00c7a2c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0078598c",
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
- 007855a0 ["INT_ADD", "register:40f0:8", ["const:7855a0:8", "const:4:8"]]
- 007855a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0078597c ["INT_ADD", "register:40f0:8", ["const:78597c:8", "const:4:8"]]
+ 0078597c ["CALL", null, ["callee:00c58f30:8"]]
- 007855a4 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00785980 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007855a8 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 007855a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007855a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007855a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fc9e877542127963ef3ac97f617679e9"></a>

### [`007855d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007855d0.md) → [`007859ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/007859ac.md) FUN_007859ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00728840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/00728840.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00728bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00728/00728bf0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00785a88",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007856ac",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00785a70",
      "DATA",
      [
        "storage",
        "0039ab54",
        null,
        "qword"
      ]
    ],
    [
      "00785a88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00785a70",
      "DATA",
      [
        "storage",
        "0039ab54",
        null,
        "dword"
      ]
    ],
    [
      "00785a88",
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
- 007856ac ["INT_ADD", "register:40f0:8", ["const:7856ac:8", "const:4:8"]]
- 007856ac ["CALL", null, ["ram:47ad34:8"]]
+ 00785a88 ["INT_ADD", "register:40f0:8", ["const:785a88:8", "const:4:8"]]
+ 00785a88 ["CALL", null, ["ram:47b054:8"]]
- 00785604 ["INT_ADD", "register:40f0:8", ["const:785604:8", "const:4:8"]]
- 00785604 ["CALL", null, ["callee:008524fc:8"]]
+ 007859e0 ["INT_ADD", "register:40f0:8", ["const:7859e0:8", "const:4:8"]]
+ 007859e0 ["CALL", null, ["callee:008524fc:8"]]
- 00785614 ["INT_ADD", "register:40f0:8", ["const:785614:8", "const:4:8"]]
- 00785614 ["CALL", null, ["callee:008524fc:8"]]
+ 007859f0 ["INT_ADD", "register:40f0:8", ["const:7859f0:8", "const:4:8"]]
+ 007859f0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d00ecc23d230aad6e67f7e00b5412069"></a>

### [`007856f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007856f8.md) → [`00785ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785ad4.md) FUN_00785ad4

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
      "definition_site": "00785ae8",
      "incomplete_value": false,
      "site": "00785aec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:340:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078570c",
      "incomplete_value": false,
      "site": "00785710",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:370:8"
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
      "00785aec",
      "DATA",
      [
        "storage",
        "00c79370",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785aec",
      "DATA",
      [
        "storage",
        "00c7a340",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00785704 ["INT_ADD", "register:40f0:8", ["const:785704:8", "const:4:8"]]
- 00785704 ["CALL", null, ["callee:00c58f30:8"]]
+ 00785ae0 ["INT_ADD", "register:40f0:8", ["const:785ae0:8", "const:4:8"]]
+ 00785ae0 ["CALL", null, ["callee:00c58f30:8"]]
- 00785708 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00785ae4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078570c ["COPY", "tmp:0:8", ["const:370:8"]]
- 0078570c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078570c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078570c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00785ae8 ["COPY", "tmp:0:8", ["const:340:8"]]
+ 00785ae8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00785ae8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00785ae8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f0e58c29e6aac013d23041ae58890ea1"></a>

### [`00785734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785734.md) → [`00785b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785b10.md) FUN_00785b10

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
      "site": "00785b34",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00785758",
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
      "00785b34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00785b34",
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
- 00785758 ["INT_ADD", "register:40f0:8", ["const:785758:8", "const:4:8"]]
- 00785758 ["CALL", null, ["ram:47ad34:8"]]
+ 00785b34 ["INT_ADD", "register:40f0:8", ["const:785b34:8", "const:4:8"]]
+ 00785b34 ["CALL", null, ["ram:47b054:8"]]
- 00785764 ["INT_ADD", "register:40f0:8", ["const:785764:8", "const:4:8"]]
- 00785764 ["CALL", null, ["callee:0047d134:8"]]
+ 00785b40 ["INT_ADD", "register:40f0:8", ["const:785b40:8", "const:4:8"]]
+ 00785b40 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-d94f5a590b26281f8fdbbfe4bb55301c"></a>

### [`007857a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007857a4.md) → [`00785b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785b80.md) FUN_00785b80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0077a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077a/0077a470.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 2件 [`0077a84c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077a/0077a84c.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00785b8c",
      "incomplete_value": false,
      "site": "00785b90",
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
      "definition_site": "007857b0",
      "incomplete_value": false,
      "site": "007857b4",
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
      "00785b8c",
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
      "00785b8c",
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
- 007857b4 ["INT_ADD", "register:40f0:8", ["const:7857b4:8", "const:4:8"]]
- 007857b4 ["CALL", null, ["callee:00442c90:8"]]
+ 00785b90 ["INT_ADD", "register:40f0:8", ["const:785b90:8", "const:4:8"]]
+ 00785b90 ["CALL", null, ["callee:00442c90:8"]]
- 007857ac ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00785b88 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007857b0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007857b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007857b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007857b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00785b8c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00785b8c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00785b8c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00785b8c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-75852df3450e3ef7bbb49d56410d9bdb"></a>

### [`007857bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007857bc.md) → [`00785b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785b98.md) FUN_00785b98

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
      "definition_site": "00785bb8",
      "incomplete_value": false,
      "site": "00785bbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007857dc",
      "incomplete_value": false,
      "site": "007857e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
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
      "00785bbc",
      "DATA",
      [
        "storage",
        "00c793f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785bbc",
      "DATA",
      [
        "storage",
        "00c7a3c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007857d0 ["INT_ADD", "register:40f0:8", ["const:7857d0:8", "const:4:8"]]
- 007857d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00785bac ["INT_ADD", "register:40f0:8", ["const:785bac:8", "const:4:8"]]
+ 00785bac ["CALL", null, ["callee:00c58f30:8"]]
- 007857d8 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00785bb4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007857dc ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 007857dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007857dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007857dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00785bb8 ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 00785bb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00785bb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00785bb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-09312faa5bad3495f0c43cbac3b899f8"></a>

### [`007857f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007857f4.md) → [`00785bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785bd0.md) FUN_00785bd0

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
      "definition_site": "00785bd4",
      "incomplete_value": false,
      "site": "00785bd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007857f8",
      "incomplete_value": false,
      "site": "007857fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
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
      "00785bd8",
      "DATA",
      [
        "storage",
        "00c793f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785bd8",
      "DATA",
      [
        "storage",
        "00c7a3c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007857f4 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00785bd0 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007857f8 ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 007857f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007857f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007857f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00785bd4 ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 00785bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00785bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00785bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5414d6533bdcf17115d3bb4dccebe83b"></a>

### [`00785814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785814.md) → [`00785bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785bf0.md) FUN_00785bf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00785c14",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00785838",
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
      "00785c14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00785c14",
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
- 00785838 ["INT_ADD", "register:40f0:8", ["const:785838:8", "const:4:8"]]
- 00785838 ["CALL", null, ["ram:47ad34:8"]]
+ 00785c14 ["INT_ADD", "register:40f0:8", ["const:785c14:8", "const:4:8"]]
+ 00785c14 ["CALL", null, ["ram:47b054:8"]]
- 00785844 ["INT_ADD", "register:40f0:8", ["const:785844:8", "const:4:8"]]
- 00785844 ["CALL", null, ["callee:0047d134:8"]]
+ 00785c20 ["INT_ADD", "register:40f0:8", ["const:785c20:8", "const:4:8"]]
+ 00785c20 ["CALL", null, ["callee:0047d134:8"]]
- 0078585c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0078585c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00785c38 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00785c38 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-48d4c6e54b88583d001b93864cf5956a"></a>

### [`00785910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785910.md) → [`00785cec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785cec.md) FUN_00785cec

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
      "unmatched:00785934",
      "DATA",
      [
        "storage",
        "00c79470",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00785938",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078593c",
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
      "00785d10",
      "DATA",
      [
        "storage",
        "00c7a440",
        null,
        "undefined *"
      ]
    ],
    [
      "00785d14",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00785d18",
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
- 00785924 ["INT_ADD", "register:40f0:8", ["const:785924:8", "const:4:8"]]
- 00785924 ["CALL", null, ["callee:00c58f30:8"]]
+ 00785d00 ["INT_ADD", "register:40f0:8", ["const:785d00:8", "const:4:8"]]
+ 00785d00 ["CALL", null, ["callee:00c58f30:8"]]
- 0078592c ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00785d08 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 00785930 ["COPY", "tmp:0:8", ["const:470:8"]]
- 00785930 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00785930 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00785930 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b6b56e40d41be1880cea7e45ce9eff0d"></a>

### [`007859c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007859c4.md) → [`00785da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785da0.md) FUN_00785da0

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
      "definition_site": "00785db0",
      "incomplete_value": false,
      "site": "00785db4",
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
      "unmatched:007859c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007859c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007859e8",
      "DATA",
      [
        "storage",
        "00c794f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785da0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00785da4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00785dc4",
      "DATA",
      [
        "storage",
        "00c7a4c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007859d8 ["INT_ADD", "register:40f0:8", ["const:7859d8:8", "const:4:8"]]
- 007859d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00785db4 ["INT_ADD", "register:40f0:8", ["const:785db4:8", "const:4:8"]]
+ 00785db4 ["CALL", null, ["callee:00c58f30:8"]]
- 007859c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007859c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007859c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007859c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007859c8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007859c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-5f81bcc392c706e282db66c8a9521c3d"></a>

### [`00785a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785a14.md) → [`00785df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00785/00785df0.md) FUN_00785df0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802688.md) [`00806220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806220.md) [`008062fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/008062fc.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008035ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/008035ec.md) [`00807184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807184.md) [`00807260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807260.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.83% / 新版 86.83%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00785e2c",
      "incomplete_value": false,
      "site": "00785e38",
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
            "const:4e6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00785a50",
      "incomplete_value": false,
      "site": "00785a5c",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00785e70",
      "incomplete_value": true,
      "site": "00785e80",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00785e74",
      "incomplete_value": true,
      "site": "00785e80",
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
      "unmatched:00785a50",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00785af4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0080715c"
      ]
    ],
    [
      "00785ee0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00806220"
      ]
    ]
  ],
  "added": [
    [
      "00785e2c",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "00785ed0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008080c0"
      ]
    ],
    [
      "00785ee0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00807184"
      ]
    ]
  ]
}
~~~


~~~diff
- 00785a5c ["INT_ADD", "register:40f0:8", ["const:785a5c:8", "const:4:8"]]
- 00785a5c ["CALL", null, ["callee:00c59230:8"]]
+ 00785e38 ["INT_ADD", "register:40f0:8", ["const:785e38:8", "const:4:8"]]
+ 00785e38 ["CALL", null, ["callee:00c59230:8"]]
- 00785aa4 ["INT_ADD", "register:40f0:8", ["const:785aa4:8", "const:4:8"]]
- 00785aa4 ["CALL", null, ["callee:008087b4:8"]]
+ 00785e80 ["INT_ADD", "register:40f0:8", ["const:785e80:8", "const:4:8"]]
+ 00785e80 ["CALL", null, ["callee:008087b4:8"]]
- 00785b04 ["INT_ADD", "register:40f0:8", ["const:785b04:8", "const:4:8"]]
- 00785b04 ["CALL", null, ["ram:806220:8"]]
+ 00785ee0 ["INT_ADD", "register:40f0:8", ["const:785ee0:8", "const:4:8"]]
+ 00785ee0 ["CALL", null, ["ram:807184:8"]]
~~~


<a id="compare-c74177adc82d7470b524dc4daa358b3f"></a>

### [`00785cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785cd8.md) → [`007860b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/007860b4.md) _INIT_134

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.01% / 新版 74.01%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00785f34",
      "incomplete_value": true,
      "site": "00785f38",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e0:8"
              ]
            ]
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
      "definition_site": "00785f54",
      "incomplete_value": true,
      "site": "00785f58",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a0:8"
              ]
            ]
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
    "new": null,
    "old": {
      "definition_site": "00785f74",
      "incomplete_value": true,
      "site": "00785f78",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 13,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00785cdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00785ce0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00785ce4",
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
      "007860b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007860bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007860c0",
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
- 00785f38 ["INT_ADD", "register:40f0:8", ["const:785f38:8", "const:4:8"]]
- 00785f38 ["CALL", null, ["callee:00c58f50:8"]]
+ 00786314 ["INT_ADD", "register:40f0:8", ["const:786314:8", "const:4:8"]]
+ 00786314 ["CALL", null, ["callee:00c58f50:8"]]
- 00785f58 ["INT_ADD", "register:40f0:8", ["const:785f58:8", "const:4:8"]]
- 00785f58 ["CALL", null, ["callee:00c58f50:8"]]
+ 00786334 ["INT_ADD", "register:40f0:8", ["const:786334:8", "const:4:8"]]
+ 00786334 ["CALL", null, ["callee:00c58f50:8"]]
- 00785f78 ["INT_ADD", "register:40f0:8", ["const:785f78:8", "const:4:8"]]
- 00785f78 ["CALL", null, ["callee:00c58f50:8"]]
+ 00786354 ["INT_ADD", "register:40f0:8", ["const:786354:8", "const:4:8"]]
+ 00786354 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b10762f907d23b608a9bd20256b94e45"></a>

### [`00786068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786068.md) → [`00786444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786444.md) FUN_00786444

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00764b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764b24.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00764f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/00764f00.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 36.36% / 新版 36.36%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00786074",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00786450",
      "READ",
      [
        "storage",
        "002c4170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00786068 ["COPY", "register:4050:8", ["const:2c4000:8"]]
- 0078606c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:90:8"]]
- 0078606c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00786070 ["COPY", "register:4040:8", ["const:1:8"]]
~~~


<a id="compare-e5c4920dfd5da14e869398b62aa45b78"></a>

### [`00786094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786094.md) → [`00786470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786470.md) FUN_00786470

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) [`00787c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787c30.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.59% / 新版 95.59%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00786528",
      "incomplete_value": true,
      "site": "0078653c",
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
      "definition_site": "0078652c",
      "incomplete_value": true,
      "site": "0078653c",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "00786530",
      "incomplete_value": true,
      "site": "0078653c",
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
      "unmatched:00786108",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00786574"
      ]
    ]
  ],
  "added": [
    [
      "007864e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00786574"
      ]
    ]
  ]
}
~~~


~~~diff
- 00786160 ["INT_ADD", "register:40f0:8", ["const:786160:8", "const:4:8"]]
- 00786160 ["CALL", null, ["callee:00c590a0:8"]]
+ 0078653c ["INT_ADD", "register:40f0:8", ["const:78653c:8", "const:4:8"]]
+ 0078653c ["CALL", null, ["callee:00c590a0:8"]]
- 00786104 ["INT_RIGHT", "register:4050:8", ["register:4048:8", "const:3e:8"]]
- 00786108 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00786108 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
~~~


<a id="compare-801b6b8a4b0c91c2352765a2da77f2ed"></a>

### [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) → [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) FUN_00786580

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 16件 [`00786094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786094.md) [`00786444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786444.md) [`00786864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786864.md) [`00786c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786c00.md) [`00786d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786d2c.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 16件 [`00786470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786470.md) [`00786820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786820.md) [`00786c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786c40.md) [`00786fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786fdc.md) [`00787108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787108.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007865d8",
      "incomplete_value": true,
      "site": "007865e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "live",
            "register:40c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007861fc",
      "incomplete_value": true,
      "site": "00786208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
            ]
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
      "definition_site": "007865ec",
      "incomplete_value": true,
      "site": "007865f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "live",
            "register:40c0:8"
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
    "new": null,
    "old": {
      "definition_site": "00786240",
      "incomplete_value": true,
      "site": "0078624c",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:007861d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:007861ec",
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
      "007865ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "007865c8",
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
- 00786208 ["INT_ADD", "register:40f0:8", ["const:786208:8", "const:4:8"]]
- 00786208 ["CALL", null, ["callee:00802c00:8"]]
+ 007865e4 ["INT_ADD", "register:40f0:8", ["const:7865e4:8", "const:4:8"]]
+ 007865e4 ["CALL", null, ["callee:00802c00:8"]]
- 00786218 ["INT_ADD", "register:40f0:8", ["const:786218:8", "const:4:8"]]
- 00786218 ["CALL", null, ["callee:00802c4c:8"]]
+ 007865f4 ["INT_ADD", "register:40f0:8", ["const:7865f4:8", "const:4:8"]]
+ 007865f4 ["CALL", null, ["callee:00802c4c:8"]]
- 0078624c ["INT_ADD", "register:40f0:8", ["const:78624c:8", "const:4:8"]]
- 0078624c ["CALL", null, ["callee:00786820:8"]]
+ 00786628 ["INT_ADD", "register:40f0:8", ["const:786628:8", "const:4:8"]]
+ 00786628 ["CALL", null, ["callee:00786820:8"]]
~~~


<a id="compare-60cccb063f859c77bea208a30bbee4fb"></a>

### [`00786444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786444.md) → [`00786820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786820.md) FUN_00786820

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) · 呼出先 14件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`0078829c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078829c.md) [`007882a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007882a0.md) [`008b6f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f88.md)
- 新版 呼出元 1件 [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) · 呼出先 14件 [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00788678`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788678.md) [`0078867c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/0078867c.md) [`008b7f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f34.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 79.91% / 新版 79.91%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00786a90",
      "incomplete_value": false,
      "site": "00786a90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007866b4",
      "incomplete_value": false,
      "site": "007866b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:580:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00786938",
      "incomplete_value": true,
      "site": "0078693c",
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
            "const:50:8"
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
      "definition_site": "007865d8",
      "incomplete_value": true,
      "site": "007865e8",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:0078647c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078652c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a477cc"
      ]
    ],
    [
      "unmatched:00786544",
      "READ",
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
      "00786858",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00786908",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a477cc"
      ]
    ],
    [
      "00786920",
      "READ",
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
- 00786560 ["INT_ADD", "register:40f0:8", ["const:786560:8", "const:4:8"]]
- 00786560 ["CALL", null, ["callee:005d8fb8:8"]]
+ 0078693c ["INT_ADD", "register:40f0:8", ["const:78693c:8", "const:4:8"]]
+ 0078693c ["CALL", null, ["callee:005d8fb8:8"]]
- 007865e8 ["INT_ADD", "register:40f0:8", ["const:7865e8:8", "const:4:8"]]
- 007865e8 ["CALL", null, ["callee:00a47944:8"]]
+ 007869c4 ["INT_ADD", "register:40f0:8", ["const:7869c4:8", "const:4:8"]]
+ 007869c4 ["CALL", null, ["callee:00a47944:8"]]
- 00786730 ["INT_ADD", "register:40f0:8", ["const:786730:8", "const:4:8"]]
- 00786730 ["CALL", null, ["callee:005d8fb8:8"]]
+ 00786b0c ["INT_ADD", "register:40f0:8", ["const:786b0c:8", "const:4:8"]]
+ 00786b0c ["CALL", null, ["callee:005d8fb8:8"]]
~~~


<a id="compare-d47a6b95e35d052cf630d5f418b1bc83"></a>

### [`00786864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786864.md) → [`00786c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786c40.md) FUN_00786c40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) · 呼出先 13件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`0078840c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078840c.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) [`00a467d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a467d8.md) [`00a4691c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4691c.md)
- 新版 呼出元 1件 [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) · 呼出先 13件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`007887e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/007887e8.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md) [`00a477cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a477cc.md) [`00a47910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47910.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.03% / 新版 81.03%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 2件, `store_value` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00786d74",
      "incomplete_value": true,
      "site": "00786d78",
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
      "definition_site": "00786998",
      "incomplete_value": true,
      "site": "0078699c",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00786ecc",
      "incomplete_value": true,
      "site": "00786ed0",
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
      "definition_site": "00786af0",
      "incomplete_value": true,
      "site": "00786af4",
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
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078689c",
      "incomplete_value": true,
      "site": "007868c4",
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
            "const:a8:8"
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
      "unmatched:007868a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786958",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00786960",
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
      "00786c84",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00786d34",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "00786d3c",
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
- 007868c4 ["INT_ADD", "register:40f0:8", ["const:7868c4:8", "const:4:8"]]
- 007868c4 ["CALL", null, ["callee:00a47944:8"]]
+ 00786ca0 ["INT_ADD", "register:40f0:8", ["const:786ca0:8", "const:4:8"]]
+ 00786ca0 ["CALL", null, ["callee:00a47944:8"]]
- 00786928 ["INT_ADD", "register:40f0:8", ["const:786928:8", "const:4:8"]]
- 00786928 ["CALL", null, ["callee:00a47944:8"]]
+ 00786d04 ["INT_ADD", "register:40f0:8", ["const:786d04:8", "const:4:8"]]
+ 00786d04 ["CALL", null, ["callee:00a47944:8"]]
- 00786a80 ["INT_ADD", "register:40f0:8", ["const:786a80:8", "const:4:8"]]
- 00786a80 ["CALL", null, ["callee:008b7ff0:8"]]
+ 00786e5c ["INT_ADD", "register:40f0:8", ["const:786e5c:8", "const:4:8"]]
+ 00786e5c ["CALL", null, ["callee:008b7ff0:8"]]
~~~


<a id="compare-26d735d22d10fda75f1404b0bb4bdc8f"></a>

### [`00786c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786c00.md) → [`00786fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786fdc.md) FUN_00786fdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 8件 [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00a46b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46b9c.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 2件 [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) [`00787c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787c30.md) · 呼出先 8件 [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`00a47b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47b90.md) [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.39% / 新版 89.39%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007870b4",
      "incomplete_value": true,
      "site": "007870b8",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00786c04",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786c08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786c0c",
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
      "00786fe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00786fe4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00786fe8",
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
- 00786cdc ["INT_ADD", "register:40f0:8", ["const:786cdc:8", "const:4:8"]]
- 00786cdc ["CALL", null, ["callee:00c58f20:8"]]
+ 007870b8 ["INT_ADD", "register:40f0:8", ["const:7870b8:8", "const:4:8"]]
+ 007870b8 ["CALL", null, ["callee:00c58f20:8"]]
- 00786c00 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 00786c04 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00786c04 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00786c04 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00786c04 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ac1e0709cf08061f4809f2395af287f5"></a>

### [`00786d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786d2c.md) → [`00787108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787108.md) FUN_00787108

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) · 呼出先 16件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00788584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788584.md) [`00788588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788588.md) [`008b6f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f1c.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)
- 新版 呼出元 1件 [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) · 呼出先 16件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00788960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788960.md) [`00788964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788964.md) [`008b7ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ec8.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 57.08% / 新版 57.08%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 36件, `unresolved_store_alignment` 40件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00786d88",
      "incomplete_value": false,
      "site": "00786d8c",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "00786d84",
      "incomplete_value": true,
      "site": "00786d8c",
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
      "definition_site": "00787190",
      "incomplete_value": true,
      "site": "007871a0",
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
      "unmatched:00786d7c",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786d80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078716c"
      ]
    ],
    [
      "unmatched:00786e08",
      "READ",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00787158",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "0078715c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078716c"
      ]
    ],
    [
      "007871e4",
      "READ",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00786d8c ["INT_ADD", "register:40f0:8", ["const:786d8c:8", "const:4:8"]]
- 00786d8c ["CALL", null, ["callee:00c54d60:8"]]
+ 00787168 ["INT_ADD", "register:40f0:8", ["const:787168:8", "const:4:8"]]
+ 00787168 ["CALL", null, ["callee:00c54d60:8"]]
- 00786dc4 ["INT_ADD", "register:40f0:8", ["const:786dc4:8", "const:4:8"]]
- 00786dc4 ["CALL", null, ["callee:00a47944:8"]]
+ 007871a0 ["INT_ADD", "register:40f0:8", ["const:7871a0:8", "const:4:8"]]
+ 007871a0 ["CALL", null, ["callee:00a47944:8"]]
- 00786dd4 ["INT_ADD", "register:40f0:8", ["const:786dd4:8", "const:4:8"]]
- 00786dd4 ["CALL", null, ["callee:00a47c74:8"]]
+ 007871b0 ["INT_ADD", "register:40f0:8", ["const:7871b0:8", "const:4:8"]]
+ 007871b0 ["CALL", null, ["callee:00a47c74:8"]]
~~~


<a id="compare-7be32501bb74cf9083e0b312a77da342"></a>

### [`007874d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/007874d8.md) → [`007878b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/007878b4.md) FUN_007878b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 4件 [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)
- 新版 呼出元 2件 [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) [`00787c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787c30.md) · 呼出先 4件 [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`00a47938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47938.md) [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.11% / 新版 92.11%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007874e0",
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
      "007878bc",
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
- 007874e0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 007874e0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 007874e0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 007874e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 007874e4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0078750c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0078750c ["COPY", "tmp:1:4", ["register:4058:4"]]
- 0078750c ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 0078750c ["COPY", "tmp:1:4", ["register:4050:4"]]
~~~


<a id="compare-ead8c1bbdfd1ec98ea1795a5f009a534"></a>

### [`00787570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787570.md) → [`0078794c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/0078794c.md) FUN_0078794c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802688.md) [`00806220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806220.md) [`008062fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/008062fc.md)
- 新版 呼出元 2件 [`00786580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786580.md) [`00787c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787c30.md) · 呼出先 11件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008035ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/008035ec.md) [`00807184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807184.md) [`00807260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/00807260.md)

変更の種類 call, call_argument_candidate, call_count, call_target, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.28% / 新版 93.28%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078759c",
      "incomplete_value": true,
      "site": "007875a8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4010:4"
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
      "site": "007879d8",
      "value": [
        "leaf",
        "ram:807184:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007875fc",
      "value": [
        "leaf",
        "ram:806220:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00787aa0",
      "value": [
        "leaf",
        "ram:807260:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007876c4",
      "value": [
        "leaf",
        "ram:8062fc:8"
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
      "unmatched:007875ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0080715c"
      ]
    ],
    [
      "007879d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00806220"
      ]
    ],
    [
      "00787aa0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008062fc"
      ]
    ]
  ],
  "added": [
    [
      "007879c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008080c0"
      ]
    ],
    [
      "007879d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00807184"
      ]
    ],
    [
      "00787aa0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00807260"
      ]
    ]
  ]
}
~~~


~~~diff
- 007875a8 ["INT_ADD", "register:40f0:8", ["const:7875a8:8", "const:4:8"]]
- 007875a8 ["CALL", null, ["callee:00801334:8"]]
+ 00787984 ["INT_ADD", "register:40f0:8", ["const:787984:8", "const:4:8"]]
+ 00787984 ["CALL", null, ["callee:00801334:8"]]
- 007875fc ["INT_ADD", "register:40f0:8", ["const:7875fc:8", "const:4:8"]]
- 007875fc ["CALL", null, ["ram:806220:8"]]
+ 007879d8 ["INT_ADD", "register:40f0:8", ["const:7879d8:8", "const:4:8"]]
+ 007879d8 ["CALL", null, ["ram:807184:8"]]
- 007876c4 ["INT_ADD", "register:40f0:8", ["const:7876c4:8", "const:4:8"]]
- 007876c4 ["CALL", null, ["ram:8062fc:8"]]
+ 00787aa0 ["INT_ADD", "register:40f0:8", ["const:787aa0:8", "const:4:8"]]
+ 00787aa0 ["CALL", null, ["ram:807260:8"]]
~~~


<a id="compare-6e674428a66678f39ca3d0a33869b7bd"></a>

### [`00787790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787790.md) → [`00787b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787b6c.md) FUN_00787b6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`008b894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b894c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 53.06% / 新版 53.06%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007877ac",
      "READ",
      [
        "storage",
        "00ca3fdc",
        null,
        "undefined4"
      ]
    ],
    [
      "00787b98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:007877cc"
      ]
    ],
    [
      "unmatched:007877c8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b894c"
      ]
    ]
  ],
  "added": [
    [
      "00787b88",
      "READ",
      [
        "storage",
        "00ca4fac",
        null,
        "undefined4"
      ]
    ],
    [
      "00787b98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00787ba8"
      ]
    ],
    [
      "00787ba4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b894c"
      ]
    ]
  ]
}
~~~


~~~diff
- 007877a0 ["COPY", "register:4040:8", ["const:ca3000:8"]]
+ 00787b7c ["COPY", "register:4040:8", ["const:ca4000:8"]]
- 007877ac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fdc:8"]]
- 007877ac ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 007877ac ["INT_ZEXT", "register:40a0:8", ["tmp:1:4"]]
- 007877b8 ["INT_ADD", "register:40f0:8", ["const:7877b8:8", "const:4:8"]]
- 007877b8 ["CALL", null, ["callee:008b89cc:8"]]
+ 00787b94 ["INT_ADD", "register:40f0:8", ["const:787b94:8", "const:4:8"]]
+ 00787b94 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-7f39443709062f3da8ece25c0cd43bf1"></a>

### [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) → [`00787c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787c30.md) FUN_00787c30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00788410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788410.md) · 呼出先 10件 [`00786094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786094.md) [`00786c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786c00.md) [`007874d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/007874d8.md) [`00787570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787570.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md)
- 新版 呼出元 1件 [`007887ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/007887ec.md) · 呼出先 10件 [`00786470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786470.md) [`00786fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786fdc.md) [`007878b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/007878b4.md) [`0078794c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/0078794c.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.37% / 新版 98.37%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007878d0",
      "incomplete_value": true,
      "site": "007878d4",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "007878cc",
      "incomplete_value": true,
      "site": "007878d4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_RIGHT",
            "4",
            [
              [
                "live",
                "register:4048:4"
              ],
              [
                "leaf",
                "const:1f:4"
              ]
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
    "new": null,
    "old": {
      "definition_site": "007878d8",
      "incomplete_value": true,
      "site": "007878dc",
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
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 007878d4 ["INT_ADD", "register:40f0:8", ["const:7878d4:8", "const:4:8"]]
- 007878d4 ["CALL", null, ["callee:007878b4:8"]]
+ 00787cb0 ["INT_ADD", "register:40f0:8", ["const:787cb0:8", "const:4:8"]]
+ 00787cb0 ["CALL", null, ["callee:007878b4:8"]]
- 007878dc ["INT_ADD", "register:40f0:8", ["const:7878dc:8", "const:4:8"]]
- 007878dc ["CALL", null, ["callee:00801334:8"]]
+ 00787cb8 ["INT_ADD", "register:40f0:8", ["const:787cb8:8", "const:4:8"]]
+ 00787cb8 ["CALL", null, ["callee:00801334:8"]]
- 00787948 ["INT_ADD", "register:40f0:8", ["const:787948:8", "const:4:8"]]
- 00787948 ["CALL", null, ["callee:0078794c:8"]]
+ 00787d24 ["INT_ADD", "register:40f0:8", ["const:787d24:8", "const:4:8"]]
+ 00787d24 ["CALL", null, ["callee:0078794c:8"]]
~~~


<a id="compare-846a03ce43f0520cbc6c236a69143094"></a>

### [`00787a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787a40.md) → [`00787e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787e1c.md) FUN_00787e1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00787b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787b78.md) [`0078858c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078858c.md) · 呼出先 3件 [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 3件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00787f54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787f54.md) [`00788968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788968.md) · 呼出先 3件 [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b7f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f44.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 29.49% / 新版 29.49%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 17件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00787a5c",
      "READ",
      [
        "storage",
        "00ca3fdc",
        null,
        "undefined4"
      ]
    ],
    [
      "00787e4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00787a9c"
      ]
    ],
    [
      "unmatched:00787a7c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b89cc"
      ]
    ]
  ],
  "added": [
    [
      "00787e38",
      "READ",
      [
        "storage",
        "00ca4fac",
        null,
        "undefined4"
      ]
    ],
    [
      "00787e4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00787e78"
      ]
    ],
    [
      "00787e58",
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
- 00787a50 ["COPY", "register:4040:8", ["const:ca3000:8"]]
+ 00787e2c ["COPY", "register:4040:8", ["const:ca4000:8"]]
- 00787a5c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fdc:8"]]
- 00787a5c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00787a5c ["INT_ZEXT", "register:40a8:8", ["tmp:1:4"]]
- 00787a6c ["INT_ADD", "register:40f0:8", ["const:787a6c:8", "const:4:8"]]
- 00787a6c ["CALL", null, ["callee:008b89cc:8"]]
+ 00787e48 ["INT_ADD", "register:40f0:8", ["const:787e48:8", "const:4:8"]]
+ 00787e48 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-7ed190e3a8d90c33b9bc5f0b3cd2a96e"></a>

### [`00787c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787c58.md) → [`00788034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788034.md) FUN_00788034

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 8件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 8件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.33% / 新版 96.33%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007880b4",
      "incomplete_value": true,
      "site": "007880bc",
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
      "definition_site": "00787cd8",
      "incomplete_value": true,
      "site": "00787ce0",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007880d8",
      "incomplete_value": true,
      "site": "007880dc",
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
      "definition_site": "00787cfc",
      "incomplete_value": true,
      "site": "00787d00",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007880f8",
      "incomplete_value": true,
      "site": "007880fc",
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
      "definition_site": "00787d1c",
      "incomplete_value": true,
      "site": "00787d20",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007880b4",
      "READ",
      [
        "storage",
        "00ca3fdc",
        null,
        "undefined4"
      ]
    ],
    [
      "007880d8",
      "READ",
      [
        "storage",
        "00ca3fe0",
        null,
        "undefined4"
      ]
    ],
    [
      "007880f8",
      "READ",
      [
        "storage",
        "00ca3fe4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "007880b4",
      "READ",
      [
        "storage",
        "00ca4fac",
        null,
        "undefined4"
      ]
    ],
    [
      "007880d8",
      "READ",
      [
        "storage",
        "00ca4fb0",
        null,
        "undefined4"
      ]
    ],
    [
      "007880f8",
      "READ",
      [
        "storage",
        "00ca4fb4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00787ce0 ["INT_ADD", "register:40f0:8", ["const:787ce0:8", "const:4:8"]]
- 00787ce0 ["CALL", null, ["callee:008b89cc:8"]]
+ 007880bc ["INT_ADD", "register:40f0:8", ["const:7880bc:8", "const:4:8"]]
+ 007880bc ["CALL", null, ["callee:008b89cc:8"]]
- 00787d00 ["INT_ADD", "register:40f0:8", ["const:787d00:8", "const:4:8"]]
- 00787d00 ["CALL", null, ["callee:008b89cc:8"]]
+ 007880dc ["INT_ADD", "register:40f0:8", ["const:7880dc:8", "const:4:8"]]
+ 007880dc ["CALL", null, ["callee:008b89cc:8"]]
- 00787d20 ["INT_ADD", "register:40f0:8", ["const:787d20:8", "const:4:8"]]
- 00787d20 ["CALL", null, ["callee:008b89cc:8"]]
+ 007880fc ["INT_ADD", "register:40f0:8", ["const:7880fc:8", "const:4:8"]]
+ 007880fc ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-3d515e0620f5a4696aa342424d3bffcc"></a>

### [`007880b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007880b8.md) → [`00788494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788494.md) FUN_00788494

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00764b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764b24.md) · 呼出先 2件 [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00764f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/00764f00.md) · 呼出先 2件 [`0057c208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057c/0057c208.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.20% / 新版 90.20%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00788114",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078813c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00788528"
      ]
    ],
    [
      "unmatched:00788120",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "007884f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00788518",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00788528"
      ]
    ],
    [
      "007884fc",
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
- 007880f4 ["COPY", "register:0:8", ["register:4048:8"]]
- 007880f4 ["INT_ADD", "register:40f0:8", ["const:7880f4:8", "const:4:8"]]
- 007880f4 ["CALLIND", null, ["register:0:8"]]
+ 007884d0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007884d0 ["INT_ADD", "register:40f0:8", ["const:7884d0:8", "const:4:8"]]
+ 007884d0 ["CALLIND", null, ["register:0:8"]]
- 007880fc ["BRANCH", null, ["local:b5:8"]]
+ 007884d8 ["BRANCH", null, ["local:b7:8"]]
- 00788104 ["BRANCH", null, ["local:b5:8"]]
+ 007884e0 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-c42deb1fca0168d3ac210775f4e84ee7"></a>

### [`00788184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788184.md) → [`00788560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788560.md) FUN_00788560

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00764b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764b24.md) · 呼出先 2件 [`0078880c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078880c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00764f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/00764f00.md) · 呼出先 2件 [`00788be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788be8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007881f0",
      "incomplete_value": true,
      "site": "007881fc",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:007881c0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00788228",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0078859c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00788604",
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
- 007881fc ["INT_ADD", "register:40f0:8", ["const:7881fc:8", "const:4:8"]]
- 007881fc ["CALL", null, ["callee:00788be8:8"]]
+ 007885d8 ["INT_ADD", "register:40f0:8", ["const:7885d8:8", "const:4:8"]]
+ 007885d8 ["CALL", null, ["callee:00788be8:8"]]
- 007881a8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 007881a8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00788584 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00788584 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 007881b0 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 0078858c ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-5851accd5387e5f86598d3b35fcbeaff"></a>

### [`00788254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788254.md) → [`00788630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788630.md) FUN_00788630

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
      "unmatched:00788278",
      "DATA",
      [
        "storage",
        "00c79580",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078827c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00788280",
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
      "00788654",
      "DATA",
      [
        "storage",
        "00c7a550",
        null,
        "undefined *"
      ]
    ],
    [
      "00788658",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078865c",
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
- 00788268 ["INT_ADD", "register:40f0:8", ["const:788268:8", "const:4:8"]]
- 00788268 ["CALL", null, ["callee:00c58f30:8"]]
+ 00788644 ["INT_ADD", "register:40f0:8", ["const:788644:8", "const:4:8"]]
+ 00788644 ["CALL", null, ["callee:00c58f30:8"]]
- 00788270 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078864c ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 00788274 ["COPY", "tmp:0:8", ["const:580:8"]]
- 00788274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00788274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00788274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0cfebc05d7708a5c20837e1b2973109"></a>

### [`00788288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788288.md) → [`00788664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788664.md) FUN_00788664

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
      "definition_site": "00788670",
      "incomplete_value": false,
      "site": "00788670",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00788294",
      "incomplete_value": false,
      "site": "00788294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:580:8"
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
      "00788670",
      "DATA",
      [
        "storage",
        "00c79580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00788670",
      "DATA",
      [
        "storage",
        "00c7a550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078828c ["COPY", "register:4048:8", ["const:c79000:8"]]
+ 00788668 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 00788290 ["COPY", "tmp:0:8", ["const:580:8"]]
- 00788290 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00788290 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00788290 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078866c ["COPY", "tmp:0:8", ["const:550:8"]]
+ 0078866c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078866c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078866c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1761a3a9b3c45230bc0bb03633dbaef9"></a>

### [`007882a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007882a4.md) → [`00788680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788680.md) FUN_00788680

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.74% / 新版 90.74%

優先判定に残った影響 `call_target` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788708",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078832c",
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
      "site": "00788714",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788338",
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
      "unmatched:007882a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007882a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00788708",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00788680",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00788684",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00788708",
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
- 0078832c ["INT_ADD", "register:40f0:8", ["const:78832c:8", "const:4:8"]]
- 0078832c ["CALL", null, ["ram:47ad34:8"]]
+ 00788708 ["INT_ADD", "register:40f0:8", ["const:788708:8", "const:4:8"]]
+ 00788708 ["CALL", null, ["ram:47b054:8"]]
- 00788338 ["INT_ADD", "register:40f0:8", ["const:788338:8", "const:4:8"]]
- 00788338 ["CALL", null, ["ram:47ad34:8"]]
+ 00788714 ["INT_ADD", "register:40f0:8", ["const:788714:8", "const:4:8"]]
+ 00788714 ["CALL", null, ["ram:47b054:8"]]
- 007882a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007882a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007882a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007882a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-adde69b39989682f33e7af87f3535aa2"></a>

### [`007883a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007883a8.md) → [`00788784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788784.md) FUN_00788784

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
      "definition_site": "007887a8",
      "incomplete_value": false,
      "site": "007887ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007883cc",
      "incomplete_value": false,
      "site": "007883d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:600:8"
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
      "007887ac",
      "DATA",
      [
        "storage",
        "00c79600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007887ac",
      "DATA",
      [
        "storage",
        "00c7a5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007883bc ["INT_ADD", "register:40f0:8", ["const:7883bc:8", "const:4:8"]]
- 007883bc ["CALL", null, ["callee:00c58f30:8"]]
+ 00788798 ["INT_ADD", "register:40f0:8", ["const:788798:8", "const:4:8"]]
+ 00788798 ["CALL", null, ["callee:00c58f30:8"]]
- 007883c8 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 007887a4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007883cc ["COPY", "tmp:0:8", ["const:600:8"]]
- 007883cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007883cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007883cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007887a8 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 007887a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007887a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007887a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2644db6a1e25141937437cceb095aaf4"></a>

### [`007883e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007883e8.md) → [`007887c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/007887c4.md) FUN_007887c4

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
      "definition_site": "007887c8",
      "incomplete_value": false,
      "site": "007887cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007883ec",
      "incomplete_value": false,
      "site": "007883f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:600:8"
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
      "007887cc",
      "DATA",
      [
        "storage",
        "00c79600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007887cc",
      "DATA",
      [
        "storage",
        "00c7a5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007883e8 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 007887c4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 007883ec ["COPY", "tmp:0:8", ["const:600:8"]]
- 007883ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007883ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007883ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007887c8 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 007887c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007887c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007887c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a64fbbf4380326bb67680909cc2f6e26"></a>

### [`00788410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788410.md) → [`007887ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/007887ec.md) FUN_007887ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00787c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787c30.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47920.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078887c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007884a0",
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
      "site": "00788888",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007884ac",
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
      "0078887c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00788888",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0078887c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00788888",
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
- 007884a0 ["INT_ADD", "register:40f0:8", ["const:7884a0:8", "const:4:8"]]
- 007884a0 ["CALL", null, ["ram:47ad34:8"]]
+ 0078887c ["INT_ADD", "register:40f0:8", ["const:78887c:8", "const:4:8"]]
+ 0078887c ["CALL", null, ["ram:47b054:8"]]
- 007884ac ["INT_ADD", "register:40f0:8", ["const:7884ac:8", "const:4:8"]]
- 007884ac ["CALL", null, ["ram:47ad34:8"]]
+ 00788888 ["INT_ADD", "register:40f0:8", ["const:788888:8", "const:4:8"]]
+ 00788888 ["CALL", null, ["ram:47b054:8"]]
- 00788430 ["INT_ADD", "register:40f0:8", ["const:788430:8", "const:4:8"]]
- 00788430 ["CALL", null, ["callee:008b7ea8:8"]]
+ 0078880c ["INT_ADD", "register:40f0:8", ["const:78880c:8", "const:4:8"]]
+ 0078880c ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-88212b77437aa95c53fd85c1849eb249"></a>

### [`00788524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788524.md) → [`00788900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788900.md) FUN_00788900

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
      "definition_site": "00788924",
      "incomplete_value": false,
      "site": "00788928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00788548",
      "incomplete_value": false,
      "site": "0078854c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
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
      "00788928",
      "DATA",
      [
        "storage",
        "00c79680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00788928",
      "DATA",
      [
        "storage",
        "00c7a650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00788538 ["INT_ADD", "register:40f0:8", ["const:788538:8", "const:4:8"]]
- 00788538 ["CALL", null, ["callee:00c58f30:8"]]
+ 00788914 ["INT_ADD", "register:40f0:8", ["const:788914:8", "const:4:8"]]
+ 00788914 ["CALL", null, ["callee:00c58f30:8"]]
- 00788544 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00788920 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 00788548 ["COPY", "tmp:0:8", ["const:680:8"]]
- 00788548 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00788548 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00788548 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00788924 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 00788924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00788924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00788924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eaa24ea3834a55a0b024b6248c0f8a10"></a>

### [`00788564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788564.md) → [`00788940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788940.md) FUN_00788940

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
      "definition_site": "00788944",
      "incomplete_value": false,
      "site": "00788948",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00788568",
      "incomplete_value": false,
      "site": "0078856c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
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
      "00788948",
      "DATA",
      [
        "storage",
        "00c79680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00788948",
      "DATA",
      [
        "storage",
        "00c7a650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00788564 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 00788940 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 00788568 ["COPY", "tmp:0:8", ["const:680:8"]]
- 00788568 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00788568 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00788568 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00788944 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 00788944 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00788944 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00788944 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f77756df1c9cd67af15cb148a9b4dc42"></a>

### [`0078858c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078858c.md) → [`00788968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788968.md) FUN_00788968

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00787a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787a40.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00787e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787e1c.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.00% / 新版 94.00%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788ae0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788704",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00788afc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788720",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00788ae0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00788afc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00788ae0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00788afc",
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
- 00788704 ["INT_ADD", "register:40f0:8", ["const:788704:8", "const:4:8"]]
- 00788704 ["CALL", null, ["ram:47ad34:8"]]
+ 00788ae0 ["INT_ADD", "register:40f0:8", ["const:788ae0:8", "const:4:8"]]
+ 00788ae0 ["CALL", null, ["ram:47b054:8"]]
- 00788720 ["INT_ADD", "register:40f0:8", ["const:788720:8", "const:4:8"]]
- 00788720 ["CALL", null, ["ram:47ad34:8"]]
+ 00788afc ["INT_ADD", "register:40f0:8", ["const:788afc:8", "const:4:8"]]
+ 00788afc ["CALL", null, ["ram:47b054:8"]]
- 007885c8 ["INT_ADD", "register:40f0:8", ["const:7885c8:8", "const:4:8"]]
- 007885c8 ["CALL", null, ["callee:008b7ea8:8"]]
+ 007889a4 ["INT_ADD", "register:40f0:8", ["const:7889a4:8", "const:4:8"]]
+ 007889a4 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-51db1033e943c3fe40a56e5bd916dab7"></a>

### [`0078880c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078880c.md) → [`00788be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788be8.md) FUN_00788be8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00788184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788184.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00788560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788560.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.26% / 新版 93.26%

優先判定に残った影響 `unresolved_call_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00788878",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:007888a8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:007888ec",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00788c54",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00788c84",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00788cc8",
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
- 00788850 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 00788c2c ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
- 00788878 ["COPY", "register:0:8", ["register:4040:8"]]
- 00788878 ["INT_ADD", "register:40f0:8", ["const:788878:8", "const:4:8"]]
- 00788878 ["CALLIND", null, ["register:0:8"]]
- 0078887c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:20:8"]]
- 0078887c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a9608bb7d779cd3fb80c27e52de19d98"></a>

### [`00788974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788974.md) → [`00788d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788d50.md) _INIT_135

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.75% / 新版 71.75%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00788eac",
      "incomplete_value": false,
      "site": "00788eb0",
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
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00788ad0",
      "incomplete_value": true,
      "site": "00788ad4",
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
    "new": {
      "definition_site": "00788e9c",
      "incomplete_value": false,
      "site": "00788eb0",
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
                "const:ee8:8"
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
      "definition_site": "00788ac0",
      "incomplete_value": true,
      "site": "00788ad4",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00788f70",
      "incomplete_value": false,
      "site": "00788f84",
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
      "definition_site": "00788b94",
      "incomplete_value": false,
      "site": "00788ba8",
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
      "unmatched:007889a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:007889b0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007889cc",
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
      "00788d80",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00788d8c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00788da8",
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
- 00788ad4 ["INT_ADD", "register:40f0:8", ["const:788ad4:8", "const:4:8"]]
- 00788ad4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00788eb0 ["INT_ADD", "register:40f0:8", ["const:788eb0:8", "const:4:8"]]
+ 00788eb0 ["CALL", null, ["callee:0043bb58:8"]]
- 00788ba8 ["INT_ADD", "register:40f0:8", ["const:788ba8:8", "const:4:8"]]
- 00788ba8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00788f84 ["INT_ADD", "register:40f0:8", ["const:788f84:8", "const:4:8"]]
+ 00788f84 ["CALL", null, ["callee:00c58ed0:8"]]
- 00788990 ["COPY", "tmp:0:8", ["const:8:8"]]
- 00788990 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00788990 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00788990 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-9747f1506a3338c67685326588e0ea45"></a>

### [`00788d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788d04.md) → [`007890e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00789/007890e0.md) FUN_007890e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 44件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006064c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/006064c8.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 44件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00606878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606878.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.32% / 新版 75.32%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 42件, `unresolved_call_alignment` 16件, `unresolved_store_alignment` 25件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00789eb8",
      "incomplete_value": false,
      "site": "00789eb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00789adc",
      "incomplete_value": false,
      "site": "00789adc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "ordinal": 114,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00788d44",
      "incomplete_value": false,
      "site": "00788d58",
      "value": [
        "leaf",
        "const:470:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00789168",
      "incomplete_value": false,
      "site": "0078917c",
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
      "definition_site": "00788d8c",
      "incomplete_value": false,
      "site": "00788da0",
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
      "unmatched:00788d48",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00788d4c",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00788d50",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00789124",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00789128",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "0078912c",
      "WRITE",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00788d58 ["INT_ADD", "register:40f0:8", ["const:788d58:8", "const:4:8"]]
- 00788d58 ["CALL", null, ["callee:00c58f30:8"]]
+ 00789134 ["INT_ADD", "register:40f0:8", ["const:789134:8", "const:4:8"]]
+ 00789134 ["CALL", null, ["callee:00c58f30:8"]]
- 00788da0 ["INT_ADD", "register:40f0:8", ["const:788da0:8", "const:4:8"]]
- 00788da0 ["CALL", null, ["callee:00c596b0:8"]]
+ 0078917c ["INT_ADD", "register:40f0:8", ["const:78917c:8", "const:4:8"]]
+ 0078917c ["CALL", null, ["callee:00c596b0:8"]]
- 00788f20 ["INT_ADD", "register:40f0:8", ["const:788f20:8", "const:4:8"]]
- 00788f20 ["CALL", null, ["callee:00728124:8"]]
+ 007892fc ["INT_ADD", "register:40f0:8", ["const:7892fc:8", "const:4:8"]]
+ 007892fc ["CALL", null, ["callee:00728124:8"]]
~~~


<a id="compare-e15a810c1230a51bd1a52712eea9ace6"></a>

### [`00789ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789ca8.md) → [`0078a084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a084.md) FUN_0078a084

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 13件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0067676c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/0067676c.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 13件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`00676b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676b1c.md) [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.00% / 新版 99.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078a1d4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00789df8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "0078a0c8",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "0078a120",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "0078a1d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0078a0c8",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "0078a120",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "0078a1d4",
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
- 00789df8 ["INT_ADD", "register:40f0:8", ["const:789df8:8", "const:4:8"]]
- 00789df8 ["CALL", null, ["ram:47ad34:8"]]
+ 0078a1d4 ["INT_ADD", "register:40f0:8", ["const:78a1d4:8", "const:4:8"]]
+ 0078a1d4 ["CALL", null, ["ram:47b054:8"]]
- 00789ce8 ["INT_ADD", "register:40f0:8", ["const:789ce8:8", "const:4:8"]]
- 00789ce8 ["CALL", null, ["callee:00ac9e40:8"]]
+ 0078a0c4 ["INT_ADD", "register:40f0:8", ["const:78a0c4:8", "const:4:8"]]
+ 0078a0c4 ["CALL", null, ["callee:00ac9e40:8"]]
- 00789d08 ["INT_ADD", "register:40f0:8", ["const:789d08:8", "const:4:8"]]
- 00789d08 ["CALL", null, ["callee:008b88dc:8"]]
+ 0078a0e4 ["INT_ADD", "register:40f0:8", ["const:78a0e4:8", "const:4:8"]]
+ 0078a0e4 ["CALL", null, ["callee:008b88dc:8"]]
~~~


<a id="compare-740814ad4b7acd8138886557da812067"></a>

### [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) → [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) FUN_0078a214

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 64件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b3c.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 64件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e5c.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.62% / 新版 85.62%

優先判定に残った影響 `call_argument_candidate` 43件, `store_condition` 24件, `unresolved_branch_alignment` 28件, `unresolved_call_alignment` 20件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0078a25c",
      "incomplete_value": true,
      "site": "0078a25c",
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
      "definition_site": "00789e80",
      "incomplete_value": true,
      "site": "00789e80",
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
      "definition_site": "0078a26c",
      "incomplete_value": false,
      "site": "0078a280",
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
      "definition_site": "00789e90",
      "incomplete_value": false,
      "site": "00789ea4",
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
      "definition_site": "0078a274",
      "incomplete_value": false,
      "site": "0078a280",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00789e98",
      "incomplete_value": false,
      "site": "00789ea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
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
      "0078a258",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0078a26c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0078a274",
      "PARAM",
      [
        "storage",
        "00c796f0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0078a258",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0078a26c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0078a274",
      "PARAM",
      [
        "storage",
        "00c7a6c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00789ea4 ["INT_ADD", "register:40f0:8", ["const:789ea4:8", "const:4:8"]]
- 00789ea4 ["CALL", null, ["callee:00c596b0:8"]]
+ 0078a280 ["INT_ADD", "register:40f0:8", ["const:78a280:8", "const:4:8"]]
+ 0078a280 ["CALL", null, ["callee:00c596b0:8"]]
- 0078a410 ["INT_ADD", "register:40f0:8", ["const:78a410:8", "const:4:8"]]
- 0078a410 ["CALL", null, ["callee:00470440:8"]]
+ 0078a7ec ["INT_ADD", "register:40f0:8", ["const:78a7ec:8", "const:4:8"]]
+ 0078a7ec ["CALL", null, ["callee:00470440:8"]]
- 0078a424 ["INT_ADD", "register:40f0:8", ["const:78a424:8", "const:4:8"]]
- 0078a424 ["CALL", null, ["callee:0046eb00:8"]]
+ 0078a800 ["INT_ADD", "register:40f0:8", ["const:78a800:8", "const:4:8"]]
+ 0078a800 ["CALL", null, ["callee:0046eb00:8"]]
~~~


<a id="compare-7d645a453bb0dc26a44b6465cffc1579"></a>

### [`0078bc94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078b/0078bc94.md) → [`0078c070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078c/0078c070.md) FUN_0078c070

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006d6020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6020.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006d63d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d6/006d63d0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.80% / 新版 91.80%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078bd04",
      "incomplete_value": true,
      "site": "0078bd10",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "0078bd08",
      "incomplete_value": true,
      "site": "0078bd10",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "0078bcfc",
      "incomplete_value": true,
      "site": "0078bd10",
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
      "unmatched:0078bcb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078bcf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078c138"
      ]
    ]
  ],
  "added": [
    [
      "0078c094",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0078c0d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078c138"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078bd10 ["INT_ADD", "register:40f0:8", ["const:78bd10:8", "const:4:8"]]
- 0078bd10 ["CALL", null, ["callee:006d63d0:8"]]
+ 0078c0ec ["INT_ADD", "register:40f0:8", ["const:78c0ec:8", "const:4:8"]]
+ 0078c0ec ["CALL", null, ["callee:006d63d0:8"]]
- 0078bcb4 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 0078bcb4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0078bcb8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0078bcb8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0078bcb8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-81382dc209ba645c09ce0e4d6d795d43"></a>

### [`0078bdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078b/0078bdb0.md) → [`0078c18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078c/0078c18c.md) FUN_0078c18c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0078df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df90.md) · 呼出先 12件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0078e96c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e96c.md)
- 新版 呼出元 1件 [`0078e36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e36c.md) · 呼出先 12件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`004939f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/004939f0.md) [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`0078ed48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078ed48.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c248",
      "incomplete_value": false,
      "site": "0078c248",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078be6c",
      "incomplete_value": false,
      "site": "0078be6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c294",
      "incomplete_value": false,
      "site": "0078c294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078beb8",
      "incomplete_value": false,
      "site": "0078beb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0078c210",
      "incomplete_value": true,
      "site": "0078c218",
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
      "unmatched:0078bdd8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078c1c4",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "unmatched:0078bdfc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "0078c1b4",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078c1c4",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078c1d8",
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
- 0078be3c ["INT_ADD", "register:40f0:8", ["const:78be3c:8", "const:4:8"]]
- 0078be3c ["CALL", null, ["callee:004939f0:8"]]
+ 0078c218 ["INT_ADD", "register:40f0:8", ["const:78c218:8", "const:4:8"]]
+ 0078c218 ["CALL", null, ["callee:004939f0:8"]]
- 0078bdd8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0078bdd8 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 0078bdd8 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 0078bdd8 ["INT_ADD", "tmp:2:8", ["register:4000:8", "tmp:1:8"]]
- 0078bddc ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 0078bddc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0078bddc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0078bddc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0078c1b8 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 0078c1b8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0078c1b8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0078c1b8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-ce108b77ee7cd5e9521f74b31e512fdb"></a>

### [`0078c01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c01c.md) → [`0078c3f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078c/0078c3f8.md) FUN_0078c3f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0078df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df90.md) · 呼出先 11件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md)
- 新版 呼出元 1件 [`0078e36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e36c.md) · 呼出先 11件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`004939f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/004939f0.md) [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`00745e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745e2c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.22% / 新版 93.22%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c46c",
      "incomplete_value": true,
      "site": "0078c46c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:384:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078c090",
      "incomplete_value": true,
      "site": "0078c090",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:33a:8"
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
      "definition_site": "0078c4b4",
      "incomplete_value": false,
      "site": "0078c4b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078c0d8",
      "incomplete_value": false,
      "site": "0078c0d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:b38:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c4ec",
      "incomplete_value": false,
      "site": "0078c4ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078c110",
      "incomplete_value": false,
      "site": "0078c110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
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
      "0078c420",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078c43c",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078c444",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "0078c420",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078c43c",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078c444",
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
- 0078c068 ["INT_ADD", "register:40f0:8", ["const:78c068:8", "const:4:8"]]
- 0078c068 ["CALL", null, ["ram:48cd38:8"]]
+ 0078c444 ["INT_ADD", "register:40f0:8", ["const:78c444:8", "const:4:8"]]
+ 0078c444 ["CALL", null, ["ram:48d058:8"]]
- 0078c074 ["COPY", "tmp:0:8", ["const:33a:8"]]
- 0078c074 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078c074 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078c074 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078c450 ["COPY", "tmp:0:8", ["const:384:8"]]
+ 0078c450 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078c450 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078c450 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0078c09c ["INT_ADD", "register:40f0:8", ["const:78c09c:8", "const:4:8"]]
- 0078c09c ["CALL", null, ["callee:0048d1b4:8"]]
+ 0078c478 ["INT_ADD", "register:40f0:8", ["const:78c478:8", "const:4:8"]]
+ 0078c478 ["CALL", null, ["callee:0048d1b4:8"]]
~~~


<a id="compare-f59cd11c5b31b74dd84a26f1caaff464"></a>

### [`0078c274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c274.md) → [`0078c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078c/0078c650.md) FUN_0078c650

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00788d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788d04.md) · 呼出先 25件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f6ac.md)
- 新版 呼出元 1件 [`007890e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00789/007890e0.md) · 呼出先 25件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) [`0046f9cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f9cc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 31.17% / 新版 31.17%

優先判定に残った影響 `call_argument_candidate` 16件, `store_condition` 4件, `unresolved_branch_alignment` 111件, `unresolved_call_alignment` 140件, `unresolved_store_alignment` 203件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0078c734",
      "incomplete_value": false,
      "site": "0078c73c",
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
      "definition_site": "0078c358",
      "incomplete_value": false,
      "site": "0078c360",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078c8b8",
      "incomplete_value": true,
      "site": "0078c8c8",
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
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078c8bc",
      "incomplete_value": true,
      "site": "0078c8c8",
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
    "ordinal": 52,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0078c2b8",
      "DATA",
      [
        "storage",
        "00c79718",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0078c2f4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:0078c2f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078da28"
      ]
    ]
  ],
  "added": [
    [
      "0078c694",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "pointer"
      ]
    ],
    [
      "0078c6d0",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "0078c6d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078da28"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078c360 ["INT_ADD", "register:40f0:8", ["const:78c360:8", "const:4:8"]]
- 0078c360 ["CALL", null, ["callee:0047e96c:8"]]
+ 0078c73c ["INT_ADD", "register:40f0:8", ["const:78c73c:8", "const:4:8"]]
+ 0078c73c ["CALL", null, ["callee:0047e96c:8"]]
- 0078c73c ["COPY", "register:4040:8", ["const:2c1000:8"]]
- 0078c8c8 ["INT_ADD", "register:40f0:8", ["const:78c8c8:8", "const:4:8"]]
- 0078c8c8 ["CALL", null, ["callee:0047e96c:8"]]
+ 0078cca4 ["INT_ADD", "register:40f0:8", ["const:78cca4:8", "const:4:8"]]
+ 0078cca4 ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-449501892bc65fff13dfb31bd001d7a7"></a>

### [`0078dbb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dbb4.md) → [`0078df90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078d/0078df90.md) FUN_0078df90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0078de24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078de24.md) [`0078deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078deac.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`0078e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e200.md) [`0078e288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e288.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0078dbb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078dbb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078dbd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078dfd0"
      ]
    ]
  ],
  "added": [
    [
      "0078df90",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0078df94",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078dfb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078dfd0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078dbb4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0078dbb4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0078dbb4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0078dbb4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0078dbb8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0078dbb8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0078dbb8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0078dbb8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0078dbc8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 0078dbc8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0078dfa4 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0078dfa4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-f92f4a3898714c993a85b65bf0bfbe4c"></a>

### [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) → [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md) FUN_0078e0e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 10件 [`0078de24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078de24.md) [`0078deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078deac.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00846924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846924.md) [`00846ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ffc.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 10件 [`0078e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e200.md) [`0078e288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e288.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008478d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/008478d0.md) [`00847fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847fa8.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 98.61% / 新版 98.61%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0078ddec",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0078e1c8",
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
- 0078dd24 ["INT_ADD", "register:40f0:8", ["const:78dd24:8", "const:4:8"]]
- 0078dd24 ["CALL", null, ["callee:00c54d90:8"]]
+ 0078e100 ["INT_ADD", "register:40f0:8", ["const:78e100:8", "const:4:8"]]
+ 0078e100 ["CALL", null, ["callee:00c54d90:8"]]
- 0078dd38 ["COPY", "register:0:8", ["register:4040:8"]]
- 0078dd38 ["INT_ADD", "register:40f0:8", ["const:78dd38:8", "const:4:8"]]
- 0078dd38 ["CALLIND", null, ["register:0:8"]]
+ 0078e114 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0078e114 ["INT_ADD", "register:40f0:8", ["const:78e114:8", "const:4:8"]]
+ 0078e114 ["CALLIND", null, ["register:0:8"]]
- 0078dd40 ["INT_ADD", "register:40f0:8", ["const:78dd40:8", "const:4:8"]]
- 0078dd40 ["CALL", null, ["callee:00c58f20:8"]]
+ 0078e11c ["INT_ADD", "register:40f0:8", ["const:78e11c:8", "const:4:8"]]
+ 0078e11c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-c0a449bdc3caffd9bfb065d4c1ac9dac"></a>

### [`0078de24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078de24.md) → [`0078e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e200.md) FUN_0078e200

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`0078dbb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dbb4.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`0078df90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078d/0078df90.md) [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.41% / 新版 79.41%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0078de3c",
      "DATA",
      [
        "storage",
        "00c79718",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0078de6c",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0078de70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078e278"
      ]
    ]
  ],
  "added": [
    [
      "0078e218",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "pointer"
      ]
    ],
    [
      "0078e248",
      "DATA",
      [
        "storage",
        "00c758b0",
        null,
        "pointer"
      ]
    ],
    [
      "0078e24c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078e278"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078de30 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e20c ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078de34 ["COPY", "tmp:0:8", ["const:718:8"]]
- 0078de34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078de34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078de34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0078de38 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-7edb6591a1b5031dd4337150264b7c92"></a>

### [`0078deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078deac.md) → [`0078e288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e288.md) FUN_0078e288

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`0078dbb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dbb4.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`0078df90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078d/0078df90.md) [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.11% / 新版 86.11%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078defc",
      "incomplete_value": true,
      "site": "0078df04",
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
      "unmatched:0078dec4",
      "DATA",
      [
        "storage",
        "00c79718",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:0078def4",
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
      "0078e2a0",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "pointer"
      ]
    ],
    [
      "0078e2d0",
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
- 0078df04 ["INT_ADD", "register:40f0:8", ["const:78df04:8", "const:4:8"]]
- 0078df04 ["CALL", null, ["callee:00c54d90:8"]]
+ 0078e2e0 ["INT_ADD", "register:40f0:8", ["const:78e2e0:8", "const:4:8"]]
+ 0078e2e0 ["CALL", null, ["callee:00c54d90:8"]]
- 0078deb8 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e294 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078debc ["COPY", "tmp:0:8", ["const:718:8"]]
- 0078debc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078debc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078debc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-838bddbb2841bda2f66c65bf0278e22f"></a>

### [`0078df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df40.md) → [`0078e31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e31c.md) FUN_0078e31c

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
      "unmatched:0078df64",
      "DATA",
      [
        "storage",
        "00c79738",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078df68",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078df6c",
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
      "0078e340",
      "DATA",
      [
        "storage",
        "00c7a708",
        null,
        "undefined *"
      ]
    ],
    [
      "0078e344",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078e348",
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
- 0078df54 ["INT_ADD", "register:40f0:8", ["const:78df54:8", "const:4:8"]]
- 0078df54 ["CALL", null, ["callee:00c58f30:8"]]
+ 0078e330 ["INT_ADD", "register:40f0:8", ["const:78e330:8", "const:4:8"]]
+ 0078e330 ["CALL", null, ["callee:00c58f30:8"]]
- 0078df5c ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e338 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078df60 ["COPY", "tmp:0:8", ["const:738:8"]]
- 0078df60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078df60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078df60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d986634c3ce18c82344568f71e79fa17"></a>

### [`0078df74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df74.md) → [`0078e350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e350.md) FUN_0078e350

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
      "definition_site": "0078e35c",
      "incomplete_value": false,
      "site": "0078e35c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:708:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078df80",
      "incomplete_value": false,
      "site": "0078df80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:738:8"
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
      "0078e35c",
      "DATA",
      [
        "storage",
        "00c79738",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e35c",
      "DATA",
      [
        "storage",
        "00c7a708",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078df78 ["COPY", "register:4048:8", ["const:c79000:8"]]
+ 0078e354 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 0078df7c ["COPY", "tmp:0:8", ["const:738:8"]]
- 0078df7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078df7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078df7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078e358 ["COPY", "tmp:0:8", ["const:708:8"]]
+ 0078e358 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e358 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e358 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9b89b18cf313f67e917729bb2be80db8"></a>

### [`0078df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df90.md) → [`0078e36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e36c.md) FUN_0078e36c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`006064c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/006064c8.md) [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`00606878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606878.md) [`00744610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744610.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.88% / 新版 91.88%

優先判定に残った影響 `call_target` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078e3a4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078dfc8",
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
      "unmatched:0078df94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078df98",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078df9c",
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
      "0078e370",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0078e374",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0078e378",
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
- 0078dfc8 ["INT_ADD", "register:40f0:8", ["const:78dfc8:8", "const:4:8"]]
- 0078dfc8 ["CALL", null, ["ram:47ad34:8"]]
+ 0078e3a4 ["INT_ADD", "register:40f0:8", ["const:78e3a4:8", "const:4:8"]]
+ 0078e3a4 ["CALL", null, ["ram:47b054:8"]]
- 0078df90 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 0078df94 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0078df94 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0078df94 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 0078df94 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-83281f6c1432117c74085dc3f7771d66"></a>

### [`0078e288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e288.md) → [`0078e664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e664.md) FUN_0078e664

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
      "definition_site": "0078e688",
      "incomplete_value": false,
      "site": "0078e688",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:788:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e2ac",
      "incomplete_value": false,
      "site": "0078e2ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:7b8:8"
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
      "0078e688",
      "DATA",
      [
        "storage",
        "00c797b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e688",
      "DATA",
      [
        "storage",
        "00c7a788",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e29c ["INT_ADD", "register:40f0:8", ["const:78e29c:8", "const:4:8"]]
- 0078e29c ["CALL", null, ["callee:00c58f30:8"]]
+ 0078e678 ["INT_ADD", "register:40f0:8", ["const:78e678:8", "const:4:8"]]
+ 0078e678 ["CALL", null, ["callee:00c58f30:8"]]
- 0078e2a4 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e680 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078e2a8 ["COPY", "tmp:0:8", ["const:7b8:8"]]
- 0078e2a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e2a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e2a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e684 ["COPY", "tmp:0:8", ["const:788:8"]]
+ 0078e684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4e0dc2bed588589632256f46f5f02437"></a>

### [`0078e2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e2bc.md) → [`0078e698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e698.md) FUN_0078e698

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
      "unmatched:0078e2c8",
      "DATA",
      [
        "storage",
        "00c797b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e6a4",
      "DATA",
      [
        "storage",
        "00c7a788",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e2bc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0078e2bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0078e2c0 ["COPY", "register:4048:8", ["const:c79000:8"]]
- 0078e2c4 ["COPY", "tmp:0:8", ["const:7b8:8"]]
- 0078e2c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078e2c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078e2c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e9a57e206eb2a1fcc5204e815a3bb49e"></a>

### [`0078e4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e4a8.md) → [`0078e884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e884.md) FUN_0078e884

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
      "definition_site": "0078e8a8",
      "incomplete_value": false,
      "site": "0078e8a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:808:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e4cc",
      "incomplete_value": false,
      "site": "0078e4cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:838:8"
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
      "0078e8a8",
      "DATA",
      [
        "storage",
        "00c79838",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e8a8",
      "DATA",
      [
        "storage",
        "00c7a808",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e4bc ["INT_ADD", "register:40f0:8", ["const:78e4bc:8", "const:4:8"]]
- 0078e4bc ["CALL", null, ["callee:00c58f30:8"]]
+ 0078e898 ["INT_ADD", "register:40f0:8", ["const:78e898:8", "const:4:8"]]
+ 0078e898 ["CALL", null, ["callee:00c58f30:8"]]
- 0078e4c4 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e8a0 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078e4c8 ["COPY", "tmp:0:8", ["const:838:8"]]
- 0078e4c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e4c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e4c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e8a4 ["COPY", "tmp:0:8", ["const:808:8"]]
+ 0078e8a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e8a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e8a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-231af4460c7ae214b39bc9baf4a7812e"></a>

### [`0078e4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e4dc.md) → [`0078e8b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e8b8.md) FUN_0078e8b8

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
      "unmatched:0078e4e8",
      "DATA",
      [
        "storage",
        "00c79838",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e8c4",
      "DATA",
      [
        "storage",
        "00c7a808",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e4dc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0078e4dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0078e4e0 ["COPY", "register:4048:8", ["const:c79000:8"]]
- 0078e4e4 ["COPY", "tmp:0:8", ["const:838:8"]]
- 0078e4e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078e4e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078e4e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2ac605c1fa53d3972fbbfca2fc9242f2"></a>

### [`0078e4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e4f8.md) → [`0078e8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e8d4.md) FUN_0078e8d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0078e514 ["INT_ADD", "register:40f0:8", ["const:78e514:8", "const:4:8"]]
- 0078e514 ["CALL", null, ["callee:008b89cc:8"]]
+ 0078e8f0 ["INT_ADD", "register:40f0:8", ["const:78e8f0:8", "const:4:8"]]
+ 0078e8f0 ["CALL", null, ["callee:008b89cc:8"]]
- 0078e51c ["INT_ADD", "register:40f0:8", ["const:78e51c:8", "const:4:8"]]
- 0078e51c ["CALL", null, ["callee:008b7f1c:8"]]
+ 0078e8f8 ["INT_ADD", "register:40f0:8", ["const:78e8f8:8", "const:4:8"]]
+ 0078e8f8 ["CALL", null, ["callee:008b7f1c:8"]]
- 0078e528 ["INT_ADD", "register:40f0:8", ["const:78e528:8", "const:4:8"]]
- 0078e528 ["CALL", null, ["callee:008b89cc:8"]]
+ 0078e904 ["INT_ADD", "register:40f0:8", ["const:78e904:8", "const:4:8"]]
+ 0078e904 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-ea4b8e8cb5d6b97879743fc978706ea6"></a>

### [`0078e568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e568.md) → [`0078e944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e944.md) FUN_0078e944

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
      "unmatched:0078e58c",
      "DATA",
      [
        "storage",
        "00c798b8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078e594",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078e598",
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
      "0078e968",
      "DATA",
      [
        "storage",
        "00c7a888",
        null,
        "undefined *"
      ]
    ],
    [
      "0078e970",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078e974",
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
- 0078e57c ["INT_ADD", "register:40f0:8", ["const:78e57c:8", "const:4:8"]]
- 0078e57c ["CALL", null, ["callee:00c58f30:8"]]
+ 0078e958 ["INT_ADD", "register:40f0:8", ["const:78e958:8", "const:4:8"]]
+ 0078e958 ["CALL", null, ["callee:00c58f30:8"]]
- 0078e584 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e960 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078e588 ["COPY", "tmp:0:8", ["const:8b8:8"]]
- 0078e588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-33155834275b1dd2ba9614406e45f355"></a>

### [`0078e5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e5a0.md) → [`0078e97c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e97c.md) FUN_0078e97c

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
      "definition_site": "0078e980",
      "incomplete_value": false,
      "site": "0078e984",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e5a4",
      "incomplete_value": false,
      "site": "0078e5a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:8b8:8"
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
      "0078e984",
      "DATA",
      [
        "storage",
        "00c798b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e984",
      "DATA",
      [
        "storage",
        "00c7a888",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e5a0 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e97c ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078e5a4 ["COPY", "tmp:0:8", ["const:8b8:8"]]
- 0078e5a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e5a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e5a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e980 ["COPY", "tmp:0:8", ["const:888:8"]]
+ 0078e980 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e980 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e980 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2df1b48b7c09db0c2a4aa3f6576fec67"></a>

### [`0078e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e5f0.md) → [`0078e9cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e9cc.md) FUN_0078e9cc

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
      "unmatched:0078e614",
      "DATA",
      [
        "storage",
        "00c79938",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078e618",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078e61c",
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
      "0078e9f0",
      "DATA",
      [
        "storage",
        "00c7a908",
        null,
        "undefined *"
      ]
    ],
    [
      "0078e9f4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078e9f8",
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
- 0078e604 ["INT_ADD", "register:40f0:8", ["const:78e604:8", "const:4:8"]]
- 0078e604 ["CALL", null, ["callee:00c58f30:8"]]
+ 0078e9e0 ["INT_ADD", "register:40f0:8", ["const:78e9e0:8", "const:4:8"]]
+ 0078e9e0 ["CALL", null, ["callee:00c58f30:8"]]
- 0078e60c ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0078e9e8 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0078e610 ["COPY", "tmp:0:8", ["const:938:8"]]
- 0078e610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


