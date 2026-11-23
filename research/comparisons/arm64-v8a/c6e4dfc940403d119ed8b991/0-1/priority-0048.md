# v16.0.1 → v16.0.2 · 最優先の変更候補 (48)

[一覧の目次](README.md)

<a id="compare-26fb6300ee8d049343108b997fe46859"></a>

### [`008735dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/008735dc.md) → [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) FUN_00873634

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00560b08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/00560b08.md) [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00560b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560b48.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.90% / 新版 96.90%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087365c",
      "value": [
        "leaf",
        "ram:768430:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00873604",
      "value": [
        "leaf",
        "ram:7683d8:8"
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
      "site": "00873808",
      "value": [
        "leaf",
        "ram:769298:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008737b0",
      "value": [
        "leaf",
        "ram:769240:8"
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
      "0087365c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ],
    [
      "00873678",
      "DATA",
      [
        "storage",
        "003c79f8",
        null,
        "qword"
      ]
    ],
    [
      "00873688",
      "READ",
      [
        "storage",
        "002b4baa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0087365c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "00873678",
      "DATA",
      [
        "storage",
        "003c79f8",
        null,
        "dword"
      ]
    ],
    [
      "00873688",
      "READ",
      [
        "storage",
        "002b4bdb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873604 ["INT_ADD", "register:40f0:8", ["const:873604:8", "const:4:8"]]
- 00873604 ["CALL", null, ["ram:7683d8:8"]]
+ 0087365c ["INT_ADD", "register:40f0:8", ["const:87365c:8", "const:4:8"]]
+ 0087365c ["CALL", null, ["ram:768430:8"]]
- 008737b0 ["INT_ADD", "register:40f0:8", ["const:8737b0:8", "const:4:8"]]
- 008737b0 ["CALL", null, ["ram:769240:8"]]
+ 00873808 ["INT_ADD", "register:40f0:8", ["const:873808:8", "const:4:8"]]
+ 00873808 ["CALL", null, ["ram:769298:8"]]
- 00873808 ["INT_ADD", "register:40f0:8", ["const:873808:8", "const:4:8"]]
- 00873808 ["CALL", null, ["callee:00c57f80:8"]]
+ 00873860 ["INT_ADD", "register:40f0:8", ["const:873860:8", "const:4:8"]]
+ 00873860 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-18a953a177b99b637adcd21242f85219"></a>

### [`00873aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873aa8.md) → [`00873b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873b00.md) FUN_00873b00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`008735dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/008735dc.md) [`00874ad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874ad4.md) · 呼出先 9件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`0044f948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f948.md) [`00874578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874578.md) [`008745c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008745c8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 2件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) [`00874b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874b2c.md) · 呼出先 9件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`0044f988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f988.md) [`008745d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008745d0.md) [`00874620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874620.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.06% / 新版 95.06%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00873b68",
      "incomplete_value": false,
      "site": "00873b68",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873b10",
      "incomplete_value": false,
      "site": "00873b10",
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
            "const:cc0:8"
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
      "definition_site": "00873b88",
      "incomplete_value": false,
      "site": "00873b88",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873b30",
      "incomplete_value": false,
      "site": "00873b30",
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
            "const:cc0:8"
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
      "00873b68",
      "DATA",
      [
        "storage",
        "00c7fcc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00873b88",
      "DATA",
      [
        "storage",
        "00c7fcc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00873bc8",
      "READ",
      [
        "storage",
        "00c7fce0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00873b68",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ],
    [
      "00873b88",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ],
    [
      "00873bc8",
      "READ",
      [
        "storage",
        "00c7fdb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873ad4 ["INT_ADD", "register:40f0:8", ["const:873ad4:8", "const:4:8"]]
- 00873ad4 ["CALL", null, ["callee:0044f920:8"]]
+ 00873b2c ["INT_ADD", "register:40f0:8", ["const:873b2c:8", "const:4:8"]]
+ 00873b2c ["CALL", null, ["callee:0044f920:8"]]
- 00873af8 ["INT_ADD", "register:40f0:8", ["const:873af8:8", "const:4:8"]]
- 00873af8 ["CALL", null, ["callee:00c53d70:8"]]
+ 00873b50 ["INT_ADD", "register:40f0:8", ["const:873b50:8", "const:4:8"]]
+ 00873b50 ["CALL", null, ["callee:00c53d70:8"]]
- 00873b00 ["COPY", "tmp:0:8", ["const:cc0:8"]]
- 00873b00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00873b00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00873b00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00873b58 ["COPY", "tmp:0:8", ["const:d90:8"]]
+ 00873b58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00873b58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00873b58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3a84d410f5fe46a624627e517b30193a"></a>

### [`00873c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873c50.md) → [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) FUN_00873ca8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`008735dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/008735dc.md) [`008746e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008746e8.md) · 呼出先 7件 [`00874ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874ca8.md) [`00874cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874cf8.md) [`008806a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/008806a8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 2件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) · 呼出先 7件 [`00874d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d00.md) [`00874d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d50.md) [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.52% / 新版 94.52%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00873d08",
      "incomplete_value": false,
      "site": "00873d08",
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
    "old": {
      "definition_site": "00873cb0",
      "incomplete_value": false,
      "site": "00873cb0",
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
            "const:dc0:8"
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
      "definition_site": "00873d28",
      "incomplete_value": false,
      "site": "00873d28",
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
    "old": {
      "definition_site": "00873cd0",
      "incomplete_value": false,
      "site": "00873cd0",
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
            "const:dc0:8"
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
      "00873d08",
      "DATA",
      [
        "storage",
        "00c7fdc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00873d28",
      "DATA",
      [
        "storage",
        "00c7fdc0",
        null,
        "undefined *"
      ]
    ],
    [
      "00873d6c",
      "READ",
      [
        "storage",
        "00c7fde0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00873d08",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ],
    [
      "00873d28",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ],
    [
      "00873d6c",
      "READ",
      [
        "storage",
        "00c7feb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873d28 ["INT_ADD", "register:40f0:8", ["const:873d28:8", "const:4:8"]]
- 00873d28 ["CALL", null, ["callee:00c53da0:8"]]
+ 00873d80 ["INT_ADD", "register:40f0:8", ["const:873d80:8", "const:4:8"]]
+ 00873d80 ["CALL", null, ["callee:00c53da0:8"]]
- 00873c98 ["INT_ADD", "register:40f0:8", ["const:873c98:8", "const:4:8"]]
- 00873c98 ["CALL", null, ["callee:00c53d70:8"]]
+ 00873cf0 ["INT_ADD", "register:40f0:8", ["const:873cf0:8", "const:4:8"]]
+ 00873cf0 ["CALL", null, ["callee:00c53d70:8"]]
- 00873ca0 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00873ca0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00873ca0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00873ca0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00873cf8 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00873cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00873cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00873cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-82fb272cdf39db9cea68dc8ccf1a7e4d"></a>

### [`00873dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873dc8.md) → [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) FUN_00873e20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008735dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/008735dc.md) · 呼出先 7件 [`008750e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008750e0.md) [`00875130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875130.md) [`00880cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/00880cf4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) · 呼出先 7件 [`00875138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875138.md) [`00875188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875188.md) [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.52% / 新版 94.52%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00873e80",
      "incomplete_value": false,
      "site": "00873e80",
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
    "old": {
      "definition_site": "00873e28",
      "incomplete_value": false,
      "site": "00873e28",
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
            "const:e40:8"
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
      "definition_site": "00873ea0",
      "incomplete_value": false,
      "site": "00873ea0",
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
    "old": {
      "definition_site": "00873e48",
      "incomplete_value": false,
      "site": "00873e48",
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
            "const:e40:8"
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
      "00873e80",
      "DATA",
      [
        "storage",
        "00c7fe40",
        null,
        "undefined *"
      ]
    ],
    [
      "00873ea0",
      "DATA",
      [
        "storage",
        "00c7fe40",
        null,
        "undefined *"
      ]
    ],
    [
      "00873ee4",
      "READ",
      [
        "storage",
        "00c7fe60",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00873e80",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ],
    [
      "00873ea0",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ],
    [
      "00873ee4",
      "READ",
      [
        "storage",
        "00c7ff30",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873ea0 ["INT_ADD", "register:40f0:8", ["const:873ea0:8", "const:4:8"]]
- 00873ea0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00873ef8 ["INT_ADD", "register:40f0:8", ["const:873ef8:8", "const:4:8"]]
+ 00873ef8 ["CALL", null, ["callee:00c53da0:8"]]
- 00873e10 ["INT_ADD", "register:40f0:8", ["const:873e10:8", "const:4:8"]]
- 00873e10 ["CALL", null, ["callee:00c53d70:8"]]
+ 00873e68 ["INT_ADD", "register:40f0:8", ["const:873e68:8", "const:4:8"]]
+ 00873e68 ["CALL", null, ["callee:00c53d70:8"]]
- 00873e18 ["COPY", "tmp:0:8", ["const:e40:8"]]
- 00873e18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00873e18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00873e18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00873e70 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00873e70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00873e70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00873e70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c319f8cf853aaeb9203e073a1023f409"></a>

### [`00873f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873f40.md) → [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) FUN_00873f98

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`008735dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/008735dc.md) [`00874d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874d7c.md) [`008751b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008751b4.md) [`00876058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876058.md) · 呼出先 16件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00453cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00453/00453cb0.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md) [`008753dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008753dc.md)
- 新版 呼出元 4件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) [`00874dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874dd4.md) [`0087520c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/0087520c.md) [`008760b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760b0.md) · 呼出先 16件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00453cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00453/00453cf0.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00875434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875434.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_target` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00873ff4",
      "incomplete_value": true,
      "site": "00873ff4",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:dcb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873f9c",
      "incomplete_value": true,
      "site": "00873f9c",
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
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:e27:8"
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
      "definition_site": "00873ffc",
      "incomplete_value": true,
      "site": "00873ffc",
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
      "definition_site": "00873fa4",
      "incomplete_value": true,
      "site": "00873fa4",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00874040",
      "incomplete_value": true,
      "site": "00874050",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:61b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873fe8",
      "incomplete_value": true,
      "site": "00873ff8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:668:8"
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
      "00873fe8",
      "READ",
      [
        "storage",
        "002a7e27",
        null,
        "string"
      ]
    ],
    [
      "00873fec",
      "READ",
      [
        "storage",
        "002a7e2c",
        null,
        "string"
      ]
    ],
    [
      "00874040",
      "READ",
      [
        "storage",
        "002a3668",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00873fe8",
      "READ",
      [
        "storage",
        "002a7dcb",
        null,
        "string"
      ]
    ],
    [
      "00873fec",
      "READ",
      [
        "storage",
        "002a7dd0",
        null,
        "string"
      ]
    ],
    [
      "00874040",
      "READ",
      [
        "storage",
        "002a361b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008740f0 ["INT_ADD", "register:40f0:8", ["const:8740f0:8", "const:4:8"]]
- 008740f0 ["CALL", null, ["ram:764384:8"]]
+ 00874148 ["INT_ADD", "register:40f0:8", ["const:874148:8", "const:4:8"]]
+ 00874148 ["CALL", null, ["ram:7643dc:8"]]
- 008740fc ["INT_ADD", "register:40f0:8", ["const:8740fc:8", "const:4:8"]]
- 008740fc ["CALL", null, ["callee:00764f38:8"]]
+ 00874154 ["INT_ADD", "register:40f0:8", ["const:874154:8", "const:4:8"]]
+ 00874154 ["CALL", null, ["callee:00764f38:8"]]
- 00873f88 ["COPY", "tmp:0:8", ["const:e27:8"]]
- 00873f88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00873f88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00873f88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00873fe0 ["COPY", "tmp:0:8", ["const:dcb:8"]]
+ 00873fe0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00873fe0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00873fe0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9f2be55969aca64352d1af84a924e9a0"></a>

### [`0087442c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/0087442c.md) → [`00874484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874484.md) FUN_00874484

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874498",
      "incomplete_value": false,
      "site": "0087449c",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874440",
      "incomplete_value": false,
      "site": "00874444",
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
            "const:cc0:8"
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
      "0087449c",
      "DATA",
      [
        "storage",
        "00c7fcc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087449c",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874440 ["COPY", "tmp:0:8", ["const:cc0:8"]]
- 00874440 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874440 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874440 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00874498 ["COPY", "tmp:0:8", ["const:d90:8"]]
+ 00874498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00874498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00874498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874454 ["INT_ADD", "register:40f0:8", ["const:874454:8", "const:4:8"]]
- 00874454 ["CALL", null, ["callee:00c53da0:8"]]
+ 008744ac ["INT_ADD", "register:40f0:8", ["const:8744ac:8", "const:4:8"]]
+ 008744ac ["CALL", null, ["callee:00c53da0:8"]]
- 00874474 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874474 ["INT_ADD", "register:40f0:8", ["const:874474:8", "const:4:8"]]
- 00874474 ["CALLIND", null, ["register:0:8"]]
+ 008744cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008744cc ["INT_ADD", "register:40f0:8", ["const:8744cc:8", "const:4:8"]]
+ 008744cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9dce9c537f7e77aa56a188a179f8634d"></a>

### [`00874488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874488.md) → [`008744e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008744e0.md) FUN_008744e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008744f8",
      "incomplete_value": false,
      "site": "008744fc",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008744a0",
      "incomplete_value": false,
      "site": "008744a4",
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
            "const:cc0:8"
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
      "008744fc",
      "DATA",
      [
        "storage",
        "00c7fcc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008744fc",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008744a0 ["COPY", "tmp:0:8", ["const:cc0:8"]]
- 008744a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008744a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008744a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008744f8 ["COPY", "tmp:0:8", ["const:d90:8"]]
+ 008744f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008744f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008744f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008744b4 ["INT_ADD", "register:40f0:8", ["const:8744b4:8", "const:4:8"]]
- 008744b4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0087450c ["INT_ADD", "register:40f0:8", ["const:87450c:8", "const:4:8"]]
+ 0087450c ["CALL", null, ["callee:00c53da0:8"]]
- 008744c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008744c8 ["INT_ADD", "register:40f0:8", ["const:8744c8:8", "const:4:8"]]
- 008744c8 ["CALLIND", null, ["register:0:8"]]
+ 00874520 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874520 ["INT_ADD", "register:40f0:8", ["const:874520:8", "const:4:8"]]
+ 00874520 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5cf40ccf4537d950b1c430b2319c5cb5"></a>

### [`008744e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008744e4.md) → [`0087453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/0087453c.md) FUN_0087453c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874560",
      "incomplete_value": false,
      "site": "00874564",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874508",
      "incomplete_value": false,
      "site": "0087450c",
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
            "const:cc0:8"
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
      "00874564",
      "DATA",
      [
        "storage",
        "00c7fcc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874564",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008744f8 ["INT_ADD", "register:40f0:8", ["const:8744f8:8", "const:4:8"]]
- 008744f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00874550 ["INT_ADD", "register:40f0:8", ["const:874550:8", "const:4:8"]]
+ 00874550 ["CALL", null, ["callee:00c57f60:8"]]
- 00874508 ["COPY", "tmp:0:8", ["const:cc0:8"]]
- 00874508 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874508 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874508 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00874560 ["COPY", "tmp:0:8", ["const:d90:8"]]
+ 00874560 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00874560 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00874560 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00874528 ["INT_ADD", "register:40f0:8", ["const:874528:8", "const:4:8"]]
- 00874528 ["CALL", null, ["callee:00c53d70:8"]]
+ 00874580 ["INT_ADD", "register:40f0:8", ["const:874580:8", "const:4:8"]]
+ 00874580 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-9d3df060f98359767163085e3f390fcd"></a>

### [`0087453c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/0087453c.md) → [`00874594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874594.md) FUN_00874594

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087459c",
      "incomplete_value": false,
      "site": "008745a0",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874544",
      "incomplete_value": false,
      "site": "00874548",
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
            "const:cc0:8"
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
      "008745a0",
      "DATA",
      [
        "storage",
        "00c7fcc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008745a0",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874544 ["COPY", "tmp:0:8", ["const:cc0:8"]]
- 00874544 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874544 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874544 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087459c ["COPY", "tmp:0:8", ["const:d90:8"]]
+ 0087459c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087459c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087459c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087456c ["INT_ADD", "register:40f0:8", ["const:87456c:8", "const:4:8"]]
- 0087456c ["CALL", null, ["callee:00c53d70:8"]]
+ 008745c4 ["INT_ADD", "register:40f0:8", ["const:8745c4:8", "const:4:8"]]
+ 008745c4 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-25911c729d00b1fe7f5ece18b2ca2dfd"></a>

### [`008746e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008746e8.md) → [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) FUN_00874740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00874618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874618.md) · 呼出先 7件 [`00873c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873c50.md) [`00874a34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874a34.md) [`00874a84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874a84.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00874670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874670.md) · 呼出先 7件 [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) [`00874a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874a8c.md) [`00874adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874adc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008747dc",
      "incomplete_value": false,
      "site": "008747dc",
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
    "old": {
      "definition_site": "00874784",
      "incomplete_value": false,
      "site": "00874784",
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
            "const:d30:8"
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
      "definition_site": "008747f8",
      "incomplete_value": false,
      "site": "008747f8",
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
    "old": {
      "definition_site": "008747a0",
      "incomplete_value": false,
      "site": "008747a0",
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
            "const:d30:8"
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
      "008747dc",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ],
    [
      "008747f8",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ],
    [
      "00874840",
      "READ",
      [
        "storage",
        "00c7fd50",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008747dc",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ],
    [
      "008747f8",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ],
    [
      "00874840",
      "READ",
      [
        "storage",
        "00c7fe20",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087476c ["INT_ADD", "register:40f0:8", ["const:87476c:8", "const:4:8"]]
- 0087476c ["CALL", null, ["callee:00c53d70:8"]]
+ 008747c4 ["INT_ADD", "register:40f0:8", ["const:8747c4:8", "const:4:8"]]
+ 008747c4 ["CALL", null, ["callee:00c53d70:8"]]
- 00874774 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 00874774 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874774 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874774 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008747cc ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 008747cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008747cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008747cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087478c ["INT_ADD", "register:40f0:8", ["const:87478c:8", "const:4:8"]]
- 0087478c ["CALL", null, ["callee:00c53d70:8"]]
+ 008747e4 ["INT_ADD", "register:40f0:8", ["const:8747e4:8", "const:4:8"]]
+ 008747e4 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-a8db9aaffcf7e74e7f6718e1efd163c0"></a>

### [`008748e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008748e8.md) → [`00874940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874940.md) FUN_00874940

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874954",
      "incomplete_value": false,
      "site": "00874958",
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
    "old": {
      "definition_site": "008748fc",
      "incomplete_value": false,
      "site": "00874900",
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
            "const:d30:8"
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
      "00874958",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874958",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008748fc ["COPY", "tmp:0:8", ["const:d30:8"]]
- 008748fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008748fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008748fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00874954 ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 00874954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00874954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00874954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874910 ["INT_ADD", "register:40f0:8", ["const:874910:8", "const:4:8"]]
- 00874910 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874968 ["INT_ADD", "register:40f0:8", ["const:874968:8", "const:4:8"]]
+ 00874968 ["CALL", null, ["callee:00c53da0:8"]]
- 00874930 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874930 ["INT_ADD", "register:40f0:8", ["const:874930:8", "const:4:8"]]
- 00874930 ["CALLIND", null, ["register:0:8"]]
+ 00874988 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874988 ["INT_ADD", "register:40f0:8", ["const:874988:8", "const:4:8"]]
+ 00874988 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c34b7560e5c685cc4b98a9acfab7a261"></a>

### [`00874944`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874944.md) → [`0087499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/0087499c.md) FUN_0087499c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008749b4",
      "incomplete_value": false,
      "site": "008749b8",
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
    "old": {
      "definition_site": "0087495c",
      "incomplete_value": false,
      "site": "00874960",
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
            "const:d30:8"
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
      "008749b8",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008749b8",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087495c ["COPY", "tmp:0:8", ["const:d30:8"]]
- 0087495c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087495c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087495c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008749b4 ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 008749b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008749b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008749b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874970 ["INT_ADD", "register:40f0:8", ["const:874970:8", "const:4:8"]]
- 00874970 ["CALL", null, ["callee:00c53da0:8"]]
+ 008749c8 ["INT_ADD", "register:40f0:8", ["const:8749c8:8", "const:4:8"]]
+ 008749c8 ["CALL", null, ["callee:00c53da0:8"]]
- 00874984 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874984 ["INT_ADD", "register:40f0:8", ["const:874984:8", "const:4:8"]]
- 00874984 ["CALLIND", null, ["register:0:8"]]
+ 008749dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008749dc ["INT_ADD", "register:40f0:8", ["const:8749dc:8", "const:4:8"]]
+ 008749dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-62fae96c0b201373c9223b939dd321f0"></a>

### [`008749a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008749a0.md) → [`008749f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008749f8.md) FUN_008749f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008749c4",
      "incomplete_value": false,
      "site": "008749c8",
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
            "const:d30:8"
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
      "00874a20",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874a20",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008749b4 ["INT_ADD", "register:40f0:8", ["const:8749b4:8", "const:4:8"]]
- 008749b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00874a0c ["INT_ADD", "register:40f0:8", ["const:874a0c:8", "const:4:8"]]
+ 00874a0c ["CALL", null, ["callee:00c57f60:8"]]
- 008749c4 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 008749c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008749c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008749c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00874a1c ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 00874a1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00874a1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00874a1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008749e4 ["INT_ADD", "register:40f0:8", ["const:8749e4:8", "const:4:8"]]
- 008749e4 ["CALL", null, ["callee:00c53d70:8"]]
+ 00874a3c ["INT_ADD", "register:40f0:8", ["const:874a3c:8", "const:4:8"]]
+ 00874a3c ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-d5df4e043a98089503eb5c16a9ea53f1"></a>

### [`008749f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008749f8.md) → [`00874a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874a50.md) FUN_00874a50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00874a00",
      "incomplete_value": false,
      "site": "00874a04",
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
            "const:d30:8"
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
      "00874a5c",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874a5c",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874a00 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 00874a00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874a00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874a00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00874a58 ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 00874a58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00874a58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00874a58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00874a28 ["INT_ADD", "register:40f0:8", ["const:874a28:8", "const:4:8"]]
- 00874a28 ["CALL", null, ["callee:00c53d70:8"]]
+ 00874a80 ["INT_ADD", "register:40f0:8", ["const:874a80:8", "const:4:8"]]
+ 00874a80 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-832a44556da74b4f7456b0e0f0f4ef18"></a>

### [`00874b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874b5c.md) → [`00874bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874bb4.md) FUN_00874bb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00874b70",
      "incomplete_value": false,
      "site": "00874b74",
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
            "const:dc0:8"
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
      "00874bcc",
      "DATA",
      [
        "storage",
        "00c7fdc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874bcc",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874b70 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00874b70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874b70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874b70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00874bc8 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00874bc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00874bc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00874bc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874b84 ["INT_ADD", "register:40f0:8", ["const:874b84:8", "const:4:8"]]
- 00874b84 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874bdc ["INT_ADD", "register:40f0:8", ["const:874bdc:8", "const:4:8"]]
+ 00874bdc ["CALL", null, ["callee:00c53da0:8"]]
- 00874ba4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874ba4 ["INT_ADD", "register:40f0:8", ["const:874ba4:8", "const:4:8"]]
- 00874ba4 ["CALLIND", null, ["register:0:8"]]
+ 00874bfc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874bfc ["INT_ADD", "register:40f0:8", ["const:874bfc:8", "const:4:8"]]
+ 00874bfc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-17a30fca4d00f322d847a46b242c9f1f"></a>

### [`00874bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874bb8.md) → [`00874c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874c10.md) FUN_00874c10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00874bd0",
      "incomplete_value": false,
      "site": "00874bd4",
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
            "const:dc0:8"
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
      "00874c2c",
      "DATA",
      [
        "storage",
        "00c7fdc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874c2c",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874bd0 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00874bd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874bd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874bd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00874c28 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00874c28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00874c28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00874c28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874be4 ["INT_ADD", "register:40f0:8", ["const:874be4:8", "const:4:8"]]
- 00874be4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874c3c ["INT_ADD", "register:40f0:8", ["const:874c3c:8", "const:4:8"]]
+ 00874c3c ["CALL", null, ["callee:00c53da0:8"]]
- 00874bf8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874bf8 ["INT_ADD", "register:40f0:8", ["const:874bf8:8", "const:4:8"]]
- 00874bf8 ["CALLIND", null, ["register:0:8"]]
+ 00874c50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874c50 ["INT_ADD", "register:40f0:8", ["const:874c50:8", "const:4:8"]]
+ 00874c50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9fbd5e3b2c38f8c5e691c26ba1430a57"></a>

### [`00874c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874c14.md) → [`00874c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874c6c.md) FUN_00874c6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00874c38",
      "incomplete_value": false,
      "site": "00874c3c",
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
            "const:dc0:8"
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
      "00874c94",
      "DATA",
      [
        "storage",
        "00c7fdc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874c94",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874c28 ["INT_ADD", "register:40f0:8", ["const:874c28:8", "const:4:8"]]
- 00874c28 ["CALL", null, ["callee:00c57f60:8"]]
+ 00874c80 ["INT_ADD", "register:40f0:8", ["const:874c80:8", "const:4:8"]]
+ 00874c80 ["CALL", null, ["callee:00c57f60:8"]]
- 00874c38 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00874c38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874c38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874c38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00874c90 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00874c90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00874c90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00874c90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00874c58 ["INT_ADD", "register:40f0:8", ["const:874c58:8", "const:4:8"]]
- 00874c58 ["CALL", null, ["callee:00c53d70:8"]]
+ 00874cb0 ["INT_ADD", "register:40f0:8", ["const:874cb0:8", "const:4:8"]]
+ 00874cb0 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-11a38c197b73d66d6539b871c29503e3"></a>

### [`00874c6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874c6c.md) → [`00874cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874cc4.md) FUN_00874cc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00874c74",
      "incomplete_value": false,
      "site": "00874c78",
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
            "const:dc0:8"
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
      "00874cd0",
      "DATA",
      [
        "storage",
        "00c7fdc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874cd0",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874c74 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00874c74 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874c74 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874c74 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00874ccc ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00874ccc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00874ccc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00874ccc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00874c9c ["INT_ADD", "register:40f0:8", ["const:874c9c:8", "const:4:8"]]
- 00874c9c ["CALL", null, ["callee:00c53d70:8"]]
+ 00874cf4 ["INT_ADD", "register:40f0:8", ["const:874cf4:8", "const:4:8"]]
+ 00874cf4 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-bf038d09129bb87042161c065415aa20"></a>

### [`00874d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874d7c.md) → [`00874dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874dd4.md) FUN_00874dd4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00874d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874d48.md) · 呼出先 6件 [`00597ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ecc.md) [`00873f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873f40.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00874da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874da0.md) · 呼出先 6件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 72.28% / 新版 72.28%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00874e28",
      "incomplete_value": true,
      "site": "00874e30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874dd0",
      "incomplete_value": true,
      "site": "00874dd8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1a0:8"
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
      "definition_site": "00874e24",
      "incomplete_value": true,
      "site": "00874e34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:85f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874dcc",
      "incomplete_value": true,
      "site": "00874ddc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8ac:8"
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
      "definition_site": "00874e24",
      "incomplete_value": true,
      "site": "00874e34",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00874dcc",
      "incomplete_value": true,
      "site": "00874ddc",
      "value": [
        "LOAD",
        "16",
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
      "00874e24",
      "READ",
      [
        "storage",
        "002a48ac",
        null,
        "string"
      ]
    ],
    [
      "00874e24",
      "READ",
      [
        "storage",
        "002a48bc",
        null,
        "string"
      ]
    ],
    [
      "00874e28",
      "READ",
      [
        "storage",
        "002c31a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00874e24",
      "READ",
      [
        "storage",
        "002a485f",
        null,
        "string"
      ]
    ],
    [
      "00874e24",
      "READ",
      [
        "storage",
        "002a486f",
        null,
        "string"
      ]
    ],
    [
      "00874e28",
      "READ",
      [
        "storage",
        "002c31e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00874e10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:860:8"]]
- 00874e10 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00874e10 ["COPY", "register:5010:8", ["const:0:8"]]
- 00874e10 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00874e68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8a0:8"]]
+ 00874e68 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00874e68 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00874e68 ["COPY", "register:5018:8", ["const:0:8"]]
- 00874e88 ["INT_ADD", "register:40f0:8", ["const:874e88:8", "const:4:8"]]
- 00874e88 ["CALL", null, ["callee:00597f0c:8"]]
+ 00874ee0 ["INT_ADD", "register:40f0:8", ["const:874ee0:8", "const:4:8"]]
+ 00874ee0 ["CALL", null, ["callee:00597f0c:8"]]
- 00874eb4 ["INT_ADD", "register:40f0:8", ["const:874eb4:8", "const:4:8"]]
- 00874eb4 ["CALL", null, ["callee:00a1a6f8:8"]]
+ 00874f0c ["INT_ADD", "register:40f0:8", ["const:874f0c:8", "const:4:8"]]
+ 00874f0c ["CALL", null, ["callee:00a1a6f8:8"]]
~~~


<a id="compare-0d951127f19cfd3178da5ab80e22ea13"></a>

### [`00874f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874f94.md) → [`00874fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874fec.md) FUN_00874fec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00874fa8",
      "incomplete_value": false,
      "site": "00874fac",
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
            "const:e40:8"
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
      "00875004",
      "DATA",
      [
        "storage",
        "00c7fe40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875004",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874fa8 ["COPY", "tmp:0:8", ["const:e40:8"]]
- 00874fa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874fa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874fa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875000 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00875000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874fbc ["INT_ADD", "register:40f0:8", ["const:874fbc:8", "const:4:8"]]
- 00874fbc ["CALL", null, ["callee:00c53da0:8"]]
+ 00875014 ["INT_ADD", "register:40f0:8", ["const:875014:8", "const:4:8"]]
+ 00875014 ["CALL", null, ["callee:00c53da0:8"]]
- 00874fdc ["COPY", "register:0:8", ["register:4040:8"]]
- 00874fdc ["INT_ADD", "register:40f0:8", ["const:874fdc:8", "const:4:8"]]
- 00874fdc ["CALLIND", null, ["register:0:8"]]
+ 00875034 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875034 ["INT_ADD", "register:40f0:8", ["const:875034:8", "const:4:8"]]
+ 00875034 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f1b96c0ce5b793d28d4084bf5491974f"></a>

### [`00874ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874ff0.md) → [`00875048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875048.md) FUN_00875048

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00875060",
      "incomplete_value": false,
      "site": "00875064",
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
    "old": {
      "definition_site": "00875008",
      "incomplete_value": false,
      "site": "0087500c",
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
            "const:e40:8"
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
      "00875064",
      "DATA",
      [
        "storage",
        "00c7fe40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875064",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875008 ["COPY", "tmp:0:8", ["const:e40:8"]]
- 00875008 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875008 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875008 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875060 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00875060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087501c ["INT_ADD", "register:40f0:8", ["const:87501c:8", "const:4:8"]]
- 0087501c ["CALL", null, ["callee:00c53da0:8"]]
+ 00875074 ["INT_ADD", "register:40f0:8", ["const:875074:8", "const:4:8"]]
+ 00875074 ["CALL", null, ["callee:00c53da0:8"]]
- 00875030 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875030 ["INT_ADD", "register:40f0:8", ["const:875030:8", "const:4:8"]]
- 00875030 ["CALLIND", null, ["register:0:8"]]
+ 00875088 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875088 ["INT_ADD", "register:40f0:8", ["const:875088:8", "const:4:8"]]
+ 00875088 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b25eb61ea72bcef300fd679d50c5eb6b"></a>

### [`0087504c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/0087504c.md) → [`008750a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/008750a4.md) FUN_008750a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008750c8",
      "incomplete_value": false,
      "site": "008750cc",
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
    "old": {
      "definition_site": "00875070",
      "incomplete_value": false,
      "site": "00875074",
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
            "const:e40:8"
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
      "008750cc",
      "DATA",
      [
        "storage",
        "00c7fe40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008750cc",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875060 ["INT_ADD", "register:40f0:8", ["const:875060:8", "const:4:8"]]
- 00875060 ["CALL", null, ["callee:00c57f60:8"]]
+ 008750b8 ["INT_ADD", "register:40f0:8", ["const:8750b8:8", "const:4:8"]]
+ 008750b8 ["CALL", null, ["callee:00c57f60:8"]]
- 00875070 ["COPY", "tmp:0:8", ["const:e40:8"]]
- 00875070 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875070 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875070 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008750c8 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 008750c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008750c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008750c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00875090 ["INT_ADD", "register:40f0:8", ["const:875090:8", "const:4:8"]]
- 00875090 ["CALL", null, ["callee:00c53d70:8"]]
+ 008750e8 ["INT_ADD", "register:40f0:8", ["const:8750e8:8", "const:4:8"]]
+ 008750e8 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-b56ae8fa6c190d84b891199b4ef6a4d6"></a>

### [`008750a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008750a4.md) → [`008750fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/008750fc.md) FUN_008750fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008750ac",
      "incomplete_value": false,
      "site": "008750b0",
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
            "const:e40:8"
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
      "00875108",
      "DATA",
      [
        "storage",
        "00c7fe40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875108",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008750ac ["COPY", "tmp:0:8", ["const:e40:8"]]
- 008750ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008750ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008750ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875104 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00875104 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875104 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875104 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008750d4 ["INT_ADD", "register:40f0:8", ["const:8750d4:8", "const:4:8"]]
- 008750d4 ["CALL", null, ["callee:00c53d70:8"]]
+ 0087512c ["INT_ADD", "register:40f0:8", ["const:87512c:8", "const:4:8"]]
+ 0087512c ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-b927a28ff1a36d33e2fee777f22f91f8"></a>

### [`008751b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008751b4.md) → [`0087520c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/0087520c.md) FUN_0087520c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00875180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875180.md) · 呼出先 6件 [`00597ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ecc.md) [`00873f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873f40.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008751d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/008751d8.md) · 呼出先 6件 [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 69.35% / 新版 69.35%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00875208",
      "incomplete_value": true,
      "site": "00875210",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f70:8"
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
    "old": {
      "definition_site": "00875204",
      "incomplete_value": true,
      "site": "00875214",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:63a:8"
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
    "old": {
      "definition_site": "00875204",
      "incomplete_value": true,
      "site": "00875214",
      "value": [
        "LOAD",
        "16",
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
      "0087525c",
      "READ",
      [
        "storage",
        "002a363a",
        null,
        "string"
      ]
    ],
    [
      "0087525c",
      "READ",
      [
        "storage",
        "002a364a",
        null,
        "string"
      ]
    ],
    [
      "00875260",
      "READ",
      [
        "storage",
        "002c2f70",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0087525c",
      "READ",
      [
        "storage",
        "002a35ed",
        null,
        "string"
      ]
    ],
    [
      "0087525c",
      "READ",
      [
        "storage",
        "002a35fd",
        null,
        "string"
      ]
    ],
    [
      "00875260",
      "READ",
      [
        "storage",
        "002c2fb0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0087526c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:570:8"]]
- 0087526c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 0087526c ["COPY", "register:5010:8", ["const:0:8"]]
- 0087526c ["COPY", "register:5018:8", ["const:0:8"]]
+ 008752c4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:5b0:8"]]
+ 008752c4 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 008752c4 ["COPY", "register:5010:8", ["const:0:8"]]
+ 008752c4 ["COPY", "register:5018:8", ["const:0:8"]]
- 00875288 ["INT_ADD", "register:40f0:8", ["const:875288:8", "const:4:8"]]
- 00875288 ["CALL", null, ["callee:00597f0c:8"]]
+ 008752e0 ["INT_ADD", "register:40f0:8", ["const:8752e0:8", "const:4:8"]]
+ 008752e0 ["CALL", null, ["callee:00597f0c:8"]]
- 008752c0 ["INT_ADD", "register:40f0:8", ["const:8752c0:8", "const:4:8"]]
- 008752c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00875318 ["INT_ADD", "register:40f0:8", ["const:875318:8", "const:4:8"]]
+ 00875318 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f6e417afbe83fabd86d8ad5582f7bb7b"></a>

### [`008759c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008759c0.md) → [`00875a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875a18.md) FUN_00875a18

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
    "old": {
      "definition_site": "008759e4",
      "incomplete_value": false,
      "site": "008759e4",
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
            "const:ec0:8"
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
      "00875a3c",
      "DATA",
      [
        "storage",
        "00c7fec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875a3c",
      "DATA",
      [
        "storage",
        "00c7ff90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008759d4 ["INT_ADD", "register:40f0:8", ["const:8759d4:8", "const:4:8"]]
- 008759d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00875a2c ["INT_ADD", "register:40f0:8", ["const:875a2c:8", "const:4:8"]]
+ 00875a2c ["CALL", null, ["callee:00c57f60:8"]]
- 008759e0 ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 008759e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008759e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008759e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875a38 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 00875a38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875a38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875a38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dd888458dfb751d19842b98bfdce6307"></a>

### [`008759f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008759f4.md) → [`00875a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875a4c.md) FUN_00875a4c

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
      "definition_site": "00875a58",
      "incomplete_value": false,
      "site": "00875a58",
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
    "old": {
      "definition_site": "00875a00",
      "incomplete_value": false,
      "site": "00875a00",
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
            "const:ec0:8"
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
      "00875a58",
      "DATA",
      [
        "storage",
        "00c7fec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875a58",
      "DATA",
      [
        "storage",
        "00c7ff90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008759fc ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 008759fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008759fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008759fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875a54 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 00875a54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875a54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875a54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b62d6a5d88269c8ea1d64d506e78e28f"></a>

### [`00875a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875a58.md) → [`00875ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875ab0.md) FUN_00875ab0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00875a6c",
      "incomplete_value": false,
      "site": "00875a70",
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
            "const:f40:8"
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
      "00875ac8",
      "DATA",
      [
        "storage",
        "00c7ff40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875ac8",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875a68 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875ac0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00875a6c ["COPY", "tmp:0:8", ["const:f40:8"]]
- 00875a6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875a6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875a6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875ac4 ["COPY", "tmp:0:8", ["const:10:8"]]
+ 00875ac4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875ac4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875ac4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875a80 ["INT_ADD", "register:40f0:8", ["const:875a80:8", "const:4:8"]]
- 00875a80 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875ad8 ["INT_ADD", "register:40f0:8", ["const:875ad8:8", "const:4:8"]]
+ 00875ad8 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-9946139febe03d039e12905a87a38fde"></a>

### [`00875ab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875ab4.md) → [`00875b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875b0c.md) FUN_00875b0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00875acc",
      "incomplete_value": false,
      "site": "00875ad0",
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
            "const:f40:8"
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
      "00875b28",
      "DATA",
      [
        "storage",
        "00c7ff40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875b28",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875ac8 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875b20 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00875acc ["COPY", "tmp:0:8", ["const:f40:8"]]
- 00875acc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875acc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875acc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875b24 ["COPY", "tmp:0:8", ["const:10:8"]]
+ 00875b24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875b24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875b24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875ae0 ["INT_ADD", "register:40f0:8", ["const:875ae0:8", "const:4:8"]]
- 00875ae0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875b38 ["INT_ADD", "register:40f0:8", ["const:875b38:8", "const:4:8"]]
+ 00875b38 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-397381134cd028265aca3ffb3e2d9bd0"></a>

### [`00875b10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875b10.md) → [`00875b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875b68.md) FUN_00875b68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00875b34",
      "incomplete_value": false,
      "site": "00875b38",
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
            "const:f40:8"
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
      "00875b90",
      "DATA",
      [
        "storage",
        "00c7ff40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875b90",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875b24 ["INT_ADD", "register:40f0:8", ["const:875b24:8", "const:4:8"]]
- 00875b24 ["CALL", null, ["callee:00c57f60:8"]]
+ 00875b7c ["INT_ADD", "register:40f0:8", ["const:875b7c:8", "const:4:8"]]
+ 00875b7c ["CALL", null, ["callee:00c57f60:8"]]
- 00875b30 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875b88 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00875b34 ["COPY", "tmp:0:8", ["const:f40:8"]]
- 00875b34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875b34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875b34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875b8c ["COPY", "tmp:0:8", ["const:10:8"]]
+ 00875b8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875b8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875b8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-820bf5ed60dd6e243358cb8d0fde116a"></a>

### [`00875b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875b68.md) → [`00875bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875bc0.md) FUN_00875bc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00875b70",
      "incomplete_value": false,
      "site": "00875b74",
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
            "const:f40:8"
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
      "00875bcc",
      "DATA",
      [
        "storage",
        "00c7ff40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875bcc",
      "DATA",
      [
        "storage",
        "00c80010",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875b6c ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875bc4 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00875b70 ["COPY", "tmp:0:8", ["const:f40:8"]]
- 00875b70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875b70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875b70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875bc8 ["COPY", "tmp:0:8", ["const:10:8"]]
+ 00875bc8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875bc8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875bc8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00875b98 ["INT_ADD", "register:40f0:8", ["const:875b98:8", "const:4:8"]]
- 00875b98 ["CALL", null, ["callee:00c53d70:8"]]
+ 00875bf0 ["INT_ADD", "register:40f0:8", ["const:875bf0:8", "const:4:8"]]
+ 00875bf0 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-12ee11661e869a372959cb85c1f0c9f1"></a>

### [`00875c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875c78.md) → [`00875cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875cd0.md) FUN_00875cd0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00875c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875c44.md) · 呼出先 6件 [`00875fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875fb8.md) [`00876008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876008.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00875c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875c9c.md) · 呼出先 6件 [`00876010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876010.md) [`00876060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876060.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00875d60",
      "incomplete_value": false,
      "site": "00875d60",
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
    "old": {
      "definition_site": "00875d08",
      "incomplete_value": false,
      "site": "00875d08",
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
            "const:fb0:8"
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
      "definition_site": "00875d7c",
      "incomplete_value": false,
      "site": "00875d7c",
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
    "old": {
      "definition_site": "00875d24",
      "incomplete_value": false,
      "site": "00875d24",
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
            "const:fb0:8"
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
      "00875d10",
      "DATA",
      [
        "storage",
        "003c7780",
        null,
        "qword"
      ]
    ],
    [
      "00875d60",
      "DATA",
      [
        "storage",
        "00c7ffb0",
        null,
        "undefined *"
      ]
    ],
    [
      "00875d7c",
      "DATA",
      [
        "storage",
        "00c7ffb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875d10",
      "DATA",
      [
        "storage",
        "003c7780",
        null,
        "dword"
      ]
    ],
    [
      "00875d60",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ],
    [
      "00875d7c",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875cd0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875cd0 ["INT_ADD", "register:40f0:8", ["const:875cd0:8", "const:4:8"]]
- 00875cd0 ["CALLIND", null, ["register:0:8"]]
+ 00875d28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875d28 ["INT_ADD", "register:40f0:8", ["const:875d28:8", "const:4:8"]]
+ 00875d28 ["CALLIND", null, ["register:0:8"]]
- 00875cf0 ["INT_ADD", "register:40f0:8", ["const:875cf0:8", "const:4:8"]]
- 00875cf0 ["CALL", null, ["callee:00c53d70:8"]]
+ 00875d48 ["INT_ADD", "register:40f0:8", ["const:875d48:8", "const:4:8"]]
+ 00875d48 ["CALL", null, ["callee:00c53d70:8"]]
- 00875cf4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875d4c ["COPY", "register:4040:8", ["const:c80000:8"]]
~~~


<a id="compare-d9914b11b19f87e4ecf2a391a2e2158b"></a>

### [`00875e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875e6c.md) → [`00875ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875ec4.md) FUN_00875ec4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00875e80",
      "incomplete_value": false,
      "site": "00875e84",
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
            "const:fb0:8"
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
      "00875edc",
      "DATA",
      [
        "storage",
        "00c7ffb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875edc",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875e7c ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875ed4 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00875e80 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 00875e80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875e80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875e80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875ed8 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 00875ed8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875ed8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875ed8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875e94 ["INT_ADD", "register:40f0:8", ["const:875e94:8", "const:4:8"]]
- 00875e94 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875eec ["INT_ADD", "register:40f0:8", ["const:875eec:8", "const:4:8"]]
+ 00875eec ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-fae7f8b27c347638ed862aaa4b6339f2"></a>

### [`00875ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875ec8.md) → [`00875f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875f20.md) FUN_00875f20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00875f38",
      "incomplete_value": false,
      "site": "00875f3c",
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
    "old": {
      "definition_site": "00875ee0",
      "incomplete_value": false,
      "site": "00875ee4",
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
            "const:fb0:8"
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
      "00875f3c",
      "DATA",
      [
        "storage",
        "00c7ffb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875f3c",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875edc ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875f34 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00875ee0 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 00875ee0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00875ee0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00875ee0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875f38 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 00875f38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875f38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875f38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00875ef4 ["INT_ADD", "register:40f0:8", ["const:875ef4:8", "const:4:8"]]
- 00875ef4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875f4c ["INT_ADD", "register:40f0:8", ["const:875f4c:8", "const:4:8"]]
+ 00875f4c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-6f7ddff1990b25677d6d60eab8ac9930"></a>

### [`00875f24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875f24.md) → [`00875f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875f7c.md) FUN_00875f7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00875f48",
      "incomplete_value": false,
      "site": "00875f4c",
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
            "const:fb0:8"
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
      "00875fa4",
      "DATA",
      [
        "storage",
        "00c7ffb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875fa4",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875f38 ["INT_ADD", "register:40f0:8", ["const:875f38:8", "const:4:8"]]
- 00875f38 ["CALL", null, ["callee:00c57f60:8"]]
+ 00875f90 ["INT_ADD", "register:40f0:8", ["const:875f90:8", "const:4:8"]]
+ 00875f90 ["CALL", null, ["callee:00c57f60:8"]]
- 00875f44 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875f9c ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00875f48 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 00875f48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875f48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875f48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875fa0 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 00875fa0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875fa0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875fa0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c7a40aedede0af42169ffa37800d3443"></a>

### [`00875f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875f7c.md) → [`00875fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875fd4.md) FUN_00875fd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00875fdc",
      "incomplete_value": false,
      "site": "00875fe0",
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
    "old": {
      "definition_site": "00875f84",
      "incomplete_value": false,
      "site": "00875f88",
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
            "const:fb0:8"
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
      "00875fe0",
      "DATA",
      [
        "storage",
        "00c7ffb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875fe0",
      "DATA",
      [
        "storage",
        "00c80080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00875f80 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875fd8 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00875f84 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 00875f84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00875f84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00875f84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875fdc ["COPY", "tmp:0:8", ["const:80:8"]]
+ 00875fdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875fdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875fdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00875fac ["INT_ADD", "register:40f0:8", ["const:875fac:8", "const:4:8"]]
- 00875fac ["CALL", null, ["callee:00c53d70:8"]]
+ 00876004 ["INT_ADD", "register:40f0:8", ["const:876004:8", "const:4:8"]]
+ 00876004 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-f741b5927cb4f499ae473b3af06a3387"></a>

### [`008760e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008760e0.md) → [`00876138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876138.md) FUN_00876138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008760e4",
      "incomplete_value": false,
      "site": "008760e8",
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
            "const:40:8"
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
      "00876140",
      "DATA",
      [
        "storage",
        "00c80040",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00876140",
      "DATA",
      [
        "storage",
        "00c80110",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008760e4 ["COPY", "tmp:0:8", ["const:40:8"]]
- 008760e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008760e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008760e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087613c ["COPY", "tmp:0:8", ["const:110:8"]]
+ 0087613c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087613c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087613c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e1f8bb9c2e283cf7e969514f3913cfc0"></a>

### [`008760f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008760f0.md) → [`00876148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876148.md) FUN_00876148

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00876100",
      "incomplete_value": false,
      "site": "00876108",
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
            "const:40:8"
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
      "00876160",
      "DATA",
      [
        "storage",
        "00c80040",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00876160",
      "DATA",
      [
        "storage",
        "00c80110",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876100 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00876100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00876100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00876100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00876158 ["COPY", "tmp:0:8", ["const:110:8"]]
+ 00876158 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00876158 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00876158 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087610c ["INT_ADD", "register:40f0:8", ["const:87610c:8", "const:4:8"]]
- 0087610c ["CALL", null, ["callee:00c57f70:8"]]
+ 00876164 ["INT_ADD", "register:40f0:8", ["const:876164:8", "const:4:8"]]
+ 00876164 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-8c13c7ee71f5c34d919902dbf5752018"></a>

### [`00876130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876130.md) → [`00876188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876188.md) FUN_00876188

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) [`008766f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008766f4.md) · 呼出先 12件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00597ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 2件 [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`0087674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/0087674c.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.76% / 新版 86.76%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008761cc",
      "incomplete_value": false,
      "site": "008761cc",
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
    "old": {
      "definition_site": "00876174",
      "incomplete_value": false,
      "site": "00876174",
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
            "const:90:8"
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
    "old": {
      "definition_site": "008761dc",
      "incomplete_value": true,
      "site": "008761dc",
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
                "const:99a:8"
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
    "old": {
      "definition_site": "008761f4",
      "incomplete_value": true,
      "site": "008761f4",
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
                "const:2c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008761cc",
      "DATA",
      [
        "storage",
        "00c80090",
        null,
        "undefined *"
      ]
    ],
    [
      "008761ec",
      "PARAM",
      [
        "storage",
        "002ef75a",
        null,
        "string"
      ]
    ],
    [
      "00876200",
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
      "008761cc",
      "DATA",
      [
        "storage",
        "00c80160",
        null,
        "undefined *"
      ]
    ],
    [
      "008761ec",
      "PARAM",
      [
        "storage",
        "002ef79a",
        null,
        "string"
      ]
    ],
    [
      "00876200",
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
- 0087619c ["INT_ADD", "register:40f0:8", ["const:87619c:8", "const:4:8"]]
- 0087619c ["CALL", null, ["callee:00c58260:8"]]
+ 008761f4 ["INT_ADD", "register:40f0:8", ["const:8761f4:8", "const:4:8"]]
+ 008761f4 ["CALL", null, ["callee:00c58260:8"]]
- 008761a0 ["COPY", "register:40d0:8", ["const:ca4000:8"]]
+ 008761f8 ["COPY", "register:40d0:8", ["const:ca5000:8"]]
- 00876218 ["INT_ADD", "register:40f0:8", ["const:876218:8", "const:4:8"]]
- 00876218 ["CALL", null, ["callee:0047e64c:8"]]
+ 00876270 ["INT_ADD", "register:40f0:8", ["const:876270:8", "const:4:8"]]
+ 00876270 ["CALL", null, ["callee:0047e64c:8"]]
~~~


<a id="compare-c236df44f6b5c695ef1a46424d52d2c6"></a>

### [`0087652c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/0087652c.md) → [`00876584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876584.md) FUN_00876584

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00876544",
      "incomplete_value": false,
      "site": "00876548",
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
            "const:90:8"
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
      "008765a0",
      "DATA",
      [
        "storage",
        "00c80090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008765a0",
      "DATA",
      [
        "storage",
        "00c80160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008765a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008765a0 ["INT_ADD", "register:40f0:8", ["const:8765a0:8", "const:4:8"]]
- 008765a0 ["CALLIND", null, ["register:0:8"]]
+ 008765f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008765f8 ["INT_ADD", "register:40f0:8", ["const:8765f8:8", "const:4:8"]]
+ 008765f8 ["CALLIND", null, ["register:0:8"]]
- 00876544 ["COPY", "tmp:0:8", ["const:90:8"]]
- 00876544 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00876544 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00876544 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087659c ["COPY", "tmp:0:8", ["const:160:8"]]
+ 0087659c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087659c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087659c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00876554 ["INT_ADD", "register:40f0:8", ["const:876554:8", "const:4:8"]]
- 00876554 ["CALL", null, ["callee:00c57f80:8"]]
+ 008765ac ["INT_ADD", "register:40f0:8", ["const:8765ac:8", "const:4:8"]]
+ 008765ac ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0cbdd956c0aa9c4808cbff5e8590a47c"></a>

### [`008765d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008765d8.md) → [`00876630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876630.md) FUN_00876630

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008765f0",
      "incomplete_value": false,
      "site": "008765f4",
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
            "const:90:8"
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
      "0087664c",
      "DATA",
      [
        "storage",
        "00c80090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087664c",
      "DATA",
      [
        "storage",
        "00c80160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008765f0 ["COPY", "tmp:0:8", ["const:90:8"]]
- 008765f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008765f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008765f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876648 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 00876648 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876648 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876648 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00876600 ["INT_ADD", "register:40f0:8", ["const:876600:8", "const:4:8"]]
- 00876600 ["CALL", null, ["callee:00c57f80:8"]]
+ 00876658 ["INT_ADD", "register:40f0:8", ["const:876658:8", "const:4:8"]]
+ 00876658 ["CALL", null, ["callee:00c57f80:8"]]
- 00876614 ["INT_ADD", "register:40f0:8", ["const:876614:8", "const:4:8"]]
- 00876614 ["CALL", null, ["callee:00c53da0:8"]]
+ 0087666c ["INT_ADD", "register:40f0:8", ["const:87666c:8", "const:4:8"]]
+ 0087666c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-b75b4390e4946651b5894aa9f98c9074"></a>

### [`008766a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008766a4.md) → [`008766fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008766fc.md) FUN_008766fc

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
    "old": {
      "definition_site": "008766c8",
      "incomplete_value": false,
      "site": "008766c8",
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
            "const:f0:8"
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
      "00876720",
      "DATA",
      [
        "storage",
        "00c800f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876720",
      "DATA",
      [
        "storage",
        "00c801c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008766b8 ["INT_ADD", "register:40f0:8", ["const:8766b8:8", "const:4:8"]]
- 008766b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00876710 ["INT_ADD", "register:40f0:8", ["const:876710:8", "const:4:8"]]
+ 00876710 ["CALL", null, ["callee:00c57f60:8"]]
- 008766c4 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 008766c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008766c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008766c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087671c ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 0087671c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087671c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087671c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-77297092eb45708ed7ee02f04b3e0f4d"></a>

### [`008766d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008766d8.md) → [`00876730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876730.md) FUN_00876730

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
    "old": {
      "definition_site": "008766e4",
      "incomplete_value": false,
      "site": "008766e4",
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
            "const:f0:8"
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
      "0087673c",
      "DATA",
      [
        "storage",
        "00c800f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087673c",
      "DATA",
      [
        "storage",
        "00c801c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008766e0 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 008766e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008766e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008766e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876738 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00876738 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876738 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876738 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-54427108dcecbb9045d5fe9403939e07"></a>

### [`008766f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008766f4.md) → [`0087674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/0087674c.md) FUN_0087674c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`004953d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00495/004953d4.md) [`00873088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873088.md) [`00873098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873098.md) [`00876120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876120.md) [`00876130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876130.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00495414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00495/00495414.md) [`008730e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730e0.md) [`008730f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730f0.md) [`00876178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876178.md) [`00876188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876188.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.99% / 新版 96.99%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "008767a0",
      "incomplete_value": false,
      "site": "008767ac",
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
            "const:c10:8"
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
    "old": {
      "definition_site": "00876818",
      "incomplete_value": false,
      "site": "00876824",
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
            "const:40:8"
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
      "00876804",
      "DATA",
      [
        "storage",
        "00c7fc10",
        null,
        "pointer"
      ]
    ],
    [
      "00876850",
      "READ",
      [
        "storage",
        "00c7fc20",
        null,
        "undefined *"
      ]
    ],
    [
      "0087687c",
      "DATA",
      [
        "storage",
        "00c80040",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00876804",
      "DATA",
      [
        "storage",
        "00c7fce0",
        null,
        "pointer"
      ]
    ],
    [
      "00876850",
      "READ",
      [
        "storage",
        "00c7fcf0",
        null,
        "undefined *"
      ]
    ],
    [
      "0087687c",
      "DATA",
      [
        "storage",
        "00c80110",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876754 ["INT_ADD", "register:40f0:8", ["const:876754:8", "const:4:8"]]
- 00876754 ["CALL", null, ["callee:00c53d70:8"]]
+ 008767ac ["INT_ADD", "register:40f0:8", ["const:8767ac:8", "const:4:8"]]
+ 008767ac ["CALL", null, ["callee:00c53d70:8"]]
- 008767cc ["INT_ADD", "register:40f0:8", ["const:8767cc:8", "const:4:8"]]
- 008767cc ["CALL", null, ["callee:00c53d70:8"]]
+ 00876824 ["INT_ADD", "register:40f0:8", ["const:876824:8", "const:4:8"]]
+ 00876824 ["CALL", null, ["callee:00c53d70:8"]]
- 00876804 ["INT_ADD", "register:40f0:8", ["const:876804:8", "const:4:8"]]
- 00876804 ["CALL", null, ["callee:00c57f50:8"]]
+ 0087685c ["INT_ADD", "register:40f0:8", ["const:87685c:8", "const:4:8"]]
+ 0087685c ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-1c1d097120198b01739b51c2e006009b"></a>

### [`008769c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008769c0.md) → [`00876a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876a18.md) FUN_00876a18

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
    "old": {
      "definition_site": "008769e4",
      "incomplete_value": false,
      "site": "008769e4",
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
            "const:170:8"
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
      "00876a3c",
      "DATA",
      [
        "storage",
        "00c80170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876a3c",
      "DATA",
      [
        "storage",
        "00c80240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008769d4 ["INT_ADD", "register:40f0:8", ["const:8769d4:8", "const:4:8"]]
- 008769d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00876a2c ["INT_ADD", "register:40f0:8", ["const:876a2c:8", "const:4:8"]]
+ 00876a2c ["CALL", null, ["callee:00c57f60:8"]]
- 008769e0 ["COPY", "tmp:0:8", ["const:170:8"]]
- 008769e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008769e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008769e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00876a38 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 00876a38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00876a38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00876a38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f529757f8c426bac61373b67bad16365"></a>

### [`008769f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008769f4.md) → [`00876a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876a4c.md) FUN_00876a4c

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
    "old": {
      "definition_site": "00876a00",
      "incomplete_value": false,
      "site": "00876a00",
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
            "const:170:8"
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
      "00876a58",
      "DATA",
      [
        "storage",
        "00c80170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00876a58",
      "DATA",
      [
        "storage",
        "00c80240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008769fc ["COPY", "tmp:0:8", ["const:170:8"]]
- 008769fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008769fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008769fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876a54 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 00876a54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876a54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876a54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7b7af867803569079255b36b997d2dd7"></a>

### [`00876a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876a10.md) → [`00876a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876a68.md) FUN_00876a68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0044f390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f390.md) [`0044f43c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f43c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0044f3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f3d0.md) [`0044f47c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f47c.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)

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
      "site": "00876ab0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00876a58",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "00876b24",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00876acc",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "00876ab0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00876b24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00876ab0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00876b24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876a58 ["INT_ADD", "register:40f0:8", ["const:876a58:8", "const:4:8"]]
- 00876a58 ["CALL", null, ["ram:47acf4:8"]]
+ 00876ab0 ["INT_ADD", "register:40f0:8", ["const:876ab0:8", "const:4:8"]]
+ 00876ab0 ["CALL", null, ["ram:47ad34:8"]]
- 00876acc ["INT_ADD", "register:40f0:8", ["const:876acc:8", "const:4:8"]]
- 00876acc ["CALL", null, ["ram:48ccf8:8"]]
+ 00876b24 ["INT_ADD", "register:40f0:8", ["const:876b24:8", "const:4:8"]]
+ 00876b24 ["CALL", null, ["ram:48cd38:8"]]
- 00876a54 ["INT_ADD", "register:40f0:8", ["const:876a54:8", "const:4:8"]]
- 00876a54 ["CALL", null, ["callee:008b91d0:8"]]
+ 00876aac ["INT_ADD", "register:40f0:8", ["const:876aac:8", "const:4:8"]]
+ 00876aac ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-5cb79e977af949c9e70df1120a15658d"></a>

### [`00876b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876b74.md) → [`00876bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876bcc.md) _INIT_157

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00876bb0",
      "incomplete_value": true,
      "site": "00876bcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "00876bd4",
      "incomplete_value": true,
      "site": "00876bf0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "00876bf4",
      "incomplete_value": true,
      "site": "00876c10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00876c08",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00876c2c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00876c4c",
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
      "00876c08",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00876c2c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00876c4c",
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
- 00876c48 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00876c48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00876c48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00876c48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876ca0 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00876ca0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876ca0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876ca0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00876c68 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00876c68 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00876c68 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00876c68 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00876cc0 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00876cc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00876cc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00876cc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00876cd4 ["INT_ADD", "register:40f0:8", ["const:876cd4:8", "const:4:8"]]
- 00876cd4 ["CALL", null, ["callee:0043b838:8"]]
+ 00876d2c ["INT_ADD", "register:40f0:8", ["const:876d2c:8", "const:4:8"]]
+ 00876d2c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-173bdb91a1b5a67002b4db8d5f58ade6"></a>

### [`00876f04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876f04.md) → [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) FUN_00876f5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00872a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872a10.md) · 呼出先 26件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`004440e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/004440e0.md) [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md)
- 新版 呼出元 1件 [`00872a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a68.md) · 呼出先 26件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 91.40% / 新版 91.40%

優先判定に残った影響 `call_target` 9件, `store_destination` 2件, `store_value` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00876f80",
      "incomplete_value": true,
      "site": "00876f90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:889:8"
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
    "old": {
      "definition_site": "00876f84",
      "incomplete_value": true,
      "site": "00876f94",
      "value": [
        "LOAD",
        "16",
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
    "old": {
      "definition_site": "00876f88",
      "incomplete_value": true,
      "site": "00876f98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a00:8"
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
      "00876fbc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00876fd8",
      "READ",
      [
        "storage",
        "002b7889",
        null,
        "string"
      ]
    ],
    [
      "00876fdc",
      "READ",
      [
        "storage",
        "002b7898",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00876fbc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00876fd8",
      "READ",
      [
        "storage",
        "002b78c9",
        null,
        "string"
      ]
    ],
    [
      "00876fdc",
      "READ",
      [
        "storage",
        "002b78d8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00876f64 ["INT_ADD", "register:40f0:8", ["const:876f64:8", "const:4:8"]]
- 00876f64 ["CALL", null, ["ram:48ccf8:8"]]
+ 00876fbc ["INT_ADD", "register:40f0:8", ["const:876fbc:8", "const:4:8"]]
+ 00876fbc ["CALL", null, ["ram:48cd38:8"]]
- 00876f70 ["INT_ADD", "register:40f0:8", ["const:876f70:8", "const:4:8"]]
- 00876f70 ["CALL", null, ["callee:00c57f60:8"]]
+ 00876fc8 ["INT_ADD", "register:40f0:8", ["const:876fc8:8", "const:4:8"]]
+ 00876fc8 ["CALL", null, ["callee:00c57f60:8"]]
- 008770f8 ["INT_ADD", "register:40f0:8", ["const:8770f8:8", "const:4:8"]]
- 008770f8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00877150 ["INT_ADD", "register:40f0:8", ["const:877150:8", "const:4:8"]]
+ 00877150 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-a21a526b6f8bf19f9dd4c04462ccb281"></a>

### [`00877a70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877a70.md) → [`00877ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ac8.md) FUN_00877ac8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 13件 [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`00597e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e48.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) [`00877d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877d50.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`00877da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877da8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.90% / 新版 98.90%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00877b80",
      "incomplete_value": false,
      "site": "00877b8c",
      "value": [
        "leaf",
        "const:877da8:8"
      ]
    },
    "old": {
      "definition_site": "00877b28",
      "incomplete_value": false,
      "site": "00877b34",
      "value": [
        "leaf",
        "const:877d50:8"
      ]
    },
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00877bcc",
      "incomplete_value": false,
      "site": "00877bd0",
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
            "const:f27:8"
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
      "00877b80",
      "PARAM",
      [
        "storage",
        "00877d50",
        null,
        null
      ]
    ],
    [
      "00877c24",
      "PARAM",
      [
        "storage",
        "002a3f27",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00877b80",
      "PARAM",
      [
        "storage",
        "00877da8",
        null,
        null
      ]
    ],
    [
      "00877c24",
      "PARAM",
      [
        "storage",
        "002a3eda",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00877b34 ["INT_ADD", "register:40f0:8", ["const:877b34:8", "const:4:8"]]
- 00877b34 ["CALL", null, ["callee:00c581e0:8"]]
+ 00877b8c ["INT_ADD", "register:40f0:8", ["const:877b8c:8", "const:4:8"]]
+ 00877b8c ["CALL", null, ["callee:00c581e0:8"]]
- 00877bd0 ["INT_ADD", "register:40f0:8", ["const:877bd0:8", "const:4:8"]]
- 00877bd0 ["CALL", null, ["callee:00c581f0:8"]]
+ 00877c28 ["INT_ADD", "register:40f0:8", ["const:877c28:8", "const:4:8"]]
+ 00877c28 ["CALL", null, ["callee:00c581f0:8"]]
- 00877ac8 ["INT_ADD", "register:40f0:8", ["const:877ac8:8", "const:4:8"]]
- 00877ac8 ["CALL", null, ["callee:00597e88:8"]]
+ 00877b20 ["INT_ADD", "register:40f0:8", ["const:877b20:8", "const:4:8"]]
+ 00877b20 ["CALL", null, ["callee:00597e88:8"]]
~~~


<a id="compare-4dacc5d1c1c954505d3a351b73480b8a"></a>

### [`00877e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877e98.md) → [`00877ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ef0.md) _INIT_158

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00877f2c",
      "incomplete_value": true,
      "site": "00877f48",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00877ed4",
      "incomplete_value": true,
      "site": "00877ef0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00877f50",
      "incomplete_value": true,
      "site": "00877f6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00877ef8",
      "incomplete_value": true,
      "site": "00877f14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00877f70",
      "incomplete_value": true,
      "site": "00877f8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00877f18",
      "incomplete_value": true,
      "site": "00877f34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00877f2c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00877f50",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00877f70",
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
      "00877f2c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00877f50",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00877f70",
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
- 00877f6c ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00877f6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00877f6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00877f6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00877fc4 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00877fc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00877fc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00877fc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00877f8c ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00877f8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00877f8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00877f8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00877fe4 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00877fe4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00877fe4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00877fe4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008780cc ["INT_ADD", "register:40f0:8", ["const:8780cc:8", "const:4:8"]]
- 008780cc ["CALL", null, ["callee:00c57f00:8"]]
+ 00878124 ["INT_ADD", "register:40f0:8", ["const:878124:8", "const:4:8"]]
+ 00878124 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-5a4f18252c72c8c339cd665dff3e9bbf"></a>

### [`008783f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/008783f0.md) → [`00878448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878448.md) FUN_00878448

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 19件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`006eecac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ee/006eecac.md) [`006ff640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff640.md) [`0070d3b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070d/0070d3b8.md) [`0075b9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075b/0075b9c4.md) · 呼出先 6件 [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`00878758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878758.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 19件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006eed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ee/006eed04.md) [`006ff698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff698.md) [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) · 呼出先 6件 [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call, call_count, call_target, constant, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 91.76% / 新版 91.76%

優先判定に残った影響 `call_target` 2件, `store_value` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00878508",
      "incomplete_value": false,
      "site": "00878508",
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
    "old": {
      "definition_site": "008784b0",
      "incomplete_value": false,
      "site": "008784b0",
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
            "const:27:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00878578",
      "incomplete_value": false,
      "site": "00878578",
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
    "old": {
      "definition_site": "00878520",
      "incomplete_value": false,
      "site": "00878520",
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
            "const:223:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008785e8",
      "incomplete_value": false,
      "site": "008785e8",
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
    "old": {
      "definition_site": "00878590",
      "incomplete_value": false,
      "site": "00878590",
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
            "const:1aa:8"
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
      "00878508",
      "DATA",
      [
        "storage",
        "002b0027",
        null,
        null
      ]
    ],
    [
      "00878550",
      "DATA",
      [
        "storage",
        "002b0027",
        null,
        null
      ]
    ],
    [
      "unmatched:00878508",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5a900"
      ]
    ]
  ],
  "added": [
    [
      "00878508",
      "DATA",
      [
        "storage",
        "002affcb",
        null,
        null
      ]
    ],
    [
      "00878550",
      "DATA",
      [
        "storage",
        "002affcb",
        null,
        null
      ]
    ],
    [
      "00878560",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5a900"
      ]
    ]
  ]
}
~~~


~~~diff
- 008784c8 ["INT_ADD", "register:40f0:8", ["const:8784c8:8", "const:4:8"]]
- 008784c8 ["CALL", null, ["callee:00c5a900:8"]]
+ 00878520 ["INT_ADD", "register:40f0:8", ["const:878520:8", "const:4:8"]]
+ 00878520 ["CALL", null, ["callee:00c5a900:8"]]
- 00878508 ["INT_ADD", "register:40f0:8", ["const:878508:8", "const:4:8"]]
- 00878508 ["CALL", null, ["callee:00c5a900:8"]]
- 00878510 ["INT_ADD", "register:40f0:8", ["const:878510:8", "const:4:8"]]
- 00878510 ["CALL", null, ["ram:71bed8:8"]]
+ 00878568 ["INT_ADD", "register:40f0:8", ["const:878568:8", "const:4:8"]]
+ 00878568 ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-6696d13ec346fb1a78146770903bbb5d"></a>

### [`00878758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878758.md) → [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) FUN_008787b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`008783f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/008783f0.md) [`00878bec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878bec.md) [`00878ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878ed8.md) [`00878ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878ef0.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) · 呼出先 11件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`00b3c8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c8dc.md)
- 新版 呼出元 5件 [`00878448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878448.md) [`00878c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878c44.md) [`00878f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f30.md) [`00878f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f48.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) · 呼出先 11件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00b3c978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c978.md)

変更の種類 call, call_target, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 92.67% / 新版 92.67%

優先判定に残った影響 `call_target` 1件, `store_value` 6件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00878848",
      "incomplete_value": false,
      "site": "00878848",
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
    "old": {
      "definition_site": "008787f0",
      "incomplete_value": false,
      "site": "008787f0",
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
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008788b0",
      "incomplete_value": false,
      "site": "008788b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:6cf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00878858",
      "incomplete_value": false,
      "site": "00878858",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:723:8"
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
      "definition_site": "00878914",
      "incomplete_value": false,
      "site": "00878914",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008788bc",
      "incomplete_value": false,
      "site": "008788bc",
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
            "const:2c:8"
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
      "00878848",
      "DATA",
      [
        "storage",
        "002b3000",
        null,
        null
      ]
    ],
    [
      "0087886c",
      "DATA",
      [
        "storage",
        "002b3000",
        null,
        null
      ]
    ],
    [
      "0087889c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00878848",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ],
    [
      "0087886c",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ],
    [
      "0087889c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00878844 ["INT_ADD", "register:40f0:8", ["const:878844:8", "const:4:8"]]
- 00878844 ["CALL", null, ["ram:48ccf8:8"]]
+ 0087889c ["INT_ADD", "register:40f0:8", ["const:87889c:8", "const:4:8"]]
+ 0087889c ["CALL", null, ["ram:48cd38:8"]]
- 00878848 ["INT_ADD", "register:40f0:8", ["const:878848:8", "const:4:8"]]
- 00878848 ["CALL", null, ["callee:0048cec4:8"]]
+ 008788a0 ["INT_ADD", "register:40f0:8", ["const:8788a0:8", "const:4:8"]]
+ 008788a0 ["CALL", null, ["callee:0048cec4:8"]]
- 008788b0 ["COPY", "register:4040:8", ["const:2b0000:8"]]
+ 00878908 ["COPY", "register:4040:8", ["const:2af000:8"]]
~~~


<a id="compare-bd27e5db4f89ae76055f477412ab81b5"></a>

### [`00878bec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878bec.md) → [`00878c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878c44.md) FUN_00878c44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00611e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00611/00611e60.md) [`00696e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696e24.md) [`00720090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00720/00720090.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) · 呼出先 6件 [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`00878758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878758.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 5件 [`00611ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00611/00611ea0.md) [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 6件 [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.20% / 新版 90.20%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00878c9c",
      "incomplete_value": false,
      "site": "00878c9c",
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
            "const:27:8"
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
    "old": {
      "definition_site": "00878d10",
      "incomplete_value": false,
      "site": "00878d10",
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
            "const:223:8"
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
    "old": {
      "definition_site": "00878d80",
      "incomplete_value": false,
      "site": "00878d80",
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
            "const:1aa:8"
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
      "00878cf4",
      "DATA",
      [
        "storage",
        "002b0027",
        null,
        null
      ]
    ],
    [
      "00878d3c",
      "DATA",
      [
        "storage",
        "002b0027",
        null,
        null
      ]
    ],
    [
      "00878d54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "00878cf4",
      "DATA",
      [
        "storage",
        "002affcb",
        null,
        null
      ]
    ],
    [
      "00878d3c",
      "DATA",
      [
        "storage",
        "002affcb",
        null,
        null
      ]
    ],
    [
      "00878d54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ]
  ]
}
~~~


~~~diff
- 00878cf4 ["INT_ADD", "register:40f0:8", ["const:878cf4:8", "const:4:8"]]
- 00878cf4 ["CALL", null, ["callee:00c5a900:8"]]
+ 00878d4c ["INT_ADD", "register:40f0:8", ["const:878d4c:8", "const:4:8"]]
+ 00878d4c ["CALL", null, ["callee:00c5a900:8"]]
- 00878cfc ["INT_ADD", "register:40f0:8", ["const:878cfc:8", "const:4:8"]]
- 00878cfc ["CALL", null, ["ram:71bed8:8"]]
+ 00878d54 ["INT_ADD", "register:40f0:8", ["const:878d54:8", "const:4:8"]]
+ 00878d54 ["CALL", null, ["ram:71bf30:8"]]
- 00878d28 ["INT_ADD", "register:40f0:8", ["const:878d28:8", "const:4:8"]]
- 00878d28 ["CALL", null, ["callee:00c5a900:8"]]
+ 00878d80 ["INT_ADD", "register:40f0:8", ["const:878d80:8", "const:4:8"]]
+ 00878d80 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-197707cccb87d306486525e0c005bd31"></a>

### [`00878f08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878f08.md) → [`00878f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f60.md) FUN_00878f60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0075d75c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075d/0075d75c.md) · 呼出先 11件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`00b3c8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c8dc.md)
- 新版 呼出元 1件 [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 11件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00b3c978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c978.md)

変更の種類 call, call_argument_candidate, call_target, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 92.66% / 新版 92.66%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 4件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00878f90",
      "incomplete_value": false,
      "site": "00878f90",
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
            "const:0:8"
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
      "definition_site": "00879050",
      "incomplete_value": false,
      "site": "00879050",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:6cf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00878ff8",
      "incomplete_value": false,
      "site": "00878ff8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bd000:8"
          ],
          [
            "leaf",
            "const:723:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008790b4",
      "incomplete_value": false,
      "site": "008790b4",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087905c",
      "incomplete_value": false,
      "site": "0087905c",
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
            "const:2c:8"
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
      "00878fe8",
      "DATA",
      [
        "storage",
        "002b3000",
        null,
        null
      ]
    ],
    [
      "0087900c",
      "DATA",
      [
        "storage",
        "002b3000",
        null,
        null
      ]
    ],
    [
      "0087903c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00878fe8",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ],
    [
      "0087900c",
      "DATA",
      [
        "storage",
        "002b3031",
        null,
        null
      ]
    ],
    [
      "0087903c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00878fe4 ["INT_ADD", "register:40f0:8", ["const:878fe4:8", "const:4:8"]]
- 00878fe4 ["CALL", null, ["ram:48ccf8:8"]]
+ 0087903c ["INT_ADD", "register:40f0:8", ["const:87903c:8", "const:4:8"]]
+ 0087903c ["CALL", null, ["ram:48cd38:8"]]
- 00878fe8 ["INT_ADD", "register:40f0:8", ["const:878fe8:8", "const:4:8"]]
- 00878fe8 ["CALL", null, ["callee:0048cec4:8"]]
+ 00879040 ["INT_ADD", "register:40f0:8", ["const:879040:8", "const:4:8"]]
+ 00879040 ["CALL", null, ["callee:0048cec4:8"]]
- 00879050 ["COPY", "register:4040:8", ["const:2b0000:8"]]
+ 008790a8 ["COPY", "register:4040:8", ["const:2af000:8"]]
~~~


<a id="compare-236b82acd4e5e283b148e9c978963dca"></a>

### [`008792b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/008792b4.md) → [`0087930c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087930c.md) _INIT_159

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087936c",
      "incomplete_value": true,
      "site": "00879388",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00879314",
      "incomplete_value": true,
      "site": "00879330",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087938c",
      "incomplete_value": true,
      "site": "008793a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00879334",
      "incomplete_value": true,
      "site": "00879350",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008793ac",
      "incomplete_value": true,
      "site": "008793c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "00879354",
      "incomplete_value": true,
      "site": "0087936c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f62:8"
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
      "00879348",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0087936c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0087938c",
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
      "00879348",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0087936c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0087938c",
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
- 00879388 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00879388 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00879388 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00879388 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008793e0 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 008793e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008793e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008793e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008793a8 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 008793a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008793a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008793a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00879400 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00879400 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00879400 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00879400 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008794e8 ["INT_ADD", "register:40f0:8", ["const:8794e8:8", "const:4:8"]]
- 008794e8 ["CALL", null, ["callee:00c57f00:8"]]
+ 00879540 ["INT_ADD", "register:40f0:8", ["const:879540:8", "const:4:8"]]
+ 00879540 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-59a7f52f2ecc4805d821e5020ed66066"></a>

### [`00879644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879644.md) → [`0087969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087969c.md) FUN_0087969c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0087bc44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bc44.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00493998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493998.md) [`005626f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00562/005626f4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0087bc9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc9c.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md) [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "008796d0",
      "incomplete_value": false,
      "site": "008796d8",
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
            "const:5e0:8"
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
      "008796d8",
      "PARAM",
      [
        "storage",
        "011235f8",
        null,
        "undefined2"
      ]
    ],
    [
      "00879728",
      "PARAM",
      [
        "storage",
        "011235e0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008796d8",
      "PARAM",
      [
        "storage",
        "011236f8",
        null,
        "undefined2"
      ]
    ],
    [
      "00879728",
      "PARAM",
      [
        "storage",
        "011236e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00879680 ["COPY", "tmp:0:8", ["const:5f8:8"]]
- 00879680 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00879680 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00879680 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 008796d8 ["COPY", "tmp:0:8", ["const:6f8:8"]]
+ 008796d8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 008796d8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 008796d8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 008796d8 ["INT_ADD", "register:40f0:8", ["const:8796d8:8", "const:4:8"]]
- 008796d8 ["CALL", null, ["callee:004939d8:8"]]
+ 00879730 ["INT_ADD", "register:40f0:8", ["const:879730:8", "const:4:8"]]
+ 00879730 ["CALL", null, ["callee:004939d8:8"]]
- 0087968c ["INT_ADD", "register:40f0:8", ["const:87968c:8", "const:4:8"]]
- 0087968c ["CALL", null, ["callee:00562734:8"]]
+ 008796e4 ["INT_ADD", "register:40f0:8", ["const:8796e4:8", "const:4:8"]]
+ 008796e4 ["CALL", null, ["callee:00562734:8"]]
~~~


<a id="compare-c4c162e693b5d7f83fcb1cd90d05e85c"></a>

### [`008797b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/008797b4.md) → [`0087980c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087980c.md) _INIT_160

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 75.24% / 新版 75.24%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 7件, `store_value` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00879848",
      "incomplete_value": true,
      "site": "00879864",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008797f0",
      "incomplete_value": true,
      "site": "0087980c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087986c",
      "incomplete_value": true,
      "site": "00879888",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00879814",
      "incomplete_value": true,
      "site": "00879830",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087988c",
      "incomplete_value": true,
      "site": "008798a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00879834",
      "incomplete_value": true,
      "site": "00879850",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00879848",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0087986c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0087988c",
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
      "00879848",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0087986c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0087988c",
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
- 00879888 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00879888 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00879888 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00879888 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008798e0 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 008798e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008798e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008798e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008798a8 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 008798a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008798a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008798a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00879900 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00879900 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00879900 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00879900 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00879914 ["INT_ADD", "register:40f0:8", ["const:879914:8", "const:4:8"]]
- 00879914 ["CALL", null, ["callee:0043b838:8"]]
+ 0087996c ["INT_ADD", "register:40f0:8", ["const:87996c:8", "const:4:8"]]
+ 0087996c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-6f966dbeb18559143bdbe2e2651789fc"></a>

### [`00879d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879d88.md) → [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md) FUN_00879de0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b18d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b18d0.md) · 呼出先 10件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0087a308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a308.md) [`0087b3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b3bc.md) [`0087bbc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bbc4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`005b1910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1910.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`0087bc1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc1c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.44% / 新版 95.44%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00879e10",
      "incomplete_value": true,
      "site": "00879e1c",
      "value": [
        "LOAD",
        "16",
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
    "old": {
      "definition_site": "00879e0c",
      "incomplete_value": true,
      "site": "00879e20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c6b:8"
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
    "old": {
      "definition_site": "00879e0c",
      "incomplete_value": true,
      "site": "00879e20",
      "value": [
        "LOAD",
        "16",
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
      "00879e64",
      "READ",
      [
        "storage",
        "002a6c6b",
        null,
        null
      ]
    ],
    [
      "00879e64",
      "READ",
      [
        "storage",
        "002a6c7b",
        null,
        null
      ]
    ],
    [
      "00879e68",
      "READ",
      [
        "storage",
        "002a6c8b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00879e64",
      "READ",
      [
        "storage",
        "002a6c0f",
        null,
        null
      ]
    ],
    [
      "00879e64",
      "READ",
      [
        "storage",
        "002a6c1f",
        null,
        null
      ]
    ],
    [
      "00879e68",
      "READ",
      [
        "storage",
        "002a6c2f",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00879dec ["COPY", "register:0:8", ["register:4040:8"]]
- 00879dec ["INT_ADD", "register:40f0:8", ["const:879dec:8", "const:4:8"]]
- 00879dec ["CALLIND", null, ["register:0:8"]]
+ 00879e44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00879e44 ["INT_ADD", "register:40f0:8", ["const:879e44:8", "const:4:8"]]
+ 00879e44 ["CALLIND", null, ["register:0:8"]]
- 00879dfc ["INT_ADD", "register:40f0:8", ["const:879dfc:8", "const:4:8"]]
- 00879dfc ["CALL", null, ["callee:00c57f60:8"]]
+ 00879e54 ["INT_ADD", "register:40f0:8", ["const:879e54:8", "const:4:8"]]
+ 00879e54 ["CALL", null, ["callee:00c57f60:8"]]
- 00879e04 ["COPY", "tmp:0:8", ["const:c6b:8"]]
- 00879e04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00879e04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00879e04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00879e5c ["COPY", "tmp:0:8", ["const:c0f:8"]]
+ 00879e5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00879e5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00879e5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c597c525c36562b52ddb43929353ed70"></a>

### [`0087aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087aa10.md) → [`0087aa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087aa68.md) FUN_0087aa68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0087a748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a748.md) [`00b34ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34ea4.md) · 呼出先 7件 [`0087b448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b448.md) [`0087bfa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bfa0.md) [`0087c178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c178.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) [`00b34f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f40.md) · 呼出先 7件 [`0087b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b4a0.md) [`0087bff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bff8.md) [`0087c1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c1d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "0087aad8",
      "incomplete_value": false,
      "site": "0087aad8",
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
            "const:388:8"
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
      "definition_site": "0087aad0",
      "incomplete_value": false,
      "site": "0087aae8",
      "value": [
        "leaf",
        "const:87bff8:8"
      ]
    },
    "old": {
      "definition_site": "0087aa78",
      "incomplete_value": false,
      "site": "0087aa90",
      "value": [
        "leaf",
        "const:87bfa0:8"
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
      "0087aad0",
      "PARAM",
      [
        "storage",
        "0087bfa0",
        null,
        null
      ]
    ],
    [
      "0087ab30",
      "DATA",
      [
        "storage",
        "00c80388",
        null,
        "undefined *"
      ]
    ],
    [
      "0087abb0",
      "READ",
      [
        "storage",
        "00c803b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087aad0",
      "PARAM",
      [
        "storage",
        "0087bff8",
        null,
        null
      ]
    ],
    [
      "0087ab30",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ],
    [
      "0087abb0",
      "READ",
      [
        "storage",
        "00c80480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087aa90 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087aa90 ["INT_ADD", "register:40f0:8", ["const:87aa90:8", "const:4:8"]]
- 0087aa90 ["CALLIND", null, ["register:0:8"]]
+ 0087aae8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087aae8 ["INT_ADD", "register:40f0:8", ["const:87aae8:8", "const:4:8"]]
+ 0087aae8 ["CALLIND", null, ["register:0:8"]]
- 0087ab30 ["INT_ADD", "register:40f0:8", ["const:87ab30:8", "const:4:8"]]
- 0087ab30 ["CALL", null, ["callee:0087b4a0:8"]]
+ 0087ab88 ["INT_ADD", "register:40f0:8", ["const:87ab88:8", "const:4:8"]]
+ 0087ab88 ["CALL", null, ["callee:0087b4a0:8"]]
- 0087aa50 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087aa50 ["INT_ADD", "register:40f0:8", ["const:87aa50:8", "const:4:8"]]
- 0087aa50 ["CALLIND", null, ["register:0:8"]]
+ 0087aaa8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087aaa8 ["INT_ADD", "register:40f0:8", ["const:87aaa8:8", "const:4:8"]]
+ 0087aaa8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ca3af2ceed025be1aec2b38c0781d29a"></a>

### [`0087b0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b0f0.md) → [`0087b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b148.md) FUN_0087b148

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087ac58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087ac58.md) · 呼出先 7件 [`0087b448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b448.md) [`0087c608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c608.md) [`0087c7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c7e0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0087acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087acb0.md) · 呼出先 7件 [`0087b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b4a0.md) [`0087c660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c660.md) [`0087c838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c838.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "0087b1b8",
      "incomplete_value": false,
      "site": "0087b1b8",
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
            "const:498:8"
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
      "definition_site": "0087b1b0",
      "incomplete_value": false,
      "site": "0087b1c8",
      "value": [
        "leaf",
        "const:87c660:8"
      ]
    },
    "old": {
      "definition_site": "0087b158",
      "incomplete_value": false,
      "site": "0087b170",
      "value": [
        "leaf",
        "const:87c608:8"
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
      "0087b1b0",
      "PARAM",
      [
        "storage",
        "0087c608",
        null,
        null
      ]
    ],
    [
      "0087b210",
      "DATA",
      [
        "storage",
        "00c80498",
        null,
        "undefined *"
      ]
    ],
    [
      "0087b290",
      "READ",
      [
        "storage",
        "00c804c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b1b0",
      "PARAM",
      [
        "storage",
        "0087c660",
        null,
        null
      ]
    ],
    [
      "0087b210",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ],
    [
      "0087b290",
      "READ",
      [
        "storage",
        "00c80590",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b170 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087b170 ["INT_ADD", "register:40f0:8", ["const:87b170:8", "const:4:8"]]
- 0087b170 ["CALLIND", null, ["register:0:8"]]
+ 0087b1c8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087b1c8 ["INT_ADD", "register:40f0:8", ["const:87b1c8:8", "const:4:8"]]
+ 0087b1c8 ["CALLIND", null, ["register:0:8"]]
- 0087b210 ["INT_ADD", "register:40f0:8", ["const:87b210:8", "const:4:8"]]
- 0087b210 ["CALL", null, ["callee:0087b4a0:8"]]
+ 0087b268 ["INT_ADD", "register:40f0:8", ["const:87b268:8", "const:4:8"]]
+ 0087b268 ["CALL", null, ["callee:0087b4a0:8"]]
- 0087b130 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087b130 ["INT_ADD", "register:40f0:8", ["const:87b130:8", "const:4:8"]]
- 0087b130 ["CALLIND", null, ["register:0:8"]]
+ 0087b188 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087b188 ["INT_ADD", "register:40f0:8", ["const:87b188:8", "const:4:8"]]
+ 0087b188 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-71b5b448bf7ea2b69b15d725f376cfa6"></a>

### [`0087b5a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b5a4.md) → [`0087b5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b5fc.md) FUN_0087b5fc

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
      "definition_site": "0087b608",
      "incomplete_value": false,
      "site": "0087b614",
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
    "old": {
      "definition_site": "0087b5b0",
      "incomplete_value": false,
      "site": "0087b5bc",
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
            "const:268:8"
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
      "0087b614",
      "DATA",
      [
        "storage",
        "00c80268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b614",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b5b0 ["COPY", "tmp:0:8", ["const:268:8"]]
- 0087b5b0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0087b5b0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0087b5b0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0087b608 ["COPY", "tmp:0:8", ["const:338:8"]]
+ 0087b608 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0087b608 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0087b608 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-a4134771cc11a88c925ce0c1186b7505"></a>

### [`0087b5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b5e8.md) → [`0087b640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b640.md) FUN_0087b640

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
    "old": {
      "definition_site": "0087b600",
      "incomplete_value": false,
      "site": "0087b60c",
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
            "const:268:8"
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
      "0087b664",
      "DATA",
      [
        "storage",
        "00c80268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b664",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b600 ["COPY", "tmp:0:8", ["const:268:8"]]
- 0087b600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087b658 ["COPY", "tmp:0:8", ["const:338:8"]]
+ 0087b658 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b658 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b658 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087b630 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b630 ["INT_ADD", "register:40f0:8", ["const:87b630:8", "const:4:8"]]
- 0087b630 ["CALLIND", null, ["register:0:8"]]
+ 0087b688 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b688 ["INT_ADD", "register:40f0:8", ["const:87b688:8", "const:4:8"]]
+ 0087b688 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-69aaf66482d72a6e9a9ac0dafeb233dc"></a>

### [`0087b644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b644.md) → [`0087b69c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b69c.md) FUN_0087b69c

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
    "old": {
      "definition_site": "0087b670",
      "incomplete_value": false,
      "site": "0087b670",
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
            "const:268:8"
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
      "0087b6c8",
      "DATA",
      [
        "storage",
        "00c80268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b6c8",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b658 ["INT_ADD", "register:40f0:8", ["const:87b658:8", "const:4:8"]]
- 0087b658 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087b6b0 ["INT_ADD", "register:40f0:8", ["const:87b6b0:8", "const:4:8"]]
+ 0087b6b0 ["CALL", null, ["callee:00c57f60:8"]]
- 0087b668 ["COPY", "tmp:0:8", ["const:268:8"]]
- 0087b668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087b6c0 ["COPY", "tmp:0:8", ["const:338:8"]]
+ 0087b6c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b6c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b6c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087b68c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b68c ["INT_ADD", "register:40f0:8", ["const:87b68c:8", "const:4:8"]]
- 0087b68c ["CALLIND", null, ["register:0:8"]]
+ 0087b6e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b6e4 ["INT_ADD", "register:40f0:8", ["const:87b6e4:8", "const:4:8"]]
+ 0087b6e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b2d3c46cb348d7a7dde217a12ef8f9c7"></a>

### [`0087b6cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b6cc.md) → [`0087b724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b724.md) FUN_0087b724

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
    "old": {
      "definition_site": "0087b6e8",
      "incomplete_value": false,
      "site": "0087b6e8",
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
            "const:268:8"
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
      "0087b740",
      "DATA",
      [
        "storage",
        "00c80268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b740",
      "DATA",
      [
        "storage",
        "00c80338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b6e4 ["COPY", "tmp:0:8", ["const:268:8"]]
- 0087b6e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087b6e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087b6e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087b73c ["COPY", "tmp:0:8", ["const:338:8"]]
+ 0087b73c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087b73c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087b73c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087b708 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087b708 ["INT_ADD", "register:40f0:8", ["const:87b708:8", "const:4:8"]]
- 0087b708 ["CALLIND", null, ["register:0:8"]]
+ 0087b760 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087b760 ["INT_ADD", "register:40f0:8", ["const:87b760:8", "const:4:8"]]
+ 0087b760 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-68a96f9b36d5e08f91511ed56ea99b1a"></a>

### [`0087b810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b810.md) → [`0087b868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b868.md) FUN_0087b868

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087b880",
      "incomplete_value": false,
      "site": "0087b890",
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
    "old": {
      "definition_site": "0087b828",
      "incomplete_value": false,
      "site": "0087b838",
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
            "const:2f8:8"
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
      "0087b890",
      "DATA",
      [
        "storage",
        "00c802f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b890",
      "DATA",
      [
        "storage",
        "00c803c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b828 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 0087b828 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b828 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b828 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087b880 ["COPY", "tmp:0:8", ["const:3c8:8"]]
+ 0087b880 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b880 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b880 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087b85c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b85c ["INT_ADD", "register:40f0:8", ["const:87b85c:8", "const:4:8"]]
- 0087b85c ["CALLIND", null, ["register:0:8"]]
+ 0087b8b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b8b4 ["INT_ADD", "register:40f0:8", ["const:87b8b4:8", "const:4:8"]]
+ 0087b8b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-11daa42d7cfbf2a82a9a7629c9191169"></a>

### [`0087b8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b8a0.md) → [`0087b8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b8f8.md) FUN_0087b8f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "0087b8b8",
      "incomplete_value": false,
      "site": "0087b8c8",
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
            "const:2f8:8"
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
      "0087b920",
      "DATA",
      [
        "storage",
        "00c802f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b920",
      "DATA",
      [
        "storage",
        "00c803c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b8b8 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 0087b8b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b8b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b8b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087b910 ["COPY", "tmp:0:8", ["const:3c8:8"]]
+ 0087b910 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b910 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b910 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087b8ec ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b8ec ["INT_ADD", "register:40f0:8", ["const:87b8ec:8", "const:4:8"]]
- 0087b8ec ["CALLIND", null, ["register:0:8"]]
+ 0087b944 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b944 ["INT_ADD", "register:40f0:8", ["const:87b944:8", "const:4:8"]]
+ 0087b944 ["CALLIND", null, ["register:0:8"]]
- 0087b918 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b918 ["INT_ADD", "register:40f0:8", ["const:87b918:8", "const:4:8"]]
- 0087b918 ["CALLIND", null, ["register:0:8"]]
+ 0087b970 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b970 ["INT_ADD", "register:40f0:8", ["const:87b970:8", "const:4:8"]]
+ 0087b970 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6248ccd69f8db45d0653377728ed6823"></a>

### [`0087b92c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b92c.md) → [`0087b984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b984.md) FUN_0087b984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087b9b4",
      "incomplete_value": false,
      "site": "0087b9b4",
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
    "old": {
      "definition_site": "0087b95c",
      "incomplete_value": false,
      "site": "0087b95c",
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
            "const:2f8:8"
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
      "0087b9b4",
      "DATA",
      [
        "storage",
        "00c802f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087b9b4",
      "DATA",
      [
        "storage",
        "00c803c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087b944 ["INT_ADD", "register:40f0:8", ["const:87b944:8", "const:4:8"]]
- 0087b944 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087b99c ["INT_ADD", "register:40f0:8", ["const:87b99c:8", "const:4:8"]]
+ 0087b99c ["CALL", null, ["callee:00c57f60:8"]]
- 0087b954 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 0087b954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087b954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087b954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087b9ac ["COPY", "tmp:0:8", ["const:3c8:8"]]
+ 0087b9ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b9ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087b9ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087b978 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b978 ["INT_ADD", "register:40f0:8", ["const:87b978:8", "const:4:8"]]
- 0087b978 ["CALLIND", null, ["register:0:8"]]
+ 0087b9d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b9d0 ["INT_ADD", "register:40f0:8", ["const:87b9d0:8", "const:4:8"]]
+ 0087b9d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-15e3e612f54a86d4abba407f37c11590"></a>

### [`0087ba3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087ba3c.md) → [`0087ba94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087ba94.md) FUN_0087ba94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087babc",
      "incomplete_value": true,
      "site": "0087babc",
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
            "const:3c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087ba64",
      "incomplete_value": true,
      "site": "0087ba64",
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
            "const:2f8:8"
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
      "0087babc",
      "DATA",
      [
        "storage",
        "00c802f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087babc",
      "DATA",
      [
        "storage",
        "00c803c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087ba5c ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 0087ba5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087ba5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087ba5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087bab4 ["COPY", "tmp:0:8", ["const:3c8:8"]]
+ 0087bab4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087bab4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087bab4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087ba80 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087ba80 ["INT_ADD", "register:40f0:8", ["const:87ba80:8", "const:4:8"]]
- 0087ba80 ["CALLIND", null, ["register:0:8"]]
+ 0087bad8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087bad8 ["INT_ADD", "register:40f0:8", ["const:87bad8:8", "const:4:8"]]
+ 0087bad8 ["CALLIND", null, ["register:0:8"]]
- 0087baa8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087baa8 ["INT_ADD", "register:40f0:8", ["const:87baa8:8", "const:4:8"]]
- 0087baa8 ["CALLIND", null, ["register:0:8"]]
+ 0087bb00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087bb00 ["INT_ADD", "register:40f0:8", ["const:87bb00:8", "const:4:8"]]
+ 0087bb00 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d9efb1fce3ffeb860dec94adf16a8473"></a>

### [`0087bc44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bc44.md) → [`0087bc9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc9c.md) FUN_0087bc9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00879644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879644.md) [`0087a748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a748.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0087969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/0087969c.md) [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "0087bcbc",
      "incomplete_value": true,
      "site": "0087bcd0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:660:8"
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
    "old": {
      "definition_site": "0087bcd4",
      "incomplete_value": true,
      "site": "0087bce4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:781:8"
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
    "old": {
      "definition_site": "0087bcd4",
      "incomplete_value": true,
      "site": "0087bce4",
      "value": [
        "LOAD",
        "16",
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
      "0087bd14",
      "READ",
      [
        "storage",
        "002c2660",
        null,
        null
      ]
    ],
    [
      "0087bd2c",
      "READ",
      [
        "storage",
        "002c1781",
        null,
        null
      ]
    ],
    [
      "0087bd2c",
      "READ",
      [
        "storage",
        "002c1791",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0087bd14",
      "READ",
      [
        "storage",
        "002c26a0",
        null,
        null
      ]
    ],
    [
      "0087bd2c",
      "READ",
      [
        "storage",
        "002c17c1",
        null,
        null
      ]
    ],
    [
      "0087bd2c",
      "READ",
      [
        "storage",
        "002c17d1",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0087bc8c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bc8c ["INT_ADD", "register:40f0:8", ["const:87bc8c:8", "const:4:8"]]
- 0087bc8c ["CALLIND", null, ["register:0:8"]]
+ 0087bce4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087bce4 ["INT_ADD", "register:40f0:8", ["const:87bce4:8", "const:4:8"]]
+ 0087bce4 ["CALLIND", null, ["register:0:8"]]
- 0087bd64 ["INT_ADD", "register:40f0:8", ["const:87bd64:8", "const:4:8"]]
- 0087bd64 ["CALL", null, ["callee:00c5ab80:8"]]
+ 0087bdbc ["INT_ADD", "register:40f0:8", ["const:87bdbc:8", "const:4:8"]]
+ 0087bdbc ["CALL", null, ["callee:00c5ab80:8"]]
- 0087bdbc ["INT_ADD", "register:40f0:8", ["const:87bdbc:8", "const:4:8"]]
- 0087bdbc ["CALL", null, ["ram:87a748:8"]]
+ 0087be14 ["INT_ADD", "register:40f0:8", ["const:87be14:8", "const:4:8"]]
+ 0087be14 ["CALL", null, ["ram:87a7a0:8"]]
~~~


<a id="compare-abc08963d852b8e3a63e468e49c43b12"></a>

### [`0087bfa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bfa4.md) → [`0087bffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bffc.md) FUN_0087bffc

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
    "old": {
      "definition_site": "0087bfb0",
      "incomplete_value": false,
      "site": "0087bfbc",
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
            "const:388:8"
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
      "0087c014",
      "DATA",
      [
        "storage",
        "00c80388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c014",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087bfb0 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0087bfb0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0087bfb0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0087bfb0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0087c008 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0087c008 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0087c008 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0087c008 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-5028bc1b28303dedd6c29a3bd9e3cb74"></a>

### [`0087bfe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bfe8.md) → [`0087c040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c040.md) FUN_0087c040

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
    "old": {
      "definition_site": "0087c000",
      "incomplete_value": false,
      "site": "0087c00c",
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
            "const:388:8"
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
      "0087c064",
      "DATA",
      [
        "storage",
        "00c80388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c064",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c000 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0087c000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c058 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0087c058 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c058 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c058 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c030 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c030 ["INT_ADD", "register:40f0:8", ["const:87c030:8", "const:4:8"]]
- 0087c030 ["CALLIND", null, ["register:0:8"]]
+ 0087c088 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c088 ["INT_ADD", "register:40f0:8", ["const:87c088:8", "const:4:8"]]
+ 0087c088 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-319554a3bf802c2684803f2164b19ea0"></a>

### [`0087c044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c044.md) → [`0087c09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c09c.md) FUN_0087c09c

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
    "old": {
      "definition_site": "0087c070",
      "incomplete_value": false,
      "site": "0087c070",
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
            "const:388:8"
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
      "0087c0c8",
      "DATA",
      [
        "storage",
        "00c80388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c0c8",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c058 ["INT_ADD", "register:40f0:8", ["const:87c058:8", "const:4:8"]]
- 0087c058 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087c0b0 ["INT_ADD", "register:40f0:8", ["const:87c0b0:8", "const:4:8"]]
+ 0087c0b0 ["CALL", null, ["callee:00c57f60:8"]]
- 0087c068 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0087c068 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c068 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c068 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c0c0 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0087c0c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c0c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c0c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c08c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c08c ["INT_ADD", "register:40f0:8", ["const:87c08c:8", "const:4:8"]]
- 0087c08c ["CALLIND", null, ["register:0:8"]]
+ 0087c0e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c0e4 ["INT_ADD", "register:40f0:8", ["const:87c0e4:8", "const:4:8"]]
+ 0087c0e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bf4d2b02f83e56ac88de0c433326e215"></a>

### [`0087c0cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c0cc.md) → [`0087c124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c124.md) FUN_0087c124

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
    "old": {
      "definition_site": "0087c0e8",
      "incomplete_value": false,
      "site": "0087c0e8",
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
            "const:388:8"
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
      "0087c140",
      "DATA",
      [
        "storage",
        "00c80388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c140",
      "DATA",
      [
        "storage",
        "00c80458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c0e4 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0087c0e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087c0e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087c0e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087c13c ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0087c13c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c13c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c13c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087c108 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087c108 ["INT_ADD", "register:40f0:8", ["const:87c108:8", "const:4:8"]]
- 0087c108 ["CALLIND", null, ["register:0:8"]]
+ 0087c160 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087c160 ["INT_ADD", "register:40f0:8", ["const:87c160:8", "const:4:8"]]
+ 0087c160 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f3b535036ee9063b91f28992eb79a816"></a>

### [`0087c210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c210.md) → [`0087c268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c268.md) FUN_0087c268

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
    "old": {
      "definition_site": "0087c21c",
      "incomplete_value": false,
      "site": "0087c228",
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
            "const:408:8"
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
      "0087c280",
      "DATA",
      [
        "storage",
        "00c80408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c280",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c21c ["COPY", "tmp:0:8", ["const:408:8"]]
- 0087c21c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0087c21c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0087c21c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0087c274 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 0087c274 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0087c274 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0087c274 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-c7d10253f50d568a79da10363096256d"></a>

### [`0087c254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c254.md) → [`0087c2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c2ac.md) FUN_0087c2ac

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
    "old": {
      "definition_site": "0087c26c",
      "incomplete_value": false,
      "site": "0087c278",
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
            "const:408:8"
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
      "0087c2d0",
      "DATA",
      [
        "storage",
        "00c80408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c2d0",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c26c ["COPY", "tmp:0:8", ["const:408:8"]]
- 0087c26c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c26c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c26c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c2c4 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 0087c2c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c2c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c2c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c29c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c29c ["INT_ADD", "register:40f0:8", ["const:87c29c:8", "const:4:8"]]
- 0087c29c ["CALLIND", null, ["register:0:8"]]
+ 0087c2f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c2f4 ["INT_ADD", "register:40f0:8", ["const:87c2f4:8", "const:4:8"]]
+ 0087c2f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c4b3c7c8858066e6c6a813a57277b698"></a>

### [`0087c2b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c2b0.md) → [`0087c308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c308.md) FUN_0087c308

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
      "definition_site": "0087c334",
      "incomplete_value": false,
      "site": "0087c334",
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
    "old": {
      "definition_site": "0087c2dc",
      "incomplete_value": false,
      "site": "0087c2dc",
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
            "const:408:8"
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
      "0087c334",
      "DATA",
      [
        "storage",
        "00c80408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c334",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c2c4 ["INT_ADD", "register:40f0:8", ["const:87c2c4:8", "const:4:8"]]
- 0087c2c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087c31c ["INT_ADD", "register:40f0:8", ["const:87c31c:8", "const:4:8"]]
+ 0087c31c ["CALL", null, ["callee:00c57f60:8"]]
- 0087c2d4 ["COPY", "tmp:0:8", ["const:408:8"]]
- 0087c2d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c2d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c2d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c32c ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 0087c32c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c32c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c32c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c2f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c2f8 ["INT_ADD", "register:40f0:8", ["const:87c2f8:8", "const:4:8"]]
- 0087c2f8 ["CALLIND", null, ["register:0:8"]]
+ 0087c350 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c350 ["INT_ADD", "register:40f0:8", ["const:87c350:8", "const:4:8"]]
+ 0087c350 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dcc49b83e294024aee52971c65c902e2"></a>

### [`0087c338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c338.md) → [`0087c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c390.md) FUN_0087c390

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
    "old": {
      "definition_site": "0087c354",
      "incomplete_value": false,
      "site": "0087c354",
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
            "const:408:8"
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
      "0087c3ac",
      "DATA",
      [
        "storage",
        "00c80408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c3ac",
      "DATA",
      [
        "storage",
        "00c804d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c350 ["COPY", "tmp:0:8", ["const:408:8"]]
- 0087c350 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087c350 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087c350 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087c3a8 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 0087c3a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c3a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c3a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087c374 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087c374 ["INT_ADD", "register:40f0:8", ["const:87c374:8", "const:4:8"]]
- 0087c374 ["CALLIND", null, ["register:0:8"]]
+ 0087c3cc ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087c3cc ["INT_ADD", "register:40f0:8", ["const:87c3cc:8", "const:4:8"]]
+ 0087c3cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b873c0e8a9101f6726d463dfa9e981c2"></a>

### [`0087c60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c60c.md) → [`0087c664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c664.md) FUN_0087c664

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
    "old": {
      "definition_site": "0087c618",
      "incomplete_value": false,
      "site": "0087c624",
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
            "const:498:8"
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
      "0087c67c",
      "DATA",
      [
        "storage",
        "00c80498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c67c",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c618 ["COPY", "tmp:0:8", ["const:498:8"]]
- 0087c618 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0087c618 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0087c618 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0087c670 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 0087c670 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0087c670 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0087c670 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-1fe9ca062bf4b40c3993eb74a11ebff7"></a>

### [`0087c650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c650.md) → [`0087c6a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c6a8.md) FUN_0087c6a8

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
    "old": {
      "definition_site": "0087c668",
      "incomplete_value": false,
      "site": "0087c674",
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
            "const:498:8"
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
      "0087c6cc",
      "DATA",
      [
        "storage",
        "00c80498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c6cc",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c668 ["COPY", "tmp:0:8", ["const:498:8"]]
- 0087c668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c6c0 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 0087c6c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c6c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c6c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c698 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c698 ["INT_ADD", "register:40f0:8", ["const:87c698:8", "const:4:8"]]
- 0087c698 ["CALLIND", null, ["register:0:8"]]
+ 0087c6f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c6f0 ["INT_ADD", "register:40f0:8", ["const:87c6f0:8", "const:4:8"]]
+ 0087c6f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a9c0a2ce4c6b74c0d216c502b4bd5d8b"></a>

### [`0087c6ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c6ac.md) → [`0087c704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c704.md) FUN_0087c704

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
    "old": {
      "definition_site": "0087c6d8",
      "incomplete_value": false,
      "site": "0087c6d8",
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
            "const:498:8"
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
      "0087c730",
      "DATA",
      [
        "storage",
        "00c80498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c730",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c6c0 ["INT_ADD", "register:40f0:8", ["const:87c6c0:8", "const:4:8"]]
- 0087c6c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087c718 ["INT_ADD", "register:40f0:8", ["const:87c718:8", "const:4:8"]]
+ 0087c718 ["CALL", null, ["callee:00c57f60:8"]]
- 0087c6d0 ["COPY", "tmp:0:8", ["const:498:8"]]
- 0087c6d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c6d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c6d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c728 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 0087c728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c6f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c6f4 ["INT_ADD", "register:40f0:8", ["const:87c6f4:8", "const:4:8"]]
- 0087c6f4 ["CALLIND", null, ["register:0:8"]]
+ 0087c74c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c74c ["INT_ADD", "register:40f0:8", ["const:87c74c:8", "const:4:8"]]
+ 0087c74c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-39d86793c3c3311cc9042f5dd8f38434"></a>

### [`0087c734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c734.md) → [`0087c78c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c78c.md) FUN_0087c78c

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
    "old": {
      "definition_site": "0087c750",
      "incomplete_value": false,
      "site": "0087c750",
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
            "const:498:8"
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
      "0087c7a8",
      "DATA",
      [
        "storage",
        "00c80498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c7a8",
      "DATA",
      [
        "storage",
        "00c80568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c74c ["COPY", "tmp:0:8", ["const:498:8"]]
- 0087c74c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087c74c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087c74c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087c7a4 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 0087c7a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c7a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087c7a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087c770 ["COPY", "register:0:8", ["register:4048:8"]]
- 0087c770 ["INT_ADD", "register:40f0:8", ["const:87c770:8", "const:4:8"]]
- 0087c770 ["CALLIND", null, ["register:0:8"]]
+ 0087c7c8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0087c7c8 ["INT_ADD", "register:40f0:8", ["const:87c7c8:8", "const:4:8"]]
+ 0087c7c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5bda2f6012d57768c8b05e53a3b0617e"></a>

### [`0087c878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c878.md) → [`0087c8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c8d0.md) FUN_0087c8d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087c8e8",
      "incomplete_value": false,
      "site": "0087c8f8",
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
    "old": {
      "definition_site": "0087c890",
      "incomplete_value": false,
      "site": "0087c8a0",
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
            "const:518:8"
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
      "0087c8f8",
      "DATA",
      [
        "storage",
        "00c80518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c8f8",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c890 ["COPY", "tmp:0:8", ["const:518:8"]]
- 0087c890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c8e8 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 0087c8e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c8e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c8e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c8c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c8c4 ["INT_ADD", "register:40f0:8", ["const:87c8c4:8", "const:4:8"]]
- 0087c8c4 ["CALLIND", null, ["register:0:8"]]
+ 0087c91c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c91c ["INT_ADD", "register:40f0:8", ["const:87c91c:8", "const:4:8"]]
+ 0087c91c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b650259e1258212df1ebba9570d6131e"></a>

### [`0087c908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c908.md) → [`0087c960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c960.md) FUN_0087c960

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087c978",
      "incomplete_value": false,
      "site": "0087c988",
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
    "old": {
      "definition_site": "0087c920",
      "incomplete_value": false,
      "site": "0087c930",
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
            "const:518:8"
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
      "0087c988",
      "DATA",
      [
        "storage",
        "00c80518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087c988",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087c920 ["COPY", "tmp:0:8", ["const:518:8"]]
- 0087c920 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c920 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c920 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087c978 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 0087c978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087c978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087c954 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c954 ["INT_ADD", "register:40f0:8", ["const:87c954:8", "const:4:8"]]
- 0087c954 ["CALLIND", null, ["register:0:8"]]
+ 0087c9ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c9ac ["INT_ADD", "register:40f0:8", ["const:87c9ac:8", "const:4:8"]]
+ 0087c9ac ["CALLIND", null, ["register:0:8"]]
- 0087c980 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c980 ["INT_ADD", "register:40f0:8", ["const:87c980:8", "const:4:8"]]
- 0087c980 ["CALLIND", null, ["register:0:8"]]
+ 0087c9d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c9d8 ["INT_ADD", "register:40f0:8", ["const:87c9d8:8", "const:4:8"]]
+ 0087c9d8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-26859b1ef514c37cf439549c9e17572b"></a>

### [`0087c994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c994.md) → [`0087c9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c9ec.md) FUN_0087c9ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087ca1c",
      "incomplete_value": false,
      "site": "0087ca1c",
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
    "old": {
      "definition_site": "0087c9c4",
      "incomplete_value": false,
      "site": "0087c9c4",
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
            "const:518:8"
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
      "0087ca1c",
      "DATA",
      [
        "storage",
        "00c80518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087ca1c",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087ca1c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087ca1c ["INT_ADD", "register:40f0:8", ["const:87ca1c:8", "const:4:8"]]
- 0087ca1c ["CALLIND", null, ["register:0:8"]]
+ 0087ca74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087ca74 ["INT_ADD", "register:40f0:8", ["const:87ca74:8", "const:4:8"]]
+ 0087ca74 ["CALLIND", null, ["register:0:8"]]
- 0087c9ac ["INT_ADD", "register:40f0:8", ["const:87c9ac:8", "const:4:8"]]
- 0087c9ac ["CALL", null, ["callee:00c57f60:8"]]
+ 0087ca04 ["INT_ADD", "register:40f0:8", ["const:87ca04:8", "const:4:8"]]
+ 0087ca04 ["CALL", null, ["callee:00c57f60:8"]]
- 0087c9bc ["COPY", "tmp:0:8", ["const:518:8"]]
- 0087c9bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087c9bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087c9bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087ca14 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 0087ca14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087ca14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087ca14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aca7355e90239de168efe43df6168f06"></a>

### [`0087ca9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087ca9c.md) → [`0087caf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087caf4.md) FUN_0087caf4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "0087cac4",
      "incomplete_value": false,
      "site": "0087cac4",
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
            "const:518:8"
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
      "0087cb1c",
      "DATA",
      [
        "storage",
        "00c80518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087cb1c",
      "DATA",
      [
        "storage",
        "00c805e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087cabc ["COPY", "tmp:0:8", ["const:518:8"]]
- 0087cabc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087cabc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087cabc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087cb14 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 0087cb14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087cb14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087cb14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087cac0 ["COPY", "register:40a0:8", ["register:4008:8"]]
- 0087cae0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087cae0 ["INT_ADD", "register:40f0:8", ["const:87cae0:8", "const:4:8"]]
- 0087cae0 ["CALLIND", null, ["register:0:8"]]
+ 0087cb38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087cb38 ["INT_ADD", "register:40f0:8", ["const:87cb38:8", "const:4:8"]]
+ 0087cb38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-93d663f1dbd138c07b16f961d0d72da6"></a>

### [`0087ce70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087ce70.md) → [`0087cec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087cec8.md) _INIT_161

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 78.74% / 新版 78.74%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 7件, `store_value` 5件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087cf04",
      "incomplete_value": true,
      "site": "0087cf20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087ceac",
      "incomplete_value": true,
      "site": "0087cec8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087cf68",
      "incomplete_value": true,
      "site": "0087cf80",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "0087cf10",
      "incomplete_value": true,
      "site": "0087cf28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f62:8"
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
      "definition_site": "0087cfa4",
      "incomplete_value": true,
      "site": "0087cfc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "0087cf4c",
      "incomplete_value": true,
      "site": "0087cf68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f5d:8"
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
      "0087cf04",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0087cf28",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0087cf48",
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
      "0087cf04",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0087cf28",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0087cf48",
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
- 0087d0a8 ["INT_ADD", "register:40f0:8", ["const:87d0a8:8", "const:4:8"]]
- 0087d0a8 ["CALL", null, ["callee:00c57f00:8"]]
+ 0087d100 ["INT_ADD", "register:40f0:8", ["const:87d100:8", "const:4:8"]]
+ 0087d100 ["CALL", null, ["callee:00c57f00:8"]]
- 0087d0c0 ["COPY", "tmp:0:8", ["const:686:8"]]
- 0087d0c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087d0c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087d0c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087d118 ["COPY", "tmp:0:8", ["const:639:8"]]
+ 0087d118 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d118 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087d118 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087d0f4 ["COPY", "register:4008:8", ["const:1123000:8"]]
~~~


<a id="compare-6922506346cc8f43de3007873ef065f3"></a>

### [`0087d50c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d50c.md) → [`0087d564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d564.md) FUN_0087d564

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00861388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00861/00861388.md) · 呼出先 6件 [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589850.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a950.md)
- 新版 呼出元 1件 [`008613e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008613e0.md) · 呼出先 6件 [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589890.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aa20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d5a0",
      "incomplete_value": false,
      "site": "0087d5a8",
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
            "const:678:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087d548",
      "incomplete_value": false,
      "site": "0087d550",
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
            "const:5a8:8"
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
      "0087d5a8",
      "DATA",
      [
        "storage",
        "00c805a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087d5a8",
      "DATA",
      [
        "storage",
        "00c80678",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087d518 ["INT_ADD", "register:40f0:8", ["const:87d518:8", "const:4:8"]]
- 0087d518 ["CALL", null, ["callee:00588eac:8"]]
+ 0087d570 ["INT_ADD", "register:40f0:8", ["const:87d570:8", "const:4:8"]]
+ 0087d570 ["CALL", null, ["callee:00588eac:8"]]
- 0087d520 ["INT_ADD", "register:40f0:8", ["const:87d520:8", "const:4:8"]]
- 0087d520 ["CALL", null, ["callee:0058919c:8"]]
+ 0087d578 ["INT_ADD", "register:40f0:8", ["const:87d578:8", "const:4:8"]]
+ 0087d578 ["CALL", null, ["callee:0058919c:8"]]
- 0087d524 ["INT_ADD", "register:40f0:8", ["const:87d524:8", "const:4:8"]]
- 0087d524 ["CALL", null, ["callee:00589890:8"]]
+ 0087d57c ["INT_ADD", "register:40f0:8", ["const:87d57c:8", "const:4:8"]]
+ 0087d57c ["CALL", null, ["callee:00589890:8"]]
~~~


<a id="compare-f9372e12c817a7fe831f9be313a916f2"></a>

### [`0087d560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d560.md) → [`0087d5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d5b8.md) _INIT_162

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087d5f4",
      "incomplete_value": true,
      "site": "0087d610",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087d59c",
      "incomplete_value": true,
      "site": "0087d5b8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087d618",
      "incomplete_value": true,
      "site": "0087d634",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087d5c0",
      "incomplete_value": true,
      "site": "0087d5dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087d638",
      "incomplete_value": true,
      "site": "0087d654",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087d5e0",
      "incomplete_value": true,
      "site": "0087d5fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0087d5f4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0087d618",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0087d638",
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
      "0087d5f4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0087d618",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0087d638",
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
- 0087d634 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 0087d634 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087d634 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087d634 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087d68c ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 0087d68c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d68c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d68c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087d654 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 0087d654 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087d654 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087d654 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087d6ac ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 0087d6ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d6ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087d6ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087d6c0 ["INT_ADD", "register:40f0:8", ["const:87d6c0:8", "const:4:8"]]
- 0087d6c0 ["CALL", null, ["callee:0043b838:8"]]
+ 0087d718 ["INT_ADD", "register:40f0:8", ["const:87d718:8", "const:4:8"]]
+ 0087d718 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-cf4ee04bf8328c0b4064748fc3cd40b9"></a>

### [`0087dc24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087dc24.md) → [`0087dc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dc7c.md) FUN_0087dc7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0087dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087dd10.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0087dd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dd68.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.92% / 新版 94.92%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087dc94",
      "incomplete_value": true,
      "site": "0087dc98",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:938:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087dc3c",
      "incomplete_value": true,
      "site": "0087dc40",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:838:8"
              ]
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
      "definition_site": "0087dcac",
      "incomplete_value": true,
      "site": "0087dcb0",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:920:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087dc54",
      "incomplete_value": true,
      "site": "0087dc58",
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
                "const:1123000:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087dcdc",
      "incomplete_value": true,
      "site": "0087dce0",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:8f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087dc84",
      "incomplete_value": true,
      "site": "0087dc88",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:7f0:8"
              ]
            ]
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
      "0087dc88",
      "READ",
      [
        "storage",
        "01123828",
        null,
        "undefined1"
      ]
    ],
    [
      "0087dc94",
      "READ",
      [
        "storage",
        "01123838",
        null,
        "undefined8"
      ]
    ],
    [
      "0087dca0",
      "READ",
      [
        "storage",
        "01123810",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0087dc88",
      "READ",
      [
        "storage",
        "01123928",
        null,
        "undefined1"
      ]
    ],
    [
      "0087dc94",
      "READ",
      [
        "storage",
        "01123938",
        null,
        "undefined8"
      ]
    ],
    [
      "0087dca0",
      "READ",
      [
        "storage",
        "01123910",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087dc30 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:828:8"]]
- 0087dc30 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0087dc30 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 0087dc88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:928:8"]]
+ 0087dc88 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0087dc88 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 0087dc40 ["INT_ADD", "register:40f0:8", ["const:87dc40:8", "const:4:8"]]
- 0087dc40 ["CALL", null, ["callee:00c57f80:8"]]
+ 0087dc98 ["INT_ADD", "register:40f0:8", ["const:87dc98:8", "const:4:8"]]
+ 0087dc98 ["CALL", null, ["callee:00c57f80:8"]]
- 0087dc48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:810:8"]]
- 0087dc48 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0087dc48 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 0087dca0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:910:8"]]
+ 0087dca0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0087dca0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-7571a502bf0dc38da38618aed2a445d6"></a>

### [`0087dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087dd10.md) → [`0087dd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dd68.md) _INIT_163

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0087dc24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087dc24.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0087dc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087dc7c.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md)

変更の種類 call, call_argument_candidate, call_count, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 66.94% / 新版 66.94%

優先判定に残った影響 `call_argument_candidate` 24件, `store_destination` 32件, `store_value` 14件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087ddb0",
      "incomplete_value": true,
      "site": "0087ddcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087dd58",
      "incomplete_value": true,
      "site": "0087dd74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087ddf4",
      "incomplete_value": true,
      "site": "0087de10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0087dd9c",
      "incomplete_value": true,
      "site": "0087ddb8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087de50",
      "incomplete_value": true,
      "site": "0087de6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "0087ddf8",
      "incomplete_value": true,
      "site": "0087de14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f5d:8"
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
      "0087ddb0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0087ddd4",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0087ddf4",
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
      "0087ddb0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0087ddd4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0087ddf4",
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
- 0087de10 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 0087de10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087de10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087de10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087de68 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 0087de68 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087de68 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087de68 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087e038 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:790:8"]]
- 0087e038 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 0087e038 ["COPY", "register:5030:8", ["const:0:8"]]
- 0087e038 ["COPY", "register:5038:8", ["const:0:8"]]
+ 0087e090 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:7d0:8"]]
+ 0087e090 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 0087e090 ["COPY", "register:5030:8", ["const:0:8"]]
+ 0087e090 ["COPY", "register:5038:8", ["const:0:8"]]
- 0087e0b4 ["COPY", "tmp:0:8", ["const:6df:8"]]
- 0087e0b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087e0b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087e0b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087e10c ["COPY", "tmp:0:8", ["const:68b:8"]]
+ 0087e10c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087e10c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087e10c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d7b030c91cfa1d27f21c42f47e9c3ada"></a>

### [`0087e710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e710.md) → [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) FUN_0087e768

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087e70c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e70c.md) · 呼出先 15件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0087ed4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ed4c.md) [`0087f038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f038.md)
- 新版 呼出元 1件 [`0087e764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e764.md) · 呼出先 15件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0087eda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eda4.md) [`0087f090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f090.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.52% / 新版 97.52%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087e960",
      "incomplete_value": false,
      "site": "0087e964",
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
    "old": {
      "definition_site": "0087e908",
      "incomplete_value": false,
      "site": "0087e90c",
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
            "const:6f5:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0087e7f0",
      "READ",
      [
        "storage",
        "01123768",
        null,
        "undefined1"
      ]
    ],
    [
      "0087e7f0",
      "READ",
      [
        "storage",
        "01123780",
        null,
        "undefined1"
      ]
    ],
    [
      "0087e7f8",
      "READ",
      [
        "storage",
        "01123768",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0087e7f0",
      "READ",
      [
        "storage",
        "01123868",
        null,
        "undefined1"
      ]
    ],
    [
      "0087e7f0",
      "READ",
      [
        "storage",
        "01123880",
        null,
        "undefined1"
      ]
    ],
    [
      "0087e7f8",
      "READ",
      [
        "storage",
        "01123868",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087e90c ["INT_ADD", "register:40f0:8", ["const:87e90c:8", "const:4:8"]]
- 0087e90c ["CALL", null, ["callee:0087eda4:8"]]
+ 0087e964 ["INT_ADD", "register:40f0:8", ["const:87e964:8", "const:4:8"]]
+ 0087e964 ["CALL", null, ["callee:0087eda4:8"]]
- 0087e748 ["INT_ADD", "register:40f0:8", ["const:87e748:8", "const:4:8"]]
- 0087e748 ["CALL", null, ["callee:00b363d4:8"]]
+ 0087e7a0 ["INT_ADD", "register:40f0:8", ["const:87e7a0:8", "const:4:8"]]
+ 0087e7a0 ["CALL", null, ["callee:00b363d4:8"]]
- 0087e790 ["COPY", "tmp:0:8", ["const:768:8"]]
- 0087e790 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087e790 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087e790 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087e7e8 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 0087e7e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087e7e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087e7e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5946d8b7d29a2d763e36da21a5eded52"></a>

### [`0087eff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eff8.md) → [`0087f050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f050.md) FUN_0087f050

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087f054",
      "incomplete_value": false,
      "site": "0087f058",
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
            "const:6d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087effc",
      "incomplete_value": false,
      "site": "0087f000",
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
      "0087f058",
      "DATA",
      [
        "storage",
        "00c80600",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0087f058",
      "DATA",
      [
        "storage",
        "00c806d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087effc ["COPY", "tmp:0:8", ["const:600:8"]]
- 0087effc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087effc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087effc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087f054 ["COPY", "tmp:0:8", ["const:6d0:8"]]
+ 0087f054 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087f054 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087f054 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-be23bafb21135398731cf98d36944a89"></a>

### [`0087f008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f008.md) → [`0087f060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f060.md) FUN_0087f060

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087f070",
      "incomplete_value": false,
      "site": "0087f078",
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
            "const:6d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087f018",
      "incomplete_value": false,
      "site": "0087f020",
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
      "0087f078",
      "DATA",
      [
        "storage",
        "00c80600",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0087f078",
      "DATA",
      [
        "storage",
        "00c806d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087f018 ["COPY", "tmp:0:8", ["const:600:8"]]
- 0087f018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087f018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087f018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087f070 ["COPY", "tmp:0:8", ["const:6d0:8"]]
+ 0087f070 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087f070 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087f070 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087f024 ["INT_ADD", "register:40f0:8", ["const:87f024:8", "const:4:8"]]
- 0087f024 ["CALL", null, ["callee:00c57f70:8"]]
+ 0087f07c ["INT_ADD", "register:40f0:8", ["const:87f07c:8", "const:4:8"]]
+ 0087f07c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-9da907ffa25f7d4e1dbab9c5a2d95581"></a>

### [`0087f10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f10c.md) → [`0087f164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f164.md) FUN_0087f164

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087f18c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087f134",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087f194",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087f13c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "0087f18c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0087f194",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0087f1a4",
      "READ",
      [
        "storage",
        "002b78ac",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0087f18c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0087f194",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0087f1a4",
      "READ",
      [
        "storage",
        "002b78ec",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087f134 ["INT_ADD", "register:40f0:8", ["const:87f134:8", "const:4:8"]]
- 0087f134 ["CALL", null, ["ram:48ccf8:8"]]
+ 0087f18c ["INT_ADD", "register:40f0:8", ["const:87f18c:8", "const:4:8"]]
+ 0087f18c ["CALL", null, ["ram:48cd38:8"]]
- 0087f13c ["INT_ADD", "register:40f0:8", ["const:87f13c:8", "const:4:8"]]
- 0087f13c ["CALL", null, ["ram:48ccf8:8"]]
+ 0087f194 ["INT_ADD", "register:40f0:8", ["const:87f194:8", "const:4:8"]]
+ 0087f194 ["CALL", null, ["ram:48cd38:8"]]
- 0087f18c ["INT_ADD", "register:40f0:8", ["const:87f18c:8", "const:4:8"]]
- 0087f18c ["CALL", null, ["callee:00c57f80:8"]]
+ 0087f1e4 ["INT_ADD", "register:40f0:8", ["const:87f1e4:8", "const:4:8"]]
+ 0087f1e4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-253c3f1607a9bf3a76821bff0bcb677b"></a>

### [`0087f268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f268.md) → [`0087f2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f2c0.md) FUN_0087f2c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087f304",
      "incomplete_value": true,
      "site": "0087f318",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:507:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087f2ac",
      "incomplete_value": true,
      "site": "0087f2c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:554:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087f2ec",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087f294",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "0087f2f4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087f29c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "0087f2e8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0087f2ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0087f2f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "0087f2e8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0087f2ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0087f2f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087f294 ["INT_ADD", "register:40f0:8", ["const:87f294:8", "const:4:8"]]
- 0087f294 ["CALL", null, ["ram:48ccf8:8"]]
+ 0087f2ec ["INT_ADD", "register:40f0:8", ["const:87f2ec:8", "const:4:8"]]
+ 0087f2ec ["CALL", null, ["ram:48cd38:8"]]
- 0087f29c ["INT_ADD", "register:40f0:8", ["const:87f29c:8", "const:4:8"]]
- 0087f29c ["CALL", null, ["ram:48ccf8:8"]]
+ 0087f2f4 ["INT_ADD", "register:40f0:8", ["const:87f2f4:8", "const:4:8"]]
+ 0087f2f4 ["CALL", null, ["ram:48cd38:8"]]
- 0087f2ec ["INT_ADD", "register:40f0:8", ["const:87f2ec:8", "const:4:8"]]
- 0087f2ec ["CALL", null, ["callee:00c57f80:8"]]
+ 0087f344 ["INT_ADD", "register:40f0:8", ["const:87f344:8", "const:4:8"]]
+ 0087f344 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5f9a73a2051d20c00440810d03f74727"></a>

### [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) → [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) FUN_0087f3c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 55件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0043f78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f78c.md)
- 新版 呼出元 0件  · 呼出先 55件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value, unresolved_call_alignment

命令の説明率　旧版 93.29% / 新版 93.29%

優先判定に残った影響 `call_target` 17件, `store_value` 12件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087f488",
      "incomplete_value": false,
      "site": "0087f488",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087f430",
      "incomplete_value": false,
      "site": "0087f430",
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
            "const:998:8"
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
      "definition_site": "0087f4e0",
      "incomplete_value": true,
      "site": "0087f4e0",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:857:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087f488",
      "incomplete_value": true,
      "site": "0087f488",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:8ab:8"
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
      "definition_site": "0087f70c",
      "incomplete_value": true,
      "site": "0087f70c",
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
                "const:54b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087f6b4",
      "incomplete_value": true,
      "site": "0087f6b4",
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
                "const:50b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0087f488",
      "DATA",
      [
        "storage",
        "00c80998",
        null,
        "undefined *"
      ]
    ],
    [
      "0087f4d0",
      "READ",
      [
        "storage",
        "002ba8ab",
        null,
        "string"
      ]
    ],
    [
      "0087f554",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a06d9c"
      ]
    ]
  ],
  "added": [
    [
      "0087f488",
      "DATA",
      [
        "storage",
        "00c80a68",
        null,
        "undefined *"
      ]
    ],
    [
      "0087f4d0",
      "READ",
      [
        "storage",
        "002ba857",
        null,
        "string"
      ]
    ],
    [
      "0087f554",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a06df0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087f4a4 ["INT_ADD", "register:40f0:8", ["const:87f4a4:8", "const:4:8"]]
- 0087f4a4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0087f4fc ["INT_ADD", "register:40f0:8", ["const:87f4fc:8", "const:4:8"]]
+ 0087f4fc ["CALL", null, ["callee:00c57f80:8"]]
- 0087f4fc ["INT_ADD", "register:40f0:8", ["const:87f4fc:8", "const:4:8"]]
- 0087f4fc ["CALL", null, ["ram:a06d9c:8"]]
+ 0087f554 ["INT_ADD", "register:40f0:8", ["const:87f554:8", "const:4:8"]]
+ 0087f554 ["CALL", null, ["ram:a06df0:8"]]
- 0087f56c ["INT_ADD", "register:40f0:8", ["const:87f56c:8", "const:4:8"]]
- 0087f56c ["CALL", null, ["callee:0048ce94:8"]]
+ 0087f5c4 ["INT_ADD", "register:40f0:8", ["const:87f5c4:8", "const:4:8"]]
+ 0087f5c4 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-eab68275bebf59fa4ede39615a93bbef"></a>

### [`0088018c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/0088018c.md) → [`008801e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/008801e4.md) FUN_008801e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) · 呼出先 9件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`00492c00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492c00.md) [`004938d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/004938d4.md)
- 新版 呼出元 1件 [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) · 呼出先 9件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492c40.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008802a4",
      "incomplete_value": false,
      "site": "008802a4",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088024c",
      "incomplete_value": false,
      "site": "0088024c",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00880220",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008801c8",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00880230",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008801d8",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "00880218",
      "DATA",
      [
        "storage",
        "0039b1d7",
        null,
        "dword"
      ]
    ],
    [
      "00880220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00880230",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00880218",
      "DATA",
      [
        "storage",
        "0039b1d7",
        null,
        "qword"
      ]
    ],
    [
      "00880220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00880230",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 008801c8 ["INT_ADD", "register:40f0:8", ["const:8801c8:8", "const:4:8"]]
- 008801c8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00880220 ["INT_ADD", "register:40f0:8", ["const:880220:8", "const:4:8"]]
+ 00880220 ["CALL", null, ["ram:48cd38:8"]]
- 008801d8 ["INT_ADD", "register:40f0:8", ["const:8801d8:8", "const:4:8"]]
- 008801d8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00880230 ["INT_ADD", "register:40f0:8", ["const:880230:8", "const:4:8"]]
+ 00880230 ["CALL", null, ["ram:48cd38:8"]]
- 008801cc ["INT_ADD", "register:40f0:8", ["const:8801cc:8", "const:4:8"]]
- 008801cc ["CALL", null, ["callee:00492c40:8"]]
+ 00880224 ["INT_ADD", "register:40f0:8", ["const:880224:8", "const:4:8"]]
+ 00880224 ["CALL", null, ["callee:00492c40:8"]]
~~~


<a id="compare-fd82fa031c0e69b4f47aee63a990a8f6"></a>

### [`008803c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/008803c0.md) → [`00880418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880418.md) FUN_00880418

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.32% / 新版 90.32%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00880434",
      "incomplete_value": true,
      "site": "00880438",
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
      "definition_site": "008803dc",
      "incomplete_value": true,
      "site": "008803e0",
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
      "0088042c",
      "READ",
      [
        "storage",
        "00c9ac98",
        null,
        "pointer"
      ]
    ],
    [
      "00880438",
      "DATA",
      [
        "storage",
        "00c65598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0088042c",
      "READ",
      [
        "storage",
        "00c9ad68",
        null,
        "pointer"
      ]
    ],
    [
      "00880438",
      "DATA",
      [
        "storage",
        "00c65668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008803d4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c98:8"]]
- 008803d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0088042c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d68:8"]]
+ 0088042c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008803f0 ["INT_ADD", "register:40f0:8", ["const:8803f0:8", "const:4:8"]]
- 008803f0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00880448 ["INT_ADD", "register:40f0:8", ["const:880448:8", "const:4:8"]]
+ 00880448 ["CALL", null, ["callee:00c53da0:8"]]
- 00880418 ["COPY", "register:0:8", ["register:4040:8"]]
- 00880418 ["INT_ADD", "register:40f0:8", ["const:880418:8", "const:4:8"]]
- 00880418 ["CALLIND", null, ["register:0:8"]]
+ 00880470 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00880470 ["INT_ADD", "register:40f0:8", ["const:880470:8", "const:4:8"]]
+ 00880470 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b28bdf9000eb1f103269e66a5a2f06e5"></a>

### [`0088043c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/0088043c.md) → [`00880494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880494.md) FUN_00880494

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f78c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cf98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cf98.md) [`0047cfb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cfb8.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cfd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cfd8.md) [`0047cff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cff8.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_target` 6件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008804f8",
      "incomplete_value": true,
      "site": "00880508",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:7e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008804a0",
      "incomplete_value": true,
      "site": "008804b0",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:7a5:8"
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
      "definition_site": "0088050c",
      "incomplete_value": true,
      "site": "0088050c",
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
      "definition_site": "008804b4",
      "incomplete_value": true,
      "site": "008804b4",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008805a4",
      "incomplete_value": true,
      "site": "008805b4",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:470:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088054c",
      "incomplete_value": true,
      "site": "0088055c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:430:8"
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
      "008804c4",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "008804c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008804e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008804c4",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "008804c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008804e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00880470 ["INT_ADD", "register:40f0:8", ["const:880470:8", "const:4:8"]]
- 00880470 ["CALL", null, ["ram:48ccf8:8"]]
+ 008804c8 ["INT_ADD", "register:40f0:8", ["const:8804c8:8", "const:4:8"]]
+ 008804c8 ["CALL", null, ["ram:48cd38:8"]]
- 00880488 ["INT_ADD", "register:40f0:8", ["const:880488:8", "const:4:8"]]
- 00880488 ["CALL", null, ["ram:48ccf8:8"]]
+ 008804e0 ["INT_ADD", "register:40f0:8", ["const:8804e0:8", "const:4:8"]]
+ 008804e0 ["CALL", null, ["ram:48cd38:8"]]
- 00880498 ["COPY", "tmp:0:8", ["const:7a5:8"]]
- 00880498 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00880498 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00880498 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008804f0 ["COPY", "tmp:0:8", ["const:7e5:8"]]
+ 008804f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008804f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008804f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2c87913dcbf8b70c4cd916d41507b45d"></a>

### [`008806a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/008806a8.md) → [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md) FUN_00880700

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 13件 [`00873c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873c50.md) [`0088441c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/0088441c.md) [`008847c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/008847c8.md) [`00885368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885368.md) [`00885724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885724.md) · 呼出先 15件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00451ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/00451ed8.md) [`004524e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/004524e8.md) [`005976e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005976e8.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md)
- 新版 呼出元 13件 [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) [`00884474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884474.md) [`00884820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884820.md) [`008853c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008853c0.md) [`0088577c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088577c.md) · 呼出先 15件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00451f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451f18.md) [`00452528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452528.md) [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)

変更の種類 call, call_count, call_target, constant, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 4件, `store_value` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00880860",
      "incomplete_value": false,
      "site": "00880868",
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
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00880808",
      "incomplete_value": false,
      "site": "00880810",
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
            "const:a98:8"
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
      "definition_site": "008809c4",
      "incomplete_value": false,
      "site": "008809cc",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0088096c",
      "incomplete_value": false,
      "site": "00880974",
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
            "const:c28:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0088073c",
      "value": [
        "leaf",
        "ram:768c34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008806e4",
      "value": [
        "leaf",
        "ram:768bdc:8"
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
      "0088073c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768bdc"
      ]
    ],
    [
      "0088076c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "unmatched:00880718",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ],
  "added": [
    [
      "0088073c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768c34"
      ]
    ],
    [
      "0088076c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "00880770",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ]
  ]
}
~~~


~~~diff
- 008806e4 ["INT_ADD", "register:40f0:8", ["const:8806e4:8", "const:4:8"]]
- 008806e4 ["CALL", null, ["ram:768bdc:8"]]
+ 0088073c ["INT_ADD", "register:40f0:8", ["const:88073c:8", "const:4:8"]]
+ 0088073c ["CALL", null, ["ram:768c34:8"]]
- 00880714 ["INT_ADD", "register:40f0:8", ["const:880714:8", "const:4:8"]]
- 00880714 ["CALL", null, ["ram:764384:8"]]
+ 0088076c ["INT_ADD", "register:40f0:8", ["const:88076c:8", "const:4:8"]]
+ 0088076c ["CALL", null, ["ram:7643dc:8"]]
- 00880720 ["INT_ADD", "register:40f0:8", ["const:880720:8", "const:4:8"]]
- 00880720 ["CALL", null, ["ram:768bdc:8"]]
+ 00880778 ["INT_ADD", "register:40f0:8", ["const:880778:8", "const:4:8"]]
+ 00880778 ["CALL", null, ["ram:768c34:8"]]
~~~


