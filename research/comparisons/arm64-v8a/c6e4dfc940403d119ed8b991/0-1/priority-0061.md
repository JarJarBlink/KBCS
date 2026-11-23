# v16.0.1 → v16.0.2 · 最優先の変更候補 (61)

[一覧の目次](README.md)

<a id="compare-e568c075ca2c0f69612b99e37d038a7a"></a>

### [`009b7740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7740.md) → [`009b7794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7794.md) FUN_009b7794

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4900.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b7778",
      "incomplete_value": false,
      "site": "009b7780",
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
            "const:5c0:8"
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
      "009b77d4",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "009b788c",
      "READ",
      [
        "storage",
        "00c705d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b77d4",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "009b788c",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7770 ["INT_ADD", "register:40f0:8", ["const:9b7770:8", "const:4:8"]]
- 009b7770 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b77c4 ["INT_ADD", "register:40f0:8", ["const:9b77c4:8", "const:4:8"]]
+ 009b77c4 ["CALL", null, ["callee:00c57f60:8"]]
- 009b7778 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 009b7778 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7778 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7778 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b77cc ["COPY", "tmp:0:8", ["const:690:8"]]
+ 009b77cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b77cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b77cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b777c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-c1ce967a995f38ac5d1d9f636148f875"></a>

### [`009b78b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b78b8.md) → [`009b790c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b790c.md) FUN_009b790c

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
    "old": {
      "definition_site": "009b78c4",
      "incomplete_value": false,
      "site": "009b78d0",
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
      "009b7924",
      "DATA",
      [
        "storage",
        "00c89290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7924",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b78c4 ["COPY", "tmp:0:8", ["const:290:8"]]
- 009b78c4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b78c4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b78c4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b7918 ["COPY", "tmp:0:8", ["const:360:8"]]
+ 009b7918 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7918 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7918 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-8a4486192cb3e53620a21e25ab65e7d5"></a>

### [`009b78fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b78fc.md) → [`009b7950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7950.md) FUN_009b7950

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b7914",
      "incomplete_value": false,
      "site": "009b7920",
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
            "const:290:8"
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
      "009b7974",
      "DATA",
      [
        "storage",
        "00c89290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7974",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7914 ["COPY", "tmp:0:8", ["const:290:8"]]
- 009b7914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b7968 ["COPY", "tmp:0:8", ["const:360:8"]]
+ 009b7968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b7968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b7968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b7944 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7944 ["INT_ADD", "register:40f0:8", ["const:9b7944:8", "const:4:8"]]
- 009b7944 ["CALLIND", null, ["register:0:8"]]
+ 009b7998 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7998 ["INT_ADD", "register:40f0:8", ["const:9b7998:8", "const:4:8"]]
+ 009b7998 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6c9783c27eea38d89672a93909588c3d"></a>

### [`009b7958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7958.md) → [`009b79ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b79ac.md) FUN_009b79ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b7984",
      "incomplete_value": false,
      "site": "009b7984",
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
            "const:290:8"
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
      "009b79d8",
      "DATA",
      [
        "storage",
        "00c89290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b79d8",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b796c ["INT_ADD", "register:40f0:8", ["const:9b796c:8", "const:4:8"]]
- 009b796c ["CALL", null, ["callee:00c57f60:8"]]
+ 009b79c0 ["INT_ADD", "register:40f0:8", ["const:9b79c0:8", "const:4:8"]]
+ 009b79c0 ["CALL", null, ["callee:00c57f60:8"]]
- 009b797c ["COPY", "tmp:0:8", ["const:290:8"]]
- 009b797c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b797c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b797c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b79d0 ["COPY", "tmp:0:8", ["const:360:8"]]
+ 009b79d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b79d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b79d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b79a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b79a0 ["INT_ADD", "register:40f0:8", ["const:9b79a0:8", "const:4:8"]]
- 009b79a0 ["CALLIND", null, ["register:0:8"]]
+ 009b79f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b79f4 ["INT_ADD", "register:40f0:8", ["const:9b79f4:8", "const:4:8"]]
+ 009b79f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-80c04abfa9e47fdb6598da106c38889f"></a>

### [`009b79e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b79e0.md) → [`009b7a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7a34.md) FUN_009b7a34

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
    "old": {
      "definition_site": "009b79fc",
      "incomplete_value": false,
      "site": "009b79fc",
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
            "const:290:8"
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
      "009b7a50",
      "DATA",
      [
        "storage",
        "00c89290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7a50",
      "DATA",
      [
        "storage",
        "00c89360",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b79f8 ["COPY", "tmp:0:8", ["const:290:8"]]
- 009b79f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b79f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b79f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b7a4c ["COPY", "tmp:0:8", ["const:360:8"]]
+ 009b7a4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b7a4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b7a4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b7a1c ["COPY", "register:0:8", ["register:4048:8"]]
- 009b7a1c ["INT_ADD", "register:40f0:8", ["const:9b7a1c:8", "const:4:8"]]
- 009b7a1c ["CALLIND", null, ["register:0:8"]]
+ 009b7a70 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b7a70 ["INT_ADD", "register:40f0:8", ["const:9b7a70:8", "const:4:8"]]
+ 009b7a70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f5b4645bfedc8b44e150278c6fd9b8f6"></a>

### [`009b7adc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7adc.md) → [`009b7b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7b30.md) FUN_009b7b30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b7ae4",
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
      "009b7b38",
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
- 009b7ae4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
- 009b7ae4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b7b14 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7b14 ["INT_ADD", "register:40f0:8", ["const:9b7b14:8", "const:4:8"]]
- 009b7b14 ["CALLIND", null, ["register:0:8"]]
+ 009b7b68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7b68 ["INT_ADD", "register:40f0:8", ["const:9b7b68:8", "const:4:8"]]
+ 009b7b68 ["CALLIND", null, ["register:0:8"]]
+ 009b7b38 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
+ 009b7b38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-7e6d5692a974c80c9dd5d3019b30f43d"></a>

### [`009b7b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7b78.md) → [`009b7bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7bcc.md) FUN_009b7bcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b7b90",
      "DATA",
      [
        "storage",
        "00c89310",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7be4",
      "DATA",
      [
        "storage",
        "00c893e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7b78 ["COPY", "register:4040:8", ["register:4000:8"]]
- 009b7b7c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:30:8"]]
- 009b7b7c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 009b7b80 ["COPY", "register:4050:8", ["const:c89000:8"]]
~~~


<a id="compare-5e6d0cb6db877f2ed450756d639cc86e"></a>

### [`009b7bbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7bbc.md) → [`009b7c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7c10.md) FUN_009b7c10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009b7c34",
      "DATA",
      [
        "storage",
        "00c89310",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b7c04",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b7c34",
      "DATA",
      [
        "storage",
        "00c893e0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b7c58",
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
- 009b7bd4 ["COPY", "tmp:0:8", ["const:310:8"]]
- 009b7bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b7bd8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 009b7bd8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009b7bd8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009b7bd8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009b7bdc ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 009b7bdc ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 009b7bdc ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 009b7bdc ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-a67854b0f9213044cedb5fdb3440f490"></a>

### [`009b7c18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7c18.md) → [`009b7c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7c6c.md) FUN_009b7c6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b7c44",
      "DATA",
      [
        "storage",
        "00c89310",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b7c48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b7cb8"
      ]
    ]
  ],
  "added": [
    [
      "009b7c98",
      "DATA",
      [
        "storage",
        "00c893e0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b7c9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b7cb8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7c2c ["INT_ADD", "register:40f0:8", ["const:9b7c2c:8", "const:4:8"]]
- 009b7c2c ["CALL", null, ["callee:00c57f60:8"]]
+ 009b7c80 ["INT_ADD", "register:40f0:8", ["const:9b7c80:8", "const:4:8"]]
+ 009b7c80 ["CALL", null, ["callee:00c57f60:8"]]
- 009b7c3c ["COPY", "tmp:0:8", ["const:310:8"]]
- 009b7c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b7c40 ["COPY", "register:4008:8", ["register:4098:8"]]
~~~


<a id="compare-fff561b441b904793e0f7ae3ef147052"></a>

### [`009b7ca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7ca0.md) → [`009b7cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7cf4.md) FUN_009b7cf4

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
    "old": {
      "definition_site": "009b7cbc",
      "incomplete_value": false,
      "site": "009b7cbc",
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
            "const:310:8"
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
      "009b7d10",
      "DATA",
      [
        "storage",
        "00c89310",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7d10",
      "DATA",
      [
        "storage",
        "00c893e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7cb8 ["COPY", "tmp:0:8", ["const:310:8"]]
- 009b7cb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b7cb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b7cb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b7d0c ["COPY", "tmp:0:8", ["const:3e0:8"]]
+ 009b7d0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b7d0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b7d0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b7cdc ["COPY", "register:0:8", ["register:4048:8"]]
- 009b7cdc ["INT_ADD", "register:40f0:8", ["const:9b7cdc:8", "const:4:8"]]
- 009b7cdc ["CALLIND", null, ["register:0:8"]]
+ 009b7d30 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b7d30 ["INT_ADD", "register:40f0:8", ["const:9b7d30:8", "const:4:8"]]
+ 009b7d30 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d2cb783ee6f4847c5783ba28aa4b8b46"></a>

### [`009b7de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7de4.md) → [`009b7e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7e38.md) FUN_009b7e38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009b4164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4164.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b7e1c",
      "incomplete_value": false,
      "site": "009b7e24",
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
            "const:5c0:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009b7e7c"
      ],
      [
        "FALL_THROUGH",
        "009b7ed0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b7ed0",
      "incomplete_value": true,
      "site": "009b7ef0",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_ADD",
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
      "definition_site": "009b7e7c",
      "incomplete_value": true,
      "site": "009b7e9c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_ADD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009b7e7c"
      ],
      [
        "FALL_THROUGH",
        "009b7ed0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b7ed0",
      "incomplete_value": true,
      "site": "009b7ef0",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_ADD",
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
      "definition_site": "009b7e7c",
      "incomplete_value": true,
      "site": "009b7e9c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_ADD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009b7e78",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:009b7e7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b7f40"
      ]
    ],
    [
      "009b7f30",
      "READ",
      [
        "storage",
        "00c705d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7e78",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "009b7ed0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b7f40"
      ]
    ],
    [
      "009b7f30",
      "READ",
      [
        "storage",
        "00c706a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7e78 ["COPY", "tmp:0:8", ["const:1:8"]]
- 009b7e78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7e78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7e78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b7e14 ["INT_ADD", "register:40f0:8", ["const:9b7e14:8", "const:4:8"]]
- 009b7e14 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b7e68 ["INT_ADD", "register:40f0:8", ["const:9b7e68:8", "const:4:8"]]
+ 009b7e68 ["CALL", null, ["callee:00c57f60:8"]]
- 009b7e1c ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 009b7e1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7e1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7e1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b7e70 ["COPY", "tmp:0:8", ["const:690:8"]]
+ 009b7e70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b7e70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b7e70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f9786b5ff96dc9884c85a79c410a1554"></a>

### [`009b7f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7f5c.md) → [`009b7fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7fb0.md) FUN_009b7fb0

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
    "old": {
      "definition_site": "009b7f68",
      "incomplete_value": false,
      "site": "009b7f74",
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
            "const:390:8"
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
      "009b7fc8",
      "DATA",
      [
        "storage",
        "00c89390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b7fc8",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b7f68 ["COPY", "tmp:0:8", ["const:390:8"]]
- 009b7f68 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b7f68 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b7f68 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b7fbc ["COPY", "tmp:0:8", ["const:460:8"]]
+ 009b7fbc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7fbc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b7fbc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-d13bc3827fd4b73188e6fe6c87125cd6"></a>

### [`009b7fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7fa0.md) → [`009b7ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7ff4.md) FUN_009b7ff4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b7fb8",
      "incomplete_value": false,
      "site": "009b7fc4",
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
            "const:390:8"
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
      "009b8018",
      "DATA",
      [
        "storage",
        "00c89390",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b7fe8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009b8018",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ],
    [
      "009b803c",
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
- 009b7fb8 ["COPY", "tmp:0:8", ["const:390:8"]]
- 009b7fb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b7fb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b7fb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b800c ["COPY", "tmp:0:8", ["const:460:8"]]
+ 009b800c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b800c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b800c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b7fcc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009b7fcc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009b8020 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009b8020 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 009b7fe4 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009b7fe4 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 009b7fe4 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 009b7fe4 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
~~~


<a id="compare-c73fe2662e6537ee0aee997e45e34c7d"></a>

### [`009b7ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7ffc.md) → [`009b8050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8050.md) FUN_009b8050

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b8028",
      "incomplete_value": false,
      "site": "009b8028",
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
            "const:390:8"
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
      "009b807c",
      "DATA",
      [
        "storage",
        "00c89390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b807c",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8010 ["INT_ADD", "register:40f0:8", ["const:9b8010:8", "const:4:8"]]
- 009b8010 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b8064 ["INT_ADD", "register:40f0:8", ["const:9b8064:8", "const:4:8"]]
+ 009b8064 ["CALL", null, ["callee:00c57f60:8"]]
- 009b8020 ["COPY", "tmp:0:8", ["const:390:8"]]
- 009b8020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b8020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b8020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b8074 ["COPY", "tmp:0:8", ["const:460:8"]]
+ 009b8074 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8074 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b8074 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b8044 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b8044 ["INT_ADD", "register:40f0:8", ["const:9b8044:8", "const:4:8"]]
- 009b8044 ["CALLIND", null, ["register:0:8"]]
+ 009b8098 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8098 ["INT_ADD", "register:40f0:8", ["const:9b8098:8", "const:4:8"]]
+ 009b8098 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dcd7d76674444725e3fc0ee0b0003d05"></a>

### [`009b8084`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8084.md) → [`009b80d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b80d8.md) FUN_009b80d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b80a0",
      "incomplete_value": false,
      "site": "009b80a0",
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
            "const:390:8"
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
        "009b80b0"
      ],
      [
        "FALL_THROUGH",
        "009b8104"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b8100",
      "incomplete_value": true,
      "site": "009b8118",
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "009b80c4",
      "value": [
        "live",
        "register:101:1"
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
        "009b80b0"
      ],
      [
        "CONDITIONAL_JUMP",
        "009b8104"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009b8100",
      "incomplete_value": true,
      "site": "009b8130",
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "009b80dc",
      "value": [
        "live",
        "register:101:1"
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
      "009b80f4",
      "DATA",
      [
        "storage",
        "00c89390",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009b80b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b8130"
      ]
    ]
  ],
  "added": [
    [
      "009b80f4",
      "DATA",
      [
        "storage",
        "00c89460",
        null,
        "undefined *"
      ]
    ],
    [
      "009b8104",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009b8130"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b809c ["COPY", "tmp:0:8", ["const:390:8"]]
- 009b809c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b809c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b809c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b80f0 ["COPY", "tmp:0:8", ["const:460:8"]]
+ 009b80f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b80f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b80f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b80a4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 009b80a4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 009b80f8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 009b80f8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 009b80a8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 009b80a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009b80a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009b80a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-65d1fdd344f99219832b691edd7a068c"></a>

### [`009b8130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8130.md) → [`009b8184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8184.md) FUN_009b8184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4164.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009b8134",
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
      "009b8188",
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
- 009b8134 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009b8134 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009b816c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b816c ["INT_ADD", "register:40f0:8", ["const:9b816c:8", "const:4:8"]]
- 009b816c ["CALLIND", null, ["register:0:8"]]
+ 009b81c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b81c0 ["INT_ADD", "register:40f0:8", ["const:9b81c0:8", "const:4:8"]]
+ 009b81c0 ["CALLIND", null, ["register:0:8"]]
+ 009b8188 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
+ 009b8188 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-ba7129f89b0bebafa72e103cd5ca229d"></a>

### [`009b821c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b821c.md) → [`009b8270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8270.md) FUN_009b8270

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
    "old": {
      "definition_site": "009b8228",
      "incomplete_value": false,
      "site": "009b8234",
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
            "const:410:8"
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
      "009b8288",
      "DATA",
      [
        "storage",
        "00c89410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b8288",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8228 ["COPY", "tmp:0:8", ["const:410:8"]]
- 009b8228 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009b8228 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009b8228 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009b827c ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 009b827c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009b827c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009b827c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-c62e2b4ec9633382f1c6683a2747df92"></a>

### [`009b8260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8260.md) → [`009b82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b82b4.md) FUN_009b82b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b8278",
      "incomplete_value": false,
      "site": "009b8284",
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
            "const:410:8"
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
      "009b82d8",
      "DATA",
      [
        "storage",
        "00c89410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b82d8",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8278 ["COPY", "tmp:0:8", ["const:410:8"]]
- 009b8278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b8278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b8278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009b82cc ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 009b82cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009b82cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009b82cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b82a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b82a8 ["INT_ADD", "register:40f0:8", ["const:9b82a8:8", "const:4:8"]]
- 009b82a8 ["CALLIND", null, ["register:0:8"]]
+ 009b82fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b82fc ["INT_ADD", "register:40f0:8", ["const:9b82fc:8", "const:4:8"]]
+ 009b82fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-923fdd14a9328d3a0f0a9776af89e583"></a>

### [`009b82bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b82bc.md) → [`009b8310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8310.md) FUN_009b8310

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b82e8",
      "incomplete_value": false,
      "site": "009b82e8",
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
            "const:410:8"
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
      "009b833c",
      "DATA",
      [
        "storage",
        "00c89410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b833c",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b82d0 ["INT_ADD", "register:40f0:8", ["const:9b82d0:8", "const:4:8"]]
- 009b82d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b8324 ["INT_ADD", "register:40f0:8", ["const:9b8324:8", "const:4:8"]]
+ 009b8324 ["CALL", null, ["callee:00c57f60:8"]]
- 009b82e0 ["COPY", "tmp:0:8", ["const:410:8"]]
- 009b82e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009b82e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009b82e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009b8304 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b8304 ["INT_ADD", "register:40f0:8", ["const:9b8304:8", "const:4:8"]]
- 009b8304 ["CALLIND", null, ["register:0:8"]]
+ 009b8358 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8358 ["INT_ADD", "register:40f0:8", ["const:9b8358:8", "const:4:8"]]
+ 009b8358 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9f848ec07667ad07dd7ffd338bfef805"></a>

### [`009b8344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8344.md) → [`009b8398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8398.md) FUN_009b8398

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
    "old": {
      "definition_site": "009b8360",
      "incomplete_value": false,
      "site": "009b8360",
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
            "const:410:8"
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
      "009b83b4",
      "DATA",
      [
        "storage",
        "00c89410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b83b4",
      "DATA",
      [
        "storage",
        "00c894e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b835c ["COPY", "tmp:0:8", ["const:410:8"]]
- 009b835c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009b835c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009b835c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009b83b0 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 009b83b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009b83b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009b83b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009b8380 ["COPY", "register:0:8", ["register:4048:8"]]
- 009b8380 ["INT_ADD", "register:40f0:8", ["const:9b8380:8", "const:4:8"]]
- 009b8380 ["CALLIND", null, ["register:0:8"]]
+ 009b83d4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009b83d4 ["INT_ADD", "register:40f0:8", ["const:9b83d4:8", "const:4:8"]]
+ 009b83d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e64d8136e4221103e647608359cc5860"></a>

### [`009b8488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8488.md) → [`009b84dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b84dc.md) _INIT_197

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b84c4",
      "incomplete_value": true,
      "site": "009b84e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f26:8"
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
    "old": {
      "definition_site": "009b84e8",
      "incomplete_value": true,
      "site": "009b8504",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f39:8"
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
    "old": {
      "definition_site": "009b8508",
      "incomplete_value": true,
      "site": "009b8524",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dc2:8"
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
      "009b8518",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009b853c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009b855c",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009b8518",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009b853c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009b855c",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b86bc ["INT_ADD", "register:40f0:8", ["const:9b86bc:8", "const:4:8"]]
- 009b86bc ["CALL", null, ["callee:00c57f00:8"]]
+ 009b8710 ["INT_ADD", "register:40f0:8", ["const:9b8710:8", "const:4:8"]]
+ 009b8710 ["CALL", null, ["callee:00c57f00:8"]]
- 009b84b4 ["COPY", "tmp:0:8", ["const:c08:8"]]
- 009b84b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009b84b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009b84b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009b8508 ["COPY", "tmp:0:8", ["const:d08:8"]]
+ 009b8508 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009b8508 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009b8508 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009b84bc ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-4570cc17553be529c1cb947f3f89c664"></a>

### [`009b88d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b88d8.md) → [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) FUN_009b892c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 13件 [`0093559c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00935/0093559c.md) [`00935e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00935/00935e3c.md) [`009adb68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009adb68.md) [`009b8b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8b50.md) [`009b91ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b91ec.md)
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 13件 [`009355f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/009355f0.md) [`00935e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935e90.md) [`009adbbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbbc.md) [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) [`009b9240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9240.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 97.66% / 新版 97.66%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b8a38",
      "incomplete_value": false,
      "site": "009b8a38",
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
            "const:490:8"
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
      "unmatched:009b89c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0093559c"
      ]
    ],
    [
      "009b8a8c",
      "DATA",
      [
        "storage",
        "00c89490",
        null,
        "undefined *"
      ]
    ],
    [
      "009b8ac4",
      "READ",
      [
        "storage",
        "00c894b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009b8a18",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009355f0"
      ]
    ],
    [
      "009b8a8c",
      "DATA",
      [
        "storage",
        "00c89560",
        null,
        "undefined *"
      ]
    ],
    [
      "009b8ac4",
      "READ",
      [
        "storage",
        "00c89580",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b8a8c ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009b8a8c ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 009b8ae0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009b8ae0 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
- 009b8914 ["INT_ADD", "register:40f0:8", ["const:9b8914:8", "const:4:8"]]
- 009b8914 ["CALL", null, ["callee:009b8ba4:8"]]
+ 009b8968 ["INT_ADD", "register:40f0:8", ["const:9b8968:8", "const:4:8"]]
+ 009b8968 ["CALL", null, ["callee:009b8ba4:8"]]
- 009b892c ["INT_ADD", "register:40f0:8", ["const:9b892c:8", "const:4:8"]]
- 009b892c ["CALL", null, ["callee:009b9240:8"]]
+ 009b8980 ["INT_ADD", "register:40f0:8", ["const:9b8980:8", "const:4:8"]]
+ 009b8980 ["CALL", null, ["callee:009b9240:8"]]
~~~


<a id="compare-2c697a651f02ec2b9d8c5de1d5041e8e"></a>

### [`009b8b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8b50.md) → [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) FUN_009b8ba4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009b88d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b88d8.md) · 呼出先 20件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0047c968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047c968.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 1件 [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) · 呼出先 20件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.57% / 新版 86.57%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009b8b98",
      "incomplete_value": false,
      "site": "009b8bb4",
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
            "const:f00:8"
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
    "old": {
      "definition_site": "009b8ba0",
      "incomplete_value": false,
      "site": "009b8bb4",
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
            "const:c40:8"
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
    "old": {
      "definition_site": "009b8ba8",
      "incomplete_value": false,
      "site": "009b8bb4",
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
            "const:c60:8"
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
      "unmatched:009b8b54",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b8b58",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009b8b5c",
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
      "009b8ba8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "009b8bac",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009b8bb0",
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
- 009b8bb4 ["INT_ADD", "register:40f0:8", ["const:9b8bb4:8", "const:4:8"]]
- 009b8bb4 ["CALL", null, ["callee:0047e64c:8"]]
+ 009b8c08 ["INT_ADD", "register:40f0:8", ["const:9b8c08:8", "const:4:8"]]
+ 009b8c08 ["CALL", null, ["callee:0047e64c:8"]]
- 009b8c08 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009b8c08 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 009b8c5c ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009b8c5c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 009b8cb0 ["INT_ADD", "register:40f0:8", ["const:9b8cb0:8", "const:4:8"]]
- 009b8cb0 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b8d04 ["INT_ADD", "register:40f0:8", ["const:9b8d04:8", "const:4:8"]]
+ 009b8d04 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6306b9675dcf121ceeda23430dbcbaf0"></a>

### [`009b91ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b91ec.md) → [`009b9240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9240.md) FUN_009b9240

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b88d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b88d8.md) · 呼出先 12件 [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`008b6f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f40.md) [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md) [`009ba374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba374.md)
- 新版 呼出元 1件 [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) · 呼出先 12件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) [`009ba3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3c8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009b93a0",
      "incomplete_value": false,
      "site": "009b93a4",
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
                "const:7a0:8"
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
      "009b9340",
      "DATA",
      [
        "storage",
        "00c89510",
        null,
        "undefined *"
      ]
    ],
    [
      "009b939c",
      "READ",
      [
        "storage",
        "00c89530",
        null,
        "pointer"
      ]
    ],
    [
      "009b939c",
      "READ",
      [
        "storage",
        "00c89538",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009b9340",
      "DATA",
      [
        "storage",
        "00c895e0",
        null,
        "undefined *"
      ]
    ],
    [
      "009b939c",
      "READ",
      [
        "storage",
        "00c89600",
        null,
        "pointer"
      ]
    ],
    [
      "009b939c",
      "READ",
      [
        "storage",
        "00c89608",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009b923c ["INT_ADD", "register:40f0:8", ["const:9b923c:8", "const:4:8"]]
- 009b923c ["CALL", null, ["callee:00489f8c:8"]]
+ 009b9290 ["INT_ADD", "register:40f0:8", ["const:9b9290:8", "const:4:8"]]
+ 009b9290 ["CALL", null, ["callee:00489f8c:8"]]
- 009b9250 ["INT_ADD", "register:40f0:8", ["const:9b9250:8", "const:4:8"]]
- 009b9250 ["CALL", null, ["callee:00489f8c:8"]]
+ 009b92a4 ["INT_ADD", "register:40f0:8", ["const:9b92a4:8", "const:4:8"]]
+ 009b92a4 ["CALL", null, ["callee:00489f8c:8"]]
- 009b92a0 ["INT_ADD", "register:40f0:8", ["const:9b92a0:8", "const:4:8"]]
- 009b92a0 ["CALL", null, ["callee:00a46950:8"]]
+ 009b92f4 ["INT_ADD", "register:40f0:8", ["const:9b92f4:8", "const:4:8"]]
+ 009b92f4 ["CALL", null, ["callee:00a46950:8"]]
~~~


<a id="compare-8ca24b7aa8af5948aa2b76344b7d619c"></a>

### [`009ba078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba078.md) → [`009ba0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba0cc.md) FUN_009ba0cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009ba09c",
      "incomplete_value": false,
      "site": "009ba09c",
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
            "const:490:8"
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
      "009ba0f0",
      "DATA",
      [
        "storage",
        "00c89490",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ba0f0",
      "DATA",
      [
        "storage",
        "00c89560",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba08c ["INT_ADD", "register:40f0:8", ["const:9ba08c:8", "const:4:8"]]
- 009ba08c ["CALL", null, ["callee:00c57f60:8"]]
+ 009ba0e0 ["INT_ADD", "register:40f0:8", ["const:9ba0e0:8", "const:4:8"]]
+ 009ba0e0 ["CALL", null, ["callee:00c57f60:8"]]
- 009ba098 ["COPY", "tmp:0:8", ["const:490:8"]]
- 009ba098 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ba098 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ba098 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ba0ec ["COPY", "tmp:0:8", ["const:560:8"]]
+ 009ba0ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ba0ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ba0ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-84d3a706d97a3ac3848181f82941c613"></a>

### [`009ba0ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba0ac.md) → [`009ba100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba100.md) FUN_009ba100

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
    "old": {
      "definition_site": "009ba0b8",
      "incomplete_value": false,
      "site": "009ba0b8",
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
            "const:490:8"
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
      "009ba10c",
      "DATA",
      [
        "storage",
        "00c89490",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ba10c",
      "DATA",
      [
        "storage",
        "00c89560",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba0b4 ["COPY", "tmp:0:8", ["const:490:8"]]
- 009ba0b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009ba0b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009ba0b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009ba108 ["COPY", "tmp:0:8", ["const:560:8"]]
+ 009ba108 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009ba108 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009ba108 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3cf77f039541d481cdfe509eae1e857c"></a>

### [`009ba0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba0c8.md) → [`009ba11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba11c.md) FUN_009ba11c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`009ad980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad980.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ba110",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ba18c"
      ]
    ],
    [
      "unmatched:009ba120",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009ba164",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ba18c"
      ]
    ],
    [
      "009ba174",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba0f8 ["INT_ADD", "register:40f0:8", ["const:9ba0f8:8", "const:4:8"]]
- 009ba0f8 ["CALL", null, ["callee:009ad9d4:8"]]
+ 009ba14c ["INT_ADD", "register:40f0:8", ["const:9ba14c:8", "const:4:8"]]
+ 009ba14c ["CALL", null, ["callee:009ad9d4:8"]]
- 009ba100 ["INT_RIGHT", "tmp:0:4", ["register:40a8:4", "const:1f:4"]]
- 009ba100 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 009ba100 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 009ba100 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 009ba154 ["INT_RIGHT", "tmp:0:4", ["register:40a8:4", "const:1f:4"]]
+ 009ba154 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009ba154 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009ba154 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 009ba110 ["CBRANCH", null, ["local:b8:8", "register:102:1"]]
~~~


<a id="compare-97a2cb9148903b1191891e76323ebf0a"></a>

### [`009ba1c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba1c4.md) → [`009ba218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba218.md) FUN_009ba218

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`009b8b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8b50.md) [`00a9fa24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9fa24.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0063674c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00636/0063674c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) [`00a9fa94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9fa94.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009ba22c",
      "incomplete_value": true,
      "site": "009ba230",
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
            "const:4:8"
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
      "definition_site": "009ba344",
      "incomplete_value": true,
      "site": "009ba348",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:009ba1c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ba1c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ba1f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ba368"
      ]
    ]
  ],
  "added": [
    [
      "009ba218",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009ba21c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009ba248",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ba368"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba230 ["INT_ADD", "register:40f0:8", ["const:9ba230:8", "const:4:8"]]
- 009ba230 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ba284 ["INT_ADD", "register:40f0:8", ["const:9ba284:8", "const:4:8"]]
+ 009ba284 ["CALL", null, ["callee:00c57f60:8"]]
- 009ba2f4 ["INT_ADD", "register:40f0:8", ["const:9ba2f4:8", "const:4:8"]]
- 009ba2f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009ba348 ["INT_ADD", "register:40f0:8", ["const:9ba348:8", "const:4:8"]]
+ 009ba348 ["CALL", null, ["callee:00c57f80:8"]]
- 009ba1c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009ba1c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009ba1c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 009ba1c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-eb884dcf5941751f23cb1791107a9664"></a>

### [`009ba324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba324.md) → [`009ba378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba378.md) FUN_009ba378

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009ba344",
      "incomplete_value": false,
      "site": "009ba348",
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
            "const:510:8"
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
      "009ba39c",
      "DATA",
      [
        "storage",
        "00c89510",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ba39c",
      "DATA",
      [
        "storage",
        "00c895e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba338 ["INT_ADD", "register:40f0:8", ["const:9ba338:8", "const:4:8"]]
- 009ba338 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ba38c ["INT_ADD", "register:40f0:8", ["const:9ba38c:8", "const:4:8"]]
+ 009ba38c ["CALL", null, ["callee:00c57f60:8"]]
- 009ba344 ["COPY", "tmp:0:8", ["const:510:8"]]
- 009ba344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ba344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ba344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ba398 ["COPY", "tmp:0:8", ["const:5e0:8"]]
+ 009ba398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ba398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ba398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-772389b34537fa376d94898fe916534b"></a>

### [`009ba35c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba35c.md) → [`009ba3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3b0.md) FUN_009ba3b0

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
    "old": {
      "definition_site": "009ba360",
      "incomplete_value": false,
      "site": "009ba364",
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
            "const:510:8"
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
      "009ba3b8",
      "DATA",
      [
        "storage",
        "00c89510",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ba3b8",
      "DATA",
      [
        "storage",
        "00c895e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba360 ["COPY", "tmp:0:8", ["const:510:8"]]
- 009ba360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ba360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ba360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ba3b4 ["COPY", "tmp:0:8", ["const:5e0:8"]]
+ 009ba3b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ba3b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ba3b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-94f3a92a29a18fc3b20d53310e149a2e"></a>

### [`009ba37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba37c.md) → [`009ba3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3d0.md) FUN_009ba3d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`009b948c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b948c.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009b94e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b94e0.md)

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
      "site": "009ba3f0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ba39c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "009ba3fc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ba3a8",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "009ba3f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009ba3fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009ba3f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009ba3fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba39c ["INT_ADD", "register:40f0:8", ["const:9ba39c:8", "const:4:8"]]
- 009ba39c ["CALL", null, ["ram:47acf4:8"]]
+ 009ba3f0 ["INT_ADD", "register:40f0:8", ["const:9ba3f0:8", "const:4:8"]]
+ 009ba3f0 ["CALL", null, ["ram:47ad34:8"]]
- 009ba3a8 ["INT_ADD", "register:40f0:8", ["const:9ba3a8:8", "const:4:8"]]
- 009ba3a8 ["CALL", null, ["ram:47acf4:8"]]
+ 009ba3fc ["INT_ADD", "register:40f0:8", ["const:9ba3fc:8", "const:4:8"]]
+ 009ba3fc ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-8d1eeddb427a83768926b065ee8585e2"></a>

### [`009ba8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba8a0.md) → [`009ba8f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba8f4.md) FUN_009ba8f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009bad00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009bad00.md) · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 1件 [`009bad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009bad54.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 branch_condition_or_target, control_flow, control_flow_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.74% / 新版 95.74%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ba904",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bb60"
      ]
    ]
  ],
  "added": [
    [
      "009ba9ac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bb60"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ba8b8 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 009ba90c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 009ba8c0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009ba8c0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 009ba914 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009ba914 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 009ba8ec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009ba8ec ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 009ba940 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009ba940 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-98f02eafc6cfcefabf44afb0490ced82"></a>

### [`009ba95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba95c.md) → [`009ba9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba9b0.md) FUN_009ba9b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009bd080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bd080.md) · 呼出先 17件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00454d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00454/00454d28.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md)
- 新版 呼出元 1件 [`009bd0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd0d4.md) · 呼出先 17件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00454d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/00454d68.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.98% / 新版 78.98%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009baa60",
      "incomplete_value": false,
      "site": "009baa68",
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
    "ordinal": 4,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009baae0",
      "incomplete_value": false,
      "site": "009baae4",
      "value": [
        "leaf",
        "const:4:8"
      ]
    },
    "ordinal": 6,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009bac24",
      "incomplete_value": true,
      "site": "009bac28",
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
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 19,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009baa10",
      "WRITE",
      [
        "storage",
        "Stack[-0x108]",
        null,
        null
      ]
    ],
    [
      "unmatched:009baa14",
      "READ",
      [
        "storage",
        "002c12fa",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009baa28",
      "WRITE",
      [
        "storage",
        "Stack[-0x107]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009baa64",
      "WRITE",
      [
        "storage",
        "Stack[-0x108]",
        null,
        null
      ]
    ],
    [
      "009baa68",
      "READ",
      [
        "storage",
        "002c133a",
        null,
        "string"
      ]
    ],
    [
      "009baa7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x107]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009baa68 ["INT_ADD", "register:40f0:8", ["const:9baa68:8", "const:4:8"]]
- 009baa68 ["CALL", null, ["callee:008ba8c0:8"]]
+ 009baabc ["INT_ADD", "register:40f0:8", ["const:9baabc:8", "const:4:8"]]
+ 009baabc ["CALL", null, ["callee:008ba8c0:8"]]
+ 009baa68 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 009baa68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 009baae4 ["INT_ADD", "register:40f0:8", ["const:9baae4:8", "const:4:8"]]
- 009baae4 ["CALL", null, ["callee:008bad20:8"]]
+ 009bab38 ["INT_ADD", "register:40f0:8", ["const:9bab38:8", "const:4:8"]]
+ 009bab38 ["CALL", null, ["callee:008bad20:8"]]
~~~


<a id="compare-6f067010e4793facc2152528071cce31"></a>

### [`009bad00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009bad00.md) → [`009bad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009bad54.md) FUN_009bad54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009bdb38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdb38.md) · 呼出先 24件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046e538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e538.md) [`0047c968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047c968.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 1件 [`009bdb8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdb8c.md) · 呼出先 24件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.01% / 新版 62.01%

優先判定に残った影響 `call_argument_candidate` 37件, `call_target` 1件, `unresolved_branch_alignment` 33件, `unresolved_call_alignment` 89件, `unresolved_store_alignment` 69件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009bae24",
      "incomplete_value": true,
      "site": "009bae30",
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
            "const:48:8"
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
      "definition_site": "009bae2c",
      "incomplete_value": true,
      "site": "009bae30",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a0:4"
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
      "definition_site": "009bae28",
      "incomplete_value": true,
      "site": "009bae30",
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
      "unmatched:009bad60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009baf2c"
      ]
    ],
    [
      "unmatched:009bad6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bb164"
      ]
    ],
    [
      "unmatched:009bad70",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "009badb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009baf2c"
      ]
    ],
    [
      "009badc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bb164"
      ]
    ],
    [
      "009badc4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 009baddc ["INT_ADD", "register:40f0:8", ["const:9baddc:8", "const:4:8"]]
- 009baddc ["CALL", null, ["callee:0047c9a8:8"]]
+ 009bae30 ["INT_ADD", "register:40f0:8", ["const:9bae30:8", "const:4:8"]]
+ 009bae30 ["CALL", null, ["callee:0047c9a8:8"]]
- 009bae30 ["INT_ADD", "register:40f0:8", ["const:9bae30:8", "const:4:8"]]
- 009bae30 ["CALL", null, ["callee:00492e48:8"]]
+ 009bae84 ["INT_ADD", "register:40f0:8", ["const:9bae84:8", "const:4:8"]]
+ 009bae84 ["CALL", null, ["callee:00492e48:8"]]
- 009bb050 ["INT_ADD", "register:40f0:8", ["const:9bb050:8", "const:4:8"]]
- 009bb050 ["CALL", null, ["callee:00492e48:8"]]
+ 009bb0a4 ["INT_ADD", "register:40f0:8", ["const:9bb0a4:8", "const:4:8"]]
+ 009bb0a4 ["CALL", null, ["callee:00492e48:8"]]
~~~


<a id="compare-2f2ca9050bc6b0cc183773ddac1efc4b"></a>

### [`009bce80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bc/009bce80.md) → [`009bced4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bced4.md) FUN_009bced4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009c058c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c058c.md) · 呼出先 7件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006c0dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0dd4.md) [`006c0f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f10.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009bf214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf214.md)
- 新版 呼出元 1件 [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) · 呼出先 7件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0e2c.md) [`006c0f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f68.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009bf268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf268.md)

変更の種類 branch_value, call_argument_candidate, constant, local_def_use, operands_and_dependencies

命令の説明率　旧版 95.31% / 新版 95.31%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "009bceac",
      "incomplete_value": true,
      "site": "009bceac",
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
    "old": {
      "definition_site": "009bceb4",
      "incomplete_value": false,
      "site": "009bcec8",
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
            "const:e58:8"
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
    "old": {
      "definition_site": "009bcebc",
      "incomplete_value": false,
      "site": "009bcec8",
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
            "const:680:8"
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
      "009bcef8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009bcf08",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bcf10",
      "PARAM",
      [
        "storage",
        "00c89680",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009bcef8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009bcf08",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bcf10",
      "PARAM",
      [
        "storage",
        "00c89750",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bcec8 ["INT_ADD", "register:40f0:8", ["const:9bcec8:8", "const:4:8"]]
- 009bcec8 ["CALL", null, ["callee:00c586e0:8"]]
+ 009bcf1c ["INT_ADD", "register:40f0:8", ["const:9bcf1c:8", "const:4:8"]]
+ 009bcf1c ["CALL", null, ["callee:00c586e0:8"]]
- 009bd060 ["INT_ADD", "register:40f0:8", ["const:9bd060:8", "const:4:8"]]
- 009bd060 ["CALL", null, ["callee:006c0e2c:8"]]
+ 009bd0b4 ["INT_ADD", "register:40f0:8", ["const:9bd0b4:8", "const:4:8"]]
+ 009bd0b4 ["CALL", null, ["callee:006c0e2c:8"]]
- 009bcea4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 009bcea4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009bcef8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 009bcef8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-81c756abc8b6166ba4c3528a37b23603"></a>

### [`009bd080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bd080.md) → [`009bd0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd0d4.md) FUN_009bd0d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009be07c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be07c.md) · 呼出先 8件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006c0f38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f38.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`007683d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007683d8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`009be0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be0d0.md) · 呼出先 8件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f90.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00768430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768430.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.91% / 新版 89.91%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bd1bc",
      "value": [
        "leaf",
        "ram:6c0f90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bd168",
      "value": [
        "leaf",
        "ram:6c0f38:8"
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
      "site": "009bd1f0",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bd19c",
      "value": [
        "leaf",
        "ram:764384:8"
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
      "009bd1bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c0f38"
      ]
    ],
    [
      "unmatched:009bd170",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:009bd188",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ]
  ],
  "added": [
    [
      "009bd1bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c0f90"
      ]
    ],
    [
      "009bd1dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "009bd1f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bd148 ["INT_ADD", "register:40f0:8", ["const:9bd148:8", "const:4:8"]]
- 009bd148 ["CALL", null, ["callee:00851550:8"]]
+ 009bd19c ["INT_ADD", "register:40f0:8", ["const:9bd19c:8", "const:4:8"]]
+ 009bd19c ["CALL", null, ["callee:00851550:8"]]
- 009bd168 ["INT_ADD", "register:40f0:8", ["const:9bd168:8", "const:4:8"]]
- 009bd168 ["CALL", null, ["ram:6c0f38:8"]]
+ 009bd1bc ["INT_ADD", "register:40f0:8", ["const:9bd1bc:8", "const:4:8"]]
+ 009bd1bc ["CALL", null, ["ram:6c0f90:8"]]
- 009bd19c ["INT_ADD", "register:40f0:8", ["const:9bd19c:8", "const:4:8"]]
- 009bd19c ["CALL", null, ["ram:764384:8"]]
+ 009bd1f0 ["INT_ADD", "register:40f0:8", ["const:9bd1f0:8", "const:4:8"]]
+ 009bd1f0 ["CALL", null, ["ram:7643dc:8"]]
~~~


<a id="compare-7233cb4e950a500fd10e1289fa45e118"></a>

### [`009bd260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bd260.md) → [`009bd2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd2b4.md) FUN_009bd2b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009be2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be2e0.md) · 呼出先 9件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md)
- 新版 呼出元 1件 [`009be334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be334.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 96.85% / 新版 96.85%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "009bd27c",
      "incomplete_value": true,
      "site": "009bd27c",
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
    "old": {
      "definition_site": "009bd284",
      "incomplete_value": false,
      "site": "009bd298",
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
            "const:e58:8"
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
    "old": {
      "definition_site": "009bd28c",
      "incomplete_value": false,
      "site": "009bd298",
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
            "const:680:8"
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
      "009bd2cc",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009bd2d8",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bd2e0",
      "PARAM",
      [
        "storage",
        "00c89680",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009bd2cc",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009bd2d8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bd2e0",
      "PARAM",
      [
        "storage",
        "00c89750",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bd28c ["COPY", "tmp:0:8", ["const:680:8"]]
- 009bd28c ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 009bd28c ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 009bd28c ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 009bd2e0 ["COPY", "tmp:0:8", ["const:750:8"]]
+ 009bd2e0 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 009bd2e0 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 009bd2e0 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 009bd298 ["INT_ADD", "register:40f0:8", ["const:9bd298:8", "const:4:8"]]
- 009bd298 ["CALL", null, ["callee:00c586e0:8"]]
+ 009bd2ec ["INT_ADD", "register:40f0:8", ["const:9bd2ec:8", "const:4:8"]]
+ 009bd2ec ["CALL", null, ["callee:00c586e0:8"]]
- 009bd2e0 ["INT_ADD", "register:40f0:8", ["const:9bd2e0:8", "const:4:8"]]
- 009bd2e0 ["CALL", null, ["callee:00467b6c:8"]]
+ 009bd334 ["INT_ADD", "register:40f0:8", ["const:9bd334:8", "const:4:8"]]
+ 009bd334 ["CALL", null, ["callee:00467b6c:8"]]
~~~


<a id="compare-ee47c73362e35ba1b9ec2874e65d203d"></a>

### [`009bd45c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bd45c.md) → [`009bd4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd4b0.md) FUN_009bd4b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0088f49c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f49c.md) [`00a9a0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a0d0.md) · 呼出先 8件 [`006649ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006649ec.md) [`00689954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689954.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md) [`007287e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00728/007287e8.md) [`00737c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00737/00737c74.md)
- 新版 呼出元 2件 [`0088f4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f4f4.md) [`00a9a140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a140.md) · 呼出先 8件 [`00664a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664a2c.md) [`00689994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689994.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00728840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/00728840.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.91% / 新版 94.91%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009bd4a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bd750"
      ]
    ],
    [
      "unmatched:009bd628",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bd7d0"
      ]
    ],
    [
      "009bd760",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "uleb128"
      ]
    ]
  ],
  "added": [
    [
      "009bd4f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bd750"
      ]
    ],
    [
      "009bd67c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bd7d0"
      ]
    ],
    [
      "009bd760",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[83]"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bd490 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 009bd490 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 009bd490 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
+ 009bd4e4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 009bd4e4 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 009bd4e4 ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
- 009bd498 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 009bd4ec ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 009bd4a0 ["CBRANCH", null, ["local:b27:8", "register:101:1"]]
~~~


<a id="compare-fc460f7ed55f173294bef5d0aea1962d"></a>

### [`009bd7ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bd7ec.md) → [`009bd840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd840.md) FUN_009bd840

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009bdd38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdd38.md) · 呼出先 15件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00454844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00454/00454844.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md)
- 新版 呼出元 1件 [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) · 呼出先 15件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00454884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/00454884.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.38% / 新版 90.38%

優先判定に残った影響 `call_target` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009bd848",
      "incomplete_value": true,
      "site": "009bd848",
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
                "const:2b5:8"
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
    "old": {
      "definition_site": "009bd84c",
      "incomplete_value": true,
      "site": "009bd84c",
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
    "old": {
      "definition_site": "009bd868",
      "incomplete_value": false,
      "site": "009bd868",
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
            "const:7a8:8"
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
      "009bd888",
      "READ",
      [
        "storage",
        "002c02b5",
        null,
        "string"
      ]
    ],
    [
      "009bd890",
      "READ",
      [
        "storage",
        "002c02bb",
        null,
        "string"
      ]
    ],
    [
      "009bd8bc",
      "DATA",
      [
        "storage",
        "00c897a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bd888",
      "READ",
      [
        "storage",
        "002c02f5",
        null,
        "string"
      ]
    ],
    [
      "009bd890",
      "READ",
      [
        "storage",
        "002c02fb",
        null,
        "string"
      ]
    ],
    [
      "009bd8bc",
      "DATA",
      [
        "storage",
        "00c89878",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bd8b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009bd8b8 ["INT_ADD", "register:40f0:8", ["const:9bd8b8:8", "const:4:8"]]
- 009bd8b8 ["CALLIND", null, ["register:0:8"]]
+ 009bd90c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009bd90c ["INT_ADD", "register:40f0:8", ["const:9bd90c:8", "const:4:8"]]
+ 009bd90c ["CALLIND", null, ["register:0:8"]]
- 009bd9ac ["INT_ADD", "register:40f0:8", ["const:9bd9ac:8", "const:4:8"]]
- 009bd9ac ["CALL", null, ["ram:764384:8"]]
+ 009bda00 ["INT_ADD", "register:40f0:8", ["const:9bda00:8", "const:4:8"]]
+ 009bda00 ["CALL", null, ["ram:7643dc:8"]]
- 009bd810 ["INT_ADD", "register:40f0:8", ["const:9bd810:8", "const:4:8"]]
- 009bd810 ["CALL", null, ["callee:00851550:8"]]
+ 009bd864 ["INT_ADD", "register:40f0:8", ["const:9bd864:8", "const:4:8"]]
+ 009bd864 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5f40d8472237896b84244e07b4330875"></a>

### [`009bdb38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdb38.md) → [`009bdb8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdb8c.md) FUN_009bdb8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009bdd38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdd38.md) [`009be07c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be07c.md) [`009c058c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c058c.md) · 呼出先 7件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`004981d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/004981d0.md) [`009bad00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009bad00.md) [`009bcd58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bc/009bcd58.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 3件 [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) [`009be0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be0d0.md) [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) · 呼出先 7件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md) [`009bad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009bad54.md) [`009bcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bcdac.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_store_alignment

命令の説明率　旧版 79.27% / 新版 79.27%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_destination` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "009bdb74",
      "incomplete_value": true,
      "site": "009bdb74",
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
            "const:61c:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "009bdbd4",
      "incomplete_value": true,
      "site": "009bdbd4",
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
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009bdc50",
      "incomplete_value": true,
      "site": "009bdc50",
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
      "definition_site": "009bdbfc",
      "incomplete_value": true,
      "site": "009bdbfc",
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
      "009bdbb0",
      "READ",
      [
        "storage",
        "00ca461c",
        null,
        "undefined4"
      ]
    ],
    [
      "009bdbc8",
      "WRITE",
      [
        "storage",
        "00ca461c",
        null,
        "undefined4"
      ]
    ],
    [
      "009bdc10",
      "READ",
      [
        "storage",
        "00ca461c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "009bdbb0",
      "READ",
      [
        "storage",
        "00ca46ec",
        null,
        "undefined4"
      ]
    ],
    [
      "009bdbc8",
      "WRITE",
      [
        "storage",
        "00ca46ec",
        null,
        "undefined4"
      ]
    ],
    [
      "009bdc10",
      "READ",
      [
        "storage",
        "00ca46ec",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bdb74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:61c:8"]]
- 009bdb74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 009bdbc8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6ec:8"]]
+ 009bdbc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 009bdbdc ["INT_ADD", "register:40f0:8", ["const:9bdbdc:8", "const:4:8"]]
- 009bdbdc ["CALL", null, ["callee:009bad54:8"]]
+ 009bdc30 ["INT_ADD", "register:40f0:8", ["const:9bdc30:8", "const:4:8"]]
+ 009bdc30 ["CALL", null, ["callee:009bad54:8"]]
- 009bdc28 ["COPY", "register:4000:8", ["const:ca4000:8"]]
+ 009bdc7c ["COPY", "register:4000:8", ["const:ca5000:8"]]
~~~


<a id="compare-91eeed6d268474ea5db84e551a4dad14"></a>

### [`009bdc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdc80.md) → [`009bdcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdcd4.md) FUN_009bdcd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009be7fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be7fc.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009bcd58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bc/009bcd58.md) [`00a83260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83260.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009be850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be850.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009bcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bcdac.md) [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.48% / 新版 93.48%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009bdd10",
      "incomplete_value": true,
      "site": "009bdd14",
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
            "register:40a8:8"
          ]
        ]
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
      "unmatched:009bdc84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009bdc88",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009bdcb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bdd38"
      ]
    ]
  ],
  "added": [
    [
      "009bdcd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009bdcdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009bdd04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bdd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bdcc0 ["INT_ADD", "register:40f0:8", ["const:9bdcc0:8", "const:4:8"]]
- 009bdcc0 ["CALL", null, ["callee:009bcdac:8"]]
+ 009bdd14 ["INT_ADD", "register:40f0:8", ["const:9bdd14:8", "const:4:8"]]
+ 009bdd14 ["CALL", null, ["callee:009bcdac:8"]]
- 009bdd14 ["INT_ADD", "register:40f0:8", ["const:9bdd14:8", "const:4:8"]]
- 009bdd14 ["CALL", null, ["callee:00c57f50:8"]]
+ 009bdd68 ["INT_ADD", "register:40f0:8", ["const:9bdd68:8", "const:4:8"]]
+ 009bdd68 ["CALL", null, ["callee:00c57f50:8"]]
- 009bdc84 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 009bdc84 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 009bdc84 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009bdc84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-99dbb2b399f34544c2198cc5afc75e8f"></a>

### [`009bdd38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdd38.md) → [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) FUN_009bdd8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009be404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be404.md) · 呼出先 18件 [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0066d0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0dc.md)
- 新版 呼出元 1件 [`009be458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be458.md) · 呼出先 18件 [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.27% / 新版 74.27%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009bdef8",
      "incomplete_value": false,
      "site": "009bdf18",
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
    "old": {
      "definition_site": "009bdea4",
      "incomplete_value": false,
      "site": "009bdec4",
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
            "const:f00:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009bdefc",
      "incomplete_value": true,
      "site": "009bdf18",
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
                "const:c9a000:8"
              ],
              [
                "leaf",
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bdea8",
      "incomplete_value": true,
      "site": "009bdec4",
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
                "const:c9a000:8"
              ],
              [
                "leaf",
                "const:ca0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009bdd6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bddd8"
      ]
    ],
    [
      "unmatched:009bdda0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bde10"
      ]
    ],
    [
      "unmatched:009bddcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ]
  ],
  "added": [
    [
      "009bddc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bddd8"
      ]
    ],
    [
      "009bddf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bde10"
      ]
    ],
    [
      "009bde20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bde70 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 009bde70 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 009bde70 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 009bde70 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 009bdec4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 009bdec4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009bdec4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009bdec4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 009bdec4 ["INT_ADD", "register:40f0:8", ["const:9bdec4:8", "const:4:8"]]
- 009bdec4 ["CALL", null, ["callee:0047e91c:8"]]
+ 009bdf18 ["INT_ADD", "register:40f0:8", ["const:9bdf18:8", "const:4:8"]]
+ 009bdf18 ["CALL", null, ["callee:0047e91c:8"]]
- 009bdf18 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009bdf18 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 009bdf6c ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009bdf6c ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
~~~


<a id="compare-be876272b6f6947a3a973e3c1236232d"></a>

### [`009be07c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be07c.md) → [`009be0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be0d0.md) FUN_009be0d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009be808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be808.md) · 呼出先 13件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b96a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b96a4.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md)
- 新版 呼出元 1件 [`009be85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be85c.md) · 呼出先 13件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b96fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b96fc.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.28% / 新版 95.28%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009be144",
      "incomplete_value": false,
      "site": "009be14c",
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
            "const:ab8:8"
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
    "old": {
      "definition_site": "009be230",
      "incomplete_value": false,
      "site": "009be230",
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
            "const:b38:8"
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
      "site": "009be13c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be0e8",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "009be13c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "009be1a0",
      "DATA",
      [
        "storage",
        "00c89ab8",
        null,
        "undefined *"
      ]
    ],
    [
      "009be264",
      "READ",
      [
        "storage",
        "00c89ad8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009be13c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "009be1a0",
      "DATA",
      [
        "storage",
        "00c89b88",
        null,
        "undefined *"
      ]
    ],
    [
      "009be264",
      "READ",
      [
        "storage",
        "00c89ba8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009be0e8 ["INT_ADD", "register:40f0:8", ["const:9be0e8:8", "const:4:8"]]
- 009be0e8 ["CALL", null, ["ram:48ccf8:8"]]
+ 009be13c ["INT_ADD", "register:40f0:8", ["const:9be13c:8", "const:4:8"]]
+ 009be13c ["CALL", null, ["ram:48cd38:8"]]
- 009be13c ["INT_ADD", "register:40f0:8", ["const:9be13c:8", "const:4:8"]]
- 009be13c ["CALL", null, ["callee:00851550:8"]]
+ 009be190 ["INT_ADD", "register:40f0:8", ["const:9be190:8", "const:4:8"]]
+ 009be190 ["CALL", null, ["callee:00851550:8"]]
- 009be1a0 ["INT_ADD", "register:40f0:8", ["const:9be1a0:8", "const:4:8"]]
- 009be1a0 ["CALL", null, ["callee:009bdb8c:8"]]
+ 009be1f4 ["INT_ADD", "register:40f0:8", ["const:9be1f4:8", "const:4:8"]]
+ 009be1f4 ["CALL", null, ["callee:009bdb8c:8"]]
~~~


<a id="compare-840fd369d502c492866a47624e3f234b"></a>

### [`009be404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be404.md) → [`009be458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be458.md) FUN_009be458

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 17件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006534dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006534dc.md) [`006534e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006534e0.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 17件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0065351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065351c.md) [`00653520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653520.md)

変更の種類 branch_value, call, call_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.64% / 新版 92.64%

優先判定に残った影響 `branch_value` 1件, `store_destination` 6件, `store_value` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009be57c",
      "incomplete_value": true,
      "site": "009be57c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "leaf",
            "const:8fc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009be528",
      "incomplete_value": true,
      "site": "009be528",
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
                "register:4098:8"
              ],
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:8fc:8"
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009be57c",
      "incomplete_value": true,
      "site": "009be57c",
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
                "register:4050:8"
              ],
              [
                "leaf",
                "const:8fc:8"
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
      "definition_site": "009be528",
      "incomplete_value": true,
      "site": "009be528",
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
                "const:8fc:8"
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
    "ordinal": 47,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009be584",
      "incomplete_value": true,
      "site": "009be584",
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
                "register:4050:8"
              ],
              [
                "leaf",
                "const:8fc:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009be530",
      "incomplete_value": true,
      "site": "009be530",
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
                "const:8fc:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1c:8"
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
      "unmatched:009be570",
      "DATA",
      [
        "storage",
        "00333e0c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:009be608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009ccb7c"
      ]
    ],
    [
      "009be66c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009be5c4",
      "DATA",
      [
        "storage",
        "00333e0c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "009be65c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009ccbd0"
      ]
    ],
    [
      "009be66c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009be61c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 009be61c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 009be670 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 009be670 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 009be620 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 009be620 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 009be674 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 009be674 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 009be624 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:978:8"]]
- 009be624 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 009be678 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:a78:8"]]
+ 009be678 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
~~~


<a id="compare-62ddcb430cd5c87aa947168ef6fbb332"></a>

### [`009be808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be808.md) → [`009be85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be85c.md) FUN_009be85c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 12件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md) [`0085b2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2a4.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.58% / 新版 94.58%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 3件, `store_condition` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be8b8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be864",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "definition_site": "009be96c",
      "incomplete_value": true,
      "site": "009be970",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "live",
            "register:40a8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be9f0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009be99c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:009be808",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:009be80c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009be810",
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
      "009be85c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "009be860",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009be864",
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
- 009be864 ["INT_ADD", "register:40f0:8", ["const:9be864:8", "const:4:8"]]
- 009be864 ["CALL", null, ["ram:48ccf8:8"]]
+ 009be8b8 ["INT_ADD", "register:40f0:8", ["const:9be8b8:8", "const:4:8"]]
+ 009be8b8 ["CALL", null, ["ram:48cd38:8"]]
+ 009be864 ["COPY", "tmp:0:8", ["register:40d0:8"]]
+ 009be864 ["COPY", "tmp:1:8", ["register:40c8:8"]]
+ 009be864 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
+ 009be864 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009be970 ["INT_ADD", "register:40f0:8", ["const:9be970:8", "const:4:8"]]
- 009be970 ["CALL", null, ["callee:00ac86a0:8"]]
+ 009be9c4 ["INT_ADD", "register:40f0:8", ["const:9be9c4:8", "const:4:8"]]
+ 009be9c4 ["CALL", null, ["callee:00ac86a0:8"]]
~~~


<a id="compare-19b8f21ff2894558bdca6413f13aa968"></a>

### [`009bedcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009bedcc.md) → [`009bee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009bee20.md) FUN_009bee20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 14件 [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00468c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 14件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.43% / 新版 93.43%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "009bedf4",
      "incomplete_value": true,
      "site": "009bedf4",
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
    "old": {
      "definition_site": "009bee04",
      "incomplete_value": false,
      "site": "009bee18",
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
            "const:e58:8"
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
    "old": {
      "definition_site": "009bee0c",
      "incomplete_value": false,
      "site": "009bee18",
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
            "const:680:8"
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
      "unmatched:009bede0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009bee44",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:009bee04",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009bee34",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009bee44",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009bee58",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bee18 ["INT_ADD", "register:40f0:8", ["const:9bee18:8", "const:4:8"]]
- 009bee18 ["CALL", null, ["callee:00c586e0:8"]]
+ 009bee6c ["INT_ADD", "register:40f0:8", ["const:9bee6c:8", "const:4:8"]]
+ 009bee6c ["CALL", null, ["callee:00c586e0:8"]]
- 009bee6c ["INT_ADD", "register:40f0:8", ["const:9bee6c:8", "const:4:8"]]
- 009bee6c ["CALL", null, ["callee:00851550:8"]]
+ 009beec0 ["INT_ADD", "register:40f0:8", ["const:9beec0:8", "const:4:8"]]
+ 009beec0 ["CALL", null, ["callee:00851550:8"]]
- 009beea8 ["INT_ADD", "register:40f0:8", ["const:9beea8:8", "const:4:8"]]
- 009beea8 ["CALL", null, ["callee:00467ba0:8"]]
+ 009beefc ["INT_ADD", "register:40f0:8", ["const:9beefc:8", "const:4:8"]]
+ 009beefc ["CALL", null, ["callee:00467ba0:8"]]
~~~


<a id="compare-d4ff980ea2c2739cf991411fb8aba10e"></a>

### [`009bf214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf214.md) → [`009bf268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf268.md) FUN_009bf268

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009bce80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bc/009bce80.md) · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00461a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00461/00461a18.md) [`00461a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00461/00461a2c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009bced4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bced4.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00461a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461a58.md) [`00461a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461a6c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.92% / 新版 85.92%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009bf4d8",
      "incomplete_value": true,
      "site": "009bf4e0",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009bf4d8",
      "incomplete_value": true,
      "site": "009bf4e0",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009bf52c"
      ],
      [
        "FALL_THROUGH",
        "009bf580"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009bf580",
      "incomplete_value": true,
      "site": "009bf59c",
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
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009bf52c",
      "incomplete_value": true,
      "site": "009bf548",
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
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009bf228",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009bf248",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:009bf2f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bf3dc"
      ]
    ]
  ],
  "added": [
    [
      "009bf27c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009bf29c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "009bf34c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bf324"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf48c ["CBRANCH", null, ["local:b65:8", "register:101:1"]]
+ 009bf4e0 ["CBRANCH", null, ["local:b66:8", "register:101:1"]]
- 009bf4e0 ["INT_ADD", "register:40f0:8", ["const:9bf4e0:8", "const:4:8"]]
- 009bf4e0 ["CALL", null, ["callee:0043bb60:8"]]
+ 009bf534 ["INT_ADD", "register:40f0:8", ["const:9bf534:8", "const:4:8"]]
+ 009bf534 ["CALL", null, ["callee:0043bb60:8"]]
- 009bf228 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 009bf228 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 009bf228 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 009bf228 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e29a12bd420f13f4de5796f0c782faa4"></a>

### [`009bf56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf56c.md) → [`009bf5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf5c0.md) FUN_009bf5c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009bf580",
      "incomplete_value": false,
      "site": "009bf584",
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
            "const:590:8"
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
      "009bf5d8",
      "DATA",
      [
        "storage",
        "00c89590",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bf5d8",
      "DATA",
      [
        "storage",
        "00c89660",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf578 ["INT_ADD", "register:40f0:8", ["const:9bf578:8", "const:4:8"]]
- 009bf578 ["CALL", null, ["callee:00c57f60:8"]]
+ 009bf5cc ["INT_ADD", "register:40f0:8", ["const:9bf5cc:8", "const:4:8"]]
+ 009bf5cc ["CALL", null, ["callee:00c57f60:8"]]
- 009bf580 ["COPY", "tmp:0:8", ["const:590:8"]]
- 009bf580 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf580 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf580 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bf5d4 ["COPY", "tmp:0:8", ["const:660:8"]]
+ 009bf5d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf5d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf5d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a09d8707c7817bdc497a96156cd1726"></a>

### [`009bf590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf590.md) → [`009bf5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf5e4.md) FUN_009bf5e4

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
    "old": {
      "definition_site": "009bf594",
      "incomplete_value": false,
      "site": "009bf598",
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
            "const:590:8"
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
      "009bf5ec",
      "DATA",
      [
        "storage",
        "00c89590",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bf5ec",
      "DATA",
      [
        "storage",
        "00c89660",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf594 ["COPY", "tmp:0:8", ["const:590:8"]]
- 009bf594 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf594 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf594 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bf5e8 ["COPY", "tmp:0:8", ["const:660:8"]]
+ 009bf5e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf5e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf5e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7fe5df1d11f87644ae15beb2503d9a4b"></a>

### [`009bf5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf5a8.md) → [`009bf5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf5fc.md) FUN_009bf5fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bf620",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009bf5cc",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:009bf5b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bf640"
      ]
    ],
    [
      "009bf620",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009bf604",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009bf640"
      ]
    ],
    [
      "009bf620",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf5cc ["INT_ADD", "register:40f0:8", ["const:9bf5cc:8", "const:4:8"]]
- 009bf5cc ["CALL", null, ["ram:47acf4:8"]]
+ 009bf620 ["INT_ADD", "register:40f0:8", ["const:9bf620:8", "const:4:8"]]
+ 009bf620 ["CALL", null, ["ram:47ad34:8"]]
- 009bf5ac ["COPY", "tmp:0:4", ["const:2:4"]]
- 009bf5ac ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 009bf5ac ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 009bf5ac ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 009bf5b0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009bf5b0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-dce8fc079af9ea2bafd4be6be7578b99"></a>

### [`009bf61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf61c.md) → [`009bf670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf670.md) FUN_009bf670

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009bf630",
      "incomplete_value": false,
      "site": "009bf634",
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
            "const:610:8"
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
      "009bf688",
      "DATA",
      [
        "storage",
        "00c89610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bf688",
      "DATA",
      [
        "storage",
        "00c896e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf628 ["INT_ADD", "register:40f0:8", ["const:9bf628:8", "const:4:8"]]
- 009bf628 ["CALL", null, ["callee:00c57f60:8"]]
+ 009bf67c ["INT_ADD", "register:40f0:8", ["const:9bf67c:8", "const:4:8"]]
+ 009bf67c ["CALL", null, ["callee:00c57f60:8"]]
- 009bf630 ["COPY", "tmp:0:8", ["const:610:8"]]
- 009bf630 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf630 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf630 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bf684 ["COPY", "tmp:0:8", ["const:6e0:8"]]
+ 009bf684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-da4c1d85259876ef4f502616624f405b"></a>

### [`009bf640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf640.md) → [`009bf694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf694.md) FUN_009bf694

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
    "old": {
      "definition_site": "009bf644",
      "incomplete_value": false,
      "site": "009bf648",
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
            "const:610:8"
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
      "009bf69c",
      "DATA",
      [
        "storage",
        "00c89610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bf69c",
      "DATA",
      [
        "storage",
        "00c896e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf644 ["COPY", "tmp:0:8", ["const:610:8"]]
- 009bf644 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf644 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf644 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bf698 ["COPY", "tmp:0:8", ["const:6e0:8"]]
+ 009bf698 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf698 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf698 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d7e5a31a70186b911a804509e803a6d4"></a>

### [`009bf688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf688.md) → [`009bf6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf6dc.md) FUN_009bf6dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009bf6ac",
      "incomplete_value": false,
      "site": "009bf6ac",
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
            "const:6a8:8"
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
      "009bf700",
      "DATA",
      [
        "storage",
        "00c896a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bf700",
      "DATA",
      [
        "storage",
        "00c89778",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf69c ["INT_ADD", "register:40f0:8", ["const:9bf69c:8", "const:4:8"]]
- 009bf69c ["CALL", null, ["callee:00c57f60:8"]]
+ 009bf6f0 ["INT_ADD", "register:40f0:8", ["const:9bf6f0:8", "const:4:8"]]
+ 009bf6f0 ["CALL", null, ["callee:00c57f60:8"]]
- 009bf6a8 ["COPY", "tmp:0:8", ["const:6a8:8"]]
- 009bf6a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009bf6a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009bf6a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009bf6fc ["COPY", "tmp:0:8", ["const:778:8"]]
+ 009bf6fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf6fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009bf6fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a430b0e3144f5e7dbb514d2a8be4fe5a"></a>

### [`009bf6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf6bc.md) → [`009bf710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf710.md) FUN_009bf710

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
    "old": {
      "definition_site": "009bf6c8",
      "incomplete_value": false,
      "site": "009bf6c8",
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
            "const:6a8:8"
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
      "009bf71c",
      "DATA",
      [
        "storage",
        "00c896a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009bf71c",
      "DATA",
      [
        "storage",
        "00c89778",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf6c4 ["COPY", "tmp:0:8", ["const:6a8:8"]]
- 009bf6c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009bf6c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009bf6c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009bf718 ["COPY", "tmp:0:8", ["const:778:8"]]
+ 009bf718 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009bf718 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009bf718 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-bfcc0b9775d65ad7afcb55e1d3c5fb1f"></a>

### [`009bf6d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf6d8.md) → [`009bf72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf72c.md) FUN_009bf72c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 40件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`005da584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005da584.md) [`006649ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006649ec.md)
- 新版 呼出元 0件  · 呼出先 40件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) [`00664a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664a2c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.34% / 新版 91.34%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 12件, `call_target` 2件, `store_condition` 1件, `store_value` 15件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009bf7c4",
      "incomplete_value": true,
      "site": "009bf7d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:db5:8"
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
    "old": {
      "definition_site": "009bf7d8",
      "incomplete_value": true,
      "site": "009bf7d8",
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
    "old": {
      "definition_site": "009bf8fc",
      "incomplete_value": true,
      "site": "009bf90c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2a0:8"
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
      "009bf7d8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009bf7f0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bf7f8",
      "PARAM",
      [
        "storage",
        "00c89680",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009bf7d8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009bf7f0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009bf7f8",
      "PARAM",
      [
        "storage",
        "00c89750",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009bf728 ["INT_ADD", "register:40f0:8", ["const:9bf728:8", "const:4:8"]]
- 009bf728 ["CALL", null, ["callee:008bb568:8"]]
+ 009bf77c ["INT_ADD", "register:40f0:8", ["const:9bf77c:8", "const:4:8"]]
+ 009bf77c ["CALL", null, ["callee:008bb568:8"]]
- 009bf740 ["INT_ADD", "register:40f0:8", ["const:9bf740:8", "const:4:8"]]
- 009bf740 ["CALL", null, ["callee:008b91d0:8"]]
+ 009bf794 ["INT_ADD", "register:40f0:8", ["const:9bf794:8", "const:4:8"]]
+ 009bf794 ["CALL", null, ["callee:008b91d0:8"]]
- 009bf784 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:978:8"]]
- 009bf784 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 009bf7d8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a78:8"]]
+ 009bf7d8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a7c4d463a0c03a99d49891e348ef8412"></a>

### [`009c0360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0360.md) → [`009c03b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c03b4.md) FUN_009c03b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c0374",
      "incomplete_value": false,
      "site": "009c0378",
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
            "const:718:8"
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
      "009c03cc",
      "DATA",
      [
        "storage",
        "00c89718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c03cc",
      "DATA",
      [
        "storage",
        "00c897e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c036c ["INT_ADD", "register:40f0:8", ["const:9c036c:8", "const:4:8"]]
- 009c036c ["CALL", null, ["callee:00c57f60:8"]]
+ 009c03c0 ["INT_ADD", "register:40f0:8", ["const:9c03c0:8", "const:4:8"]]
+ 009c03c0 ["CALL", null, ["callee:00c57f60:8"]]
- 009c0374 ["COPY", "tmp:0:8", ["const:718:8"]]
- 009c0374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c03c8 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 009c03c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c03c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c03c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-036301587e384218981b151e680abec6"></a>

### [`009c0384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0384.md) → [`009c03d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c03d8.md) FUN_009c03d8

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
    "old": {
      "definition_site": "009c0388",
      "incomplete_value": false,
      "site": "009c038c",
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
            "const:718:8"
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
      "009c03e0",
      "DATA",
      [
        "storage",
        "00c89718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c03e0",
      "DATA",
      [
        "storage",
        "00c897e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0388 ["COPY", "tmp:0:8", ["const:718:8"]]
- 009c0388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c03dc ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 009c03dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c03dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c03dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cb663ff6b9130163c752916a14a5515c"></a>

### [`009c039c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c039c.md) → [`009c03f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c03f0.md) FUN_009c03f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "009c0414",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c03c0",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "009c0414",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009c0414",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c03c0 ["INT_ADD", "register:40f0:8", ["const:9c03c0:8", "const:4:8"]]
- 009c03c0 ["CALL", null, ["ram:47acf4:8"]]
+ 009c0414 ["INT_ADD", "register:40f0:8", ["const:9c0414:8", "const:4:8"]]
+ 009c0414 ["CALL", null, ["ram:47ad34:8"]]
- 009c03cc ["INT_ADD", "register:40f0:8", ["const:9c03cc:8", "const:4:8"]]
- 009c03cc ["CALL", null, ["callee:0047ce14:8"]]
+ 009c0420 ["INT_ADD", "register:40f0:8", ["const:9c0420:8", "const:4:8"]]
+ 009c0420 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-59257e5997c3dc5d182becf62e6b66f6"></a>

### [`009c0410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0410.md) → [`009c0464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0464.md) FUN_009c0464

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c0424",
      "incomplete_value": false,
      "site": "009c0428",
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
            "const:7a8:8"
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
      "009c047c",
      "DATA",
      [
        "storage",
        "00c897a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c047c",
      "DATA",
      [
        "storage",
        "00c89878",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c041c ["INT_ADD", "register:40f0:8", ["const:9c041c:8", "const:4:8"]]
- 009c041c ["CALL", null, ["callee:00c57f60:8"]]
+ 009c0470 ["INT_ADD", "register:40f0:8", ["const:9c0470:8", "const:4:8"]]
+ 009c0470 ["CALL", null, ["callee:00c57f60:8"]]
- 009c0424 ["COPY", "tmp:0:8", ["const:7a8:8"]]
- 009c0424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0478 ["COPY", "tmp:0:8", ["const:878:8"]]
+ 009c0478 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0478 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0478 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ed1ae8e800b4bc75772152f0bf088e5a"></a>

### [`009c0434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0434.md) → [`009c0488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0488.md) FUN_009c0488

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
    "old": {
      "definition_site": "009c0438",
      "incomplete_value": false,
      "site": "009c043c",
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
            "const:7a8:8"
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
      "009c0490",
      "DATA",
      [
        "storage",
        "00c897a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0490",
      "DATA",
      [
        "storage",
        "00c89878",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0438 ["COPY", "tmp:0:8", ["const:7a8:8"]]
- 009c0438 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0438 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0438 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c048c ["COPY", "tmp:0:8", ["const:878:8"]]
+ 009c048c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c048c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c048c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-20fe88b3117039db6dac446b50910142"></a>

### [`009c044c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c044c.md) → [`009c04a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c04a0.md) FUN_009c04a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c04bc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c0468",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "009c04bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009c04bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0468 ["INT_ADD", "register:40f0:8", ["const:9c0468:8", "const:4:8"]]
- 009c0468 ["CALL", null, ["ram:47acf4:8"]]
+ 009c04bc ["INT_ADD", "register:40f0:8", ["const:9c04bc:8", "const:4:8"]]
+ 009c04bc ["CALL", null, ["ram:47ad34:8"]]
- 009c0474 ["INT_ADD", "register:40f0:8", ["const:9c0474:8", "const:4:8"]]
- 009c0474 ["CALL", null, ["callee:0047ce14:8"]]
+ 009c04c8 ["INT_ADD", "register:40f0:8", ["const:9c04c8:8", "const:4:8"]]
+ 009c04c8 ["CALL", null, ["callee:0047ce14:8"]]
- 009c0478 ["INT_ADD", "register:40f0:8", ["const:9c0478:8", "const:4:8"]]
- 009c0478 ["CALL", null, ["callee:00851550:8"]]
+ 009c04cc ["INT_ADD", "register:40f0:8", ["const:9c04cc:8", "const:4:8"]]
+ 009c04cc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-ac64803807bdc60a284c29245126a61d"></a>

### [`009c04cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c04cc.md) → [`009c0520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0520.md) FUN_009c0520

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c04e0",
      "incomplete_value": false,
      "site": "009c04e4",
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
            "const:828:8"
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
      "009c0538",
      "DATA",
      [
        "storage",
        "00c89828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0538",
      "DATA",
      [
        "storage",
        "00c898f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c04d8 ["INT_ADD", "register:40f0:8", ["const:9c04d8:8", "const:4:8"]]
- 009c04d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c052c ["INT_ADD", "register:40f0:8", ["const:9c052c:8", "const:4:8"]]
+ 009c052c ["CALL", null, ["callee:00c57f60:8"]]
- 009c04e0 ["COPY", "tmp:0:8", ["const:828:8"]]
- 009c04e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c04e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c04e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0534 ["COPY", "tmp:0:8", ["const:8f8:8"]]
+ 009c0534 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0534 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0534 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b3564297b0a07b0baa300c7a9484bc1"></a>

### [`009c04f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c04f0.md) → [`009c0544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0544.md) FUN_009c0544

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
    "old": {
      "definition_site": "009c04f4",
      "incomplete_value": false,
      "site": "009c04f8",
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
            "const:828:8"
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
      "009c054c",
      "DATA",
      [
        "storage",
        "00c89828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c054c",
      "DATA",
      [
        "storage",
        "00c898f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c04f4 ["COPY", "tmp:0:8", ["const:828:8"]]
- 009c04f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c04f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c04f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0548 ["COPY", "tmp:0:8", ["const:8f8:8"]]
+ 009c0548 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0548 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0548 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca8ba3efff3288e415d457dafab92d77"></a>

### [`009c053c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c053c.md) → [`009c0590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0590.md) FUN_009c0590

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c0560",
      "incomplete_value": false,
      "site": "009c0560",
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
            "const:8a8:8"
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
      "009c05b4",
      "DATA",
      [
        "storage",
        "00c898a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c05b4",
      "DATA",
      [
        "storage",
        "00c89978",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0550 ["INT_ADD", "register:40f0:8", ["const:9c0550:8", "const:4:8"]]
- 009c0550 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c05a4 ["INT_ADD", "register:40f0:8", ["const:9c05a4:8", "const:4:8"]]
+ 009c05a4 ["CALL", null, ["callee:00c57f60:8"]]
- 009c055c ["COPY", "tmp:0:8", ["const:8a8:8"]]
- 009c055c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c055c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c055c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c05b0 ["COPY", "tmp:0:8", ["const:978:8"]]
+ 009c05b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c05b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c05b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2521bfa73da654daac2a9906c356a867"></a>

### [`009c0570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0570.md) → [`009c05c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05c4.md) FUN_009c05c4

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
    "old": {
      "definition_site": "009c057c",
      "incomplete_value": false,
      "site": "009c057c",
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
            "const:8a8:8"
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
      "009c05d0",
      "DATA",
      [
        "storage",
        "00c898a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c05d0",
      "DATA",
      [
        "storage",
        "00c89978",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0578 ["COPY", "tmp:0:8", ["const:8a8:8"]]
- 009c0578 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009c0578 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009c0578 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009c05cc ["COPY", "tmp:0:8", ["const:978:8"]]
+ 009c05cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009c05cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009c05cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-391940bb831a764c5c57c793006eab0d"></a>

### [`009c058c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c058c.md) → [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) FUN_009c05e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`00461a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00461/00461a80.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`006534dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006534dc.md) [`006534e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006534e0.md)
- 新版 呼出元 0件  · 呼出先 24件 [`00461ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461ac0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0065351c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065351c.md) [`00653520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653520.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.91% / 新版 77.91%

優先判定に残った影響 `store_value` 11件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c0638",
      "incomplete_value": true,
      "site": "009c0648",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:897:8"
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
    "old": {
      "definition_site": "009c063c",
      "incomplete_value": true,
      "site": "009c064c",
      "value": [
        "LOAD",
        "16",
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
    "old": {
      "definition_site": "009c0640",
      "incomplete_value": true,
      "site": "009c0650",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009c068c",
      "READ",
      [
        "storage",
        "002c1897",
        null,
        "string"
      ]
    ],
    [
      "009c0690",
      "READ",
      [
        "storage",
        "002c18a1",
        null,
        "string"
      ]
    ],
    [
      "009c0694",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009c068c",
      "READ",
      [
        "storage",
        "002c18d7",
        null,
        "string"
      ]
    ],
    [
      "009c0690",
      "READ",
      [
        "storage",
        "002c18e1",
        null,
        "string"
      ]
    ],
    [
      "009c0694",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009c05f4 ["INT_ADD", "register:40f0:8", ["const:9c05f4:8", "const:4:8"]]
- 009c05f4 ["CALL", null, ["callee:00851550:8"]]
+ 009c0648 ["INT_ADD", "register:40f0:8", ["const:9c0648:8", "const:4:8"]]
+ 009c0648 ["CALL", null, ["callee:00851550:8"]]
- 009c0630 ["COPY", "tmp:0:8", ["const:897:8"]]
- 009c0630 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0630 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0630 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0684 ["COPY", "tmp:0:8", ["const:8d7:8"]]
+ 009c0684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009c0910 ["COPY", "tmp:0:4", ["const:0:4"]]
- 009c0910 ["INT_ZEXT", "register:4010:8", ["tmp:0:4"]]
~~~


<a id="compare-f4fafe0a9ff94a490758f8304da15de3"></a>

### [`009c0c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0c1c.md) → [`009c0c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0c70.md) FUN_009c0c70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c0c30",
      "incomplete_value": false,
      "site": "009c0c34",
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
            "const:928:8"
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
      "009c0c88",
      "DATA",
      [
        "storage",
        "00c89928",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0c88",
      "DATA",
      [
        "storage",
        "00c899f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0c28 ["INT_ADD", "register:40f0:8", ["const:9c0c28:8", "const:4:8"]]
- 009c0c28 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c0c7c ["INT_ADD", "register:40f0:8", ["const:9c0c7c:8", "const:4:8"]]
+ 009c0c7c ["CALL", null, ["callee:00c57f60:8"]]
- 009c0c30 ["COPY", "tmp:0:8", ["const:928:8"]]
- 009c0c30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0c84 ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 009c0c84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0c84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0c84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5ed91aaaf960d4b549684a0843a361b"></a>

### [`009c0c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0c40.md) → [`009c0c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0c94.md) FUN_009c0c94

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
    "old": {
      "definition_site": "009c0c44",
      "incomplete_value": false,
      "site": "009c0c48",
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
            "const:928:8"
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
      "009c0c9c",
      "DATA",
      [
        "storage",
        "00c89928",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0c9c",
      "DATA",
      [
        "storage",
        "00c899f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0c44 ["COPY", "tmp:0:8", ["const:928:8"]]
- 009c0c44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0c44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0c98 ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 009c0c98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0c98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0c98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cc6ed9388d94320dae4dbfcdbabda890"></a>

### [`009c0c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0c58.md) → [`009c0cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0cac.md) FUN_009c0cac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "009c0cd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c0c7c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "009c0cd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009c0cd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0c7c ["INT_ADD", "register:40f0:8", ["const:9c0c7c:8", "const:4:8"]]
- 009c0c7c ["CALL", null, ["ram:47acf4:8"]]
+ 009c0cd0 ["INT_ADD", "register:40f0:8", ["const:9c0cd0:8", "const:4:8"]]
+ 009c0cd0 ["CALL", null, ["ram:47ad34:8"]]
- 009c0c88 ["INT_ADD", "register:40f0:8", ["const:9c0c88:8", "const:4:8"]]
- 009c0c88 ["CALL", null, ["callee:0047ce14:8"]]
+ 009c0cdc ["INT_ADD", "register:40f0:8", ["const:9c0cdc:8", "const:4:8"]]
+ 009c0cdc ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-9d9c33f3798c25601e7fdd8fbc498bd5"></a>

### [`009c0ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0ccc.md) → [`009c0d20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0d20.md) FUN_009c0d20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c0ce0",
      "incomplete_value": false,
      "site": "009c0ce4",
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
            "const:9a8:8"
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
      "009c0d38",
      "DATA",
      [
        "storage",
        "00c899a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0d38",
      "DATA",
      [
        "storage",
        "00c89a78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0cd8 ["INT_ADD", "register:40f0:8", ["const:9c0cd8:8", "const:4:8"]]
- 009c0cd8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c0d2c ["INT_ADD", "register:40f0:8", ["const:9c0d2c:8", "const:4:8"]]
+ 009c0d2c ["CALL", null, ["callee:00c57f60:8"]]
- 009c0ce0 ["COPY", "tmp:0:8", ["const:9a8:8"]]
- 009c0ce0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0ce0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0ce0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0d34 ["COPY", "tmp:0:8", ["const:a78:8"]]
+ 009c0d34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0d34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0d34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad2bd30857266db2e1ea5cd52e6932c3"></a>

### [`009c0cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0cf0.md) → [`009c0d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0d44.md) FUN_009c0d44

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
    "old": {
      "definition_site": "009c0cf4",
      "incomplete_value": false,
      "site": "009c0cf8",
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
            "const:9a8:8"
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
      "009c0d4c",
      "DATA",
      [
        "storage",
        "00c899a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c0d4c",
      "DATA",
      [
        "storage",
        "00c89a78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0cf4 ["COPY", "tmp:0:8", ["const:9a8:8"]]
- 009c0cf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c0cf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c0cf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c0d48 ["COPY", "tmp:0:8", ["const:a78:8"]]
+ 009c0d48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0d48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c0d48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-587ee4deb9adb6c3fa320bc1056f7ef2"></a>

### [`009c0d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0d08.md) → [`009c0d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0d5c.md) FUN_009c0d5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009c0d30",
      "incomplete_value": false,
      "site": "009c0d38",
      "value": [
        "leaf",
        "const:b:8"
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
      "unmatched:009c0d2c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009c0d80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c0d38 ["INT_ADD", "register:40f0:8", ["const:9c0d38:8", "const:4:8"]]
- 009c0d38 ["CALL", null, ["callee:0047ce14:8"]]
+ 009c0d8c ["INT_ADD", "register:40f0:8", ["const:9c0d8c:8", "const:4:8"]]
+ 009c0d8c ["CALL", null, ["callee:0047ce14:8"]]
- 009c0d10 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009c0d10 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 009c0d64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009c0d64 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 009c0d18 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 009c0d18 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 009c0d6c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 009c0d6c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-dd3f72d374db610e6585a042af07f55b"></a>

### [`009c0d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0d78.md) → [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) FUN_009c0dcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`009c058c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c058c.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`009c0f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0f00.md) [`009c1038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c1038.md) [`009c104c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c104c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009c0f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0f54.md) [`009c108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c108c.md) [`009c10a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c10a0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 98.88% / 新版 98.88%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009c0d80",
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
      "009c0dd4",
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
- 009c0d80 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 009c0d80 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 009c0d80 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 009c0d80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
+ 009c0dd4 ["COPY", "tmp:0:8", ["register:40c0:8"]]
+ 009c0dd4 ["COPY", "tmp:1:8", ["register:40b8:8"]]
+ 009c0dd4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
+ 009c0dd4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009c0e18 ["INT_ADD", "register:40f0:8", ["const:9c0e18:8", "const:4:8"]]
- 009c0e18 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c0e6c ["INT_ADD", "register:40f0:8", ["const:9c0e6c:8", "const:4:8"]]
+ 009c0e6c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-10f7f9a5b86d6b82e0ad2eb87960d8fb"></a>

### [`009c1038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c1038.md) → [`009c108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c108c.md) FUN_009c108c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009c0d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0d78.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009c1044",
      "incomplete_value": false,
      "site": "009c1048",
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
            "const:f4c:8"
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
      "009c1098",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c1098",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1048 ["INT_ADD", "register:40f0:8", ["const:9c1048:8", "const:4:8"]]
- 009c1048 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009c109c ["INT_ADD", "register:40f0:8", ["const:9c109c:8", "const:4:8"]]
+ 009c109c ["CALL", null, ["callee:0043b7b8:8"]]
- 009c1044 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009c1044 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009c1044 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009c1044 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009c1098 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009c1098 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009c1098 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009c1098 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d2afe0cc1f2d1d3f522acf05e083bc26"></a>

### [`009c1174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c1174.md) → [`009c11c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c11c8.md) FUN_009c11c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009c1174",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009c1178",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009c1198",
      "DATA",
      [
        "storage",
        "00c89a28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c11c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009c11cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009c11ec",
      "DATA",
      [
        "storage",
        "00c89af8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1174 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009c1174 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009c1174 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009c1174 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009c1178 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009c1178 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009c117c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e4fc29755fd6c6319b72b7a54a91c4f6"></a>

### [`009c11a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c11a8.md) → [`009c11fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c11fc.md) FUN_009c11fc

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
    "old": {
      "definition_site": "009c11b4",
      "incomplete_value": false,
      "site": "009c11b4",
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
            "const:a28:8"
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
      "009c1208",
      "DATA",
      [
        "storage",
        "00c89a28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1208",
      "DATA",
      [
        "storage",
        "00c89af8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c11b0 ["COPY", "tmp:0:8", ["const:a28:8"]]
- 009c11b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009c11b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009c11b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009c1204 ["COPY", "tmp:0:8", ["const:af8:8"]]
+ 009c1204 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009c1204 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009c1204 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-32a8ad0c13f7110f8b9cd55c10bb0d0a"></a>

### [`009c11c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c11c4.md) → [`009c1218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1218.md) FUN_009c1218

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 77.69% / 新版 77.69%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_destination` 7件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c123c",
      "incomplete_value": true,
      "site": "009c124c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9fe:8"
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
    "old": {
      "definition_site": "009c1240",
      "incomplete_value": true,
      "site": "009c1250",
      "value": [
        "LOAD",
        "16",
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
    "old": {
      "definition_site": "009c1244",
      "incomplete_value": true,
      "site": "009c1254",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:790:8"
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
      "009c1254",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009c1274",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "009c1290",
      "READ",
      [
        "storage",
        "002ba9fe",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c1254",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009c1274",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "009c1290",
      "READ",
      [
        "storage",
        "002ba9aa",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1200 ["INT_ADD", "register:40f0:8", ["const:9c1200:8", "const:4:8"]]
- 009c1200 ["CALL", null, ["ram:47acf4:8"]]
+ 009c1254 ["INT_ADD", "register:40f0:8", ["const:9c1254:8", "const:4:8"]]
+ 009c1254 ["CALL", null, ["ram:47ad34:8"]]
- 009c1290 ["INT_ADD", "register:40f0:8", ["const:9c1290:8", "const:4:8"]]
- 009c1290 ["CALL", null, ["callee:0047e91c:8"]]
+ 009c12e4 ["INT_ADD", "register:40f0:8", ["const:9c12e4:8", "const:4:8"]]
+ 009c12e4 ["CALL", null, ["callee:0047e91c:8"]]
- 009c1354 ["INT_ADD", "register:40f0:8", ["const:9c1354:8", "const:4:8"]]
- 009c1354 ["CALL", null, ["callee:00c57f20:8"]]
+ 009c13a8 ["INT_ADD", "register:40f0:8", ["const:9c13a8:8", "const:4:8"]]
+ 009c13a8 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-04bc0dd145e090005d0676b2a461d6b2"></a>

### [`009c1418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c1418.md) → [`009c146c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c146c.md) FUN_009c146c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c142c",
      "incomplete_value": false,
      "site": "009c1430",
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
            "const:ab8:8"
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
      "009c1484",
      "DATA",
      [
        "storage",
        "00c89ab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1484",
      "DATA",
      [
        "storage",
        "00c89b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1424 ["INT_ADD", "register:40f0:8", ["const:9c1424:8", "const:4:8"]]
- 009c1424 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c1478 ["INT_ADD", "register:40f0:8", ["const:9c1478:8", "const:4:8"]]
+ 009c1478 ["CALL", null, ["callee:00c57f60:8"]]
- 009c142c ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 009c142c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c142c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c142c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1480 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 009c1480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c9473ea84c180e31e9efd808cb0de7ad"></a>

### [`009c143c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c143c.md) → [`009c1490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1490.md) FUN_009c1490

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
    "old": {
      "definition_site": "009c1440",
      "incomplete_value": false,
      "site": "009c1444",
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
            "const:ab8:8"
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
      "009c1498",
      "DATA",
      [
        "storage",
        "00c89ab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1498",
      "DATA",
      [
        "storage",
        "00c89b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1440 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 009c1440 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c1440 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c1440 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c1494 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 009c1494 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1494 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c1494 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a1e1f43f0e32a7eab23cec504fdd8df0"></a>

### [`009c1454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c1454.md) → [`009c14a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c14a8.md) FUN_009c14a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009c1478",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009c14cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c145c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009c145c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009c14b0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009c14b0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 009c1464 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 009c1464 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009c14b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 009c14b8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 009c1478 ["INT_ADD", "register:40f0:8", ["const:9c1478:8", "const:4:8"]]
- 009c1478 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-ae03a4899bc5e31124d892749d1a89c4"></a>

### [`009c14c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c14c8.md) → [`009c151c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c151c.md) FUN_009c151c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c14ec",
      "incomplete_value": false,
      "site": "009c14ec",
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
            "const:b38:8"
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
      "definition_site": "009c152c",
      "incomplete_value": false,
      "site": "009c1530",
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
      "009c1540",
      "DATA",
      [
        "storage",
        "00c89b38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c1540",
      "DATA",
      [
        "storage",
        "00c89c08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c14dc ["INT_ADD", "register:40f0:8", ["const:9c14dc:8", "const:4:8"]]
- 009c14dc ["CALL", null, ["callee:00c57f60:8"]]
+ 009c1530 ["INT_ADD", "register:40f0:8", ["const:9c1530:8", "const:4:8"]]
+ 009c1530 ["CALL", null, ["callee:00c57f60:8"]]
- 009c14e8 ["COPY", "tmp:0:8", ["const:b38:8"]]
- 009c14e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c14e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c14e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c153c ["COPY", "tmp:0:8", ["const:c08:8"]]
+ 009c153c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c153c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c153c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-66c883ba141c29137126e10992619239"></a>

### [`009c14fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c14fc.md) → [`009c1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1550.md) FUN_009c1550

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
    "old": {
      "definition_site": "009c1508",
      "incomplete_value": false,
      "site": "009c1508",
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
            "const:b38:8"
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
      "009c155c",
      "DATA",
      [
        "storage",
        "00c89b38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009c155c",
      "DATA",
      [
        "storage",
        "00c89c08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1504 ["COPY", "tmp:0:8", ["const:b38:8"]]
- 009c1504 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009c1504 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009c1504 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009c1558 ["COPY", "tmp:0:8", ["const:c08:8"]]
+ 009c1558 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009c1558 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009c1558 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2596ee47e36caf3de25553d82d44742b"></a>

### [`009c1518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c1518.md) → [`009c156c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c156c.md) FUN_009c156c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md) [`008b9298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9298.md) [`00a83588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83588.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.11% / 新版 98.11%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 009c152c ["INT_ADD", "register:40f0:8", ["const:9c152c:8", "const:4:8"]]
- 009c152c ["CALL", null, ["callee:008b92e8:8"]]
+ 009c1580 ["INT_ADD", "register:40f0:8", ["const:9c1580:8", "const:4:8"]]
+ 009c1580 ["CALL", null, ["callee:008b92e8:8"]]
- 009c1534 ["INT_ADD", "register:40f0:8", ["const:9c1534:8", "const:4:8"]]
- 009c1534 ["CALL", null, ["callee:00851550:8"]]
+ 009c1588 ["INT_ADD", "register:40f0:8", ["const:9c1588:8", "const:4:8"]]
+ 009c1588 ["CALL", null, ["callee:00851550:8"]]
- 009c157c ["INT_ADD", "register:40f0:8", ["const:9c157c:8", "const:4:8"]]
- 009c157c ["CALL", null, ["callee:00851550:8"]]
+ 009c15d0 ["INT_ADD", "register:40f0:8", ["const:9c15d0:8", "const:4:8"]]
+ 009c15d0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-710006908ca505f95ccfd539f7257552"></a>

### [`009c1614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c1614.md) → [`009c1668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1668.md) FUN_009c1668

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009be404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be404.md) · 呼出先 13件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`00864160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864160.md)
- 新版 呼出元 1件 [`009be458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be458.md) · 呼出先 13件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`008641b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/008641b8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 36.36% / 新版 36.36%

優先判定に残った影響 `call_argument_candidate` 19件, `unresolved_branch_alignment` 62件, `unresolved_call_alignment` 70件, `unresolved_store_alignment` 127件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009c174c",
      "incomplete_value": false,
      "site": "009c1754",
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
    "old": {
      "definition_site": "009c16f8",
      "incomplete_value": false,
      "site": "009c1700",
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
            "const:f00:8"
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
    "new": {
      "definition_site": "009c19b8",
      "incomplete_value": false,
      "site": "009c19c0",
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
    "old": {
      "definition_site": "009c1964",
      "incomplete_value": false,
      "site": "009c196c",
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
            "const:f00:8"
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
      "definition_site": "009c1bcc",
      "incomplete_value": false,
      "site": "009c1bd0",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 45,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009c1648",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:009c164c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b3cb74"
      ]
    ],
    [
      "unmatched:009c1660",
      "DATA",
      [
        "storage",
        "00c89bb8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009c169c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "009c16a0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b3cb74"
      ]
    ],
    [
      "009c16b4",
      "DATA",
      [
        "storage",
        "00c89c88",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c1700 ["INT_ADD", "register:40f0:8", ["const:9c1700:8", "const:4:8"]]
- 009c1700 ["CALL", null, ["callee:0047e64c:8"]]
+ 009c1754 ["INT_ADD", "register:40f0:8", ["const:9c1754:8", "const:4:8"]]
+ 009c1754 ["CALL", null, ["callee:0047e64c:8"]]
+ 009c1700 ["COPY", "register:4040:8", ["const:2b6000:8"]]
- 009c1754 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009c1754 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
~~~


<a id="compare-b31c9be053a89c50da35d3a3576489bb"></a>

### [`009c2628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c2628.md) → [`009c267c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c267c.md) FUN_009c267c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009c271c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c271c.md) · 呼出先 4件 [`00672b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672b48.md) [`0067e5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e5e8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009c2770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2770.md) · 呼出先 4件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c2640",
      "incomplete_value": false,
      "site": "009c2644",
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
            "const:bb8:8"
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
      "009c2698",
      "DATA",
      [
        "storage",
        "00c89bb8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009c2698",
      "DATA",
      [
        "storage",
        "00c89c88",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c2698 ["COPY", "register:0:8", ["register:4040:8"]]
- 009c2698 ["INT_ADD", "register:40f0:8", ["const:9c2698:8", "const:4:8"]]
- 009c2698 ["CALLIND", null, ["register:0:8"]]
+ 009c26ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 009c26ec ["INT_ADD", "register:40f0:8", ["const:9c26ec:8", "const:4:8"]]
+ 009c26ec ["CALLIND", null, ["register:0:8"]]
- 009c2640 ["COPY", "tmp:0:8", ["const:bb8:8"]]
- 009c2640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c2640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c2640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c2694 ["COPY", "tmp:0:8", ["const:c88:8"]]
+ 009c2694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009c2654 ["INT_ADD", "register:40f0:8", ["const:9c2654:8", "const:4:8"]]
- 009c2654 ["CALL", null, ["callee:00c53da0:8"]]
+ 009c26a8 ["INT_ADD", "register:40f0:8", ["const:9c26a8:8", "const:4:8"]]
+ 009c26a8 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-33c49eb0035420aa11bfc4dcdb12b5cb"></a>

### [`009c2740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c2740.md) → [`009c2794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2794.md) _INIT_199

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c277c",
      "incomplete_value": true,
      "site": "009c2798",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f26:8"
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
    "old": {
      "definition_site": "009c27a0",
      "incomplete_value": true,
      "site": "009c27bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f39:8"
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
    "old": {
      "definition_site": "009c27c0",
      "incomplete_value": true,
      "site": "009c27dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dc2:8"
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
      "009c27d0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009c27f4",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009c2814",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c27d0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009c27f4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009c2814",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c2974 ["INT_ADD", "register:40f0:8", ["const:9c2974:8", "const:4:8"]]
- 009c2974 ["CALL", null, ["callee:00c57f00:8"]]
+ 009c29c8 ["INT_ADD", "register:40f0:8", ["const:9c29c8:8", "const:4:8"]]
+ 009c29c8 ["CALL", null, ["callee:00c57f00:8"]]
- 009c276c ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 009c276c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009c276c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009c276c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009c27c0 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 009c27c0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009c27c0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009c27c0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009c2774 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-6793b195f8093f765ac47a9d387553db"></a>

### [`009c2ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c2ad0.md) → [`009c2b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2b24.md) FUN_009c2b24

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 15件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

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
    "old": {
      "definition_site": "009c2b10",
      "incomplete_value": false,
      "site": "009c2b14",
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
            "const:d38:8"
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
    "old": {
      "definition_site": "009c2b2c",
      "incomplete_value": true,
      "site": "009c2b3c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7d6:8"
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
    "old": {
      "definition_site": "009c2b30",
      "incomplete_value": true,
      "site": "009c2b40",
      "value": [
        "LOAD",
        "16",
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
      "009c2b68",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009c2b80",
      "READ",
      [
        "storage",
        "002a07d6",
        null,
        "string"
      ]
    ],
    [
      "009c2b84",
      "READ",
      [
        "storage",
        "002a07e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c2b68",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009c2b80",
      "READ",
      [
        "storage",
        "002a0789",
        null,
        "string"
      ]
    ],
    [
      "009c2b84",
      "READ",
      [
        "storage",
        "002a0797",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c2b90 ["INT_ADD", "register:40f0:8", ["const:9c2b90:8", "const:4:8"]]
- 009c2b90 ["CALL", null, ["callee:0048795c:8"]]
+ 009c2be4 ["INT_ADD", "register:40f0:8", ["const:9c2be4:8", "const:4:8"]]
+ 009c2be4 ["CALL", null, ["callee:0048795c:8"]]
- 009c2b08 ["INT_ADD", "register:40f0:8", ["const:9c2b08:8", "const:4:8"]]
- 009c2b08 ["CALL", null, ["callee:00487e60:8"]]
+ 009c2b5c ["INT_ADD", "register:40f0:8", ["const:9c2b5c:8", "const:4:8"]]
+ 009c2b5c ["CALL", null, ["callee:00487e60:8"]]
- 009c2b10 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009c2b10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009c2b10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009c2b10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009c2b64 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 009c2b64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2b64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009c2b64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1f0bf9cbbdd87e092f7d4f7c06c7f6aa"></a>

### [`009c2de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c2de4.md) → [`009c2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2e38.md) FUN_009c2e38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00664a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664a8c.md) [`007279d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/007279d0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00664acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664acc.md) [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 93.07% / 新版 93.07%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009c3110",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009c326c"
      ]
    ],
    [
      "unmatched:009c315c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009c3294"
      ]
    ],
    [
      "009c31e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009c32c0"
      ]
    ]
  ],
  "added": [
    [
      "009c3110",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009c32c0"
      ]
    ],
    [
      "009c31b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009c3294"
      ]
    ],
    [
      "009c31e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009c32ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c2e2c ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 009c2e2c ["CBRANCH", null, ["local:b51:8", "tmp:0:1"]]
+ 009c2e80 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 009c2e80 ["CBRANCH", null, ["local:b53:8", "tmp:0:1"]]
- 009c2e34 ["INT_ADD", "register:40f0:8", ["const:9c2e34:8", "const:4:8"]]
- 009c2e34 ["CALL", null, ["callee:00727a28:8"]]
+ 009c2e88 ["INT_ADD", "register:40f0:8", ["const:9c2e88:8", "const:4:8"]]
+ 009c2e88 ["CALL", null, ["callee:00727a28:8"]]
- 009c2e3c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009c2e3c ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 009c2e3c ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 009c2e3c ["CBRANCH", null, ["local:b51:8", "tmp:2:1"]]
+ 009c2e90 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009c2e90 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 009c2e90 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 009c2e90 ["CBRANCH", null, ["local:b53:8", "tmp:2:1"]]
~~~


<a id="compare-651e74058a98e35012c1d62f47c6c8c9"></a>

### [`009c32f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c32f8.md) → [`009c334c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c334c.md) FUN_009c334c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) [`0099ba70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0099b/0099ba70.md) [`009a36d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a36d4.md) · 呼出先 0件 
- 新版 呼出元 3件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) [`009a3728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3728.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009c3314",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009c3394"
      ]
    ]
  ],
  "added": [
    [
      "009c3368",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009c3394"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c3300 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 009c3354 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 009c3308 ["BRANCH", null, ["local:b4:8"]]
+ 009c335c ["BRANCH", null, ["local:b3:8"]]
- 009c3314 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-ff3397426fcd4a242aed6f19bc2b1e8a"></a>

### [`009c33dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c33dc.md) → [`009c3430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3430.md) FUN_009c3430

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 59.89% / 新版 59.89%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 21件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 40件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009c3998",
      "incomplete_value": true,
      "site": "009c399c",
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
      "definition_site": "009c3944",
      "incomplete_value": true,
      "site": "009c3948",
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
    "ordinal": 92,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009c347c",
      "incomplete_value": true,
      "site": "009c3484",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009c3428",
      "incomplete_value": true,
      "site": "009c3430",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40c8:8"
              ],
              [
                "leaf",
                "const:40:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009c3420",
      "incomplete_value": true,
      "site": "009c3430",
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
                "register:40c8:8"
              ],
              [
                "leaf",
                "const:40:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009c3480",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009c3450",
      "READ",
      [
        "storage",
        "002bbb43",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009c3454",
      "READ",
      [
        "storage",
        "002bbb52",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c3480",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009c34a4",
      "READ",
      [
        "storage",
        "002bbaef",
        null,
        "string"
      ]
    ],
    [
      "009c34a8",
      "READ",
      [
        "storage",
        "002bbafe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c3430 ["INT_ADD", "register:40f0:8", ["const:9c3430:8", "const:4:8"]]
- 009c3430 ["CALL", null, ["callee:0086a930:8"]]
+ 009c3484 ["INT_ADD", "register:40f0:8", ["const:9c3484:8", "const:4:8"]]
+ 009c3484 ["CALL", null, ["callee:0086a930:8"]]
- 009c3864 ["INT_ADD", "register:40f0:8", ["const:9c3864:8", "const:4:8"]]
- 009c3864 ["CALL", null, ["callee:0048797c:8"]]
+ 009c38b8 ["INT_ADD", "register:40f0:8", ["const:9c38b8:8", "const:4:8"]]
+ 009c38b8 ["CALL", null, ["callee:0048797c:8"]]
+ 009c3864 ["COPY", "register:4008:8", ["register:4000:8"]]
~~~


<a id="compare-17fa024b3d1c89ec4a201953e0d8693b"></a>

### [`009c3a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3a10.md) → [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) FUN_009c3a64

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009c6074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c6/009c6074.md) · 呼出先 45件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005976e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005976e8.md) [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md)
- 新版 呼出元 1件 [`009c60c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c6/009c60c8.md) · 呼出先 45件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.82% / 新版 90.82%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件, `unresolved_branch_alignment` 28件, `unresolved_call_alignment` 23件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c41cc",
      "incomplete_value": true,
      "site": "009c41e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eab:8"
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
    "old": {
      "definition_site": "009c4fa4",
      "incomplete_value": true,
      "site": "009c4fb0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eab:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 212,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009c3c58",
      "incomplete_value": true,
      "site": "009c3c5c",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 12,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009c3a48",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:009c3afc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:009c3d64",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009c3dc0"
      ]
    ]
  ],
  "added": [
    [
      "009c3a9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "009c3b50",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "009c3db8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009c3dc0"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c3c5c ["INT_ADD", "register:40f0:8", ["const:9c3c5c:8", "const:4:8"]]
- 009c3c5c ["CALL", null, ["callee:00a35724:8"]]
+ 009c3cb0 ["INT_ADD", "register:40f0:8", ["const:9c3cb0:8", "const:4:8"]]
+ 009c3cb0 ["CALL", null, ["callee:00a35724:8"]]
- 009c3d54 ["INT_ADD", "register:40f0:8", ["const:9c3d54:8", "const:4:8"]]
- 009c3d54 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009c3da8 ["INT_ADD", "register:40f0:8", ["const:9c3da8:8", "const:4:8"]]
+ 009c3da8 ["CALL", null, ["callee:0043bbe4:8"]]
- 009c4238 ["INT_ADD", "register:40f0:8", ["const:9c4238:8", "const:4:8"]]
- 009c4238 ["CALL", null, ["callee:00c58120:8"]]
+ 009c428c ["INT_ADD", "register:40f0:8", ["const:9c428c:8", "const:4:8"]]
+ 009c428c ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-a9edefc794f4d9eb9aadb925991a4397"></a>

### [`009c6074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c6/009c6074.md) → [`009c60c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c6/009c60c8.md) FUN_009c60c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 1件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.57% / 新版 99.57%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "009c6ae8",
      "incomplete_value": true,
      "site": "009c6ae8",
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
                "const:e1d:8"
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
    "old": {
      "definition_site": "009c6b58",
      "incomplete_value": true,
      "site": "009c6b5c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:a10:8"
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
      "009c6b28",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ],
    [
      "009c6bac",
      "READ",
      [
        "storage",
        "002c2a10",
        null,
        null
      ]
    ],
    [
      "009c7054",
      "READ",
      [
        "storage",
        "002c2a10",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009c6b28",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "009c6bac",
      "READ",
      [
        "storage",
        "002c2a50",
        null,
        null
      ]
    ],
    [
      "009c7054",
      "READ",
      [
        "storage",
        "002c2a50",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009c60ac ["INT_ADD", "register:40f0:8", ["const:9c60ac:8", "const:4:8"]]
- 009c60ac ["CALL", null, ["callee:00727d74:8"]]
+ 009c6100 ["INT_ADD", "register:40f0:8", ["const:9c6100:8", "const:4:8"]]
+ 009c6100 ["CALL", null, ["callee:00727d74:8"]]
- 009c60c0 ["INT_ADD", "register:40f0:8", ["const:9c60c0:8", "const:4:8"]]
- 009c60c0 ["CALL", null, ["callee:0048cec4:8"]]
+ 009c6114 ["INT_ADD", "register:40f0:8", ["const:9c6114:8", "const:4:8"]]
+ 009c6114 ["CALL", null, ["callee:0048cec4:8"]]
- 009c60c8 ["INT_ADD", "register:40f0:8", ["const:9c60c8:8", "const:4:8"]]
- 009c60c8 ["CALL", null, ["callee:00851550:8"]]
+ 009c611c ["INT_ADD", "register:40f0:8", ["const:9c611c:8", "const:4:8"]]
+ 009c611c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-ee79d1ba8c8449a505298ef33bb4399f"></a>

### [`009c8ac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c8/009c8ac8.md) → [`009c8b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8b1c.md) FUN_009c8b1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009c2ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c2ad0.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009c2b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2b24.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009c8ad4",
      "incomplete_value": false,
      "site": "009c8ad8",
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
            "const:f4c:8"
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
      "009c8b28",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c8b28",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c8ad8 ["INT_ADD", "register:40f0:8", ["const:9c8ad8:8", "const:4:8"]]
- 009c8ad8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009c8b2c ["INT_ADD", "register:40f0:8", ["const:9c8b2c:8", "const:4:8"]]
+ 009c8b2c ["CALL", null, ["callee:0043b7b8:8"]]
- 009c8ad4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009c8ad4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009c8ad4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009c8ad4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009c8b28 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009c8b28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009c8b28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009c8b28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-523cd0cd96292242a5c530286aa05595"></a>

### [`009c8bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c8/009c8bb8.md) → [`009c8c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c0c.md) FUN_009c8c0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009c3a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3a10.md) [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 2件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009c8bc4",
      "incomplete_value": false,
      "site": "009c8bc8",
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
            "const:f4c:8"
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
      "009c8c18",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009c8c18",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009c8bc8 ["INT_ADD", "register:40f0:8", ["const:9c8bc8:8", "const:4:8"]]
- 009c8bc8 ["CALL", null, ["callee:00442970:8"]]
+ 009c8c1c ["INT_ADD", "register:40f0:8", ["const:9c8c1c:8", "const:4:8"]]
+ 009c8c1c ["CALL", null, ["callee:00442970:8"]]
- 009c8bc4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009c8bc4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009c8bc4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009c8bc4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009c8c18 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009c8c18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009c8c18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009c8c18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-14390d576e87bf3ddb071e1d442fe9e8"></a>

### [`009c8bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c8/009c8bcc.md) → [`009c8c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c20.md) FUN_009c8c20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009c3a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3a10.md) [`009c8bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c8/009c8bcc.md) [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) [`009c8c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c20.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009c8d20",
      "incomplete_value": false,
      "site": "009c8d28",
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
            "const:f53:8"
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
    "old": {
      "definition_site": "009c8e78",
      "incomplete_value": false,
      "site": "009c8e80",
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
            "const:de7:8"
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
    "old": {
      "definition_site": "009c8e90",
      "incomplete_value": false,
      "site": "009c8e9c",
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
            "const:ee9:8"
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
      "009c8d74",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "009c8d98",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "009c8ecc",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009c8d74",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009c8d98",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009c8ecc",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009c8d28 ["INT_ADD", "register:40f0:8", ["const:9c8d28:8", "const:4:8"]]
- 009c8d28 ["CALL", null, ["callee:00441ed4:8"]]
+ 009c8d7c ["INT_ADD", "register:40f0:8", ["const:9c8d7c:8", "const:4:8"]]
+ 009c8d7c ["CALL", null, ["callee:00441ed4:8"]]
- 009c8e80 ["INT_ADD", "register:40f0:8", ["const:9c8e80:8", "const:4:8"]]
- 009c8e80 ["CALL", null, ["callee:00441ed4:8"]]
+ 009c8ed4 ["INT_ADD", "register:40f0:8", ["const:9c8ed4:8", "const:4:8"]]
+ 009c8ed4 ["CALL", null, ["callee:00441ed4:8"]]
- 009c8e9c ["INT_ADD", "register:40f0:8", ["const:9c8e9c:8", "const:4:8"]]
- 009c8e9c ["CALL", null, ["callee:00442834:8"]]
+ 009c8ef0 ["INT_ADD", "register:40f0:8", ["const:9c8ef0:8", "const:4:8"]]
+ 009c8ef0 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-4e4f2304871b3960a9994ea198a7f36b"></a>

### [`009c93cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c93cc.md) → [`009c9420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9420.md) FUN_009c9420

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009c8bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c8/009c8bcc.md) [`009c93cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c93cc.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`009c8c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8c20.md) [`009c9420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9420.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009c951c",
      "incomplete_value": false,
      "site": "009c9524",
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
            "const:f53:8"
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
    "old": {
      "definition_site": "009c9540",
      "incomplete_value": false,
      "site": "009c954c",
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
            "const:ee9:8"
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
    "old": {
      "definition_site": "009c9674",
      "incomplete_value": false,
      "site": "009c967c",
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
            "const:de7:8"
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
      "009c9570",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "009c9594",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "009c96c8",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009c9570",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009c9594",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009c96c8",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009c9524 ["INT_ADD", "register:40f0:8", ["const:9c9524:8", "const:4:8"]]
- 009c9524 ["CALL", null, ["callee:00441ed4:8"]]
+ 009c9578 ["INT_ADD", "register:40f0:8", ["const:9c9578:8", "const:4:8"]]
+ 009c9578 ["CALL", null, ["callee:00441ed4:8"]]
- 009c954c ["INT_ADD", "register:40f0:8", ["const:9c954c:8", "const:4:8"]]
- 009c954c ["CALL", null, ["callee:00442834:8"]]
+ 009c95a0 ["INT_ADD", "register:40f0:8", ["const:9c95a0:8", "const:4:8"]]
+ 009c95a0 ["CALL", null, ["callee:00442834:8"]]
- 009c967c ["INT_ADD", "register:40f0:8", ["const:9c967c:8", "const:4:8"]]
- 009c967c ["CALL", null, ["callee:00441ed4:8"]]
+ 009c96d0 ["INT_ADD", "register:40f0:8", ["const:9c96d0:8", "const:4:8"]]
+ 009c96d0 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-47571f2a9b6bf1a77f5bddcc2dbfb6b1"></a>

### [`009ca9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca9d0.md) → [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) FUN_009caa24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009c6074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c6/009c6074.md) [`009ca9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca9d0.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`009ca9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca9d0.md) [`009cb98c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cb98c.md) [`009cbbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbbc0.md) [`009cbe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbe28.md)
- 新版 呼出元 2件 [`009c60c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c6/009c60c8.md) [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.90% / 新版 99.90%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009cb964",
      "incomplete_value": false,
      "site": "009cb968",
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
            "const:1bd:8"
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
      "009cb9b8",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009cb9b8",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009cb968 ["INT_ADD", "register:40f0:8", ["const:9cb968:8", "const:4:8"]]
- 009cb968 ["CALL", null, ["callee:00442970:8"]]
+ 009cb9bc ["INT_ADD", "register:40f0:8", ["const:9cb9bc:8", "const:4:8"]]
+ 009cb9bc ["CALL", null, ["callee:00442970:8"]]
- 009caa84 ["INT_ADD", "register:40f0:8", ["const:9caa84:8", "const:4:8"]]
- 009caa84 ["CALL", null, ["callee:009cbc14:8"]]
+ 009caad8 ["INT_ADD", "register:40f0:8", ["const:9caad8:8", "const:4:8"]]
+ 009caad8 ["CALL", null, ["callee:009cbc14:8"]]
- 009caaac ["INT_ADD", "register:40f0:8", ["const:9caaac:8", "const:4:8"]]
- 009caaac ["CALL", null, ["callee:009cbc14:8"]]
+ 009cab00 ["INT_ADD", "register:40f0:8", ["const:9cab00:8", "const:4:8"]]
+ 009cab00 ["CALL", null, ["callee:009cbc14:8"]]
~~~


<a id="compare-88e578891a151d6f279d5872341df09f"></a>

### [`009cb98c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cb98c.md) → [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) FUN_009cb9e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009ca9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca9d0.md) [`009cbe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbe28.md) · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`009cc0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc0c4.md)
- 新版 呼出元 2件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.29% / 新版 99.29%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009cbb90",
      "incomplete_value": false,
      "site": "009cbb94",
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
            "const:1bd:8"
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
      "009cbbe4",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009cbbe4",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009cbb94 ["INT_ADD", "register:40f0:8", ["const:9cbb94:8", "const:4:8"]]
- 009cbb94 ["CALL", null, ["callee:00442970:8"]]
+ 009cbbe8 ["INT_ADD", "register:40f0:8", ["const:9cbbe8:8", "const:4:8"]]
+ 009cbbe8 ["CALL", null, ["callee:00442970:8"]]
- 009cb9bc ["INT_ADD", "register:40f0:8", ["const:9cb9bc:8", "const:4:8"]]
- 009cb9bc ["CALL", null, ["callee:009cc118:8"]]
+ 009cba10 ["INT_ADD", "register:40f0:8", ["const:9cba10:8", "const:4:8"]]
+ 009cba10 ["CALL", null, ["callee:009cc118:8"]]
- 009cbb90 ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 009cbb90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009cbb90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009cbb90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009cbbe4 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 009cbbe4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009cbbe4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009cbbe4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0cea1e08d253ee4a10632b7a9803d2d5"></a>

### [`009cbbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbbc0.md) → [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md) FUN_009cbc14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009ca9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca9d0.md) [`009cbe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbe28.md) [`009cc0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc0c4.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 3件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009cbde8",
      "incomplete_value": false,
      "site": "009cbdec",
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
            "const:1bd:8"
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
      "009cbe3c",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009cbe3c",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009cbdec ["INT_ADD", "register:40f0:8", ["const:9cbdec:8", "const:4:8"]]
- 009cbdec ["CALL", null, ["callee:00442970:8"]]
+ 009cbe40 ["INT_ADD", "register:40f0:8", ["const:9cbe40:8", "const:4:8"]]
+ 009cbe40 ["CALL", null, ["callee:00442970:8"]]
- 009cbde8 ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 009cbde8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009cbde8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009cbde8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009cbe3c ["COPY", "tmp:0:8", ["const:170:8"]]
+ 009cbe3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009cbe3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009cbe3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5749e8de0e20c22d108fae198058e109"></a>

### [`009cbe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbe28.md) → [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) FUN_009cbe7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009ca9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca9d0.md) · 呼出先 4件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`009cb98c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cb98c.md) [`009cbbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbbc0.md) [`009cc0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc0c4.md)
- 新版 呼出元 1件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) · 呼出先 4件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md) [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.40% / 新版 99.40%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "009cc038",
      "incomplete_value": false,
      "site": "009cc03c",
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
            "const:1bd:8"
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
      "009cc08c",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009cc08c",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009cc03c ["INT_ADD", "register:40f0:8", ["const:9cc03c:8", "const:4:8"]]
- 009cc03c ["CALL", null, ["callee:00442970:8"]]
+ 009cc090 ["INT_ADD", "register:40f0:8", ["const:9cc090:8", "const:4:8"]]
+ 009cc090 ["CALL", null, ["callee:00442970:8"]]
- 009cbec0 ["INT_ADD", "register:40f0:8", ["const:9cbec0:8", "const:4:8"]]
- 009cbec0 ["CALL", null, ["callee:009cb9e0:8"]]
+ 009cbf14 ["INT_ADD", "register:40f0:8", ["const:9cbf14:8", "const:4:8"]]
+ 009cbf14 ["CALL", null, ["callee:009cb9e0:8"]]
- 009cbed4 ["INT_ADD", "register:40f0:8", ["const:9cbed4:8", "const:4:8"]]
- 009cbed4 ["CALL", null, ["callee:009cbc14:8"]]
+ 009cbf28 ["INT_ADD", "register:40f0:8", ["const:9cbf28:8", "const:4:8"]]
+ 009cbf28 ["CALL", null, ["callee:009cbc14:8"]]
~~~


