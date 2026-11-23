# v16.0.2 → v16.0.3 · 最優先の変更候補 (39)

[一覧の目次](README.md)

<a id="compare-7ec7a0ce244457e892b54133818d1f87"></a>

### [`006fee5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fee5c.md) → [`006ff20c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff20c.md) FUN_006ff20c

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
      "site": "006ff228",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fee78",
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
      "006ff228",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006ff228",
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
- 006fee78 ["INT_ADD", "register:40f0:8", ["const:6fee78:8", "const:4:8"]]
- 006fee78 ["CALL", null, ["ram:47ad34:8"]]
+ 006ff228 ["INT_ADD", "register:40f0:8", ["const:6ff228:8", "const:4:8"]]
+ 006ff228 ["CALL", null, ["ram:47b054:8"]]
- 006fee84 ["INT_ADD", "register:40f0:8", ["const:6fee84:8", "const:4:8"]]
- 006fee84 ["CALL", null, ["callee:0047d134:8"]]
+ 006ff234 ["INT_ADD", "register:40f0:8", ["const:6ff234:8", "const:4:8"]]
+ 006ff234 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-b13a01c7f5d86cf9dcc95660d4fdb7ea"></a>

### [`006feec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006feec8.md) → [`006ff278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff278.md) FUN_006ff278

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
      "definition_site": "006ff28c",
      "incomplete_value": false,
      "site": "006ff290",
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
            "const:238:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006feedc",
      "incomplete_value": false,
      "site": "006feee0",
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
            "const:268:8"
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
      "006ff290",
      "DATA",
      [
        "storage",
        "00c77268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff290",
      "DATA",
      [
        "storage",
        "00c78238",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006feed4 ["INT_ADD", "register:40f0:8", ["const:6feed4:8", "const:4:8"]]
- 006feed4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ff284 ["INT_ADD", "register:40f0:8", ["const:6ff284:8", "const:4:8"]]
+ 006ff284 ["CALL", null, ["callee:00c58f30:8"]]
- 006feed8 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ff288 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006feedc ["COPY", "tmp:0:8", ["const:268:8"]]
- 006feedc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006feedc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006feedc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff28c ["COPY", "tmp:0:8", ["const:238:8"]]
+ 006ff28c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff28c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff28c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b3d1693b109b48d7dab2592f4dbb4e7c"></a>

### [`006feff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006feff0.md) → [`006ff3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff3a0.md) FUN_006ff3a0

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
      "definition_site": "006ff3c4",
      "incomplete_value": false,
      "site": "006ff3c4",
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
            "const:2b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff014",
      "incomplete_value": false,
      "site": "006ff014",
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
            "const:2e8:8"
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
      "006ff3c4",
      "DATA",
      [
        "storage",
        "00c772e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff3c4",
      "DATA",
      [
        "storage",
        "00c782b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff004 ["INT_ADD", "register:40f0:8", ["const:6ff004:8", "const:4:8"]]
- 006ff004 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ff3b4 ["INT_ADD", "register:40f0:8", ["const:6ff3b4:8", "const:4:8"]]
+ 006ff3b4 ["CALL", null, ["callee:00c58f30:8"]]
- 006ff00c ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ff3bc ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ff010 ["COPY", "tmp:0:8", ["const:2e8:8"]]
- 006ff010 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff010 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff010 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff3c0 ["COPY", "tmp:0:8", ["const:2b8:8"]]
+ 006ff3c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff3c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff3c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c2bed174aedc9fd3cbc4d5cbfaeeb45c"></a>

### [`006ff040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff040.md) → [`006ff3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff3f0.md) FUN_006ff3f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff420",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff070",
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
      "site": "006ff448",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff098",
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
      "006ff420",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ff448",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006ff420",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006ff448",
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
- 006ff070 ["INT_ADD", "register:40f0:8", ["const:6ff070:8", "const:4:8"]]
- 006ff070 ["CALL", null, ["ram:47ad34:8"]]
+ 006ff420 ["INT_ADD", "register:40f0:8", ["const:6ff420:8", "const:4:8"]]
+ 006ff420 ["CALL", null, ["ram:47b054:8"]]
- 006ff098 ["INT_ADD", "register:40f0:8", ["const:6ff098:8", "const:4:8"]]
- 006ff098 ["CALL", null, ["ram:47ad34:8"]]
+ 006ff448 ["INT_ADD", "register:40f0:8", ["const:6ff448:8", "const:4:8"]]
+ 006ff448 ["CALL", null, ["ram:47b054:8"]]
- 006ff0a4 ["INT_ADD", "register:40f0:8", ["const:6ff0a4:8", "const:4:8"]]
- 006ff0a4 ["CALL", null, ["callee:0047d134:8"]]
+ 006ff454 ["INT_ADD", "register:40f0:8", ["const:6ff454:8", "const:4:8"]]
+ 006ff454 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-ae75ace0466e3c6af6e882cb48f84523"></a>

### [`006ff0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff0e4.md) → [`006ff494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff494.md) FUN_006ff494

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006ff4a8",
      "incomplete_value": true,
      "site": "006ff4ac",
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
            "const:338:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff0f8",
      "incomplete_value": true,
      "site": "006ff0fc",
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
            "const:368:8"
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
      "006ff4ac",
      "DATA",
      [
        "storage",
        "00c77368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff4ac",
      "DATA",
      [
        "storage",
        "00c78338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff0f0 ["INT_ADD", "register:40f0:8", ["const:6ff0f0:8", "const:4:8"]]
- 006ff0f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ff4a0 ["INT_ADD", "register:40f0:8", ["const:6ff4a0:8", "const:4:8"]]
+ 006ff4a0 ["CALL", null, ["callee:00c58f30:8"]]
- 006ff0f4 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ff4a4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ff0f8 ["COPY", "tmp:0:8", ["const:368:8"]]
- 006ff0f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff0f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff0f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff4a8 ["COPY", "tmp:0:8", ["const:338:8"]]
+ 006ff4a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff4a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff4a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bc9bbc7a69a6cb7f146ace554474ce36"></a>

### [`006ff204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff204.md) → [`006ff5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff5b4.md) FUN_006ff5b4

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
      "definition_site": "006ff5d8",
      "incomplete_value": false,
      "site": "006ff5d8",
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
            "const:3b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff228",
      "incomplete_value": false,
      "site": "006ff228",
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
            "const:3e8:8"
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
      "006ff5d8",
      "DATA",
      [
        "storage",
        "00c773e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff5d8",
      "DATA",
      [
        "storage",
        "00c783b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff218 ["INT_ADD", "register:40f0:8", ["const:6ff218:8", "const:4:8"]]
- 006ff218 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ff5c8 ["INT_ADD", "register:40f0:8", ["const:6ff5c8:8", "const:4:8"]]
+ 006ff5c8 ["CALL", null, ["callee:00c58f30:8"]]
- 006ff220 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ff5d0 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ff224 ["COPY", "tmp:0:8", ["const:3e8:8"]]
- 006ff224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff5d4 ["COPY", "tmp:0:8", ["const:3b8:8"]]
+ 006ff5d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff5d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff5d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a3cf5481f245999d46817b63acb0ef8c"></a>

### [`006ff320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff320.md) → [`006ff6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff6d0.md) FUN_006ff6d0

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
      "definition_site": "006ff6f4",
      "incomplete_value": false,
      "site": "006ff6f4",
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
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff344",
      "incomplete_value": false,
      "site": "006ff344",
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
            "const:468:8"
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
      "006ff6f4",
      "DATA",
      [
        "storage",
        "00c77468",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff6f4",
      "DATA",
      [
        "storage",
        "00c78438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff334 ["INT_ADD", "register:40f0:8", ["const:6ff334:8", "const:4:8"]]
- 006ff334 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ff6e4 ["INT_ADD", "register:40f0:8", ["const:6ff6e4:8", "const:4:8"]]
+ 006ff6e4 ["CALL", null, ["callee:00c58f30:8"]]
- 006ff33c ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ff6ec ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ff340 ["COPY", "tmp:0:8", ["const:468:8"]]
- 006ff340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff6f0 ["COPY", "tmp:0:8", ["const:438:8"]]
+ 006ff6f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff6f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff6f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2dc77e31911bce699f9a8c14a509b9f0"></a>

### [`006ff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff370.md) → [`006ff720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff720.md) FUN_006ff720

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006b2488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2488.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d188.md) [`006b282c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b282c.md) [`006b2838`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2838.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.28% / 新版 97.28%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006ff8b0",
      "incomplete_value": false,
      "site": "006ff8b8",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff500",
      "incomplete_value": false,
      "site": "006ff508",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff764",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff3b4",
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
      "site": "006ff89c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff4ec",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006ff764",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ff89c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ff8b8",
      "DATA",
      [
        "storage",
        "00c774d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff764",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006ff89c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006ff8b8",
      "DATA",
      [
        "storage",
        "00c784a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff3b4 ["INT_ADD", "register:40f0:8", ["const:6ff3b4:8", "const:4:8"]]
- 006ff3b4 ["CALL", null, ["ram:47ad34:8"]]
+ 006ff764 ["INT_ADD", "register:40f0:8", ["const:6ff764:8", "const:4:8"]]
+ 006ff764 ["CALL", null, ["ram:47b054:8"]]
- 006ff4ec ["INT_ADD", "register:40f0:8", ["const:6ff4ec:8", "const:4:8"]]
- 006ff4ec ["CALL", null, ["ram:47ad34:8"]]
+ 006ff89c ["INT_ADD", "register:40f0:8", ["const:6ff89c:8", "const:4:8"]]
+ 006ff89c ["CALL", null, ["ram:47b054:8"]]
- 006ff3b0 ["INT_ADD", "register:40f0:8", ["const:6ff3b0:8", "const:4:8"]]
- 006ff3b0 ["CALL", null, ["callee:008ba17c:8"]]
+ 006ff760 ["INT_ADD", "register:40f0:8", ["const:6ff760:8", "const:4:8"]]
+ 006ff760 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-35dbe46026be1a7cba8d34d7d4aebd45"></a>

### [`006ff65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff65c.md) → [`006ffa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ffa0c.md) FUN_006ffa0c

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
      "definition_site": "006ffa20",
      "incomplete_value": false,
      "site": "006ffa24",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff670",
      "incomplete_value": false,
      "site": "006ff674",
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
            "const:4d8:8"
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
      "006ffa24",
      "DATA",
      [
        "storage",
        "00c774d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ffa24",
      "DATA",
      [
        "storage",
        "00c784a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff668 ["INT_ADD", "register:40f0:8", ["const:6ff668:8", "const:4:8"]]
- 006ff668 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ffa18 ["INT_ADD", "register:40f0:8", ["const:6ffa18:8", "const:4:8"]]
+ 006ffa18 ["CALL", null, ["callee:00c58f30:8"]]
- 006ff66c ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ffa1c ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ff670 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 006ff670 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff670 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff670 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ffa20 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 006ffa20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ffa20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ffa20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-96f74636580e5b1fd4479e6550ae762d"></a>

### [`006ff680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff680.md) → [`006ffa30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ffa30.md) FUN_006ffa30

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
      "definition_site": "006ffa34",
      "incomplete_value": false,
      "site": "006ffa38",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff684",
      "incomplete_value": false,
      "site": "006ff688",
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
      "006ffa38",
      "DATA",
      [
        "storage",
        "00c774d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ffa38",
      "DATA",
      [
        "storage",
        "00c784a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff680 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 006ffa30 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ff684 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 006ff684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ffa34 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 006ffa34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ffa34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ffa34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f41c9d049da388e176a803db28f7f53e"></a>

### [`006ff698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff698.md) → [`006ffa48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ffa48.md) FUN_006ffa48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 26件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md)
- 新版 呼出元 0件  · 呼出先 26件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d268.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.70% / 新版 93.70%

優先判定に残った影響 `call_target` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006ffae0",
      "incomplete_value": true,
      "site": "006ffaf0",
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
                "const:4da:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff730",
      "incomplete_value": true,
      "site": "006ff740",
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
                "const:40f:8"
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
      "definition_site": "006ffb68",
      "incomplete_value": true,
      "site": "006ffb7c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:18b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff7b8",
      "incomplete_value": true,
      "site": "006ff7cc",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:bc:8"
              ]
            ]
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
      "definition_site": "006ffb9c",
      "incomplete_value": false,
      "site": "006ffb9c",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff7ec",
      "incomplete_value": false,
      "site": "006ff7ec",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006ffa94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ffae0",
      "READ",
      [
        "storage",
        "002a340f",
        null,
        "string"
      ]
    ],
    [
      "006ffb68",
      "READ",
      [
        "storage",
        "002b90bc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006ffa94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006ffae0",
      "READ",
      [
        "storage",
        "002a34da",
        null,
        "string"
      ]
    ],
    [
      "006ffb68",
      "READ",
      [
        "storage",
        "002b918b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff6e4 ["INT_ADD", "register:40f0:8", ["const:6ff6e4:8", "const:4:8"]]
- 006ff6e4 ["CALL", null, ["ram:47ad34:8"]]
+ 006ffa94 ["INT_ADD", "register:40f0:8", ["const:6ffa94:8", "const:4:8"]]
+ 006ffa94 ["CALL", null, ["ram:47b054:8"]]
- 006ffaf0 ["INT_ADD", "register:40f0:8", ["const:6ffaf0:8", "const:4:8"]]
- 006ffaf0 ["CALL", null, ["callee:00c58f50:8"]]
+ 006ffea0 ["INT_ADD", "register:40f0:8", ["const:6ffea0:8", "const:4:8"]]
+ 006ffea0 ["CALL", null, ["callee:00c58f50:8"]]
- 006ff6cc ["INT_ADD", "register:40f0:8", ["const:6ff6cc:8", "const:4:8"]]
- 006ff6cc ["CALL", null, ["callee:0059822c:8"]]
+ 006ffa7c ["INT_ADD", "register:40f0:8", ["const:6ffa7c:8", "const:4:8"]]
+ 006ffa7c ["CALL", null, ["callee:0059822c:8"]]
~~~


<a id="compare-ee20d89182b034cdffdaad2f503d36a2"></a>

### [`006ffe54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ffe54.md) → [`00700204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700204.md) FUN_00700204

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
      "definition_site": "00700218",
      "incomplete_value": false,
      "site": "0070021c",
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
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ffe68",
      "incomplete_value": false,
      "site": "006ffe6c",
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
            "const:548:8"
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
      "0070021c",
      "DATA",
      [
        "storage",
        "00c77548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070021c",
      "DATA",
      [
        "storage",
        "00c78518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ffe60 ["INT_ADD", "register:40f0:8", ["const:6ffe60:8", "const:4:8"]]
- 006ffe60 ["CALL", null, ["callee:00c58f30:8"]]
+ 00700210 ["INT_ADD", "register:40f0:8", ["const:700210:8", "const:4:8"]]
+ 00700210 ["CALL", null, ["callee:00c58f30:8"]]
- 006ffe64 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00700214 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ffe68 ["COPY", "tmp:0:8", ["const:548:8"]]
- 006ffe68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ffe68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ffe68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00700218 ["COPY", "tmp:0:8", ["const:518:8"]]
+ 00700218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00700218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00700218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-244239e1fb5f8b52aaaf36c2f2da2c25"></a>

### [`006ffe78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ffe78.md) → [`00700228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700228.md) FUN_00700228

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
      "definition_site": "0070022c",
      "incomplete_value": false,
      "site": "00700230",
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
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ffe7c",
      "incomplete_value": false,
      "site": "006ffe80",
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
      "00700230",
      "DATA",
      [
        "storage",
        "00c77548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00700230",
      "DATA",
      [
        "storage",
        "00c78518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ffe78 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00700228 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006ffe7c ["COPY", "tmp:0:8", ["const:548:8"]]
- 006ffe7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ffe7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ffe7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070022c ["COPY", "tmp:0:8", ["const:518:8"]]
+ 0070022c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070022c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070022c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a8b4a41fccb813efbdaa6cfcde3d602"></a>

### [`006ffe90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ffe90.md) → [`00700240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700240.md) FUN_00700240

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
      "site": "00700264",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ffeb4",
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
      "00700264",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00700264",
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
- 006ffeb4 ["INT_ADD", "register:40f0:8", ["const:6ffeb4:8", "const:4:8"]]
- 006ffeb4 ["CALL", null, ["ram:47ad34:8"]]
+ 00700264 ["INT_ADD", "register:40f0:8", ["const:700264:8", "const:4:8"]]
+ 00700264 ["CALL", null, ["ram:47b054:8"]]
- 006ffec0 ["INT_ADD", "register:40f0:8", ["const:6ffec0:8", "const:4:8"]]
- 006ffec0 ["CALL", null, ["callee:0047d134:8"]]
+ 00700270 ["INT_ADD", "register:40f0:8", ["const:700270:8", "const:4:8"]]
+ 00700270 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-641fc7cf83fb012aa89c9b636ed10ecb"></a>

### [`006fff04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fff04.md) → [`007002b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/007002b4.md) FUN_007002b4

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
      "definition_site": "007002c8",
      "incomplete_value": false,
      "site": "007002cc",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fff18",
      "incomplete_value": false,
      "site": "006fff1c",
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
            "const:5c8:8"
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
      "007002cc",
      "DATA",
      [
        "storage",
        "00c775c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007002cc",
      "DATA",
      [
        "storage",
        "00c78598",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fff10 ["INT_ADD", "register:40f0:8", ["const:6fff10:8", "const:4:8"]]
- 006fff10 ["CALL", null, ["callee:00c58f30:8"]]
+ 007002c0 ["INT_ADD", "register:40f0:8", ["const:7002c0:8", "const:4:8"]]
+ 007002c0 ["CALL", null, ["callee:00c58f30:8"]]
- 006fff14 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007002c4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006fff18 ["COPY", "tmp:0:8", ["const:5c8:8"]]
- 006fff18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fff18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fff18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007002c8 ["COPY", "tmp:0:8", ["const:598:8"]]
+ 007002c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007002c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007002c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9dc986d6fdf4ac2e67031379b85209af"></a>

### [`006fff28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fff28.md) → [`007002d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/007002d8.md) FUN_007002d8

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
      "definition_site": "007002dc",
      "incomplete_value": false,
      "site": "007002e0",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fff2c",
      "incomplete_value": false,
      "site": "006fff30",
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
      "007002e0",
      "DATA",
      [
        "storage",
        "00c775c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007002e0",
      "DATA",
      [
        "storage",
        "00c78598",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fff28 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007002d8 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 006fff2c ["COPY", "tmp:0:8", ["const:5c8:8"]]
- 006fff2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fff2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fff2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007002dc ["COPY", "tmp:0:8", ["const:598:8"]]
+ 007002dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007002dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007002dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8cc14427b09bae9ec5fea053aa0a533c"></a>

### [`006fff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fff40.md) → [`007002f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/007002f0.md) FUN_007002f0

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
      "site": "00700314",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fff64",
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
      "00700314",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00700314",
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
- 006fff64 ["INT_ADD", "register:40f0:8", ["const:6fff64:8", "const:4:8"]]
- 006fff64 ["CALL", null, ["ram:47ad34:8"]]
+ 00700314 ["INT_ADD", "register:40f0:8", ["const:700314:8", "const:4:8"]]
+ 00700314 ["CALL", null, ["ram:47b054:8"]]
- 006fff70 ["INT_ADD", "register:40f0:8", ["const:6fff70:8", "const:4:8"]]
- 006fff70 ["CALL", null, ["callee:0047d134:8"]]
+ 00700320 ["INT_ADD", "register:40f0:8", ["const:700320:8", "const:4:8"]]
+ 00700320 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-11c7fca22ba924c86e089471b1064c92"></a>

### [`006fffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fffb0.md) → [`00700360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700360.md) FUN_00700360

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
      "definition_site": "0070036c",
      "incomplete_value": false,
      "site": "00700370",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fffbc",
      "incomplete_value": false,
      "site": "006fffc0",
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
            "const:668:8"
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
      "00700370",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00700370",
      "DATA",
      [
        "storage",
        "00c78638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fffb8 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00700368 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 006fffbc ["COPY", "tmp:0:8", ["const:668:8"]]
- 006fffbc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fffbc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fffbc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0070036c ["COPY", "tmp:0:8", ["const:638:8"]]
+ 0070036c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0070036c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0070036c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d06172cc9700328cce2da769952e33f0"></a>

### [`006fffd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fffd4.md) → [`00700384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700384.md) FUN_00700384

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
      "definition_site": "0070038c",
      "incomplete_value": false,
      "site": "00700390",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fffdc",
      "incomplete_value": false,
      "site": "006fffe0",
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
            "const:668:8"
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
      "00700390",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00700390",
      "DATA",
      [
        "storage",
        "00c78638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fffd8 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00700388 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 006fffdc ["COPY", "tmp:0:8", ["const:668:8"]]
- 006fffdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fffdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fffdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0070038c ["COPY", "tmp:0:8", ["const:638:8"]]
+ 0070038c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0070038c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0070038c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00700000 ["INT_ADD", "register:40f0:8", ["const:700000:8", "const:4:8"]]
- 00700000 ["CALL", null, ["callee:00c58f50:8"]]
+ 007003b0 ["INT_ADD", "register:40f0:8", ["const:7003b0:8", "const:4:8"]]
+ 007003b0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3c8d8b57f075ddb63f35c6437116b9bd"></a>

### [`00700014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700014.md) → [`007003c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/007003c4.md) FUN_007003c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007003f4",
      "incomplete_value": false,
      "site": "007003f4",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700044",
      "incomplete_value": false,
      "site": "00700044",
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
            "const:668:8"
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
      "007003f4",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007003f4",
      "DATA",
      [
        "storage",
        "00c78638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070002c ["INT_ADD", "register:40f0:8", ["const:70002c:8", "const:4:8"]]
- 0070002c ["CALL", null, ["callee:00c58f30:8"]]
+ 007003dc ["INT_ADD", "register:40f0:8", ["const:7003dc:8", "const:4:8"]]
+ 007003dc ["CALL", null, ["callee:00c58f30:8"]]
- 00700034 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007003e4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00700038 ["COPY", "tmp:0:8", ["const:668:8"]]
- 00700038 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00700038 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00700038 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007003e8 ["COPY", "tmp:0:8", ["const:638:8"]]
+ 007003e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007003e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007003e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-085f82e2ec0d690c6c4dffa1d77c5934"></a>

### [`007000c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007000c8.md) → [`00700478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700478.md) FUN_00700478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007004a4",
      "incomplete_value": false,
      "site": "007004a4",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007000f4",
      "incomplete_value": false,
      "site": "007000f4",
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
            "const:668:8"
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
      "007004a4",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007004a4",
      "DATA",
      [
        "storage",
        "00c78638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007000e8 ["COPY", "register:4050:8", ["const:c77000:8"]]
+ 00700498 ["COPY", "register:4050:8", ["const:c78000:8"]]
- 007000ec ["COPY", "tmp:0:8", ["const:668:8"]]
- 007000ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007000ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007000ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0070049c ["COPY", "tmp:0:8", ["const:638:8"]]
+ 0070049c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0070049c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0070049c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0070010c ["INT_ADD", "register:40f0:8", ["const:70010c:8", "const:4:8"]]
- 0070010c ["CALL", null, ["callee:00c58f30:8"]]
+ 007004bc ["INT_ADD", "register:40f0:8", ["const:7004bc:8", "const:4:8"]]
+ 007004bc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-5f9f1e224e97468f8c2944eb1a788723"></a>

### [`0070039c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/0070039c.md) → [`0070074c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/0070074c.md) FUN_0070074c

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
      "definition_site": "00700758",
      "incomplete_value": false,
      "site": "0070075c",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007003a8",
      "incomplete_value": false,
      "site": "007003ac",
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
            "const:6e8:8"
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
      "0070075c",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070075c",
      "DATA",
      [
        "storage",
        "00c786b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007003a4 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00700754 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 007003a8 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 007003a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007003a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007003a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00700758 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00700758 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00700758 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00700758 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-660f6b758d93753ac3951da4147e6e89"></a>

### [`007003c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007003c0.md) → [`00700770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700770.md) FUN_00700770

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
      "definition_site": "00700778",
      "incomplete_value": false,
      "site": "0070077c",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007003c8",
      "incomplete_value": false,
      "site": "007003cc",
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
            "const:6e8:8"
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
      "0070077c",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070077c",
      "DATA",
      [
        "storage",
        "00c786b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007003c4 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00700774 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 007003c8 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 007003c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007003c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007003c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00700778 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00700778 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00700778 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00700778 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007003ec ["INT_ADD", "register:40f0:8", ["const:7003ec:8", "const:4:8"]]
- 007003ec ["CALL", null, ["callee:00c58f50:8"]]
+ 0070079c ["INT_ADD", "register:40f0:8", ["const:70079c:8", "const:4:8"]]
+ 0070079c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-72f3969b60a006d6e06674bcb0689a92"></a>

### [`00700400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700400.md) → [`007007b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/007007b0.md) FUN_007007b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007007e0",
      "incomplete_value": false,
      "site": "007007e0",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700430",
      "incomplete_value": false,
      "site": "00700430",
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
            "const:6e8:8"
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
      "007007e0",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007007e0",
      "DATA",
      [
        "storage",
        "00c786b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700418 ["INT_ADD", "register:40f0:8", ["const:700418:8", "const:4:8"]]
- 00700418 ["CALL", null, ["callee:00c58f30:8"]]
+ 007007c8 ["INT_ADD", "register:40f0:8", ["const:7007c8:8", "const:4:8"]]
+ 007007c8 ["CALL", null, ["callee:00c58f30:8"]]
- 00700420 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007007d0 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00700424 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 00700424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00700424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00700424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007007d4 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 007007d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007007d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007007d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1c87231446100ccca09a75f381b15bbc"></a>

### [`007004b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007004b4.md) → [`00700864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700864.md) FUN_00700864

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00700890",
      "incomplete_value": false,
      "site": "00700890",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007004e0",
      "incomplete_value": false,
      "site": "007004e0",
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
            "const:6e8:8"
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
      "00700890",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00700890",
      "DATA",
      [
        "storage",
        "00c786b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007004d4 ["COPY", "register:4050:8", ["const:c77000:8"]]
+ 00700884 ["COPY", "register:4050:8", ["const:c78000:8"]]
- 007004d8 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 007004d8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007004d8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007004d8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00700888 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00700888 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00700888 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00700888 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007004f8 ["INT_ADD", "register:40f0:8", ["const:7004f8:8", "const:4:8"]]
- 007004f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 007008a8 ["INT_ADD", "register:40f0:8", ["const:7008a8:8", "const:4:8"]]
+ 007008a8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-8c6ac7b4053737dd1197d06241c96543"></a>

### [`0070059c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/0070059c.md) → [`0070094c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/0070094c.md) FUN_0070094c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 11件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0055a624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a624.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md) [`0046a5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046a5b0.md) [`0055a944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a944.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.70% / 新版 93.70%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00700a88",
      "incomplete_value": true,
      "site": "00700a90",
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
                "const:ca5000:8"
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
    "old": {
      "definition_site": "007006d8",
      "incomplete_value": true,
      "site": "007006e0",
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
                "const:ca4000:8"
              ],
              [
                "leaf",
                "const:a78:8"
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
      "007009dc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007009e0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007009e8",
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
      "007009dc",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007009e0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007009e8",
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
- 007006e0 ["INT_ADD", "register:40f0:8", ["const:7006e0:8", "const:4:8"]]
- 007006e0 ["CALL", null, ["callee:00c596b0:8"]]
+ 00700a90 ["INT_ADD", "register:40f0:8", ["const:700a90:8", "const:4:8"]]
+ 00700a90 ["CALL", null, ["callee:00c596b0:8"]]
- 007005d0 ["INT_ADD", "register:40f0:8", ["const:7005d0:8", "const:4:8"]]
- 007005d0 ["CALL", null, ["callee:008ba294:8"]]
+ 00700980 ["INT_ADD", "register:40f0:8", ["const:700980:8", "const:4:8"]]
+ 00700980 ["CALL", null, ["callee:008ba294:8"]]
- 007005dc ["INT_ADD", "register:40f0:8", ["const:7005dc:8", "const:4:8"]]
- 007005dc ["CALL", null, ["callee:008ba29c:8"]]
+ 0070098c ["INT_ADD", "register:40f0:8", ["const:70098c:8", "const:4:8"]]
+ 0070098c ["CALL", null, ["callee:008ba29c:8"]]
~~~


<a id="compare-a51c00bb7298dfad39c1961b0061e261"></a>

### [`007007c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007007c0.md) → [`00700b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700b70.md) _INIT_111

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00700bac",
      "incomplete_value": true,
      "site": "00700bc8",
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
      "definition_site": "007007fc",
      "incomplete_value": true,
      "site": "00700818",
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
      "definition_site": "00700bd0",
      "incomplete_value": true,
      "site": "00700bec",
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
      "definition_site": "00700820",
      "incomplete_value": true,
      "site": "0070083c",
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
      "definition_site": "00700bf0",
      "incomplete_value": true,
      "site": "00700c0c",
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
      "definition_site": "00700840",
      "incomplete_value": true,
      "site": "0070085c",
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
      "00700bac",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00700bd0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00700bf0",
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
      "00700bac",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00700bd0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00700bf0",
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
- 007009f4 ["INT_ADD", "register:40f0:8", ["const:7009f4:8", "const:4:8"]]
- 007009f4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00700da4 ["INT_ADD", "register:40f0:8", ["const:700da4:8", "const:4:8"]]
+ 00700da4 ["CALL", null, ["callee:00c58ed0:8"]]
- 007007e8 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00700b98 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 007007ec ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 007007ec ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007007ec ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007007ec ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00700b9c ["COPY", "tmp:0:8", ["const:c98:8"]]
+ 00700b9c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00700b9c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00700b9c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-ef41847dbbbde438fc4dc4550e2066c8"></a>

### [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) → [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) FUN_00700f00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 293件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 293件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00440e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440e60.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 14件, `call_target` 42件, `store_destination` 1件, `store_value` 16件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00700f58",
      "incomplete_value": true,
      "site": "00700f58",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:354:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700ba8",
      "incomplete_value": true,
      "site": "00700ba8",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:285:8"
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
      "definition_site": "00700f5c",
      "incomplete_value": true,
      "site": "00700f5c",
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
      "definition_site": "00700bac",
      "incomplete_value": true,
      "site": "00700bac",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0070104c",
      "incomplete_value": true,
      "site": "0070104c",
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
                "const:540:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700c9c",
      "incomplete_value": true,
      "site": "00700c9c",
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
                "const:570:8"
              ]
            ]
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
      "00700f38",
      "READ",
      [
        "storage",
        "002b9285",
        null,
        "string"
      ]
    ],
    [
      "00700f50",
      "READ",
      [
        "storage",
        "002b928a",
        null,
        "string"
      ]
    ],
    [
      "00700f98",
      "READ",
      [
        "storage",
        "002b830c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00700f38",
      "READ",
      [
        "storage",
        "002b9354",
        null,
        "string"
      ]
    ],
    [
      "00700f50",
      "READ",
      [
        "storage",
        "002b9359",
        null,
        "string"
      ]
    ],
    [
      "00700f98",
      "READ",
      [
        "storage",
        "002b83db",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700c60 ["INT_ADD", "register:40f0:8", ["const:700c60:8", "const:4:8"]]
- 00700c60 ["CALL", null, ["callee:00c596b0:8"]]
+ 00701010 ["INT_ADD", "register:40f0:8", ["const:701010:8", "const:4:8"]]
+ 00701010 ["CALL", null, ["callee:00c596b0:8"]]
- 00700c88 ["INT_ADD", "register:40f0:8", ["const:700c88:8", "const:4:8"]]
- 00700c88 ["CALL", null, ["callee:0046cfd4:8"]]
+ 00701038 ["INT_ADD", "register:40f0:8", ["const:701038:8", "const:4:8"]]
+ 00701038 ["CALL", null, ["callee:0046cfd4:8"]]
- 00700e3c ["INT_ADD", "register:40f0:8", ["const:700e3c:8", "const:4:8"]]
- 00700e3c ["CALL", null, ["ram:47ad34:8"]]
+ 007011ec ["INT_ADD", "register:40f0:8", ["const:7011ec:8", "const:4:8"]]
+ 007011ec ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-5efb2a135bef71a64b8bed04c0a4e7e3"></a>

### [`007075c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/007075c0.md) → [`00707970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00707/00707970.md) FUN_00707970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00934924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934924.md) · 呼出先 14件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005e1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b58.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md)
- 新版 呼出元 2件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`009358d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/009358d0.md) · 呼出先 14件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`005e1f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f08.md) [`005e1f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f20.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.93% / 新版 87.93%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_destination` 7件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00707bf4",
      "incomplete_value": false,
      "site": "00707bf4",
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
      "definition_site": "00707844",
      "incomplete_value": false,
      "site": "00707844",
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
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00707bf8",
      "incomplete_value": false,
      "site": "00707bf8",
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
      "definition_site": "00707848",
      "incomplete_value": false,
      "site": "00707848",
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
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00707bf4",
      "incomplete_value": false,
      "site": "00707bf8",
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
      "definition_site": "00707844",
      "incomplete_value": false,
      "site": "00707848",
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
      "007079a0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007079ac",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007079b4",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007079a0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "007079ac",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007079b4",
      "PARAM",
      [
        "storage",
        "00c72a18",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00707610 ["INT_ADD", "register:40f0:8", ["const:707610:8", "const:4:8"]]
- 00707610 ["CALL", null, ["callee:00c596b0:8"]]
+ 007079c0 ["INT_ADD", "register:40f0:8", ["const:7079c0:8", "const:4:8"]]
+ 007079c0 ["CALL", null, ["callee:00c596b0:8"]]
- 00707658 ["INT_ADD", "register:40f0:8", ["const:707658:8", "const:4:8"]]
- 00707658 ["CALL", null, ["ram:6648e0:8"]]
+ 00707a08 ["INT_ADD", "register:40f0:8", ["const:707a08:8", "const:4:8"]]
+ 00707a08 ["CALL", null, ["ram:664c90:8"]]
- 0070781c ["INT_ADD", "register:40f0:8", ["const:70781c:8", "const:4:8"]]
- 0070781c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00707bcc ["INT_ADD", "register:40f0:8", ["const:707bcc:8", "const:4:8"]]
+ 00707bcc ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-e6053c8ccb6a8dc804da5a3a218bc113"></a>

### [`007078a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/007078a4.md) → [`00707c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00707/00707c54.md) FUN_00707c54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 3件 [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 3件 [`009375c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009375c4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00707c88",
      "incomplete_value": true,
      "site": "00707c9c",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:385:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007078d8",
      "incomplete_value": true,
      "site": "007078ec",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:2b6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00707ca0",
      "incomplete_value": true,
      "site": "00707ca0",
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
      "definition_site": "007078f0",
      "incomplete_value": true,
      "site": "007078f0",
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
      "00707c88",
      "READ",
      [
        "storage",
        "002b92b6",
        null,
        "string"
      ]
    ],
    [
      "00707c8c",
      "READ",
      [
        "storage",
        "002b92c3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00707c88",
      "READ",
      [
        "storage",
        "002b9385",
        null,
        "string"
      ]
    ],
    [
      "00707c8c",
      "READ",
      [
        "storage",
        "002b9392",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007078d0 ["COPY", "tmp:0:8", ["const:2b6:8"]]
- 007078d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007078d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007078d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00707c80 ["COPY", "tmp:0:8", ["const:385:8"]]
+ 00707c80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00707c80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00707c80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00707904 ["INT_ADD", "register:40f0:8", ["const:707904:8", "const:4:8"]]
- 00707904 ["CALL", null, ["callee:009375c4:8"]]
+ 00707cb4 ["INT_ADD", "register:40f0:8", ["const:707cb4:8", "const:4:8"]]
+ 00707cb4 ["CALL", null, ["callee:009375c4:8"]]
- 00707924 ["INT_ADD", "register:40f0:8", ["const:707924:8", "const:4:8"]]
- 00707924 ["CALL", null, ["callee:00c58f50:8"]]
+ 00707cd4 ["INT_ADD", "register:40f0:8", ["const:707cd4:8", "const:4:8"]]
+ 00707cd4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-cc81ee3fbe617f979ed4ab0dc417636e"></a>

### [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) → [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) FUN_007082e8

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 174件 [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b3c.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 174件 [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md) [`00467e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e50.md) [`00467e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e5c.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 5件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0070ab18",
      "incomplete_value": true,
      "site": "0070ab30",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:374:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070a768",
      "incomplete_value": true,
      "site": "0070a780",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:2a5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 152,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0070ab6c",
      "incomplete_value": true,
      "site": "0070ab7c",
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
                "const:df7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070a7bc",
      "incomplete_value": true,
      "site": "0070a7cc",
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
                "const:d20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 155,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0070ad18",
      "incomplete_value": true,
      "site": "0070ad30",
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
                "const:54b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070a968",
      "incomplete_value": true,
      "site": "0070a980",
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
                "const:47c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 160,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00708358",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0070837c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00708384",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00708358",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0070837c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00708384",
      "PARAM",
      [
        "storage",
        "00c72a18",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00707fdc ["INT_ADD", "register:40f0:8", ["const:707fdc:8", "const:4:8"]]
- 00707fdc ["CALL", null, ["callee:00c596b0:8"]]
+ 0070838c ["INT_ADD", "register:40f0:8", ["const:70838c:8", "const:4:8"]]
+ 0070838c ["CALL", null, ["callee:00c596b0:8"]]
- 0070836c ["INT_ADD", "register:40f0:8", ["const:70836c:8", "const:4:8"]]
- 0070836c ["CALL", null, ["ram:5edabc:8"]]
+ 0070871c ["INT_ADD", "register:40f0:8", ["const:70871c:8", "const:4:8"]]
+ 0070871c ["CALL", null, ["ram:5ede6c:8"]]
- 007088ac ["INT_ADD", "register:40f0:8", ["const:7088ac:8", "const:4:8"]]
- 007088ac ["CALL", null, ["ram:5fa538:8"]]
+ 00708c5c ["INT_ADD", "register:40f0:8", ["const:708c5c:8", "const:4:8"]]
+ 00708c5c ["CALL", null, ["ram:5fa8e8:8"]]
~~~


<a id="compare-c788ffd51cedab1d1b5ea5425fcc8f53"></a>

### [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) → [`0070d7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070d/0070d7c0.md) FUN_0070d7c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 21件 [`005e4f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4f7c.md) [`00604e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00604/00604e94.md) [`00604fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00604/00604fe4.md) [`00689994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689994.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 21件 [`005e532c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e532c.md) [`00605244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605244.md) [`00605394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605394.md) [`00689d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00689/00689d44.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md)

変更の種類 comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.66% / 新版 96.66%

優先判定に残った影響 `store_value` 8件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0070d9ec",
      "incomplete_value": false,
      "site": "0070d9f4",
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
      "definition_site": "0070d63c",
      "incomplete_value": false,
      "site": "0070d644",
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0070da14",
      "incomplete_value": true,
      "site": "0070da20",
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
            "const:67d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070d664",
      "incomplete_value": true,
      "site": "0070d670",
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
            "const:5ae:8"
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
      "definition_site": "0070da4c",
      "incomplete_value": false,
      "site": "0070da50",
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
      "definition_site": "0070d69c",
      "incomplete_value": false,
      "site": "0070d6a0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0070d924",
      "DATA",
      [
        "storage",
        "003965a4",
        null,
        "qword"
      ]
    ],
    [
      "0070d9f4",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "0070da20",
      "DATA",
      [
        "storage",
        "002b75ae",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0070d924",
      "DATA",
      [
        "storage",
        "003965a4",
        "fde_003965a4",
        "dword"
      ]
    ],
    [
      "0070d9f4",
      "DATA",
      [
        "storage",
        "002aeb6f",
        null,
        "string"
      ]
    ],
    [
      "0070da20",
      "DATA",
      [
        "storage",
        "002b767d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070d4b0 ["INT_ADD", "register:40f0:8", ["const:70d4b0:8", "const:4:8"]]
- 0070d4b0 ["CALL", null, ["callee:0071d43c:8"]]
+ 0070d860 ["INT_ADD", "register:40f0:8", ["const:70d860:8", "const:4:8"]]
+ 0070d860 ["CALL", null, ["callee:0071d43c:8"]]
- 0070d50c ["INT_ADD", "register:40f0:8", ["const:70d50c:8", "const:4:8"]]
- 0070d50c ["CALL", null, ["callee:0071d43c:8"]]
+ 0070d8bc ["INT_ADD", "register:40f0:8", ["const:70d8bc:8", "const:4:8"]]
+ 0070d8bc ["CALL", null, ["callee:0071d43c:8"]]
- 0070d594 ["INT_ADD", "register:40f0:8", ["const:70d594:8", "const:4:8"]]
- 0070d594 ["CALL", null, ["callee:009e1fc0:8"]]
+ 0070d944 ["INT_ADD", "register:40f0:8", ["const:70d944:8", "const:4:8"]]
+ 0070d944 ["CALL", null, ["callee:009e1fc0:8"]]
~~~


<a id="compare-d14f47c7f41eb1e8463e0afd85e993c5"></a>

### [`0070e1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e1e8.md) → [`0070e598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e598.md) FUN_0070e598

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
      "definition_site": "0070e5bc",
      "incomplete_value": false,
      "site": "0070e5bc",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e20c",
      "incomplete_value": false,
      "site": "0070e20c",
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
            "const:768:8"
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
      "0070e5bc",
      "DATA",
      [
        "storage",
        "00c77768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e5bc",
      "DATA",
      [
        "storage",
        "00c78738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e1fc ["INT_ADD", "register:40f0:8", ["const:70e1fc:8", "const:4:8"]]
- 0070e1fc ["CALL", null, ["callee:00c58f30:8"]]
+ 0070e5ac ["INT_ADD", "register:40f0:8", ["const:70e5ac:8", "const:4:8"]]
+ 0070e5ac ["CALL", null, ["callee:00c58f30:8"]]
- 0070e204 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e5b4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e208 ["COPY", "tmp:0:8", ["const:768:8"]]
- 0070e208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e5b8 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 0070e5b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e5b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e5b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a35823998471ea134e17ff65adeb3213"></a>

### [`0070e21c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e21c.md) → [`0070e5cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e5cc.md) FUN_0070e5cc

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
      "definition_site": "0070e5d8",
      "incomplete_value": false,
      "site": "0070e5d8",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e228",
      "incomplete_value": false,
      "site": "0070e228",
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
            "const:768:8"
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
      "0070e5d8",
      "DATA",
      [
        "storage",
        "00c77768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e5d8",
      "DATA",
      [
        "storage",
        "00c78738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e220 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 0070e5d0 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 0070e224 ["COPY", "tmp:0:8", ["const:768:8"]]
- 0070e224 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0070e224 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0070e224 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0070e5d4 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 0070e5d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e5d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e5d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c7eb7cf172a29b66e9ee4bf0fb9994cf"></a>

### [`0070e238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e238.md) → [`0070e5e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e5e8.md) FUN_0070e5e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "0070e610",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0070e260",
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
      "0070e610",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0070e610",
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
- 0070e260 ["INT_ADD", "register:40f0:8", ["const:70e260:8", "const:4:8"]]
- 0070e260 ["CALL", null, ["ram:47ad34:8"]]
+ 0070e610 ["INT_ADD", "register:40f0:8", ["const:70e610:8", "const:4:8"]]
+ 0070e610 ["CALL", null, ["ram:47b054:8"]]
- 0070e26c ["INT_ADD", "register:40f0:8", ["const:70e26c:8", "const:4:8"]]
- 0070e26c ["CALL", null, ["callee:0047d134:8"]]
+ 0070e61c ["INT_ADD", "register:40f0:8", ["const:70e61c:8", "const:4:8"]]
+ 0070e61c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-b2e536f94b87926c6722dbb42464d16b"></a>

### [`0070e2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e2c4.md) → [`0070e674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e674.md) FUN_0070e674

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
      "definition_site": "0070e698",
      "incomplete_value": false,
      "site": "0070e698",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e2e8",
      "incomplete_value": false,
      "site": "0070e2e8",
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
            "const:7e8:8"
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
      "0070e698",
      "DATA",
      [
        "storage",
        "00c777e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e698",
      "DATA",
      [
        "storage",
        "00c787b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e2d8 ["INT_ADD", "register:40f0:8", ["const:70e2d8:8", "const:4:8"]]
- 0070e2d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0070e688 ["INT_ADD", "register:40f0:8", ["const:70e688:8", "const:4:8"]]
+ 0070e688 ["CALL", null, ["callee:00c58f30:8"]]
- 0070e2e0 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e690 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e2e4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 0070e2e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e2e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e2e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e694 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 0070e694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4d1bc9e4c7f6c19c40c201a05036d5cc"></a>

### [`0070e2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e2f8.md) → [`0070e6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e6a8.md) FUN_0070e6a8

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
      "definition_site": "0070e6b4",
      "incomplete_value": false,
      "site": "0070e6b4",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e304",
      "incomplete_value": false,
      "site": "0070e304",
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
            "const:7e8:8"
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
      "0070e6b4",
      "DATA",
      [
        "storage",
        "00c777e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e6b4",
      "DATA",
      [
        "storage",
        "00c787b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e2fc ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 0070e6ac ["COPY", "register:4048:8", ["const:c78000:8"]]
- 0070e300 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 0070e300 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0070e300 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0070e300 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0070e6b0 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 0070e6b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e6b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e6b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c3cf48c701c79ba717a1691cb077f1c1"></a>

### [`0070e314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e314.md) → [`0070e6c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e6c4.md) FUN_0070e6c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0070e6ec",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0070e33c",
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
      "0070e6ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0070e6ec",
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
- 0070e33c ["INT_ADD", "register:40f0:8", ["const:70e33c:8", "const:4:8"]]
- 0070e33c ["CALL", null, ["ram:47ad34:8"]]
+ 0070e6ec ["INT_ADD", "register:40f0:8", ["const:70e6ec:8", "const:4:8"]]
+ 0070e6ec ["CALL", null, ["ram:47b054:8"]]
- 0070e348 ["INT_ADD", "register:40f0:8", ["const:70e348:8", "const:4:8"]]
- 0070e348 ["CALL", null, ["callee:0047d134:8"]]
+ 0070e6f8 ["INT_ADD", "register:40f0:8", ["const:70e6f8:8", "const:4:8"]]
+ 0070e6f8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-239723eb23c4b86f5e2589e06a0ca2d6"></a>

### [`0070e3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e3ac.md) → [`0070e75c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e75c.md) FUN_0070e75c

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
      "definition_site": "0070e77c",
      "incomplete_value": false,
      "site": "0070e780",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e3cc",
      "incomplete_value": false,
      "site": "0070e3d0",
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
            "const:868:8"
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
      "0070e780",
      "DATA",
      [
        "storage",
        "00c77868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e780",
      "DATA",
      [
        "storage",
        "00c78838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e3c0 ["INT_ADD", "register:40f0:8", ["const:70e3c0:8", "const:4:8"]]
- 0070e3c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0070e770 ["INT_ADD", "register:40f0:8", ["const:70e770:8", "const:4:8"]]
+ 0070e770 ["CALL", null, ["callee:00c58f30:8"]]
- 0070e3c8 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e778 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e3cc ["COPY", "tmp:0:8", ["const:868:8"]]
- 0070e3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e77c ["COPY", "tmp:0:8", ["const:838:8"]]
+ 0070e77c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e77c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e77c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b9c465c9066ab57945a876b72eba6d4"></a>

### [`0070e3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e3e4.md) → [`0070e794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e794.md) FUN_0070e794

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
      "definition_site": "0070e798",
      "incomplete_value": false,
      "site": "0070e79c",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e3e8",
      "incomplete_value": false,
      "site": "0070e3ec",
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
            "const:868:8"
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
      "0070e79c",
      "DATA",
      [
        "storage",
        "00c77868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e79c",
      "DATA",
      [
        "storage",
        "00c78838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e3e4 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e794 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e3e8 ["COPY", "tmp:0:8", ["const:868:8"]]
- 0070e3e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e3e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e3e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e798 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 0070e798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-46933a4fb553294a3f3c2ae6b1eee278"></a>

### [`0070e43c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e43c.md) → [`0070e7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e7ec.md) FUN_0070e7ec

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
      "definition_site": "0070e810",
      "incomplete_value": false,
      "site": "0070e810",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e460",
      "incomplete_value": false,
      "site": "0070e460",
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
            "const:8e8:8"
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
      "0070e810",
      "DATA",
      [
        "storage",
        "00c778e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e810",
      "DATA",
      [
        "storage",
        "00c788b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e450 ["INT_ADD", "register:40f0:8", ["const:70e450:8", "const:4:8"]]
- 0070e450 ["CALL", null, ["callee:00c58f30:8"]]
+ 0070e800 ["INT_ADD", "register:40f0:8", ["const:70e800:8", "const:4:8"]]
+ 0070e800 ["CALL", null, ["callee:00c58f30:8"]]
- 0070e458 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e808 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e45c ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 0070e45c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e45c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e45c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e80c ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 0070e80c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e80c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e80c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea9b6050bc7f1c48c69726ea4ee4d04c"></a>

### [`0070e470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e470.md) → [`0070e820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e820.md) FUN_0070e820

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
      "definition_site": "0070e82c",
      "incomplete_value": false,
      "site": "0070e82c",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e47c",
      "incomplete_value": false,
      "site": "0070e47c",
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
            "const:8e8:8"
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
      "0070e82c",
      "DATA",
      [
        "storage",
        "00c778e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e82c",
      "DATA",
      [
        "storage",
        "00c788b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e474 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 0070e824 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 0070e478 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 0070e478 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0070e478 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0070e478 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0070e828 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 0070e828 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e828 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e828 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a26cf087cf18dcbd067cc609d775dcd2"></a>

### [`0070e48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e48c.md) → [`0070e83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e83c.md) FUN_0070e83c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "0070e864",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0070e4b4",
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
      "0070e864",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0070e864",
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
- 0070e4b4 ["INT_ADD", "register:40f0:8", ["const:70e4b4:8", "const:4:8"]]
- 0070e4b4 ["CALL", null, ["ram:47ad34:8"]]
+ 0070e864 ["INT_ADD", "register:40f0:8", ["const:70e864:8", "const:4:8"]]
+ 0070e864 ["CALL", null, ["ram:47b054:8"]]
- 0070e4c0 ["INT_ADD", "register:40f0:8", ["const:70e4c0:8", "const:4:8"]]
- 0070e4c0 ["CALL", null, ["callee:0047d134:8"]]
+ 0070e870 ["INT_ADD", "register:40f0:8", ["const:70e870:8", "const:4:8"]]
+ 0070e870 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-18f373ebc5b1629efcd4b7c7ac088438"></a>

### [`0070e518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e518.md) → [`0070e8c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e8c8.md) FUN_0070e8c8

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
      "definition_site": "0070e8e8",
      "incomplete_value": true,
      "site": "0070e8ec",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e538",
      "incomplete_value": true,
      "site": "0070e53c",
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
            "const:968:8"
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
      "0070e8ec",
      "DATA",
      [
        "storage",
        "00c77968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e8ec",
      "DATA",
      [
        "storage",
        "00c78938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e52c ["INT_ADD", "register:40f0:8", ["const:70e52c:8", "const:4:8"]]
- 0070e52c ["CALL", null, ["callee:00c58f30:8"]]
+ 0070e8dc ["INT_ADD", "register:40f0:8", ["const:70e8dc:8", "const:4:8"]]
+ 0070e8dc ["CALL", null, ["callee:00c58f30:8"]]
- 0070e534 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e8e4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e538 ["COPY", "tmp:0:8", ["const:968:8"]]
- 0070e538 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e538 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e538 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e8e8 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 0070e8e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e8e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e8e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eff4f1fbd9868bc2c4c9cebf8237a85f"></a>

### [`0070e550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e550.md) → [`0070e900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e900.md) FUN_0070e900

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
      "definition_site": "0070e904",
      "incomplete_value": false,
      "site": "0070e908",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e554",
      "incomplete_value": false,
      "site": "0070e558",
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
            "const:968:8"
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
      "0070e908",
      "DATA",
      [
        "storage",
        "00c77968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e908",
      "DATA",
      [
        "storage",
        "00c78938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e550 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e900 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e554 ["COPY", "tmp:0:8", ["const:968:8"]]
- 0070e554 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e554 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e554 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e904 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 0070e904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-62a2b84ae465065796749e5a3185171a"></a>

### [`0070e5a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e5a8.md) → [`0070e958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e958.md) FUN_0070e958

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
      "definition_site": "0070e97c",
      "incomplete_value": false,
      "site": "0070e97c",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e5cc",
      "incomplete_value": false,
      "site": "0070e5cc",
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
            "const:9e8:8"
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
      "0070e97c",
      "DATA",
      [
        "storage",
        "00c779e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e97c",
      "DATA",
      [
        "storage",
        "00c789b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e5bc ["INT_ADD", "register:40f0:8", ["const:70e5bc:8", "const:4:8"]]
- 0070e5bc ["CALL", null, ["callee:00c58f30:8"]]
+ 0070e96c ["INT_ADD", "register:40f0:8", ["const:70e96c:8", "const:4:8"]]
+ 0070e96c ["CALL", null, ["callee:00c58f30:8"]]
- 0070e5c4 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070e974 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e5c8 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 0070e5c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e5c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e5c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070e978 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 0070e978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070e978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7bcf13e460b47fda9bedb5b1b54d74fc"></a>

### [`0070e5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e5dc.md) → [`0070e98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e98c.md) FUN_0070e98c

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
      "definition_site": "0070e998",
      "incomplete_value": false,
      "site": "0070e998",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e5e8",
      "incomplete_value": false,
      "site": "0070e5e8",
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
            "const:9e8:8"
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
      "0070e998",
      "DATA",
      [
        "storage",
        "00c779e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070e998",
      "DATA",
      [
        "storage",
        "00c789b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e5e0 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 0070e990 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 0070e5e4 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 0070e5e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0070e5e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0070e5e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0070e994 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 0070e994 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e994 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0070e994 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0c571f4c4c21e6a83e602c88340309d5"></a>

### [`0070e5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e5f8.md) → [`0070e9a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e9a8.md) FUN_0070e9a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "0070e9d0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0070e620",
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
      "0070e9d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0070e9d0",
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
- 0070e620 ["INT_ADD", "register:40f0:8", ["const:70e620:8", "const:4:8"]]
- 0070e620 ["CALL", null, ["ram:47ad34:8"]]
+ 0070e9d0 ["INT_ADD", "register:40f0:8", ["const:70e9d0:8", "const:4:8"]]
+ 0070e9d0 ["CALL", null, ["ram:47b054:8"]]
- 0070e62c ["INT_ADD", "register:40f0:8", ["const:70e62c:8", "const:4:8"]]
- 0070e62c ["CALL", null, ["callee:0047d134:8"]]
+ 0070e9dc ["INT_ADD", "register:40f0:8", ["const:70e9dc:8", "const:4:8"]]
+ 0070e9dc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-fbfea65bdc3c5c75309cf2b84228922e"></a>

### [`0070e684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e684.md) → [`0070ea34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ea34.md) FUN_0070ea34

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
      "definition_site": "0070ea54",
      "incomplete_value": false,
      "site": "0070ea58",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e6a4",
      "incomplete_value": false,
      "site": "0070e6a8",
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
            "const:a68:8"
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
      "0070ea58",
      "DATA",
      [
        "storage",
        "00c77a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070ea58",
      "DATA",
      [
        "storage",
        "00c78a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e698 ["INT_ADD", "register:40f0:8", ["const:70e698:8", "const:4:8"]]
- 0070e698 ["CALL", null, ["callee:00c58f30:8"]]
+ 0070ea48 ["INT_ADD", "register:40f0:8", ["const:70ea48:8", "const:4:8"]]
+ 0070ea48 ["CALL", null, ["callee:00c58f30:8"]]
- 0070e6a0 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070ea50 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e6a4 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 0070e6a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e6a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e6a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070ea54 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 0070ea54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070ea54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070ea54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f9ea8b77b5f5166326e2f00ce4a1485"></a>

### [`0070e6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e6bc.md) → [`0070ea6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ea6c.md) FUN_0070ea6c

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
      "definition_site": "0070ea70",
      "incomplete_value": false,
      "site": "0070ea74",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e6c0",
      "incomplete_value": false,
      "site": "0070e6c4",
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
            "const:a68:8"
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
      "0070ea74",
      "DATA",
      [
        "storage",
        "00c77a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0070ea74",
      "DATA",
      [
        "storage",
        "00c78a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070e6bc ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 0070ea6c ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0070e6c0 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 0070e6c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0070e6c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0070e6c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0070ea70 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 0070ea70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0070ea70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0070ea70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4b146c2ed1ffce778a02e77e83a72dd3"></a>

### [`0070e710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e710.md) → [`0070eac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070eac0.md) FUN_0070eac0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0070eacc",
      "incomplete_value": true,
      "site": "0070ead0",
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
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070e71c",
      "incomplete_value": true,
      "site": "0070e720",
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
      "0070eacc",
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
      "0070eacc",
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
- 0070e720 ["INT_ADD", "register:40f0:8", ["const:70e720:8", "const:4:8"]]
- 0070e720 ["CALL", null, ["callee:0043bad8:8"]]
+ 0070ead0 ["INT_ADD", "register:40f0:8", ["const:70ead0:8", "const:4:8"]]
+ 0070ead0 ["CALL", null, ["callee:0043bad8:8"]]
- 0070e718 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0070eac8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0070e71c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0070e71c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0070e71c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0070e71c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0070eacc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0070eacc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0070eacc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0070eacc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c101350372645e4e53a29a972c65d92e"></a>

### [`0070e724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e724.md) → [`0070ead4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ead4.md) _INIT_112

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0070eb10",
      "incomplete_value": true,
      "site": "0070eb2c",
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
                "register:4048:8"
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
      "definition_site": "0070e760",
      "incomplete_value": true,
      "site": "0070e77c",
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
                "register:4048:8"
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
      "definition_site": "0070eb34",
      "incomplete_value": true,
      "site": "0070eb50",
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
      "definition_site": "0070e784",
      "incomplete_value": true,
      "site": "0070e7a0",
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
      "definition_site": "0070eb54",
      "incomplete_value": true,
      "site": "0070eb70",
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
      "definition_site": "0070e7a4",
      "incomplete_value": true,
      "site": "0070e7c0",
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
      "0070eb10",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0070eb34",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0070eb54",
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
      "0070eb10",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0070eb34",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0070eb54",
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
- 0070e958 ["INT_ADD", "register:40f0:8", ["const:70e958:8", "const:4:8"]]
- 0070e958 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0070ed08 ["INT_ADD", "register:40f0:8", ["const:70ed08:8", "const:4:8"]]
+ 0070ed08 ["CALL", null, ["callee:00c58ed0:8"]]
- 0070e74c ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0070eafc ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0070e750 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 0070e750 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0070e750 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0070e750 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0070eb00 ["COPY", "tmp:0:8", ["const:cb0:8"]]
+ 0070eb00 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0070eb00 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0070eb00 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-15c78865b9974f39903e7473a068919e"></a>

### [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) → [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) FUN_0070ee64

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`00714c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714c40.md) [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715458.md) · 呼出先 87件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)
- 新版 呼出元 4件 [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714ff0.md) [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00715808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715808.md) · 呼出先 87件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.24% / 新版 98.24%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0070f0a4",
      "incomplete_value": true,
      "site": "0070f0b4",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:9b4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070ecf4",
      "incomplete_value": true,
      "site": "0070ed04",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:8d6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007100f4",
      "incomplete_value": true,
      "site": "00710104",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070fd44",
      "incomplete_value": true,
      "site": "0070fd54",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 122,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007100f0",
      "incomplete_value": true,
      "site": "00710104",
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
                "const:e19:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070fd40",
      "incomplete_value": true,
      "site": "0070fd54",
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
                "const:d42:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 123,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0070f0a4",
      "READ",
      [
        "storage",
        "002bc8d6",
        null,
        "string"
      ]
    ],
    [
      "0070f3dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00aff6c8"
      ]
    ],
    [
      "0070f400",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00aff6c8"
      ]
    ]
  ],
  "added": [
    [
      "0070f0a4",
      "READ",
      [
        "storage",
        "002bc9b4",
        null,
        "string"
      ]
    ],
    [
      "0070f3dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b006bc"
      ]
    ],
    [
      "0070f400",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b006bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0070f02c ["INT_ADD", "register:40f0:8", ["const:70f02c:8", "const:4:8"]]
- 0070f02c ["CALL", null, ["ram:aff6c8:8"]]
+ 0070f3dc ["INT_ADD", "register:40f0:8", ["const:70f3dc:8", "const:4:8"]]
+ 0070f3dc ["CALL", null, ["ram:b006bc:8"]]
- 0070f050 ["INT_ADD", "register:40f0:8", ["const:70f050:8", "const:4:8"]]
- 0070f050 ["CALL", null, ["ram:aff6c8:8"]]
+ 0070f400 ["INT_ADD", "register:40f0:8", ["const:70f400:8", "const:4:8"]]
+ 0070f400 ["CALL", null, ["ram:b006bc:8"]]
- 0070f25c ["INT_ADD", "register:40f0:8", ["const:70f25c:8", "const:4:8"]]
- 0070f25c ["CALL", null, ["callee:0043e138:8"]]
+ 0070f60c ["INT_ADD", "register:40f0:8", ["const:70f60c:8", "const:4:8"]]
+ 0070f60c ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-9bf0a1c144ddaefc476650ac8ce042f3"></a>

### [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) → [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) FUN_007106e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 63件 [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`005e0ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0ee8.md) [`005e0f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0f2c.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md)
- 新版 呼出元 3件 [`005fbd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fb/005fbd2c.md) [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 63件 [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`005e1298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1298.md) [`005e12dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e12dc.md) [`005e1f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1f20.md) [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.66% / 新版 93.66%

優先判定に残った影響 `store_value` 43件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00710860",
      "incomplete_value": true,
      "site": "00710870",
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007104b0",
      "incomplete_value": true,
      "site": "007104c0",
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
                "const:2e0:8"
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
      "definition_site": "00710874",
      "incomplete_value": true,
      "site": "00710884",
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
                "const:444:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007104c4",
      "incomplete_value": true,
      "site": "007104d4",
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
                "const:404:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00710874",
      "incomplete_value": true,
      "site": "00710884",
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
      "definition_site": "007104c4",
      "incomplete_value": true,
      "site": "007104d4",
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
      "00710860",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "00710874",
      "READ",
      [
        "storage",
        "002a0404",
        null,
        "string"
      ]
    ],
    [
      "00710874",
      "READ",
      [
        "storage",
        "002a0414",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00710860",
      "READ",
      [
        "storage",
        "002c3330",
        null,
        null
      ]
    ],
    [
      "00710874",
      "READ",
      [
        "storage",
        "002a0444",
        null,
        "string"
      ]
    ],
    [
      "00710874",
      "READ",
      [
        "storage",
        "002a0454",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007103cc ["INT_ADD", "register:40f0:8", ["const:7103cc:8", "const:4:8"]]
- 007103cc ["CALL", null, ["callee:005e1f20:8"]]
+ 0071077c ["INT_ADD", "register:40f0:8", ["const:71077c:8", "const:4:8"]]
+ 0071077c ["CALL", null, ["callee:005e1f20:8"]]
- 0071054c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:6c0:8"]]
- 0071054c ["LOAD", "register:5040:16", ["const:1b1:8", "tmp:0:8"]]
- 0071054c ["COPY", "register:5050:8", ["const:0:8"]]
- 0071054c ["COPY", "register:5058:8", ["const:0:8"]]
+ 007108fc ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:710:8"]]
+ 007108fc ["LOAD", "register:5040:16", ["const:1b1:8", "tmp:0:8"]]
+ 007108fc ["COPY", "register:5050:8", ["const:0:8"]]
+ 007108fc ["COPY", "register:5058:8", ["const:0:8"]]
- 00710f68 ["INT_ADD", "register:40f0:8", ["const:710f68:8", "const:4:8"]]
- 00710f68 ["CALL", null, ["callee:00af82a8:8"]]
+ 00711318 ["INT_ADD", "register:40f0:8", ["const:711318:8", "const:4:8"]]
+ 00711318 ["CALL", null, ["callee:00af82a8:8"]]
~~~


<a id="compare-6f9abd8adb7d26c10d099de0ce11a6bf"></a>

### [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) → [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) FUN_00711df8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00714e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714e10.md) [`00714fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/00714fe4.md) [`00715458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715458.md) · 呼出先 99件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`005e0ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0ee8.md) [`005e0f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0f2c.md)
- 新版 呼出元 4件 [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) [`007151c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/007151c0.md) [`00715394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715394.md) [`00715808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715808.md) · 呼出先 99件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`005e1298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1298.md) [`005e12dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e12dc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `call_argument_candidate` 14件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00712c14",
      "incomplete_value": true,
      "site": "00712c20",
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
                "const:170:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00712864",
      "incomplete_value": true,
      "site": "00712870",
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
                "const:120:8"
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
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0071243c",
      "incomplete_value": false,
      "site": "00712444",
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
            "const:40c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071208c",
      "incomplete_value": false,
      "site": "00712094",
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
            "const:3cc:8"
          ]
        ]
      ]
    },
    "ordinal": 60,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00712cf4",
      "incomplete_value": false,
      "site": "00712cfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:8a7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00712944",
      "incomplete_value": false,
      "site": "0071294c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:7da:8"
          ]
        ]
      ]
    },
    "ordinal": 139,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00712058",
      "READ",
      [
        "storage",
        "002bc8d6",
        null,
        "string"
      ]
    ],
    [
      "0071243c",
      "PARAM",
      [
        "storage",
        "002a03cc",
        null,
        null
      ]
    ],
    [
      "00712c14",
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
      "00712058",
      "READ",
      [
        "storage",
        "002bc9b4",
        null,
        "string"
      ]
    ],
    [
      "0071243c",
      "PARAM",
      [
        "storage",
        "002a040c",
        null,
        null
      ]
    ],
    [
      "00712c14",
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
- 00712094 ["INT_ADD", "register:40f0:8", ["const:712094:8", "const:4:8"]]
- 00712094 ["CALL", null, ["callee:0043e138:8"]]
+ 00712444 ["INT_ADD", "register:40f0:8", ["const:712444:8", "const:4:8"]]
+ 00712444 ["CALL", null, ["callee:0043e138:8"]]
- 0071259c ["INT_ADD", "register:40f0:8", ["const:71259c:8", "const:4:8"]]
- 0071259c ["CALL", null, ["callee:00af7b50:8"]]
+ 0071294c ["INT_ADD", "register:40f0:8", ["const:71294c:8", "const:4:8"]]
+ 0071294c ["CALL", null, ["callee:00af7b50:8"]]
- 0071294c ["INT_ADD", "register:40f0:8", ["const:71294c:8", "const:4:8"]]
- 0071294c ["CALL", null, ["callee:0043e138:8"]]
+ 00712cfc ["INT_ADD", "register:40f0:8", ["const:712cfc:8", "const:4:8"]]
+ 00712cfc ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-bb307360adc7b702412be726ae04237a"></a>

### [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) → [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) FUN_00713760

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 31件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`005fe288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe288.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 31件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda8.md) [`005fe638`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe638.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.17% / 新版 99.17%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007137d0",
      "incomplete_value": true,
      "site": "007137d0",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:125:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00713420",
      "incomplete_value": true,
      "site": "00713420",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:47:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00713b58",
      "incomplete_value": true,
      "site": "00713b70",
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
                "const:fd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007137a8",
      "incomplete_value": true,
      "site": "007137c0",
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
                "const:f80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007137c0",
      "READ",
      [
        "storage",
        "002bf047",
        null,
        "undefined8"
      ]
    ],
    [
      "00713848",
      "DATA",
      [
        "storage",
        "00393cac",
        null,
        "byte[59]"
      ]
    ],
    [
      "00713848",
      "DATA",
      [
        "storage",
        "00393cb0",
        null,
        "byte[59]"
      ]
    ]
  ],
  "added": [
    [
      "007137c0",
      "READ",
      [
        "storage",
        "002bf125",
        null,
        "undefined8"
      ]
    ],
    [
      "00713848",
      "DATA",
      [
        "storage",
        "00393cac",
        "fde_00393cac",
        "dword"
      ]
    ],
    [
      "00713848",
      "DATA",
      [
        "storage",
        "00393cb0",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 007133f8 ["INT_ADD", "register:40f0:8", ["const:7133f8:8", "const:4:8"]]
- 007133f8 ["CALL", null, ["callee:00af4aec:8"]]
+ 007137a8 ["INT_ADD", "register:40f0:8", ["const:7137a8:8", "const:4:8"]]
+ 007137a8 ["CALL", null, ["callee:00af4aec:8"]]
- 00713408 ["COPY", "tmp:0:8", ["const:47:8"]]
- 00713408 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00713408 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00713408 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007137b8 ["COPY", "tmp:0:8", ["const:125:8"]]
+ 007137b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007137b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007137b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00713438 ["INT_ADD", "register:40f0:8", ["const:713438:8", "const:4:8"]]
- 00713438 ["CALL", null, ["callee:00448254:8"]]
+ 007137e8 ["INT_ADD", "register:40f0:8", ["const:7137e8:8", "const:4:8"]]
+ 007137e8 ["CALL", null, ["callee:00448254:8"]]
~~~


<a id="compare-0c44c9fbbfed7db00387f14974ac0623"></a>

### [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) → [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) FUN_00714664

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 28件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`005fe288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe288.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 28件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda8.md) [`005fe638`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe638.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.15% / 新版 99.15%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007146d4",
      "incomplete_value": true,
      "site": "007146d4",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:125:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00714324",
      "incomplete_value": true,
      "site": "00714324",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:47:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00714a20",
      "incomplete_value": true,
      "site": "00714a38",
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
                "const:100:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00714670",
      "incomplete_value": true,
      "site": "00714688",
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
                "const:b0:8"
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
      "007146c4",
      "READ",
      [
        "storage",
        "002bf047",
        null,
        "undefined8"
      ]
    ],
    [
      "00714750",
      "DATA",
      [
        "storage",
        "00393cac",
        null,
        "byte[59]"
      ]
    ],
    [
      "00714750",
      "DATA",
      [
        "storage",
        "00393cb0",
        null,
        "byte[59]"
      ]
    ]
  ],
  "added": [
    [
      "007146c4",
      "READ",
      [
        "storage",
        "002bf125",
        null,
        "undefined8"
      ]
    ],
    [
      "00714750",
      "DATA",
      [
        "storage",
        "00393cac",
        "fde_00393cac",
        "dword"
      ]
    ],
    [
      "00714750",
      "DATA",
      [
        "storage",
        "00393cb0",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 007142fc ["INT_ADD", "register:40f0:8", ["const:7142fc:8", "const:4:8"]]
- 007142fc ["CALL", null, ["callee:00af4aec:8"]]
+ 007146ac ["INT_ADD", "register:40f0:8", ["const:7146ac:8", "const:4:8"]]
+ 007146ac ["CALL", null, ["callee:00af4aec:8"]]
- 0071430c ["COPY", "tmp:0:8", ["const:47:8"]]
- 0071430c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0071430c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0071430c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007146bc ["COPY", "tmp:0:8", ["const:125:8"]]
+ 007146bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007146bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007146bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0071433c ["INT_ADD", "register:40f0:8", ["const:71433c:8", "const:4:8"]]
- 0071433c ["CALL", null, ["callee:00448254:8"]]
+ 007146ec ["INT_ADD", "register:40f0:8", ["const:7146ec:8", "const:4:8"]]
+ 007146ec ["CALL", null, ["callee:00448254:8"]]
~~~


<a id="compare-661972434fdbf5f1c5eefc2db2b37397"></a>

### [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) → [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) FUN_00715908

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 81件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)
- 新版 呼出元 2件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 81件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda8.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.23% / 新版 98.23%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 8件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00715aa4",
      "incomplete_value": true,
      "site": "00715ab8",
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
                "const:820:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007156f4",
      "incomplete_value": true,
      "site": "00715708",
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
                "const:7d0:8"
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
      "definition_site": "0071607c",
      "incomplete_value": true,
      "site": "0071608c",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00715ccc",
      "incomplete_value": true,
      "site": "00715cdc",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00716088",
      "incomplete_value": true,
      "site": "00716090",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:39b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00715cd8",
      "incomplete_value": true,
      "site": "00715ce0",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:2cc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 58,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00715aa4",
      "READ",
      [
        "storage",
        "002c27d0",
        null,
        null
      ]
    ],
    [
      "00715cf8",
      "READ",
      [
        "storage",
        "00c9b5f8",
        null,
        "pointer"
      ]
    ],
    [
      "00715cfc",
      "DATA",
      [
        "storage",
        "00ca407c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00715aa4",
      "READ",
      [
        "storage",
        "002c2820",
        null,
        null
      ]
    ],
    [
      "00715cf8",
      "READ",
      [
        "storage",
        "00c9c5c8",
        null,
        "pointer"
      ]
    ],
    [
      "00715cfc",
      "DATA",
      [
        "storage",
        "00ca504c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007159a4 ["INT_ADD", "register:40f0:8", ["const:7159a4:8", "const:4:8"]]
- 007159a4 ["CALL", null, ["ram:47ad34:8"]]
+ 00715d54 ["INT_ADD", "register:40f0:8", ["const:715d54:8", "const:4:8"]]
+ 00715d54 ["CALL", null, ["ram:47b054:8"]]
- 00715f54 ["INT_ADD", "register:40f0:8", ["const:715f54:8", "const:4:8"]]
- 00715f54 ["CALL", null, ["callee:00682854:8"]]
+ 00716304 ["INT_ADD", "register:40f0:8", ["const:716304:8", "const:4:8"]]
+ 00716304 ["CALL", null, ["callee:00682854:8"]]
- 00715fa0 ["INT_ADD", "register:40f0:8", ["const:715fa0:8", "const:4:8"]]
- 00715fa0 ["CALL", null, ["ram:47ad34:8"]]
+ 00716350 ["INT_ADD", "register:40f0:8", ["const:716350:8", "const:4:8"]]
+ 00716350 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-8b40fe6ea142a85c74e590d7a8ea4044"></a>

### [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) → [`00716f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00716/00716f88.md) FUN_00716f88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce1c.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a51c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a51/00a51c48.md)
- 新版 呼出元 2件 [`00715908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00715/00715908.md) [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 17件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d13c.md) [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a52c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a52/00a52c3c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.24% / 新版 99.24%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007170f8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00716d48",
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
      "007170f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "007170f8",
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
- 00716d48 ["INT_ADD", "register:40f0:8", ["const:716d48:8", "const:4:8"]]
- 00716d48 ["CALL", null, ["ram:47ad34:8"]]
+ 007170f8 ["INT_ADD", "register:40f0:8", ["const:7170f8:8", "const:4:8"]]
+ 007170f8 ["CALL", null, ["ram:47b054:8"]]
- 00716c04 ["INT_ADD", "register:40f0:8", ["const:716c04:8", "const:4:8"]]
- 00716c04 ["CALL", null, ["callee:00af4cac:8"]]
+ 00716fb4 ["INT_ADD", "register:40f0:8", ["const:716fb4:8", "const:4:8"]]
+ 00716fb4 ["CALL", null, ["callee:00af4cac:8"]]
- 00716c20 ["INT_ADD", "register:40f0:8", ["const:716c20:8", "const:4:8"]]
- 00716c20 ["CALL", null, ["callee:00a52c3c:8"]]
+ 00716fd0 ["INT_ADD", "register:40f0:8", ["const:716fd0:8", "const:4:8"]]
+ 00716fd0 ["CALL", null, ["callee:00a52c3c:8"]]
~~~


<a id="compare-f9bf82f3964906408c072dd4e9cbe694"></a>

### [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) → [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) FUN_00717198

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 123件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 123件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda8.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.33% / 新版 99.33%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00717b18",
      "incomplete_value": true,
      "site": "00717b1c",
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
            "const:39b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00717768",
      "incomplete_value": true,
      "site": "0071776c",
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
            "const:2cc:8"
          ]
        ]
      ]
    },
    "ordinal": 90,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00717b88",
      "incomplete_value": false,
      "site": "00717b8c",
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
            "const:39b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007177d8",
      "incomplete_value": false,
      "site": "007177dc",
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
            "const:2cc:8"
          ]
        ]
      ]
    },
    "ordinal": 96,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00717e44",
      "incomplete_value": false,
      "site": "00717e4c",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00717a94",
      "incomplete_value": false,
      "site": "00717a9c",
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
            "const:735:8"
          ]
        ]
      ]
    },
    "ordinal": 119,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00717278",
      "READ",
      [
        "storage",
        "002c3f80",
        null,
        "undefined8"
      ]
    ],
    [
      "00717954",
      "READ",
      [
        "storage",
        "00c9b5f8",
        null,
        "pointer"
      ]
    ],
    [
      "00717958",
      "DATA",
      [
        "storage",
        "00ca407c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00717278",
      "READ",
      [
        "storage",
        "002c3fd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00717954",
      "READ",
      [
        "storage",
        "00c9c5c8",
        null,
        "pointer"
      ]
    ],
    [
      "00717958",
      "DATA",
      [
        "storage",
        "00ca504c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0071776c ["INT_ADD", "register:40f0:8", ["const:71776c:8", "const:4:8"]]
- 0071776c ["CALL", null, ["callee:0043e138:8"]]
+ 00717b1c ["INT_ADD", "register:40f0:8", ["const:717b1c:8", "const:4:8"]]
+ 00717b1c ["CALL", null, ["callee:0043e138:8"]]
- 007177dc ["INT_ADD", "register:40f0:8", ["const:7177dc:8", "const:4:8"]]
- 007177dc ["CALL", null, ["callee:0043e138:8"]]
+ 00717b8c ["INT_ADD", "register:40f0:8", ["const:717b8c:8", "const:4:8"]]
+ 00717b8c ["CALL", null, ["callee:0043e138:8"]]
- 00717a9c ["INT_ADD", "register:40f0:8", ["const:717a9c:8", "const:4:8"]]
- 00717a9c ["CALL", null, ["callee:00682854:8"]]
+ 00717e4c ["INT_ADD", "register:40f0:8", ["const:717e4c:8", "const:4:8"]]
+ 00717e4c ["CALL", null, ["callee:00682854:8"]]
~~~


<a id="compare-82faab186e7db945fa5bd0105157cc53"></a>

### [`007187cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00718/007187cc.md) → [`00718b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00718/00718b7c.md) FUN_00718b7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 24件 [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e0fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0fd0.md) [`005e1660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1660.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 24件 [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005e1380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1380.md) [`005e1a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1a10.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.87% / 新版 99.87%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00719708",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00719358",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 51,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00719708",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00719708",
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
- 00719358 ["INT_ADD", "register:40f0:8", ["const:719358:8", "const:4:8"]]
- 00719358 ["CALL", null, ["ram:47ad34:8"]]
+ 00719708 ["INT_ADD", "register:40f0:8", ["const:719708:8", "const:4:8"]]
+ 00719708 ["CALL", null, ["ram:47b054:8"]]
- 00718838 ["INT_ADD", "register:40f0:8", ["const:718838:8", "const:4:8"]]
- 00718838 ["CALL", null, ["callee:00a43938:8"]]
+ 00718be8 ["INT_ADD", "register:40f0:8", ["const:718be8:8", "const:4:8"]]
+ 00718be8 ["CALL", null, ["callee:00a43938:8"]]
- 0071887c ["INT_ADD", "register:40f0:8", ["const:71887c:8", "const:4:8"]]
- 0071887c ["CALL", null, ["callee:00af4980:8"]]
+ 00718c2c ["INT_ADD", "register:40f0:8", ["const:718c2c:8", "const:4:8"]]
+ 00718c2c ["CALL", null, ["callee:00af4980:8"]]
~~~


<a id="compare-0bfd308d1897b5ff54dc86d060d75660"></a>

### [`00719768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719768.md) → [`00719b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00719/00719b18.md) FUN_00719b18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`00713760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00713/00713760.md) [`00714664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00714/00714664.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00719b24",
      "incomplete_value": false,
      "site": "00719b28",
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
      "definition_site": "00719774",
      "incomplete_value": false,
      "site": "00719778",
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
      "00719b24",
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
      "00719b24",
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
- 00719778 ["INT_ADD", "register:40f0:8", ["const:719778:8", "const:4:8"]]
- 00719778 ["CALL", null, ["callee:0043bad8:8"]]
+ 00719b28 ["INT_ADD", "register:40f0:8", ["const:719b28:8", "const:4:8"]]
+ 00719b28 ["CALL", null, ["callee:0043bad8:8"]]
- 00719770 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00719b20 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00719774 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00719774 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00719774 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00719774 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00719b24 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00719b24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00719b24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00719b24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-45dd2e34f90a51a832e4624a9c4816c4"></a>

### [`0071986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/0071986c.md) → [`00719c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00719/00719c1c.md) _INIT_113

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00719c7c",
      "incomplete_value": true,
      "site": "00719c98",
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
      "definition_site": "007198cc",
      "incomplete_value": true,
      "site": "007198e8",
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
      "definition_site": "00719cbc",
      "incomplete_value": true,
      "site": "00719cd4",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071990c",
      "incomplete_value": true,
      "site": "00719924",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:f15:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00719e44",
      "incomplete_value": false,
      "site": "00719e50",
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
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00719a94",
      "incomplete_value": false,
      "site": "00719aa0",
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
            "const:d08:8"
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
      "00719c58",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00719c7c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00719c9c",
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
      "00719c58",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00719c7c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00719c9c",
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
- 00719aa0 ["INT_ADD", "register:40f0:8", ["const:719aa0:8", "const:4:8"]]
- 00719aa0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00719e50 ["INT_ADD", "register:40f0:8", ["const:719e50:8", "const:4:8"]]
+ 00719e50 ["CALL", null, ["callee:00c58ed0:8"]]
- 00719894 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00719c44 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 00719898 ["COPY", "tmp:0:8", ["const:d08:8"]]
- 00719898 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00719898 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00719898 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00719c48 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 00719c48 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00719c48 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00719c48 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-d2cd6fcd9fb14cd79fd6a50937bc5555"></a>

### [`00719cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719cc0.md) → [`0071a070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071a/0071a070.md) FUN_0071a070

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009d906c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d9/009d906c.md) · 呼出先 18件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`009da018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009da/009da018.md) · 呼出先 18件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 94.62% / 新版 94.62%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0071a0b4",
      "incomplete_value": false,
      "site": "0071a0b8",
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
      "definition_site": "00719d04",
      "incomplete_value": false,
      "site": "00719d08",
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
      "definition_site": "0071a0e4",
      "incomplete_value": true,
      "site": "0071a0f4",
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
                "const:d40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00719d34",
      "incomplete_value": true,
      "site": "00719d44",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071a0dc",
      "incomplete_value": true,
      "site": "0071a0f8",
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
                "const:4ec:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00719d2c",
      "incomplete_value": true,
      "site": "00719d48",
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
                "const:421:8"
              ]
            ]
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
      "0071a0b8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0071a0dc",
      "READ",
      [
        "storage",
        "002a3421",
        null,
        "string"
      ]
    ],
    [
      "0071a0dc",
      "READ",
      [
        "storage",
        "002a3431",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0071a0b8",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0071a0dc",
      "READ",
      [
        "storage",
        "002a34ec",
        null,
        "string"
      ]
    ],
    [
      "0071a0dc",
      "READ",
      [
        "storage",
        "002a34fc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00719d00 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0071a0b0 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 0071a0b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c90:8"]]
- 0071a0b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0071a468 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c60:8"]]
+ 0071a468 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00719cf8 ["INT_ADD", "register:40f0:8", ["const:719cf8:8", "const:4:8"]]
- 00719cf8 ["CALL", null, ["callee:00488180:8"]]
+ 0071a0a8 ["INT_ADD", "register:40f0:8", ["const:71a0a8:8", "const:4:8"]]
+ 0071a0a8 ["CALL", null, ["callee:00488180:8"]]
~~~


<a id="compare-cd09160bb5f66de573b2b6fd8071385c"></a>

### [`0071a3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071a3e4.md) → [`0071a794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071a/0071a794.md) FUN_0071a794

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00719cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719cc0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0071a070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071a/0071a070.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0071a7a0",
      "incomplete_value": false,
      "site": "0071a7a4",
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
      "definition_site": "0071a3f0",
      "incomplete_value": false,
      "site": "0071a3f4",
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
      "0071a7a0",
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
      "0071a7a0",
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
- 0071a3f4 ["INT_ADD", "register:40f0:8", ["const:71a3f4:8", "const:4:8"]]
- 0071a3f4 ["CALL", null, ["callee:0043bad8:8"]]
+ 0071a7a4 ["INT_ADD", "register:40f0:8", ["const:71a7a4:8", "const:4:8"]]
+ 0071a7a4 ["CALL", null, ["callee:0043bad8:8"]]
- 0071a3ec ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0071a79c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0071a3f0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0071a3f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0071a3f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0071a3f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0071a7a0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0071a7a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0071a7a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0071a7a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-fceb7e33f9a621b269577cab8f9fd9ec"></a>

### [`0071a3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071a3f8.md) → [`0071a7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071a/0071a7a8.md) FUN_0071a7a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00719cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719cc0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0071a070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071a/0071a070.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0071a7b4",
      "incomplete_value": false,
      "site": "0071a7b8",
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
      "definition_site": "0071a404",
      "incomplete_value": false,
      "site": "0071a408",
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
      "0071a7b4",
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
      "0071a7b4",
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
- 0071a408 ["INT_ADD", "register:40f0:8", ["const:71a408:8", "const:4:8"]]
- 0071a408 ["CALL", null, ["callee:0043bad8:8"]]
+ 0071a7b8 ["INT_ADD", "register:40f0:8", ["const:71a7b8:8", "const:4:8"]]
+ 0071a7b8 ["CALL", null, ["callee:0043bad8:8"]]
- 0071a400 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0071a7b0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0071a404 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0071a404 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0071a404 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0071a404 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0071a7b4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0071a7b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0071a7b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0071a7b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4ae5b23c8573e1c3f34533caa1b82f65"></a>

### [`0071a40c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071a40c.md) → [`0071a7bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071a/0071a7bc.md) _INIT_114

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071a7f8",
      "incomplete_value": true,
      "site": "0071a814",
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
      "definition_site": "0071a448",
      "incomplete_value": true,
      "site": "0071a464",
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
      "definition_site": "0071a81c",
      "incomplete_value": true,
      "site": "0071a838",
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
      "definition_site": "0071a46c",
      "incomplete_value": true,
      "site": "0071a488",
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
      "definition_site": "0071a83c",
      "incomplete_value": true,
      "site": "0071a858",
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
      "definition_site": "0071a48c",
      "incomplete_value": true,
      "site": "0071a4a8",
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
      "0071a7f8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0071a81c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0071a83c",
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
      "0071a7f8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0071a81c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0071a83c",
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
- 0071a56c ["INT_ADD", "register:40f0:8", ["const:71a56c:8", "const:4:8"]]
- 0071a56c ["CALL", null, ["callee:0043bb58:8"]]
+ 0071a91c ["INT_ADD", "register:40f0:8", ["const:71a91c:8", "const:4:8"]]
+ 0071a91c ["CALL", null, ["callee:0043bb58:8"]]
- 0071a640 ["INT_ADD", "register:40f0:8", ["const:71a640:8", "const:4:8"]]
- 0071a640 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0071a9f0 ["INT_ADD", "register:40f0:8", ["const:71a9f0:8", "const:4:8"]]
+ 0071a9f0 ["CALL", null, ["callee:00c58ed0:8"]]
- 0071a434 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0071a7e4 ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-7a5951283e823ab15adc891a3e43c546"></a>

### [`0071adbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071adbc.md) → [`0071b16c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071b16c.md) FUN_0071b16c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009d906c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d9/009d906c.md) · 呼出先 23件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`009da018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009da/009da018.md) · 呼出先 23件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 94.43% / 新版 94.43%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071b1b4",
      "incomplete_value": true,
      "site": "0071b1bc",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071ae04",
      "incomplete_value": true,
      "site": "0071ae0c",
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
      "definition_site": "0071b3c4",
      "incomplete_value": true,
      "site": "0071b3dc",
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
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:9a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071b014",
      "incomplete_value": true,
      "site": "0071b02c",
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
                "const:2b2000:8"
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
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071b5d0",
      "incomplete_value": true,
      "site": "0071b5e4",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:931:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071b220",
      "incomplete_value": true,
      "site": "0071b234",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:864:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 50,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0071b1bc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0071b1d4",
      "READ",
      [
        "storage",
        "002a45f0",
        null,
        "string"
      ]
    ],
    [
      "0071b3c4",
      "READ",
      [
        "storage",
        "002b2050",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0071b1bc",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0071b1d4",
      "READ",
      [
        "storage",
        "002a46bb",
        null,
        "string"
      ]
    ],
    [
      "0071b3c4",
      "READ",
      [
        "storage",
        "002b209a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0071afb4 ["INT_ADD", "register:40f0:8", ["const:71afb4:8", "const:4:8"]]
- 0071afb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0071b364 ["INT_ADD", "register:40f0:8", ["const:71b364:8", "const:4:8"]]
+ 0071b364 ["CALL", null, ["callee:00c58f30:8"]]
- 0071adfc ["INT_ADD", "register:40f0:8", ["const:71adfc:8", "const:4:8"]]
- 0071adfc ["CALL", null, ["callee:00488180:8"]]
+ 0071b1ac ["INT_ADD", "register:40f0:8", ["const:71b1ac:8", "const:4:8"]]
+ 0071b1ac ["CALL", null, ["callee:00488180:8"]]
- 0071ae00 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0071b1b0 ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-f8d311f784614bb86d848249b4333728"></a>

### [`0071b588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b588.md) → [`0071b938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071b938.md) FUN_0071b938

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0071adbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071adbc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0071b16c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071b16c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0071b944",
      "incomplete_value": false,
      "site": "0071b948",
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
      "definition_site": "0071b594",
      "incomplete_value": false,
      "site": "0071b598",
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
      "0071b944",
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
      "0071b944",
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
- 0071b598 ["INT_ADD", "register:40f0:8", ["const:71b598:8", "const:4:8"]]
- 0071b598 ["CALL", null, ["callee:0043bad8:8"]]
+ 0071b948 ["INT_ADD", "register:40f0:8", ["const:71b948:8", "const:4:8"]]
+ 0071b948 ["CALL", null, ["callee:0043bad8:8"]]
- 0071b590 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0071b940 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0071b594 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0071b594 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0071b594 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0071b594 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0071b944 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0071b944 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0071b944 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0071b944 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-241e5e647d62bf67101088bf76ad7b51"></a>

### [`0071b59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b59c.md) → [`0071b94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071b94c.md) _INIT_115

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071b988",
      "incomplete_value": true,
      "site": "0071b9a4",
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
      "definition_site": "0071b5d8",
      "incomplete_value": true,
      "site": "0071b5f4",
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
      "definition_site": "0071b9cc",
      "incomplete_value": true,
      "site": "0071b9e8",
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
      "definition_site": "0071b61c",
      "incomplete_value": true,
      "site": "0071b638",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071ba28",
      "incomplete_value": true,
      "site": "0071ba44",
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071b678",
      "incomplete_value": true,
      "site": "0071b694",
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
      "0071b988",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0071b9ac",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0071b9cc",
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
      "0071b988",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0071b9ac",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0071b9cc",
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
- 0071b7d0 ["INT_ADD", "register:40f0:8", ["const:71b7d0:8", "const:4:8"]]
- 0071b7d0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0071bb80 ["INT_ADD", "register:40f0:8", ["const:71bb80:8", "const:4:8"]]
+ 0071bb80 ["CALL", null, ["callee:00c58ed0:8"]]
- 0071b5c4 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0071b974 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0071b5c8 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 0071b5c8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0071b5c8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0071b5c8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0071b978 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 0071b978 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0071b978 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0071b978 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-90dc8a878210ab899c57df4babc7906d"></a>

### [`0071d254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d254.md) → [`0071d604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d604.md) FUN_0071d604

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 8件 [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) [`0064dc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064dc08.md) [`00696328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696328.md) [`00698e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698e2c.md) [`006e93fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e93fc.md) · 呼出先 17件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md) [`0071b9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b9c8.md) [`0071e34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e34c.md)
- 新版 呼出元 8件 [`0064b598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064b/0064b598.md) [`0064dfb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dfb8.md) [`006966d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/006966d8.md) [`006991dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/006991dc.md) [`006e97ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e9/006e97ac.md) · 呼出先 17件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`00697570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00697/00697570.md) [`0071bd78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071bd78.md) [`0071e6fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071e/0071e6fc.md)

変更の種類 call_argument_candidate, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 99.82% / 新版 99.82%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0071e6f0",
      "incomplete_value": false,
      "site": "0071e6f4",
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
      "definition_site": "0071e340",
      "incomplete_value": false,
      "site": "0071e344",
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
    "ordinal": 148,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0071d64c",
      "DATA",
      [
        "storage",
        "003965ac",
        "fde_003965ac",
        "dword"
      ]
    ],
    [
      "0071d674",
      "DATA",
      [
        "storage",
        "003965ac",
        "fde_003965ac",
        "dword"
      ]
    ],
    [
      "0071d6d4",
      "DATA",
      [
        "storage",
        "003965ac",
        "fde_003965ac",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "0071d64c",
      "DATA",
      [
        "storage",
        "003965ac",
        null,
        "dword"
      ]
    ],
    [
      "0071d674",
      "DATA",
      [
        "storage",
        "003965ac",
        null,
        "dword"
      ]
    ],
    [
      "0071d6d4",
      "DATA",
      [
        "storage",
        "003965ac",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 0071e344 ["INT_ADD", "register:40f0:8", ["const:71e344:8", "const:4:8"]]
- 0071e344 ["CALL", null, ["callee:00442c90:8"]]
+ 0071e6f4 ["INT_ADD", "register:40f0:8", ["const:71e6f4:8", "const:4:8"]]
+ 0071e6f4 ["CALL", null, ["callee:00442c90:8"]]
- 0071d288 ["INT_ADD", "register:40f0:8", ["const:71d288:8", "const:4:8"]]
- 0071d288 ["CALL", null, ["callee:008524fc:8"]]
+ 0071d638 ["INT_ADD", "register:40f0:8", ["const:71d638:8", "const:4:8"]]
+ 0071d638 ["CALL", null, ["callee:008524fc:8"]]
- 0071d2b8 ["INT_ADD", "register:40f0:8", ["const:71d2b8:8", "const:4:8"]]
- 0071d2b8 ["CALL", null, ["callee:008524fc:8"]]
+ 0071d668 ["INT_ADD", "register:40f0:8", ["const:71d668:8", "const:4:8"]]
+ 0071d668 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c387c1cb0ad0d766c68649075cd28428"></a>

### [`0071f128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071f/0071f128.md) → [`0071f4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071f/0071f4d8.md) _INIT_116

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071f558",
      "incomplete_value": true,
      "site": "0071f574",
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
      "definition_site": "0071f1a8",
      "incomplete_value": true,
      "site": "0071f1c4",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071f5b4",
      "incomplete_value": true,
      "site": "0071f5d0",
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071f204",
      "incomplete_value": true,
      "site": "0071f220",
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
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0071f6f8",
      "incomplete_value": false,
      "site": "0071f70c",
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
      "definition_site": "0071f348",
      "incomplete_value": false,
      "site": "0071f35c",
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
      "0071f514",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0071f538",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0071f558",
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
      "0071f514",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0071f538",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0071f558",
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
- 0071f35c ["INT_ADD", "register:40f0:8", ["const:71f35c:8", "const:4:8"]]
- 0071f35c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0071f70c ["INT_ADD", "register:40f0:8", ["const:71f70c:8", "const:4:8"]]
+ 0071f70c ["CALL", null, ["callee:00c58ed0:8"]]
- 0071f150 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0071f500 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0071f154 ["COPY", "tmp:0:8", ["const:d50:8"]]
- 0071f154 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0071f154 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0071f154 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0071f504 ["COPY", "tmp:0:8", ["const:d10:8"]]
+ 0071f504 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0071f504 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0071f504 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-0d3b41f8d9c9a9fb8001c39a5daaa7bf"></a>

### [`0071f638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071f/0071f638.md) → [`0071f9e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071f/0071f9e8.md) _INIT_117

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071fa68",
      "incomplete_value": true,
      "site": "0071fa84",
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
      "definition_site": "0071f6b8",
      "incomplete_value": true,
      "site": "0071f6d4",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071fa88",
      "incomplete_value": true,
      "site": "0071faa0",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071f6d8",
      "incomplete_value": true,
      "site": "0071f6f0",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:f15:8"
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
      "definition_site": "0071faa4",
      "incomplete_value": true,
      "site": "0071fac0",
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
      "definition_site": "0071f6f4",
      "incomplete_value": true,
      "site": "0071f710",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0071fa24",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0071fa48",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0071fa68",
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
      "0071fa24",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0071fa48",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0071fa68",
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
- 0071f86c ["INT_ADD", "register:40f0:8", ["const:71f86c:8", "const:4:8"]]
- 0071f86c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0071fc1c ["INT_ADD", "register:40f0:8", ["const:71fc1c:8", "const:4:8"]]
+ 0071fc1c ["CALL", null, ["callee:00c58ed0:8"]]
- 0071f660 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0071fa10 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0071f664 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 0071f664 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0071f664 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0071f664 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0071fa14 ["COPY", "tmp:0:8", ["const:d28:8"]]
+ 0071fa14 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0071fa14 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0071fa14 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-bc18bcb48c2919e309f6a9657dc1a1dc"></a>

### [`0071f9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071f/0071f9c8.md) → [`0071fd78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071f/0071fd78.md) _INIT_118

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071fdd8",
      "incomplete_value": true,
      "site": "0071fdf4",
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
      "definition_site": "0071fa28",
      "incomplete_value": true,
      "site": "0071fa44",
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
      "definition_site": "0071fdf8",
      "incomplete_value": true,
      "site": "0071fe14",
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
      "definition_site": "0071fa48",
      "incomplete_value": true,
      "site": "0071fa64",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0071fe18",
      "incomplete_value": true,
      "site": "0071fe30",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071fa68",
      "incomplete_value": true,
      "site": "0071fa80",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:f15:8"
              ]
            ]
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
      "0071fdb4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0071fdd8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0071fdf8",
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
      "0071fdb4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0071fdd8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0071fdf8",
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
- 0071fbfc ["INT_ADD", "register:40f0:8", ["const:71fbfc:8", "const:4:8"]]
- 0071fbfc ["CALL", null, ["callee:00c58ed0:8"]]
+ 0071ffac ["INT_ADD", "register:40f0:8", ["const:71ffac:8", "const:4:8"]]
+ 0071ffac ["CALL", null, ["callee:00c58ed0:8"]]
- 0071f9f0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0071fda0 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0071f9f4 ["COPY", "tmp:0:8", ["const:d80:8"]]
- 0071f9f4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0071f9f4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0071f9f4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0071fda4 ["COPY", "tmp:0:8", ["const:d40:8"]]
+ 0071fda4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0071fda4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0071fda4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-1c1b108a2a9ce02cd427ec13ae92ebc2"></a>

### [`0071fd58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071f/0071fd58.md) → [`00720108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00720/00720108.md) _INIT_119

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00720144",
      "incomplete_value": true,
      "site": "00720160",
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
      "definition_site": "0071fd94",
      "incomplete_value": true,
      "site": "0071fdb0",
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
      "definition_site": "007201a8",
      "incomplete_value": true,
      "site": "007201c0",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0071fdf8",
      "incomplete_value": true,
      "site": "0071fe10",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:f15:8"
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
      "definition_site": "007201c4",
      "incomplete_value": true,
      "site": "007201e0",
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
      "definition_site": "0071fe14",
      "incomplete_value": true,
      "site": "0071fe30",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00720144",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00720168",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00720188",
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
      "00720144",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00720168",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00720188",
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
- 0071ff8c ["INT_ADD", "register:40f0:8", ["const:71ff8c:8", "const:4:8"]]
- 0071ff8c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0072033c ["INT_ADD", "register:40f0:8", ["const:72033c:8", "const:4:8"]]
+ 0072033c ["CALL", null, ["callee:00c58ed0:8"]]
- 0071fd80 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00720130 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0071fd84 ["COPY", "tmp:0:8", ["const:d98:8"]]
- 0071fd84 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0071fd84 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0071fd84 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00720134 ["COPY", "tmp:0:8", ["const:d58:8"]]
+ 00720134 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00720134 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00720134 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-024eb96fd5d0011a51a9a5cfc248654b"></a>

### [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) → [`00720498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00720/00720498.md) FUN_00720498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 49件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 49件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046dcd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcd4.md) [`0046e898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e898.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.17% / 新版 95.17%

優先判定に残った影響 `call_argument_candidate` 40件, `call_target` 31件, `store_destination` 9件, `store_value` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00722d70",
      "incomplete_value": false,
      "site": "00722d70",
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
      "definition_site": "007229c0",
      "incomplete_value": false,
      "site": "007229c0",
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
    "ordinal": 285,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00722d74",
      "incomplete_value": false,
      "site": "00722d74",
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
      "definition_site": "007229c4",
      "incomplete_value": false,
      "site": "007229c4",
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
    "ordinal": 286,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00722d70",
      "incomplete_value": false,
      "site": "00722d74",
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
      "definition_site": "007229c0",
      "incomplete_value": false,
      "site": "007229c4",
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
    "ordinal": 286,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007205a0",
      "READ",
      [
        "storage",
        "002c43a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00720698",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ],
    [
      "007206b0",
      "PARAM",
      [
        "storage",
        "00ca50d8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "007205a0",
      "READ",
      [
        "storage",
        "002c43f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00720698",
      "READ",
      [
        "storage",
        "00c9bd40",
        null,
        "pointer"
      ]
    ],
    [
      "007206b0",
      "PARAM",
      [
        "storage",
        "00ca6098",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00720304 ["INT_ADD", "register:40f0:8", ["const:720304:8", "const:4:8"]]
- 00720304 ["CALL", null, ["callee:0047ec3c:8"]]
+ 007206b4 ["INT_ADD", "register:40f0:8", ["const:7206b4:8", "const:4:8"]]
+ 007206b4 ["CALL", null, ["callee:0047ec3c:8"]]
- 00720460 ["INT_ADD", "register:40f0:8", ["const:720460:8", "const:4:8"]]
- 00720460 ["CALL", null, ["callee:0047ec3c:8"]]
+ 00720810 ["INT_ADD", "register:40f0:8", ["const:720810:8", "const:4:8"]]
+ 00720810 ["CALL", null, ["callee:0047ec3c:8"]]
- 007204b0 ["INT_ADD", "register:40f0:8", ["const:7204b0:8", "const:4:8"]]
- 007204b0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00720860 ["INT_ADD", "register:40f0:8", ["const:720860:8", "const:4:8"]]
+ 00720860 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-e17ff3f30348fe3fa61e9cb0445f9592"></a>

### [`007244b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00724/007244b8.md) → [`00724868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00724/00724868.md) _INIT_120

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007248a4",
      "incomplete_value": true,
      "site": "007248c0",
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
                "register:4048:8"
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
      "definition_site": "007244f4",
      "incomplete_value": true,
      "site": "00724510",
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
                "register:4048:8"
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
      "definition_site": "007248e8",
      "incomplete_value": true,
      "site": "00724904",
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
      "definition_site": "00724538",
      "incomplete_value": true,
      "site": "00724554",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00724924",
      "incomplete_value": true,
      "site": "00724940",
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
      "definition_site": "00724574",
      "incomplete_value": true,
      "site": "00724590",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007248a4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007248c8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007248e8",
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
      "007248a4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "007248c8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "007248e8",
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
- 007244e0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00724890 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 007244e4 ["COPY", "tmp:0:8", ["const:db0:8"]]
- 007244e4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007244e4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007244e4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00724894 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 00724894 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00724894 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00724894 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 007244ec ["COPY", "register:4048:8", ["const:2b7000:8"]]
+ 0072489c ["COPY", "register:4048:8", ["const:2b8000:8"]]
~~~


<a id="compare-64438cf16e1211a7c37316e9da4de54b"></a>

### [`00724848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00724/00724848.md) → [`00724bf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00724/00724bf8.md) FUN_00724bf8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 21件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 21件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 94.85% / 新版 94.85%

優先判定に残った影響 `store_destination` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00724c3c",
      "incomplete_value": false,
      "site": "00724c48",
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
      "definition_site": "0072488c",
      "incomplete_value": false,
      "site": "00724898",
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
      "definition_site": "00724c74",
      "incomplete_value": true,
      "site": "00724c84",
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
                "const:38a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007248c4",
      "incomplete_value": true,
      "site": "007248d4",
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
                "const:34a:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00724c78",
      "incomplete_value": true,
      "site": "00724c88",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007248c8",
      "incomplete_value": true,
      "site": "007248d8",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00724c48",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00724c74",
      "READ",
      [
        "storage",
        "0029f34a",
        null,
        "string"
      ]
    ],
    [
      "00724c78",
      "READ",
      [
        "storage",
        "0029f353",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00724c48",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00724c74",
      "READ",
      [
        "storage",
        "0029f38a",
        null,
        "string"
      ]
    ],
    [
      "00724c78",
      "READ",
      [
        "storage",
        "0029f393",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00724c48 ["INT_ADD", "register:40f0:8", ["const:724c48:8", "const:4:8"]]
- 00724c48 ["CALL", null, ["callee:00c58f50:8"]]
+ 00724ff8 ["INT_ADD", "register:40f0:8", ["const:724ff8:8", "const:4:8"]]
+ 00724ff8 ["CALL", null, ["callee:00c58f50:8"]]
- 00724c8c ["INT_ADD", "register:40f0:8", ["const:724c8c:8", "const:4:8"]]
- 00724c8c ["CALL", null, ["callee:004413ec:8"]]
+ 0072503c ["INT_ADD", "register:40f0:8", ["const:72503c:8", "const:4:8"]]
+ 0072503c ["CALL", null, ["callee:004413ec:8"]]
- 00724880 ["INT_ADD", "register:40f0:8", ["const:724880:8", "const:4:8"]]
- 00724880 ["CALL", null, ["callee:00488180:8"]]
+ 00724c30 ["INT_ADD", "register:40f0:8", ["const:724c30:8", "const:4:8"]]
+ 00724c30 ["CALL", null, ["callee:00488180:8"]]
~~~


<a id="compare-8fdddc52180e76e55a1c1db4f5e6bd82"></a>

### [`007260e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/007260e4.md) → [`00726494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/00726494.md) FUN_00726494

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00725f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00725/00725f0c.md) [`0077c1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c1e8.md) [`00a38eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38eac.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`007262bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/007262bc.md) [`0077c5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077c5c4.md) [`00a39ea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39ea0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007264a0",
      "incomplete_value": true,
      "site": "007264a4",
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
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007260f0",
      "incomplete_value": true,
      "site": "007260f4",
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
      "007264a0",
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
      "007264a0",
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
- 007260f4 ["INT_ADD", "register:40f0:8", ["const:7260f4:8", "const:4:8"]]
- 007260f4 ["CALL", null, ["callee:0043bad8:8"]]
+ 007264a4 ["INT_ADD", "register:40f0:8", ["const:7264a4:8", "const:4:8"]]
+ 007264a4 ["CALL", null, ["callee:0043bad8:8"]]
- 007260ec ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0072649c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007260f0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007260f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007260f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007260f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007264a0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 007264a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007264a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007264a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3d1b8b65ba6644b1a0f2616629093725"></a>

### [`007262b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/007262b8.md) → [`00726668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/00726668.md) FUN_00726668

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0072615c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/0072615c.md) [`0077c5b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c5b4.md) [`00a38d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38d18.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`0072650c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/0072650c.md) [`0077c990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077c990.md) [`00a39d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39d0c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00726674",
      "incomplete_value": false,
      "site": "00726678",
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
      "definition_site": "007262c4",
      "incomplete_value": false,
      "site": "007262c8",
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
      "00726674",
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
      "00726674",
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
- 007262c8 ["INT_ADD", "register:40f0:8", ["const:7262c8:8", "const:4:8"]]
- 007262c8 ["CALL", null, ["callee:0043bad8:8"]]
+ 00726678 ["INT_ADD", "register:40f0:8", ["const:726678:8", "const:4:8"]]
+ 00726678 ["CALL", null, ["callee:0043bad8:8"]]
- 007262c0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00726670 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007262c4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007262c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007262c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007262c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00726674 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00726674 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00726674 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00726674 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-45070c3e6d22f003728727ef0435525b"></a>

### [`00726488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/00726488.md) → [`00726838`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/00726838.md) _INIT_121

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00726874",
      "incomplete_value": true,
      "site": "00726890",
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
      "definition_site": "007264c4",
      "incomplete_value": true,
      "site": "007264e0",
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
      "definition_site": "007268d8",
      "incomplete_value": true,
      "site": "007268f0",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00726528",
      "incomplete_value": true,
      "site": "00726540",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:f15:8"
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
      "definition_site": "007268f4",
      "incomplete_value": true,
      "site": "00726910",
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
      "definition_site": "00726544",
      "incomplete_value": true,
      "site": "00726560",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00726874",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00726898",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007268b8",
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
      "00726874",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00726898",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "007268b8",
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
- 007266bc ["INT_ADD", "register:40f0:8", ["const:7266bc:8", "const:4:8"]]
- 007266bc ["CALL", null, ["callee:00c58ed0:8"]]
+ 00726a6c ["INT_ADD", "register:40f0:8", ["const:726a6c:8", "const:4:8"]]
+ 00726a6c ["CALL", null, ["callee:00c58ed0:8"]]
- 007264b0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00726860 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 007264b4 ["COPY", "tmp:0:8", ["const:dc8:8"]]
- 007264b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007264b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007264b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00726864 ["COPY", "tmp:0:8", ["const:d88:8"]]
+ 00726864 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00726864 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00726864 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-7d5ab0074581b4f8315faef00682e699"></a>

### [`00726818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/00726818.md) → [`00726bc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/00726bc8.md) FUN_00726bc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487a40.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 18件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487d60.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.69% / 新版 93.69%

優先判定に残った影響 `store_destination` 1件, `store_value` 10件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00726c10",
      "incomplete_value": false,
      "site": "00726c20",
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
      "definition_site": "00726860",
      "incomplete_value": false,
      "site": "00726870",
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
      "definition_site": "00726c48",
      "incomplete_value": true,
      "site": "00726c48",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:e2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00726898",
      "incomplete_value": true,
      "site": "00726898",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:15:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00726c4c",
      "incomplete_value": true,
      "site": "00726c4c",
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
      "definition_site": "0072689c",
      "incomplete_value": true,
      "site": "0072689c",
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
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00726c20",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00726c34",
      "READ",
      [
        "storage",
        "002a9015",
        null,
        "string"
      ]
    ],
    [
      "00726c3c",
      "READ",
      [
        "storage",
        "002a901a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00726c20",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00726c34",
      "READ",
      [
        "storage",
        "002a90e2",
        null,
        "string"
      ]
    ],
    [
      "00726c3c",
      "READ",
      [
        "storage",
        "002a90e7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00726854 ["INT_ADD", "register:40f0:8", ["const:726854:8", "const:4:8"]]
- 00726854 ["CALL", null, ["callee:00488180:8"]]
+ 00726c04 ["INT_ADD", "register:40f0:8", ["const:726c04:8", "const:4:8"]]
+ 00726c04 ["CALL", null, ["callee:00488180:8"]]
- 0072685c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00726c0c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00726860 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00726860 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00726860 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00726860 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00726c10 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00726c10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00726c10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00726c10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-906f2feb8f3096abcf185eb404d9ac0c"></a>

### [`00727698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727698.md) → [`00727a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727a48.md) _INIT_122

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00727ac8",
      "incomplete_value": true,
      "site": "00727ae4",
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
      "definition_site": "00727718",
      "incomplete_value": true,
      "site": "00727734",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00727b44",
      "incomplete_value": true,
      "site": "00727b88",
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
                "const:f87:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00727794",
      "incomplete_value": true,
      "site": "007277d8",
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
                "const:ebc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00727c68",
      "incomplete_value": false,
      "site": "00727c7c",
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
      "definition_site": "007278b8",
      "incomplete_value": false,
      "site": "007278cc",
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
      "00727a84",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00727aa8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00727ac8",
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
      "00727a84",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00727aa8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00727ac8",
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
- 007278cc ["INT_ADD", "register:40f0:8", ["const:7278cc:8", "const:4:8"]]
- 007278cc ["CALL", null, ["callee:00c58ed0:8"]]
+ 00727c7c ["INT_ADD", "register:40f0:8", ["const:727c7c:8", "const:4:8"]]
+ 00727c7c ["CALL", null, ["callee:00c58ed0:8"]]
- 007276c0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00727a70 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 007276c4 ["COPY", "tmp:0:8", ["const:de0:8"]]
- 007276c4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007276c4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007276c4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00727a74 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00727a74 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00727a74 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00727a74 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-2548530e885f4c91ede62035b8f63e0e"></a>

### [`00728158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/00728158.md) → [`00728508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00728/00728508.md) FUN_00728508

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 17件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 17件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 93.29% / 新版 93.29%

優先判定に残った影響 `store_destination` 3件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00728590",
      "incomplete_value": false,
      "site": "00728590",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007281e0",
      "incomplete_value": false,
      "site": "007281e0",
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
            "const:e10:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00728598",
      "incomplete_value": false,
      "site": "00728598",
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
            "const:dd4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007281e8",
      "incomplete_value": false,
      "site": "007281e8",
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
            "const:e14:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007285b4",
      "incomplete_value": true,
      "site": "007285b4",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:96a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00728204",
      "incomplete_value": true,
      "site": "00728204",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:89d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00728550",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00728590",
      "WRITE",
      [
        "storage",
        "00ca7e10",
        null,
        "undefined4"
      ]
    ],
    [
      "00728598",
      "WRITE",
      [
        "storage",
        "00ca7e14",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00728550",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00728590",
      "WRITE",
      [
        "storage",
        "00ca8dd0",
        null,
        "undefined4"
      ]
    ],
    [
      "00728598",
      "WRITE",
      [
        "storage",
        "00ca8dd4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 007281d4 ["COPY", "register:4040:8", ["const:ca7000:8"]]
+ 00728584 ["COPY", "register:4040:8", ["const:ca8000:8"]]
- 007281e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e10:8"]]
- 007281e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 00728590 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd0:8"]]
+ 00728590 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 007281e8 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:e14:8"]]
- 007281e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 00728598 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:dd4:8"]]
+ 00728598 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
~~~


<a id="compare-edfbb9f807af344e3f1bd00fb836879c"></a>

### [`00729044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729044.md) → [`007293f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00729/007293f4.md) FUN_007293f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`0075ea9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ea9c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 0件 
- 新版 呼出元 4件 [`0075ee4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ee4c.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00729408",
      "incomplete_value": true,
      "site": "0072940c",
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
      "definition_site": "00729058",
      "incomplete_value": true,
      "site": "0072905c",
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
      "00729408",
      "DATA",
      [
        "storage",
        "002e1f10",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00729408",
      "DATA",
      [
        "storage",
        "002e1f50",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00729054 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 00729054 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00729054 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00729054 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00729404 ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 00729404 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00729404 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00729404 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0b4f6e48c0d461aecb02d00e0ded0f36"></a>

### [`00729160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729160.md) → [`00729510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00729/00729510.md) FUN_00729510

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0075ea9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ea9c.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md) · 呼出先 23件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 3件 [`0075ee4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ee4c.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`009cdb7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cdb7c.md) · 呼出先 23件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.71% / 新版 96.71%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00729978",
      "incomplete_value": true,
      "site": "00729988",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007295c8",
      "incomplete_value": true,
      "site": "007295d8",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:23:8"
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
      "definition_site": "0072998c",
      "incomplete_value": true,
      "site": "0072998c",
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
      "definition_site": "007295dc",
      "incomplete_value": true,
      "site": "007295dc",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0072984c",
      "incomplete_value": true,
      "site": "0072984c",
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
      "definition_site": "0072949c",
      "incomplete_value": true,
      "site": "0072949c",
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
    "ordinal": 28,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007295ac",
      "DATA",
      [
        "storage",
        "0034444c",
        null,
        "qword"
      ]
    ],
    [
      "00729848",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00729854",
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
      "007295ac",
      "DATA",
      [
        "storage",
        "0034444c",
        null,
        "dword"
      ]
    ],
    [
      "00729848",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00729854",
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
- 007294b4 ["INT_ADD", "register:40f0:8", ["const:7294b4:8", "const:4:8"]]
- 007294b4 ["CALL", null, ["callee:00c596b0:8"]]
+ 00729864 ["INT_ADD", "register:40f0:8", ["const:729864:8", "const:4:8"]]
+ 00729864 ["CALL", null, ["callee:00c596b0:8"]]
- 007297f0 ["INT_ADD", "register:40f0:8", ["const:7297f0:8", "const:4:8"]]
- 007297f0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00729ba0 ["INT_ADD", "register:40f0:8", ["const:729ba0:8", "const:4:8"]]
+ 00729ba0 ["CALL", null, ["callee:00c58ed0:8"]]
- 007291c8 ["INT_ADD", "register:40f0:8", ["const:7291c8:8", "const:4:8"]]
- 007291c8 ["CALL", null, ["callee:008524fc:8"]]
+ 00729578 ["INT_ADD", "register:40f0:8", ["const:729578:8", "const:4:8"]]
+ 00729578 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b4415ecb206018b71cbcb19a77d9e27e"></a>

### [`00729afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729afc.md) → [`00729eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00729/00729eac.md) FUN_00729eac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`00787e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787e0c.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 2件 [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`007881e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/007881e8.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.30% / 新版 97.30%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00729ec8",
      "incomplete_value": true,
      "site": "00729ec8",
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
      "definition_site": "00729b18",
      "incomplete_value": true,
      "site": "00729b18",
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
      "definition_site": "00729ed0",
      "incomplete_value": false,
      "site": "00729ee4",
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
      "definition_site": "00729b20",
      "incomplete_value": false,
      "site": "00729b34",
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
      "definition_site": "00729ed8",
      "incomplete_value": false,
      "site": "00729ee4",
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
      "definition_site": "00729b28",
      "incomplete_value": false,
      "site": "00729b34",
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
      "00729ec4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00729ed0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00729ed8",
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
      "00729ec4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00729ed0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00729ed8",
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
- 00729b34 ["INT_ADD", "register:40f0:8", ["const:729b34:8", "const:4:8"]]
- 00729b34 ["CALL", null, ["callee:00c596b0:8"]]
+ 00729ee4 ["INT_ADD", "register:40f0:8", ["const:729ee4:8", "const:4:8"]]
+ 00729ee4 ["CALL", null, ["callee:00c596b0:8"]]
- 00729b0c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00729ebc ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00729b14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 00729b14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00729ec4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 00729ec4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a5c844c9bc06cd74d75e0d99af6b85e5"></a>

### [`0072ae38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072a/0072ae38.md) → [`0072b1e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b1e8.md) FUN_0072b1e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0072a374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072a/0072a374.md) [`007924dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/007924dc.md) · 呼出先 4件 [`0072b0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b0b4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`00a65e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a65/00a65e5c.md)
- 新版 呼出元 2件 [`0072a724`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072a/0072a724.md) [`007928b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00792/007928b8.md) · 呼出先 4件 [`0072b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b464.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008015e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008015e8.md) [`00a66e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a66/00a66e50.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.81% / 新版 98.81%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072b1fc",
      "value": [
        "leaf",
        "ram:72b464:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072ae4c",
      "value": [
        "leaf",
        "ram:72b0b4:8"
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
      "0072b1fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b0b4"
      ]
    ]
  ],
  "added": [
    [
      "0072b1fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b464"
      ]
    ]
  ]
}
~~~


~~~diff
- 0072ae4c ["INT_ADD", "register:40f0:8", ["const:72ae4c:8", "const:4:8"]]
- 0072ae4c ["CALL", null, ["ram:72b0b4:8"]]
+ 0072b1fc ["INT_ADD", "register:40f0:8", ["const:72b1fc:8", "const:4:8"]]
+ 0072b1fc ["CALL", null, ["ram:72b464:8"]]
- 0072ae84 ["INT_ADD", "register:40f0:8", ["const:72ae84:8", "const:4:8"]]
- 0072ae84 ["CALL", null, ["callee:00801334:8"]]
+ 0072b234 ["INT_ADD", "register:40f0:8", ["const:72b234:8", "const:4:8"]]
+ 0072b234 ["CALL", null, ["callee:00801334:8"]]
- 0072ae90 ["INT_ADD", "register:40f0:8", ["const:72ae90:8", "const:4:8"]]
- 0072ae90 ["CALL", null, ["callee:008015e8:8"]]
+ 0072b240 ["INT_ADD", "register:40f0:8", ["const:72b240:8", "const:4:8"]]
+ 0072b240 ["CALL", null, ["callee:008015e8:8"]]
~~~


<a id="compare-0a537fb1ef7b4a9ba4e3160ff84676b6"></a>

### [`0072af88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072a/0072af88.md) → [`0072b338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b338.md) FUN_0072b338

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079127c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/0079127c.md) · 呼出先 7件 [`0072b0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b0b4.md) [`00731858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731858.md) [`007319c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/007319c8.md) [`007319d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/007319d0.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md)
- 新版 呼出元 1件 [`00791658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00791/00791658.md) · 呼出先 7件 [`0072b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b464.md) [`00731c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731c08.md) [`00731d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731d78.md) [`00731d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731d80.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.67% / 新版 98.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072b35c",
      "value": [
        "leaf",
        "ram:72b464:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072afac",
      "value": [
        "leaf",
        "ram:72b0b4:8"
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
      "0072b35c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b0b4"
      ]
    ]
  ],
  "added": [
    [
      "0072b35c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b464"
      ]
    ]
  ]
}
~~~


~~~diff
- 0072afac ["INT_ADD", "register:40f0:8", ["const:72afac:8", "const:4:8"]]
- 0072afac ["CALL", null, ["ram:72b0b4:8"]]
+ 0072b35c ["INT_ADD", "register:40f0:8", ["const:72b35c:8", "const:4:8"]]
+ 0072b35c ["CALL", null, ["ram:72b464:8"]]
- 0072afdc ["INT_ADD", "register:40f0:8", ["const:72afdc:8", "const:4:8"]]
- 0072afdc ["CALL", null, ["callee:00801334:8"]]
+ 0072b38c ["INT_ADD", "register:40f0:8", ["const:72b38c:8", "const:4:8"]]
+ 0072b38c ["CALL", null, ["callee:00801334:8"]]
- 0072afe8 ["INT_ADD", "register:40f0:8", ["const:72afe8:8", "const:4:8"]]
- 0072afe8 ["CALL", null, ["callee:008015e8:8"]]
+ 0072b398 ["INT_ADD", "register:40f0:8", ["const:72b398:8", "const:4:8"]]
+ 0072b398 ["CALL", null, ["callee:008015e8:8"]]
~~~


<a id="compare-a8bff8c174a4aa85824620d21e86593e"></a>

### [`0072b19c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b19c.md) → [`0072b54c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b54c.md) FUN_0072b54c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00791968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/00791968.md) · 呼出先 3件 [`0072b0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b0b4.md) [`0081ce98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081ce98.md) [`0081d224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081d/0081d224.md)
- 新版 呼出元 1件 [`00791d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00791/00791d44.md) · 呼出先 3件 [`0072b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b464.md) [`0081de44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081de44.md) [`0081e1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081e/0081e1d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072b568",
      "value": [
        "leaf",
        "ram:72b464:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072b1b8",
      "value": [
        "leaf",
        "ram:72b0b4:8"
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
      "0072b568",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b0b4"
      ]
    ]
  ],
  "added": [
    [
      "0072b568",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b464"
      ]
    ]
  ]
}
~~~


~~~diff
- 0072b1b8 ["INT_ADD", "register:40f0:8", ["const:72b1b8:8", "const:4:8"]]
- 0072b1b8 ["CALL", null, ["ram:72b0b4:8"]]
+ 0072b568 ["INT_ADD", "register:40f0:8", ["const:72b568:8", "const:4:8"]]
+ 0072b568 ["CALL", null, ["ram:72b464:8"]]
- 0072b1d0 ["INT_ADD", "register:40f0:8", ["const:72b1d0:8", "const:4:8"]]
- 0072b1d0 ["CALL", null, ["callee:0081de44:8"]]
+ 0072b580 ["INT_ADD", "register:40f0:8", ["const:72b580:8", "const:4:8"]]
+ 0072b580 ["CALL", null, ["callee:0081de44:8"]]
~~~


<a id="compare-aad7f3040cf5cdc42c5a93f133717a91"></a>

### [`0072b1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b1f8.md) → [`0072b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b5a8.md) FUN_0072b5a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00791eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/00791eb8.md) · 呼出先 7件 [`0072b0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b0b4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`009a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97bc.md) [`009adbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbcc.md)
- 新版 呼出元 1件 [`00792294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00792/00792294.md) · 呼出先 7件 [`0072b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b464.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008015e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008015e8.md) [`009aa768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa768.md) [`009aeb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aeb78.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072b5d8",
      "value": [
        "leaf",
        "ram:72b464:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072b228",
      "value": [
        "leaf",
        "ram:72b0b4:8"
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
      "0072b5d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b0b4"
      ]
    ]
  ],
  "added": [
    [
      "0072b5d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0072b464"
      ]
    ]
  ]
}
~~~


~~~diff
- 0072b228 ["INT_ADD", "register:40f0:8", ["const:72b228:8", "const:4:8"]]
- 0072b228 ["CALL", null, ["ram:72b0b4:8"]]
+ 0072b5d8 ["INT_ADD", "register:40f0:8", ["const:72b5d8:8", "const:4:8"]]
+ 0072b5d8 ["CALL", null, ["ram:72b464:8"]]
- 0072b23c ["INT_ADD", "register:40f0:8", ["const:72b23c:8", "const:4:8"]]
- 0072b23c ["CALL", null, ["callee:00801334:8"]]
+ 0072b5ec ["INT_ADD", "register:40f0:8", ["const:72b5ec:8", "const:4:8"]]
+ 0072b5ec ["CALL", null, ["callee:00801334:8"]]
- 0072b248 ["INT_ADD", "register:40f0:8", ["const:72b248:8", "const:4:8"]]
- 0072b248 ["CALL", null, ["callee:008015e8:8"]]
+ 0072b5f8 ["INT_ADD", "register:40f0:8", ["const:72b5f8:8", "const:4:8"]]
+ 0072b5f8 ["CALL", null, ["callee:008015e8:8"]]
~~~


<a id="compare-4f14a704cc5eb88a5fe4426600e356d1"></a>

### [`0072bfa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072bfa4.md) → [`0072c354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072c354.md) FUN_0072c354

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00741628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741628.md) [`009224e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009224e8.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d0dc.md) [`006768ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/006768ac.md)
- 新版 呼出元 6件 [`006b3fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3fac.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`007419d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007419d8.md) [`00923494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923494.md) [`009258c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00925/009258c8.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d3fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d3fc.md) [`00676c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676c5c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.37% / 新版 98.37%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072c39c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072bfec",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "0072c520",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0072c170",
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
      "0072c39c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0072c520",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0072c39c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0072c520",
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
- 0072bfec ["INT_ADD", "register:40f0:8", ["const:72bfec:8", "const:4:8"]]
- 0072bfec ["CALL", null, ["ram:47ad34:8"]]
+ 0072c39c ["INT_ADD", "register:40f0:8", ["const:72c39c:8", "const:4:8"]]
+ 0072c39c ["CALL", null, ["ram:47b054:8"]]
- 0072c170 ["INT_ADD", "register:40f0:8", ["const:72c170:8", "const:4:8"]]
- 0072c170 ["CALL", null, ["ram:47ad34:8"]]
+ 0072c520 ["INT_ADD", "register:40f0:8", ["const:72c520:8", "const:4:8"]]
+ 0072c520 ["CALL", null, ["ram:47b054:8"]]
- 0072bfbc ["INT_ADD", "register:40f0:8", ["const:72bfbc:8", "const:4:8"]]
- 0072bfbc ["CALL", null, ["callee:008524fc:8"]]
+ 0072c36c ["INT_ADD", "register:40f0:8", ["const:72c36c:8", "const:4:8"]]
+ 0072c36c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-5577ddeac8f78a989dad44fca765b047"></a>

### [`0072c50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c50c.md) → [`0072c8bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072c8bc.md) _INIT_123

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
      "definition_site": "0072c8f8",
      "incomplete_value": true,
      "site": "0072c914",
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
      "definition_site": "0072c548",
      "incomplete_value": true,
      "site": "0072c564",
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
      "definition_site": "0072c91c",
      "incomplete_value": true,
      "site": "0072c938",
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
      "definition_site": "0072c56c",
      "incomplete_value": true,
      "site": "0072c588",
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
      "definition_site": "0072c93c",
      "incomplete_value": true,
      "site": "0072c958",
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
      "definition_site": "0072c58c",
      "incomplete_value": true,
      "site": "0072c5a8",
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
      "0072c8f8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0072c91c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0072c93c",
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
      "0072c8f8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0072c91c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0072c93c",
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
- 0072c66c ["INT_ADD", "register:40f0:8", ["const:72c66c:8", "const:4:8"]]
- 0072c66c ["CALL", null, ["callee:0043bb58:8"]]
+ 0072ca1c ["INT_ADD", "register:40f0:8", ["const:72ca1c:8", "const:4:8"]]
+ 0072ca1c ["CALL", null, ["callee:0043bb58:8"]]
- 0072c740 ["INT_ADD", "register:40f0:8", ["const:72c740:8", "const:4:8"]]
- 0072c740 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0072caf0 ["INT_ADD", "register:40f0:8", ["const:72caf0:8", "const:4:8"]]
+ 0072caf0 ["CALL", null, ["callee:00c58ed0:8"]]
- 0072c534 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0072c8e4 ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-4d71ed67736b5b1225e321107cf9a922"></a>

### [`0072ca68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072ca68.md) → [`0072ce18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072ce18.md) FUN_0072ce18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 25件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 25件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 98.06% / 新版 98.06%

優先判定に残った影響 `store_destination` 1件, `store_value` 15件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0072ce6c",
      "incomplete_value": false,
      "site": "0072ce74",
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
      "definition_site": "0072cabc",
      "incomplete_value": false,
      "site": "0072cac4",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0072cea0",
      "incomplete_value": true,
      "site": "0072cea0",
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
                "const:4d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0072caf0",
      "incomplete_value": true,
      "site": "0072caf0",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:f6f:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0072ce9c",
      "incomplete_value": true,
      "site": "0072cea4",
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
      "definition_site": "0072caec",
      "incomplete_value": true,
      "site": "0072caf4",
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
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0072ce74",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0072ce88",
      "READ",
      [
        "storage",
        "002b3f6f",
        null,
        "string"
      ]
    ],
    [
      "0072ce9c",
      "READ",
      [
        "storage",
        "002b3f76",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0072ce74",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0072ce88",
      "READ",
      [
        "storage",
        "002b404d",
        null,
        "string"
      ]
    ],
    [
      "0072ce9c",
      "READ",
      [
        "storage",
        "002b4054",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0072d150 ["INT_ADD", "register:40f0:8", ["const:72d150:8", "const:4:8"]]
- 0072d150 ["CALL", null, ["callee:00c58f30:8"]]
+ 0072d500 ["INT_ADD", "register:40f0:8", ["const:72d500:8", "const:4:8"]]
+ 0072d500 ["CALL", null, ["callee:00c58f30:8"]]
- 0072df6c ["INT_ADD", "register:40f0:8", ["const:72df6c:8", "const:4:8"]]
- 0072df6c ["CALL", null, ["callee:00c590a0:8"]]
+ 0072e31c ["INT_ADD", "register:40f0:8", ["const:72e31c:8", "const:4:8"]]
+ 0072e31c ["CALL", null, ["callee:00c590a0:8"]]
- 0072caa0 ["INT_ADD", "register:40f0:8", ["const:72caa0:8", "const:4:8"]]
- 0072caa0 ["CALL", null, ["callee:00488180:8"]]
+ 0072ce50 ["INT_ADD", "register:40f0:8", ["const:72ce50:8", "const:4:8"]]
+ 0072ce50 ["CALL", null, ["callee:00488180:8"]]
~~~


<a id="compare-ebd70fd518fee7ca87a517f6eea39cf5"></a>

### [`0072fb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072fb60.md) → [`0072ff10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072ff10.md) FUN_0072ff10

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0072f230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072f230.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 1件 [`0072f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072f5e0.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.84% / 新版 98.84%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0072ffdc",
      "incomplete_value": false,
      "site": "0072ffe0",
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
      "definition_site": "0072fc2c",
      "incomplete_value": false,
      "site": "0072fc30",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00730630",
      "incomplete_value": false,
      "site": "00730634",
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
      "definition_site": "00730280",
      "incomplete_value": false,
      "site": "00730284",
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
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00730650",
      "incomplete_value": false,
      "site": "00730654",
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
      "definition_site": "007302a0",
      "incomplete_value": false,
      "site": "007302a4",
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
    "ordinal": 14,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0072ffdc",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "00730630",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "00730650",
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
      "0072ffdc",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ],
    [
      "00730630",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ],
    [
      "00730650",
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
- 0072fc30 ["INT_ADD", "register:40f0:8", ["const:72fc30:8", "const:4:8"]]
- 0072fc30 ["CALL", null, ["callee:00442c90:8"]]
+ 0072ffe0 ["INT_ADD", "register:40f0:8", ["const:72ffe0:8", "const:4:8"]]
+ 0072ffe0 ["CALL", null, ["callee:00442c90:8"]]
- 00730284 ["INT_ADD", "register:40f0:8", ["const:730284:8", "const:4:8"]]
- 00730284 ["CALL", null, ["callee:00442c90:8"]]
+ 00730634 ["INT_ADD", "register:40f0:8", ["const:730634:8", "const:4:8"]]
+ 00730634 ["CALL", null, ["callee:00442c90:8"]]
- 007302a4 ["INT_ADD", "register:40f0:8", ["const:7302a4:8", "const:4:8"]]
- 007302a4 ["CALL", null, ["callee:00442c90:8"]]
+ 00730654 ["INT_ADD", "register:40f0:8", ["const:730654:8", "const:4:8"]]
+ 00730654 ["CALL", null, ["callee:00442c90:8"]]
~~~


<a id="compare-9071c6f33c4647d80a63840f39c30326"></a>

### [`00730c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730c14.md) → [`00730fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00730/00730fc4.md) FUN_00730fc4

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0072f230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072f230.md) [`00731864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731864.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`00801f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801f90.md) [`008045d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00804/008045d0.md)
- 新版 呼出元 2件 [`0072f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072f5e0.md) [`00731c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731c14.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008015e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008015e8.md) [`00802ef4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802ef4.md) [`00805534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00805/00805534.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.57% / 新版 98.57%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00730ffc",
      "value": [
        "leaf",
        "ram:805534:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00730c4c",
      "value": [
        "leaf",
        "ram:8045d0:8"
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
      "00730ffc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008045d0"
      ]
    ],
    [
      "00731020",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[39]"
      ]
    ],
    [
      "0073107c",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[39]"
      ]
    ]
  ],
  "added": [
    [
      "00730ffc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00805534"
      ]
    ],
    [
      "00731020",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[31]"
      ]
    ],
    [
      "0073107c",
      "DATA",
      [
        "storage",
        "0039b7c8",
        null,
        "byte[31]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00730c4c ["INT_ADD", "register:40f0:8", ["const:730c4c:8", "const:4:8"]]
- 00730c4c ["CALL", null, ["ram:8045d0:8"]]
+ 00730ffc ["INT_ADD", "register:40f0:8", ["const:730ffc:8", "const:4:8"]]
+ 00730ffc ["CALL", null, ["ram:805534:8"]]
- 00730c34 ["INT_ADD", "register:40f0:8", ["const:730c34:8", "const:4:8"]]
- 00730c34 ["CALL", null, ["callee:00801334:8"]]
+ 00730fe4 ["INT_ADD", "register:40f0:8", ["const:730fe4:8", "const:4:8"]]
+ 00730fe4 ["CALL", null, ["callee:00801334:8"]]
- 00730c40 ["INT_ADD", "register:40f0:8", ["const:730c40:8", "const:4:8"]]
- 00730c40 ["CALL", null, ["callee:008015e8:8"]]
+ 00730ff0 ["INT_ADD", "register:40f0:8", ["const:730ff0:8", "const:4:8"]]
+ 00730ff0 ["CALL", null, ["callee:008015e8:8"]]
~~~


<a id="compare-221037422d542150b21e66be51c913e5"></a>

### [`007319d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/007319d8.md) → [`00731d88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731d88.md) FUN_00731d88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0072ca68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072ca68.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0072ce18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072ce18.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731d94",
      "incomplete_value": false,
      "site": "00731d98",
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
      "definition_site": "007319e4",
      "incomplete_value": false,
      "site": "007319e8",
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
      "00731d94",
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
      "00731d94",
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
- 007319e8 ["INT_ADD", "register:40f0:8", ["const:7319e8:8", "const:4:8"]]
- 007319e8 ["CALL", null, ["callee:0043bad8:8"]]
+ 00731d98 ["INT_ADD", "register:40f0:8", ["const:731d98:8", "const:4:8"]]
+ 00731d98 ["CALL", null, ["callee:0043bad8:8"]]
- 007319e0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731d90 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007319e4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007319e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007319e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007319e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731d94 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731d94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731d94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731d94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-aaf261e3c0f5baee8d3dbf1e1446a213"></a>

### [`007319ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/007319ec.md) → [`00731d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731d9c.md) FUN_00731d9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0072ca68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072ca68.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0072ce18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072ce18.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731da8",
      "incomplete_value": false,
      "site": "00731dac",
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
      "definition_site": "007319f8",
      "incomplete_value": false,
      "site": "007319fc",
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
      "00731da8",
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
      "00731da8",
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
- 007319fc ["INT_ADD", "register:40f0:8", ["const:7319fc:8", "const:4:8"]]
- 007319fc ["CALL", null, ["callee:0043bad8:8"]]
+ 00731dac ["INT_ADD", "register:40f0:8", ["const:731dac:8", "const:4:8"]]
+ 00731dac ["CALL", null, ["callee:0043bad8:8"]]
- 007319f4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731da4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007319f8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007319f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007319f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007319f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731da8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731da8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731da8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731da8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e0711cb18077b9040f1169806a10e4cd"></a>

### [`00731ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731ac4.md) → [`00731e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731e74.md) FUN_00731e74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0072ca68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072ca68.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0072ce18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072ce18.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731e80",
      "incomplete_value": false,
      "site": "00731e84",
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
      "definition_site": "00731ad0",
      "incomplete_value": false,
      "site": "00731ad4",
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
      "00731e80",
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
      "00731e80",
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
- 00731ad4 ["INT_ADD", "register:40f0:8", ["const:731ad4:8", "const:4:8"]]
- 00731ad4 ["CALL", null, ["callee:0043bad8:8"]]
+ 00731e84 ["INT_ADD", "register:40f0:8", ["const:731e84:8", "const:4:8"]]
+ 00731e84 ["CALL", null, ["callee:0043bad8:8"]]
- 00731acc ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731e7c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00731ad0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00731ad0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00731ad0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00731ad0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731e80 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731e80 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731e80 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731e80 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c926c0dccb379f47db45070786c894aa"></a>

### [`00731b28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731b28.md) → [`00731ed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731ed8.md) FUN_00731ed8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0072ed80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072e/0072ed80.md) [`0072f230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072f230.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`0072f130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072f130.md) [`0072f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072f5e0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731ee4",
      "incomplete_value": false,
      "site": "00731ee8",
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
      "definition_site": "00731b34",
      "incomplete_value": false,
      "site": "00731b38",
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
      "00731ee4",
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
      "00731ee4",
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
- 00731b38 ["INT_ADD", "register:40f0:8", ["const:731b38:8", "const:4:8"]]
- 00731b38 ["CALL", null, ["callee:0043bad8:8"]]
+ 00731ee8 ["INT_ADD", "register:40f0:8", ["const:731ee8:8", "const:4:8"]]
+ 00731ee8 ["CALL", null, ["callee:0043bad8:8"]]
- 00731b30 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731ee0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00731b34 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00731b34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00731b34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00731b34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731ee4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731ee4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731ee4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731ee4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


