# v16.0.2 → v16.0.3 · 最優先の変更候補 (68)

[一覧の目次](README.md)

<a id="compare-fc408ab113e54a39c9d55c4c7a7ede4e"></a>

### [`009b756c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b756c.md) → [`009b8518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8518.md) FUN_009b8518

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
      "definition_site": "009b8530",
      "incomplete_value": false,
      "site": "009b853c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7584",
      "incomplete_value": false,
      "site": "009b7590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:2e0:8"
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
      "009b853c",
      "DATA",
      [
        "storage",
        "00c892e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b853c",
      "DATA",
      [
        "storage",
        "00c8a2b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7580 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b852c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b7584 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 009b7584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8530 ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 009b8530 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8530 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8530 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b75b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b75b4 ["INT_ADD", "register:40f0:8", ["const:9b75b4:8", "const:4:8"]]
- 009b75b4 ["CALLIND", null, ["register:0:8"]]
+ 009b8560 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8560 ["INT_ADD", "register:40f0:8", ["const:9b8560:8", "const:4:8"]]
+ 009b8560 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-21b4f24fe885cbc47c6912410056f127"></a>

### [`009b75c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b75c8.md) → [`009b8574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8574.md) FUN_009b8574

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
      "definition_site": "009b85a0",
      "incomplete_value": false,
      "site": "009b85a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b75f4",
      "incomplete_value": false,
      "site": "009b75f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:2e0:8"
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
      "009b85a0",
      "DATA",
      [
        "storage",
        "00c892e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b85a0",
      "DATA",
      [
        "storage",
        "00c8a2b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b75dc ["INT_ADD", "register:40f0:8", ["const:9b75dc:8", "const:4:8"]]
- 009b75dc ["CALL", null, ["callee:00c58f30:8"]]
+ 009b8588 ["INT_ADD", "register:40f0:8", ["const:9b8588:8", "const:4:8"]]
+ 009b8588 ["CALL", null, ["callee:00c58f30:8"]]
- 009b75e8 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b8594 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b75ec ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 009b75ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b75ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b75ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8598 ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 009b8598 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8598 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8598 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0389ca1ddf20c8dfd9addc438df8df81"></a>

### [`009b7650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7650.md) → [`009b85fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b85fc.md) FUN_009b85fc

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
      "definition_site": "009b8618",
      "incomplete_value": false,
      "site": "009b8618",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b766c",
      "incomplete_value": false,
      "site": "009b766c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:2e0:8"
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
      "009b8618",
      "DATA",
      [
        "storage",
        "00c892e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8618",
      "DATA",
      [
        "storage",
        "00c8a2b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7664 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009b8610 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009b7668 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 009b7668 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b7668 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b7668 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b8614 ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 009b8614 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b8614 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b8614 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b768c ["COPY", "register:0:8", ["register:4048:8"]]
- 009b768c ["INT_ADD", "register:40f0:8", ["const:9b768c:8", "const:4:8"]]
- 009b768c ["CALLIND", null, ["register:0:8"]]
+ 009b8638 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b8638 ["INT_ADD", "register:40f0:8", ["const:9b8638:8", "const:4:8"]]
+ 009b8638 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f488e0e37ed2e76af41581af3dce2680"></a>

### [`009b7794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7794.md) → [`009b8740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8740.md) FUN_009b8740

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`009b5900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5900.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b8778",
      "incomplete_value": false,
      "site": "009b8780",
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
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b77cc",
      "incomplete_value": false,
      "site": "009b77d4",
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
            "const:690:8"
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
      "009b8780",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "009b8838",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8780",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "009b8838",
      "READ",
      [
        "storage",
        "00c71670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b77c4 ["INT_ADD", "register:40f0:8", ["const:9b77c4:8", "const:4:8"]]
- 009b77c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b8770 ["INT_ADD", "register:40f0:8", ["const:9b8770:8", "const:4:8"]]
+ 009b8770 ["CALL", null, ["callee:00c58f30:8"]]
- 009b77c8 ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 009b8774 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 009b77cc ["COPY", "tmp:0:8", ["const:690:8"]]
- 009b77cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b77cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b77cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8778 ["COPY", "tmp:0:8", ["const:660:8"]]
+ 009b8778 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8778 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8778 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e053523154be7085ba9929970dc5b16"></a>

### [`009b790c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b790c.md) → [`009b88b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b88b8.md) FUN_009b88b8

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
      "definition_site": "009b88c4",
      "incomplete_value": false,
      "site": "009b88d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:330:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7918",
      "incomplete_value": false,
      "site": "009b7924",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:360:8"
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
      "009b88d0",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b88d0",
      "DATA",
      [
        "storage",
        "00c8a330",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7914 ["COPY", "register:4050:8", ["const:c89000:8"]]
+ 009b88c0 ["COPY", "register:4050:8", ["const:c8a000:8"]]
- 009b7918 ["COPY", "tmp:0:8", ["const:360:8"]]
- 009b7918 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b7918 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b7918 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b88c4 ["COPY", "tmp:0:8", ["const:330:8"]]
+ 009b88c4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b88c4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b88c4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-cefe824d0dfa7f8ad7db928d8bf22610"></a>

### [`009b7950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7950.md) → [`009b88fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b88fc.md) FUN_009b88fc

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
      "definition_site": "009b8914",
      "incomplete_value": false,
      "site": "009b8920",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:330:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7968",
      "incomplete_value": false,
      "site": "009b7974",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:360:8"
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
      "009b8920",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8920",
      "DATA",
      [
        "storage",
        "00c8a330",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7964 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b8910 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b7968 ["COPY", "tmp:0:8", ["const:360:8"]]
- 009b7968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8914 ["COPY", "tmp:0:8", ["const:330:8"]]
+ 009b8914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b7998 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7998 ["INT_ADD", "register:40f0:8", ["const:9b7998:8", "const:4:8"]]
- 009b7998 ["CALLIND", null, ["register:0:8"]]
+ 009b8944 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8944 ["INT_ADD", "register:40f0:8", ["const:9b8944:8", "const:4:8"]]
+ 009b8944 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0f12e432af5aaaf41d8c6c460edbbfff"></a>

### [`009b79ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b79ac.md) → [`009b8958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8958.md) FUN_009b8958

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
      "definition_site": "009b8984",
      "incomplete_value": false,
      "site": "009b8984",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:330:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b79d8",
      "incomplete_value": false,
      "site": "009b79d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:360:8"
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
      "009b8984",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8984",
      "DATA",
      [
        "storage",
        "00c8a330",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b79c0 ["INT_ADD", "register:40f0:8", ["const:9b79c0:8", "const:4:8"]]
- 009b79c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b896c ["INT_ADD", "register:40f0:8", ["const:9b896c:8", "const:4:8"]]
+ 009b896c ["CALL", null, ["callee:00c58f30:8"]]
- 009b79cc ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b8978 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b79d0 ["COPY", "tmp:0:8", ["const:360:8"]]
- 009b79d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b79d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b79d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b897c ["COPY", "tmp:0:8", ["const:330:8"]]
+ 009b897c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b897c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b897c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-52e32b6c0488a3ad0b48b2f7ef5bde32"></a>

### [`009b7a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7a34.md) → [`009b89e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b89e0.md) FUN_009b89e0

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
      "definition_site": "009b89fc",
      "incomplete_value": false,
      "site": "009b89fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:330:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7a50",
      "incomplete_value": false,
      "site": "009b7a50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:360:8"
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
      "009b89fc",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b89fc",
      "DATA",
      [
        "storage",
        "00c8a330",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7a48 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009b89f4 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009b7a4c ["COPY", "tmp:0:8", ["const:360:8"]]
- 009b7a4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b7a4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b7a4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b89f8 ["COPY", "tmp:0:8", ["const:330:8"]]
+ 009b89f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b89f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b89f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b7a70 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b7a70 ["INT_ADD", "register:40f0:8", ["const:9b7a70:8", "const:4:8"]]
- 009b7a70 ["CALLIND", null, ["register:0:8"]]
+ 009b8a1c ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b8a1c ["INT_ADD", "register:40f0:8", ["const:9b8a1c:8", "const:4:8"]]
+ 009b8a1c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3116d0b11807d3153f4c6a0cfd6f5360"></a>

### [`009b7c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7c6c.md) → [`009b8c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8c18.md) FUN_009b8c18

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
      "definition_site": "009b8c44",
      "incomplete_value": false,
      "site": "009b8c44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:3b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7c98",
      "incomplete_value": false,
      "site": "009b7c98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:3e0:8"
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
      "009b8c44",
      "DATA",
      [
        "storage",
        "00c893e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8c44",
      "DATA",
      [
        "storage",
        "00c8a3b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7c80 ["INT_ADD", "register:40f0:8", ["const:9b7c80:8", "const:4:8"]]
- 009b7c80 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b8c2c ["INT_ADD", "register:40f0:8", ["const:9b8c2c:8", "const:4:8"]]
+ 009b8c2c ["CALL", null, ["callee:00c58f30:8"]]
- 009b7c8c ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b8c38 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b7c90 ["COPY", "tmp:0:8", ["const:3e0:8"]]
- 009b7c90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7c90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7c90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8c3c ["COPY", "tmp:0:8", ["const:3b0:8"]]
+ 009b8c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c4cb4d96326ea2b3636ca660fdbb0a53"></a>

### [`009b7cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7cf4.md) → [`009b8ca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8ca0.md) FUN_009b8ca0

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
      "definition_site": "009b8cbc",
      "incomplete_value": false,
      "site": "009b8cbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:3b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7d10",
      "incomplete_value": false,
      "site": "009b7d10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:3e0:8"
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
      "009b8cbc",
      "DATA",
      [
        "storage",
        "00c893e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8cbc",
      "DATA",
      [
        "storage",
        "00c8a3b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7d08 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009b8cb4 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009b7d0c ["COPY", "tmp:0:8", ["const:3e0:8"]]
- 009b7d0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b7d0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b7d0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b8cb8 ["COPY", "tmp:0:8", ["const:3b0:8"]]
+ 009b8cb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b8cb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b8cb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b7d30 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b7d30 ["INT_ADD", "register:40f0:8", ["const:9b7d30:8", "const:4:8"]]
- 009b7d30 ["CALLIND", null, ["register:0:8"]]
+ 009b8cdc ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b8cdc ["INT_ADD", "register:40f0:8", ["const:9b8cdc:8", "const:4:8"]]
+ 009b8cdc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9c8f0f3478887400f1cb1641528d2895"></a>

### [`009b7e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7e38.md) → [`009b8de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8de4.md) FUN_009b8de4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`009b5164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5164.md) · 呼出先 7件 [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) [`005b772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b772c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b8e1c",
      "incomplete_value": false,
      "site": "009b8e24",
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
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7e70",
      "incomplete_value": false,
      "site": "009b7e78",
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
            "const:690:8"
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
      "009b8e24",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "009b8edc",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8e24",
      "DATA",
      [
        "storage",
        "00c71660",
        null,
        "pointer"
      ]
    ],
    [
      "009b8edc",
      "READ",
      [
        "storage",
        "00c71670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7e68 ["INT_ADD", "register:40f0:8", ["const:9b7e68:8", "const:4:8"]]
- 009b7e68 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b8e14 ["INT_ADD", "register:40f0:8", ["const:9b8e14:8", "const:4:8"]]
+ 009b8e14 ["CALL", null, ["callee:00c58f30:8"]]
- 009b7e6c ["COPY", "register:4040:8", ["const:c70000:8"]]
+ 009b8e18 ["COPY", "register:4040:8", ["const:c71000:8"]]
- 009b7e70 ["COPY", "tmp:0:8", ["const:690:8"]]
- 009b7e70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7e70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7e70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8e1c ["COPY", "tmp:0:8", ["const:660:8"]]
+ 009b8e1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8e1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8e1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-34fbb95007523ac62cf1c11d82bae617"></a>

### [`009b7fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7fb0.md) → [`009b8f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8f5c.md) FUN_009b8f5c

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
      "definition_site": "009b8f68",
      "incomplete_value": false,
      "site": "009b8f74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b7fbc",
      "incomplete_value": false,
      "site": "009b7fc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009b8f74",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8f74",
      "DATA",
      [
        "storage",
        "00c8a430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7fb8 ["COPY", "register:4050:8", ["const:c89000:8"]]
+ 009b8f64 ["COPY", "register:4050:8", ["const:c8a000:8"]]
- 009b7fbc ["COPY", "tmp:0:8", ["const:460:8"]]
- 009b7fbc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b7fbc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b7fbc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b8f68 ["COPY", "tmp:0:8", ["const:430:8"]]
+ 009b8f68 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b8f68 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b8f68 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-15c59eee1f0269ec80c386acde55c483"></a>

### [`009b7ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7ff4.md) → [`009b8fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8fa0.md) FUN_009b8fa0

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
      "definition_site": "009b8fb8",
      "incomplete_value": false,
      "site": "009b8fc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b800c",
      "incomplete_value": false,
      "site": "009b8018",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009b8fc4",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8fc4",
      "DATA",
      [
        "storage",
        "00c8a430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8008 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b8fb4 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b800c ["COPY", "tmp:0:8", ["const:460:8"]]
- 009b800c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b800c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b800c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8fb8 ["COPY", "tmp:0:8", ["const:430:8"]]
+ 009b8fb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8fb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8fb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b803c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b803c ["INT_ADD", "register:40f0:8", ["const:9b803c:8", "const:4:8"]]
- 009b803c ["CALLIND", null, ["register:0:8"]]
+ 009b8fe8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8fe8 ["INT_ADD", "register:40f0:8", ["const:9b8fe8:8", "const:4:8"]]
+ 009b8fe8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7c534844219744e2af25efc82f4d7cf0"></a>

### [`009b8050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8050.md) → [`009b8ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8ffc.md) FUN_009b8ffc

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
      "definition_site": "009b9028",
      "incomplete_value": false,
      "site": "009b9028",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b807c",
      "incomplete_value": false,
      "site": "009b807c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:460:8"
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
      "009b9028",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b9028",
      "DATA",
      [
        "storage",
        "00c8a430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8064 ["INT_ADD", "register:40f0:8", ["const:9b8064:8", "const:4:8"]]
- 009b8064 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b9010 ["INT_ADD", "register:40f0:8", ["const:9b9010:8", "const:4:8"]]
+ 009b9010 ["CALL", null, ["callee:00c58f30:8"]]
- 009b8070 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b901c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b8074 ["COPY", "tmp:0:8", ["const:460:8"]]
- 009b8074 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b8074 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b8074 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b9020 ["COPY", "tmp:0:8", ["const:430:8"]]
+ 009b9020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b9020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b9020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0e3a99489604258d4e997b4587917c3a"></a>

### [`009b80d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b80d8.md) → [`009b9084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9084.md) FUN_009b9084

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
      "definition_site": "009b90a0",
      "incomplete_value": false,
      "site": "009b90a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b80f4",
      "incomplete_value": false,
      "site": "009b80f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009b90a0",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b90a0",
      "DATA",
      [
        "storage",
        "00c8a430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b80ec ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009b9098 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009b80f0 ["COPY", "tmp:0:8", ["const:460:8"]]
- 009b80f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b80f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b80f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b909c ["COPY", "tmp:0:8", ["const:430:8"]]
+ 009b909c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b909c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b909c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b8114 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b8114 ["INT_ADD", "register:40f0:8", ["const:9b8114:8", "const:4:8"]]
- 009b8114 ["CALLIND", null, ["register:0:8"]]
+ 009b90c0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b90c0 ["INT_ADD", "register:40f0:8", ["const:9b90c0:8", "const:4:8"]]
+ 009b90c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8d585a1ab662fdefb68d685c1c45860d"></a>

### [`009b8270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8270.md) → [`009b921c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b921c.md) FUN_009b921c

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
      "definition_site": "009b9228",
      "incomplete_value": false,
      "site": "009b9234",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b827c",
      "incomplete_value": false,
      "site": "009b8288",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009b9234",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b9234",
      "DATA",
      [
        "storage",
        "00c8a4b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8278 ["COPY", "register:4050:8", ["const:c89000:8"]]
+ 009b9224 ["COPY", "register:4050:8", ["const:c8a000:8"]]
- 009b827c ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 009b827c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b827c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b827c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b9228 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 009b9228 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b9228 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b9228 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-1ddcc2cf7e424d229b1fb0df2657c27c"></a>

### [`009b82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b82b4.md) → [`009b9260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9260.md) FUN_009b9260

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
      "definition_site": "009b9278",
      "incomplete_value": false,
      "site": "009b9284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b82cc",
      "incomplete_value": false,
      "site": "009b82d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009b9284",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b9284",
      "DATA",
      [
        "storage",
        "00c8a4b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b82c8 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b9274 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b82cc ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 009b82cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b82cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b82cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b9278 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 009b9278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b9278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b9278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b82fc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b82fc ["INT_ADD", "register:40f0:8", ["const:9b82fc:8", "const:4:8"]]
- 009b82fc ["CALLIND", null, ["register:0:8"]]
+ 009b92a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b92a8 ["INT_ADD", "register:40f0:8", ["const:9b92a8:8", "const:4:8"]]
+ 009b92a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-011e98685d84ba156b6f6db719b1cb10"></a>

### [`009b8310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8310.md) → [`009b92bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b92bc.md) FUN_009b92bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009b92e8",
      "incomplete_value": true,
      "site": "009b92e8",
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
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b833c",
      "incomplete_value": true,
      "site": "009b833c",
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
            "const:4e0:8"
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
      "009b92e8",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b92e8",
      "DATA",
      [
        "storage",
        "00c8a4b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8324 ["INT_ADD", "register:40f0:8", ["const:9b8324:8", "const:4:8"]]
- 009b8324 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b92d0 ["INT_ADD", "register:40f0:8", ["const:9b92d0:8", "const:4:8"]]
+ 009b92d0 ["CALL", null, ["callee:00c58f30:8"]]
- 009b8330 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009b92dc ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009b8334 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 009b8334 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b8334 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b8334 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b92e0 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 009b92e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b92e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b92e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4e642a9b12f2e5141d83c8f43bf08ea"></a>

### [`009b8398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8398.md) → [`009b9344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9344.md) FUN_009b9344

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
      "definition_site": "009b9360",
      "incomplete_value": false,
      "site": "009b9360",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b83b4",
      "incomplete_value": false,
      "site": "009b83b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009b9360",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b9360",
      "DATA",
      [
        "storage",
        "00c8a4b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b83ac ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009b9358 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009b83b0 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 009b83b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b83b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b83b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b935c ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 009b935c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b935c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b935c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b83d4 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b83d4 ["INT_ADD", "register:40f0:8", ["const:9b83d4:8", "const:4:8"]]
- 009b83d4 ["CALLIND", null, ["register:0:8"]]
+ 009b9380 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b9380 ["INT_ADD", "register:40f0:8", ["const:9b9380:8", "const:4:8"]]
+ 009b9380 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8c88bfadbb3802c236465829fd2a4cb9"></a>

### [`009b84dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b84dc.md) → [`009b9488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9488.md) _INIT_197

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009b94c4",
      "incomplete_value": true,
      "site": "009b94e0",
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
      "definition_site": "009b8518",
      "incomplete_value": true,
      "site": "009b8534",
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
      "definition_site": "009b94e8",
      "incomplete_value": true,
      "site": "009b9504",
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
      "definition_site": "009b853c",
      "incomplete_value": true,
      "site": "009b8558",
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
      "definition_site": "009b9508",
      "incomplete_value": true,
      "site": "009b9524",
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
      "definition_site": "009b855c",
      "incomplete_value": true,
      "site": "009b8578",
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
      "009b94c4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009b94e8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009b9508",
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
      "009b94c4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009b94e8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009b9508",
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
- 009b8710 ["INT_ADD", "register:40f0:8", ["const:9b8710:8", "const:4:8"]]
- 009b8710 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009b96bc ["INT_ADD", "register:40f0:8", ["const:9b96bc:8", "const:4:8"]]
+ 009b96bc ["CALL", null, ["callee:00c58ed0:8"]]
- 009b8504 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009b94b0 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 009b8508 ["COPY", "tmp:0:8", ["const:d08:8"]]
- 009b8508 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009b8508 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009b8508 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009b94b4 ["COPY", "tmp:0:8", ["const:cc8:8"]]
+ 009b94b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009b94b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009b94b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-c7983959e4b322e3e536852bb8036edf"></a>

### [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) → [`009b98d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b98d8.md) FUN_009b98d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 13件 [`009355f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/009355f0.md) [`00935e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935e90.md) [`009adbbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbbc.md) [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) [`009b9240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9240.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 13件 [`0093659c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/0093659c.md) [`00936e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936e3c.md) [`009aeb68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aeb68.md) [`009b9b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9b50.md) [`009ba1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba1ec.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.66% / 新版 97.66%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009b9a38",
      "incomplete_value": false,
      "site": "009b9a38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:530:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b8a8c",
      "incomplete_value": false,
      "site": "009b8a8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:560:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009b99c4",
      "value": [
        "leaf",
        "ram:93659c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009b8a18",
      "value": [
        "leaf",
        "ram:9355f0:8"
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
      "009b99c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009355f0"
      ]
    ],
    [
      "009b9a38",
      "DATA",
      [
        "storage",
        "00c89560",
        null,
        "undefined *"
      ]
    ],
    [
      "009b9a70",
      "READ",
      [
        "storage",
        "00c89580",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009b99c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0093659c"
      ]
    ],
    [
      "009b9a38",
      "DATA",
      [
        "storage",
        "00c8a530",
        null,
        "undefined *"
      ]
    ],
    [
      "009b9a70",
      "READ",
      [
        "storage",
        "00c8a550",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8a18 ["INT_ADD", "register:40f0:8", ["const:9b8a18:8", "const:4:8"]]
- 009b8a18 ["CALL", null, ["ram:9355f0:8"]]
+ 009b99c4 ["INT_ADD", "register:40f0:8", ["const:9b99c4:8", "const:4:8"]]
+ 009b99c4 ["CALL", null, ["ram:93659c:8"]]
- 009b8968 ["INT_ADD", "register:40f0:8", ["const:9b8968:8", "const:4:8"]]
- 009b8968 ["CALL", null, ["callee:009b9b50:8"]]
+ 009b9914 ["INT_ADD", "register:40f0:8", ["const:9b9914:8", "const:4:8"]]
+ 009b9914 ["CALL", null, ["callee:009b9b50:8"]]
- 009b8980 ["INT_ADD", "register:40f0:8", ["const:9b8980:8", "const:4:8"]]
- 009b8980 ["CALL", null, ["callee:009ba1ec:8"]]
+ 009b992c ["INT_ADD", "register:40f0:8", ["const:9b992c:8", "const:4:8"]]
+ 009b992c ["CALL", null, ["callee:009ba1ec:8"]]
~~~


<a id="compare-ea17e604e040aa6e0d9a1eda4e4bb06f"></a>

### [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) → [`009b9b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9b50.md) FUN_009b9b50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) · 呼出先 20件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 1件 [`009b98d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b98d8.md) · 呼出先 20件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.14% / 新版 93.14%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b9b98",
      "incomplete_value": false,
      "site": "009b9bb4",
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
      "definition_site": "009b8bec",
      "incomplete_value": false,
      "site": "009b8c08",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009b9ba0",
      "incomplete_value": false,
      "site": "009b9bb4",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b8bf4",
      "incomplete_value": false,
      "site": "009b8c08",
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
            "const:d40:8"
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
      "definition_site": "009b9ba8",
      "incomplete_value": false,
      "site": "009b9bb4",
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
            "const:d20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009b8bfc",
      "incomplete_value": false,
      "site": "009b8c08",
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
            "const:d60:8"
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
      "009b9b8c",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "009b9b98",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ],
    [
      "009b9ba0",
      "PARAM",
      [
        "storage",
        "01123d40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009b9b8c",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "009b9b98",
      "PARAM",
      [
        "storage",
        "00ca5fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "009b9ba0",
      "PARAM",
      [
        "storage",
        "01124d00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8c08 ["INT_ADD", "register:40f0:8", ["const:9b8c08:8", "const:4:8"]]
- 009b8c08 ["CALL", null, ["callee:0047e96c:8"]]
+ 009b9bb4 ["INT_ADD", "register:40f0:8", ["const:9b9bb4:8", "const:4:8"]]
+ 009b9bb4 ["CALL", null, ["callee:0047e96c:8"]]
- 009b90c8 ["INT_ADD", "register:40f0:8", ["const:9b90c8:8", "const:4:8"]]
- 009b90c8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 009ba074 ["INT_ADD", "register:40f0:8", ["const:9ba074:8", "const:4:8"]]
+ 009ba074 ["CALL", null, ["callee:00c58ef0:8"]]
- 009b9110 ["INT_ADD", "register:40f0:8", ["const:9b9110:8", "const:4:8"]]
- 009b9110 ["CALL", null, ["callee:00c58f10:8"]]
+ 009ba0bc ["INT_ADD", "register:40f0:8", ["const:9ba0bc:8", "const:4:8"]]
+ 009ba0bc ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-249d1b977e59b750a2c9858b9a6978b4"></a>

### [`009b9240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9240.md) → [`009ba1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba1ec.md) FUN_009ba1ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) · 呼出先 12件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) [`009ba3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3c8.md)
- 新版 呼出元 1件 [`009b98d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b98d8.md) · 呼出先 12件 [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`008b7f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f44.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md) [`009bb374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb374.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ba3a0",
      "incomplete_value": false,
      "site": "009ba3a4",
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
      "definition_site": "009b93f4",
      "incomplete_value": false,
      "site": "009b93f8",
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
    "ordinal": 23,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ba2ec",
      "DATA",
      [
        "storage",
        "00c895e0",
        null,
        "undefined *"
      ]
    ],
    [
      "009ba348",
      "READ",
      [
        "storage",
        "00c89600",
        null,
        "pointer"
      ]
    ],
    [
      "009ba348",
      "READ",
      [
        "storage",
        "00c89608",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ba2ec",
      "DATA",
      [
        "storage",
        "00c8a5b0",
        null,
        "undefined *"
      ]
    ],
    [
      "009ba348",
      "READ",
      [
        "storage",
        "00c8a5d0",
        null,
        "pointer"
      ]
    ],
    [
      "009ba348",
      "READ",
      [
        "storage",
        "00c8a5d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b9290 ["INT_ADD", "register:40f0:8", ["const:9b9290:8", "const:4:8"]]
- 009b9290 ["CALL", null, ["callee:0048a2ac:8"]]
+ 009ba23c ["INT_ADD", "register:40f0:8", ["const:9ba23c:8", "const:4:8"]]
+ 009ba23c ["CALL", null, ["callee:0048a2ac:8"]]
- 009b92a4 ["INT_ADD", "register:40f0:8", ["const:9b92a4:8", "const:4:8"]]
- 009b92a4 ["CALL", null, ["callee:0048a2ac:8"]]
+ 009ba250 ["INT_ADD", "register:40f0:8", ["const:9ba250:8", "const:4:8"]]
+ 009ba250 ["CALL", null, ["callee:0048a2ac:8"]]
- 009b92f4 ["INT_ADD", "register:40f0:8", ["const:9b92f4:8", "const:4:8"]]
- 009b92f4 ["CALL", null, ["callee:00a47944:8"]]
+ 009ba2a0 ["INT_ADD", "register:40f0:8", ["const:9ba2a0:8", "const:4:8"]]
+ 009ba2a0 ["CALL", null, ["callee:00a47944:8"]]
~~~


<a id="compare-45c0571fd6ba28ce2a12ed85dc549c5b"></a>

### [`009ba0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba0cc.md) → [`009bb078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb078.md) FUN_009bb078

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
      "definition_site": "009bb09c",
      "incomplete_value": false,
      "site": "009bb09c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:530:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ba0f0",
      "incomplete_value": false,
      "site": "009ba0f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:560:8"
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
      "009bb09c",
      "DATA",
      [
        "storage",
        "00c89560",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bb09c",
      "DATA",
      [
        "storage",
        "00c8a530",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba0e0 ["INT_ADD", "register:40f0:8", ["const:9ba0e0:8", "const:4:8"]]
- 009ba0e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009bb08c ["INT_ADD", "register:40f0:8", ["const:9bb08c:8", "const:4:8"]]
+ 009bb08c ["CALL", null, ["callee:00c58f30:8"]]
- 009ba0e8 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009bb094 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009ba0ec ["COPY", "tmp:0:8", ["const:560:8"]]
- 009ba0ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ba0ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ba0ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bb098 ["COPY", "tmp:0:8", ["const:530:8"]]
+ 009bb098 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bb098 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bb098 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c925058ec9f6d6641ee386331c41c170"></a>

### [`009ba100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba100.md) → [`009bb0ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb0ac.md) FUN_009bb0ac

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
      "definition_site": "009bb0b8",
      "incomplete_value": false,
      "site": "009bb0b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:530:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ba10c",
      "incomplete_value": false,
      "site": "009ba10c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:560:8"
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
      "009bb0b8",
      "DATA",
      [
        "storage",
        "00c89560",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bb0b8",
      "DATA",
      [
        "storage",
        "00c8a530",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba104 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009bb0b0 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009ba108 ["COPY", "tmp:0:8", ["const:560:8"]]
- 009ba108 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009ba108 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009ba108 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009bb0b4 ["COPY", "tmp:0:8", ["const:530:8"]]
+ 009bb0b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009bb0b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009bb0b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9eb02f4553bdc64850c49fa715e51c08"></a>

### [`009ba11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba11c.md) → [`009bb0c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb0c8.md) FUN_009bb0c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`009ae980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae980.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.56% / 新版 97.56%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bb120",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ba174",
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
      "009bb120",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009bb120",
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
- 009ba174 ["INT_ADD", "register:40f0:8", ["const:9ba174:8", "const:4:8"]]
- 009ba174 ["CALL", null, ["ram:47ad34:8"]]
+ 009bb120 ["INT_ADD", "register:40f0:8", ["const:9bb120:8", "const:4:8"]]
+ 009bb120 ["CALL", null, ["ram:47b054:8"]]
- 009ba14c ["INT_ADD", "register:40f0:8", ["const:9ba14c:8", "const:4:8"]]
- 009ba14c ["CALL", null, ["callee:009ae980:8"]]
+ 009bb0f8 ["INT_ADD", "register:40f0:8", ["const:9bb0f8:8", "const:4:8"]]
+ 009bb0f8 ["CALL", null, ["callee:009ae980:8"]]
- 009ba180 ["INT_ADD", "register:40f0:8", ["const:9ba180:8", "const:4:8"]]
- 009ba180 ["CALL", null, ["callee:0047d134:8"]]
+ 009bb12c ["INT_ADD", "register:40f0:8", ["const:9bb12c:8", "const:4:8"]]
+ 009bb12c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-795cd55afb4bd394ba9eb534945fa1db"></a>

### [`009ba378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba378.md) → [`009bb324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb324.md) FUN_009bb324

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
      "definition_site": "009bb344",
      "incomplete_value": false,
      "site": "009bb348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ba398",
      "incomplete_value": false,
      "site": "009ba39c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
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
      "009bb348",
      "DATA",
      [
        "storage",
        "00c895e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bb348",
      "DATA",
      [
        "storage",
        "00c8a5b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba38c ["INT_ADD", "register:40f0:8", ["const:9ba38c:8", "const:4:8"]]
- 009ba38c ["CALL", null, ["callee:00c58f30:8"]]
+ 009bb338 ["INT_ADD", "register:40f0:8", ["const:9bb338:8", "const:4:8"]]
+ 009bb338 ["CALL", null, ["callee:00c58f30:8"]]
- 009ba394 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009bb340 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009ba398 ["COPY", "tmp:0:8", ["const:5e0:8"]]
- 009ba398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ba398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ba398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bb344 ["COPY", "tmp:0:8", ["const:5b0:8"]]
+ 009bb344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bb344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bb344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc81044abf18c45dfdb35b48bc161d98"></a>

### [`009ba3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3b0.md) → [`009bb35c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb35c.md) FUN_009bb35c

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
      "definition_site": "009bb360",
      "incomplete_value": false,
      "site": "009bb364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ba3b4",
      "incomplete_value": false,
      "site": "009ba3b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
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
      "009bb364",
      "DATA",
      [
        "storage",
        "00c895e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bb364",
      "DATA",
      [
        "storage",
        "00c8a5b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba3b0 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009bb35c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009ba3b4 ["COPY", "tmp:0:8", ["const:5e0:8"]]
- 009ba3b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ba3b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ba3b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bb360 ["COPY", "tmp:0:8", ["const:5b0:8"]]
+ 009bb360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bb360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bb360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e2455e4fdcd0555b25ea01197f0c02e9"></a>

### [`009ba3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3d0.md) → [`009bb37c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb37c.md) FUN_009bb37c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009b94e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b94e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`009ba48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba48c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bb39c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ba3f0",
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
      "site": "009bb3a8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ba3fc",
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
      "009bb39c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009bb3a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009bb39c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009bb3a8",
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
- 009ba3f0 ["INT_ADD", "register:40f0:8", ["const:9ba3f0:8", "const:4:8"]]
- 009ba3f0 ["CALL", null, ["ram:47ad34:8"]]
+ 009bb39c ["INT_ADD", "register:40f0:8", ["const:9bb39c:8", "const:4:8"]]
+ 009bb39c ["CALL", null, ["ram:47b054:8"]]
- 009ba3fc ["INT_ADD", "register:40f0:8", ["const:9ba3fc:8", "const:4:8"]]
- 009ba3fc ["CALL", null, ["ram:47ad34:8"]]
+ 009bb3a8 ["INT_ADD", "register:40f0:8", ["const:9bb3a8:8", "const:4:8"]]
+ 009bb3a8 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-ec06ef39c7b8fb3a4cefa31a467ee1e9"></a>

### [`009ba9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba9b0.md) → [`009bb95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb95c.md) FUN_009bb95c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009bd0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd0d4.md) · 呼出先 17件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00454d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/00454d68.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)
- 新版 呼出元 1件 [`009be080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009be080.md) · 呼出先 17件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00455088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00455/00455088.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.48% / 新版 91.48%

優先判定に残った影響 `call_target` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009bba28",
      "incomplete_value": true,
      "site": "009bba28",
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
      "definition_site": "009baa7c",
      "incomplete_value": true,
      "site": "009baa7c",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009bba3c",
      "incomplete_value": false,
      "site": "009bba44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009baa90",
      "incomplete_value": false,
      "site": "009baa98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "definition_site": "009bba90",
      "incomplete_value": true,
      "site": "009bbaa0",
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
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:b21:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009baae4",
      "incomplete_value": true,
      "site": "009baaf4",
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
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:a56:8"
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
      "009bba14",
      "READ",
      [
        "storage",
        "002c133a",
        null,
        "string"
      ]
    ],
    [
      "009bba44",
      "DATA",
      [
        "storage",
        "00c896e0",
        null,
        "undefined *"
      ]
    ],
    [
      "009bba90",
      "READ",
      [
        "storage",
        "002a4a56",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009bba14",
      "READ",
      [
        "storage",
        "002c1384",
        null,
        "string"
      ]
    ],
    [
      "009bba44",
      "DATA",
      [
        "storage",
        "00c8a6b0",
        null,
        "undefined *"
      ]
    ],
    [
      "009bba90",
      "READ",
      [
        "storage",
        "002a4b21",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009baba4 ["INT_ADD", "register:40f0:8", ["const:9baba4:8", "const:4:8"]]
- 009baba4 ["CALL", null, ["ram:7643dc:8"]]
+ 009bbb50 ["INT_ADD", "register:40f0:8", ["const:9bbb50:8", "const:4:8"]]
+ 009bbb50 ["CALL", null, ["ram:7647b8:8"]]
- 009ba9e4 ["INT_ADD", "register:40f0:8", ["const:9ba9e4:8", "const:4:8"]]
- 009ba9e4 ["CALL", null, ["callee:008524fc:8"]]
+ 009bb990 ["INT_ADD", "register:40f0:8", ["const:9bb990:8", "const:4:8"]]
+ 009bb990 ["CALL", null, ["callee:008524fc:8"]]
- 009baa30 ["INT_ADD", "register:40f0:8", ["const:9baa30:8", "const:4:8"]]
- 009baa30 ["CALL", null, ["callee:008524fc:8"]]
+ 009bb9dc ["INT_ADD", "register:40f0:8", ["const:9bb9dc:8", "const:4:8"]]
+ 009bb9dc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-30f4189508e717a85361d82ded372c16"></a>

### [`009bad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009bad54.md) → [`009bbd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bbd00.md) FUN_009bbd00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009bdb8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdb8c.md) · 呼出先 24件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 1件 [`009beb38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009beb38.md) · 呼出先 24件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046e898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e898.md) [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 92.15% / 新版 92.15%

優先判定に残った影響 `call_argument_candidate` 50件, `store_destination` 9件, `store_value` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009bbd84",
      "incomplete_value": true,
      "site": "009bbd94",
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
                "const:e0c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009badd8",
      "incomplete_value": true,
      "site": "009bade8",
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
                "const:dc2:8"
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
      "definition_site": "009bbdf0",
      "incomplete_value": true,
      "site": "009bbe08",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:cb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bae44",
      "incomplete_value": true,
      "site": "009bae5c",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:81:8"
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
      "definition_site": "009bbf9c",
      "incomplete_value": true,
      "site": "009bbfac",
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
                "const:e0c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009baff0",
      "incomplete_value": true,
      "site": "009bb000",
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
                "const:dc2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009bbd70",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "009bbd84",
      "READ",
      [
        "storage",
        "002b2dc2",
        null,
        "string"
      ]
    ],
    [
      "009bbdf0",
      "READ",
      [
        "storage",
        "002c0081",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009bbd70",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "009bbd84",
      "READ",
      [
        "storage",
        "002b2e0c",
        null,
        "string"
      ]
    ],
    [
      "009bbdf0",
      "READ",
      [
        "storage",
        "002c00cb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009baea0 ["INT_ADD", "register:40f0:8", ["const:9baea0:8", "const:4:8"]]
- 009baea0 ["CALL", null, ["callee:00633764:8"]]
+ 009bbe4c ["INT_ADD", "register:40f0:8", ["const:9bbe4c:8", "const:4:8"]]
+ 009bbe4c ["CALL", null, ["callee:00633764:8"]]
- 009bb34c ["COPY", "tmp:0:8", ["const:81:8"]]
- 009bb34c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009bb34c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009bb34c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009bc2f8 ["COPY", "tmp:0:8", ["const:cb:8"]]
+ 009bc2f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009bc2f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009bc2f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009bb478 ["INT_ADD", "register:40f0:8", ["const:9bb478:8", "const:4:8"]]
- 009bb478 ["CALL", null, ["callee:0043e138:8"]]
+ 009bc424 ["INT_ADD", "register:40f0:8", ["const:9bc424:8", "const:4:8"]]
+ 009bc424 ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-6383c89e2b90e27d54fd0903efcdc7c3"></a>

### [`009bced4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bced4.md) → [`009bde80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bd/009bde80.md) FUN_009bde80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) · 呼出先 7件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0e2c.md) [`006c0f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f68.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009bf268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf268.md)
- 新版 呼出元 1件 [`009c158c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c158c.md) · 呼出先 7件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`006c11dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c11dc.md) [`006c1318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1318.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009c0214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c0214.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009bdeac",
      "incomplete_value": true,
      "site": "009bdeac",
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
      "definition_site": "009bcf00",
      "incomplete_value": true,
      "site": "009bcf00",
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
      "definition_site": "009bdeb4",
      "incomplete_value": false,
      "site": "009bdec8",
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
      "definition_site": "009bcf08",
      "incomplete_value": false,
      "site": "009bcf1c",
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
      "definition_site": "009bdebc",
      "incomplete_value": false,
      "site": "009bdec8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:720:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bcf10",
      "incomplete_value": false,
      "site": "009bcf1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:750:8"
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
      "009bdea4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009bdeb4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bdebc",
      "PARAM",
      [
        "storage",
        "00c89750",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009bdea4",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009bdeb4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bdebc",
      "PARAM",
      [
        "storage",
        "00c8a720",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bcf1c ["INT_ADD", "register:40f0:8", ["const:9bcf1c:8", "const:4:8"]]
- 009bcf1c ["CALL", null, ["callee:00c596b0:8"]]
+ 009bdec8 ["INT_ADD", "register:40f0:8", ["const:9bdec8:8", "const:4:8"]]
+ 009bdec8 ["CALL", null, ["callee:00c596b0:8"]]
- 009bceec ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009bde98 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009bcef8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009bcef8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009bdea4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009bdea4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7e9906925dca2a1ad830c8605b25712b"></a>

### [`009bd0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd0d4.md) → [`009be080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009be080.md) FUN_009be080

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009be0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be0d0.md) · 呼出先 8件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f90.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00768430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768430.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`009bf07c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf07c.md) · 呼出先 8件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`006c1340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1340.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md) [`0076880c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/0076880c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.41% / 新版 95.41%

優先判定に残った影響 `call_target` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be168",
      "value": [
        "leaf",
        "ram:6c1340:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bd1bc",
      "value": [
        "leaf",
        "ram:6c0f90:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be188",
      "value": [
        "leaf",
        "ram:76880c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bd1dc",
      "value": [
        "leaf",
        "ram:768430:8"
      ]
    },
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be19c",
      "value": [
        "leaf",
        "ram:7647b8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bd1f0",
      "value": [
        "leaf",
        "ram:7643dc:8"
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
      "009be168",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c0f90"
      ]
    ],
    [
      "009be188",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "009be19c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ]
  ],
  "added": [
    [
      "009be168",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c1340"
      ]
    ],
    [
      "009be188",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076880c"
      ]
    ],
    [
      "009be19c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bd1bc ["INT_ADD", "register:40f0:8", ["const:9bd1bc:8", "const:4:8"]]
- 009bd1bc ["CALL", null, ["ram:6c0f90:8"]]
+ 009be168 ["INT_ADD", "register:40f0:8", ["const:9be168:8", "const:4:8"]]
+ 009be168 ["CALL", null, ["ram:6c1340:8"]]
- 009bd1dc ["INT_ADD", "register:40f0:8", ["const:9bd1dc:8", "const:4:8"]]
- 009bd1dc ["CALL", null, ["ram:768430:8"]]
+ 009be188 ["INT_ADD", "register:40f0:8", ["const:9be188:8", "const:4:8"]]
+ 009be188 ["CALL", null, ["ram:76880c:8"]]
- 009bd1f0 ["INT_ADD", "register:40f0:8", ["const:9bd1f0:8", "const:4:8"]]
- 009bd1f0 ["CALL", null, ["ram:7643dc:8"]]
+ 009be19c ["INT_ADD", "register:40f0:8", ["const:9be19c:8", "const:4:8"]]
+ 009be19c ["CALL", null, ["ram:7647b8:8"]]
~~~


<a id="compare-6df2778b3765da5c329291b2f96ff87a"></a>

### [`009bd2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd2b4.md) → [`009be260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009be260.md) FUN_009be260

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009be334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be334.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)
- 新版 呼出元 1件 [`009bf2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf2e0.md) · 呼出先 9件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.85% / 新版 96.85%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009be27c",
      "incomplete_value": true,
      "site": "009be27c",
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
      "definition_site": "009bd2d0",
      "incomplete_value": true,
      "site": "009bd2d0",
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
      "definition_site": "009be284",
      "incomplete_value": false,
      "site": "009be298",
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
      "definition_site": "009bd2d8",
      "incomplete_value": false,
      "site": "009bd2ec",
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
      "definition_site": "009be28c",
      "incomplete_value": false,
      "site": "009be298",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:720:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bd2e0",
      "incomplete_value": false,
      "site": "009bd2ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:750:8"
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
      "009be278",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009be284",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009be28c",
      "PARAM",
      [
        "storage",
        "00c89750",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009be278",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009be284",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009be28c",
      "PARAM",
      [
        "storage",
        "00c8a720",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bd2ec ["INT_ADD", "register:40f0:8", ["const:9bd2ec:8", "const:4:8"]]
- 009bd2ec ["CALL", null, ["callee:00c596b0:8"]]
+ 009be298 ["INT_ADD", "register:40f0:8", ["const:9be298:8", "const:4:8"]]
+ 009be298 ["CALL", null, ["callee:00c596b0:8"]]
- 009bd2c4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009be270 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009bd2cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009bd2cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009be278 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009be278 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-657c500a1c8d203016551eb5cc3ac21e"></a>

### [`009bd840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd840.md) → [`009be7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009be7ec.md) FUN_009be7ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) · 呼出先 15件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00454884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/00454884.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)
- 新版 呼出元 1件 [`009bed38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009bed38.md) · 呼出先 15件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00454ba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00454/00454ba4.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.38% / 新版 90.38%

優先判定に残った影響 `call_target` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009be848",
      "incomplete_value": true,
      "site": "009be848",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:33f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bd89c",
      "incomplete_value": true,
      "site": "009bd89c",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:2f5:8"
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
      "definition_site": "009be84c",
      "incomplete_value": true,
      "site": "009be84c",
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
      "definition_site": "009bd8a0",
      "incomplete_value": true,
      "site": "009bd8a0",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009be868",
      "incomplete_value": false,
      "site": "009be868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bd8bc",
      "incomplete_value": false,
      "site": "009bd8bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:878:8"
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
      "009be834",
      "READ",
      [
        "storage",
        "002c02f5",
        null,
        "string"
      ]
    ],
    [
      "009be83c",
      "READ",
      [
        "storage",
        "002c02fb",
        null,
        "string"
      ]
    ],
    [
      "009be868",
      "DATA",
      [
        "storage",
        "00c89878",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009be834",
      "READ",
      [
        "storage",
        "002c033f",
        null,
        "string"
      ]
    ],
    [
      "009be83c",
      "READ",
      [
        "storage",
        "002c0345",
        null,
        "string"
      ]
    ],
    [
      "009be868",
      "DATA",
      [
        "storage",
        "00c8a848",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bda00 ["INT_ADD", "register:40f0:8", ["const:9bda00:8", "const:4:8"]]
- 009bda00 ["CALL", null, ["ram:7643dc:8"]]
+ 009be9ac ["INT_ADD", "register:40f0:8", ["const:9be9ac:8", "const:4:8"]]
+ 009be9ac ["CALL", null, ["ram:7647b8:8"]]
- 009bd864 ["INT_ADD", "register:40f0:8", ["const:9bd864:8", "const:4:8"]]
- 009bd864 ["CALL", null, ["callee:008524fc:8"]]
+ 009be810 ["INT_ADD", "register:40f0:8", ["const:9be810:8", "const:4:8"]]
+ 009be810 ["CALL", null, ["callee:008524fc:8"]]
- 009bd878 ["INT_ADD", "register:40f0:8", ["const:9bd878:8", "const:4:8"]]
- 009bd878 ["CALL", null, ["callee:008524fc:8"]]
+ 009be824 ["INT_ADD", "register:40f0:8", ["const:9be824:8", "const:4:8"]]
+ 009be824 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-e223974e8674ed6ade2929403b03f1a0"></a>

### [`009bdb8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdb8c.md) → [`009beb38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009beb38.md) FUN_009beb38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) [`009be0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be0d0.md) [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) · 呼出先 7件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md) [`009bad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009bad54.md) [`009bcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bcdac.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 3件 [`009bed38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009bed38.md) [`009bf07c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf07c.md) [`009c158c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c158c.md) · 呼出先 7件 [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00498530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498530.md) [`009bbd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bbd00.md) [`009bdd58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bd/009bdd58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 81.71% / 新版 81.71%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009beb74",
      "incomplete_value": true,
      "site": "009beb74",
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
            "const:6bc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bdbc8",
      "incomplete_value": true,
      "site": "009bdbc8",
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
            "const:6ec:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009bec54",
      "incomplete_value": false,
      "site": "009bec54",
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
      "definition_site": "009bdca8",
      "incomplete_value": false,
      "site": "009bdca8",
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
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009bebd4",
      "incomplete_value": true,
      "site": "009bebd4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SLESS",
              "INT_SBORROW"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bdc28",
      "incomplete_value": true,
      "site": "009bdc28",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SLESS",
              "INT_SBORROW"
            ]
          ]
        ]
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
      "009beb5c",
      "READ",
      [
        "storage",
        "00ca46ec",
        null,
        "undefined4"
      ]
    ],
    [
      "009beb74",
      "WRITE",
      [
        "storage",
        "00ca46ec",
        null,
        "undefined4"
      ]
    ],
    [
      "009bebbc",
      "READ",
      [
        "storage",
        "00ca46ec",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "009beb5c",
      "READ",
      [
        "storage",
        "00ca56bc",
        null,
        "undefined4"
      ]
    ],
    [
      "009beb74",
      "WRITE",
      [
        "storage",
        "00ca56bc",
        null,
        "undefined4"
      ]
    ],
    [
      "009bebbc",
      "READ",
      [
        "storage",
        "00ca56bc",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bdbc8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6ec:8"]]
- 009bdbc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 009beb74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6bc:8"]]
+ 009beb74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 009bdc84 ["INT_ADD", "register:40f0:8", ["const:9bdc84:8", "const:4:8"]]
- 009bdc84 ["CALL", null, ["callee:00c58ef0:8"]]
+ 009bec30 ["INT_ADD", "register:40f0:8", ["const:9bec30:8", "const:4:8"]]
+ 009bec30 ["CALL", null, ["callee:00c58ef0:8"]]
- 009bdccc ["INT_ADD", "register:40f0:8", ["const:9bdccc:8", "const:4:8"]]
- 009bdccc ["CALL", null, ["callee:00c58f10:8"]]
+ 009bec78 ["INT_ADD", "register:40f0:8", ["const:9bec78:8", "const:4:8"]]
+ 009bec78 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-36809be2c4b22745d8fba808c6fa5219"></a>

### [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) → [`009bed38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009bed38.md) FUN_009bed38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009be458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be458.md) · 呼出先 18件 [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md)
- 新版 呼出元 1件 [`009bf404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf404.md) · 呼出先 18件 [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.06% / 新版 90.06%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009bee14",
      "incomplete_value": true,
      "site": "009bee14",
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
                "const:e25:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bde68",
      "incomplete_value": true,
      "site": "009bde68",
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
                "const:d58:8"
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
      "definition_site": "009bee08",
      "incomplete_value": true,
      "site": "009bee18",
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
      "definition_site": "009bde5c",
      "incomplete_value": true,
      "site": "009bde6c",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bedcc",
      "value": [
        "leaf",
        "ram:76880c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bde20",
      "value": [
        "leaf",
        "ram:768430:8"
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
      "009bedcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "009beddc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "009bee04",
      "READ",
      [
        "storage",
        "002add58",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009bedcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076880c"
      ]
    ],
    [
      "009beddc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ],
    [
      "009bee04",
      "READ",
      [
        "storage",
        "002ade25",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bde20 ["INT_ADD", "register:40f0:8", ["const:9bde20:8", "const:4:8"]]
- 009bde20 ["CALL", null, ["ram:768430:8"]]
+ 009bedcc ["INT_ADD", "register:40f0:8", ["const:9bedcc:8", "const:4:8"]]
+ 009bedcc ["CALL", null, ["ram:76880c:8"]]
- 009bde30 ["INT_ADD", "register:40f0:8", ["const:9bde30:8", "const:4:8"]]
- 009bde30 ["CALL", null, ["ram:7643dc:8"]]
+ 009beddc ["INT_ADD", "register:40f0:8", ["const:9beddc:8", "const:4:8"]]
+ 009beddc ["CALL", null, ["ram:7647b8:8"]]
- 009bdf18 ["INT_ADD", "register:40f0:8", ["const:9bdf18:8", "const:4:8"]]
- 009bdf18 ["CALL", null, ["callee:0047ec3c:8"]]
+ 009beec4 ["INT_ADD", "register:40f0:8", ["const:9beec4:8", "const:4:8"]]
+ 009beec4 ["CALL", null, ["callee:0047ec3c:8"]]
~~~


<a id="compare-89bd249fff395781da9c73e33f5d51e0"></a>

### [`009be0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be0d0.md) → [`009bf07c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf07c.md) FUN_009bf07c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009be85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be85c.md) · 呼出先 13件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b96fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b96fc.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md)
- 新版 呼出元 1件 [`009bf808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf808.md) · 呼出先 13件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba6a8.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md) [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.28% / 新版 95.28%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009bf144",
      "incomplete_value": false,
      "site": "009bf14c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009be198",
      "incomplete_value": false,
      "site": "009be1a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:b88:8"
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
      "definition_site": "009bf230",
      "incomplete_value": false,
      "site": "009bf230",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009be284",
      "incomplete_value": false,
      "site": "009be284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c08:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bf0e8",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be13c",
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
      "009bf0e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "009bf14c",
      "DATA",
      [
        "storage",
        "00c89b88",
        null,
        "undefined *"
      ]
    ],
    [
      "009bf210",
      "READ",
      [
        "storage",
        "00c89ba8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009bf0e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "009bf14c",
      "DATA",
      [
        "storage",
        "00c8ab58",
        null,
        "undefined *"
      ]
    ],
    [
      "009bf210",
      "READ",
      [
        "storage",
        "00c8ab78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009be13c ["INT_ADD", "register:40f0:8", ["const:9be13c:8", "const:4:8"]]
- 009be13c ["CALL", null, ["ram:48cd38:8"]]
+ 009bf0e8 ["INT_ADD", "register:40f0:8", ["const:9bf0e8:8", "const:4:8"]]
+ 009bf0e8 ["CALL", null, ["ram:48d058:8"]]
- 009be190 ["INT_ADD", "register:40f0:8", ["const:9be190:8", "const:4:8"]]
- 009be190 ["CALL", null, ["callee:008524fc:8"]]
+ 009bf13c ["INT_ADD", "register:40f0:8", ["const:9bf13c:8", "const:4:8"]]
+ 009bf13c ["CALL", null, ["callee:008524fc:8"]]
- 009be194 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009bf140 ["COPY", "register:4040:8", ["const:c8a000:8"]]
~~~


<a id="compare-da38c5ade7123815303f136b9d39476c"></a>

### [`009be458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be458.md) → [`009bf404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf404.md) FUN_009bf404

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 17件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0065351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065351c.md) [`00653520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653520.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 17件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`006538cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006538cc.md) [`006538d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006538d0.md)

変更の種類 branch_value, call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 94.81% / 新版 94.81%

優先判定に残った影響 `branch_value` 1件, `call_target` 1件, `store_destination` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009bf620",
      "incomplete_value": false,
      "site": "009bf620",
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
      "definition_site": "009be674",
      "incomplete_value": false,
      "site": "009be674",
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
    "ordinal": 74,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009bf618",
      "incomplete_value": true,
      "site": "009bf620",
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
      "definition_site": "009be66c",
      "incomplete_value": true,
      "site": "009be674",
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
    "ordinal": 74,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009bf624",
      "incomplete_value": false,
      "site": "009bf624",
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
      "definition_site": "009be678",
      "incomplete_value": false,
      "site": "009be678",
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
    "ordinal": 75,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009bf47c",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "009bf608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009ccbd0"
      ]
    ],
    [
      "009bf618",
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
      "009bf47c",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "009bf608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009cdb7c"
      ]
    ],
    [
      "009bf618",
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
- 009be65c ["INT_ADD", "register:40f0:8", ["const:9be65c:8", "const:4:8"]]
- 009be65c ["CALL", null, ["ram:9ccbd0:8"]]
+ 009bf608 ["INT_ADD", "register:40f0:8", ["const:9bf608:8", "const:4:8"]]
+ 009bf608 ["CALL", null, ["ram:9cdb7c:8"]]
- 009be674 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 009be674 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 009bf620 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 009bf620 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 009be678 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:a78:8"]]
- 009be678 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 009bf624 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:a38:8"]]
+ 009bf624 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
~~~


<a id="compare-0e8406907a5e956af57c6496f4a27056"></a>

### [`009be85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be85c.md) → [`009bf808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf808.md) FUN_009bf808

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 12件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md) [`0085c2a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2a8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.37% / 新版 98.37%

優先判定に残った影響 `call_target` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bf864",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be8b8",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "site": "009bf99c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be9f0",
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
      "site": "009bfb28",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009beb7c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009bf864",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "009bf8cc",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "009bf99c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009bf864",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "009bf8cc",
      "READ",
      [
        "storage",
        "002c41e8",
        null,
        "undefined8"
      ]
    ],
    [
      "009bf99c",
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
- 009be8b8 ["INT_ADD", "register:40f0:8", ["const:9be8b8:8", "const:4:8"]]
- 009be8b8 ["CALL", null, ["ram:48cd38:8"]]
+ 009bf864 ["INT_ADD", "register:40f0:8", ["const:9bf864:8", "const:4:8"]]
+ 009bf864 ["CALL", null, ["ram:48d058:8"]]
- 009be9f0 ["INT_ADD", "register:40f0:8", ["const:9be9f0:8", "const:4:8"]]
- 009be9f0 ["CALL", null, ["ram:47ad34:8"]]
+ 009bf99c ["INT_ADD", "register:40f0:8", ["const:9bf99c:8", "const:4:8"]]
+ 009bf99c ["CALL", null, ["ram:47b054:8"]]
- 009beb7c ["INT_ADD", "register:40f0:8", ["const:9beb7c:8", "const:4:8"]]
- 009beb7c ["CALL", null, ["ram:47ad34:8"]]
+ 009bfb28 ["INT_ADD", "register:40f0:8", ["const:9bfb28:8", "const:4:8"]]
+ 009bfb28 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-ce418602beed6fb297723eaa58fa4d1c"></a>

### [`009bee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009bee20.md) → [`009bfdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bfdcc.md) FUN_009bfdcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 14件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 14件 [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`00468fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.54% / 新版 98.54%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009bfdf4",
      "incomplete_value": true,
      "site": "009bfdf4",
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
      "definition_site": "009bee48",
      "incomplete_value": true,
      "site": "009bee48",
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
      "definition_site": "009bfe04",
      "incomplete_value": false,
      "site": "009bfe18",
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
      "definition_site": "009bee58",
      "incomplete_value": false,
      "site": "009bee6c",
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
      "definition_site": "009bfe0c",
      "incomplete_value": false,
      "site": "009bfe18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:720:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bee60",
      "incomplete_value": false,
      "site": "009bee6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:750:8"
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
      "009bfdf0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009bfe04",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bfe0c",
      "PARAM",
      [
        "storage",
        "00c89750",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009bfdf0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009bfe04",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bfe0c",
      "PARAM",
      [
        "storage",
        "00c8a720",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bee6c ["INT_ADD", "register:40f0:8", ["const:9bee6c:8", "const:4:8"]]
- 009bee6c ["CALL", null, ["callee:00c596b0:8"]]
+ 009bfe18 ["INT_ADD", "register:40f0:8", ["const:9bfe18:8", "const:4:8"]]
+ 009bfe18 ["CALL", null, ["callee:00c596b0:8"]]
- 009bee40 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009bfdec ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009bee44 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009bee44 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009bfdf0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009bfdf0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-93a75b77c262aeb621e8efa6bad8ea3b"></a>

### [`009bf5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf5c0.md) → [`009c056c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c056c.md) FUN_009c056c

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
      "definition_site": "009c0580",
      "incomplete_value": false,
      "site": "009c0584",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf5d4",
      "incomplete_value": false,
      "site": "009bf5d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "009c0584",
      "DATA",
      [
        "storage",
        "00c89660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0584",
      "DATA",
      [
        "storage",
        "00c8a630",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf5cc ["INT_ADD", "register:40f0:8", ["const:9bf5cc:8", "const:4:8"]]
- 009bf5cc ["CALL", null, ["callee:00c58f30:8"]]
+ 009c0578 ["INT_ADD", "register:40f0:8", ["const:9c0578:8", "const:4:8"]]
+ 009c0578 ["CALL", null, ["callee:00c58f30:8"]]
- 009bf5d0 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c057c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009bf5d4 ["COPY", "tmp:0:8", ["const:660:8"]]
- 009bf5d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf5d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf5d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0580 ["COPY", "tmp:0:8", ["const:630:8"]]
+ 009c0580 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0580 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0580 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff25305240ad1d70ea62e7cf6a909372"></a>

### [`009bf5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf5e4.md) → [`009c0590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c0590.md) FUN_009c0590

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
      "definition_site": "009c0594",
      "incomplete_value": false,
      "site": "009c0598",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf5e8",
      "incomplete_value": false,
      "site": "009bf5ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "009c0598",
      "DATA",
      [
        "storage",
        "00c89660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0598",
      "DATA",
      [
        "storage",
        "00c8a630",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf5e4 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c0590 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009bf5e8 ["COPY", "tmp:0:8", ["const:660:8"]]
- 009bf5e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf5e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf5e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0594 ["COPY", "tmp:0:8", ["const:630:8"]]
+ 009c0594 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0594 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0594 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-52caf1700cfb8f02a528c2c2cf92b8a6"></a>

### [`009bf5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf5fc.md) → [`009c05a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c05a8.md) FUN_009c05a8

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
      "site": "009c05cc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bf620",
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
      "009c05cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009c05cc",
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
- 009bf620 ["INT_ADD", "register:40f0:8", ["const:9bf620:8", "const:4:8"]]
- 009bf620 ["CALL", null, ["ram:47ad34:8"]]
+ 009c05cc ["INT_ADD", "register:40f0:8", ["const:9c05cc:8", "const:4:8"]]
+ 009c05cc ["CALL", null, ["ram:47b054:8"]]
- 009bf62c ["INT_ADD", "register:40f0:8", ["const:9bf62c:8", "const:4:8"]]
- 009bf62c ["CALL", null, ["callee:0047d134:8"]]
+ 009c05d8 ["INT_ADD", "register:40f0:8", ["const:9c05d8:8", "const:4:8"]]
+ 009c05d8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-1d44ced2f5c262df78d835e8ad01d3ce"></a>

### [`009bf670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf670.md) → [`009c061c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c061c.md) FUN_009c061c

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
      "definition_site": "009c0630",
      "incomplete_value": false,
      "site": "009c0634",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf684",
      "incomplete_value": false,
      "site": "009bf688",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009c0634",
      "DATA",
      [
        "storage",
        "00c896e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0634",
      "DATA",
      [
        "storage",
        "00c8a6b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf67c ["INT_ADD", "register:40f0:8", ["const:9bf67c:8", "const:4:8"]]
- 009bf67c ["CALL", null, ["callee:00c58f30:8"]]
+ 009c0628 ["INT_ADD", "register:40f0:8", ["const:9c0628:8", "const:4:8"]]
+ 009c0628 ["CALL", null, ["callee:00c58f30:8"]]
- 009bf680 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c062c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009bf684 ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 009bf684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0630 ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 009c0630 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0630 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0630 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bf4a94a1e7f56fd9513b4ebfc29c9a80"></a>

### [`009bf694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf694.md) → [`009c0640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c0640.md) FUN_009c0640

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
      "definition_site": "009c0644",
      "incomplete_value": false,
      "site": "009c0648",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf698",
      "incomplete_value": false,
      "site": "009bf69c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "009c0648",
      "DATA",
      [
        "storage",
        "00c896e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0648",
      "DATA",
      [
        "storage",
        "00c8a6b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf694 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c0640 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009bf698 ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 009bf698 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf698 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf698 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0644 ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 009c0644 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0644 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0644 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-42c46ff9b2f1953ad54465e674175db0"></a>

### [`009bf6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf6dc.md) → [`009c0688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c0688.md) FUN_009c0688

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
      "definition_site": "009c06ac",
      "incomplete_value": false,
      "site": "009c06ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:748:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf700",
      "incomplete_value": false,
      "site": "009bf700",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:778:8"
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
      "009c06ac",
      "DATA",
      [
        "storage",
        "00c89778",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c06ac",
      "DATA",
      [
        "storage",
        "00c8a748",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf6f0 ["INT_ADD", "register:40f0:8", ["const:9bf6f0:8", "const:4:8"]]
- 009bf6f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c069c ["INT_ADD", "register:40f0:8", ["const:9c069c:8", "const:4:8"]]
+ 009c069c ["CALL", null, ["callee:00c58f30:8"]]
- 009bf6f8 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c06a4 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009bf6fc ["COPY", "tmp:0:8", ["const:778:8"]]
- 009bf6fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf6fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf6fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c06a8 ["COPY", "tmp:0:8", ["const:748:8"]]
+ 009c06a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c06a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c06a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a3057896795fa9ad6cd84c63d8a0373"></a>

### [`009bf710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf710.md) → [`009c06bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c06bc.md) FUN_009c06bc

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
      "definition_site": "009c06c8",
      "incomplete_value": false,
      "site": "009c06c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:748:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf71c",
      "incomplete_value": false,
      "site": "009bf71c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:778:8"
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
      "009c06c8",
      "DATA",
      [
        "storage",
        "00c89778",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c06c8",
      "DATA",
      [
        "storage",
        "00c8a748",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf714 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009c06c0 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009bf718 ["COPY", "tmp:0:8", ["const:778:8"]]
- 009bf718 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009bf718 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009bf718 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009c06c4 ["COPY", "tmp:0:8", ["const:748:8"]]
+ 009c06c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009c06c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009c06c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c2487d433fdf1eadb7f740cc3ada12c3"></a>

### [`009bf72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf72c.md) → [`009c06d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c06d8.md) FUN_009c06d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 40件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) [`00664a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664a2c.md)
- 新版 呼出元 0件  · 呼出先 40件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`005da974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da974.md) [`00664ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664ddc.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value, unresolved_call_alignment

命令の説明率　旧版 92.25% / 新版 92.25%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `call_target` 2件, `store_value` 15件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c07c4",
      "incomplete_value": true,
      "site": "009c07d4",
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
                "const:e26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf818",
      "incomplete_value": true,
      "site": "009bf828",
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
                "const:d59:8"
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
      "definition_site": "009c07d8",
      "incomplete_value": true,
      "site": "009c07d8",
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
      "definition_site": "009bf82c",
      "incomplete_value": true,
      "site": "009bf82c",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c08fc",
      "incomplete_value": true,
      "site": "009c090c",
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf950",
      "incomplete_value": true,
      "site": "009bf960",
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009c0760",
      "DATA",
      [
        "storage",
        "003c77d8",
        null,
        "uleb128"
      ]
    ],
    [
      "009c0784",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009c079c",
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
      "009c0760",
      "DATA",
      [
        "storage",
        "003c77d8",
        null,
        "byte[31]"
      ]
    ],
    [
      "009c0784",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009c079c",
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
- 009bf800 ["INT_ADD", "register:40f0:8", ["const:9bf800:8", "const:4:8"]]
- 009bf800 ["CALL", null, ["callee:00c596b0:8"]]
+ 009c07ac ["INT_ADD", "register:40f0:8", ["const:9c07ac:8", "const:4:8"]]
+ 009c07ac ["CALL", null, ["callee:00c596b0:8"]]
- 009bfec0 ["INT_ADD", "register:40f0:8", ["const:9bfec0:8", "const:4:8"]]
- 009bfec0 ["CALL", null, ["callee:00c59000:8"]]
+ 009c0e6c ["INT_ADD", "register:40f0:8", ["const:9c0e6c:8", "const:4:8"]]
+ 009c0e6c ["CALL", null, ["callee:00c59000:8"]]
- 009bff5c ["INT_ADD", "register:40f0:8", ["const:9bff5c:8", "const:4:8"]]
- 009bff5c ["CALL", null, ["callee:00c59010:8"]]
+ 009c0f08 ["INT_ADD", "register:40f0:8", ["const:9c0f08:8", "const:4:8"]]
+ 009c0f08 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-ef0469e2ce25cf95d6ad2d38ce944da6"></a>

### [`009c03b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c03b4.md) → [`009c1360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1360.md) FUN_009c1360

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
      "definition_site": "009c1374",
      "incomplete_value": false,
      "site": "009c1378",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c03c8",
      "incomplete_value": false,
      "site": "009c03cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
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
      "009c1378",
      "DATA",
      [
        "storage",
        "00c897e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1378",
      "DATA",
      [
        "storage",
        "00c8a7b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c03c0 ["INT_ADD", "register:40f0:8", ["const:9c03c0:8", "const:4:8"]]
- 009c03c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c136c ["INT_ADD", "register:40f0:8", ["const:9c136c:8", "const:4:8"]]
+ 009c136c ["CALL", null, ["callee:00c58f30:8"]]
- 009c03c4 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1370 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c03c8 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 009c03c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c03c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c03c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1374 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 009c1374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1f7f081803c65fa29f85aa86ff9e6e19"></a>

### [`009c03d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c03d8.md) → [`009c1384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1384.md) FUN_009c1384

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
      "definition_site": "009c1388",
      "incomplete_value": false,
      "site": "009c138c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c03dc",
      "incomplete_value": false,
      "site": "009c03e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
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
      "009c138c",
      "DATA",
      [
        "storage",
        "00c897e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c138c",
      "DATA",
      [
        "storage",
        "00c8a7b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c03d8 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1384 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c03dc ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 009c03dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c03dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c03dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1388 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 009c1388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2e4021172f0cedef3e62ef97d422d2f4"></a>

### [`009c03f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c03f0.md) → [`009c139c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c139c.md) FUN_009c139c

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
      "site": "009c13c0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c0414",
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
      "009c13c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009c13c0",
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
- 009c0414 ["INT_ADD", "register:40f0:8", ["const:9c0414:8", "const:4:8"]]
- 009c0414 ["CALL", null, ["ram:47ad34:8"]]
+ 009c13c0 ["INT_ADD", "register:40f0:8", ["const:9c13c0:8", "const:4:8"]]
+ 009c13c0 ["CALL", null, ["ram:47b054:8"]]
- 009c0420 ["INT_ADD", "register:40f0:8", ["const:9c0420:8", "const:4:8"]]
- 009c0420 ["CALL", null, ["callee:0047d134:8"]]
+ 009c13cc ["INT_ADD", "register:40f0:8", ["const:9c13cc:8", "const:4:8"]]
+ 009c13cc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-757bbc07cb46b0b6a878fe82da5a98a6"></a>

### [`009c0464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0464.md) → [`009c1410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1410.md) FUN_009c1410

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
      "definition_site": "009c1424",
      "incomplete_value": false,
      "site": "009c1428",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0478",
      "incomplete_value": false,
      "site": "009c047c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:878:8"
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
      "009c1428",
      "DATA",
      [
        "storage",
        "00c89878",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1428",
      "DATA",
      [
        "storage",
        "00c8a848",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0470 ["INT_ADD", "register:40f0:8", ["const:9c0470:8", "const:4:8"]]
- 009c0470 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c141c ["INT_ADD", "register:40f0:8", ["const:9c141c:8", "const:4:8"]]
+ 009c141c ["CALL", null, ["callee:00c58f30:8"]]
- 009c0474 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1420 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c0478 ["COPY", "tmp:0:8", ["const:878:8"]]
- 009c0478 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0478 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0478 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1424 ["COPY", "tmp:0:8", ["const:848:8"]]
+ 009c1424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4d9f540c3587de5d90db0593005f8eec"></a>

### [`009c0488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0488.md) → [`009c1434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1434.md) FUN_009c1434

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
      "definition_site": "009c1438",
      "incomplete_value": false,
      "site": "009c143c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c048c",
      "incomplete_value": false,
      "site": "009c0490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:878:8"
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
      "009c143c",
      "DATA",
      [
        "storage",
        "00c89878",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c143c",
      "DATA",
      [
        "storage",
        "00c8a848",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0488 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1434 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c048c ["COPY", "tmp:0:8", ["const:878:8"]]
- 009c048c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c048c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c048c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1438 ["COPY", "tmp:0:8", ["const:848:8"]]
+ 009c1438 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1438 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1438 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-05c06628c77a6b49399e0323624e3d52"></a>

### [`009c04a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c04a0.md) → [`009c144c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c144c.md) FUN_009c144c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c1468",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c04bc",
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
      "009c1468",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009c1468",
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
- 009c04bc ["INT_ADD", "register:40f0:8", ["const:9c04bc:8", "const:4:8"]]
- 009c04bc ["CALL", null, ["ram:47ad34:8"]]
+ 009c1468 ["INT_ADD", "register:40f0:8", ["const:9c1468:8", "const:4:8"]]
+ 009c1468 ["CALL", null, ["ram:47b054:8"]]
- 009c04c8 ["INT_ADD", "register:40f0:8", ["const:9c04c8:8", "const:4:8"]]
- 009c04c8 ["CALL", null, ["callee:0047d134:8"]]
+ 009c1474 ["INT_ADD", "register:40f0:8", ["const:9c1474:8", "const:4:8"]]
+ 009c1474 ["CALL", null, ["callee:0047d134:8"]]
- 009c04cc ["INT_ADD", "register:40f0:8", ["const:9c04cc:8", "const:4:8"]]
- 009c04cc ["CALL", null, ["callee:008524fc:8"]]
+ 009c1478 ["INT_ADD", "register:40f0:8", ["const:9c1478:8", "const:4:8"]]
+ 009c1478 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-043f9e4859c3cb55c5dc762ad65eef00"></a>

### [`009c0520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0520.md) → [`009c14cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c14cc.md) FUN_009c14cc

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
      "definition_site": "009c14e0",
      "incomplete_value": false,
      "site": "009c14e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0534",
      "incomplete_value": false,
      "site": "009c0538",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:8f8:8"
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
      "009c14e4",
      "DATA",
      [
        "storage",
        "00c898f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c14e4",
      "DATA",
      [
        "storage",
        "00c8a8c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c052c ["INT_ADD", "register:40f0:8", ["const:9c052c:8", "const:4:8"]]
- 009c052c ["CALL", null, ["callee:00c58f30:8"]]
+ 009c14d8 ["INT_ADD", "register:40f0:8", ["const:9c14d8:8", "const:4:8"]]
+ 009c14d8 ["CALL", null, ["callee:00c58f30:8"]]
- 009c0530 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c14dc ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c0534 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 009c0534 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0534 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0534 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c14e0 ["COPY", "tmp:0:8", ["const:8c8:8"]]
+ 009c14e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c14e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c14e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f766bf1f8af55ca406cf87e21ffc3f26"></a>

### [`009c0544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0544.md) → [`009c14f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c14f0.md) FUN_009c14f0

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
      "definition_site": "009c14f4",
      "incomplete_value": false,
      "site": "009c14f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0548",
      "incomplete_value": false,
      "site": "009c054c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:8f8:8"
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
      "009c14f8",
      "DATA",
      [
        "storage",
        "00c898f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c14f8",
      "DATA",
      [
        "storage",
        "00c8a8c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0544 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c14f0 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c0548 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 009c0548 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0548 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0548 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c14f4 ["COPY", "tmp:0:8", ["const:8c8:8"]]
+ 009c14f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c14f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c14f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c93bad2af2c6b7163858bb30c708193d"></a>

### [`009c0590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0590.md) → [`009c153c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c153c.md) FUN_009c153c

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
      "definition_site": "009c1560",
      "incomplete_value": false,
      "site": "009c1560",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c05b4",
      "incomplete_value": false,
      "site": "009c05b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:978:8"
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
      "009c1560",
      "DATA",
      [
        "storage",
        "00c89978",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1560",
      "DATA",
      [
        "storage",
        "00c8a948",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c05a4 ["INT_ADD", "register:40f0:8", ["const:9c05a4:8", "const:4:8"]]
- 009c05a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c1550 ["INT_ADD", "register:40f0:8", ["const:9c1550:8", "const:4:8"]]
+ 009c1550 ["CALL", null, ["callee:00c58f30:8"]]
- 009c05ac ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1558 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c05b0 ["COPY", "tmp:0:8", ["const:978:8"]]
- 009c05b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c05b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c05b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c155c ["COPY", "tmp:0:8", ["const:948:8"]]
+ 009c155c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c155c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c155c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1c229ecf8714fafbc1600878b04f5ee6"></a>

### [`009c05c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05c4.md) → [`009c1570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1570.md) FUN_009c1570

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
      "definition_site": "009c157c",
      "incomplete_value": false,
      "site": "009c157c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c05d0",
      "incomplete_value": false,
      "site": "009c05d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:978:8"
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
      "009c157c",
      "DATA",
      [
        "storage",
        "00c89978",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c157c",
      "DATA",
      [
        "storage",
        "00c8a948",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c05c8 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009c1574 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009c05cc ["COPY", "tmp:0:8", ["const:978:8"]]
- 009c05cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009c05cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009c05cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009c1578 ["COPY", "tmp:0:8", ["const:948:8"]]
+ 009c1578 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009c1578 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009c1578 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8c434eff4162080ebe6859fd3f36de86"></a>

### [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) → [`009c158c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c158c.md) FUN_009c158c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 24件 [`00461ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461ac0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0065351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065351c.md) [`00653520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653520.md)
- 新版 呼出元 0件  · 呼出先 24件 [`00461de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00461/00461de0.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`006538cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006538cc.md) [`006538d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006538d0.md)

変更の種類 comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `store_value` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c1638",
      "incomplete_value": true,
      "site": "009c1648",
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
                "const:921:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c068c",
      "incomplete_value": true,
      "site": "009c069c",
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
                "const:8d7:8"
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
      "definition_site": "009c163c",
      "incomplete_value": true,
      "site": "009c164c",
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
                "const:a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0690",
      "incomplete_value": true,
      "site": "009c06a0",
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
                "const:a:8"
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
      "definition_site": "009c1640",
      "incomplete_value": true,
      "site": "009c1650",
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
                "const:b20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0694",
      "incomplete_value": true,
      "site": "009c06a4",
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
                "const:ad0:8"
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
      "009c1638",
      "READ",
      [
        "storage",
        "002c18d7",
        null,
        "string"
      ]
    ],
    [
      "009c163c",
      "READ",
      [
        "storage",
        "002c18e1",
        null,
        "string"
      ]
    ],
    [
      "009c1640",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009c1638",
      "READ",
      [
        "storage",
        "002c1921",
        null,
        "string"
      ]
    ],
    [
      "009c163c",
      "READ",
      [
        "storage",
        "002c192b",
        null,
        "string"
      ]
    ],
    [
      "009c1640",
      "READ",
      [
        "storage",
        "002c2b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0648 ["INT_ADD", "register:40f0:8", ["const:9c0648:8", "const:4:8"]]
- 009c0648 ["CALL", null, ["callee:008524fc:8"]]
+ 009c15f4 ["INT_ADD", "register:40f0:8", ["const:9c15f4:8", "const:4:8"]]
+ 009c15f4 ["CALL", null, ["callee:008524fc:8"]]
- 009c0654 ["INT_ADD", "register:40f0:8", ["const:9c0654:8", "const:4:8"]]
- 009c0654 ["CALL", null, ["callee:008bc514:8"]]
+ 009c1600 ["INT_ADD", "register:40f0:8", ["const:9c1600:8", "const:4:8"]]
+ 009c1600 ["CALL", null, ["callee:008bc514:8"]]
- 009c065c ["INT_ADD", "register:40f0:8", ["const:9c065c:8", "const:4:8"]]
- 009c065c ["CALL", null, ["callee:008524fc:8"]]
+ 009c1608 ["INT_ADD", "register:40f0:8", ["const:9c1608:8", "const:4:8"]]
+ 009c1608 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-48fdb43b87eb3faff9440fd4b57b7262"></a>

### [`009c0c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0c70.md) → [`009c1c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1c1c.md) FUN_009c1c1c

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
      "definition_site": "009c1c30",
      "incomplete_value": false,
      "site": "009c1c34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0c84",
      "incomplete_value": false,
      "site": "009c0c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:9f8:8"
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
      "009c1c34",
      "DATA",
      [
        "storage",
        "00c899f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1c34",
      "DATA",
      [
        "storage",
        "00c8a9c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0c7c ["INT_ADD", "register:40f0:8", ["const:9c0c7c:8", "const:4:8"]]
- 009c0c7c ["CALL", null, ["callee:00c58f30:8"]]
+ 009c1c28 ["INT_ADD", "register:40f0:8", ["const:9c1c28:8", "const:4:8"]]
+ 009c1c28 ["CALL", null, ["callee:00c58f30:8"]]
- 009c0c80 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1c2c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c0c84 ["COPY", "tmp:0:8", ["const:9f8:8"]]
- 009c0c84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1c30 ["COPY", "tmp:0:8", ["const:9c8:8"]]
+ 009c1c30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1c30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1c30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5daeaee7b4586c084b0a8b0ad306c48d"></a>

### [`009c0c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0c94.md) → [`009c1c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1c40.md) FUN_009c1c40

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
      "definition_site": "009c1c44",
      "incomplete_value": false,
      "site": "009c1c48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0c98",
      "incomplete_value": false,
      "site": "009c0c9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:9f8:8"
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
      "009c1c48",
      "DATA",
      [
        "storage",
        "00c899f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1c48",
      "DATA",
      [
        "storage",
        "00c8a9c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0c94 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1c40 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c0c98 ["COPY", "tmp:0:8", ["const:9f8:8"]]
- 009c0c98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1c44 ["COPY", "tmp:0:8", ["const:9c8:8"]]
+ 009c1c44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1c44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1c44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1909aa04413d223117dafad2694fc071"></a>

### [`009c0cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0cac.md) → [`009c1c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1c58.md) FUN_009c1c58

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
      "site": "009c1c7c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c0cd0",
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
      "009c1c7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009c1c7c",
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
- 009c0cd0 ["INT_ADD", "register:40f0:8", ["const:9c0cd0:8", "const:4:8"]]
- 009c0cd0 ["CALL", null, ["ram:47ad34:8"]]
+ 009c1c7c ["INT_ADD", "register:40f0:8", ["const:9c1c7c:8", "const:4:8"]]
+ 009c1c7c ["CALL", null, ["ram:47b054:8"]]
- 009c0cdc ["INT_ADD", "register:40f0:8", ["const:9c0cdc:8", "const:4:8"]]
- 009c0cdc ["CALL", null, ["callee:0047d134:8"]]
+ 009c1c88 ["INT_ADD", "register:40f0:8", ["const:9c1c88:8", "const:4:8"]]
+ 009c1c88 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-d50eda9e808360631bc907ce95d060cd"></a>

### [`009c0d20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0d20.md) → [`009c1ccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1ccc.md) FUN_009c1ccc

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
      "definition_site": "009c1ce0",
      "incomplete_value": false,
      "site": "009c1ce4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0d34",
      "incomplete_value": false,
      "site": "009c0d38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:a78:8"
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
      "009c1ce4",
      "DATA",
      [
        "storage",
        "00c89a78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1ce4",
      "DATA",
      [
        "storage",
        "00c8aa48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0d2c ["INT_ADD", "register:40f0:8", ["const:9c0d2c:8", "const:4:8"]]
- 009c0d2c ["CALL", null, ["callee:00c58f30:8"]]
+ 009c1cd8 ["INT_ADD", "register:40f0:8", ["const:9c1cd8:8", "const:4:8"]]
+ 009c1cd8 ["CALL", null, ["callee:00c58f30:8"]]
- 009c0d30 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1cdc ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c0d34 ["COPY", "tmp:0:8", ["const:a78:8"]]
- 009c0d34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0d34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0d34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1ce0 ["COPY", "tmp:0:8", ["const:a48:8"]]
+ 009c1ce0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1ce0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1ce0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b33eab16c6cbd69eeda1041357316005"></a>

### [`009c0d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0d44.md) → [`009c1cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1cf0.md) FUN_009c1cf0

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
      "definition_site": "009c1cf4",
      "incomplete_value": false,
      "site": "009c1cf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c0d48",
      "incomplete_value": false,
      "site": "009c0d4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:a78:8"
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
      "009c1cf8",
      "DATA",
      [
        "storage",
        "00c89a78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1cf8",
      "DATA",
      [
        "storage",
        "00c8aa48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0d44 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c1cf0 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c0d48 ["COPY", "tmp:0:8", ["const:a78:8"]]
- 009c0d48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0d48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0d48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1cf4 ["COPY", "tmp:0:8", ["const:a48:8"]]
+ 009c1cf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1cf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1cf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-38065c5bebf786035b6f267f4d5b46f9"></a>

### [`009c0d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0d5c.md) → [`009c1d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1d08.md) FUN_009c1d08

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
      "site": "009c1d2c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c0d80",
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
      "009c1d2c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009c1d2c",
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
- 009c0d80 ["INT_ADD", "register:40f0:8", ["const:9c0d80:8", "const:4:8"]]
- 009c0d80 ["CALL", null, ["ram:47ad34:8"]]
+ 009c1d2c ["INT_ADD", "register:40f0:8", ["const:9c1d2c:8", "const:4:8"]]
+ 009c1d2c ["CALL", null, ["ram:47b054:8"]]
- 009c0d8c ["INT_ADD", "register:40f0:8", ["const:9c0d8c:8", "const:4:8"]]
- 009c0d8c ["CALL", null, ["callee:0047d134:8"]]
+ 009c1d38 ["INT_ADD", "register:40f0:8", ["const:9c1d38:8", "const:4:8"]]
+ 009c1d38 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-856a9b6744346e6216c3a704ad9d950c"></a>

### [`009c108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c108c.md) → [`009c2038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c2038.md) FUN_009c2038

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009c1d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1d78.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009c2044",
      "incomplete_value": false,
      "site": "009c2048",
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
      "definition_site": "009c1098",
      "incomplete_value": false,
      "site": "009c109c",
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
      "009c2044",
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
      "009c2044",
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
- 009c109c ["INT_ADD", "register:40f0:8", ["const:9c109c:8", "const:4:8"]]
- 009c109c ["CALL", null, ["callee:0043bad8:8"]]
+ 009c2048 ["INT_ADD", "register:40f0:8", ["const:9c2048:8", "const:4:8"]]
+ 009c2048 ["CALL", null, ["callee:0043bad8:8"]]
- 009c1094 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009c2040 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009c1098 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009c1098 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009c1098 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009c1098 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009c2044 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009c2044 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009c2044 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009c2044 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2e3b75656b2d0ebc9df9098e93cda1ed"></a>

### [`009c11c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c11c8.md) → [`009c2174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c2174.md) FUN_009c2174

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
      "definition_site": "009c2198",
      "incomplete_value": false,
      "site": "009c2198",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c11ec",
      "incomplete_value": false,
      "site": "009c11ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:af8:8"
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
      "009c2198",
      "DATA",
      [
        "storage",
        "00c89af8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c2198",
      "DATA",
      [
        "storage",
        "00c8aac8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c11dc ["INT_ADD", "register:40f0:8", ["const:9c11dc:8", "const:4:8"]]
- 009c11dc ["CALL", null, ["callee:00c58f30:8"]]
+ 009c2188 ["INT_ADD", "register:40f0:8", ["const:9c2188:8", "const:4:8"]]
+ 009c2188 ["CALL", null, ["callee:00c58f30:8"]]
- 009c11e4 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c2190 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c11e8 ["COPY", "tmp:0:8", ["const:af8:8"]]
- 009c11e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c11e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c11e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c2194 ["COPY", "tmp:0:8", ["const:ac8:8"]]
+ 009c2194 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2194 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2194 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-56a494bd400b780b6fc7558d0e1df024"></a>

### [`009c11fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c11fc.md) → [`009c21a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c21a8.md) FUN_009c21a8

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
      "definition_site": "009c21b4",
      "incomplete_value": false,
      "site": "009c21b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c1208",
      "incomplete_value": false,
      "site": "009c1208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:af8:8"
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
      "009c21b4",
      "DATA",
      [
        "storage",
        "00c89af8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c21b4",
      "DATA",
      [
        "storage",
        "00c8aac8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1200 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009c21ac ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009c1204 ["COPY", "tmp:0:8", ["const:af8:8"]]
- 009c1204 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009c1204 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009c1204 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009c21b0 ["COPY", "tmp:0:8", ["const:ac8:8"]]
+ 009c21b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009c21b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009c21b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5ea323afc971af6fc10cd7d2a3ecf9ff"></a>

### [`009c1218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1218.md) → [`009c21c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c21c4.md) FUN_009c21c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 77.69% / 新版 77.69%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_destination` 7件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c223c",
      "incomplete_value": true,
      "site": "009c224c",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:a88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c1290",
      "incomplete_value": true,
      "site": "009c12a0",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:9aa:8"
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
      "definition_site": "009c2240",
      "incomplete_value": true,
      "site": "009c2250",
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
      "definition_site": "009c1294",
      "incomplete_value": true,
      "site": "009c12a4",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c2244",
      "incomplete_value": true,
      "site": "009c2254",
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
      "definition_site": "009c1298",
      "incomplete_value": true,
      "site": "009c12a8",
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
      "009c2200",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009c2220",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "009c223c",
      "READ",
      [
        "storage",
        "002ba9aa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c2200",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009c2220",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "009c223c",
      "READ",
      [
        "storage",
        "002baa88",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1254 ["INT_ADD", "register:40f0:8", ["const:9c1254:8", "const:4:8"]]
- 009c1254 ["CALL", null, ["ram:47ad34:8"]]
+ 009c2200 ["INT_ADD", "register:40f0:8", ["const:9c2200:8", "const:4:8"]]
+ 009c2200 ["CALL", null, ["ram:47b054:8"]]
- 009c12e4 ["INT_ADD", "register:40f0:8", ["const:9c12e4:8", "const:4:8"]]
- 009c12e4 ["CALL", null, ["callee:0047ec3c:8"]]
+ 009c2290 ["INT_ADD", "register:40f0:8", ["const:9c2290:8", "const:4:8"]]
+ 009c2290 ["CALL", null, ["callee:0047ec3c:8"]]
- 009c13a8 ["INT_ADD", "register:40f0:8", ["const:9c13a8:8", "const:4:8"]]
- 009c13a8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 009c2354 ["INT_ADD", "register:40f0:8", ["const:9c2354:8", "const:4:8"]]
+ 009c2354 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-b6bf95bc68d7b7bd48910077865dde17"></a>

### [`009c146c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c146c.md) → [`009c2418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c2418.md) FUN_009c2418

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
      "definition_site": "009c242c",
      "incomplete_value": false,
      "site": "009c2430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c1480",
      "incomplete_value": false,
      "site": "009c1484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:b88:8"
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
      "009c2430",
      "DATA",
      [
        "storage",
        "00c89b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c2430",
      "DATA",
      [
        "storage",
        "00c8ab58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1478 ["INT_ADD", "register:40f0:8", ["const:9c1478:8", "const:4:8"]]
- 009c1478 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c2424 ["INT_ADD", "register:40f0:8", ["const:9c2424:8", "const:4:8"]]
+ 009c2424 ["CALL", null, ["callee:00c58f30:8"]]
- 009c147c ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c2428 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c1480 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 009c1480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c1480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c1480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c242c ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 009c242c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c242c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c242c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9e9e5c779af09e965a2702455799b7f0"></a>

### [`009c1490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1490.md) → [`009c243c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c243c.md) FUN_009c243c

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
      "definition_site": "009c2440",
      "incomplete_value": false,
      "site": "009c2444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c1494",
      "incomplete_value": false,
      "site": "009c1498",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:b88:8"
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
      "009c2444",
      "DATA",
      [
        "storage",
        "00c89b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c2444",
      "DATA",
      [
        "storage",
        "00c8ab58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1490 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c243c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c1494 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 009c1494 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c1494 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c1494 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c2440 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 009c2440 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2440 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2440 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f5d7f0ef15443449293b78708df12a8"></a>

### [`009c14a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c14a8.md) → [`009c2454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c2454.md) FUN_009c2454

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
      "site": "009c2478",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c14cc",
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
      "009c2478",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009c2478",
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
- 009c14cc ["INT_ADD", "register:40f0:8", ["const:9c14cc:8", "const:4:8"]]
- 009c14cc ["CALL", null, ["ram:47ad34:8"]]
+ 009c2478 ["INT_ADD", "register:40f0:8", ["const:9c2478:8", "const:4:8"]]
+ 009c2478 ["CALL", null, ["ram:47b054:8"]]
- 009c14d8 ["INT_ADD", "register:40f0:8", ["const:9c14d8:8", "const:4:8"]]
- 009c14d8 ["CALL", null, ["callee:0047d134:8"]]
+ 009c2484 ["INT_ADD", "register:40f0:8", ["const:9c2484:8", "const:4:8"]]
+ 009c2484 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-440c895d64f501af4bb4773ff15eabc3"></a>

### [`009c151c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c151c.md) → [`009c24c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c24c8.md) FUN_009c24c8

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
      "definition_site": "009c24ec",
      "incomplete_value": false,
      "site": "009c24ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c1540",
      "incomplete_value": false,
      "site": "009c1540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
      "009c24ec",
      "DATA",
      [
        "storage",
        "00c89c08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c24ec",
      "DATA",
      [
        "storage",
        "00c8abd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1530 ["INT_ADD", "register:40f0:8", ["const:9c1530:8", "const:4:8"]]
- 009c1530 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c24dc ["INT_ADD", "register:40f0:8", ["const:9c24dc:8", "const:4:8"]]
+ 009c24dc ["CALL", null, ["callee:00c58f30:8"]]
- 009c1538 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c24e4 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c153c ["COPY", "tmp:0:8", ["const:c08:8"]]
- 009c153c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c153c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c153c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c24e8 ["COPY", "tmp:0:8", ["const:bd8:8"]]
+ 009c24e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c24e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c24e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3377797465f26642047f42f548928f95"></a>

### [`009c1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1550.md) → [`009c24fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c24fc.md) FUN_009c24fc

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
      "definition_site": "009c2508",
      "incomplete_value": false,
      "site": "009c2508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c155c",
      "incomplete_value": false,
      "site": "009c155c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
      "009c2508",
      "DATA",
      [
        "storage",
        "00c89c08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c2508",
      "DATA",
      [
        "storage",
        "00c8abd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1554 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009c2500 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009c1558 ["COPY", "tmp:0:8", ["const:c08:8"]]
- 009c1558 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009c1558 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009c1558 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009c2504 ["COPY", "tmp:0:8", ["const:bd8:8"]]
+ 009c2504 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009c2504 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009c2504 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c0e610831f2f35e34dd37b8a37b7160a"></a>

### [`009c1668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1668.md) → [`009c2614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c2614.md) FUN_009c2614

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009be458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be458.md) · 呼出先 13件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`008641b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/008641b8.md)
- 新版 呼出元 1件 [`009bf404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf404.md) · 呼出先 13件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`00865164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00865/00865164.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 85.56% / 新版 85.56%

優先判定に残った影響 `call_argument_candidate` 28件, `store_destination` 5件, `store_value` 25件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009c2658",
      "incomplete_value": false,
      "site": "009c2660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c16ac",
      "incomplete_value": false,
      "site": "009c16b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c88:8"
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
      "definition_site": "009c26dc",
      "incomplete_value": true,
      "site": "009c26dc",
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
      "definition_site": "009c1730",
      "incomplete_value": true,
      "site": "009c1730",
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
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c26e0",
      "incomplete_value": true,
      "site": "009c26e0",
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
      "definition_site": "009c1734",
      "incomplete_value": true,
      "site": "009c1734",
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
      "009c2660",
      "DATA",
      [
        "storage",
        "00c89c88",
        null,
        "pointer"
      ]
    ],
    [
      "009c2694",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "009c26b4",
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
      "009c2660",
      "DATA",
      [
        "storage",
        "00c8ac58",
        null,
        "pointer"
      ]
    ],
    [
      "009c2694",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "009c26b4",
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
- 009c1754 ["INT_ADD", "register:40f0:8", ["const:9c1754:8", "const:4:8"]]
- 009c1754 ["CALL", null, ["callee:0047e96c:8"]]
+ 009c2700 ["INT_ADD", "register:40f0:8", ["const:9c2700:8", "const:4:8"]]
+ 009c2700 ["CALL", null, ["callee:0047e96c:8"]]
- 009c19c0 ["INT_ADD", "register:40f0:8", ["const:9c19c0:8", "const:4:8"]]
- 009c19c0 ["CALL", null, ["callee:0047e96c:8"]]
+ 009c296c ["INT_ADD", "register:40f0:8", ["const:9c296c:8", "const:4:8"]]
+ 009c296c ["CALL", null, ["callee:0047e96c:8"]]
- 009c16a0 ["INT_ADD", "register:40f0:8", ["const:9c16a0:8", "const:4:8"]]
- 009c16a0 ["CALL", null, ["callee:00b3db68:8"]]
+ 009c264c ["INT_ADD", "register:40f0:8", ["const:9c264c:8", "const:4:8"]]
+ 009c264c ["CALL", null, ["callee:00b3db68:8"]]
~~~


<a id="compare-c14cb9a948b3ac06b94f6179bb33456e"></a>

### [`009c267c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c267c.md) → [`009c3628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c3/009c3628.md) FUN_009c3628

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009c2770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2770.md) · 呼出先 4件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`009c371c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c3/009c371c.md) · 呼出先 4件 [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`0067e9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e9d8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009c3640",
      "incomplete_value": false,
      "site": "009c3644",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c2694",
      "incomplete_value": false,
      "site": "009c2698",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c88:8"
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
      "009c3644",
      "DATA",
      [
        "storage",
        "00c89c88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009c3644",
      "DATA",
      [
        "storage",
        "00c8ac58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c2690 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009c363c ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009c2694 ["COPY", "tmp:0:8", ["const:c88:8"]]
- 009c2694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c2694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c2694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c3640 ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 009c3640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c3640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c3640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009c26a8 ["INT_ADD", "register:40f0:8", ["const:9c26a8:8", "const:4:8"]]
- 009c26a8 ["CALL", null, ["callee:00c54d90:8"]]
+ 009c3654 ["INT_ADD", "register:40f0:8", ["const:9c3654:8", "const:4:8"]]
+ 009c3654 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-751577524ca9f5a8a3dd73e9d02ecfd5"></a>

### [`009c2794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2794.md) → [`009c3740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c3/009c3740.md) _INIT_199

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c377c",
      "incomplete_value": true,
      "site": "009c3798",
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
      "definition_site": "009c27d0",
      "incomplete_value": true,
      "site": "009c27ec",
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
      "definition_site": "009c37a0",
      "incomplete_value": true,
      "site": "009c37bc",
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
      "definition_site": "009c27f4",
      "incomplete_value": true,
      "site": "009c2810",
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
      "definition_site": "009c37c0",
      "incomplete_value": true,
      "site": "009c37dc",
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
      "definition_site": "009c2814",
      "incomplete_value": true,
      "site": "009c2830",
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
      "009c377c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009c37a0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009c37c0",
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
      "009c377c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009c37a0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009c37c0",
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
- 009c29c8 ["INT_ADD", "register:40f0:8", ["const:9c29c8:8", "const:4:8"]]
- 009c29c8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009c3974 ["INT_ADD", "register:40f0:8", ["const:9c3974:8", "const:4:8"]]
+ 009c3974 ["CALL", null, ["callee:00c58ed0:8"]]
- 009c27bc ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009c3768 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 009c27c0 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 009c27c0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009c27c0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009c27c0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009c376c ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 009c376c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009c376c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009c376c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-7cdcbf8b20484a3e133aa0030ef37420"></a>

### [`009c2b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2b24.md) → [`009c3ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c3/009c3ad0.md) FUN_009c3ad0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 15件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.27% / 新版 89.27%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009c3b10",
      "incomplete_value": false,
      "site": "009c3b14",
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
      "definition_site": "009c2b64",
      "incomplete_value": false,
      "site": "009c2b68",
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
      "definition_site": "009c3b2c",
      "incomplete_value": true,
      "site": "009c3b3c",
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
                "const:7c9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c2b80",
      "incomplete_value": true,
      "site": "009c2b90",
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
                "const:789:8"
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
      "definition_site": "009c3b30",
      "incomplete_value": true,
      "site": "009c3b40",
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
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c2b84",
      "incomplete_value": true,
      "site": "009c2b94",
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
                "const:e:8"
              ]
            ]
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
      "009c3b14",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009c3b2c",
      "READ",
      [
        "storage",
        "002a0789",
        null,
        "string"
      ]
    ],
    [
      "009c3b30",
      "READ",
      [
        "storage",
        "002a0797",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c3b14",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009c3b2c",
      "READ",
      [
        "storage",
        "002a07c9",
        null,
        "string"
      ]
    ],
    [
      "009c3b30",
      "READ",
      [
        "storage",
        "002a07d7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c2b5c ["INT_ADD", "register:40f0:8", ["const:9c2b5c:8", "const:4:8"]]
- 009c2b5c ["CALL", null, ["callee:00488180:8"]]
+ 009c3b08 ["INT_ADD", "register:40f0:8", ["const:9c3b08:8", "const:4:8"]]
+ 009c3b08 ["CALL", null, ["callee:00488180:8"]]
- 009c2b60 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009c3b0c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009c2b64 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009c2b64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c2b64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c2b64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c3b10 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009c3b10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c3b10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c3b10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e6b03193aae341369dfb2a0c984081ec"></a>

### [`009c3430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3430.md) → [`009c43dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c43dc.md) FUN_009c43dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.78% / 新版 95.78%

優先判定に残った影響 `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c4450",
      "incomplete_value": true,
      "site": "009c4460",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:bcd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c34a4",
      "incomplete_value": true,
      "site": "009c34b4",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:aef:8"
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
      "definition_site": "009c4464",
      "incomplete_value": true,
      "site": "009c4464",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c34b8",
      "incomplete_value": true,
      "site": "009c34b8",
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
                "const:f:8"
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
      "definition_site": "009c4458",
      "incomplete_value": true,
      "site": "009c4468",
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
                "const:4e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c34ac",
      "incomplete_value": true,
      "site": "009c34bc",
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
                "const:490:8"
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
      "009c442c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009c4450",
      "READ",
      [
        "storage",
        "002bbaef",
        null,
        "string"
      ]
    ],
    [
      "009c4454",
      "READ",
      [
        "storage",
        "002bbafe",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c442c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009c4450",
      "READ",
      [
        "storage",
        "002bbbcd",
        null,
        "string"
      ]
    ],
    [
      "009c4454",
      "READ",
      [
        "storage",
        "002bbbdc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c3464 ["INT_ADD", "register:40f0:8", ["const:9c3464:8", "const:4:8"]]
- 009c3464 ["CALL", null, ["callee:00488180:8"]]
+ 009c4410 ["INT_ADD", "register:40f0:8", ["const:9c4410:8", "const:4:8"]]
+ 009c4410 ["CALL", null, ["callee:00488180:8"]]
- 009c346c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009c4418 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009c3470 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009c3470 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c3470 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c3470 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c441c ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009c441c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c441c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c441c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-198895b48ed13b190731162eb9ba3d37"></a>

### [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) → [`009c4a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4a10.md) FUN_009c4a10

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009c60c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c6/009c60c8.md) · 呼出先 45件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md)
- 新版 呼出元 1件 [`009c7074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c7/009c7074.md) · 呼出先 45件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00597a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597a48.md) [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.63% / 新版 99.63%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c51cc",
      "incomplete_value": true,
      "site": "009c51e4",
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
                "const:f35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c4220",
      "incomplete_value": true,
      "site": "009c4238",
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
                "const:e57:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 94,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c5fa4",
      "incomplete_value": true,
      "site": "009c5fb0",
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
                "const:f35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c4ff8",
      "incomplete_value": true,
      "site": "009c5004",
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
                "const:e57:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 212,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009c51cc",
      "READ",
      [
        "storage",
        "002bce57",
        null,
        "string"
      ]
    ],
    [
      "009c5fa4",
      "READ",
      [
        "storage",
        "002bce57",
        null,
        "string"
      ]
    ],
    [
      "009c651c",
      "READ",
      [
        "storage",
        "00c9b5f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009c51cc",
      "READ",
      [
        "storage",
        "002bcf35",
        null,
        "string"
      ]
    ],
    [
      "009c5fa4",
      "READ",
      [
        "storage",
        "002bcf35",
        null,
        "string"
      ]
    ],
    [
      "009c651c",
      "READ",
      [
        "storage",
        "00c9c5c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c3aec ["INT_ADD", "register:40f0:8", ["const:9c3aec:8", "const:4:8"]]
- 009c3aec ["CALL", null, ["callee:00a36be0:8"]]
+ 009c4a98 ["INT_ADD", "register:40f0:8", ["const:9c4a98:8", "const:4:8"]]
+ 009c4a98 ["CALL", null, ["callee:00a36be0:8"]]
- 009c3af8 ["INT_ADD", "register:40f0:8", ["const:9c3af8:8", "const:4:8"]]
- 009c3af8 ["CALL", null, ["callee:00a39c34:8"]]
+ 009c4aa4 ["INT_ADD", "register:40f0:8", ["const:9c4aa4:8", "const:4:8"]]
+ 009c4aa4 ["CALL", null, ["callee:00a39c34:8"]]
- 009c3b50 ["INT_ADD", "register:40f0:8", ["const:9c3b50:8", "const:4:8"]]
- 009c3b50 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c4afc ["INT_ADD", "register:40f0:8", ["const:9c4afc:8", "const:4:8"]]
+ 009c4afc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-c6fdfb84771d81b1730a1116babf8dfb"></a>

### [`009c60c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c6/009c60c8.md) → [`009c7074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c7/009c7074.md) FUN_009c7074

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 1件 [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) · 呼出先 20件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.57% / 新版 99.57%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c7ae8",
      "incomplete_value": true,
      "site": "009c7ae8",
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
                "const:e98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c6b3c",
      "incomplete_value": true,
      "site": "009c6b3c",
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
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 161,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c7b58",
      "incomplete_value": true,
      "site": "009c7b5c",
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
                "register:4040:8"
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
      "definition_site": "009c6bac",
      "incomplete_value": true,
      "site": "009c6bb0",
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
                "register:4040:8"
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
    "ordinal": 166,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009c7ad4",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "009c7b58",
      "READ",
      [
        "storage",
        "002c2a50",
        null,
        null
      ]
    ],
    [
      "009c8000",
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
      "009c7ad4",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "009c7b58",
      "READ",
      [
        "storage",
        "002c2aa0",
        null,
        null
      ]
    ],
    [
      "009c8000",
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
- 009c6100 ["INT_ADD", "register:40f0:8", ["const:9c6100:8", "const:4:8"]]
- 009c6100 ["CALL", null, ["callee:00728124:8"]]
+ 009c70ac ["INT_ADD", "register:40f0:8", ["const:9c70ac:8", "const:4:8"]]
+ 009c70ac ["CALL", null, ["callee:00728124:8"]]
- 009c6114 ["INT_ADD", "register:40f0:8", ["const:9c6114:8", "const:4:8"]]
- 009c6114 ["CALL", null, ["callee:0048d1e4:8"]]
+ 009c70c0 ["INT_ADD", "register:40f0:8", ["const:9c70c0:8", "const:4:8"]]
+ 009c70c0 ["CALL", null, ["callee:0048d1e4:8"]]
- 009c611c ["INT_ADD", "register:40f0:8", ["const:9c611c:8", "const:4:8"]]
- 009c611c ["CALL", null, ["callee:008524fc:8"]]
+ 009c70c8 ["INT_ADD", "register:40f0:8", ["const:9c70c8:8", "const:4:8"]]
+ 009c70c8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-2c838e3b2f3bf07744eeb22d91f925e2"></a>

### [`009c8b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8b1c.md) → [`009c9ac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c9/009c9ac8.md) FUN_009c9ac8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009c2b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2b24.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009c3ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c3/009c3ad0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009c9ad4",
      "incomplete_value": false,
      "site": "009c9ad8",
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
      "definition_site": "009c8b28",
      "incomplete_value": false,
      "site": "009c8b2c",
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
      "009c9ad4",
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
      "009c9ad4",
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
- 009c8b2c ["INT_ADD", "register:40f0:8", ["const:9c8b2c:8", "const:4:8"]]
- 009c8b2c ["CALL", null, ["callee:0043bad8:8"]]
+ 009c9ad8 ["INT_ADD", "register:40f0:8", ["const:9c9ad8:8", "const:4:8"]]
+ 009c9ad8 ["CALL", null, ["callee:0043bad8:8"]]
- 009c8b24 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009c9ad0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009c8b28 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009c8b28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009c8b28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009c8b28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009c9ad4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009c9ad4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009c9ad4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009c9ad4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7216422554008c16107e66929f3321f0"></a>

### [`009c8c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c0c.md) → [`009c9bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c9/009c9bb8.md) FUN_009c9bb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 2件 [`009c4a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4a10.md) [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009c9bc4",
      "incomplete_value": false,
      "site": "009c9bc8",
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
      "definition_site": "009c8c18",
      "incomplete_value": false,
      "site": "009c8c1c",
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
      "009c9bc4",
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
      "009c9bc4",
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
- 009c8c1c ["INT_ADD", "register:40f0:8", ["const:9c8c1c:8", "const:4:8"]]
- 009c8c1c ["CALL", null, ["callee:00442c90:8"]]
+ 009c9bc8 ["INT_ADD", "register:40f0:8", ["const:9c9bc8:8", "const:4:8"]]
+ 009c9bc8 ["CALL", null, ["callee:00442c90:8"]]
- 009c8c14 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009c9bc0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009c8c18 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009c8c18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009c8c18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009c8c18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009c9bc4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009c9bc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009c9bc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009c9bc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-aaeb0dd35003a5df27f5302337044daf"></a>

### [`009c8c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c20.md) → [`009c9bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c9/009c9bcc.md) FUN_009c9bcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) [`009c8c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c20.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`009c4a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4a10.md) [`009c9bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c9/009c9bcc.md) [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009c9d20",
      "incomplete_value": false,
      "site": "009c9d28",
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
      "definition_site": "009c8d74",
      "incomplete_value": false,
      "site": "009c8d7c",
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
      "definition_site": "009c9e78",
      "incomplete_value": false,
      "site": "009c9e80",
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
      "definition_site": "009c8ecc",
      "incomplete_value": false,
      "site": "009c8ed4",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009c9e90",
      "incomplete_value": false,
      "site": "009c9e9c",
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
      "definition_site": "009c8ee4",
      "incomplete_value": false,
      "site": "009c8ef0",
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
      "009c9d20",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009c9d44",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009c9e78",
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
      "009c9d20",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "009c9d44",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "009c9e78",
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
- 009c8d7c ["INT_ADD", "register:40f0:8", ["const:9c8d7c:8", "const:4:8"]]
- 009c8d7c ["CALL", null, ["callee:004421f4:8"]]
+ 009c9d28 ["INT_ADD", "register:40f0:8", ["const:9c9d28:8", "const:4:8"]]
+ 009c9d28 ["CALL", null, ["callee:004421f4:8"]]
- 009c8ed4 ["INT_ADD", "register:40f0:8", ["const:9c8ed4:8", "const:4:8"]]
- 009c8ed4 ["CALL", null, ["callee:004421f4:8"]]
+ 009c9e80 ["INT_ADD", "register:40f0:8", ["const:9c9e80:8", "const:4:8"]]
+ 009c9e80 ["CALL", null, ["callee:004421f4:8"]]
- 009c8ef0 ["INT_ADD", "register:40f0:8", ["const:9c8ef0:8", "const:4:8"]]
- 009c8ef0 ["CALL", null, ["callee:00442b54:8"]]
+ 009c9e9c ["INT_ADD", "register:40f0:8", ["const:9c9e9c:8", "const:4:8"]]
+ 009c9e9c ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-1d162689b15903a3b8ef7ce875773901"></a>

### [`009c9420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9420.md) → [`009ca3cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009ca3cc.md) FUN_009ca3cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009c8c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c20.md) [`009c9420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9420.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`009c9bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c9/009c9bcc.md) [`009ca3cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009ca3cc.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009ca51c",
      "incomplete_value": false,
      "site": "009ca524",
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
      "definition_site": "009c9570",
      "incomplete_value": false,
      "site": "009c9578",
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
      "definition_site": "009ca540",
      "incomplete_value": false,
      "site": "009ca54c",
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
      "definition_site": "009c9594",
      "incomplete_value": false,
      "site": "009c95a0",
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
      "definition_site": "009ca674",
      "incomplete_value": false,
      "site": "009ca67c",
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
      "definition_site": "009c96c8",
      "incomplete_value": false,
      "site": "009c96d0",
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
      "009ca51c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009ca540",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009ca674",
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
      "009ca51c",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "009ca540",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "009ca674",
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
- 009c9578 ["INT_ADD", "register:40f0:8", ["const:9c9578:8", "const:4:8"]]
- 009c9578 ["CALL", null, ["callee:004421f4:8"]]
+ 009ca524 ["INT_ADD", "register:40f0:8", ["const:9ca524:8", "const:4:8"]]
+ 009ca524 ["CALL", null, ["callee:004421f4:8"]]
- 009c95a0 ["INT_ADD", "register:40f0:8", ["const:9c95a0:8", "const:4:8"]]
- 009c95a0 ["CALL", null, ["callee:00442b54:8"]]
+ 009ca54c ["INT_ADD", "register:40f0:8", ["const:9ca54c:8", "const:4:8"]]
+ 009ca54c ["CALL", null, ["callee:00442b54:8"]]
- 009c96d0 ["INT_ADD", "register:40f0:8", ["const:9c96d0:8", "const:4:8"]]
- 009c96d0 ["CALL", null, ["callee:004421f4:8"]]
+ 009ca67c ["INT_ADD", "register:40f0:8", ["const:9ca67c:8", "const:4:8"]]
+ 009ca67c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-fc0340602a9dc6296bbf9c142f68c470"></a>

### [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) → [`009cb9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb9d0.md) FUN_009cb9d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009c60c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c6/009c60c8.md) [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md)
- 新版 呼出元 2件 [`009c7074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c7/009c7074.md) [`009cb9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb9d0.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`009cb9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb9d0.md) [`009cc98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cc98c.md) [`009ccbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009ccbc0.md) [`009cce28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cce28.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.90% / 新版 99.90%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009cc964",
      "incomplete_value": false,
      "site": "009cc968",
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
      "definition_site": "009cb9b8",
      "incomplete_value": false,
      "site": "009cb9bc",
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
      "009cc964",
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
      "009cc964",
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
- 009cb9bc ["INT_ADD", "register:40f0:8", ["const:9cb9bc:8", "const:4:8"]]
- 009cb9bc ["CALL", null, ["callee:00442c90:8"]]
+ 009cc968 ["INT_ADD", "register:40f0:8", ["const:9cc968:8", "const:4:8"]]
+ 009cc968 ["CALL", null, ["callee:00442c90:8"]]
- 009caad8 ["INT_ADD", "register:40f0:8", ["const:9caad8:8", "const:4:8"]]
- 009caad8 ["CALL", null, ["callee:009ccbc0:8"]]
+ 009cba84 ["INT_ADD", "register:40f0:8", ["const:9cba84:8", "const:4:8"]]
+ 009cba84 ["CALL", null, ["callee:009ccbc0:8"]]
- 009cab00 ["INT_ADD", "register:40f0:8", ["const:9cab00:8", "const:4:8"]]
- 009cab00 ["CALL", null, ["callee:009ccbc0:8"]]
+ 009cbaac ["INT_ADD", "register:40f0:8", ["const:9cbaac:8", "const:4:8"]]
+ 009cbaac ["CALL", null, ["callee:009ccbc0:8"]]
~~~


<a id="compare-afa0521352eb30122312dfcf2adf0fd6"></a>

### [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) → [`009cc98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cc98c.md) FUN_009cc98c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md)
- 新版 呼出元 2件 [`009cb9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb9d0.md) [`009cce28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cce28.md) · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`009cd0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd0c4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.29% / 新版 99.29%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009ccb90",
      "incomplete_value": false,
      "site": "009ccb94",
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
      "definition_site": "009cbbe4",
      "incomplete_value": false,
      "site": "009cbbe8",
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
      "009ccb90",
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
      "009ccb90",
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
- 009cbbe8 ["INT_ADD", "register:40f0:8", ["const:9cbbe8:8", "const:4:8"]]
- 009cbbe8 ["CALL", null, ["callee:00442c90:8"]]
+ 009ccb94 ["INT_ADD", "register:40f0:8", ["const:9ccb94:8", "const:4:8"]]
+ 009ccb94 ["CALL", null, ["callee:00442c90:8"]]
- 009cba10 ["INT_ADD", "register:40f0:8", ["const:9cba10:8", "const:4:8"]]
- 009cba10 ["CALL", null, ["callee:009cd0c4:8"]]
+ 009cc9bc ["INT_ADD", "register:40f0:8", ["const:9cc9bc:8", "const:4:8"]]
+ 009cc9bc ["CALL", null, ["callee:009cd0c4:8"]]
- 009cbbe4 ["COPY", "tmp:0:8", ["const:170:8"]]
- 009cbbe4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009cbbe4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009cbbe4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009ccb90 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 009ccb90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009ccb90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009ccb90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2bf0e05df1437d27ff5244e08ebe299c"></a>

### [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md) → [`009ccbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009ccbc0.md) FUN_009ccbc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`009cb9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb9d0.md) [`009cce28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cce28.md) [`009cd0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd0c4.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009ccde8",
      "incomplete_value": false,
      "site": "009ccdec",
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
      "definition_site": "009cbe3c",
      "incomplete_value": false,
      "site": "009cbe40",
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
      "009ccde8",
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
      "009ccde8",
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
- 009cbe40 ["INT_ADD", "register:40f0:8", ["const:9cbe40:8", "const:4:8"]]
- 009cbe40 ["CALL", null, ["callee:00442c90:8"]]
+ 009ccdec ["INT_ADD", "register:40f0:8", ["const:9ccdec:8", "const:4:8"]]
+ 009ccdec ["CALL", null, ["callee:00442c90:8"]]
- 009cbe3c ["COPY", "tmp:0:8", ["const:170:8"]]
- 009cbe3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009cbe3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009cbe3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009ccde8 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 009ccde8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009ccde8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009ccde8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6258e531415f924c7927bdf4b03d4f33"></a>

### [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) → [`009cce28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cce28.md) FUN_009cce28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) · 呼出先 4件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md) [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md)
- 新版 呼出元 1件 [`009cb9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb9d0.md) · 呼出先 4件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`009cc98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cc98c.md) [`009ccbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009ccbc0.md) [`009cd0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd0c4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.40% / 新版 99.40%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009cd038",
      "incomplete_value": false,
      "site": "009cd03c",
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
      "definition_site": "009cc08c",
      "incomplete_value": false,
      "site": "009cc090",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009cd038",
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
      "009cd038",
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
- 009cc090 ["INT_ADD", "register:40f0:8", ["const:9cc090:8", "const:4:8"]]
- 009cc090 ["CALL", null, ["callee:00442c90:8"]]
+ 009cd03c ["INT_ADD", "register:40f0:8", ["const:9cd03c:8", "const:4:8"]]
+ 009cd03c ["CALL", null, ["callee:00442c90:8"]]
- 009cbf14 ["INT_ADD", "register:40f0:8", ["const:9cbf14:8", "const:4:8"]]
- 009cbf14 ["CALL", null, ["callee:009cc98c:8"]]
+ 009ccec0 ["INT_ADD", "register:40f0:8", ["const:9ccec0:8", "const:4:8"]]
+ 009ccec0 ["CALL", null, ["callee:009cc98c:8"]]
- 009cbf28 ["INT_ADD", "register:40f0:8", ["const:9cbf28:8", "const:4:8"]]
- 009cbf28 ["CALL", null, ["callee:009ccbc0:8"]]
+ 009cced4 ["INT_ADD", "register:40f0:8", ["const:9cced4:8", "const:4:8"]]
+ 009cced4 ["CALL", null, ["callee:009ccbc0:8"]]
~~~


<a id="compare-97d63df2d955183b06c12a49c80dc292"></a>

### [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md) → [`009cd0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd0c4.md) FUN_009cd0c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md)
- 新版 呼出元 3件 [`009cb9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb9d0.md) [`009cc98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cc98c.md) [`009cce28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009cce28.md) · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`009ccbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cc/009ccbc0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.09% / 新版 99.09%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009cd24c",
      "incomplete_value": false,
      "site": "009cd250",
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
      "definition_site": "009cc2a0",
      "incomplete_value": false,
      "site": "009cc2a4",
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
      "009cd24c",
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
      "009cd24c",
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
- 009cc2a4 ["INT_ADD", "register:40f0:8", ["const:9cc2a4:8", "const:4:8"]]
- 009cc2a4 ["CALL", null, ["callee:00442c90:8"]]
+ 009cd250 ["INT_ADD", "register:40f0:8", ["const:9cd250:8", "const:4:8"]]
+ 009cd250 ["CALL", null, ["callee:00442c90:8"]]
- 009cc144 ["INT_ADD", "register:40f0:8", ["const:9cc144:8", "const:4:8"]]
- 009cc144 ["CALL", null, ["callee:009ccbc0:8"]]
+ 009cd0f0 ["INT_ADD", "register:40f0:8", ["const:9cd0f0:8", "const:4:8"]]
+ 009cd0f0 ["CALL", null, ["callee:009ccbc0:8"]]
- 009cc2a0 ["COPY", "tmp:0:8", ["const:170:8"]]
- 009cc2a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009cc2a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009cc2a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009cd24c ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 009cd24c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009cd24c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009cd24c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-34f4ae82356eb99a065551bbb57acc85"></a>

### [`009cc2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc2d0.md) → [`009cd27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd27c.md) _INIT_200

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009cd2b8",
      "incomplete_value": true,
      "site": "009cd2d4",
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
      "definition_site": "009cc30c",
      "incomplete_value": true,
      "site": "009cc328",
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
      "definition_site": "009cd2dc",
      "incomplete_value": true,
      "site": "009cd2f8",
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
      "definition_site": "009cc330",
      "incomplete_value": true,
      "site": "009cc34c",
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
      "definition_site": "009cd2fc",
      "incomplete_value": true,
      "site": "009cd318",
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
      "definition_site": "009cc350",
      "incomplete_value": true,
      "site": "009cc36c",
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
      "009cd2b8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009cd2dc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009cd2fc",
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
      "009cd2b8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009cd2dc",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009cd2fc",
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
- 009cc504 ["INT_ADD", "register:40f0:8", ["const:9cc504:8", "const:4:8"]]
- 009cc504 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009cd4b0 ["INT_ADD", "register:40f0:8", ["const:9cd4b0:8", "const:4:8"]]
+ 009cd4b0 ["CALL", null, ["callee:00c58ed0:8"]]
- 009cc2f8 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009cd2a4 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 009cc2fc ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 009cc2fc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009cc2fc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009cc2fc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009cd2a8 ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 009cd2a8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009cd2a8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009cd2a8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-4b8a3b619c152a683050d60ede7c511d"></a>

### [`009cc7f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc7f4.md) → [`009cd7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd7a0.md) _INIT_201

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009cd7dc",
      "incomplete_value": true,
      "site": "009cd7f8",
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
      "definition_site": "009cc830",
      "incomplete_value": true,
      "site": "009cc84c",
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
      "definition_site": "009cd800",
      "incomplete_value": true,
      "site": "009cd81c",
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
      "definition_site": "009cc854",
      "incomplete_value": true,
      "site": "009cc870",
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
      "definition_site": "009cd820",
      "incomplete_value": true,
      "site": "009cd83c",
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
      "definition_site": "009cc874",
      "incomplete_value": true,
      "site": "009cc890",
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
      "009cd7dc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009cd800",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009cd820",
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
      "009cd7dc",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009cd800",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009cd820",
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
- 009cca28 ["INT_ADD", "register:40f0:8", ["const:9cca28:8", "const:4:8"]]
- 009cca28 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009cd9d4 ["INT_ADD", "register:40f0:8", ["const:9cd9d4:8", "const:4:8"]]
+ 009cd9d4 ["CALL", null, ["callee:00c58ed0:8"]]
- 009cc81c ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009cd7c8 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 009cc820 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 009cc820 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009cc820 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009cc820 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009cd7cc ["COPY", "tmp:0:8", ["const:d98:8"]]
+ 009cd7cc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009cd7cc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009cd7cc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-75446d721346ec0e4a16391fc08eaaa2"></a>

### [`009ccb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccb84.md) → [`009cdb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cdb30.md) FUN_009cdb30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0087f164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f164.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00880494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880494.md) [`008acdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acdac.md) · 呼出先 6件 [`0076846c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/0076846c.md) [`00768a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768a80.md) [`00768ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ebc.md) [`0076911c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/0076911c.md) [`007692a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/007692a8.md)
- 新版 呼出元 4件 [`00880110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/00880110.md) [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) [`00881440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881440.md) [`008add58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008add58.md) · 呼出先 6件 [`00768848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/00768848.md) [`00768e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/00768e5c.md) [`00769298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/00769298.md) [`007694f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/007694f8.md) [`00769684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/00769684.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 47.37% / 新版 47.37%

優先判定に残った影響 `call_target` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009cdb40",
      "value": [
        "leaf",
        "ram:84f5a0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ccb94",
      "value": [
        "leaf",
        "ram:84e5f4:8"
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
      "site": "009cdb4c",
      "value": [
        "leaf",
        "ram:768e5c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ccba0",
      "value": [
        "leaf",
        "ram:768a80:8"
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
      "site": "009cdb54",
      "value": [
        "leaf",
        "ram:769298:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ccba8",
      "value": [
        "leaf",
        "ram:768ebc:8"
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
      "009cdb40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0084e5f4"
      ]
    ],
    [
      "009cdb4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768a80"
      ]
    ],
    [
      "009cdb54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768ebc"
      ]
    ]
  ],
  "added": [
    [
      "009cdb40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0084f5a0"
      ]
    ],
    [
      "009cdb4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768e5c"
      ]
    ],
    [
      "009cdb54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00769298"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ccb94 ["INT_ADD", "register:40f0:8", ["const:9ccb94:8", "const:4:8"]]
- 009ccb94 ["CALL", null, ["ram:84e5f4:8"]]
+ 009cdb40 ["INT_ADD", "register:40f0:8", ["const:9cdb40:8", "const:4:8"]]
+ 009cdb40 ["CALL", null, ["ram:84f5a0:8"]]
- 009ccba0 ["INT_ADD", "register:40f0:8", ["const:9ccba0:8", "const:4:8"]]
- 009ccba0 ["CALL", null, ["ram:768a80:8"]]
+ 009cdb4c ["INT_ADD", "register:40f0:8", ["const:9cdb4c:8", "const:4:8"]]
+ 009cdb4c ["CALL", null, ["ram:768e5c:8"]]
- 009ccba8 ["INT_ADD", "register:40f0:8", ["const:9ccba8:8", "const:4:8"]]
- 009ccba8 ["CALL", null, ["ram:768ebc:8"]]
+ 009cdb54 ["INT_ADD", "register:40f0:8", ["const:9cdb54:8", "const:4:8"]]
+ 009cdb54 ["CALL", null, ["ram:769298:8"]]
~~~


<a id="compare-172a02c41feedbcc6d92e785da60d27b"></a>

### [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) → [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) FUN_009d1320

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`006e542c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e542c.md) [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 108件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)
- 新版 呼出元 10件 [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`006e57dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e5/006e57dc.md) [`0073cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cd40.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 108件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.44% / 新版 99.44%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 10件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009d190c",
      "incomplete_value": false,
      "site": "009d190c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d0960",
      "incomplete_value": false,
      "site": "009d0960",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:ca8:8"
          ]
        ]
      ]
    },
    "ordinal": 71,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d1a0c",
      "value": [
        "leaf",
        "ram:806808:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d0a60",
      "value": [
        "leaf",
        "ram:8058a4:8"
      ]
    },
    "ordinal": 28,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d1a60",
      "value": [
        "leaf",
        "ram:806808:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d0ab4",
      "value": [
        "leaf",
        "ram:8058a4:8"
      ]
    },
    "ordinal": 33,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009d1528",
      "DATA",
      [
        "storage",
        "0038e028",
        null,
        "uleb128"
      ]
    ],
    [
      "009d155c",
      "DATA",
      [
        "storage",
        "0038df68",
        null,
        "byte[23]"
      ]
    ],
    [
      "009d1564",
      "DATA",
      [
        "storage",
        "0038df60",
        null,
        "uleb128"
      ]
    ]
  ],
  "added": [
    [
      "009d1528",
      "DATA",
      [
        "storage",
        "0038e028",
        null,
        "byte[27]"
      ]
    ],
    [
      "009d155c",
      "DATA",
      [
        "storage",
        "0038df68",
        null,
        "byte[27]"
      ]
    ],
    [
      "009d1564",
      "DATA",
      [
        "storage",
        "0038df60",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 009d0a60 ["INT_ADD", "register:40f0:8", ["const:9d0a60:8", "const:4:8"]]
- 009d0a60 ["CALL", null, ["ram:8058a4:8"]]
+ 009d1a0c ["INT_ADD", "register:40f0:8", ["const:9d1a0c:8", "const:4:8"]]
+ 009d1a0c ["CALL", null, ["ram:806808:8"]]
- 009d0ab4 ["INT_ADD", "register:40f0:8", ["const:9d0ab4:8", "const:4:8"]]
- 009d0ab4 ["CALL", null, ["ram:8058a4:8"]]
+ 009d1a60 ["INT_ADD", "register:40f0:8", ["const:9d1a60:8", "const:4:8"]]
+ 009d1a60 ["CALL", null, ["ram:806808:8"]]
- 009d0af4 ["INT_ADD", "register:40f0:8", ["const:9d0af4:8", "const:4:8"]]
- 009d0af4 ["CALL", null, ["ram:8058a4:8"]]
+ 009d1aa0 ["INT_ADD", "register:40f0:8", ["const:9d1aa0:8", "const:4:8"]]
+ 009d1aa0 ["CALL", null, ["ram:806808:8"]]
~~~


<a id="compare-afe9dab02418d871a2c4a06686aca21a"></a>

### [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) → [`009d4af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d4af4.md) FUN_009d4af4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) · 呼出先 65件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md)
- 新版 呼出元 5件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) [`0089c290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089c290.md) [`0089e4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089e/0089e4cc.md) [`00912be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00912/00912be4.md) · 呼出先 65件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046e898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e898.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 96.26% / 新版 96.26%

優先判定に残った影響 `call_argument_candidate` 27件, `call_target` 2件, `store_destination` 21件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009d5e90",
      "incomplete_value": false,
      "site": "009d5e90",
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
      "definition_site": "009d4ee4",
      "incomplete_value": false,
      "site": "009d4ee4",
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
    "ordinal": 208,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009d5e94",
      "incomplete_value": false,
      "site": "009d5e94",
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
      "definition_site": "009d4ee8",
      "incomplete_value": false,
      "site": "009d4ee8",
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
    "ordinal": 209,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009d5e90",
      "incomplete_value": false,
      "site": "009d5e94",
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
      "definition_site": "009d4ee4",
      "incomplete_value": false,
      "site": "009d4ee8",
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
    "ordinal": 209,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009d4b40",
      "DATA",
      [
        "storage",
        "00393c13",
        null,
        "byte[59]"
      ]
    ],
    [
      "009d4b4c",
      "DATA",
      [
        "storage",
        "00393c04",
        null,
        "byte[59]"
      ]
    ],
    [
      "009d4c50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a355a8"
      ]
    ]
  ],
  "added": [
    [
      "009d4b40",
      "DATA",
      [
        "storage",
        "00393c13",
        null,
        "byte[43]"
      ]
    ],
    [
      "009d4b4c",
      "DATA",
      [
        "storage",
        "00393c04",
        null,
        "byte[43]"
      ]
    ],
    [
      "009d4c50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a3659c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009d3ca4 ["INT_ADD", "register:40f0:8", ["const:9d3ca4:8", "const:4:8"]]
- 009d3ca4 ["CALL", null, ["ram:a355a8:8"]]
+ 009d4c50 ["INT_ADD", "register:40f0:8", ["const:9d4c50:8", "const:4:8"]]
+ 009d4c50 ["CALL", null, ["ram:a3659c:8"]]
- 009d3f14 ["INT_ADD", "register:40f0:8", ["const:9d3f14:8", "const:4:8"]]
- 009d3f14 ["CALL", null, ["callee:00a35260:8"]]
+ 009d4ec0 ["INT_ADD", "register:40f0:8", ["const:9d4ec0:8", "const:4:8"]]
+ 009d4ec0 ["CALL", null, ["callee:00a35260:8"]]
- 009d3f38 ["INT_ADD", "register:40f0:8", ["const:9d3f38:8", "const:4:8"]]
- 009d3f38 ["CALL", null, ["callee:00a36be0:8"]]
+ 009d4ee4 ["INT_ADD", "register:40f0:8", ["const:9d4ee4:8", "const:4:8"]]
+ 009d4ee4 ["CALL", null, ["callee:00a36be0:8"]]
~~~


<a id="compare-bb975472b8c3233ab4bdbe9fe1a2e2c4"></a>

### [`009d7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7bd0.md) → [`009d8b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8b7c.md) FUN_009d8b7c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) · 呼出先 28件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006755f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/006755f8.md) [`006d18a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d18a0.md) [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md)
- 新版 呼出元 1件 [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) · 呼出先 28件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`006759a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00675/006759a8.md) [`006d1c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d1/006d1c50.md) [`007566ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00756/007566ac.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 86.04% / 新版 86.04%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 8件, `call_target` 4件, `store_destination` 10件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009d8c5c",
      "incomplete_value": false,
      "site": "009d8c5c",
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
      "definition_site": "009d7cb0",
      "incomplete_value": false,
      "site": "009d7cb0",
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
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009d8c54",
      "incomplete_value": true,
      "site": "009d8c5c",
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
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d7ca8",
      "incomplete_value": true,
      "site": "009d7cb0",
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
                "const:a78:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "009d8c60",
      "incomplete_value": true,
      "site": "009d8c60",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d7cb4",
      "incomplete_value": true,
      "site": "009d7cb4",
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
            "const:a78:8"
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
      "009d8c54",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009d8c58",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "009d8c5c",
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
      "009d8c54",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009d8c58",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "009d8c5c",
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
- 009d7cb0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 009d7cb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 009d8c5c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 009d8c5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 009d7cb4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
- 009d7cb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 009d8c60 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 009d8c60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 009d7cc4 ["INT_ADD", "register:40f0:8", ["const:9d7cc4:8", "const:4:8"]]
- 009d7cc4 ["CALL", null, ["ram:7562fc:8"]]
+ 009d8c70 ["INT_ADD", "register:40f0:8", ["const:9d8c70:8", "const:4:8"]]
+ 009d8c70 ["CALL", null, ["ram:7566ac:8"]]
~~~


<a id="compare-7cd9c42dfdca7874bee677e1702d81f2"></a>

### [`009d803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d8/009d803c.md) → [`009d8fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8fe8.md) FUN_009d8fe8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`009d7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7bd0.md) · 呼出先 21件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`009d8b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8b7c.md) · 呼出先 21件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.54% / 新版 96.54%

優先判定に残った影響 `call_target` 2件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009d9048",
      "incomplete_value": false,
      "site": "009d9054",
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
      "definition_site": "009d809c",
      "incomplete_value": false,
      "site": "009d80a8",
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
      "definition_site": "009d905c",
      "incomplete_value": true,
      "site": "009d906c",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:1d5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d80b0",
      "incomplete_value": true,
      "site": "009d80c0",
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
                "const:2b3000:8"
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009d9070",
      "incomplete_value": true,
      "site": "009d9070",
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
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d80c4",
      "incomplete_value": true,
      "site": "009d80c4",
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
                "const:e:8"
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
      "009d9024",
      "DATA",
      [
        "storage",
        "0038daa8",
        null,
        "dword"
      ]
    ],
    [
      "009d9028",
      "DATA",
      [
        "storage",
        "0038dac8",
        "fde_0038dac8",
        "dword"
      ]
    ],
    [
      "009d902c",
      "DATA",
      [
        "storage",
        "0038dab0",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "009d9024",
      "DATA",
      [
        "storage",
        "0038daa8",
        null,
        "qword"
      ]
    ],
    [
      "009d9028",
      "DATA",
      [
        "storage",
        "0038dac8",
        null,
        "dword"
      ]
    ],
    [
      "009d902c",
      "DATA",
      [
        "storage",
        "0038dab0",
        "fde_0038dab0",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 009d80cc ["INT_ADD", "register:40f0:8", ["const:9d80cc:8", "const:4:8"]]
- 009d80cc ["CALL", null, ["ram:802be4:8"]]
+ 009d9078 ["INT_ADD", "register:40f0:8", ["const:9d9078:8", "const:4:8"]]
+ 009d9078 ["CALL", null, ["ram:803b48:8"]]
- 009d8448 ["INT_ADD", "register:40f0:8", ["const:9d8448:8", "const:4:8"]]
- 009d8448 ["CALL", null, ["ram:802be4:8"]]
+ 009d93f4 ["INT_ADD", "register:40f0:8", ["const:9d93f4:8", "const:4:8"]]
+ 009d93f4 ["CALL", null, ["ram:803b48:8"]]
- 009d8084 ["INT_ADD", "register:40f0:8", ["const:9d8084:8", "const:4:8"]]
- 009d8084 ["CALL", null, ["callee:00803674:8"]]
+ 009d9030 ["INT_ADD", "register:40f0:8", ["const:9d9030:8", "const:4:8"]]
+ 009d9030 ["CALL", null, ["callee:00803674:8"]]
~~~


<a id="compare-ce5940776e5060a2f6f44f9d81b40121"></a>

### [`009dc1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dc1a0.md) → [`009dd14c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009dd/009dd14c.md) FUN_009dd14c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 10件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 10件 [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md) [`00b1217c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b1217c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.97% / 新版 94.97%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009dd188",
      "incomplete_value": false,
      "site": "009dd190",
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
      "definition_site": "009dc1dc",
      "incomplete_value": false,
      "site": "009dc1e4",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009dd1b4",
      "incomplete_value": true,
      "site": "009dd1b4",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:f5c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dc208",
      "incomplete_value": true,
      "site": "009dc208",
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
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:e7e:8"
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
      "definition_site": "009dd294",
      "incomplete_value": true,
      "site": "009dd294",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:77d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dc2e8",
      "incomplete_value": true,
      "site": "009dc2e8",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:6b2:8"
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
      "009dd190",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009dd1a8",
      "READ",
      [
        "storage",
        "002bce7e",
        null,
        "string"
      ]
    ],
    [
      "009dd284",
      "READ",
      [
        "storage",
        "002a26b2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009dd190",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009dd1a8",
      "READ",
      [
        "storage",
        "002bcf5c",
        null,
        "string"
      ]
    ],
    [
      "009dd284",
      "READ",
      [
        "storage",
        "002a277d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dc1d4 ["INT_ADD", "register:40f0:8", ["const:9dc1d4:8", "const:4:8"]]
- 009dc1d4 ["CALL", null, ["callee:00488180:8"]]
+ 009dd180 ["INT_ADD", "register:40f0:8", ["const:9dd180:8", "const:4:8"]]
+ 009dd180 ["CALL", null, ["callee:00488180:8"]]
- 009dc1d8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009dd184 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009dc1dc ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009dc1dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009dc1dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009dc1dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009dd188 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009dd188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009dd188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009dd188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9f92b54ac9d4ab2fc5e65fca9714b982"></a>

### [`009dc744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dc744.md) → [`009dd6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009dd/009dd6f0.md) FUN_009dd6f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 14件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 14件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.80% / 新版 93.80%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009dd738",
      "incomplete_value": false,
      "site": "009dd740",
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
      "definition_site": "009dc78c",
      "incomplete_value": false,
      "site": "009dc794",
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
      "definition_site": "009dd764",
      "incomplete_value": true,
      "site": "009dd764",
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
                "const:b66:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dc7b8",
      "incomplete_value": true,
      "site": "009dc7b8",
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
                "const:a9b:8"
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
      "definition_site": "009dda08",
      "incomplete_value": true,
      "site": "009dda0c",
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
      "definition_site": "009dca5c",
      "incomplete_value": true,
      "site": "009dca60",
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
    "ordinal": 69,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009dd740",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009dd758",
      "READ",
      [
        "storage",
        "002a4a9b",
        null,
        "string"
      ]
    ],
    [
      "009dd7ec",
      "READ",
      [
        "storage",
        "002c4070",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009dd740",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009dd758",
      "READ",
      [
        "storage",
        "002a4b66",
        null,
        "string"
      ]
    ],
    [
      "009dd7ec",
      "READ",
      [
        "storage",
        "002c40c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dc784 ["INT_ADD", "register:40f0:8", ["const:9dc784:8", "const:4:8"]]
- 009dc784 ["CALL", null, ["callee:00488180:8"]]
+ 009dd730 ["INT_ADD", "register:40f0:8", ["const:9dd730:8", "const:4:8"]]
+ 009dd730 ["CALL", null, ["callee:00488180:8"]]
- 009dc788 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009dd734 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009dc78c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009dc78c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009dc78c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009dc78c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009dd738 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009dd738 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009dd738 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009dd738 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


