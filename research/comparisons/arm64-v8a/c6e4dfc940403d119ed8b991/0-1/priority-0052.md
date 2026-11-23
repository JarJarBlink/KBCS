# v16.0.1 → v16.0.2 · 最優先の変更候補 (52)

[一覧の目次](README.md)

<a id="compare-02d7a1a96528e54008fd38d15e9b6784"></a>

### [`008acc38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acc38.md) → [`008acc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc90.md) FUN_008acc90

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
      "site": "008accb4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008acc5c",
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
      "008accb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008accb4",
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
- 008acc5c ["INT_ADD", "register:40f0:8", ["const:8acc5c:8", "const:4:8"]]
- 008acc5c ["CALL", null, ["ram:47acf4:8"]]
+ 008accb4 ["INT_ADD", "register:40f0:8", ["const:8accb4:8", "const:4:8"]]
+ 008accb4 ["CALL", null, ["ram:47ad34:8"]]
- 008acc68 ["INT_ADD", "register:40f0:8", ["const:8acc68:8", "const:4:8"]]
- 008acc68 ["CALL", null, ["callee:0047ce14:8"]]
+ 008accc0 ["INT_ADD", "register:40f0:8", ["const:8accc0:8", "const:4:8"]]
+ 008accc0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-45e41fab58bade162f7c02dd721ead3c"></a>

### [`008accac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008accac.md) → [`008acd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acd04.md) FUN_008acd04

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
      "definition_site": "008acd18",
      "incomplete_value": false,
      "site": "008acd1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008accc0",
      "incomplete_value": false,
      "site": "008accc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:7b0:8"
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
      "008acd1c",
      "DATA",
      [
        "storage",
        "00c837b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008acd1c",
      "DATA",
      [
        "storage",
        "00c83880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008accb8 ["INT_ADD", "register:40f0:8", ["const:8accb8:8", "const:4:8"]]
- 008accb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008acd10 ["INT_ADD", "register:40f0:8", ["const:8acd10:8", "const:4:8"]]
+ 008acd10 ["CALL", null, ["callee:00c57f60:8"]]
- 008accc0 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 008accc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008accc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008accc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008acd18 ["COPY", "tmp:0:8", ["const:880:8"]]
+ 008acd18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008acd18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008acd18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4eda832c66f3dbf748b183429ddf4107"></a>

### [`008acd18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acd18.md) → [`008acd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acd70.md) FUN_008acd70

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
      "definition_site": "008acd84",
      "incomplete_value": false,
      "site": "008acd88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008acd2c",
      "incomplete_value": false,
      "site": "008acd30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:830:8"
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
      "008acd88",
      "DATA",
      [
        "storage",
        "00c83830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008acd88",
      "DATA",
      [
        "storage",
        "00c83900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acd24 ["INT_ADD", "register:40f0:8", ["const:8acd24:8", "const:4:8"]]
- 008acd24 ["CALL", null, ["callee:00c57f60:8"]]
+ 008acd7c ["INT_ADD", "register:40f0:8", ["const:8acd7c:8", "const:4:8"]]
+ 008acd7c ["CALL", null, ["callee:00c57f60:8"]]
- 008acd2c ["COPY", "tmp:0:8", ["const:830:8"]]
- 008acd2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acd2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acd2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008acd84 ["COPY", "tmp:0:8", ["const:900:8"]]
+ 008acd84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008acd84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008acd84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-facac817ce3ef636546c6bfce232b78e"></a>

### [`008acd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acd54.md) → [`008acdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acdac.md) FUN_008acdac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 13件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`00862980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00862/00862980.md) [`008acfd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acfd4.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`008629d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/008629d8.md) [`008ad02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad02c.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.00% / 新版 93.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ace98",
      "incomplete_value": false,
      "site": "008acea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ace40",
      "incomplete_value": false,
      "site": "008ace48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:8a0:8"
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
      "008ace74",
      "READ",
      [
        "storage",
        "002b95ef",
        null,
        "string"
      ]
    ],
    [
      "008ace74",
      "READ",
      [
        "storage",
        "002b87a1",
        null,
        "string"
      ]
    ],
    [
      "008ace78",
      "READ",
      [
        "storage",
        "002b95fc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008ace74",
      "READ",
      [
        "storage",
        "002b959b",
        null,
        "string"
      ]
    ],
    [
      "008ace74",
      "READ",
      [
        "storage",
        "002b874d",
        null,
        "string"
      ]
    ],
    [
      "008ace78",
      "READ",
      [
        "storage",
        "002b95a8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acd78 ["INT_ADD", "register:40f0:8", ["const:8acd78:8", "const:4:8"]]
- 008acd78 ["CALL", null, ["callee:00851550:8"]]
+ 008acdd0 ["INT_ADD", "register:40f0:8", ["const:8acdd0:8", "const:4:8"]]
+ 008acdd0 ["CALL", null, ["callee:00851550:8"]]
- 008acd84 ["INT_ADD", "register:40f0:8", ["const:8acd84:8", "const:4:8"]]
- 008acd84 ["CALL", null, ["callee:008bb568:8"]]
+ 008acddc ["INT_ADD", "register:40f0:8", ["const:8acddc:8", "const:4:8"]]
+ 008acddc ["CALL", null, ["callee:008bb568:8"]]
- 008acd8c ["INT_ADD", "register:40f0:8", ["const:8acd8c:8", "const:4:8"]]
- 008acd8c ["CALL", null, ["callee:00851550:8"]]
+ 008acde4 ["INT_ADD", "register:40f0:8", ["const:8acde4:8", "const:4:8"]]
+ 008acde4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-67de7c8ed7f7f710ca1cfd311d3bccce"></a>

### [`008acfc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acfc4.md) → [`008ad01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad01c.md) FUN_008ad01c

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
      "definition_site": "008ad020",
      "incomplete_value": false,
      "site": "008ad024",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008acfc8",
      "incomplete_value": false,
      "site": "008acfcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:8a0:8"
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
      "008ad024",
      "DATA",
      [
        "storage",
        "00c838a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad024",
      "DATA",
      [
        "storage",
        "00c83970",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008acfc8 ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 008acfc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008acfc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008acfc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad020 ["COPY", "tmp:0:8", ["const:970:8"]]
+ 008ad020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d6ee3712bfd82f760e15eebf5ed54d34"></a>

### [`008acfdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acfdc.md) → [`008ad034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad034.md) FUN_008ad034

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
      "site": "008ad058",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ad000",
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
      "008ad058",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ad058",
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
- 008ad000 ["INT_ADD", "register:40f0:8", ["const:8ad000:8", "const:4:8"]]
- 008ad000 ["CALL", null, ["ram:47acf4:8"]]
+ 008ad058 ["INT_ADD", "register:40f0:8", ["const:8ad058:8", "const:4:8"]]
+ 008ad058 ["CALL", null, ["ram:47ad34:8"]]
- 008ad00c ["INT_ADD", "register:40f0:8", ["const:8ad00c:8", "const:4:8"]]
- 008ad00c ["CALL", null, ["callee:0047ce14:8"]]
+ 008ad064 ["INT_ADD", "register:40f0:8", ["const:8ad064:8", "const:4:8"]]
+ 008ad064 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-c5e5f50145904de20d015894e5d56dfc"></a>

### [`008ad050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad050.md) → [`008ad0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad0a8.md) FUN_008ad0a8

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
      "definition_site": "008ad0bc",
      "incomplete_value": false,
      "site": "008ad0c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad064",
      "incomplete_value": false,
      "site": "008ad068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:930:8"
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
      "008ad0c0",
      "DATA",
      [
        "storage",
        "00c83930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad0c0",
      "DATA",
      [
        "storage",
        "00c83a00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad05c ["INT_ADD", "register:40f0:8", ["const:8ad05c:8", "const:4:8"]]
- 008ad05c ["CALL", null, ["callee:00c57f60:8"]]
+ 008ad0b4 ["INT_ADD", "register:40f0:8", ["const:8ad0b4:8", "const:4:8"]]
+ 008ad0b4 ["CALL", null, ["callee:00c57f60:8"]]
- 008ad064 ["COPY", "tmp:0:8", ["const:930:8"]]
- 008ad064 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad064 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad064 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad0bc ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 008ad0bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad0bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad0bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6cb0f491a7fa291f2ef0393ab7202432"></a>

### [`008ad074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad074.md) → [`008ad0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad0cc.md) FUN_008ad0cc

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
      "definition_site": "008ad0d0",
      "incomplete_value": false,
      "site": "008ad0d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad078",
      "incomplete_value": false,
      "site": "008ad07c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:930:8"
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
      "008ad0d4",
      "DATA",
      [
        "storage",
        "00c83930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad0d4",
      "DATA",
      [
        "storage",
        "00c83a00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad078 ["COPY", "tmp:0:8", ["const:930:8"]]
- 008ad078 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad078 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad078 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad0d0 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 008ad0d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad0d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad0d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-562aed8dfd572cfc407b7acbeaf8732e"></a>

### [`008ad18c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad18c.md) → [`008ad1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad1e4.md) FUN_008ad1e4

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
      "definition_site": "008ad1f8",
      "incomplete_value": false,
      "site": "008ad1fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad1a0",
      "incomplete_value": false,
      "site": "008ad1a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "008ad1fc",
      "DATA",
      [
        "storage",
        "00c839a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad1fc",
      "DATA",
      [
        "storage",
        "00c83a70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad198 ["INT_ADD", "register:40f0:8", ["const:8ad198:8", "const:4:8"]]
- 008ad198 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ad1f0 ["INT_ADD", "register:40f0:8", ["const:8ad1f0:8", "const:4:8"]]
+ 008ad1f0 ["CALL", null, ["callee:00c57f60:8"]]
- 008ad1a0 ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 008ad1a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad1f8 ["COPY", "tmp:0:8", ["const:a70:8"]]
+ 008ad1f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad1f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad1f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cd685c1b1ce55f6546d1e44c26578792"></a>

### [`008ad1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad1b0.md) → [`008ad208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad208.md) FUN_008ad208

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
      "definition_site": "008ad20c",
      "incomplete_value": false,
      "site": "008ad210",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad1b4",
      "incomplete_value": false,
      "site": "008ad1b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:9a0:8"
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
      "008ad210",
      "DATA",
      [
        "storage",
        "00c839a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad210",
      "DATA",
      [
        "storage",
        "00c83a70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad1b4 ["COPY", "tmp:0:8", ["const:9a0:8"]]
- 008ad1b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad20c ["COPY", "tmp:0:8", ["const:a70:8"]]
+ 008ad20c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad20c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad20c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-49370d519ae2fdc613179aa16d66cbef"></a>

### [`008ad1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad1c8.md) → [`008ad220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad220.md) FUN_008ad220

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`008ad308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad308.md) [`008ad30c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad30c.md) [`00b3a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3a/00b3a5b8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008ad360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad360.md) [`008ad364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad364.md) [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ad24c",
      "incomplete_value": true,
      "site": "008ad254",
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
            "const:ae0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad1f4",
      "incomplete_value": true,
      "site": "008ad1fc",
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
            "const:a10:8"
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
      "008ad254",
      "DATA",
      [
        "storage",
        "00c83a10",
        null,
        "undefined *"
      ]
    ],
    [
      "008ad288",
      "READ",
      [
        "storage",
        "00c83a30",
        null,
        "pointer"
      ]
    ],
    [
      "008ad288",
      "READ",
      [
        "storage",
        "00c83a38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad254",
      "DATA",
      [
        "storage",
        "00c83ae0",
        null,
        "undefined *"
      ]
    ],
    [
      "008ad288",
      "READ",
      [
        "storage",
        "00c83b00",
        null,
        "pointer"
      ]
    ],
    [
      "008ad288",
      "READ",
      [
        "storage",
        "00c83b08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad1f4 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 008ad1f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad1f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad24c ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 008ad24c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad24c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad24c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ad208 ["INT_ADD", "register:40f0:8", ["const:8ad208:8", "const:4:8"]]
- 008ad208 ["CALL", null, ["callee:00b3a654:8"]]
+ 008ad260 ["INT_ADD", "register:40f0:8", ["const:8ad260:8", "const:4:8"]]
+ 008ad260 ["CALL", null, ["callee:00b3a654:8"]]
- 008ad234 ["COPY", "register:0:8", ["register:4040:8"]]
- 008ad234 ["INT_ADD", "register:40f0:8", ["const:8ad234:8", "const:4:8"]]
- 008ad234 ["CALLIND", null, ["register:0:8"]]
+ 008ad28c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ad28c ["INT_ADD", "register:40f0:8", ["const:8ad28c:8", "const:4:8"]]
+ 008ad28c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a41a7b4a60ba695f05d852ca5fa4364f"></a>

### [`008ad2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad2d4.md) → [`008ad32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad32c.md) FUN_008ad32c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ad340",
      "incomplete_value": true,
      "site": "008ad344",
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
            "const:ae0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad2e8",
      "incomplete_value": true,
      "site": "008ad2ec",
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
            "const:a10:8"
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
      "008ad344",
      "DATA",
      [
        "storage",
        "00c83a10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad344",
      "DATA",
      [
        "storage",
        "00c83ae0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad2e0 ["INT_ADD", "register:40f0:8", ["const:8ad2e0:8", "const:4:8"]]
- 008ad2e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ad338 ["INT_ADD", "register:40f0:8", ["const:8ad338:8", "const:4:8"]]
+ 008ad338 ["CALL", null, ["callee:00c57f60:8"]]
- 008ad2e8 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 008ad2e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad2e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad2e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad340 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 008ad340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-34719b8514588ce54599cc6f95b5676c"></a>

### [`008ad2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad2f8.md) → [`008ad350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad350.md) FUN_008ad350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ad354",
      "incomplete_value": true,
      "site": "008ad358",
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
            "const:ae0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad2fc",
      "incomplete_value": true,
      "site": "008ad300",
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
            "const:a10:8"
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
      "008ad358",
      "DATA",
      [
        "storage",
        "00c83a10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad358",
      "DATA",
      [
        "storage",
        "00c83ae0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad2fc ["COPY", "tmp:0:8", ["const:a10:8"]]
- 008ad2fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad2fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad2fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad354 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 008ad354 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad354 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad354 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-acc9f805304484978ba5aaf71fdfe77b"></a>

### [`008ad6b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad6b8.md) → [`008ad710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad710.md) FUN_008ad710

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
      "definition_site": "008ad724",
      "incomplete_value": false,
      "site": "008ad728",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad6cc",
      "incomplete_value": false,
      "site": "008ad6d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "008ad728",
      "DATA",
      [
        "storage",
        "00c83a80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad728",
      "DATA",
      [
        "storage",
        "00c83b50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad6c4 ["INT_ADD", "register:40f0:8", ["const:8ad6c4:8", "const:4:8"]]
- 008ad6c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ad71c ["INT_ADD", "register:40f0:8", ["const:8ad71c:8", "const:4:8"]]
+ 008ad71c ["CALL", null, ["callee:00c57f60:8"]]
- 008ad6cc ["COPY", "tmp:0:8", ["const:a80:8"]]
- 008ad6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad724 ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 008ad724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-863c39be23219fae86d341902021bd16"></a>

### [`008ad6dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad6dc.md) → [`008ad734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad734.md) FUN_008ad734

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ad738",
      "incomplete_value": true,
      "site": "008ad73c",
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
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad6e0",
      "incomplete_value": true,
      "site": "008ad6e4",
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
      "008ad73c",
      "DATA",
      [
        "storage",
        "00c83a80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad73c",
      "DATA",
      [
        "storage",
        "00c83b50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad6e0 ["COPY", "tmp:0:8", ["const:a80:8"]]
- 008ad6e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad6e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad6e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad738 ["COPY", "tmp:0:8", ["const:b50:8"]]
+ 008ad738 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad738 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad738 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-12d8a910ba66b80aa06ada06d02b1a5b"></a>

### [`008ad6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad6f4.md) → [`008ad74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad74c.md) FUN_008ad74c

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
      "site": "008ad770",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ad718",
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
      "008ad770",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ad770",
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
- 008ad718 ["INT_ADD", "register:40f0:8", ["const:8ad718:8", "const:4:8"]]
- 008ad718 ["CALL", null, ["ram:47acf4:8"]]
+ 008ad770 ["INT_ADD", "register:40f0:8", ["const:8ad770:8", "const:4:8"]]
+ 008ad770 ["CALL", null, ["ram:47ad34:8"]]
- 008ad724 ["INT_ADD", "register:40f0:8", ["const:8ad724:8", "const:4:8"]]
- 008ad724 ["CALL", null, ["callee:0047ce14:8"]]
+ 008ad77c ["INT_ADD", "register:40f0:8", ["const:8ad77c:8", "const:4:8"]]
+ 008ad77c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-e8c5d9bd74d7c93cbd0eed01bd2e1f01"></a>

### [`008ad768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad768.md) → [`008ad7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7c0.md) FUN_008ad7c0

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
      "definition_site": "008ad7d4",
      "incomplete_value": false,
      "site": "008ad7d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad77c",
      "incomplete_value": false,
      "site": "008ad780",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:b30:8"
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
      "008ad7d8",
      "DATA",
      [
        "storage",
        "00c83b30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad7d8",
      "DATA",
      [
        "storage",
        "00c83c00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad774 ["INT_ADD", "register:40f0:8", ["const:8ad774:8", "const:4:8"]]
- 008ad774 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ad7cc ["INT_ADD", "register:40f0:8", ["const:8ad7cc:8", "const:4:8"]]
+ 008ad7cc ["CALL", null, ["callee:00c57f60:8"]]
- 008ad77c ["COPY", "tmp:0:8", ["const:b30:8"]]
- 008ad77c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad77c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad77c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad7d4 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 008ad7d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad7d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad7d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e81babb1a1cabd2dcd5a741ef31294ca"></a>

### [`008ad78c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad78c.md) → [`008ad7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7e4.md) FUN_008ad7e4

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
      "definition_site": "008ad7e8",
      "incomplete_value": false,
      "site": "008ad7ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad790",
      "incomplete_value": false,
      "site": "008ad794",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:b30:8"
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
      "008ad7ec",
      "DATA",
      [
        "storage",
        "00c83b30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ad7ec",
      "DATA",
      [
        "storage",
        "00c83c00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad790 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 008ad790 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ad790 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ad790 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ad7e8 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 008ad7e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad7e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ad7e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8a9aaf4c8b9fb35631b37aa39375d968"></a>

### [`008ad7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad7a4.md) → [`008ad7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7fc.md) FUN_008ad7fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 20件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md)
- 新版 呼出元 0件  · 呼出先 20件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.39% / 新版 92.39%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ad948",
      "incomplete_value": false,
      "site": "008ad950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad8f0",
      "incomplete_value": false,
      "site": "008ad8f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c20:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ad9ec",
      "incomplete_value": false,
      "site": "008ad9f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad994",
      "incomplete_value": false,
      "site": "008ad99c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ad9c8",
      "incomplete_value": false,
      "site": "008ad9d0",
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
            "const:d7c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ad970",
      "incomplete_value": false,
      "site": "008ad978",
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
            "const:dd8:8"
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
      "008ad894",
      "READ",
      [
        "storage",
        "002a6db7",
        null,
        "string"
      ]
    ],
    [
      "008ad894",
      "READ",
      [
        "storage",
        "002a6dc7",
        null,
        "string"
      ]
    ],
    [
      "008ad898",
      "READ",
      [
        "storage",
        "002c2780",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008ad894",
      "READ",
      [
        "storage",
        "002a6d5b",
        null,
        "string"
      ]
    ],
    [
      "008ad894",
      "READ",
      [
        "storage",
        "002a6d6b",
        null,
        "string"
      ]
    ],
    [
      "008ad898",
      "READ",
      [
        "storage",
        "002c27c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008ad8a0 ["INT_ADD", "register:40f0:8", ["const:8ad8a0:8", "const:4:8"]]
- 008ad8a0 ["CALL", null, ["callee:00851550:8"]]
+ 008ad8f8 ["INT_ADD", "register:40f0:8", ["const:8ad8f8:8", "const:4:8"]]
+ 008ad8f8 ["CALL", null, ["callee:00851550:8"]]
- 008ad978 ["INT_ADD", "register:40f0:8", ["const:8ad978:8", "const:4:8"]]
- 008ad978 ["CALL", null, ["callee:00c58260:8"]]
+ 008ad9d0 ["INT_ADD", "register:40f0:8", ["const:8ad9d0:8", "const:4:8"]]
+ 008ad9d0 ["CALL", null, ["callee:00c58260:8"]]
- 008ada24 ["INT_ADD", "register:40f0:8", ["const:8ada24:8", "const:4:8"]]
- 008ada24 ["CALL", null, ["callee:008d2af8:8"]]
+ 008ada7c ["INT_ADD", "register:40f0:8", ["const:8ada7c:8", "const:4:8"]]
+ 008ada7c ["CALL", null, ["callee:008d2af8:8"]]
~~~


<a id="compare-9ca45bf29921ab8830f578b7cf8562f6"></a>

### [`008adbe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008adbe8.md) → [`008adc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adc40.md) FUN_008adc40

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
      "definition_site": "008adc54",
      "incomplete_value": false,
      "site": "008adc58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008adbfc",
      "incomplete_value": false,
      "site": "008adc00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
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
      "008adc58",
      "DATA",
      [
        "storage",
        "00c83ba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adc58",
      "DATA",
      [
        "storage",
        "00c83c70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adbf4 ["INT_ADD", "register:40f0:8", ["const:8adbf4:8", "const:4:8"]]
- 008adbf4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008adc4c ["INT_ADD", "register:40f0:8", ["const:8adc4c:8", "const:4:8"]]
+ 008adc4c ["CALL", null, ["callee:00c57f60:8"]]
- 008adbfc ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 008adbfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adbfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adbfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008adc54 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 008adc54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008adc54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008adc54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58feb08d3966acd49ae114f465dc5a91"></a>

### [`008adc0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008adc0c.md) → [`008adc64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adc64.md) FUN_008adc64

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
      "definition_site": "008adc68",
      "incomplete_value": false,
      "site": "008adc6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008adc10",
      "incomplete_value": false,
      "site": "008adc14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
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
      "008adc6c",
      "DATA",
      [
        "storage",
        "00c83ba0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adc6c",
      "DATA",
      [
        "storage",
        "00c83c70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adc10 ["COPY", "tmp:0:8", ["const:ba0:8"]]
- 008adc10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adc10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adc10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008adc68 ["COPY", "tmp:0:8", ["const:c70:8"]]
+ 008adc68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008adc68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008adc68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ee6ba295bb1adbe0ec513d18220e337b"></a>

### [`008adc68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008adc68.md) → [`008adcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adcc0.md) FUN_008adcc0

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
      "definition_site": "008adcd4",
      "incomplete_value": false,
      "site": "008adcd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008adc7c",
      "incomplete_value": false,
      "site": "008adc80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
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
      "008adcd8",
      "DATA",
      [
        "storage",
        "00c83c20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adcd8",
      "DATA",
      [
        "storage",
        "00c83cf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adc74 ["INT_ADD", "register:40f0:8", ["const:8adc74:8", "const:4:8"]]
- 008adc74 ["CALL", null, ["callee:00c57f60:8"]]
+ 008adccc ["INT_ADD", "register:40f0:8", ["const:8adccc:8", "const:4:8"]]
+ 008adccc ["CALL", null, ["callee:00c57f60:8"]]
- 008adc7c ["COPY", "tmp:0:8", ["const:c20:8"]]
- 008adc7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adc7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adc7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008adcd4 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 008adcd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008adcd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008adcd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bacfbdbea1168057c569d1a0f43a4298"></a>

### [`008adc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008adc8c.md) → [`008adce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adce4.md) FUN_008adce4

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
      "definition_site": "008adce8",
      "incomplete_value": false,
      "site": "008adcec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008adc90",
      "incomplete_value": false,
      "site": "008adc94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:c20:8"
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
      "008adcec",
      "DATA",
      [
        "storage",
        "00c83c20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008adcec",
      "DATA",
      [
        "storage",
        "00c83cf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adc90 ["COPY", "tmp:0:8", ["const:c20:8"]]
- 008adc90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008adc90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008adc90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008adce8 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 008adce8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008adce8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008adce8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4f4e0977b368d69c1073cae374109899"></a>

### [`008adce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008adce8.md) → [`008add40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008add40.md) FUN_008add40

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
      "definition_site": "008add64",
      "incomplete_value": false,
      "site": "008add64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008add0c",
      "incomplete_value": false,
      "site": "008add0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:cb0:8"
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
      "008add64",
      "DATA",
      [
        "storage",
        "00c83cb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008add64",
      "DATA",
      [
        "storage",
        "00c83d80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008adcfc ["INT_ADD", "register:40f0:8", ["const:8adcfc:8", "const:4:8"]]
- 008adcfc ["CALL", null, ["callee:00c57f60:8"]]
+ 008add54 ["INT_ADD", "register:40f0:8", ["const:8add54:8", "const:4:8"]]
+ 008add54 ["CALL", null, ["callee:00c57f60:8"]]
- 008add08 ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 008add08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008add08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008add08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008add60 ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 008add60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008add60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008add60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3aa3d7124255ddc5f95772b54f0b327b"></a>

### [`008add38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008add38.md) → [`008add90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008add90.md) FUN_008add90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00733124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00733/00733124.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00aacea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aacea4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0073317c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/0073317c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00aacf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aacf14.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 98.21% / 新版 98.21%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008addc8",
      "incomplete_value": true,
      "site": "008addc8",
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
            "const:a20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008add70",
      "incomplete_value": true,
      "site": "008add70",
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
            "const:920:8"
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
      "008addb8",
      "READ",
      [
        "storage",
        "01123920",
        null,
        "undefined1"
      ]
    ],
    [
      "008addc8",
      "WRITE",
      [
        "storage",
        "01123920",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "008addb8",
      "READ",
      [
        "storage",
        "01123a20",
        null,
        "undefined1"
      ]
    ],
    [
      "008addc8",
      "WRITE",
      [
        "storage",
        "01123a20",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 008add70 ["COPY", "tmp:0:4", ["const:0:4"]]
- 008add70 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 008add70 ["INT_ADD", "tmp:2:8", ["register:4040:8", "const:920:8"]]
- 008add70 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 008addc8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 008addc8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 008addc8 ["INT_ADD", "tmp:2:8", ["register:4040:8", "const:a20:8"]]
+ 008addc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 008add60 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:920:8"]]
- 008add60 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 008add60 ["INT_ZEXT", "register:4048:8", ["tmp:1:1"]]
+ 008addb8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a20:8"]]
+ 008addb8 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 008addb8 ["INT_ZEXT", "register:4048:8", ["tmp:1:1"]]
- 008add88 ["INT_ADD", "register:40f0:8", ["const:8add88:8", "const:4:8"]]
- 008add88 ["CALL", null, ["callee:0073317c:8"]]
+ 008adde0 ["INT_ADD", "register:40f0:8", ["const:8adde0:8", "const:4:8"]]
+ 008adde0 ["CALL", null, ["callee:0073317c:8"]]
~~~


<a id="compare-1bd5a13781b106c489247946ef6c2653"></a>

### [`008ade98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ade98.md) → [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) FUN_008adef0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008a3b64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3b64.md) [`008ade98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ade98.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008a3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3bbc.md) [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.70% / 新版 98.70%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ae04c",
      "incomplete_value": false,
      "site": "008ae054",
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
      "definition_site": "008adff4",
      "incomplete_value": false,
      "site": "008adffc",
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
      "definition_site": "008ae1a4",
      "incomplete_value": false,
      "site": "008ae1ac",
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
      "definition_site": "008ae14c",
      "incomplete_value": false,
      "site": "008ae154",
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
      "definition_site": "008ae1bc",
      "incomplete_value": false,
      "site": "008ae1c8",
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
      "definition_site": "008ae164",
      "incomplete_value": false,
      "site": "008ae170",
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
      "008ae04c",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008ae070",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008ae1a4",
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
      "008ae04c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008ae070",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008ae1a4",
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
- 008adffc ["INT_ADD", "register:40f0:8", ["const:8adffc:8", "const:4:8"]]
- 008adffc ["CALL", null, ["callee:00441ed4:8"]]
+ 008ae054 ["INT_ADD", "register:40f0:8", ["const:8ae054:8", "const:4:8"]]
+ 008ae054 ["CALL", null, ["callee:00441ed4:8"]]
- 008ae154 ["INT_ADD", "register:40f0:8", ["const:8ae154:8", "const:4:8"]]
- 008ae154 ["CALL", null, ["callee:00441ed4:8"]]
+ 008ae1ac ["INT_ADD", "register:40f0:8", ["const:8ae1ac:8", "const:4:8"]]
+ 008ae1ac ["CALL", null, ["callee:00441ed4:8"]]
- 008ae170 ["INT_ADD", "register:40f0:8", ["const:8ae170:8", "const:4:8"]]
- 008ae170 ["CALL", null, ["callee:00442834:8"]]
+ 008ae1c8 ["INT_ADD", "register:40f0:8", ["const:8ae1c8:8", "const:4:8"]]
+ 008ae1c8 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-e6670e7c7406f867926cbc3916a2a8db"></a>

### [`008ae804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ae/008ae804.md) → [`008ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ae/008ae85c.md) FUN_008ae85c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`008ae804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ae/008ae804.md) [`009afea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009afea8.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`008ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ae/008ae85c.md) [`009afefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afefc.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.61% / 新版 98.61%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ae9e0",
      "incomplete_value": false,
      "site": "008ae9e8",
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
      "definition_site": "008ae988",
      "incomplete_value": false,
      "site": "008ae990",
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
      "definition_site": "008aea04",
      "incomplete_value": false,
      "site": "008aea10",
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
      "definition_site": "008ae9ac",
      "incomplete_value": false,
      "site": "008ae9b8",
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
      "definition_site": "008aeb38",
      "incomplete_value": false,
      "site": "008aeb40",
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
      "definition_site": "008aeae0",
      "incomplete_value": false,
      "site": "008aeae8",
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
      "008ae9e0",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008aea04",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008aeb38",
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
      "008ae9e0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008aea04",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008aeb38",
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
- 008ae990 ["INT_ADD", "register:40f0:8", ["const:8ae990:8", "const:4:8"]]
- 008ae990 ["CALL", null, ["callee:00441ed4:8"]]
+ 008ae9e8 ["INT_ADD", "register:40f0:8", ["const:8ae9e8:8", "const:4:8"]]
+ 008ae9e8 ["CALL", null, ["callee:00441ed4:8"]]
- 008ae9b8 ["INT_ADD", "register:40f0:8", ["const:8ae9b8:8", "const:4:8"]]
- 008ae9b8 ["CALL", null, ["callee:00442834:8"]]
+ 008aea10 ["INT_ADD", "register:40f0:8", ["const:8aea10:8", "const:4:8"]]
+ 008aea10 ["CALL", null, ["callee:00442834:8"]]
- 008aeae8 ["INT_ADD", "register:40f0:8", ["const:8aeae8:8", "const:4:8"]]
- 008aeae8 ["CALL", null, ["callee:00441ed4:8"]]
+ 008aeb40 ["INT_ADD", "register:40f0:8", ["const:8aeb40:8", "const:4:8"]]
+ 008aeb40 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-9af126b1fe122dd567b8fad25604c1f8"></a>

### [`008af0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008af/008af0b4.md) → [`008af10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af10c.md) FUN_008af10c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008ae804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ae/008ae804.md) [`008af0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008af/008af0b4.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ae/008ae85c.md) [`008af10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af10c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008af284",
      "incomplete_value": false,
      "site": "008af28c",
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
      "definition_site": "008af22c",
      "incomplete_value": false,
      "site": "008af234",
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
      "definition_site": "008af2a8",
      "incomplete_value": false,
      "site": "008af2b4",
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
      "definition_site": "008af250",
      "incomplete_value": false,
      "site": "008af25c",
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
      "definition_site": "008af3dc",
      "incomplete_value": false,
      "site": "008af3e4",
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
      "definition_site": "008af384",
      "incomplete_value": false,
      "site": "008af38c",
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
      "008af284",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008af2a8",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008af3dc",
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
      "008af284",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008af2a8",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008af3dc",
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
- 008af234 ["INT_ADD", "register:40f0:8", ["const:8af234:8", "const:4:8"]]
- 008af234 ["CALL", null, ["callee:00441ed4:8"]]
+ 008af28c ["INT_ADD", "register:40f0:8", ["const:8af28c:8", "const:4:8"]]
+ 008af28c ["CALL", null, ["callee:00441ed4:8"]]
- 008af25c ["INT_ADD", "register:40f0:8", ["const:8af25c:8", "const:4:8"]]
- 008af25c ["CALL", null, ["callee:00442834:8"]]
+ 008af2b4 ["INT_ADD", "register:40f0:8", ["const:8af2b4:8", "const:4:8"]]
+ 008af2b4 ["CALL", null, ["callee:00442834:8"]]
- 008af38c ["INT_ADD", "register:40f0:8", ["const:8af38c:8", "const:4:8"]]
- 008af38c ["CALL", null, ["callee:00441ed4:8"]]
+ 008af3e4 ["INT_ADD", "register:40f0:8", ["const:8af3e4:8", "const:4:8"]]
+ 008af3e4 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-fb5f38418a4cf062cac1b9ea95b60227"></a>

### [`008af93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008af/008af93c.md) → [`008af994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af994.md) FUN_008af994

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008af0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008af/008af0b4.md) [`008af93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008af/008af93c.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008af10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af10c.md) [`008af994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af994.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.56% / 新版 98.56%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008afb08",
      "incomplete_value": true,
      "site": "008afb10",
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
            "const:f93:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008afab0",
      "incomplete_value": true,
      "site": "008afab8",
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
      "definition_site": "008afb2c",
      "incomplete_value": false,
      "site": "008afb38",
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
      "definition_site": "008afad4",
      "incomplete_value": false,
      "site": "008afae0",
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
      "definition_site": "008afc60",
      "incomplete_value": false,
      "site": "008afc68",
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
      "definition_site": "008afc08",
      "incomplete_value": false,
      "site": "008afc10",
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
      "008afb08",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008afb2c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008afc60",
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
      "008afb08",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008afb2c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008afc60",
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
- 008afab8 ["INT_ADD", "register:40f0:8", ["const:8afab8:8", "const:4:8"]]
- 008afab8 ["CALL", null, ["callee:00441ed4:8"]]
+ 008afb10 ["INT_ADD", "register:40f0:8", ["const:8afb10:8", "const:4:8"]]
+ 008afb10 ["CALL", null, ["callee:00441ed4:8"]]
- 008afae0 ["INT_ADD", "register:40f0:8", ["const:8afae0:8", "const:4:8"]]
- 008afae0 ["CALL", null, ["callee:00442834:8"]]
+ 008afb38 ["INT_ADD", "register:40f0:8", ["const:8afb38:8", "const:4:8"]]
+ 008afb38 ["CALL", null, ["callee:00442834:8"]]
- 008afc10 ["INT_ADD", "register:40f0:8", ["const:8afc10:8", "const:4:8"]]
- 008afc10 ["CALL", null, ["callee:00441ed4:8"]]
+ 008afc68 ["INT_ADD", "register:40f0:8", ["const:8afc68:8", "const:4:8"]]
+ 008afc68 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-d3aca9e43bd54249b5fb8d5d45c500a4"></a>

### [`008b01a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b01a0.md) → [`008b01f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b01f8.md) FUN_008b01f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008af93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008af/008af93c.md) [`008b01a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b01a0.md) [`009af200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af200.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`008af994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008af/008af994.md) [`008b01f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b01f8.md) [`009af254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af254.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.53% / 新版 98.53%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b0360",
      "incomplete_value": false,
      "site": "008b0368",
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
      "definition_site": "008b0308",
      "incomplete_value": false,
      "site": "008b0310",
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
      "definition_site": "008b0384",
      "incomplete_value": false,
      "site": "008b0390",
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
      "definition_site": "008b032c",
      "incomplete_value": false,
      "site": "008b0338",
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
      "definition_site": "008b04b8",
      "incomplete_value": false,
      "site": "008b04c0",
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
      "definition_site": "008b0460",
      "incomplete_value": false,
      "site": "008b0468",
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
      "008b0360",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b0384",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b04b8",
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
      "008b0360",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b0384",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b04b8",
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
- 008b0310 ["INT_ADD", "register:40f0:8", ["const:8b0310:8", "const:4:8"]]
- 008b0310 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b0368 ["INT_ADD", "register:40f0:8", ["const:8b0368:8", "const:4:8"]]
+ 008b0368 ["CALL", null, ["callee:00441ed4:8"]]
- 008b0338 ["INT_ADD", "register:40f0:8", ["const:8b0338:8", "const:4:8"]]
- 008b0338 ["CALL", null, ["callee:00442834:8"]]
+ 008b0390 ["INT_ADD", "register:40f0:8", ["const:8b0390:8", "const:4:8"]]
+ 008b0390 ["CALL", null, ["callee:00442834:8"]]
- 008b0468 ["INT_ADD", "register:40f0:8", ["const:8b0468:8", "const:4:8"]]
- 008b0468 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b04c0 ["INT_ADD", "register:40f0:8", ["const:8b04c0:8", "const:4:8"]]
+ 008b04c0 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-77f465042d7b9da1ec54241a615134ca"></a>

### [`008b0b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0b98.md) → [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) FUN_008b0bf0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008a3e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3e60.md) [`008b0b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0b98.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008a3eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3eb8.md) [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.77% / 新版 98.77%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b0d78",
      "incomplete_value": false,
      "site": "008b0d80",
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
      "definition_site": "008b0d20",
      "incomplete_value": false,
      "site": "008b0d28",
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
      "definition_site": "008b0ed0",
      "incomplete_value": false,
      "site": "008b0ed8",
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
      "definition_site": "008b0e78",
      "incomplete_value": false,
      "site": "008b0e80",
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
      "definition_site": "008b0ee8",
      "incomplete_value": false,
      "site": "008b0ef4",
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
      "definition_site": "008b0e90",
      "incomplete_value": false,
      "site": "008b0e9c",
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
      "008b0d78",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b0d9c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b0ed0",
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
      "008b0d78",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b0d9c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b0ed0",
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
- 008b0d28 ["INT_ADD", "register:40f0:8", ["const:8b0d28:8", "const:4:8"]]
- 008b0d28 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b0d80 ["INT_ADD", "register:40f0:8", ["const:8b0d80:8", "const:4:8"]]
+ 008b0d80 ["CALL", null, ["callee:00441ed4:8"]]
- 008b0e80 ["INT_ADD", "register:40f0:8", ["const:8b0e80:8", "const:4:8"]]
- 008b0e80 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b0ed8 ["INT_ADD", "register:40f0:8", ["const:8b0ed8:8", "const:4:8"]]
+ 008b0ed8 ["CALL", null, ["callee:00441ed4:8"]]
- 008b0e9c ["INT_ADD", "register:40f0:8", ["const:8b0e9c:8", "const:4:8"]]
- 008b0e9c ["CALL", null, ["callee:00442834:8"]]
+ 008b0ef4 ["INT_ADD", "register:40f0:8", ["const:8b0ef4:8", "const:4:8"]]
+ 008b0ef4 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-6d5c003f248ddabed73fe3f9be5e993e"></a>

### [`008b157c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b1/008b157c.md) → [`008b15d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b15d4.md) FUN_008b15d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008b0b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0b98.md) [`008b157c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b1/008b157c.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) [`008b15d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b15d4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.76% / 新版 98.76%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b1754",
      "incomplete_value": true,
      "site": "008b175c",
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
            "const:f93:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b16fc",
      "incomplete_value": true,
      "site": "008b1704",
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
      "definition_site": "008b1778",
      "incomplete_value": false,
      "site": "008b1784",
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
      "definition_site": "008b1720",
      "incomplete_value": false,
      "site": "008b172c",
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
      "definition_site": "008b18ac",
      "incomplete_value": false,
      "site": "008b18b4",
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
      "definition_site": "008b1854",
      "incomplete_value": false,
      "site": "008b185c",
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
      "008b1754",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b1778",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b18ac",
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
      "008b1754",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b1778",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b18ac",
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
- 008b1704 ["INT_ADD", "register:40f0:8", ["const:8b1704:8", "const:4:8"]]
- 008b1704 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b175c ["INT_ADD", "register:40f0:8", ["const:8b175c:8", "const:4:8"]]
+ 008b175c ["CALL", null, ["callee:00441ed4:8"]]
- 008b172c ["INT_ADD", "register:40f0:8", ["const:8b172c:8", "const:4:8"]]
- 008b172c ["CALL", null, ["callee:00442834:8"]]
+ 008b1784 ["INT_ADD", "register:40f0:8", ["const:8b1784:8", "const:4:8"]]
+ 008b1784 ["CALL", null, ["callee:00442834:8"]]
- 008b185c ["INT_ADD", "register:40f0:8", ["const:8b185c:8", "const:4:8"]]
- 008b185c ["CALL", null, ["callee:00441ed4:8"]]
+ 008b18b4 ["INT_ADD", "register:40f0:8", ["const:8b18b4:8", "const:4:8"]]
+ 008b18b4 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-83d39d5ae166ca73c538741a17dfe937"></a>

### [`008b1f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b1/008b1f58.md) → [`008b1fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b1fb0.md) FUN_008b1fb0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008b157c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b1/008b157c.md) [`008b1f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b1/008b1f58.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008b15d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b15d4.md) [`008b1fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b1fb0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.74% / 新版 98.74%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b2128",
      "incomplete_value": false,
      "site": "008b2130",
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
      "definition_site": "008b20d0",
      "incomplete_value": false,
      "site": "008b20d8",
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
      "definition_site": "008b214c",
      "incomplete_value": false,
      "site": "008b2158",
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
      "definition_site": "008b20f4",
      "incomplete_value": false,
      "site": "008b2100",
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
      "definition_site": "008b2280",
      "incomplete_value": false,
      "site": "008b2288",
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
      "definition_site": "008b2228",
      "incomplete_value": false,
      "site": "008b2230",
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
      "008b2128",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b214c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b2280",
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
      "008b2128",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b214c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b2280",
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
- 008b20d8 ["INT_ADD", "register:40f0:8", ["const:8b20d8:8", "const:4:8"]]
- 008b20d8 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b2130 ["INT_ADD", "register:40f0:8", ["const:8b2130:8", "const:4:8"]]
+ 008b2130 ["CALL", null, ["callee:00441ed4:8"]]
- 008b2100 ["INT_ADD", "register:40f0:8", ["const:8b2100:8", "const:4:8"]]
- 008b2100 ["CALL", null, ["callee:00442834:8"]]
+ 008b2158 ["INT_ADD", "register:40f0:8", ["const:8b2158:8", "const:4:8"]]
+ 008b2158 ["CALL", null, ["callee:00442834:8"]]
- 008b2230 ["INT_ADD", "register:40f0:8", ["const:8b2230:8", "const:4:8"]]
- 008b2230 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b2288 ["INT_ADD", "register:40f0:8", ["const:8b2288:8", "const:4:8"]]
+ 008b2288 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-312346f5612690dbaf2746bf09ebd58b"></a>

### [`008b2908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b2/008b2908.md) → [`008b2960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b2/008b2960.md) FUN_008b2960

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008b1f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b1/008b1f58.md) [`008b2908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b2/008b2908.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008b1fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b1/008b1fb0.md) [`008b2960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b2/008b2960.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b2ae0",
      "incomplete_value": false,
      "site": "008b2ae8",
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
      "definition_site": "008b2a88",
      "incomplete_value": false,
      "site": "008b2a90",
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
      "definition_site": "008b2b98",
      "incomplete_value": false,
      "site": "008b2ba0",
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
      "definition_site": "008b2b40",
      "incomplete_value": false,
      "site": "008b2b48",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b2bb4",
      "incomplete_value": false,
      "site": "008b2bc0",
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
      "definition_site": "008b2b5c",
      "incomplete_value": false,
      "site": "008b2b68",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b2ae0",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b2b98",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "008b2bb4",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008b2ae0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b2b98",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "008b2bb4",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b2a90 ["INT_ADD", "register:40f0:8", ["const:8b2a90:8", "const:4:8"]]
- 008b2a90 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b2ae8 ["INT_ADD", "register:40f0:8", ["const:8b2ae8:8", "const:4:8"]]
+ 008b2ae8 ["CALL", null, ["callee:00441ed4:8"]]
- 008b2b48 ["INT_ADD", "register:40f0:8", ["const:8b2b48:8", "const:4:8"]]
- 008b2b48 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b2ba0 ["INT_ADD", "register:40f0:8", ["const:8b2ba0:8", "const:4:8"]]
+ 008b2ba0 ["CALL", null, ["callee:00441ed4:8"]]
- 008b2b68 ["INT_ADD", "register:40f0:8", ["const:8b2b68:8", "const:4:8"]]
- 008b2b68 ["CALL", null, ["callee:00442834:8"]]
+ 008b2bc0 ["INT_ADD", "register:40f0:8", ["const:8b2bc0:8", "const:4:8"]]
+ 008b2bc0 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-065fdf3c35080e9b221cf64439c4b444"></a>

### [`008b3230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b3/008b3230.md) → [`008b3288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3288.md) FUN_008b3288

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008b2908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b2/008b2908.md) [`008b3230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b3/008b3230.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008b2960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b2/008b2960.md) [`008b3288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3288.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.52% / 新版 98.52%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b33e8",
      "incomplete_value": false,
      "site": "008b33f0",
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
      "definition_site": "008b3390",
      "incomplete_value": false,
      "site": "008b3398",
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
      "definition_site": "008b340c",
      "incomplete_value": false,
      "site": "008b3418",
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
      "definition_site": "008b33b4",
      "incomplete_value": false,
      "site": "008b33c0",
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
      "definition_site": "008b3540",
      "incomplete_value": false,
      "site": "008b3548",
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
      "definition_site": "008b34e8",
      "incomplete_value": false,
      "site": "008b34f0",
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
      "008b33e8",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b340c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b3540",
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
      "008b33e8",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b340c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b3540",
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
- 008b3398 ["INT_ADD", "register:40f0:8", ["const:8b3398:8", "const:4:8"]]
- 008b3398 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b33f0 ["INT_ADD", "register:40f0:8", ["const:8b33f0:8", "const:4:8"]]
+ 008b33f0 ["CALL", null, ["callee:00441ed4:8"]]
- 008b33c0 ["INT_ADD", "register:40f0:8", ["const:8b33c0:8", "const:4:8"]]
- 008b33c0 ["CALL", null, ["callee:00442834:8"]]
+ 008b3418 ["INT_ADD", "register:40f0:8", ["const:8b3418:8", "const:4:8"]]
+ 008b3418 ["CALL", null, ["callee:00442834:8"]]
- 008b34f0 ["INT_ADD", "register:40f0:8", ["const:8b34f0:8", "const:4:8"]]
- 008b34f0 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b3548 ["INT_ADD", "register:40f0:8", ["const:8b3548:8", "const:4:8"]]
+ 008b3548 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-9b87ff613c92d78fe12377326c674dcb"></a>

### [`008b3a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b3/008b3a5c.md) → [`008b3ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3ab4.md) FUN_008b3ab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008b3230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b3/008b3230.md) [`008b3a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b3/008b3a5c.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008b3288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3288.md) [`008b3ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3ab4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.50% / 新版 98.50%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b3c10",
      "incomplete_value": false,
      "site": "008b3c18",
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
      "definition_site": "008b3bb8",
      "incomplete_value": false,
      "site": "008b3bc0",
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
      "definition_site": "008b3c34",
      "incomplete_value": false,
      "site": "008b3c40",
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
      "definition_site": "008b3bdc",
      "incomplete_value": false,
      "site": "008b3be8",
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
      "definition_site": "008b3d68",
      "incomplete_value": false,
      "site": "008b3d70",
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
      "definition_site": "008b3d10",
      "incomplete_value": false,
      "site": "008b3d18",
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
      "008b3c10",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b3c34",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b3d68",
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
      "008b3c10",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b3c34",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b3d68",
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
- 008b3bc0 ["INT_ADD", "register:40f0:8", ["const:8b3bc0:8", "const:4:8"]]
- 008b3bc0 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b3c18 ["INT_ADD", "register:40f0:8", ["const:8b3c18:8", "const:4:8"]]
+ 008b3c18 ["CALL", null, ["callee:00441ed4:8"]]
- 008b3be8 ["INT_ADD", "register:40f0:8", ["const:8b3be8:8", "const:4:8"]]
- 008b3be8 ["CALL", null, ["callee:00442834:8"]]
+ 008b3c40 ["INT_ADD", "register:40f0:8", ["const:8b3c40:8", "const:4:8"]]
+ 008b3c40 ["CALL", null, ["callee:00442834:8"]]
- 008b3d18 ["INT_ADD", "register:40f0:8", ["const:8b3d18:8", "const:4:8"]]
- 008b3d18 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b3d70 ["INT_ADD", "register:40f0:8", ["const:8b3d70:8", "const:4:8"]]
+ 008b3d70 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-0bcfe8312964bcdabb0553ae0435faec"></a>

### [`008b4274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b4/008b4274.md) → [`008b42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b42cc.md) FUN_008b42cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008b3a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b3/008b3a5c.md) [`008b4274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b4/008b4274.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008b3ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b3/008b3ab4.md) [`008b42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b42cc.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.50% / 新版 98.50%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b4428",
      "incomplete_value": false,
      "site": "008b4430",
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
      "definition_site": "008b43d0",
      "incomplete_value": false,
      "site": "008b43d8",
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
      "definition_site": "008b444c",
      "incomplete_value": false,
      "site": "008b4458",
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
      "definition_site": "008b43f4",
      "incomplete_value": false,
      "site": "008b4400",
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
      "definition_site": "008b4580",
      "incomplete_value": true,
      "site": "008b4588",
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
            "const:e27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b4528",
      "incomplete_value": true,
      "site": "008b4530",
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
      "008b4428",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b444c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b4580",
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
      "008b4428",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b444c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b4580",
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
- 008b43d8 ["INT_ADD", "register:40f0:8", ["const:8b43d8:8", "const:4:8"]]
- 008b43d8 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b4430 ["INT_ADD", "register:40f0:8", ["const:8b4430:8", "const:4:8"]]
+ 008b4430 ["CALL", null, ["callee:00441ed4:8"]]
- 008b4400 ["INT_ADD", "register:40f0:8", ["const:8b4400:8", "const:4:8"]]
- 008b4400 ["CALL", null, ["callee:00442834:8"]]
+ 008b4458 ["INT_ADD", "register:40f0:8", ["const:8b4458:8", "const:4:8"]]
+ 008b4458 ["CALL", null, ["callee:00442834:8"]]
- 008b4530 ["INT_ADD", "register:40f0:8", ["const:8b4530:8", "const:4:8"]]
- 008b4530 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b4588 ["INT_ADD", "register:40f0:8", ["const:8b4588:8", "const:4:8"]]
+ 008b4588 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-cf69f7fae0d3a0313acea48d05809574"></a>

### [`008b4a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b4/008b4a8c.md) → [`008b4ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b4ae4.md) FUN_008b4ae4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008b4274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b4/008b4274.md) [`008b4a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b4/008b4a8c.md) [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`008b42cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b42cc.md) [`008b4ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b4/008b4ae4.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b4c3c",
      "incomplete_value": false,
      "site": "008b4c44",
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
      "definition_site": "008b4be4",
      "incomplete_value": false,
      "site": "008b4bec",
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
      "definition_site": "008b4c60",
      "incomplete_value": false,
      "site": "008b4c6c",
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
      "definition_site": "008b4c08",
      "incomplete_value": false,
      "site": "008b4c14",
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
      "definition_site": "008b4d94",
      "incomplete_value": false,
      "site": "008b4d9c",
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
      "definition_site": "008b4d3c",
      "incomplete_value": false,
      "site": "008b4d44",
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
      "008b4c3c",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b4c60",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b4d94",
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
      "008b4c3c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b4c60",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b4d94",
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
- 008b4bec ["INT_ADD", "register:40f0:8", ["const:8b4bec:8", "const:4:8"]]
- 008b4bec ["CALL", null, ["callee:00441ed4:8"]]
+ 008b4c44 ["INT_ADD", "register:40f0:8", ["const:8b4c44:8", "const:4:8"]]
+ 008b4c44 ["CALL", null, ["callee:00441ed4:8"]]
- 008b4c14 ["INT_ADD", "register:40f0:8", ["const:8b4c14:8", "const:4:8"]]
- 008b4c14 ["CALL", null, ["callee:00442834:8"]]
+ 008b4c6c ["INT_ADD", "register:40f0:8", ["const:8b4c6c:8", "const:4:8"]]
+ 008b4c6c ["CALL", null, ["callee:00442834:8"]]
- 008b4d44 ["INT_ADD", "register:40f0:8", ["const:8b4d44:8", "const:4:8"]]
- 008b4d44 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b4d9c ["INT_ADD", "register:40f0:8", ["const:8b4d9c:8", "const:4:8"]]
+ 008b4d9c ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-fcb8c29a57db1e3ff9d83f5f5b22801a"></a>

### [`008b5290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b5/008b5290.md) → [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) FUN_008b52e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008a3fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3fd4.md) [`008b5290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b5/008b5290.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008a402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a402c.md) [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.70% / 新版 98.70%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b5444",
      "incomplete_value": false,
      "site": "008b544c",
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
      "definition_site": "008b53ec",
      "incomplete_value": false,
      "site": "008b53f4",
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
      "definition_site": "008b5468",
      "incomplete_value": false,
      "site": "008b5474",
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
      "definition_site": "008b5410",
      "incomplete_value": false,
      "site": "008b541c",
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
      "definition_site": "008b559c",
      "incomplete_value": false,
      "site": "008b55a4",
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
      "definition_site": "008b5544",
      "incomplete_value": false,
      "site": "008b554c",
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
      "008b5444",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b5468",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "008b559c",
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
      "008b5444",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b5468",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "008b559c",
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
- 008b53f4 ["INT_ADD", "register:40f0:8", ["const:8b53f4:8", "const:4:8"]]
- 008b53f4 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b544c ["INT_ADD", "register:40f0:8", ["const:8b544c:8", "const:4:8"]]
+ 008b544c ["CALL", null, ["callee:00441ed4:8"]]
- 008b541c ["INT_ADD", "register:40f0:8", ["const:8b541c:8", "const:4:8"]]
- 008b541c ["CALL", null, ["callee:00442834:8"]]
+ 008b5474 ["INT_ADD", "register:40f0:8", ["const:8b5474:8", "const:4:8"]]
+ 008b5474 ["CALL", null, ["callee:00442834:8"]]
- 008b554c ["INT_ADD", "register:40f0:8", ["const:8b554c:8", "const:4:8"]]
- 008b554c ["CALL", null, ["callee:00441ed4:8"]]
+ 008b55a4 ["INT_ADD", "register:40f0:8", ["const:8b55a4:8", "const:4:8"]]
+ 008b55a4 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-e66ea63b9e57459d2fb3c506cb027f8a"></a>

### [`008b5bfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b5/008b5bfc.md) → [`008b5c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b5c54.md) FUN_008b5c54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008b5290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b5/008b5290.md) [`008b5bfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b5/008b5bfc.md) [`00a98124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a98/00a98124.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) [`008b5c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b5c54.md) [`00a98194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98194.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.62% / 新版 98.62%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b5dc0",
      "incomplete_value": false,
      "site": "008b5dc8",
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
      "definition_site": "008b5d68",
      "incomplete_value": false,
      "site": "008b5d70",
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
      "definition_site": "008b5e78",
      "incomplete_value": false,
      "site": "008b5e80",
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
      "definition_site": "008b5e20",
      "incomplete_value": false,
      "site": "008b5e28",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b5e94",
      "incomplete_value": false,
      "site": "008b5ea0",
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
      "definition_site": "008b5e3c",
      "incomplete_value": false,
      "site": "008b5e48",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b5dc0",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008b5e78",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "008b5e94",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008b5dc0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008b5e78",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "008b5e94",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b5d70 ["INT_ADD", "register:40f0:8", ["const:8b5d70:8", "const:4:8"]]
- 008b5d70 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b5dc8 ["INT_ADD", "register:40f0:8", ["const:8b5dc8:8", "const:4:8"]]
+ 008b5dc8 ["CALL", null, ["callee:00441ed4:8"]]
- 008b5e28 ["INT_ADD", "register:40f0:8", ["const:8b5e28:8", "const:4:8"]]
- 008b5e28 ["CALL", null, ["callee:00441ed4:8"]]
+ 008b5e80 ["INT_ADD", "register:40f0:8", ["const:8b5e80:8", "const:4:8"]]
+ 008b5e80 ["CALL", null, ["callee:00441ed4:8"]]
- 008b5e48 ["INT_ADD", "register:40f0:8", ["const:8b5e48:8", "const:4:8"]]
- 008b5e48 ["CALL", null, ["callee:00442834:8"]]
+ 008b5ea0 ["INT_ADD", "register:40f0:8", ["const:8b5ea0:8", "const:4:8"]]
+ 008b5ea0 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-bfd6ee250f03e843146659c0a0e11b44"></a>

### [`008b64cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b64cc.md) → [`008b6524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6524.md) _INIT_168

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 82.21% / 新版 82.21%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 5件, `store_value` 5件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b6560",
      "incomplete_value": true,
      "site": "008b657c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008b6508",
      "incomplete_value": true,
      "site": "008b6524",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008b65e0",
      "incomplete_value": true,
      "site": "008b65fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "008b6588",
      "incomplete_value": true,
      "site": "008b65a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5d2:8"
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
      "definition_site": "008b6600",
      "incomplete_value": true,
      "site": "008b661c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008b65a8",
      "incomplete_value": true,
      "site": "008b65c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "008b6560",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008b6584",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008b65a4",
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
      "008b6560",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008b6584",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008b65a4",
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
- 008b66fc ["COPY", "tmp:0:8", ["const:8d8:8"]]
- 008b66fc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 008b66fc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 008b66fc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 008b6754 ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 008b6754 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 008b6754 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 008b6754 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 008b6704 ["INT_ADD", "register:40f0:8", ["const:8b6704:8", "const:4:8"]]
- 008b6704 ["CALL", null, ["callee:00c57f00:8"]]
+ 008b675c ["INT_ADD", "register:40f0:8", ["const:8b675c:8", "const:4:8"]]
+ 008b675c ["CALL", null, ["callee:00c57f00:8"]]
- 008b675c ["COPY", "tmp:0:8", ["const:7ed:8"]]
- 008b675c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008b675c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008b675c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008b67b4 ["COPY", "tmp:0:8", ["const:82d:8"]]
+ 008b67b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008b67b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008b67b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-282d568c2cdca8cecad1580076af0d19"></a>

### [`008b68d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b68d8.md) → [`008b6930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6930.md) FUN_008b6930

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md) · 呼出先 5件 [`008b7a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a18.md) [`008b7ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7ae4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) · 呼出先 5件 [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) [`008b7b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7b3c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.75% / 新版 91.75%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b6994",
      "incomplete_value": true,
      "site": "008b6994",
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
      "definition_site": "008b693c",
      "incomplete_value": true,
      "site": "008b693c",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b6a5c",
      "incomplete_value": true,
      "site": "008b6a68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b6a04",
      "incomplete_value": true,
      "site": "008b6a10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b6a60",
      "incomplete_value": true,
      "site": "008b6a6c",
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b6a08",
      "incomplete_value": true,
      "site": "008b6a14",
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
                "const:10:8"
              ]
            ]
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
      "008b698c",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "008b6994",
      "DATA",
      [
        "storage",
        "00c8b758",
        null,
        "undefined *"
      ]
    ],
    [
      "008b6a5c",
      "READ",
      [
        "storage",
        "00ca45f0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b698c",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "008b6994",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "008b6a5c",
      "READ",
      [
        "storage",
        "00ca46c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b6994 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b6994 ["INT_ADD", "register:40f0:8", ["const:8b6994:8", "const:4:8"]]
- 008b6994 ["CALLIND", null, ["register:0:8"]]
+ 008b69ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b69ec ["INT_ADD", "register:40f0:8", ["const:8b69ec:8", "const:4:8"]]
+ 008b69ec ["CALLIND", null, ["register:0:8"]]
- 008b6934 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:368:8"]]
- 008b6934 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 008b698c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:438:8"]]
+ 008b698c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008b6944 ["INT_ADD", "register:40f0:8", ["const:8b6944:8", "const:4:8"]]
- 008b6944 ["CALL", null, ["callee:008b7a70:8"]]
+ 008b699c ["INT_ADD", "register:40f0:8", ["const:8b699c:8", "const:4:8"]]
+ 008b699c ["CALL", null, ["callee:008b7a70:8"]]
~~~


<a id="compare-a0d174b67f5c472bfe531c8d04306e5e"></a>

### [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md) → [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) FUN_008b6ab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 12件 [`006977b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006977b0.md) [`00698998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698998.md) [`0069904c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/0069904c.md) [`007f46f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f46f8.md) [`007fa990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa990.md) · 呼出先 12件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048dc4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048dc4c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md)
- 新版 呼出元 12件 [`00697808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697808.md) [`006989f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989f0.md) [`006990a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006990a4.md) [`007f4750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4750.md) [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) · 呼出先 12件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.44% / 新版 99.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b6b98",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b6b40",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "008b6b98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008b6b98",
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
- 008b6b40 ["INT_ADD", "register:40f0:8", ["const:8b6b40:8", "const:4:8"]]
- 008b6b40 ["CALL", null, ["ram:48ccf8:8"]]
+ 008b6b98 ["INT_ADD", "register:40f0:8", ["const:8b6b98:8", "const:4:8"]]
+ 008b6b98 ["CALL", null, ["ram:48cd38:8"]]
- 008b6aac ["INT_ADD", "register:40f0:8", ["const:8b6aac:8", "const:4:8"]]
- 008b6aac ["CALL", null, ["callee:00851550:8"]]
+ 008b6b04 ["INT_ADD", "register:40f0:8", ["const:8b6b04:8", "const:4:8"]]
+ 008b6b04 ["CALL", null, ["callee:00851550:8"]]
- 008b6ab0 ["INT_ADD", "register:40f0:8", ["const:8b6ab0:8", "const:4:8"]]
- 008b6ab0 ["CALL", null, ["callee:0085b2fc:8"]]
+ 008b6b08 ["INT_ADD", "register:40f0:8", ["const:8b6b08:8", "const:4:8"]]
+ 008b6b08 ["CALL", null, ["callee:0085b2fc:8"]]
~~~


<a id="compare-a7a9938345441756f5134669f1a5723b"></a>

### [`008b6d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6d9c.md) → [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) FUN_008b6df4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 60件 [`005c7d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c7/005c7d00.md) [`0060eb50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060eb50.md) [`006122e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00612/006122e4.md) [`00613c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/00613c64.md) [`0061540c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00615/0061540c.md) · 呼出先 3件 [`00a46898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46898.md) [`00a46c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46c34.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 60件 [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) [`00612324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00612/00612324.md) [`00613ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/00613ca4.md) [`0061544c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/0061544c.md) · 呼出先 3件 [`00a468ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a468ec.md) [`00a46c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c88.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008b6e34",
      "incomplete_value": true,
      "site": "008b6e3c",
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
                "const:638:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b6ddc",
      "incomplete_value": true,
      "site": "008b6de4",
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
                "const:568:8"
              ]
            ]
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
      "definition_site": "008b6e38",
      "incomplete_value": true,
      "site": "008b6e3c",
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
                "const:640:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b6de0",
      "incomplete_value": true,
      "site": "008b6de4",
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
      "008b6e34",
      "READ",
      [
        "storage",
        "00c9b568",
        null,
        "pointer"
      ]
    ],
    [
      "008b6e34",
      "PARAM",
      [
        "storage",
        "00c8b778",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008b6e38",
      "READ",
      [
        "storage",
        "00c9b570",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008b6e34",
      "READ",
      [
        "storage",
        "00c9b638",
        null,
        "pointer"
      ]
    ],
    [
      "008b6e34",
      "PARAM",
      [
        "storage",
        "00c8b848",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008b6e38",
      "READ",
      [
        "storage",
        "00c9b640",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b6de4 ["INT_ADD", "register:40f0:8", ["const:8b6de4:8", "const:4:8"]]
- 008b6de4 ["CALL", null, ["callee:00c586e0:8"]]
+ 008b6e3c ["INT_ADD", "register:40f0:8", ["const:8b6e3c:8", "const:4:8"]]
+ 008b6e3c ["CALL", null, ["callee:00c586e0:8"]]
- 008b6ddc ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:568:8"]]
- 008b6ddc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 008b6e34 ["INT_ADD", "tmp:0:8", ["register:4008:8", "const:638:8"]]
+ 008b6e34 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 008b6de0 ["INT_ADD", "tmp:0:8", ["register:4010:8", "const:570:8"]]
- 008b6de0 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
+ 008b6e38 ["INT_ADD", "tmp:0:8", ["register:4010:8", "const:640:8"]]
+ 008b6e38 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d1045c059659e2ca6a336daadbdb266d"></a>

### [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md) → [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) FUN_008b7044

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 75件 [`005c8efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c8efc.md) [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`006064d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/006064d4.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008b68d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b68d8.md) [`008b7a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a18.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 75件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008b6930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6930.md) [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.67% / 新版 98.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b71b8",
      "incomplete_value": true,
      "site": "008b71b8",
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
      "definition_site": "008b7160",
      "incomplete_value": true,
      "site": "008b7160",
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
    "ordinal": 37,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b71b0",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "008b71b8",
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
      "008b71b0",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "008b71b8",
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
- 008b7038 ["INT_ADD", "register:40f0:8", ["const:8b7038:8", "const:4:8"]]
- 008b7038 ["CALL", null, ["callee:00c57f60:8"]]
+ 008b7090 ["INT_ADD", "register:40f0:8", ["const:8b7090:8", "const:4:8"]]
+ 008b7090 ["CALL", null, ["callee:00c57f60:8"]]
- 008b70a0 ["INT_ADD", "register:40f0:8", ["const:8b70a0:8", "const:4:8"]]
- 008b70a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008b70f8 ["INT_ADD", "register:40f0:8", ["const:8b70f8:8", "const:4:8"]]
+ 008b70f8 ["CALL", null, ["callee:00c57f60:8"]]
- 008b70d8 ["INT_ADD", "register:40f0:8", ["const:8b70d8:8", "const:4:8"]]
- 008b70d8 ["CALL", null, ["callee:0043bbe4:8"]]
+ 008b7130 ["INT_ADD", "register:40f0:8", ["const:8b7130:8", "const:4:8"]]
+ 008b7130 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-f53711ebba2811ce79cb51a19c6c0053"></a>

### [`008b73cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b73cc.md) → [`008b7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7424.md) FUN_008b7424

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b7c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7c4c.md) · 呼出先 3件 [`008b7a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a18.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008b7ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7ca4.md) · 呼出先 3件 [`008b7a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b74b0",
      "incomplete_value": true,
      "site": "008b74b0",
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
      "definition_site": "008b7458",
      "incomplete_value": true,
      "site": "008b7458",
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
      "008b74a8",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "008b74b0",
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
      "008b74a8",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "008b74b0",
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
- 008b7404 ["INT_ADD", "register:40f0:8", ["const:8b7404:8", "const:4:8"]]
- 008b7404 ["CALL", null, ["callee:00c57f80:8"]]
+ 008b745c ["INT_ADD", "register:40f0:8", ["const:8b745c:8", "const:4:8"]]
+ 008b745c ["CALL", null, ["callee:00c57f80:8"]]
- 008b7434 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b7434 ["INT_ADD", "register:40f0:8", ["const:8b7434:8", "const:4:8"]]
- 008b7434 ["CALLIND", null, ["register:0:8"]]
+ 008b748c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b748c ["INT_ADD", "register:40f0:8", ["const:8b748c:8", "const:4:8"]]
+ 008b748c ["CALLIND", null, ["register:0:8"]]
- 008b7450 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:368:8"]]
- 008b7450 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 008b74a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:438:8"]]
+ 008b74a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ca10119472ec4a2a5d8cbdf81a84be8f"></a>

### [`008b749c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b749c.md) → [`008b74f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b74f4.md) FUN_008b74f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048dc4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048dc4c.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.61% / 新版 99.61%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b752c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b74d4",
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
      "008b752c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008b752c",
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
- 008b74d4 ["INT_ADD", "register:40f0:8", ["const:8b74d4:8", "const:4:8"]]
- 008b74d4 ["CALL", null, ["ram:48ccf8:8"]]
+ 008b752c ["INT_ADD", "register:40f0:8", ["const:8b752c:8", "const:4:8"]]
+ 008b752c ["CALL", null, ["ram:48cd38:8"]]
- 008b74d8 ["INT_ADD", "register:40f0:8", ["const:8b74d8:8", "const:4:8"]]
- 008b74d8 ["CALL", null, ["callee:0048dc8c:8"]]
+ 008b7530 ["INT_ADD", "register:40f0:8", ["const:8b7530:8", "const:4:8"]]
+ 008b7530 ["CALL", null, ["callee:0048dc8c:8"]]
- 008b75f8 ["INT_ADD", "register:40f0:8", ["const:8b75f8:8", "const:4:8"]]
- 008b75f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008b7650 ["INT_ADD", "register:40f0:8", ["const:8b7650:8", "const:4:8"]]
+ 008b7650 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-373075a072ff2953ebf3c26d1f2ca0e7"></a>

### [`008b7d20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7d20.md) → [`008b7d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7d78.md) _INIT_169

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.14% / 新版 88.14%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b7db4",
      "incomplete_value": true,
      "site": "008b7dd0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008b7d5c",
      "incomplete_value": true,
      "site": "008b7d78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008b7e54",
      "incomplete_value": true,
      "site": "008b7e70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008b7dfc",
      "incomplete_value": true,
      "site": "008b7e18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b7e74",
      "incomplete_value": true,
      "site": "008b7eb8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "008b7e1c",
      "incomplete_value": true,
      "site": "008b7e60",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f09:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b7db4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008b7dd8",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008b7df8",
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
      "008b7db4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008b7dd8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008b7df8",
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
- 008b7f54 ["INT_ADD", "register:40f0:8", ["const:8b7f54:8", "const:4:8"]]
- 008b7f54 ["CALL", null, ["callee:00c57f00:8"]]
+ 008b7fac ["INT_ADD", "register:40f0:8", ["const:8b7fac:8", "const:4:8"]]
+ 008b7fac ["CALL", null, ["callee:00c57f00:8"]]
- 008b7d4c ["COPY", "tmp:0:8", ["const:928:8"]]
- 008b7d4c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 008b7d4c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 008b7d4c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 008b7da4 ["COPY", "tmp:0:8", ["const:a28:8"]]
+ 008b7da4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 008b7da4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 008b7da4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 008b7d54 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-8b51fc1e2479e69b1df7c0100e35627a"></a>

### [`008b80b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b80b0.md) → [`008b8108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b8108.md) FUN_008b8108

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b8354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8354.md) · 呼出先 10件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ab40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab40.md) [`008bbac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbac4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) · 呼出先 10件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 4件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008b8308",
      "incomplete_value": false,
      "site": "008b8308",
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
    "old": {
      "definition_site": "008b82b0",
      "incomplete_value": false,
      "site": "008b82b0",
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
                "const:ca4000:8"
              ],
              [
                "leaf",
                "const:f00:8"
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
    "ordinal": 31,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008b830c",
      "incomplete_value": false,
      "site": "008b830c",
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
      "definition_site": "008b82b4",
      "incomplete_value": false,
      "site": "008b82b4",
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
    "ordinal": 32,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008b8308",
      "incomplete_value": false,
      "site": "008b830c",
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
    "old": {
      "definition_site": "008b82b0",
      "incomplete_value": false,
      "site": "008b82b4",
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
                "const:ca4000:8"
              ],
              [
                "leaf",
                "const:f00:8"
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
    "ordinal": 32,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b81c8",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008b81d8",
      "PARAM",
      [
        "storage",
        "00ca4f00",
        null,
        "undefined8"
      ]
    ],
    [
      "008b81dc",
      "READ",
      [
        "storage",
        "00c9aca0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008b81c8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008b81d8",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ],
    [
      "008b81dc",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b8148 ["INT_ADD", "register:40f0:8", ["const:8b8148:8", "const:4:8"]]
- 008b8148 ["CALL", null, ["callee:00c53da0:8"]]
+ 008b81a0 ["INT_ADD", "register:40f0:8", ["const:8b81a0:8", "const:4:8"]]
+ 008b81a0 ["CALL", null, ["callee:00c53da0:8"]]
- 008b81a0 ["INT_ADD", "register:40f0:8", ["const:8b81a0:8", "const:4:8"]]
- 008b81a0 ["CALL", null, ["callee:0047e91c:8"]]
+ 008b81f8 ["INT_ADD", "register:40f0:8", ["const:8b81f8:8", "const:4:8"]]
+ 008b81f8 ["CALL", null, ["callee:0047e91c:8"]]
- 008b81f8 ["INT_ADD", "register:40f0:8", ["const:8b81f8:8", "const:4:8"]]
- 008b81f8 ["CALL", null, ["callee:00c53da0:8"]]
+ 008b8250 ["INT_ADD", "register:40f0:8", ["const:8b8250:8", "const:4:8"]]
+ 008b8250 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-1fef89c958f9acb9d2603641a1a36a9e"></a>

### [`008b8354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8354.md) → [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) FUN_008b83ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`008ba868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008ba868.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`008bb0ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb0ec.md) · 呼出先 20件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044291c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md)
- 新版 呼出元 3件 [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) · 呼出先 20件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.27% / 新版 99.27%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008b84d0",
      "incomplete_value": true,
      "site": "008b84e8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ec0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b8478",
      "incomplete_value": true,
      "site": "008b8490",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e80:8"
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
      "definition_site": "008b84ec",
      "incomplete_value": true,
      "site": "008b84fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:190:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b8494",
      "incomplete_value": true,
      "site": "008b84a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:150:8"
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
      "definition_site": "008b8f40",
      "incomplete_value": true,
      "site": "008b8f7c",
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
                "const:e48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008b8ee8",
      "incomplete_value": true,
      "site": "008b8f24",
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
                "const:e08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 113,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008b84d0",
      "READ",
      [
        "storage",
        "002c2e80",
        null,
        null
      ]
    ],
    [
      "008b84ec",
      "READ",
      [
        "storage",
        "002c2150",
        null,
        null
      ]
    ],
    [
      "008b8f40",
      "READ",
      [
        "storage",
        "002c3e08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008b84d0",
      "READ",
      [
        "storage",
        "002c2ec0",
        null,
        null
      ]
    ],
    [
      "008b84ec",
      "READ",
      [
        "storage",
        "002c2190",
        null,
        null
      ]
    ],
    [
      "008b8f40",
      "READ",
      [
        "storage",
        "002c3e48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008b83b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b83b4 ["INT_ADD", "register:40f0:8", ["const:8b83b4:8", "const:4:8"]]
- 008b83b4 ["CALLIND", null, ["register:0:8"]]
+ 008b840c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b840c ["INT_ADD", "register:40f0:8", ["const:8b840c:8", "const:4:8"]]
+ 008b840c ["CALLIND", null, ["register:0:8"]]
- 008b83e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b83e0 ["INT_ADD", "register:40f0:8", ["const:8b83e0:8", "const:4:8"]]
- 008b83e0 ["CALLIND", null, ["register:0:8"]]
+ 008b8438 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b8438 ["INT_ADD", "register:40f0:8", ["const:8b8438:8", "const:4:8"]]
+ 008b8438 ["CALLIND", null, ["register:0:8"]]
- 008b83f0 ["INT_ADD", "register:40f0:8", ["const:8b83f0:8", "const:4:8"]]
- 008b83f0 ["CALL", null, ["callee:008bbcc4:8"]]
+ 008b8448 ["INT_ADD", "register:40f0:8", ["const:8b8448:8", "const:4:8"]]
+ 008b8448 ["CALL", null, ["callee:008bbcc4:8"]]
~~~


<a id="compare-a252f45fe7e190b4a02f1a37f78b68e5"></a>

### [`008b980c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b980c.md) → [`008b9864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9864.md) FUN_008b9864

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 11件 [`0069550c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/0069550c.md) [`00696710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696710.md) [`00697fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697fd4.md) [`0069927c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/0069927c.md) [`006af748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af748.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 11件 [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) [`006992d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992d4.md) [`006af7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af7a0.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "008b9890",
      "incomplete_value": true,
      "site": "008b989c",
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
      "definition_site": "008b9838",
      "incomplete_value": true,
      "site": "008b9844",
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
      "008b988c",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ],
    [
      "008b9890",
      "DATA",
      [
        "storage",
        "00ca4484",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008b988c",
      "READ",
      [
        "storage",
        "00c9b578",
        null,
        "pointer"
      ]
    ],
    [
      "008b9890",
      "DATA",
      [
        "storage",
        "00ca4554",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008b9828 ["INT_ADD", "register:40f0:8", ["const:8b9828:8", "const:4:8"]]
- 008b9828 ["CALL", null, ["callee:00851550:8"]]
+ 008b9880 ["INT_ADD", "register:40f0:8", ["const:8b9880:8", "const:4:8"]]
+ 008b9880 ["CALL", null, ["callee:00851550:8"]]
- 008b9834 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4a8:8"]]
- 008b9834 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 008b988c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:578:8"]]
+ 008b988c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d6f05fb40c642ac0553dc2a1eb6f7929"></a>

### [`008b9860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9860.md) → [`008b98b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b8.md) FUN_008b98b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008bb53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb53c.md) · 呼出先 12件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2e0.md)
- 新版 呼出元 1件 [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) · 呼出先 12件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.35% / 新版 99.35%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b9b64",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b9b0c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b9bbc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008b9b64",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008b9b64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008b9bbc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008b9b64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008b9bbc",
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
- 008b9b0c ["INT_ADD", "register:40f0:8", ["const:8b9b0c:8", "const:4:8"]]
- 008b9b0c ["CALL", null, ["ram:47acf4:8"]]
+ 008b9b64 ["INT_ADD", "register:40f0:8", ["const:8b9b64:8", "const:4:8"]]
+ 008b9b64 ["CALL", null, ["ram:47ad34:8"]]
- 008b9b64 ["INT_ADD", "register:40f0:8", ["const:8b9b64:8", "const:4:8"]]
- 008b9b64 ["CALL", null, ["ram:47acf4:8"]]
+ 008b9bbc ["INT_ADD", "register:40f0:8", ["const:8b9bbc:8", "const:4:8"]]
+ 008b9bbc ["CALL", null, ["ram:47ad34:8"]]
- 008b98e4 ["INT_ADD", "register:40f0:8", ["const:8b98e4:8", "const:4:8"]]
- 008b98e4 ["CALL", null, ["callee:00851550:8"]]
+ 008b993c ["INT_ADD", "register:40f0:8", ["const:8b993c:8", "const:4:8"]]
+ 008b993c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-91afbfbb424621659c5f91bc11ecea6b"></a>

### [`008bbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbc58.md) → [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) FUN_008bbcb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008bbac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbac4.md) [`00a82b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a82b00.md) [`00a843ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a843ec.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) [`00a82b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82b70.md) [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bbcbc",
      "incomplete_value": false,
      "site": "008bbcc0",
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
      "definition_site": "008bbc64",
      "incomplete_value": false,
      "site": "008bbc68",
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
      "008bbcbc",
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
      "008bbcbc",
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
- 008bbc68 ["INT_ADD", "register:40f0:8", ["const:8bbc68:8", "const:4:8"]]
- 008bbc68 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008bbcc0 ["INT_ADD", "register:40f0:8", ["const:8bbcc0:8", "const:4:8"]]
+ 008bbcc0 ["CALL", null, ["callee:0043b7b8:8"]]
- 008bbc64 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008bbc64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008bbc64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008bbc64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008bbcbc ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008bbcbc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008bbcbc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008bbcbc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e86336e6ae69b7394d7da66922f9f587"></a>

### [`008bc22c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc22c.md) → [`008bc284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc284.md) FUN_008bc284

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008bbdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbdd4.md) [`00a8312c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a8312c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`008bbe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbe2c.md) [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bc290",
      "incomplete_value": false,
      "site": "008bc294",
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
      "definition_site": "008bc238",
      "incomplete_value": false,
      "site": "008bc23c",
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
      "008bc290",
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
      "008bc290",
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
- 008bc23c ["INT_ADD", "register:40f0:8", ["const:8bc23c:8", "const:4:8"]]
- 008bc23c ["CALL", null, ["callee:0043b7b8:8"]]
+ 008bc294 ["INT_ADD", "register:40f0:8", ["const:8bc294:8", "const:4:8"]]
+ 008bc294 ["CALL", null, ["callee:0043b7b8:8"]]
- 008bc238 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008bc238 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008bc238 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008bc238 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008bc290 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008bc290 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008bc290 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008bc290 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f71d4ca448674c0f344bc105489db21a"></a>

### [`008bc510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc510.md) → [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md) FUN_008bc568

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008ba868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008ba868.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`008bb0ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb0ec.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bc574",
      "incomplete_value": false,
      "site": "008bc578",
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
      "definition_site": "008bc51c",
      "incomplete_value": false,
      "site": "008bc520",
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
      "008bc574",
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
      "008bc574",
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
- 008bc520 ["INT_ADD", "register:40f0:8", ["const:8bc520:8", "const:4:8"]]
- 008bc520 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008bc578 ["INT_ADD", "register:40f0:8", ["const:8bc578:8", "const:4:8"]]
+ 008bc578 ["CALL", null, ["callee:0043b7b8:8"]]
- 008bc51c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008bc51c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008bc51c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008bc51c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008bc574 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008bc574 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008bc574 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008bc574 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1c094ca95da0e59a92e67ba32b91d48f"></a>

### [`008bc524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc524.md) → [`008bc57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc57c.md) FUN_008bc57c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008bb53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb53c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008bc588",
      "incomplete_value": false,
      "site": "008bc58c",
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
      "definition_site": "008bc530",
      "incomplete_value": false,
      "site": "008bc534",
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
      "008bc588",
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
      "008bc588",
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
- 008bc534 ["INT_ADD", "register:40f0:8", ["const:8bc534:8", "const:4:8"]]
- 008bc534 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008bc58c ["INT_ADD", "register:40f0:8", ["const:8bc58c:8", "const:4:8"]]
+ 008bc58c ["CALL", null, ["callee:0043b7b8:8"]]
- 008bc530 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008bc530 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008bc530 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008bc530 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008bc588 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008bc588 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008bc588 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008bc588 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8dc505e097e4ceddb8be7a29c92dc177"></a>

### [`008bc538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc538.md) → [`008bc590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc590.md) _INIT_170

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008bc5f0",
      "incomplete_value": true,
      "site": "008bc60c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008bc598",
      "incomplete_value": true,
      "site": "008bc5b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008bc610",
      "incomplete_value": true,
      "site": "008bc62c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008bc5b8",
      "incomplete_value": true,
      "site": "008bc5d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008bc630",
      "incomplete_value": true,
      "site": "008bc648",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008bc5d8",
      "incomplete_value": true,
      "site": "008bc5f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "008bc5cc",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008bc5f0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008bc610",
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
      "008bc5cc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008bc5f0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008bc610",
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
- 008bc60c ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 008bc60c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008bc60c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008bc60c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008bc664 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 008bc664 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008bc664 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008bc664 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008bc62c ["COPY", "tmp:0:8", ["const:f09:8"]]
- 008bc62c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008bc62c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008bc62c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008bc684 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 008bc684 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008bc684 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008bc684 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008bc76c ["INT_ADD", "register:40f0:8", ["const:8bc76c:8", "const:4:8"]]
- 008bc76c ["CALL", null, ["callee:00c57f00:8"]]
+ 008bc7c4 ["INT_ADD", "register:40f0:8", ["const:8bc7c4:8", "const:4:8"]]
+ 008bc7c4 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-33434836e6ec8ac47be54aaabbc2a4bd"></a>

### [`008bc8c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc8c8.md) → [`008bc920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc920.md) FUN_008bc920

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008cabc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ca/008cabc0.md) · 呼出先 15件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00666320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00666/00666320.md) [`007581d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00758/007581d0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) · 呼出先 15件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 85.51% / 新版 85.51%

優先判定に残った影響 `call_argument_candidate` 41件, `store_destination` 7件, `store_value` 30件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008bc964",
      "incomplete_value": false,
      "site": "008bc968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:e00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008bc90c",
      "incomplete_value": false,
      "site": "008bc910",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:d30:8"
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
      "definition_site": "008bca04",
      "incomplete_value": true,
      "site": "008bca04",
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
    "old": {
      "definition_site": "008bc9ac",
      "incomplete_value": true,
      "site": "008bc9ac",
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
                "const:38e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008bca1c",
      "incomplete_value": true,
      "site": "008bca1c",
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
    "old": {
      "definition_site": "008bc9c4",
      "incomplete_value": true,
      "site": "008bc9c4",
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
                "const:f16:8"
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
      "008bc968",
      "DATA",
      [
        "storage",
        "00c83d30",
        null,
        "pointer"
      ]
    ],
    [
      "008bc9d4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008bc9f4",
      "READ",
      [
        "storage",
        "002b638e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008bc968",
      "DATA",
      [
        "storage",
        "00c83e00",
        null,
        "pointer"
      ]
    ],
    [
      "008bc9d4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008bc9f4",
      "READ",
      [
        "storage",
        "002b63ce",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008bca20 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bca20 ["INT_ADD", "register:40f0:8", ["const:8bca20:8", "const:4:8"]]
- 008bca20 ["CALLIND", null, ["register:0:8"]]
+ 008bca78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bca78 ["INT_ADD", "register:40f0:8", ["const:8bca78:8", "const:4:8"]]
+ 008bca78 ["CALLIND", null, ["register:0:8"]]
- 008bcb20 ["INT_ADD", "register:40f0:8", ["const:8bcb20:8", "const:4:8"]]
- 008bcb20 ["CALL", null, ["callee:00c53da0:8"]]
+ 008bcb78 ["INT_ADD", "register:40f0:8", ["const:8bcb78:8", "const:4:8"]]
+ 008bcb78 ["CALL", null, ["callee:00c53da0:8"]]
- 008bcb3c ["INT_ADD", "register:40f0:8", ["const:8bcb3c:8", "const:4:8"]]
- 008bcb3c ["CALL", null, ["callee:00c57f50:8"]]
+ 008bcb94 ["INT_ADD", "register:40f0:8", ["const:8bcb94:8", "const:4:8"]]
+ 008bcb94 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-c1a67f3e7e03072c0fffb6ef9c003a50"></a>

### [`008bdb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bd/008bdb00.md) → [`008bdb58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bd/008bdb58.md) FUN_008bdb58

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008bc8c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc8c8.md) · 呼出先 47件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`008bc920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc920.md) · 呼出先 47件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 93.00% / 新版 93.00%

優先判定に残った影響 `call_argument_candidate` 10件, `store_destination` 9件, `store_value` 25件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008bdbe0",
      "incomplete_value": true,
      "site": "008bdbe0",
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
                "const:bbb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008bdb88",
      "incomplete_value": true,
      "site": "008bdb88",
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
                "const:c0f:8"
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
      "definition_site": "008bdbe4",
      "incomplete_value": true,
      "site": "008bdbe4",
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
      "definition_site": "008bdb8c",
      "incomplete_value": true,
      "site": "008bdb8c",
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008bdc80",
      "incomplete_value": false,
      "site": "008bdc88",
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
      "definition_site": "008bdc28",
      "incomplete_value": false,
      "site": "008bdc30",
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
      "008bdb98",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008bdbb8",
      "READ",
      [
        "storage",
        "002b920f",
        null,
        "string"
      ]
    ],
    [
      "008bdbd4",
      "READ",
      [
        "storage",
        "002bdc0f",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008bdb98",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008bdbb8",
      "READ",
      [
        "storage",
        "002b91bb",
        null,
        "string"
      ]
    ],
    [
      "008bdbd4",
      "READ",
      [
        "storage",
        "002bdbbb",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008bde94 ["INT_ADD", "register:40f0:8", ["const:8bde94:8", "const:4:8"]]
- 008bde94 ["CALL", null, ["callee:00c57f80:8"]]
+ 008bdeec ["INT_ADD", "register:40f0:8", ["const:8bdeec:8", "const:4:8"]]
+ 008bdeec ["CALL", null, ["callee:00c57f80:8"]]
- 008bdeb4 ["INT_ADD", "register:40f0:8", ["const:8bdeb4:8", "const:4:8"]]
- 008bdeb4 ["CALL", null, ["callee:00676aa0:8"]]
+ 008bdf0c ["INT_ADD", "register:40f0:8", ["const:8bdf0c:8", "const:4:8"]]
+ 008bdf0c ["CALL", null, ["callee:00676aa0:8"]]
- 008be204 ["INT_ADD", "register:40f0:8", ["const:8be204:8", "const:4:8"]]
- 008be204 ["CALL", null, ["callee:0043bbe4:8"]]
+ 008be25c ["INT_ADD", "register:40f0:8", ["const:8be25c:8", "const:4:8"]]
+ 008be25c ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-6b7253d4a4a8ab0a4e8e819580c23f7f"></a>

### [`008c0334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c0/008c0334.md) → [`008c038c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c0/008c038c.md) FUN_008c038c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008cb434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb434.md) · 呼出先 29件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md)
- 新版 呼出元 1件 [`008cb488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb488.md) · 呼出先 29件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.38% / 新版 99.38%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c040c",
      "incomplete_value": true,
      "site": "008c040c",
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
      "definition_site": "008c03b4",
      "incomplete_value": true,
      "site": "008c03b4",
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
      "008c03f0",
      "READ",
      [
        "storage",
        "002c4158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008c03f0",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c0378 ["INT_ADD", "register:40f0:8", ["const:8c0378:8", "const:4:8"]]
- 008c0378 ["CALL", null, ["callee:00851550:8"]]
+ 008c03d0 ["INT_ADD", "register:40f0:8", ["const:8c03d0:8", "const:4:8"]]
+ 008c03d0 ["CALL", null, ["callee:00851550:8"]]
- 008c0398 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:158:8"]]
- 008c0398 ["LOAD", "register:5020:8", ["const:1b1:8", "tmp:0:8"]]
- 008c0398 ["COPY", "register:5028:8", ["const:0:8"]]
- 008c0398 ["COPY", "register:5030:8", ["const:0:8"]]
+ 008c03f0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:198:8"]]
+ 008c03f0 ["LOAD", "register:5020:8", ["const:1b1:8", "tmp:0:8"]]
+ 008c03f0 ["COPY", "register:5028:8", ["const:0:8"]]
+ 008c03f0 ["COPY", "register:5030:8", ["const:0:8"]]
- 008c03cc ["INT_ADD", "register:40f0:8", ["const:8c03cc:8", "const:4:8"]]
- 008c03cc ["CALL", null, ["callee:00851550:8"]]
+ 008c0424 ["INT_ADD", "register:40f0:8", ["const:8c0424:8", "const:4:8"]]
+ 008c0424 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c90ea6e61f866c35ab7800dc4c99dbec"></a>

### [`008c14dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c1/008c14dc.md) → [`008c1534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c1/008c1534.md) FUN_008c1534

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) · 呼出先 13件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 13件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.34% / 新版 95.34%

優先判定に残った影響 `store_value` 10件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c15c0",
      "incomplete_value": true,
      "site": "008c15c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c1568",
      "incomplete_value": true,
      "site": "008c1570",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b50:8"
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
      "definition_site": "008c15cc",
      "incomplete_value": true,
      "site": "008c15d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c1574",
      "incomplete_value": true,
      "site": "008c1578",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:680:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "008c1620",
      "incomplete_value": true,
      "site": "008c1634",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e92:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c15c8",
      "incomplete_value": true,
      "site": "008c15dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eee:8"
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
      "008c15c0",
      "READ",
      [
        "storage",
        "002c2b50",
        null,
        null
      ]
    ],
    [
      "008c15cc",
      "READ",
      [
        "storage",
        "002c2680",
        null,
        null
      ]
    ],
    [
      "008c1620",
      "READ",
      [
        "storage",
        "002a7eee",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008c15c0",
      "READ",
      [
        "storage",
        "002c2b90",
        null,
        null
      ]
    ],
    [
      "008c15cc",
      "READ",
      [
        "storage",
        "002c26c0",
        null,
        null
      ]
    ],
    [
      "008c1620",
      "READ",
      [
        "storage",
        "002a7e92",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c1c14 ["INT_ADD", "register:40f0:8", ["const:8c1c14:8", "const:4:8"]]
- 008c1c14 ["CALL", null, ["callee:00c57f80:8"]]
+ 008c1c6c ["INT_ADD", "register:40f0:8", ["const:8c1c6c:8", "const:4:8"]]
+ 008c1c6c ["CALL", null, ["callee:00c57f80:8"]]
- 008c1568 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b50:8"]]
- 008c1568 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 008c1568 ["COPY", "register:5010:8", ["const:0:8"]]
- 008c1568 ["COPY", "register:5018:8", ["const:0:8"]]
+ 008c15c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b90:8"]]
+ 008c15c0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 008c15c0 ["COPY", "register:5010:8", ["const:0:8"]]
+ 008c15c0 ["COPY", "register:5018:8", ["const:0:8"]]
- 008c1574 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:680:8"]]
- 008c1574 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 008c1574 ["COPY", "register:5010:8", ["const:0:8"]]
- 008c1574 ["COPY", "register:5018:8", ["const:0:8"]]
+ 008c15cc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6c0:8"]]
+ 008c15cc ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 008c15cc ["COPY", "register:5010:8", ["const:0:8"]]
+ 008c15cc ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-4076b6f7f4b6f0b656256e701d486a84"></a>

### [`008c2128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c2/008c2128.md) → [`008c2180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2180.md) FUN_008c2180

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) [`008c89fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c8/008c89fc.md) [`008cabc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ca/008cabc0.md) · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008c8a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8a50.md) [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.73% / 新版 84.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c2240",
      "incomplete_value": true,
      "site": "008c2240",
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
                "const:885:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c21e8",
      "incomplete_value": true,
      "site": "008c21e8",
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
                "const:845:8"
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
      "definition_site": "008c2244",
      "incomplete_value": true,
      "site": "008c2244",
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
      "definition_site": "008c21ec",
      "incomplete_value": true,
      "site": "008c21ec",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c228c",
      "incomplete_value": true,
      "site": "008c228c",
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
                "const:ff4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c2234",
      "incomplete_value": true,
      "site": "008c2234",
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
                "const:2be000:8"
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
      "008c2230",
      "READ",
      [
        "storage",
        "002b6845",
        null,
        "string"
      ]
    ],
    [
      "008c2234",
      "READ",
      [
        "storage",
        "002b684b",
        null,
        "string"
      ]
    ],
    [
      "008c227c",
      "READ",
      [
        "storage",
        "002be048",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008c2230",
      "READ",
      [
        "storage",
        "002b6885",
        null,
        "string"
      ]
    ],
    [
      "008c2234",
      "READ",
      [
        "storage",
        "002b688b",
        null,
        "string"
      ]
    ],
    [
      "008c227c",
      "READ",
      [
        "storage",
        "002bdff4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c2244 ["INT_ADD", "register:40f0:8", ["const:8c2244:8", "const:4:8"]]
- 008c2244 ["CALL", null, ["callee:0048ce94:8"]]
+ 008c229c ["INT_ADD", "register:40f0:8", ["const:8c229c:8", "const:4:8"]]
+ 008c229c ["CALL", null, ["callee:0048ce94:8"]]
- 008c22c0 ["INT_ADD", "register:40f0:8", ["const:8c22c0:8", "const:4:8"]]
- 008c22c0 ["CALL", null, ["callee:00c58260:8"]]
+ 008c2318 ["INT_ADD", "register:40f0:8", ["const:8c2318:8", "const:4:8"]]
+ 008c2318 ["CALL", null, ["callee:00c58260:8"]]
- 008c22f4 ["INT_ADD", "register:40f0:8", ["const:8c22f4:8", "const:4:8"]]
- 008c22f4 ["CALL", null, ["callee:0048ce94:8"]]
+ 008c234c ["INT_ADD", "register:40f0:8", ["const:8c234c:8", "const:4:8"]]
+ 008c234c ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-dbcb078185c6a0d287df39a94507613a"></a>

### [`008c4290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c4/008c4290.md) → [`008c42e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c42e4.md) FUN_008c42e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 6件 [`008c5208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5208.md) [`008c8e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c8/008c8e0c.md) [`008cbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbc58.md) [`008cf520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf520.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 10件 [`005e0f90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0f90.md) [`005e1b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1b18.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00853c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c70.md) [`008c385c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c3/008c385c.md)
- 新版 呼出元 6件 [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008c8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8e60.md) [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) [`008cf574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf574.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 10件 [`005e0fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0fd0.md) [`005e1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b58.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 97.78% / 新版 97.78%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c4368",
      "incomplete_value": false,
      "site": "008c4370",
      "value": [
        "leaf",
        "const:2:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008c4338",
      "incomplete_value": false,
      "site": "008c433c",
      "value": [
        "leaf",
        "const:4:8"
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
      "definition_site": "008c4370",
      "incomplete_value": false,
      "site": "008c4378",
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
      "unmatched:008c42bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c42ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008c385c"
      ]
    ],
    [
      "unmatched:008c4380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c43b0"
      ]
    ]
  ],
  "added": [
    [
      "008c4310",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008c4340",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008c38b4"
      ]
    ],
    [
      "008c43d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c43b0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c4308 ["INT_ADD", "register:40f0:8", ["const:8c4308:8", "const:4:8"]]
- 008c4308 ["CALL", null, ["callee:005e1b58:8"]]
+ 008c435c ["INT_ADD", "register:40f0:8", ["const:8c435c:8", "const:4:8"]]
+ 008c435c ["CALL", null, ["callee:005e1b58:8"]]
- 008c431c ["INT_ADD", "register:40f0:8", ["const:8c431c:8", "const:4:8"]]
- 008c431c ["CALL", null, ["callee:005e1b58:8"]]
+ 008c4370 ["INT_ADD", "register:40f0:8", ["const:8c4370:8", "const:4:8"]]
+ 008c4370 ["CALL", null, ["callee:005e1b58:8"]]
- 008c433c ["INT_ADD", "register:40f0:8", ["const:8c433c:8", "const:4:8"]]
- 008c433c ["CALL", null, ["callee:005e1b58:8"]]
+ 008c4390 ["INT_ADD", "register:40f0:8", ["const:8c4390:8", "const:4:8"]]
+ 008c4390 ["CALL", null, ["callee:005e1b58:8"]]
~~~


<a id="compare-34e848f207cc632d14b6d7f7397f6e15"></a>

### [`008c4614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c4/008c4614.md) → [`008c4668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4668.md) FUN_008c4668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`008cabc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ca/008cabc0.md) [`008cb434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb434.md) [`008cbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbc58.md) [`008cf520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf520.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`004981d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/004981d0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008c4920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c4/008c4920.md)
- 新版 呼出元 4件 [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) [`008cb488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb488.md) [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) [`008cf574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf574.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4974.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.87% / 新版 74.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 18件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008c47e4",
      "incomplete_value": true,
      "site": "008c47e4",
      "value": [
        "live",
        "register:40d0:8"
      ]
    },
    "old": {
      "definition_site": "008c4848",
      "incomplete_value": true,
      "site": "008c4848",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 26,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008c47ec",
      "incomplete_value": true,
      "site": "008c47ec",
      "value": [
        "live",
        "register:40a8:4"
      ]
    },
    "old": {
      "definition_site": "008c4850",
      "incomplete_value": true,
      "site": "008c4850",
      "value": [
        "live",
        "register:40d8:4"
      ]
    },
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008c48e0",
      "incomplete_value": true,
      "site": "008c48e0",
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
      "definition_site": "008c488c",
      "incomplete_value": true,
      "site": "008c488c",
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
    "ordinal": 21,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c4628",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c4640",
      "READ",
      [
        "storage",
        "00ca4608",
        null,
        "undefined4"
      ]
    ],
    [
      "008c469c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008c4874"
      ]
    ]
  ],
  "added": [
    [
      "008c467c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008c4694",
      "READ",
      [
        "storage",
        "00ca46d8",
        null,
        "undefined4"
      ]
    ],
    [
      "008c469c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c48c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c47b0 ["INT_ADD", "register:40f0:8", ["const:8c47b0:8", "const:4:8"]]
- 008c47b0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 008c4804 ["INT_ADD", "register:40f0:8", ["const:8c4804:8", "const:4:8"]]
+ 008c4804 ["CALL", null, ["callee:0043bbe4:8"]]
- 008c47ec ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008c47ec ["CBRANCH", null, ["local:b31:8", "tmp:0:1"]]
+ 008c4840 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008c4840 ["CBRANCH", null, ["local:b30:8", "tmp:0:1"]]
- 008c4804 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008c4804 ["CBRANCH", null, ["local:b35:8", "tmp:0:1"]]
+ 008c4858 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008c4858 ["CBRANCH", null, ["local:b34:8", "tmp:0:1"]]
~~~


<a id="compare-54e29ea5b8dd5d7ea8c0776cf3dc0172"></a>

### [`008c7b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c7/008c7b40.md) → [`008c7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c7/008c7b94.md) FUN_008c7b94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) [`008c8e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c8/008c8e0c.md) [`008cfe24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cfe24.md) · 呼出先 16件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0049e4c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049e/0049e4c4.md) [`005c04f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c0/005c04f0.md)
- 新版 呼出元 3件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008c8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8e60.md) [`008cfe78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfe78.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0049e504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049e/0049e504.md) [`005c0530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0530.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008c7bd0"
      ],
      [
        "CONDITIONAL_JUMP",
        "008c7c24"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008c7c24",
      "incomplete_value": true,
      "site": "008c7cd4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SLESS",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ],
          [
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:40d0:8"
              ],
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c7bd0",
      "incomplete_value": true,
      "site": "008c7c80",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SLESS",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ],
          [
            "INT_SBORROW",
            "1",
            [
              "INT_ADD",
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c7bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c7cd4"
      ]
    ],
    [
      "unmatched:008c7c24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008c8710"
      ]
    ],
    [
      "unmatched:008c7c2c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ]
  ],
  "added": [
    [
      "008c7c24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c7cd4"
      ]
    ],
    [
      "008c7c78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c8764"
      ]
    ],
    [
      "008c7c80",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ]
  ]
}
~~~


~~~diff
+ 008c7c80 ["INT_ADD", "register:40f0:8", ["const:8c7c80:8", "const:4:8"]]
+ 008c7c80 ["CALL", null, ["callee:00c57f60:8"]]
- 008c7bcc ["INT_SEXT", "tmp:0:8", ["register:4048:4"]]
- 008c7bcc ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 008c7bcc ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 008c7bcc ["INT_LESSEQUAL", "register:105:1", ["tmp:1:8", "register:40d0:8"]]
- 008c7bd0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008c7bd0 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
~~~


<a id="compare-bf553795a0b33165a8e13ba868eb3149"></a>

### [`008c87f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c8/008c87f8.md) → [`008c884c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c884c.md) FUN_008c884c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) · 呼出先 6件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2a4.md) [`0085b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2ac.md) [`00ac8de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac8/00ac8de4.md)
- 新版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 6件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md) [`00ac8e54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac8e54.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c8834 ["INT_ADD", "register:40f0:8", ["const:8c8834:8", "const:4:8"]]
- 008c8834 ["CALL", null, ["callee:00851550:8"]]
+ 008c8888 ["INT_ADD", "register:40f0:8", ["const:8c8888:8", "const:4:8"]]
+ 008c8888 ["CALL", null, ["callee:00851550:8"]]
- 008c8838 ["INT_ADD", "register:40f0:8", ["const:8c8838:8", "const:4:8"]]
- 008c8838 ["CALL", null, ["callee:0046ca04:8"]]
+ 008c888c ["INT_ADD", "register:40f0:8", ["const:8c888c:8", "const:4:8"]]
+ 008c888c ["CALL", null, ["callee:0046ca04:8"]]
- 008c8848 ["INT_ADD", "register:40f0:8", ["const:8c8848:8", "const:4:8"]]
- 008c8848 ["CALL", null, ["callee:00851550:8"]]
+ 008c889c ["INT_ADD", "register:40f0:8", ["const:8c889c:8", "const:4:8"]]
+ 008c889c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c82e24af2598b569c4f061ca9bf95ca6"></a>

### [`008c88e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c8/008c88e0.md) → [`008c8934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8934.md) FUN_008c8934

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009df5fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009df5fc.md) [`009e0fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e0fc0.md) [`009e2f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e2/009e2f94.md)
- 新版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009df650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df650.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md) [`009e2fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e2fe8.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 88.73% / 新版 88.73%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c8954",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c8a38"
      ]
    ]
  ],
  "added": [
    [
      "008c89a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c8a38"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c88fc ["INT_ADD", "register:40f0:8", ["const:8c88fc:8", "const:4:8"]]
- 008c88fc ["CALL", null, ["callee:00851550:8"]]
+ 008c8950 ["INT_ADD", "register:40f0:8", ["const:8c8950:8", "const:4:8"]]
+ 008c8950 ["CALL", null, ["callee:00851550:8"]]
- 008c890c ["INT_ADD", "register:40f0:8", ["const:8c890c:8", "const:4:8"]]
- 008c890c ["CALL", null, ["callee:009e1014:8"]]
+ 008c8960 ["INT_ADD", "register:40f0:8", ["const:8c8960:8", "const:4:8"]]
+ 008c8960 ["CALL", null, ["callee:009e1014:8"]]
- 008c8914 ["INT_ADD", "register:40f0:8", ["const:8c8914:8", "const:4:8"]]
- 008c8914 ["CALL", null, ["callee:00851550:8"]]
+ 008c8968 ["INT_ADD", "register:40f0:8", ["const:8c8968:8", "const:4:8"]]
+ 008c8968 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-cb3a4b73bf8dff348d9e654e35ada6d6"></a>

### [`008c89fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c8/008c89fc.md) → [`008c8a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8a50.md) FUN_008c8a50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) · 呼出先 14件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md) [`0085b2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2a4.md) [`0085b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2ac.md)
- 新版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 14件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.35% / 新版 94.35%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008c8a30",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c8b48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c8b60"
      ]
    ],
    [
      "008c8be4",
      "DATA",
      [
        "storage",
        "0044de68",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008c8a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008c8b9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c8b60"
      ]
    ],
    [
      "008c8c74",
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
- 008c8a28 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:28:8"]]
- 008c8a28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008c8a2c ["COPY", "register:40a0:8", ["register:4000:8"]]
- 008c8a30 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008c8a30 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008c8a30 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-8487bdb34d38406169aaa991bc8e4ce2"></a>

### [`008c8e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c8/008c8e0c.md) → [`008c8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c8/008c8e60.md) FUN_008c8e60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008cf91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf91c.md) · 呼出先 14件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008c4290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c4/008c4290.md) [`008c7b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c7/008c7b40.md)
- 新版 呼出元 1件 [`008cf970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf970.md) · 呼出先 14件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c42e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c42e4.md) [`008c7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c7/008c7b94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008c8f30",
      "incomplete_value": true,
      "site": "008c8f34",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c9508",
      "incomplete_value": true,
      "site": "008c951c",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c950c",
      "incomplete_value": true,
      "site": "008c951c",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
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
      "unmatched:008c8e10",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008c8e14",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008c8f28",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "008c8e64",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008c8e68",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008c8f28",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 008c8f34 ["INT_ADD", "register:40f0:8", ["const:8c8f34:8", "const:4:8"]]
- 008c8f34 ["CALL", null, ["callee:00c58520:8"]]
+ 008c8f88 ["INT_ADD", "register:40f0:8", ["const:8c8f88:8", "const:4:8"]]
+ 008c8f88 ["CALL", null, ["callee:00c58520:8"]]
- 008c94c8 ["INT_ADD", "register:40f0:8", ["const:8c94c8:8", "const:4:8"]]
- 008c94c8 ["CALL", null, ["callee:00c580d0:8"]]
+ 008c951c ["INT_ADD", "register:40f0:8", ["const:8c951c:8", "const:4:8"]]
+ 008c951c ["CALL", null, ["callee:00c580d0:8"]]
- 008c8e0c ["INT_SUB", "register:8:8", ["register:8:8", "const:d0:8"]]
~~~


<a id="compare-80c5468d4006807a87ce9bfd954d91be"></a>

### [`008c990c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c9/008c990c.md) → [`008c9960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c9/008c9960.md) FUN_008c9960

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cb644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb644.md) · 呼出先 15件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`008cb698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb698.md) · 呼出先 15件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.07% / 新版 84.07%

優先判定に残った影響 `call_argument_candidate` 8件, `call_target` 2件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008c9990",
      "incomplete_value": false,
      "site": "008c99a4",
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
      "definition_site": "008c993c",
      "incomplete_value": false,
      "site": "008c9950",
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
      "definition_site": "008c9998",
      "incomplete_value": false,
      "site": "008c99a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:e10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008c9944",
      "incomplete_value": false,
      "site": "008c9950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:d40:8"
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
      "definition_site": "008c99f4",
      "incomplete_value": true,
      "site": "008c99f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:40c0:8"
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
      "unmatched:008c9930",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008c9934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c99b0"
      ]
    ],
    [
      "unmatched:008c993c",
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
      "008c9984",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008c9988",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008c99b0"
      ]
    ],
    [
      "008c9990",
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
- 008c9950 ["INT_ADD", "register:40f0:8", ["const:8c9950:8", "const:4:8"]]
- 008c9950 ["CALL", null, ["callee:00c586e0:8"]]
+ 008c99a4 ["INT_ADD", "register:40f0:8", ["const:8c99a4:8", "const:4:8"]]
+ 008c99a4 ["CALL", null, ["callee:00c586e0:8"]]
- 008c99f8 ["INT_ADD", "register:40f0:8", ["const:8c99f8:8", "const:4:8"]]
- 008c99f8 ["CALL", null, ["callee:00ac8e64:8"]]
+ 008c9a4c ["INT_ADD", "register:40f0:8", ["const:8c9a4c:8", "const:4:8"]]
+ 008c9a4c ["CALL", null, ["callee:00ac8e64:8"]]
- 008c9a38 ["INT_ADD", "register:40f0:8", ["const:8c9a38:8", "const:4:8"]]
- 008c9a38 ["CALL", null, ["ram:8c9da8:8"]]
+ 008c9a8c ["INT_ADD", "register:40f0:8", ["const:8c9a8c:8", "const:4:8"]]
+ 008c9a8c ["CALL", null, ["ram:8c9dfc:8"]]
~~~


<a id="compare-a67d944079de1d68e35a9d67f08bafb1"></a>

### [`008ca33c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ca/008ca33c.md) → [`008ca390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008ca390.md) FUN_008ca390

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1e088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1e/00b1e088.md) · 呼出先 17件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md)
- 新版 呼出元 1件 [`00b1e124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1e124.md) · 呼出先 17件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.46% / 新版 82.46%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 3件, `store_value` 1件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ca42c",
      "incomplete_value": true,
      "site": "008ca43c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cd6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ca3d8",
      "incomplete_value": true,
      "site": "008ca3e8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d32:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ca4d8",
      "incomplete_value": true,
      "site": "008ca4dc",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ca608",
      "incomplete_value": true,
      "site": "008ca60c",
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
            "const:50:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ca340",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca344",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca348",
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
      "008ca394",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ca398",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008ca39c",
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
- 008ca488 ["INT_ADD", "register:40f0:8", ["const:8ca488:8", "const:4:8"]]
- 008ca488 ["CALL", null, ["callee:0048797c:8"]]
+ 008ca4dc ["INT_ADD", "register:40f0:8", ["const:8ca4dc:8", "const:4:8"]]
+ 008ca4dc ["CALL", null, ["callee:0048797c:8"]]
- 008ca4dc ["INT_ADD", "register:40f0:8", ["const:8ca4dc:8", "const:4:8"]]
- 008ca4dc ["CALL", null, ["callee:00c57f60:8"]]
+ 008ca530 ["INT_ADD", "register:40f0:8", ["const:8ca530:8", "const:4:8"]]
+ 008ca530 ["CALL", null, ["callee:00c57f60:8"]]
- 008ca588 ["INT_ADD", "register:40f0:8", ["const:8ca588:8", "const:4:8"]]
- 008ca588 ["CALL", null, ["callee:00615f20:8"]]
+ 008ca5dc ["INT_ADD", "register:40f0:8", ["const:8ca5dc:8", "const:4:8"]]
+ 008ca5dc ["CALL", null, ["callee:00615f20:8"]]
~~~


<a id="compare-07edae947d1d8205c849823158988c94"></a>

### [`008ca754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ca/008ca754.md) → [`008ca7a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008ca7a8.md) FUN_008ca7a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1e088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1e/00b1e088.md) · 呼出先 16件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b1e124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1e124.md) · 呼出先 16件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.91% / 新版 89.91%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008caa14",
      "incomplete_value": true,
      "site": "008caa18",
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
      "definition_site": "008ca9c0",
      "incomplete_value": true,
      "site": "008ca9c4",
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
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008caa10",
      "incomplete_value": true,
      "site": "008caa1c",
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
      "definition_site": "008ca9bc",
      "incomplete_value": true,
      "site": "008ca9c8",
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
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008caa28",
      "incomplete_value": true,
      "site": "008caa28",
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
      "definition_site": "008ca9d4",
      "incomplete_value": true,
      "site": "008ca9d4",
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
    "ordinal": 44,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ca758",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca75c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ca798",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ca7ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ca7b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008ca7ec",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ca81c ["INT_ADD", "register:40f0:8", ["const:8ca81c:8", "const:4:8"]]
- 008ca81c ["CALL", null, ["callee:00b11188:8"]]
+ 008ca870 ["INT_ADD", "register:40f0:8", ["const:8ca870:8", "const:4:8"]]
+ 008ca870 ["CALL", null, ["callee:00b11188:8"]]
- 008ca844 ["INT_ADD", "register:40f0:8", ["const:8ca844:8", "const:4:8"]]
- 008ca844 ["CALL", null, ["callee:0048796c:8"]]
+ 008ca898 ["INT_ADD", "register:40f0:8", ["const:8ca898:8", "const:4:8"]]
+ 008ca898 ["CALL", null, ["callee:0048796c:8"]]
- 008ca8d8 ["INT_ADD", "register:40f0:8", ["const:8ca8d8:8", "const:4:8"]]
- 008ca8d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ca92c ["INT_ADD", "register:40f0:8", ["const:8ca92c:8", "const:4:8"]]
+ 008ca92c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-3bf6d69b356ddf2ac55e565ea8f56aa1"></a>

### [`008cb434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb434.md) → [`008cb488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb488.md) FUN_008cb488

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 13件 [`0044c884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044c/0044c884.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048dc4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048dc4c.md) [`0048eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048eef0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 13件 [`0044c8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c8c4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.05% / 新版 82.05%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cb4cc",
      "incomplete_value": true,
      "site": "008cb4d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
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
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb5b4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb560",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb5ec",
      "value": [
        "leaf",
        "ram:8c5df8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb598",
      "value": [
        "leaf",
        "ram:8c5da4:8"
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
      "008cb4d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008cb494"
      ]
    ],
    [
      "unmatched:008cb490",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cb5fc"
      ]
    ],
    [
      "unmatched:008cb49c",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "008cb4d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cb4e8"
      ]
    ],
    [
      "008cb4e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cb5fc"
      ]
    ],
    [
      "008cb4f0",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cb47c ["INT_ADD", "register:40f0:8", ["const:8cb47c:8", "const:4:8"]]
- 008cb47c ["CALL", null, ["callee:00ac84d4:8"]]
+ 008cb4d0 ["INT_ADD", "register:40f0:8", ["const:8cb4d0:8", "const:4:8"]]
+ 008cb4d0 ["CALL", null, ["callee:00ac84d4:8"]]
- 008cb4d0 ["COPY", "tmp:0:8", ["const:263:8"]]
- 008cb4d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cb4d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cb4d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008cb50c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008cb50c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008cb50c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008cb50c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 008cb560 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 008cb560 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 008cb560 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 008cb560 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-8eb3d12106d05083b4fefd6737b7a3d9"></a>

### [`008cb644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb644.md) → [`008cb698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb698.md) FUN_008cb698

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 18件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 18件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.62% / 新版 89.62%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cb6cc",
      "incomplete_value": false,
      "site": "008cb6dc",
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
      "definition_site": "008cb678",
      "incomplete_value": false,
      "site": "008cb688",
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
      "definition_site": "008cb6d4",
      "incomplete_value": false,
      "site": "008cb6dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:e10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cb680",
      "incomplete_value": false,
      "site": "008cb688",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:d40:8"
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
      "definition_site": "008cb6f4",
      "incomplete_value": true,
      "site": "008cb6f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "live",
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cb6a0",
      "incomplete_value": true,
      "site": "008cb6a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
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
      "unmatched:008cb644",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cb648",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cb664",
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
      "008cb698",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008cb69c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008cb6b8",
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
- 008cb688 ["INT_ADD", "register:40f0:8", ["const:8cb688:8", "const:4:8"]]
- 008cb688 ["CALL", null, ["callee:00c586e0:8"]]
+ 008cb6dc ["INT_ADD", "register:40f0:8", ["const:8cb6dc:8", "const:4:8"]]
+ 008cb6dc ["CALL", null, ["callee:00c586e0:8"]]
- 008cb6a4 ["INT_ADD", "register:40f0:8", ["const:8cb6a4:8", "const:4:8"]]
- 008cb6a4 ["CALL", null, ["callee:00aca8e0:8"]]
+ 008cb6f8 ["INT_ADD", "register:40f0:8", ["const:8cb6f8:8", "const:4:8"]]
+ 008cb6f8 ["CALL", null, ["callee:00aca8e0:8"]]
- 008cb6c4 ["INT_ADD", "register:40f0:8", ["const:8cb6c4:8", "const:4:8"]]
- 008cb6c4 ["CALL", null, ["callee:00aca728:8"]]
+ 008cb718 ["INT_ADD", "register:40f0:8", ["const:8cb718:8", "const:4:8"]]
+ 008cb718 ["CALL", null, ["callee:00aca728:8"]]
~~~


<a id="compare-1897be49b8a5263b918c57d0f234ede2"></a>

### [`008cb7ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb7ec.md) → [`008cb840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb840.md) FUN_008cb840

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cb8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb8b0.md) · 呼出先 5件 [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`006b21e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b21e4.md) [`0078dcac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078dcac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008cb904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb904.md) · 呼出先 5件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`006b223c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b223c.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 69.39% / 新版 69.39%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cb85c",
      "incomplete_value": true,
      "site": "008cb860",
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
            "const:4a0:8"
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
      "unmatched:008cb804",
      "DATA",
      [
        "storage",
        "00c83d30",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008cb834",
      "DATA",
      [
        "storage",
        "00c78330",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008cb848",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cb8b8"
      ]
    ]
  ],
  "added": [
    [
      "008cb858",
      "DATA",
      [
        "storage",
        "00c83e00",
        null,
        "pointer"
      ]
    ],
    [
      "008cb888",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "008cb89c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cb8b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cb80c ["INT_ADD", "register:40f0:8", ["const:8cb80c:8", "const:4:8"]]
- 008cb80c ["CALL", null, ["callee:0078dd04:8"]]
+ 008cb860 ["INT_ADD", "register:40f0:8", ["const:8cb860:8", "const:4:8"]]
+ 008cb860 ["CALL", null, ["callee:0078dd04:8"]]
- 008cb860 ["INT_ADD", "register:40f0:8", ["const:8cb860:8", "const:4:8"]]
- 008cb860 ["CALL", null, ["callee:00c57f50:8"]]
+ 008cb8b4 ["INT_ADD", "register:40f0:8", ["const:8cb8b4:8", "const:4:8"]]
+ 008cb8b4 ["CALL", null, ["callee:00c57f50:8"]]
- 008cb7fc ["COPY", "tmp:0:8", ["const:d30:8"]]
- 008cb7fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cb7fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cb7fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3b3847b819895ff09959c3cb2e0ef6e4"></a>

### [`008cb8d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb8d8.md) → [`008cb92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb92c.md) FUN_008cb92c

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
      "definition_site": "008cb94c",
      "incomplete_value": false,
      "site": "008cb950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cb8f8",
      "incomplete_value": false,
      "site": "008cb8fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:d68:8"
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
      "008cb950",
      "DATA",
      [
        "storage",
        "00c83d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cb950",
      "DATA",
      [
        "storage",
        "00c83e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cb8ec ["INT_ADD", "register:40f0:8", ["const:8cb8ec:8", "const:4:8"]]
- 008cb8ec ["CALL", null, ["callee:00c57f60:8"]]
+ 008cb940 ["INT_ADD", "register:40f0:8", ["const:8cb940:8", "const:4:8"]]
+ 008cb940 ["CALL", null, ["callee:00c57f60:8"]]
- 008cb8f8 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 008cb8f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cb8f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cb8f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cb94c ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 008cb94c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cb94c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cb94c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30a5295bd03cbc0e58b0f3d62834cc02"></a>

### [`008cb910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb910.md) → [`008cb964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb964.md) FUN_008cb964

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
      "definition_site": "008cb968",
      "incomplete_value": false,
      "site": "008cb96c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cb914",
      "incomplete_value": false,
      "site": "008cb918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:d68:8"
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
      "008cb96c",
      "DATA",
      [
        "storage",
        "00c83d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cb96c",
      "DATA",
      [
        "storage",
        "00c83e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cb914 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 008cb914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cb914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cb914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cb968 ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 008cb968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cb968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cb968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-90a600f6b35a9a6b280afc8248130beb"></a>

### [`008cb930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cb930.md) → [`008cb984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb984.md) FUN_008cb984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a46bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46bb8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 94.58% / 新版 94.58%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb9c4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cb970",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008cbae0",
      "incomplete_value": true,
      "site": "008cbae8",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:008cb964",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:008cb96c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008cb9cc"
      ]
    ],
    [
      "008cb9c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008cb9b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008cb9c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008cb9cc"
      ]
    ],
    [
      "008cb9c4",
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
- 008cb970 ["INT_ADD", "register:40f0:8", ["const:8cb970:8", "const:4:8"]]
- 008cb970 ["CALL", null, ["ram:47acf4:8"]]
+ 008cb9c4 ["INT_ADD", "register:40f0:8", ["const:8cb9c4:8", "const:4:8"]]
+ 008cb9c4 ["CALL", null, ["ram:47ad34:8"]]
- 008cba94 ["INT_ADD", "register:40f0:8", ["const:8cba94:8", "const:4:8"]]
- 008cba94 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cbae8 ["INT_ADD", "register:40f0:8", ["const:8cbae8:8", "const:4:8"]]
+ 008cbae8 ["CALL", null, ["callee:00c57f60:8"]]
- 008cbae8 ["INT_ADD", "register:40f0:8", ["const:8cbae8:8", "const:4:8"]]
- 008cbae8 ["CALL", null, ["callee:008b6efc:8"]]
+ 008cbb3c ["INT_ADD", "register:40f0:8", ["const:8cbb3c:8", "const:4:8"]]
+ 008cbb3c ["CALL", null, ["callee:008b6efc:8"]]
~~~


<a id="compare-07affff3ded7d749f5fa8f051845b1ae"></a>

### [`008cbbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbbf0.md) → [`008cbc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbc44.md) FUN_008cbc44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008bdb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bd/008bdb00.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`008bdb58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bd/008bdb58.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cbc50",
      "incomplete_value": false,
      "site": "008cbc54",
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
      "definition_site": "008cbbfc",
      "incomplete_value": false,
      "site": "008cbc00",
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
      "008cbc50",
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
      "008cbc50",
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
- 008cbc00 ["INT_ADD", "register:40f0:8", ["const:8cbc00:8", "const:4:8"]]
- 008cbc00 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008cbc54 ["INT_ADD", "register:40f0:8", ["const:8cbc54:8", "const:4:8"]]
+ 008cbc54 ["CALL", null, ["callee:0043b7b8:8"]]
- 008cbbfc ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008cbbfc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008cbbfc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008cbbfc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008cbc50 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008cbc50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008cbc50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008cbc50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e599c5472a5902cb6369aca8284763e6"></a>

### [`008cbc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbc08.md) → [`008cbc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbc5c.md) FUN_008cbc5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cbc2c",
      "DATA",
      [
        "storage",
        "00c83de8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cbc80",
      "DATA",
      [
        "storage",
        "00c83eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbc1c ["INT_ADD", "register:40f0:8", ["const:8cbc1c:8", "const:4:8"]]
- 008cbc1c ["CALL", null, ["callee:00c57f60:8"]]
+ 008cbc70 ["INT_ADD", "register:40f0:8", ["const:8cbc70:8", "const:4:8"]]
+ 008cbc70 ["CALL", null, ["callee:00c57f60:8"]]
- 008cbc28 ["COPY", "tmp:0:8", ["const:de8:8"]]
- 008cbc28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cbc28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cbc28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008cbc2c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008cbc2c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 008cbc2c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 008cbc2c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e4a8cca5b839d7a457a08072b5d0ec34"></a>

### [`008cbc3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbc3c.md) → [`008cbc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbc90.md) FUN_008cbc90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cbc48",
      "DATA",
      [
        "storage",
        "00c83de8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cbc9c",
      "DATA",
      [
        "storage",
        "00c83eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbc44 ["COPY", "tmp:0:8", ["const:de8:8"]]
- 008cbc44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cbc44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cbc44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008cbc48 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 008cbc48 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 008cbc48 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 008cbc48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
+ 008cbc98 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 008cbc98 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008cbc98 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008cbc98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-47c22a5806e70127da9c11552ad44a07"></a>

### [`008cbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbc58.md) → [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) FUN_008cbcac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 12件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.26% / 新版 98.26%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cbce4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cbc90",
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
      "site": "008cbcf0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cbc9c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cbe08",
      "incomplete_value": true,
      "site": "008cbe0c",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "leaf",
            "const:2:8"
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
      "008cbce4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008cbcf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008cbef8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008c385c"
      ]
    ]
  ],
  "added": [
    [
      "008cbce4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008cbcf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008cbd44",
      "DATA",
      [
        "storage",
        "0044ded0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbc90 ["INT_ADD", "register:40f0:8", ["const:8cbc90:8", "const:4:8"]]
- 008cbc90 ["CALL", null, ["ram:47acf4:8"]]
+ 008cbce4 ["INT_ADD", "register:40f0:8", ["const:8cbce4:8", "const:4:8"]]
+ 008cbce4 ["CALL", null, ["ram:47ad34:8"]]
- 008cbc9c ["INT_ADD", "register:40f0:8", ["const:8cbc9c:8", "const:4:8"]]
- 008cbc9c ["CALL", null, ["ram:47acf4:8"]]
+ 008cbcf0 ["INT_ADD", "register:40f0:8", ["const:8cbcf0:8", "const:4:8"]]
+ 008cbcf0 ["CALL", null, ["ram:47ad34:8"]]
- 008cbdb8 ["INT_ADD", "register:40f0:8", ["const:8cbdb8:8", "const:4:8"]]
- 008cbdb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cbe0c ["INT_ADD", "register:40f0:8", ["const:8cbe0c:8", "const:4:8"]]
+ 008cbe0c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8bdbf243f8245ecb3e454343345c4195"></a>

### [`008cbf34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbf34.md) → [`008cbf88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbf88.md) FUN_008cbf88

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
      "definition_site": "008cbfac",
      "incomplete_value": false,
      "site": "008cbfac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cbf58",
      "incomplete_value": false,
      "site": "008cbf58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:e68:8"
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
      "008cbfac",
      "DATA",
      [
        "storage",
        "00c83e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cbfac",
      "DATA",
      [
        "storage",
        "00c83f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbf48 ["INT_ADD", "register:40f0:8", ["const:8cbf48:8", "const:4:8"]]
- 008cbf48 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cbf9c ["INT_ADD", "register:40f0:8", ["const:8cbf9c:8", "const:4:8"]]
+ 008cbf9c ["CALL", null, ["callee:00c57f60:8"]]
- 008cbf54 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 008cbf54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cbf54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cbf54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cbfa8 ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 008cbfa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cbfa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cbfa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-36bfe9176acbdaf7f60da59185420107"></a>

### [`008cbf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbf68.md) → [`008cbfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbfbc.md) FUN_008cbfbc

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
      "unmatched:008cbf74",
      "DATA",
      [
        "storage",
        "00c83e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cbfc8",
      "DATA",
      [
        "storage",
        "00c83f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cbf68 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 008cbf68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008cbf6c ["COPY", "register:4048:8", ["const:c83000:8"]]
- 008cbf70 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 008cbf70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cbf70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cbf70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e9568a6e15c735971f62b24fd82e2a39"></a>

### [`008cbf84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbf84.md) → [`008cbfd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbfd8.md) FUN_008cbfd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.41% / 新版 79.41%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008cc24c",
      "incomplete_value": true,
      "site": "008cc254",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_XOR",
            "4",
            [
              [
                "live",
                "register:4040:4"
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
      "unmatched:008cbf88",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008cc024",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008cc2dc"
      ]
    ],
    [
      "unmatched:008cbfe0",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008cbfdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008cc024",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008cc330"
      ]
    ],
    [
      "008cc034",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc254 ["INT_ADD", "register:40f0:8", ["const:8cc254:8", "const:4:8"]]
- 008cc254 ["CALL", null, ["callee:00a46c0c:8"]]
+ 008cc2a8 ["INT_ADD", "register:40f0:8", ["const:8cc2a8:8", "const:4:8"]]
+ 008cc2a8 ["CALL", null, ["callee:00a46c0c:8"]]
- 008cbf84 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 008cbf88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008cbf88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008cbf88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008cbf88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5b2cd02e33146350e2528925ac1502db"></a>

### [`008cc3ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc3ac.md) → [`008cc400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc400.md) FUN_008cc400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008cc424",
      "incomplete_value": false,
      "site": "008cc424",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cc3d0",
      "incomplete_value": false,
      "site": "008cc3d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
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
      "unmatched:008cc3b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008cc424",
      "DATA",
      [
        "storage",
        "00c83ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cc404",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008cc424",
      "DATA",
      [
        "storage",
        "00c83fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc3b0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008cc3b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008cc3c0 ["INT_ADD", "register:40f0:8", ["const:8cc3c0:8", "const:4:8"]]
- 008cc3c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cc414 ["INT_ADD", "register:40f0:8", ["const:8cc414:8", "const:4:8"]]
+ 008cc414 ["CALL", null, ["callee:00c57f60:8"]]
- 008cc3cc ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 008cc3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cc3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cc3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cc420 ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 008cc420 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc420 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc420 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-70566035fa52a60470b797af4570eb24"></a>

### [`008cc3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc3e0.md) → [`008cc434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc434.md) FUN_008cc434

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
      "definition_site": "008cc440",
      "incomplete_value": false,
      "site": "008cc440",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cc3ec",
      "incomplete_value": false,
      "site": "008cc3ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
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
      "008cc440",
      "DATA",
      [
        "storage",
        "00c83ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cc440",
      "DATA",
      [
        "storage",
        "00c83fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc3e8 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 008cc3e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cc3e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cc3e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008cc43c ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 008cc43c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008cc43c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008cc43c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2bf2e8a043064d98f5de25e605618d5e"></a>

### [`008cc3fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc3fc.md) → [`008cc450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc450.md) FUN_008cc450

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008bf5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bf/008bf5ac.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008bf604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf604.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.19% / 新版 76.19%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cc470",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cc41c",
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
      "unmatched:008cc3fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc414",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008cc428"
      ]
    ],
    [
      "008cc470",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008cc450",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008cc468",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cc47c"
      ]
    ],
    [
      "008cc470",
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
- 008cc41c ["INT_ADD", "register:40f0:8", ["const:8cc41c:8", "const:4:8"]]
- 008cc41c ["CALL", null, ["ram:47acf4:8"]]
+ 008cc470 ["INT_ADD", "register:40f0:8", ["const:8cc470:8", "const:4:8"]]
+ 008cc470 ["CALL", null, ["ram:47ad34:8"]]
- 008cc3fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008cc3fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008cc3fc ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 008cc3fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008cc400 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-0c97e37cb2864695d890c8c38d5b04d8"></a>

### [`008cc478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc478.md) → [`008cc4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc4cc.md) FUN_008cc4cc

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
      "definition_site": "008cc4d0",
      "incomplete_value": false,
      "site": "008cc4d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cc47c",
      "incomplete_value": false,
      "site": "008cc480",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:f68:8"
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
      "008cc4d4",
      "DATA",
      [
        "storage",
        "00c83f68",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008cc4d4",
      "DATA",
      [
        "storage",
        "00c84038",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc478 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008cc4cc ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008cc47c ["COPY", "tmp:0:8", ["const:f68:8"]]
- 008cc47c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cc47c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cc47c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cc4d0 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 008cc4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5997f767c1c146c15df2fd051e60da3e"></a>

### [`008cc488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc488.md) → [`008cc4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc4dc.md) FUN_008cc4dc

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
      "definition_site": "008cc4ec",
      "incomplete_value": false,
      "site": "008cc4f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cc498",
      "incomplete_value": false,
      "site": "008cc4a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
          ],
          [
            "leaf",
            "const:f68:8"
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
      "008cc4f4",
      "DATA",
      [
        "storage",
        "00c83f68",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008cc4f4",
      "DATA",
      [
        "storage",
        "00c84038",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cc494 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008cc4e8 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008cc498 ["COPY", "tmp:0:8", ["const:f68:8"]]
- 008cc498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cc498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cc498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cc4ec ["COPY", "tmp:0:8", ["const:38:8"]]
+ 008cc4ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc4ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cc4ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008cc4a4 ["INT_ADD", "register:40f0:8", ["const:8cc4a4:8", "const:4:8"]]
- 008cc4a4 ["CALL", null, ["callee:00c57f70:8"]]
+ 008cc4f8 ["INT_ADD", "register:40f0:8", ["const:8cc4f8:8", "const:4:8"]]
+ 008cc4f8 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-45a33aa0591a676c539440535675fd0a"></a>

### [`008cc4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc4c0.md) → [`008cc514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc514.md) FUN_008cc514

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008c385c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c3/008c385c.md) [`008c5208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5208.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008cc600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc600.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008cc654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cc4d0",
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
      "008cc524",
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
- 008cc4d0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008cc4d0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008cc4d0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 008cc4d0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008cc4f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 008cc4f0 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 008cc544 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 008cc544 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 008cc524 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008cc524 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
+ 008cc578 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008cc578 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
~~~


<a id="compare-89f19d0eca08ab031a456a065eb5bf82"></a>

### [`008cc600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc600.md) → [`008cc654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc654.md) FUN_008cc654

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008cc4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc4c0.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`008cc514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc514.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cc660",
      "incomplete_value": false,
      "site": "008cc664",
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
      "definition_site": "008cc60c",
      "incomplete_value": false,
      "site": "008cc610",
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
      "008cc660",
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
      "008cc660",
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
- 008cc610 ["INT_ADD", "register:40f0:8", ["const:8cc610:8", "const:4:8"]]
- 008cc610 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008cc664 ["INT_ADD", "register:40f0:8", ["const:8cc664:8", "const:4:8"]]
+ 008cc664 ["CALL", null, ["callee:0043b7b8:8"]]
- 008cc60c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008cc60c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008cc60c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008cc60c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008cc660 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008cc660 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008cc660 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008cc660 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6c62e3b06800b7eb19b17dd06502666c"></a>

### [`008cc614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc614.md) → [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) FUN_008cc668

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c385c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c3/008c385c.md) [`008cc614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc614.md) [`008ccac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008ccac4.md) · 呼出先 6件 [`008cc614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc614.md) [`008ccac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008ccac4.md) [`008cce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cce50.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 3件 [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`008ccb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccb18.md) · 呼出先 6件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`008ccb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccb18.md) [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.13% / 新版 93.13%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008cc6dc",
      "incomplete_value": true,
      "site": "008cc6ec",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "008cc848",
      "incomplete_value": true,
      "site": "008cc850",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "008cc854",
      "incomplete_value": true,
      "site": "008cc858",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:008cc618",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc61c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cc620",
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
      "008cc66c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008cc670",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008cc674",
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
- 008cc6ec ["INT_ADD", "register:40f0:8", ["const:8cc6ec:8", "const:4:8"]]
- 008cc6ec ["CALL", null, ["local:b0:8"]]
+ 008cc740 ["INT_ADD", "register:40f0:8", ["const:8cc740:8", "const:4:8"]]
+ 008cc740 ["CALL", null, ["local:b0:8"]]
- 008cc850 ["COPY", "register:0:8", ["register:4040:8"]]
- 008cc850 ["INT_ADD", "register:40f0:8", ["const:8cc850:8", "const:4:8"]]
- 008cc850 ["CALLIND", null, ["register:0:8"]]
+ 008cc8a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008cc8a4 ["INT_ADD", "register:40f0:8", ["const:8cc8a4:8", "const:4:8"]]
+ 008cc8a4 ["CALLIND", null, ["register:0:8"]]
- 008cc858 ["INT_ADD", "register:40f0:8", ["const:8cc858:8", "const:4:8"]]
- 008cc858 ["CALL", null, ["callee:00c57f50:8"]]
+ 008cc8ac ["INT_ADD", "register:40f0:8", ["const:8cc8ac:8", "const:4:8"]]
+ 008cc8ac ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-ccd22aabdecd43c430b2fef1a5548223"></a>

### [`008ccac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008ccac4.md) → [`008ccb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccb18.md) FUN_008ccb18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cc614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc614.md) · 呼出先 3件 [`008cc614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc614.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) · 呼出先 3件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 67.71% / 新版 67.71%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 6件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ccc48",
      "incomplete_value": true,
      "site": "008ccc4c",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "008ccce0",
      "incomplete_value": true,
      "site": "008ccce4",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "008cccf8",
      "incomplete_value": true,
      "site": "008cccfc",
      "value": [
        "live",
        "register:4010:8"
      ]
    },
    "ordinal": 7,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ccac4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ccac8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ccacc",
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
      "008ccb18",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008ccb1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008ccb20",
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
- 008ccbe8 ["BRANCH", null, ["local:b33:8"]]
+ 008ccc3c ["BRANCH", null, ["local:b32:8"]]
- 008ccc28 ["COPY", "tmp:0:8", ["const:8:8"]]
- 008ccc28 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 008ccc28 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 008ccc28 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
- 008ccc2c ["COPY", "register:4000:8", ["const:ffffffffffffffff:8"]]
~~~


<a id="compare-76913762125264df119ee32923816c89"></a>

### [`008ccdc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008ccdc4.md) → [`008cce18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cce18.md) FUN_008cce18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ccdd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ccde8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cce94"
      ]
    ],
    [
      "unmatched:008cce08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cce94"
      ]
    ]
  ],
  "added": [
    [
      "008cce2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008cce3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cce94"
      ]
    ],
    [
      "008cce5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cce94"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ccdcc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008ccdcc ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 008cce20 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008cce20 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 008ccdd8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008ccdd8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008ccdd8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 008ccdd8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008ccddc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-8a0f85086b3fcd3e8b1112929636adb8"></a>

### [`008cce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cce50.md) → [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) FUN_008ccea4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008cc614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc614.md) [`008cce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cce50.md) · 呼出先 3件 [`008cce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cce50.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`008cc668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc668.md) [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) · 呼出先 3件 [`008ccea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008ccea4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cd4ac",
      "incomplete_value": true,
      "site": "008cd4b0",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 17,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cceec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ccf7c"
      ]
    ],
    [
      "unmatched:008cd454",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008ccf40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ccf7c"
      ]
    ],
    [
      "008cd4a8",
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
- 008cd45c ["INT_ADD", "register:40f0:8", ["const:8cd45c:8", "const:4:8"]]
- 008cd45c ["CALL", null, ["callee:00c57f50:8"]]
+ 008cd4b0 ["INT_ADD", "register:40f0:8", ["const:8cd4b0:8", "const:4:8"]]
+ 008cd4b0 ["CALL", null, ["callee:00c57f50:8"]]
- 008cce50 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 008cce50 ["CBRANCH", null, ["local:b92:8", "tmp:0:1"]]
+ 008ccea4 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 008ccea4 ["CBRANCH", null, ["local:b90:8", "tmp:0:1"]]
- 008cce80 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008cce80 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 008cce80 ["CBRANCH", null, ["local:b40:8", "tmp:1:1"]]
+ 008cced4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008cced4 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 008cced4 ["CBRANCH", null, ["local:b39:8", "tmp:1:1"]]
~~~


<a id="compare-7dd06efbaa8cb15d8c6927b900983735"></a>

### [`008cd4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd4cc.md) → [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) FUN_008cd520

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c385c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c3/008c385c.md) [`008cd4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd4cc.md) [`008cdb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cdb30.md) · 呼出先 7件 [`008cd4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd4cc.md) [`008cd9b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd9b4.md) [`008cdb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cdb30.md) [`008cdec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cdec4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 3件 [`008c38b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c38b4.md) [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdb84.md) · 呼出先 7件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cda08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cda08.md) [`008cdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdb84.md) [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cd69c",
      "incomplete_value": true,
      "site": "008cd6a4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cd698",
      "incomplete_value": true,
      "site": "008cd6a4",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "008cd88c",
      "incomplete_value": true,
      "site": "008cd894",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 24,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cd4fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cd584"
      ]
    ],
    [
      "unmatched:008cd504",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cd50c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cda04"
      ]
    ]
  ],
  "added": [
    [
      "008cd550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cd584"
      ]
    ],
    [
      "008cd558",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008cd560",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cda04"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cd650 ["INT_ADD", "register:40f0:8", ["const:8cd650:8", "const:4:8"]]
- 008cd650 ["CALL", null, ["callee:008cda08:8"]]
+ 008cd6a4 ["INT_ADD", "register:40f0:8", ["const:8cd6a4:8", "const:4:8"]]
+ 008cd6a4 ["CALL", null, ["callee:008cda08:8"]]
- 008cd6a4 ["INT_ADD", "register:40f0:8", ["const:8cd6a4:8", "const:4:8"]]
- 008cd6a4 ["CALL", null, ["callee:00c57f50:8"]]
+ 008cd760 ["INT_ADD", "register:40f0:8", ["const:8cd760:8", "const:4:8"]]
+ 008cd760 ["CALL", null, ["callee:00c57f50:8"]]
- 008cd840 ["CBRANCH", null, ["local:b67:8", "register:101:1"]]
+ 008cd894 ["CBRANCH", null, ["local:b65:8", "register:101:1"]]
~~~


<a id="compare-6b51e83d6031f0d6877931f44fee34b4"></a>

### [`008cdb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cdb30.md) → [`008cdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdb84.md) FUN_008cdb84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008cd4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd4cc.md) · 呼出先 5件 [`008cd4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd4cc.md) [`008cd9b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd9b4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) · 呼出先 5件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cda08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cda08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.09% / 新版 93.09%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cddc0",
      "incomplete_value": true,
      "site": "008cddcc",
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
      "definition_site": "008cddc4",
      "incomplete_value": true,
      "site": "008cddcc",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008cddb8",
      "incomplete_value": true,
      "site": "008cddcc",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "live",
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:008cdbf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:008cdccc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "unmatched:008cdcd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cdce0"
      ]
    ]
  ],
  "added": [
    [
      "008cdc48",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "008cdd20",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "008cdd24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cdce0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cdd78 ["INT_ADD", "register:40f0:8", ["const:8cdd78:8", "const:4:8"]]
- 008cdd78 ["CALL", null, ["callee:008cd520:8"]]
+ 008cddcc ["INT_ADD", "register:40f0:8", ["const:8cddcc:8", "const:4:8"]]
+ 008cddcc ["CALL", null, ["callee:008cd520:8"]]
- 008cdb5c ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 008cdb5c ["CBRANCH", null, ["local:b43:8", "tmp:0:1"]]
+ 008cdbb0 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 008cdbb0 ["CBRANCH", null, ["local:b45:8", "tmp:0:1"]]
- 008cdb90 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008cdb90 ["CBRANCH", null, ["local:b53:8", "tmp:0:1"]]
+ 008cdbe4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008cdbe4 ["CBRANCH", null, ["local:b55:8", "tmp:0:1"]]
~~~


<a id="compare-b039f783ce2d6ef940bb1bf9e658d0b3"></a>

### [`008cdec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cdec4.md) → [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) FUN_008cdf18

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008cd4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd4cc.md) [`008cdec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cdec4.md) · 呼出先 5件 [`008cd9b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cd9b4.md) [`008cdec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cd/008cdec4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`008cd520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cd520.md) [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) · 呼出先 5件 [`008cda08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cda08.md) [`008cdf18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cd/008cdf18.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ce1b8",
      "incomplete_value": true,
      "site": "008ce1bc",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 3,
    "slot": 7
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ce1e0",
      "incomplete_value": true,
      "site": "008ce1fc",
      "value": [
        "live",
        "register:40c8:8"
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
      "unmatched:008cdf68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce148"
      ]
    ],
    [
      "unmatched:008ce050",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce070"
      ]
    ],
    [
      "unmatched:008ce0a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce0bc"
      ]
    ]
  ],
  "added": [
    [
      "008cdfbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce148"
      ]
    ],
    [
      "008ce0a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce070"
      ]
    ],
    [
      "008ce0f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ce0bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ce1bc ["INT_ADD", "register:40f0:8", ["const:8ce1bc:8", "const:4:8"]]
- 008ce1bc ["CALL", null, ["local:b0:8"]]
+ 008ce210 ["INT_ADD", "register:40f0:8", ["const:8ce210:8", "const:4:8"]]
+ 008ce210 ["CALL", null, ["local:b0:8"]]
- 008ce1fc ["INT_ADD", "register:40f0:8", ["const:8ce1fc:8", "const:4:8"]]
- 008ce1fc ["CALL", null, ["local:b0:8"]]
+ 008ce250 ["INT_ADD", "register:40f0:8", ["const:8ce250:8", "const:4:8"]]
+ 008ce250 ["CALL", null, ["local:b0:8"]]
- 008cdef4 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 008cdef4 ["CBRANCH", null, ["local:b96:8", "tmp:0:1"]]
+ 008cdf48 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 008cdf48 ["CBRANCH", null, ["local:b95:8", "tmp:0:1"]]
~~~


<a id="compare-a34b5b5c58f74edf07f8f89a88e8c172"></a>

### [`008ce5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ce5c4.md) → [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) FUN_008ce618

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008c5208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5208.md) [`008ce5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ce5c4.md) [`008cea74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008cea74.md) · 呼出先 6件 [`008ce5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ce5c4.md) [`008cea74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008cea74.md) [`008ced74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ced74.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 3件 [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) [`008ceac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ceac8.md) · 呼出先 6件 [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) [`008ceac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ceac8.md) [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.25% / 新版 97.25%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ce904",
      "incomplete_value": true,
      "site": "008ce908",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:008ce914",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cea34"
      ]
    ],
    [
      "unmatched:008ce92c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cea34"
      ]
    ],
    [
      "unmatched:008ce8bc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "008ce968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cea34"
      ]
    ],
    [
      "008ce980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cea34"
      ]
    ],
    [
      "008ce910",
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
- 008ce908 ["INT_ADD", "register:40f0:8", ["const:8ce908:8", "const:4:8"]]
- 008ce908 ["CALL", null, ["callee:00c57f50:8"]]
+ 008ce95c ["INT_ADD", "register:40f0:8", ["const:8ce95c:8", "const:4:8"]]
+ 008ce95c ["CALL", null, ["callee:00c57f50:8"]]
- 008ce604 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008ce604 ["CBRANCH", null, ["local:b64:8", "tmp:0:1"]]
+ 008ce658 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008ce658 ["CBRANCH", null, ["local:b61:8", "tmp:0:1"]]
- 008ce69c ["INT_ADD", "register:40f0:8", ["const:8ce69c:8", "const:4:8"]]
- 008ce69c ["CALL", null, ["local:b0:8"]]
+ 008ce6f0 ["INT_ADD", "register:40f0:8", ["const:8ce6f0:8", "const:4:8"]]
+ 008ce6f0 ["CALL", null, ["local:b0:8"]]
~~~


