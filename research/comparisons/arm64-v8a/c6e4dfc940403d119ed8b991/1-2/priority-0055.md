# v16.0.2 → v16.0.3 · 最優先の変更候補 (55)

[一覧の目次](README.md)

<a id="compare-7ff7817d4f014fadd3e106d9b19d519d"></a>

### [`008749f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008749f8.md) → [`008759a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008759a4.md) FUN_008759a4

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
      "definition_site": "008759c8",
      "incomplete_value": false,
      "site": "008759cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874a1c",
      "incomplete_value": false,
      "site": "00874a20",
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
            "const:e00:8"
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
      "008759cc",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008759cc",
      "DATA",
      [
        "storage",
        "00c80dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874a0c ["INT_ADD", "register:40f0:8", ["const:874a0c:8", "const:4:8"]]
- 00874a0c ["CALL", null, ["callee:00c58f30:8"]]
+ 008759b8 ["INT_ADD", "register:40f0:8", ["const:8759b8:8", "const:4:8"]]
+ 008759b8 ["CALL", null, ["callee:00c58f30:8"]]
- 00874a18 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 008759c4 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00874a1c ["COPY", "tmp:0:8", ["const:e00:8"]]
- 00874a1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874a1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874a1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008759c8 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 008759c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008759c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008759c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b21f7a73f7f1f5ef09d9ca233d30f371"></a>

### [`00874a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874a50.md) → [`008759fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008759fc.md) FUN_008759fc

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
      "definition_site": "00875a04",
      "incomplete_value": false,
      "site": "00875a08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874a58",
      "incomplete_value": false,
      "site": "00874a5c",
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
            "const:e00:8"
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
      "00875a08",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875a08",
      "DATA",
      [
        "storage",
        "00c80dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874a54 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875a00 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00874a58 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 00874a58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874a58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874a58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875a04 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 00875a04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875a04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875a04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00874a80 ["INT_ADD", "register:40f0:8", ["const:874a80:8", "const:4:8"]]
- 00874a80 ["CALL", null, ["callee:00c54d60:8"]]
+ 00875a2c ["INT_ADD", "register:40f0:8", ["const:875a2c:8", "const:4:8"]]
+ 00875a2c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-c153c3f2309dc3e25e401dce65268bd5"></a>

### [`00874bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874bb4.md) → [`00875b60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875b60.md) FUN_00875b60

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
      "definition_site": "00875b74",
      "incomplete_value": false,
      "site": "00875b78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874bc8",
      "incomplete_value": false,
      "site": "00874bcc",
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
            "const:e90:8"
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
      "00875b78",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875b78",
      "DATA",
      [
        "storage",
        "00c80e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874bc4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875b70 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00874bc8 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00874bc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874bc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874bc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875b74 ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 00875b74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875b74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875b74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874bdc ["INT_ADD", "register:40f0:8", ["const:874bdc:8", "const:4:8"]]
- 00874bdc ["CALL", null, ["callee:00c54d90:8"]]
+ 00875b88 ["INT_ADD", "register:40f0:8", ["const:875b88:8", "const:4:8"]]
+ 00875b88 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-ca97e07aa1735055ed614e07a8670112"></a>

### [`00874c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874c10.md) → [`00875bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875bbc.md) FUN_00875bbc

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
      "definition_site": "00875bd4",
      "incomplete_value": false,
      "site": "00875bd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874c28",
      "incomplete_value": false,
      "site": "00874c2c",
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
            "const:e90:8"
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
      "00875bd8",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875bd8",
      "DATA",
      [
        "storage",
        "00c80e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874c24 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875bd0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00874c28 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00874c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875bd4 ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 00875bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874c3c ["INT_ADD", "register:40f0:8", ["const:874c3c:8", "const:4:8"]]
- 00874c3c ["CALL", null, ["callee:00c54d90:8"]]
+ 00875be8 ["INT_ADD", "register:40f0:8", ["const:875be8:8", "const:4:8"]]
+ 00875be8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-650724b996a44f30f8079a1869c21e58"></a>

### [`00874c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874c6c.md) → [`00875c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875c18.md) FUN_00875c18

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
      "definition_site": "00875c3c",
      "incomplete_value": false,
      "site": "00875c40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874c90",
      "incomplete_value": false,
      "site": "00874c94",
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
            "const:e90:8"
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
      "00875c40",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875c40",
      "DATA",
      [
        "storage",
        "00c80e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874c80 ["INT_ADD", "register:40f0:8", ["const:874c80:8", "const:4:8"]]
- 00874c80 ["CALL", null, ["callee:00c58f30:8"]]
+ 00875c2c ["INT_ADD", "register:40f0:8", ["const:875c2c:8", "const:4:8"]]
+ 00875c2c ["CALL", null, ["callee:00c58f30:8"]]
- 00874c8c ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875c38 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00874c90 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00874c90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874c90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874c90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875c3c ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 00875c3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875c3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875c3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ed0abe0b88e856264203a1d34741dabe"></a>

### [`00874cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874cc4.md) → [`00875c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875c70.md) FUN_00875c70

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
      "definition_site": "00875c78",
      "incomplete_value": false,
      "site": "00875c7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874ccc",
      "incomplete_value": false,
      "site": "00874cd0",
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
            "const:e90:8"
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
      "00875c7c",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875c7c",
      "DATA",
      [
        "storage",
        "00c80e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874cc8 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875c74 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00874ccc ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00874ccc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874ccc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874ccc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875c78 ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 00875c78 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875c78 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875c78 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00874cf4 ["INT_ADD", "register:40f0:8", ["const:874cf4:8", "const:4:8"]]
- 00874cf4 ["CALL", null, ["callee:00c54d60:8"]]
+ 00875ca0 ["INT_ADD", "register:40f0:8", ["const:875ca0:8", "const:4:8"]]
+ 00875ca0 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-75a71f291926df43587ba01ede66cf17"></a>

### [`00874d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d50.md) → [`00875cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875cfc.md) FUN_00875cfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00874c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874c54.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00874d88",
      "incomplete_value": true,
      "site": "00874d8c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 00874d8c ["INT_ADD", "register:40f0:8", ["const:874d8c:8", "const:4:8"]]
- 00874d8c ["CALL", null, ["callee:00c58f20:8"]]
+ 00875d38 ["INT_ADD", "register:40f0:8", ["const:875d38:8", "const:4:8"]]
+ 00875d38 ["CALL", null, ["callee:00c58f20:8"]]
- 00874d64 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00874d64 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00875d10 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00875d10 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00874d70 ["INT_ADD", "register:40f0:8", ["const:874d70:8", "const:4:8"]]
- 00874d70 ["CALL", null, ["callee:00c54d90:8"]]
+ 00875d1c ["INT_ADD", "register:40f0:8", ["const:875d1c:8", "const:4:8"]]
+ 00875d1c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-0d6c4e61cc95044386da974cf810a383"></a>

### [`00874dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874dd4.md) → [`00875d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875d80.md) FUN_00875d80

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00874da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874da0.md) · 呼出先 6件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00875d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875d4c.md) · 呼出先 6件 [`0059822c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059822c.md) [`00874f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874f44.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 56.44% / 新版 56.44%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00875ea8",
      "incomplete_value": false,
      "site": "00875eb8",
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
            "const:230:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874efc",
      "incomplete_value": false,
      "site": "00874f0c",
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
            "const:270:8"
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
      "unmatched:00874df4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00874e24",
      "READ",
      [
        "storage",
        "002a485f",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00874e24",
      "READ",
      [
        "storage",
        "002a486f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00875da0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00875dd0",
      "READ",
      [
        "storage",
        "002a492a",
        null,
        "string"
      ]
    ],
    [
      "00875dd0",
      "READ",
      [
        "storage",
        "002a493a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874f0c ["INT_ADD", "register:40f0:8", ["const:874f0c:8", "const:4:8"]]
- 00874f0c ["CALL", null, ["callee:00a1b6a4:8"]]
+ 00875eb8 ["INT_ADD", "register:40f0:8", ["const:875eb8:8", "const:4:8"]]
+ 00875eb8 ["CALL", null, ["callee:00a1b6a4:8"]]
- 00874de4 ["COPY", "tmp:0:8", ["const:20:8"]]
- 00874de4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00874de4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00874de4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00874de8 ["COPY", "register:40a0:8", ["register:1660:8"]]
~~~


<a id="compare-a8441b515755adfe7de832127cba3a10"></a>

### [`00874fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874fec.md) → [`00875f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875f98.md) FUN_00875f98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00875fac",
      "incomplete_value": false,
      "site": "00875fb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875000",
      "incomplete_value": false,
      "site": "00875004",
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
            "const:f10:8"
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
      "00875fb0",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875fb0",
      "DATA",
      [
        "storage",
        "00c80ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874ffc ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875fa8 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00875000 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 00875000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875fac ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 00875fac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875fac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875fac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875014 ["INT_ADD", "register:40f0:8", ["const:875014:8", "const:4:8"]]
- 00875014 ["CALL", null, ["callee:00c54d90:8"]]
+ 00875fc0 ["INT_ADD", "register:40f0:8", ["const:875fc0:8", "const:4:8"]]
+ 00875fc0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-8f392fccfb326b41ab0dacccd91ff5f6"></a>

### [`00875048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875048.md) → [`00875ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875ff4.md) FUN_00875ff4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00875064",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00875068",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00876040"
      ]
    ]
  ],
  "added": [
    [
      "00876010",
      "DATA",
      [
        "storage",
        "00c80ee0",
        null,
        "undefined *"
      ]
    ],
    [
      "00876014",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00876040"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087505c ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00876008 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00875060 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 00875060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875064 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00875064 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a487535efd7d02fe8d9829a6fb778f7f"></a>

### [`008750a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/008750a4.md) → [`00876050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876050.md) FUN_00876050

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 63.64% / 新版 63.64%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008750b4",
      "incomplete_value": false,
      "site": "008750b8",
      "value": [
        "leaf",
        "const:20:8"
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
      "unmatched:008750a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008750a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008750cc",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876050",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00876054",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00876078",
      "DATA",
      [
        "storage",
        "00c80ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008750b8 ["INT_ADD", "register:40f0:8", ["const:8750b8:8", "const:4:8"]]
- 008750b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00876064 ["INT_ADD", "register:40f0:8", ["const:876064:8", "const:4:8"]]
+ 00876064 ["CALL", null, ["callee:00c58f30:8"]]
- 008750a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008750a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008750a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008750a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008750a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008750a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-e692f721053ab7d566aef31c6dcdb79c"></a>

### [`008750fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/008750fc.md) → [`008760a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008760a8.md) FUN_008760a8

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
      "definition_site": "008760b0",
      "incomplete_value": false,
      "site": "008760b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875104",
      "incomplete_value": false,
      "site": "00875108",
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
            "const:f10:8"
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
      "008760b4",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008760b4",
      "DATA",
      [
        "storage",
        "00c80ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875100 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 008760ac ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00875104 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 00875104 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875104 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875104 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008760b0 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 008760b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008760b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008760b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087512c ["INT_ADD", "register:40f0:8", ["const:87512c:8", "const:4:8"]]
- 0087512c ["CALL", null, ["callee:00c54d60:8"]]
+ 008760d8 ["INT_ADD", "register:40f0:8", ["const:8760d8:8", "const:4:8"]]
+ 008760d8 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-25faed62c0502833f17ccf67c7beea09"></a>

### [`00875138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875138.md) → [`008760e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008760e4.md) FUN_008760e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00874dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874dcc.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875148 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00875148 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 008760f4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 008760f4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00875154 ["INT_ADD", "register:40f0:8", ["const:875154:8", "const:4:8"]]
- 00875154 ["CALL", null, ["callee:00c54d90:8"]]
+ 00876100 ["INT_ADD", "register:40f0:8", ["const:876100:8", "const:4:8"]]
+ 00876100 ["CALL", null, ["callee:00c54d90:8"]]
- 00875158 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00875158 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00876104 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00876104 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-480bc7a27b0ee25aa07b412baba0d926"></a>

### [`0087520c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/0087520c.md) → [`008761b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008761b8.md) FUN_008761b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008751d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/008751d8.md) · 呼出先 6件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00876184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876184.md) · 呼出先 6件 [`0059822c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059822c.md) [`00874f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874f44.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_store_alignment

命令の説明率　旧版 63.71% / 新版 63.71%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 4件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087620c",
      "incomplete_value": true,
      "site": "00876214",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "leaf",
            "const:2c3000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875260",
      "incomplete_value": true,
      "site": "00875268",
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
                "const:fb0:8"
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
      "definition_site": "00876208",
      "incomplete_value": true,
      "site": "00876218",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:6b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087525c",
      "incomplete_value": true,
      "site": "0087526c",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:5ed:8"
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
      "definition_site": "00876208",
      "incomplete_value": true,
      "site": "00876218",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087525c",
      "incomplete_value": true,
      "site": "0087526c",
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
                "const:10:8"
              ]
            ]
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
      "00876208",
      "READ",
      [
        "storage",
        "002a35ed",
        null,
        "string"
      ]
    ],
    [
      "00876208",
      "READ",
      [
        "storage",
        "002a35fd",
        null,
        "string"
      ]
    ],
    [
      "0087620c",
      "READ",
      [
        "storage",
        "002c2fb0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00876208",
      "READ",
      [
        "storage",
        "002a36b8",
        null,
        "string"
      ]
    ],
    [
      "00876208",
      "READ",
      [
        "storage",
        "002a36c8",
        null,
        "string"
      ]
    ],
    [
      "0087620c",
      "READ",
      [
        "storage",
        "002c3000",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00875358 ["INT_ADD", "register:40f0:8", ["const:875358:8", "const:4:8"]]
- 00875358 ["CALL", null, ["callee:0059822c:8"]]
+ 00876304 ["INT_ADD", "register:40f0:8", ["const:876304:8", "const:4:8"]]
+ 00876304 ["CALL", null, ["callee:0059822c:8"]]
- 008753cc ["INT_ADD", "register:40f0:8", ["const:8753cc:8", "const:4:8"]]
- 008753cc ["CALL", null, ["callee:00a1b6a4:8"]]
+ 00876378 ["INT_ADD", "register:40f0:8", ["const:876378:8", "const:4:8"]]
+ 00876378 ["CALL", null, ["callee:00a1b6a4:8"]]
- 0087523c ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 008761e8 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
~~~


<a id="compare-c9528d4f8912e813690414080de8fd91"></a>

### [`00875434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875434.md) → [`008763e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008763e0.md) FUN_008763e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00875674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875674.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00874f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874f44.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00876620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876620.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875474 ["INT_EQUAL", "tmp:0:1", ["register:40d8:8", "const:0:8"]]
- 00875474 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00876420 ["INT_EQUAL", "tmp:0:1", ["register:40d8:8", "const:0:8"]]
+ 00876420 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 008754c4 ["INT_ADD", "register:40f0:8", ["const:8754c4:8", "const:4:8"]]
- 008754c4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00876470 ["INT_ADD", "register:40f0:8", ["const:876470:8", "const:4:8"]]
+ 00876470 ["CALL", null, ["callee:00c590f0:8"]]
- 008754f4 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 008764a0 ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
~~~


<a id="compare-d46387acb4a57d6cc33b143f60d57bff"></a>

### [`00875674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875674.md) → [`00876620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876620.md) FUN_00876620

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00875434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875434.md) · 呼出先 2件 [`00875910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875910.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`008763e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008763e0.md) · 呼出先 2件 [`008768bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008768bc.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.43% / 新版 84.43%

優先判定に残った影響 `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008756fc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590f0"
      ]
    ],
    [
      "unmatched:00875888",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590f0"
      ]
    ],
    [
      "unmatched:008758f0",
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
      "008766a8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590f0"
      ]
    ],
    [
      "00876834",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c590f0"
      ]
    ],
    [
      "0087689c",
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
- 008756ac ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
+ 00876658 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 008756e8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008756e8 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 008756e8 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 008756e8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:1:8"]]
- 008756ec ["INT_LESSEQUAL", "register:105:1", ["register:40e0:8", "register:4098:8"]]
- 008756ec ["INT_SBORROW", "register:106:1", ["register:4098:8", "register:40e0:8"]]
- 008756ec ["INT_SUB", "tmp:0:8", ["register:4098:8", "register:40e0:8"]]
- 008756ec ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-859d50f8b33c0c49cd0b92744579f8b5"></a>

### [`00875910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875910.md) → [`008768bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008768bc.md) FUN_008768bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00875674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875674.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00876620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876620.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087595c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008769a0"
      ]
    ]
  ],
  "added": [
    [
      "00876908",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008769a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875934 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00875934 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 008768e0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008768e0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00875950 ["BRANCH", null, ["local:b4:8"]]
+ 008768fc ["BRANCH", null, ["local:b3:8"]]
- 0087595c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0087595c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-ffef0e7fa24707460172c2ddc1adc3cb"></a>

### [`00875a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875a18.md) → [`008769c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008769c4.md) FUN_008769c4

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
      "definition_site": "008769e8",
      "incomplete_value": false,
      "site": "008769e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875a3c",
      "incomplete_value": false,
      "site": "00875a3c",
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
            "const:f90:8"
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
      "008769e8",
      "DATA",
      [
        "storage",
        "00c7ff90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008769e8",
      "DATA",
      [
        "storage",
        "00c80f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875a2c ["INT_ADD", "register:40f0:8", ["const:875a2c:8", "const:4:8"]]
- 00875a2c ["CALL", null, ["callee:00c58f30:8"]]
+ 008769d8 ["INT_ADD", "register:40f0:8", ["const:8769d8:8", "const:4:8"]]
+ 008769d8 ["CALL", null, ["callee:00c58f30:8"]]
- 00875a34 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 008769e0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00875a38 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00875a38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875a38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875a38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008769e4 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 008769e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008769e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008769e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9dc2877da25fe8d19b83f50ea852138d"></a>

### [`00875a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875a4c.md) → [`008769f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008769f8.md) FUN_008769f8

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
      "unmatched:00875a58",
      "DATA",
      [
        "storage",
        "00c7ff90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876a04",
      "DATA",
      [
        "storage",
        "00c80f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875a4c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00875a4c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00875a50 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00875a54 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00875a54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875a54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875a54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9a4bc0fc0e8d637222c7f5aa680489f3"></a>

### [`00875ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875ab0.md) → [`00876a5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876a5c.md) FUN_00876a5c

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
      "definition_site": "00876a70",
      "incomplete_value": false,
      "site": "00876a74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875ac4",
      "incomplete_value": false,
      "site": "00875ac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00876a74",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876a74",
      "DATA",
      [
        "storage",
        "00c80fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875ac4 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00875ac4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875ac4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875ac4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00876a70 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 00876a70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00876a70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00876a70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875ad8 ["INT_ADD", "register:40f0:8", ["const:875ad8:8", "const:4:8"]]
- 00875ad8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00876a84 ["INT_ADD", "register:40f0:8", ["const:876a84:8", "const:4:8"]]
+ 00876a84 ["CALL", null, ["callee:00c54d90:8"]]
- 00875af8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875af8 ["INT_ADD", "register:40f0:8", ["const:875af8:8", "const:4:8"]]
- 00875af8 ["CALLIND", null, ["register:0:8"]]
+ 00876aa4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00876aa4 ["INT_ADD", "register:40f0:8", ["const:876aa4:8", "const:4:8"]]
+ 00876aa4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d46ff8750a13a1432ea7cdb768579742"></a>

### [`00875b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875b0c.md) → [`00876ab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876ab8.md) FUN_00876ab8

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
      "definition_site": "00876ad0",
      "incomplete_value": false,
      "site": "00876ad4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875b24",
      "incomplete_value": false,
      "site": "00875b28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00876ad4",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876ad4",
      "DATA",
      [
        "storage",
        "00c80fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875b24 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00875b24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875b24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875b24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00876ad0 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 00876ad0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00876ad0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00876ad0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875b38 ["INT_ADD", "register:40f0:8", ["const:875b38:8", "const:4:8"]]
- 00875b38 ["CALL", null, ["callee:00c54d90:8"]]
+ 00876ae4 ["INT_ADD", "register:40f0:8", ["const:876ae4:8", "const:4:8"]]
+ 00876ae4 ["CALL", null, ["callee:00c54d90:8"]]
- 00875b4c ["COPY", "register:0:8", ["register:4040:8"]]
- 00875b4c ["INT_ADD", "register:40f0:8", ["const:875b4c:8", "const:4:8"]]
- 00875b4c ["CALLIND", null, ["register:0:8"]]
+ 00876af8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00876af8 ["INT_ADD", "register:40f0:8", ["const:876af8:8", "const:4:8"]]
+ 00876af8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5ad140ee44224807b5f1a0e89f82fa58"></a>

### [`00875b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875b68.md) → [`00876b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876b14.md) FUN_00876b14

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
      "definition_site": "00876b38",
      "incomplete_value": false,
      "site": "00876b3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875b8c",
      "incomplete_value": false,
      "site": "00875b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00876b3c",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876b3c",
      "DATA",
      [
        "storage",
        "00c80fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875b7c ["INT_ADD", "register:40f0:8", ["const:875b7c:8", "const:4:8"]]
- 00875b7c ["CALL", null, ["callee:00c58f30:8"]]
+ 00876b28 ["INT_ADD", "register:40f0:8", ["const:876b28:8", "const:4:8"]]
+ 00876b28 ["CALL", null, ["callee:00c58f30:8"]]
- 00875b8c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00875b8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875b8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875b8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876b38 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 00876b38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876b38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876b38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00875bac ["INT_ADD", "register:40f0:8", ["const:875bac:8", "const:4:8"]]
- 00875bac ["CALL", null, ["callee:00c54d60:8"]]
+ 00876b58 ["INT_ADD", "register:40f0:8", ["const:876b58:8", "const:4:8"]]
+ 00876b58 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-9ee228e8afc8c728e454270bb4a2cd97"></a>

### [`00875bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875bc0.md) → [`00876b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876b6c.md) FUN_00876b6c

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
      "definition_site": "00876b74",
      "incomplete_value": false,
      "site": "00876b78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875bc8",
      "incomplete_value": false,
      "site": "00875bcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
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
      "00876b78",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876b78",
      "DATA",
      [
        "storage",
        "00c80fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875bc8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00875bc8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875bc8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875bc8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876b74 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 00876b74 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876b74 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876b74 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00875bf0 ["INT_ADD", "register:40f0:8", ["const:875bf0:8", "const:4:8"]]
- 00875bf0 ["CALL", null, ["callee:00c54d60:8"]]
+ 00876b9c ["INT_ADD", "register:40f0:8", ["const:876b9c:8", "const:4:8"]]
+ 00876b9c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-82dd54507507301a03c6db136f44ab2c"></a>

### [`00875bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875bfc.md) → [`00876ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876ba8.md) FUN_00876ba8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00874f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874f44.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00876bbc",
      "incomplete_value": true,
      "site": "00876bc4",
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
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 00875c18 ["INT_ADD", "register:40f0:8", ["const:875c18:8", "const:4:8"]]
- 00875c18 ["CALL", null, ["callee:00c54d90:8"]]
+ 00876bc4 ["INT_ADD", "register:40f0:8", ["const:876bc4:8", "const:4:8"]]
+ 00876bc4 ["CALL", null, ["callee:00c54d90:8"]]
- 00875c0c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00875c0c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00876bb8 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00876bb8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00875c1c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00875c1c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00876bc8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00876bc8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-42d945b64f0543ddcf84099e63ff551f"></a>

### [`00875c4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875c4c.md) → [`00876bf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876bf8.md) FUN_00876bf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00874f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874f44.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00876c14",
      "incomplete_value": false,
      "site": "00876c18",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "00876c10",
      "incomplete_value": true,
      "site": "00876c18",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00876c30",
      "incomplete_value": true,
      "site": "00876c34",
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
      "unmatched:00875c60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00876c38"
      ]
    ],
    [
      "unmatched:00875c80",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00876c0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00876c38"
      ]
    ],
    [
      "00876c2c",
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
- 00875c6c ["INT_ADD", "register:40f0:8", ["const:875c6c:8", "const:4:8"]]
- 00875c6c ["CALL", null, ["callee:00c54d90:8"]]
+ 00876c18 ["INT_ADD", "register:40f0:8", ["const:876c18:8", "const:4:8"]]
+ 00876c18 ["CALL", null, ["callee:00c54d90:8"]]
- 00875c88 ["INT_ADD", "register:40f0:8", ["const:875c88:8", "const:4:8"]]
- 00875c88 ["CALL", null, ["callee:00c58f20:8"]]
+ 00876c34 ["INT_ADD", "register:40f0:8", ["const:876c34:8", "const:4:8"]]
+ 00876c34 ["CALL", null, ["callee:00c58f20:8"]]
- 00875c60 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00875c60 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-3d5e2e52f70283f7d038bf3e61e54b2f"></a>

### [`00875cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875cd0.md) → [`00876c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876c7c.md) FUN_00876c7c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00875c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875c9c.md) · 呼出先 6件 [`00876010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876010.md) [`00876060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876060.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00876c48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876c48.md) · 呼出先 6件 [`00876fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876fbc.md) [`0087700c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/0087700c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00876cbc",
      "DATA",
      [
        "storage",
        "003c7780",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:00875d5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00875d60",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876cbc",
      "DATA",
      [
        "storage",
        "003c7780",
        null,
        "byte[11]"
      ]
    ],
    [
      "00876d08",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00876d0c",
      "DATA",
      [
        "storage",
        "00c81050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875cf8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00875cf8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00876ca4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00876ca4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00875d14 ["BRANCH", null, ["local:b15:8"]]
+ 00876cc0 ["BRANCH", null, ["local:b14:8"]]
- 00875d28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875d28 ["INT_ADD", "register:40f0:8", ["const:875d28:8", "const:4:8"]]
- 00875d28 ["CALLIND", null, ["register:0:8"]]
+ 00876cd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00876cd4 ["INT_ADD", "register:40f0:8", ["const:876cd4:8", "const:4:8"]]
+ 00876cd4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2888a4b7827c596e760824852fd92f1f"></a>

### [`00875e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875e74.md) → [`00876e20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876e20.md) FUN_00876e20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875e90 ["INT_ADD", "register:40f0:8", ["const:875e90:8", "const:4:8"]]
- 00875e90 ["CALL", null, ["callee:00c54d90:8"]]
+ 00876e3c ["INT_ADD", "register:40f0:8", ["const:876e3c:8", "const:4:8"]]
+ 00876e3c ["CALL", null, ["callee:00c54d90:8"]]
- 00875e94 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00875e94 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00876e40 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00876e40 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00875eb0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875eb0 ["INT_ADD", "register:40f0:8", ["const:875eb0:8", "const:4:8"]]
- 00875eb0 ["CALLIND", null, ["register:0:8"]]
+ 00876e5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00876e5c ["INT_ADD", "register:40f0:8", ["const:876e5c:8", "const:4:8"]]
+ 00876e5c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-287a12eb94cfe99429af07340269f57a"></a>

### [`00875ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875ec4.md) → [`00876e70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876e70.md) FUN_00876e70

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
      "definition_site": "00876e84",
      "incomplete_value": false,
      "site": "00876e88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875ed8",
      "incomplete_value": false,
      "site": "00875edc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:80:8"
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
      "00876e88",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876e88",
      "DATA",
      [
        "storage",
        "00c81050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875ed4 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00876e80 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00875ed8 ["COPY", "tmp:0:8", ["const:80:8"]]
- 00875ed8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875ed8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875ed8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00876e84 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 00876e84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00876e84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00876e84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875eec ["INT_ADD", "register:40f0:8", ["const:875eec:8", "const:4:8"]]
- 00875eec ["CALL", null, ["callee:00c54d90:8"]]
+ 00876e98 ["INT_ADD", "register:40f0:8", ["const:876e98:8", "const:4:8"]]
+ 00876e98 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-d28d055f507118e1628639fdfa9a1601"></a>

### [`00875f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875f20.md) → [`00876ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876ecc.md) FUN_00876ecc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 65.22% / 新版 65.22%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00876f10",
      "incomplete_value": true,
      "site": "00876f14",
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
      "unmatched:00875f20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00875f24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00875f3c",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876ecc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00876ed0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00876ee8",
      "DATA",
      [
        "storage",
        "00c81050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875f68 ["INT_ADD", "register:40f0:8", ["const:875f68:8", "const:4:8"]]
- 00875f68 ["CALL", null, ["callee:00c58f20:8"]]
+ 00876f14 ["INT_ADD", "register:40f0:8", ["const:876f14:8", "const:4:8"]]
+ 00876f14 ["CALL", null, ["callee:00c58f20:8"]]
- 00875f20 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00875f20 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00875f20 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00875f20 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00875f24 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00875f24 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00875f24 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00875f24 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-288d2ada3ce52065636cf9faa88e7c09"></a>

### [`00875f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875f7c.md) → [`00876f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876f28.md) FUN_00876f28

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
      "definition_site": "00876f4c",
      "incomplete_value": false,
      "site": "00876f50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00875fa0",
      "incomplete_value": false,
      "site": "00875fa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:80:8"
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
      "00876f50",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876f50",
      "DATA",
      [
        "storage",
        "00c81050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875f90 ["INT_ADD", "register:40f0:8", ["const:875f90:8", "const:4:8"]]
- 00875f90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00876f3c ["INT_ADD", "register:40f0:8", ["const:876f3c:8", "const:4:8"]]
+ 00876f3c ["CALL", null, ["callee:00c58f30:8"]]
- 00875f9c ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00876f48 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00875fa0 ["COPY", "tmp:0:8", ["const:80:8"]]
- 00875fa0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875fa0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875fa0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876f4c ["COPY", "tmp:0:8", ["const:50:8"]]
+ 00876f4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876f4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876f4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b39141d97861a21b67ba15c1c823e24a"></a>

### [`00875fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875fd4.md) → [`00876f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876f80.md) FUN_00876f80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00875fe0",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876f8c",
      "DATA",
      [
        "storage",
        "00c81050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875fd4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00875fd4 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00875fd4 ["COPY", "register:5010:8", ["const:0:8"]]
- 00875fd4 ["COPY", "register:5018:8", ["const:0:8"]]
- 00875fd8 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00875fdc ["COPY", "tmp:0:8", ["const:80:8"]]
- 00875fdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875fdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875fdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-70edbd30f296695da3a48021ce2cb5fc"></a>

### [`00876060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876060.md) → [`0087700c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/0087700c.md) FUN_0087700c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00875cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875cd0.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00876c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876c7c.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00876074 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00876074 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00877020 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00877020 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00876080 ["INT_ADD", "register:40f0:8", ["const:876080:8", "const:4:8"]]
- 00876080 ["CALL", null, ["callee:00c54d90:8"]]
+ 0087702c ["INT_ADD", "register:40f0:8", ["const:87702c:8", "const:4:8"]]
+ 0087702c ["CALL", null, ["callee:00c54d90:8"]]
- 00876084 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00876084 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00877030 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00877030 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-6726a966cca5433c7f2795f5559d82c5"></a>

### [`00876138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876138.md) → [`008770e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008770e4.md) FUN_008770e4

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
      "definition_site": "008770e8",
      "incomplete_value": false,
      "site": "008770ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087613c",
      "incomplete_value": false,
      "site": "00876140",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:110:8"
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
      "008770ec",
      "DATA",
      [
        "storage",
        "00c80110",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008770ec",
      "DATA",
      [
        "storage",
        "00c810e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876138 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008770e4 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087613c ["COPY", "tmp:0:8", ["const:110:8"]]
- 0087613c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087613c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087613c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008770e8 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 008770e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008770e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008770e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a666430309d79f1c00346b6051149683"></a>

### [`00876148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876148.md) → [`008770f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008770f4.md) FUN_008770f4

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
      "definition_site": "00877104",
      "incomplete_value": false,
      "site": "0087710c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876158",
      "incomplete_value": false,
      "site": "00876160",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:110:8"
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
      "0087710c",
      "DATA",
      [
        "storage",
        "00c80110",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0087710c",
      "DATA",
      [
        "storage",
        "00c810e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876154 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 00877100 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00876158 ["COPY", "tmp:0:8", ["const:110:8"]]
- 00876158 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00876158 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00876158 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00877104 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 00877104 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00877104 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00877104 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00876164 ["INT_ADD", "register:40f0:8", ["const:876164:8", "const:4:8"]]
- 00876164 ["CALL", null, ["callee:00c58f40:8"]]
+ 00877110 ["INT_ADD", "register:40f0:8", ["const:877110:8", "const:4:8"]]
+ 00877110 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-35143a59d18753a88b70841bfebc0118"></a>

### [`00876188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876188.md) → [`00877134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877134.md) FUN_00877134

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`0087674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/0087674c.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 2件 [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) [`008776f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008776f8.md) · 呼出先 12件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00598228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598228.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.06% / 新版 73.06%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008771e0",
      "incomplete_value": true,
      "site": "008771e0",
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
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:a15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876234",
      "incomplete_value": true,
      "site": "00876234",
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
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:93e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008771f8",
      "incomplete_value": true,
      "site": "008771f8",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:13b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087624c",
      "incomplete_value": true,
      "site": "0087624c",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:6c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008771f4",
      "incomplete_value": true,
      "site": "008771fc",
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
      "definition_site": "00876248",
      "incomplete_value": true,
      "site": "00876250",
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
      "unmatched:008761c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:008761cc",
      "DATA",
      [
        "storage",
        "00c80160",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008761ec",
      "PARAM",
      [
        "storage",
        "002ef79a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0087716c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00877178",
      "DATA",
      [
        "storage",
        "00c81130",
        null,
        "undefined *"
      ]
    ],
    [
      "00877198",
      "PARAM",
      [
        "storage",
        "002ef7da",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876270 ["INT_ADD", "register:40f0:8", ["const:876270:8", "const:4:8"]]
- 00876270 ["CALL", null, ["callee:0047e96c:8"]]
+ 0087721c ["INT_ADD", "register:40f0:8", ["const:87721c:8", "const:4:8"]]
+ 0087721c ["CALL", null, ["callee:0047e96c:8"]]
- 0087637c ["INT_ADD", "register:40f0:8", ["const:87637c:8", "const:4:8"]]
- 0087637c ["CALL", null, ["callee:0047ec3c:8"]]
+ 00877328 ["INT_ADD", "register:40f0:8", ["const:877328:8", "const:4:8"]]
+ 00877328 ["CALL", null, ["callee:0047ec3c:8"]]
- 008764a4 ["INT_ADD", "register:40f0:8", ["const:8764a4:8", "const:4:8"]]
- 008764a4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00877450 ["INT_ADD", "register:40f0:8", ["const:877450:8", "const:4:8"]]
+ 00877450 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-9bcf82554f56709072d07595fd25061b"></a>

### [`00876584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876584.md) → [`00877530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877530.md) FUN_00877530

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00877548",
      "incomplete_value": false,
      "site": "0087754c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:130:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087659c",
      "incomplete_value": false,
      "site": "008765a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "0087754c",
      "DATA",
      [
        "storage",
        "00c80160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087754c",
      "DATA",
      [
        "storage",
        "00c81130",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876598 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 00877544 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0087659c ["COPY", "tmp:0:8", ["const:160:8"]]
- 0087659c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087659c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087659c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00877548 ["COPY", "tmp:0:8", ["const:130:8"]]
+ 00877548 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00877548 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00877548 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008765ac ["INT_ADD", "register:40f0:8", ["const:8765ac:8", "const:4:8"]]
- 008765ac ["CALL", null, ["callee:00c58f50:8"]]
+ 00877558 ["INT_ADD", "register:40f0:8", ["const:877558:8", "const:4:8"]]
+ 00877558 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7172dc4cc68a3c9e4e8aa042ae241a1f"></a>

### [`00876630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876630.md) → [`008775dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008775dc.md) FUN_008775dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008775f4",
      "incomplete_value": false,
      "site": "008775f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:130:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876648",
      "incomplete_value": false,
      "site": "0087664c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "008775f8",
      "DATA",
      [
        "storage",
        "00c80160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008775f8",
      "DATA",
      [
        "storage",
        "00c81130",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876644 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 008775f0 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00876648 ["COPY", "tmp:0:8", ["const:160:8"]]
- 00876648 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00876648 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00876648 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008775f4 ["COPY", "tmp:0:8", ["const:130:8"]]
+ 008775f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008775f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008775f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00876658 ["INT_ADD", "register:40f0:8", ["const:876658:8", "const:4:8"]]
- 00876658 ["CALL", null, ["callee:00c58f50:8"]]
+ 00877604 ["INT_ADD", "register:40f0:8", ["const:877604:8", "const:4:8"]]
+ 00877604 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-789c8ff491d09cb0f334c11c008c03bc"></a>

### [`008766fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008766fc.md) → [`008776a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008776a8.md) FUN_008776a8

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
      "definition_site": "008776cc",
      "incomplete_value": false,
      "site": "008776cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:190:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876720",
      "incomplete_value": false,
      "site": "00876720",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
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
      "008776cc",
      "DATA",
      [
        "storage",
        "00c801c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008776cc",
      "DATA",
      [
        "storage",
        "00c81190",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876710 ["INT_ADD", "register:40f0:8", ["const:876710:8", "const:4:8"]]
- 00876710 ["CALL", null, ["callee:00c58f30:8"]]
+ 008776bc ["INT_ADD", "register:40f0:8", ["const:8776bc:8", "const:4:8"]]
+ 008776bc ["CALL", null, ["callee:00c58f30:8"]]
- 00876718 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008776c4 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087671c ["COPY", "tmp:0:8", ["const:1c0:8"]]
- 0087671c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087671c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087671c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008776c8 ["COPY", "tmp:0:8", ["const:190:8"]]
+ 008776c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008776c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008776c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4738300056a4bdd68f2d9343f51e8dc0"></a>

### [`00876730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876730.md) → [`008776dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008776dc.md) FUN_008776dc

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
      "definition_site": "008776e8",
      "incomplete_value": false,
      "site": "008776e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:190:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087673c",
      "incomplete_value": false,
      "site": "0087673c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
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
      "008776e8",
      "DATA",
      [
        "storage",
        "00c801c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008776e8",
      "DATA",
      [
        "storage",
        "00c81190",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876734 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 008776e0 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00876738 ["COPY", "tmp:0:8", ["const:1c0:8"]]
- 00876738 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00876738 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00876738 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008776e4 ["COPY", "tmp:0:8", ["const:190:8"]]
+ 008776e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008776e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008776e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a5e45a0773dcd1789633784a5cb370ae"></a>

### [`0087674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/0087674c.md) → [`008776f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008776f8.md) FUN_008776f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00495414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00495/00495414.md) [`008730e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730e0.md) [`008730f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730f0.md) [`00876178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876178.md) [`00876188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876188.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00495734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00495/00495734.md) [`0087408c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/0087408c.md) [`0087409c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/0087409c.md) [`00877124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877124.md) [`00877134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877134.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.99% / 新版 96.99%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008777a4",
      "incomplete_value": false,
      "site": "008777b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008767f8",
      "incomplete_value": false,
      "site": "00876804",
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
            "const:ce0:8"
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
      "definition_site": "0087781c",
      "incomplete_value": false,
      "site": "00877828",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876870",
      "incomplete_value": false,
      "site": "0087687c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:110:8"
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
      "008777b0",
      "DATA",
      [
        "storage",
        "00c7fce0",
        null,
        "pointer"
      ]
    ],
    [
      "008777fc",
      "READ",
      [
        "storage",
        "00c7fcf0",
        null,
        "undefined *"
      ]
    ],
    [
      "00877828",
      "DATA",
      [
        "storage",
        "00c80110",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008777b0",
      "DATA",
      [
        "storage",
        "00c80cb0",
        null,
        "pointer"
      ]
    ],
    [
      "008777fc",
      "READ",
      [
        "storage",
        "00c80cc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00877828",
      "DATA",
      [
        "storage",
        "00c810e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087678c ["INT_ADD", "register:40f0:8", ["const:87678c:8", "const:4:8"]]
- 0087678c ["CALL", null, ["callee:008ba17c:8"]]
+ 00877738 ["INT_ADD", "register:40f0:8", ["const:877738:8", "const:4:8"]]
+ 00877738 ["CALL", null, ["callee:008ba17c:8"]]
- 008767ac ["INT_ADD", "register:40f0:8", ["const:8767ac:8", "const:4:8"]]
- 008767ac ["CALL", null, ["callee:00c54d60:8"]]
+ 00877758 ["INT_ADD", "register:40f0:8", ["const:877758:8", "const:4:8"]]
+ 00877758 ["CALL", null, ["callee:00c54d60:8"]]
- 008767b4 ["INT_ADD", "register:40f0:8", ["const:8767b4:8", "const:4:8"]]
- 008767b4 ["CALL", null, ["callee:00495734:8"]]
+ 00877760 ["INT_ADD", "register:40f0:8", ["const:877760:8", "const:4:8"]]
+ 00877760 ["CALL", null, ["callee:00495734:8"]]
~~~


<a id="compare-b024de0bed66eb13c8355bc397b28992"></a>

### [`00876a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876a18.md) → [`008779c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008779c4.md) FUN_008779c4

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
      "definition_site": "008779e8",
      "incomplete_value": false,
      "site": "008779e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876a3c",
      "incomplete_value": false,
      "site": "00876a3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:240:8"
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
      "008779e8",
      "DATA",
      [
        "storage",
        "00c80240",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008779e8",
      "DATA",
      [
        "storage",
        "00c81210",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876a2c ["INT_ADD", "register:40f0:8", ["const:876a2c:8", "const:4:8"]]
- 00876a2c ["CALL", null, ["callee:00c58f30:8"]]
+ 008779d8 ["INT_ADD", "register:40f0:8", ["const:8779d8:8", "const:4:8"]]
+ 008779d8 ["CALL", null, ["callee:00c58f30:8"]]
- 00876a34 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 008779e0 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 00876a38 ["COPY", "tmp:0:8", ["const:240:8"]]
- 00876a38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00876a38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00876a38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008779e4 ["COPY", "tmp:0:8", ["const:210:8"]]
+ 008779e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008779e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008779e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ce41e7ed2bdb8a35c338fbaa5a028d1"></a>

### [`00876a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876a4c.md) → [`008779f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008779f8.md) FUN_008779f8

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
      "definition_site": "00877a04",
      "incomplete_value": false,
      "site": "00877a04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876a58",
      "incomplete_value": false,
      "site": "00876a58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:240:8"
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
      "00877a04",
      "DATA",
      [
        "storage",
        "00c80240",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00877a04",
      "DATA",
      [
        "storage",
        "00c81210",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876a50 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 008779fc ["COPY", "register:4048:8", ["const:c81000:8"]]
- 00876a54 ["COPY", "tmp:0:8", ["const:240:8"]]
- 00876a54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00876a54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00876a54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00877a00 ["COPY", "tmp:0:8", ["const:210:8"]]
+ 00877a00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00877a00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00877a00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-681fb7c43c800c02147ff10aa112dd21"></a>

### [`00876a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876a68.md) → [`00877a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877a14.md) FUN_00877a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0044f3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f3d0.md) [`0044f47c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f47c.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0044f6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044f6f0.md) [`0044f79c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044f79c.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00877a5c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00876ab0",
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
      "site": "00877ad0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00876b24",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "00877a5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00877ad0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00877a5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00877ad0",
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
- 00876ab0 ["INT_ADD", "register:40f0:8", ["const:876ab0:8", "const:4:8"]]
- 00876ab0 ["CALL", null, ["ram:47ad34:8"]]
+ 00877a5c ["INT_ADD", "register:40f0:8", ["const:877a5c:8", "const:4:8"]]
+ 00877a5c ["CALL", null, ["ram:47b054:8"]]
- 00876b24 ["INT_ADD", "register:40f0:8", ["const:876b24:8", "const:4:8"]]
- 00876b24 ["CALL", null, ["ram:48cd38:8"]]
+ 00877ad0 ["INT_ADD", "register:40f0:8", ["const:877ad0:8", "const:4:8"]]
+ 00877ad0 ["CALL", null, ["ram:48d058:8"]]
- 00876aac ["INT_ADD", "register:40f0:8", ["const:876aac:8", "const:4:8"]]
- 00876aac ["CALL", null, ["callee:008ba17c:8"]]
+ 00877a58 ["INT_ADD", "register:40f0:8", ["const:877a58:8", "const:4:8"]]
+ 00877a58 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-cfc7f4b5c0d8790b1b9df50e953176dc"></a>

### [`00876bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876bcc.md) → [`00877b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877b78.md) _INIT_157

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
      "definition_site": "00877bb4",
      "incomplete_value": true,
      "site": "00877bd0",
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
      "definition_site": "00876c08",
      "incomplete_value": true,
      "site": "00876c24",
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
      "definition_site": "00877bd8",
      "incomplete_value": true,
      "site": "00877bf4",
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
      "definition_site": "00876c2c",
      "incomplete_value": true,
      "site": "00876c48",
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
      "definition_site": "00877bf8",
      "incomplete_value": true,
      "site": "00877c14",
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
      "definition_site": "00876c4c",
      "incomplete_value": true,
      "site": "00876c68",
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
      "00877bb4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00877bd8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00877bf8",
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
      "00877bb4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00877bd8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00877bf8",
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
- 00876d2c ["INT_ADD", "register:40f0:8", ["const:876d2c:8", "const:4:8"]]
- 00876d2c ["CALL", null, ["callee:0043bb58:8"]]
+ 00877cd8 ["INT_ADD", "register:40f0:8", ["const:877cd8:8", "const:4:8"]]
+ 00877cd8 ["CALL", null, ["callee:0043bb58:8"]]
- 00876e00 ["INT_ADD", "register:40f0:8", ["const:876e00:8", "const:4:8"]]
- 00876e00 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00877dac ["INT_ADD", "register:40f0:8", ["const:877dac:8", "const:4:8"]]
+ 00877dac ["CALL", null, ["callee:00c58ed0:8"]]
- 00876bf4 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00877ba0 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-cd86159af52d5cd4f6ef6c72e48b5b8f"></a>

### [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) → [`00877f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877f08.md) FUN_00877f08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00872a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a68.md) · 呼出先 26件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md)
- 新版 呼出元 1件 [`00873a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/00873a14.md) · 呼出先 26件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00444440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00444/00444440.md) [`00445180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00445/00445180.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.67% / 新版 89.67%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 9件, `store_destination` 2件, `store_value` 10件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00877f84",
      "incomplete_value": true,
      "site": "00877f94",
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
                "const:998:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876fd8",
      "incomplete_value": true,
      "site": "00876fe8",
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
                "const:8c9:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00877f88",
      "incomplete_value": true,
      "site": "00877f98",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876fdc",
      "incomplete_value": true,
      "site": "00876fec",
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
                "const:f:8"
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
      "definition_site": "00877f8c",
      "incomplete_value": true,
      "site": "00877f9c",
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
                "const:a90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00876fe0",
      "incomplete_value": true,
      "site": "00876ff0",
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
      "00877f68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00877f84",
      "READ",
      [
        "storage",
        "002b78c9",
        null,
        "string"
      ]
    ],
    [
      "00877f88",
      "READ",
      [
        "storage",
        "002b78d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00877f68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00877f84",
      "READ",
      [
        "storage",
        "002b7998",
        null,
        "string"
      ]
    ],
    [
      "00877f88",
      "READ",
      [
        "storage",
        "002b79a7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876fbc ["INT_ADD", "register:40f0:8", ["const:876fbc:8", "const:4:8"]]
- 00876fbc ["CALL", null, ["ram:48cd38:8"]]
+ 00877f68 ["INT_ADD", "register:40f0:8", ["const:877f68:8", "const:4:8"]]
+ 00877f68 ["CALL", null, ["ram:48d058:8"]]
- 00877150 ["INT_ADD", "register:40f0:8", ["const:877150:8", "const:4:8"]]
- 00877150 ["CALL", null, ["ram:48cd38:8"]]
+ 008780fc ["INT_ADD", "register:40f0:8", ["const:8780fc:8", "const:4:8"]]
+ 008780fc ["CALL", null, ["ram:48d058:8"]]
- 008771dc ["INT_ADD", "register:40f0:8", ["const:8771dc:8", "const:4:8"]]
- 008771dc ["CALL", null, ["ram:48cd38:8"]]
+ 00878188 ["INT_ADD", "register:40f0:8", ["const:878188:8", "const:4:8"]]
+ 00878188 ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-d083763d171c6e6fe1612d217a27215b"></a>

### [`00877918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877918.md) → [`008788c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/008788c4.md) FUN_008788c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) · 呼出先 5件 [`00877c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877c78.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)
- 新版 呼出元 1件 [`00877f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877f08.md) · 呼出先 5件 [`00878c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878c24.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c594d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 86.90% / 新版 86.90%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087798c",
      "incomplete_value": true,
      "site": "00877990",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00877a14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008789ec"
      ]
    ],
    [
      "unmatched:00877a20",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "unmatched:00877a24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008789ec"
      ]
    ]
  ],
  "added": [
    [
      "008789c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008789ec"
      ]
    ],
    [
      "008789cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c54d90"
      ]
    ],
    [
      "008789d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008789ec"
      ]
    ]
  ]
}
~~~


~~~diff
- 00877990 ["INT_ADD", "register:40f0:8", ["const:877990:8", "const:4:8"]]
- 00877990 ["CALL", null, ["callee:00c58f20:8"]]
+ 0087893c ["INT_ADD", "register:40f0:8", ["const:87893c:8", "const:4:8"]]
+ 0087893c ["CALL", null, ["callee:00c58f20:8"]]
- 00877934 ["INT_ADD", "register:40f0:8", ["const:877934:8", "const:4:8"]]
- 00877934 ["CALL", null, ["callee:00c594d0:8"]]
+ 008788e0 ["INT_ADD", "register:40f0:8", ["const:8788e0:8", "const:4:8"]]
+ 008788e0 ["CALL", null, ["callee:00c594d0:8"]]
- 00877940 ["INT_ADD", "register:40f0:8", ["const:877940:8", "const:4:8"]]
- 00877940 ["CALL", null, ["callee:00c594d0:8"]]
+ 008788ec ["INT_ADD", "register:40f0:8", ["const:8788ec:8", "const:4:8"]]
+ 008788ec ["CALL", null, ["callee:00c594d0:8"]]
~~~


<a id="compare-68f24ca58b2b1a40a66aba6359d61f9c"></a>

### [`00877a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877a68.md) → [`00878a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878a14.md) FUN_00878a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) · 呼出先 6件 [`00446a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446a88.md) [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c58240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58240.md)
- 新版 呼出元 1件 [`00877f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877f08.md) · 呼出先 6件 [`00446da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00446/00446da8.md) [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59170.md) [`00c59210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877a7c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00877a7c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00878a28 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00878a28 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00877a84 ["INT_ADD", "register:40f0:8", ["const:877a84:8", "const:4:8"]]
- 00877a84 ["CALL", null, ["callee:00446da8:8"]]
+ 00878a30 ["INT_ADD", "register:40f0:8", ["const:878a30:8", "const:4:8"]]
+ 00878a30 ["CALL", null, ["callee:00446da8:8"]]
- 00877a8c ["INT_ADD", "register:40f0:8", ["const:877a8c:8", "const:4:8"]]
- 00877a8c ["CALL", null, ["callee:00c59210:8"]]
+ 00878a38 ["INT_ADD", "register:40f0:8", ["const:878a38:8", "const:4:8"]]
+ 00878a38 ["CALL", null, ["callee:00c59210:8"]]
~~~


<a id="compare-184914336ff0db109c0ddf11ccf4b758"></a>

### [`00877ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ac8.md) → [`00878a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878a74.md) FUN_00878a74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`00877da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877da8.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005981a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/005981a8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) [`00878d54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878d54.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.70% / 新版 96.70%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00877b64",
      "incomplete_value": false,
      "site": "00877b68",
      "value": [
        "leaf",
        "const:10:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00878b2c",
      "incomplete_value": false,
      "site": "00878b38",
      "value": [
        "leaf",
        "const:878d54:8"
      ]
    },
    "old": {
      "definition_site": "00877b80",
      "incomplete_value": false,
      "site": "00877b8c",
      "value": [
        "leaf",
        "const:877da8:8"
      ]
    },
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00878bd0",
      "incomplete_value": false,
      "site": "00878bd4",
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
            "const:fa5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00877c24",
      "incomplete_value": false,
      "site": "00877c28",
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
            "const:eda:8"
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
      "unmatched:00877aec",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00877af0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00878b80"
      ]
    ],
    [
      "00878b2c",
      "PARAM",
      [
        "storage",
        "00877da8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00878a98",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00878a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00878b80"
      ]
    ],
    [
      "00878b2c",
      "PARAM",
      [
        "storage",
        "00878d54",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00877b68 ["INT_ADD", "register:40f0:8", ["const:877b68:8", "const:4:8"]]
- 00877b68 ["CALL", null, ["callee:00c58f30:8"]]
+ 00878b14 ["INT_ADD", "register:40f0:8", ["const:878b14:8", "const:4:8"]]
+ 00878b14 ["CALL", null, ["callee:00c58f30:8"]]
- 00877b8c ["INT_ADD", "register:40f0:8", ["const:877b8c:8", "const:4:8"]]
- 00877b8c ["CALL", null, ["callee:00c591b0:8"]]
+ 00878b38 ["INT_ADD", "register:40f0:8", ["const:878b38:8", "const:4:8"]]
+ 00878b38 ["CALL", null, ["callee:00c591b0:8"]]
- 00877c28 ["INT_ADD", "register:40f0:8", ["const:877c28:8", "const:4:8"]]
- 00877c28 ["CALL", null, ["callee:00c591c0:8"]]
+ 00878bd4 ["INT_ADD", "register:40f0:8", ["const:878bd4:8", "const:4:8"]]
+ 00878bd4 ["CALL", null, ["callee:00c591c0:8"]]
~~~


<a id="compare-a8b624cf1437652c30770fce229355a4"></a>

### [`00877ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ef0.md) → [`00878e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878e9c.md) _INIT_158

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.71% / 新版 75.71%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00878ff8",
      "incomplete_value": false,
      "site": "00878ffc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:648:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087804c",
      "incomplete_value": true,
      "site": "00878050",
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
      "definition_site": "00878fe8",
      "incomplete_value": false,
      "site": "00878ffc",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:648:8"
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
      "definition_site": "0087803c",
      "incomplete_value": true,
      "site": "00878050",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00878ff0",
      "incomplete_value": true,
      "site": "00878ffc",
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
    "old": {
      "definition_site": "00878044",
      "incomplete_value": true,
      "site": "00878050",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00877f20",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00877f2c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00877f48",
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
      "00878ecc",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00878ed8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00878ef4",
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
- 00878050 ["INT_ADD", "register:40f0:8", ["const:878050:8", "const:4:8"]]
- 00878050 ["CALL", null, ["callee:0043bb58:8"]]
+ 00878ffc ["INT_ADD", "register:40f0:8", ["const:878ffc:8", "const:4:8"]]
+ 00878ffc ["CALL", null, ["callee:0043bb58:8"]]
- 00878124 ["INT_ADD", "register:40f0:8", ["const:878124:8", "const:4:8"]]
- 00878124 ["CALL", null, ["callee:00c58ed0:8"]]
+ 008790d0 ["INT_ADD", "register:40f0:8", ["const:8790d0:8", "const:4:8"]]
+ 008790d0 ["CALL", null, ["callee:00c58ed0:8"]]
- 00877f18 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00878ec4 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-b07d47b70f4781d2fc3e5c2dfc5e80e9"></a>

### [`00878310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878310.md) → [`008792bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/008792bc.md) FUN_008792bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0076820c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/0076820c.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00881dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881dd4.md) · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00b3c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c760.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`007685e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007685e8.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) [`00882d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/00882d80.md) · 呼出先 8件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00b3d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d754.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.52% / 新版 95.52%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087839c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008783e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008793f0"
      ]
    ]
  ],
  "added": [
    [
      "00879348",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00879390",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008793f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00878340 ["INT_ADD", "register:40f0:8", ["const:878340:8", "const:4:8"]]
- 00878340 ["CALL", null, ["callee:00c59080:8"]]
+ 008792ec ["INT_ADD", "register:40f0:8", ["const:8792ec:8", "const:4:8"]]
+ 008792ec ["CALL", null, ["callee:00c59080:8"]]
- 00878348 ["CBRANCH", null, ["local:b13:8", "register:102:1"]]
+ 008792f4 ["CBRANCH", null, ["local:b10:8", "register:102:1"]]
- 00878368 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00878368 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00879314 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00879314 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-c58b7b43b68813f2617ec9a172f9e460"></a>

### [`00878448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878448.md) → [`008793f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/008793f4.md) FUN_008793f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 19件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006eed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ee/006eed04.md) [`006ff698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff698.md) [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) · 呼出先 6件 [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)
- 新版 呼出元 19件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006ef0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ef/006ef0b4.md) [`006ffa48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ffa48.md) [`0070d7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070d/0070d7c0.md) [`0075bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bdcc.md) · 呼出先 6件 [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`0087975c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/0087975c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 63.74% / 新版 63.74%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_call_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00878618",
      "incomplete_value": true,
      "site": "00878620",
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
            "const:20:8"
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
      "definition_site": "0087961c",
      "incomplete_value": true,
      "site": "00879628",
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
    "old": null,
    "ordinal": 19,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00879620",
      "incomplete_value": true,
      "site": "00879628",
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
            "const:20:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:0087848c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00878508",
      "DATA",
      [
        "storage",
        "002affcb",
        null,
        null
      ]
    ],
    [
      "unmatched:00878508",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00879438",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008794b4",
      "DATA",
      [
        "storage",
        "002b00a2",
        null,
        null
      ]
    ],
    [
      "008794b4",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00878620 ["INT_ADD", "register:40f0:8", ["const:878620:8", "const:4:8"]]
- 00878620 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 008795cc ["INT_ADD", "register:40f0:8", ["const:8795cc:8", "const:4:8"]]
+ 008795cc ["CALL", null, ["callee:00c5b8d0:8"]]
- 0087867c ["INT_ADD", "register:40f0:8", ["const:87867c:8", "const:4:8"]]
- 0087867c ["CALL", null, ["callee:00c5b8e0:8"]]
+ 00879628 ["INT_ADD", "register:40f0:8", ["const:879628:8", "const:4:8"]]
+ 00879628 ["CALL", null, ["callee:00c5b8e0:8"]]
- 008786a8 ["INT_ADD", "register:40f0:8", ["const:8786a8:8", "const:4:8"]]
- 008786a8 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00879654 ["INT_ADD", "register:40f0:8", ["const:879654:8", "const:4:8"]]
+ 00879654 ["CALL", null, ["callee:00c5b8d0:8"]]
~~~


<a id="compare-a9e84cf9f429f05360c330a6e921214a"></a>

### [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) → [`0087975c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/0087975c.md) FUN_0087975c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`00878448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878448.md) [`00878c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878c44.md) [`00878f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f30.md) [`00878f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f48.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) · 呼出先 11件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00b3c978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c978.md)
- 新版 呼出元 5件 [`008793f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/008793f4.md) [`00879bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/00879bf0.md) [`00879edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/00879edc.md) [`00879ef4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/00879ef4.md) [`0087a2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087a2a0.md) · 呼出先 11件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00752688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/00752688.md) [`007846b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00784/007846b4.md) [`00b3d96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d96c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.74% / 新版 79.74%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00878998",
      "incomplete_value": true,
      "site": "008789a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087899c",
      "incomplete_value": true,
      "site": "008789a0",
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
            "const:78:8"
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
    "new": null,
    "old": {
      "definition_site": "00878a08",
      "incomplete_value": true,
      "site": "00878a14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00878848",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ],
    [
      "unmatched:00878848",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "00879818",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008797f4",
      "DATA",
      [
        "storage",
        "002b307b",
        null,
        null
      ]
    ],
    [
      "008797f4",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "00879818",
      "DATA",
      [
        "storage",
        "002b307b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008789a0 ["INT_ADD", "register:40f0:8", ["const:8789a0:8", "const:4:8"]]
- 008789a0 ["CALL", null, ["callee:00c5b990:8"]]
+ 0087994c ["INT_ADD", "register:40f0:8", ["const:87994c:8", "const:4:8"]]
+ 0087994c ["CALL", null, ["callee:00c5b990:8"]]
- 00878a14 ["INT_ADD", "register:40f0:8", ["const:878a14:8", "const:4:8"]]
- 00878a14 ["CALL", null, ["callee:00c5b8e0:8"]]
+ 008799c0 ["INT_ADD", "register:40f0:8", ["const:8799c0:8", "const:4:8"]]
+ 008799c0 ["CALL", null, ["callee:00c5b8e0:8"]]
- 00878a88 ["INT_ADD", "register:40f0:8", ["const:878a88:8", "const:4:8"]]
- 00878a88 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00879a34 ["INT_ADD", "register:40f0:8", ["const:879a34:8", "const:4:8"]]
+ 00879a34 ["CALL", null, ["callee:00c5b8d0:8"]]
~~~


<a id="compare-6666fa8a717151e46905825baa0c37f9"></a>

### [`00878c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878c44.md) → [`00879bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/00879bf0.md) FUN_00879bf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00611ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00611/00611ea0.md) [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 6件 [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)
- 新版 呼出元 5件 [`00612250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00612/00612250.md) [`0069722c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/0069722c.md) [`00720498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00720/00720498.md) [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) [`0094826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) · 呼出先 6件 [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`0087975c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/0087975c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00879ca0",
      "incomplete_value": false,
      "site": "00879ca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b0000:8"
          ],
          [
            "leaf",
            "const:a2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00878cf4",
      "incomplete_value": false,
      "site": "00878cf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:fcb:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00879d14",
      "incomplete_value": false,
      "site": "00879d14",
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
            "const:31f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00878d68",
      "incomplete_value": false,
      "site": "00878d68",
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
            "const:252:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00879d84",
      "incomplete_value": false,
      "site": "00879d84",
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
            "const:225:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00878dd8",
      "incomplete_value": false,
      "site": "00878dd8",
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
            "const:14e:8"
          ]
        ]
      ]
    },
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
      "00879ca0",
      "DATA",
      [
        "storage",
        "002affcb",
        null,
        null
      ]
    ],
    [
      "00879ce8",
      "DATA",
      [
        "storage",
        "002affcb",
        null,
        null
      ]
    ],
    [
      "00879d14",
      "DATA",
      [
        "storage",
        "002a9252",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00879ca0",
      "DATA",
      [
        "storage",
        "002b00a2",
        null,
        null
      ]
    ],
    [
      "00879ce8",
      "DATA",
      [
        "storage",
        "002b00a2",
        null,
        null
      ]
    ],
    [
      "00879d14",
      "DATA",
      [
        "storage",
        "002a931f",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00878e50 ["INT_ADD", "register:40f0:8", ["const:878e50:8", "const:4:8"]]
- 00878e50 ["CALL", null, ["callee:0087975c:8"]]
+ 00879dfc ["INT_ADD", "register:40f0:8", ["const:879dfc:8", "const:4:8"]]
+ 00879dfc ["CALL", null, ["callee:0087975c:8"]]
- 00878cd4 ["INT_ADD", "register:40f0:8", ["const:878cd4:8", "const:4:8"]]
- 00878cd4 ["CALL", null, ["callee:00c5b990:8"]]
+ 00879c80 ["INT_ADD", "register:40f0:8", ["const:879c80:8", "const:4:8"]]
+ 00879c80 ["CALL", null, ["callee:00c5b990:8"]]
- 00878ce8 ["COPY", "register:4040:8", ["const:2af000:8"]]
+ 00879c94 ["COPY", "register:4040:8", ["const:2b0000:8"]]
~~~


<a id="compare-345581ee67dcda55a7c8d8234a3e5cc6"></a>

### [`00878f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f60.md) → [`00879f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/00879f0c.md) FUN_00879f0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 11件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00b3c978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c978.md)
- 新版 呼出元 1件 [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 11件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00752688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/00752688.md) [`007846b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00784/007846b4.md) [`00b3d96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d96c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.27% / 新版 89.27%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00879f94",
      "incomplete_value": false,
      "site": "00879f94",
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
            "const:7b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00878fe8",
      "incomplete_value": false,
      "site": "00878fe8",
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
            "const:31:8"
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
    "new": {
      "definition_site": "0087a168",
      "incomplete_value": false,
      "site": "0087a174",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:929:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008791bc",
      "incomplete_value": false,
      "site": "008791c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:84b:8"
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00879f94",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ],
    [
      "00879fb8",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ],
    [
      "00879fdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0087903c"
      ]
    ]
  ],
  "added": [
    [
      "00879f94",
      "DATA",
      [
        "storage",
        "002b307b",
        null,
        null
      ]
    ],
    [
      "00879fb8",
      "DATA",
      [
        "storage",
        "002b307b",
        null,
        null
      ]
    ],
    [
      "00879fdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00879fe8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008791c8 ["INT_ADD", "register:40f0:8", ["const:8791c8:8", "const:4:8"]]
- 008791c8 ["CALL", null, ["callee:00c5ba30:8"]]
+ 0087a174 ["INT_ADD", "register:40f0:8", ["const:87a174:8", "const:4:8"]]
+ 0087a174 ["CALL", null, ["callee:00c5ba30:8"]]
- 00878fcc ["INT_ADD", "register:40f0:8", ["const:878fcc:8", "const:4:8"]]
- 00878fcc ["CALL", null, ["callee:00b3d96c:8"]]
+ 00879f78 ["INT_ADD", "register:40f0:8", ["const:879f78:8", "const:4:8"]]
+ 00879f78 ["CALL", null, ["callee:00b3d96c:8"]]
- 00878fd8 ["INT_ADD", "register:40f0:8", ["const:878fd8:8", "const:4:8"]]
- 00878fd8 ["CALL", null, ["callee:007846b4:8"]]
+ 00879f84 ["INT_ADD", "register:40f0:8", ["const:879f84:8", "const:4:8"]]
+ 00879f84 ["CALL", null, ["callee:007846b4:8"]]
~~~


<a id="compare-e1d983f7bb4a7ae1a32f1a1439cae2b1"></a>

### [`0087930c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087930c.md) → [`0087a2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087a2b8.md) _INIT_159

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 48.02% / 新版 48.02%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 45件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087a414",
      "incomplete_value": false,
      "site": "0087a418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00879468",
      "incomplete_value": true,
      "site": "0087946c",
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
      "definition_site": "0087a404",
      "incomplete_value": false,
      "site": "0087a418",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:668:8"
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
      "definition_site": "00879458",
      "incomplete_value": true,
      "site": "0087946c",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087a40c",
      "incomplete_value": true,
      "site": "0087a418",
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
    "old": {
      "definition_site": "00879460",
      "incomplete_value": true,
      "site": "0087946c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00879310",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00879314",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00879318",
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
      "0087a2bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0087a2c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087a2c4",
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
- 0087946c ["INT_ADD", "register:40f0:8", ["const:87946c:8", "const:4:8"]]
- 0087946c ["CALL", null, ["callee:0043bb58:8"]]
+ 0087a418 ["INT_ADD", "register:40f0:8", ["const:87a418:8", "const:4:8"]]
+ 0087a418 ["CALL", null, ["callee:0043bb58:8"]]
- 00879540 ["INT_ADD", "register:40f0:8", ["const:879540:8", "const:4:8"]]
- 00879540 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0087a4ec ["INT_ADD", "register:40f0:8", ["const:87a4ec:8", "const:4:8"]]
+ 0087a4ec ["CALL", null, ["callee:00c58ed0:8"]]
- 0087930c ["INT_SUB", "register:8:8", ["register:8:8", "const:120:8"]]
~~~


<a id="compare-1b5d9d4f70a3785c37149cb39b457064"></a>

### [`0087969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087969c.md) → [`0087a648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087a648.md) FUN_0087a648

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0087bc9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc9c.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md) [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0087cc48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cc48.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00493cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493cf8.md) [`00562a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562a54.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.42% / 新版 84.42%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087a684",
      "incomplete_value": false,
      "site": "0087a690",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:6b8:8"
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
    "new": null,
    "old": {
      "definition_site": "0087972c",
      "incomplete_value": true,
      "site": "00879730",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00879728",
      "incomplete_value": false,
      "site": "00879730",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "unmatched:008796b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008796d8",
      "PARAM",
      [
        "storage",
        "011236f8",
        null,
        "undefined2"
      ]
    ],
    [
      "unmatched:008796f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087a70c"
      ]
    ]
  ],
  "added": [
    [
      "0087a664",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0087a684",
      "PARAM",
      [
        "storage",
        "011246b8",
        null,
        "undefined2"
      ]
    ],
    [
      "0087a6a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087a70c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008796e4 ["INT_ADD", "register:40f0:8", ["const:8796e4:8", "const:4:8"]]
- 008796e4 ["CALL", null, ["callee:00562a54:8"]]
+ 0087a690 ["INT_ADD", "register:40f0:8", ["const:87a690:8", "const:4:8"]]
+ 0087a690 ["CALL", null, ["callee:00562a54:8"]]
- 00879730 ["INT_ADD", "register:40f0:8", ["const:879730:8", "const:4:8"]]
- 00879730 ["CALL", null, ["callee:00493cf8:8"]]
+ 0087a6dc ["INT_ADD", "register:40f0:8", ["const:87a6dc:8", "const:4:8"]]
+ 0087a6dc ["CALL", null, ["callee:00493cf8:8"]]
- 008796b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 008796b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-608c299af430b20d6644bc3d702260ad"></a>

### [`0087980c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087980c.md) → [`0087a7b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087a7b8.md) _INIT_160

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_store_alignment

命令の説明率　旧版 46.12% / 新版 46.12%

優先判定に残った影響 `call_argument_candidate` 10件, `store_destination` 4件, `store_value` 3件, `unresolved_store_alignment` 45件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0087aa20",
      "incomplete_value": false,
      "site": "0087aa20",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:6a0:8"
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
      "definition_site": "00879a74",
      "incomplete_value": false,
      "site": "00879a74",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:6e0:8"
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
    "ordinal": 46,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087aa08",
      "incomplete_value": true,
      "site": "0087aa2c",
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
                "const:34a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00879a5c",
      "incomplete_value": true,
      "site": "00879a80",
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
                "const:27d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0087aa30",
      "incomplete_value": false,
      "site": "0087aa30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00879a84",
      "incomplete_value": false,
      "site": "00879a84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
          ]
        ]
      ]
    },
    "ordinal": 48,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00879810",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00879814",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00879818",
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
      "0087a7bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0087a7c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087a7c4",
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
- 0087996c ["INT_ADD", "register:40f0:8", ["const:87996c:8", "const:4:8"]]
- 0087996c ["CALL", null, ["callee:0043bb58:8"]]
+ 0087a918 ["INT_ADD", "register:40f0:8", ["const:87a918:8", "const:4:8"]]
+ 0087a918 ["CALL", null, ["callee:0043bb58:8"]]
- 00879a44 ["INT_ADD", "register:40f0:8", ["const:879a44:8", "const:4:8"]]
- 00879a44 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0087a9f0 ["INT_ADD", "register:40f0:8", ["const:87a9f0:8", "const:4:8"]]
+ 0087a9f0 ["CALL", null, ["callee:00c58ed0:8"]]
- 00879a94 ["INT_ADD", "register:40f0:8", ["const:879a94:8", "const:4:8"]]
- 00879a94 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0087aa40 ["INT_ADD", "register:40f0:8", ["const:87aa40:8", "const:4:8"]]
+ 0087aa40 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-94a0ab20203cc3fdd4bad77f62fae186"></a>

### [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md) → [`0087ad8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ad8c.md) FUN_0087ad8c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1910.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`0087bc1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc1c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005b1cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1cc0.md) · 呼出先 10件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0087b30c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b30c.md) [`0087c3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c3c0.md) [`0087cbc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cbc8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.44% / 新版 95.44%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087ae14",
      "incomplete_value": true,
      "site": "0087ae20",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00879e68",
      "incomplete_value": true,
      "site": "00879e74",
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
                "const:20:8"
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
      "definition_site": "0087ae10",
      "incomplete_value": true,
      "site": "0087ae24",
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
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:d67:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00879e64",
      "incomplete_value": true,
      "site": "00879e78",
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
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:c0f:8"
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
      "definition_site": "0087ae10",
      "incomplete_value": true,
      "site": "0087ae24",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00879e64",
      "incomplete_value": true,
      "site": "00879e78",
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
                "const:10:8"
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
      "0087ae10",
      "READ",
      [
        "storage",
        "002a6c0f",
        null,
        null
      ]
    ],
    [
      "0087ae10",
      "READ",
      [
        "storage",
        "002a6c1f",
        null,
        null
      ]
    ],
    [
      "0087ae14",
      "READ",
      [
        "storage",
        "002a6c2f",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0087ae10",
      "READ",
      [
        "storage",
        "002a6d67",
        null,
        null
      ]
    ],
    [
      "0087ae10",
      "READ",
      [
        "storage",
        "002a6d77",
        null,
        null
      ]
    ],
    [
      "0087ae14",
      "READ",
      [
        "storage",
        "002a6d87",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00879e44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00879e44 ["INT_ADD", "register:40f0:8", ["const:879e44:8", "const:4:8"]]
- 00879e44 ["CALLIND", null, ["register:0:8"]]
+ 0087adf0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087adf0 ["INT_ADD", "register:40f0:8", ["const:87adf0:8", "const:4:8"]]
+ 0087adf0 ["CALLIND", null, ["register:0:8"]]
- 00879e54 ["INT_ADD", "register:40f0:8", ["const:879e54:8", "const:4:8"]]
- 00879e54 ["CALL", null, ["callee:00c58f30:8"]]
+ 0087ae00 ["INT_ADD", "register:40f0:8", ["const:87ae00:8", "const:4:8"]]
+ 0087ae00 ["CALL", null, ["callee:00c58f30:8"]]
- 00879e5c ["COPY", "tmp:0:8", ["const:c0f:8"]]
- 00879e5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00879e5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00879e5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087ae08 ["COPY", "tmp:0:8", ["const:d67:8"]]
+ 0087ae08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087ae08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087ae08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cc11e1ba4a723167a52c9bcd29979a28"></a>

### [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) → [`0087b30c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b30c.md) FUN_0087b30c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md) [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) · 呼出先 7件 [`0087b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b4a0.md) [`0087b5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b5f8.md) [`0087b7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b7d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0087ad8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ad8c.md) [`00b354a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b354a0.md) · 呼出先 7件 [`0087c44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c44c.md) [`0087c5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c5a4.md) [`0087c77c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c77c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.53% / 新版 74.53%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087b358",
      "incomplete_value": true,
      "site": "0087b35c",
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
      "definition_site": "0087b390",
      "incomplete_value": true,
      "site": "0087b394",
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
    "guard": [
      [
        "FALL_THROUGH",
        "0087a438"
      ],
      [
        "FALL_THROUGH",
        "0087b3e4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0087b3e0",
      "incomplete_value": true,
      "site": "0087b3ec",
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
                "register:4040:8"
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
      "definition_site": "0087a434",
      "incomplete_value": true,
      "site": "0087a440",
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
                "register:4040:8"
              ],
              [
                "live",
                "register:4048:8"
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
      "unmatched:0087a364",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087a368",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087a36c",
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
      "0087b310",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0087b314",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087b318",
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
- 0087a3b0 ["INT_ADD", "register:40f0:8", ["const:87a3b0:8", "const:4:8"]]
- 0087a3b0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 0087b35c ["INT_ADD", "register:40f0:8", ["const:87b35c:8", "const:4:8"]]
+ 0087b35c ["CALL", null, ["callee:00c5baa0:8"]]
- 0087a3e8 ["INT_ADD", "register:40f0:8", ["const:87a3e8:8", "const:4:8"]]
- 0087a3e8 ["CALL", null, ["callee:00c5bab0:8"]]
+ 0087b394 ["INT_ADD", "register:40f0:8", ["const:87b394:8", "const:4:8"]]
+ 0087b394 ["CALL", null, ["callee:00c5bab0:8"]]
- 0087a360 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
~~~


<a id="compare-6fb75bce337d932014d7699d8f866f62"></a>

### [`0087aa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087aa68.md) → [`0087ba14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087ba14.md) FUN_0087ba14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) [`00b34f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f40.md) · 呼出先 7件 [`0087b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b4a0.md) [`0087bff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bff8.md) [`0087c1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c1d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0087b74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b74c.md) [`00b35f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35f34.md) · 呼出先 7件 [`0087c44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c44c.md) [`0087cfa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cfa4.md) [`0087d17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d17c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 94.34% / 新版 94.34%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087badc",
      "incomplete_value": false,
      "site": "0087badc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087ab30",
      "incomplete_value": false,
      "site": "0087ab30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087ba7c",
      "incomplete_value": false,
      "site": "0087ba94",
      "value": [
        "leaf",
        "const:87cfa4:8"
      ]
    },
    "old": {
      "definition_site": "0087aad0",
      "incomplete_value": false,
      "site": "0087aae8",
      "value": [
        "leaf",
        "const:87bff8:8"
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
      "0087ba7c",
      "PARAM",
      [
        "storage",
        "0087bff8",
        null,
        null
      ]
    ],
    [
      "0087badc",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ],
    [
      "0087bb5c",
      "READ",
      [
        "storage",
        "00c80480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087ba7c",
      "PARAM",
      [
        "storage",
        "0087cfa4",
        null,
        null
      ]
    ],
    [
      "0087badc",
      "DATA",
      [
        "storage",
        "00c81428",
        null,
        "undefined *"
      ]
    ],
    [
      "0087bb5c",
      "READ",
      [
        "storage",
        "00c81450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087aae8 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087aae8 ["INT_ADD", "register:40f0:8", ["const:87aae8:8", "const:4:8"]]
- 0087aae8 ["CALLIND", null, ["register:0:8"]]
+ 0087ba94 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087ba94 ["INT_ADD", "register:40f0:8", ["const:87ba94:8", "const:4:8"]]
+ 0087ba94 ["CALLIND", null, ["register:0:8"]]
- 0087aa90 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0087aa90 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0087ba3c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0087ba3c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0087aa98 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 0087ba44 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-da91410b542d2428839692a0c4b8fc94"></a>

### [`0087b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b148.md) → [`0087c0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c0f4.md) FUN_0087c0f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087acb0.md) · 呼出先 7件 [`0087b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b4a0.md) [`0087c660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c660.md) [`0087c838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c838.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0087bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087bc5c.md) · 呼出先 7件 [`0087c44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c44c.md) [`0087d60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d60c.md) [`0087d7e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d7e4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 97.17% / 新版 97.17%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087c1bc",
      "incomplete_value": false,
      "site": "0087c1bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087b210",
      "incomplete_value": false,
      "site": "0087b210",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087c15c",
      "incomplete_value": false,
      "site": "0087c174",
      "value": [
        "leaf",
        "const:87d60c:8"
      ]
    },
    "old": {
      "definition_site": "0087b1b0",
      "incomplete_value": false,
      "site": "0087b1c8",
      "value": [
        "leaf",
        "const:87c660:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087c208",
      "incomplete_value": true,
      "site": "0087c214",
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
      "unmatched:0087b168",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0087c15c",
      "PARAM",
      [
        "storage",
        "0087c660",
        null,
        null
      ]
    ],
    [
      "0087c1bc",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c114",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0087c15c",
      "PARAM",
      [
        "storage",
        "0087d60c",
        null,
        null
      ]
    ],
    [
      "0087c1bc",
      "DATA",
      [
        "storage",
        "00c81538",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b1c8 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087b1c8 ["INT_ADD", "register:40f0:8", ["const:87b1c8:8", "const:4:8"]]
- 0087b1c8 ["CALLIND", null, ["register:0:8"]]
+ 0087c174 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087c174 ["INT_ADD", "register:40f0:8", ["const:87c174:8", "const:4:8"]]
+ 0087c174 ["CALLIND", null, ["register:0:8"]]
- 0087b268 ["INT_ADD", "register:40f0:8", ["const:87b268:8", "const:4:8"]]
- 0087b268 ["CALL", null, ["callee:0087c44c:8"]]
+ 0087c214 ["INT_ADD", "register:40f0:8", ["const:87c214:8", "const:4:8"]]
+ 0087c214 ["CALL", null, ["callee:0087c44c:8"]]
- 0087b168 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0087b168 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0087b168 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-cc0ce8de06a483b226b425c23f0f248e"></a>

### [`0087b5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b5fc.md) → [`0087c5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c5a8.md) FUN_0087c5a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 52.94% / 新版 52.94%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087b614",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087b618",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087c5d4"
      ]
    ]
  ],
  "added": [
    [
      "0087c5c0",
      "DATA",
      [
        "storage",
        "00c81308",
        null,
        "undefined *"
      ]
    ],
    [
      "0087c5c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087c5d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b5fc ["COPY", "register:4040:8", ["register:4000:8"]]
- 0087b600 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 0087b600 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 0087b604 ["COPY", "register:4050:8", ["const:c80000:8"]]
~~~


<a id="compare-ecb925fb87820419cb4a402e27461b99"></a>

### [`0087b640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b640.md) → [`0087c5ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c5ec.md) FUN_0087c5ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087c604",
      "incomplete_value": false,
      "site": "0087c610",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087b658",
      "incomplete_value": false,
      "site": "0087b664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "0087c610",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c610",
      "DATA",
      [
        "storage",
        "00c81308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b654 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087c600 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087b658 ["COPY", "tmp:0:8", ["const:338:8"]]
- 0087b658 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b658 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b658 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c604 ["COPY", "tmp:0:8", ["const:308:8"]]
+ 0087c604 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c604 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c604 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087b688 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b688 ["INT_ADD", "register:40f0:8", ["const:87b688:8", "const:4:8"]]
- 0087b688 ["CALLIND", null, ["register:0:8"]]
+ 0087c634 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c634 ["INT_ADD", "register:40f0:8", ["const:87c634:8", "const:4:8"]]
+ 0087c634 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f38be8df7b4bb6735ebc1b46d304e70f"></a>

### [`0087b69c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b69c.md) → [`0087c648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c648.md) FUN_0087c648

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087c674",
      "incomplete_value": false,
      "site": "0087c674",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087b6c8",
      "incomplete_value": false,
      "site": "0087b6c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "0087c674",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c674",
      "DATA",
      [
        "storage",
        "00c81308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b6b0 ["INT_ADD", "register:40f0:8", ["const:87b6b0:8", "const:4:8"]]
- 0087b6b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0087c65c ["INT_ADD", "register:40f0:8", ["const:87c65c:8", "const:4:8"]]
+ 0087c65c ["CALL", null, ["callee:00c58f30:8"]]
- 0087b6bc ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087c668 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087b6c0 ["COPY", "tmp:0:8", ["const:338:8"]]
- 0087b6c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b6c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b6c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c66c ["COPY", "tmp:0:8", ["const:308:8"]]
+ 0087c66c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c66c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c66c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-75358bffe2419742acebed9d4857b673"></a>

### [`0087b724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b724.md) → [`0087c6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c6d0.md) FUN_0087c6d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087c6ec",
      "incomplete_value": false,
      "site": "0087c6ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087b740",
      "incomplete_value": false,
      "site": "0087b740",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "0087c6ec",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c6ec",
      "DATA",
      [
        "storage",
        "00c81308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b738 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 0087c6e4 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0087b73c ["COPY", "tmp:0:8", ["const:338:8"]]
- 0087b73c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087b73c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087b73c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087c6e8 ["COPY", "tmp:0:8", ["const:308:8"]]
+ 0087c6e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c6e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c6e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087b760 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087b760 ["INT_ADD", "register:40f0:8", ["const:87b760:8", "const:4:8"]]
- 0087b760 ["CALLIND", null, ["register:0:8"]]
+ 0087c70c ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087c70c ["INT_ADD", "register:40f0:8", ["const:87c70c:8", "const:4:8"]]
+ 0087c70c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-79035d779170ebff541b0c64de5433ff"></a>

### [`0087b868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b868.md) → [`0087c814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c814.md) FUN_0087c814

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087b868",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087b86c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087b890",
      "DATA",
      [
        "storage",
        "00c803c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c814",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087c818",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0087c83c",
      "DATA",
      [
        "storage",
        "00c81398",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b868 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087b868 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087b868 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087b868 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087b86c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0087b86c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0087b86c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0087b86c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0087b870 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-1dfc003a60c0d4905172d4f5da3c4cbd"></a>

### [`0087b8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b8f8.md) → [`0087c8a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c8a4.md) FUN_0087c8a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087c8bc",
      "incomplete_value": false,
      "site": "0087c8cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:398:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087b910",
      "incomplete_value": false,
      "site": "0087b920",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:3c8:8"
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
      "0087c8cc",
      "DATA",
      [
        "storage",
        "00c803c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087b970",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0087c8cc",
      "DATA",
      [
        "storage",
        "00c81398",
        null,
        "undefined *"
      ]
    ],
    [
      "0087c91c",
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
- 0087b90c ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087c8b8 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087b910 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 0087b910 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b910 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b910 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c8bc ["COPY", "tmp:0:8", ["const:398:8"]]
+ 0087c8bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c8bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c8bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087b944 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b944 ["INT_ADD", "register:40f0:8", ["const:87b944:8", "const:4:8"]]
- 0087b944 ["CALLIND", null, ["register:0:8"]]
+ 0087c8f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c8f0 ["INT_ADD", "register:40f0:8", ["const:87c8f0:8", "const:4:8"]]
+ 0087c8f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b2c87a476a0bbf9be177677abd262f21"></a>

### [`0087b984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b984.md) → [`0087c930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c930.md) FUN_0087c930

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.84% / 新版 91.84%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087c944",
      "incomplete_value": false,
      "site": "0087c948",
      "value": [
        "leaf",
        "const:80:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0087c9e0",
      "incomplete_value": true,
      "site": "0087c9f0",
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
      "unmatched:0087b9b4",
      "DATA",
      [
        "storage",
        "00c803c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087b9b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087c980"
      ]
    ]
  ],
  "added": [
    [
      "0087c960",
      "DATA",
      [
        "storage",
        "00c81398",
        null,
        "undefined *"
      ]
    ],
    [
      "0087c964",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087c980"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b99c ["INT_ADD", "register:40f0:8", ["const:87b99c:8", "const:4:8"]]
- 0087b99c ["CALL", null, ["callee:00c58f30:8"]]
+ 0087c948 ["INT_ADD", "register:40f0:8", ["const:87c948:8", "const:4:8"]]
+ 0087c948 ["CALL", null, ["callee:00c58f30:8"]]
- 0087b9a8 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087c954 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087b9ac ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 0087b9ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b9ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b9ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-46c790d8d97859ac6c104070b526248c"></a>

### [`0087ba94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087ba94.md) → [`0087ca40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087ca40.md) FUN_0087ca40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0087bac0"
      ],
      [
        "CONDITIONAL_JUMP",
        "0087ca6c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0087ca6c",
      "incomplete_value": true,
      "site": "0087ca90",
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
      "definition_site": "0087bac0",
      "incomplete_value": true,
      "site": "0087bae4",
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
      "unmatched:0087ba94",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087ba98",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087ba9c",
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
      "0087ca40",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0087ca44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087ca48",
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
- 0087ba94 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087ba94 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087ba94 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0087ba94 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087ba98 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0087ba98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0087ba9c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0087ba9c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0087ba9c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0087ba9c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-940d68a19f5c095e895f8c5ae4f54bed"></a>

### [`0087bc9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc9c.md) → [`0087cc48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cc48.md) FUN_0087cc48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0087969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087969c.md) [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0087a648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087a648.md) [`0087b74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b74c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 3件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087ccc0",
      "incomplete_value": true,
      "site": "0087ccd4",
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
                "const:6f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087bd14",
      "incomplete_value": true,
      "site": "0087bd28",
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
                "const:6a0:8"
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
      "definition_site": "0087ccd8",
      "incomplete_value": true,
      "site": "0087cce8",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:80b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087bd2c",
      "incomplete_value": true,
      "site": "0087bd3c",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:7c1:8"
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
      "definition_site": "0087ccd8",
      "incomplete_value": true,
      "site": "0087cce8",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087bd2c",
      "incomplete_value": true,
      "site": "0087bd3c",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "0087ccc0",
      "READ",
      [
        "storage",
        "002c26a0",
        null,
        null
      ]
    ],
    [
      "0087ccd8",
      "READ",
      [
        "storage",
        "002c17c1",
        null,
        null
      ]
    ],
    [
      "0087ccd8",
      "READ",
      [
        "storage",
        "002c17d1",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0087ccc0",
      "READ",
      [
        "storage",
        "002c26f0",
        null,
        null
      ]
    ],
    [
      "0087ccd8",
      "READ",
      [
        "storage",
        "002c180b",
        null,
        null
      ]
    ],
    [
      "0087ccd8",
      "READ",
      [
        "storage",
        "002c181b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0087bccc ["INT_ADD", "register:40f0:8", ["const:87bccc:8", "const:4:8"]]
- 0087bccc ["CALL", null, ["callee:00c5baa0:8"]]
+ 0087cc78 ["INT_ADD", "register:40f0:8", ["const:87cc78:8", "const:4:8"]]
+ 0087cc78 ["CALL", null, ["callee:00c5baa0:8"]]
- 0087bce4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bce4 ["INT_ADD", "register:40f0:8", ["const:87bce4:8", "const:4:8"]]
- 0087bce4 ["CALLIND", null, ["register:0:8"]]
+ 0087cc90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087cc90 ["INT_ADD", "register:40f0:8", ["const:87cc90:8", "const:4:8"]]
+ 0087cc90 ["CALLIND", null, ["register:0:8"]]
- 0087bcf8 ["INT_ADD", "register:40f0:8", ["const:87bcf8:8", "const:4:8"]]
- 0087bcf8 ["CALL", null, ["callee:00c5bab0:8"]]
+ 0087cca4 ["INT_ADD", "register:40f0:8", ["const:87cca4:8", "const:4:8"]]
+ 0087cca4 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-bdaf23b70800cbe1929731d519196cfe"></a>

### [`0087bffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bffc.md) → [`0087cfa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cfa8.md) FUN_0087cfa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087cfb4",
      "incomplete_value": false,
      "site": "0087cfc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c008",
      "incomplete_value": false,
      "site": "0087c014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:458:8"
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
      "0087cfc0",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087cfc0",
      "DATA",
      [
        "storage",
        "00c81428",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c004 ["COPY", "register:4050:8", ["const:c80000:8"]]
+ 0087cfb0 ["COPY", "register:4050:8", ["const:c81000:8"]]
- 0087c008 ["COPY", "tmp:0:8", ["const:458:8"]]
- 0087c008 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0087c008 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0087c008 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0087cfb4 ["COPY", "tmp:0:8", ["const:428:8"]]
+ 0087cfb4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0087cfb4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0087cfb4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-a715203cd2fc77bc2e255065bdfac1b1"></a>

### [`0087c040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c040.md) → [`0087cfec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cfec.md) FUN_0087cfec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d004",
      "incomplete_value": false,
      "site": "0087d010",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c058",
      "incomplete_value": false,
      "site": "0087c064",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:458:8"
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
      "0087d010",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d010",
      "DATA",
      [
        "storage",
        "00c81428",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c054 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087d000 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087c058 ["COPY", "tmp:0:8", ["const:458:8"]]
- 0087c058 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c058 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c058 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087d004 ["COPY", "tmp:0:8", ["const:428:8"]]
+ 0087d004 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d004 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d004 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c088 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c088 ["INT_ADD", "register:40f0:8", ["const:87c088:8", "const:4:8"]]
- 0087c088 ["CALLIND", null, ["register:0:8"]]
+ 0087d034 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087d034 ["INT_ADD", "register:40f0:8", ["const:87d034:8", "const:4:8"]]
+ 0087d034 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8581dd048b118dd4192c5709143edb54"></a>

### [`0087c09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c09c.md) → [`0087d048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d048.md) FUN_0087d048

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d074",
      "incomplete_value": false,
      "site": "0087d074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c0c8",
      "incomplete_value": false,
      "site": "0087c0c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:458:8"
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
      "0087d074",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d074",
      "DATA",
      [
        "storage",
        "00c81428",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c0b0 ["INT_ADD", "register:40f0:8", ["const:87c0b0:8", "const:4:8"]]
- 0087c0b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0087d05c ["INT_ADD", "register:40f0:8", ["const:87d05c:8", "const:4:8"]]
+ 0087d05c ["CALL", null, ["callee:00c58f30:8"]]
- 0087c0bc ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087d068 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087c0c0 ["COPY", "tmp:0:8", ["const:458:8"]]
- 0087c0c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c0c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c0c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087d06c ["COPY", "tmp:0:8", ["const:428:8"]]
+ 0087d06c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d06c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d06c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-23c0ee1f468878d2ec90b5bd05d5fc19"></a>

### [`0087c124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c124.md) → [`0087d0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d0d0.md) FUN_0087d0d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d0ec",
      "incomplete_value": false,
      "site": "0087d0ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:428:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c140",
      "incomplete_value": false,
      "site": "0087c140",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:458:8"
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
      "0087d0ec",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d0ec",
      "DATA",
      [
        "storage",
        "00c81428",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c138 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 0087d0e4 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0087c13c ["COPY", "tmp:0:8", ["const:458:8"]]
- 0087c13c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087c13c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087c13c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087d0e8 ["COPY", "tmp:0:8", ["const:428:8"]]
+ 0087d0e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d0e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d0e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087c160 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087c160 ["INT_ADD", "register:40f0:8", ["const:87c160:8", "const:4:8"]]
- 0087c160 ["CALLIND", null, ["register:0:8"]]
+ 0087d10c ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087d10c ["INT_ADD", "register:40f0:8", ["const:87d10c:8", "const:4:8"]]
+ 0087d10c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b3d6eb899312a3a3904059b2b5fca9e7"></a>

### [`0087c1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c1d0.md) → [`0087d17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d17c.md) FUN_0087d17c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087aa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087aa68.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0087ba14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087ba14.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087c1ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d1a8"
      ]
    ]
  ],
  "added": [
    [
      "0087d198",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d1a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c1e8 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 0087c1e8 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 0087c1e8 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 0087c1e8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0087c1ec ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 0087c1f0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0087c1f0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 0087d19c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0087d19c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-16b7dc00f2201a184f2da26eba61ad76"></a>

### [`0087c220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c220.md) → [`0087d1cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d1cc.md) FUN_0087d1cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 87.50% / 新版 87.50%

~~~diff
- 0087c224 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0087c224 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0087d1d0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0087d1d0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0087c230 ["COPY", "register:0:8", ["register:4010:8"]]
- 0087c230 ["BRANCHIND", null, ["register:0:8"]]
- 0087c23c ["INT_ADD", "register:40f0:8", ["const:87c23c:8", "const:4:8"]]
- 0087c23c ["CALL", null, ["callee:0045a0d4:8"]]
+ 0087d1e8 ["INT_ADD", "register:40f0:8", ["const:87d1e8:8", "const:4:8"]]
+ 0087d1e8 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-73944f99d843ec0357bd76a1491432ce"></a>

### [`0087c268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c268.md) → [`0087d214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d214.md) FUN_0087d214

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d220",
      "incomplete_value": false,
      "site": "0087d22c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c274",
      "incomplete_value": false,
      "site": "0087c280",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
      "0087d22c",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d22c",
      "DATA",
      [
        "storage",
        "00c814a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c270 ["COPY", "register:4050:8", ["const:c80000:8"]]
+ 0087d21c ["COPY", "register:4050:8", ["const:c81000:8"]]
- 0087c274 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 0087c274 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0087c274 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0087c274 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0087d220 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 0087d220 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0087d220 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0087d220 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-5972c2929331319feb35466e0a1c7fec"></a>

### [`0087c2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c2ac.md) → [`0087d258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d258.md) FUN_0087d258

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d270",
      "incomplete_value": false,
      "site": "0087d27c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c2c4",
      "incomplete_value": false,
      "site": "0087c2d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
      "0087d27c",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d27c",
      "DATA",
      [
        "storage",
        "00c814a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c2c0 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087d26c ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087c2c4 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 0087c2c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c2c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c2c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087d270 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 0087d270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c2d4 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 0087d280 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-5834aa490c3bbeb48ea229f852a70716"></a>

### [`0087c308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c308.md) → [`0087d2b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d2b4.md) FUN_0087d2b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "0087c36c",
      "incomplete_value": true,
      "site": "0087c378",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:0087c308",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c30c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c334",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d2b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087d2b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0087d2e0",
      "DATA",
      [
        "storage",
        "00c814a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c308 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087c308 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087c308 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087c308 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087c30c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0087c30c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0087c30c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0087c30c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0087c310 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-d4108d96a76bb830f8eca29131714e09"></a>

### [`0087c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c390.md) → [`0087d33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d33c.md) FUN_0087d33c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d358",
      "incomplete_value": false,
      "site": "0087d358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c3ac",
      "incomplete_value": false,
      "site": "0087c3ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
      "0087d358",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d358",
      "DATA",
      [
        "storage",
        "00c814a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c3a4 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 0087d350 ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0087c3a8 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 0087c3a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087c3a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087c3a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087d354 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 0087d354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087c3cc ["COPY", "register:0:8", ["register:4048:8"]]
- 0087c3cc ["INT_ADD", "register:40f0:8", ["const:87c3cc:8", "const:4:8"]]
- 0087c3cc ["CALLIND", null, ["register:0:8"]]
+ 0087d378 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087d378 ["INT_ADD", "register:40f0:8", ["const:87d378:8", "const:4:8"]]
+ 0087d378 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e6da8f348744deee3e4bc79263de3246"></a>

### [`0087c43c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c43c.md) → [`0087d3e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d3e8.md) FUN_0087d3e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0087b74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b74c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c478 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c478 ["INT_ADD", "register:40f0:8", ["const:87c478:8", "const:4:8"]]
- 0087c478 ["CALLIND", null, ["register:0:8"]]
+ 0087d424 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087d424 ["INT_ADD", "register:40f0:8", ["const:87d424:8", "const:4:8"]]
+ 0087d424 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f519658b2735d3a9cca5ab82bb2533e9"></a>

### [`0087c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c48c.md) → [`0087d438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d438.md) FUN_0087d438

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087c4ac",
      "incomplete_value": true,
      "site": "0087c4bc",
      "value": [
        "live",
        "register:4008:8"
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
      "unmatched:0087c4b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c5a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d5e0"
      ]
    ],
    [
      "unmatched:0087c5e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d5e0"
      ]
    ]
  ],
  "added": [
    [
      "0087d464",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0087d554",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d5e0"
      ]
    ],
    [
      "0087d594",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d5e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c4bc ["INT_ADD", "register:40f0:8", ["const:87c4bc:8", "const:4:8"]]
- 0087c4bc ["CALL", null, ["callee:00c5baa0:8"]]
+ 0087d468 ["INT_ADD", "register:40f0:8", ["const:87d468:8", "const:4:8"]]
+ 0087d468 ["CALL", null, ["callee:00c5baa0:8"]]
- 0087c4b8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0087c4b8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 0087c4b8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0087c4d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c4d4 ["INT_ADD", "register:40f0:8", ["const:87c4d4:8", "const:4:8"]]
- 0087c4d4 ["CALLIND", null, ["register:0:8"]]
+ 0087d480 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087d480 ["INT_ADD", "register:40f0:8", ["const:87d480:8", "const:4:8"]]
+ 0087d480 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ad7f0cec72195bf887bc03daed5bf820"></a>

### [`0087c664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c664.md) → [`0087d610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d610.md) FUN_0087d610

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d61c",
      "incomplete_value": false,
      "site": "0087d628",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c670",
      "incomplete_value": false,
      "site": "0087c67c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:568:8"
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
      "0087d628",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d628",
      "DATA",
      [
        "storage",
        "00c81538",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c66c ["COPY", "register:4050:8", ["const:c80000:8"]]
+ 0087d618 ["COPY", "register:4050:8", ["const:c81000:8"]]
- 0087c670 ["COPY", "tmp:0:8", ["const:568:8"]]
- 0087c670 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0087c670 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0087c670 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0087d61c ["COPY", "tmp:0:8", ["const:538:8"]]
+ 0087d61c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0087d61c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0087d61c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-445276816af08e2c4ed43aa357fb414d"></a>

### [`0087c6a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c6a8.md) → [`0087d654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d654.md) FUN_0087d654

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d66c",
      "incomplete_value": false,
      "site": "0087d678",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c6c0",
      "incomplete_value": false,
      "site": "0087c6cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:568:8"
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
      "0087d678",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087c6f0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0087d678",
      "DATA",
      [
        "storage",
        "00c81538",
        null,
        "undefined *"
      ]
    ],
    [
      "0087d69c",
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
- 0087c6bc ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087d668 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087c6c0 ["COPY", "tmp:0:8", ["const:568:8"]]
- 0087c6c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c6c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c6c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087d66c ["COPY", "tmp:0:8", ["const:538:8"]]
+ 0087d66c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d66c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d66c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c6d4 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0087c6d4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0087d680 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0087d680 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-e8749154999bf21da6900502cf89c470"></a>

### [`0087c704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c704.md) → [`0087d6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d6b0.md) FUN_0087d6b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d6dc",
      "incomplete_value": false,
      "site": "0087d6dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c730",
      "incomplete_value": false,
      "site": "0087c730",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0087c740"
      ],
      [
        "CONDITIONAL_JUMP",
        "0087d6ec"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087d708",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "0087c73c",
      "incomplete_value": true,
      "site": "0087c75c",
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
                "register:4000:8"
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
      "0087d6dc",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087c740",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d704"
      ]
    ]
  ],
  "added": [
    [
      "0087d6dc",
      "DATA",
      [
        "storage",
        "00c81538",
        null,
        "undefined *"
      ]
    ],
    [
      "0087d6ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d704"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c718 ["INT_ADD", "register:40f0:8", ["const:87c718:8", "const:4:8"]]
- 0087c718 ["CALL", null, ["callee:00c58f30:8"]]
+ 0087d6c4 ["INT_ADD", "register:40f0:8", ["const:87d6c4:8", "const:4:8"]]
+ 0087d6c4 ["CALL", null, ["callee:00c58f30:8"]]
- 0087c724 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087d6d0 ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087c728 ["COPY", "tmp:0:8", ["const:568:8"]]
- 0087c728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087d6d4 ["COPY", "tmp:0:8", ["const:538:8"]]
+ 0087d6d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d6d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d6d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4eaef704b0bc5e90e916a0ddc9bc254"></a>

### [`0087c78c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c78c.md) → [`0087d738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d738.md) FUN_0087d738

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d754",
      "incomplete_value": false,
      "site": "0087d754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087c7a8",
      "incomplete_value": false,
      "site": "0087c7a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0087c7b8"
      ],
      [
        "FALL_THROUGH",
        "0087d764"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0087d760",
      "incomplete_value": true,
      "site": "0087d778",
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
                "register:4040:8"
              ],
              [
                "live",
                "register:4048:8"
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
      "definition_site": "0087c7b4",
      "incomplete_value": true,
      "site": "0087c7cc",
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
                "register:4040:8"
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
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0087c7b8"
      ],
      [
        "CONDITIONAL_JUMP",
        "0087d764"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0087d760",
      "incomplete_value": true,
      "site": "0087d790",
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
                "register:4040:8"
              ],
              [
                "live",
                "register:4048:8"
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
      "definition_site": "0087c7b4",
      "incomplete_value": true,
      "site": "0087c7e4",
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
                "register:4040:8"
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
      "0087d754",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087c7b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d790"
      ]
    ]
  ],
  "added": [
    [
      "0087d754",
      "DATA",
      [
        "storage",
        "00c81538",
        null,
        "undefined *"
      ]
    ],
    [
      "0087d764",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d790"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c7a0 ["COPY", "register:4048:8", ["const:c80000:8"]]
+ 0087d74c ["COPY", "register:4048:8", ["const:c81000:8"]]
- 0087c7a4 ["COPY", "tmp:0:8", ["const:568:8"]]
- 0087c7a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087c7a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087c7a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087d750 ["COPY", "tmp:0:8", ["const:538:8"]]
+ 0087d750 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d750 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d750 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087c7ac ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0087c7ac ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0087d758 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0087d758 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-553adb716f49e441861ca0abda5114dc"></a>

### [`0087c838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c838.md) → [`0087d7e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d7e4.md) FUN_0087d7e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b148.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0087c0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c0f4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087c838",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c83c",
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
      "0087d7e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087d7e8",
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
- 0087c838 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087c838 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087c838 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087c838 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087c83c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0087c83c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0087c840 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e57970f2d3b4fc3b32ce175505b239b2"></a>

### [`0087c8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c8d0.md) → [`0087d87c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d87c.md) FUN_0087d87c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 36.11% / 新版 36.11%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087c8d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c8d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c8f8",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d87c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087d880",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0087d8a4",
      "DATA",
      [
        "storage",
        "00c815b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c8d0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087c8d0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087c8d0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087c8d0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087c8d4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0087c8d4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0087c8d4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0087c8d4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0087c8d8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e9fb536a2c0321b906b95de8dac3c5cf"></a>

### [`0087c960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c960.md) → [`0087d90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d90c.md) FUN_0087d90c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087c960",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c964",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087c988",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d90c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087d910",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0087d934",
      "DATA",
      [
        "storage",
        "00c815b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c960 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087c960 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087c960 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087c960 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087c964 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0087c964 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0087c964 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0087c964 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0087c968 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-00474d74e73fde182fc0cc731153470a"></a>

### [`0087c9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c9ec.md) → [`0087d998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d998.md) FUN_0087d998

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.23% / 新版 87.23%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087ca00",
      "incomplete_value": false,
      "site": "0087ca04",
      "value": [
        "leaf",
        "const:70:8"
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
      "unmatched:0087ca1c",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087ca20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d9e8"
      ]
    ],
    [
      "unmatched:0087ca54",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0087d9c8",
      "DATA",
      [
        "storage",
        "00c815b8",
        null,
        "undefined *"
      ]
    ],
    [
      "0087d9cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087d9e8"
      ]
    ],
    [
      "0087da00",
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
- 0087ca04 ["INT_ADD", "register:40f0:8", ["const:87ca04:8", "const:4:8"]]
- 0087ca04 ["CALL", null, ["callee:00c58f30:8"]]
+ 0087d9b0 ["INT_ADD", "register:40f0:8", ["const:87d9b0:8", "const:4:8"]]
+ 0087d9b0 ["CALL", null, ["callee:00c58f30:8"]]
- 0087ca10 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087d9bc ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087ca14 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 0087ca14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087ca14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087ca14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-334549039f2140b8f76338f2e6c73e17"></a>

### [`0087caf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087caf4.md) → [`0087daa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087daa0.md) FUN_0087daa0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 90.38% / 新版 90.38%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087dac8",
      "incomplete_value": false,
      "site": "0087dac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c81000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087cb1c",
      "incomplete_value": false,
      "site": "0087cb1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
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
      "0087dac8",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087cb90",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0087dac8",
      "DATA",
      [
        "storage",
        "00c815b8",
        null,
        "undefined *"
      ]
    ],
    [
      "0087db3c",
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
- 0087cb10 ["COPY", "register:4040:8", ["const:c80000:8"]]
+ 0087dabc ["COPY", "register:4040:8", ["const:c81000:8"]]
- 0087cb14 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 0087cb14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087cb14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087cb14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087dac0 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 0087dac0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087dac0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087dac0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087cb18 ["COPY", "register:40a0:8", ["register:4008:8"]]
~~~


<a id="compare-ec289e08dfcca5afa929453d16694d06"></a>

### [`0087cc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087cc84.md) → [`0087dc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087dc30.md) FUN_0087dc30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087acb0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0087bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087bc5c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087cc84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087cc88",
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
      "0087dc30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087dc34",
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
- 0087cc84 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087cc84 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087cc84 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0087cc84 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0087cc88 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0087cc88 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0087cc88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0087cc88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0087cc8c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-56ecb3e65fda1e188347494e5e03abf6"></a>

### [`0087cec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087cec8.md) → [`0087de74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087de74.md) _INIT_161

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.53% / 新版 70.53%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087d040",
      "incomplete_value": true,
      "site": "0087d050",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087d044",
      "incomplete_value": true,
      "site": "0087d050",
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087d048",
      "incomplete_value": true,
      "site": "0087d050",
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
      "unmatched:0087cecc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087cef8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087cf04",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0087de78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0087dea4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0087deb0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087d050 ["INT_ADD", "register:40f0:8", ["const:87d050:8", "const:4:8"]]
- 0087d050 ["CALL", null, ["callee:0043bb58:8"]]
+ 0087dffc ["INT_ADD", "register:40f0:8", ["const:87dffc:8", "const:4:8"]]
+ 0087dffc ["CALL", null, ["callee:0043bb58:8"]]
- 0087d064 ["INT_ADD", "register:40f0:8", ["const:87d064:8", "const:4:8"]]
- 0087d064 ["CALL", null, ["callee:0043bb58:8"]]
+ 0087e010 ["INT_ADD", "register:40f0:8", ["const:87e010:8", "const:4:8"]]
+ 0087e010 ["CALL", null, ["callee:0043bb58:8"]]
- 0087d08c ["INT_ADD", "register:40f0:8", ["const:87d08c:8", "const:4:8"]]
- 0087d08c ["CALL", null, ["callee:0043bb58:8"]]
+ 0087e038 ["INT_ADD", "register:40f0:8", ["const:87e038:8", "const:4:8"]]
+ 0087e038 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-1b708d3edc25178e9df9c7b5a796cf60"></a>

### [`0087d2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d2f8.md) → [`0087e2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e2a4.md) FUN_0087e2a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`00575d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00575/00575d54.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00494128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494128.md) [`00576074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576074.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.22% / 新版 82.22%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087d2fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087d300",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087d304",
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
      "0087e2a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0087e2ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087e2b0",
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
- 0087d2f8 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
- 0087d2fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0087d2fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0087d2fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0087d2fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0087d300 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:30:8"]]
- 0087d300 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-4178cf4bbd459c9a9d430b2c24d5b795"></a>

### [`0087d3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d3d8.md) → [`0087e384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e384.md) FUN_0087e384

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00575ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00575/00575ce4.md) [`0058ae08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058ae08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00576004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576004.md) [`0058b128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058b/0058b128.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 70.73% / 新版 70.73%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0087d3f4",
      "incomplete_value": true,
      "site": "0087d404",
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
      "definition_site": "0087d464",
      "incomplete_value": true,
      "site": "0087d470",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "0087d484",
      "incomplete_value": true,
      "site": "0087d48c",
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
      "unmatched:0087d3dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087d3e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087d3e4",
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
      "0087e388",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0087e38c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0087e390",
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
- 0087d404 ["INT_ADD", "register:40f0:8", ["const:87d404:8", "const:4:8"]]
- 0087d404 ["CALL", null, ["callee:00c59080:8"]]
+ 0087e3b0 ["INT_ADD", "register:40f0:8", ["const:87e3b0:8", "const:4:8"]]
+ 0087e3b0 ["CALL", null, ["callee:00c59080:8"]]
- 0087d470 ["INT_ADD", "register:40f0:8", ["const:87d470:8", "const:4:8"]]
- 0087d470 ["CALL", null, ["callee:00c590a0:8"]]
+ 0087e41c ["INT_ADD", "register:40f0:8", ["const:87e41c:8", "const:4:8"]]
+ 0087e41c ["CALL", null, ["callee:00c590a0:8"]]
- 0087d48c ["INT_ADD", "register:40f0:8", ["const:87d48c:8", "const:4:8"]]
- 0087d48c ["CALL", null, ["callee:00576004:8"]]
+ 0087e438 ["INT_ADD", "register:40f0:8", ["const:87e438:8", "const:4:8"]]
+ 0087e438 ["CALL", null, ["callee:00576004:8"]]
~~~


<a id="compare-c9ca314d1d859b5649ec1c0683f82a18"></a>

### [`0087d564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d564.md) → [`0087e510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e510.md) FUN_0087e510

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008613e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008613e0.md) · 呼出先 6件 [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589890.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aa20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa20.md)
- 新版 呼出元 1件 [`0086238c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00862/0086238c.md) · 呼出先 6件 [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589bb0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9f0.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087d5a8",
      "DATA",
      [
        "storage",
        "00c80678",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0087d5ac",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087d5b0",
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
      "0087e554",
      "DATA",
      [
        "storage",
        "00c81648",
        null,
        "undefined *"
      ]
    ],
    [
      "0087e558",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0087e55c",
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
- 0087d570 ["INT_ADD", "register:40f0:8", ["const:87d570:8", "const:4:8"]]
- 0087d570 ["CALL", null, ["callee:005891cc:8"]]
+ 0087e51c ["INT_ADD", "register:40f0:8", ["const:87e51c:8", "const:4:8"]]
+ 0087e51c ["CALL", null, ["callee:005891cc:8"]]
- 0087d578 ["INT_ADD", "register:40f0:8", ["const:87d578:8", "const:4:8"]]
- 0087d578 ["CALL", null, ["callee:005894bc:8"]]
+ 0087e524 ["INT_ADD", "register:40f0:8", ["const:87e524:8", "const:4:8"]]
+ 0087e524 ["CALL", null, ["callee:005894bc:8"]]
- 0087d57c ["INT_ADD", "register:40f0:8", ["const:87d57c:8", "const:4:8"]]
- 0087d57c ["CALL", null, ["callee:00589bb0:8"]]
+ 0087e528 ["INT_ADD", "register:40f0:8", ["const:87e528:8", "const:4:8"]]
+ 0087e528 ["CALL", null, ["callee:00589bb0:8"]]
~~~


<a id="compare-c3fcc2d0da93d3df7cd57505a32b5c2b"></a>

### [`0087d5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d5b8.md) → [`0087e564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e564.md) _INIT_162

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 52.54% / 新版 52.54%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_store_alignment` 39件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087e6c0",
      "incomplete_value": true,
      "site": "0087e6c4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "0087d714",
      "incomplete_value": false,
      "site": "0087d718",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:758:8"
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
      "definition_site": "0087e6b0",
      "incomplete_value": true,
      "site": "0087e6c4",
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
      "definition_site": "0087d704",
      "incomplete_value": false,
      "site": "0087d718",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:758:8"
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
      "definition_site": "0087d744",
      "incomplete_value": true,
      "site": "0087d754",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087d5e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087d5f4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0087d5fc",
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
      "0087e594",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0087e5a0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0087e5a8",
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
- 0087d718 ["INT_ADD", "register:40f0:8", ["const:87d718:8", "const:4:8"]]
- 0087d718 ["CALL", null, ["callee:0043bb58:8"]]
+ 0087e6c4 ["INT_ADD", "register:40f0:8", ["const:87e6c4:8", "const:4:8"]]
+ 0087e6c4 ["CALL", null, ["callee:0043bb58:8"]]
- 0087d754 ["INT_ADD", "register:40f0:8", ["const:87d754:8", "const:4:8"]]
- 0087d754 ["CALL", null, ["callee:0043bb58:8"]]
+ 0087e700 ["INT_ADD", "register:40f0:8", ["const:87e700:8", "const:4:8"]]
+ 0087e700 ["CALL", null, ["callee:0043bb58:8"]]
- 0087d768 ["INT_ADD", "register:40f0:8", ["const:87d768:8", "const:4:8"]]
- 0087d768 ["CALL", null, ["callee:0043bb58:8"]]
+ 0087e714 ["INT_ADD", "register:40f0:8", ["const:87e714:8", "const:4:8"]]
+ 0087e714 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-049e95e9bbb28177dd348b03c68c0c27"></a>

### [`0087d948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d948.md) → [`0087e8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e8f4.md) FUN_0087e8f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) · 呼出先 5件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58300.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5abc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abc0.md) [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md)
- 新版 呼出元 1件 [`0087fac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fac4.md) · 呼出先 5件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c592d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c592d0.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5bb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb90.md) [`00c5bba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bba0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087d968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087e970"
      ]
    ]
  ],
  "added": [
    [
      "0087e914",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087e970"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087d968 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 0087d968 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 0087d974 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0087d974 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 0087e920 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0087e920 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 0087d980 ["INT_ADD", "register:40f0:8", ["const:87d980:8", "const:4:8"]]
- 0087d980 ["CALL", null, ["callee:00c5bb90:8"]]
+ 0087e92c ["INT_ADD", "register:40f0:8", ["const:87e92c:8", "const:4:8"]]
+ 0087e92c ["CALL", null, ["callee:00c5bb90:8"]]
~~~


<a id="compare-4267448a93cec495ee68f95ccc6ebc83"></a>

### [`0087da1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087da1c.md) → [`0087e9c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e9c8.md) FUN_0087e9c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) · 呼出先 15件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0087fb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fb24.md) · 呼出先 15件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00597070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597070.md) [`00597968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597968.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.71% / 新版 88.71%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087ea44",
      "incomplete_value": true,
      "site": "0087ea4c",
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
            "const:20:8"
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
      "definition_site": "0087ea48",
      "incomplete_value": true,
      "site": "0087ea4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087ead4",
      "incomplete_value": true,
      "site": "0087ead8",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": "0087db28",
      "incomplete_value": true,
      "site": "0087db2c",
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
            "const:1:8"
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
      "unmatched:0087da2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087da44",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087da4c",
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
      "0087e9d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0087e9f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0087e9f8",
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
- 0087daa0 ["INT_ADD", "register:40f0:8", ["const:87daa0:8", "const:4:8"]]
- 0087daa0 ["CALL", null, ["callee:00c594d0:8"]]
+ 0087ea4c ["INT_ADD", "register:40f0:8", ["const:87ea4c:8", "const:4:8"]]
+ 0087ea4c ["CALL", null, ["callee:00c594d0:8"]]
- 0087db2c ["INT_ADD", "register:40f0:8", ["const:87db2c:8", "const:4:8"]]
- 0087db2c ["CALL", null, ["callee:00c58f30:8"]]
+ 0087ead8 ["INT_ADD", "register:40f0:8", ["const:87ead8:8", "const:4:8"]]
+ 0087ead8 ["CALL", null, ["callee:00c58f30:8"]]
- 0087dba0 ["INT_ADD", "register:40f0:8", ["const:87dba0:8", "const:4:8"]]
- 0087dba0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0087eb4c ["INT_ADD", "register:40f0:8", ["const:87eb4c:8", "const:4:8"]]
+ 0087eb4c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e4bdcb0630c0598c9aa2ea723eb9d666"></a>

### [`0087dc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dc7c.md) → [`0087ec28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087ec28.md) FUN_0087ec28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0087dd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dd68.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0087ed14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087ed14.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 28.81% / 新版 28.81%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0087ec34",
      "READ",
      [
        "storage",
        "01123928",
        null,
        "undefined1"
      ]
    ],
    [
      "0087ec38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0087dc9c"
      ]
    ],
    [
      "unmatched:0087dc94",
      "READ",
      [
        "storage",
        "01123938",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0087ec34",
      "READ",
      [
        "storage",
        "011248e8",
        null,
        "undefined1"
      ]
    ],
    [
      "0087ec38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087ec48"
      ]
    ],
    [
      "0087ec40",
      "READ",
      [
        "storage",
        "011248f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087dc84 ["COPY", "register:4040:8", ["const:1123000:8"]]
+ 0087ec30 ["COPY", "register:4040:8", ["const:1124000:8"]]
- 0087dc88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:928:8"]]
- 0087dc88 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0087dc88 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 0087ec34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8e8:8"]]
+ 0087ec34 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0087ec34 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 0087dc8c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0087dc8c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0087dc8c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0087dc8c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0087ec38 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0087ec38 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0087ec38 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0087ec38 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


