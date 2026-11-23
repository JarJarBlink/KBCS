# v16.0.1 → v16.0.2 · 最優先の変更候補 (43)

[一覧の目次](README.md)

<a id="compare-1aed155fd78960a7daa18d8bc52073d3"></a>

### [`007f7390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7390.md) → [`007f73e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f73e8.md) FUN_007f73e8

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
      "definition_site": "007f73fc",
      "incomplete_value": false,
      "site": "007f7400",
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
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f73a4",
      "incomplete_value": false,
      "site": "007f73a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:f30:8"
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
      "007f7400",
      "DATA",
      [
        "storage",
        "00c7bf30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7400",
      "DATA",
      [
        "storage",
        "00c7c000",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f739c ["INT_ADD", "register:40f0:8", ["const:7f739c:8", "const:4:8"]]
- 007f739c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f73f4 ["INT_ADD", "register:40f0:8", ["const:7f73f4:8", "const:4:8"]]
+ 007f73f4 ["CALL", null, ["callee:00c57f60:8"]]
- 007f73a0 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f73f8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f73a4 ["COPY", "tmp:0:8", ["const:f30:8"]]
- 007f73a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f73a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f73a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f73fc ["COPY", "tmp:0:8", ["const:0:8"]]
+ 007f73fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f73fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f73fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-813002a9c089784b6ba9413da381afca"></a>

### [`007f73b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f73b4.md) → [`007f740c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f740c.md) FUN_007f740c

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
      "definition_site": "007f7410",
      "incomplete_value": false,
      "site": "007f7414",
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
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f73b8",
      "incomplete_value": false,
      "site": "007f73bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:f30:8"
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
      "007f7414",
      "DATA",
      [
        "storage",
        "00c7bf30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7414",
      "DATA",
      [
        "storage",
        "00c7c000",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f73b4 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f740c ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f73b8 ["COPY", "tmp:0:8", ["const:f30:8"]]
- 007f73b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f73b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f73b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f7410 ["COPY", "tmp:0:8", ["const:0:8"]]
+ 007f7410 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7410 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7410 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-de79a920bb42d365b4b7523dffa19a4a"></a>

### [`007f73cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f73cc.md) → [`007f7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7424.md) FUN_007f7424

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
      "site": "007f7448",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f73f0",
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
      "007f7448",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f7448",
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
- 007f73f0 ["INT_ADD", "register:40f0:8", ["const:7f73f0:8", "const:4:8"]]
- 007f73f0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f7448 ["INT_ADD", "register:40f0:8", ["const:7f7448:8", "const:4:8"]]
+ 007f7448 ["CALL", null, ["ram:47ad34:8"]]
- 007f73fc ["INT_ADD", "register:40f0:8", ["const:7f73fc:8", "const:4:8"]]
- 007f73fc ["CALL", null, ["callee:0047ce14:8"]]
+ 007f7454 ["INT_ADD", "register:40f0:8", ["const:7f7454:8", "const:4:8"]]
+ 007f7454 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b9cc80301e88a652184871f7ebc3bb3a"></a>

### [`007f7440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7440.md) → [`007f7498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7498.md) FUN_007f7498

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
      "definition_site": "007f74ac",
      "incomplete_value": false,
      "site": "007f74b0",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7454",
      "incomplete_value": false,
      "site": "007f7458",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
          ],
          [
            "leaf",
            "const:fb0:8"
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
      "007f74b0",
      "DATA",
      [
        "storage",
        "00c7bfb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f74b0",
      "DATA",
      [
        "storage",
        "00c7c080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f744c ["INT_ADD", "register:40f0:8", ["const:7f744c:8", "const:4:8"]]
- 007f744c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f74a4 ["INT_ADD", "register:40f0:8", ["const:7f74a4:8", "const:4:8"]]
+ 007f74a4 ["CALL", null, ["callee:00c57f60:8"]]
- 007f7450 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f74a8 ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f7454 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 007f7454 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7454 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7454 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f74ac ["COPY", "tmp:0:8", ["const:80:8"]]
+ 007f74ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f74ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f74ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-156599bf0e4f3289951c843cca719643"></a>

### [`007f7464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7464.md) → [`007f74bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f74bc.md) FUN_007f74bc

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
      "definition_site": "007f74c0",
      "incomplete_value": false,
      "site": "007f74c4",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7468",
      "incomplete_value": false,
      "site": "007f746c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7b000:8"
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
      "007f74c4",
      "DATA",
      [
        "storage",
        "00c7bfb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f74c4",
      "DATA",
      [
        "storage",
        "00c7c080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7464 ["COPY", "register:4040:8", ["const:c7b000:8"]]
+ 007f74bc ["COPY", "register:4040:8", ["const:c7c000:8"]]
- 007f7468 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 007f7468 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7468 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7468 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f74c0 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 007f74c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f74c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f74c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-91638bbf5f5b352128179b9c87f548c8"></a>

### [`007f747c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f747c.md) → [`007f74d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f74d4.md) FUN_007f74d4

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
      "site": "007f74f8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f74a0",
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
      "007f74f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f74f8",
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
- 007f74a0 ["INT_ADD", "register:40f0:8", ["const:7f74a0:8", "const:4:8"]]
- 007f74a0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f74f8 ["INT_ADD", "register:40f0:8", ["const:7f74f8:8", "const:4:8"]]
+ 007f74f8 ["CALL", null, ["ram:47ad34:8"]]
- 007f74ac ["INT_ADD", "register:40f0:8", ["const:7f74ac:8", "const:4:8"]]
- 007f74ac ["CALL", null, ["callee:0047ce14:8"]]
+ 007f7504 ["INT_ADD", "register:40f0:8", ["const:7f7504:8", "const:4:8"]]
+ 007f7504 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-42c60c9e9cd66fa034e0b6f5c74f751c"></a>

### [`007f74f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f74f0.md) → [`007f7548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7548.md) FUN_007f7548

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
      "definition_site": "007f755c",
      "incomplete_value": false,
      "site": "007f7560",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7504",
      "incomplete_value": false,
      "site": "007f7508",
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
      "007f7560",
      "DATA",
      [
        "storage",
        "00c7c030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7560",
      "DATA",
      [
        "storage",
        "00c7c100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f74fc ["INT_ADD", "register:40f0:8", ["const:7f74fc:8", "const:4:8"]]
- 007f74fc ["CALL", null, ["callee:00c57f60:8"]]
+ 007f7554 ["INT_ADD", "register:40f0:8", ["const:7f7554:8", "const:4:8"]]
+ 007f7554 ["CALL", null, ["callee:00c57f60:8"]]
- 007f7504 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007f7504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f755c ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007f755c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f755c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f755c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a231b5e819d265330651dc80e0a6dada"></a>

### [`007f7514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7514.md) → [`007f756c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f756c.md) FUN_007f756c

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
      "definition_site": "007f7570",
      "incomplete_value": false,
      "site": "007f7574",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7518",
      "incomplete_value": false,
      "site": "007f751c",
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
      "007f7574",
      "DATA",
      [
        "storage",
        "00c7c030",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7574",
      "DATA",
      [
        "storage",
        "00c7c100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7518 ["COPY", "tmp:0:8", ["const:30:8"]]
- 007f7518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f7570 ["COPY", "tmp:0:8", ["const:100:8"]]
+ 007f7570 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7570 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7570 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4263ca07b95dc626fa25bc5626e0abd3"></a>

### [`007f752c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f752c.md) → [`007f7584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7584.md) FUN_007f7584

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
      "site": "007f75a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f7550",
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
      "007f75a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f75a8",
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
- 007f7550 ["INT_ADD", "register:40f0:8", ["const:7f7550:8", "const:4:8"]]
- 007f7550 ["CALL", null, ["ram:47acf4:8"]]
+ 007f75a8 ["INT_ADD", "register:40f0:8", ["const:7f75a8:8", "const:4:8"]]
+ 007f75a8 ["CALL", null, ["ram:47ad34:8"]]
- 007f755c ["INT_ADD", "register:40f0:8", ["const:7f755c:8", "const:4:8"]]
- 007f755c ["CALL", null, ["callee:0047ce14:8"]]
+ 007f75b4 ["INT_ADD", "register:40f0:8", ["const:7f75b4:8", "const:4:8"]]
+ 007f75b4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-de72731b6c8ad4d8b1ebd33c116b2930"></a>

### [`007f75a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f75a0.md) → [`007f75f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f75f8.md) FUN_007f75f8

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
      "definition_site": "007f760c",
      "incomplete_value": false,
      "site": "007f7610",
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
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f75b4",
      "incomplete_value": false,
      "site": "007f75b8",
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
      "007f7610",
      "DATA",
      [
        "storage",
        "00c7c0b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7610",
      "DATA",
      [
        "storage",
        "00c7c180",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f75ac ["INT_ADD", "register:40f0:8", ["const:7f75ac:8", "const:4:8"]]
- 007f75ac ["CALL", null, ["callee:00c57f60:8"]]
+ 007f7604 ["INT_ADD", "register:40f0:8", ["const:7f7604:8", "const:4:8"]]
+ 007f7604 ["CALL", null, ["callee:00c57f60:8"]]
- 007f75b4 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 007f75b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f75b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f75b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f760c ["COPY", "tmp:0:8", ["const:180:8"]]
+ 007f760c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f760c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f760c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c9717e05261f217955535317669034e4"></a>

### [`007f75c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f75c4.md) → [`007f761c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f761c.md) FUN_007f761c

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
      "definition_site": "007f7620",
      "incomplete_value": false,
      "site": "007f7624",
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
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f75c8",
      "incomplete_value": false,
      "site": "007f75cc",
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
      "007f7624",
      "DATA",
      [
        "storage",
        "00c7c0b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7624",
      "DATA",
      [
        "storage",
        "00c7c180",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f75c8 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 007f75c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f75c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f75c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f7620 ["COPY", "tmp:0:8", ["const:180:8"]]
+ 007f7620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3176229b3ea9c7bfaa3746f821fa0d02"></a>

### [`007f75dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f75dc.md) → [`007f7634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7634.md) FUN_007f7634

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
      "site": "007f7658",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f7600",
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
      "007f7658",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f7658",
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
- 007f7600 ["INT_ADD", "register:40f0:8", ["const:7f7600:8", "const:4:8"]]
- 007f7600 ["CALL", null, ["ram:47acf4:8"]]
+ 007f7658 ["INT_ADD", "register:40f0:8", ["const:7f7658:8", "const:4:8"]]
+ 007f7658 ["CALL", null, ["ram:47ad34:8"]]
- 007f760c ["INT_ADD", "register:40f0:8", ["const:7f760c:8", "const:4:8"]]
- 007f760c ["CALL", null, ["callee:0047ce14:8"]]
+ 007f7664 ["INT_ADD", "register:40f0:8", ["const:7f7664:8", "const:4:8"]]
+ 007f7664 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-a6d493fb6060b5a9a608fe95389c8eeb"></a>

### [`007f7650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7650.md) → [`007f76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f76a8.md) FUN_007f76a8

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
      "definition_site": "007f76cc",
      "incomplete_value": false,
      "site": "007f76cc",
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
            "const:200:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7674",
      "incomplete_value": false,
      "site": "007f7674",
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
      "007f76cc",
      "DATA",
      [
        "storage",
        "00c7c130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f76cc",
      "DATA",
      [
        "storage",
        "00c7c200",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7664 ["INT_ADD", "register:40f0:8", ["const:7f7664:8", "const:4:8"]]
- 007f7664 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f76bc ["INT_ADD", "register:40f0:8", ["const:7f76bc:8", "const:4:8"]]
+ 007f76bc ["CALL", null, ["callee:00c57f60:8"]]
- 007f7670 ["COPY", "tmp:0:8", ["const:130:8"]]
- 007f7670 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7670 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7670 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f76c8 ["COPY", "tmp:0:8", ["const:200:8"]]
+ 007f76c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f76c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f76c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-62a84f98b9a35e5f55d1ed18e8d9b851"></a>

### [`007f7684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7684.md) → [`007f76dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f76dc.md) FUN_007f76dc

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
      "definition_site": "007f76e8",
      "incomplete_value": false,
      "site": "007f76e8",
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
            "const:200:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7690",
      "incomplete_value": false,
      "site": "007f7690",
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
      "007f76e8",
      "DATA",
      [
        "storage",
        "00c7c130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f76e8",
      "DATA",
      [
        "storage",
        "00c7c200",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f768c ["COPY", "tmp:0:8", ["const:130:8"]]
- 007f768c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f768c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f768c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f76e4 ["COPY", "tmp:0:8", ["const:200:8"]]
+ 007f76e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f76e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f76e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f24c1552150b57d1fd375f56cc118ab0"></a>

### [`007f76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f76a0.md) → [`007f76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f76f8.md) FUN_007f76f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f7984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7984.md) [`007f7988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7988.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f79dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79dc.md) [`007f79e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79e0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.45% / 新版 92.45%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007f7790",
      "incomplete_value": true,
      "site": "007f7790",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:b51:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7738",
      "incomplete_value": true,
      "site": "007f7738",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:bad:8"
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
      "definition_site": "007f7794",
      "incomplete_value": true,
      "site": "007f7794",
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
      "definition_site": "007f773c",
      "incomplete_value": true,
      "site": "007f773c",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f7730",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f76d8",
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
      "007f7730",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f777c",
      "READ",
      [
        "storage",
        "002acbad",
        null,
        "string"
      ]
    ],
    [
      "007f7784",
      "READ",
      [
        "storage",
        "002acbb3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007f7730",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f777c",
      "READ",
      [
        "storage",
        "002acb51",
        null,
        "string"
      ]
    ],
    [
      "007f7784",
      "READ",
      [
        "storage",
        "002acb57",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f76d8 ["INT_ADD", "register:40f0:8", ["const:7f76d8:8", "const:4:8"]]
- 007f76d8 ["CALL", null, ["ram:47acf4:8"]]
+ 007f7730 ["INT_ADD", "register:40f0:8", ["const:7f7730:8", "const:4:8"]]
+ 007f7730 ["CALL", null, ["ram:47ad34:8"]]
- 007f76e4 ["INT_ADD", "register:40f0:8", ["const:7f76e4:8", "const:4:8"]]
- 007f76e4 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f773c ["INT_ADD", "register:40f0:8", ["const:7f773c:8", "const:4:8"]]
+ 007f773c ["CALL", null, ["callee:0047ce14:8"]]
- 007f7714 ["INT_ADD", "register:40f0:8", ["const:7f7714:8", "const:4:8"]]
- 007f7714 ["CALL", null, ["callee:00851550:8"]]
+ 007f776c ["INT_ADD", "register:40f0:8", ["const:7f776c:8", "const:4:8"]]
+ 007f776c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5deed0857167f7f21a7d5fce29308e49"></a>

### [`007f7970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7970.md) → [`007f79c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79c8.md) FUN_007f79c8

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
      "definition_site": "007f79d4",
      "incomplete_value": false,
      "site": "007f79d4",
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
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f797c",
      "incomplete_value": false,
      "site": "007f797c",
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
            "const:1a0:8"
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
      "007f79d4",
      "DATA",
      [
        "storage",
        "00c7c1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f79d4",
      "DATA",
      [
        "storage",
        "00c7c270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7978 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 007f7978 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7978 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7978 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f79d0 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 007f79d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f79d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f79d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-88cb74508de96e497ce45b6b071364b8"></a>

### [`007f798c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f798c.md) → [`007f79e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f79e4.md) FUN_007f79e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f7ce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7ce4.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f7d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7d3c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.02% / 新版 94.02%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f7a84",
      "incomplete_value": false,
      "site": "007f7a84",
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
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7a2c",
      "incomplete_value": false,
      "site": "007f7a2c",
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
            "const:210:8"
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
      "definition_site": "007f7ab4",
      "incomplete_value": true,
      "site": "007f7ab4",
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
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7a5c",
      "incomplete_value": true,
      "site": "007f7a5c",
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
            "const:390:8"
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
      "definition_site": "007f7ad4",
      "incomplete_value": false,
      "site": "007f7ad4",
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
    "old": {
      "definition_site": "007f7a7c",
      "incomplete_value": false,
      "site": "007f7a7c",
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
            "const:410:8"
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
      "007f7a1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007f7a84",
      "DATA",
      [
        "storage",
        "00c7c210",
        null,
        "undefined *"
      ]
    ],
    [
      "007f7ab4",
      "DATA",
      [
        "storage",
        "00c7c390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7a1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007f7a84",
      "DATA",
      [
        "storage",
        "00c7c2e0",
        null,
        "undefined *"
      ]
    ],
    [
      "007f7ab4",
      "DATA",
      [
        "storage",
        "00c7c460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f79c4 ["INT_ADD", "register:40f0:8", ["const:7f79c4:8", "const:4:8"]]
- 007f79c4 ["CALL", null, ["ram:47acf4:8"]]
+ 007f7a1c ["INT_ADD", "register:40f0:8", ["const:7f7a1c:8", "const:4:8"]]
+ 007f7a1c ["CALL", null, ["ram:47ad34:8"]]
- 007f7a1c ["INT_ADD", "register:40f0:8", ["const:7f7a1c:8", "const:4:8"]]
- 007f7a1c ["CALL", null, ["callee:0046cac4:8"]]
+ 007f7a74 ["INT_ADD", "register:40f0:8", ["const:7f7a74:8", "const:4:8"]]
+ 007f7a74 ["CALL", null, ["callee:0046cac4:8"]]
- 007f7a24 ["COPY", "tmp:0:8", ["const:210:8"]]
- 007f7a24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7a24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7a24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f7a7c ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 007f7a7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7a7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7a7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1630639dcfd618ae882c4c23accacd8a"></a>

### [`007f7c9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7c9c.md) → [`007f7cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7cf4.md) FUN_007f7cf4

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
      "definition_site": "007f7d18",
      "incomplete_value": false,
      "site": "007f7d18",
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
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7cc0",
      "incomplete_value": false,
      "site": "007f7cc0",
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
      "007f7d18",
      "DATA",
      [
        "storage",
        "00c7c210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7d18",
      "DATA",
      [
        "storage",
        "00c7c2e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7cb0 ["INT_ADD", "register:40f0:8", ["const:7f7cb0:8", "const:4:8"]]
- 007f7cb0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f7d08 ["INT_ADD", "register:40f0:8", ["const:7f7d08:8", "const:4:8"]]
+ 007f7d08 ["CALL", null, ["callee:00c57f60:8"]]
- 007f7cbc ["COPY", "tmp:0:8", ["const:210:8"]]
- 007f7cbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7cbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7cbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f7d14 ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 007f7d14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7d14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7d14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0d7a95eb4db23ea52f146e47025d0556"></a>

### [`007f7cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7cec.md) → [`007f7d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7d44.md) FUN_007f7d44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 11件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`007f7f8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7f8c.md) [`007f7f90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7f90.md) [`007f8048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8048.md) [`007f804c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f804c.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007f7fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fe4.md) [`007f7fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fe8.md) [`007f80a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f80a0.md) [`007f80a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f80a4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.26% / 新版 93.26%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007f7df4",
      "incomplete_value": false,
      "site": "007f7df4",
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
    "old": {
      "definition_site": "007f7d9c",
      "incomplete_value": false,
      "site": "007f7d9c",
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
            "const:300:8"
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
      "007f7d84",
      "READ",
      [
        "storage",
        "002c03c0",
        null,
        "string"
      ]
    ],
    [
      "007f7d8c",
      "READ",
      [
        "storage",
        "002c03c6",
        null,
        "string"
      ]
    ],
    [
      "007f7db8",
      "DATA",
      [
        "storage",
        "00c7c280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7d84",
      "READ",
      [
        "storage",
        "002c0400",
        null,
        "string"
      ]
    ],
    [
      "007f7d8c",
      "READ",
      [
        "storage",
        "002c0406",
        null,
        "string"
      ]
    ],
    [
      "007f7db8",
      "DATA",
      [
        "storage",
        "00c7c350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7d1c ["INT_ADD", "register:40f0:8", ["const:7f7d1c:8", "const:4:8"]]
- 007f7d1c ["CALL", null, ["callee:00851550:8"]]
+ 007f7d74 ["INT_ADD", "register:40f0:8", ["const:7f7d74:8", "const:4:8"]]
+ 007f7d74 ["CALL", null, ["callee:00851550:8"]]
- 007f7d28 ["COPY", "tmp:0:8", ["const:3c0:8"]]
- 007f7d28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7d28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7d28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f7d80 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 007f7d80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7d80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7d80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007f7d50 ["INT_ADD", "register:40f0:8", ["const:7f7d50:8", "const:4:8"]]
- 007f7d50 ["CALL", null, ["callee:0048ce94:8"]]
+ 007f7da8 ["INT_ADD", "register:40f0:8", ["const:7f7da8:8", "const:4:8"]]
+ 007f7da8 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-8199b4711fb1ffb26c3e42170411aa82"></a>

### [`007f7f44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7f44.md) → [`007f7f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7f9c.md) FUN_007f7f9c

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
      "definition_site": "007f7fc0",
      "incomplete_value": false,
      "site": "007f7fc0",
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
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7f68",
      "incomplete_value": false,
      "site": "007f7f68",
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
      "007f7fc0",
      "DATA",
      [
        "storage",
        "00c7c280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7fc0",
      "DATA",
      [
        "storage",
        "00c7c350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7f58 ["INT_ADD", "register:40f0:8", ["const:7f7f58:8", "const:4:8"]]
- 007f7f58 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f7fb0 ["INT_ADD", "register:40f0:8", ["const:7f7fb0:8", "const:4:8"]]
+ 007f7fb0 ["CALL", null, ["callee:00c57f60:8"]]
- 007f7f64 ["COPY", "tmp:0:8", ["const:280:8"]]
- 007f7f64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f7f64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f7f64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f7fbc ["COPY", "tmp:0:8", ["const:350:8"]]
+ 007f7fbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7fbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f7fbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1e18c6874ee0bdf51b90258971f1bbc3"></a>

### [`007f7f78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7f78.md) → [`007f7fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fd0.md) FUN_007f7fd0

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
      "definition_site": "007f7fdc",
      "incomplete_value": false,
      "site": "007f7fdc",
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
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007f7f84",
      "incomplete_value": false,
      "site": "007f7f84",
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
      "007f7fdc",
      "DATA",
      [
        "storage",
        "00c7c280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f7fdc",
      "DATA",
      [
        "storage",
        "00c7c350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f7f80 ["COPY", "tmp:0:8", ["const:280:8"]]
- 007f7f80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f7f80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f7f80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f7fd8 ["COPY", "tmp:0:8", ["const:350:8"]]
+ 007f7fd8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7fd8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f7fd8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-091e594c8c0996924827330eba28f641"></a>

### [`007f7f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7f94.md) → [`007f7fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7fec.md) FUN_007f7fec

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
      "site": "007f8008",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f7fb0",
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
      "007f8008",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f8008",
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
- 007f7fb0 ["INT_ADD", "register:40f0:8", ["const:7f7fb0:8", "const:4:8"]]
- 007f7fb0 ["CALL", null, ["ram:47acf4:8"]]
+ 007f8008 ["INT_ADD", "register:40f0:8", ["const:7f8008:8", "const:4:8"]]
+ 007f8008 ["CALL", null, ["ram:47ad34:8"]]
- 007f7fbc ["INT_ADD", "register:40f0:8", ["const:7f7fbc:8", "const:4:8"]]
- 007f7fbc ["CALL", null, ["callee:0047ce14:8"]]
+ 007f8014 ["INT_ADD", "register:40f0:8", ["const:7f8014:8", "const:4:8"]]
+ 007f8014 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-4f91eba841d62a51f5d34e9dce457245"></a>

### [`007f8000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8000.md) → [`007f8058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8058.md) FUN_007f8058

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
    "old": {
      "definition_site": "007f8024",
      "incomplete_value": false,
      "site": "007f8024",
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
            "const:300:8"
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
      "007f807c",
      "DATA",
      [
        "storage",
        "00c7c300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f807c",
      "DATA",
      [
        "storage",
        "00c7c3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8014 ["INT_ADD", "register:40f0:8", ["const:7f8014:8", "const:4:8"]]
- 007f8014 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f806c ["INT_ADD", "register:40f0:8", ["const:7f806c:8", "const:4:8"]]
+ 007f806c ["CALL", null, ["callee:00c57f60:8"]]
- 007f8020 ["COPY", "tmp:0:8", ["const:300:8"]]
- 007f8020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8078 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 007f8078 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8078 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8078 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c6f0c8f0753992e7974e6b5e46c151cf"></a>

### [`007f8034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8034.md) → [`007f808c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f808c.md) FUN_007f808c

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
    "old": {
      "definition_site": "007f8040",
      "incomplete_value": false,
      "site": "007f8040",
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
      "007f8098",
      "DATA",
      [
        "storage",
        "00c7c300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8098",
      "DATA",
      [
        "storage",
        "00c7c3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f803c ["COPY", "tmp:0:8", ["const:300:8"]]
- 007f803c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f803c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f803c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f8094 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 007f8094 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8094 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8094 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3a9503a6e814ade7cf40ee4f4f27ccf0"></a>

### [`007f8050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8050.md) → [`007f80a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f80a8.md) FUN_007f80a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 23件 [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046b880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046b880.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0046d974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d974.md)
- 新版 呼出元 0件  · 呼出先 23件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `call_target` 5件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f80f0",
      "incomplete_value": true,
      "site": "007f80f0",
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
      "definition_site": "007f8098",
      "incomplete_value": true,
      "site": "007f8098",
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
      "definition_site": "007f8100",
      "incomplete_value": false,
      "site": "007f8108",
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
      "definition_site": "007f80a8",
      "incomplete_value": false,
      "site": "007f80b0",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f81fc",
      "value": [
        "leaf",
        "ram:a673fc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f81a4",
      "value": [
        "leaf",
        "ram:a6738c:8"
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
      "007f80d4",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f80f8",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8100",
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
      "007f80d4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f80f8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8100",
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
- 007f80b0 ["INT_ADD", "register:40f0:8", ["const:7f80b0:8", "const:4:8"]]
- 007f80b0 ["CALL", null, ["callee:00c586e0:8"]]
+ 007f8108 ["INT_ADD", "register:40f0:8", ["const:7f8108:8", "const:4:8"]]
+ 007f8108 ["CALL", null, ["callee:00c586e0:8"]]
- 007f80f0 ["INT_ADD", "register:40f0:8", ["const:7f80f0:8", "const:4:8"]]
- 007f80f0 ["CALL", null, ["callee:00802d00:8"]]
+ 007f8148 ["INT_ADD", "register:40f0:8", ["const:7f8148:8", "const:4:8"]]
+ 007f8148 ["CALL", null, ["callee:00802d00:8"]]
- 007f81a4 ["INT_ADD", "register:40f0:8", ["const:7f81a4:8", "const:4:8"]]
- 007f81a4 ["CALL", null, ["ram:a6738c:8"]]
+ 007f81fc ["INT_ADD", "register:40f0:8", ["const:7f81fc:8", "const:4:8"]]
+ 007f81fc ["CALL", null, ["ram:a673fc:8"]]
~~~


<a id="compare-1bf769e5aa9358f9568594a7b4e70f2d"></a>

### [`007f8388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8388.md) → [`007f83e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f83e0.md) FUN_007f83e0

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
    "old": {
      "definition_site": "007f83ac",
      "incomplete_value": false,
      "site": "007f83ac",
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
      "007f8404",
      "DATA",
      [
        "storage",
        "00c7c390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8404",
      "DATA",
      [
        "storage",
        "00c7c460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f839c ["INT_ADD", "register:40f0:8", ["const:7f839c:8", "const:4:8"]]
- 007f839c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f83f4 ["INT_ADD", "register:40f0:8", ["const:7f83f4:8", "const:4:8"]]
+ 007f83f4 ["CALL", null, ["callee:00c57f60:8"]]
- 007f83a8 ["COPY", "tmp:0:8", ["const:390:8"]]
- 007f83a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f83a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f83a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8400 ["COPY", "tmp:0:8", ["const:460:8"]]
+ 007f8400 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8400 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8400 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-461507a1a3843bb56596514a42a05096"></a>

### [`007f83bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f83bc.md) → [`007f8414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8414.md) FUN_007f8414

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
    "old": {
      "definition_site": "007f83c8",
      "incomplete_value": false,
      "site": "007f83c8",
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
      "007f8420",
      "DATA",
      [
        "storage",
        "00c7c390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8420",
      "DATA",
      [
        "storage",
        "00c7c460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f83c4 ["COPY", "tmp:0:8", ["const:390:8"]]
- 007f83c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f83c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f83c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f841c ["COPY", "tmp:0:8", ["const:460:8"]]
+ 007f841c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f841c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f841c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fdfb229350c3278527f343375a5d911e"></a>

### [`007f83d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f83d8.md) → [`007f8430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8430.md) FUN_007f8430

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0085b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2e0.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`009dce40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dc/009dce40.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009dce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dce94.md)

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
      "site": "007f847c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8424",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "007f847c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f847c",
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
- 007f8424 ["INT_ADD", "register:40f0:8", ["const:7f8424:8", "const:4:8"]]
- 007f8424 ["CALL", null, ["ram:47acf4:8"]]
+ 007f847c ["INT_ADD", "register:40f0:8", ["const:7f847c:8", "const:4:8"]]
+ 007f847c ["CALL", null, ["ram:47ad34:8"]]
- 007f83f4 ["INT_ADD", "register:40f0:8", ["const:7f83f4:8", "const:4:8"]]
- 007f83f4 ["CALL", null, ["callee:0085b338:8"]]
+ 007f844c ["INT_ADD", "register:40f0:8", ["const:7f844c:8", "const:4:8"]]
+ 007f844c ["CALL", null, ["callee:0085b338:8"]]
- 007f8414 ["INT_ADD", "register:40f0:8", ["const:7f8414:8", "const:4:8"]]
- 007f8414 ["CALL", null, ["callee:009dce94:8"]]
+ 007f846c ["INT_ADD", "register:40f0:8", ["const:7f846c:8", "const:4:8"]]
+ 007f846c ["CALL", null, ["callee:009dce94:8"]]
~~~


<a id="compare-1077ebe787d0f3120d5154a40c1ca8da"></a>

### [`007f847c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f847c.md) → [`007f84d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f84d4.md) FUN_007f84d4

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
    "old": {
      "definition_site": "007f84a0",
      "incomplete_value": false,
      "site": "007f84a0",
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
      "007f84f8",
      "DATA",
      [
        "storage",
        "00c7c410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f84f8",
      "DATA",
      [
        "storage",
        "00c7c4e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8490 ["INT_ADD", "register:40f0:8", ["const:7f8490:8", "const:4:8"]]
- 007f8490 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f84e8 ["INT_ADD", "register:40f0:8", ["const:7f84e8:8", "const:4:8"]]
+ 007f84e8 ["CALL", null, ["callee:00c57f60:8"]]
- 007f849c ["COPY", "tmp:0:8", ["const:410:8"]]
- 007f849c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f849c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f849c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f84f4 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 007f84f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f84f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f84f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-24bfbe0b36b1588a98658a3ea4a8eb5d"></a>

### [`007f84b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f84b0.md) → [`007f8508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8508.md) FUN_007f8508

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
    "old": {
      "definition_site": "007f84bc",
      "incomplete_value": false,
      "site": "007f84bc",
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
      "007f8514",
      "DATA",
      [
        "storage",
        "00c7c410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8514",
      "DATA",
      [
        "storage",
        "00c7c4e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f84b8 ["COPY", "tmp:0:8", ["const:410:8"]]
- 007f84b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f84b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f84b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f8510 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 007f8510 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8510 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8510 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-aa314514e95f08920487d80ec06b2505"></a>

### [`007f84cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f84cc.md) → [`007f8524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8524.md) FUN_007f8524

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`0046b880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046b880.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d974.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.60% / 新版 95.60%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f8570",
      "incomplete_value": true,
      "site": "007f8570",
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
      "definition_site": "007f8518",
      "incomplete_value": true,
      "site": "007f8518",
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
    "old": {
      "definition_site": "007f8520",
      "incomplete_value": false,
      "site": "007f8530",
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
    "old": {
      "definition_site": "007f8528",
      "incomplete_value": false,
      "site": "007f8530",
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
      "007f8554",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f8578",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8580",
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
      "007f8554",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f8578",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8580",
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
- 007f8530 ["INT_ADD", "register:40f0:8", ["const:7f8530:8", "const:4:8"]]
- 007f8530 ["CALL", null, ["callee:00c586e0:8"]]
+ 007f8588 ["INT_ADD", "register:40f0:8", ["const:7f8588:8", "const:4:8"]]
+ 007f8588 ["CALL", null, ["callee:00c586e0:8"]]
- 007f84fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 007f84fc ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007f8554 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 007f8554 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 007f8520 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 007f8520 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007f8520 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007f8520 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007f8578 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 007f8578 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007f8578 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007f8578 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-7948c4cd0e669c123edc10d154e62f9b"></a>

### [`007f8664`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8664.md) → [`007f86bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f86bc.md) FUN_007f86bc

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
    "old": {
      "definition_site": "007f8688",
      "incomplete_value": false,
      "site": "007f8688",
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
      "007f86e0",
      "DATA",
      [
        "storage",
        "00c7c4a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f86e0",
      "DATA",
      [
        "storage",
        "00c7c570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8678 ["INT_ADD", "register:40f0:8", ["const:7f8678:8", "const:4:8"]]
- 007f8678 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f86d0 ["INT_ADD", "register:40f0:8", ["const:7f86d0:8", "const:4:8"]]
+ 007f86d0 ["CALL", null, ["callee:00c57f60:8"]]
- 007f8684 ["COPY", "tmp:0:8", ["const:4a0:8"]]
- 007f8684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f86dc ["COPY", "tmp:0:8", ["const:570:8"]]
+ 007f86dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f86dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f86dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c0f98741ed672b2e768fbc006a32c272"></a>

### [`007f8698`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8698.md) → [`007f86f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f86f0.md) FUN_007f86f0

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
      "definition_site": "007f86fc",
      "incomplete_value": false,
      "site": "007f86fc",
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
    "old": {
      "definition_site": "007f86a4",
      "incomplete_value": false,
      "site": "007f86a4",
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
            "const:4a0:8"
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
      "007f86fc",
      "DATA",
      [
        "storage",
        "00c7c4a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f86fc",
      "DATA",
      [
        "storage",
        "00c7c570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f86a0 ["COPY", "tmp:0:8", ["const:4a0:8"]]
- 007f86a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f86a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f86a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f86f8 ["COPY", "tmp:0:8", ["const:570:8"]]
+ 007f86f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f86f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f86f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4991eb4a0b2e69d34c0fe80db64a1903"></a>

### [`007f86b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f86b4.md) → [`007f870c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f870c.md) FUN_007f870c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0046a250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a250.md) [`0046b880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046b880.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d974.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.99% / 新版 97.99%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007f8764",
      "incomplete_value": true,
      "site": "007f8764",
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
      "definition_site": "007f870c",
      "incomplete_value": true,
      "site": "007f870c",
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
    "old": {
      "definition_site": "007f8714",
      "incomplete_value": false,
      "site": "007f8724",
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
    "old": {
      "definition_site": "007f871c",
      "incomplete_value": false,
      "site": "007f8724",
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
      "007f8748",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f876c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8774",
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
      "007f8748",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f876c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8774",
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
- 007f8724 ["INT_ADD", "register:40f0:8", ["const:7f8724:8", "const:4:8"]]
- 007f8724 ["CALL", null, ["callee:00c586e0:8"]]
+ 007f877c ["INT_ADD", "register:40f0:8", ["const:7f877c:8", "const:4:8"]]
+ 007f877c ["CALL", null, ["callee:00c586e0:8"]]
- 007f86f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 007f86f0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007f8748 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 007f8748 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 007f8714 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 007f8714 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007f8714 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007f8714 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007f876c ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 007f876c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007f876c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007f876c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-bb05db7cfb2053912041759a43653172"></a>

### [`007f89fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f89fc.md) → [`007f8a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8a54.md) FUN_007f8a54

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
    "old": {
      "definition_site": "007f8a20",
      "incomplete_value": false,
      "site": "007f8a20",
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
      "007f8a78",
      "DATA",
      [
        "storage",
        "00c7c530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8a78",
      "DATA",
      [
        "storage",
        "00c7c600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8a10 ["INT_ADD", "register:40f0:8", ["const:7f8a10:8", "const:4:8"]]
- 007f8a10 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f8a68 ["INT_ADD", "register:40f0:8", ["const:7f8a68:8", "const:4:8"]]
+ 007f8a68 ["CALL", null, ["callee:00c57f60:8"]]
- 007f8a1c ["COPY", "tmp:0:8", ["const:530:8"]]
- 007f8a1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8a1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8a1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8a74 ["COPY", "tmp:0:8", ["const:600:8"]]
+ 007f8a74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8a74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8a74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-53dc595c56de807aa45dbbbe4be185bb"></a>

### [`007f8a30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8a30.md) → [`007f8a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8a88.md) FUN_007f8a88

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
    "old": {
      "definition_site": "007f8a3c",
      "incomplete_value": false,
      "site": "007f8a3c",
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
      "007f8a94",
      "DATA",
      [
        "storage",
        "00c7c530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8a94",
      "DATA",
      [
        "storage",
        "00c7c600",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8a38 ["COPY", "tmp:0:8", ["const:530:8"]]
- 007f8a38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f8a38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f8a38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f8a90 ["COPY", "tmp:0:8", ["const:600:8"]]
+ 007f8a90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8a90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f8a90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0b3dad762c505100b2f6ee2b27a6802b"></a>

### [`007f8a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8a4c.md) → [`007f8aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8aa4.md) FUN_007f8aa4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 11件 [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046b880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046b880.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046b8c0.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

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
    "old": {
      "definition_site": "007f8b10",
      "incomplete_value": true,
      "site": "007f8b20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ea3:8"
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
    "old": {
      "definition_site": "007f8b24",
      "incomplete_value": true,
      "site": "007f8b24",
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
    "old": {
      "definition_site": "007f8a8c",
      "incomplete_value": true,
      "site": "007f8a8c",
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
      "007f8ad4",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007f8aec",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8af4",
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
      "007f8ad4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007f8aec",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007f8af4",
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
- 007f8aa4 ["INT_ADD", "register:40f0:8", ["const:7f8aa4:8", "const:4:8"]]
- 007f8aa4 ["CALL", null, ["callee:00c586e0:8"]]
+ 007f8afc ["INT_ADD", "register:40f0:8", ["const:7f8afc:8", "const:4:8"]]
+ 007f8afc ["CALL", null, ["callee:00c586e0:8"]]
- 007f8afc ["INT_ADD", "register:40f0:8", ["const:7f8afc:8", "const:4:8"]]
- 007f8afc ["CALL", null, ["callee:00468fc8:8"]]
+ 007f8b54 ["INT_ADD", "register:40f0:8", ["const:7f8b54:8", "const:4:8"]]
+ 007f8b54 ["CALL", null, ["callee:00468fc8:8"]]
- 007f8a7c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:978:8"]]
- 007f8a7c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007f8ad4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a78:8"]]
+ 007f8ad4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d84d6a6ef359549945bcb45d82f4cda1"></a>

### [`007f8c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8c58.md) → [`007f8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8cb0.md) FUN_007f8cb0

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
    "old": {
      "definition_site": "007f8c6c",
      "incomplete_value": false,
      "site": "007f8c70",
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
      "007f8cc8",
      "DATA",
      [
        "storage",
        "00c7c5b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8cc8",
      "DATA",
      [
        "storage",
        "00c7c680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8c64 ["INT_ADD", "register:40f0:8", ["const:7f8c64:8", "const:4:8"]]
- 007f8c64 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f8cbc ["INT_ADD", "register:40f0:8", ["const:7f8cbc:8", "const:4:8"]]
+ 007f8cbc ["CALL", null, ["callee:00c57f60:8"]]
- 007f8c6c ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 007f8c6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8c6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8c6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8cc4 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 007f8cc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8cc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8cc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3747c4557837d626f83288c46d144e4a"></a>

### [`007f8c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8c7c.md) → [`007f8cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8cd4.md) FUN_007f8cd4

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
    "old": {
      "definition_site": "007f8c80",
      "incomplete_value": false,
      "site": "007f8c84",
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
      "007f8cdc",
      "DATA",
      [
        "storage",
        "00c7c5b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8cdc",
      "DATA",
      [
        "storage",
        "00c7c680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8c80 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 007f8c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8cd8 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 007f8cd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8cd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8cd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0571f1fd86b4761d5c51f23ceef3872"></a>

### [`007f8c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8c94.md) → [`007f8cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8cec.md) FUN_007f8cec

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
      "site": "007f8d10",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8cb8",
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
      "007f8d10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f8d10",
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
- 007f8cb8 ["INT_ADD", "register:40f0:8", ["const:7f8cb8:8", "const:4:8"]]
- 007f8cb8 ["CALL", null, ["ram:47acf4:8"]]
+ 007f8d10 ["INT_ADD", "register:40f0:8", ["const:7f8d10:8", "const:4:8"]]
+ 007f8d10 ["CALL", null, ["ram:47ad34:8"]]
- 007f8cc4 ["INT_ADD", "register:40f0:8", ["const:7f8cc4:8", "const:4:8"]]
- 007f8cc4 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f8d1c ["INT_ADD", "register:40f0:8", ["const:7f8d1c:8", "const:4:8"]]
+ 007f8d1c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b22ee2735ab0da84217657fa3202392e"></a>

### [`007f8d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8d08.md) → [`007f8d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8d60.md) FUN_007f8d60

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
    "old": {
      "definition_site": "007f8d1c",
      "incomplete_value": false,
      "site": "007f8d20",
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
            "const:630:8"
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
      "007f8d78",
      "DATA",
      [
        "storage",
        "00c7c630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8d78",
      "DATA",
      [
        "storage",
        "00c7c700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8d14 ["INT_ADD", "register:40f0:8", ["const:7f8d14:8", "const:4:8"]]
- 007f8d14 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f8d6c ["INT_ADD", "register:40f0:8", ["const:7f8d6c:8", "const:4:8"]]
+ 007f8d6c ["CALL", null, ["callee:00c57f60:8"]]
- 007f8d1c ["COPY", "tmp:0:8", ["const:630:8"]]
- 007f8d1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8d74 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 007f8d74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8d74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8d74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-be135b673fcd547b4558f7da7e2d15ea"></a>

### [`007f8d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8d2c.md) → [`007f8d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8d84.md) FUN_007f8d84

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
    "old": {
      "definition_site": "007f8d30",
      "incomplete_value": false,
      "site": "007f8d34",
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
      "007f8d8c",
      "DATA",
      [
        "storage",
        "00c7c630",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8d8c",
      "DATA",
      [
        "storage",
        "00c7c700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8d30 ["COPY", "tmp:0:8", ["const:630:8"]]
- 007f8d30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8d30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8d88 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 007f8d88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8d88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8d88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7e1f6109b63adf50778fb651fe7fe98f"></a>

### [`007f8d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8d44.md) → [`007f8d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8d9c.md) FUN_007f8d9c

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
      "site": "007f8dc0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8d68",
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
      "007f8dc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f8dc0",
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
- 007f8d68 ["INT_ADD", "register:40f0:8", ["const:7f8d68:8", "const:4:8"]]
- 007f8d68 ["CALL", null, ["ram:47acf4:8"]]
+ 007f8dc0 ["INT_ADD", "register:40f0:8", ["const:7f8dc0:8", "const:4:8"]]
+ 007f8dc0 ["CALL", null, ["ram:47ad34:8"]]
- 007f8d74 ["INT_ADD", "register:40f0:8", ["const:7f8d74:8", "const:4:8"]]
- 007f8d74 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f8dcc ["INT_ADD", "register:40f0:8", ["const:7f8dcc:8", "const:4:8"]]
+ 007f8dcc ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-ea2e806c7a6c9eadcb7195247d584b6b"></a>

### [`007f8db8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8db8.md) → [`007f8e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8e10.md) FUN_007f8e10

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
    "old": {
      "definition_site": "007f8dcc",
      "incomplete_value": false,
      "site": "007f8dd0",
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
            "const:6b0:8"
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
      "007f8e28",
      "DATA",
      [
        "storage",
        "00c7c6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8e28",
      "DATA",
      [
        "storage",
        "00c7c780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8dc4 ["INT_ADD", "register:40f0:8", ["const:7f8dc4:8", "const:4:8"]]
- 007f8dc4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f8e1c ["INT_ADD", "register:40f0:8", ["const:7f8e1c:8", "const:4:8"]]
+ 007f8e1c ["CALL", null, ["callee:00c57f60:8"]]
- 007f8dcc ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 007f8dcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8dcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8dcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8e24 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 007f8e24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8e24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8e24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-59687bd5f88b3bb1dfceefe78946d601"></a>

### [`007f8ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8ddc.md) → [`007f8e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8e34.md) FUN_007f8e34

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
    "old": {
      "definition_site": "007f8de0",
      "incomplete_value": false,
      "site": "007f8de4",
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
      "007f8e3c",
      "DATA",
      [
        "storage",
        "00c7c6b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8e3c",
      "DATA",
      [
        "storage",
        "00c7c780",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8de0 ["COPY", "tmp:0:8", ["const:6b0:8"]]
- 007f8de0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8de0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8de0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8e38 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 007f8e38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8e38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8e38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9fa72a9630e92a71425501e249b03f99"></a>

### [`007f8df4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8df4.md) → [`007f8e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8e4c.md) FUN_007f8e4c

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
      "site": "007f8e70",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8e18",
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
      "007f8e70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f8e70",
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
- 007f8e18 ["INT_ADD", "register:40f0:8", ["const:7f8e18:8", "const:4:8"]]
- 007f8e18 ["CALL", null, ["ram:47acf4:8"]]
+ 007f8e70 ["INT_ADD", "register:40f0:8", ["const:7f8e70:8", "const:4:8"]]
+ 007f8e70 ["CALL", null, ["ram:47ad34:8"]]
- 007f8e24 ["INT_ADD", "register:40f0:8", ["const:7f8e24:8", "const:4:8"]]
- 007f8e24 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f8e7c ["INT_ADD", "register:40f0:8", ["const:7f8e7c:8", "const:4:8"]]
+ 007f8e7c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-6ca28056d46ad54fdd121fa6512a0888"></a>

### [`007f8e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8e68.md) → [`007f8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8ec0.md) FUN_007f8ec0

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
    "old": {
      "definition_site": "007f8e7c",
      "incomplete_value": false,
      "site": "007f8e80",
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
            "const:730:8"
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
      "007f8ed8",
      "DATA",
      [
        "storage",
        "00c7c730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8ed8",
      "DATA",
      [
        "storage",
        "00c7c800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8e74 ["INT_ADD", "register:40f0:8", ["const:7f8e74:8", "const:4:8"]]
- 007f8e74 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f8ecc ["INT_ADD", "register:40f0:8", ["const:7f8ecc:8", "const:4:8"]]
+ 007f8ecc ["CALL", null, ["callee:00c57f60:8"]]
- 007f8e7c ["COPY", "tmp:0:8", ["const:730:8"]]
- 007f8e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8ed4 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 007f8ed4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8ed4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8ed4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a7a982e0ca08643bf4d53df2205b32c"></a>

### [`007f8e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8e8c.md) → [`007f8ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8ee4.md) FUN_007f8ee4

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
    "old": {
      "definition_site": "007f8e90",
      "incomplete_value": false,
      "site": "007f8e94",
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
      "007f8eec",
      "DATA",
      [
        "storage",
        "00c7c730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8eec",
      "DATA",
      [
        "storage",
        "00c7c800",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8e90 ["COPY", "tmp:0:8", ["const:730:8"]]
- 007f8e90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8e90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8ee8 ["COPY", "tmp:0:8", ["const:800:8"]]
+ 007f8ee8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8ee8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8ee8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca6c4685fc254626d8303a6eb35d4050"></a>

### [`007f8ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8ea4.md) → [`007f8efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8efc.md) FUN_007f8efc

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
      "site": "007f8f20",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8ec8",
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
      "007f8f20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f8f20",
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
- 007f8ec8 ["INT_ADD", "register:40f0:8", ["const:7f8ec8:8", "const:4:8"]]
- 007f8ec8 ["CALL", null, ["ram:47acf4:8"]]
+ 007f8f20 ["INT_ADD", "register:40f0:8", ["const:7f8f20:8", "const:4:8"]]
+ 007f8f20 ["CALL", null, ["ram:47ad34:8"]]
- 007f8ed4 ["INT_ADD", "register:40f0:8", ["const:7f8ed4:8", "const:4:8"]]
- 007f8ed4 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f8f2c ["INT_ADD", "register:40f0:8", ["const:7f8f2c:8", "const:4:8"]]
+ 007f8f2c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-663e530fa260d95b0fc0ceefbe579e05"></a>

### [`007f8f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8f18.md) → [`007f8f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8f70.md) FUN_007f8f70

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
    "old": {
      "definition_site": "007f8f2c",
      "incomplete_value": false,
      "site": "007f8f30",
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
      "007f8f88",
      "DATA",
      [
        "storage",
        "00c7c7b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8f88",
      "DATA",
      [
        "storage",
        "00c7c880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8f24 ["INT_ADD", "register:40f0:8", ["const:7f8f24:8", "const:4:8"]]
- 007f8f24 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f8f7c ["INT_ADD", "register:40f0:8", ["const:7f8f7c:8", "const:4:8"]]
+ 007f8f7c ["CALL", null, ["callee:00c57f60:8"]]
- 007f8f2c ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 007f8f2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8f84 ["COPY", "tmp:0:8", ["const:880:8"]]
+ 007f8f84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8f84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8f84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6af4559303e13f6fd254432acb6f6339"></a>

### [`007f8f3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8f3c.md) → [`007f8f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8f94.md) FUN_007f8f94

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
    "old": {
      "definition_site": "007f8f40",
      "incomplete_value": false,
      "site": "007f8f44",
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
      "007f8f9c",
      "DATA",
      [
        "storage",
        "00c7c7b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f8f9c",
      "DATA",
      [
        "storage",
        "00c7c880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8f40 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 007f8f40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8f40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f8f98 ["COPY", "tmp:0:8", ["const:880:8"]]
+ 007f8f98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8f98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f8f98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7f38beae6f3bc5d27a0dab2cf64d2c08"></a>

### [`007f8f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8f54.md) → [`007f8fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f8/007f8fac.md) FUN_007f8fac

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
      "site": "007f8fd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f8f78",
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
      "007f8fd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f8fd0",
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
- 007f8f78 ["INT_ADD", "register:40f0:8", ["const:7f8f78:8", "const:4:8"]]
- 007f8f78 ["CALL", null, ["ram:47acf4:8"]]
+ 007f8fd0 ["INT_ADD", "register:40f0:8", ["const:7f8fd0:8", "const:4:8"]]
+ 007f8fd0 ["CALL", null, ["ram:47ad34:8"]]
- 007f8f84 ["INT_ADD", "register:40f0:8", ["const:7f8f84:8", "const:4:8"]]
- 007f8f84 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f8fdc ["INT_ADD", "register:40f0:8", ["const:7f8fdc:8", "const:4:8"]]
+ 007f8fdc ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-78182990a82112ce7f5e99b071660b93"></a>

### [`007f8fc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f8/007f8fc8.md) → [`007f9020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9020.md) FUN_007f9020

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
    "old": {
      "definition_site": "007f8fe8",
      "incomplete_value": false,
      "site": "007f8fec",
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
      "007f9044",
      "DATA",
      [
        "storage",
        "00c7c830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9044",
      "DATA",
      [
        "storage",
        "00c7c900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f8fdc ["INT_ADD", "register:40f0:8", ["const:7f8fdc:8", "const:4:8"]]
- 007f8fdc ["CALL", null, ["callee:00c57f60:8"]]
+ 007f9034 ["INT_ADD", "register:40f0:8", ["const:7f9034:8", "const:4:8"]]
+ 007f9034 ["CALL", null, ["callee:00c57f60:8"]]
- 007f8fe8 ["COPY", "tmp:0:8", ["const:830:8"]]
- 007f8fe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f8fe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f8fe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9040 ["COPY", "tmp:0:8", ["const:900:8"]]
+ 007f9040 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9040 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9040 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f0fe88430c5eafff2338a01ba63394c5"></a>

### [`007f9000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9000.md) → [`007f9058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9058.md) FUN_007f9058

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
    "old": {
      "definition_site": "007f9004",
      "incomplete_value": false,
      "site": "007f9008",
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
      "007f9060",
      "DATA",
      [
        "storage",
        "00c7c830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9060",
      "DATA",
      [
        "storage",
        "00c7c900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9004 ["COPY", "tmp:0:8", ["const:830:8"]]
- 007f9004 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9004 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9004 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f905c ["COPY", "tmp:0:8", ["const:900:8"]]
+ 007f905c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f905c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f905c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-23e0cc44d06113dbf3405475df2fe9ce"></a>

### [`007f9020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9020.md) → [`007f9078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9078.md) FUN_007f9078

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
      "site": "007f909c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f9044",
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
      "007f909c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f909c",
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
- 007f9044 ["INT_ADD", "register:40f0:8", ["const:7f9044:8", "const:4:8"]]
- 007f9044 ["CALL", null, ["ram:47acf4:8"]]
+ 007f909c ["INT_ADD", "register:40f0:8", ["const:7f909c:8", "const:4:8"]]
+ 007f909c ["CALL", null, ["ram:47ad34:8"]]
- 007f9050 ["INT_ADD", "register:40f0:8", ["const:7f9050:8", "const:4:8"]]
- 007f9050 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f90a8 ["INT_ADD", "register:40f0:8", ["const:7f90a8:8", "const:4:8"]]
+ 007f90a8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-16aaef57aa82042003089cea806ada6d"></a>

### [`007f9094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9094.md) → [`007f90ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f90ec.md) FUN_007f90ec

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
    "old": {
      "definition_site": "007f90a8",
      "incomplete_value": false,
      "site": "007f90ac",
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
            "const:8b0:8"
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
      "007f9104",
      "DATA",
      [
        "storage",
        "00c7c8b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9104",
      "DATA",
      [
        "storage",
        "00c7c980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f90a0 ["INT_ADD", "register:40f0:8", ["const:7f90a0:8", "const:4:8"]]
- 007f90a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f90f8 ["INT_ADD", "register:40f0:8", ["const:7f90f8:8", "const:4:8"]]
+ 007f90f8 ["CALL", null, ["callee:00c57f60:8"]]
- 007f90a8 ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 007f90a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f90a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f90a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9100 ["COPY", "tmp:0:8", ["const:980:8"]]
+ 007f9100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3bb85a87292a36e91fdfe7d8aa2e54d2"></a>

### [`007f90b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f90b8.md) → [`007f9110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9110.md) FUN_007f9110

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
    "old": {
      "definition_site": "007f90bc",
      "incomplete_value": false,
      "site": "007f90c0",
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
      "007f9118",
      "DATA",
      [
        "storage",
        "00c7c8b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9118",
      "DATA",
      [
        "storage",
        "00c7c980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f90bc ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 007f90bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f90bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f90bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9114 ["COPY", "tmp:0:8", ["const:980:8"]]
+ 007f9114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30449c865fdde605c2d2ca9376b2d5e2"></a>

### [`007f90d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f90d0.md) → [`007f9128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9128.md) FUN_007f9128

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
      "site": "007f914c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f90f4",
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
      "007f914c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f914c",
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
- 007f90f4 ["INT_ADD", "register:40f0:8", ["const:7f90f4:8", "const:4:8"]]
- 007f90f4 ["CALL", null, ["ram:47acf4:8"]]
+ 007f914c ["INT_ADD", "register:40f0:8", ["const:7f914c:8", "const:4:8"]]
+ 007f914c ["CALL", null, ["ram:47ad34:8"]]
- 007f9100 ["INT_ADD", "register:40f0:8", ["const:7f9100:8", "const:4:8"]]
- 007f9100 ["CALL", null, ["callee:0047ce14:8"]]
+ 007f9158 ["INT_ADD", "register:40f0:8", ["const:7f9158:8", "const:4:8"]]
+ 007f9158 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-bb344e09a71cc3dd4359a9cf2597aee8"></a>

### [`007f9144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9144.md) → [`007f919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f919c.md) FUN_007f919c

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
    "old": {
      "definition_site": "007f9168",
      "incomplete_value": false,
      "site": "007f9168",
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
            "const:930:8"
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
      "007f91c0",
      "DATA",
      [
        "storage",
        "00c7c930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f91c0",
      "DATA",
      [
        "storage",
        "00c7ca00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9158 ["INT_ADD", "register:40f0:8", ["const:7f9158:8", "const:4:8"]]
- 007f9158 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f91b0 ["INT_ADD", "register:40f0:8", ["const:7f91b0:8", "const:4:8"]]
+ 007f91b0 ["CALL", null, ["callee:00c57f60:8"]]
- 007f9164 ["COPY", "tmp:0:8", ["const:930:8"]]
- 007f9164 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9164 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9164 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f91bc ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 007f91bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f91bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f91bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-343060ea5125e4a80497ee0c7ad782d5"></a>

### [`007f9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9178.md) → [`007f91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f91d0.md) FUN_007f91d0

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
    "old": {
      "definition_site": "007f9184",
      "incomplete_value": false,
      "site": "007f9184",
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
      "007f91dc",
      "DATA",
      [
        "storage",
        "00c7c930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f91dc",
      "DATA",
      [
        "storage",
        "00c7ca00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9180 ["COPY", "tmp:0:8", ["const:930:8"]]
- 007f9180 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f9180 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f9180 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f91d8 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 007f91d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f91d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f91d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0512d15d3131075624907c164bf21c43"></a>

### [`007f9194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9194.md) → [`007f91ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f91ec.md) FUN_007f91ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`009e3a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e3/009e3a80.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009e3ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3ad4.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

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
      "site": "007f922c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f91d4",
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
      "007f922c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f922c",
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
- 007f91d4 ["INT_ADD", "register:40f0:8", ["const:7f91d4:8", "const:4:8"]]
- 007f91d4 ["CALL", null, ["ram:47acf4:8"]]
+ 007f922c ["INT_ADD", "register:40f0:8", ["const:7f922c:8", "const:4:8"]]
+ 007f922c ["CALL", null, ["ram:47ad34:8"]]
- 007f91c8 ["INT_ADD", "register:40f0:8", ["const:7f91c8:8", "const:4:8"]]
- 007f91c8 ["CALL", null, ["callee:009e3ad4:8"]]
+ 007f9220 ["INT_ADD", "register:40f0:8", ["const:7f9220:8", "const:4:8"]]
+ 007f9220 ["CALL", null, ["callee:009e3ad4:8"]]
- 007f91d0 ["INT_ADD", "register:40f0:8", ["const:7f91d0:8", "const:4:8"]]
- 007f91d0 ["CALL", null, ["callee:00a1a6f8:8"]]
+ 007f9228 ["INT_ADD", "register:40f0:8", ["const:7f9228:8", "const:4:8"]]
+ 007f9228 ["CALL", null, ["callee:00a1a6f8:8"]]
~~~


<a id="compare-6c1989a317dc6f7fc51d106086d714e1"></a>

### [`007f9224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9224.md) → [`007f927c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f927c.md) FUN_007f927c

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
    "old": {
      "definition_site": "007f9244",
      "incomplete_value": false,
      "site": "007f9248",
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
      "007f92a0",
      "DATA",
      [
        "storage",
        "00c7c9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f92a0",
      "DATA",
      [
        "storage",
        "00c7ca80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9238 ["INT_ADD", "register:40f0:8", ["const:7f9238:8", "const:4:8"]]
- 007f9238 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f9290 ["INT_ADD", "register:40f0:8", ["const:7f9290:8", "const:4:8"]]
+ 007f9290 ["CALL", null, ["callee:00c57f60:8"]]
- 007f9244 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 007f9244 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9244 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9244 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f929c ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 007f929c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f929c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f929c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ee03a8ad9cbbd10a0485f1b9cd7b779a"></a>

### [`007f925c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f925c.md) → [`007f92b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f92b4.md) FUN_007f92b4

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
    "old": {
      "definition_site": "007f9260",
      "incomplete_value": false,
      "site": "007f9264",
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
      "007f92bc",
      "DATA",
      [
        "storage",
        "00c7c9b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f92bc",
      "DATA",
      [
        "storage",
        "00c7ca80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9260 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 007f9260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f92b8 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 007f92b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f92b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f92b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f17519607b186d798e3165fdf8e80c46"></a>

### [`007f94a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f94a8.md) → [`007f9500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9500.md) FUN_007f9500

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
    "old": {
      "definition_site": "007f94cc",
      "incomplete_value": false,
      "site": "007f94cc",
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
      "007f9524",
      "DATA",
      [
        "storage",
        "00c7ca30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9524",
      "DATA",
      [
        "storage",
        "00c7cb00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f94bc ["INT_ADD", "register:40f0:8", ["const:7f94bc:8", "const:4:8"]]
- 007f94bc ["CALL", null, ["callee:00c57f60:8"]]
+ 007f9514 ["INT_ADD", "register:40f0:8", ["const:7f9514:8", "const:4:8"]]
+ 007f9514 ["CALL", null, ["callee:00c57f60:8"]]
- 007f94c8 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 007f94c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f94c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f94c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9520 ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 007f9520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c2716ccec3dc522db6c88cc7a3d338b2"></a>

### [`007f94dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f94dc.md) → [`007f9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9534.md) FUN_007f9534

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
    "old": {
      "definition_site": "007f94e8",
      "incomplete_value": false,
      "site": "007f94e8",
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
      "007f9540",
      "DATA",
      [
        "storage",
        "00c7ca30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9540",
      "DATA",
      [
        "storage",
        "00c7cb00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f94e4 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 007f94e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f94e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f94e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f953c ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 007f953c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f953c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f953c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e16299be7738fcf72ae45f4138f0532a"></a>

### [`007f94f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f94f8.md) → [`007f9550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9550.md) FUN_007f9550

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`009e3a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e3/009e3a80.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009e3ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3ad4.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

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
      "site": "007f9590",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007f9538",
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
      "007f9590",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007f9590",
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
- 007f9538 ["INT_ADD", "register:40f0:8", ["const:7f9538:8", "const:4:8"]]
- 007f9538 ["CALL", null, ["ram:47acf4:8"]]
+ 007f9590 ["INT_ADD", "register:40f0:8", ["const:7f9590:8", "const:4:8"]]
+ 007f9590 ["CALL", null, ["ram:47ad34:8"]]
- 007f952c ["INT_ADD", "register:40f0:8", ["const:7f952c:8", "const:4:8"]]
- 007f952c ["CALL", null, ["callee:009e3ad4:8"]]
+ 007f9584 ["INT_ADD", "register:40f0:8", ["const:7f9584:8", "const:4:8"]]
+ 007f9584 ["CALL", null, ["callee:009e3ad4:8"]]
- 007f9534 ["INT_ADD", "register:40f0:8", ["const:7f9534:8", "const:4:8"]]
- 007f9534 ["CALL", null, ["callee:00a1a6f8:8"]]
+ 007f958c ["INT_ADD", "register:40f0:8", ["const:7f958c:8", "const:4:8"]]
+ 007f958c ["CALL", null, ["callee:00a1a6f8:8"]]
~~~


<a id="compare-696c94702e15d96f3445fc8dcbebfd62"></a>

### [`007f9588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9588.md) → [`007f95e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f95e0.md) FUN_007f95e0

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
    "old": {
      "definition_site": "007f95a8",
      "incomplete_value": false,
      "site": "007f95ac",
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
            "const:ab0:8"
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
      "007f9604",
      "DATA",
      [
        "storage",
        "00c7cab0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9604",
      "DATA",
      [
        "storage",
        "00c7cb80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f959c ["INT_ADD", "register:40f0:8", ["const:7f959c:8", "const:4:8"]]
- 007f959c ["CALL", null, ["callee:00c57f60:8"]]
+ 007f95f4 ["INT_ADD", "register:40f0:8", ["const:7f95f4:8", "const:4:8"]]
+ 007f95f4 ["CALL", null, ["callee:00c57f60:8"]]
- 007f95a8 ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 007f95a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f95a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f95a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9600 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 007f9600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff8dd1437370cc426cab35a9c4030803"></a>

### [`007f95c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f95c0.md) → [`007f9618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9618.md) FUN_007f9618

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
    "old": {
      "definition_site": "007f95c4",
      "incomplete_value": false,
      "site": "007f95c8",
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
            "const:ab0:8"
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
      "007f9620",
      "DATA",
      [
        "storage",
        "00c7cab0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9620",
      "DATA",
      [
        "storage",
        "00c7cb80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f95c4 ["COPY", "tmp:0:8", ["const:ab0:8"]]
- 007f95c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f95c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f95c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f961c ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 007f961c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f961c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f961c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e3401f53a2e91de9a4354bd7ac38dfaf"></a>

### [`007f9674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9674.md) → [`007f96cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f96cc.md) FUN_007f96cc

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
    "old": {
      "definition_site": "007f9688",
      "incomplete_value": false,
      "site": "007f968c",
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
            "const:b30:8"
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
      "007f96e4",
      "DATA",
      [
        "storage",
        "00c7cb30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f96e4",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9688 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 007f9688 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f9688 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f9688 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f96e0 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 007f96e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f96e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f96e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f969c ["INT_ADD", "register:40f0:8", ["const:7f969c:8", "const:4:8"]]
- 007f969c ["CALL", null, ["callee:00c53da0:8"]]
+ 007f96f4 ["INT_ADD", "register:40f0:8", ["const:7f96f4:8", "const:4:8"]]
+ 007f96f4 ["CALL", null, ["callee:00c53da0:8"]]
- 007f96bc ["COPY", "register:0:8", ["register:4040:8"]]
- 007f96bc ["INT_ADD", "register:40f0:8", ["const:7f96bc:8", "const:4:8"]]
- 007f96bc ["CALLIND", null, ["register:0:8"]]
+ 007f9714 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007f9714 ["INT_ADD", "register:40f0:8", ["const:7f9714:8", "const:4:8"]]
+ 007f9714 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e7feb4ccf080f8c84d6348411fc36c8c"></a>

### [`007f96d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f96d0.md) → [`007f9728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9728.md) FUN_007f9728

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
    "old": {
      "definition_site": "007f96e8",
      "incomplete_value": false,
      "site": "007f96ec",
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
            "const:b30:8"
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
      "007f9744",
      "DATA",
      [
        "storage",
        "00c7cb30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f9744",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f96e8 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 007f96e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007f96e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007f96e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007f9740 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 007f9740 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9740 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007f9740 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007f96fc ["INT_ADD", "register:40f0:8", ["const:7f96fc:8", "const:4:8"]]
- 007f96fc ["CALL", null, ["callee:00c53da0:8"]]
+ 007f9754 ["INT_ADD", "register:40f0:8", ["const:7f9754:8", "const:4:8"]]
+ 007f9754 ["CALL", null, ["callee:00c53da0:8"]]
- 007f9710 ["COPY", "register:0:8", ["register:4040:8"]]
- 007f9710 ["INT_ADD", "register:40f0:8", ["const:7f9710:8", "const:4:8"]]
- 007f9710 ["CALLIND", null, ["register:0:8"]]
+ 007f9768 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007f9768 ["INT_ADD", "register:40f0:8", ["const:7f9768:8", "const:4:8"]]
+ 007f9768 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-427e4441c39e743e077b104cdcee0de6"></a>

### [`007f972c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f972c.md) → [`007f9784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9784.md) FUN_007f9784

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
    "old": {
      "definition_site": "007f9750",
      "incomplete_value": false,
      "site": "007f9754",
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
            "const:b30:8"
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
      "007f97ac",
      "DATA",
      [
        "storage",
        "00c7cb30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f97ac",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f9740 ["INT_ADD", "register:40f0:8", ["const:7f9740:8", "const:4:8"]]
- 007f9740 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f9798 ["INT_ADD", "register:40f0:8", ["const:7f9798:8", "const:4:8"]]
+ 007f9798 ["CALL", null, ["callee:00c57f60:8"]]
- 007f9750 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 007f9750 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f9750 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f9750 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f97a8 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 007f97a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f97a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f97a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007f9770 ["INT_ADD", "register:40f0:8", ["const:7f9770:8", "const:4:8"]]
- 007f9770 ["CALL", null, ["callee:00c53d70:8"]]
+ 007f97c8 ["INT_ADD", "register:40f0:8", ["const:7f97c8:8", "const:4:8"]]
+ 007f97c8 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-4b03e060b0526c4645c826665c2fbad5"></a>

### [`007f9784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9784.md) → [`007f97dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f97dc.md) FUN_007f97dc

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
    "old": {
      "definition_site": "007f978c",
      "incomplete_value": false,
      "site": "007f9790",
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
      "007f97e8",
      "DATA",
      [
        "storage",
        "00c7cb30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007f97e8",
      "DATA",
      [
        "storage",
        "00c7cc00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007f978c ["COPY", "tmp:0:8", ["const:b30:8"]]
- 007f978c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007f978c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007f978c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007f97e4 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 007f97e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007f97e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007f97e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007f97b4 ["INT_ADD", "register:40f0:8", ["const:7f97b4:8", "const:4:8"]]
- 007f97b4 ["CALL", null, ["callee:00c53d70:8"]]
+ 007f980c ["INT_ADD", "register:40f0:8", ["const:7f980c:8", "const:4:8"]]
+ 007f980c ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-b55c5cc8c348a8224116bfe092d2483b"></a>

### [`007f9e84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9e84.md) → [`007f9edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9edc.md) FUN_007f9edc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`007f9860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9860.md) [`007f9bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f9/007f9bd0.md) [`009dec20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009de/009dec20.md) [`009e1278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e1/009e1278.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 4件 [`007f98b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f98b8.md) [`007f9c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f9/007f9c28.md) [`009dec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009dec74.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
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
      "definition_site": "007f9e90",
      "incomplete_value": false,
      "site": "007f9e94",
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
      "007f9ee8",
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
      "007f9ee8",
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
- 007f9e94 ["INT_ADD", "register:40f0:8", ["const:7f9e94:8", "const:4:8"]]
- 007f9e94 ["CALL", null, ["callee:0043b7b8:8"]]
+ 007f9eec ["INT_ADD", "register:40f0:8", ["const:7f9eec:8", "const:4:8"]]
+ 007f9eec ["CALL", null, ["callee:0043b7b8:8"]]
- 007f9e90 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 007f9e90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007f9e90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007f9e90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007f9ee8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007f9ee8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007f9ee8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007f9ee8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7b0ab8609c597b4b6d79fb018d8a22d8"></a>

### [`007fa010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa010.md) → [`007fa068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa068.md) FUN_007fa068

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
    "old": {
      "definition_site": "007fa034",
      "incomplete_value": false,
      "site": "007fa034",
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
            "const:bb0:8"
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
      "007fa08c",
      "DATA",
      [
        "storage",
        "00c7cbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa08c",
      "DATA",
      [
        "storage",
        "00c7cc80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa024 ["INT_ADD", "register:40f0:8", ["const:7fa024:8", "const:4:8"]]
- 007fa024 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fa07c ["INT_ADD", "register:40f0:8", ["const:7fa07c:8", "const:4:8"]]
+ 007fa07c ["CALL", null, ["callee:00c57f60:8"]]
- 007fa030 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 007fa030 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa030 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa030 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa088 ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 007fa088 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa088 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa088 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dbd30c79e039cbc0a5124d19819cc4c1"></a>

### [`007fa044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa044.md) → [`007fa09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa09c.md) FUN_007fa09c

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
    "old": {
      "definition_site": "007fa050",
      "incomplete_value": false,
      "site": "007fa050",
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
            "const:bb0:8"
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
      "007fa0a8",
      "DATA",
      [
        "storage",
        "00c7cbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa0a8",
      "DATA",
      [
        "storage",
        "00c7cc80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa04c ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 007fa04c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fa04c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fa04c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fa0a4 ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 007fa0a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa0a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fa0a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b0951d47a4dc6d2ad6b57fc054a3f304"></a>

### [`007fa060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa060.md) → [`007fa0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa0b8.md) FUN_007fa0b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`009e3a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e3/009e3a80.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009e3ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3ad4.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

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
      "site": "007fa0f8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fa0a0",
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
      "007fa0f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fa0f8",
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
- 007fa0a0 ["INT_ADD", "register:40f0:8", ["const:7fa0a0:8", "const:4:8"]]
- 007fa0a0 ["CALL", null, ["ram:47acf4:8"]]
+ 007fa0f8 ["INT_ADD", "register:40f0:8", ["const:7fa0f8:8", "const:4:8"]]
+ 007fa0f8 ["CALL", null, ["ram:47ad34:8"]]
- 007fa094 ["INT_ADD", "register:40f0:8", ["const:7fa094:8", "const:4:8"]]
- 007fa094 ["CALL", null, ["callee:009e3ad4:8"]]
+ 007fa0ec ["INT_ADD", "register:40f0:8", ["const:7fa0ec:8", "const:4:8"]]
+ 007fa0ec ["CALL", null, ["callee:009e3ad4:8"]]
- 007fa09c ["INT_ADD", "register:40f0:8", ["const:7fa09c:8", "const:4:8"]]
- 007fa09c ["CALL", null, ["callee:00a1a6f8:8"]]
+ 007fa0f4 ["INT_ADD", "register:40f0:8", ["const:7fa0f4:8", "const:4:8"]]
+ 007fa0f4 ["CALL", null, ["callee:00a1a6f8:8"]]
~~~


<a id="compare-f7b5c456834735808f3c4c3135a5cc4e"></a>

### [`007fa0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa0f0.md) → [`007fa148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa148.md) FUN_007fa148

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
    "old": {
      "definition_site": "007fa110",
      "incomplete_value": false,
      "site": "007fa114",
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
      "007fa16c",
      "DATA",
      [
        "storage",
        "00c7cc30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa16c",
      "DATA",
      [
        "storage",
        "00c7cd00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa104 ["INT_ADD", "register:40f0:8", ["const:7fa104:8", "const:4:8"]]
- 007fa104 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fa15c ["INT_ADD", "register:40f0:8", ["const:7fa15c:8", "const:4:8"]]
+ 007fa15c ["CALL", null, ["callee:00c57f60:8"]]
- 007fa110 ["COPY", "tmp:0:8", ["const:c30:8"]]
- 007fa110 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa110 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa110 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa168 ["COPY", "tmp:0:8", ["const:d00:8"]]
+ 007fa168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4b650d21702458a46b16aeed362bbb6b"></a>

### [`007fa128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa128.md) → [`007fa180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa180.md) FUN_007fa180

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
    "old": {
      "definition_site": "007fa12c",
      "incomplete_value": false,
      "site": "007fa130",
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
            "const:c30:8"
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
      "007fa188",
      "DATA",
      [
        "storage",
        "00c7cc30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa188",
      "DATA",
      [
        "storage",
        "00c7cd00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa12c ["COPY", "tmp:0:8", ["const:c30:8"]]
- 007fa12c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa12c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa12c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa184 ["COPY", "tmp:0:8", ["const:d00:8"]]
+ 007fa184 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa184 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa184 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3d8b43e40ca2019c9352357ba1604d49"></a>

### [`007fa148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa148.md) → [`007fa1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa1a0.md) FUN_007fa1a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 25件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 25件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.16% / 新版 95.16%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "007fa270",
      "incomplete_value": true,
      "site": "007fa270",
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
                "const:d2:8"
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
    "old": {
      "definition_site": "007fa368",
      "incomplete_value": true,
      "site": "007fa368",
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
                "const:f31:8"
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
    "old": {
      "definition_site": "007fa3a8",
      "incomplete_value": false,
      "site": "007fa3a8",
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
            "const:d20:8"
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
      "007fa298",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fa2b4",
      "READ",
      [
        "storage",
        "002b40d2",
        null,
        "string"
      ]
    ],
    [
      "007fa3a4",
      "READ",
      [
        "storage",
        "002b2f31",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007fa298",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fa2b4",
      "READ",
      [
        "storage",
        "002b4103",
        null,
        "string"
      ]
    ],
    [
      "007fa3a4",
      "READ",
      [
        "storage",
        "002b2f62",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa1e8 ["INT_ADD", "register:40f0:8", ["const:7fa1e8:8", "const:4:8"]]
- 007fa1e8 ["CALL", null, ["callee:00744fdc:8"]]
+ 007fa240 ["INT_ADD", "register:40f0:8", ["const:7fa240:8", "const:4:8"]]
+ 007fa240 ["CALL", null, ["callee:00744fdc:8"]]
- 007fa240 ["INT_ADD", "register:40f0:8", ["const:7fa240:8", "const:4:8"]]
- 007fa240 ["CALL", null, ["ram:47acf4:8"]]
+ 007fa298 ["INT_ADD", "register:40f0:8", ["const:7fa298:8", "const:4:8"]]
+ 007fa298 ["CALL", null, ["ram:47ad34:8"]]
- 007fa298 ["INT_ADD", "register:40f0:8", ["const:7fa298:8", "const:4:8"]]
- 007fa298 ["CALL", null, ["callee:00744fdc:8"]]
+ 007fa2f0 ["INT_ADD", "register:40f0:8", ["const:7fa2f0:8", "const:4:8"]]
+ 007fa2f0 ["CALL", null, ["callee:00744fdc:8"]]
~~~


<a id="compare-2b807957852ae4552b0d7560d6fd5234"></a>

### [`007fa758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa758.md) → [`007fa7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa7b0.md) FUN_007fa7b0

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
      "definition_site": "007fa7d0",
      "incomplete_value": false,
      "site": "007fa7d4",
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
    "old": {
      "definition_site": "007fa778",
      "incomplete_value": false,
      "site": "007fa77c",
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
            "const:ca0:8"
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
      "007fa7d4",
      "DATA",
      [
        "storage",
        "00c7cca0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa7d4",
      "DATA",
      [
        "storage",
        "00c7cd70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa76c ["INT_ADD", "register:40f0:8", ["const:7fa76c:8", "const:4:8"]]
- 007fa76c ["CALL", null, ["callee:00c57f60:8"]]
+ 007fa7c4 ["INT_ADD", "register:40f0:8", ["const:7fa7c4:8", "const:4:8"]]
+ 007fa7c4 ["CALL", null, ["callee:00c57f60:8"]]
- 007fa778 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 007fa778 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa778 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa778 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa7d0 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 007fa7d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa7d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa7d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-70074064072de66e913f2f0b3f038d7a"></a>

### [`007fa790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa790.md) → [`007fa7e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa7e8.md) FUN_007fa7e8

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
    "old": {
      "definition_site": "007fa794",
      "incomplete_value": false,
      "site": "007fa798",
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
            "const:ca0:8"
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
      "007fa7f0",
      "DATA",
      [
        "storage",
        "00c7cca0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa7f0",
      "DATA",
      [
        "storage",
        "00c7cd70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa794 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 007fa794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa7ec ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 007fa7ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa7ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa7ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-93673b96766bcd17242de28d7ebfd348"></a>

### [`007fa7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa7b0.md) → [`007fa808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa808.md) FUN_007fa808

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fa83c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fa7e4",
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
      "007fa83c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fa83c",
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
- 007fa7e4 ["INT_ADD", "register:40f0:8", ["const:7fa7e4:8", "const:4:8"]]
- 007fa7e4 ["CALL", null, ["ram:47acf4:8"]]
+ 007fa83c ["INT_ADD", "register:40f0:8", ["const:7fa83c:8", "const:4:8"]]
+ 007fa83c ["CALL", null, ["ram:47ad34:8"]]
- 007fa7f0 ["INT_ADD", "register:40f0:8", ["const:7fa7f0:8", "const:4:8"]]
- 007fa7f0 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fa848 ["INT_ADD", "register:40f0:8", ["const:7fa848:8", "const:4:8"]]
+ 007fa848 ["CALL", null, ["callee:0047ce14:8"]]
- 007fa7f8 ["INT_ADD", "register:40f0:8", ["const:7fa7f8:8", "const:4:8"]]
- 007fa7f8 ["CALL", null, ["callee:008b91d0:8"]]
+ 007fa850 ["INT_ADD", "register:40f0:8", ["const:7fa850:8", "const:4:8"]]
+ 007fa850 ["CALL", null, ["callee:008b91d0:8"]]
~~~


<a id="compare-d5b82da9ad2eeeb95568021630a11d14"></a>

### [`007fa868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa868.md) → [`007fa8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa8c0.md) FUN_007fa8c0

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
    "old": {
      "definition_site": "007fa87c",
      "incomplete_value": false,
      "site": "007fa880",
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
            "const:d20:8"
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
      "007fa8d8",
      "DATA",
      [
        "storage",
        "00c7cd20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa8d8",
      "DATA",
      [
        "storage",
        "00c7cdf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa874 ["INT_ADD", "register:40f0:8", ["const:7fa874:8", "const:4:8"]]
- 007fa874 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fa8cc ["INT_ADD", "register:40f0:8", ["const:7fa8cc:8", "const:4:8"]]
+ 007fa8cc ["CALL", null, ["callee:00c57f60:8"]]
- 007fa87c ["COPY", "tmp:0:8", ["const:d20:8"]]
- 007fa87c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa87c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa87c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa8d4 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 007fa8d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa8d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa8d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f6fc4398a0da2b9c4cb5171b34cc053"></a>

### [`007fa88c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa88c.md) → [`007fa8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa8e4.md) FUN_007fa8e4

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
    "old": {
      "definition_site": "007fa890",
      "incomplete_value": false,
      "site": "007fa894",
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
            "const:d20:8"
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
      "007fa8ec",
      "DATA",
      [
        "storage",
        "00c7cd20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fa8ec",
      "DATA",
      [
        "storage",
        "00c7cdf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa890 ["COPY", "tmp:0:8", ["const:d20:8"]]
- 007fa890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa8e8 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 007fa8e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa8e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa8e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-05b01815a2b3bdc7aab7bc7a3eecbc72"></a>

### [`007fa8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa8a4.md) → [`007fa8fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa8fc.md) FUN_007fa8fc

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
      "site": "007fa920",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fa8c8",
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
      "007fa920",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fa920",
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
- 007fa8c8 ["INT_ADD", "register:40f0:8", ["const:7fa8c8:8", "const:4:8"]]
- 007fa8c8 ["CALL", null, ["ram:47acf4:8"]]
+ 007fa920 ["INT_ADD", "register:40f0:8", ["const:7fa920:8", "const:4:8"]]
+ 007fa920 ["CALL", null, ["ram:47ad34:8"]]
- 007fa8d4 ["INT_ADD", "register:40f0:8", ["const:7fa8d4:8", "const:4:8"]]
- 007fa8d4 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fa92c ["INT_ADD", "register:40f0:8", ["const:7fa92c:8", "const:4:8"]]
+ 007fa92c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-099e0977ae51916b56d9f69d19354e28"></a>

### [`007fa918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa918.md) → [`007fa970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa970.md) FUN_007fa970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fa98c",
      "incomplete_value": false,
      "site": "007fa998",
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
            "const:e80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa934",
      "incomplete_value": false,
      "site": "007fa940",
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
      "007fa998",
      "DATA",
      [
        "storage",
        "00c7cdb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007fa998",
      "DATA",
      [
        "storage",
        "00c7ce80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa92c ["INT_ADD", "register:40f0:8", ["const:7fa92c:8", "const:4:8"]]
- 007fa92c ["CALL", null, ["callee:00c57f60:8"]]
+ 007fa984 ["INT_ADD", "register:40f0:8", ["const:7fa984:8", "const:4:8"]]
+ 007fa984 ["CALL", null, ["callee:00c57f60:8"]]
- 007fa934 ["COPY", "tmp:0:8", ["const:db0:8"]]
- 007fa934 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa934 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa934 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa98c ["COPY", "tmp:0:8", ["const:e80:8"]]
+ 007fa98c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa98c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa98c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-16e274b5898ba76d15c4340a30bfb9d9"></a>

### [`007fa960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa960.md) → [`007fa9b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9b8.md) FUN_007fa9b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007fa9bc",
      "incomplete_value": false,
      "site": "007fa9c0",
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
            "const:e80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007fa964",
      "incomplete_value": false,
      "site": "007fa968",
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
      "007fa9c0",
      "DATA",
      [
        "storage",
        "00c7cdb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007fa9c0",
      "DATA",
      [
        "storage",
        "00c7ce80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fa964 ["COPY", "tmp:0:8", ["const:db0:8"]]
- 007fa964 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fa964 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fa964 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fa9bc ["COPY", "tmp:0:8", ["const:e80:8"]]
+ 007fa9bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa9bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fa9bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0a65ec393881e1873ca5296cade7368"></a>

### [`007fa990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa990.md) → [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) FUN_007fa9e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 27件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 27件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.47% / 新版 97.47%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 4件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "007fadf8",
      "incomplete_value": false,
      "site": "007fadf8",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fac68",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fac10",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 19,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007faca0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fac48",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 23,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007fac68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007faca0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007face4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fac68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007faca0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007face4",
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
- 007fac10 ["INT_ADD", "register:40f0:8", ["const:7fac10:8", "const:4:8"]]
- 007fac10 ["CALL", null, ["ram:47acf4:8"]]
+ 007fac68 ["INT_ADD", "register:40f0:8", ["const:7fac68:8", "const:4:8"]]
+ 007fac68 ["CALL", null, ["ram:47ad34:8"]]
- 007fac48 ["INT_ADD", "register:40f0:8", ["const:7fac48:8", "const:4:8"]]
- 007fac48 ["CALL", null, ["ram:47acf4:8"]]
+ 007faca0 ["INT_ADD", "register:40f0:8", ["const:7faca0:8", "const:4:8"]]
+ 007faca0 ["CALL", null, ["ram:47ad34:8"]]
- 007fac8c ["INT_ADD", "register:40f0:8", ["const:7fac8c:8", "const:4:8"]]
- 007fac8c ["CALL", null, ["ram:47acf4:8"]]
+ 007face4 ["INT_ADD", "register:40f0:8", ["const:7face4:8", "const:4:8"]]
+ 007face4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-585347d43a6660e3883b7f2fca101d70"></a>

### [`007faf3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007faf3c.md) → [`007faf94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007faf94.md) FUN_007faf94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007fa990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fa/007fa990.md) [`007fbe08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fbe08.md) · 呼出先 11件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`006648a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006648a0.md) [`00744198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744198.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 2件 [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) [`007fbe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbe60.md) · 呼出先 11件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`007441f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007441f0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.24% / 新版 82.24%

優先判定に残った影響 `call_argument_candidate` 7件, `store_destination` 7件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "007fb0b4",
      "incomplete_value": false,
      "site": "007fb0b4",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "007fb0b8",
      "incomplete_value": false,
      "site": "007fb0b8",
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
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "007fb0b4",
      "incomplete_value": false,
      "site": "007fb0b8",
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
      "007fafe0",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "007faff8",
      "PARAM",
      [
        "storage",
        "00ca4f00",
        null,
        "undefined8"
      ]
    ],
    [
      "007faffc",
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
      "007fafe0",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "007faff8",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ],
    [
      "007faffc",
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
- 007fafc0 ["INT_ADD", "register:40f0:8", ["const:7fafc0:8", "const:4:8"]]
- 007fafc0 ["CALL", null, ["callee:0047e91c:8"]]
+ 007fb018 ["INT_ADD", "register:40f0:8", ["const:7fb018:8", "const:4:8"]]
+ 007fb018 ["CALL", null, ["callee:0047e91c:8"]]
- 007fb018 ["INT_ADD", "register:40f0:8", ["const:7fb018:8", "const:4:8"]]
- 007fb018 ["CALL", null, ["callee:00c53da0:8"]]
+ 007fb070 ["INT_ADD", "register:40f0:8", ["const:7fb070:8", "const:4:8"]]
+ 007fb070 ["CALL", null, ["callee:00c53da0:8"]]
- 007fb060 ["COPY", "register:0:8", ["register:4040:8"]]
- 007fb060 ["INT_ADD", "register:40f0:8", ["const:7fb060:8", "const:4:8"]]
- 007fb060 ["CALLIND", null, ["register:0:8"]]
+ 007fb0b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007fb0b8 ["INT_ADD", "register:40f0:8", ["const:7fb0b8:8", "const:4:8"]]
+ 007fb0b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b33b11c5e747c426af620b50bab34178"></a>

### [`007fb118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb118.md) → [`007fb170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb170.md) FUN_007fb170

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
    "old": {
      "definition_site": "007fb12c",
      "incomplete_value": false,
      "site": "007fb130",
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
      "007fb188",
      "DATA",
      [
        "storage",
        "00c7ce20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb188",
      "DATA",
      [
        "storage",
        "00c7cef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fb124 ["INT_ADD", "register:40f0:8", ["const:7fb124:8", "const:4:8"]]
- 007fb124 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fb17c ["INT_ADD", "register:40f0:8", ["const:7fb17c:8", "const:4:8"]]
+ 007fb17c ["CALL", null, ["callee:00c57f60:8"]]
- 007fb12c ["COPY", "tmp:0:8", ["const:e20:8"]]
- 007fb12c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb12c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb12c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb184 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 007fb184 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb184 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb184 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3afe80cd8a82b9ef1a8a61fb8388d003"></a>

### [`007fb13c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb13c.md) → [`007fb194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb194.md) FUN_007fb194

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
    "old": {
      "definition_site": "007fb140",
      "incomplete_value": false,
      "site": "007fb144",
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
            "const:e20:8"
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
      "007fb19c",
      "DATA",
      [
        "storage",
        "00c7ce20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb19c",
      "DATA",
      [
        "storage",
        "00c7cef0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fb140 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 007fb140 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb140 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb140 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb198 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 007fb198 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb198 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb198 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-26a01f59436d3a40c11945d3f17c4d5c"></a>

### [`007fb154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb154.md) → [`007fb1ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb1ac.md) FUN_007fb1ac

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
      "site": "007fb1d0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fb178",
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
      "007fb1d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fb1d0",
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
- 007fb178 ["INT_ADD", "register:40f0:8", ["const:7fb178:8", "const:4:8"]]
- 007fb178 ["CALL", null, ["ram:47acf4:8"]]
+ 007fb1d0 ["INT_ADD", "register:40f0:8", ["const:7fb1d0:8", "const:4:8"]]
+ 007fb1d0 ["CALL", null, ["ram:47ad34:8"]]
- 007fb184 ["INT_ADD", "register:40f0:8", ["const:7fb184:8", "const:4:8"]]
- 007fb184 ["CALL", null, ["callee:0047ce14:8"]]
+ 007fb1dc ["INT_ADD", "register:40f0:8", ["const:7fb1dc:8", "const:4:8"]]
+ 007fb1dc ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-ac5faa202cf78c133c8e70913ec8aa1e"></a>

### [`007fb1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb1c8.md) → [`007fb220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb220.md) FUN_007fb220

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
      "definition_site": "007fb244",
      "incomplete_value": false,
      "site": "007fb248",
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
    "old": {
      "definition_site": "007fb1ec",
      "incomplete_value": false,
      "site": "007fb1f0",
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
            "const:eb0:8"
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
      "007fb248",
      "DATA",
      [
        "storage",
        "00c7ceb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb248",
      "DATA",
      [
        "storage",
        "00c7cf80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fb1dc ["INT_ADD", "register:40f0:8", ["const:7fb1dc:8", "const:4:8"]]
- 007fb1dc ["CALL", null, ["callee:00c57f60:8"]]
+ 007fb234 ["INT_ADD", "register:40f0:8", ["const:7fb234:8", "const:4:8"]]
+ 007fb234 ["CALL", null, ["callee:00c57f60:8"]]
- 007fb1ec ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007fb1ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb1ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb1ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb244 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007fb244 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb244 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb244 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9b8990c7ae3860c30d94d339fa2af113"></a>

### [`007fb208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb208.md) → [`007fb260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb260.md) FUN_007fb260

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
    "old": {
      "definition_site": "007fb20c",
      "incomplete_value": false,
      "site": "007fb210",
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
      "007fb268",
      "DATA",
      [
        "storage",
        "00c7ceb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fb268",
      "DATA",
      [
        "storage",
        "00c7cf80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fb20c ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 007fb20c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fb20c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fb20c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fb264 ["COPY", "tmp:0:8", ["const:f80:8"]]
+ 007fb264 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb264 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fb264 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-19b7da9463a0fac534d8679f014cbaee"></a>

### [`007fb230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb230.md) → [`007fb288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb288.md) FUN_007fb288

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 36件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00468c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c68.md)
- 新版 呼出元 0件  · 呼出先 36件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca8.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.17% / 新版 99.17%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007fb2fc",
      "incomplete_value": true,
      "site": "007fb2fc",
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
      "definition_site": "007fb2a4",
      "incomplete_value": true,
      "site": "007fb2a4",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007fb304",
      "incomplete_value": false,
      "site": "007fb314",
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
      "definition_site": "007fb2ac",
      "incomplete_value": false,
      "site": "007fb2bc",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007fb30c",
      "incomplete_value": false,
      "site": "007fb314",
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
      "definition_site": "007fb2b4",
      "incomplete_value": false,
      "site": "007fb2bc",
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
      "007fb2ec",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007fb304",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007fb30c",
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
      "007fb2ec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007fb304",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007fb30c",
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
- 007fb2bc ["INT_ADD", "register:40f0:8", ["const:7fb2bc:8", "const:4:8"]]
- 007fb2bc ["CALL", null, ["callee:00c586e0:8"]]
+ 007fb314 ["INT_ADD", "register:40f0:8", ["const:7fb314:8", "const:4:8"]]
+ 007fb314 ["CALL", null, ["callee:00c586e0:8"]]
- 007fbae8 ["INT_ADD", "register:40f0:8", ["const:7fbae8:8", "const:4:8"]]
- 007fbae8 ["CALL", null, ["ram:6cdc88:8"]]
+ 007fbb40 ["INT_ADD", "register:40f0:8", ["const:7fbb40:8", "const:4:8"]]
+ 007fbb40 ["CALL", null, ["ram:6cdce0:8"]]
- 007fb274 ["INT_ADD", "register:40f0:8", ["const:7fb274:8", "const:4:8"]]
- 007fb274 ["CALL", null, ["callee:008b92e8:8"]]
+ 007fb2cc ["INT_ADD", "register:40f0:8", ["const:7fb2cc:8", "const:4:8"]]
+ 007fb2cc ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-62b3e1f42f998994741e9798a195efec"></a>

### [`007fbda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fbda0.md) → [`007fbdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbdf8.md) FUN_007fbdf8

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
    "old": {
      "definition_site": "007fbdc4",
      "incomplete_value": false,
      "site": "007fbdc8",
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
            "const:f30:8"
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
      "007fbe20",
      "DATA",
      [
        "storage",
        "00c7cf30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fbe20",
      "DATA",
      [
        "storage",
        "00c7d000",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fbdb4 ["INT_ADD", "register:40f0:8", ["const:7fbdb4:8", "const:4:8"]]
- 007fbdb4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fbe0c ["INT_ADD", "register:40f0:8", ["const:7fbe0c:8", "const:4:8"]]
+ 007fbe0c ["CALL", null, ["callee:00c57f60:8"]]
- 007fbdc0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fbe18 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fbdc4 ["COPY", "tmp:0:8", ["const:f30:8"]]
- 007fbdc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fbdc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fbdc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fbe1c ["COPY", "tmp:0:8", ["const:0:8"]]
+ 007fbe1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fbe1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fbe1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-43c61e5389fc610cf29b706379ed8330"></a>

### [`007fbde0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fbde0.md) → [`007fbe38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbe38.md) FUN_007fbe38

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
    "old": {
      "definition_site": "007fbde4",
      "incomplete_value": false,
      "site": "007fbde8",
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
            "const:f30:8"
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
      "007fbe40",
      "DATA",
      [
        "storage",
        "00c7cf30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007fbe40",
      "DATA",
      [
        "storage",
        "00c7d000",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007fbde0 ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fbe38 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fbde4 ["COPY", "tmp:0:8", ["const:f30:8"]]
- 007fbde4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fbde4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fbde4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fbe3c ["COPY", "tmp:0:8", ["const:0:8"]]
+ 007fbe3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fbe3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fbe3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f331d2c5f3c921cc935b38a77af0f32f"></a>

### [`007fbe08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fbe08.md) → [`007fbe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbe60.md) FUN_007fbe60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00743d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/00743d90.md) [`00743e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/00743e5c.md) [`00744f74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744f74.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00743de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743de8.md) [`00743eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743eb4.md) [`00744fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744fcc.md)

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
      "site": "007fbea4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fbe4c",
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
      "site": "007fbec4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007fbe6c",
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
      "007fbea4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "007fbec4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "007fbea4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "007fbec4",
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
- 007fbe4c ["INT_ADD", "register:40f0:8", ["const:7fbe4c:8", "const:4:8"]]
- 007fbe4c ["CALL", null, ["ram:47acf4:8"]]
+ 007fbea4 ["INT_ADD", "register:40f0:8", ["const:7fbea4:8", "const:4:8"]]
+ 007fbea4 ["CALL", null, ["ram:47ad34:8"]]
- 007fbe6c ["INT_ADD", "register:40f0:8", ["const:7fbe6c:8", "const:4:8"]]
- 007fbe6c ["CALL", null, ["ram:47acf4:8"]]
+ 007fbec4 ["INT_ADD", "register:40f0:8", ["const:7fbec4:8", "const:4:8"]]
+ 007fbec4 ["CALL", null, ["ram:47ad34:8"]]
- 007fbea4 ["INT_ADD", "register:40f0:8", ["const:7fbea4:8", "const:4:8"]]
- 007fbea4 ["CALL", null, ["callee:008bb568:8"]]
+ 007fbefc ["INT_ADD", "register:40f0:8", ["const:7fbefc:8", "const:4:8"]]
+ 007fbefc ["CALL", null, ["callee:008bb568:8"]]
~~~


<a id="compare-72fb90cd731b224212b7dfb0e908aff9"></a>

### [`007fc020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc020.md) → [`007fc078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc078.md) FUN_007fc078

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 0件 
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 0件 

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "007fc030",
      "incomplete_value": true,
      "site": "007fc034",
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
- 007fc028 ["COPY", "tmp:0:8", ["const:97b:8"]]
- 007fc028 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007fc028 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007fc028 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007fc080 ["COPY", "tmp:0:8", ["const:9bb:8"]]
+ 007fc080 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc080 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007fc080 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2be65242eb95bb4f8c60dbf04d7cf604"></a>

### [`007fc04c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fc/007fc04c.md) → [`007fc0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fc/007fc0a4.md) FUN_007fc0a4

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
    "old": {
      "definition_site": "007fc060",
      "incomplete_value": false,
      "site": "007fc064",
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
      "007fc0bc",
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
      "007fc0bc",
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
- 007fc058 ["INT_ADD", "register:40f0:8", ["const:7fc058:8", "const:4:8"]]
- 007fc058 ["CALL", null, ["callee:00c57f60:8"]]
+ 007fc0b0 ["INT_ADD", "register:40f0:8", ["const:7fc0b0:8", "const:4:8"]]
+ 007fc0b0 ["CALL", null, ["callee:00c57f60:8"]]
- 007fc05c ["COPY", "register:4040:8", ["const:c7c000:8"]]
+ 007fc0b4 ["COPY", "register:4040:8", ["const:c7d000:8"]]
- 007fc060 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 007fc060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007fc060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007fc060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007fc0b8 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 007fc0b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007fc0b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


