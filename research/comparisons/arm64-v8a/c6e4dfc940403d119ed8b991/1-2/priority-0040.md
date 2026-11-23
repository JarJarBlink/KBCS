# v16.0.2 → v16.0.3 · 最優先の変更候補 (40)

[一覧の目次](README.md)

<a id="compare-7eca7c66ce6b61cad4931e7fe5d4afba"></a>

### [`00731b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731b3c.md) → [`00731eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731eec.md) FUN_00731eec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00730d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730d54.md) [`00730dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730dd4.md) [`00731380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731380.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`00731104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731104.md) [`00731184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731184.md) [`00731730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731730.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731ef8",
      "incomplete_value": false,
      "site": "00731efc",
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
      "definition_site": "00731b48",
      "incomplete_value": false,
      "site": "00731b4c",
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
      "00731ef8",
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
      "00731ef8",
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
- 00731b4c ["INT_ADD", "register:40f0:8", ["const:731b4c:8", "const:4:8"]]
- 00731b4c ["CALL", null, ["callee:00442c90:8"]]
+ 00731efc ["INT_ADD", "register:40f0:8", ["const:731efc:8", "const:4:8"]]
+ 00731efc ["CALL", null, ["callee:00442c90:8"]]
- 00731b44 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731ef4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00731b48 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00731b48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00731b48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00731b48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731ef8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731ef8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731ef8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731ef8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1537a89381baff081713493074e7cb27"></a>

### [`00731b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731b50.md) → [`00731f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731f00.md) FUN_00731f00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`0072c904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c904.md) [`0072c96c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c96c.md) [`0072f230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072f230.md) [`0072fb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072f/0072fb60.md) [`007303cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/007303cc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 7件 [`0072ccb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072ccb4.md) [`0072cd1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072cd1c.md) [`0072f5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072f5e0.md) [`0072ff10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072f/0072ff10.md) [`0073077c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00730/0073077c.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731f0c",
      "incomplete_value": false,
      "site": "00731f10",
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
      "definition_site": "00731b5c",
      "incomplete_value": false,
      "site": "00731b60",
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
      "00731f0c",
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
      "00731f0c",
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
- 00731b60 ["INT_ADD", "register:40f0:8", ["const:731b60:8", "const:4:8"]]
- 00731b60 ["CALL", null, ["callee:00442c90:8"]]
+ 00731f10 ["INT_ADD", "register:40f0:8", ["const:731f10:8", "const:4:8"]]
+ 00731f10 ["CALL", null, ["callee:00442c90:8"]]
- 00731b58 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731f08 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00731b5c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00731b5c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00731b5c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00731b5c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731f0c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731f0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731f0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731f0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-80456e9f4188d43db866a505efea07b0"></a>

### [`00731b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731b64.md) → [`00731f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731f14.md) FUN_00731f14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007303cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/007303cc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`0073077c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00730/0073077c.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731f20",
      "incomplete_value": false,
      "site": "00731f24",
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
      "definition_site": "00731b70",
      "incomplete_value": false,
      "site": "00731b74",
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
      "00731f20",
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
      "00731f20",
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
- 00731b74 ["INT_ADD", "register:40f0:8", ["const:731b74:8", "const:4:8"]]
- 00731b74 ["CALL", null, ["callee:00442c90:8"]]
+ 00731f24 ["INT_ADD", "register:40f0:8", ["const:731f24:8", "const:4:8"]]
+ 00731f24 ["CALL", null, ["callee:00442c90:8"]]
- 00731b6c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731f1c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00731b70 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00731b70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00731b70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00731b70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731f20 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731f20 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731f20 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731f20 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bf23d1412280f18b268d8a69cd90c075"></a>

### [`00731b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731b78.md) → [`00731f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731f28.md) FUN_00731f28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007303cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/007303cc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`0073077c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00730/0073077c.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00731f34",
      "incomplete_value": false,
      "site": "00731f38",
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
      "definition_site": "00731b84",
      "incomplete_value": false,
      "site": "00731b88",
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
      "00731f34",
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
      "00731f34",
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
- 00731b88 ["INT_ADD", "register:40f0:8", ["const:731b88:8", "const:4:8"]]
- 00731b88 ["CALL", null, ["callee:00442c90:8"]]
+ 00731f38 ["INT_ADD", "register:40f0:8", ["const:731f38:8", "const:4:8"]]
+ 00731f38 ["CALL", null, ["callee:00442c90:8"]]
- 00731b80 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00731f30 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00731b84 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00731b84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00731b84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00731b84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00731f34 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00731f34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00731f34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00731f34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5516682bfedb3092d291466dda7c71bc"></a>

### [`00731b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731b8c.md) → [`00731f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731f3c.md) _INIT_124

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00731f78",
      "incomplete_value": true,
      "site": "00731f94",
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
      "definition_site": "00731bc8",
      "incomplete_value": true,
      "site": "00731be4",
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
      "definition_site": "00731f9c",
      "incomplete_value": true,
      "site": "00731fb8",
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
      "definition_site": "00731bec",
      "incomplete_value": true,
      "site": "00731c08",
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
      "definition_site": "00731fbc",
      "incomplete_value": true,
      "site": "00731fd8",
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
      "definition_site": "00731c0c",
      "incomplete_value": true,
      "site": "00731c28",
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
      "00731f78",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00731f9c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00731fbc",
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
      "00731f78",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00731f9c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00731fbc",
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
- 00731dc0 ["INT_ADD", "register:40f0:8", ["const:731dc0:8", "const:4:8"]]
- 00731dc0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00732170 ["INT_ADD", "register:40f0:8", ["const:732170:8", "const:4:8"]]
+ 00732170 ["CALL", null, ["callee:00c58ed0:8"]]
- 00731bb4 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00731f64 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 00731bb8 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 00731bb8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00731bb8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00731bb8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00731f68 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00731f68 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00731f68 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00731f68 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-98ca74a947111bc129b9ad8b282608e3"></a>

### [`00731f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731f1c.md) → [`007322cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00732/007322cc.md) FUN_007322cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00935704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935704.md) · 呼出先 4件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00acbac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acb/00acbac8.md) [`00acbf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acb/00acbf88.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`009366b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/009366b0.md) · 呼出先 4件 [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`00accabc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acc/00accabc.md) [`00accf7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acc/00accf7c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007322f8",
      "incomplete_value": false,
      "site": "00732300",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00731f48",
      "incomplete_value": false,
      "site": "00731f50",
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
            "const:b00:8"
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
      "00732300",
      "DATA",
      [
        "storage",
        "00c77b00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00732300",
      "DATA",
      [
        "storage",
        "00c78ad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00731f40 ["INT_ADD", "register:40f0:8", ["const:731f40:8", "const:4:8"]]
- 00731f40 ["CALL", null, ["callee:00accabc:8"]]
+ 007322f0 ["INT_ADD", "register:40f0:8", ["const:7322f0:8", "const:4:8"]]
+ 007322f0 ["CALL", null, ["callee:00accabc:8"]]
- 00731f44 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007322f4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00731f48 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 00731f48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00731f48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00731f48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007322f8 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007322f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007322f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007322f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-346a3531ec7d06fc77322ee050aa5fc6"></a>

### [`00731fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731fc4.md) → [`00732374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00732/00732374.md) FUN_00732374

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00acbaf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acb/00acbaf8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00accaec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acc/00accaec.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0073238c",
      "incomplete_value": false,
      "site": "00732390",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00731fdc",
      "incomplete_value": false,
      "site": "00731fe0",
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
            "const:b00:8"
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
      "00732390",
      "DATA",
      [
        "storage",
        "00c77b00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00732390",
      "DATA",
      [
        "storage",
        "00c78ad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00731fd8 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00732388 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00731fdc ["COPY", "tmp:0:8", ["const:b00:8"]]
- 00731fdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00731fdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00731fdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0073238c ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0073238c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0073238c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0073238c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00731ff0 ["INT_ADD", "register:40f0:8", ["const:731ff0:8", "const:4:8"]]
- 00731ff0 ["CALL", null, ["callee:00c54d90:8"]]
+ 007323a0 ["INT_ADD", "register:40f0:8", ["const:7323a0:8", "const:4:8"]]
+ 007323a0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-f8176f2716515b472b8841b51ec9f8e0"></a>

### [`00732020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732020.md) → [`007323d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00732/007323d0.md) FUN_007323d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00acbaf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acb/00acbaf8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00accaec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acc/00accaec.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007323e8",
      "incomplete_value": false,
      "site": "007323ec",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00732038",
      "incomplete_value": false,
      "site": "0073203c",
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
            "const:b00:8"
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
      "007323ec",
      "DATA",
      [
        "storage",
        "00c77b00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007323ec",
      "DATA",
      [
        "storage",
        "00c78ad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00732034 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007323e4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00732038 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 00732038 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00732038 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00732038 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007323e8 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 007323e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007323e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007323e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0073204c ["INT_ADD", "register:40f0:8", ["const:73204c:8", "const:4:8"]]
- 0073204c ["CALL", null, ["callee:00c54d90:8"]]
+ 007323fc ["INT_ADD", "register:40f0:8", ["const:7323fc:8", "const:4:8"]]
+ 007323fc ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-1a364bef0e485c3daf43c35f6c62de93"></a>

### [`00732134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732134.md) → [`007324e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00732/007324e4.md) _INIT_125

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
      "definition_site": "00732520",
      "incomplete_value": true,
      "site": "0073253c",
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
      "definition_site": "00732170",
      "incomplete_value": true,
      "site": "0073218c",
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
      "definition_site": "00732544",
      "incomplete_value": true,
      "site": "00732560",
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
      "definition_site": "00732194",
      "incomplete_value": true,
      "site": "007321b0",
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
      "definition_site": "00732564",
      "incomplete_value": true,
      "site": "00732580",
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
      "definition_site": "007321b4",
      "incomplete_value": true,
      "site": "007321d0",
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
      "00732520",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00732544",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00732564",
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
      "00732520",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00732544",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00732564",
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
- 00732294 ["INT_ADD", "register:40f0:8", ["const:732294:8", "const:4:8"]]
- 00732294 ["CALL", null, ["callee:0043bb58:8"]]
+ 00732644 ["INT_ADD", "register:40f0:8", ["const:732644:8", "const:4:8"]]
+ 00732644 ["CALL", null, ["callee:0043bb58:8"]]
- 00732368 ["INT_ADD", "register:40f0:8", ["const:732368:8", "const:4:8"]]
- 00732368 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00732718 ["INT_ADD", "register:40f0:8", ["const:732718:8", "const:4:8"]]
+ 00732718 ["CALL", null, ["callee:00c58ed0:8"]]
- 0073215c ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0073250c ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-b2c80e6966e7037d3a2fa14a4745ef4c"></a>

### [`007324c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/007324c4.md) → [`00732874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00732/00732874.md) _INIT_126

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.14% / 新版 88.14%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00732914",
      "incomplete_value": true,
      "site": "0073292c",
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
      "definition_site": "00732564",
      "incomplete_value": true,
      "site": "0073257c",
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
      "definition_site": "00732930",
      "incomplete_value": true,
      "site": "0073294c",
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
      "definition_site": "00732580",
      "incomplete_value": true,
      "site": "0073259c",
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
    "kind": "store_value",
    "new": {
      "definition_site": "00732950",
      "incomplete_value": true,
      "site": "0073296c",
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
      "definition_site": "007325a0",
      "incomplete_value": true,
      "site": "007325bc",
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
      "007328b0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007328d4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007328f4",
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
      "007328b0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "007328d4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "007328f4",
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
- 007326f8 ["INT_ADD", "register:40f0:8", ["const:7326f8:8", "const:4:8"]]
- 007326f8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00732aa8 ["INT_ADD", "register:40f0:8", ["const:732aa8:8", "const:4:8"]]
+ 00732aa8 ["CALL", null, ["callee:00c58ed0:8"]]
- 007324ec ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0073289c ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 007324f0 ["COPY", "tmp:0:8", ["const:e48:8"]]
- 007324f0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007324f0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007324f0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 007328a0 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 007328a0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 007328a0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 007328a0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-9cc4bdc55ba7973352affd669a9ad25c"></a>

### [`00732d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732d08.md) → [`007330b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/007330b8.md) FUN_007330b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007330f8",
      "incomplete_value": false,
      "site": "007330fc",
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
      "definition_site": "00732d48",
      "incomplete_value": false,
      "site": "00732d4c",
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
      "007330f8",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007330f8",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00732d4c ["INT_ADD", "register:40f0:8", ["const:732d4c:8", "const:4:8"]]
- 00732d4c ["CALL", null, ["callee:00442c90:8"]]
+ 007330fc ["INT_ADD", "register:40f0:8", ["const:7330fc:8", "const:4:8"]]
+ 007330fc ["CALL", null, ["callee:00442c90:8"]]
- 00732d48 ["COPY", "tmp:0:8", ["const:da5:8"]]
- 00732d48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00732d48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00732d48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007330f8 ["COPY", "tmp:0:8", ["const:e83:8"]]
+ 007330f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007330f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007330f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ebf38717284bb2d028f282c578f4880f"></a>

### [`00732d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732d50.md) → [`00733100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733100.md) FUN_00733100

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00735d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/00735d34.md) · 呼出先 11件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00733760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733760.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md)
- 新版 呼出元 1件 [`007360e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00736/007360e4.md) · 呼出先 11件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00733b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733b10.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a34c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a34c64.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.58% / 新版 96.58%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00733280",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00732ed0",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "00733148",
      "READ",
      [
        "storage",
        "00ca8208",
        null,
        "undefined8"
      ]
    ],
    [
      "007331b8",
      "READ",
      [
        "storage",
        "00ca8208",
        null,
        "undefined8"
      ]
    ],
    [
      "00733280",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00733148",
      "READ",
      [
        "storage",
        "00ca91c8",
        null,
        "undefined8"
      ]
    ],
    [
      "007331b8",
      "READ",
      [
        "storage",
        "00ca91c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00733280",
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
- 00732ed0 ["INT_ADD", "register:40f0:8", ["const:732ed0:8", "const:4:8"]]
- 00732ed0 ["CALL", null, ["ram:48cd38:8"]]
+ 00733280 ["INT_ADD", "register:40f0:8", ["const:733280:8", "const:4:8"]]
+ 00733280 ["CALL", null, ["ram:48d058:8"]]
- 00732d74 ["INT_ADD", "register:40f0:8", ["const:732d74:8", "const:4:8"]]
- 00732d74 ["CALL", null, ["callee:00a388c4:8"]]
+ 00733124 ["INT_ADD", "register:40f0:8", ["const:733124:8", "const:4:8"]]
+ 00733124 ["CALL", null, ["callee:00a388c4:8"]]
- 00732d80 ["INT_ADD", "register:40f0:8", ["const:732d80:8", "const:4:8"]]
- 00732d80 ["CALL", null, ["callee:00a388bc:8"]]
+ 00733130 ["INT_ADD", "register:40f0:8", ["const:733130:8", "const:4:8"]]
+ 00733130 ["CALL", null, ["callee:00a388bc:8"]]
~~~


<a id="compare-5b3a6fc62313d868dcaf3ff3c72b978d"></a>

### [`00732f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732f24.md) → [`007332d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/007332d4.md) FUN_007332d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 11件 [`00734420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/00734420.md) [`007359bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/007359bc.md) [`00735d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/00735d34.md) [`00736074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/00736074.md) [`007373a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/007373a4.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0073318c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/0073318c.md) [`00733418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733418.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 11件 [`007347d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/007347d0.md) [`00735d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/00735d6c.md) [`007360e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00736/007360e4.md) [`00736424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00736/00736424.md) [`00737754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737754.md) · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`0073353c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/0073353c.md) [`007337c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/007337c8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

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
      "site": "00733450",
      "value": [
        "leaf",
        "ram:7337c8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007330a0",
      "value": [
        "leaf",
        "ram:733418:8"
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
      "00733314",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "byte[23]"
      ]
    ],
    [
      "00733318",
      "DATA",
      [
        "storage",
        "0039bac0",
        null,
        "byte[23]"
      ]
    ],
    [
      "00733450",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00733418"
      ]
    ]
  ],
  "added": [
    [
      "00733314",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "byte[43]"
      ]
    ],
    [
      "00733318",
      "DATA",
      [
        "storage",
        "0039bac0",
        null,
        "byte[43]"
      ]
    ],
    [
      "00733450",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007337c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007330a0 ["INT_ADD", "register:40f0:8", ["const:7330a0:8", "const:4:8"]]
- 007330a0 ["CALL", null, ["ram:733418:8"]]
+ 00733450 ["INT_ADD", "register:40f0:8", ["const:733450:8", "const:4:8"]]
+ 00733450 ["CALL", null, ["ram:7337c8:8"]]
- 00732f5c ["INT_ADD", "register:40f0:8", ["const:732f5c:8", "const:4:8"]]
- 00732f5c ["CALL", null, ["callee:008524fc:8"]]
+ 0073330c ["INT_ADD", "register:40f0:8", ["const:73330c:8", "const:4:8"]]
+ 0073330c ["CALL", null, ["callee:008524fc:8"]]
- 00732f74 ["INT_ADD", "register:40f0:8", ["const:732f74:8", "const:4:8"]]
- 00732f74 ["CALL", null, ["callee:0048d1e4:8"]]
+ 00733324 ["INT_ADD", "register:40f0:8", ["const:733324:8", "const:4:8"]]
+ 00733324 ["CALL", null, ["callee:0048d1e4:8"]]
~~~


<a id="compare-6e9b6b87c4f2558e90358ec636ffd556"></a>

### [`00733b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733b50.md) → [`00733f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733f00.md) FUN_00733f00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048e0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e0f8.md) [`00733ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733ebc.md) [`00733f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733f9c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048e418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048e418.md) [`0073426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/0073426c.md) [`0073434c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/0073434c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.35% / 新版 96.35%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00733f8c",
      "incomplete_value": true,
      "site": "00733f98",
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
                "const:ca9000:8"
              ],
              [
                "leaf",
                "const:1c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00733bdc",
      "incomplete_value": true,
      "site": "00733be8",
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
                "const:ca8000:8"
              ],
              [
                "leaf",
                "const:208:8"
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
    "new": {
      "definition_site": "00733f94",
      "incomplete_value": true,
      "site": "00733f98",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00733be4",
      "incomplete_value": true,
      "site": "00733be8",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:2:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00733fc0",
      "incomplete_value": true,
      "site": "00733fcc",
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
            "const:14d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00733c10",
      "incomplete_value": true,
      "site": "00733c1c",
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
            "const:80:8"
          ]
        ]
      ]
    },
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
      "00733f8c",
      "READ",
      [
        "storage",
        "00ca8208",
        null,
        "undefined8"
      ]
    ],
    [
      "00733f8c",
      "READ",
      [
        "storage",
        "00ca8210",
        null,
        "undefined8"
      ]
    ],
    [
      "00733f9c",
      "READ",
      [
        "storage",
        "00ca8210",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00733f8c",
      "READ",
      [
        "storage",
        "00ca91c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00733f8c",
      "READ",
      [
        "storage",
        "00ca91d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00733f9c",
      "READ",
      [
        "storage",
        "00ca91d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00733be8 ["INT_ADD", "register:40f0:8", ["const:733be8:8", "const:4:8"]]
- 00733be8 ["CALL", null, ["callee:00c594f0:8"]]
+ 00733f98 ["INT_ADD", "register:40f0:8", ["const:733f98:8", "const:4:8"]]
+ 00733f98 ["CALL", null, ["callee:00c594f0:8"]]
- 00733c1c ["INT_ADD", "register:40f0:8", ["const:733c1c:8", "const:4:8"]]
- 00733c1c ["CALL", null, ["callee:00c59000:8"]]
+ 00733fcc ["INT_ADD", "register:40f0:8", ["const:733fcc:8", "const:4:8"]]
+ 00733fcc ["CALL", null, ["callee:00c59000:8"]]
- 00733cdc ["INT_ADD", "register:40f0:8", ["const:733cdc:8", "const:4:8"]]
- 00733cdc ["CALL", null, ["callee:00c59000:8"]]
+ 0073408c ["INT_ADD", "register:40f0:8", ["const:73408c:8", "const:4:8"]]
+ 0073408c ["CALL", null, ["callee:00c59000:8"]]
~~~


<a id="compare-e8927d879651b9712983334c47a98c6e"></a>

### [`00733f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733f9c.md) → [`0073434c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/0073434c.md) FUN_0073434c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00733b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733b50.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006393d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006393d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00733f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733f00.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00639780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639780.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.67% / 新版 98.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00734424",
      "incomplete_value": false,
      "site": "00734440",
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
      "definition_site": "00734074",
      "incomplete_value": false,
      "site": "00734090",
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
      "00734424",
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
      "00734424",
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
- 00734090 ["INT_ADD", "register:40f0:8", ["const:734090:8", "const:4:8"]]
- 00734090 ["CALL", null, ["callee:00639780:8"]]
+ 00734440 ["INT_ADD", "register:40f0:8", ["const:734440:8", "const:4:8"]]
+ 00734440 ["CALL", null, ["callee:00639780:8"]]
- 0073401c ["INT_ADD", "register:40f0:8", ["const:73401c:8", "const:4:8"]]
- 0073401c ["CALL", null, ["callee:00c58f30:8"]]
+ 007343cc ["INT_ADD", "register:40f0:8", ["const:7343cc:8", "const:4:8"]]
+ 007343cc ["CALL", null, ["callee:00c58f30:8"]]
- 00734060 ["INT_ADD", "register:40f0:8", ["const:734060:8", "const:4:8"]]
- 00734060 ["CALL", null, ["callee:0043bf04:8"]]
+ 00734410 ["INT_ADD", "register:40f0:8", ["const:734410:8", "const:4:8"]]
+ 00734410 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-d730ad11f55cc1f4dddc8e947f3eeb12"></a>

### [`007340c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007340c8.md) → [`00734478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/00734478.md) FUN_00734478

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`0073318c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/0073318c.md) [`00737930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737930.md) [`00737bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737bbc.md) [`007394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007394fc.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`007341d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007341d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`0073353c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/0073353c.md) [`00737ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737ce0.md) [`00737f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737f6c.md) [`007398ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/007398ac.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00734584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/00734584.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073449c",
      "incomplete_value": true,
      "site": "007344b4",
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
                "const:51c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007340ec",
      "incomplete_value": true,
      "site": "00734104",
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
                "const:451:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007344ec",
      "incomplete_value": false,
      "site": "007344f8",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073413c",
      "incomplete_value": false,
      "site": "00734148",
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
            "const:580:8"
          ]
        ]
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
      "0073449c",
      "READ",
      [
        "storage",
        "002a3451",
        null,
        "string"
      ]
    ],
    [
      "007344ec",
      "PARAM",
      [
        "storage",
        "002a7580",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0073449c",
      "READ",
      [
        "storage",
        "002a351c",
        null,
        "string"
      ]
    ],
    [
      "007344ec",
      "PARAM",
      [
        "storage",
        "002a76d8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00734148 ["INT_ADD", "register:40f0:8", ["const:734148:8", "const:4:8"]]
- 00734148 ["CALL", null, ["callee:00734584:8"]]
+ 007344f8 ["INT_ADD", "register:40f0:8", ["const:7344f8:8", "const:4:8"]]
+ 007344f8 ["CALL", null, ["callee:00734584:8"]]
- 007340e0 ["COPY", "tmp:0:8", ["const:451:8"]]
- 007340e0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007340e0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007340e0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00734490 ["COPY", "tmp:0:8", ["const:51c:8"]]
+ 00734490 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00734490 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00734490 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00734130 ["INT_ADD", "register:40f0:8", ["const:734130:8", "const:4:8"]]
- 00734130 ["CALL", null, ["callee:0043be80:8"]]
+ 007344e0 ["INT_ADD", "register:40f0:8", ["const:7344e0:8", "const:4:8"]]
+ 007344e0 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-8aae51fff896b5759a12afb1397051fe"></a>

### [`007350d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/007350d4.md) → [`00735484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/00735484.md) FUN_00735484

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007354f4",
      "incomplete_value": false,
      "site": "007354f8",
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
      "definition_site": "00735144",
      "incomplete_value": false,
      "site": "00735148",
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
      "007354f4",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007354f4",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00735148 ["INT_ADD", "register:40f0:8", ["const:735148:8", "const:4:8"]]
- 00735148 ["CALL", null, ["callee:00442c90:8"]]
+ 007354f8 ["INT_ADD", "register:40f0:8", ["const:7354f8:8", "const:4:8"]]
+ 007354f8 ["CALL", null, ["callee:00442c90:8"]]
- 0073510c ["INT_ADD", "register:40f0:8", ["const:73510c:8", "const:4:8"]]
- 0073510c ["CALL", null, ["callee:005c1b8c:8"]]
+ 007354bc ["INT_ADD", "register:40f0:8", ["const:7354bc:8", "const:4:8"]]
+ 007354bc ["CALL", null, ["callee:005c1b8c:8"]]
- 00735118 ["INT_ADD", "register:40f0:8", ["const:735118:8", "const:4:8"]]
- 00735118 ["CALL", null, ["callee:005c1b8c:8"]]
+ 007354c8 ["INT_ADD", "register:40f0:8", ["const:7354c8:8", "const:4:8"]]
+ 007354c8 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-5e9bb4ffddd524e4778a971c3fa9f577"></a>

### [`0073514c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/0073514c.md) → [`007354fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/007354fc.md) FUN_007354fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.89% / 新版 95.89%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00735548",
      "incomplete_value": false,
      "site": "00735550",
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
      "definition_site": "00735198",
      "incomplete_value": false,
      "site": "007351a0",
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
      "definition_site": "00735584",
      "incomplete_value": true,
      "site": "00735584",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:e0f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007351d4",
      "incomplete_value": true,
      "site": "007351d4",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:d31:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00735970",
      "incomplete_value": true,
      "site": "00735974",
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
      "definition_site": "007355c0",
      "incomplete_value": true,
      "site": "007355c4",
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
    "ordinal": 67,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00735550",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0073556c",
      "READ",
      [
        "storage",
        "002bdd31",
        null,
        "string"
      ]
    ],
    [
      "00735960",
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
      "00735550",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0073556c",
      "READ",
      [
        "storage",
        "002bde0f",
        null,
        "string"
      ]
    ],
    [
      "00735960",
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
- 00735214 ["INT_ADD", "register:40f0:8", ["const:735214:8", "const:4:8"]]
- 00735214 ["CALL", null, ["callee:004884d8:8"]]
+ 007355c4 ["INT_ADD", "register:40f0:8", ["const:7355c4:8", "const:4:8"]]
+ 007355c4 ["CALL", null, ["callee:004884d8:8"]]
- 00735184 ["INT_ADD", "register:40f0:8", ["const:735184:8", "const:4:8"]]
- 00735184 ["CALL", null, ["callee:00488180:8"]]
+ 00735534 ["INT_ADD", "register:40f0:8", ["const:735534:8", "const:4:8"]]
+ 00735534 ["CALL", null, ["callee:00488180:8"]]
- 00735194 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00735544 ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-bf6e8a4224b319f3ff4260ac3c55a998"></a>

### [`00735fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/00735fa4.md) → [`00736354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00736/00736354.md) FUN_00736354

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 4件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00733760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733760.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 4件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00733b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733b10.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

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
      "site": "007363f0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00736040",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "007363f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "007363f0",
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
- 00736040 ["INT_ADD", "register:40f0:8", ["const:736040:8", "const:4:8"]]
- 00736040 ["CALL", null, ["ram:48cd38:8"]]
+ 007363f0 ["INT_ADD", "register:40f0:8", ["const:7363f0:8", "const:4:8"]]
+ 007363f0 ["CALL", null, ["ram:48d058:8"]]
- 00735ff4 ["INT_ADD", "register:40f0:8", ["const:735ff4:8", "const:4:8"]]
- 00735ff4 ["CALL", null, ["callee:008524fc:8"]]
+ 007363a4 ["INT_ADD", "register:40f0:8", ["const:7363a4:8", "const:4:8"]]
+ 007363a4 ["CALL", null, ["callee:008524fc:8"]]
- 00736000 ["INT_ADD", "register:40f0:8", ["const:736000:8", "const:4:8"]]
- 00736000 ["CALL", null, ["callee:00733b10:8"]]
+ 007363b0 ["INT_ADD", "register:40f0:8", ["const:7363b0:8", "const:4:8"]]
+ 007363b0 ["CALL", null, ["callee:00733b10:8"]]
~~~


<a id="compare-313b07451f4c29652fbb94c3d60e6f57"></a>

### [`00736c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/00736c74.md) → [`00737024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737024.md) FUN_00737024

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00738be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738be0.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00733760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733760.md) [`00735708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/00735708.md) [`0073afb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073afb4.md)
- 新版 呼出元 1件 [`00738f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738f90.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00733b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733b10.md) [`00735ab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/00735ab8.md) [`0073b364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b364.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.16% / 新版 98.16%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00737284",
      "incomplete_value": true,
      "site": "00737298",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:aaa:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00736ed4",
      "incomplete_value": true,
      "site": "00736ee8",
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
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:9dd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073729c",
      "incomplete_value": true,
      "site": "0073729c",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00736eec",
      "incomplete_value": true,
      "site": "00736eec",
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007370cc",
      "READ",
      [
        "storage",
        "00c9b658",
        null,
        "pointer"
      ]
    ],
    [
      "007370d4",
      "READ",
      [
        "storage",
        "00ca8208",
        null,
        "undefined8"
      ]
    ],
    [
      "00737284",
      "READ",
      [
        "storage",
        "002ad9dd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007370cc",
      "READ",
      [
        "storage",
        "00c9c628",
        null,
        "pointer"
      ]
    ],
    [
      "007370d4",
      "READ",
      [
        "storage",
        "00ca91c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00737284",
      "READ",
      [
        "storage",
        "002adaaa",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00736d14 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 007370c4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00736d1c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:658:8"]]
- 00736d1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 007370cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:628:8"]]
+ 007370cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00736d64 ["INT_ADD", "register:40f0:8", ["const:736d64:8", "const:4:8"]]
- 00736d64 ["CALL", null, ["callee:00733b10:8"]]
+ 00737114 ["INT_ADD", "register:40f0:8", ["const:737114:8", "const:4:8"]]
+ 00737114 ["CALL", null, ["callee:00733b10:8"]]
~~~


<a id="compare-f7ea38e8bf358857424c65e2fc474638"></a>

### [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md) → [`0073807c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073807c.md) FUN_0073807c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`00738db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738db8.md) [`00739080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739080.md) [`00752644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/00752644.md) [`00772938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00772/00772938.md) [`00799cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00799/00799cec.md) · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0073af78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af78.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 10件 [`00739168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739168.md) [`00739430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739430.md) [`007529f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/007529f4.md) [`00772d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00772/00772d14.md) [`0079a0c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079a0c8.md) · 呼出先 7件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0073b328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b328.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.31% / 新版 98.31%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007380c8",
      "incomplete_value": false,
      "site": "007380cc",
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
      "definition_site": "00737d18",
      "incomplete_value": false,
      "site": "00737d1c",
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
      "007380c8",
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
      "007380c8",
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
- 00737d1c ["INT_ADD", "register:40f0:8", ["const:737d1c:8", "const:4:8"]]
- 00737d1c ["CALL", null, ["callee:00442c90:8"]]
+ 007380cc ["INT_ADD", "register:40f0:8", ["const:7380cc:8", "const:4:8"]]
+ 007380cc ["CALL", null, ["callee:00442c90:8"]]
- 00737ce4 ["INT_ADD", "register:40f0:8", ["const:737ce4:8", "const:4:8"]]
- 00737ce4 ["CALL", null, ["callee:008524fc:8"]]
+ 00738094 ["INT_ADD", "register:40f0:8", ["const:738094:8", "const:4:8"]]
+ 00738094 ["CALL", null, ["callee:008524fc:8"]]
- 00737d18 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00737d18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00737d18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00737d18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007380c8 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 007380c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007380c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007380c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ee30dfb6a7b2f5c2f7f7ddaa72f98a21"></a>

### [`0073813c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/0073813c.md) → [`007384ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/007384ec.md) FUN_007384ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`0048080c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048080c.md) [`006393d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006393d0.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md) [`00480b2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480b2c.md) [`00639780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639780.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00738680",
      "incomplete_value": false,
      "site": "00738684",
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
      "definition_site": "007382d0",
      "incomplete_value": false,
      "site": "007382d4",
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
    "ordinal": 8,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00738680",
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
      "00738680",
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
- 007382d4 ["INT_ADD", "register:40f0:8", ["const:7382d4:8", "const:4:8"]]
- 007382d4 ["CALL", null, ["callee:00639780:8"]]
+ 00738684 ["INT_ADD", "register:40f0:8", ["const:738684:8", "const:4:8"]]
+ 00738684 ["CALL", null, ["callee:00639780:8"]]
- 00738184 ["INT_ADD", "register:40f0:8", ["const:738184:8", "const:4:8"]]
- 00738184 ["CALL", null, ["callee:0073b250:8"]]
+ 00738534 ["INT_ADD", "register:40f0:8", ["const:738534:8", "const:4:8"]]
+ 00738534 ["CALL", null, ["callee:0073b250:8"]]
- 00738194 ["INT_ADD", "register:40f0:8", ["const:738194:8", "const:4:8"]]
- 00738194 ["CALL", null, ["callee:00480750:8"]]
+ 00738544 ["INT_ADD", "register:40f0:8", ["const:738544:8", "const:4:8"]]
+ 00738544 ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-8c848ea77e2e1322ea9311bd215c3954"></a>

### [`00738db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738db8.md) → [`00739168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739168.md) FUN_00739168

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`0073807c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073807c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.33% / 新版 99.33%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007393b4",
      "incomplete_value": false,
      "site": "007393b8",
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
      "definition_site": "00739004",
      "incomplete_value": false,
      "site": "00739008",
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
      "007393b4",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007393b4",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00739008 ["INT_ADD", "register:40f0:8", ["const:739008:8", "const:4:8"]]
- 00739008 ["CALL", null, ["callee:00442c90:8"]]
+ 007393b8 ["INT_ADD", "register:40f0:8", ["const:7393b8:8", "const:4:8"]]
+ 007393b8 ["CALL", null, ["callee:00442c90:8"]]
- 00738e5c ["INT_ADD", "register:40f0:8", ["const:738e5c:8", "const:4:8"]]
- 00738e5c ["CALL", null, ["callee:0073b43c:8"]]
+ 0073920c ["INT_ADD", "register:40f0:8", ["const:73920c:8", "const:4:8"]]
+ 0073920c ["CALL", null, ["callee:0073b43c:8"]]
- 00738eb0 ["INT_ADD", "register:40f0:8", ["const:738eb0:8", "const:4:8"]]
- 00738eb0 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00739260 ["INT_ADD", "register:40f0:8", ["const:739260:8", "const:4:8"]]
+ 00739260 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-6b481016e4baca359c94accf256a37f0"></a>

### [`00739080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739080.md) → [`00739430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739430.md) FUN_00739430

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`0073807c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073807c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.01% / 新版 99.01%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007395b8",
      "incomplete_value": true,
      "site": "007395bc",
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
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00739208",
      "incomplete_value": true,
      "site": "0073920c",
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
            "const:da5:8"
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
      "007395b8",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007395b8",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073920c ["INT_ADD", "register:40f0:8", ["const:73920c:8", "const:4:8"]]
- 0073920c ["CALL", null, ["callee:00442c90:8"]]
+ 007395bc ["INT_ADD", "register:40f0:8", ["const:7395bc:8", "const:4:8"]]
+ 007395bc ["CALL", null, ["callee:00442c90:8"]]
- 007390bc ["INT_ADD", "register:40f0:8", ["const:7390bc:8", "const:4:8"]]
- 007390bc ["CALL", null, ["callee:0073807c:8"]]
+ 0073946c ["INT_ADD", "register:40f0:8", ["const:73946c:8", "const:4:8"]]
+ 0073946c ["CALL", null, ["callee:0073807c:8"]]
- 007390e4 ["INT_ADD", "register:40f0:8", ["const:7390e4:8", "const:4:8"]]
- 007390e4 ["CALL", null, ["callee:0043bf04:8"]]
+ 00739494 ["INT_ADD", "register:40f0:8", ["const:739494:8", "const:4:8"]]
+ 00739494 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-42b8337a831f4ade560557db9a64aa4d"></a>

### [`00739248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739248.md) → [`007395f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/007395f8.md) FUN_007395f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00772938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00772/00772938.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 7件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0073b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b480.md) [`0073b4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b4f8.md) [`0073b58c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b58c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 2件 [`00772d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00772/00772d14.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 7件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0073b830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b830.md) [`0073b8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b8a8.md) [`0073b93c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b93c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.81% / 新版 98.81%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007396f8",
      "incomplete_value": false,
      "site": "007396fc",
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
      "definition_site": "00739348",
      "incomplete_value": false,
      "site": "0073934c",
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
      "007396f8",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007396f8",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073934c ["INT_ADD", "register:40f0:8", ["const:73934c:8", "const:4:8"]]
- 0073934c ["CALL", null, ["callee:00442c90:8"]]
+ 007396fc ["INT_ADD", "register:40f0:8", ["const:7396fc:8", "const:4:8"]]
+ 007396fc ["CALL", null, ["callee:00442c90:8"]]
- 007392dc ["INT_ADD", "register:40f0:8", ["const:7392dc:8", "const:4:8"]]
- 007392dc ["CALL", null, ["callee:00c58f30:8"]]
+ 0073968c ["INT_ADD", "register:40f0:8", ["const:73968c:8", "const:4:8"]]
+ 0073968c ["CALL", null, ["callee:00c58f30:8"]]
- 00739300 ["INT_ADD", "register:40f0:8", ["const:739300:8", "const:4:8"]]
- 00739300 ["CALL", null, ["callee:0073b93c:8"]]
+ 007396b0 ["INT_ADD", "register:40f0:8", ["const:7396b0:8", "const:4:8"]]
+ 007396b0 ["CALL", null, ["callee:0073b93c:8"]]
~~~


<a id="compare-c726e512cc1e392f768289890a348534"></a>

### [`0073939c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/0073939c.md) → [`0073974c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/0073974c.md) FUN_0073974c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00772938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00772/00772938.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`007393c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007393c8.md)
- 新版 呼出元 2件 [`00772d14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00772/00772d14.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00739778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739778.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00739770",
      "incomplete_value": false,
      "site": "00739774",
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
      "definition_site": "007393c0",
      "incomplete_value": false,
      "site": "007393c4",
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
      "00739770",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00739770",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007393c4 ["INT_ADD", "register:40f0:8", ["const:7393c4:8", "const:4:8"]]
- 007393c4 ["CALL", null, ["callee:00442c90:8"]]
+ 00739774 ["INT_ADD", "register:40f0:8", ["const:739774:8", "const:4:8"]]
+ 00739774 ["CALL", null, ["callee:00442c90:8"]]
- 007393c0 ["COPY", "tmp:0:8", ["const:da5:8"]]
- 007393c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007393c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007393c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00739770 ["COPY", "tmp:0:8", ["const:e83:8"]]
+ 00739770 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00739770 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00739770 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bf78dd3f1fdf6e2e7d765089500bfe52"></a>

### [`00739edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739edc.md) → [`0073a28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a28c.md) FUN_0073a28c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00733760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733760.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 4件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00733b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733b10.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0073a30c",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00739f5c",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "0073a30c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "0073a30c",
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
- 00739f5c ["INT_ADD", "register:40f0:8", ["const:739f5c:8", "const:4:8"]]
- 00739f5c ["CALL", null, ["ram:48cd38:8"]]
+ 0073a30c ["INT_ADD", "register:40f0:8", ["const:73a30c:8", "const:4:8"]]
+ 0073a30c ["CALL", null, ["ram:48d058:8"]]
- 00739f2c ["INT_ADD", "register:40f0:8", ["const:739f2c:8", "const:4:8"]]
- 00739f2c ["CALL", null, ["callee:008524fc:8"]]
+ 0073a2dc ["INT_ADD", "register:40f0:8", ["const:73a2dc:8", "const:4:8"]]
+ 0073a2dc ["CALL", null, ["callee:008524fc:8"]]
- 00739f38 ["INT_ADD", "register:40f0:8", ["const:739f38:8", "const:4:8"]]
- 00739f38 ["CALL", null, ["callee:00733b10:8"]]
+ 0073a2e8 ["INT_ADD", "register:40f0:8", ["const:73a2e8:8", "const:4:8"]]
+ 0073a2e8 ["CALL", null, ["callee:00733b10:8"]]
~~~


<a id="compare-12dd88e0d096ddace2286f2dd66fad4f"></a>

### [`0073a3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a3ac.md) → [`0073a75c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a75c.md) FUN_0073a75c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`007341d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007341d4.md) [`0073a3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a3ac.md) [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`00734584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/00734584.md) [`0073a75c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a75c.md) [`008aee9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008aee9c.md) · 呼出先 23件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.85% / 新版 98.85%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073a8b8",
      "incomplete_value": false,
      "site": "0073a8c0",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073a508",
      "incomplete_value": false,
      "site": "0073a510",
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
            "const:f93:8"
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
      "definition_site": "0073a974",
      "incomplete_value": false,
      "site": "0073a97c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073a5c4",
      "incomplete_value": false,
      "site": "0073a5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
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
      "definition_site": "0073a98c",
      "incomplete_value": false,
      "site": "0073a998",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073a5dc",
      "incomplete_value": false,
      "site": "0073a5e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
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
      "0073a8b8",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0073a974",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "0073a98c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0073a8b8",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0073a974",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ],
    [
      "0073a98c",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073a510 ["INT_ADD", "register:40f0:8", ["const:73a510:8", "const:4:8"]]
- 0073a510 ["CALL", null, ["callee:004421f4:8"]]
+ 0073a8c0 ["INT_ADD", "register:40f0:8", ["const:73a8c0:8", "const:4:8"]]
+ 0073a8c0 ["CALL", null, ["callee:004421f4:8"]]
- 0073a5cc ["INT_ADD", "register:40f0:8", ["const:73a5cc:8", "const:4:8"]]
- 0073a5cc ["CALL", null, ["callee:004421f4:8"]]
+ 0073a97c ["INT_ADD", "register:40f0:8", ["const:73a97c:8", "const:4:8"]]
+ 0073a97c ["CALL", null, ["callee:004421f4:8"]]
- 0073a5e8 ["INT_ADD", "register:40f0:8", ["const:73a5e8:8", "const:4:8"]]
- 0073a5e8 ["CALL", null, ["callee:00442b54:8"]]
+ 0073a998 ["INT_ADD", "register:40f0:8", ["const:73a998:8", "const:4:8"]]
+ 0073a998 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-080608f1235df04b6f74987e2579f1ea"></a>

### [`0073af78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af78.md) → [`0073b328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b328.md) FUN_0073b328

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0073514c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/0073514c.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`007354fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/007354fc.md) [`0073807c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073807c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073b334",
      "incomplete_value": false,
      "site": "0073b338",
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
      "definition_site": "0073af84",
      "incomplete_value": false,
      "site": "0073af88",
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
      "0073b334",
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
      "0073b334",
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
- 0073af88 ["INT_ADD", "register:40f0:8", ["const:73af88:8", "const:4:8"]]
- 0073af88 ["CALL", null, ["callee:0043bad8:8"]]
+ 0073b338 ["INT_ADD", "register:40f0:8", ["const:73b338:8", "const:4:8"]]
+ 0073b338 ["CALL", null, ["callee:0043bad8:8"]]
- 0073af80 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0073b330 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0073af84 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0073af84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073af84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073af84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073b334 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0073b334 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b334 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b334 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a0ad4aebc8241a2ac2e6c0bf5b4f1e30"></a>

### [`0073af8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af8c.md) → [`0073b33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b33c.md) FUN_0073b33c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 9件 [`00734420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/00734420.md) [`007359bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/007359bc.md) [`00735d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/00735d34.md) [`00736074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/00736074.md) [`007373a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/007373a4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 9件 [`007347d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/007347d0.md) [`00735d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/00735d6c.md) [`007360e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00736/007360e4.md) [`00736424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00736/00736424.md) [`00737754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737754.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073b348",
      "incomplete_value": false,
      "site": "0073b34c",
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
      "definition_site": "0073af98",
      "incomplete_value": false,
      "site": "0073af9c",
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
      "0073b348",
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
      "0073b348",
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
- 0073af9c ["INT_ADD", "register:40f0:8", ["const:73af9c:8", "const:4:8"]]
- 0073af9c ["CALL", null, ["callee:00442c90:8"]]
+ 0073b34c ["INT_ADD", "register:40f0:8", ["const:73b34c:8", "const:4:8"]]
+ 0073b34c ["CALL", null, ["callee:00442c90:8"]]
- 0073af94 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0073b344 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0073af98 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0073af98 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073af98 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073af98 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073b348 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0073b348 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b348 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b348 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cb30896772216652c1d0e2b83b0f6008"></a>

### [`0073afa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073afa0.md) → [`0073b350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b350.md) FUN_0073b350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0073579c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/0073579c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00735b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/00735b4c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073b35c",
      "incomplete_value": false,
      "site": "0073b360",
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
      "definition_site": "0073afac",
      "incomplete_value": false,
      "site": "0073afb0",
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
      "0073b35c",
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
      "0073b35c",
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
- 0073afb0 ["INT_ADD", "register:40f0:8", ["const:73afb0:8", "const:4:8"]]
- 0073afb0 ["CALL", null, ["callee:0043bad8:8"]]
+ 0073b360 ["INT_ADD", "register:40f0:8", ["const:73b360:8", "const:4:8"]]
+ 0073b360 ["CALL", null, ["callee:0043bad8:8"]]
- 0073afa8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0073b358 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0073afac ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0073afac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073afac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073afac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073b35c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0073b35c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b35c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b35c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-baa9cd0f22c22c6ce30dfe05f68dade2"></a>

### [`0073b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b480.md) → [`0073b830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b830.md) FUN_0073b830

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00739248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739248.md) [`0073b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b08c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`007395f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/007395f8.md) [`0073b43c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b43c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0073b83c",
      "incomplete_value": false,
      "site": "0073b840",
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
      "definition_site": "0073b48c",
      "incomplete_value": false,
      "site": "0073b490",
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
      "0073b83c",
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
      "0073b83c",
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
- 0073b490 ["INT_ADD", "register:40f0:8", ["const:73b490:8", "const:4:8"]]
- 0073b490 ["CALL", null, ["callee:0043bad8:8"]]
+ 0073b840 ["INT_ADD", "register:40f0:8", ["const:73b840:8", "const:4:8"]]
+ 0073b840 ["CALL", null, ["callee:0043bad8:8"]]
- 0073b488 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0073b838 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0073b48c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0073b48c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0073b48c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0073b48c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0073b83c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0073b83c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b83c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0073b83c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-23e96b537ebace44dc0c0e0343799afd"></a>

### [`0073b6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b6c4.md) → [`0073ba74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073ba74.md) _INIT_127

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
      "definition_site": "0073bab0",
      "incomplete_value": true,
      "site": "0073bacc",
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
      "definition_site": "0073b700",
      "incomplete_value": true,
      "site": "0073b71c",
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
      "definition_site": "0073bad4",
      "incomplete_value": true,
      "site": "0073baf0",
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
      "definition_site": "0073b724",
      "incomplete_value": true,
      "site": "0073b740",
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
      "definition_site": "0073baf4",
      "incomplete_value": true,
      "site": "0073bb10",
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
      "definition_site": "0073b744",
      "incomplete_value": true,
      "site": "0073b760",
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
      "0073bab0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0073bad4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0073baf4",
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
      "0073bab0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0073bad4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0073baf4",
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
- 0073b8f8 ["INT_ADD", "register:40f0:8", ["const:73b8f8:8", "const:4:8"]]
- 0073b8f8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0073bca8 ["INT_ADD", "register:40f0:8", ["const:73bca8:8", "const:4:8"]]
+ 0073bca8 ["CALL", null, ["callee:00c58ed0:8"]]
- 0073b6ec ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0073ba9c ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0073b6f0 ["COPY", "tmp:0:8", ["const:e60:8"]]
- 0073b6f0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0073b6f0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0073b6f0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0073baa0 ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 0073baa0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0073baa0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0073baa0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-74100b4c6875e344e53b826b9fb4a8de"></a>

### [`0073ba54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073ba54.md) → [`0073be04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073be04.md) FUN_0073be04

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) · 呼出先 12件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`0067e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e1dc.md) [`00863734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00863/00863734.md) [`00864590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864590.md)
- 新版 呼出元 1件 [`0073cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cd40.md) · 呼出先 12件 [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md) [`0067e58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e58c.md) [`008646e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00864/008646e0.md) [`0086553c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00865/0086553c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.86% / 新版 83.86%

優先判定に残った影響 `call_argument_candidate` 40件, `store_destination` 7件, `store_value` 26件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073be90",
      "incomplete_value": true,
      "site": "0073be90",
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
      "definition_site": "0073bae0",
      "incomplete_value": true,
      "site": "0073bae0",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073bea8",
      "incomplete_value": true,
      "site": "0073bea8",
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
      "definition_site": "0073baf8",
      "incomplete_value": true,
      "site": "0073baf8",
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073beac",
      "incomplete_value": true,
      "site": "0073beac",
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
      "definition_site": "0073bafc",
      "incomplete_value": true,
      "site": "0073bafc",
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
      "0073be44",
      "DATA",
      [
        "storage",
        "00c77b48",
        null,
        "pointer"
      ]
    ],
    [
      "0073be60",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0073be80",
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
      "0073be44",
      "DATA",
      [
        "storage",
        "00c78b18",
        null,
        "pointer"
      ]
    ],
    [
      "0073be60",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "0073be80",
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
- 0073bae8 ["COPY", "tmp:0:8", ["const:f47:8"]]
- 0073bae8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0073bae8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0073bae8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0073be98 ["COPY", "tmp:0:8", ["const:f91:8"]]
+ 0073be98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0073be98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0073be98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0073bc00 ["COPY", "register:0:8", ["register:4040:8"]]
- 0073bc00 ["INT_ADD", "register:40f0:8", ["const:73bc00:8", "const:4:8"]]
- 0073bc00 ["CALLIND", null, ["register:0:8"]]
+ 0073bfb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0073bfb0 ["INT_ADD", "register:40f0:8", ["const:73bfb0:8", "const:4:8"]]
+ 0073bfb0 ["CALLIND", null, ["register:0:8"]]
- 0073be24 ["COPY", "register:0:8", ["register:4040:8"]]
- 0073be24 ["INT_ADD", "register:40f0:8", ["const:73be24:8", "const:4:8"]]
- 0073be24 ["CALLIND", null, ["register:0:8"]]
+ 0073c1d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0073c1d4 ["INT_ADD", "register:40f0:8", ["const:73c1d4:8", "const:4:8"]]
+ 0073c1d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3b19329f98707797d02c87f1dc97a13d"></a>

### [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) → [`0073cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cd40.md) FUN_0073cd40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00741628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741628.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 47件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md)
- 新版 呼出元 2件 [`007419d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007419d8.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 47件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.54% / 新版 95.54%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 7件, `call_target` 1件, `store_destination` 3件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0073cd90",
      "incomplete_value": false,
      "site": "0073cd90",
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
      "definition_site": "0073c9e0",
      "incomplete_value": false,
      "site": "0073c9e0",
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
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073cd88",
      "incomplete_value": true,
      "site": "0073cd90",
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
      "definition_site": "0073c9d8",
      "incomplete_value": true,
      "site": "0073c9e0",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0073cd94",
      "incomplete_value": false,
      "site": "0073cd94",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073c9e4",
      "incomplete_value": false,
      "site": "0073c9e4",
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
            "const:a78:8"
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
      "0073cd88",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0073cd8c",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "0073cd90",
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
      "0073cd88",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0073cd8c",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "0073cd90",
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
- 0073c9e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 0073c9e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 0073cd90 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 0073cd90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 0073c9e4 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
- 0073c9e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 0073cd94 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a38:8"]]
+ 0073cd94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 0073ca00 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
- 0073ca00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 0073cdb0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a38:8"]]
+ 0073cdb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
~~~


<a id="compare-f3a4b06c080b38192fe7ccd46c3b0e66"></a>

### [`0073d7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073d/0073d7fc.md) → [`0073dbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073d/0073dbac.md) FUN_0073dbac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 46件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 46件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.18% / 新版 93.18%

優先判定に残った影響 `call_argument_candidate` 26件, `call_target` 12件, `store_destination` 21件, `store_value` 9件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073dc5c",
      "incomplete_value": true,
      "site": "0073dc60",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073d8ac",
      "incomplete_value": true,
      "site": "0073d8b0",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0073e05c",
      "incomplete_value": false,
      "site": "0073e05c",
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
      "definition_site": "0073dcac",
      "incomplete_value": false,
      "site": "0073dcac",
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
    "ordinal": 42,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0073e060",
      "incomplete_value": false,
      "site": "0073e060",
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
      "definition_site": "0073dcb0",
      "incomplete_value": false,
      "site": "0073dcb0",
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
    "ordinal": 43,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0073dbec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0073dc00",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0073dc08",
      "PARAM",
      [
        "storage",
        "00c77b58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0073dbec",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0073dc00",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0073dc08",
      "PARAM",
      [
        "storage",
        "00c78b28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073d860 ["INT_ADD", "register:40f0:8", ["const:73d860:8", "const:4:8"]]
- 0073d860 ["CALL", null, ["callee:00c596b0:8"]]
+ 0073dc10 ["INT_ADD", "register:40f0:8", ["const:73dc10:8", "const:4:8"]]
+ 0073dc10 ["CALL", null, ["callee:00c596b0:8"]]
- 0073d900 ["INT_ADD", "register:40f0:8", ["const:73d900:8", "const:4:8"]]
- 0073d900 ["CALL", null, ["callee:0047d134:8"]]
+ 0073dcb0 ["INT_ADD", "register:40f0:8", ["const:73dcb0:8", "const:4:8"]]
+ 0073dcb0 ["CALL", null, ["callee:0047d134:8"]]
- 0073e814 ["COPY", "tmp:0:8", ["const:735:8"]]
- 0073e814 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 0073e814 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 0073e814 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 0073ebc4 ["COPY", "tmp:0:8", ["const:785:8"]]
+ 0073ebc4 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 0073ebc4 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 0073ebc4 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-9dac95d9f50ef2febcb614c595730bb6"></a>

### [`0073ee8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073e/0073ee8c.md) → [`0073f23c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073f/0073f23c.md) FUN_0073f23c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 41件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 41件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 14件, `call_target` 1件, `store_destination` 11件, `store_value` 5件

アドレスに依存する影響 `branch_value` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073fbe0",
      "incomplete_value": true,
      "site": "0073fbe8",
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
                "const:238:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073f830",
      "incomplete_value": true,
      "site": "0073f838",
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
                "const:1e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 55,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073fbec",
      "incomplete_value": true,
      "site": "0073fbf0",
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
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073f83c",
      "incomplete_value": true,
      "site": "0073f840",
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
                "const:e00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0073fbf4",
      "incomplete_value": true,
      "site": "0073fbf8",
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
                "const:118:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0073f844",
      "incomplete_value": true,
      "site": "0073f848",
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
                "const:c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 57,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0073f288",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0073f294",
      "READ",
      [
        "storage",
        "00ca5030",
        null,
        "undefined8"
      ]
    ],
    [
      "0073f2a4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0073f288",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "0073f294",
      "READ",
      [
        "storage",
        "00ca5ff0",
        null,
        "undefined8"
      ]
    ],
    [
      "0073f2a4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0073ef10 ["INT_ADD", "register:40f0:8", ["const:73ef10:8", "const:4:8"]]
- 0073ef10 ["CALL", null, ["callee:00c596b0:8"]]
+ 0073f2c0 ["INT_ADD", "register:40f0:8", ["const:73f2c0:8", "const:4:8"]]
+ 0073f2c0 ["CALL", null, ["callee:00c596b0:8"]]
- 0073f208 ["INT_ADD", "register:40f0:8", ["const:73f208:8", "const:4:8"]]
- 0073f208 ["CALL", null, ["callee:0074142c:8"]]
+ 0073f5b8 ["INT_ADD", "register:40f0:8", ["const:73f5b8:8", "const:4:8"]]
+ 0073f5b8 ["CALL", null, ["callee:0074142c:8"]]
- 0073f2a8 ["INT_ADD", "register:40f0:8", ["const:73f2a8:8", "const:4:8"]]
- 0073f2a8 ["CALL", null, ["callee:0074142c:8"]]
+ 0073f658 ["INT_ADD", "register:40f0:8", ["const:73f658:8", "const:4:8"]]
+ 0073f658 ["CALL", null, ["callee:0074142c:8"]]
~~~


<a id="compare-b07ee44a00224d69c72e363d6b725902"></a>

### [`00740ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00740/00740ec0.md) → [`00741270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741270.md) FUN_00741270

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00741058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741058.md) · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00741408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741408.md) · 呼出先 4件 [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.08% / 新版 96.08%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0074128c",
      "incomplete_value": true,
      "site": "00741290",
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
            "const:b18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00740edc",
      "incomplete_value": true,
      "site": "00740ee0",
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
            "const:b48:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007413c0",
      "incomplete_value": false,
      "site": "007413c4",
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
      "definition_site": "00741010",
      "incomplete_value": false,
      "site": "00741014",
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
      "00741290",
      "DATA",
      [
        "storage",
        "00c77b48",
        null,
        "pointer"
      ]
    ],
    [
      "007413c4",
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
      "00741290",
      "DATA",
      [
        "storage",
        "00c78b18",
        null,
        "pointer"
      ]
    ],
    [
      "007413c4",
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
- 00740ed8 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00741288 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00740edc ["COPY", "tmp:0:8", ["const:b48:8"]]
- 00740edc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00740edc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00740edc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074128c ["COPY", "tmp:0:8", ["const:b18:8"]]
+ 0074128c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074128c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074128c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00740ef0 ["INT_ADD", "register:40f0:8", ["const:740ef0:8", "const:4:8"]]
- 00740ef0 ["CALL", null, ["callee:00c54d90:8"]]
+ 007412a0 ["INT_ADD", "register:40f0:8", ["const:7412a0:8", "const:4:8"]]
+ 007412a0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-171b5cde57b146f17790aafc9f70d77e"></a>

### [`0074123c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074123c.md) → [`007415ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007415ec.md) FUN_007415ec

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
      "definition_site": "00741610",
      "incomplete_value": false,
      "site": "00741610",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741260",
      "incomplete_value": false,
      "site": "00741260",
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
      "00741610",
      "DATA",
      [
        "storage",
        "00c77b80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741610",
      "DATA",
      [
        "storage",
        "00c78b50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741250 ["INT_ADD", "register:40f0:8", ["const:741250:8", "const:4:8"]]
- 00741250 ["CALL", null, ["callee:00c58f30:8"]]
+ 00741600 ["INT_ADD", "register:40f0:8", ["const:741600:8", "const:4:8"]]
+ 00741600 ["CALL", null, ["callee:00c58f30:8"]]
- 00741258 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00741608 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0074125c ["COPY", "tmp:0:8", ["const:b80:8"]]
- 0074125c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074125c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074125c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074160c ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 0074160c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074160c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074160c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-047e8ff545dd6239acbf118863cecb09"></a>

### [`00741270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741270.md) → [`00741620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741620.md) FUN_00741620

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
      "definition_site": "0074162c",
      "incomplete_value": false,
      "site": "0074162c",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074127c",
      "incomplete_value": false,
      "site": "0074127c",
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
      "0074162c",
      "DATA",
      [
        "storage",
        "00c77b80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074162c",
      "DATA",
      [
        "storage",
        "00c78b50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741274 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00741624 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 00741278 ["COPY", "tmp:0:8", ["const:b80:8"]]
- 00741278 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741278 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741278 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741628 ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 00741628 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741628 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741628 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2ae0814d96aa7222f9b686a514a48eb4"></a>

### [`00741414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741414.md) → [`007417c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007417c4.md) FUN_007417c4

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
      "definition_site": "007417e8",
      "incomplete_value": false,
      "site": "007417e8",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741438",
      "incomplete_value": false,
      "site": "00741438",
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
      "007417e8",
      "DATA",
      [
        "storage",
        "00c77c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007417e8",
      "DATA",
      [
        "storage",
        "00c78bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741428 ["INT_ADD", "register:40f0:8", ["const:741428:8", "const:4:8"]]
- 00741428 ["CALL", null, ["callee:00c58f30:8"]]
+ 007417d8 ["INT_ADD", "register:40f0:8", ["const:7417d8:8", "const:4:8"]]
+ 007417d8 ["CALL", null, ["callee:00c58f30:8"]]
- 00741430 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007417e0 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00741434 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 00741434 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741434 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741434 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007417e4 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 007417e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007417e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007417e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-096b58efdfb21df67f46a9ac4f7a0c10"></a>

### [`00741448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741448.md) → [`007417f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007417f8.md) FUN_007417f8

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
      "definition_site": "00741804",
      "incomplete_value": false,
      "site": "00741804",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741454",
      "incomplete_value": false,
      "site": "00741454",
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
      "00741804",
      "DATA",
      [
        "storage",
        "00c77c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741804",
      "DATA",
      [
        "storage",
        "00c78bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074144c ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 007417fc ["COPY", "register:4048:8", ["const:c78000:8"]]
- 00741450 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 00741450 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741450 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741450 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741800 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 00741800 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741800 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741800 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-139534f7d078d9d61b33436b38b57621"></a>

### [`00741464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741464.md) → [`00741814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741814.md) FUN_00741814

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00741620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741620.md) [`00741624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741624.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047cdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047cdec.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`007419d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007419d0.md) [`007419d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007419d4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0074184c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0074149c",
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
      "site": "00741890",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007414e0",
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
      "0074184c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00741890",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007418a8",
      "DATA",
      [
        "storage",
        "00c77c70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074184c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00741890",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "007418a8",
      "DATA",
      [
        "storage",
        "00c78c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074149c ["INT_ADD", "register:40f0:8", ["const:74149c:8", "const:4:8"]]
- 0074149c ["CALL", null, ["ram:47ad34:8"]]
+ 0074184c ["INT_ADD", "register:40f0:8", ["const:74184c:8", "const:4:8"]]
+ 0074184c ["CALL", null, ["ram:47b054:8"]]
- 007414e0 ["INT_ADD", "register:40f0:8", ["const:7414e0:8", "const:4:8"]]
- 007414e0 ["CALL", null, ["ram:47ad34:8"]]
+ 00741890 ["INT_ADD", "register:40f0:8", ["const:741890:8", "const:4:8"]]
+ 00741890 ["CALL", null, ["ram:47b054:8"]]
- 007414a8 ["INT_ADD", "register:40f0:8", ["const:7414a8:8", "const:4:8"]]
- 007414a8 ["CALL", null, ["callee:0047d134:8"]]
+ 00741858 ["INT_ADD", "register:40f0:8", ["const:741858:8", "const:4:8"]]
+ 00741858 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-29e31d507283330d240bb4a19ffa87f9"></a>

### [`007415d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/007415d8.md) → [`00741988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741988.md) FUN_00741988

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
      "definition_site": "007419ac",
      "incomplete_value": false,
      "site": "007419ac",
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
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007415fc",
      "incomplete_value": false,
      "site": "007415fc",
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
            "const:c70:8"
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
      "007419ac",
      "DATA",
      [
        "storage",
        "00c77c70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007419ac",
      "DATA",
      [
        "storage",
        "00c78c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007415ec ["INT_ADD", "register:40f0:8", ["const:7415ec:8", "const:4:8"]]
- 007415ec ["CALL", null, ["callee:00c58f30:8"]]
+ 0074199c ["INT_ADD", "register:40f0:8", ["const:74199c:8", "const:4:8"]]
+ 0074199c ["CALL", null, ["callee:00c58f30:8"]]
- 007415f4 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007419a4 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 007415f8 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 007415f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007415f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007415f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007419a8 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 007419a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007419a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007419a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3f527fca04e880794a40100533ebde91"></a>

### [`0074160c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074160c.md) → [`007419bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007419bc.md) FUN_007419bc

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
      "definition_site": "007419c8",
      "incomplete_value": false,
      "site": "007419c8",
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
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741618",
      "incomplete_value": false,
      "site": "00741618",
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
            "const:c70:8"
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
      "007419c8",
      "DATA",
      [
        "storage",
        "00c77c70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007419c8",
      "DATA",
      [
        "storage",
        "00c78c40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741610 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 007419c0 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 00741614 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 00741614 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741614 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741614 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007419c4 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 007419c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007419c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007419c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-df855da87213bde317e8f10d19be0cc9"></a>

### [`00741628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741628.md) → [`007419d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007419d8.md) FUN_007419d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.92% / 新版 91.92%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00741a50",
      "incomplete_value": false,
      "site": "00741a50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2e1000:8"
          ],
          [
            "leaf",
            "const:fd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007416a0",
      "incomplete_value": false,
      "site": "007416a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2e1000:8"
          ],
          [
            "leaf",
            "const:f98:8"
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
      "definition_site": "00741b04",
      "incomplete_value": true,
      "site": "00741b14",
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
                "const:a87:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741754",
      "incomplete_value": true,
      "site": "00741764",
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
                "const:9a9:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00741c00",
      "incomplete_value": false,
      "site": "00741c00",
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
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741850",
      "incomplete_value": false,
      "site": "00741850",
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
            "const:ce0:8"
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
      "00741a40",
      "PARAM",
      [
        "storage",
        "002e1f98",
        null,
        "undefined4"
      ]
    ],
    [
      "00741a44",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "00741a50",
      "DATA",
      [
        "storage",
        "002e1f98",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00741a40",
      "PARAM",
      [
        "storage",
        "002e1fd8",
        null,
        "undefined4"
      ]
    ],
    [
      "00741a44",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "00741a50",
      "DATA",
      [
        "storage",
        "002e1fd8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 007416a4 ["INT_ADD", "register:40f0:8", ["const:7416a4:8", "const:4:8"]]
- 007416a4 ["CALL", null, ["callee:0074142c:8"]]
+ 00741a54 ["INT_ADD", "register:40f0:8", ["const:741a54:8", "const:4:8"]]
+ 00741a54 ["CALL", null, ["callee:0074142c:8"]]
- 00741714 ["INT_ADD", "register:40f0:8", ["const:741714:8", "const:4:8"]]
- 00741714 ["CALL", null, ["ram:48cd38:8"]]
+ 00741ac4 ["INT_ADD", "register:40f0:8", ["const:741ac4:8", "const:4:8"]]
+ 00741ac4 ["CALL", null, ["ram:48d058:8"]]
- 00741738 ["INT_ADD", "register:40f0:8", ["const:741738:8", "const:4:8"]]
- 00741738 ["CALL", null, ["ram:47ad34:8"]]
+ 00741ae8 ["INT_ADD", "register:40f0:8", ["const:741ae8:8", "const:4:8"]]
+ 00741ae8 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-49cbcdeb8fe37427ff4fec188e673092"></a>

### [`00741bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741bc0.md) → [`00741f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741f70.md) FUN_00741f70

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
      "definition_site": "00741f94",
      "incomplete_value": false,
      "site": "00741f94",
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
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741be4",
      "incomplete_value": false,
      "site": "00741be4",
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
            "const:ce0:8"
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
      "00741f94",
      "DATA",
      [
        "storage",
        "00c77ce0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741f94",
      "DATA",
      [
        "storage",
        "00c78cb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741bd4 ["INT_ADD", "register:40f0:8", ["const:741bd4:8", "const:4:8"]]
- 00741bd4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00741f84 ["INT_ADD", "register:40f0:8", ["const:741f84:8", "const:4:8"]]
+ 00741f84 ["CALL", null, ["callee:00c58f30:8"]]
- 00741bdc ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00741f8c ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00741be0 ["COPY", "tmp:0:8", ["const:ce0:8"]]
- 00741be0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741be0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741be0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00741f90 ["COPY", "tmp:0:8", ["const:cb0:8"]]
+ 00741f90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00741f90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00741f90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-df669474ab3d5149f3793c3e456af3d4"></a>

### [`00741bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741bf4.md) → [`00741fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741fa4.md) FUN_00741fa4

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
      "definition_site": "00741fb0",
      "incomplete_value": false,
      "site": "00741fb0",
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
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741c00",
      "incomplete_value": false,
      "site": "00741c00",
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
            "const:ce0:8"
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
      "00741fb0",
      "DATA",
      [
        "storage",
        "00c77ce0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00741fb0",
      "DATA",
      [
        "storage",
        "00c78cb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741bf8 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00741fa8 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 00741bfc ["COPY", "tmp:0:8", ["const:ce0:8"]]
- 00741bfc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00741bfc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00741bfc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00741fac ["COPY", "tmp:0:8", ["const:cb0:8"]]
+ 00741fac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00741fac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00741fac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f1e30a4a175ae82c8826f31b9c43fae9"></a>

### [`00741c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741c54.md) → [`00742004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742004.md) FUN_00742004

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
      "definition_site": "00742018",
      "incomplete_value": false,
      "site": "0074201c",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741c68",
      "incomplete_value": false,
      "site": "00741c6c",
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
            "const:d60:8"
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
      "0074201c",
      "DATA",
      [
        "storage",
        "00c77d60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074201c",
      "DATA",
      [
        "storage",
        "00c78d30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741c60 ["INT_ADD", "register:40f0:8", ["const:741c60:8", "const:4:8"]]
- 00741c60 ["CALL", null, ["callee:00c58f30:8"]]
+ 00742010 ["INT_ADD", "register:40f0:8", ["const:742010:8", "const:4:8"]]
+ 00742010 ["CALL", null, ["callee:00c58f30:8"]]
- 00741c64 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00742014 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00741c68 ["COPY", "tmp:0:8", ["const:d60:8"]]
- 00741c68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741c68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741c68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00742018 ["COPY", "tmp:0:8", ["const:d30:8"]]
+ 00742018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00742018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00742018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9e3f9bade9c527fd892fc4e1f4a2b690"></a>

### [`00741c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741c78.md) → [`00742028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742028.md) FUN_00742028

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
      "definition_site": "0074202c",
      "incomplete_value": false,
      "site": "00742030",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00741c7c",
      "incomplete_value": false,
      "site": "00741c80",
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
            "const:d60:8"
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
      "00742030",
      "DATA",
      [
        "storage",
        "00c77d60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00742030",
      "DATA",
      [
        "storage",
        "00c78d30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00741c78 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00742028 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00741c7c ["COPY", "tmp:0:8", ["const:d60:8"]]
- 00741c7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00741c7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00741c7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074202c ["COPY", "tmp:0:8", ["const:d30:8"]]
+ 0074202c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074202c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074202c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-73bcd042d8e8dcf69989fdce7d72493c"></a>

### [`00741c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741c90.md) → [`00742040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742040.md) FUN_00742040

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
      "site": "00742064",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00741cb4",
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
      "00742064",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00742064",
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
- 00741cb4 ["INT_ADD", "register:40f0:8", ["const:741cb4:8", "const:4:8"]]
- 00741cb4 ["CALL", null, ["ram:47ad34:8"]]
+ 00742064 ["INT_ADD", "register:40f0:8", ["const:742064:8", "const:4:8"]]
+ 00742064 ["CALL", null, ["ram:47b054:8"]]
- 00741cc0 ["INT_ADD", "register:40f0:8", ["const:741cc0:8", "const:4:8"]]
- 00741cc0 ["CALL", null, ["callee:0047d134:8"]]
+ 00742070 ["INT_ADD", "register:40f0:8", ["const:742070:8", "const:4:8"]]
+ 00742070 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-47323cdd039bfd0078b4ef2a1705e004"></a>

### [`00741d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741d00.md) → [`007420b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/007420b0.md) _INIT_128

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
      "definition_site": "007420ec",
      "incomplete_value": true,
      "site": "00742108",
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
      "definition_site": "00741d3c",
      "incomplete_value": true,
      "site": "00741d58",
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
      "definition_site": "00742110",
      "incomplete_value": true,
      "site": "0074212c",
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
      "definition_site": "00741d60",
      "incomplete_value": true,
      "site": "00741d7c",
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
      "definition_site": "00742130",
      "incomplete_value": true,
      "site": "0074214c",
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
      "definition_site": "00741d80",
      "incomplete_value": true,
      "site": "00741d9c",
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
      "007420ec",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00742110",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00742130",
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
      "007420ec",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00742110",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00742130",
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
- 00741e60 ["INT_ADD", "register:40f0:8", ["const:741e60:8", "const:4:8"]]
- 00741e60 ["CALL", null, ["callee:0043bb58:8"]]
+ 00742210 ["INT_ADD", "register:40f0:8", ["const:742210:8", "const:4:8"]]
+ 00742210 ["CALL", null, ["callee:0043bb58:8"]]
- 00741f34 ["INT_ADD", "register:40f0:8", ["const:741f34:8", "const:4:8"]]
- 00741f34 ["CALL", null, ["callee:00c58ed0:8"]]
+ 007422e4 ["INT_ADD", "register:40f0:8", ["const:7422e4:8", "const:4:8"]]
+ 007422e4 ["CALL", null, ["callee:00c58ed0:8"]]
- 00741d28 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 007420d8 ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-920587bead2e023e0ac0226912db8c71"></a>

### [`00742258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742258.md) → [`00742608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742608.md) FUN_00742608

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0073d7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073d/0073d7fc.md) · 呼出先 13件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0074107c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074107c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0073cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cd40.md) [`0073dbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073d/0073dbac.md) · 呼出先 13件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0074142c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/0074142c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 83.20% / 新版 83.20%

優先判定に残った影響 `call_argument_candidate` 9件, `store_destination` 7件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007427cc",
      "incomplete_value": false,
      "site": "007427cc",
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
      "definition_site": "0074241c",
      "incomplete_value": false,
      "site": "0074241c",
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
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007427d0",
      "incomplete_value": false,
      "site": "007427d0",
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
      "definition_site": "00742420",
      "incomplete_value": false,
      "site": "00742420",
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
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007427cc",
      "incomplete_value": false,
      "site": "007427d0",
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
      "definition_site": "0074241c",
      "incomplete_value": false,
      "site": "00742420",
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
      "00742630",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0074263c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00742644",
      "PARAM",
      [
        "storage",
        "00c77b58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00742630",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0074263c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00742644",
      "PARAM",
      [
        "storage",
        "00c78b28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074229c ["INT_ADD", "register:40f0:8", ["const:74229c:8", "const:4:8"]]
- 0074229c ["CALL", null, ["callee:00c596b0:8"]]
+ 0074264c ["INT_ADD", "register:40f0:8", ["const:74264c:8", "const:4:8"]]
+ 0074264c ["CALL", null, ["callee:00c596b0:8"]]
- 00742300 ["INT_ADD", "register:40f0:8", ["const:742300:8", "const:4:8"]]
- 00742300 ["CALL", null, ["callee:0074142c:8"]]
+ 007426b0 ["INT_ADD", "register:40f0:8", ["const:7426b0:8", "const:4:8"]]
+ 007426b0 ["CALL", null, ["callee:0074142c:8"]]
- 00742338 ["INT_ADD", "register:40f0:8", ["const:742338:8", "const:4:8"]]
- 00742338 ["CALL", null, ["callee:0047ec3c:8"]]
+ 007426e8 ["INT_ADD", "register:40f0:8", ["const:7426e8:8", "const:4:8"]]
+ 007426e8 ["CALL", null, ["callee:0047ec3c:8"]]
~~~


<a id="compare-2bb00708b479b41c4259e90c46a1d06a"></a>

### [`00742478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742478.md) → [`00742828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742828.md) _INIT_129

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00742888",
      "incomplete_value": true,
      "site": "007428a4",
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
      "definition_site": "007424d8",
      "incomplete_value": true,
      "site": "007424f4",
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
      "definition_site": "007428e4",
      "incomplete_value": true,
      "site": "00742900",
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
      "definition_site": "00742534",
      "incomplete_value": true,
      "site": "00742550",
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
    "kind": "store_value",
    "new": {
      "definition_site": "00742904",
      "incomplete_value": true,
      "site": "00742920",
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
      "definition_site": "00742554",
      "incomplete_value": true,
      "site": "00742570",
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
      "00742864",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00742888",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007428a8",
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
      "00742864",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00742888",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "007428a8",
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
- 007424a0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00742850 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 007424a4 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 007424a4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007424a4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007424a4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00742854 ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 00742854 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00742854 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00742854 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 007424ac ["COPY", "register:4048:8", ["const:2b7000:8"]]
+ 0074285c ["COPY", "register:4048:8", ["const:2b8000:8"]]
~~~


<a id="compare-27af713163eb077bfce045d563df7551"></a>

### [`00742c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742c10.md) → [`00742fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742fc0.md) FUN_00742fc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.35% / 新版 97.35%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00743004",
      "incomplete_value": false,
      "site": "00743010",
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
      "definition_site": "00742c54",
      "incomplete_value": false,
      "site": "00742c60",
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
      "definition_site": "00743654",
      "incomplete_value": true,
      "site": "00743658",
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
      "definition_site": "007432a4",
      "incomplete_value": true,
      "site": "007432a8",
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
    "ordinal": 106,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00743650",
      "incomplete_value": true,
      "site": "0074365c",
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
      "definition_site": "007432a0",
      "incomplete_value": true,
      "site": "007432ac",
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
    "ordinal": 107,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00743010",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00743024",
      "READ",
      [
        "storage",
        "002c02df",
        null,
        "string"
      ]
    ],
    [
      "0074302c",
      "READ",
      [
        "storage",
        "002c02ec",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00743010",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00743024",
      "READ",
      [
        "storage",
        "002c0329",
        null,
        "string"
      ]
    ],
    [
      "0074302c",
      "READ",
      [
        "storage",
        "002c0336",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00742c48 ["INT_ADD", "register:40f0:8", ["const:742c48:8", "const:4:8"]]
- 00742c48 ["CALL", null, ["callee:00488180:8"]]
+ 00742ff8 ["INT_ADD", "register:40f0:8", ["const:742ff8:8", "const:4:8"]]
+ 00742ff8 ["CALL", null, ["callee:00488180:8"]]
- 00742c50 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00743000 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00742c54 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00742c54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00742c54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00742c54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00743004 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00743004 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00743004 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00743004 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4f5517c297a4b42cf433e4d84183dccd"></a>

### [`00743414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743414.md) → [`007437c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00743/007437c4.md) FUN_007437c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007444d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007444d0.md) · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00744880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744880.md) · 呼出先 13件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007437f8",
      "incomplete_value": false,
      "site": "00743804",
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
      "definition_site": "00743448",
      "incomplete_value": false,
      "site": "00743454",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0074380c",
      "incomplete_value": true,
      "site": "00743820",
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
                "const:ae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074345c",
      "incomplete_value": true,
      "site": "00743470",
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
                "const:64:8"
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
      "definition_site": "00743824",
      "incomplete_value": true,
      "site": "00743824",
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
      "definition_site": "00743474",
      "incomplete_value": true,
      "site": "00743474",
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
      "00743804",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0074380c",
      "READ",
      [
        "storage",
        "002b2064",
        null,
        "string"
      ]
    ],
    [
      "00743814",
      "READ",
      [
        "storage",
        "002b2071",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00743804",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0074380c",
      "READ",
      [
        "storage",
        "002b20ae",
        null,
        "string"
      ]
    ],
    [
      "00743814",
      "READ",
      [
        "storage",
        "002b20bb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00743440 ["INT_ADD", "register:40f0:8", ["const:743440:8", "const:4:8"]]
- 00743440 ["CALL", null, ["callee:00488180:8"]]
+ 007437f0 ["INT_ADD", "register:40f0:8", ["const:7437f0:8", "const:4:8"]]
+ 007437f0 ["CALL", null, ["callee:00488180:8"]]
- 00743444 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 007437f4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00743448 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00743448 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00743448 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00743448 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007437f8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 007437f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007437f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007437f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fc42ca16f4e8339ef7287a0c9f8aeb52"></a>

### [`00743648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743648.md) → [`007439f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00743/007439f8.md) FUN_007439f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00745824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745824.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`00745bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745bd4.md) · 呼出先 22件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.90% / 新版 95.90%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00743a44",
      "incomplete_value": false,
      "site": "00743a4c",
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
      "definition_site": "00743694",
      "incomplete_value": false,
      "site": "0074369c",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00743be8",
      "incomplete_value": true,
      "site": "00743bec",
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
      "definition_site": "00743838",
      "incomplete_value": true,
      "site": "0074383c",
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
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00743be4",
      "incomplete_value": true,
      "site": "00743bf0",
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
      "definition_site": "00743834",
      "incomplete_value": true,
      "site": "00743840",
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
    "ordinal": 34,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00743a4c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00743a64",
      "READ",
      [
        "storage",
        "002a4611",
        null,
        "string"
      ]
    ],
    [
      "00743bd8",
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
      "00743a4c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00743a64",
      "READ",
      [
        "storage",
        "002a46dc",
        null,
        "string"
      ]
    ],
    [
      "00743bd8",
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
- 00743c7c ["INT_ADD", "register:40f0:8", ["const:743c7c:8", "const:4:8"]]
- 00743c7c ["CALL", null, ["callee:00c58f50:8"]]
+ 0074402c ["INT_ADD", "register:40f0:8", ["const:74402c:8", "const:4:8"]]
+ 0074402c ["CALL", null, ["callee:00c58f50:8"]]
- 0074368c ["INT_ADD", "register:40f0:8", ["const:74368c:8", "const:4:8"]]
- 0074368c ["CALL", null, ["callee:00488180:8"]]
+ 00743a3c ["INT_ADD", "register:40f0:8", ["const:743a3c:8", "const:4:8"]]
+ 00743a3c ["CALL", null, ["callee:00488180:8"]]
- 00743690 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00743a40 ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-cfff7228d2d7663934f51861a5d877f1"></a>

### [`007444d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007444d0.md) → [`00744880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744880.md) FUN_00744880

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1884.md)
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 15件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005c1c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1c34.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.45% / 新版 99.45%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00744f00",
      "incomplete_value": true,
      "site": "00744f08",
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
                "const:aa0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00744b50",
      "incomplete_value": true,
      "site": "00744b58",
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
                "const:a50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 98,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00744e68",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "00744f00",
      "READ",
      [
        "storage",
        "002c2a50",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00744e68",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "00744f00",
      "READ",
      [
        "storage",
        "002c2aa0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0074450c ["INT_ADD", "register:40f0:8", ["const:74450c:8", "const:4:8"]]
- 0074450c ["CALL", null, ["callee:007437c4:8"]]
+ 007448bc ["INT_ADD", "register:40f0:8", ["const:7448bc:8", "const:4:8"]]
+ 007448bc ["CALL", null, ["callee:007437c4:8"]]
- 0074451c ["INT_ADD", "register:40f0:8", ["const:74451c:8", "const:4:8"]]
- 0074451c ["CALL", null, ["callee:00803c64:8"]]
+ 007448cc ["INT_ADD", "register:40f0:8", ["const:7448cc:8", "const:4:8"]]
+ 007448cc ["CALL", null, ["callee:00803c64:8"]]
- 0074452c ["INT_ADD", "register:40f0:8", ["const:74452c:8", "const:4:8"]]
- 0074452c ["CALL", null, ["callee:00803c64:8"]]
+ 007448dc ["INT_ADD", "register:40f0:8", ["const:7448dc:8", "const:4:8"]]
+ 007448dc ["CALL", null, ["callee:00803c64:8"]]
~~~


<a id="compare-39ae167004f9b6e4f43f558b0698a87b"></a>

### [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md) → [`00745e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745e2c.md) FUN_00745e2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0078c01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c01c.md) [`00a91618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91618.md) · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00747ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747ab8.md) [`00747f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747f34.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md)
- 新版 呼出元 2件 [`0078c3f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078c/0078c3f8.md) [`00a9260c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a9260c.md) · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00747e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747e68.md) [`007482e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007482e4.md) [`00752688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/00752688.md) [`009b5900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5900.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.42% / 新版 98.42%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00745f88",
      "incomplete_value": false,
      "site": "00745f8c",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00745bd8",
      "incomplete_value": false,
      "site": "00745bdc",
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
            "const:e00:8"
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
      "definition_site": "00746034",
      "incomplete_value": false,
      "site": "00746034",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00745c84",
      "incomplete_value": false,
      "site": "00745c84",
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
            "const:e90:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00745f8c",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ],
    [
      "00746034",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ],
    [
      "007460b4",
      "READ",
      [
        "storage",
        "00c77eb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00745f8c",
      "DATA",
      [
        "storage",
        "00c78dd0",
        null,
        "undefined *"
      ]
    ],
    [
      "00746034",
      "DATA",
      [
        "storage",
        "00c78e60",
        null,
        "undefined *"
      ]
    ],
    [
      "007460b4",
      "READ",
      [
        "storage",
        "00c78e88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00745aec ["COPY", "register:0:8", ["register:4040:8"]]
- 00745aec ["INT_ADD", "register:40f0:8", ["const:745aec:8", "const:4:8"]]
- 00745aec ["CALLIND", null, ["register:0:8"]]
+ 00745e9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00745e9c ["INT_ADD", "register:40f0:8", ["const:745e9c:8", "const:4:8"]]
+ 00745e9c ["CALLIND", null, ["register:0:8"]]
- 00745af8 ["INT_ADD", "register:40f0:8", ["const:745af8:8", "const:4:8"]]
- 00745af8 ["CALL", null, ["callee:00752688:8"]]
+ 00745ea8 ["INT_ADD", "register:40f0:8", ["const:745ea8:8", "const:4:8"]]
+ 00745ea8 ["CALL", null, ["callee:00752688:8"]]
- 00745b20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00745b20 ["INT_ADD", "register:40f0:8", ["const:745b20:8", "const:4:8"]]
- 00745b20 ["CALLIND", null, ["register:0:8"]]
+ 00745ed0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00745ed0 ["INT_ADD", "register:40f0:8", ["const:745ed0:8", "const:4:8"]]
+ 00745ed0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c2691567636b2238f74a0d636508315c"></a>

### [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) → [`007463bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/007463bc.md) FUN_007463bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`00746614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746614.md) [`0074670c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074670c.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00748214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748214.md) [`007486d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007486d0.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)
- 新版 呼出元 4件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`007469c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/007469c4.md) [`00746abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/00746abc.md) · 呼出先 10件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`007485c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007485c4.md) [`00748a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748a80.md) [`00752688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/00752688.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746578",
      "incomplete_value": false,
      "site": "0074657c",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007461c8",
      "incomplete_value": false,
      "site": "007461cc",
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
            "const:f10:8"
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746630",
      "incomplete_value": false,
      "site": "00746634",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746280",
      "incomplete_value": false,
      "site": "00746284",
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
            "const:f90:8"
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0074657c",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ],
    [
      "00746634",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ],
    [
      "007466bc",
      "READ",
      [
        "storage",
        "00c77fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074657c",
      "DATA",
      [
        "storage",
        "00c78ee0",
        null,
        "undefined *"
      ]
    ],
    [
      "00746634",
      "DATA",
      [
        "storage",
        "00c78f60",
        null,
        "undefined *"
      ]
    ],
    [
      "007466bc",
      "READ",
      [
        "storage",
        "00c78f88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00746054 ["INT_ADD", "register:40f0:8", ["const:746054:8", "const:4:8"]]
- 00746054 ["CALL", null, ["callee:008524fc:8"]]
+ 00746404 ["INT_ADD", "register:40f0:8", ["const:746404:8", "const:4:8"]]
+ 00746404 ["CALL", null, ["callee:008524fc:8"]]
- 0074605c ["INT_ADD", "register:40f0:8", ["const:74605c:8", "const:4:8"]]
- 0074605c ["CALL", null, ["callee:00765314:8"]]
+ 0074640c ["INT_ADD", "register:40f0:8", ["const:74640c:8", "const:4:8"]]
+ 0074640c ["CALL", null, ["callee:00765314:8"]]
- 0074607c ["INT_ADD", "register:40f0:8", ["const:74607c:8", "const:4:8"]]
- 0074607c ["CALL", null, ["callee:00c58f50:8"]]
+ 0074642c ["INT_ADD", "register:40f0:8", ["const:74642c:8", "const:4:8"]]
+ 0074642c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-14d86c306f38e80a85a08a06de422b58"></a>

### [`00746614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746614.md) → [`007469c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/007469c4.md) FUN_007469c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 4件 [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) [`007487fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007487fc.md) [`00748800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748800.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 4件 [`007463bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/007463bc.md) [`00748bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748bac.md) [`00748bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748bb0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746a04",
      "incomplete_value": false,
      "site": "00746a10",
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
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746654",
      "incomplete_value": false,
      "site": "00746660",
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
      "00746a10",
      "DATA",
      [
        "storage",
        "00c78010",
        null,
        "undefined *"
      ]
    ],
    [
      "00746a44",
      "READ",
      [
        "storage",
        "00c78030",
        null,
        "pointer"
      ]
    ],
    [
      "00746a44",
      "READ",
      [
        "storage",
        "00c78038",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00746a10",
      "DATA",
      [
        "storage",
        "00c78fe0",
        null,
        "undefined *"
      ]
    ],
    [
      "00746a44",
      "READ",
      [
        "storage",
        "00c79000",
        null,
        "pointer"
      ]
    ],
    [
      "00746a44",
      "READ",
      [
        "storage",
        "00c79008",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00746654 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00746654 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00746654 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00746654 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00746a04 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 00746a04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00746a04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00746a04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0074666c ["INT_ADD", "register:40f0:8", ["const:74666c:8", "const:4:8"]]
- 0074666c ["CALL", null, ["callee:007463bc:8"]]
+ 00746a1c ["INT_ADD", "register:40f0:8", ["const:746a1c:8", "const:4:8"]]
+ 00746a1c ["CALL", null, ["callee:007463bc:8"]]
- 00746698 ["COPY", "register:0:8", ["register:4040:8"]]
- 00746698 ["INT_ADD", "register:40f0:8", ["const:746698:8", "const:4:8"]]
- 00746698 ["CALLIND", null, ["register:0:8"]]
+ 00746a48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00746a48 ["INT_ADD", "register:40f0:8", ["const:746a48:8", "const:4:8"]]
+ 00746a48 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-56852c16b78217990e081f105f7fb36f"></a>

### [`0074670c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074670c.md) → [`00746abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/00746abc.md) FUN_00746abc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`009bf72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf72c.md) · 呼出先 11件 [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) [`00748868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748868.md) [`0074886c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/0074886c.md) [`007488ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488ec.md) [`007488f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488f0.md)
- 新版 呼出元 2件 [`0043c5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043c/0043c5b8.md) [`009c06d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c06d8.md) · 呼出先 11件 [`007463bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/007463bc.md) [`00748c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748c18.md) [`00748c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748c1c.md) [`00748c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748c9c.md) [`00748ca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748ca0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746b0c",
      "incomplete_value": false,
      "site": "00746b0c",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074675c",
      "incomplete_value": false,
      "site": "0074675c",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00746b50",
      "incomplete_value": false,
      "site": "00746b50",
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
    "old": {
      "definition_site": "007467a0",
      "incomplete_value": false,
      "site": "007467a0",
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
            "const:110:8"
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
      "definition_site": "00746b64",
      "incomplete_value": false,
      "site": "00746b68",
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
    "old": {
      "definition_site": "007467b4",
      "incomplete_value": false,
      "site": "007467b8",
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
            "const:190:8"
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
      "00746b0c",
      "DATA",
      [
        "storage",
        "00c78090",
        null,
        "undefined *"
      ]
    ],
    [
      "00746b50",
      "DATA",
      [
        "storage",
        "00c78110",
        null,
        "undefined *"
      ]
    ],
    [
      "00746b68",
      "DATA",
      [
        "storage",
        "00c78190",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00746b0c",
      "DATA",
      [
        "storage",
        "00c79060",
        null,
        "undefined *"
      ]
    ],
    [
      "00746b50",
      "DATA",
      [
        "storage",
        "00c790e0",
        null,
        "undefined *"
      ]
    ],
    [
      "00746b68",
      "DATA",
      [
        "storage",
        "00c79160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074674c ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00746afc ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00746750 ["COPY", "tmp:0:8", ["const:90:8"]]
- 00746750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00746750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00746750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00746b00 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 00746b00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00746b00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00746b00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00746768 ["INT_ADD", "register:40f0:8", ["const:746768:8", "const:4:8"]]
- 00746768 ["CALL", null, ["callee:007463bc:8"]]
+ 00746b18 ["INT_ADD", "register:40f0:8", ["const:746b18:8", "const:4:8"]]
+ 00746b18 ["CALL", null, ["callee:007463bc:8"]]
~~~


<a id="compare-0fc60cb552aeed516a941d0da0e893f5"></a>

### [`00746d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746d44.md) → [`007470f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007470f4.md) FUN_007470f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 8件 [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) [`007499dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/007499dc.md) [`0074a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a5d4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 8件 [`00748f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748f38.md) [`00749d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749d8c.md) [`0074a984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074a984.md) [`00752688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/00752688.md) [`009b63bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b63bc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0074723c",
      "incomplete_value": false,
      "site": "0074723c",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746e8c",
      "incomplete_value": false,
      "site": "00746e8c",
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
            "const:210:8"
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
      "definition_site": "007472fc",
      "incomplete_value": false,
      "site": "007472fc",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00746f4c",
      "incomplete_value": false,
      "site": "00746f4c",
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
            "const:290:8"
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
      "0074723c",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ],
    [
      "007472fc",
      "DATA",
      [
        "storage",
        "00c78290",
        null,
        "undefined *"
      ]
    ],
    [
      "00747388",
      "READ",
      [
        "storage",
        "00c782b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074723c",
      "DATA",
      [
        "storage",
        "00c791e0",
        null,
        "undefined *"
      ]
    ],
    [
      "007472fc",
      "DATA",
      [
        "storage",
        "00c79260",
        null,
        "undefined *"
      ]
    ],
    [
      "00747388",
      "READ",
      [
        "storage",
        "00c79288",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00746d98 ["INT_ADD", "register:40f0:8", ["const:746d98:8", "const:4:8"]]
- 00746d98 ["CALL", null, ["callee:00748f38:8"]]
+ 00747148 ["INT_ADD", "register:40f0:8", ["const:747148:8", "const:4:8"]]
+ 00747148 ["CALL", null, ["callee:00748f38:8"]]
- 00746dac ["INT_ADD", "register:40f0:8", ["const:746dac:8", "const:4:8"]]
- 00746dac ["CALL", null, ["callee:00752688:8"]]
+ 0074715c ["INT_ADD", "register:40f0:8", ["const:74715c:8", "const:4:8"]]
+ 0074715c ["CALL", null, ["callee:00752688:8"]]
- 00746dc8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00746dc8 ["INT_ADD", "register:40f0:8", ["const:746dc8:8", "const:4:8"]]
- 00746dc8 ["CALLIND", null, ["register:0:8"]]
+ 00747178 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00747178 ["INT_ADD", "register:40f0:8", ["const:747178:8", "const:4:8"]]
+ 00747178 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-794dfd41be951b0f396a5593f94c95b6"></a>

### [`007478bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007478bc.md) → [`00747c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747c6c.md) FUN_00747c6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00743648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743648.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`007439f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00743/007439f8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00747c78",
      "incomplete_value": false,
      "site": "00747c7c",
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
      "definition_site": "007478c8",
      "incomplete_value": false,
      "site": "007478cc",
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
      "00747c78",
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
      "00747c78",
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
- 007478cc ["INT_ADD", "register:40f0:8", ["const:7478cc:8", "const:4:8"]]
- 007478cc ["CALL", null, ["callee:0043bad8:8"]]
+ 00747c7c ["INT_ADD", "register:40f0:8", ["const:747c7c:8", "const:4:8"]]
+ 00747c7c ["CALL", null, ["callee:0043bad8:8"]]
- 007478c4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00747c74 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 007478c8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 007478c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007478c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007478c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00747c78 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00747c78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00747c78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00747c78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-dfffafdafc589de8dd985587cdb51145"></a>

### [`00747914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747914.md) → [`00747cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747cc4.md) FUN_00747cc4

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
      "definition_site": "00747cdc",
      "incomplete_value": false,
      "site": "00747ce8",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074792c",
      "incomplete_value": false,
      "site": "00747938",
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
      "00747ce8",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00747ce8",
      "DATA",
      [
        "storage",
        "00c78dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747928 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00747cd8 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0074792c ["COPY", "tmp:0:8", ["const:e00:8"]]
- 0074792c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074792c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074792c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00747cdc ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 00747cdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00747cdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00747cdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0074795c ["COPY", "register:0:8", ["register:4040:8"]]
- 0074795c ["INT_ADD", "register:40f0:8", ["const:74795c:8", "const:4:8"]]
- 0074795c ["CALLIND", null, ["register:0:8"]]
+ 00747d0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00747d0c ["INT_ADD", "register:40f0:8", ["const:747d0c:8", "const:4:8"]]
+ 00747d0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-080568806777b88ecfcbb3c3db7e1af1"></a>

### [`00747970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747970.md) → [`00747d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747d20.md) FUN_00747d20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00747d48",
      "incomplete_value": false,
      "site": "00747d4c",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747998",
      "incomplete_value": false,
      "site": "0074799c",
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
            "const:e00:8"
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
      "00747d4c",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00747d4c",
      "DATA",
      [
        "storage",
        "00c78dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747984 ["INT_ADD", "register:40f0:8", ["const:747984:8", "const:4:8"]]
- 00747984 ["CALL", null, ["callee:00c58f30:8"]]
+ 00747d34 ["INT_ADD", "register:40f0:8", ["const:747d34:8", "const:4:8"]]
+ 00747d34 ["CALL", null, ["callee:00c58f30:8"]]
- 00747994 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00747d44 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 00747998 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 00747998 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00747998 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00747998 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00747d48 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 00747d48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00747d48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00747d48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-631b291a68d963f7420189ec3bfd830a"></a>

### [`00747a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747a00.md) → [`00747db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747db0.md) FUN_00747db0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00747dcc",
      "incomplete_value": false,
      "site": "00747dd0",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747a1c",
      "incomplete_value": false,
      "site": "00747a20",
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
      "00747dd0",
      "DATA",
      [
        "storage",
        "00c77e00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00747dd0",
      "DATA",
      [
        "storage",
        "00c78dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747a18 ["COPY", "register:4050:8", ["const:c77000:8"]]
+ 00747dc8 ["COPY", "register:4050:8", ["const:c78000:8"]]
- 00747a1c ["COPY", "tmp:0:8", ["const:e00:8"]]
- 00747a1c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00747a1c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00747a1c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00747dcc ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 00747dcc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00747dcc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00747dcc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00747a44 ["COPY", "register:0:8", ["register:4048:8"]]
- 00747a44 ["INT_ADD", "register:40f0:8", ["const:747a44:8", "const:4:8"]]
- 00747a44 ["CALLIND", null, ["register:0:8"]]
+ 00747df4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00747df4 ["INT_ADD", "register:40f0:8", ["const:747df4:8", "const:4:8"]]
+ 00747df4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fa3871e4830a7d8e48779ddfbb82ff42"></a>

### [`00747d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747d60.md) → [`00748110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748110.md) FUN_00748110

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
      "definition_site": "0074811c",
      "incomplete_value": false,
      "site": "00748128",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747d6c",
      "incomplete_value": false,
      "site": "00747d78",
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
      "00748128",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748128",
      "DATA",
      [
        "storage",
        "00c78e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747d68 ["COPY", "register:4050:8", ["const:c77000:8"]]
+ 00748118 ["COPY", "register:4050:8", ["const:c78000:8"]]
- 00747d6c ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00747d6c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00747d6c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00747d6c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0074811c ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 0074811c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0074811c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0074811c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-40849a8a6e1a9c80027137edfd14ba22"></a>

### [`00747da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747da4.md) → [`00748154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748154.md) FUN_00748154

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0074816c",
      "incomplete_value": true,
      "site": "00748178",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747dbc",
      "incomplete_value": true,
      "site": "00747dc8",
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
      "00748178",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748178",
      "DATA",
      [
        "storage",
        "00c78e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747db8 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00748168 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00747dbc ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00747dbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00747dbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00747dbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074816c ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 0074816c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074816c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074816c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00747dec ["COPY", "register:0:8", ["register:4040:8"]]
- 00747dec ["INT_ADD", "register:40f0:8", ["const:747dec:8", "const:4:8"]]
- 00747dec ["CALLIND", null, ["register:0:8"]]
+ 0074819c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074819c ["INT_ADD", "register:40f0:8", ["const:74819c:8", "const:4:8"]]
+ 0074819c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c87a45bf89cad9a0843e9fca4cac785d"></a>

### [`00747e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747e00.md) → [`007481b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007481b0.md) FUN_007481b0

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
      "definition_site": "007481dc",
      "incomplete_value": false,
      "site": "007481dc",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747e2c",
      "incomplete_value": false,
      "site": "00747e2c",
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
      "007481dc",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007481dc",
      "DATA",
      [
        "storage",
        "00c78e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747e14 ["INT_ADD", "register:40f0:8", ["const:747e14:8", "const:4:8"]]
- 00747e14 ["CALL", null, ["callee:00c58f30:8"]]
+ 007481c4 ["INT_ADD", "register:40f0:8", ["const:7481c4:8", "const:4:8"]]
+ 007481c4 ["CALL", null, ["callee:00c58f30:8"]]
- 00747e20 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007481d0 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00747e24 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00747e24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00747e24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00747e24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007481d4 ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 007481d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007481d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007481d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b1de6ba5778affa2d04ebe77bd3fd0d"></a>

### [`00747e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747e88.md) → [`00748238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748238.md) FUN_00748238

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
      "definition_site": "00748254",
      "incomplete_value": false,
      "site": "00748254",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00747ea4",
      "incomplete_value": false,
      "site": "00747ea4",
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
      "00748254",
      "DATA",
      [
        "storage",
        "00c77e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748254",
      "DATA",
      [
        "storage",
        "00c78e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00747e9c ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 0074824c ["COPY", "register:4048:8", ["const:c78000:8"]]
- 00747ea0 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00747ea0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00747ea0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00747ea0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00748250 ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 00748250 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00748250 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00748250 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00747ec4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00747ec4 ["INT_ADD", "register:40f0:8", ["const:747ec4:8", "const:4:8"]]
- 00747ec4 ["CALLIND", null, ["register:0:8"]]
+ 00748274 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00748274 ["INT_ADD", "register:40f0:8", ["const:748274:8", "const:4:8"]]
+ 00748274 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-01014fce936530d223f71bc71254d1b2"></a>

### [`00748020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748020.md) → [`007483d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007483d0.md) FUN_007483d0

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
      "definition_site": "007483dc",
      "incomplete_value": false,
      "site": "007483e8",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074802c",
      "incomplete_value": false,
      "site": "00748038",
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
      "007483e8",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007483e8",
      "DATA",
      [
        "storage",
        "00c78ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748028 ["COPY", "register:4050:8", ["const:c77000:8"]]
+ 007483d8 ["COPY", "register:4050:8", ["const:c78000:8"]]
- 0074802c ["COPY", "tmp:0:8", ["const:f10:8"]]
- 0074802c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0074802c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0074802c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007483dc ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 007483dc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007483dc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007483dc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-f01a15ea0cd6c08ad70041b4a1ee757a"></a>

### [`00748064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748064.md) → [`00748414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748414.md) FUN_00748414

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
      "definition_site": "0074842c",
      "incomplete_value": false,
      "site": "00748438",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074807c",
      "incomplete_value": false,
      "site": "00748088",
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
      "00748438",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748438",
      "DATA",
      [
        "storage",
        "00c78ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748078 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 00748428 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 0074807c ["COPY", "tmp:0:8", ["const:f10:8"]]
- 0074807c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074807c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074807c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074842c ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 0074842c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074842c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074842c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007480ac ["COPY", "register:0:8", ["register:4040:8"]]
- 007480ac ["INT_ADD", "register:40f0:8", ["const:7480ac:8", "const:4:8"]]
- 007480ac ["CALLIND", null, ["register:0:8"]]
+ 0074845c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074845c ["INT_ADD", "register:40f0:8", ["const:74845c:8", "const:4:8"]]
+ 0074845c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d105bba6829233a1ffec202b4a34dae2"></a>

### [`007480c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007480c0.md) → [`00748470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748470.md) FUN_00748470

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00748498",
      "incomplete_value": false,
      "site": "0074849c",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007480e8",
      "incomplete_value": false,
      "site": "007480ec",
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
            "const:f10:8"
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
      "0074849c",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074849c",
      "DATA",
      [
        "storage",
        "00c78ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007480d4 ["INT_ADD", "register:40f0:8", ["const:7480d4:8", "const:4:8"]]
- 007480d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00748484 ["INT_ADD", "register:40f0:8", ["const:748484:8", "const:4:8"]]
+ 00748484 ["CALL", null, ["callee:00c58f30:8"]]
- 007480e4 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00748494 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 007480e8 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 007480e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007480e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007480e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00748498 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 00748498 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00748498 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00748498 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0315216021dcc302ef462a0c7906aac7"></a>

### [`00748158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748158.md) → [`00748508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748508.md) FUN_00748508

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00748528",
      "incomplete_value": false,
      "site": "0074852c",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748178",
      "incomplete_value": false,
      "site": "0074817c",
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
            "const:f10:8"
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
      "0074852c",
      "DATA",
      [
        "storage",
        "00c77f10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074852c",
      "DATA",
      [
        "storage",
        "00c78ee0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748174 ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 00748524 ["COPY", "register:4048:8", ["const:c78000:8"]]
- 00748178 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 00748178 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00748178 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00748178 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00748528 ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 00748528 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00748528 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00748528 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0074819c ["COPY", "register:0:8", ["register:4040:8"]]
- 0074819c ["INT_ADD", "register:40f0:8", ["const:74819c:8", "const:4:8"]]
- 0074819c ["CALLIND", null, ["register:0:8"]]
+ 0074854c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074854c ["INT_ADD", "register:40f0:8", ["const:74854c:8", "const:4:8"]]
+ 0074854c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-273a9494296d5a2334c34084b9254549"></a>

### [`007484e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007484e8.md) → [`00748898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748898.md) FUN_00748898

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
      "definition_site": "007488a4",
      "incomplete_value": false,
      "site": "007488b0",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007484f4",
      "incomplete_value": false,
      "site": "00748500",
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
            "const:f90:8"
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
      "007488b0",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007488b0",
      "DATA",
      [
        "storage",
        "00c78f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007484f0 ["COPY", "register:4050:8", ["const:c77000:8"]]
+ 007488a0 ["COPY", "register:4050:8", ["const:c78000:8"]]
- 007484f4 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 007484f4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007484f4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007484f4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007488a4 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 007488a4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007488a4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007488a4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-d88da5002197f97a254cf4bf5cd5e9b3"></a>

### [`0074852c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/0074852c.md) → [`007488dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007488dc.md) FUN_007488dc

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
      "definition_site": "007488f4",
      "incomplete_value": false,
      "site": "00748900",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748544",
      "incomplete_value": false,
      "site": "00748550",
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
      "00748900",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748900",
      "DATA",
      [
        "storage",
        "00c78f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748540 ["COPY", "register:4040:8", ["const:c77000:8"]]
+ 007488f0 ["COPY", "register:4040:8", ["const:c78000:8"]]
- 00748544 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00748544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007488f4 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 007488f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007488f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007488f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00748574 ["COPY", "register:0:8", ["register:4040:8"]]
- 00748574 ["INT_ADD", "register:40f0:8", ["const:748574:8", "const:4:8"]]
- 00748574 ["CALLIND", null, ["register:0:8"]]
+ 00748924 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00748924 ["INT_ADD", "register:40f0:8", ["const:748924:8", "const:4:8"]]
+ 00748924 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-76fa1e2c7a9433657bffb946cac3bd4a"></a>

### [`00748588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748588.md) → [`00748938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748938.md) FUN_00748938

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00748960",
      "incomplete_value": false,
      "site": "00748964",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007485b0",
      "incomplete_value": false,
      "site": "007485b4",
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
            "const:f90:8"
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
      "00748964",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748964",
      "DATA",
      [
        "storage",
        "00c78f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074859c ["INT_ADD", "register:40f0:8", ["const:74859c:8", "const:4:8"]]
- 0074859c ["CALL", null, ["callee:00c58f30:8"]]
+ 0074894c ["INT_ADD", "register:40f0:8", ["const:74894c:8", "const:4:8"]]
+ 0074894c ["CALL", null, ["callee:00c58f30:8"]]
- 007485ac ["COPY", "register:4048:8", ["const:c77000:8"]]
+ 0074895c ["COPY", "register:4048:8", ["const:c78000:8"]]
- 007485b0 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 007485b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007485b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007485b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00748960 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 00748960 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00748960 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00748960 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d4f998628d45910e4aaccb6b8c7d74c3"></a>

### [`00748618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748618.md) → [`007489c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007489c8.md) FUN_007489c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007489e4",
      "incomplete_value": false,
      "site": "007489e8",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748634",
      "incomplete_value": false,
      "site": "00748638",
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
      "007489e8",
      "DATA",
      [
        "storage",
        "00c77f90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007489e8",
      "DATA",
      [
        "storage",
        "00c78f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748630 ["COPY", "register:4050:8", ["const:c77000:8"]]
+ 007489e0 ["COPY", "register:4050:8", ["const:c78000:8"]]
- 00748634 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 00748634 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00748634 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00748634 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007489e4 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 007489e4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007489e4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007489e4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0074865c ["COPY", "register:0:8", ["register:4048:8"]]
- 0074865c ["INT_ADD", "register:40f0:8", ["const:74865c:8", "const:4:8"]]
- 0074865c ["CALLIND", null, ["register:0:8"]]
+ 00748a0c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00748a0c ["INT_ADD", "register:40f0:8", ["const:748a0c:8", "const:4:8"]]
+ 00748a0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f8ddd4ce5f3443f23e07a8209a913506"></a>

### [`007487c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007487c8.md) → [`00748b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748b78.md) FUN_00748b78

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
      "definition_site": "00748b8c",
      "incomplete_value": false,
      "site": "00748b90",
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
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007487dc",
      "incomplete_value": false,
      "site": "007487e0",
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
            "const:10:8"
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
      "00748b90",
      "DATA",
      [
        "storage",
        "00c78010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748b90",
      "DATA",
      [
        "storage",
        "00c78fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007487d4 ["INT_ADD", "register:40f0:8", ["const:7487d4:8", "const:4:8"]]
- 007487d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00748b84 ["INT_ADD", "register:40f0:8", ["const:748b84:8", "const:4:8"]]
+ 00748b84 ["CALL", null, ["callee:00c58f30:8"]]
- 007487dc ["COPY", "tmp:0:8", ["const:10:8"]]
- 007487dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007487dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007487dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748b8c ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 00748b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d94f50daebead6858fbe784190bf9f2a"></a>

### [`007487ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007487ec.md) → [`00748b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748b9c.md) FUN_00748b9c

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
      "definition_site": "00748ba0",
      "incomplete_value": false,
      "site": "00748ba4",
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
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007487f0",
      "incomplete_value": false,
      "site": "007487f4",
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
      "00748ba4",
      "DATA",
      [
        "storage",
        "00c78010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748ba4",
      "DATA",
      [
        "storage",
        "00c78fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007487f0 ["COPY", "tmp:0:8", ["const:10:8"]]
- 007487f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007487f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007487f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748ba0 ["COPY", "tmp:0:8", ["const:fe0:8"]]
+ 00748ba0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748ba0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748ba0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-192d6d65d5b94272d03d202330585d3d"></a>

### [`00748834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748834.md) → [`00748be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748be4.md) FUN_00748be4

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
      "definition_site": "00748bf8",
      "incomplete_value": false,
      "site": "00748bfc",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00748848",
      "incomplete_value": false,
      "site": "0074884c",
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
            "const:90:8"
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
      "00748bfc",
      "DATA",
      [
        "storage",
        "00c78090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748bfc",
      "DATA",
      [
        "storage",
        "00c79060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748840 ["INT_ADD", "register:40f0:8", ["const:748840:8", "const:4:8"]]
- 00748840 ["CALL", null, ["callee:00c58f30:8"]]
+ 00748bf0 ["INT_ADD", "register:40f0:8", ["const:748bf0:8", "const:4:8"]]
+ 00748bf0 ["CALL", null, ["callee:00c58f30:8"]]
- 00748844 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00748bf4 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00748848 ["COPY", "tmp:0:8", ["const:90:8"]]
- 00748848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748bf8 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 00748bf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748bf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748bf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e211046fbc97c6dc4f07b0f57e5bb25"></a>

### [`00748858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748858.md) → [`00748c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748c08.md) FUN_00748c08

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
      "definition_site": "00748c0c",
      "incomplete_value": false,
      "site": "00748c10",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074885c",
      "incomplete_value": false,
      "site": "00748860",
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
            "const:90:8"
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
      "00748c10",
      "DATA",
      [
        "storage",
        "00c78090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748c10",
      "DATA",
      [
        "storage",
        "00c79060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748858 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00748c08 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 0074885c ["COPY", "tmp:0:8", ["const:90:8"]]
- 0074885c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074885c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074885c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748c0c ["COPY", "tmp:0:8", ["const:60:8"]]
+ 00748c0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748c0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748c0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3af893b8de000bc9c7b2d37c559abc7b"></a>

### [`007488a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488a4.md) → [`00748c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748c54.md) FUN_00748c54

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
      "definition_site": "00748c78",
      "incomplete_value": false,
      "site": "00748c78",
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
    "old": {
      "definition_site": "007488c8",
      "incomplete_value": false,
      "site": "007488c8",
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
      "00748c78",
      "DATA",
      [
        "storage",
        "00c78110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748c78",
      "DATA",
      [
        "storage",
        "00c790e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007488b8 ["INT_ADD", "register:40f0:8", ["const:7488b8:8", "const:4:8"]]
- 007488b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00748c68 ["INT_ADD", "register:40f0:8", ["const:748c68:8", "const:4:8"]]
+ 00748c68 ["CALL", null, ["callee:00c58f30:8"]]
- 007488c0 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00748c70 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 007488c4 ["COPY", "tmp:0:8", ["const:110:8"]]
- 007488c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007488c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007488c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748c74 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 00748c74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748c74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748c74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c7d27729c9c1e6bbb40a49fa6d50a5e9"></a>

### [`007488d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488d8.md) → [`00748c88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748c88.md) FUN_00748c88

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
      "definition_site": "00748c94",
      "incomplete_value": false,
      "site": "00748c94",
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
    "old": {
      "definition_site": "007488e4",
      "incomplete_value": false,
      "site": "007488e4",
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
      "00748c94",
      "DATA",
      [
        "storage",
        "00c78110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748c94",
      "DATA",
      [
        "storage",
        "00c790e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007488dc ["COPY", "register:4048:8", ["const:c78000:8"]]
+ 00748c8c ["COPY", "register:4048:8", ["const:c79000:8"]]
- 007488e0 ["COPY", "tmp:0:8", ["const:110:8"]]
- 007488e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007488e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007488e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00748c90 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 00748c90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00748c90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00748c90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-88ebb27052e11421cf4a5e85edfa0b3c"></a>

### [`00748b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b20.md) → [`00748ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748ed0.md) FUN_00748ed0

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
      "definition_site": "00748ee4",
      "incomplete_value": false,
      "site": "00748ee8",
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
    "old": {
      "definition_site": "00748b34",
      "incomplete_value": false,
      "site": "00748b38",
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
            "const:190:8"
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
      "00748ee8",
      "DATA",
      [
        "storage",
        "00c78190",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748ee8",
      "DATA",
      [
        "storage",
        "00c79160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748b2c ["INT_ADD", "register:40f0:8", ["const:748b2c:8", "const:4:8"]]
- 00748b2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00748edc ["INT_ADD", "register:40f0:8", ["const:748edc:8", "const:4:8"]]
+ 00748edc ["CALL", null, ["callee:00c58f30:8"]]
- 00748b30 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00748ee0 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00748b34 ["COPY", "tmp:0:8", ["const:190:8"]]
- 00748b34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748b34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748b34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748ee4 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 00748ee4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748ee4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748ee4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1c0dad550af8adc0bff12270a82ee781"></a>

### [`00748b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b44.md) → [`00748ef4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748ef4.md) FUN_00748ef4

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
      "definition_site": "00748ef8",
      "incomplete_value": false,
      "site": "00748efc",
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
    "old": {
      "definition_site": "00748b48",
      "incomplete_value": false,
      "site": "00748b4c",
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
            "const:190:8"
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
      "00748efc",
      "DATA",
      [
        "storage",
        "00c78190",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00748efc",
      "DATA",
      [
        "storage",
        "00c79160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00748b44 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00748ef4 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00748b48 ["COPY", "tmp:0:8", ["const:190:8"]]
- 00748b48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00748b48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00748b48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00748ef8 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 00748ef8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00748ef8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00748ef8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5e3ccc79d9feab2f36b045c4e3707958"></a>

### [`00748fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748fa0.md) → [`00749350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749350.md) FUN_00749350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007472b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007472b4.md) [`00748d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748d7c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`00747664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747664.md) [`0074912c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/0074912c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0074935c",
      "incomplete_value": false,
      "site": "00749360",
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
      "definition_site": "00748fac",
      "incomplete_value": false,
      "site": "00748fb0",
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
      "0074935c",
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
      "0074935c",
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
- 00748fb0 ["INT_ADD", "register:40f0:8", ["const:748fb0:8", "const:4:8"]]
- 00748fb0 ["CALL", null, ["callee:0043bad8:8"]]
+ 00749360 ["INT_ADD", "register:40f0:8", ["const:749360:8", "const:4:8"]]
+ 00749360 ["CALL", null, ["callee:0043bad8:8"]]
- 00748fa8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00749358 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00748fac ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00748fac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00748fac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00748fac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0074935c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0074935c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0074935c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0074935c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a62ebc0ca7be1a2b378a56bf09204b4b"></a>

### [`00749010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749010.md) → [`007493c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/007493c0.md) FUN_007493c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00749010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749010.md) [`007acb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007acb24.md) [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`007493c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/007493c0.md) [`007acf48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007acf48.md) [`009a6c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a6c04.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00749510",
      "incomplete_value": false,
      "site": "00749518",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00749160",
      "incomplete_value": false,
      "site": "00749168",
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
            "const:f93:8"
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
      "definition_site": "00749534",
      "incomplete_value": false,
      "site": "00749540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00749184",
      "incomplete_value": false,
      "site": "00749190",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c0000:8"
          ],
          [
            "leaf",
            "const:f29:8"
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
      "definition_site": "00749668",
      "incomplete_value": false,
      "site": "00749670",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007492b8",
      "incomplete_value": false,
      "site": "007492c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b5000:8"
          ],
          [
            "leaf",
            "const:e27:8"
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
      "00749510",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00749534",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00749668",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00749510",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00749534",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00749668",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00749168 ["INT_ADD", "register:40f0:8", ["const:749168:8", "const:4:8"]]
- 00749168 ["CALL", null, ["callee:004421f4:8"]]
+ 00749518 ["INT_ADD", "register:40f0:8", ["const:749518:8", "const:4:8"]]
+ 00749518 ["CALL", null, ["callee:004421f4:8"]]
- 00749190 ["INT_ADD", "register:40f0:8", ["const:749190:8", "const:4:8"]]
- 00749190 ["CALL", null, ["callee:00442b54:8"]]
+ 00749540 ["INT_ADD", "register:40f0:8", ["const:749540:8", "const:4:8"]]
+ 00749540 ["CALL", null, ["callee:00442b54:8"]]
- 007492c0 ["INT_ADD", "register:40f0:8", ["const:7492c0:8", "const:4:8"]]
- 007492c0 ["CALL", null, ["callee:004421f4:8"]]
+ 00749670 ["INT_ADD", "register:40f0:8", ["const:749670:8", "const:4:8"]]
+ 00749670 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-fc5d6112c262bf4a8fc1a966b7314c95"></a>

### [`007497fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/007497fc.md) → [`00749bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749bac.md) FUN_00749bac

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
      "definition_site": "00749bb8",
      "incomplete_value": false,
      "site": "00749bc4",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00749808",
      "incomplete_value": false,
      "site": "00749814",
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
      "00749bc4",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00749bc4",
      "DATA",
      [
        "storage",
        "00c791e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00749804 ["COPY", "register:4050:8", ["const:c78000:8"]]
+ 00749bb4 ["COPY", "register:4050:8", ["const:c79000:8"]]
- 00749808 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00749808 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00749808 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00749808 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00749bb8 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 00749bb8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00749bb8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00749bb8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-9c8aeb7a4d931c92d4a992dadd26312e"></a>

### [`00749840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749840.md) → [`00749bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749bf0.md) FUN_00749bf0

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
      "definition_site": "00749c08",
      "incomplete_value": false,
      "site": "00749c14",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00749858",
      "incomplete_value": false,
      "site": "00749864",
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
            "const:210:8"
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
      "00749c14",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00749c14",
      "DATA",
      [
        "storage",
        "00c791e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00749854 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00749c04 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00749858 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00749858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00749858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00749858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00749c08 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 00749c08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00749c08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00749c08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00749888 ["COPY", "register:0:8", ["register:4040:8"]]
- 00749888 ["INT_ADD", "register:40f0:8", ["const:749888:8", "const:4:8"]]
- 00749888 ["CALLIND", null, ["register:0:8"]]
+ 00749c38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00749c38 ["INT_ADD", "register:40f0:8", ["const:749c38:8", "const:4:8"]]
+ 00749c38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f8453060a56ac4920bc3670fdac55d62"></a>

### [`0074989c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/0074989c.md) → [`00749c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749c4c.md) FUN_00749c4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00749c78",
      "incomplete_value": false,
      "site": "00749c78",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007498c8",
      "incomplete_value": false,
      "site": "007498c8",
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
            "const:210:8"
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
      "00749c78",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00749c78",
      "DATA",
      [
        "storage",
        "00c791e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007498b0 ["INT_ADD", "register:40f0:8", ["const:7498b0:8", "const:4:8"]]
- 007498b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00749c60 ["INT_ADD", "register:40f0:8", ["const:749c60:8", "const:4:8"]]
+ 00749c60 ["CALL", null, ["callee:00c58f30:8"]]
- 007498bc ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00749c6c ["COPY", "register:4040:8", ["const:c79000:8"]]
- 007498c0 ["COPY", "tmp:0:8", ["const:210:8"]]
- 007498c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007498c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007498c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00749c70 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 00749c70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00749c70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00749c70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5f659bb61acaf404d5b050696d4d772d"></a>

### [`0074992c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/0074992c.md) → [`00749cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749cdc.md) FUN_00749cdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00749cfc",
      "incomplete_value": false,
      "site": "00749cfc",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074994c",
      "incomplete_value": false,
      "site": "0074994c",
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
            "const:210:8"
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
      "00749cfc",
      "DATA",
      [
        "storage",
        "00c78210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00749cfc",
      "DATA",
      [
        "storage",
        "00c791e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00749944 ["COPY", "register:4040:8", ["const:c78000:8"]]
+ 00749cf4 ["COPY", "register:4040:8", ["const:c79000:8"]]
- 00749948 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00749948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00749948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00749948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00749cf8 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 00749cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00749cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00749cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00749968 ["COPY", "register:0:8", ["register:4040:8"]]
- 00749968 ["INT_ADD", "register:40f0:8", ["const:749968:8", "const:4:8"]]
- 00749968 ["CALLIND", null, ["register:0:8"]]
+ 00749d18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00749d18 ["INT_ADD", "register:40f0:8", ["const:749d18:8", "const:4:8"]]
+ 00749d18 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-178cfb8273733630d30e310a7c01fb0b"></a>

### [`0074a400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a400.md) → [`0074a7b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074a7b0.md) FUN_0074a7b0

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
      "definition_site": "0074a7bc",
      "incomplete_value": false,
      "site": "0074a7c8",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074a40c",
      "incomplete_value": false,
      "site": "0074a418",
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
            "const:290:8"
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
      "0074a7c8",
      "DATA",
      [
        "storage",
        "00c78290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0074a7c8",
      "DATA",
      [
        "storage",
        "00c79260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074a408 ["COPY", "register:4050:8", ["const:c78000:8"]]
+ 0074a7b8 ["COPY", "register:4050:8", ["const:c79000:8"]]
- 0074a40c ["COPY", "tmp:0:8", ["const:290:8"]]
- 0074a40c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0074a40c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0074a40c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0074a7bc ["COPY", "tmp:0:8", ["const:260:8"]]
+ 0074a7bc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0074a7bc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0074a7bc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-82be24742e5cbe3e991403810076b957"></a>

### [`0074a958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a958.md) → [`0074ad08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074ad08.md) _INIT_130

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
      "definition_site": "0074ad44",
      "incomplete_value": true,
      "site": "0074ad60",
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
      "definition_site": "0074a994",
      "incomplete_value": true,
      "site": "0074a9b0",
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
      "definition_site": "0074ad68",
      "incomplete_value": true,
      "site": "0074ad84",
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
      "definition_site": "0074a9b8",
      "incomplete_value": true,
      "site": "0074a9d4",
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
      "definition_site": "0074ad88",
      "incomplete_value": true,
      "site": "0074ada4",
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
      "definition_site": "0074a9d8",
      "incomplete_value": true,
      "site": "0074a9f4",
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
      "0074ad44",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0074ad68",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0074ad88",
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
      "0074ad44",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0074ad68",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0074ad88",
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
- 0074ab8c ["INT_ADD", "register:40f0:8", ["const:74ab8c:8", "const:4:8"]]
- 0074ab8c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0074af3c ["INT_ADD", "register:40f0:8", ["const:74af3c:8", "const:4:8"]]
+ 0074af3c ["CALL", null, ["callee:00c58ed0:8"]]
- 0074a980 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0074ad30 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0074a984 ["COPY", "tmp:0:8", ["const:ea8:8"]]
- 0074a984 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0074a984 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0074a984 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0074ad34 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 0074ad34 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0074ad34 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0074ad34 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-e63f2a24d395ec1dae51c22c694089a3"></a>

### [`0074b25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074b/0074b25c.md) → [`0074b60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074b/0074b60c.md) FUN_0074b60c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 1件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.37% / 新版 96.37%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0074b97c",
      "incomplete_value": false,
      "site": "0074b984",
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
      "definition_site": "0074b5cc",
      "incomplete_value": false,
      "site": "0074b5d4",
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
      "0074b69c",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "0074b70c",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "0074b75c",
      "READ",
      [
        "storage",
        "00c9b630",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0074b69c",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "0074b70c",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "0074b75c",
      "READ",
      [
        "storage",
        "00c9c600",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074b5d4 ["INT_ADD", "register:40f0:8", ["const:74b5d4:8", "const:4:8"]]
- 0074b5d4 ["CALL", null, ["callee:00c59230:8"]]
+ 0074b984 ["INT_ADD", "register:40f0:8", ["const:74b984:8", "const:4:8"]]
+ 0074b984 ["CALL", null, ["callee:00c59230:8"]]
- 0074b298 ["INT_ADD", "register:40f0:8", ["const:74b298:8", "const:4:8"]]
- 0074b298 ["CALL", null, ["callee:008524fc:8"]]
+ 0074b648 ["INT_ADD", "register:40f0:8", ["const:74b648:8", "const:4:8"]]
+ 0074b648 ["CALL", null, ["callee:008524fc:8"]]
- 0074b2b8 ["INT_ADD", "register:40f0:8", ["const:74b2b8:8", "const:4:8"]]
- 0074b2b8 ["CALL", null, ["callee:006e4ecc:8"]]
+ 0074b668 ["INT_ADD", "register:40f0:8", ["const:74b668:8", "const:4:8"]]
+ 0074b668 ["CALL", null, ["callee:006e4ecc:8"]]
~~~


<a id="compare-e21ade243fb0e40844e985478e9c1e29"></a>

### [`0074baa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074b/0074baa8.md) → [`0074be58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074b/0074be58.md) FUN_0074be58

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 5件 [`00615be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615be0.md) [`0063dc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dc84.md) [`00641ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ba0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00651e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00651/00651e94.md) · 呼出先 5件 [`00615f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00615/00615f90.md) [`0063e034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e034.md) [`00641f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641f50.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.06% / 新版 92.06%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0074beb8",
      "value": [
        "leaf",
        "ram:63e034:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0074bb08",
      "value": [
        "leaf",
        "ram:63dc84:8"
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
      "0074bea0",
      "DATA",
      [
        "storage",
        "004347d0",
        null,
        "dword"
      ]
    ],
    [
      "0074beb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0063dc84"
      ]
    ],
    [
      "0074bed4",
      "DATA",
      [
        "storage",
        "004347d0",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "0074bea0",
      "DATA",
      [
        "storage",
        "004347d0",
        null,
        "byte[35]"
      ]
    ],
    [
      "0074beb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0063e034"
      ]
    ],
    [
      "0074bed4",
      "DATA",
      [
        "storage",
        "004347d0",
        null,
        "byte[35]"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074bb08 ["INT_ADD", "register:40f0:8", ["const:74bb08:8", "const:4:8"]]
- 0074bb08 ["CALL", null, ["ram:63dc84:8"]]
+ 0074beb8 ["INT_ADD", "register:40f0:8", ["const:74beb8:8", "const:4:8"]]
+ 0074beb8 ["CALL", null, ["ram:63e034:8"]]
- 0074bad0 ["INT_ADD", "register:40f0:8", ["const:74bad0:8", "const:4:8"]]
- 0074bad0 ["CALL", null, ["callee:008524fc:8"]]
+ 0074be80 ["INT_ADD", "register:40f0:8", ["const:74be80:8", "const:4:8"]]
+ 0074be80 ["CALL", null, ["callee:008524fc:8"]]
- 0074bae8 ["COPY", "tmp:0:8", ["const:cd4:8"]]
- 0074bae8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0074bae8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0074bae8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0074be98 ["COPY", "tmp:0:8", ["const:d14:8"]]
+ 0074be98 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0074be98 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0074be98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-00e3652156c503fa8922997935909380"></a>

### [`0074c928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074c/0074c928.md) → [`0074ccd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074c/0074ccd8.md) FUN_0074ccd8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 13件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 13件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 98.15% / 新版 98.15%

優先判定に残った影響 `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0074cdc8",
      "incomplete_value": true,
      "site": "0074cdd4",
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074ca18",
      "incomplete_value": true,
      "site": "0074ca24",
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
                "const:c80:8"
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
      "definition_site": "0074cdf8",
      "incomplete_value": true,
      "site": "0074ce08",
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
                "const:178:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074ca48",
      "incomplete_value": true,
      "site": "0074ca58",
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
                "const:128:8"
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
      "definition_site": "0074ceac",
      "incomplete_value": true,
      "site": "0074ceb8",
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074cafc",
      "incomplete_value": true,
      "site": "0074cb08",
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
                "const:c80:8"
              ]
            ]
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
      "0074cd30",
      "READ",
      [
        "storage",
        "00c9b578",
        null,
        "pointer"
      ]
    ],
    [
      "0074cd34",
      "DATA",
      [
        "storage",
        "00ca4554",
        null,
        null
      ]
    ],
    [
      "0074cdc8",
      "READ",
      [
        "storage",
        "002c2c80",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0074cd30",
      "READ",
      [
        "storage",
        "00c9c548",
        null,
        "pointer"
      ]
    ],
    [
      "0074cd34",
      "DATA",
      [
        "storage",
        "00ca5524",
        null,
        null
      ]
    ],
    [
      "0074cdc8",
      "READ",
      [
        "storage",
        "002c2cd0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0074d78c ["INT_ADD", "register:40f0:8", ["const:74d78c:8", "const:4:8"]]
- 0074d78c ["CALL", null, ["callee:00467e8c:8"]]
+ 0074db3c ["INT_ADD", "register:40f0:8", ["const:74db3c:8", "const:4:8"]]
+ 0074db3c ["CALL", null, ["callee:00467e8c:8"]]
- 0074c95c ["INT_ADD", "register:40f0:8", ["const:74c95c:8", "const:4:8"]]
- 0074c95c ["CALL", null, ["callee:00467bc0:8"]]
+ 0074cd0c ["INT_ADD", "register:40f0:8", ["const:74cd0c:8", "const:4:8"]]
+ 0074cd0c ["CALL", null, ["callee:00467bc0:8"]]
- 0074c964 ["INT_ADD", "register:40f0:8", ["const:74c964:8", "const:4:8"]]
- 0074c964 ["CALL", null, ["callee:008524fc:8"]]
+ 0074cd14 ["INT_ADD", "register:40f0:8", ["const:74cd14:8", "const:4:8"]]
+ 0074cd14 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-69495ab25d82e240cbd18bd63857978d"></a>

### [`0074dc64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074d/0074dc64.md) → [`0074e014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e014.md) FUN_0074e014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md)
- 新版 呼出元 1件 [`0081b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081b/0081b818.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00b1217c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b1217c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.18% / 新版 98.18%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0074e044",
      "incomplete_value": true,
      "site": "0074e05c",
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
                "const:e33:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074dc94",
      "incomplete_value": true,
      "site": "0074dcac",
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
                "const:d5c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0074e044",
      "READ",
      [
        "storage",
        "002afd5c",
        null,
        "string"
      ]
    ],
    [
      "0074e328",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0074e044",
      "READ",
      [
        "storage",
        "002afe33",
        null,
        "string"
      ]
    ],
    [
      "0074e328",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074dc8c ["COPY", "tmp:0:8", ["const:d5c:8"]]
- 0074dc8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0074dc8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0074dc8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0074e03c ["COPY", "tmp:0:8", ["const:e33:8"]]
+ 0074e03c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0074e03c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0074e03c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0074dcc4 ["INT_ADD", "register:40f0:8", ["const:74dcc4:8", "const:4:8"]]
- 0074dcc4 ["CALL", null, ["callee:00b1217c:8"]]
+ 0074e074 ["INT_ADD", "register:40f0:8", ["const:74e074:8", "const:4:8"]]
+ 0074e074 ["CALL", null, ["callee:00b1217c:8"]]
- 0074dcd8 ["INT_ADD", "register:40f0:8", ["const:74dcd8:8", "const:4:8"]]
- 0074dcd8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0074e088 ["INT_ADD", "register:40f0:8", ["const:74e088:8", "const:4:8"]]
+ 0074e088 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5b45168e997315975e0265cf35e3c279"></a>

### [`0074e3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e3dc.md) → [`0074e78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e78c.md) FUN_0074e78c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00932664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932664.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cef8.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md)
- 新版 呼出元 1件 [`00933610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933610.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048d218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d218.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.75% / 新版 92.75%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0074e7f8",
      "incomplete_value": true,
      "site": "0074e7f8",
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
                "const:106:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074e448",
      "incomplete_value": true,
      "site": "0074e448",
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
                "const:39:8"
              ]
            ]
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
      "definition_site": "0074e824",
      "incomplete_value": true,
      "site": "0074e824",
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074e474",
      "incomplete_value": true,
      "site": "0074e474",
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
                "const:e83:8"
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
      "definition_site": "0074e8b8",
      "incomplete_value": true,
      "site": "0074e8d0",
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
                "const:b83:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0074e508",
      "incomplete_value": true,
      "site": "0074e520",
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
                "const:ab6:8"
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
      "0074e7ec",
      "READ",
      [
        "storage",
        "002a9039",
        null,
        "string"
      ]
    ],
    [
      "0074e814",
      "READ",
      [
        "storage",
        "002a9e83",
        null,
        "string"
      ]
    ],
    [
      "0074e8b8",
      "READ",
      [
        "storage",
        "002acab6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0074e7ec",
      "READ",
      [
        "storage",
        "002a9106",
        null,
        "string"
      ]
    ],
    [
      "0074e814",
      "READ",
      [
        "storage",
        "002a9f50",
        null,
        "string"
      ]
    ],
    [
      "0074e8b8",
      "READ",
      [
        "storage",
        "002acb83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0074e438 ["COPY", "tmp:0:8", ["const:39:8"]]
- 0074e438 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0074e438 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0074e438 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0074e7e8 ["COPY", "tmp:0:8", ["const:106:8"]]
+ 0074e7e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0074e7e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0074e7e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0074e454 ["INT_ADD", "register:40f0:8", ["const:74e454:8", "const:4:8"]]
- 0074e454 ["CALL", null, ["callee:0048d1b4:8"]]
+ 0074e804 ["INT_ADD", "register:40f0:8", ["const:74e804:8", "const:4:8"]]
+ 0074e804 ["CALL", null, ["callee:0048d1b4:8"]]
- 0074e45c ["COPY", "tmp:0:8", ["const:e83:8"]]
- 0074e45c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0074e45c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0074e45c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0074e80c ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 0074e80c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0074e80c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0074e80c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


