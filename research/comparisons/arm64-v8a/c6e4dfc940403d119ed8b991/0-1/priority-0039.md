# v16.0.1 → v16.0.2 · 最優先の変更候補 (39)

[一覧の目次](README.md)

<a id="compare-33a15efdb4733b90ec0ff59bb768155d"></a>

### [`00781a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781a08.md) → [`00781a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781a60.md) FUN_00781a60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781a80",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781a28",
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
      "site": "00781a8c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781a34",
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
      "00781a80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00781a8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00781a80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00781a8c",
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
- 00781a28 ["INT_ADD", "register:40f0:8", ["const:781a28:8", "const:4:8"]]
- 00781a28 ["CALL", null, ["ram:47acf4:8"]]
+ 00781a80 ["INT_ADD", "register:40f0:8", ["const:781a80:8", "const:4:8"]]
+ 00781a80 ["CALL", null, ["ram:47ad34:8"]]
- 00781a34 ["INT_ADD", "register:40f0:8", ["const:781a34:8", "const:4:8"]]
- 00781a34 ["CALL", null, ["ram:47acf4:8"]]
+ 00781a8c ["INT_ADD", "register:40f0:8", ["const:781a8c:8", "const:4:8"]]
+ 00781a8c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-a7d6eda19cec99f247e21a9170a0db35"></a>

### [`00781aa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781aa0.md) → [`00781af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781af8.md) FUN_00781af8

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
      "definition_site": "00781b1c",
      "incomplete_value": false,
      "site": "00781b1c",
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
            "const:4f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00781ac4",
      "incomplete_value": false,
      "site": "00781ac4",
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
            "const:420:8"
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
      "00781b1c",
      "DATA",
      [
        "storage",
        "00c78420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00781b1c",
      "DATA",
      [
        "storage",
        "00c784f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00781ab4 ["INT_ADD", "register:40f0:8", ["const:781ab4:8", "const:4:8"]]
- 00781ab4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00781b0c ["INT_ADD", "register:40f0:8", ["const:781b0c:8", "const:4:8"]]
+ 00781b0c ["CALL", null, ["callee:00c57f60:8"]]
- 00781ac0 ["COPY", "tmp:0:8", ["const:420:8"]]
- 00781ac0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00781ac0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00781ac0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00781b18 ["COPY", "tmp:0:8", ["const:4f0:8"]]
+ 00781b18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00781b18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00781b18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1f98c9746b488848a9e59b1f6393fe21"></a>

### [`00781af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781af0.md) → [`00781b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781b48.md) FUN_00781b48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781b68",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781b10",
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
      "site": "00781b74",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781b1c",
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
      "00781b68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00781b74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00781b68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00781b74",
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
- 00781b10 ["INT_ADD", "register:40f0:8", ["const:781b10:8", "const:4:8"]]
- 00781b10 ["CALL", null, ["ram:47acf4:8"]]
+ 00781b68 ["INT_ADD", "register:40f0:8", ["const:781b68:8", "const:4:8"]]
+ 00781b68 ["CALL", null, ["ram:47ad34:8"]]
- 00781b1c ["INT_ADD", "register:40f0:8", ["const:781b1c:8", "const:4:8"]]
- 00781b1c ["CALL", null, ["ram:47acf4:8"]]
+ 00781b74 ["INT_ADD", "register:40f0:8", ["const:781b74:8", "const:4:8"]]
+ 00781b74 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-0573772dbf649d792a342ad2d93baed6"></a>

### [`00781b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781b80.md) → [`00781bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781bd8.md) FUN_00781bd8

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
      "definition_site": "00781bfc",
      "incomplete_value": false,
      "site": "00781bfc",
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
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00781ba4",
      "incomplete_value": false,
      "site": "00781ba4",
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
            "const:4a0:8"
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
      "00781bfc",
      "DATA",
      [
        "storage",
        "00c784a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00781bfc",
      "DATA",
      [
        "storage",
        "00c78570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00781b94 ["INT_ADD", "register:40f0:8", ["const:781b94:8", "const:4:8"]]
- 00781b94 ["CALL", null, ["callee:00c57f60:8"]]
+ 00781bec ["INT_ADD", "register:40f0:8", ["const:781bec:8", "const:4:8"]]
+ 00781bec ["CALL", null, ["callee:00c57f60:8"]]
- 00781ba0 ["COPY", "tmp:0:8", ["const:4a0:8"]]
- 00781ba0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00781ba0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00781ba0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00781bf8 ["COPY", "tmp:0:8", ["const:570:8"]]
+ 00781bf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00781bf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00781bf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-14d764764329d4e032cfb6d31df25cbf"></a>

### [`00781bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781bd0.md) → [`00781c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781c28.md) FUN_00781c28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6e50.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ea8.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781cdc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781c84",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781d04",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00781cac",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00781d64",
      "incomplete_value": false,
      "site": "00781d68",
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
    "old": {
      "definition_site": "00781d0c",
      "incomplete_value": false,
      "site": "00781d10",
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
            "const:d74:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00781cdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00781d04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00781d64",
      "PARAM",
      [
        "storage",
        "002b3d74",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00781cdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00781d04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00781d64",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00781c84 ["INT_ADD", "register:40f0:8", ["const:781c84:8", "const:4:8"]]
- 00781c84 ["CALL", null, ["ram:47acf4:8"]]
+ 00781cdc ["INT_ADD", "register:40f0:8", ["const:781cdc:8", "const:4:8"]]
+ 00781cdc ["CALL", null, ["ram:47ad34:8"]]
- 00781cac ["INT_ADD", "register:40f0:8", ["const:781cac:8", "const:4:8"]]
- 00781cac ["CALL", null, ["ram:47acf4:8"]]
+ 00781d04 ["INT_ADD", "register:40f0:8", ["const:781d04:8", "const:4:8"]]
+ 00781d04 ["CALL", null, ["ram:47ad34:8"]]
- 00781cb8 ["INT_ADD", "register:40f0:8", ["const:781cb8:8", "const:4:8"]]
- 00781cb8 ["CALL", null, ["callee:0047ce14:8"]]
+ 00781d10 ["INT_ADD", "register:40f0:8", ["const:781d10:8", "const:4:8"]]
+ 00781d10 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-a48859487fda7608a82180c88c8e237b"></a>

### [`00781d40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781d40.md) → [`00781d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781d98.md) FUN_00781d98

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
      "definition_site": "00781dbc",
      "incomplete_value": false,
      "site": "00781dbc",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00781d64",
      "incomplete_value": false,
      "site": "00781d64",
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
            "const:520:8"
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
      "00781dbc",
      "DATA",
      [
        "storage",
        "00c78520",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00781dbc",
      "DATA",
      [
        "storage",
        "00c785f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00781d54 ["INT_ADD", "register:40f0:8", ["const:781d54:8", "const:4:8"]]
- 00781d54 ["CALL", null, ["callee:00c57f60:8"]]
+ 00781dac ["INT_ADD", "register:40f0:8", ["const:781dac:8", "const:4:8"]]
+ 00781dac ["CALL", null, ["callee:00c57f60:8"]]
- 00781d60 ["COPY", "tmp:0:8", ["const:520:8"]]
- 00781d60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00781d60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00781d60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00781db8 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 00781db8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00781db8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00781db8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1fe1bcd83196c076abeb84d277cab03d"></a>

### [`00781e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781e48.md) → [`00781ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781ea0.md) FUN_00781ea0

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
      "definition_site": "00781ec4",
      "incomplete_value": false,
      "site": "00781ec4",
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
            "const:670:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00781e6c",
      "incomplete_value": false,
      "site": "00781e6c",
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
            "const:5a0:8"
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
      "00781ec4",
      "DATA",
      [
        "storage",
        "00c785a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00781ec4",
      "DATA",
      [
        "storage",
        "00c78670",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00781e5c ["INT_ADD", "register:40f0:8", ["const:781e5c:8", "const:4:8"]]
- 00781e5c ["CALL", null, ["callee:00c57f60:8"]]
+ 00781eb4 ["INT_ADD", "register:40f0:8", ["const:781eb4:8", "const:4:8"]]
+ 00781eb4 ["CALL", null, ["callee:00c57f60:8"]]
- 00781e68 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 00781e68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00781e68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00781e68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00781ec0 ["COPY", "tmp:0:8", ["const:670:8"]]
+ 00781ec0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00781ec0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00781ec0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-22e163a22b79c73e14ea95afe0a07bdd"></a>

### [`00781e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00781/00781e98.md) → [`00781ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/00781ef0.md) FUN_00781ef0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 16件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 16件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.57% / 新版 91.57%

優先判定に残った影響 `call_target` 3件, `store_value` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00782050",
      "incomplete_value": true,
      "site": "00782058",
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
                "const:360:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00781ff8",
      "incomplete_value": true,
      "site": "00782000",
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
                "const:320:8"
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
      "definition_site": "00782088",
      "incomplete_value": true,
      "site": "00782088",
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
                "const:a1e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782030",
      "incomplete_value": true,
      "site": "00782030",
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
                "const:a7a:8"
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
      "definition_site": "00782090",
      "incomplete_value": true,
      "site": "00782090",
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
      "definition_site": "00782038",
      "incomplete_value": true,
      "site": "00782038",
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
      "00781f34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00781f50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00781fc4",
      "DATA",
      [
        "storage",
        "003b1a58",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00781f34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00781f50",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00781fc4",
      "DATA",
      [
        "storage",
        "003b1a58",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00781edc ["INT_ADD", "register:40f0:8", ["const:781edc:8", "const:4:8"]]
- 00781edc ["CALL", null, ["ram:47acf4:8"]]
+ 00781f34 ["INT_ADD", "register:40f0:8", ["const:781f34:8", "const:4:8"]]
+ 00781f34 ["CALL", null, ["ram:47ad34:8"]]
- 00781ef8 ["INT_ADD", "register:40f0:8", ["const:781ef8:8", "const:4:8"]]
- 00781ef8 ["CALL", null, ["ram:47acf4:8"]]
+ 00781f50 ["INT_ADD", "register:40f0:8", ["const:781f50:8", "const:4:8"]]
+ 00781f50 ["CALL", null, ["ram:47ad34:8"]]
- 00782008 ["INT_ADD", "register:40f0:8", ["const:782008:8", "const:4:8"]]
- 00782008 ["CALL", null, ["ram:48ccf8:8"]]
+ 00782060 ["INT_ADD", "register:40f0:8", ["const:782060:8", "const:4:8"]]
+ 00782060 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-6d4d4240bb197f729bebdb31753b31f2"></a>

### [`007823b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/007823b0.md) → [`00782408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782408.md) FUN_00782408

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
      "definition_site": "0078241c",
      "incomplete_value": false,
      "site": "00782420",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007823c4",
      "incomplete_value": false,
      "site": "007823c8",
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
      "00782420",
      "DATA",
      [
        "storage",
        "00c78610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782420",
      "DATA",
      [
        "storage",
        "00c786e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007823bc ["INT_ADD", "register:40f0:8", ["const:7823bc:8", "const:4:8"]]
- 007823bc ["CALL", null, ["callee:00c57f60:8"]]
+ 00782414 ["INT_ADD", "register:40f0:8", ["const:782414:8", "const:4:8"]]
+ 00782414 ["CALL", null, ["callee:00c57f60:8"]]
- 007823c4 ["COPY", "tmp:0:8", ["const:610:8"]]
- 007823c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007823c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007823c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078241c ["COPY", "tmp:0:8", ["const:6e0:8"]]
+ 0078241c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078241c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078241c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b6b64827625a009173031176ead8909f"></a>

### [`007823d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/007823d4.md) → [`0078242c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/0078242c.md) FUN_0078242c

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
      "definition_site": "00782430",
      "incomplete_value": false,
      "site": "00782434",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007823d8",
      "incomplete_value": false,
      "site": "007823dc",
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
      "00782434",
      "DATA",
      [
        "storage",
        "00c78610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782434",
      "DATA",
      [
        "storage",
        "00c786e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007823d8 ["COPY", "tmp:0:8", ["const:610:8"]]
- 007823d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007823d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007823d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782430 ["COPY", "tmp:0:8", ["const:6e0:8"]]
+ 00782430 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782430 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782430 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4cc004a62a000249f6d469f0db4a5633"></a>

### [`007823ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/007823ec.md) → [`00782444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782444.md) FUN_00782444

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.59% / 新版 90.59%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782480",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782428",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007824e8",
      "incomplete_value": true,
      "site": "007824f8",
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
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00782580",
      "incomplete_value": true,
      "site": "00782594",
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
            "const:58:8"
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
      "00782480",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:00782464",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00782670"
      ]
    ],
    [
      "unmatched:00782494",
      "READ",
      [
        "storage",
        "002bca2b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00782480",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007824bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00782670"
      ]
    ],
    [
      "007824ec",
      "READ",
      [
        "storage",
        "002bc9d7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782428 ["INT_ADD", "register:40f0:8", ["const:782428:8", "const:4:8"]]
- 00782428 ["CALL", null, ["ram:47acf4:8"]]
+ 00782480 ["INT_ADD", "register:40f0:8", ["const:782480:8", "const:4:8"]]
+ 00782480 ["CALL", null, ["ram:47ad34:8"]]
- 007824f8 ["INT_ADD", "register:40f0:8", ["const:7824f8:8", "const:4:8"]]
- 007824f8 ["CALL", null, ["callee:00447f34:8"]]
+ 00782550 ["INT_ADD", "register:40f0:8", ["const:782550:8", "const:4:8"]]
+ 00782550 ["CALL", null, ["callee:00447f34:8"]]
+ 007824f8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 007824f8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 007824f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:65:8"]]
+ 007824f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-cbfe9dfbebb6d32a2ecc28249f016039"></a>

### [`007827e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/007827e0.md) → [`00782838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782838.md) FUN_00782838

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
      "definition_site": "0078284c",
      "incomplete_value": false,
      "site": "00782850",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007827f4",
      "incomplete_value": false,
      "site": "007827f8",
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
      "00782850",
      "DATA",
      [
        "storage",
        "00c78680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782850",
      "DATA",
      [
        "storage",
        "00c78750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007827ec ["INT_ADD", "register:40f0:8", ["const:7827ec:8", "const:4:8"]]
- 007827ec ["CALL", null, ["callee:00c57f60:8"]]
+ 00782844 ["INT_ADD", "register:40f0:8", ["const:782844:8", "const:4:8"]]
+ 00782844 ["CALL", null, ["callee:00c57f60:8"]]
- 007827f4 ["COPY", "tmp:0:8", ["const:680:8"]]
- 007827f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007827f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007827f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078284c ["COPY", "tmp:0:8", ["const:750:8"]]
+ 0078284c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078284c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078284c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-20f1511abd827e646464b8b3073f32de"></a>

### [`00782804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782804.md) → [`0078285c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/0078285c.md) FUN_0078285c

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
      "definition_site": "00782860",
      "incomplete_value": false,
      "site": "00782864",
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
            "const:750:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782808",
      "incomplete_value": false,
      "site": "0078280c",
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
      "00782864",
      "DATA",
      [
        "storage",
        "00c78680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782864",
      "DATA",
      [
        "storage",
        "00c78750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782808 ["COPY", "tmp:0:8", ["const:680:8"]]
- 00782808 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782808 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782808 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782860 ["COPY", "tmp:0:8", ["const:750:8"]]
+ 00782860 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782860 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782860 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-decb05c2c1f0ceb7532a369793d2769b"></a>

### [`0078281c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/0078281c.md) → [`00782874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782874.md) FUN_00782874

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md) [`00759234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/00759234.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`0075928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075928c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 87.38% / 新版 87.38%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `store_value` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00782920",
      "incomplete_value": true,
      "site": "00782930",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:32c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007828c8",
      "incomplete_value": true,
      "site": "007828d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2ec:8"
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
      "definition_site": "00782924",
      "incomplete_value": true,
      "site": "00782934",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "007828cc",
      "incomplete_value": true,
      "site": "007828dc",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00782928",
      "incomplete_value": true,
      "site": "00782938",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:470:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007828d0",
      "incomplete_value": true,
      "site": "007828e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:430:8"
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
      "unmatched:00782874",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00782920",
      "READ",
      [
        "storage",
        "002c02ec",
        null,
        "string"
      ]
    ],
    [
      "00782924",
      "READ",
      [
        "storage",
        "002c02fa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007828cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00782920",
      "READ",
      [
        "storage",
        "002c032c",
        null,
        "string"
      ]
    ],
    [
      "00782924",
      "READ",
      [
        "storage",
        "002c033a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782868 ["INT_ADD", "register:40f0:8", ["const:782868:8", "const:4:8"]]
- 00782868 ["CALL", null, ["callee:0071c4b8:8"]]
+ 007828c0 ["INT_ADD", "register:40f0:8", ["const:7828c0:8", "const:4:8"]]
+ 007828c0 ["CALL", null, ["callee:0071c4b8:8"]]
- 00782880 ["INT_ADD", "register:40f0:8", ["const:782880:8", "const:4:8"]]
- 00782880 ["CALL", null, ["callee:0047ce14:8"]]
+ 007828d8 ["INT_ADD", "register:40f0:8", ["const:7828d8:8", "const:4:8"]]
+ 007828d8 ["CALL", null, ["callee:0047ce14:8"]]
- 007828c0 ["COPY", "tmp:0:8", ["const:2ec:8"]]
- 007828c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007828c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007828c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782918 ["COPY", "tmp:0:8", ["const:32c:8"]]
+ 00782918 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782918 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782918 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bd0b2f407648adb804d51c3310fe3969"></a>

### [`00782a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782a74.md) → [`00782acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782acc.md) FUN_00782acc

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
      "definition_site": "00782ae0",
      "incomplete_value": false,
      "site": "00782ae4",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782a88",
      "incomplete_value": false,
      "site": "00782a8c",
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
            "const:6f0:8"
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
      "00782ae4",
      "DATA",
      [
        "storage",
        "00c786f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782ae4",
      "DATA",
      [
        "storage",
        "00c787c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782a80 ["INT_ADD", "register:40f0:8", ["const:782a80:8", "const:4:8"]]
- 00782a80 ["CALL", null, ["callee:00c57f60:8"]]
+ 00782ad8 ["INT_ADD", "register:40f0:8", ["const:782ad8:8", "const:4:8"]]
+ 00782ad8 ["CALL", null, ["callee:00c57f60:8"]]
- 00782a88 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 00782a88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782a88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782a88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782ae0 ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 00782ae0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782ae0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782ae0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8cc25f78698f8aae77904d645be4a425"></a>

### [`00782a98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782a98.md) → [`00782af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782af0.md) FUN_00782af0

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
      "definition_site": "00782af4",
      "incomplete_value": false,
      "site": "00782af8",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782a9c",
      "incomplete_value": false,
      "site": "00782aa0",
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
      "00782af8",
      "DATA",
      [
        "storage",
        "00c786f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782af8",
      "DATA",
      [
        "storage",
        "00c787c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782a9c ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 00782a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782af4 ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 00782af4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782af4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782af4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2099d61f8d4635e2758c78f3e99e9471"></a>

### [`00782ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782ab0.md) → [`00782b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782b08.md) FUN_00782b08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00782ad4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00782b2c",
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
- 00782acc ["COPY", "register:40e8:8", ["register:8:8"]]
- 00782ad0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00782ad0 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00782ad4 ["INT_ADD", "register:40f0:8", ["const:782ad4:8", "const:4:8"]]
- 00782ad4 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-c58141d09aa47e18f58552259a84618d"></a>

### [`00782b70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782b70.md) → [`00782bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782bc8.md) FUN_00782bc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00782bd4",
      "incomplete_value": false,
      "site": "00782bd8",
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
      "definition_site": "00782b7c",
      "incomplete_value": false,
      "site": "00782b80",
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
      "00782bd4",
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
      "00782bd4",
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
- 00782b80 ["INT_ADD", "register:40f0:8", ["const:782b80:8", "const:4:8"]]
- 00782b80 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00782bd8 ["INT_ADD", "register:40f0:8", ["const:782bd8:8", "const:4:8"]]
+ 00782bd8 ["CALL", null, ["callee:0043b7b8:8"]]
- 00782b7c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00782b7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00782b7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00782b7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00782bd4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00782bd4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00782bd4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00782bd4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-788012223b1e87cb087328d6aba6f154"></a>

### [`00782b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782b88.md) → [`00782be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782be0.md) FUN_00782be0

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
      "definition_site": "00782c04",
      "incomplete_value": false,
      "site": "00782c04",
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
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782bac",
      "incomplete_value": false,
      "site": "00782bac",
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
            "const:7a0:8"
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
      "00782c04",
      "DATA",
      [
        "storage",
        "00c787a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782c04",
      "DATA",
      [
        "storage",
        "00c78870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782b9c ["INT_ADD", "register:40f0:8", ["const:782b9c:8", "const:4:8"]]
- 00782b9c ["CALL", null, ["callee:00c57f60:8"]]
+ 00782bf4 ["INT_ADD", "register:40f0:8", ["const:782bf4:8", "const:4:8"]]
+ 00782bf4 ["CALL", null, ["callee:00c57f60:8"]]
- 00782ba8 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 00782ba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782ba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782ba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782c00 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 00782c00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782c00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782c00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1cfab50e210f6c0efac633a4be3e587b"></a>

### [`00782bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782bd8.md) → [`00782c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782c30.md) FUN_00782c30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782c58",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782c00",
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
      "00782c58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00782c58",
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
- 00782c00 ["INT_ADD", "register:40f0:8", ["const:782c00:8", "const:4:8"]]
- 00782c00 ["CALL", null, ["ram:47acf4:8"]]
+ 00782c58 ["INT_ADD", "register:40f0:8", ["const:782c58:8", "const:4:8"]]
+ 00782c58 ["CALL", null, ["ram:47ad34:8"]]
- 00782c0c ["INT_ADD", "register:40f0:8", ["const:782c0c:8", "const:4:8"]]
- 00782c0c ["CALL", null, ["callee:0047ce14:8"]]
+ 00782c64 ["INT_ADD", "register:40f0:8", ["const:782c64:8", "const:4:8"]]
+ 00782c64 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-f1c9f5278b166b6c3e3f68b7b59ea76b"></a>

### [`00782c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782c78.md) → [`00782cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782cd0.md) FUN_00782cd0

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
      "definition_site": "00782ce4",
      "incomplete_value": false,
      "site": "00782ce8",
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
            "const:8f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782c8c",
      "incomplete_value": false,
      "site": "00782c90",
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
            "const:820:8"
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
      "00782ce8",
      "DATA",
      [
        "storage",
        "00c78820",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782ce8",
      "DATA",
      [
        "storage",
        "00c788f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782c84 ["INT_ADD", "register:40f0:8", ["const:782c84:8", "const:4:8"]]
- 00782c84 ["CALL", null, ["callee:00c57f60:8"]]
+ 00782cdc ["INT_ADD", "register:40f0:8", ["const:782cdc:8", "const:4:8"]]
+ 00782cdc ["CALL", null, ["callee:00c57f60:8"]]
- 00782c8c ["COPY", "tmp:0:8", ["const:820:8"]]
- 00782c8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782c8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782c8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782ce4 ["COPY", "tmp:0:8", ["const:8f0:8"]]
+ 00782ce4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782ce4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782ce4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a72cf1bd161b94ded32426c776ec7b99"></a>

### [`00782cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782cb4.md) → [`00782d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782d0c.md) FUN_00782d0c

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
      "site": "00782d30",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782cd8",
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
      "00782d30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00782d30",
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
- 00782cd8 ["INT_ADD", "register:40f0:8", ["const:782cd8:8", "const:4:8"]]
- 00782cd8 ["CALL", null, ["ram:47acf4:8"]]
+ 00782d30 ["INT_ADD", "register:40f0:8", ["const:782d30:8", "const:4:8"]]
+ 00782d30 ["CALL", null, ["ram:47ad34:8"]]
- 00782ce4 ["INT_ADD", "register:40f0:8", ["const:782ce4:8", "const:4:8"]]
- 00782ce4 ["CALL", null, ["callee:0047ce14:8"]]
+ 00782d3c ["INT_ADD", "register:40f0:8", ["const:782d3c:8", "const:4:8"]]
+ 00782d3c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b76387b4d1ff1ac964cb1bcfde09856c"></a>

### [`00782d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782d28.md) → [`00782d80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782d80.md) FUN_00782d80

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
      "definition_site": "00782d94",
      "incomplete_value": false,
      "site": "00782d98",
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
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00782d3c",
      "incomplete_value": false,
      "site": "00782d40",
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
            "const:8a0:8"
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
      "00782d98",
      "DATA",
      [
        "storage",
        "00c788a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782d98",
      "DATA",
      [
        "storage",
        "00c78970",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782d34 ["INT_ADD", "register:40f0:8", ["const:782d34:8", "const:4:8"]]
- 00782d34 ["CALL", null, ["callee:00c57f60:8"]]
+ 00782d8c ["INT_ADD", "register:40f0:8", ["const:782d8c:8", "const:4:8"]]
+ 00782d8c ["CALL", null, ["callee:00c57f60:8"]]
- 00782d3c ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 00782d3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782d3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782d3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782d94 ["COPY", "tmp:0:8", ["const:970:8"]]
+ 00782d94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782d94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782d94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9bb3c1c78add88e46b0dd04fd76e9ba1"></a>

### [`00782d64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782d64.md) → [`00782dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782dbc.md) FUN_00782dbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00782d8c",
      "incomplete_value": false,
      "site": "00782d94",
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
      "definition_site": "00782d90",
      "incomplete_value": false,
      "site": "00782d94",
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
      "unmatched:00782d88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00782de0",
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
- 00782d94 ["INT_ADD", "register:40f0:8", ["const:782d94:8", "const:4:8"]]
- 00782d94 ["CALL", null, ["callee:0047ce14:8"]]
+ 00782dec ["INT_ADD", "register:40f0:8", ["const:782dec:8", "const:4:8"]]
+ 00782dec ["CALL", null, ["callee:0047ce14:8"]]
- 00782d6c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00782d6c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00782dc4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00782dc4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00782d74 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00782d74 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00782dcc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00782dcc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-dd5edae8f654c7213213fb8ab1d493d6"></a>

### [`00782dd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782dd8.md) → [`00782e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782e30.md) FUN_00782e30

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
    "old": {
      "definition_site": "00782dec",
      "incomplete_value": false,
      "site": "00782df0",
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
            "const:920:8"
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
      "00782e48",
      "DATA",
      [
        "storage",
        "00c78920",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00782e48",
      "DATA",
      [
        "storage",
        "00c789f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00782de4 ["INT_ADD", "register:40f0:8", ["const:782de4:8", "const:4:8"]]
- 00782de4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00782e3c ["INT_ADD", "register:40f0:8", ["const:782e3c:8", "const:4:8"]]
+ 00782e3c ["CALL", null, ["callee:00c57f60:8"]]
- 00782dec ["COPY", "tmp:0:8", ["const:920:8"]]
- 00782dec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782dec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782dec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00782e44 ["COPY", "tmp:0:8", ["const:9f0:8"]]
+ 00782e44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00782e44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00782e44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8ebaf55e3594c73a12c5bff36f4d5b65"></a>

### [`00782e14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782e14.md) → [`00782e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782e6c.md) FUN_00782e6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782e90",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782e38",
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
      "site": "00782eb8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782e60",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00782e90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00782eb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00782e90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00782eb8",
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
- 00782e38 ["INT_ADD", "register:40f0:8", ["const:782e38:8", "const:4:8"]]
- 00782e38 ["CALL", null, ["ram:47acf4:8"]]
+ 00782e90 ["INT_ADD", "register:40f0:8", ["const:782e90:8", "const:4:8"]]
+ 00782e90 ["CALL", null, ["ram:47ad34:8"]]
- 00782e60 ["INT_ADD", "register:40f0:8", ["const:782e60:8", "const:4:8"]]
- 00782e60 ["CALL", null, ["ram:47acf4:8"]]
+ 00782eb8 ["INT_ADD", "register:40f0:8", ["const:782eb8:8", "const:4:8"]]
+ 00782eb8 ["CALL", null, ["ram:47ad34:8"]]
- 00782e44 ["INT_ADD", "register:40f0:8", ["const:782e44:8", "const:4:8"]]
- 00782e44 ["CALL", null, ["callee:0047ce14:8"]]
+ 00782e9c ["INT_ADD", "register:40f0:8", ["const:782e9c:8", "const:4:8"]]
+ 00782e9c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-18ba624588c6de047c719a0b04f2521d"></a>

### [`00782eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782eb0.md) → [`00782f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782f08.md) FUN_00782f08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00782ec8",
      "DATA",
      [
        "storage",
        "00c789a0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00782ecc",
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
      "00782f20",
      "DATA",
      [
        "storage",
        "00c78a70",
        null,
        "undefined *"
      ]
    ],
    [
      "00782f24",
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
- 00782ebc ["INT_ADD", "register:40f0:8", ["const:782ebc:8", "const:4:8"]]
- 00782ebc ["CALL", null, ["callee:00c57f60:8"]]
+ 00782f14 ["INT_ADD", "register:40f0:8", ["const:782f14:8", "const:4:8"]]
+ 00782f14 ["CALL", null, ["callee:00c57f60:8"]]
- 00782ec4 ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 00782ec4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782ec4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782ec4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00782ec8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00782ec8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-e7befaec74b7c45517d2e494b0fcc684"></a>

### [`00782eec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782eec.md) → [`00782f44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782f44.md) FUN_00782f44

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
      "site": "00782f68",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782f10",
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
      "00782f68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00782f68",
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
- 00782f10 ["INT_ADD", "register:40f0:8", ["const:782f10:8", "const:4:8"]]
- 00782f10 ["CALL", null, ["ram:47acf4:8"]]
+ 00782f68 ["INT_ADD", "register:40f0:8", ["const:782f68:8", "const:4:8"]]
+ 00782f68 ["CALL", null, ["ram:47ad34:8"]]
- 00782f1c ["INT_ADD", "register:40f0:8", ["const:782f1c:8", "const:4:8"]]
- 00782f1c ["CALL", null, ["callee:0047ce14:8"]]
+ 00782f74 ["INT_ADD", "register:40f0:8", ["const:782f74:8", "const:4:8"]]
+ 00782f74 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-fbd180efb876d2579c738b31bb5a913b"></a>

### [`00782f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782f60.md) → [`00782fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782fb8.md) FUN_00782fb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00782f78",
      "DATA",
      [
        "storage",
        "00c78a20",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00782f7c",
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
      "00782fd0",
      "DATA",
      [
        "storage",
        "00c78af0",
        null,
        "undefined *"
      ]
    ],
    [
      "00782fd4",
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
- 00782f6c ["INT_ADD", "register:40f0:8", ["const:782f6c:8", "const:4:8"]]
- 00782f6c ["CALL", null, ["callee:00c57f60:8"]]
+ 00782fc4 ["INT_ADD", "register:40f0:8", ["const:782fc4:8", "const:4:8"]]
+ 00782fc4 ["CALL", null, ["callee:00c57f60:8"]]
- 00782f74 ["COPY", "tmp:0:8", ["const:a20:8"]]
- 00782f74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00782f74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00782f74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00782f78 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00782f78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-2a8032066dd72b0c681c1ff630748f52"></a>

### [`00782f9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00782/00782f9c.md) → [`00782ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782ff4.md) FUN_00782ff4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "00783010",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00782fb8",
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
      "00783010",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00783010",
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
- 00782fb8 ["INT_ADD", "register:40f0:8", ["const:782fb8:8", "const:4:8"]]
- 00782fb8 ["CALL", null, ["ram:47acf4:8"]]
+ 00783010 ["INT_ADD", "register:40f0:8", ["const:783010:8", "const:4:8"]]
+ 00783010 ["CALL", null, ["ram:47ad34:8"]]
- 00782fc4 ["INT_ADD", "register:40f0:8", ["const:782fc4:8", "const:4:8"]]
- 00782fc4 ["CALL", null, ["callee:0047ce14:8"]]
+ 0078301c ["INT_ADD", "register:40f0:8", ["const:78301c:8", "const:4:8"]]
+ 0078301c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-a435eec844d1c7082e430022614d375d"></a>

### [`00783008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783008.md) → [`00783060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783060.md) FUN_00783060

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
      "definition_site": "00783074",
      "incomplete_value": false,
      "site": "00783078",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078301c",
      "incomplete_value": false,
      "site": "00783020",
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
            "const:aa0:8"
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
      "00783078",
      "DATA",
      [
        "storage",
        "00c78aa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783078",
      "DATA",
      [
        "storage",
        "00c78b70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783014 ["INT_ADD", "register:40f0:8", ["const:783014:8", "const:4:8"]]
- 00783014 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078306c ["INT_ADD", "register:40f0:8", ["const:78306c:8", "const:4:8"]]
+ 0078306c ["CALL", null, ["callee:00c57f60:8"]]
- 0078301c ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 0078301c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078301c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078301c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00783074 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 00783074 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00783074 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00783074 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9bcfe129d76e0da8c6ce008a74055fdb"></a>

### [`00783044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783044.md) → [`0078309c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078309c.md) FUN_0078309c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00c58580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58580.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00c58650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58650.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078308c",
      "incomplete_value": false,
      "site": "00783094",
      "value": [
        "leaf",
        "const:b:8"
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00783090",
      "incomplete_value": false,
      "site": "00783094",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 4,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00783054",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00783088",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007830ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007830e0",
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
- 00783094 ["INT_ADD", "register:40f0:8", ["const:783094:8", "const:4:8"]]
- 00783094 ["CALL", null, ["callee:0047ce14:8"]]
+ 007830ec ["INT_ADD", "register:40f0:8", ["const:7830ec:8", "const:4:8"]]
+ 007830ec ["CALL", null, ["callee:0047ce14:8"]]
- 0078304c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0078304c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 007830a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007830a4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00783054 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00783054 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00783054 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00783054 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-acad2d38131e3618b37400fda5d4fba1"></a>

### [`007830d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007830d8.md) → [`00783130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783130.md) FUN_00783130

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 33.33% / 新版 33.33%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007830e4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:007830f0",
      "DATA",
      [
        "storage",
        "00c78b20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078313c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "00783148",
      "DATA",
      [
        "storage",
        "00c78bf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007830dc ["COPY", "register:40e8:8", ["register:8:8"]]
- 007830e0 ["COPY", "register:4000:8", ["const:10:8"]]
- 007830e4 ["INT_ADD", "register:40f0:8", ["const:7830e4:8", "const:4:8"]]
- 007830e4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-7aa4bd10d222515214429d2130b873fa"></a>

### [`00783114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783114.md) → [`0078316c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078316c.md) FUN_0078316c

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
      "site": "00783190",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00783138",
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
      "00783190",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00783190",
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
- 00783138 ["INT_ADD", "register:40f0:8", ["const:783138:8", "const:4:8"]]
- 00783138 ["CALL", null, ["ram:47acf4:8"]]
+ 00783190 ["INT_ADD", "register:40f0:8", ["const:783190:8", "const:4:8"]]
+ 00783190 ["CALL", null, ["ram:47ad34:8"]]
- 00783144 ["INT_ADD", "register:40f0:8", ["const:783144:8", "const:4:8"]]
- 00783144 ["CALL", null, ["callee:0047ce14:8"]]
+ 0078319c ["INT_ADD", "register:40f0:8", ["const:78319c:8", "const:4:8"]]
+ 0078319c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-584c870385c1df0b00e1c07eb1b3f668"></a>

### [`00783188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783188.md) → [`007831e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007831e0.md) FUN_007831e0

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
    "old": {
      "definition_site": "0078319c",
      "incomplete_value": false,
      "site": "007831a0",
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
            "const:ba0:8"
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
      "007831f8",
      "DATA",
      [
        "storage",
        "00c78ba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007831f8",
      "DATA",
      [
        "storage",
        "00c78c70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783194 ["INT_ADD", "register:40f0:8", ["const:783194:8", "const:4:8"]]
- 00783194 ["CALL", null, ["callee:00c57f60:8"]]
+ 007831ec ["INT_ADD", "register:40f0:8", ["const:7831ec:8", "const:4:8"]]
+ 007831ec ["CALL", null, ["callee:00c57f60:8"]]
- 0078319c ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 0078319c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078319c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078319c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007831f4 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 007831f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007831f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007831f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7ce4145f41254286ab3b20f00c43e1b2"></a>

### [`007831c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007831c4.md) → [`0078321c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078321c.md) FUN_0078321c

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
      "site": "00783240",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007831e8",
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
      "00783240",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00783240",
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
- 007831e8 ["INT_ADD", "register:40f0:8", ["const:7831e8:8", "const:4:8"]]
- 007831e8 ["CALL", null, ["ram:47acf4:8"]]
+ 00783240 ["INT_ADD", "register:40f0:8", ["const:783240:8", "const:4:8"]]
+ 00783240 ["CALL", null, ["ram:47ad34:8"]]
- 007831f4 ["INT_ADD", "register:40f0:8", ["const:7831f4:8", "const:4:8"]]
- 007831f4 ["CALL", null, ["callee:0047ce14:8"]]
+ 0078324c ["INT_ADD", "register:40f0:8", ["const:78324c:8", "const:4:8"]]
+ 0078324c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-7d1d769ceb865dadebfc977f6523f9fe"></a>

### [`00783238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783238.md) → [`00783290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783290.md) FUN_00783290

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
    "old": {
      "definition_site": "0078324c",
      "incomplete_value": false,
      "site": "00783250",
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
            "const:c20:8"
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
      "007832a8",
      "DATA",
      [
        "storage",
        "00c78c20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007832a8",
      "DATA",
      [
        "storage",
        "00c78cf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783244 ["INT_ADD", "register:40f0:8", ["const:783244:8", "const:4:8"]]
- 00783244 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078329c ["INT_ADD", "register:40f0:8", ["const:78329c:8", "const:4:8"]]
+ 0078329c ["CALL", null, ["callee:00c57f60:8"]]
- 0078324c ["COPY", "tmp:0:8", ["const:c20:8"]]
- 0078324c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078324c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078324c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007832a4 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 007832a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007832a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007832a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9d966d97f755477bca3b88382400ae4b"></a>

### [`00783274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783274.md) → [`007832cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007832cc.md) FUN_007832cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0044bf14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044bf14.md) [`0044c02c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044c/0044c02c.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`0048eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048eef0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0044bf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044bf54.md) [`0044c06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c06c.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.09% / 新版 89.09%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007832c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "unmatched:007832d4",
      "READ",
      [
        "storage",
        "002bb263",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007832e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0078331c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0078332c",
      "READ",
      [
        "storage",
        "002bb20f",
        null,
        "string"
      ]
    ],
    [
      "00783340",
      "WRITE",
      [
        "storage",
        "Stack[-0x57]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007832a4 ["INT_ADD", "register:40f0:8", ["const:7832a4:8", "const:4:8"]]
- 007832a4 ["CALL", null, ["callee:0044c06c:8"]]
+ 007832fc ["INT_ADD", "register:40f0:8", ["const:7832fc:8", "const:4:8"]]
+ 007832fc ["CALL", null, ["callee:0044c06c:8"]]
- 007832a8 ["BRANCH", null, ["local:b3:8"]]
+ 00783300 ["BRANCH", null, ["local:b4:8"]]
- 007832b0 ["INT_ADD", "register:40f0:8", ["const:7832b0:8", "const:4:8"]]
- 007832b0 ["CALL", null, ["callee:0044bf54:8"]]
+ 00783308 ["INT_ADD", "register:40f0:8", ["const:783308:8", "const:4:8"]]
+ 00783308 ["CALL", null, ["callee:0044bf54:8"]]
~~~


<a id="compare-231dae08b959db11f38873341add33dd"></a>

### [`007833c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007833c8.md) → [`00783420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783420.md) FUN_00783420

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
      "definition_site": "00783434",
      "incomplete_value": false,
      "site": "00783438",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007833dc",
      "incomplete_value": false,
      "site": "007833e0",
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
            "const:ca0:8"
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
      "00783438",
      "DATA",
      [
        "storage",
        "00c78ca0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783438",
      "DATA",
      [
        "storage",
        "00c78d70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007833d4 ["INT_ADD", "register:40f0:8", ["const:7833d4:8", "const:4:8"]]
- 007833d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078342c ["INT_ADD", "register:40f0:8", ["const:78342c:8", "const:4:8"]]
+ 0078342c ["CALL", null, ["callee:00c57f60:8"]]
- 007833dc ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 007833dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007833dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007833dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00783434 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 00783434 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00783434 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00783434 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1a019884e16cd69a72ab62c3d0931155"></a>

### [`00783474`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783474.md) → [`007834cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007834cc.md) FUN_007834cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00783474",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00783480",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:0078348c",
      "DATA",
      [
        "storage",
        "00c78d20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007834cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007834d8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "007834e4",
      "DATA",
      [
        "storage",
        "00c78df0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783474 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00783474 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00783474 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00783474 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00783478 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0078347c ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-e1a63d2a2a638c382ace3ecde42f69d8"></a>

### [`007834b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007834b0.md) → [`00783508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783508.md) FUN_00783508

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0044ee3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044e/0044ee3c.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`0048eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048eef0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0044ee7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044ee7c.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

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
      "site": "007835d4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078357c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "unmatched:007834c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:007834dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "unmatched:007834f8",
      "READ",
      [
        "storage",
        "002bb263",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00783520",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00783534",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00783550",
      "READ",
      [
        "storage",
        "002bb20f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783524 ["INT_ADD", "register:40f0:8", ["const:783524:8", "const:4:8"]]
- 00783524 ["CALL", null, ["callee:0048ef30:8"]]
+ 0078357c ["INT_ADD", "register:40f0:8", ["const:78357c:8", "const:4:8"]]
+ 0078357c ["CALL", null, ["callee:0048ef30:8"]]
- 0078357c ["INT_ADD", "register:40f0:8", ["const:78357c:8", "const:4:8"]]
- 0078357c ["CALL", null, ["ram:48ccf8:8"]]
+ 007835d4 ["INT_ADD", "register:40f0:8", ["const:7835d4:8", "const:4:8"]]
+ 007835d4 ["CALL", null, ["ram:48cd38:8"]]
- 007834c8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 007834c8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 007834c8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-269a7bfa81f1e0f3b83d40b734b7229d"></a>

### [`00783610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783610.md) → [`00783668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783668.md) FUN_00783668

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00783610",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078361c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:00783628",
      "DATA",
      [
        "storage",
        "00c78da0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783668",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00783674",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "00783680",
      "DATA",
      [
        "storage",
        "00c78e70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783610 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00783610 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00783610 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00783610 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00783614 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00783618 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-2a0b791f6fc56fffb17a9f34ab68f60b"></a>

### [`0078364c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/0078364c.md) → [`007836a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007836a4.md) FUN_007836a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00783670",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:00783690",
      "DATA",
      [
        "storage",
        "00337d80",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:00783694",
      "DATA",
      [
        "storage",
        "00337d78",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "007836c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007836e8",
      "DATA",
      [
        "storage",
        "00337d80",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "007836ec",
      "DATA",
      [
        "storage",
        "00337d78",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783660 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00783660 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007836b8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007836b8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00783668 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00783668 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007836c0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 007836c0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00783670 ["INT_ADD", "register:40f0:8", ["const:783670:8", "const:4:8"]]
- 00783670 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-5f86553881b4a4cfdf7b2507a9893d48"></a>

### [`007836ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007836ec.md) → [`00783744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783744.md) FUN_00783744

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
      "definition_site": "00783758",
      "incomplete_value": false,
      "site": "0078375c",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00783700",
      "incomplete_value": false,
      "site": "00783704",
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
            "const:e20:8"
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
      "0078375c",
      "DATA",
      [
        "storage",
        "00c78e20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078375c",
      "DATA",
      [
        "storage",
        "00c78ef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007836f8 ["INT_ADD", "register:40f0:8", ["const:7836f8:8", "const:4:8"]]
- 007836f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00783750 ["INT_ADD", "register:40f0:8", ["const:783750:8", "const:4:8"]]
+ 00783750 ["CALL", null, ["callee:00c57f60:8"]]
- 00783700 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 00783700 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00783700 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00783700 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00783758 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 00783758 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00783758 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00783758 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c82b88c06c715c10dc9071f5063db9f"></a>

### [`00783728`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783728.md) → [`00783780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783780.md) FUN_00783780

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00783738",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00783744",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00783790",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078379c",
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
- 00783738 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00783738 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0078373c ["COPY", "register:40e8:8", ["register:8:8"]]
- 00783740 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00783740 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9aa64166467f9bbc4aaaddae47964a20"></a>

### [`00783790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/00783790.md) → [`007837e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/007837e8.md) FUN_007837e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "0078379c",
      "incomplete_value": false,
      "site": "007837a0",
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
            "const:ea0:8"
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
      "007837f8",
      "DATA",
      [
        "storage",
        "00c78ea0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007837f8",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078379c ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 0078379c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078379c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078379c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007837f4 ["COPY", "tmp:0:8", ["const:f70:8"]]
+ 007837f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007837f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007837f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7e80187d42f54a2dee09ab84983dd775"></a>

### [`007837b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007837b4.md) → [`0078380c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078380c.md) FUN_0078380c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "007837bc",
      "incomplete_value": false,
      "site": "007837c0",
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
            "const:ea0:8"
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
      "00783818",
      "DATA",
      [
        "storage",
        "00c78ea0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783818",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007837bc ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 007837bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007837bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007837bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00783814 ["COPY", "tmp:0:8", ["const:f70:8"]]
+ 00783814 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00783814 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00783814 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007837e0 ["INT_ADD", "register:40f0:8", ["const:7837e0:8", "const:4:8"]]
- 007837e0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00783838 ["INT_ADD", "register:40f0:8", ["const:783838:8", "const:4:8"]]
+ 00783838 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-92f2e0f24a695e9b10d74dd92af2b3fe"></a>

### [`007837f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007837f4.md) → [`0078384c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078384c.md) FUN_0078384c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0077c84c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0077c/0077c84c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0077c8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c8a4.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment

命令の説明率　旧版 94.64% / 新版 94.64%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078386c",
      "incomplete_value": false,
      "site": "00783874",
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
    "old": {
      "definition_site": "00783814",
      "incomplete_value": false,
      "site": "0078381c",
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
            "const:ea0:8"
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
    "new": null,
    "old": {
      "definition_site": "00783878",
      "incomplete_value": true,
      "site": "00783888",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "0078387c",
      "incomplete_value": true,
      "site": "00783888",
      "value": [
        "live",
        "register:40b0:8"
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
      "00783874",
      "DATA",
      [
        "storage",
        "00c78ea0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00783874",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00783888 ["INT_ADD", "register:40f0:8", ["const:783888:8", "const:4:8"]]
- 00783888 ["CALL", null, ["callee:00c580d0:8"]]
+ 007838e0 ["INT_ADD", "register:40f0:8", ["const:7838e0:8", "const:4:8"]]
+ 007838e0 ["CALL", null, ["callee:00c580d0:8"]]
- 0078380c ["INT_ADD", "register:40f0:8", ["const:78380c:8", "const:4:8"]]
- 0078380c ["CALL", null, ["callee:00c57f60:8"]]
+ 00783864 ["INT_ADD", "register:40f0:8", ["const:783864:8", "const:4:8"]]
+ 00783864 ["CALL", null, ["callee:00c57f60:8"]]
- 00783814 ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 00783814 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00783814 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00783814 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078386c ["COPY", "tmp:0:8", ["const:f70:8"]]
+ 0078386c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078386c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078386c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a2988cfb160ac2f0707de8573c9a93fd"></a>

### [`007838d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007838d4.md) → [`0078392c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/0078392c.md) FUN_0078392c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0077c84c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0077c/0077c84c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0077c8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c8a4.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00783974",
      "incomplete_value": true,
      "site": "00783978",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007839e0",
      "incomplete_value": true,
      "site": "007839e8",
      "value": [
        "live",
        "register:4040:8"
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
        "0078393c"
      ],
      [
        "FALL_THROUGH",
        "00783994"
      ]
    ],
    "kind": "store_condition",
    "new": {
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
    "old": {
      "definition_site": "00783938",
      "incomplete_value": true,
      "site": "00783954",
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
      "unmatched:00783904",
      "DATA",
      [
        "storage",
        "00c78ea0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0078393c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007839cc"
      ]
    ]
  ],
  "added": [
    [
      "0078395c",
      "DATA",
      [
        "storage",
        "00c78f70",
        null,
        "undefined *"
      ]
    ],
    [
      "00783994",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007839cc"
      ]
    ]
  ]
}
~~~


~~~diff
+ 00783954 ["COPY", "tmp:0:8", ["const:0:8"]]
+ 00783954 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00783954 ["COPY", "tmp:2:8", ["tmp:1:8"]]
+ 00783954 ["COPY", "tmp:3:8", ["tmp:0:8"]]
+ 00783958 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:18:8"]]
+ 00783958 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
+ 00783958 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
+ 00783958 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
- 00783978 ["INT_ADD", "register:40f0:8", ["const:783978:8", "const:4:8"]]
- 00783978 ["CALL", null, ["callee:0077c8a4:8"]]
+ 007839d0 ["INT_ADD", "register:40f0:8", ["const:7839d0:8", "const:4:8"]]
+ 007839d0 ["CALL", null, ["callee:0077c8a4:8"]]
~~~


<a id="compare-457d3158c92e29ff79088c22e08a0e8b"></a>

### [`007839e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007839e8.md) → [`00783a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783a40.md) FUN_00783a40

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.03% / 新版 76.03%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 35件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00783de4",
      "incomplete_value": true,
      "site": "00783dec",
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
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00783de8",
      "incomplete_value": false,
      "site": "00783dec",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00783e6c",
      "incomplete_value": true,
      "site": "00783e74",
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
    "ordinal": 34,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007839fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00783a00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00783a10",
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
      "00783a54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00783a58",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00783a68",
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
- 00783d94 ["INT_ADD", "register:40f0:8", ["const:783d94:8", "const:4:8"]]
- 00783d94 ["CALL", null, ["callee:0071c4b8:8"]]
+ 00783dec ["INT_ADD", "register:40f0:8", ["const:783dec:8", "const:4:8"]]
+ 00783dec ["CALL", null, ["callee:0071c4b8:8"]]
- 00783dec ["INT_ADD", "register:40f0:8", ["const:783dec:8", "const:4:8"]]
- 00783dec ["CALL", null, ["callee:00c5a900:8"]]
+ 00783e44 ["INT_ADD", "register:40f0:8", ["const:783e44:8", "const:4:8"]]
+ 00783e44 ["CALL", null, ["callee:00c5a900:8"]]
- 00783e74 ["INT_ADD", "register:40f0:8", ["const:783e74:8", "const:4:8"]]
- 00783e74 ["CALL", null, ["callee:00c5a900:8"]]
+ 00783ecc ["INT_ADD", "register:40f0:8", ["const:783ecc:8", "const:4:8"]]
+ 00783ecc ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-715b60a1a5fb1351941472280335d1cf"></a>

### [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) → [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) FUN_007842d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 12件 [`007839e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00783/007839e8.md) [`00796af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796af8.md) [`00878758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878758.md) [`00878f08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/00878f08.md) [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 3件 [`00c58430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58430.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a900.md)
- 新版 呼出元 12件 [`00783a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00783/00783a40.md) [`00796b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/00796b50.md) [`008787b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/008787b0.md) [`00878f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878f60.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 3件 [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9d0.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007842b8 ["INT_ADD", "register:40f0:8", ["const:7842b8:8", "const:4:8"]]
- 007842b8 ["CALL", null, ["callee:00c5a900:8"]]
+ 00784310 ["INT_ADD", "register:40f0:8", ["const:784310:8", "const:4:8"]]
+ 00784310 ["CALL", null, ["callee:00c5a900:8"]]
- 007842f0 ["INT_ADD", "register:40f0:8", ["const:7842f0:8", "const:4:8"]]
- 007842f0 ["CALL", null, ["callee:00c5a900:8"]]
+ 00784348 ["INT_ADD", "register:40f0:8", ["const:784348:8", "const:4:8"]]
+ 00784348 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-57b8029fbdab11234cc18197ad8d7980"></a>

### [`0078430c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/0078430c.md) → [`00784364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784364.md) FUN_00784364

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
    "old": {
      "definition_site": "00784330",
      "incomplete_value": false,
      "site": "00784330",
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
            "const:f20:8"
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
      "00784388",
      "DATA",
      [
        "storage",
        "00c78f20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00784388",
      "DATA",
      [
        "storage",
        "00c78ff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00784320 ["INT_ADD", "register:40f0:8", ["const:784320:8", "const:4:8"]]
- 00784320 ["CALL", null, ["callee:00c57f60:8"]]
+ 00784378 ["INT_ADD", "register:40f0:8", ["const:784378:8", "const:4:8"]]
+ 00784378 ["CALL", null, ["callee:00c57f60:8"]]
- 0078432c ["COPY", "tmp:0:8", ["const:f20:8"]]
- 0078432c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078432c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078432c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00784384 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 00784384 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00784384 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00784384 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad8a003e0b331e464aa866bad2255123"></a>

### [`0078435c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/0078435c.md) → [`007843b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007843b4.md) FUN_007843b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007843a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007843f8",
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
- 007843a0 ["INT_ADD", "register:40f0:8", ["const:7843a0:8", "const:4:8"]]
- 007843a0 ["CALL", null, ["ram:47acf4:8"]]
- 007843ac ["INT_ADD", "register:40f0:8", ["const:7843ac:8", "const:4:8"]]
- 007843ac ["CALL", null, ["callee:0047ce14:8"]]
+ 00784404 ["INT_ADD", "register:40f0:8", ["const:784404:8", "const:4:8"]]
+ 00784404 ["CALL", null, ["callee:0047ce14:8"]]
+ 007843f8 ["INT_ADD", "register:40f0:8", ["const:7843f8:8", "const:4:8"]]
+ 007843f8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-93cf1c9855b138f039855f98383f0b6a"></a>

### [`007843ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/007843ec.md) → [`00784444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784444.md) FUN_00784444

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `store_value` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00784468",
      "incomplete_value": false,
      "site": "0078446c",
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
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00784410",
      "incomplete_value": false,
      "site": "00784414",
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
            "const:fa0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0078445c",
      "incomplete_value": true,
      "site": "00784470",
      "value": [
        "LOAD",
        "16",
        [
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
                "register:4098:8"
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00784418",
      "value": [
        "live",
        "register:5000:16"
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
      "unmatched:007843f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078446c",
      "DATA",
      [
        "storage",
        "00c78fa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00784448",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078446c",
      "DATA",
      [
        "storage",
        "00c79070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007843f0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007843f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007843f4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00784400 ["INT_ADD", "register:40f0:8", ["const:784400:8", "const:4:8"]]
- 00784400 ["CALL", null, ["callee:00c57f60:8"]]
+ 00784458 ["INT_ADD", "register:40f0:8", ["const:784458:8", "const:4:8"]]
+ 00784458 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-3c1b4d91e7761a995bd6c42c01a16069"></a>

### [`00784454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784454.md) → [`007844ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007844ac.md) FUN_007844ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.06% / 新版 77.06%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 5件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 38件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007845c0",
      "incomplete_value": true,
      "site": "007845c4",
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
            "const:b8:8"
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
    "new": null,
    "old": {
      "definition_site": "00784648",
      "incomplete_value": true,
      "site": "0078464c",
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
            "const:88:8"
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
    "new": {
      "definition_site": "007846a8",
      "incomplete_value": true,
      "site": "007846b8",
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
      "unmatched:00784454",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00784458",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0078445c",
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
      "007844ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "007844b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "007844b4",
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
- 0078456c ["INT_ADD", "register:40f0:8", ["const:78456c:8", "const:4:8"]]
- 0078456c ["CALL", null, ["callee:0048ce94:8"]]
+ 007845c4 ["INT_ADD", "register:40f0:8", ["const:7845c4:8", "const:4:8"]]
+ 007845c4 ["CALL", null, ["callee:0048ce94:8"]]
- 007845c4 ["BRANCH", null, ["local:b43:8"]]
+ 0078461c ["BRANCH", null, ["local:b40:8"]]
- 007845dc ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 007845dc ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 007845dc ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 007845dc ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-78b61f311508e93a22b2b22427267e47"></a>

### [`00784c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784c58.md) → [`00784cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784cb0.md) FUN_00784cb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00784c80",
      "DATA",
      [
        "storage",
        "00c79010",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00784c8c",
      "READ",
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
      "00784cd8",
      "DATA",
      [
        "storage",
        "00c790e0",
        null,
        "undefined *"
      ]
    ],
    [
      "00784ce4",
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
- 00784c6c ["INT_ADD", "register:40f0:8", ["const:784c6c:8", "const:4:8"]]
- 00784c6c ["CALL", null, ["callee:00c57f60:8"]]
+ 00784cc4 ["INT_ADD", "register:40f0:8", ["const:784cc4:8", "const:4:8"]]
+ 00784cc4 ["CALL", null, ["callee:00c57f60:8"]]
- 00784c7c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00784c7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00784c7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00784c7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00784c80 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00784c80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-365145f6deb98988c404fcbf24ddbbc2"></a>

### [`00784c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784c98.md) → [`00784cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/00784cf0.md) FUN_00784cf0

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
    "old": {
      "definition_site": "00784c9c",
      "incomplete_value": false,
      "site": "00784ca0",
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
      "00784cf8",
      "DATA",
      [
        "storage",
        "00c79010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00784cf8",
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
- 00784c9c ["COPY", "tmp:0:8", ["const:10:8"]]
- 00784c9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00784c9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00784c9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00784cf4 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 00784cf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00784cf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00784cf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b2c5295684d1471679c752e133c35f7a"></a>

### [`0078512c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078512c.md) → [`00785184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785184.md) FUN_00785184

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
      "definition_site": "007851a8",
      "incomplete_value": false,
      "site": "007851a8",
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
      "definition_site": "00785150",
      "incomplete_value": false,
      "site": "00785150",
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
            "const:90:8"
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
      "007851a8",
      "DATA",
      [
        "storage",
        "00c79090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007851a8",
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
- 00785140 ["INT_ADD", "register:40f0:8", ["const:785140:8", "const:4:8"]]
- 00785140 ["CALL", null, ["callee:00c57f60:8"]]
+ 00785198 ["INT_ADD", "register:40f0:8", ["const:785198:8", "const:4:8"]]
+ 00785198 ["CALL", null, ["callee:00c57f60:8"]]
- 0078514c ["COPY", "tmp:0:8", ["const:90:8"]]
- 0078514c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078514c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078514c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007851a4 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 007851a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007851a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007851a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-88d647396e5e4f81ff151298be4755b7"></a>

### [`00785160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/00785160.md) → [`007851b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007851b8.md) FUN_007851b8

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
    "old": {
      "definition_site": "0078516c",
      "incomplete_value": false,
      "site": "0078516c",
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
      "007851c4",
      "DATA",
      [
        "storage",
        "00c79090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007851c4",
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
- 00785168 ["COPY", "tmp:0:8", ["const:90:8"]]
- 00785168 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00785168 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00785168 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007851c0 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 007851c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007851c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007851c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d7ab723fcc51a88b392f66ea07ba7d19"></a>

### [`0078517c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078517c.md) → [`007851d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007851d4.md) FUN_007851d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.80% / 新版 87.80%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00785208",
      "incomplete_value": false,
      "site": "00785210",
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
      "definition_site": "0078520c",
      "incomplete_value": false,
      "site": "00785210",
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
      "unmatched:007851a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007851ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:0078520c",
      "DATA",
      [
        "storage",
        "00333de0",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "007851f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00785204",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00785264",
      "DATA",
      [
        "storage",
        "00333de0",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 007851b8 ["INT_ADD", "register:40f0:8", ["const:7851b8:8", "const:4:8"]]
- 007851b8 ["CALL", null, ["callee:0047ce14:8"]]
+ 00785210 ["INT_ADD", "register:40f0:8", ["const:785210:8", "const:4:8"]]
+ 00785210 ["CALL", null, ["callee:0047ce14:8"]]
- 00785188 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 007851e0 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
- 00785190 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00785190 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 007851e8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007851e8 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-4d52bc9b64308b0eec137713cd4b313a"></a>

### [`0078524c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078524c.md) → [`007852a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007852a4.md) FUN_007852a4

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
    "old": {
      "definition_site": "00785260",
      "incomplete_value": false,
      "site": "00785264",
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
            "const:120:8"
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
      "007852bc",
      "DATA",
      [
        "storage",
        "00c79120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007852bc",
      "DATA",
      [
        "storage",
        "00c791f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00785258 ["INT_ADD", "register:40f0:8", ["const:785258:8", "const:4:8"]]
- 00785258 ["CALL", null, ["callee:00c57f60:8"]]
+ 007852b0 ["INT_ADD", "register:40f0:8", ["const:7852b0:8", "const:4:8"]]
+ 007852b0 ["CALL", null, ["callee:00c57f60:8"]]
- 00785260 ["COPY", "tmp:0:8", ["const:120:8"]]
- 00785260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00785260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00785260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007852b8 ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 007852b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007852b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007852b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e1a5763e0fb2f47394e84559dfd5730d"></a>

### [`00785288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/00785288.md) → [`007852e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007852e0.md) FUN_007852e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "007852d0",
      "incomplete_value": true,
      "site": "007852d0",
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
    "old": {
      "definition_site": "007852d8",
      "incomplete_value": false,
      "site": "007852e8",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "007852e0",
      "incomplete_value": false,
      "site": "007852e8",
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
            "const:a08:8"
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
      "00785324",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00785330",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00785338",
      "PARAM",
      [
        "storage",
        "00c77a08",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00785324",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00785330",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00785338",
      "PARAM",
      [
        "storage",
        "00c77ad8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007852e8 ["INT_ADD", "register:40f0:8", ["const:7852e8:8", "const:4:8"]]
- 007852e8 ["CALL", null, ["callee:00c586e0:8"]]
+ 00785340 ["INT_ADD", "register:40f0:8", ["const:785340:8", "const:4:8"]]
+ 00785340 ["CALL", null, ["callee:00c586e0:8"]]
- 0078535c ["INT_ADD", "register:40f0:8", ["const:78535c:8", "const:4:8"]]
- 0078535c ["CALL", null, ["callee:008b92f0:8"]]
+ 007853b4 ["INT_ADD", "register:40f0:8", ["const:7853b4:8", "const:4:8"]]
+ 007853b4 ["CALL", null, ["callee:008b92f0:8"]]
- 007852c0 ["INT_ADD", "register:40f0:8", ["const:7852c0:8", "const:4:8"]]
- 007852c0 ["CALL", null, ["callee:008b92e8:8"]]
+ 00785318 ["INT_ADD", "register:40f0:8", ["const:785318:8", "const:4:8"]]
+ 00785318 ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-fa5e080ca88284d56a4f08ac31c0a1f8"></a>

### [`0078548c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078548c.md) → [`007854e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007854e4.md) FUN_007854e4

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
      "definition_site": "007854f8",
      "incomplete_value": false,
      "site": "007854fc",
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
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007854a0",
      "incomplete_value": false,
      "site": "007854a4",
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
            "const:1a0:8"
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
      "007854fc",
      "DATA",
      [
        "storage",
        "00c791a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007854fc",
      "DATA",
      [
        "storage",
        "00c79270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00785498 ["INT_ADD", "register:40f0:8", ["const:785498:8", "const:4:8"]]
- 00785498 ["CALL", null, ["callee:00c57f60:8"]]
+ 007854f0 ["INT_ADD", "register:40f0:8", ["const:7854f0:8", "const:4:8"]]
+ 007854f0 ["CALL", null, ["callee:00c57f60:8"]]
- 007854a0 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 007854a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007854a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007854a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007854f8 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 007854f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007854f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007854f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-99245d3e3ee5e62daa640a6354a09518"></a>

### [`007854c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007854c8.md) → [`00785520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785520.md) FUN_00785520

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007854e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007854ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00785538",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00785544",
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
- 007854e0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007854e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007854e4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 007854e8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 007854e8 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-90aa97e378b2bdb6f3214f490ae0602c"></a>

### [`0078553c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078553c.md) → [`00785594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785594.md) FUN_00785594

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
      "definition_site": "007855a8",
      "incomplete_value": false,
      "site": "007855ac",
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
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00785550",
      "incomplete_value": false,
      "site": "00785554",
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
            "const:220:8"
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
      "007855ac",
      "DATA",
      [
        "storage",
        "00c79220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007855ac",
      "DATA",
      [
        "storage",
        "00c792f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00785548 ["INT_ADD", "register:40f0:8", ["const:785548:8", "const:4:8"]]
- 00785548 ["CALL", null, ["callee:00c57f60:8"]]
+ 007855a0 ["INT_ADD", "register:40f0:8", ["const:7855a0:8", "const:4:8"]]
+ 007855a0 ["CALL", null, ["callee:00c57f60:8"]]
- 00785550 ["COPY", "tmp:0:8", ["const:220:8"]]
- 00785550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00785550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00785550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007855a8 ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 007855a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007855a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007855a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8bd93bff1d23968f4018e9ab2e244c95"></a>

### [`00785578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/00785578.md) → [`007855d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007855d0.md) FUN_007855d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`007287e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00728/007287e8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00728840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/00728840.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

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
      "site": "007856ac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00785654",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00785694",
      "DATA",
      [
        "storage",
        "0039ab54",
        null,
        "dword"
      ]
    ],
    [
      "007856ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00785694",
      "DATA",
      [
        "storage",
        "0039ab54",
        null,
        "qword"
      ]
    ],
    [
      "007856ac",
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
- 00785654 ["INT_ADD", "register:40f0:8", ["const:785654:8", "const:4:8"]]
- 00785654 ["CALL", null, ["ram:47acf4:8"]]
+ 007856ac ["INT_ADD", "register:40f0:8", ["const:7856ac:8", "const:4:8"]]
+ 007856ac ["CALL", null, ["ram:47ad34:8"]]
- 0078558c ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 007855e4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00785594 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00785594 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 007855ec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 007855ec ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-c2edd465355e09fde16bb7793d194f2c"></a>

### [`007856a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007856a0.md) → [`007856f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007856f8.md) FUN_007856f8

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
    "old": {
      "definition_site": "007856b4",
      "incomplete_value": false,
      "site": "007856b8",
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
            "const:2a0:8"
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
      "00785710",
      "DATA",
      [
        "storage",
        "00c792a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785710",
      "DATA",
      [
        "storage",
        "00c79370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007856ac ["INT_ADD", "register:40f0:8", ["const:7856ac:8", "const:4:8"]]
- 007856ac ["CALL", null, ["callee:00c57f60:8"]]
+ 00785704 ["INT_ADD", "register:40f0:8", ["const:785704:8", "const:4:8"]]
+ 00785704 ["CALL", null, ["callee:00c57f60:8"]]
- 007856b4 ["COPY", "tmp:0:8", ["const:2a0:8"]]
- 007856b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007856b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007856b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078570c ["COPY", "tmp:0:8", ["const:370:8"]]
+ 0078570c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078570c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078570c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1003409889575c4520c56222ca3e8ef9"></a>

### [`007856dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007856dc.md) → [`00785734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785734.md) FUN_00785734

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
      "site": "00785758",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00785700",
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
      "00785758",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00785758",
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
- 00785700 ["INT_ADD", "register:40f0:8", ["const:785700:8", "const:4:8"]]
- 00785700 ["CALL", null, ["ram:47acf4:8"]]
+ 00785758 ["INT_ADD", "register:40f0:8", ["const:785758:8", "const:4:8"]]
+ 00785758 ["CALL", null, ["ram:47ad34:8"]]
- 0078570c ["INT_ADD", "register:40f0:8", ["const:78570c:8", "const:4:8"]]
- 0078570c ["CALL", null, ["callee:0047ce14:8"]]
+ 00785764 ["INT_ADD", "register:40f0:8", ["const:785764:8", "const:4:8"]]
+ 00785764 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-84583815b0030ad95026c2797de50cb6"></a>

### [`0078574c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078574c.md) → [`007857a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007857a4.md) FUN_007857a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0077a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0077a/0077a418.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 2件 [`0077a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077a/0077a470.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00785758",
      "incomplete_value": false,
      "site": "0078575c",
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
      "007857b0",
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
      "007857b0",
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
- 0078575c ["INT_ADD", "register:40f0:8", ["const:78575c:8", "const:4:8"]]
- 0078575c ["CALL", null, ["callee:00442970:8"]]
+ 007857b4 ["INT_ADD", "register:40f0:8", ["const:7857b4:8", "const:4:8"]]
+ 007857b4 ["CALL", null, ["callee:00442970:8"]]
- 00785758 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00785758 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00785758 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00785758 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007857b0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007857b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007857b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007857b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-79cf8caa1b48bddce9ab46f7877ea13a"></a>

### [`00785764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/00785764.md) → [`007857bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007857bc.md) FUN_007857bc

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
    "old": {
      "definition_site": "00785784",
      "incomplete_value": false,
      "site": "00785788",
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
            "const:320:8"
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
      "007857e0",
      "DATA",
      [
        "storage",
        "00c79320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007857e0",
      "DATA",
      [
        "storage",
        "00c793f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00785778 ["INT_ADD", "register:40f0:8", ["const:785778:8", "const:4:8"]]
- 00785778 ["CALL", null, ["callee:00c57f60:8"]]
+ 007857d0 ["INT_ADD", "register:40f0:8", ["const:7857d0:8", "const:4:8"]]
+ 007857d0 ["CALL", null, ["callee:00c57f60:8"]]
- 00785784 ["COPY", "tmp:0:8", ["const:320:8"]]
- 00785784 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00785784 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00785784 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007857dc ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 007857dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007857dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007857dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c476b39c96b45ae88136e96b2411561"></a>

### [`0078579c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078579c.md) → [`007857f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007857f4.md) FUN_007857f4

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
    "old": {
      "definition_site": "007857a0",
      "incomplete_value": false,
      "site": "007857a4",
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
            "const:320:8"
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
      "007857fc",
      "DATA",
      [
        "storage",
        "00c79320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007857fc",
      "DATA",
      [
        "storage",
        "00c793f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007857a0 ["COPY", "tmp:0:8", ["const:320:8"]]
- 007857a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007857a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007857a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007857f8 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 007857f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007857f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007857f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ab455ecf17c48bf4318498ef73d6dc86"></a>

### [`007857bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007857bc.md) → [`00785814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785814.md) FUN_00785814

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "00785838",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007857e0",
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
      "00785838",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00785838",
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
- 007857e0 ["INT_ADD", "register:40f0:8", ["const:7857e0:8", "const:4:8"]]
- 007857e0 ["CALL", null, ["ram:47acf4:8"]]
+ 00785838 ["INT_ADD", "register:40f0:8", ["const:785838:8", "const:4:8"]]
+ 00785838 ["CALL", null, ["ram:47ad34:8"]]
- 007857ec ["INT_ADD", "register:40f0:8", ["const:7857ec:8", "const:4:8"]]
- 007857ec ["CALL", null, ["callee:0047ce14:8"]]
+ 00785844 ["INT_ADD", "register:40f0:8", ["const:785844:8", "const:4:8"]]
+ 00785844 ["CALL", null, ["callee:0047ce14:8"]]
- 00785818 ["INT_ADD", "register:40f0:8", ["const:785818:8", "const:4:8"]]
- 00785818 ["CALL", null, ["callee:00851550:8"]]
+ 00785870 ["INT_ADD", "register:40f0:8", ["const:785870:8", "const:4:8"]]
+ 00785870 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-1d2a745b1ff3cd906345840c403c2b02"></a>

### [`007858b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007858b8.md) → [`00785910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785910.md) FUN_00785910

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
      "unmatched:007858b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:007858bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:007858dc",
      "DATA",
      [
        "storage",
        "00c793a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785910",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
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
      "00785934",
      "DATA",
      [
        "storage",
        "00c79470",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007858b8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 007858b8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 007858b8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 007858b8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 007858bc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 007858bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 007858c0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-364e3318a137a8628a6f16506ee412cf"></a>

### [`007858ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007858ec.md) → [`00785944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785944.md) FUN_00785944

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
      "definition_site": "00785950",
      "incomplete_value": false,
      "site": "00785950",
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
            "const:470:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007858f8",
      "incomplete_value": false,
      "site": "007858f8",
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
            "const:3a0:8"
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
      "00785950",
      "DATA",
      [
        "storage",
        "00c793a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785950",
      "DATA",
      [
        "storage",
        "00c79470",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007858f4 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 007858f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007858f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007858f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078594c ["COPY", "tmp:0:8", ["const:470:8"]]
+ 0078594c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078594c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078594c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-45f8157565cd8d4e8b6dcdb6ec11f847"></a>

### [`0078596c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/0078596c.md) → [`007859c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007859c4.md) FUN_007859c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 46.15% / 新版 46.15%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0078597c",
      "incomplete_value": false,
      "site": "00785980",
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
      "unmatched:00785970",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00785990",
      "DATA",
      [
        "storage",
        "00c79420",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00785994",
      "READ",
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
      "007859c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007859e8",
      "DATA",
      [
        "storage",
        "00c794f0",
        null,
        "undefined *"
      ]
    ],
    [
      "007859ec",
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
- 00785980 ["INT_ADD", "register:40f0:8", ["const:785980:8", "const:4:8"]]
- 00785980 ["CALL", null, ["callee:00c57f60:8"]]
+ 007859d8 ["INT_ADD", "register:40f0:8", ["const:7859d8:8", "const:4:8"]]
+ 007859d8 ["CALL", null, ["callee:00c57f60:8"]]
- 00785970 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00785970 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00785974 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e623dbb28022ab0faf900513e7c3085f"></a>

### [`007859a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007859a0.md) → [`007859f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/007859f8.md) FUN_007859f8

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
      "unmatched:007859ac",
      "DATA",
      [
        "storage",
        "00c79420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00785a04",
      "DATA",
      [
        "storage",
        "00c794f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007859a0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 007859a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 007859a4 ["COPY", "register:4048:8", ["const:c79000:8"]]
- 007859a8 ["COPY", "tmp:0:8", ["const:420:8"]]
- 007859a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007859a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007859a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4b2fc6782bfa5dd7b130e2d409b7b23c"></a>

### [`007859bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/007859bc.md) → [`00785a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785a14.md) FUN_00785a14

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`00802630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802630.md) [`008061c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/008061c8.md) [`008062a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/008062a4.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802688.md) [`00806220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806220.md) [`008062fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/008062fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.83% / 新版 86.83%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "007859f8",
      "incomplete_value": false,
      "site": "00785a04",
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
            "const:3ea:8"
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
      "definition_site": "00785a3c",
      "incomplete_value": true,
      "site": "00785a4c",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00785a40",
      "incomplete_value": true,
      "site": "00785a4c",
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
      "unmatched:007859bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:007859c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:007859c4",
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
      "00785a14",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00785a18",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00785a1c",
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
- 00785a04 ["INT_ADD", "register:40f0:8", ["const:785a04:8", "const:4:8"]]
- 00785a04 ["CALL", null, ["callee:00c58260:8"]]
+ 00785a5c ["INT_ADD", "register:40f0:8", ["const:785a5c:8", "const:4:8"]]
+ 00785a5c ["CALL", null, ["callee:00c58260:8"]]
- 00785a4c ["INT_ADD", "register:40f0:8", ["const:785a4c:8", "const:4:8"]]
- 00785a4c ["CALL", null, ["callee:00807850:8"]]
+ 00785aa4 ["INT_ADD", "register:40f0:8", ["const:785aa4:8", "const:4:8"]]
+ 00785aa4 ["CALL", null, ["callee:00807850:8"]]
- 00785a5c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00785a5c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00785ab4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00785ab4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-2525cd4c5dbcc9be946766e1ab51169e"></a>

### [`00785c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00785/00785c80.md) → [`00785cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00785/00785cd8.md) _INIT_134

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.23% / 新版 80.23%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00785ea0",
      "incomplete_value": false,
      "site": "00785eb4",
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
            "const:e70:8"
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
    "new": null,
    "old": {
      "definition_site": "00785ea8",
      "incomplete_value": false,
      "site": "00785eb4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00785f08",
      "incomplete_value": false,
      "site": "00785f0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00785eb0",
      "incomplete_value": false,
      "site": "00785eb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:f90:8"
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
      "unmatched:00785cb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00785cbc",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00785cc4",
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
      "00785d08",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00785d14",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00785d1c",
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
- 00785eb4 ["INT_ADD", "register:40f0:8", ["const:785eb4:8", "const:4:8"]]
- 00785eb4 ["CALL", null, ["callee:00c57f00:8"]]
+ 00785f0c ["INT_ADD", "register:40f0:8", ["const:785f0c:8", "const:4:8"]]
+ 00785f0c ["CALL", null, ["callee:00c57f00:8"]]
- 00785ee0 ["INT_ADD", "register:40f0:8", ["const:785ee0:8", "const:4:8"]]
- 00785ee0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00785f38 ["INT_ADD", "register:40f0:8", ["const:785f38:8", "const:4:8"]]
+ 00785f38 ["CALL", null, ["callee:00c57f80:8"]]
- 00785f00 ["INT_ADD", "register:40f0:8", ["const:785f00:8", "const:4:8"]]
- 00785f00 ["CALL", null, ["callee:00c57f80:8"]]
+ 00785f58 ["INT_ADD", "register:40f0:8", ["const:785f58:8", "const:4:8"]]
+ 00785f58 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-042e01bb172b56a89ae05c94b6db861b"></a>

### [`00786010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/00786010.md) → [`00786068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786068.md) FUN_00786068

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00764acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764acc.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00764b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764b24.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00786074",
      "incomplete_value": true,
      "site": "0078608c",
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
    "old": {
      "definition_site": "0078601c",
      "incomplete_value": true,
      "site": "00786034",
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
                "const:e0:8"
              ]
            ]
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
      "00786074",
      "READ",
      [
        "storage",
        "002c40e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00786074",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078601c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:e0:8"]]
- 0078601c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 0078601c ["COPY", "register:5008:8", ["const:0:8"]]
- 0078601c ["COPY", "register:5010:8", ["const:0:8"]]
+ 00786074 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:120:8"]]
+ 00786074 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00786074 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00786074 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-6c9c0c06aa76eca530248a308f5e839f"></a>

### [`0078603c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078603c.md) → [`00786094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786094.md) FUN_00786094

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) [`007877fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007877fc.md) · 呼出先 5件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007860f4",
      "incomplete_value": true,
      "site": "00786108",
      "value": [
        "live",
        "register:40c8:8"
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
      "definition_site": "007860f8",
      "incomplete_value": true,
      "site": "00786108",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "007860fc",
      "incomplete_value": true,
      "site": "00786108",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:007860d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007861a0"
      ]
    ]
  ],
  "added": [
    [
      "00786130",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007861a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 007860b0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 007860b0 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 00786108 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00786108 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 00786108 ["INT_ADD", "register:40f0:8", ["const:786108:8", "const:4:8"]]
- 00786108 ["CALL", null, ["callee:00c580d0:8"]]
+ 00786160 ["INT_ADD", "register:40f0:8", ["const:786160:8", "const:4:8"]]
+ 00786160 ["CALL", null, ["callee:00c580d0:8"]]
- 0078611c ["INT_ADD", "register:40f0:8", ["const:78611c:8", "const:4:8"]]
- 0078611c ["CALL", null, ["callee:00c57f80:8"]]
+ 00786174 ["INT_ADD", "register:40f0:8", ["const:786174:8", "const:4:8"]]
+ 00786174 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4fcc4ad04879d22169ceb4ef62188841"></a>

### [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) → [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) FUN_007861a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 16件 [`0078603c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078603c.md) [`007863ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/007863ec.md) [`0078680c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078680c.md) [`00786ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/00786ba8.md) [`00786cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/00786cd4.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 16件 [`00786094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786094.md) [`00786444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786444.md) [`00786864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786864.md) [`00786c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786c00.md) [`00786d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "007861a4",
      "incomplete_value": true,
      "site": "007861b0",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007861b8",
      "incomplete_value": true,
      "site": "007861c0",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00786248",
      "incomplete_value": true,
      "site": "00786254",
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
            "const:2f38:8"
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
      "unmatched:00786178",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786194",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:007863b0",
      "READ",
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
      "007861d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "007861ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00786408",
      "READ",
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
- 007861b0 ["INT_ADD", "register:40f0:8", ["const:7861b0:8", "const:4:8"]]
- 007861b0 ["CALL", null, ["callee:00801c9c:8"]]
+ 00786208 ["INT_ADD", "register:40f0:8", ["const:786208:8", "const:4:8"]]
+ 00786208 ["CALL", null, ["callee:00801c9c:8"]]
- 007861c0 ["INT_ADD", "register:40f0:8", ["const:7861c0:8", "const:4:8"]]
- 007861c0 ["CALL", null, ["callee:00801ce8:8"]]
+ 00786218 ["INT_ADD", "register:40f0:8", ["const:786218:8", "const:4:8"]]
+ 00786218 ["CALL", null, ["callee:00801ce8:8"]]
- 00786254 ["INT_ADD", "register:40f0:8", ["const:786254:8", "const:4:8"]]
- 00786254 ["CALL", null, ["callee:008b7a20:8"]]
+ 007862ac ["INT_ADD", "register:40f0:8", ["const:7862ac:8", "const:4:8"]]
+ 007862ac ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-496d5905e05e4cf6e8f82efbe23d83fc"></a>

### [`007863ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/007863ec.md) → [`00786444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786444.md) FUN_00786444

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) · 呼出先 14件 [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00788244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788244.md) [`00788248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788248.md) [`008b6f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f30.md)
- 新版 呼出元 1件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) · 呼出先 14件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`0078829c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078829c.md) [`007882a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007882a0.md) [`008b6f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f88.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.41% / 新版 83.41%

優先判定に残った影響 `call_argument_candidate` 10件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "0078665c",
      "incomplete_value": false,
      "site": "0078665c",
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
            "const:4b0:8"
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
    "new": null,
    "old": {
      "definition_site": "007864b0",
      "incomplete_value": true,
      "site": "007864c0",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007864b4",
      "incomplete_value": false,
      "site": "007864c0",
      "value": [
        "leaf",
        "const:ffffffff:8"
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
      "unmatched:007864d4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a467d8"
      ]
    ],
    [
      "unmatched:007864f0",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00786504",
      "DATA",
      [
        "storage",
        "00c8b758",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078652c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a467d8"
      ]
    ],
    [
      "00786548",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "0078655c",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007864c0 ["INT_ADD", "register:40f0:8", ["const:7864c0:8", "const:4:8"]]
- 007864c0 ["CALL", null, ["callee:00a46950:8"]]
+ 00786518 ["INT_ADD", "register:40f0:8", ["const:786518:8", "const:4:8"]]
+ 00786518 ["CALL", null, ["callee:00a46950:8"]]
+ 007864c0 ["COPY", "tmp:0:8", ["const:18:8"]]
+ 007864c0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 007864c0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 007864c0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00786508 ["INT_ADD", "register:40f0:8", ["const:786508:8", "const:4:8"]]
- 00786508 ["CALL", null, ["callee:005d8c08:8"]]
+ 00786560 ["INT_ADD", "register:40f0:8", ["const:786560:8", "const:4:8"]]
+ 00786560 ["CALL", null, ["callee:005d8c08:8"]]
~~~


<a id="compare-738ae9c492cdb3ab0daf495ded10083d"></a>

### [`0078680c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078680c.md) → [`00786864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786864.md) FUN_00786864

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) · 呼出先 13件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`007883b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/007883b4.md) [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md) [`00a46784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46784.md) [`00a468c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468c8.md)
- 新版 呼出元 1件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) · 呼出先 13件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`0078840c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078840c.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) [`00a467d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a467d8.md) [`00a4691c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4691c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00786940",
      "incomplete_value": true,
      "site": "00786944",
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
    "old": {
      "definition_site": "00786a98",
      "incomplete_value": true,
      "site": "00786a9c",
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
    "new": {
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
      "unmatched:00786824",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786850",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786900",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0078687c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007868a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00786958",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078686c ["INT_ADD", "register:40f0:8", ["const:78686c:8", "const:4:8"]]
- 0078686c ["CALL", null, ["callee:00a46950:8"]]
+ 007868c4 ["INT_ADD", "register:40f0:8", ["const:7868c4:8", "const:4:8"]]
+ 007868c4 ["CALL", null, ["callee:00a46950:8"]]
- 0078691c ["INT_ADD", "register:40f0:8", ["const:78691c:8", "const:4:8"]]
- 0078691c ["CALL", null, ["callee:005d8c08:8"]]
+ 00786974 ["INT_ADD", "register:40f0:8", ["const:786974:8", "const:4:8"]]
+ 00786974 ["CALL", null, ["callee:005d8c08:8"]]
- 00786970 ["INT_ADD", "register:40f0:8", ["const:786970:8", "const:4:8"]]
- 00786970 ["CALL", null, ["callee:00c57f50:8"]]
+ 007869c8 ["INT_ADD", "register:40f0:8", ["const:7869c8:8", "const:4:8"]]
+ 007869c8 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-b1eadc1a3437287a8536e8d1a08f83d5"></a>

### [`00786ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/00786ba8.md) → [`00786c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786c00.md) FUN_00786c00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) [`007877fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007877fc.md) · 呼出先 8件 [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`00a46b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46b48.md) [`00a46bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46bb8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 8件 [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00a46b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46b9c.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00786c80",
      "incomplete_value": true,
      "site": "00786c84",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00786c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00786d28"
      ]
    ],
    [
      "unmatched:00786c7c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00786cec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00786d28"
      ]
    ],
    [
      "00786cd4",
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
- 00786c84 ["INT_ADD", "register:40f0:8", ["const:786c84:8", "const:4:8"]]
- 00786c84 ["CALL", null, ["callee:00c57f50:8"]]
+ 00786cdc ["INT_ADD", "register:40f0:8", ["const:786cdc:8", "const:4:8"]]
+ 00786cdc ["CALL", null, ["callee:00c57f50:8"]]
- 00786bec ["INT_ADD", "register:40f0:8", ["const:786bec:8", "const:4:8"]]
- 00786bec ["CALL", null, ["callee:008b7a20:8"]]
+ 00786c44 ["INT_ADD", "register:40f0:8", ["const:786c44:8", "const:4:8"]]
+ 00786c44 ["CALL", null, ["callee:008b7a20:8"]]
- 00786bf0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00786bf0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00786c48 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00786c48 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-40dc6d42d1557a92e09d1f1f3ccf470d"></a>

### [`00786cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/00786cd4.md) → [`00786d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786d2c.md) FUN_00786d2c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) · 呼出先 16件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`0078852c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/0078852c.md) [`00788530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788530.md) [`008b6ec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ec4.md) [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md)
- 新版 呼出元 1件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) · 呼出先 16件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00788584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788584.md) [`00788588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788588.md) [`008b6f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f1c.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 54.99% / 新版 54.99%

優先判定に残った影響 `call_argument_candidate` 18件, `unresolved_branch_alignment` 24件, `unresolved_call_alignment` 37件, `unresolved_store_alignment` 42件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00786d5c",
      "incomplete_value": true,
      "site": "00786d6c",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00786dcc",
      "incomplete_value": false,
      "site": "00786dd4",
      "value": [
        "leaf",
        "const:27c:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00786d9c",
      "incomplete_value": true,
      "site": "00786dac",
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
      "unmatched:00786d44",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00786d48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00786db0"
      ]
    ],
    [
      "unmatched:00786db0",
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
      "00786d9c",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "00786da0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00786db0"
      ]
    ],
    [
      "00786e08",
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
- 00786d54 ["INT_ADD", "register:40f0:8", ["const:786d54:8", "const:4:8"]]
- 00786d54 ["CALL", null, ["callee:00c53d70:8"]]
+ 00786dac ["INT_ADD", "register:40f0:8", ["const:786dac:8", "const:4:8"]]
+ 00786dac ["CALL", null, ["callee:00c53d70:8"]]
- 00786d6c ["INT_ADD", "register:40f0:8", ["const:786d6c:8", "const:4:8"]]
- 00786d6c ["CALL", null, ["callee:00a46950:8"]]
+ 00786dc4 ["INT_ADD", "register:40f0:8", ["const:786dc4:8", "const:4:8"]]
+ 00786dc4 ["CALL", null, ["callee:00a46950:8"]]
- 00786d7c ["INT_ADD", "register:40f0:8", ["const:786d7c:8", "const:4:8"]]
- 00786d7c ["CALL", null, ["callee:00a46c80:8"]]
+ 00786dd4 ["INT_ADD", "register:40f0:8", ["const:786dd4:8", "const:4:8"]]
+ 00786dd4 ["CALL", null, ["callee:00a46c80:8"]]
~~~


<a id="compare-c5c36c9991d354a4cc517adacacd94a9"></a>

### [`00787480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787480.md) → [`007874d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/007874d8.md) FUN_007874d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) [`007877fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007877fc.md) · 呼出先 4件 [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`00a468f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468f0.md) [`00a46bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46bb8.md)
- 新版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 4件 [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)

変更の種類 call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.37% / 新版 97.37%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00787520",
      "incomplete_value": true,
      "site": "00787528",
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
  }
]
~~~


~~~diff
- 007874d0 ["INT_ADD", "register:40f0:8", ["const:7874d0:8", "const:4:8"]]
- 007874d0 ["CALL", null, ["callee:00a46c0c:8"]]
+ 00787528 ["INT_ADD", "register:40f0:8", ["const:787528:8", "const:4:8"]]
+ 00787528 ["CALL", null, ["callee:00a46c0c:8"]]
- 007874b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 007874b4 ["COPY", "tmp:1:4", ["register:4058:4"]]
- 007874b4 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 007874b4 ["COPY", "tmp:1:4", ["register:4050:4"]]
- 007874b8 ["INT_ADD", "register:40f0:8", ["const:7874b8:8", "const:4:8"]]
- 007874b8 ["CALL", null, ["callee:008b7a20:8"]]
+ 00787510 ["INT_ADD", "register:40f0:8", ["const:787510:8", "const:4:8"]]
+ 00787510 ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-cf098e3a813341c17fa98dc65a69d83f"></a>

### [`00787518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787518.md) → [`00787570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787570.md) FUN_00787570

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0078614c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/0078614c.md) [`007877fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007877fc.md) · 呼出先 11件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`00802630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802630.md) [`008061c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/008061c8.md) [`008062a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/008062a4.md)
- 新版 呼出元 2件 [`007861a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/007861a4.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802688.md) [`00806220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/00806220.md) [`008062fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/008062fc.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 96.27% / 新版 96.27%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0078758c",
      "WRITE",
      [
        "storage",
        "Stack[-0x64]",
        null,
        null
      ]
    ],
    [
      "unmatched:00787594",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00807104"
      ]
    ],
    [
      "unmatched:007875b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00787628"
      ]
    ]
  ],
  "added": [
    [
      "007875e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x64]",
        null,
        null
      ]
    ],
    [
      "007875ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0080715c"
      ]
    ],
    [
      "00787608",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00787628"
      ]
    ]
  ]
}
~~~


~~~diff
- 00787540 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00787540 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
+ 00787598 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00787598 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
- 00787550 ["INT_ADD", "register:40f0:8", ["const:787550:8", "const:4:8"]]
- 00787550 ["CALL", null, ["callee:008003d0:8"]]
+ 007875a8 ["INT_ADD", "register:40f0:8", ["const:7875a8:8", "const:4:8"]]
+ 007875a8 ["CALL", null, ["callee:008003d0:8"]]
- 00787588 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00787588 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 00787588 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 00787588 ["COPY", "tmp:3:4", ["const:0:4"]]
~~~


<a id="compare-1845e60a67204a47f3ed8832a6cb64a4"></a>

### [`00787738`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787738.md) → [`00787790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787790.md) FUN_00787790

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 2件 [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 44.90% / 新版 44.90%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00787754",
      "READ",
      [
        "storage",
        "00ca3f0c",
        null,
        "undefined4"
      ]
    ],
    [
      "007877bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00787774"
      ]
    ],
    [
      "unmatched:00787770",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b79a0"
      ]
    ]
  ],
  "added": [
    [
      "007877ac",
      "READ",
      [
        "storage",
        "00ca3fdc",
        null,
        "undefined4"
      ]
    ],
    [
      "007877bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "007877cc"
      ]
    ],
    [
      "007877c8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b79a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00787754 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f0c:8"]]
- 00787754 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00787754 ["INT_ZEXT", "register:40a0:8", ["tmp:1:4"]]
- 00787760 ["INT_ADD", "register:40f0:8", ["const:787760:8", "const:4:8"]]
- 00787760 ["CALL", null, ["callee:008b7a20:8"]]
+ 007877b8 ["INT_ADD", "register:40f0:8", ["const:7877b8:8", "const:4:8"]]
+ 007877b8 ["CALL", null, ["callee:008b7a20:8"]]
- 00787768 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00787768 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00787768 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00787768 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-47af2cf06b55017d740478332d0f7cfd"></a>

### [`007879e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007879e8.md) → [`00787a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787a40.md) FUN_00787a40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`00787b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787b20.md) [`00788534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788534.md) · 呼出先 3件 [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b6f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f40.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 3件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00787b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787b78.md) [`0078858c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078858c.md) · 呼出先 3件 [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 28.21% / 新版 28.21%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 17件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00787a04",
      "READ",
      [
        "storage",
        "00ca3f0c",
        null,
        "undefined4"
      ]
    ],
    [
      "00787a70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00787a44"
      ]
    ],
    [
      "unmatched:00787a24",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b7a20"
      ]
    ]
  ],
  "added": [
    [
      "00787a5c",
      "READ",
      [
        "storage",
        "00ca3fdc",
        null,
        "undefined4"
      ]
    ],
    [
      "00787a70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00787a9c"
      ]
    ],
    [
      "00787a7c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b7a20"
      ]
    ]
  ]
}
~~~


~~~diff
- 00787a04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:f0c:8"]]
- 00787a04 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00787a04 ["INT_ZEXT", "register:40a8:8", ["tmp:1:4"]]
- 00787a14 ["INT_ADD", "register:40f0:8", ["const:787a14:8", "const:4:8"]]
- 00787a14 ["CALL", null, ["callee:008b7a20:8"]]
+ 00787a6c ["INT_ADD", "register:40f0:8", ["const:787a6c:8", "const:4:8"]]
+ 00787a6c ["CALL", null, ["callee:008b7a20:8"]]
- 00787a1c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00787a1c ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
- 00787a1c ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
- 00787a1c ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
~~~


<a id="compare-7ef98c349058983b1dc4393be6c92d77"></a>

### [`00787b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787b20.md) → [`00787b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787b78.md) FUN_00787b78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 1件 [`007879e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007879e8.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 1件 [`00787a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787a40.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00787b5c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00787b5c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00787b5c ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
+ 00787bb4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00787bb4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00787bb4 ["CBRANCH", null, ["local:b2:8", "tmp:1:1"]]
- 00787b70 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 00787bc8 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00787b90 ["CBRANCH", null, ["local:b9:8", "register:102:1"]]
+ 00787be8 ["CBRANCH", null, ["local:b7:8", "register:102:1"]]
~~~


<a id="compare-39e77ce246d79ad0645ae86fa9ee7203"></a>

### [`00787c00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787c00.md) → [`00787c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787c58.md) FUN_00787c58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) · 呼出先 8件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 8件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.33% / 新版 96.33%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00787c80",
      "incomplete_value": true,
      "site": "00787c88",
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
    "old": {
      "definition_site": "00787ca4",
      "incomplete_value": true,
      "site": "00787ca8",
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
    "old": {
      "definition_site": "00787cc4",
      "incomplete_value": true,
      "site": "00787cc8",
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
      "00787cd8",
      "READ",
      [
        "storage",
        "00ca3f0c",
        null,
        "undefined4"
      ]
    ],
    [
      "00787cfc",
      "READ",
      [
        "storage",
        "00ca3f10",
        null,
        "undefined4"
      ]
    ],
    [
      "00787d1c",
      "READ",
      [
        "storage",
        "00ca3f14",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00787cd8",
      "READ",
      [
        "storage",
        "00ca3fdc",
        null,
        "undefined4"
      ]
    ],
    [
      "00787cfc",
      "READ",
      [
        "storage",
        "00ca3fe0",
        null,
        "undefined4"
      ]
    ],
    [
      "00787d1c",
      "READ",
      [
        "storage",
        "00ca3fe4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00787c88 ["INT_ADD", "register:40f0:8", ["const:787c88:8", "const:4:8"]]
- 00787c88 ["CALL", null, ["callee:008b7a20:8"]]
+ 00787ce0 ["INT_ADD", "register:40f0:8", ["const:787ce0:8", "const:4:8"]]
+ 00787ce0 ["CALL", null, ["callee:008b7a20:8"]]
- 00787ca8 ["INT_ADD", "register:40f0:8", ["const:787ca8:8", "const:4:8"]]
- 00787ca8 ["CALL", null, ["callee:008b7a20:8"]]
+ 00787d00 ["INT_ADD", "register:40f0:8", ["const:787d00:8", "const:4:8"]]
+ 00787d00 ["CALL", null, ["callee:008b7a20:8"]]
- 00787cc8 ["INT_ADD", "register:40f0:8", ["const:787cc8:8", "const:4:8"]]
- 00787cc8 ["CALL", null, ["callee:008b7a20:8"]]
+ 00787d20 ["INT_ADD", "register:40f0:8", ["const:787d20:8", "const:4:8"]]
+ 00787d20 ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-c2997e5550cd46802647eb9b34624d2e"></a>

### [`00787db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787db4.md) → [`00787e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787e0c.md) FUN_00787e0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00787c00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/00787c00.md) · 呼出先 6件 [`00468c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`00729aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00729/00729aa4.md)
- 新版 呼出元 1件 [`00787c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787c58.md) · 呼出先 6件 [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`00729afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729afc.md)

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
      "site": "00787e4c",
      "value": [
        "leaf",
        "ram:729afc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00787df4",
      "value": [
        "leaf",
        "ram:729aa4:8"
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
      "00787e4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00729aa4"
      ]
    ]
  ],
  "added": [
    [
      "00787e4c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00729afc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00787df4 ["INT_ADD", "register:40f0:8", ["const:787df4:8", "const:4:8"]]
- 00787df4 ["CALL", null, ["ram:729aa4:8"]]
+ 00787e4c ["INT_ADD", "register:40f0:8", ["const:787e4c:8", "const:4:8"]]
+ 00787e4c ["CALL", null, ["ram:729afc:8"]]
- 00787e14 ["INT_ADD", "register:40f0:8", ["const:787e14:8", "const:4:8"]]
- 00787e14 ["CALL", null, ["callee:0046a928:8"]]
+ 00787e6c ["INT_ADD", "register:40f0:8", ["const:787e6c:8", "const:4:8"]]
+ 00787e6c ["CALL", null, ["callee:0046a928:8"]]
- 00787e50 ["INT_ADD", "register:40f0:8", ["const:787e50:8", "const:4:8"]]
- 00787e50 ["CALL", null, ["callee:00469c44:8"]]
+ 00787ea8 ["INT_ADD", "register:40f0:8", ["const:787ea8:8", "const:4:8"]]
+ 00787ea8 ["CALL", null, ["callee:00469c44:8"]]
~~~


<a id="compare-3065210a0e05622a90ac970710c1dedd"></a>

### [`00788060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788060.md) → [`007880b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007880b8.md) FUN_007880b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00764acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764acc.md) · 呼出先 2件 [`0057bea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0057b/0057bea8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00764b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764b24.md) · 呼出先 2件 [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.04% / 新版 98.04%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:007880e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078814c"
      ]
    ]
  ],
  "added": [
    [
      "0078813c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0078814c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078809c ["COPY", "register:0:8", ["register:4048:8"]]
- 0078809c ["INT_ADD", "register:40f0:8", ["const:78809c:8", "const:4:8"]]
- 0078809c ["CALLIND", null, ["register:0:8"]]
+ 007880f4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007880f4 ["INT_ADD", "register:40f0:8", ["const:7880f4:8", "const:4:8"]]
+ 007880f4 ["CALLIND", null, ["register:0:8"]]
- 007880c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007880c8 ["INT_ADD", "register:40f0:8", ["const:7880c8:8", "const:4:8"]]
- 007880c8 ["CALLIND", null, ["register:0:8"]]
+ 00788120 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00788120 ["INT_ADD", "register:40f0:8", ["const:788120:8", "const:4:8"]]
+ 00788120 ["CALLIND", null, ["register:0:8"]]
- 007880d8 ["INT_ADD", "register:40f0:8", ["const:7880d8:8", "const:4:8"]]
- 007880d8 ["CALL", null, ["callee:0057bee8:8"]]
+ 00788130 ["INT_ADD", "register:40f0:8", ["const:788130:8", "const:4:8"]]
+ 00788130 ["CALL", null, ["callee:0057bee8:8"]]
~~~


<a id="compare-f4ab7f8c32c35e739fc9d6f31a72344c"></a>

### [`0078812c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/0078812c.md) → [`00788184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788184.md) FUN_00788184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00764acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764acc.md) · 呼出先 2件 [`007887b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/007887b4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00764b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764b24.md) · 呼出先 2件 [`0078880c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078880c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.43% / 新版 78.43%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00788130",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00788134",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00788148",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00788188",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0078818c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "007881a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0078812c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 00788130 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00788130 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00788130 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00788130 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00788134 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00788134 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00788134 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00788134 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-16ed8500189d7091e58635f3dbf6093c"></a>

### [`007881fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/007881fc.md) → [`00788254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788254.md) FUN_00788254

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00788264",
      "incomplete_value": false,
      "site": "00788268",
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
      "unmatched:00788220",
      "DATA",
      [
        "storage",
        "00c794b0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00788224",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00788228",
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
      "00788278",
      "DATA",
      [
        "storage",
        "00c79580",
        null,
        "undefined *"
      ]
    ],
    [
      "0078827c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00788280",
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
- 00788210 ["INT_ADD", "register:40f0:8", ["const:788210:8", "const:4:8"]]
- 00788210 ["CALL", null, ["callee:00c57f60:8"]]
+ 00788268 ["INT_ADD", "register:40f0:8", ["const:788268:8", "const:4:8"]]
+ 00788268 ["CALL", null, ["callee:00c57f60:8"]]
- 0078821c ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 0078821c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078821c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078821c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00788220 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00788220 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00788220 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00788220 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-35ad2cb35553ca8583931894196cb7e4"></a>

### [`00788230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788230.md) → [`00788288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788288.md) FUN_00788288

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
    "old": {
      "definition_site": "0078823c",
      "incomplete_value": false,
      "site": "0078823c",
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
            "const:4b0:8"
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
      "00788294",
      "DATA",
      [
        "storage",
        "00c794b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00788294",
      "DATA",
      [
        "storage",
        "00c79580",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00788238 ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 00788238 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00788238 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00788238 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00788290 ["COPY", "tmp:0:8", ["const:580:8"]]
+ 00788290 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00788290 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00788290 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a27ed0b5cde361c1e85b988ad7775822"></a>

### [`0078824c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/0078824c.md) → [`007882a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007882a4.md) FUN_007882a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468d8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)

変更の種類 call, call_argument_candidate, call_target, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007882bc",
      "incomplete_value": true,
      "site": "007882c0",
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
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078832c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007882d4",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "00788338",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007882e0",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:00788250",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078832c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00788338",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007882a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0078832c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00788338",
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
- 00788268 ["INT_ADD", "register:40f0:8", ["const:788268:8", "const:4:8"]]
- 00788268 ["CALL", null, ["callee:008b6efc:8"]]
+ 007882c0 ["INT_ADD", "register:40f0:8", ["const:7882c0:8", "const:4:8"]]
+ 007882c0 ["CALL", null, ["callee:008b6efc:8"]]
- 007882d4 ["INT_ADD", "register:40f0:8", ["const:7882d4:8", "const:4:8"]]
- 007882d4 ["CALL", null, ["ram:47acf4:8"]]
+ 0078832c ["INT_ADD", "register:40f0:8", ["const:78832c:8", "const:4:8"]]
+ 0078832c ["CALL", null, ["ram:47ad34:8"]]
- 007882e0 ["INT_ADD", "register:40f0:8", ["const:7882e0:8", "const:4:8"]]
- 007882e0 ["CALL", null, ["ram:47acf4:8"]]
+ 00788338 ["INT_ADD", "register:40f0:8", ["const:788338:8", "const:4:8"]]
+ 00788338 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-27a4a971f0bf0ca6126cad0ce1b9a5ab"></a>

### [`00788350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788350.md) → [`007883a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007883a8.md) FUN_007883a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00788374",
      "incomplete_value": false,
      "site": "00788378",
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
            "const:530:8"
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
      "007883d0",
      "DATA",
      [
        "storage",
        "00c79530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007883d0",
      "DATA",
      [
        "storage",
        "00c79600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00788364 ["INT_ADD", "register:40f0:8", ["const:788364:8", "const:4:8"]]
- 00788364 ["CALL", null, ["callee:00c57f60:8"]]
+ 007883bc ["INT_ADD", "register:40f0:8", ["const:7883bc:8", "const:4:8"]]
+ 007883bc ["CALL", null, ["callee:00c57f60:8"]]
- 00788374 ["COPY", "tmp:0:8", ["const:530:8"]]
- 00788374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00788374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00788374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007883cc ["COPY", "tmp:0:8", ["const:600:8"]]
+ 007883cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007883cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007883cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-59db094b78d646ee6ee16fc8e1fed241"></a>

### [`00788390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788390.md) → [`007883e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/007883e8.md) FUN_007883e8

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
    "old": {
      "definition_site": "00788394",
      "incomplete_value": false,
      "site": "00788398",
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
            "const:530:8"
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
      "007883f0",
      "DATA",
      [
        "storage",
        "00c79530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007883f0",
      "DATA",
      [
        "storage",
        "00c79600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00788394 ["COPY", "tmp:0:8", ["const:530:8"]]
- 00788394 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00788394 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00788394 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007883ec ["COPY", "tmp:0:8", ["const:600:8"]]
+ 007883ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007883ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007883ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d2f6d2a7c04876476cbec148542d998e"></a>

### [`007883b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/007883b8.md) → [`00788410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788410.md) FUN_00788410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`007877fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007877fc.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468d8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00787854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787854.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)

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
      "site": "007884a0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788448",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "007884ac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788454",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "007884a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007884ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007884a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007884ac",
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
- 00788448 ["INT_ADD", "register:40f0:8", ["const:788448:8", "const:4:8"]]
- 00788448 ["CALL", null, ["ram:47acf4:8"]]
+ 007884a0 ["INT_ADD", "register:40f0:8", ["const:7884a0:8", "const:4:8"]]
+ 007884a0 ["CALL", null, ["ram:47ad34:8"]]
- 00788454 ["INT_ADD", "register:40f0:8", ["const:788454:8", "const:4:8"]]
- 00788454 ["CALL", null, ["ram:47acf4:8"]]
+ 007884ac ["INT_ADD", "register:40f0:8", ["const:7884ac:8", "const:4:8"]]
+ 007884ac ["CALL", null, ["ram:47ad34:8"]]
- 007883d8 ["INT_ADD", "register:40f0:8", ["const:7883d8:8", "const:4:8"]]
- 007883d8 ["CALL", null, ["callee:008b6efc:8"]]
+ 00788430 ["INT_ADD", "register:40f0:8", ["const:788430:8", "const:4:8"]]
+ 00788430 ["CALL", null, ["callee:008b6efc:8"]]
~~~


