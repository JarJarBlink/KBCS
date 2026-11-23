# v16.0.2 → v16.0.3 · 最優先の変更候補 (47)

[一覧の目次](README.md)

<a id="compare-cd720bf55dee9b60b9bb740645064b96"></a>

### [`007f7fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fec.md) → [`007f8f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8f50.md) FUN_007f8f50

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
      "unmatched:007f8008",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f8f6c",
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
- 007f7ff4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007f7ff4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007f8f58 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007f8f58 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 007f8008 ["INT_ADD", "register:40f0:8", ["const:7f8008:8", "const:4:8"]]
- 007f8008 ["CALL", null, ["ram:47ad34:8"]]
- 007f8014 ["INT_ADD", "register:40f0:8", ["const:7f8014:8", "const:4:8"]]
- 007f8014 ["CALL", null, ["callee:0047d134:8"]]
+ 007f8f78 ["INT_ADD", "register:40f0:8", ["const:7f8f78:8", "const:4:8"]]
+ 007f8f78 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-8cbe7a11d1ac355d4d9da233c44c81da"></a>

### [`007f8058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8058.md) → [`007f8fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8fbc.md) FUN_007f8fbc

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
      "definition_site": "007f8fe0",
      "incomplete_value": false,
      "site": "007f8fe0",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f807c",
      "incomplete_value": false,
      "site": "007f807c",
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
      "007f8fe0",
      "DATA",
      [
        "storage",
        "00c7c3d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8fe0",
      "DATA",
      [
        "storage",
        "00c7d3a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f806c ["INT_ADD", "register:40f0:8", ["const:7f806c:8", "const:4:8"]]
- 007f806c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f8fd0 ["INT_ADD", "register:40f0:8", ["const:7f8fd0:8", "const:4:8"]]
+ 007f8fd0 ["CALL", null, ["callee:00c58f30:8"]]
- 007f8074 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f8fd8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8078 ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 007f8078 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8078 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8078 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8fdc ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 007f8fdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8fdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8fdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fa38d335929b0e8e56b938afcf33c8ee"></a>

### [`007f808c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f808c.md) → [`007f8ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f8/007f8ff0.md) FUN_007f8ff0

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
      "definition_site": "007f8ffc",
      "incomplete_value": false,
      "site": "007f8ffc",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8098",
      "incomplete_value": false,
      "site": "007f8098",
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
      "007f8ffc",
      "DATA",
      [
        "storage",
        "00c7c3d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8ffc",
      "DATA",
      [
        "storage",
        "00c7d3a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8090 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007f8ff4 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f8094 ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 007f8094 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f8094 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f8094 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f8ff8 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 007f8ff8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8ff8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8ff8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9f87476022453868aadf13e626ecf197"></a>

### [`007f83e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f83e0.md) → [`007f9344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9344.md) FUN_007f9344

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
      "definition_site": "007f9368",
      "incomplete_value": false,
      "site": "007f9368",
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
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8404",
      "incomplete_value": false,
      "site": "007f8404",
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
            "const:460:8"
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
      "007f9368",
      "DATA",
      [
        "storage",
        "00c7c460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9368",
      "DATA",
      [
        "storage",
        "00c7d430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f83f4 ["INT_ADD", "register:40f0:8", ["const:7f83f4:8", "const:4:8"]]
- 007f83f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9358 ["INT_ADD", "register:40f0:8", ["const:7f9358:8", "const:4:8"]]
+ 007f9358 ["CALL", null, ["callee:00c58f30:8"]]
- 007f83fc ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9360 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8400 ["COPY", "tmp:0:8", ["const:460:8"]]
- 007f8400 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8400 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8400 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9364 ["COPY", "tmp:0:8", ["const:430:8"]]
+ 007f9364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dcdd26aa30bc376f95c64e422b901192"></a>

### [`007f8414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8414.md) → [`007f9378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9378.md) FUN_007f9378

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
      "definition_site": "007f9384",
      "incomplete_value": false,
      "site": "007f9384",
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
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8420",
      "incomplete_value": false,
      "site": "007f8420",
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
            "const:460:8"
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
      "007f9384",
      "DATA",
      [
        "storage",
        "00c7c460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9384",
      "DATA",
      [
        "storage",
        "00c7d430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8418 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007f937c ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f841c ["COPY", "tmp:0:8", ["const:460:8"]]
- 007f841c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f841c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f841c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f9380 ["COPY", "tmp:0:8", ["const:430:8"]]
+ 007f9380 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f9380 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f9380 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e56848cca6c1eb3c17bf048ae78be61b"></a>

### [`007f8430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8430.md) → [`007f9394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9394.md) FUN_007f9394

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009dce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dce94.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0085c2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2e4.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`009dde40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009dd/009dde40.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f93e0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f847c",
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
      "007f93e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f93e0",
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
- 007f847c ["INT_ADD", "register:40f0:8", ["const:7f847c:8", "const:4:8"]]
- 007f847c ["CALL", null, ["ram:47ad34:8"]]
+ 007f93e0 ["INT_ADD", "register:40f0:8", ["const:7f93e0:8", "const:4:8"]]
+ 007f93e0 ["CALL", null, ["ram:47b054:8"]]
- 007f844c ["INT_ADD", "register:40f0:8", ["const:7f844c:8", "const:4:8"]]
- 007f844c ["CALL", null, ["callee:0085c2e4:8"]]
+ 007f93b0 ["INT_ADD", "register:40f0:8", ["const:7f93b0:8", "const:4:8"]]
+ 007f93b0 ["CALL", null, ["callee:0085c2e4:8"]]
- 007f846c ["INT_ADD", "register:40f0:8", ["const:7f846c:8", "const:4:8"]]
- 007f846c ["CALL", null, ["callee:009dde40:8"]]
+ 007f93d0 ["INT_ADD", "register:40f0:8", ["const:7f93d0:8", "const:4:8"]]
+ 007f93d0 ["CALL", null, ["callee:009dde40:8"]]
~~~


<a id="compare-bd2208c1e4d487531150b53c49466607"></a>

### [`007f84d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f84d4.md) → [`007f9438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9438.md) FUN_007f9438

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
      "definition_site": "007f945c",
      "incomplete_value": false,
      "site": "007f945c",
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
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f84f8",
      "incomplete_value": false,
      "site": "007f84f8",
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
            "const:4e0:8"
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
      "007f945c",
      "DATA",
      [
        "storage",
        "00c7c4e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f945c",
      "DATA",
      [
        "storage",
        "00c7d4b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f84e8 ["INT_ADD", "register:40f0:8", ["const:7f84e8:8", "const:4:8"]]
- 007f84e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f944c ["INT_ADD", "register:40f0:8", ["const:7f944c:8", "const:4:8"]]
+ 007f944c ["CALL", null, ["callee:00c58f30:8"]]
- 007f84f0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9454 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f84f4 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 007f84f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f84f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f84f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9458 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 007f9458 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9458 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9458 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-073ee7146a282bcab5f0415583709dc4"></a>

### [`007f8508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8508.md) → [`007f946c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f946c.md) FUN_007f946c

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
      "definition_site": "007f9478",
      "incomplete_value": false,
      "site": "007f9478",
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
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8514",
      "incomplete_value": false,
      "site": "007f8514",
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
            "const:4e0:8"
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
      "007f9478",
      "DATA",
      [
        "storage",
        "00c7c4e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9478",
      "DATA",
      [
        "storage",
        "00c7d4b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f850c ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007f9470 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f8510 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 007f8510 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f8510 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f8510 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f9474 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 007f9474 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f9474 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f9474 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e914a7eef1ccdbc7f1dcdea6ee779814"></a>

### [`007f8524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8524.md) → [`007f9488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9488.md) FUN_007f9488

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0046bbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046bbe0.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046dcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcd4.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.02% / 新版 78.02%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f94dc",
      "incomplete_value": false,
      "site": "007f94ec",
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
      "definition_site": "007f8578",
      "incomplete_value": false,
      "site": "007f8588",
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
      "definition_site": "007f94e4",
      "incomplete_value": false,
      "site": "007f94ec",
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
      "definition_site": "007f8580",
      "incomplete_value": false,
      "site": "007f8588",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f9500",
      "incomplete_value": true,
      "site": "007f9504",
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
      "unmatched:007f8538",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f853c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f8540",
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
      "007f949c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "007f94a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "007f94a4",
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
- 007f8588 ["INT_ADD", "register:40f0:8", ["const:7f8588:8", "const:4:8"]]
- 007f8588 ["CALL", null, ["callee:00c596b0:8"]]
+ 007f94ec ["INT_ADD", "register:40f0:8", ["const:7f94ec:8", "const:4:8"]]
+ 007f94ec ["CALL", null, ["callee:00c596b0:8"]]
- 007f85a0 ["INT_ADD", "register:40f0:8", ["const:7f85a0:8", "const:4:8"]]
- 007f85a0 ["CALL", null, ["callee:0046cd24:8"]]
+ 007f9504 ["INT_ADD", "register:40f0:8", ["const:7f9504:8", "const:4:8"]]
+ 007f9504 ["CALL", null, ["callee:0046cd24:8"]]
- 007f8538 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 007f8538 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 007f8538 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 007f8538 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4fa1e64a78bbfed6f1c73b9782d22093"></a>

### [`007f86bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f86bc.md) → [`007f9620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9620.md) FUN_007f9620

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
      "definition_site": "007f9644",
      "incomplete_value": false,
      "site": "007f9644",
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
            "const:540:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f86e0",
      "incomplete_value": false,
      "site": "007f86e0",
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
            "const:570:8"
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
      "007f9644",
      "DATA",
      [
        "storage",
        "00c7c570",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9644",
      "DATA",
      [
        "storage",
        "00c7d540",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f86d0 ["INT_ADD", "register:40f0:8", ["const:7f86d0:8", "const:4:8"]]
- 007f86d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9634 ["INT_ADD", "register:40f0:8", ["const:7f9634:8", "const:4:8"]]
+ 007f9634 ["CALL", null, ["callee:00c58f30:8"]]
- 007f86d8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f963c ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f86dc ["COPY", "tmp:0:8", ["const:570:8"]]
- 007f86dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f86dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f86dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9640 ["COPY", "tmp:0:8", ["const:540:8"]]
+ 007f9640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-22e1434ff07274aaa890ace0978e61e2"></a>

### [`007f86f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f86f0.md) → [`007f9654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9654.md) FUN_007f9654

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
      "unmatched:007f86fc",
      "DATA",
      [
        "storage",
        "00c7c570",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9660",
      "DATA",
      [
        "storage",
        "00c7d540",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f86f0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007f86f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007f86f4 ["COPY", "register:4048:8", ["const:c7c000:8"]]
- 007f86f8 ["COPY", "tmp:0:8", ["const:570:8"]]
- 007f86f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f86f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f86f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-912507d1d1bad5ae8084ae6b0415ac64"></a>

### [`007f870c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f870c.md) → [`007f9670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9670.md) FUN_007f9670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0046a5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046a5b0.md) [`0046bbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046bbe0.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046dcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcd4.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.44% / 新版 87.44%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007f96d0",
      "incomplete_value": false,
      "site": "007f96e0",
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
      "definition_site": "007f876c",
      "incomplete_value": false,
      "site": "007f877c",
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
      "definition_site": "007f96d8",
      "incomplete_value": false,
      "site": "007f96e0",
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
      "definition_site": "007f8774",
      "incomplete_value": false,
      "site": "007f877c",
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
      "unmatched:007f8710",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f8714",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:007f8718",
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
      "007f9674",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "007f9678",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "007f967c",
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
- 007f877c ["INT_ADD", "register:40f0:8", ["const:7f877c:8", "const:4:8"]]
- 007f877c ["CALL", null, ["callee:00c596b0:8"]]
+ 007f96e0 ["INT_ADD", "register:40f0:8", ["const:7f96e0:8", "const:4:8"]]
+ 007f96e0 ["CALL", null, ["callee:00c596b0:8"]]
- 007f870c ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 007f8710 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007f8710 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:51c0:8"]]
~~~


<a id="compare-fcd674fa025144f587e2ef7751461cf5"></a>

### [`007f8a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8a54.md) → [`007f99b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f99b8.md) FUN_007f99b8

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
      "definition_site": "007f99dc",
      "incomplete_value": false,
      "site": "007f99dc",
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
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8a78",
      "incomplete_value": false,
      "site": "007f8a78",
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
      "007f99dc",
      "DATA",
      [
        "storage",
        "00c7c600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f99dc",
      "DATA",
      [
        "storage",
        "00c7d5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8a68 ["INT_ADD", "register:40f0:8", ["const:7f8a68:8", "const:4:8"]]
- 007f8a68 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f99cc ["INT_ADD", "register:40f0:8", ["const:7f99cc:8", "const:4:8"]]
+ 007f99cc ["CALL", null, ["callee:00c58f30:8"]]
- 007f8a70 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f99d4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8a74 ["COPY", "tmp:0:8", ["const:600:8"]]
- 007f8a74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8a74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8a74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f99d8 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 007f99d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f99d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f99d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-480eb77fa804231572012016cb214d78"></a>

### [`007f8a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8a88.md) → [`007f99ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f99ec.md) FUN_007f99ec

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
      "definition_site": "007f99f8",
      "incomplete_value": false,
      "site": "007f99f8",
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
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8a94",
      "incomplete_value": false,
      "site": "007f8a94",
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
      "007f99f8",
      "DATA",
      [
        "storage",
        "00c7c600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f99f8",
      "DATA",
      [
        "storage",
        "00c7d5d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8a8c ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007f99f0 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f8a90 ["COPY", "tmp:0:8", ["const:600:8"]]
- 007f8a90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f8a90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f8a90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f99f4 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 007f99f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f99f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f99f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-491350b87e59ed4da2e66f4026a40d01"></a>

### [`007f8aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8aa4.md) → [`007f9a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9a08.md) FUN_007f9a08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 11件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)
- 新版 呼出元 0件  · 呼出先 11件 [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046bbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046bbe0.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.58% / 新版 93.58%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f9acc",
      "incomplete_value": true,
      "site": "007f9adc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f1e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8b68",
      "incomplete_value": true,
      "site": "007f8b78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e47:8"
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
      "definition_site": "007f9ae0",
      "incomplete_value": true,
      "site": "007f9ae0",
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
      "definition_site": "007f8b7c",
      "incomplete_value": true,
      "site": "007f8b7c",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f9a48",
      "incomplete_value": true,
      "site": "007f9a48",
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
      "definition_site": "007f8ae4",
      "incomplete_value": true,
      "site": "007f8ae4",
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
      "007f9a38",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f9a50",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f9a58",
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
      "007f9a38",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007f9a50",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f9a58",
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
- 007f8afc ["INT_ADD", "register:40f0:8", ["const:7f8afc:8", "const:4:8"]]
- 007f8afc ["CALL", null, ["callee:00c596b0:8"]]
+ 007f9a60 ["INT_ADD", "register:40f0:8", ["const:7f9a60:8", "const:4:8"]]
+ 007f9a60 ["CALL", null, ["callee:00c596b0:8"]]
- 007f8ad0 ["COPY", "register:4048:8", ["const:ca4000:8"]]
+ 007f9a34 ["COPY", "register:4048:8", ["const:ca5000:8"]]
- 007f8ad4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a78:8"]]
- 007f8ad4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007f9a38 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a38:8"]]
+ 007f9a38 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b012ccf43e145c0cdae18d87472c78d4"></a>

### [`007f8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8cb0.md) → [`007f9c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9c14.md) FUN_007f9c14

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
      "definition_site": "007f9c28",
      "incomplete_value": false,
      "site": "007f9c2c",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8cc4",
      "incomplete_value": false,
      "site": "007f8cc8",
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
            "const:680:8"
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
      "007f9c2c",
      "DATA",
      [
        "storage",
        "00c7c680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9c2c",
      "DATA",
      [
        "storage",
        "00c7d650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8cbc ["INT_ADD", "register:40f0:8", ["const:7f8cbc:8", "const:4:8"]]
- 007f8cbc ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9c20 ["INT_ADD", "register:40f0:8", ["const:7f9c20:8", "const:4:8"]]
+ 007f9c20 ["CALL", null, ["callee:00c58f30:8"]]
- 007f8cc0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9c24 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8cc4 ["COPY", "tmp:0:8", ["const:680:8"]]
- 007f8cc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8cc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8cc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9c28 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 007f9c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5cdf3b7302577b2db1dcedde38f742a"></a>

### [`007f8cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8cd4.md) → [`007f9c38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9c38.md) FUN_007f9c38

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
      "definition_site": "007f9c3c",
      "incomplete_value": false,
      "site": "007f9c40",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8cd8",
      "incomplete_value": false,
      "site": "007f8cdc",
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
      "007f9c40",
      "DATA",
      [
        "storage",
        "00c7c680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9c40",
      "DATA",
      [
        "storage",
        "00c7d650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8cd4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9c38 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8cd8 ["COPY", "tmp:0:8", ["const:680:8"]]
- 007f8cd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8cd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8cd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9c3c ["COPY", "tmp:0:8", ["const:650:8"]]
+ 007f9c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6249bfb26be0503c4912136bd8c74f80"></a>

### [`007f8cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8cec.md) → [`007f9c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9c50.md) FUN_007f9c50

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
      "site": "007f9c74",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8d10",
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
      "007f9c74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f9c74",
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
- 007f8d10 ["INT_ADD", "register:40f0:8", ["const:7f8d10:8", "const:4:8"]]
- 007f8d10 ["CALL", null, ["ram:47ad34:8"]]
+ 007f9c74 ["INT_ADD", "register:40f0:8", ["const:7f9c74:8", "const:4:8"]]
+ 007f9c74 ["CALL", null, ["ram:47b054:8"]]
- 007f8d1c ["INT_ADD", "register:40f0:8", ["const:7f8d1c:8", "const:4:8"]]
- 007f8d1c ["CALL", null, ["callee:0047d134:8"]]
+ 007f9c80 ["INT_ADD", "register:40f0:8", ["const:7f9c80:8", "const:4:8"]]
+ 007f9c80 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-58dd69c62a6caa740353784d25e3a364"></a>

### [`007f8d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8d60.md) → [`007f9cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9cc4.md) FUN_007f9cc4

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
      "definition_site": "007f9cd8",
      "incomplete_value": false,
      "site": "007f9cdc",
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
            "const:6d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8d74",
      "incomplete_value": false,
      "site": "007f8d78",
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
            "const:700:8"
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
      "007f9cdc",
      "DATA",
      [
        "storage",
        "00c7c700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9cdc",
      "DATA",
      [
        "storage",
        "00c7d6d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8d6c ["INT_ADD", "register:40f0:8", ["const:7f8d6c:8", "const:4:8"]]
- 007f8d6c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9cd0 ["INT_ADD", "register:40f0:8", ["const:7f9cd0:8", "const:4:8"]]
+ 007f9cd0 ["CALL", null, ["callee:00c58f30:8"]]
- 007f8d70 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9cd4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8d74 ["COPY", "tmp:0:8", ["const:700:8"]]
- 007f8d74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9cd8 ["COPY", "tmp:0:8", ["const:6d0:8"]]
+ 007f9cd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9cd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9cd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d62ddf6426a79d4e13cd98da2eb9d0dc"></a>

### [`007f8d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8d84.md) → [`007f9ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9ce8.md) FUN_007f9ce8

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
      "definition_site": "007f9cec",
      "incomplete_value": false,
      "site": "007f9cf0",
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
            "const:6d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8d88",
      "incomplete_value": false,
      "site": "007f8d8c",
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
            "const:700:8"
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
      "007f9cf0",
      "DATA",
      [
        "storage",
        "00c7c700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9cf0",
      "DATA",
      [
        "storage",
        "00c7d6d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8d84 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9ce8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8d88 ["COPY", "tmp:0:8", ["const:700:8"]]
- 007f8d88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9cec ["COPY", "tmp:0:8", ["const:6d0:8"]]
+ 007f9cec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9cec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9cec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-755ba2fb14122b956b4cb10ae5e1e300"></a>

### [`007f8d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8d9c.md) → [`007f9d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9d00.md) FUN_007f9d00

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
      "site": "007f9d24",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8dc0",
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
      "007f9d24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f9d24",
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
- 007f8dc0 ["INT_ADD", "register:40f0:8", ["const:7f8dc0:8", "const:4:8"]]
- 007f8dc0 ["CALL", null, ["ram:47ad34:8"]]
+ 007f9d24 ["INT_ADD", "register:40f0:8", ["const:7f9d24:8", "const:4:8"]]
+ 007f9d24 ["CALL", null, ["ram:47b054:8"]]
- 007f8dcc ["INT_ADD", "register:40f0:8", ["const:7f8dcc:8", "const:4:8"]]
- 007f8dcc ["CALL", null, ["callee:0047d134:8"]]
+ 007f9d30 ["INT_ADD", "register:40f0:8", ["const:7f9d30:8", "const:4:8"]]
+ 007f9d30 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-e0b3db2b9c3311d3650a15f7a56be4f5"></a>

### [`007f8e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8e10.md) → [`007f9d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9d74.md) FUN_007f9d74

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
      "definition_site": "007f9d88",
      "incomplete_value": false,
      "site": "007f9d8c",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8e24",
      "incomplete_value": false,
      "site": "007f8e28",
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
      "007f9d8c",
      "DATA",
      [
        "storage",
        "00c7c780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9d8c",
      "DATA",
      [
        "storage",
        "00c7d750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8e1c ["INT_ADD", "register:40f0:8", ["const:7f8e1c:8", "const:4:8"]]
- 007f8e1c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9d80 ["INT_ADD", "register:40f0:8", ["const:7f9d80:8", "const:4:8"]]
+ 007f9d80 ["CALL", null, ["callee:00c58f30:8"]]
- 007f8e20 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9d84 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8e24 ["COPY", "tmp:0:8", ["const:780:8"]]
- 007f8e24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9d88 ["COPY", "tmp:0:8", ["const:750:8"]]
+ 007f9d88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9d88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9d88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6dc1607fe739eb3fa4187a772c17b4db"></a>

### [`007f8e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8e34.md) → [`007f9d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9d98.md) FUN_007f9d98

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
      "definition_site": "007f9d9c",
      "incomplete_value": false,
      "site": "007f9da0",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8e38",
      "incomplete_value": false,
      "site": "007f8e3c",
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
      "007f9da0",
      "DATA",
      [
        "storage",
        "00c7c780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9da0",
      "DATA",
      [
        "storage",
        "00c7d750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8e34 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9d98 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8e38 ["COPY", "tmp:0:8", ["const:780:8"]]
- 007f8e38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9d9c ["COPY", "tmp:0:8", ["const:750:8"]]
+ 007f9d9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9d9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9d9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e934a3aab4690f2ec129ccf0c1a49d46"></a>

### [`007f8e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8e4c.md) → [`007f9db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9db0.md) FUN_007f9db0

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
      "site": "007f9dd4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8e70",
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
      "007f9dd4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f9dd4",
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
- 007f8e70 ["INT_ADD", "register:40f0:8", ["const:7f8e70:8", "const:4:8"]]
- 007f8e70 ["CALL", null, ["ram:47ad34:8"]]
+ 007f9dd4 ["INT_ADD", "register:40f0:8", ["const:7f9dd4:8", "const:4:8"]]
+ 007f9dd4 ["CALL", null, ["ram:47b054:8"]]
- 007f8e7c ["INT_ADD", "register:40f0:8", ["const:7f8e7c:8", "const:4:8"]]
- 007f8e7c ["CALL", null, ["callee:0047d134:8"]]
+ 007f9de0 ["INT_ADD", "register:40f0:8", ["const:7f9de0:8", "const:4:8"]]
+ 007f9de0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-a660ff45b292bc94a0695e69bd3e89b6"></a>

### [`007f8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8ec0.md) → [`007f9e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9e24.md) FUN_007f9e24

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
      "definition_site": "007f9e38",
      "incomplete_value": false,
      "site": "007f9e3c",
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
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8ed4",
      "incomplete_value": false,
      "site": "007f8ed8",
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
            "const:800:8"
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
      "007f9e3c",
      "DATA",
      [
        "storage",
        "00c7c800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9e3c",
      "DATA",
      [
        "storage",
        "00c7d7d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8ecc ["INT_ADD", "register:40f0:8", ["const:7f8ecc:8", "const:4:8"]]
- 007f8ecc ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9e30 ["INT_ADD", "register:40f0:8", ["const:7f9e30:8", "const:4:8"]]
+ 007f9e30 ["CALL", null, ["callee:00c58f30:8"]]
- 007f8ed0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9e34 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8ed4 ["COPY", "tmp:0:8", ["const:800:8"]]
- 007f8ed4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8ed4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8ed4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9e38 ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 007f9e38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9e38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9e38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-32d3965f81c49b9a41b521f138863338"></a>

### [`007f8ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8ee4.md) → [`007f9e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9e48.md) FUN_007f9e48

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
      "definition_site": "007f9e4c",
      "incomplete_value": false,
      "site": "007f9e50",
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
            "const:7d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8ee8",
      "incomplete_value": false,
      "site": "007f8eec",
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
            "const:800:8"
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
      "007f9e50",
      "DATA",
      [
        "storage",
        "00c7c800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9e50",
      "DATA",
      [
        "storage",
        "00c7d7d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8ee4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9e48 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8ee8 ["COPY", "tmp:0:8", ["const:800:8"]]
- 007f8ee8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8ee8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8ee8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9e4c ["COPY", "tmp:0:8", ["const:7d0:8"]]
+ 007f9e4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9e4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9e4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9150aff00d942d40ab61656e27134044"></a>

### [`007f8efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8efc.md) → [`007f9e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9e60.md) FUN_007f9e60

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
      "site": "007f9e84",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8f20",
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
      "007f9e84",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f9e84",
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
- 007f8f20 ["INT_ADD", "register:40f0:8", ["const:7f8f20:8", "const:4:8"]]
- 007f8f20 ["CALL", null, ["ram:47ad34:8"]]
+ 007f9e84 ["INT_ADD", "register:40f0:8", ["const:7f9e84:8", "const:4:8"]]
+ 007f9e84 ["CALL", null, ["ram:47b054:8"]]
- 007f8f2c ["INT_ADD", "register:40f0:8", ["const:7f8f2c:8", "const:4:8"]]
- 007f8f2c ["CALL", null, ["callee:0047d134:8"]]
+ 007f9e90 ["INT_ADD", "register:40f0:8", ["const:7f9e90:8", "const:4:8"]]
+ 007f9e90 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-f3fe665f01a53f7e3807a307e3fd7efe"></a>

### [`007f8f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8f70.md) → [`007f9ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9ed4.md) FUN_007f9ed4

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
      "definition_site": "007f9ee8",
      "incomplete_value": false,
      "site": "007f9eec",
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
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8f84",
      "incomplete_value": false,
      "site": "007f8f88",
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
            "const:880:8"
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
      "007f9eec",
      "DATA",
      [
        "storage",
        "00c7c880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9eec",
      "DATA",
      [
        "storage",
        "00c7d850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8f7c ["INT_ADD", "register:40f0:8", ["const:7f8f7c:8", "const:4:8"]]
- 007f8f7c ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9ee0 ["INT_ADD", "register:40f0:8", ["const:7f9ee0:8", "const:4:8"]]
+ 007f9ee0 ["CALL", null, ["callee:00c58f30:8"]]
- 007f8f80 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9ee4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8f84 ["COPY", "tmp:0:8", ["const:880:8"]]
- 007f8f84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9ee8 ["COPY", "tmp:0:8", ["const:850:8"]]
+ 007f9ee8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9ee8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9ee8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-52818f30e64aa768ed4c8c93bb0e468e"></a>

### [`007f8f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8f94.md) → [`007f9ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9ef8.md) FUN_007f9ef8

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
      "definition_site": "007f9efc",
      "incomplete_value": false,
      "site": "007f9f00",
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
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f8f98",
      "incomplete_value": false,
      "site": "007f8f9c",
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
      "007f9f00",
      "DATA",
      [
        "storage",
        "00c7c880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9f00",
      "DATA",
      [
        "storage",
        "00c7d850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8f94 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9ef8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f8f98 ["COPY", "tmp:0:8", ["const:880:8"]]
- 007f8f98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9efc ["COPY", "tmp:0:8", ["const:850:8"]]
+ 007f9efc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9efc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9efc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-df117703925aab621d2a6cb85fbeb171"></a>

### [`007f8fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8fac.md) → [`007f9f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9f10.md) FUN_007f9f10

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
      "site": "007f9f34",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8fd0",
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
      "007f9f34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007f9f34",
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
- 007f8fd0 ["INT_ADD", "register:40f0:8", ["const:7f8fd0:8", "const:4:8"]]
- 007f8fd0 ["CALL", null, ["ram:47ad34:8"]]
+ 007f9f34 ["INT_ADD", "register:40f0:8", ["const:7f9f34:8", "const:4:8"]]
+ 007f9f34 ["CALL", null, ["ram:47b054:8"]]
- 007f8fdc ["INT_ADD", "register:40f0:8", ["const:7f8fdc:8", "const:4:8"]]
- 007f8fdc ["CALL", null, ["callee:0047d134:8"]]
+ 007f9f40 ["INT_ADD", "register:40f0:8", ["const:7f9f40:8", "const:4:8"]]
+ 007f9f40 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-34fb9a51511431ae4e623047b29f6313"></a>

### [`007f9020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9020.md) → [`007f9f84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9f84.md) FUN_007f9f84

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
      "definition_site": "007f9fa4",
      "incomplete_value": false,
      "site": "007f9fa8",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f9040",
      "incomplete_value": false,
      "site": "007f9044",
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
      "007f9fa8",
      "DATA",
      [
        "storage",
        "00c7c900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9fa8",
      "DATA",
      [
        "storage",
        "00c7d8d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9034 ["INT_ADD", "register:40f0:8", ["const:7f9034:8", "const:4:8"]]
- 007f9034 ["CALL", null, ["callee:00c58f30:8"]]
+ 007f9f98 ["INT_ADD", "register:40f0:8", ["const:7f9f98:8", "const:4:8"]]
+ 007f9f98 ["CALL", null, ["callee:00c58f30:8"]]
- 007f903c ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9fa0 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f9040 ["COPY", "tmp:0:8", ["const:900:8"]]
- 007f9040 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9040 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9040 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9fa4 ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 007f9fa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9fa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9fa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f7caacb8c5c0d949d5271aa6d311de4f"></a>

### [`007f9058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9058.md) → [`007f9fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9fbc.md) FUN_007f9fbc

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
      "definition_site": "007f9fc0",
      "incomplete_value": false,
      "site": "007f9fc4",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f905c",
      "incomplete_value": false,
      "site": "007f9060",
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
      "007f9fc4",
      "DATA",
      [
        "storage",
        "00c7c900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9fc4",
      "DATA",
      [
        "storage",
        "00c7d8d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9058 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007f9fbc ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f905c ["COPY", "tmp:0:8", ["const:900:8"]]
- 007f905c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f905c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f905c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9fc0 ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 007f9fc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9fc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9fc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3a58f9ad4fa6c4a99c5b8bfe94a64a3e"></a>

### [`007f9078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9078.md) → [`007f9fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f9/007f9fdc.md) FUN_007f9fdc

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
      "site": "007fa000",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f909c",
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
      "007fa000",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fa000",
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
- 007f909c ["INT_ADD", "register:40f0:8", ["const:7f909c:8", "const:4:8"]]
- 007f909c ["CALL", null, ["ram:47ad34:8"]]
+ 007fa000 ["INT_ADD", "register:40f0:8", ["const:7fa000:8", "const:4:8"]]
+ 007fa000 ["CALL", null, ["ram:47b054:8"]]
- 007f90a8 ["INT_ADD", "register:40f0:8", ["const:7f90a8:8", "const:4:8"]]
- 007f90a8 ["CALL", null, ["callee:0047d134:8"]]
+ 007fa00c ["INT_ADD", "register:40f0:8", ["const:7fa00c:8", "const:4:8"]]
+ 007fa00c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-4b02e6655fb634d1f2291cbeddf11c28"></a>

### [`007f90ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f90ec.md) → [`007fa050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa050.md) FUN_007fa050

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
      "definition_site": "007fa064",
      "incomplete_value": false,
      "site": "007fa068",
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
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f9100",
      "incomplete_value": false,
      "site": "007f9104",
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
            "const:980:8"
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
      "007fa068",
      "DATA",
      [
        "storage",
        "00c7c980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa068",
      "DATA",
      [
        "storage",
        "00c7d950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f90f8 ["INT_ADD", "register:40f0:8", ["const:7f90f8:8", "const:4:8"]]
- 007f90f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fa05c ["INT_ADD", "register:40f0:8", ["const:7fa05c:8", "const:4:8"]]
+ 007fa05c ["CALL", null, ["callee:00c58f30:8"]]
- 007f90fc ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa060 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f9100 ["COPY", "tmp:0:8", ["const:980:8"]]
- 007f9100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa064 ["COPY", "tmp:0:8", ["const:950:8"]]
+ 007fa064 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa064 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa064 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c493e1e17e4952534fa5dca8eb59062d"></a>

### [`007f9110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9110.md) → [`007fa074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa074.md) FUN_007fa074

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
      "definition_site": "007fa078",
      "incomplete_value": false,
      "site": "007fa07c",
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
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f9114",
      "incomplete_value": false,
      "site": "007f9118",
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
      "007fa07c",
      "DATA",
      [
        "storage",
        "00c7c980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa07c",
      "DATA",
      [
        "storage",
        "00c7d950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9110 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa074 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f9114 ["COPY", "tmp:0:8", ["const:980:8"]]
- 007f9114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa078 ["COPY", "tmp:0:8", ["const:950:8"]]
+ 007fa078 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa078 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa078 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-63887d6ddc546d267829508bf7b103aa"></a>

### [`007f9128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9128.md) → [`007fa08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa08c.md) FUN_007fa08c

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
      "site": "007fa0b0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f914c",
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
      "007fa0b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fa0b0",
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
- 007f914c ["INT_ADD", "register:40f0:8", ["const:7f914c:8", "const:4:8"]]
- 007f914c ["CALL", null, ["ram:47ad34:8"]]
+ 007fa0b0 ["INT_ADD", "register:40f0:8", ["const:7fa0b0:8", "const:4:8"]]
+ 007fa0b0 ["CALL", null, ["ram:47b054:8"]]
- 007f9158 ["INT_ADD", "register:40f0:8", ["const:7f9158:8", "const:4:8"]]
- 007f9158 ["CALL", null, ["callee:0047d134:8"]]
+ 007fa0bc ["INT_ADD", "register:40f0:8", ["const:7fa0bc:8", "const:4:8"]]
+ 007fa0bc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-64122444ac502e430711055f0bf896ad"></a>

### [`007f919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f919c.md) → [`007fa100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa100.md) FUN_007fa100

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
      "definition_site": "007fa124",
      "incomplete_value": false,
      "site": "007fa124",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f91c0",
      "incomplete_value": false,
      "site": "007f91c0",
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
            "const:a00:8"
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
      "007fa124",
      "DATA",
      [
        "storage",
        "00c7ca00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa124",
      "DATA",
      [
        "storage",
        "00c7d9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f91b0 ["INT_ADD", "register:40f0:8", ["const:7f91b0:8", "const:4:8"]]
- 007f91b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fa114 ["INT_ADD", "register:40f0:8", ["const:7fa114:8", "const:4:8"]]
+ 007fa114 ["CALL", null, ["callee:00c58f30:8"]]
- 007f91b8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa11c ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f91bc ["COPY", "tmp:0:8", ["const:a00:8"]]
- 007f91bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f91bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f91bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa120 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 007fa120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b88a69df2b24822a87638c97763761cb"></a>

### [`007f91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f91d0.md) → [`007fa134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa134.md) FUN_007fa134

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
      "definition_site": "007fa140",
      "incomplete_value": false,
      "site": "007fa140",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f91dc",
      "incomplete_value": false,
      "site": "007f91dc",
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
            "const:a00:8"
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
      "007fa140",
      "DATA",
      [
        "storage",
        "00c7ca00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa140",
      "DATA",
      [
        "storage",
        "00c7d9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f91d4 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007fa138 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f91d8 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 007f91d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f91d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f91d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fa13c ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 007fa13c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa13c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa13c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8e1bcddfac95f53c2241ff16879ed980"></a>

### [`007f91ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f91ec.md) → [`007fa150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa150.md) FUN_007fa150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009e3ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3ad4.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`009e4a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e4a80.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

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
      "site": "007fa190",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f922c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fa190",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fa190",
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
- 007f922c ["INT_ADD", "register:40f0:8", ["const:7f922c:8", "const:4:8"]]
- 007f922c ["CALL", null, ["ram:47ad34:8"]]
+ 007fa190 ["INT_ADD", "register:40f0:8", ["const:7fa190:8", "const:4:8"]]
+ 007fa190 ["CALL", null, ["ram:47b054:8"]]
- 007f9220 ["INT_ADD", "register:40f0:8", ["const:7f9220:8", "const:4:8"]]
- 007f9220 ["CALL", null, ["callee:009e4a80:8"]]
+ 007fa184 ["INT_ADD", "register:40f0:8", ["const:7fa184:8", "const:4:8"]]
+ 007fa184 ["CALL", null, ["callee:009e4a80:8"]]
- 007f9228 ["INT_ADD", "register:40f0:8", ["const:7f9228:8", "const:4:8"]]
- 007f9228 ["CALL", null, ["callee:00a1b6a4:8"]]
+ 007fa18c ["INT_ADD", "register:40f0:8", ["const:7fa18c:8", "const:4:8"]]
+ 007fa18c ["CALL", null, ["callee:00a1b6a4:8"]]
~~~


<a id="compare-8f28ec8a145bebb995167b6fa5889ce0"></a>

### [`007f927c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f927c.md) → [`007fa1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa1e0.md) FUN_007fa1e0

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
      "definition_site": "007fa200",
      "incomplete_value": false,
      "site": "007fa204",
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
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f929c",
      "incomplete_value": false,
      "site": "007f92a0",
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
            "const:a80:8"
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
      "007fa204",
      "DATA",
      [
        "storage",
        "00c7ca80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa204",
      "DATA",
      [
        "storage",
        "00c7da50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9290 ["INT_ADD", "register:40f0:8", ["const:7f9290:8", "const:4:8"]]
- 007f9290 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fa1f4 ["INT_ADD", "register:40f0:8", ["const:7fa1f4:8", "const:4:8"]]
+ 007fa1f4 ["CALL", null, ["callee:00c58f30:8"]]
- 007f9298 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa1fc ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f929c ["COPY", "tmp:0:8", ["const:a80:8"]]
- 007f929c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f929c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f929c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa200 ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 007fa200 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa200 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa200 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-445dcd97e18614da80e9c949d5176018"></a>

### [`007f92b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f92b4.md) → [`007fa218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa218.md) FUN_007fa218

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
      "definition_site": "007fa21c",
      "incomplete_value": false,
      "site": "007fa220",
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
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f92b8",
      "incomplete_value": false,
      "site": "007f92bc",
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
      "007fa220",
      "DATA",
      [
        "storage",
        "00c7ca80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa220",
      "DATA",
      [
        "storage",
        "00c7da50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f92b4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa218 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f92b8 ["COPY", "tmp:0:8", ["const:a80:8"]]
- 007f92b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f92b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f92b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa21c ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 007fa21c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa21c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa21c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5226f4d562f5f4d7f57cabe739cd739d"></a>

### [`007f9500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9500.md) → [`007fa464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa464.md) FUN_007fa464

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
      "definition_site": "007fa488",
      "incomplete_value": false,
      "site": "007fa488",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f9524",
      "incomplete_value": false,
      "site": "007f9524",
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
      "007fa488",
      "DATA",
      [
        "storage",
        "00c7cb00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa488",
      "DATA",
      [
        "storage",
        "00c7dad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9514 ["INT_ADD", "register:40f0:8", ["const:7f9514:8", "const:4:8"]]
- 007f9514 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fa478 ["INT_ADD", "register:40f0:8", ["const:7fa478:8", "const:4:8"]]
+ 007fa478 ["CALL", null, ["callee:00c58f30:8"]]
- 007f951c ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa480 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f9520 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 007f9520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa484 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007fa484 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa484 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa484 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bbd092f426cd35ff2ec812e728b85908"></a>

### [`007f9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9534.md) → [`007fa498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa498.md) FUN_007fa498

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
      "definition_site": "007fa4a4",
      "incomplete_value": false,
      "site": "007fa4a4",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f9540",
      "incomplete_value": false,
      "site": "007f9540",
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
      "007fa4a4",
      "DATA",
      [
        "storage",
        "00c7cb00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa4a4",
      "DATA",
      [
        "storage",
        "00c7dad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9538 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007fa49c ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f953c ["COPY", "tmp:0:8", ["const:b00:8"]]
- 007f953c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f953c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f953c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fa4a0 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007fa4a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa4a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa4a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8d00d31e87ea762ddc533bae08e2b519"></a>

### [`007f9550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9550.md) → [`007fa4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa4b4.md) FUN_007fa4b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009e3ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3ad4.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`009e4a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e4a80.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

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
      "site": "007fa4f4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f9590",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fa4f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fa4f4",
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
- 007f9590 ["INT_ADD", "register:40f0:8", ["const:7f9590:8", "const:4:8"]]
- 007f9590 ["CALL", null, ["ram:47ad34:8"]]
+ 007fa4f4 ["INT_ADD", "register:40f0:8", ["const:7fa4f4:8", "const:4:8"]]
+ 007fa4f4 ["CALL", null, ["ram:47b054:8"]]
- 007f9584 ["INT_ADD", "register:40f0:8", ["const:7f9584:8", "const:4:8"]]
- 007f9584 ["CALL", null, ["callee:009e4a80:8"]]
+ 007fa4e8 ["INT_ADD", "register:40f0:8", ["const:7fa4e8:8", "const:4:8"]]
+ 007fa4e8 ["CALL", null, ["callee:009e4a80:8"]]
- 007f958c ["INT_ADD", "register:40f0:8", ["const:7f958c:8", "const:4:8"]]
- 007f958c ["CALL", null, ["callee:00a1b6a4:8"]]
+ 007fa4f0 ["INT_ADD", "register:40f0:8", ["const:7fa4f0:8", "const:4:8"]]
+ 007fa4f0 ["CALL", null, ["callee:00a1b6a4:8"]]
~~~


<a id="compare-ec529fa0413aed9b1b1f004176b925ee"></a>

### [`007f95e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f95e0.md) → [`007fa544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa544.md) FUN_007fa544

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
      "definition_site": "007fa564",
      "incomplete_value": false,
      "site": "007fa568",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f9600",
      "incomplete_value": false,
      "site": "007f9604",
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
      "007fa568",
      "DATA",
      [
        "storage",
        "00c7cb80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa568",
      "DATA",
      [
        "storage",
        "00c7db50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f95f4 ["INT_ADD", "register:40f0:8", ["const:7f95f4:8", "const:4:8"]]
- 007f95f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fa558 ["INT_ADD", "register:40f0:8", ["const:7fa558:8", "const:4:8"]]
+ 007fa558 ["CALL", null, ["callee:00c58f30:8"]]
- 007f95fc ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa560 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f9600 ["COPY", "tmp:0:8", ["const:b80:8"]]
- 007f9600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa564 ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 007fa564 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa564 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa564 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7644d32fc89379b84b279fdd2685fc46"></a>

### [`007f9618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9618.md) → [`007fa57c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa57c.md) FUN_007fa57c

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
      "definition_site": "007fa580",
      "incomplete_value": false,
      "site": "007fa584",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f961c",
      "incomplete_value": false,
      "site": "007f9620",
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
      "007fa584",
      "DATA",
      [
        "storage",
        "00c7cb80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa584",
      "DATA",
      [
        "storage",
        "00c7db50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9618 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa57c ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f961c ["COPY", "tmp:0:8", ["const:b80:8"]]
- 007f961c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f961c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f961c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa580 ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 007fa580 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa580 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa580 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a82f437d37ecd5b034b6dcda2febc1a"></a>

### [`007f96cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f96cc.md) → [`007fa630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa630.md) FUN_007fa630

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fa644",
      "incomplete_value": false,
      "site": "007fa648",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f96e0",
      "incomplete_value": false,
      "site": "007f96e4",
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
            "const:c00:8"
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
      "007fa648",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa648",
      "DATA",
      [
        "storage",
        "00c7dbd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f96dc ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa640 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f96e0 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 007f96e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f96e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f96e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa644 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 007fa644 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa644 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa644 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f96f4 ["INT_ADD", "register:40f0:8", ["const:7f96f4:8", "const:4:8"]]
- 007f96f4 ["CALL", null, ["callee:00c54d90:8"]]
+ 007fa658 ["INT_ADD", "register:40f0:8", ["const:7fa658:8", "const:4:8"]]
+ 007fa658 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-0ab958083197bf058e91e28867f0ee82"></a>

### [`007f9728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9728.md) → [`007fa68c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa68c.md) FUN_007fa68c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fa6a4",
      "incomplete_value": false,
      "site": "007fa6a8",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f9740",
      "incomplete_value": false,
      "site": "007f9744",
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
            "const:c00:8"
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
      "007fa6a8",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa6a8",
      "DATA",
      [
        "storage",
        "00c7dbd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f973c ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fa6a0 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007f9740 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 007f9740 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9740 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9740 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa6a4 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 007fa6a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa6a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa6a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f9754 ["INT_ADD", "register:40f0:8", ["const:7f9754:8", "const:4:8"]]
- 007f9754 ["CALL", null, ["callee:00c54d90:8"]]
+ 007fa6b8 ["INT_ADD", "register:40f0:8", ["const:7fa6b8:8", "const:4:8"]]
+ 007fa6b8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-ac78f8a6f5614662c1b3d241f2bb8fb8"></a>

### [`007f9784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9784.md) → [`007fa6e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa6e8.md) FUN_007fa6e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fa70c",
      "incomplete_value": false,
      "site": "007fa710",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f97a8",
      "incomplete_value": false,
      "site": "007f97ac",
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
            "const:c00:8"
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
      "007fa710",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa710",
      "DATA",
      [
        "storage",
        "00c7dbd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9798 ["INT_ADD", "register:40f0:8", ["const:7f9798:8", "const:4:8"]]
- 007f9798 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fa6fc ["INT_ADD", "register:40f0:8", ["const:7fa6fc:8", "const:4:8"]]
+ 007fa6fc ["CALL", null, ["callee:00c58f30:8"]]
- 007f97a4 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007fa708 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f97a8 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 007f97a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f97a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f97a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fa70c ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 007fa70c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa70c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa70c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-be44b38aa9c5510c5d2ef540d05157d0"></a>

### [`007f97dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f97dc.md) → [`007fa740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa740.md) FUN_007fa740

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fa748",
      "incomplete_value": false,
      "site": "007fa74c",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f97e4",
      "incomplete_value": false,
      "site": "007f97e8",
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
            "const:c00:8"
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
      "007fa74c",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa74c",
      "DATA",
      [
        "storage",
        "00c7dbd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f97e0 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007fa744 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007f97e4 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 007f97e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f97e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f97e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fa748 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 007fa748 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa748 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa748 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007f980c ["INT_ADD", "register:40f0:8", ["const:7f980c:8", "const:4:8"]]
- 007f980c ["CALL", null, ["callee:00c54d60:8"]]
+ 007fa770 ["INT_ADD", "register:40f0:8", ["const:7fa770:8", "const:4:8"]]
+ 007fa770 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-f270a4f67550f2ff041e478d9240e18f"></a>

### [`007f9edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9edc.md) → [`007fae40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fae40.md) FUN_007fae40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`007f98b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f98b8.md) [`007f9c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9c28.md) [`009dec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009dec74.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 4件 [`007fa81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fa81c.md) [`007fab8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fab8c.md) [`009dfc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009df/009dfc20.md) [`009e2278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e2/009e2278.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007fae4c",
      "incomplete_value": false,
      "site": "007fae50",
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
      "definition_site": "007f9ee8",
      "incomplete_value": false,
      "site": "007f9eec",
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
      "007fae4c",
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
      "007fae4c",
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
- 007f9eec ["INT_ADD", "register:40f0:8", ["const:7f9eec:8", "const:4:8"]]
- 007f9eec ["CALL", null, ["callee:0043bad8:8"]]
+ 007fae50 ["INT_ADD", "register:40f0:8", ["const:7fae50:8", "const:4:8"]]
+ 007fae50 ["CALL", null, ["callee:0043bad8:8"]]
- 007f9ee4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 007fae48 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007f9ee8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007f9ee8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007f9ee8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007f9ee8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007fae4c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 007fae4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007fae4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007fae4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4da52d8e458ca524d552dc08b20b669f"></a>

### [`007fa068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa068.md) → [`007fafcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fa/007fafcc.md) FUN_007fafcc

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
      "definition_site": "007faff0",
      "incomplete_value": false,
      "site": "007faff0",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa08c",
      "incomplete_value": false,
      "site": "007fa08c",
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
            "const:c80:8"
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
      "007faff0",
      "DATA",
      [
        "storage",
        "00c7cc80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007faff0",
      "DATA",
      [
        "storage",
        "00c7dc50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa07c ["INT_ADD", "register:40f0:8", ["const:7fa07c:8", "const:4:8"]]
- 007fa07c ["CALL", null, ["callee:00c58f30:8"]]
+ 007fafe0 ["INT_ADD", "register:40f0:8", ["const:7fafe0:8", "const:4:8"]]
+ 007fafe0 ["CALL", null, ["callee:00c58f30:8"]]
- 007fa084 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fafe8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa088 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 007fa088 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa088 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa088 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fafec ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 007fafec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fafec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fafec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0decee338239fe46ead2b8407e91969"></a>

### [`007fa09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa09c.md) → [`007fb000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb000.md) FUN_007fb000

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
      "definition_site": "007fb00c",
      "incomplete_value": false,
      "site": "007fb00c",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa0a8",
      "incomplete_value": false,
      "site": "007fa0a8",
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
            "const:c80:8"
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
      "007fb00c",
      "DATA",
      [
        "storage",
        "00c7cc80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb00c",
      "DATA",
      [
        "storage",
        "00c7dc50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa0a0 ["COPY", "register:4048:8", ["const:c7c000:8"]]
+ 007fb004 ["COPY", "register:4048:8", ["const:c7d000:8"]]
- 007fa0a4 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 007fa0a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fa0a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fa0a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fb008 ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 007fb008 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fb008 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fb008 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-15b54ec01b80832294bf56132ee6278e"></a>

### [`007fa0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa0b8.md) → [`007fb01c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb01c.md) FUN_007fb01c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009e3ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3ad4.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`009e4a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e4a80.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

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
      "site": "007fb05c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fa0f8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fb05c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fb05c",
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
- 007fa0f8 ["INT_ADD", "register:40f0:8", ["const:7fa0f8:8", "const:4:8"]]
- 007fa0f8 ["CALL", null, ["ram:47ad34:8"]]
+ 007fb05c ["INT_ADD", "register:40f0:8", ["const:7fb05c:8", "const:4:8"]]
+ 007fb05c ["CALL", null, ["ram:47b054:8"]]
- 007fa0ec ["INT_ADD", "register:40f0:8", ["const:7fa0ec:8", "const:4:8"]]
- 007fa0ec ["CALL", null, ["callee:009e4a80:8"]]
+ 007fb050 ["INT_ADD", "register:40f0:8", ["const:7fb050:8", "const:4:8"]]
+ 007fb050 ["CALL", null, ["callee:009e4a80:8"]]
- 007fa0f4 ["INT_ADD", "register:40f0:8", ["const:7fa0f4:8", "const:4:8"]]
- 007fa0f4 ["CALL", null, ["callee:00a1b6a4:8"]]
+ 007fb058 ["INT_ADD", "register:40f0:8", ["const:7fb058:8", "const:4:8"]]
+ 007fb058 ["CALL", null, ["callee:00a1b6a4:8"]]
~~~


<a id="compare-eaadc882fc0d65508a31a8f492fbeee8"></a>

### [`007fa148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa148.md) → [`007fb0ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb0ac.md) FUN_007fb0ac

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
      "definition_site": "007fb0cc",
      "incomplete_value": false,
      "site": "007fb0d0",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa168",
      "incomplete_value": false,
      "site": "007fa16c",
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
            "const:d00:8"
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
      "007fb0d0",
      "DATA",
      [
        "storage",
        "00c7cd00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb0d0",
      "DATA",
      [
        "storage",
        "00c7dcd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa15c ["INT_ADD", "register:40f0:8", ["const:7fa15c:8", "const:4:8"]]
- 007fa15c ["CALL", null, ["callee:00c58f30:8"]]
+ 007fb0c0 ["INT_ADD", "register:40f0:8", ["const:7fb0c0:8", "const:4:8"]]
+ 007fb0c0 ["CALL", null, ["callee:00c58f30:8"]]
- 007fa164 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fb0c8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa168 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 007fa168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb0cc ["COPY", "tmp:0:8", ["const:cd0:8"]]
+ 007fb0cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb0cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb0cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0e31f0b00298431c26744793c149083e"></a>

### [`007fa180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa180.md) → [`007fb0e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb0e4.md) FUN_007fb0e4

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
      "definition_site": "007fb0e8",
      "incomplete_value": false,
      "site": "007fb0ec",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa184",
      "incomplete_value": false,
      "site": "007fa188",
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
            "const:d00:8"
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
      "007fb0ec",
      "DATA",
      [
        "storage",
        "00c7cd00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb0ec",
      "DATA",
      [
        "storage",
        "00c7dcd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa180 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fb0e4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa184 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 007fa184 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa184 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa184 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb0e8 ["COPY", "tmp:0:8", ["const:cd0:8"]]
+ 007fb0e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb0e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb0e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-36332571fedcf747ea7842a5a8c750fa"></a>

### [`007fa1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa1a0.md) → [`007fb104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb104.md) FUN_007fb104

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 25件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 25件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.16% / 新版 95.16%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007fb22c",
      "incomplete_value": true,
      "site": "007fb22c",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:1e1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa2c8",
      "incomplete_value": true,
      "site": "007fa2c8",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:103:8"
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
      "definition_site": "007fb324",
      "incomplete_value": true,
      "site": "007fb324",
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
                "const:fac:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa3c0",
      "incomplete_value": true,
      "site": "007fa3c0",
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
                "const:f62:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fb364",
      "incomplete_value": false,
      "site": "007fb364",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa400",
      "incomplete_value": false,
      "site": "007fa400",
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
            "const:df0:8"
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
      "007fb1fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fb218",
      "READ",
      [
        "storage",
        "002b4103",
        null,
        "string"
      ]
    ],
    [
      "007fb308",
      "READ",
      [
        "storage",
        "002b2f62",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007fb1fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007fb218",
      "READ",
      [
        "storage",
        "002b41e1",
        null,
        "string"
      ]
    ],
    [
      "007fb308",
      "READ",
      [
        "storage",
        "002b2fac",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa298 ["INT_ADD", "register:40f0:8", ["const:7fa298:8", "const:4:8"]]
- 007fa298 ["CALL", null, ["ram:47ad34:8"]]
+ 007fb1fc ["INT_ADD", "register:40f0:8", ["const:7fb1fc:8", "const:4:8"]]
+ 007fb1fc ["CALL", null, ["ram:47b054:8"]]
- 007fa508 ["INT_ADD", "register:40f0:8", ["const:7fa508:8", "const:4:8"]]
- 007fa508 ["CALL", null, ["ram:47ad34:8"]]
+ 007fb46c ["INT_ADD", "register:40f0:8", ["const:7fb46c:8", "const:4:8"]]
+ 007fb46c ["CALL", null, ["ram:47b054:8"]]
- 007fa534 ["INT_ADD", "register:40f0:8", ["const:7fa534:8", "const:4:8"]]
- 007fa534 ["CALL", null, ["callee:0043e138:8"]]
+ 007fb498 ["INT_ADD", "register:40f0:8", ["const:7fb498:8", "const:4:8"]]
+ 007fb498 ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-02aaa41da3f968209ab2ca3951451893"></a>

### [`007fa7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa7b0.md) → [`007fb714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb714.md) FUN_007fb714

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
      "unmatched:007fa7d4",
      "DATA",
      [
        "storage",
        "00c7cd70",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007fa7dc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007fa7e0",
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
      "007fb738",
      "DATA",
      [
        "storage",
        "00c7dd40",
        null,
        "undefined *"
      ]
    ],
    [
      "007fb740",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007fb744",
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
- 007fa7c4 ["INT_ADD", "register:40f0:8", ["const:7fa7c4:8", "const:4:8"]]
- 007fa7c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fb728 ["INT_ADD", "register:40f0:8", ["const:7fb728:8", "const:4:8"]]
+ 007fb728 ["CALL", null, ["callee:00c58f30:8"]]
- 007fa7cc ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fb730 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa7d0 ["COPY", "tmp:0:8", ["const:d70:8"]]
- 007fa7d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa7d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa7d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3820f3586ba67ef67118b38e2d81b7cc"></a>

### [`007fa7e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa7e8.md) → [`007fb74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb74c.md) FUN_007fb74c

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
      "definition_site": "007fb750",
      "incomplete_value": false,
      "site": "007fb754",
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
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa7ec",
      "incomplete_value": false,
      "site": "007fa7f0",
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
            "const:d70:8"
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
      "007fb754",
      "DATA",
      [
        "storage",
        "00c7cd70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb754",
      "DATA",
      [
        "storage",
        "00c7dd40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa7e8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fb74c ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa7ec ["COPY", "tmp:0:8", ["const:d70:8"]]
- 007fa7ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa7ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa7ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb750 ["COPY", "tmp:0:8", ["const:d40:8"]]
+ 007fb750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b4364f3e63313742c12f27ad3ccc5188"></a>

### [`007fa808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa808.md) → [`007fb76c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb76c.md) FUN_007fb76c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fa83c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fb7a0",
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
- 007fa820 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fa820 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007fb784 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fb784 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 007fa82c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007fa82c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 007fa82c ["CBRANCH", null, ["local:b3:8", "tmp:1:1"]]
+ 007fb790 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007fb790 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 007fb790 ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
- 007fa83c ["INT_ADD", "register:40f0:8", ["const:7fa83c:8", "const:4:8"]]
- 007fa83c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-132deec7a9d02addc85bbf67abd03bf5"></a>

### [`007fa8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa8c0.md) → [`007fb824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb824.md) FUN_007fb824

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
      "definition_site": "007fb838",
      "incomplete_value": false,
      "site": "007fb83c",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa8d4",
      "incomplete_value": false,
      "site": "007fa8d8",
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
            "const:df0:8"
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
      "007fb83c",
      "DATA",
      [
        "storage",
        "00c7cdf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb83c",
      "DATA",
      [
        "storage",
        "00c7ddc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa8cc ["INT_ADD", "register:40f0:8", ["const:7fa8cc:8", "const:4:8"]]
- 007fa8cc ["CALL", null, ["callee:00c58f30:8"]]
+ 007fb830 ["INT_ADD", "register:40f0:8", ["const:7fb830:8", "const:4:8"]]
+ 007fb830 ["CALL", null, ["callee:00c58f30:8"]]
- 007fa8d0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fb834 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa8d4 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 007fa8d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa8d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa8d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb838 ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 007fb838 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb838 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb838 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-17fb85f07260a7cfce50d54eed9bcb66"></a>

### [`007fa8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa8e4.md) → [`007fb848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb848.md) FUN_007fb848

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
      "definition_site": "007fb84c",
      "incomplete_value": false,
      "site": "007fb850",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa8e8",
      "incomplete_value": false,
      "site": "007fa8ec",
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
            "const:df0:8"
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
      "007fb850",
      "DATA",
      [
        "storage",
        "00c7cdf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb850",
      "DATA",
      [
        "storage",
        "00c7ddc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa8e4 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fb848 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa8e8 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 007fa8e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa8e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa8e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb84c ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 007fb84c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb84c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb84c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-05883fae4eb76c3476ba99012942244f"></a>

### [`007fa8fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa8fc.md) → [`007fb860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb860.md) FUN_007fb860

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
      "site": "007fb884",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fa920",
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
      "007fb884",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fb884",
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
- 007fa920 ["INT_ADD", "register:40f0:8", ["const:7fa920:8", "const:4:8"]]
- 007fa920 ["CALL", null, ["ram:47ad34:8"]]
+ 007fb884 ["INT_ADD", "register:40f0:8", ["const:7fb884:8", "const:4:8"]]
+ 007fb884 ["CALL", null, ["ram:47b054:8"]]
- 007fa92c ["INT_ADD", "register:40f0:8", ["const:7fa92c:8", "const:4:8"]]
- 007fa92c ["CALL", null, ["callee:0047d134:8"]]
+ 007fb890 ["INT_ADD", "register:40f0:8", ["const:7fb890:8", "const:4:8"]]
+ 007fb890 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-c057eb8d70d7c9b14b7e1e1833e913a8"></a>

### [`007fa970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa970.md) → [`007fb8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb8d4.md) FUN_007fb8d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fa998",
      "DATA",
      [
        "storage",
        "00c7ce80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007fb8fc",
      "DATA",
      [
        "storage",
        "00c7de50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa984 ["INT_ADD", "register:40f0:8", ["const:7fa984:8", "const:4:8"]]
- 007fa984 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fb8e8 ["INT_ADD", "register:40f0:8", ["const:7fb8e8:8", "const:4:8"]]
+ 007fb8e8 ["CALL", null, ["callee:00c58f30:8"]]
- 007fa988 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fb8ec ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fa98c ["COPY", "tmp:0:8", ["const:e80:8"]]
- 007fa98c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa98c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa98c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aef42d40a2263b554da11fbfccf6afeb"></a>

### [`007fa9b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9b8.md) → [`007fb91c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb91c.md) FUN_007fb91c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 40.00% / 新版 40.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007fa9c0",
      "DATA",
      [
        "storage",
        "00c7ce80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007fb924",
      "DATA",
      [
        "storage",
        "00c7de50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa9b8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007fa9bc ["COPY", "tmp:0:8", ["const:e80:8"]]
- 007fa9bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa9bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa9bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007fa9c0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007fa9c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-b582e85b134f3e0deaf0f841187c2e4b"></a>

### [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) → [`007fb94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb94c.md) FUN_007fb94c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 27件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 27件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.71% / 新版 86.71%

優先判定に残った影響 `call_argument_candidate` 8件, `call_target` 2件, `store_value` 1件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fbdb4",
      "incomplete_value": false,
      "site": "007fbdb4",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fae50",
      "incomplete_value": false,
      "site": "007fae50",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007faa70",
      "incomplete_value": true,
      "site": "007faa80",
      "value": [
        "live",
        "register:4048:8"
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
      "definition_site": "007faa74",
      "incomplete_value": true,
      "site": "007faa80",
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
      "unmatched:007faa24",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "unmatched:007faa60",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ],
    [
      "unmatched:007faa64",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007fb988",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "007fb9c4",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ],
    [
      "007fb9c8",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007faa80 ["INT_ADD", "register:40f0:8", ["const:7faa80:8", "const:4:8"]]
- 007faa80 ["CALL", null, ["callee:009dde40:8"]]
+ 007fb9e4 ["INT_ADD", "register:40f0:8", ["const:7fb9e4:8", "const:4:8"]]
+ 007fb9e4 ["CALL", null, ["callee:009dde40:8"]]
- 007fabb0 ["INT_ADD", "register:40f0:8", ["const:7fabb0:8", "const:4:8"]]
- 007fabb0 ["CALL", null, ["callee:0074538c:8"]]
+ 007fbb14 ["INT_ADD", "register:40f0:8", ["const:7fbb14:8", "const:4:8"]]
+ 007fbb14 ["CALL", null, ["callee:0074538c:8"]]
- 007fabe4 ["INT_ADD", "register:40f0:8", ["const:7fabe4:8", "const:4:8"]]
- 007fabe4 ["CALL", null, ["callee:0074538c:8"]]
+ 007fbb48 ["INT_ADD", "register:40f0:8", ["const:7fbb48:8", "const:4:8"]]
+ 007fbb48 ["CALL", null, ["callee:0074538c:8"]]
~~~


<a id="compare-c282a72ada2e8017786cac944101c066"></a>

### [`007faf94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007faf94.md) → [`007fbef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fbef8.md) FUN_007fbef8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) [`007fbe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbe60.md) · 呼出先 11件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`007441f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007441f0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 2件 [`007fb94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb94c.md) [`007fcdc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fcdc4.md) · 呼出先 11件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md) [`007445a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/007445a0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 81.31% / 新版 81.31%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_destination` 7件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007fc070",
      "incomplete_value": false,
      "site": "007fc070",
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
      "definition_site": "007fb10c",
      "incomplete_value": false,
      "site": "007fb10c",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007fc074",
      "incomplete_value": false,
      "site": "007fc074",
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
      "definition_site": "007fb110",
      "incomplete_value": false,
      "site": "007fb110",
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
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fc070",
      "incomplete_value": false,
      "site": "007fc074",
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
      "definition_site": "007fb10c",
      "incomplete_value": false,
      "site": "007fb110",
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
      "007fbf44",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "007fbf50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006648e0"
      ]
    ],
    [
      "007fbf5c",
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
      "007fbf44",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "007fbf50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00664c90"
      ]
    ],
    [
      "007fbf5c",
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
- 007fafec ["INT_ADD", "register:40f0:8", ["const:7fafec:8", "const:4:8"]]
- 007fafec ["CALL", null, ["ram:6648e0:8"]]
+ 007fbf50 ["INT_ADD", "register:40f0:8", ["const:7fbf50:8", "const:4:8"]]
+ 007fbf50 ["CALL", null, ["ram:664c90:8"]]
- 007fb018 ["INT_ADD", "register:40f0:8", ["const:7fb018:8", "const:4:8"]]
- 007fb018 ["CALL", null, ["callee:0047ec3c:8"]]
+ 007fbf7c ["INT_ADD", "register:40f0:8", ["const:7fbf7c:8", "const:4:8"]]
+ 007fbf7c ["CALL", null, ["callee:0047ec3c:8"]]
- 007fb0e0 ["INT_ADD", "register:40f0:8", ["const:7fb0e0:8", "const:4:8"]]
- 007fb0e0 ["CALL", null, ["callee:00c58ef0:8"]]
+ 007fc044 ["INT_ADD", "register:40f0:8", ["const:7fc044:8", "const:4:8"]]
+ 007fc044 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-94a5e72b97231c4cbb9995c3264234e9"></a>

### [`007fb170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb170.md) → [`007fc0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc0d4.md) FUN_007fc0d4

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
      "definition_site": "007fc0e8",
      "incomplete_value": false,
      "site": "007fc0ec",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fb184",
      "incomplete_value": false,
      "site": "007fb188",
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
      "007fc0ec",
      "DATA",
      [
        "storage",
        "00c7cef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc0ec",
      "DATA",
      [
        "storage",
        "00c7dec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fb17c ["INT_ADD", "register:40f0:8", ["const:7fb17c:8", "const:4:8"]]
- 007fb17c ["CALL", null, ["callee:00c58f30:8"]]
+ 007fc0e0 ["INT_ADD", "register:40f0:8", ["const:7fc0e0:8", "const:4:8"]]
+ 007fc0e0 ["CALL", null, ["callee:00c58f30:8"]]
- 007fb180 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fc0e4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fb184 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 007fb184 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb184 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb184 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc0e8 ["COPY", "tmp:0:8", ["const:ec0:8"]]
+ 007fc0e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b6f91d35e31cb3b283ed51000207adfc"></a>

### [`007fb194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb194.md) → [`007fc0f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc0f8.md) FUN_007fc0f8

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
      "definition_site": "007fc0fc",
      "incomplete_value": false,
      "site": "007fc100",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fb198",
      "incomplete_value": false,
      "site": "007fb19c",
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
      "007fc100",
      "DATA",
      [
        "storage",
        "00c7cef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc100",
      "DATA",
      [
        "storage",
        "00c7dec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fb194 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fc0f8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fb198 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 007fb198 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb198 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb198 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc0fc ["COPY", "tmp:0:8", ["const:ec0:8"]]
+ 007fc0fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f80fe28eb159cce678ac501a018d24f1"></a>

### [`007fb1ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb1ac.md) → [`007fc110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc110.md) FUN_007fc110

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
      "site": "007fc134",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fb1d0",
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
      "007fc134",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fc134",
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
- 007fb1d0 ["INT_ADD", "register:40f0:8", ["const:7fb1d0:8", "const:4:8"]]
- 007fb1d0 ["CALL", null, ["ram:47ad34:8"]]
+ 007fc134 ["INT_ADD", "register:40f0:8", ["const:7fc134:8", "const:4:8"]]
+ 007fc134 ["CALL", null, ["ram:47b054:8"]]
- 007fb1dc ["INT_ADD", "register:40f0:8", ["const:7fb1dc:8", "const:4:8"]]
- 007fb1dc ["CALL", null, ["callee:0047d134:8"]]
+ 007fc140 ["INT_ADD", "register:40f0:8", ["const:7fc140:8", "const:4:8"]]
+ 007fc140 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-40943870ca3033188e4dad591937a21a"></a>

### [`007fb220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb220.md) → [`007fc184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc184.md) FUN_007fc184

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
      "unmatched:007fb248",
      "DATA",
      [
        "storage",
        "00c7cf80",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007fb254",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007fb258",
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
      "007fc1ac",
      "DATA",
      [
        "storage",
        "00c7df50",
        null,
        "undefined *"
      ]
    ],
    [
      "007fc1b8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007fc1bc",
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
- 007fb234 ["INT_ADD", "register:40f0:8", ["const:7fb234:8", "const:4:8"]]
- 007fb234 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fc198 ["INT_ADD", "register:40f0:8", ["const:7fc198:8", "const:4:8"]]
+ 007fc198 ["CALL", null, ["callee:00c58f30:8"]]
- 007fb240 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fc1a4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fb244 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007fb244 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb244 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb244 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-751cfd94d9ac136ca3e678dae9285078"></a>

### [`007fb260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb260.md) → [`007fc1c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc1c4.md) FUN_007fc1c4

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
      "definition_site": "007fc1c8",
      "incomplete_value": false,
      "site": "007fc1cc",
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
            "const:f50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fb264",
      "incomplete_value": false,
      "site": "007fb268",
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
            "const:f80:8"
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
      "007fc1cc",
      "DATA",
      [
        "storage",
        "00c7cf80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc1cc",
      "DATA",
      [
        "storage",
        "00c7df50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fb260 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fc1c4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fb264 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 007fb264 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb264 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb264 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc1c8 ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 007fc1c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc1c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc1c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58e20ceff67ae252b0569807e8668d3d"></a>

### [`007fbdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbdf8.md) → [`007fcd5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fcd5c.md) FUN_007fcd5c

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
      "definition_site": "007fcd80",
      "incomplete_value": false,
      "site": "007fcd84",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fbe1c",
      "incomplete_value": false,
      "site": "007fbe20",
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
            "const:0:8"
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
      "007fcd84",
      "DATA",
      [
        "storage",
        "00c7d000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcd84",
      "DATA",
      [
        "storage",
        "00c7dfd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fbe0c ["INT_ADD", "register:40f0:8", ["const:7fbe0c:8", "const:4:8"]]
- 007fbe0c ["CALL", null, ["callee:00c58f30:8"]]
+ 007fcd70 ["INT_ADD", "register:40f0:8", ["const:7fcd70:8", "const:4:8"]]
+ 007fcd70 ["CALL", null, ["callee:00c58f30:8"]]
- 007fbe1c ["COPY", "tmp:0:8", ["const:0:8"]]
- 007fbe1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fbe1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fbe1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcd80 ["COPY", "tmp:0:8", ["const:fd0:8"]]
+ 007fcd80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcd80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcd80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-629fe00b1ac8b77e3b1f61736cd572b0"></a>

### [`007fbe38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbe38.md) → [`007fcd9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fcd9c.md) FUN_007fcd9c

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
      "definition_site": "007fcda0",
      "incomplete_value": false,
      "site": "007fcda4",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fbe3c",
      "incomplete_value": false,
      "site": "007fbe40",
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
      "007fcda4",
      "DATA",
      [
        "storage",
        "00c7d000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcda4",
      "DATA",
      [
        "storage",
        "00c7dfd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fbe3c ["COPY", "tmp:0:8", ["const:0:8"]]
- 007fbe3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fbe3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fbe3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcda0 ["COPY", "tmp:0:8", ["const:fd0:8"]]
+ 007fcda0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcda0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcda0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-be207982d15454c9a8422b1c626c6b16"></a>

### [`007fbe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbe60.md) → [`007fcdc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fcdc4.md) FUN_007fcdc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00743de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743de8.md) [`00743eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743eb4.md) [`00744fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744fcc.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00744198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744198.md) [`00744264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744264.md) [`0074537c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/0074537c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fce08",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fbea4",
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
      "site": "007fce28",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fbec4",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "007fce08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fce28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fce08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007fce28",
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
- 007fbea4 ["INT_ADD", "register:40f0:8", ["const:7fbea4:8", "const:4:8"]]
- 007fbea4 ["CALL", null, ["ram:47ad34:8"]]
+ 007fce08 ["INT_ADD", "register:40f0:8", ["const:7fce08:8", "const:4:8"]]
+ 007fce08 ["CALL", null, ["ram:47b054:8"]]
- 007fbec4 ["INT_ADD", "register:40f0:8", ["const:7fbec4:8", "const:4:8"]]
- 007fbec4 ["CALL", null, ["ram:47ad34:8"]]
+ 007fce28 ["INT_ADD", "register:40f0:8", ["const:7fce28:8", "const:4:8"]]
+ 007fce28 ["CALL", null, ["ram:47b054:8"]]
- 007fbe88 ["INT_ADD", "register:40f0:8", ["const:7fbe88:8", "const:4:8"]]
- 007fbe88 ["CALL", null, ["callee:008b7f4c:8"]]
+ 007fcdec ["INT_ADD", "register:40f0:8", ["const:7fcdec:8", "const:4:8"]]
+ 007fcdec ["CALL", null, ["callee:008b7f4c:8"]]
~~~


<a id="compare-83232a69dc580317cc86d90d387707bc"></a>

### [`007fc078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc078.md) → [`007fcfdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fcfdc.md) FUN_007fcfdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 0件 
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 0件 

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007fcfec",
      "incomplete_value": true,
      "site": "007fcff0",
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
      "definition_site": "007fc088",
      "incomplete_value": true,
      "site": "007fc08c",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 007fc080 ["COPY", "tmp:0:8", ["const:9bb:8"]]
- 007fc080 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc080 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc080 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fcfe4 ["COPY", "tmp:0:8", ["const:9fb:8"]]
+ 007fcfe4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcfe4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcfe4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3affd2d9ab0683eebf076bd7b8cc3fd5"></a>

### [`007fc0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc0a4.md) → [`007fd008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd008.md) FUN_007fd008

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
      "definition_site": "007fd01c",
      "incomplete_value": false,
      "site": "007fd020",
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
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc0b8",
      "incomplete_value": false,
      "site": "007fc0bc",
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
      "007fd020",
      "DATA",
      [
        "storage",
        "00c7d080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd020",
      "DATA",
      [
        "storage",
        "00c7e050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc0b0 ["INT_ADD", "register:40f0:8", ["const:7fc0b0:8", "const:4:8"]]
- 007fc0b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd014 ["INT_ADD", "register:40f0:8", ["const:7fd014:8", "const:4:8"]]
+ 007fd014 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc0b4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd018 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc0b8 ["COPY", "tmp:0:8", ["const:80:8"]]
- 007fc0b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc0b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc0b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd01c ["COPY", "tmp:0:8", ["const:50:8"]]
+ 007fd01c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd01c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd01c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2c989d7bf7d2fb5b7a229c631367d07f"></a>

### [`007fc0c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc0c8.md) → [`007fd02c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd02c.md) FUN_007fd02c

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
      "definition_site": "007fd030",
      "incomplete_value": false,
      "site": "007fd034",
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
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc0cc",
      "incomplete_value": false,
      "site": "007fc0d0",
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
      "007fd034",
      "DATA",
      [
        "storage",
        "00c7d080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd034",
      "DATA",
      [
        "storage",
        "00c7e050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc0c8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd02c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc0cc ["COPY", "tmp:0:8", ["const:80:8"]]
- 007fc0cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc0cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc0cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd030 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 007fd030 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd030 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd030 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f88b3a5bc4c4c096b0d905b6553a26c7"></a>

### [`007fc0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc0e0.md) → [`007fd044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd044.md) FUN_007fd044

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
      "site": "007fd068",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc104",
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
      "007fd068",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd068",
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
- 007fc104 ["INT_ADD", "register:40f0:8", ["const:7fc104:8", "const:4:8"]]
- 007fc104 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd068 ["INT_ADD", "register:40f0:8", ["const:7fd068:8", "const:4:8"]]
+ 007fd068 ["CALL", null, ["ram:47b054:8"]]
- 007fc110 ["INT_ADD", "register:40f0:8", ["const:7fc110:8", "const:4:8"]]
- 007fc110 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd074 ["INT_ADD", "register:40f0:8", ["const:7fd074:8", "const:4:8"]]
+ 007fd074 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-ead381572dd2dd1c89ee56feee1b2700"></a>

### [`007fc154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc154.md) → [`007fd0b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd0b8.md) FUN_007fd0b8

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
      "definition_site": "007fd0cc",
      "incomplete_value": false,
      "site": "007fd0d0",
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
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc168",
      "incomplete_value": false,
      "site": "007fc16c",
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
            "const:100:8"
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
      "007fd0d0",
      "DATA",
      [
        "storage",
        "00c7d100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd0d0",
      "DATA",
      [
        "storage",
        "00c7e0d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc160 ["INT_ADD", "register:40f0:8", ["const:7fc160:8", "const:4:8"]]
- 007fc160 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd0c4 ["INT_ADD", "register:40f0:8", ["const:7fd0c4:8", "const:4:8"]]
+ 007fd0c4 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc164 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd0c8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc168 ["COPY", "tmp:0:8", ["const:100:8"]]
- 007fc168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd0cc ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 007fd0cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5c2953c66e9a13e7e026752f2f3f8942"></a>

### [`007fc178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc178.md) → [`007fd0dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd0dc.md) FUN_007fd0dc

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
      "definition_site": "007fd0e0",
      "incomplete_value": false,
      "site": "007fd0e4",
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
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc17c",
      "incomplete_value": false,
      "site": "007fc180",
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
      "007fd0e4",
      "DATA",
      [
        "storage",
        "00c7d100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd0e4",
      "DATA",
      [
        "storage",
        "00c7e0d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc178 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd0dc ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc17c ["COPY", "tmp:0:8", ["const:100:8"]]
- 007fc17c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc17c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc17c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd0e0 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 007fd0e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c6a8d7f5e68d4186a699543bc7e43710"></a>

### [`007fc190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc190.md) → [`007fd0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd0f4.md) FUN_007fd0f4

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
      "site": "007fd118",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc1b4",
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
      "007fd118",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd118",
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
- 007fc1b4 ["INT_ADD", "register:40f0:8", ["const:7fc1b4:8", "const:4:8"]]
- 007fc1b4 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd118 ["INT_ADD", "register:40f0:8", ["const:7fd118:8", "const:4:8"]]
+ 007fd118 ["CALL", null, ["ram:47b054:8"]]
- 007fc1c0 ["INT_ADD", "register:40f0:8", ["const:7fc1c0:8", "const:4:8"]]
- 007fc1c0 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd124 ["INT_ADD", "register:40f0:8", ["const:7fd124:8", "const:4:8"]]
+ 007fd124 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-3f3c51c021dbfeffd19262be1f988147"></a>

### [`007fc204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc204.md) → [`007fd168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd168.md) FUN_007fd168

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
      "definition_site": "007fd17c",
      "incomplete_value": false,
      "site": "007fd180",
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
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc218",
      "incomplete_value": false,
      "site": "007fc21c",
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
            "const:180:8"
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
      "007fd180",
      "DATA",
      [
        "storage",
        "00c7d180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd180",
      "DATA",
      [
        "storage",
        "00c7e150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc210 ["INT_ADD", "register:40f0:8", ["const:7fc210:8", "const:4:8"]]
- 007fc210 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd174 ["INT_ADD", "register:40f0:8", ["const:7fd174:8", "const:4:8"]]
+ 007fd174 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc214 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd178 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc218 ["COPY", "tmp:0:8", ["const:180:8"]]
- 007fc218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd17c ["COPY", "tmp:0:8", ["const:150:8"]]
+ 007fd17c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd17c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd17c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c91e307e6c86b3bfad4c91508bafacf4"></a>

### [`007fc228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc228.md) → [`007fd18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd18c.md) FUN_007fd18c

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
      "definition_site": "007fd190",
      "incomplete_value": false,
      "site": "007fd194",
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
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc22c",
      "incomplete_value": false,
      "site": "007fc230",
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
      "007fd194",
      "DATA",
      [
        "storage",
        "00c7d180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd194",
      "DATA",
      [
        "storage",
        "00c7e150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc228 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd18c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc22c ["COPY", "tmp:0:8", ["const:180:8"]]
- 007fc22c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc22c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc22c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd190 ["COPY", "tmp:0:8", ["const:150:8"]]
+ 007fd190 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd190 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd190 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9110c57d9e9086a238e8b8d435ca69cb"></a>

### [`007fc240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc240.md) → [`007fd1a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd1a4.md) FUN_007fd1a4

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
      "site": "007fd1c8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc264",
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
      "007fd1c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd1c8",
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
- 007fc264 ["INT_ADD", "register:40f0:8", ["const:7fc264:8", "const:4:8"]]
- 007fc264 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd1c8 ["INT_ADD", "register:40f0:8", ["const:7fd1c8:8", "const:4:8"]]
+ 007fd1c8 ["CALL", null, ["ram:47b054:8"]]
- 007fc270 ["INT_ADD", "register:40f0:8", ["const:7fc270:8", "const:4:8"]]
- 007fc270 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd1d4 ["INT_ADD", "register:40f0:8", ["const:7fd1d4:8", "const:4:8"]]
+ 007fd1d4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-b77d05b7d3be6c9c14bde7b448939c82"></a>

### [`007fc2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc2b4.md) → [`007fd218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd218.md) FUN_007fd218

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
      "definition_site": "007fd23c",
      "incomplete_value": false,
      "site": "007fd23c",
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
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc2d8",
      "incomplete_value": false,
      "site": "007fc2d8",
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
            "const:200:8"
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
      "007fd23c",
      "DATA",
      [
        "storage",
        "00c7d200",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd23c",
      "DATA",
      [
        "storage",
        "00c7e1d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc2c8 ["INT_ADD", "register:40f0:8", ["const:7fc2c8:8", "const:4:8"]]
- 007fc2c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd22c ["INT_ADD", "register:40f0:8", ["const:7fd22c:8", "const:4:8"]]
+ 007fd22c ["CALL", null, ["callee:00c58f30:8"]]
- 007fc2d0 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd234 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc2d4 ["COPY", "tmp:0:8", ["const:200:8"]]
- 007fc2d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc2d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc2d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd238 ["COPY", "tmp:0:8", ["const:1d0:8"]]
+ 007fd238 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd238 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd238 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-23365e308d87a0db3bf4aefe38b3efa1"></a>

### [`007fc2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc2e8.md) → [`007fd24c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd24c.md) FUN_007fd24c

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
      "definition_site": "007fd258",
      "incomplete_value": false,
      "site": "007fd258",
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
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc2f4",
      "incomplete_value": false,
      "site": "007fc2f4",
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
      "007fd258",
      "DATA",
      [
        "storage",
        "00c7d200",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd258",
      "DATA",
      [
        "storage",
        "00c7e1d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc2ec ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007fd250 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fc2f0 ["COPY", "tmp:0:8", ["const:200:8"]]
- 007fc2f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc2f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc2f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fd254 ["COPY", "tmp:0:8", ["const:1d0:8"]]
+ 007fd254 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd254 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd254 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e0b961928d4d3f797c238061e56257ad"></a>

### [`007fc304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc304.md) → [`007fd268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd268.md) FUN_007fd268

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
      "site": "007fd28c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc328",
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
      "007fd28c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd28c",
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
- 007fc328 ["INT_ADD", "register:40f0:8", ["const:7fc328:8", "const:4:8"]]
- 007fc328 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd28c ["INT_ADD", "register:40f0:8", ["const:7fd28c:8", "const:4:8"]]
+ 007fd28c ["CALL", null, ["ram:47b054:8"]]
- 007fc334 ["INT_ADD", "register:40f0:8", ["const:7fc334:8", "const:4:8"]]
- 007fc334 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd298 ["INT_ADD", "register:40f0:8", ["const:7fd298:8", "const:4:8"]]
+ 007fd298 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-72f866705fa9e47004bd8707e1cafe9b"></a>

### [`007fc378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc378.md) → [`007fd2dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd2dc.md) FUN_007fd2dc

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
      "definition_site": "007fd300",
      "incomplete_value": false,
      "site": "007fd300",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc39c",
      "incomplete_value": false,
      "site": "007fc39c",
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
            "const:280:8"
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
      "007fd300",
      "DATA",
      [
        "storage",
        "00c7d280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd300",
      "DATA",
      [
        "storage",
        "00c7e250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc38c ["INT_ADD", "register:40f0:8", ["const:7fc38c:8", "const:4:8"]]
- 007fc38c ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd2f0 ["INT_ADD", "register:40f0:8", ["const:7fd2f0:8", "const:4:8"]]
+ 007fd2f0 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc394 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd2f8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc398 ["COPY", "tmp:0:8", ["const:280:8"]]
- 007fc398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd2fc ["COPY", "tmp:0:8", ["const:250:8"]]
+ 007fd2fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd2fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd2fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5ab113602eed7fad7b03c7e1ae327e72"></a>

### [`007fc3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc3ac.md) → [`007fd310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd310.md) FUN_007fd310

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
      "definition_site": "007fd31c",
      "incomplete_value": false,
      "site": "007fd31c",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc3b8",
      "incomplete_value": false,
      "site": "007fc3b8",
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
            "const:280:8"
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
      "007fd31c",
      "DATA",
      [
        "storage",
        "00c7d280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd31c",
      "DATA",
      [
        "storage",
        "00c7e250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc3b0 ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007fd314 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fc3b4 ["COPY", "tmp:0:8", ["const:280:8"]]
- 007fc3b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc3b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc3b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fd318 ["COPY", "tmp:0:8", ["const:250:8"]]
+ 007fd318 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd318 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd318 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-76c4540a7060b5f1d38bbba0fe394c46"></a>

### [`007fc3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc3c8.md) → [`007fd32c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd32c.md) FUN_007fd32c

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
      "site": "007fd350",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc3ec",
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
      "007fd350",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd350",
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
- 007fc3ec ["INT_ADD", "register:40f0:8", ["const:7fc3ec:8", "const:4:8"]]
- 007fc3ec ["CALL", null, ["ram:47ad34:8"]]
+ 007fd350 ["INT_ADD", "register:40f0:8", ["const:7fd350:8", "const:4:8"]]
+ 007fd350 ["CALL", null, ["ram:47b054:8"]]
- 007fc3f8 ["INT_ADD", "register:40f0:8", ["const:7fc3f8:8", "const:4:8"]]
- 007fc3f8 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd35c ["INT_ADD", "register:40f0:8", ["const:7fd35c:8", "const:4:8"]]
+ 007fd35c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-ddb08ae2c64711f3851f3e92061a46e4"></a>

### [`007fc43c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc43c.md) → [`007fd3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd3a0.md) FUN_007fd3a0

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
      "definition_site": "007fd3b4",
      "incomplete_value": false,
      "site": "007fd3b8",
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
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc450",
      "incomplete_value": false,
      "site": "007fc454",
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
            "const:300:8"
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
      "007fd3b8",
      "DATA",
      [
        "storage",
        "00c7d300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd3b8",
      "DATA",
      [
        "storage",
        "00c7e2d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc448 ["INT_ADD", "register:40f0:8", ["const:7fc448:8", "const:4:8"]]
- 007fc448 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd3ac ["INT_ADD", "register:40f0:8", ["const:7fd3ac:8", "const:4:8"]]
+ 007fd3ac ["CALL", null, ["callee:00c58f30:8"]]
- 007fc44c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd3b0 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc450 ["COPY", "tmp:0:8", ["const:300:8"]]
- 007fc450 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc450 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc450 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd3b4 ["COPY", "tmp:0:8", ["const:2d0:8"]]
+ 007fd3b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd3b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd3b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1d6742f245cc5e9b4764004aca2f2240"></a>

### [`007fc460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc460.md) → [`007fd3c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd3c4.md) FUN_007fd3c4

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
      "definition_site": "007fd3c8",
      "incomplete_value": false,
      "site": "007fd3cc",
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
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc464",
      "incomplete_value": false,
      "site": "007fc468",
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
            "const:300:8"
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
      "007fd3cc",
      "DATA",
      [
        "storage",
        "00c7d300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd3cc",
      "DATA",
      [
        "storage",
        "00c7e2d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc460 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd3c4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc464 ["COPY", "tmp:0:8", ["const:300:8"]]
- 007fc464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd3c8 ["COPY", "tmp:0:8", ["const:2d0:8"]]
+ 007fd3c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd3c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd3c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eca692357978b8c0b0f36a6f526fef7e"></a>

### [`007fc478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc478.md) → [`007fd3dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd3dc.md) FUN_007fd3dc

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
      "site": "007fd400",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc49c",
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
      "007fd400",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd400",
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
- 007fc49c ["INT_ADD", "register:40f0:8", ["const:7fc49c:8", "const:4:8"]]
- 007fc49c ["CALL", null, ["ram:47ad34:8"]]
+ 007fd400 ["INT_ADD", "register:40f0:8", ["const:7fd400:8", "const:4:8"]]
+ 007fd400 ["CALL", null, ["ram:47b054:8"]]
- 007fc4a8 ["INT_ADD", "register:40f0:8", ["const:7fc4a8:8", "const:4:8"]]
- 007fc4a8 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd40c ["INT_ADD", "register:40f0:8", ["const:7fd40c:8", "const:4:8"]]
+ 007fd40c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-7ea092136a763a02ba667d888d64996d"></a>

### [`007fc4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc4ec.md) → [`007fd450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd450.md) FUN_007fd450

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
      "definition_site": "007fd474",
      "incomplete_value": false,
      "site": "007fd474",
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
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc510",
      "incomplete_value": false,
      "site": "007fc510",
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
            "const:380:8"
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
      "007fd474",
      "DATA",
      [
        "storage",
        "00c7d380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd474",
      "DATA",
      [
        "storage",
        "00c7e350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc500 ["INT_ADD", "register:40f0:8", ["const:7fc500:8", "const:4:8"]]
- 007fc500 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd464 ["INT_ADD", "register:40f0:8", ["const:7fd464:8", "const:4:8"]]
+ 007fd464 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc508 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd46c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc50c ["COPY", "tmp:0:8", ["const:380:8"]]
- 007fc50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd470 ["COPY", "tmp:0:8", ["const:350:8"]]
+ 007fd470 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd470 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd470 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7846445e28ef35c1c5ffea77aafce91c"></a>

### [`007fc520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc520.md) → [`007fd484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd484.md) FUN_007fd484

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
      "definition_site": "007fd490",
      "incomplete_value": false,
      "site": "007fd490",
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
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc52c",
      "incomplete_value": false,
      "site": "007fc52c",
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
            "const:380:8"
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
      "007fd490",
      "DATA",
      [
        "storage",
        "00c7d380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd490",
      "DATA",
      [
        "storage",
        "00c7e350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc524 ["COPY", "register:4048:8", ["const:c7d000:8"]]
+ 007fd488 ["COPY", "register:4048:8", ["const:c7e000:8"]]
- 007fc528 ["COPY", "tmp:0:8", ["const:380:8"]]
- 007fc528 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc528 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc528 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fd48c ["COPY", "tmp:0:8", ["const:350:8"]]
+ 007fd48c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd48c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd48c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ebd1dd489b6e756d3d33a96886b707b6"></a>

### [`007fc53c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc53c.md) → [`007fd4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd4a0.md) FUN_007fd4a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd4c8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc564",
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
      "007fd4c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd4c8",
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
- 007fc564 ["INT_ADD", "register:40f0:8", ["const:7fc564:8", "const:4:8"]]
- 007fc564 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd4c8 ["INT_ADD", "register:40f0:8", ["const:7fd4c8:8", "const:4:8"]]
+ 007fd4c8 ["CALL", null, ["ram:47b054:8"]]
- 007fc570 ["INT_ADD", "register:40f0:8", ["const:7fc570:8", "const:4:8"]]
- 007fc570 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd4d4 ["INT_ADD", "register:40f0:8", ["const:7fd4d4:8", "const:4:8"]]
+ 007fd4d4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-7a01bc809160a8f1ffd771da66d73352"></a>

### [`007fc5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc5f8.md) → [`007fd55c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd55c.md) FUN_007fd55c

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
      "definition_site": "007fd570",
      "incomplete_value": false,
      "site": "007fd574",
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
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc60c",
      "incomplete_value": false,
      "site": "007fc610",
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
            "const:400:8"
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
      "007fd574",
      "DATA",
      [
        "storage",
        "00c7d400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd574",
      "DATA",
      [
        "storage",
        "00c7e3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc604 ["INT_ADD", "register:40f0:8", ["const:7fc604:8", "const:4:8"]]
- 007fc604 ["CALL", null, ["callee:00c58f30:8"]]
+ 007fd568 ["INT_ADD", "register:40f0:8", ["const:7fd568:8", "const:4:8"]]
+ 007fd568 ["CALL", null, ["callee:00c58f30:8"]]
- 007fc608 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd56c ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc60c ["COPY", "tmp:0:8", ["const:400:8"]]
- 007fc60c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc60c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc60c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd570 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 007fd570 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd570 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd570 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9c850704071f8a296985d01c023be305"></a>

### [`007fc61c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc61c.md) → [`007fd580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd580.md) FUN_007fd580

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
      "definition_site": "007fd584",
      "incomplete_value": false,
      "site": "007fd588",
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
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc620",
      "incomplete_value": false,
      "site": "007fc624",
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
      "007fd588",
      "DATA",
      [
        "storage",
        "00c7d400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd588",
      "DATA",
      [
        "storage",
        "00c7e3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc61c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fd580 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fc620 ["COPY", "tmp:0:8", ["const:400:8"]]
- 007fc620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd584 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 007fd584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ea34840c8895012983aff3091afa841"></a>

### [`007fc634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc634.md) → [`007fd598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fd/007fd598.md) FUN_007fd598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd5bc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc658",
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
      "007fd5bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007fd5bc",
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
- 007fc658 ["INT_ADD", "register:40f0:8", ["const:7fc658:8", "const:4:8"]]
- 007fc658 ["CALL", null, ["ram:47ad34:8"]]
+ 007fd5bc ["INT_ADD", "register:40f0:8", ["const:7fd5bc:8", "const:4:8"]]
+ 007fd5bc ["CALL", null, ["ram:47b054:8"]]
- 007fc664 ["INT_ADD", "register:40f0:8", ["const:7fc664:8", "const:4:8"]]
- 007fc664 ["CALL", null, ["callee:0047d134:8"]]
+ 007fd5c8 ["INT_ADD", "register:40f0:8", ["const:7fd5c8:8", "const:4:8"]]
+ 007fd5c8 ["CALL", null, ["callee:0047d134:8"]]
- 007fc684 ["INT_ADD", "register:40f0:8", ["const:7fc684:8", "const:4:8"]]
- 007fc684 ["CALL", null, ["callee:008524fc:8"]]
+ 007fd5e8 ["INT_ADD", "register:40f0:8", ["const:7fd5e8:8", "const:4:8"]]
+ 007fd5e8 ["CALL", null, ["callee:008524fc:8"]]
~~~


