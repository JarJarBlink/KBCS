# v16.0.1 → v16.0.2 · 最優先の変更候補 (44)

[一覧の目次](README.md)

<a id="compare-b05845b58b5f764d9094985f539a8ec8"></a>

### [`007fc070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc070.md) → [`007fc0c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc0c8.md) FUN_007fc0c8

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
    "old": {
      "definition_site": "007fc074",
      "incomplete_value": false,
      "site": "007fc078",
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
      "007fc0d0",
      "DATA",
      [
        "storage",
        "00c7cfb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc0d0",
      "DATA",
      [
        "storage",
        "00c7d080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc070 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fc0c8 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fc074 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 007fc074 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc074 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc074 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc0cc ["COPY", "tmp:0:8", ["const:80:8"]]
+ 007fc0cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-465c643cef9d396a014e3377327d53d7"></a>

### [`007fc088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc088.md) → [`007fc0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc0e0.md) FUN_007fc0e0

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
      "site": "007fc104",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc0ac",
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
      "007fc104",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc104",
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
- 007fc0ac ["INT_ADD", "register:40f0:8", ["const:7fc0ac:8", "const:4:8"]]
- 007fc0ac ["CALL", null, ["ram:47acf4:8"]]
+ 007fc104 ["INT_ADD", "register:40f0:8", ["const:7fc104:8", "const:4:8"]]
+ 007fc104 ["CALL", null, ["ram:47ad34:8"]]
- 007fc0b8 ["INT_ADD", "register:40f0:8", ["const:7fc0b8:8", "const:4:8"]]
- 007fc0b8 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc110 ["INT_ADD", "register:40f0:8", ["const:7fc110:8", "const:4:8"]]
+ 007fc110 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-a6043c25aa01cb30edff26b7b5e350d8"></a>

### [`007fc0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc0fc.md) → [`007fc154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc154.md) FUN_007fc154

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
    "old": {
      "definition_site": "007fc110",
      "incomplete_value": false,
      "site": "007fc114",
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
            "const:30:8"
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
      "007fc16c",
      "DATA",
      [
        "storage",
        "00c7d030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc16c",
      "DATA",
      [
        "storage",
        "00c7d100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc108 ["INT_ADD", "register:40f0:8", ["const:7fc108:8", "const:4:8"]]
- 007fc108 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc160 ["INT_ADD", "register:40f0:8", ["const:7fc160:8", "const:4:8"]]
+ 007fc160 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc110 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007fc110 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc110 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc110 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc168 ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007fc168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-20facea2d488911324ef1af45efe4f4d"></a>

### [`007fc120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc120.md) → [`007fc178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc178.md) FUN_007fc178

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
    "old": {
      "definition_site": "007fc124",
      "incomplete_value": false,
      "site": "007fc128",
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
            "const:30:8"
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
      "007fc180",
      "DATA",
      [
        "storage",
        "00c7d030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc180",
      "DATA",
      [
        "storage",
        "00c7d100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc124 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007fc124 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc124 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc124 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc17c ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007fc17c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc17c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc17c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-efa60d2fc18d20a7d246c05992fcdc40"></a>

### [`007fc138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc138.md) → [`007fc190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc190.md) FUN_007fc190

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
      "site": "007fc1b4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc15c",
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
      "007fc1b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc1b4",
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
- 007fc15c ["INT_ADD", "register:40f0:8", ["const:7fc15c:8", "const:4:8"]]
- 007fc15c ["CALL", null, ["ram:47acf4:8"]]
+ 007fc1b4 ["INT_ADD", "register:40f0:8", ["const:7fc1b4:8", "const:4:8"]]
+ 007fc1b4 ["CALL", null, ["ram:47ad34:8"]]
- 007fc168 ["INT_ADD", "register:40f0:8", ["const:7fc168:8", "const:4:8"]]
- 007fc168 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc1c0 ["INT_ADD", "register:40f0:8", ["const:7fc1c0:8", "const:4:8"]]
+ 007fc1c0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-84b2c6db69dd867230b6907b2b7c6627"></a>

### [`007fc1ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc1ac.md) → [`007fc204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc204.md) FUN_007fc204

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
    "old": {
      "definition_site": "007fc1c0",
      "incomplete_value": false,
      "site": "007fc1c4",
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
            "const:b0:8"
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
      "007fc21c",
      "DATA",
      [
        "storage",
        "00c7d0b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc21c",
      "DATA",
      [
        "storage",
        "00c7d180",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc1b8 ["INT_ADD", "register:40f0:8", ["const:7fc1b8:8", "const:4:8"]]
- 007fc1b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc210 ["INT_ADD", "register:40f0:8", ["const:7fc210:8", "const:4:8"]]
+ 007fc210 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc1c0 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 007fc1c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc1c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc1c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc218 ["COPY", "tmp:0:8", ["const:180:8"]]
+ 007fc218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-77a064f9218c022eb8f28ec556ce7b1f"></a>

### [`007fc1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc1d0.md) → [`007fc228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc228.md) FUN_007fc228

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
    "old": {
      "definition_site": "007fc1d4",
      "incomplete_value": false,
      "site": "007fc1d8",
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
            "const:b0:8"
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
      "007fc230",
      "DATA",
      [
        "storage",
        "00c7d0b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc230",
      "DATA",
      [
        "storage",
        "00c7d180",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc1d4 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 007fc1d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc1d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc1d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc22c ["COPY", "tmp:0:8", ["const:180:8"]]
+ 007fc22c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc22c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc22c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9a6e4a3852f043d53b175ff84e02fd40"></a>

### [`007fc1e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc1e8.md) → [`007fc240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc240.md) FUN_007fc240

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
      "site": "007fc264",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc20c",
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
      "007fc264",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc264",
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
- 007fc20c ["INT_ADD", "register:40f0:8", ["const:7fc20c:8", "const:4:8"]]
- 007fc20c ["CALL", null, ["ram:47acf4:8"]]
+ 007fc264 ["INT_ADD", "register:40f0:8", ["const:7fc264:8", "const:4:8"]]
+ 007fc264 ["CALL", null, ["ram:47ad34:8"]]
- 007fc218 ["INT_ADD", "register:40f0:8", ["const:7fc218:8", "const:4:8"]]
- 007fc218 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc270 ["INT_ADD", "register:40f0:8", ["const:7fc270:8", "const:4:8"]]
+ 007fc270 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b4ef0eb93885fe33ed1fd2d1a6e9302f"></a>

### [`007fc25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc25c.md) → [`007fc2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc2b4.md) FUN_007fc2b4

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
    "old": {
      "definition_site": "007fc280",
      "incomplete_value": false,
      "site": "007fc280",
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
            "const:130:8"
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
      "007fc2d8",
      "DATA",
      [
        "storage",
        "00c7d130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc2d8",
      "DATA",
      [
        "storage",
        "00c7d200",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc270 ["INT_ADD", "register:40f0:8", ["const:7fc270:8", "const:4:8"]]
- 007fc270 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc2c8 ["INT_ADD", "register:40f0:8", ["const:7fc2c8:8", "const:4:8"]]
+ 007fc2c8 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc27c ["COPY", "tmp:0:8", ["const:130:8"]]
- 007fc27c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc27c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc27c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc2d4 ["COPY", "tmp:0:8", ["const:200:8"]]
+ 007fc2d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc2d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc2d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9e68a37d0c152342ab88d205d96769fa"></a>

### [`007fc290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc290.md) → [`007fc2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc2e8.md) FUN_007fc2e8

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
    "old": {
      "definition_site": "007fc29c",
      "incomplete_value": false,
      "site": "007fc29c",
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
            "const:130:8"
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
      "007fc2f4",
      "DATA",
      [
        "storage",
        "00c7d130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc2f4",
      "DATA",
      [
        "storage",
        "00c7d200",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc298 ["COPY", "tmp:0:8", ["const:130:8"]]
- 007fc298 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc298 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc298 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fc2f0 ["COPY", "tmp:0:8", ["const:200:8"]]
+ 007fc2f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc2f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc2f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6db19d8aea2402aa900c3e84bc3b3d05"></a>

### [`007fc2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc2ac.md) → [`007fc304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc304.md) FUN_007fc304

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
      "site": "007fc328",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc2d0",
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
      "007fc328",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc328",
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
- 007fc2d0 ["INT_ADD", "register:40f0:8", ["const:7fc2d0:8", "const:4:8"]]
- 007fc2d0 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc328 ["INT_ADD", "register:40f0:8", ["const:7fc328:8", "const:4:8"]]
+ 007fc328 ["CALL", null, ["ram:47ad34:8"]]
- 007fc2dc ["INT_ADD", "register:40f0:8", ["const:7fc2dc:8", "const:4:8"]]
- 007fc2dc ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc334 ["INT_ADD", "register:40f0:8", ["const:7fc334:8", "const:4:8"]]
+ 007fc334 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-e41aa405c8a032e7a4ad8e845ce524d6"></a>

### [`007fc320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc320.md) → [`007fc378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc378.md) FUN_007fc378

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
    "old": {
      "definition_site": "007fc344",
      "incomplete_value": false,
      "site": "007fc344",
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
            "const:1b0:8"
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
      "007fc39c",
      "DATA",
      [
        "storage",
        "00c7d1b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc39c",
      "DATA",
      [
        "storage",
        "00c7d280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc334 ["INT_ADD", "register:40f0:8", ["const:7fc334:8", "const:4:8"]]
- 007fc334 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc38c ["INT_ADD", "register:40f0:8", ["const:7fc38c:8", "const:4:8"]]
+ 007fc38c ["CALL", null, ["callee:00c57f60:8"]]
- 007fc340 ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 007fc340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc398 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 007fc398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-44bba2fac424e978562abf87e1b0f860"></a>

### [`007fc354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc354.md) → [`007fc3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc3ac.md) FUN_007fc3ac

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
    "old": {
      "definition_site": "007fc360",
      "incomplete_value": false,
      "site": "007fc360",
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
            "const:1b0:8"
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
      "007fc3b8",
      "DATA",
      [
        "storage",
        "00c7d1b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc3b8",
      "DATA",
      [
        "storage",
        "00c7d280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc35c ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 007fc35c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc35c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc35c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fc3b4 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 007fc3b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc3b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc3b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9333319641f66cfa90cfe46215c348af"></a>

### [`007fc370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc370.md) → [`007fc3c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc3c8.md) FUN_007fc3c8

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
      "site": "007fc3ec",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc394",
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
      "007fc3ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc3ec",
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
- 007fc394 ["INT_ADD", "register:40f0:8", ["const:7fc394:8", "const:4:8"]]
- 007fc394 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc3ec ["INT_ADD", "register:40f0:8", ["const:7fc3ec:8", "const:4:8"]]
+ 007fc3ec ["CALL", null, ["ram:47ad34:8"]]
- 007fc3a0 ["INT_ADD", "register:40f0:8", ["const:7fc3a0:8", "const:4:8"]]
- 007fc3a0 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc3f8 ["INT_ADD", "register:40f0:8", ["const:7fc3f8:8", "const:4:8"]]
+ 007fc3f8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-c6c8a93e0b68067c5390e18fe97740d2"></a>

### [`007fc3e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc3e4.md) → [`007fc43c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc43c.md) FUN_007fc43c

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
    "old": {
      "definition_site": "007fc3f8",
      "incomplete_value": false,
      "site": "007fc3fc",
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
            "const:230:8"
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
      "007fc454",
      "DATA",
      [
        "storage",
        "00c7d230",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc454",
      "DATA",
      [
        "storage",
        "00c7d300",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc3f0 ["INT_ADD", "register:40f0:8", ["const:7fc3f0:8", "const:4:8"]]
- 007fc3f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc448 ["INT_ADD", "register:40f0:8", ["const:7fc448:8", "const:4:8"]]
+ 007fc448 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc3f8 ["COPY", "tmp:0:8", ["const:230:8"]]
- 007fc3f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc3f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc3f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc450 ["COPY", "tmp:0:8", ["const:300:8"]]
+ 007fc450 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc450 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc450 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-329de62f2aad7c2563e527a8bb05642b"></a>

### [`007fc408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc408.md) → [`007fc460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc460.md) FUN_007fc460

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
    "old": {
      "definition_site": "007fc40c",
      "incomplete_value": false,
      "site": "007fc410",
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
            "const:230:8"
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
      "007fc468",
      "DATA",
      [
        "storage",
        "00c7d230",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc468",
      "DATA",
      [
        "storage",
        "00c7d300",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc40c ["COPY", "tmp:0:8", ["const:230:8"]]
- 007fc40c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc40c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc40c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc464 ["COPY", "tmp:0:8", ["const:300:8"]]
+ 007fc464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2214388974df3225f16e66f222e11c3b"></a>

### [`007fc420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc420.md) → [`007fc478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc478.md) FUN_007fc478

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
      "site": "007fc49c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc444",
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
      "007fc49c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc49c",
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
- 007fc444 ["INT_ADD", "register:40f0:8", ["const:7fc444:8", "const:4:8"]]
- 007fc444 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc49c ["INT_ADD", "register:40f0:8", ["const:7fc49c:8", "const:4:8"]]
+ 007fc49c ["CALL", null, ["ram:47ad34:8"]]
- 007fc450 ["INT_ADD", "register:40f0:8", ["const:7fc450:8", "const:4:8"]]
- 007fc450 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc4a8 ["INT_ADD", "register:40f0:8", ["const:7fc4a8:8", "const:4:8"]]
+ 007fc4a8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-3aab4c011470899c8bc7a672aab13cc5"></a>

### [`007fc494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc494.md) → [`007fc4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc4ec.md) FUN_007fc4ec

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
    "old": {
      "definition_site": "007fc4b8",
      "incomplete_value": false,
      "site": "007fc4b8",
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
            "const:2b0:8"
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
      "007fc510",
      "DATA",
      [
        "storage",
        "00c7d2b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc510",
      "DATA",
      [
        "storage",
        "00c7d380",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc4a8 ["INT_ADD", "register:40f0:8", ["const:7fc4a8:8", "const:4:8"]]
- 007fc4a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc500 ["INT_ADD", "register:40f0:8", ["const:7fc500:8", "const:4:8"]]
+ 007fc500 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc4b4 ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 007fc4b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc4b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc4b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc50c ["COPY", "tmp:0:8", ["const:380:8"]]
+ 007fc50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0f2b5d8f72de8149b501305de4d5cbc6"></a>

### [`007fc4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc4c8.md) → [`007fc520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc520.md) FUN_007fc520

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
    "old": {
      "definition_site": "007fc4d4",
      "incomplete_value": false,
      "site": "007fc4d4",
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
            "const:2b0:8"
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
      "007fc52c",
      "DATA",
      [
        "storage",
        "00c7d2b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc52c",
      "DATA",
      [
        "storage",
        "00c7d380",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc4d0 ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 007fc4d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc4d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc4d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fc528 ["COPY", "tmp:0:8", ["const:380:8"]]
+ 007fc528 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc528 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc528 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c7f2a3eabe5fcb642577fc610621032e"></a>

### [`007fc4e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc4e4.md) → [`007fc53c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc53c.md) FUN_007fc53c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "007fc564",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc50c",
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
      "007fc564",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc564",
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
- 007fc50c ["INT_ADD", "register:40f0:8", ["const:7fc50c:8", "const:4:8"]]
- 007fc50c ["CALL", null, ["ram:47acf4:8"]]
+ 007fc564 ["INT_ADD", "register:40f0:8", ["const:7fc564:8", "const:4:8"]]
+ 007fc564 ["CALL", null, ["ram:47ad34:8"]]
- 007fc518 ["INT_ADD", "register:40f0:8", ["const:7fc518:8", "const:4:8"]]
- 007fc518 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc570 ["INT_ADD", "register:40f0:8", ["const:7fc570:8", "const:4:8"]]
+ 007fc570 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-c77ed40fe5fb02ff7b543d5c7a79f355"></a>

### [`007fc5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc5a0.md) → [`007fc5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc5f8.md) FUN_007fc5f8

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
    "old": {
      "definition_site": "007fc5b4",
      "incomplete_value": false,
      "site": "007fc5b8",
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
            "const:330:8"
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
      "007fc610",
      "DATA",
      [
        "storage",
        "00c7d330",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc610",
      "DATA",
      [
        "storage",
        "00c7d400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc5ac ["INT_ADD", "register:40f0:8", ["const:7fc5ac:8", "const:4:8"]]
- 007fc5ac ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc604 ["INT_ADD", "register:40f0:8", ["const:7fc604:8", "const:4:8"]]
+ 007fc604 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc5b4 ["COPY", "tmp:0:8", ["const:330:8"]]
- 007fc5b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc5b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc5b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc60c ["COPY", "tmp:0:8", ["const:400:8"]]
+ 007fc60c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc60c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc60c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8d9e7eb4f7bb749e5870f5b1ef847eb1"></a>

### [`007fc5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc5c4.md) → [`007fc61c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc61c.md) FUN_007fc61c

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
    "old": {
      "definition_site": "007fc5c8",
      "incomplete_value": false,
      "site": "007fc5cc",
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
            "const:330:8"
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
      "007fc624",
      "DATA",
      [
        "storage",
        "00c7d330",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc624",
      "DATA",
      [
        "storage",
        "00c7d400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc5c8 ["COPY", "tmp:0:8", ["const:330:8"]]
- 007fc5c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc5c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc5c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc620 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 007fc620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-10609605e24d8b1eec96cd2a3b1c43f0"></a>

### [`007fc5dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc5dc.md) → [`007fc634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc634.md) FUN_007fc634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "007fc658",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc600",
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
      "007fc658",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc658",
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
- 007fc600 ["INT_ADD", "register:40f0:8", ["const:7fc600:8", "const:4:8"]]
- 007fc600 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc658 ["INT_ADD", "register:40f0:8", ["const:7fc658:8", "const:4:8"]]
+ 007fc658 ["CALL", null, ["ram:47ad34:8"]]
- 007fc60c ["INT_ADD", "register:40f0:8", ["const:7fc60c:8", "const:4:8"]]
- 007fc60c ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc664 ["INT_ADD", "register:40f0:8", ["const:7fc664:8", "const:4:8"]]
+ 007fc664 ["CALL", null, ["callee:0047ce14:8"]]
- 007fc62c ["INT_ADD", "register:40f0:8", ["const:7fc62c:8", "const:4:8"]]
- 007fc62c ["CALL", null, ["callee:00851550:8"]]
+ 007fc684 ["INT_ADD", "register:40f0:8", ["const:7fc684:8", "const:4:8"]]
+ 007fc684 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-caf37bfbb192a9f9957caa352caae0e7"></a>

### [`007fc680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc680.md) → [`007fc6d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc6d8.md) FUN_007fc6d8

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
      "definition_site": "007fc6ec",
      "incomplete_value": false,
      "site": "007fc6f0",
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
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc694",
      "incomplete_value": false,
      "site": "007fc698",
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
            "const:3b0:8"
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
      "007fc6f0",
      "DATA",
      [
        "storage",
        "00c7d3b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc6f0",
      "DATA",
      [
        "storage",
        "00c7d480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc68c ["INT_ADD", "register:40f0:8", ["const:7fc68c:8", "const:4:8"]]
- 007fc68c ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc6e4 ["INT_ADD", "register:40f0:8", ["const:7fc6e4:8", "const:4:8"]]
+ 007fc6e4 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc694 ["COPY", "tmp:0:8", ["const:3b0:8"]]
- 007fc694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc6ec ["COPY", "tmp:0:8", ["const:480:8"]]
+ 007fc6ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc6ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc6ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cd608ac84e932441968d48a5840ce7bc"></a>

### [`007fc6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc6a4.md) → [`007fc6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc6fc.md) FUN_007fc6fc

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
      "definition_site": "007fc700",
      "incomplete_value": false,
      "site": "007fc704",
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
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc6a8",
      "incomplete_value": false,
      "site": "007fc6ac",
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
            "const:3b0:8"
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
      "007fc704",
      "DATA",
      [
        "storage",
        "00c7d3b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc704",
      "DATA",
      [
        "storage",
        "00c7d480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc6a8 ["COPY", "tmp:0:8", ["const:3b0:8"]]
- 007fc6a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc6a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc6a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc700 ["COPY", "tmp:0:8", ["const:480:8"]]
+ 007fc700 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc700 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc700 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bccc972a0bec08eef9d48a509154062f"></a>

### [`007fc6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc6bc.md) → [`007fc714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc714.md) FUN_007fc714

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc738",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc6e0",
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
      "007fc738",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc738",
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
- 007fc6e0 ["INT_ADD", "register:40f0:8", ["const:7fc6e0:8", "const:4:8"]]
- 007fc6e0 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc738 ["INT_ADD", "register:40f0:8", ["const:7fc738:8", "const:4:8"]]
+ 007fc738 ["CALL", null, ["ram:47ad34:8"]]
- 007fc738 ["INT_ADD", "register:40f0:8", ["const:7fc738:8", "const:4:8"]]
- 007fc738 ["CALL", null, ["callee:008b7a20:8"]]
+ 007fc790 ["INT_ADD", "register:40f0:8", ["const:7fc790:8", "const:4:8"]]
+ 007fc790 ["CALL", null, ["callee:008b7a20:8"]]
- 007fc6ec ["INT_ADD", "register:40f0:8", ["const:7fc6ec:8", "const:4:8"]]
- 007fc6ec ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc744 ["INT_ADD", "register:40f0:8", ["const:7fc744:8", "const:4:8"]]
+ 007fc744 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-ad42bcfe3577148ea4d7eeeb0927d19e"></a>

### [`007fc7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc7d0.md) → [`007fc828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc828.md) FUN_007fc828

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
      "definition_site": "007fc83c",
      "incomplete_value": false,
      "site": "007fc840",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc7e4",
      "incomplete_value": false,
      "site": "007fc7e8",
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
      "007fc840",
      "DATA",
      [
        "storage",
        "00c7d430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc840",
      "DATA",
      [
        "storage",
        "00c7d500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc7dc ["INT_ADD", "register:40f0:8", ["const:7fc7dc:8", "const:4:8"]]
- 007fc7dc ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc834 ["INT_ADD", "register:40f0:8", ["const:7fc834:8", "const:4:8"]]
+ 007fc834 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc7e4 ["COPY", "tmp:0:8", ["const:430:8"]]
- 007fc7e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc7e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc7e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc83c ["COPY", "tmp:0:8", ["const:500:8"]]
+ 007fc83c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc83c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc83c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d4b9d78b8d00a8bcc843fbc43c5527aa"></a>

### [`007fc7f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc7f4.md) → [`007fc84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc84c.md) FUN_007fc84c

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
      "definition_site": "007fc850",
      "incomplete_value": false,
      "site": "007fc854",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc7f8",
      "incomplete_value": false,
      "site": "007fc7fc",
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
      "007fc854",
      "DATA",
      [
        "storage",
        "00c7d430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc854",
      "DATA",
      [
        "storage",
        "00c7d500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc7f8 ["COPY", "tmp:0:8", ["const:430:8"]]
- 007fc7f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc7f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc7f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc850 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 007fc850 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc850 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc850 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ce720da19ec28ae56691b46969b3ecd"></a>

### [`007fc80c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc80c.md) → [`007fc864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc864.md) FUN_007fc864

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
      "site": "007fc888",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc830",
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
      "007fc888",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc888",
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
- 007fc830 ["INT_ADD", "register:40f0:8", ["const:7fc830:8", "const:4:8"]]
- 007fc830 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc888 ["INT_ADD", "register:40f0:8", ["const:7fc888:8", "const:4:8"]]
+ 007fc888 ["CALL", null, ["ram:47ad34:8"]]
- 007fc83c ["INT_ADD", "register:40f0:8", ["const:7fc83c:8", "const:4:8"]]
- 007fc83c ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc894 ["INT_ADD", "register:40f0:8", ["const:7fc894:8", "const:4:8"]]
+ 007fc894 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-317d3acdb4701ca8563a6fd0103065d9"></a>

### [`007fc880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc880.md) → [`007fc8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc8d8.md) FUN_007fc8d8

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
      "definition_site": "007fc8ec",
      "incomplete_value": false,
      "site": "007fc8f0",
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
            "const:580:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc894",
      "incomplete_value": false,
      "site": "007fc898",
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
      "007fc8f0",
      "DATA",
      [
        "storage",
        "00c7d4b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc8f0",
      "DATA",
      [
        "storage",
        "00c7d580",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc88c ["INT_ADD", "register:40f0:8", ["const:7fc88c:8", "const:4:8"]]
- 007fc88c ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc8e4 ["INT_ADD", "register:40f0:8", ["const:7fc8e4:8", "const:4:8"]]
+ 007fc8e4 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc894 ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 007fc894 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc894 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc894 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc8ec ["COPY", "tmp:0:8", ["const:580:8"]]
+ 007fc8ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc8ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc8ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-257fe10a7546e484c8952cb8adaee365"></a>

### [`007fc8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc8a4.md) → [`007fc8fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc8fc.md) FUN_007fc8fc

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
      "definition_site": "007fc900",
      "incomplete_value": false,
      "site": "007fc904",
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
            "const:580:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc8a8",
      "incomplete_value": false,
      "site": "007fc8ac",
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
      "007fc904",
      "DATA",
      [
        "storage",
        "00c7d4b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc904",
      "DATA",
      [
        "storage",
        "00c7d580",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc8a8 ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 007fc8a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc8a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc8a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc900 ["COPY", "tmp:0:8", ["const:580:8"]]
+ 007fc900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4e7f1eb67d1d747f2405a0fe37c9dea3"></a>

### [`007fc8bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc8bc.md) → [`007fc914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc914.md) FUN_007fc914

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
      "site": "007fc938",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc8e0",
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
      "007fc938",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc938",
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
- 007fc8e0 ["INT_ADD", "register:40f0:8", ["const:7fc8e0:8", "const:4:8"]]
- 007fc8e0 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc938 ["INT_ADD", "register:40f0:8", ["const:7fc938:8", "const:4:8"]]
+ 007fc938 ["CALL", null, ["ram:47ad34:8"]]
- 007fc8ec ["INT_ADD", "register:40f0:8", ["const:7fc8ec:8", "const:4:8"]]
- 007fc8ec ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc944 ["INT_ADD", "register:40f0:8", ["const:7fc944:8", "const:4:8"]]
+ 007fc944 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-c449606e01b4aa658548962f1e89fc03"></a>

### [`007fc930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc930.md) → [`007fc988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc988.md) FUN_007fc988

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
      "definition_site": "007fc99c",
      "incomplete_value": false,
      "site": "007fc9a0",
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
            "const:600:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc944",
      "incomplete_value": false,
      "site": "007fc948",
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
            "const:530:8"
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
      "007fc9a0",
      "DATA",
      [
        "storage",
        "00c7d530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc9a0",
      "DATA",
      [
        "storage",
        "00c7d600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc93c ["INT_ADD", "register:40f0:8", ["const:7fc93c:8", "const:4:8"]]
- 007fc93c ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc994 ["INT_ADD", "register:40f0:8", ["const:7fc994:8", "const:4:8"]]
+ 007fc994 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc944 ["COPY", "tmp:0:8", ["const:530:8"]]
- 007fc944 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc944 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc944 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc99c ["COPY", "tmp:0:8", ["const:600:8"]]
+ 007fc99c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc99c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc99c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8c641b4891be18fc2f6093eed043571"></a>

### [`007fc954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc954.md) → [`007fc9ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc9ac.md) FUN_007fc9ac

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
      "definition_site": "007fc9b0",
      "incomplete_value": false,
      "site": "007fc9b4",
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
            "const:600:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc958",
      "incomplete_value": false,
      "site": "007fc95c",
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
      "007fc9b4",
      "DATA",
      [
        "storage",
        "00c7d530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fc9b4",
      "DATA",
      [
        "storage",
        "00c7d600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc958 ["COPY", "tmp:0:8", ["const:530:8"]]
- 007fc958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc9b0 ["COPY", "tmp:0:8", ["const:600:8"]]
+ 007fc9b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc9b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc9b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a764d1228e95cee15d840fe7910b8920"></a>

### [`007fc96c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc96c.md) → [`007fc9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc9c4.md) FUN_007fc9c4

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
      "site": "007fc9e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fc990",
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
      "007fc9e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fc9e8",
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
- 007fc990 ["INT_ADD", "register:40f0:8", ["const:7fc990:8", "const:4:8"]]
- 007fc990 ["CALL", null, ["ram:47acf4:8"]]
+ 007fc9e8 ["INT_ADD", "register:40f0:8", ["const:7fc9e8:8", "const:4:8"]]
+ 007fc9e8 ["CALL", null, ["ram:47ad34:8"]]
- 007fc99c ["INT_ADD", "register:40f0:8", ["const:7fc99c:8", "const:4:8"]]
- 007fc99c ["CALL", null, ["callee:0047ce14:8"]]
+ 007fc9f4 ["INT_ADD", "register:40f0:8", ["const:7fc9f4:8", "const:4:8"]]
+ 007fc9f4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-6b8f951e2378ecf94993082790dc7856"></a>

### [`007fc9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc9e0.md) → [`007fca38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fca38.md) FUN_007fca38

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
      "definition_site": "007fca4c",
      "incomplete_value": false,
      "site": "007fca50",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fc9f4",
      "incomplete_value": false,
      "site": "007fc9f8",
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
            "const:5b0:8"
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
      "007fca50",
      "DATA",
      [
        "storage",
        "00c7d5b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fca50",
      "DATA",
      [
        "storage",
        "00c7d680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fc9ec ["INT_ADD", "register:40f0:8", ["const:7fc9ec:8", "const:4:8"]]
- 007fc9ec ["CALL", null, ["callee:00c57f60:8"]]
+ 007fca44 ["INT_ADD", "register:40f0:8", ["const:7fca44:8", "const:4:8"]]
+ 007fca44 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc9f4 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 007fc9f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc9f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc9f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fca4c ["COPY", "tmp:0:8", ["const:680:8"]]
+ 007fca4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fca4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fca4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bcf40883bd384505908c06f80c3aaf41"></a>

### [`007fca04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fca04.md) → [`007fca5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fca5c.md) FUN_007fca5c

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
      "definition_site": "007fca60",
      "incomplete_value": false,
      "site": "007fca64",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fca08",
      "incomplete_value": false,
      "site": "007fca0c",
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
            "const:5b0:8"
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
      "007fca64",
      "DATA",
      [
        "storage",
        "00c7d5b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fca64",
      "DATA",
      [
        "storage",
        "00c7d680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fca08 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 007fca08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fca08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fca08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fca60 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 007fca60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fca60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fca60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f57081e274ec0665e36f6a333cd26c26"></a>

### [`007fca1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fca1c.md) → [`007fca74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fca74.md) FUN_007fca74

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
      "site": "007fca98",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fca40",
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
      "007fca98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fca98",
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
- 007fca40 ["INT_ADD", "register:40f0:8", ["const:7fca40:8", "const:4:8"]]
- 007fca40 ["CALL", null, ["ram:47acf4:8"]]
+ 007fca98 ["INT_ADD", "register:40f0:8", ["const:7fca98:8", "const:4:8"]]
+ 007fca98 ["CALL", null, ["ram:47ad34:8"]]
- 007fca4c ["INT_ADD", "register:40f0:8", ["const:7fca4c:8", "const:4:8"]]
- 007fca4c ["CALL", null, ["callee:0047ce14:8"]]
+ 007fcaa4 ["INT_ADD", "register:40f0:8", ["const:7fcaa4:8", "const:4:8"]]
+ 007fcaa4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-988e244b932c495803b2e07c4af048bf"></a>

### [`007fca90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fca90.md) → [`007fcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcae8.md) FUN_007fcae8

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
      "definition_site": "007fcb0c",
      "incomplete_value": false,
      "site": "007fcb0c",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcab4",
      "incomplete_value": false,
      "site": "007fcab4",
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
            "const:630:8"
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
      "007fcb0c",
      "DATA",
      [
        "storage",
        "00c7d630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcb0c",
      "DATA",
      [
        "storage",
        "00c7d700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcaa4 ["INT_ADD", "register:40f0:8", ["const:7fcaa4:8", "const:4:8"]]
- 007fcaa4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fcafc ["INT_ADD", "register:40f0:8", ["const:7fcafc:8", "const:4:8"]]
+ 007fcafc ["CALL", null, ["callee:00c57f60:8"]]
- 007fcab0 ["COPY", "tmp:0:8", ["const:630:8"]]
- 007fcab0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcab0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcab0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcb08 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 007fcb08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcb08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcb08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7f187851ed5bd454909f53fea06eca2a"></a>

### [`007fcac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcac4.md) → [`007fcb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcb1c.md) FUN_007fcb1c

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
      "definition_site": "007fcb28",
      "incomplete_value": false,
      "site": "007fcb28",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcad0",
      "incomplete_value": false,
      "site": "007fcad0",
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
            "const:630:8"
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
      "007fcb28",
      "DATA",
      [
        "storage",
        "00c7d630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcb28",
      "DATA",
      [
        "storage",
        "00c7d700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcacc ["COPY", "tmp:0:8", ["const:630:8"]]
- 007fcacc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fcacc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fcacc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fcb24 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 007fcb24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcb24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcb24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-70cec4e5f18771082ae22b40e8ff9621"></a>

### [`007fcae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcae0.md) → [`007fcb38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcb38.md) FUN_007fcb38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.87% / 新版 97.87%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcb60",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcb08",
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
      "007fcb60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fcb60",
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
- 007fcb08 ["INT_ADD", "register:40f0:8", ["const:7fcb08:8", "const:4:8"]]
- 007fcb08 ["CALL", null, ["ram:47acf4:8"]]
+ 007fcb60 ["INT_ADD", "register:40f0:8", ["const:7fcb60:8", "const:4:8"]]
+ 007fcb60 ["CALL", null, ["ram:47ad34:8"]]
- 007fcb60 ["INT_ADD", "register:40f0:8", ["const:7fcb60:8", "const:4:8"]]
- 007fcb60 ["CALL", null, ["callee:00851550:8"]]
+ 007fcbb8 ["INT_ADD", "register:40f0:8", ["const:7fcbb8:8", "const:4:8"]]
+ 007fcbb8 ["CALL", null, ["callee:00851550:8"]]
- 007fcb14 ["INT_ADD", "register:40f0:8", ["const:7fcb14:8", "const:4:8"]]
- 007fcb14 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fcb6c ["INT_ADD", "register:40f0:8", ["const:7fcb6c:8", "const:4:8"]]
+ 007fcb6c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-4aeebc57fc0af42738b10a5bb63058b0"></a>

### [`007fcbc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcbc8.md) → [`007fcc20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcc20.md) FUN_007fcc20

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
      "definition_site": "007fcc40",
      "incomplete_value": false,
      "site": "007fcc44",
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
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcbe8",
      "incomplete_value": false,
      "site": "007fcbec",
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
            "const:6b0:8"
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
      "007fcc44",
      "DATA",
      [
        "storage",
        "00c7d6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcc44",
      "DATA",
      [
        "storage",
        "00c7d780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcbdc ["INT_ADD", "register:40f0:8", ["const:7fcbdc:8", "const:4:8"]]
- 007fcbdc ["CALL", null, ["callee:00c57f60:8"]]
+ 007fcc34 ["INT_ADD", "register:40f0:8", ["const:7fcc34:8", "const:4:8"]]
+ 007fcc34 ["CALL", null, ["callee:00c57f60:8"]]
- 007fcbe8 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 007fcbe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcbe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcbe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcc40 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 007fcc40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcc40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcc40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ee73ab4be6f4fee87a3bf1b5a0a1ea1"></a>

### [`007fcc00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcc00.md) → [`007fcc58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcc58.md) FUN_007fcc58

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
      "definition_site": "007fcc60",
      "incomplete_value": false,
      "site": "007fcc64",
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
            "const:780:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcc08",
      "incomplete_value": false,
      "site": "007fcc0c",
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
            "const:6b0:8"
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
      "007fcc64",
      "DATA",
      [
        "storage",
        "00c7d6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcc64",
      "DATA",
      [
        "storage",
        "00c7d780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcc08 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 007fcc08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fcc08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fcc08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fcc60 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 007fcc60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcc60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcc60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b7442d5cd2cb5571a3bf031e21ae2184"></a>

### [`007fcc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcc20.md) → [`007fcc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcc78.md) FUN_007fcc78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcca0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcc48",
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
      "007fcca0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fcca0",
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
- 007fcc48 ["INT_ADD", "register:40f0:8", ["const:7fcc48:8", "const:4:8"]]
- 007fcc48 ["CALL", null, ["ram:47acf4:8"]]
+ 007fcca0 ["INT_ADD", "register:40f0:8", ["const:7fcca0:8", "const:4:8"]]
+ 007fcca0 ["CALL", null, ["ram:47ad34:8"]]
- 007fcca0 ["INT_ADD", "register:40f0:8", ["const:7fcca0:8", "const:4:8"]]
- 007fcca0 ["CALL", null, ["callee:00851550:8"]]
+ 007fccf8 ["INT_ADD", "register:40f0:8", ["const:7fccf8:8", "const:4:8"]]
+ 007fccf8 ["CALL", null, ["callee:00851550:8"]]
- 007fcc54 ["INT_ADD", "register:40f0:8", ["const:7fcc54:8", "const:4:8"]]
- 007fcc54 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fccac ["INT_ADD", "register:40f0:8", ["const:7fccac:8", "const:4:8"]]
+ 007fccac ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-58b64749a0a3f1bc0a3e1da1fb007e84"></a>

### [`007fccfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fccfc.md) → [`007fcd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcd54.md) FUN_007fcd54

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
      "definition_site": "007fcd74",
      "incomplete_value": false,
      "site": "007fcd78",
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
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcd1c",
      "incomplete_value": false,
      "site": "007fcd20",
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
            "const:730:8"
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
      "007fcd78",
      "DATA",
      [
        "storage",
        "00c7d730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcd78",
      "DATA",
      [
        "storage",
        "00c7d800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcd10 ["INT_ADD", "register:40f0:8", ["const:7fcd10:8", "const:4:8"]]
- 007fcd10 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fcd68 ["INT_ADD", "register:40f0:8", ["const:7fcd68:8", "const:4:8"]]
+ 007fcd68 ["CALL", null, ["callee:00c57f60:8"]]
- 007fcd1c ["COPY", "tmp:0:8", ["const:730:8"]]
- 007fcd1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcd1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcd1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcd74 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 007fcd74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcd74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcd74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-16aee642c9ad8687d38310d716653d32"></a>

### [`007fcd34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcd34.md) → [`007fcd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcd8c.md) FUN_007fcd8c

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
      "definition_site": "007fcd94",
      "incomplete_value": false,
      "site": "007fcd98",
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
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcd3c",
      "incomplete_value": false,
      "site": "007fcd40",
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
            "const:730:8"
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
      "007fcd98",
      "DATA",
      [
        "storage",
        "00c7d730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcd98",
      "DATA",
      [
        "storage",
        "00c7d800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcd3c ["COPY", "tmp:0:8", ["const:730:8"]]
- 007fcd3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fcd3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fcd3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fcd94 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 007fcd94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcd94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fcd94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1cc40ed378dc97cb0bcdcc2d2611a320"></a>

### [`007fcd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcd54.md) → [`007fcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcdac.md) FUN_007fcdac

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
      "site": "007fcdd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcd78",
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
      "007fcdd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fcdd0",
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
- 007fcd78 ["INT_ADD", "register:40f0:8", ["const:7fcd78:8", "const:4:8"]]
- 007fcd78 ["CALL", null, ["ram:47acf4:8"]]
+ 007fcdd0 ["INT_ADD", "register:40f0:8", ["const:7fcdd0:8", "const:4:8"]]
+ 007fcdd0 ["CALL", null, ["ram:47ad34:8"]]
- 007fcd84 ["INT_ADD", "register:40f0:8", ["const:7fcd84:8", "const:4:8"]]
- 007fcd84 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fcddc ["INT_ADD", "register:40f0:8", ["const:7fcddc:8", "const:4:8"]]
+ 007fcddc ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-11e664d178adb346e3f4fc85bf7a1160"></a>

### [`007fcdc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcdc8.md) → [`007fce20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fce20.md) FUN_007fce20

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
      "definition_site": "007fce40",
      "incomplete_value": false,
      "site": "007fce44",
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
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcde8",
      "incomplete_value": false,
      "site": "007fcdec",
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
            "const:7b0:8"
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
      "007fce44",
      "DATA",
      [
        "storage",
        "00c7d7b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fce44",
      "DATA",
      [
        "storage",
        "00c7d880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcddc ["INT_ADD", "register:40f0:8", ["const:7fcddc:8", "const:4:8"]]
- 007fcddc ["CALL", null, ["callee:00c57f60:8"]]
+ 007fce34 ["INT_ADD", "register:40f0:8", ["const:7fce34:8", "const:4:8"]]
+ 007fce34 ["CALL", null, ["callee:00c57f60:8"]]
- 007fcde8 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 007fcde8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcde8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcde8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fce40 ["COPY", "tmp:0:8", ["const:880:8"]]
+ 007fce40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fce40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fce40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-17b30465674de37e344cfe1df543212f"></a>

### [`007fce00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fce00.md) → [`007fce58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fce58.md) FUN_007fce58

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
      "definition_site": "007fce60",
      "incomplete_value": false,
      "site": "007fce64",
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
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fce08",
      "incomplete_value": false,
      "site": "007fce0c",
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
            "const:7b0:8"
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
      "007fce64",
      "DATA",
      [
        "storage",
        "00c7d7b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fce64",
      "DATA",
      [
        "storage",
        "00c7d880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fce08 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 007fce08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fce08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fce08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fce60 ["COPY", "tmp:0:8", ["const:880:8"]]
+ 007fce60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fce60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fce60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-171122b05094d47f36c061b7beaed910"></a>

### [`007fce20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fce20.md) → [`007fce78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fce78.md) FUN_007fce78

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
      "site": "007fce9c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fce44",
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
      "007fce9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fce9c",
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
- 007fce44 ["INT_ADD", "register:40f0:8", ["const:7fce44:8", "const:4:8"]]
- 007fce44 ["CALL", null, ["ram:47acf4:8"]]
+ 007fce9c ["INT_ADD", "register:40f0:8", ["const:7fce9c:8", "const:4:8"]]
+ 007fce9c ["CALL", null, ["ram:47ad34:8"]]
- 007fce50 ["INT_ADD", "register:40f0:8", ["const:7fce50:8", "const:4:8"]]
- 007fce50 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fcea8 ["INT_ADD", "register:40f0:8", ["const:7fcea8:8", "const:4:8"]]
+ 007fcea8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-74785836169d6e916cf51bb1e0aa089f"></a>

### [`007fce94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fce94.md) → [`007fceec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fceec.md) FUN_007fceec

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
      "definition_site": "007fcf0c",
      "incomplete_value": false,
      "site": "007fcf10",
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
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fceb4",
      "incomplete_value": false,
      "site": "007fceb8",
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
            "const:830:8"
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
      "007fcf10",
      "DATA",
      [
        "storage",
        "00c7d830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcf10",
      "DATA",
      [
        "storage",
        "00c7d900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcea8 ["INT_ADD", "register:40f0:8", ["const:7fcea8:8", "const:4:8"]]
- 007fcea8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fcf00 ["INT_ADD", "register:40f0:8", ["const:7fcf00:8", "const:4:8"]]
+ 007fcf00 ["CALL", null, ["callee:00c57f60:8"]]
- 007fceb4 ["COPY", "tmp:0:8", ["const:830:8"]]
- 007fceb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fceb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fceb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcf0c ["COPY", "tmp:0:8", ["const:900:8"]]
+ 007fcf0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcf0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcf0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2f66d510108366d320bb575fd7a2b13d"></a>

### [`007fcecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcecc.md) → [`007fcf24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcf24.md) FUN_007fcf24

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
      "definition_site": "007fcf28",
      "incomplete_value": false,
      "site": "007fcf2c",
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
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fced0",
      "incomplete_value": false,
      "site": "007fced4",
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
            "const:830:8"
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
      "007fcf2c",
      "DATA",
      [
        "storage",
        "00c7d830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fcf2c",
      "DATA",
      [
        "storage",
        "00c7d900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fced0 ["COPY", "tmp:0:8", ["const:830:8"]]
- 007fced0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fced0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fced0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcf28 ["COPY", "tmp:0:8", ["const:900:8"]]
+ 007fcf28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcf28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcf28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5144fa25c0f2cbf2a5efbaf33c0532a3"></a>

### [`007fceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fceec.md) → [`007fcf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcf44.md) FUN_007fcf44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "007fcf6c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fcf14",
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
      "007fcf6c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fcf6c",
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
- 007fcf14 ["INT_ADD", "register:40f0:8", ["const:7fcf14:8", "const:4:8"]]
- 007fcf14 ["CALL", null, ["ram:47acf4:8"]]
+ 007fcf6c ["INT_ADD", "register:40f0:8", ["const:7fcf6c:8", "const:4:8"]]
+ 007fcf6c ["CALL", null, ["ram:47ad34:8"]]
- 007fcf20 ["INT_ADD", "register:40f0:8", ["const:7fcf20:8", "const:4:8"]]
- 007fcf20 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fcf78 ["INT_ADD", "register:40f0:8", ["const:7fcf78:8", "const:4:8"]]
+ 007fcf78 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-31e2d1cf2217d9d0d4c0a99d8b419d2b"></a>

### [`007fcf84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcf84.md) → [`007fcfdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fcfdc.md) FUN_007fcfdc

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
      "definition_site": "007fcffc",
      "incomplete_value": false,
      "site": "007fd000",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcfa4",
      "incomplete_value": false,
      "site": "007fcfa8",
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
            "const:8b0:8"
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
      "007fd000",
      "DATA",
      [
        "storage",
        "00c7d8b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd000",
      "DATA",
      [
        "storage",
        "00c7d980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcf98 ["INT_ADD", "register:40f0:8", ["const:7fcf98:8", "const:4:8"]]
- 007fcf98 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fcff0 ["INT_ADD", "register:40f0:8", ["const:7fcff0:8", "const:4:8"]]
+ 007fcff0 ["CALL", null, ["callee:00c57f60:8"]]
- 007fcfa4 ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 007fcfa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcfa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcfa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fcffc ["COPY", "tmp:0:8", ["const:980:8"]]
+ 007fcffc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcffc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fcffc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9833d5b25abbed87aa6b42e21f5a9354"></a>

### [`007fcfbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcfbc.md) → [`007fd014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd014.md) FUN_007fd014

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
      "definition_site": "007fd018",
      "incomplete_value": false,
      "site": "007fd01c",
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
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fcfc0",
      "incomplete_value": false,
      "site": "007fcfc4",
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
            "const:8b0:8"
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
      "007fd01c",
      "DATA",
      [
        "storage",
        "00c7d8b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd01c",
      "DATA",
      [
        "storage",
        "00c7d980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fcfc0 ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 007fcfc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fcfc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fcfc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd018 ["COPY", "tmp:0:8", ["const:980:8"]]
+ 007fd018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fb2723544eb4e5dda9e4c49feef7a523"></a>

### [`007fcfdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fcfdc.md) → [`007fd034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd034.md) FUN_007fd034

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "007fd05c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd004",
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
      "007fd05c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fd05c",
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
- 007fd004 ["INT_ADD", "register:40f0:8", ["const:7fd004:8", "const:4:8"]]
- 007fd004 ["CALL", null, ["ram:47acf4:8"]]
+ 007fd05c ["INT_ADD", "register:40f0:8", ["const:7fd05c:8", "const:4:8"]]
+ 007fd05c ["CALL", null, ["ram:47ad34:8"]]
- 007fd010 ["INT_ADD", "register:40f0:8", ["const:7fd010:8", "const:4:8"]]
- 007fd010 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fd068 ["INT_ADD", "register:40f0:8", ["const:7fd068:8", "const:4:8"]]
+ 007fd068 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-efd20d6e2b16ac1dfdcdc3fe5ee6e55b"></a>

### [`007fd074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd074.md) → [`007fd0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd0cc.md) FUN_007fd0cc

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
      "definition_site": "007fd0e0",
      "incomplete_value": false,
      "site": "007fd0e4",
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
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd088",
      "incomplete_value": false,
      "site": "007fd08c",
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
      "007fd0e4",
      "DATA",
      [
        "storage",
        "00c7d930",
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
        "00c7da00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd080 ["INT_ADD", "register:40f0:8", ["const:7fd080:8", "const:4:8"]]
- 007fd080 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fd0d8 ["INT_ADD", "register:40f0:8", ["const:7fd0d8:8", "const:4:8"]]
+ 007fd0d8 ["CALL", null, ["callee:00c57f60:8"]]
- 007fd088 ["COPY", "tmp:0:8", ["const:930:8"]]
- 007fd088 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd088 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd088 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd0e0 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 007fd0e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f85eba232fe7ddbe194a7db46056b04d"></a>

### [`007fd098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd098.md) → [`007fd0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd0f0.md) FUN_007fd0f0

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
      "definition_site": "007fd0f4",
      "incomplete_value": false,
      "site": "007fd0f8",
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
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd09c",
      "incomplete_value": false,
      "site": "007fd0a0",
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
      "007fd0f8",
      "DATA",
      [
        "storage",
        "00c7d930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd0f8",
      "DATA",
      [
        "storage",
        "00c7da00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd09c ["COPY", "tmp:0:8", ["const:930:8"]]
- 007fd09c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd09c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd09c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd0f4 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 007fd0f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd0f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f4223efea818811838aaf5990f1d93df"></a>

### [`007fd0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd0b0.md) → [`007fd108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd108.md) FUN_007fd108

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
      "site": "007fd12c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd0d4",
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
      "007fd12c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fd12c",
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
- 007fd0d4 ["INT_ADD", "register:40f0:8", ["const:7fd0d4:8", "const:4:8"]]
- 007fd0d4 ["CALL", null, ["ram:47acf4:8"]]
+ 007fd12c ["INT_ADD", "register:40f0:8", ["const:7fd12c:8", "const:4:8"]]
+ 007fd12c ["CALL", null, ["ram:47ad34:8"]]
- 007fd0e0 ["INT_ADD", "register:40f0:8", ["const:7fd0e0:8", "const:4:8"]]
- 007fd0e0 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fd138 ["INT_ADD", "register:40f0:8", ["const:7fd138:8", "const:4:8"]]
+ 007fd138 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-0d69ca79fbe51ca39809f084f7242332"></a>

### [`007fd124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd124.md) → [`007fd17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd17c.md) FUN_007fd17c

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
      "definition_site": "007fd1a0",
      "incomplete_value": false,
      "site": "007fd1a4",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd148",
      "incomplete_value": false,
      "site": "007fd14c",
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
            "const:9b0:8"
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
      "007fd1a4",
      "DATA",
      [
        "storage",
        "00c7d9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd1a4",
      "DATA",
      [
        "storage",
        "00c7da80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd138 ["INT_ADD", "register:40f0:8", ["const:7fd138:8", "const:4:8"]]
- 007fd138 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fd190 ["INT_ADD", "register:40f0:8", ["const:7fd190:8", "const:4:8"]]
+ 007fd190 ["CALL", null, ["callee:00c57f60:8"]]
- 007fd148 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 007fd148 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd148 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd148 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd1a0 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 007fd1a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd1a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd1a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0835f02297c152438554415ba313672c"></a>

### [`007fd164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd164.md) → [`007fd1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd1bc.md) FUN_007fd1bc

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
      "definition_site": "007fd1c0",
      "incomplete_value": false,
      "site": "007fd1c4",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd168",
      "incomplete_value": false,
      "site": "007fd16c",
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
            "const:9b0:8"
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
      "007fd1c4",
      "DATA",
      [
        "storage",
        "00c7d9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd1c4",
      "DATA",
      [
        "storage",
        "00c7da80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd168 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 007fd168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd1c0 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 007fd1c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd1c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd1c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7faf1fecd97b8a3badf31498a30e0ec8"></a>

### [`007fd324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd324.md) → [`007fd37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd37c.md) FUN_007fd37c

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
      "definition_site": "007fd39c",
      "incomplete_value": false,
      "site": "007fd3a0",
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
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd344",
      "incomplete_value": false,
      "site": "007fd348",
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
            "const:a30:8"
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
      "007fd3a0",
      "DATA",
      [
        "storage",
        "00c7da30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd3a0",
      "DATA",
      [
        "storage",
        "00c7db00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd338 ["INT_ADD", "register:40f0:8", ["const:7fd338:8", "const:4:8"]]
- 007fd338 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fd390 ["INT_ADD", "register:40f0:8", ["const:7fd390:8", "const:4:8"]]
+ 007fd390 ["CALL", null, ["callee:00c57f60:8"]]
- 007fd344 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 007fd344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd39c ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 007fd39c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd39c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd39c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-893f3cd1e3a4fd01f80d489bd032d474"></a>

### [`007fd35c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd35c.md) → [`007fd3b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd3b4.md) FUN_007fd3b4

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
      "definition_site": "007fd3b8",
      "incomplete_value": false,
      "site": "007fd3bc",
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
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd360",
      "incomplete_value": false,
      "site": "007fd364",
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
            "const:a30:8"
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
      "007fd3bc",
      "DATA",
      [
        "storage",
        "00c7da30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd3bc",
      "DATA",
      [
        "storage",
        "00c7db00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd360 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 007fd360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd3b8 ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 007fd3b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd3b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd3b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3b2cca13197baea41a3500e483d47a96"></a>

### [`007fd37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd37c.md) → [`007fd3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd3d4.md) FUN_007fd3d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0047ce28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce28.md) [`007fd5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd5e8.md) [`007fd5ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd5ec.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`007fd640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd640.md) [`007fd644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd644.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.63% / 新版 92.63%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fd47c",
      "incomplete_value": false,
      "site": "007fd47c",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd424",
      "incomplete_value": false,
      "site": "007fd424",
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
            "const:aa0:8"
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
      "definition_site": "007fd4cc",
      "incomplete_value": true,
      "site": "007fd4cc",
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
                "const:118:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd474",
      "incomplete_value": true,
      "site": "007fd474",
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
                "const:16c:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd414",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fd3bc",
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
      "007fd414",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fd464",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fd47c",
      "DATA",
      [
        "storage",
        "00c7daa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd414",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fd464",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fd47c",
      "DATA",
      [
        "storage",
        "00c7db70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd3bc ["INT_ADD", "register:40f0:8", ["const:7fd3bc:8", "const:4:8"]]
- 007fd3bc ["CALL", null, ["ram:47acf4:8"]]
+ 007fd414 ["INT_ADD", "register:40f0:8", ["const:7fd414:8", "const:4:8"]]
+ 007fd414 ["CALL", null, ["ram:47ad34:8"]]
- 007fd40c ["INT_ADD", "register:40f0:8", ["const:7fd40c:8", "const:4:8"]]
- 007fd40c ["CALL", null, ["ram:47acf4:8"]]
+ 007fd464 ["INT_ADD", "register:40f0:8", ["const:7fd464:8", "const:4:8"]]
+ 007fd464 ["CALL", null, ["ram:47ad34:8"]]
- 007fd41c ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 007fd41c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fd41c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fd41c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fd474 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 007fd474 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd474 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fd474 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0ca78431d87ceed9981175055ae80f70"></a>

### [`007fd598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd598.md) → [`007fd5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd5f0.md) FUN_007fd5f0

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
      "definition_site": "007fd610",
      "incomplete_value": false,
      "site": "007fd614",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd5b8",
      "incomplete_value": false,
      "site": "007fd5bc",
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
            "const:aa0:8"
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
      "007fd614",
      "DATA",
      [
        "storage",
        "00c7daa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd614",
      "DATA",
      [
        "storage",
        "00c7db70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd5ac ["INT_ADD", "register:40f0:8", ["const:7fd5ac:8", "const:4:8"]]
- 007fd5ac ["CALL", null, ["callee:00c57f60:8"]]
+ 007fd604 ["INT_ADD", "register:40f0:8", ["const:7fd604:8", "const:4:8"]]
+ 007fd604 ["CALL", null, ["callee:00c57f60:8"]]
- 007fd5b8 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 007fd5b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd5b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd5b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd610 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 007fd610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2d48401b2ed0ff6a279f1f7d323c10ba"></a>

### [`007fd5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd5d0.md) → [`007fd628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd628.md) FUN_007fd628

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
      "definition_site": "007fd62c",
      "incomplete_value": false,
      "site": "007fd630",
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
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd5d4",
      "incomplete_value": false,
      "site": "007fd5d8",
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
            "const:aa0:8"
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
      "007fd630",
      "DATA",
      [
        "storage",
        "00c7daa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fd630",
      "DATA",
      [
        "storage",
        "00c7db70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd5d4 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 007fd5d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fd5d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fd5d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fd62c ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 007fd62c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd62c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fd62c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b3030b0244226c1bb0cc2e662d5081c"></a>

### [`007fd5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fd5f0.md) → [`007fd648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fd648.md) FUN_007fd648

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 23件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cf08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cf08.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00597ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ecc.md)
- 新版 呼出元 0件  · 呼出先 23件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.67% / 新版 88.67%

優先判定に残った影響 `call_target` 4件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007fd780",
      "incomplete_value": true,
      "site": "007fd780",
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
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:e6c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fd728",
      "incomplete_value": true,
      "site": "007fd728",
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
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:ec8:8"
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
      "definition_site": "007fd784",
      "incomplete_value": true,
      "site": "007fd784",
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
      "definition_site": "007fd72c",
      "incomplete_value": true,
      "site": "007fd72c",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007fd7e8",
      "incomplete_value": true,
      "site": "007fd7fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "007fd790",
      "incomplete_value": true,
      "site": "007fd7a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:110:8"
              ]
            ]
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
      "007fd6a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fd6b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84d88"
      ]
    ],
    [
      "007fd708",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84d88"
      ]
    ]
  ],
  "added": [
    [
      "007fd6a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fd6b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84df8"
      ]
    ],
    [
      "007fd708",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84df8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fd64c ["INT_ADD", "register:40f0:8", ["const:7fd64c:8", "const:4:8"]]
- 007fd64c ["CALL", null, ["ram:47acf4:8"]]
+ 007fd6a4 ["INT_ADD", "register:40f0:8", ["const:7fd6a4:8", "const:4:8"]]
+ 007fd6a4 ["CALL", null, ["ram:47ad34:8"]]
- 007fd65c ["INT_ADD", "register:40f0:8", ["const:7fd65c:8", "const:4:8"]]
- 007fd65c ["CALL", null, ["ram:a84d88:8"]]
+ 007fd6b4 ["INT_ADD", "register:40f0:8", ["const:7fd6b4:8", "const:4:8"]]
+ 007fd6b4 ["CALL", null, ["ram:a84df8:8"]]
- 007fd6b0 ["INT_ADD", "register:40f0:8", ["const:7fd6b0:8", "const:4:8"]]
- 007fd6b0 ["CALL", null, ["ram:a84d88:8"]]
+ 007fd708 ["INT_ADD", "register:40f0:8", ["const:7fd708:8", "const:4:8"]]
+ 007fd708 ["CALL", null, ["ram:a84df8:8"]]
~~~


<a id="compare-17ad06bd7dbe8f5a7a249172caf76302"></a>

### [`007fdc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdc20.md) → [`007fdc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdc78.md) FUN_007fdc78

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
      "definition_site": "007fdc8c",
      "incomplete_value": false,
      "site": "007fdc90",
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
            "const:be0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdc34",
      "incomplete_value": false,
      "site": "007fdc38",
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
            "const:b10:8"
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
      "007fdc90",
      "DATA",
      [
        "storage",
        "00c7db10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdc90",
      "DATA",
      [
        "storage",
        "00c7dbe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdc2c ["INT_ADD", "register:40f0:8", ["const:7fdc2c:8", "const:4:8"]]
- 007fdc2c ["CALL", null, ["callee:00c57f60:8"]]
+ 007fdc84 ["INT_ADD", "register:40f0:8", ["const:7fdc84:8", "const:4:8"]]
+ 007fdc84 ["CALL", null, ["callee:00c57f60:8"]]
- 007fdc34 ["COPY", "tmp:0:8", ["const:b10:8"]]
- 007fdc34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdc34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdc34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdc8c ["COPY", "tmp:0:8", ["const:be0:8"]]
+ 007fdc8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdc8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdc8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ab6e4c4b9fb280a9101e10d5e823834f"></a>

### [`007fdc5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdc5c.md) → [`007fdcb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdcb4.md) FUN_007fdcb4

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
      "site": "007fdcd8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fdc80",
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
      "007fdcd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fdcd8",
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
- 007fdc80 ["INT_ADD", "register:40f0:8", ["const:7fdc80:8", "const:4:8"]]
- 007fdc80 ["CALL", null, ["ram:47acf4:8"]]
+ 007fdcd8 ["INT_ADD", "register:40f0:8", ["const:7fdcd8:8", "const:4:8"]]
+ 007fdcd8 ["CALL", null, ["ram:47ad34:8"]]
- 007fdc8c ["INT_ADD", "register:40f0:8", ["const:7fdc8c:8", "const:4:8"]]
- 007fdc8c ["CALL", null, ["callee:0047ce14:8"]]
+ 007fdce4 ["INT_ADD", "register:40f0:8", ["const:7fdce4:8", "const:4:8"]]
+ 007fdce4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-306a187e44924e863a654e415900150c"></a>

### [`007fdcd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdcd0.md) → [`007fdd28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdd28.md) FUN_007fdd28

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
      "definition_site": "007fdd3c",
      "incomplete_value": false,
      "site": "007fdd40",
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
            "const:c60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdce4",
      "incomplete_value": false,
      "site": "007fdce8",
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
            "const:b90:8"
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
      "007fdd40",
      "DATA",
      [
        "storage",
        "00c7db90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdd40",
      "DATA",
      [
        "storage",
        "00c7dc60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdcdc ["INT_ADD", "register:40f0:8", ["const:7fdcdc:8", "const:4:8"]]
- 007fdcdc ["CALL", null, ["callee:00c57f60:8"]]
+ 007fdd34 ["INT_ADD", "register:40f0:8", ["const:7fdd34:8", "const:4:8"]]
+ 007fdd34 ["CALL", null, ["callee:00c57f60:8"]]
- 007fdce4 ["COPY", "tmp:0:8", ["const:b90:8"]]
- 007fdce4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdce4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdce4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdd3c ["COPY", "tmp:0:8", ["const:c60:8"]]
+ 007fdd3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdd3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdd3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eeaedf96adc1f8ee555ec2a088a31c83"></a>

### [`007fdcf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdcf4.md) → [`007fdd4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdd4c.md) FUN_007fdd4c

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
      "definition_site": "007fdd50",
      "incomplete_value": false,
      "site": "007fdd54",
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
            "const:c60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdcf8",
      "incomplete_value": false,
      "site": "007fdcfc",
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
            "const:b90:8"
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
      "007fdd54",
      "DATA",
      [
        "storage",
        "00c7db90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdd54",
      "DATA",
      [
        "storage",
        "00c7dc60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdcf8 ["COPY", "tmp:0:8", ["const:b90:8"]]
- 007fdcf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdcf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdcf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdd50 ["COPY", "tmp:0:8", ["const:c60:8"]]
+ 007fdd50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdd50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdd50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0758bb3e7f4426c658f8cdc47177d16e"></a>

### [`007fdd0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdd0c.md) → [`007fdd64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdd64.md) FUN_007fdd64

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
      "site": "007fdd88",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fdd30",
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
      "007fdd88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fdd88",
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
- 007fdd30 ["INT_ADD", "register:40f0:8", ["const:7fdd30:8", "const:4:8"]]
- 007fdd30 ["CALL", null, ["ram:47acf4:8"]]
+ 007fdd88 ["INT_ADD", "register:40f0:8", ["const:7fdd88:8", "const:4:8"]]
+ 007fdd88 ["CALL", null, ["ram:47ad34:8"]]
- 007fdd3c ["INT_ADD", "register:40f0:8", ["const:7fdd3c:8", "const:4:8"]]
- 007fdd3c ["CALL", null, ["callee:0047ce14:8"]]
+ 007fdd94 ["INT_ADD", "register:40f0:8", ["const:7fdd94:8", "const:4:8"]]
+ 007fdd94 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-f723e5f667786c8cf7728d5aec1d0264"></a>

### [`007fdd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdd80.md) → [`007fddd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fddd8.md) FUN_007fddd8

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
      "definition_site": "007fddf8",
      "incomplete_value": false,
      "site": "007fddfc",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdda0",
      "incomplete_value": false,
      "site": "007fdda4",
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
            "const:c30:8"
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
      "007fddfc",
      "DATA",
      [
        "storage",
        "00c7dc30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fddfc",
      "DATA",
      [
        "storage",
        "00c7dd00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdd94 ["INT_ADD", "register:40f0:8", ["const:7fdd94:8", "const:4:8"]]
- 007fdd94 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fddec ["INT_ADD", "register:40f0:8", ["const:7fddec:8", "const:4:8"]]
+ 007fddec ["CALL", null, ["callee:00c57f60:8"]]
- 007fdda0 ["COPY", "tmp:0:8", ["const:c30:8"]]
- 007fdda0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdda0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdda0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fddf8 ["COPY", "tmp:0:8", ["const:d00:8"]]
+ 007fddf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fddf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fddf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3a361cf8b6810ebfa83b69313dec9c87"></a>

### [`007fddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fddd8.md) → [`007fde30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fde30.md) FUN_007fde30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fde58",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fde00",
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
      "007fde58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fde58",
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
- 007fde00 ["INT_ADD", "register:40f0:8", ["const:7fde00:8", "const:4:8"]]
- 007fde00 ["CALL", null, ["ram:47acf4:8"]]
+ 007fde58 ["INT_ADD", "register:40f0:8", ["const:7fde58:8", "const:4:8"]]
+ 007fde58 ["CALL", null, ["ram:47ad34:8"]]
- 007fde58 ["INT_ADD", "register:40f0:8", ["const:7fde58:8", "const:4:8"]]
- 007fde58 ["CALL", null, ["callee:00851550:8"]]
+ 007fdeb0 ["INT_ADD", "register:40f0:8", ["const:7fdeb0:8", "const:4:8"]]
+ 007fdeb0 ["CALL", null, ["callee:00851550:8"]]
- 007fde0c ["INT_ADD", "register:40f0:8", ["const:7fde0c:8", "const:4:8"]]
- 007fde0c ["CALL", null, ["callee:0047ce14:8"]]
+ 007fde64 ["INT_ADD", "register:40f0:8", ["const:7fde64:8", "const:4:8"]]
+ 007fde64 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-9d4c0ddc988b0abfed9467fddfa11fb0"></a>

### [`007fdeb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdeb4.md) → [`007fdf0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdf0c.md) FUN_007fdf0c

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
      "definition_site": "007fdf20",
      "incomplete_value": false,
      "site": "007fdf24",
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
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdec8",
      "incomplete_value": false,
      "site": "007fdecc",
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
            "const:cb0:8"
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
      "007fdf24",
      "DATA",
      [
        "storage",
        "00c7dcb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdf24",
      "DATA",
      [
        "storage",
        "00c7dd80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdec0 ["INT_ADD", "register:40f0:8", ["const:7fdec0:8", "const:4:8"]]
- 007fdec0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fdf18 ["INT_ADD", "register:40f0:8", ["const:7fdf18:8", "const:4:8"]]
+ 007fdf18 ["CALL", null, ["callee:00c57f60:8"]]
- 007fdec8 ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 007fdec8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdec8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdec8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdf20 ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 007fdf20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdf20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdf20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6a8bdbe2c639531d25fd9f24fa3f3c95"></a>

### [`007fded8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fded8.md) → [`007fdf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdf30.md) FUN_007fdf30

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
      "definition_site": "007fdf34",
      "incomplete_value": false,
      "site": "007fdf38",
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
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdedc",
      "incomplete_value": false,
      "site": "007fdee0",
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
            "const:cb0:8"
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
      "007fdf38",
      "DATA",
      [
        "storage",
        "00c7dcb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdf38",
      "DATA",
      [
        "storage",
        "00c7dd80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdedc ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 007fdedc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdedc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdedc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdf34 ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 007fdf34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdf34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdf34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-11a505ef4cec76e20f728f00dcffc7f9"></a>

### [`007fdef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdef0.md) → [`007fdf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdf48.md) FUN_007fdf48

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
      "site": "007fdf64",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fdf0c",
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
      "007fdf64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fdf64",
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
- 007fdf0c ["INT_ADD", "register:40f0:8", ["const:7fdf0c:8", "const:4:8"]]
- 007fdf0c ["CALL", null, ["ram:47acf4:8"]]
+ 007fdf64 ["INT_ADD", "register:40f0:8", ["const:7fdf64:8", "const:4:8"]]
+ 007fdf64 ["CALL", null, ["ram:47ad34:8"]]
- 007fdf18 ["INT_ADD", "register:40f0:8", ["const:7fdf18:8", "const:4:8"]]
- 007fdf18 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fdf70 ["INT_ADD", "register:40f0:8", ["const:7fdf70:8", "const:4:8"]]
+ 007fdf70 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-7618877d9f6657f21318cc280fae500a"></a>

### [`007fdf5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdf5c.md) → [`007fdfb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fd/007fdfb4.md) FUN_007fdfb4

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
      "definition_site": "007fdfd8",
      "incomplete_value": false,
      "site": "007fdfd8",
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
            "const:e00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fdf80",
      "incomplete_value": false,
      "site": "007fdf80",
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
      "007fdfd8",
      "DATA",
      [
        "storage",
        "00c7dd30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fdfd8",
      "DATA",
      [
        "storage",
        "00c7de00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fdf70 ["INT_ADD", "register:40f0:8", ["const:7fdf70:8", "const:4:8"]]
- 007fdf70 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fdfc8 ["INT_ADD", "register:40f0:8", ["const:7fdfc8:8", "const:4:8"]]
+ 007fdfc8 ["CALL", null, ["callee:00c57f60:8"]]
- 007fdf7c ["COPY", "tmp:0:8", ["const:d30:8"]]
- 007fdf7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fdf7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fdf7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fdfd4 ["COPY", "tmp:0:8", ["const:e00:8"]]
+ 007fdfd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdfd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fdfd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dfb9ea1f38ed92f3b72b54402ded05f7"></a>

### [`007fdfac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fd/007fdfac.md) → [`007fe004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe004.md) FUN_007fe004

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008b9298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9298.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe058",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe000",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "007fe0a0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe048",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "007fe058",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fe0a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fe058",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fe0a0",
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
- 007fe000 ["INT_ADD", "register:40f0:8", ["const:7fe000:8", "const:4:8"]]
- 007fe000 ["CALL", null, ["ram:47acf4:8"]]
+ 007fe058 ["INT_ADD", "register:40f0:8", ["const:7fe058:8", "const:4:8"]]
+ 007fe058 ["CALL", null, ["ram:47ad34:8"]]
- 007fe048 ["INT_ADD", "register:40f0:8", ["const:7fe048:8", "const:4:8"]]
- 007fe048 ["CALL", null, ["ram:47acf4:8"]]
+ 007fe0a0 ["INT_ADD", "register:40f0:8", ["const:7fe0a0:8", "const:4:8"]]
+ 007fe0a0 ["CALL", null, ["ram:47ad34:8"]]
- 007fdfd0 ["INT_ADD", "register:40f0:8", ["const:7fdfd0:8", "const:4:8"]]
- 007fdfd0 ["CALL", null, ["callee:008b92f0:8"]]
+ 007fe028 ["INT_ADD", "register:40f0:8", ["const:7fe028:8", "const:4:8"]]
+ 007fe028 ["CALL", null, ["callee:008b92f0:8"]]
~~~


<a id="compare-1cac48ab7a20d346573711112487c4e1"></a>

### [`007fe0a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe0a8.md) → [`007fe100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe100.md) FUN_007fe100

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
      "definition_site": "007fe120",
      "incomplete_value": false,
      "site": "007fe124",
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
            "const:e80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe0c8",
      "incomplete_value": false,
      "site": "007fe0cc",
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
            "const:db0:8"
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
      "007fe124",
      "DATA",
      [
        "storage",
        "00c7ddb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe124",
      "DATA",
      [
        "storage",
        "00c7de80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe0bc ["INT_ADD", "register:40f0:8", ["const:7fe0bc:8", "const:4:8"]]
- 007fe0bc ["CALL", null, ["callee:00c57f60:8"]]
+ 007fe114 ["INT_ADD", "register:40f0:8", ["const:7fe114:8", "const:4:8"]]
+ 007fe114 ["CALL", null, ["callee:00c57f60:8"]]
- 007fe0c8 ["COPY", "tmp:0:8", ["const:db0:8"]]
- 007fe0c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fe0c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fe0c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe120 ["COPY", "tmp:0:8", ["const:e80:8"]]
+ 007fe120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57c65de68244b954f150055e37039ba7"></a>

### [`007fe0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe0e0.md) → [`007fe138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe138.md) FUN_007fe138

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
      "definition_site": "007fe140",
      "incomplete_value": false,
      "site": "007fe144",
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
            "const:e80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe0e8",
      "incomplete_value": false,
      "site": "007fe0ec",
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
            "const:db0:8"
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
      "007fe144",
      "DATA",
      [
        "storage",
        "00c7ddb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe144",
      "DATA",
      [
        "storage",
        "00c7de80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe0e8 ["COPY", "tmp:0:8", ["const:db0:8"]]
- 007fe0e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe0e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe0e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fe140 ["COPY", "tmp:0:8", ["const:e80:8"]]
+ 007fe140 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe140 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe140 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-90b2d98bc99c6d02aa57057eb22114be"></a>

### [`007fe100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe100.md) → [`007fe158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe158.md) FUN_007fe158

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 17件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.35% / 新版 98.35%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007fe1b4",
      "incomplete_value": true,
      "site": "007fe1b4",
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
      "definition_site": "007fe15c",
      "incomplete_value": true,
      "site": "007fe15c",
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
      "definition_site": "007fe1bc",
      "incomplete_value": false,
      "site": "007fe1cc",
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
      "definition_site": "007fe164",
      "incomplete_value": false,
      "site": "007fe174",
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
      "definition_site": "007fe1c4",
      "incomplete_value": false,
      "site": "007fe1cc",
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
    "old": {
      "definition_site": "007fe16c",
      "incomplete_value": false,
      "site": "007fe174",
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
            "const:990:8"
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
      "007fe1b0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007fe1bc",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007fe1c4",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "007fe1b0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007fe1bc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007fe1c4",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe174 ["INT_ADD", "register:40f0:8", ["const:7fe174:8", "const:4:8"]]
- 007fe174 ["CALL", null, ["callee:00c586e0:8"]]
+ 007fe1cc ["INT_ADD", "register:40f0:8", ["const:7fe1cc:8", "const:4:8"]]
+ 007fe1cc ["CALL", null, ["callee:00c586e0:8"]]
- 007fe148 ["INT_ADD", "register:40f0:8", ["const:7fe148:8", "const:4:8"]]
- 007fe148 ["CALL", null, ["callee:008b92e8:8"]]
+ 007fe1a0 ["INT_ADD", "register:40f0:8", ["const:7fe1a0:8", "const:4:8"]]
+ 007fe1a0 ["CALL", null, ["callee:008b92e8:8"]]
- 007fe158 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 007fe158 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007fe1b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 007fe1b0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2be9ba22c36bcd975d94aeb145bddb50"></a>

### [`007fe4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe4f4.md) → [`007fe54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe54c.md) FUN_007fe54c

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
      "definition_site": "007fe570",
      "incomplete_value": false,
      "site": "007fe570",
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
            "const:f00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe518",
      "incomplete_value": false,
      "site": "007fe518",
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
            "const:e30:8"
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
      "007fe570",
      "DATA",
      [
        "storage",
        "00c7de30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe570",
      "DATA",
      [
        "storage",
        "00c7df00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe508 ["INT_ADD", "register:40f0:8", ["const:7fe508:8", "const:4:8"]]
- 007fe508 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fe560 ["INT_ADD", "register:40f0:8", ["const:7fe560:8", "const:4:8"]]
+ 007fe560 ["CALL", null, ["callee:00c57f60:8"]]
- 007fe514 ["COPY", "tmp:0:8", ["const:e30:8"]]
- 007fe514 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fe514 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fe514 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe56c ["COPY", "tmp:0:8", ["const:f00:8"]]
+ 007fe56c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe56c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe56c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-93336668e348e6d4b85549ad6d96bf9b"></a>

### [`007fe528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe528.md) → [`007fe580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe580.md) FUN_007fe580

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
      "definition_site": "007fe58c",
      "incomplete_value": false,
      "site": "007fe58c",
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
            "const:f00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe534",
      "incomplete_value": false,
      "site": "007fe534",
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
            "const:e30:8"
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
      "007fe58c",
      "DATA",
      [
        "storage",
        "00c7de30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe58c",
      "DATA",
      [
        "storage",
        "00c7df00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe530 ["COPY", "tmp:0:8", ["const:e30:8"]]
- 007fe530 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe530 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe530 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fe588 ["COPY", "tmp:0:8", ["const:f00:8"]]
+ 007fe588 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe588 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe588 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1a994c8b50ed83b9ed5c9342d4bfc764"></a>

### [`007fe544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe544.md) → [`007fe59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe59c.md) FUN_007fe59c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe5cc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fe574",
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
      "007fe5cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fe5cc",
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
- 007fe574 ["INT_ADD", "register:40f0:8", ["const:7fe574:8", "const:4:8"]]
- 007fe574 ["CALL", null, ["ram:47acf4:8"]]
+ 007fe5cc ["INT_ADD", "register:40f0:8", ["const:7fe5cc:8", "const:4:8"]]
+ 007fe5cc ["CALL", null, ["ram:47ad34:8"]]
- 007fe570 ["INT_ADD", "register:40f0:8", ["const:7fe570:8", "const:4:8"]]
- 007fe570 ["CALL", null, ["callee:008b91d0:8"]]
+ 007fe5c8 ["INT_ADD", "register:40f0:8", ["const:7fe5c8:8", "const:4:8"]]
+ 007fe5c8 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-8665d6c6560b226324d54f02857f24a2"></a>

### [`007fe5bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe5bc.md) → [`007fe614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe614.md) FUN_007fe614

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
      "definition_site": "007fe620",
      "incomplete_value": false,
      "site": "007fe624",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe5c8",
      "incomplete_value": false,
      "site": "007fe5cc",
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
            "const:eb0:8"
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
      "007fe624",
      "DATA",
      [
        "storage",
        "00c7deb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe624",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe5c8 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007fe5c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe5c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe5c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fe620 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007fe620 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe620 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe620 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c553a4c47d6d5c2256758d932b9e9a95"></a>

### [`007fe5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe5e0.md) → [`007fe638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe638.md) FUN_007fe638

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
      "definition_site": "007fe640",
      "incomplete_value": false,
      "site": "007fe644",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe5e8",
      "incomplete_value": false,
      "site": "007fe5ec",
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
            "const:eb0:8"
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
      "007fe644",
      "DATA",
      [
        "storage",
        "00c7deb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe644",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe5e8 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007fe5e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fe5e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fe5e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fe640 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007fe640 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe640 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fe640 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007fe60c ["INT_ADD", "register:40f0:8", ["const:7fe60c:8", "const:4:8"]]
- 007fe60c ["CALL", null, ["callee:00c57f80:8"]]
+ 007fe664 ["INT_ADD", "register:40f0:8", ["const:7fe664:8", "const:4:8"]]
+ 007fe664 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-197e08708402ed1d777bfe1c0799d8a7"></a>

### [`007fe620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe620.md) → [`007fe678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe678.md) FUN_007fe678

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe6b0",
      "incomplete_value": false,
      "site": "007fe6b0",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe658",
      "incomplete_value": false,
      "site": "007fe658",
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
            "const:eb0:8"
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
      "007fe6b0",
      "DATA",
      [
        "storage",
        "00c7deb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe6b0",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe63c ["INT_ADD", "register:40f0:8", ["const:7fe63c:8", "const:4:8"]]
- 007fe63c ["CALL", null, ["callee:00c57f60:8"]]
+ 007fe694 ["INT_ADD", "register:40f0:8", ["const:7fe694:8", "const:4:8"]]
+ 007fe694 ["CALL", null, ["callee:00c57f60:8"]]
- 007fe648 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007fe648 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fe648 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fe648 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fe6a0 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007fe6a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe6a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fe6a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007fe674 ["INT_ADD", "register:40f0:8", ["const:7fe674:8", "const:4:8"]]
- 007fe674 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fe6cc ["INT_ADD", "register:40f0:8", ["const:7fe6cc:8", "const:4:8"]]
+ 007fe6cc ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-230d3c54070821048e43928111505839"></a>

### [`007fe6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe6e4.md) → [`007fe73c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe73c.md) FUN_007fe73c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe774",
      "incomplete_value": false,
      "site": "007fe774",
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
            "const:f80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe71c",
      "incomplete_value": false,
      "site": "007fe71c",
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
            "const:eb0:8"
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
      "007fe774",
      "DATA",
      [
        "storage",
        "00c7deb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fe774",
      "DATA",
      [
        "storage",
        "00c7df80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe718 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007fe718 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007fe718 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007fe718 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007fe770 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007fe770 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007fe770 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007fe770 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007fe730 ["INT_ADD", "register:40f0:8", ["const:7fe730:8", "const:4:8"]]
- 007fe730 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fe788 ["INT_ADD", "register:40f0:8", ["const:7fe788:8", "const:4:8"]]
+ 007fe788 ["CALL", null, ["callee:00c57f60:8"]]
- 007fe748 ["INT_ADD", "register:40f0:8", ["const:7fe748:8", "const:4:8"]]
- 007fe748 ["CALL", null, ["callee:00c580d0:8"]]
+ 007fe7a0 ["INT_ADD", "register:40f0:8", ["const:7fe7a0:8", "const:4:8"]]
+ 007fe7a0 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-b9da13d623e7949905057f35a4259fac"></a>

### [`007fe7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fe7e0.md) → [`007fe838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fe838.md) FUN_007fe838

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007fef00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fef00.md) [`007fef04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fef04.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007fef58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef58.md) [`007fef5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef5c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.76% / 新版 96.76%

優先判定に残った影響 `call_target` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007fe918",
      "incomplete_value": true,
      "site": "007fe928",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:97c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe8c0",
      "incomplete_value": true,
      "site": "007fe8d0",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:9d8:8"
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
      "definition_site": "007fe940",
      "incomplete_value": false,
      "site": "007fe948",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe8e8",
      "incomplete_value": false,
      "site": "007fe8f0",
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
            "const:f20:8"
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
      "definition_site": "007fe980",
      "incomplete_value": true,
      "site": "007fe994",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cb8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fe928",
      "incomplete_value": true,
      "site": "007fe93c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d14:8"
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
      "007fe888",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fe8a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fe918",
      "READ",
      [
        "storage",
        "002a59d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007fe888",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fe8a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fe918",
      "READ",
      [
        "storage",
        "002a597c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fe830 ["INT_ADD", "register:40f0:8", ["const:7fe830:8", "const:4:8"]]
- 007fe830 ["CALL", null, ["ram:47acf4:8"]]
+ 007fe888 ["INT_ADD", "register:40f0:8", ["const:7fe888:8", "const:4:8"]]
+ 007fe888 ["CALL", null, ["ram:47ad34:8"]]
- 007fe84c ["INT_ADD", "register:40f0:8", ["const:7fe84c:8", "const:4:8"]]
- 007fe84c ["CALL", null, ["ram:47acf4:8"]]
+ 007fe8a4 ["INT_ADD", "register:40f0:8", ["const:7fe8a4:8", "const:4:8"]]
+ 007fe8a4 ["CALL", null, ["ram:47ad34:8"]]
- 007fe9c8 ["INT_ADD", "register:40f0:8", ["const:7fe9c8:8", "const:4:8"]]
- 007fe9c8 ["CALL", null, ["ram:804074:8"]]
+ 007fea20 ["INT_ADD", "register:40f0:8", ["const:7fea20:8", "const:4:8"]]
+ 007fea20 ["CALL", null, ["ram:8040cc:8"]]
~~~


<a id="compare-3c86da3597bdac5109c8ee224efd8852"></a>

### [`007feecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007feecc.md) → [`007fef24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef24.md) FUN_007fef24

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
      "definition_site": "007fef38",
      "incomplete_value": false,
      "site": "007fef3c",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007feee0",
      "incomplete_value": false,
      "site": "007feee4",
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
            "const:f20:8"
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
      "007fef3c",
      "DATA",
      [
        "storage",
        "00c7df20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fef3c",
      "DATA",
      [
        "storage",
        "00c7dff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007feed8 ["INT_ADD", "register:40f0:8", ["const:7feed8:8", "const:4:8"]]
- 007feed8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fef30 ["INT_ADD", "register:40f0:8", ["const:7fef30:8", "const:4:8"]]
+ 007fef30 ["CALL", null, ["callee:00c57f60:8"]]
- 007feee0 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 007feee0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007feee0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007feee0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fef38 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 007fef38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fef38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fef38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-91cbca08c7b41e8260efc9511691d752"></a>

### [`007feef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007feef0.md) → [`007fef48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fef48.md) FUN_007fef48

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
      "definition_site": "007fef4c",
      "incomplete_value": false,
      "site": "007fef50",
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
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007feef4",
      "incomplete_value": false,
      "site": "007feef8",
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
            "const:f20:8"
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
      "007fef50",
      "DATA",
      [
        "storage",
        "00c7df20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fef50",
      "DATA",
      [
        "storage",
        "00c7dff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007feef4 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 007feef4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007feef4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007feef4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fef4c ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 007fef4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fef4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fef4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-537a60b7fd422d27888f95f608e025cb"></a>

### [`007fef4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fef4c.md) → [`007fefa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fefa4.md) FUN_007fefa4

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
      "definition_site": "007fefb8",
      "incomplete_value": false,
      "site": "007fefbc",
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
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fef60",
      "incomplete_value": false,
      "site": "007fef64",
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
            "const:fa0:8"
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
      "007fefbc",
      "DATA",
      [
        "storage",
        "00c7dfa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fefbc",
      "DATA",
      [
        "storage",
        "00c7e070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fef58 ["INT_ADD", "register:40f0:8", ["const:7fef58:8", "const:4:8"]]
- 007fef58 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fefb0 ["INT_ADD", "register:40f0:8", ["const:7fefb0:8", "const:4:8"]]
+ 007fefb0 ["CALL", null, ["callee:00c57f60:8"]]
- 007fef5c ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fefb4 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fef60 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 007fef60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fef60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fef60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fefb8 ["COPY", "tmp:0:8", ["const:70:8"]]
+ 007fefb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fefb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fefb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-878490f922f71ba6c566798a48282b94"></a>

### [`007fef70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fef70.md) → [`007fefc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fe/007fefc8.md) FUN_007fefc8

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
      "definition_site": "007fefcc",
      "incomplete_value": false,
      "site": "007fefd0",
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
            "const:70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fef74",
      "incomplete_value": false,
      "site": "007fef78",
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
            "const:fa0:8"
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
      "007fefd0",
      "DATA",
      [
        "storage",
        "00c7dfa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fefd0",
      "DATA",
      [
        "storage",
        "00c7e070",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fef70 ["COPY", "register:4040:8", ["const:c7d000:8"]]
+ 007fefc8 ["COPY", "register:4040:8", ["const:c7e000:8"]]
- 007fef74 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 007fef74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fef74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fef74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fefcc ["COPY", "tmp:0:8", ["const:70:8"]]
+ 007fefcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fefcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fefcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cb8550d3e8d743b97ab3a06aaa539993"></a>

### [`007fefc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fefc8.md) → [`007ff020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff020.md) FUN_007ff020

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
      "definition_site": "007ff02c",
      "incomplete_value": false,
      "site": "007ff030",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fefd4",
      "incomplete_value": false,
      "site": "007fefd8",
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
            "const:30:8"
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
      "007ff030",
      "DATA",
      [
        "storage",
        "00c7e030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff030",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fefd4 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007fefd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fefd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fefd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ff02c ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007ff02c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff02c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff02c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c1cac87803692184acae1d704fcb583b"></a>

### [`007fefec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fe/007fefec.md) → [`007ff044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff044.md) FUN_007ff044

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
      "definition_site": "007ff04c",
      "incomplete_value": false,
      "site": "007ff050",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007feff4",
      "incomplete_value": false,
      "site": "007feff8",
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
            "const:30:8"
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
      "007ff050",
      "DATA",
      [
        "storage",
        "00c7e030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff050",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007feff4 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007feff4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007feff4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007feff4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ff04c ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007ff04c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff04c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ff04c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007ff018 ["INT_ADD", "register:40f0:8", ["const:7ff018:8", "const:4:8"]]
- 007ff018 ["CALL", null, ["callee:00c57f80:8"]]
+ 007ff070 ["INT_ADD", "register:40f0:8", ["const:7ff070:8", "const:4:8"]]
+ 007ff070 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-00fdcd24cb195109e5994da5937284a0"></a>

### [`007ff02c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ff/007ff02c.md) → [`007ff084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff084.md) FUN_007ff084

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ff0b4",
      "incomplete_value": false,
      "site": "007ff0b4",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff05c",
      "incomplete_value": false,
      "site": "007ff05c",
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
            "const:30:8"
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
      "007ff0b4",
      "DATA",
      [
        "storage",
        "00c7e030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff0b4",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff0b4 ["INT_ADD", "register:40f0:8", ["const:7ff0b4:8", "const:4:8"]]
- 007ff0b4 ["CALL", null, ["callee:00470880:8"]]
+ 007ff10c ["INT_ADD", "register:40f0:8", ["const:7ff10c:8", "const:4:8"]]
+ 007ff10c ["CALL", null, ["callee:00470880:8"]]
- 007ff044 ["INT_ADD", "register:40f0:8", ["const:7ff044:8", "const:4:8"]]
- 007ff044 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ff09c ["INT_ADD", "register:40f0:8", ["const:7ff09c:8", "const:4:8"]]
+ 007ff09c ["CALL", null, ["callee:00c57f60:8"]]
- 007ff050 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007ff050 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ff050 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ff050 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ff0a8 ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007ff0a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff0a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff0a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0eafe9e6cff51f04e8a407fe268a5ff0"></a>

### [`007ff0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ff/007ff0e0.md) → [`007ff138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff138.md) FUN_007ff138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ff164",
      "incomplete_value": false,
      "site": "007ff164",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff10c",
      "incomplete_value": false,
      "site": "007ff10c",
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
            "const:30:8"
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
      "007ff164",
      "DATA",
      [
        "storage",
        "00c7e030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff164",
      "DATA",
      [
        "storage",
        "00c7e100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff104 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007ff104 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007ff104 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007ff104 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007ff15c ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007ff15c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007ff15c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007ff15c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007ff124 ["INT_ADD", "register:40f0:8", ["const:7ff124:8", "const:4:8"]]
- 007ff124 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ff17c ["INT_ADD", "register:40f0:8", ["const:7ff17c:8", "const:4:8"]]
+ 007ff17c ["CALL", null, ["callee:00c57f60:8"]]
- 007ff13c ["INT_ADD", "register:40f0:8", ["const:7ff13c:8", "const:4:8"]]
- 007ff13c ["CALL", null, ["callee:00c580d0:8"]]
+ 007ff194 ["INT_ADD", "register:40f0:8", ["const:7ff194:8", "const:4:8"]]
+ 007ff194 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-e4c06c781561bb1661ac033b999ad4b6"></a>

### [`007ff1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ff/007ff1c8.md) → [`007ff220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff220.md) FUN_007ff220

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff240",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff1e8",
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
      "site": "007ff24c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ff1f4",
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
      "007ff240",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007ff24c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007ff240",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007ff24c",
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
- 007ff1e8 ["INT_ADD", "register:40f0:8", ["const:7ff1e8:8", "const:4:8"]]
- 007ff1e8 ["CALL", null, ["ram:47acf4:8"]]
+ 007ff240 ["INT_ADD", "register:40f0:8", ["const:7ff240:8", "const:4:8"]]
+ 007ff240 ["CALL", null, ["ram:47ad34:8"]]
- 007ff1f4 ["INT_ADD", "register:40f0:8", ["const:7ff1f4:8", "const:4:8"]]
- 007ff1f4 ["CALL", null, ["ram:47acf4:8"]]
+ 007ff24c ["INT_ADD", "register:40f0:8", ["const:7ff24c:8", "const:4:8"]]
+ 007ff24c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-79b44c89d446614b6851be912e4ded7b"></a>

### [`007ff2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ff/007ff2d4.md) → [`007ff32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff32c.md) FUN_007ff32c

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
      "definition_site": "007ff34c",
      "incomplete_value": false,
      "site": "007ff350",
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
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ff2f4",
      "incomplete_value": false,
      "site": "007ff2f8",
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
            "const:b0:8"
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
      "007ff350",
      "DATA",
      [
        "storage",
        "00c7e0b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ff350",
      "DATA",
      [
        "storage",
        "00c7e180",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ff2e8 ["INT_ADD", "register:40f0:8", ["const:7ff2e8:8", "const:4:8"]]
- 007ff2e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ff340 ["INT_ADD", "register:40f0:8", ["const:7ff340:8", "const:4:8"]]
+ 007ff340 ["CALL", null, ["callee:00c57f60:8"]]
- 007ff2f4 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 007ff2f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ff2f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ff2f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ff34c ["COPY", "tmp:0:8", ["const:180:8"]]
+ 007ff34c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff34c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ff34c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


