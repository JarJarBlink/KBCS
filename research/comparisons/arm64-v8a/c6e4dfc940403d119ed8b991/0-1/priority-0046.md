# v16.0.1 → v16.0.2 · 最優先の変更候補 (46)

[一覧の目次](README.md)

<a id="compare-7858d19a5bc04aae8a978afc1f74bba9"></a>

### [`00830ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830ab0.md) → [`00830b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830b08.md) FUN_00830b08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0082467c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00824/0082467c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`008246d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00824/008246d4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00830b14",
      "incomplete_value": false,
      "site": "00830b18",
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
      "definition_site": "00830abc",
      "incomplete_value": false,
      "site": "00830ac0",
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
      "00830b14",
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
      "00830b14",
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
- 00830ac0 ["INT_ADD", "register:40f0:8", ["const:830ac0:8", "const:4:8"]]
- 00830ac0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00830b18 ["INT_ADD", "register:40f0:8", ["const:830b18:8", "const:4:8"]]
+ 00830b18 ["CALL", null, ["callee:0043b7b8:8"]]
- 00830abc ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00830abc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00830abc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00830abc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00830b14 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00830b14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00830b14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00830b14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-240606b3196e5468c79c7307ec01b3a6"></a>

### [`00830ac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830ac8.md) → [`00830b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830b20.md) FUN_00830b20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00830b44",
      "incomplete_value": true,
      "site": "00830b48",
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
            "const:608:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830aec",
      "incomplete_value": true,
      "site": "00830af0",
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
            "const:538:8"
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
      "00830b48",
      "DATA",
      [
        "storage",
        "00c7e538",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830b48",
      "DATA",
      [
        "storage",
        "00c7e608",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830adc ["INT_ADD", "register:40f0:8", ["const:830adc:8", "const:4:8"]]
- 00830adc ["CALL", null, ["callee:00c57f60:8"]]
+ 00830b34 ["INT_ADD", "register:40f0:8", ["const:830b34:8", "const:4:8"]]
+ 00830b34 ["CALL", null, ["callee:00c57f60:8"]]
- 00830aec ["COPY", "tmp:0:8", ["const:538:8"]]
- 00830aec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00830aec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00830aec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00830b44 ["COPY", "tmp:0:8", ["const:608:8"]]
+ 00830b44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00830b44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00830b44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d7aa424a7b4ec3e904b70318b56a9cd8"></a>

### [`00830b08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830b08.md) → [`00830b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830b60.md) FUN_00830b60

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
      "definition_site": "00830b64",
      "incomplete_value": false,
      "site": "00830b68",
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
            "const:608:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830b0c",
      "incomplete_value": false,
      "site": "00830b10",
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
            "const:538:8"
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
      "00830b68",
      "DATA",
      [
        "storage",
        "00c7e538",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830b68",
      "DATA",
      [
        "storage",
        "00c7e608",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830b0c ["COPY", "tmp:0:8", ["const:538:8"]]
- 00830b0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00830b0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00830b0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00830b64 ["COPY", "tmp:0:8", ["const:608:8"]]
+ 00830b64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00830b64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00830b64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f75e7949bad28c34ff2f996b2c40eb5"></a>

### [`00830b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830b9c.md) → [`00830bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830bf4.md) FUN_00830bf4

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
      "definition_site": "00830c18",
      "incomplete_value": false,
      "site": "00830c18",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830bc0",
      "incomplete_value": false,
      "site": "00830bc0",
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
            "const:5b8:8"
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
      "00830c18",
      "DATA",
      [
        "storage",
        "00c7e5b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830c18",
      "DATA",
      [
        "storage",
        "00c7e688",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830bb0 ["INT_ADD", "register:40f0:8", ["const:830bb0:8", "const:4:8"]]
- 00830bb0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00830c08 ["INT_ADD", "register:40f0:8", ["const:830c08:8", "const:4:8"]]
+ 00830c08 ["CALL", null, ["callee:00c57f60:8"]]
- 00830bbc ["COPY", "tmp:0:8", ["const:5b8:8"]]
- 00830bbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00830bbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00830bbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00830c14 ["COPY", "tmp:0:8", ["const:688:8"]]
+ 00830c14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00830c14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00830c14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a00347022c7174d7936ae80d518da17"></a>

### [`00830bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830bd0.md) → [`00830c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830c28.md) FUN_00830c28

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
      "definition_site": "00830c34",
      "incomplete_value": false,
      "site": "00830c34",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830bdc",
      "incomplete_value": false,
      "site": "00830bdc",
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
            "const:5b8:8"
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
      "00830c34",
      "DATA",
      [
        "storage",
        "00c7e5b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830c34",
      "DATA",
      [
        "storage",
        "00c7e688",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830bd8 ["COPY", "tmp:0:8", ["const:5b8:8"]]
- 00830bd8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00830bd8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00830bd8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00830c30 ["COPY", "tmp:0:8", ["const:688:8"]]
+ 00830c30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00830c30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00830c30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-71ca1545f253bc6e3807fe37d5ec772f"></a>

### [`00830c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830c78.md) → [`00830cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830cd0.md) FUN_00830cd0

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
      "definition_site": "00830cdc",
      "incomplete_value": false,
      "site": "00830ce8",
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
            "const:708:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830c84",
      "incomplete_value": false,
      "site": "00830c90",
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
            "const:638:8"
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
      "00830ce8",
      "DATA",
      [
        "storage",
        "00c7e638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830ce8",
      "DATA",
      [
        "storage",
        "00c7e708",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830c84 ["COPY", "tmp:0:8", ["const:638:8"]]
- 00830c84 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00830c84 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00830c84 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00830cdc ["COPY", "tmp:0:8", ["const:708:8"]]
+ 00830cdc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00830cdc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00830cdc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-ad88c1acb457ddd8ff68e082d1f73879"></a>

### [`00830cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830cbc.md) → [`00830d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830d14.md) FUN_00830d14

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
      "definition_site": "00830d2c",
      "incomplete_value": false,
      "site": "00830d38",
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
            "const:708:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830cd4",
      "incomplete_value": false,
      "site": "00830ce0",
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
            "const:638:8"
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
      "00830d38",
      "DATA",
      [
        "storage",
        "00c7e638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830d38",
      "DATA",
      [
        "storage",
        "00c7e708",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830cd4 ["COPY", "tmp:0:8", ["const:638:8"]]
- 00830cd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00830cd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00830cd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00830d2c ["COPY", "tmp:0:8", ["const:708:8"]]
+ 00830d2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00830d2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00830d2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00830d04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00830d04 ["INT_ADD", "register:40f0:8", ["const:830d04:8", "const:4:8"]]
- 00830d04 ["CALLIND", null, ["register:0:8"]]
+ 00830d5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00830d5c ["INT_ADD", "register:40f0:8", ["const:830d5c:8", "const:4:8"]]
+ 00830d5c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-32f7a75c1fd190811bc5c2f68c82b9e2"></a>

### [`00830d18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830d18.md) → [`00830d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830d70.md) FUN_00830d70

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
      "definition_site": "00830d9c",
      "incomplete_value": false,
      "site": "00830d9c",
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
            "const:708:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830d44",
      "incomplete_value": false,
      "site": "00830d44",
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
            "const:638:8"
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
      "00830d9c",
      "DATA",
      [
        "storage",
        "00c7e638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830d9c",
      "DATA",
      [
        "storage",
        "00c7e708",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830d2c ["INT_ADD", "register:40f0:8", ["const:830d2c:8", "const:4:8"]]
- 00830d2c ["CALL", null, ["callee:00c57f60:8"]]
+ 00830d84 ["INT_ADD", "register:40f0:8", ["const:830d84:8", "const:4:8"]]
+ 00830d84 ["CALL", null, ["callee:00c57f60:8"]]
- 00830d3c ["COPY", "tmp:0:8", ["const:638:8"]]
- 00830d3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00830d3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00830d3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00830d94 ["COPY", "tmp:0:8", ["const:708:8"]]
+ 00830d94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00830d94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00830d94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00830d60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00830d60 ["INT_ADD", "register:40f0:8", ["const:830d60:8", "const:4:8"]]
- 00830d60 ["CALLIND", null, ["register:0:8"]]
+ 00830db8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00830db8 ["INT_ADD", "register:40f0:8", ["const:830db8:8", "const:4:8"]]
+ 00830db8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9a5ac77455b7f3f88948ea51c86a0717"></a>

### [`00830da0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830da0.md) → [`00830df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830df8.md) FUN_00830df8

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
      "definition_site": "00830e14",
      "incomplete_value": false,
      "site": "00830e14",
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
            "const:708:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830dbc",
      "incomplete_value": false,
      "site": "00830dbc",
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
            "const:638:8"
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
      "00830e14",
      "DATA",
      [
        "storage",
        "00c7e638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830e14",
      "DATA",
      [
        "storage",
        "00c7e708",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830db8 ["COPY", "tmp:0:8", ["const:638:8"]]
- 00830db8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00830db8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00830db8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00830e10 ["COPY", "tmp:0:8", ["const:708:8"]]
+ 00830e10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00830e10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00830e10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00830ddc ["COPY", "register:0:8", ["register:4048:8"]]
- 00830ddc ["INT_ADD", "register:40f0:8", ["const:830ddc:8", "const:4:8"]]
- 00830ddc ["CALLIND", null, ["register:0:8"]]
+ 00830e34 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00830e34 ["INT_ADD", "register:40f0:8", ["const:830e34:8", "const:4:8"]]
+ 00830e34 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5fdc0c1e5936ac7a21a24e1ae8d77363"></a>

### [`00830e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830e9c.md) → [`00830ef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830ef4.md) FUN_00830ef4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00acacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aca/00acacc8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00acad38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acad38.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00830f1c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00830ec4",
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
      "00830f1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00830f1c",
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
- 00830ec4 ["INT_ADD", "register:40f0:8", ["const:830ec4:8", "const:4:8"]]
- 00830ec4 ["CALL", null, ["ram:47acf4:8"]]
+ 00830f1c ["INT_ADD", "register:40f0:8", ["const:830f1c:8", "const:4:8"]]
+ 00830f1c ["CALL", null, ["ram:47ad34:8"]]
- 00830ed0 ["INT_ADD", "register:40f0:8", ["const:830ed0:8", "const:4:8"]]
- 00830ed0 ["CALL", null, ["callee:0047ce14:8"]]
+ 00830f28 ["INT_ADD", "register:40f0:8", ["const:830f28:8", "const:4:8"]]
+ 00830f28 ["CALL", null, ["callee:0047ce14:8"]]
- 00830ef4 ["INT_ADD", "register:40f0:8", ["const:830ef4:8", "const:4:8"]]
- 00830ef4 ["CALL", null, ["callee:00851550:8"]]
+ 00830f4c ["INT_ADD", "register:40f0:8", ["const:830f4c:8", "const:4:8"]]
+ 00830f4c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f3065836b5490c338e0135feb6cac1c0"></a>

### [`00830f44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830f44.md) → [`00830f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830f9c.md) FUN_00830f9c

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
      "definition_site": "00830fa8",
      "incomplete_value": false,
      "site": "00830fb4",
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
            "const:788:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830f50",
      "incomplete_value": false,
      "site": "00830f5c",
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
            "const:6b8:8"
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
      "00830fb4",
      "DATA",
      [
        "storage",
        "00c7e6b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00830fb4",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830f50 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00830f50 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00830f50 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00830f50 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00830fa8 ["COPY", "tmp:0:8", ["const:788:8"]]
+ 00830fa8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00830fa8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00830fa8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-c9bdab91f679b9ce9752103ee64e930d"></a>

### [`00830f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830f88.md) → [`00830fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830fe0.md) FUN_00830fe0

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
      "definition_site": "00830ff8",
      "incomplete_value": false,
      "site": "00831004",
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
            "const:788:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00830fa0",
      "incomplete_value": false,
      "site": "00830fac",
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
            "const:6b8:8"
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
      "00831004",
      "DATA",
      [
        "storage",
        "00c7e6b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831004",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830fa0 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00830fa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00830fa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00830fa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00830ff8 ["COPY", "tmp:0:8", ["const:788:8"]]
+ 00830ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00830ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00830ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00830fd0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00830fd0 ["INT_ADD", "register:40f0:8", ["const:830fd0:8", "const:4:8"]]
- 00830fd0 ["CALLIND", null, ["register:0:8"]]
+ 00831028 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00831028 ["INT_ADD", "register:40f0:8", ["const:831028:8", "const:4:8"]]
+ 00831028 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b5e30980af5b37c33956e6f250bd972e"></a>

### [`00830fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00830/00830fe4.md) → [`0083103c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083103c.md) FUN_0083103c

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
      "definition_site": "00831068",
      "incomplete_value": false,
      "site": "00831068",
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
            "const:788:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831010",
      "incomplete_value": false,
      "site": "00831010",
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
            "const:6b8:8"
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
      "00831068",
      "DATA",
      [
        "storage",
        "00c7e6b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831068",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00830ff8 ["INT_ADD", "register:40f0:8", ["const:830ff8:8", "const:4:8"]]
- 00830ff8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00831050 ["INT_ADD", "register:40f0:8", ["const:831050:8", "const:4:8"]]
+ 00831050 ["CALL", null, ["callee:00c57f60:8"]]
- 00831008 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00831008 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831008 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831008 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00831060 ["COPY", "tmp:0:8", ["const:788:8"]]
+ 00831060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00831060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00831060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0083102c ["COPY", "register:0:8", ["register:4040:8"]]
- 0083102c ["INT_ADD", "register:40f0:8", ["const:83102c:8", "const:4:8"]]
- 0083102c ["CALLIND", null, ["register:0:8"]]
+ 00831084 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00831084 ["INT_ADD", "register:40f0:8", ["const:831084:8", "const:4:8"]]
+ 00831084 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-37a76425cf70a9756027312bf8fa0e9a"></a>

### [`0083106c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/0083106c.md) → [`008310c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008310c4.md) FUN_008310c4

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
      "definition_site": "008310e0",
      "incomplete_value": false,
      "site": "008310e0",
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
            "const:788:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831088",
      "incomplete_value": false,
      "site": "00831088",
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
            "const:6b8:8"
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
      "008310e0",
      "DATA",
      [
        "storage",
        "00c7e6b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008310e0",
      "DATA",
      [
        "storage",
        "00c7e788",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831084 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00831084 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831084 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831084 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008310dc ["COPY", "tmp:0:8", ["const:788:8"]]
+ 008310dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008310dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008310dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008310a8 ["COPY", "register:0:8", ["register:4048:8"]]
- 008310a8 ["INT_ADD", "register:40f0:8", ["const:8310a8:8", "const:4:8"]]
- 008310a8 ["CALLIND", null, ["register:0:8"]]
+ 00831100 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00831100 ["INT_ADD", "register:40f0:8", ["const:831100:8", "const:4:8"]]
+ 00831100 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-59f7831a058ac044fa6a7c63cebe4870"></a>

### [`00831168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831168.md) → [`008311c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008311c0.md) FUN_008311c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008311e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831190",
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
      "008311e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008311e8",
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
- 00831190 ["INT_ADD", "register:40f0:8", ["const:831190:8", "const:4:8"]]
- 00831190 ["CALL", null, ["ram:47acf4:8"]]
+ 008311e8 ["INT_ADD", "register:40f0:8", ["const:8311e8:8", "const:4:8"]]
+ 008311e8 ["CALL", null, ["ram:47ad34:8"]]
- 0083119c ["INT_ADD", "register:40f0:8", ["const:83119c:8", "const:4:8"]]
- 0083119c ["CALL", null, ["callee:0047ce14:8"]]
+ 008311f4 ["INT_ADD", "register:40f0:8", ["const:8311f4:8", "const:4:8"]]
+ 008311f4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-3af18f760fd387ebc2a2acc3491c3b9e"></a>

### [`008311e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008311e0.md) → [`00831238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831238.md) FUN_00831238

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
      "definition_site": "0083125c",
      "incomplete_value": false,
      "site": "0083125c",
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
            "const:808:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831204",
      "incomplete_value": false,
      "site": "00831204",
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
            "const:738:8"
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
      "0083125c",
      "DATA",
      [
        "storage",
        "00c7e738",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083125c",
      "DATA",
      [
        "storage",
        "00c7e808",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008311f4 ["INT_ADD", "register:40f0:8", ["const:8311f4:8", "const:4:8"]]
- 008311f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0083124c ["INT_ADD", "register:40f0:8", ["const:83124c:8", "const:4:8"]]
+ 0083124c ["CALL", null, ["callee:00c57f60:8"]]
- 00831200 ["COPY", "tmp:0:8", ["const:738:8"]]
- 00831200 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831200 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831200 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00831258 ["COPY", "tmp:0:8", ["const:808:8"]]
+ 00831258 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00831258 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00831258 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e30c141e583e8081e3114df4365bc898"></a>

### [`00831214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831214.md) → [`0083126c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083126c.md) FUN_0083126c

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
      "definition_site": "00831278",
      "incomplete_value": false,
      "site": "00831278",
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
            "const:808:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831220",
      "incomplete_value": false,
      "site": "00831220",
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
            "const:738:8"
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
      "00831278",
      "DATA",
      [
        "storage",
        "00c7e738",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831278",
      "DATA",
      [
        "storage",
        "00c7e808",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083121c ["COPY", "tmp:0:8", ["const:738:8"]]
- 0083121c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0083121c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0083121c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00831274 ["COPY", "tmp:0:8", ["const:808:8"]]
+ 00831274 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00831274 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00831274 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e15365cc6ee19a4abb0846bc1a5fd5af"></a>

### [`00831230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831230.md) → [`00831288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831288.md) FUN_00831288

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
      "site": "008312ac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831254",
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
      "008312ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008312ac",
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
- 00831254 ["INT_ADD", "register:40f0:8", ["const:831254:8", "const:4:8"]]
- 00831254 ["CALL", null, ["ram:47acf4:8"]]
+ 008312ac ["INT_ADD", "register:40f0:8", ["const:8312ac:8", "const:4:8"]]
+ 008312ac ["CALL", null, ["ram:47ad34:8"]]
- 00831260 ["INT_ADD", "register:40f0:8", ["const:831260:8", "const:4:8"]]
- 00831260 ["CALL", null, ["callee:0047ce14:8"]]
+ 008312b8 ["INT_ADD", "register:40f0:8", ["const:8312b8:8", "const:4:8"]]
+ 008312b8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-ec2000498b9937007b7fa41bf879497a"></a>

### [`008312a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008312a4.md) → [`008312fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008312fc.md) FUN_008312fc

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
      "definition_site": "00831320",
      "incomplete_value": false,
      "site": "00831320",
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
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008312c8",
      "incomplete_value": false,
      "site": "008312c8",
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
            "const:7b8:8"
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
      "00831320",
      "DATA",
      [
        "storage",
        "00c7e7b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831320",
      "DATA",
      [
        "storage",
        "00c7e888",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008312b8 ["INT_ADD", "register:40f0:8", ["const:8312b8:8", "const:4:8"]]
- 008312b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00831310 ["INT_ADD", "register:40f0:8", ["const:831310:8", "const:4:8"]]
+ 00831310 ["CALL", null, ["callee:00c57f60:8"]]
- 008312c4 ["COPY", "tmp:0:8", ["const:7b8:8"]]
- 008312c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008312c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008312c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0083131c ["COPY", "tmp:0:8", ["const:888:8"]]
+ 0083131c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0083131c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0083131c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2887589fb7bed137ca4c29e3a115f5b6"></a>

### [`008312d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008312d8.md) → [`00831330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831330.md) FUN_00831330

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
      "definition_site": "0083133c",
      "incomplete_value": false,
      "site": "0083133c",
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
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008312e4",
      "incomplete_value": false,
      "site": "008312e4",
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
            "const:7b8:8"
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
      "0083133c",
      "DATA",
      [
        "storage",
        "00c7e7b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083133c",
      "DATA",
      [
        "storage",
        "00c7e888",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008312e0 ["COPY", "tmp:0:8", ["const:7b8:8"]]
- 008312e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008312e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008312e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00831338 ["COPY", "tmp:0:8", ["const:888:8"]]
+ 00831338 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00831338 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00831338 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f639f16420e51f95bb23d7a70218f891"></a>

### [`008312f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008312f4.md) → [`0083134c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083134c.md) FUN_0083134c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 20件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0081fdc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0081f/0081fdc8.md) [`0082907c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00829/0082907c.md)
- 新版 呼出元 0件  · 呼出先 20件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0081fe20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081f/0081fe20.md) [`008290d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00829/008290d4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.06% / 新版 93.06%

優先判定に残った影響 `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00831424",
      "incomplete_value": true,
      "site": "00831434",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008313cc",
      "incomplete_value": true,
      "site": "008313dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6d:8"
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
      "definition_site": "00831438",
      "incomplete_value": true,
      "site": "00831438",
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
      "definition_site": "008313e0",
      "incomplete_value": true,
      "site": "008313e0",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0083142c",
      "incomplete_value": true,
      "site": "0083143c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "008313d4",
      "incomplete_value": true,
      "site": "008313e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:450:8"
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
      "00831390",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00831424",
      "READ",
      [
        "storage",
        "002b406d",
        null,
        "string"
      ]
    ],
    [
      "00831428",
      "READ",
      [
        "storage",
        "002b407c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00831390",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00831424",
      "READ",
      [
        "storage",
        "002b409e",
        null,
        "string"
      ]
    ],
    [
      "00831428",
      "READ",
      [
        "storage",
        "002b40ad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831338 ["INT_ADD", "register:40f0:8", ["const:831338:8", "const:4:8"]]
- 00831338 ["CALL", null, ["ram:47acf4:8"]]
+ 00831390 ["INT_ADD", "register:40f0:8", ["const:831390:8", "const:4:8"]]
+ 00831390 ["CALL", null, ["ram:47ad34:8"]]
- 00831388 ["INT_ADD", "register:40f0:8", ["const:831388:8", "const:4:8"]]
- 00831388 ["CALL", null, ["callee:0081fe20:8"]]
+ 008313e0 ["INT_ADD", "register:40f0:8", ["const:8313e0:8", "const:4:8"]]
+ 008313e0 ["CALL", null, ["callee:0081fe20:8"]]
- 0083138c ["INT_ADD", "register:40f0:8", ["const:83138c:8", "const:4:8"]]
- 0083138c ["CALL", null, ["callee:00851550:8"]]
+ 008313e4 ["INT_ADD", "register:40f0:8", ["const:8313e4:8", "const:4:8"]]
+ 008313e4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c316797a3bb7cb87c45e4f1455415e3c"></a>

### [`008316cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008316cc.md) → [`00831724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831724.md) FUN_00831724

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
      "definition_site": "00831748",
      "incomplete_value": false,
      "site": "00831748",
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
            "const:8f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008316f0",
      "incomplete_value": false,
      "site": "008316f0",
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
            "const:828:8"
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
      "00831748",
      "DATA",
      [
        "storage",
        "00c7e828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831748",
      "DATA",
      [
        "storage",
        "00c7e8f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008316e0 ["INT_ADD", "register:40f0:8", ["const:8316e0:8", "const:4:8"]]
- 008316e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00831738 ["INT_ADD", "register:40f0:8", ["const:831738:8", "const:4:8"]]
+ 00831738 ["CALL", null, ["callee:00c57f60:8"]]
- 008316ec ["COPY", "tmp:0:8", ["const:828:8"]]
- 008316ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008316ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008316ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00831744 ["COPY", "tmp:0:8", ["const:8f8:8"]]
+ 00831744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00831744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00831744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ee9a4a173f7aff2b6c16d82b8c82cfb5"></a>

### [`00831700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831700.md) → [`00831758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831758.md) FUN_00831758

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
      "definition_site": "00831764",
      "incomplete_value": false,
      "site": "00831764",
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
            "const:8f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083170c",
      "incomplete_value": false,
      "site": "0083170c",
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
      "00831764",
      "DATA",
      [
        "storage",
        "00c7e828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831764",
      "DATA",
      [
        "storage",
        "00c7e8f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831708 ["COPY", "tmp:0:8", ["const:828:8"]]
- 00831708 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831708 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831708 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00831760 ["COPY", "tmp:0:8", ["const:8f8:8"]]
+ 00831760 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00831760 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00831760 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-521d0701f3aec5e18132bcf7c65b47b9"></a>

### [`0083171c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/0083171c.md) → [`00831774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831774.md) FUN_00831774

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
      "site": "00831798",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831740",
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
      "00831798",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00831798",
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
- 00831740 ["INT_ADD", "register:40f0:8", ["const:831740:8", "const:4:8"]]
- 00831740 ["CALL", null, ["ram:47acf4:8"]]
+ 00831798 ["INT_ADD", "register:40f0:8", ["const:831798:8", "const:4:8"]]
+ 00831798 ["CALL", null, ["ram:47ad34:8"]]
- 0083174c ["INT_ADD", "register:40f0:8", ["const:83174c:8", "const:4:8"]]
- 0083174c ["CALL", null, ["callee:0047ce14:8"]]
+ 008317a4 ["INT_ADD", "register:40f0:8", ["const:8317a4:8", "const:4:8"]]
+ 008317a4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-e951b47e88c770d80a02bb79532f9741"></a>

### [`0083178c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/0083178c.md) → [`008317e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008317e4.md) FUN_008317e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00829574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00829/00829574.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`008295cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00829/008295cc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008317f0",
      "incomplete_value": false,
      "site": "008317f4",
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
      "definition_site": "00831798",
      "incomplete_value": false,
      "site": "0083179c",
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
      "008317f0",
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
      "008317f0",
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
- 0083179c ["INT_ADD", "register:40f0:8", ["const:83179c:8", "const:4:8"]]
- 0083179c ["CALL", null, ["callee:00442970:8"]]
+ 008317f4 ["INT_ADD", "register:40f0:8", ["const:8317f4:8", "const:4:8"]]
+ 008317f4 ["CALL", null, ["callee:00442970:8"]]
- 00831798 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00831798 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00831798 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00831798 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008317f0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008317f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008317f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008317f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6ea917165d5fc338c8eb43c5cfc92bcf"></a>

### [`008317a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008317a4.md) → [`008317fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/008317fc.md) FUN_008317fc

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
      "definition_site": "00831820",
      "incomplete_value": false,
      "site": "00831820",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008317c8",
      "incomplete_value": false,
      "site": "008317c8",
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
            "const:8b8:8"
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
      "00831820",
      "DATA",
      [
        "storage",
        "00c7e8b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831820",
      "DATA",
      [
        "storage",
        "00c7e988",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008317b8 ["INT_ADD", "register:40f0:8", ["const:8317b8:8", "const:4:8"]]
- 008317b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00831810 ["INT_ADD", "register:40f0:8", ["const:831810:8", "const:4:8"]]
+ 00831810 ["CALL", null, ["callee:00c57f60:8"]]
- 008317c4 ["COPY", "tmp:0:8", ["const:8b8:8"]]
- 008317c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008317c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008317c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0083181c ["COPY", "tmp:0:8", ["const:988:8"]]
+ 0083181c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0083181c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0083181c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8a680ea2823ac1ea575282df0b959832"></a>

### [`008317d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008317d8.md) → [`00831830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831830.md) FUN_00831830

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
      "definition_site": "0083183c",
      "incomplete_value": false,
      "site": "0083183c",
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
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008317e4",
      "incomplete_value": false,
      "site": "008317e4",
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
            "const:8b8:8"
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
      "0083183c",
      "DATA",
      [
        "storage",
        "00c7e8b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083183c",
      "DATA",
      [
        "storage",
        "00c7e988",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008317e0 ["COPY", "tmp:0:8", ["const:8b8:8"]]
- 008317e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008317e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008317e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00831838 ["COPY", "tmp:0:8", ["const:988:8"]]
+ 00831838 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00831838 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00831838 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-22dae9038ebff1e43b3a37c262bda617"></a>

### [`008317f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/008317f4.md) → [`0083184c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/0083184c.md) FUN_0083184c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00826dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00826/00826dbc.md) [`008276c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00827/008276c0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00826e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00826/00826e14.md) [`00827718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00827/00827718.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.91% / 新版 98.91%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831884",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0083182c",
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
    "new": {
      "definition_site": "00831a30",
      "incomplete_value": false,
      "site": "00831a34",
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
      "definition_site": "008319d8",
      "incomplete_value": false,
      "site": "008319dc",
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
      "00831884",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00831a30",
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
      "00831884",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00831a30",
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
- 0083182c ["INT_ADD", "register:40f0:8", ["const:83182c:8", "const:4:8"]]
- 0083182c ["CALL", null, ["ram:47acf4:8"]]
+ 00831884 ["INT_ADD", "register:40f0:8", ["const:831884:8", "const:4:8"]]
+ 00831884 ["CALL", null, ["ram:47ad34:8"]]
- 008319dc ["INT_ADD", "register:40f0:8", ["const:8319dc:8", "const:4:8"]]
- 008319dc ["CALL", null, ["callee:00442970:8"]]
+ 00831a34 ["INT_ADD", "register:40f0:8", ["const:831a34:8", "const:4:8"]]
+ 00831a34 ["CALL", null, ["callee:00442970:8"]]
- 00831858 ["INT_ADD", "register:40f0:8", ["const:831858:8", "const:4:8"]]
- 00831858 ["CALL", null, ["callee:00851550:8"]]
+ 008318b0 ["INT_ADD", "register:40f0:8", ["const:8318b0:8", "const:4:8"]]
+ 008318b0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-fbb76573ea2b256baa14fac075d2e303"></a>

### [`00831ce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831ce8.md) → [`00831d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831d40.md) FUN_00831d40

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
      "definition_site": "00831d60",
      "incomplete_value": false,
      "site": "00831d64",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831d08",
      "incomplete_value": false,
      "site": "00831d0c",
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
            "const:938:8"
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
      "00831d64",
      "DATA",
      [
        "storage",
        "00c7e938",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831d64",
      "DATA",
      [
        "storage",
        "00c7ea08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831cfc ["INT_ADD", "register:40f0:8", ["const:831cfc:8", "const:4:8"]]
- 00831cfc ["CALL", null, ["callee:00c57f60:8"]]
+ 00831d54 ["INT_ADD", "register:40f0:8", ["const:831d54:8", "const:4:8"]]
+ 00831d54 ["CALL", null, ["callee:00c57f60:8"]]
- 00831d08 ["COPY", "tmp:0:8", ["const:938:8"]]
- 00831d08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831d08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831d08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00831d60 ["COPY", "tmp:0:8", ["const:a08:8"]]
+ 00831d60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00831d60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00831d60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0efde19d2b733b5d110d8f6fb8052a3"></a>

### [`00831d20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831d20.md) → [`00831d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831d78.md) FUN_00831d78

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
      "definition_site": "00831d7c",
      "incomplete_value": false,
      "site": "00831d80",
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
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831d24",
      "incomplete_value": false,
      "site": "00831d28",
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
            "const:938:8"
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
      "00831d80",
      "DATA",
      [
        "storage",
        "00c7e938",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831d80",
      "DATA",
      [
        "storage",
        "00c7ea08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831d24 ["COPY", "tmp:0:8", ["const:938:8"]]
- 00831d24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831d24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831d24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00831d7c ["COPY", "tmp:0:8", ["const:a08:8"]]
+ 00831d7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00831d7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00831d7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f3616bcff310af031785dbf764177183"></a>

### [`00831d40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831d40.md) → [`00831d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831d98.md) FUN_00831d98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0082c864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082c/0082c864.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c8bc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.30% / 新版 97.30%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831dc0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831d68",
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
      "site": "00831dcc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831d74",
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
      "00831dc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00831dcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00831dc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00831dcc",
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
- 00831d68 ["INT_ADD", "register:40f0:8", ["const:831d68:8", "const:4:8"]]
- 00831d68 ["CALL", null, ["ram:47acf4:8"]]
+ 00831dc0 ["INT_ADD", "register:40f0:8", ["const:831dc0:8", "const:4:8"]]
+ 00831dc0 ["CALL", null, ["ram:47ad34:8"]]
- 00831d74 ["INT_ADD", "register:40f0:8", ["const:831d74:8", "const:4:8"]]
- 00831d74 ["CALL", null, ["ram:47acf4:8"]]
+ 00831dcc ["INT_ADD", "register:40f0:8", ["const:831dcc:8", "const:4:8"]]
+ 00831dcc ["CALL", null, ["ram:47ad34:8"]]
- 00831dcc ["INT_ADD", "register:40f0:8", ["const:831dcc:8", "const:4:8"]]
- 00831dcc ["CALL", null, ["callee:00851550:8"]]
+ 00831e24 ["INT_ADD", "register:40f0:8", ["const:831e24:8", "const:4:8"]]
+ 00831e24 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d1c3a4024d2f19ab2c69b9d353ef9b34"></a>

### [`00831e94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831e94.md) → [`00831eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831eec.md) FUN_00831eec

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
      "definition_site": "00831f10",
      "incomplete_value": false,
      "site": "00831f10",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831eb8",
      "incomplete_value": false,
      "site": "00831eb8",
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
            "const:9b8:8"
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
      "00831f10",
      "DATA",
      [
        "storage",
        "00c7e9b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831f10",
      "DATA",
      [
        "storage",
        "00c7ea88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831ea8 ["INT_ADD", "register:40f0:8", ["const:831ea8:8", "const:4:8"]]
- 00831ea8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00831f00 ["INT_ADD", "register:40f0:8", ["const:831f00:8", "const:4:8"]]
+ 00831f00 ["CALL", null, ["callee:00c57f60:8"]]
- 00831eb4 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 00831eb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831eb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831eb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00831f0c ["COPY", "tmp:0:8", ["const:a88:8"]]
+ 00831f0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00831f0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00831f0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e004005325d05d775dfb7c2eecd32eb2"></a>

### [`00831ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831ec8.md) → [`00831f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831f20.md) FUN_00831f20

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
      "definition_site": "00831f2c",
      "incomplete_value": false,
      "site": "00831f2c",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831ed4",
      "incomplete_value": false,
      "site": "00831ed4",
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
            "const:9b8:8"
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
      "00831f2c",
      "DATA",
      [
        "storage",
        "00c7e9b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00831f2c",
      "DATA",
      [
        "storage",
        "00c7ea88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831ed0 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 00831ed0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831ed0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831ed0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00831f28 ["COPY", "tmp:0:8", ["const:a88:8"]]
+ 00831f28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00831f28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00831f28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-13f9a05dccb4e26f74584e86782a3647"></a>

### [`00831ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831ee4.md) → [`00831f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831f3c.md) FUN_00831f3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0082c864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082c/0082c864.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468d8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c8bc.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831f60",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831f08",
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
      "site": "00831f6c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00831f14",
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
      "00831f60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00831f6c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00831f60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00831f6c",
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
- 00831f08 ["INT_ADD", "register:40f0:8", ["const:831f08:8", "const:4:8"]]
- 00831f08 ["CALL", null, ["ram:47acf4:8"]]
+ 00831f60 ["INT_ADD", "register:40f0:8", ["const:831f60:8", "const:4:8"]]
+ 00831f60 ["CALL", null, ["ram:47ad34:8"]]
- 00831f14 ["INT_ADD", "register:40f0:8", ["const:831f14:8", "const:4:8"]]
- 00831f14 ["CALL", null, ["ram:47acf4:8"]]
+ 00831f6c ["INT_ADD", "register:40f0:8", ["const:831f6c:8", "const:4:8"]]
+ 00831f6c ["CALL", null, ["ram:47ad34:8"]]
- 00831f40 ["INT_ADD", "register:40f0:8", ["const:831f40:8", "const:4:8"]]
- 00831f40 ["CALL", null, ["callee:008b6efc:8"]]
+ 00831f98 ["INT_ADD", "register:40f0:8", ["const:831f98:8", "const:4:8"]]
+ 00831f98 ["CALL", null, ["callee:008b6efc:8"]]
~~~


<a id="compare-95957b901dbca356af364e031a91ea6e"></a>

### [`00831fa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831fa4.md) → [`00831ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831ffc.md) FUN_00831ffc

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
      "definition_site": "00832020",
      "incomplete_value": false,
      "site": "00832020",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831fc8",
      "incomplete_value": false,
      "site": "00831fc8",
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
            "const:a38:8"
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
      "00832020",
      "DATA",
      [
        "storage",
        "00c7ea38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832020",
      "DATA",
      [
        "storage",
        "00c7eb08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831fb8 ["INT_ADD", "register:40f0:8", ["const:831fb8:8", "const:4:8"]]
- 00831fb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00832010 ["INT_ADD", "register:40f0:8", ["const:832010:8", "const:4:8"]]
+ 00832010 ["CALL", null, ["callee:00c57f60:8"]]
- 00831fc4 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00831fc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00831fc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00831fc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0083201c ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 0083201c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0083201c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0083201c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6f7db30b8fc0a6e427db88c434c1bc18"></a>

### [`00831fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831fd8.md) → [`00832030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/00832030.md) FUN_00832030

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
      "definition_site": "0083203c",
      "incomplete_value": false,
      "site": "0083203c",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00831fe4",
      "incomplete_value": false,
      "site": "00831fe4",
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
            "const:a38:8"
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
      "0083203c",
      "DATA",
      [
        "storage",
        "00c7ea38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083203c",
      "DATA",
      [
        "storage",
        "00c7eb08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00831fe0 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00831fe0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00831fe0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00831fe0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00832038 ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 00832038 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00832038 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00832038 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c8dea733c1f9b2fcab55a1e4bdf6dcaa"></a>

### [`00831ff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00831/00831ff4.md) → [`0083204c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083204c.md) FUN_0083204c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0082d290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082d/0082d290.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082d2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082d/0082d2e8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

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
      "site": "0083206c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832014",
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
      "site": "00832078",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00832020",
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
      "0083206c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00832078",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0083206c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00832078",
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
- 00832014 ["INT_ADD", "register:40f0:8", ["const:832014:8", "const:4:8"]]
- 00832014 ["CALL", null, ["ram:47acf4:8"]]
+ 0083206c ["INT_ADD", "register:40f0:8", ["const:83206c:8", "const:4:8"]]
+ 0083206c ["CALL", null, ["ram:47ad34:8"]]
- 00832020 ["INT_ADD", "register:40f0:8", ["const:832020:8", "const:4:8"]]
- 00832020 ["CALL", null, ["ram:47acf4:8"]]
+ 00832078 ["INT_ADD", "register:40f0:8", ["const:832078:8", "const:4:8"]]
+ 00832078 ["CALL", null, ["ram:47ad34:8"]]
- 00832034 ["INT_ADD", "register:40f0:8", ["const:832034:8", "const:4:8"]]
- 00832034 ["CALL", null, ["callee:00851550:8"]]
+ 0083208c ["INT_ADD", "register:40f0:8", ["const:83208c:8", "const:4:8"]]
+ 0083208c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-27f2e2e65639b4038cf3b9a62ff1d932"></a>

### [`00832084`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00832/00832084.md) → [`008320dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/008320dc.md) FUN_008320dc

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
      "definition_site": "00832100",
      "incomplete_value": false,
      "site": "00832100",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008320a8",
      "incomplete_value": false,
      "site": "008320a8",
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
            "const:ab8:8"
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
      "00832100",
      "DATA",
      [
        "storage",
        "00c7eab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00832100",
      "DATA",
      [
        "storage",
        "00c7eb88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00832098 ["INT_ADD", "register:40f0:8", ["const:832098:8", "const:4:8"]]
- 00832098 ["CALL", null, ["callee:00c57f60:8"]]
+ 008320f0 ["INT_ADD", "register:40f0:8", ["const:8320f0:8", "const:4:8"]]
+ 008320f0 ["CALL", null, ["callee:00c57f60:8"]]
- 008320a4 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 008320a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008320a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008320a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008320fc ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 008320fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008320fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008320fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e475635ed4774ee58a5851011ce5221b"></a>

### [`008320d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00832/008320d4.md) → [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) FUN_0083212c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 41件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 41件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 3件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0083276c",
      "incomplete_value": true,
      "site": "0083277c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:146:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00832714",
      "incomplete_value": true,
      "site": "00832724",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:117:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00832770",
      "incomplete_value": true,
      "site": "00832780",
      "value": [
        "LOAD",
        "16",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00832718",
      "incomplete_value": true,
      "site": "00832728",
      "value": [
        "LOAD",
        "16",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008327a4",
      "incomplete_value": false,
      "site": "008327a4",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083274c",
      "incomplete_value": false,
      "site": "0083274c",
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
            "const:ca8:8"
          ]
        ]
      ]
    },
    "ordinal": 48,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00832178",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0083219c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008323f4",
      "READ",
      [
        "storage",
        "00c9b520",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00832178",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0083219c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008323f4",
      "READ",
      [
        "storage",
        "00c9b5f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00832120 ["INT_ADD", "register:40f0:8", ["const:832120:8", "const:4:8"]]
- 00832120 ["CALL", null, ["ram:47acf4:8"]]
+ 00832178 ["INT_ADD", "register:40f0:8", ["const:832178:8", "const:4:8"]]
+ 00832178 ["CALL", null, ["ram:47ad34:8"]]
- 00832144 ["INT_ADD", "register:40f0:8", ["const:832144:8", "const:4:8"]]
- 00832144 ["CALL", null, ["ram:47acf4:8"]]
+ 0083219c ["INT_ADD", "register:40f0:8", ["const:83219c:8", "const:4:8"]]
+ 0083219c ["CALL", null, ["ram:47ad34:8"]]
- 008327c4 ["INT_ADD", "register:40f0:8", ["const:8327c4:8", "const:4:8"]]
- 008327c4 ["CALL", null, ["ram:47acf4:8"]]
+ 0083281c ["INT_ADD", "register:40f0:8", ["const:83281c:8", "const:4:8"]]
+ 0083281c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-054a37af70571560346e1a41acee628a"></a>

### [`00834134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00834/00834134.md) → [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) FUN_0083418c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`008320d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00832/008320d4.md) [`00835168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835168.md) [`0083526c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/0083526c.md) [`00835500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835500.md) [`00835604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835604.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 7件 [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) [`008351c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008351c0.md) [`008352c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008352c4.md) [`00835558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835558.md) [`0083565c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/0083565c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00834198",
      "incomplete_value": false,
      "site": "0083419c",
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
      "definition_site": "00834140",
      "incomplete_value": false,
      "site": "00834144",
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
      "00834198",
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
      "00834198",
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
- 00834144 ["INT_ADD", "register:40f0:8", ["const:834144:8", "const:4:8"]]
- 00834144 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0083419c ["INT_ADD", "register:40f0:8", ["const:83419c:8", "const:4:8"]]
+ 0083419c ["CALL", null, ["callee:0043b7b8:8"]]
- 00834140 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00834140 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00834140 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00834140 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00834198 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00834198 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00834198 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00834198 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a9144ccbaa1056ef04fb01444ab6e331"></a>

### [`00835104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835104.md) → [`0083515c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/0083515c.md) FUN_0083515c

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
      "definition_site": "00835168",
      "incomplete_value": false,
      "site": "0083516c",
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
            "const:bf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835110",
      "incomplete_value": false,
      "site": "00835114",
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
            "const:b28:8"
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
      "0083516c",
      "DATA",
      [
        "storage",
        "00c7eb28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083516c",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835110 ["COPY", "tmp:0:8", ["const:b28:8"]]
- 00835110 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00835110 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00835110 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00835168 ["COPY", "tmp:0:8", ["const:bf8:8"]]
+ 00835168 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00835168 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00835168 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a86e3f71184bbec0c1bf3b5d9be004ea"></a>

### [`00835128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835128.md) → [`00835180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835180.md) FUN_00835180

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
      "definition_site": "00835188",
      "incomplete_value": false,
      "site": "0083518c",
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
            "const:bf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835130",
      "incomplete_value": false,
      "site": "00835134",
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
            "const:b28:8"
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
      "0083518c",
      "DATA",
      [
        "storage",
        "00c7eb28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083518c",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835130 ["COPY", "tmp:0:8", ["const:b28:8"]]
- 00835130 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00835130 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00835130 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00835188 ["COPY", "tmp:0:8", ["const:bf8:8"]]
+ 00835188 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00835188 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00835188 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00835154 ["INT_ADD", "register:40f0:8", ["const:835154:8", "const:4:8"]]
- 00835154 ["CALL", null, ["callee:00c57f80:8"]]
+ 008351ac ["INT_ADD", "register:40f0:8", ["const:8351ac:8", "const:4:8"]]
+ 008351ac ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-986392779d833a03009311784443d9f6"></a>

### [`00835168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835168.md) → [`008351c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008351c0.md) FUN_008351c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00834134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00834/00834134.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008351f4",
      "incomplete_value": false,
      "site": "008351f4",
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
            "const:bf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083519c",
      "incomplete_value": false,
      "site": "0083519c",
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
            "const:b28:8"
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
      "008351f4",
      "DATA",
      [
        "storage",
        "00c7eb28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008351f4",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835184 ["INT_ADD", "register:40f0:8", ["const:835184:8", "const:4:8"]]
- 00835184 ["CALL", null, ["callee:00c57f60:8"]]
+ 008351dc ["INT_ADD", "register:40f0:8", ["const:8351dc:8", "const:4:8"]]
+ 008351dc ["CALL", null, ["callee:00c57f60:8"]]
- 00835190 ["COPY", "tmp:0:8", ["const:b28:8"]]
- 00835190 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00835190 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00835190 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008351e8 ["COPY", "tmp:0:8", ["const:bf8:8"]]
+ 008351e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008351e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008351e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00835194 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-013a54dd5d8e83720d893277d624fbc4"></a>

### [`0083526c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/0083526c.md) → [`008352c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008352c4.md) FUN_008352c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00834134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00834/00834134.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008352f4",
      "incomplete_value": false,
      "site": "008352f4",
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
            "const:bf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083529c",
      "incomplete_value": false,
      "site": "0083529c",
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
            "const:b28:8"
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
      "008352f4",
      "DATA",
      [
        "storage",
        "00c7eb28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008352f4",
      "DATA",
      [
        "storage",
        "00c7ebf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835294 ["COPY", "tmp:0:8", ["const:b28:8"]]
- 00835294 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00835294 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00835294 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008352ec ["COPY", "tmp:0:8", ["const:bf8:8"]]
+ 008352ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008352ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008352ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 008352d4 ["INT_ADD", "register:40f0:8", ["const:8352d4:8", "const:4:8"]]
- 008352d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0083532c ["INT_ADD", "register:40f0:8", ["const:83532c:8", "const:4:8"]]
+ 0083532c ["CALL", null, ["callee:00c57f60:8"]]
- 00835310 ["INT_ADD", "register:40f0:8", ["const:835310:8", "const:4:8"]]
- 00835310 ["CALL", null, ["callee:00c580d0:8"]]
+ 00835368 ["INT_ADD", "register:40f0:8", ["const:835368:8", "const:4:8"]]
+ 00835368 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-6ad3181850ffeeb16ed07a461d1e2c01"></a>

### [`008353a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/008353a4.md) → [`008353fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008353fc.md) FUN_008353fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a83260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83260.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md)

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
      "site": "00835430",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008353d8",
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
      "00835430",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00835430",
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
- 008353d8 ["INT_ADD", "register:40f0:8", ["const:8353d8:8", "const:4:8"]]
- 008353d8 ["CALL", null, ["ram:47acf4:8"]]
+ 00835430 ["INT_ADD", "register:40f0:8", ["const:835430:8", "const:4:8"]]
+ 00835430 ["CALL", null, ["ram:47ad34:8"]]
- 008353d4 ["INT_ADD", "register:40f0:8", ["const:8353d4:8", "const:4:8"]]
- 008353d4 ["CALL", null, ["callee:008b91d0:8"]]
+ 0083542c ["INT_ADD", "register:40f0:8", ["const:83542c:8", "const:4:8"]]
+ 0083542c ["CALL", null, ["callee:008b91d0:8"]]
- 008353fc ["INT_ADD", "register:40f0:8", ["const:8353fc:8", "const:4:8"]]
- 008353fc ["CALL", null, ["callee:00851550:8"]]
+ 00835454 ["INT_ADD", "register:40f0:8", ["const:835454:8", "const:4:8"]]
+ 00835454 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c68496a4d73c889b8a332eac7418a02a"></a>

### [`0083549c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/0083549c.md) → [`008354f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008354f4.md) FUN_008354f4

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
      "definition_site": "00835500",
      "incomplete_value": false,
      "site": "00835504",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008354a8",
      "incomplete_value": false,
      "site": "008354ac",
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
            "const:ba8:8"
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
      "00835504",
      "DATA",
      [
        "storage",
        "00c7eba8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00835504",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008354a8 ["COPY", "tmp:0:8", ["const:ba8:8"]]
- 008354a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008354a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008354a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00835500 ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 00835500 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00835500 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00835500 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e6081efa8d28f52db420684ed85de682"></a>

### [`008354c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/008354c0.md) → [`00835518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835518.md) FUN_00835518

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
      "definition_site": "00835520",
      "incomplete_value": false,
      "site": "00835524",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008354c8",
      "incomplete_value": false,
      "site": "008354cc",
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
            "const:ba8:8"
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
      "00835524",
      "DATA",
      [
        "storage",
        "00c7eba8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00835524",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008354c8 ["COPY", "tmp:0:8", ["const:ba8:8"]]
- 008354c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008354c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008354c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00835520 ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 00835520 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00835520 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00835520 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008354ec ["INT_ADD", "register:40f0:8", ["const:8354ec:8", "const:4:8"]]
- 008354ec ["CALL", null, ["callee:00c57f80:8"]]
+ 00835544 ["INT_ADD", "register:40f0:8", ["const:835544:8", "const:4:8"]]
+ 00835544 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1c1c126961728a19e0a44cbca7173f8a"></a>

### [`00835500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835500.md) → [`00835558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835558.md) FUN_00835558

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00834134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00834/00834134.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0083558c",
      "incomplete_value": false,
      "site": "0083558c",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835534",
      "incomplete_value": false,
      "site": "00835534",
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
            "const:ba8:8"
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
      "0083558c",
      "DATA",
      [
        "storage",
        "00c7eba8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083558c",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083551c ["INT_ADD", "register:40f0:8", ["const:83551c:8", "const:4:8"]]
- 0083551c ["CALL", null, ["callee:00c57f60:8"]]
+ 00835574 ["INT_ADD", "register:40f0:8", ["const:835574:8", "const:4:8"]]
+ 00835574 ["CALL", null, ["callee:00c57f60:8"]]
- 00835528 ["COPY", "tmp:0:8", ["const:ba8:8"]]
- 00835528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00835528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00835528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00835580 ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 00835580 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00835580 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00835580 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0083552c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-fad30cee4d7ad73a27e26a70239c0d6e"></a>

### [`00835604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835604.md) → [`0083565c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/0083565c.md) FUN_0083565c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00834134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00834/00834134.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0083568c",
      "incomplete_value": false,
      "site": "0083568c",
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
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835634",
      "incomplete_value": false,
      "site": "00835634",
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
            "const:ba8:8"
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
      "0083568c",
      "DATA",
      [
        "storage",
        "00c7eba8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083568c",
      "DATA",
      [
        "storage",
        "00c7ec78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083562c ["COPY", "tmp:0:8", ["const:ba8:8"]]
- 0083562c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0083562c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0083562c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00835684 ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 00835684 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00835684 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00835684 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0083566c ["INT_ADD", "register:40f0:8", ["const:83566c:8", "const:4:8"]]
- 0083566c ["CALL", null, ["callee:00c57f60:8"]]
+ 008356c4 ["INT_ADD", "register:40f0:8", ["const:8356c4:8", "const:4:8"]]
+ 008356c4 ["CALL", null, ["callee:00c57f60:8"]]
- 008356a8 ["INT_ADD", "register:40f0:8", ["const:8356a8:8", "const:4:8"]]
- 008356a8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00835700 ["INT_ADD", "register:40f0:8", ["const:835700:8", "const:4:8"]]
+ 00835700 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-ab98bb3893b8f083ed1113ae63d099a7"></a>

### [`00835918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835918.md) → [`00835970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835970.md) FUN_00835970

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
      "definition_site": "0083597c",
      "incomplete_value": false,
      "site": "00835980",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835924",
      "incomplete_value": false,
      "site": "00835928",
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
            "const:c28:8"
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
      "00835980",
      "DATA",
      [
        "storage",
        "00c7ec28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00835980",
      "DATA",
      [
        "storage",
        "00c7ecf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835924 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 00835924 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00835924 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00835924 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0083597c ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 0083597c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0083597c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0083597c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-92f52baab93d7ee32f2eb8e704b0d021"></a>

### [`0083597c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/0083597c.md) → [`008359d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/008359d4.md) FUN_008359d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00834134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00834/00834134.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00835a08",
      "incomplete_value": false,
      "site": "00835a08",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008359b0",
      "incomplete_value": false,
      "site": "008359b0",
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
            "const:c28:8"
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
      "00835a08",
      "DATA",
      [
        "storage",
        "00c7ec28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00835a08",
      "DATA",
      [
        "storage",
        "00c7ecf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835998 ["INT_ADD", "register:40f0:8", ["const:835998:8", "const:4:8"]]
- 00835998 ["CALL", null, ["callee:00c57f60:8"]]
+ 008359f0 ["INT_ADD", "register:40f0:8", ["const:8359f0:8", "const:4:8"]]
+ 008359f0 ["CALL", null, ["callee:00c57f60:8"]]
- 008359a4 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 008359a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008359a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008359a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008359fc ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 008359fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008359fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008359fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008359a8 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-01bc72328e1f7598822fd3b712ce8969"></a>

### [`00835a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835a80.md) → [`00835ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835ad8.md) FUN_00835ad8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00834134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00834/00834134.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0083418c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00834/0083418c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00835b08",
      "incomplete_value": false,
      "site": "00835b08",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835ab0",
      "incomplete_value": false,
      "site": "00835ab0",
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
            "const:c28:8"
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
      "00835b08",
      "DATA",
      [
        "storage",
        "00c7ec28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00835b08",
      "DATA",
      [
        "storage",
        "00c7ecf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835aa8 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 00835aa8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00835aa8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00835aa8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00835b00 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 00835b00 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00835b00 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00835b00 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00835ae8 ["INT_ADD", "register:40f0:8", ["const:835ae8:8", "const:4:8"]]
- 00835ae8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00835b40 ["INT_ADD", "register:40f0:8", ["const:835b40:8", "const:4:8"]]
+ 00835b40 ["CALL", null, ["callee:00c57f60:8"]]
- 00835b24 ["INT_ADD", "register:40f0:8", ["const:835b24:8", "const:4:8"]]
- 00835b24 ["CALL", null, ["callee:00c580d0:8"]]
+ 00835b7c ["INT_ADD", "register:40f0:8", ["const:835b7c:8", "const:4:8"]]
+ 00835b7c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-16870dd48b513fed8eb20d9cabff6ce1"></a>

### [`00835bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835bb8.md) → [`00835c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835c10.md) FUN_00835c10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md) [`0055a5e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a5e4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008628a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00862/008628a8.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`0055a624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a624.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00862900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862900.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00835ca8",
      "incomplete_value": true,
      "site": "00835cac",
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
    "old": {
      "definition_site": "00835c50",
      "incomplete_value": true,
      "site": "00835c54",
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
                "const:978:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00835c94",
      "incomplete_value": false,
      "site": "00835cac",
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
      "definition_site": "00835c3c",
      "incomplete_value": false,
      "site": "00835c54",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00835ca0",
      "incomplete_value": false,
      "site": "00835cac",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835c48",
      "incomplete_value": false,
      "site": "00835c54",
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
            "const:510:8"
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
      "00835c94",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00835c98",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00835ca0",
      "PARAM",
      [
        "storage",
        "00c7e510",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00835c94",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00835c98",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00835ca0",
      "PARAM",
      [
        "storage",
        "00c7e5e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835c54 ["INT_ADD", "register:40f0:8", ["const:835c54:8", "const:4:8"]]
- 00835c54 ["CALL", null, ["callee:00c586e0:8"]]
+ 00835cac ["INT_ADD", "register:40f0:8", ["const:835cac:8", "const:4:8"]]
+ 00835cac ["CALL", null, ["callee:00c586e0:8"]]
- 00835be0 ["INT_ADD", "register:40f0:8", ["const:835be0:8", "const:4:8"]]
- 00835be0 ["CALL", null, ["callee:008b92e8:8"]]
+ 00835c38 ["INT_ADD", "register:40f0:8", ["const:835c38:8", "const:4:8"]]
+ 00835c38 ["CALL", null, ["callee:008b92e8:8"]]
- 00835bec ["INT_ADD", "register:40f0:8", ["const:835bec:8", "const:4:8"]]
- 00835bec ["CALL", null, ["callee:008b92f0:8"]]
+ 00835c44 ["INT_ADD", "register:40f0:8", ["const:835c44:8", "const:4:8"]]
+ 00835c44 ["CALL", null, ["callee:008b92f0:8"]]
~~~


<a id="compare-e0aa0e4ba536edcfae2d44f1131ddef8"></a>

### [`00835d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835d6c.md) → [`00835dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835dc4.md) FUN_00835dc4

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
      "definition_site": "00835dd8",
      "incomplete_value": false,
      "site": "00835ddc",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835d80",
      "incomplete_value": false,
      "site": "00835d84",
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
            "const:ca8:8"
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
      "00835ddc",
      "DATA",
      [
        "storage",
        "00c7eca8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00835ddc",
      "DATA",
      [
        "storage",
        "00c7ed78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835d78 ["INT_ADD", "register:40f0:8", ["const:835d78:8", "const:4:8"]]
- 00835d78 ["CALL", null, ["callee:00c57f60:8"]]
+ 00835dd0 ["INT_ADD", "register:40f0:8", ["const:835dd0:8", "const:4:8"]]
+ 00835dd0 ["CALL", null, ["callee:00c57f60:8"]]
- 00835d80 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00835d80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00835d80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00835d80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00835dd8 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 00835dd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00835dd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00835dd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9393847917240ab50811ff7960c987e4"></a>

### [`00835d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835d90.md) → [`00835de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835de8.md) FUN_00835de8

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
      "definition_site": "00835dec",
      "incomplete_value": false,
      "site": "00835df0",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00835d94",
      "incomplete_value": false,
      "site": "00835d98",
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
            "const:ca8:8"
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
      "00835df0",
      "DATA",
      [
        "storage",
        "00c7eca8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00835df0",
      "DATA",
      [
        "storage",
        "00c7ed78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00835d94 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00835d94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00835d94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00835d94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00835dec ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 00835dec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00835dec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00835dec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0a9287fe30d60264061092ddd351a959"></a>

### [`00835da8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835da8.md) → [`00835e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835e00.md) FUN_00835e00

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
      "site": "00835e24",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00835dcc",
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
      "00835e24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00835e24",
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
- 00835dcc ["INT_ADD", "register:40f0:8", ["const:835dcc:8", "const:4:8"]]
- 00835dcc ["CALL", null, ["ram:47acf4:8"]]
+ 00835e24 ["INT_ADD", "register:40f0:8", ["const:835e24:8", "const:4:8"]]
+ 00835e24 ["CALL", null, ["ram:47ad34:8"]]
- 00835dd8 ["INT_ADD", "register:40f0:8", ["const:835dd8:8", "const:4:8"]]
- 00835dd8 ["CALL", null, ["callee:0047ce14:8"]]
+ 00835e30 ["INT_ADD", "register:40f0:8", ["const:835e30:8", "const:4:8"]]
+ 00835e30 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-4f224810783d964c59fbf373fe8c1d63"></a>

### [`00835fcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835fcc.md) → [`00836024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836024.md) FUN_00836024

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00835e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835e18.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00835e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835e70.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00836030",
      "incomplete_value": false,
      "site": "00836034",
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
      "definition_site": "00835fd8",
      "incomplete_value": false,
      "site": "00835fdc",
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
      "00836030",
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
      "00836030",
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
- 00835fdc ["INT_ADD", "register:40f0:8", ["const:835fdc:8", "const:4:8"]]
- 00835fdc ["CALL", null, ["callee:0043b7b8:8"]]
+ 00836034 ["INT_ADD", "register:40f0:8", ["const:836034:8", "const:4:8"]]
+ 00836034 ["CALL", null, ["callee:0043b7b8:8"]]
- 00835fd8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00835fd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00835fd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00835fd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00836030 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00836030 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00836030 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00836030 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e231f12f06ac0b343aedfd2f033ac72d"></a>

### [`008378d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00837/008378d8.md) → [`00837930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00837/00837930.md) FUN_00837930

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0082ee20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082e/0082ee20.md) · 呼出先 12件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0067e19c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e19c.md) [`00862c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00862/00862c50.md) [`00864538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864538.md)
- 新版 呼出元 1件 [`0082ee78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082ee78.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0067e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e1dc.md) [`00862ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862ca8.md) [`00864590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864590.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 85.05% / 新版 85.05%

優先判定に残った影響 `call_argument_candidate` 44件, `store_destination` 7件, `store_value` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00837970",
      "incomplete_value": true,
      "site": "00837974",
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
    "old": {
      "definition_site": "00837918",
      "incomplete_value": true,
      "site": "0083791c",
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
            "const:d38:8"
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
      "definition_site": "008379b4",
      "incomplete_value": true,
      "site": "008379b4",
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
      "definition_site": "0083795c",
      "incomplete_value": true,
      "site": "0083795c",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008379cc",
      "incomplete_value": true,
      "site": "008379cc",
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
      "definition_site": "00837974",
      "incomplete_value": true,
      "site": "00837974",
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
      "00837974",
      "DATA",
      [
        "storage",
        "00c7ed38",
        null,
        "pointer"
      ]
    ],
    [
      "00837984",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008379a4",
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
      "00837974",
      "DATA",
      [
        "storage",
        "00c7ee08",
        null,
        "pointer"
      ]
    ],
    [
      "00837984",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008379a4",
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
- 00837920 ["COPY", "register:40c0:8", ["const:ca4000:8"]]
+ 00837978 ["COPY", "register:40c0:8", ["const:ca5000:8"]]
- 00837998 ["INT_ADD", "register:40f0:8", ["const:837998:8", "const:4:8"]]
- 00837998 ["CALL", null, ["callee:0047e64c:8"]]
+ 008379f0 ["INT_ADD", "register:40f0:8", ["const:8379f0:8", "const:4:8"]]
+ 008379f0 ["CALL", null, ["callee:0047e64c:8"]]
- 008379cc ["COPY", "register:0:8", ["register:4040:8"]]
- 008379cc ["INT_ADD", "register:40f0:8", ["const:8379cc:8", "const:4:8"]]
- 008379cc ["CALLIND", null, ["register:0:8"]]
+ 00837a24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00837a24 ["INT_ADD", "register:40f0:8", ["const:837a24:8", "const:4:8"]]
+ 00837a24 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1e748c1394f138742a19d5863924e651"></a>

### [`00838888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838888.md) → [`008388e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/008388e0.md) FUN_008388e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008388f8",
      "incomplete_value": false,
      "site": "008388fc",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008388a0",
      "incomplete_value": false,
      "site": "008388a4",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00838964",
      "incomplete_value": false,
      "site": "00838968",
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
    "old": {
      "definition_site": "0083890c",
      "incomplete_value": false,
      "site": "00838910",
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
            "const:810:8"
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
      "008388fc",
      "DATA",
      [
        "storage",
        "00c7ed38",
        null,
        "pointer"
      ]
    ],
    [
      "00838968",
      "DATA",
      [
        "storage",
        "00c74810",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008388fc",
      "DATA",
      [
        "storage",
        "00c7ee08",
        null,
        "pointer"
      ]
    ],
    [
      "00838968",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008388a0 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 008388a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008388a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008388a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008388f8 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 008388f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008388f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008388f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008388b4 ["INT_ADD", "register:40f0:8", ["const:8388b4:8", "const:4:8"]]
- 008388b4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0083890c ["INT_ADD", "register:40f0:8", ["const:83890c:8", "const:4:8"]]
+ 0083890c ["CALL", null, ["callee:00c53da0:8"]]
- 008388c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008388c8 ["INT_ADD", "register:40f0:8", ["const:8388c8:8", "const:4:8"]]
- 008388c8 ["CALLIND", null, ["register:0:8"]]
+ 00838920 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00838920 ["INT_ADD", "register:40f0:8", ["const:838920:8", "const:4:8"]]
+ 00838920 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-77479d72c5f62c0ad4b88e2f8991326b"></a>

### [`00838950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838950.md) → [`008389a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/008389a8.md) FUN_008389a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008389c0",
      "incomplete_value": false,
      "site": "008389c4",
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
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838968",
      "incomplete_value": false,
      "site": "0083896c",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00838a2c",
      "incomplete_value": false,
      "site": "00838a30",
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
    "old": {
      "definition_site": "008389d4",
      "incomplete_value": false,
      "site": "008389d8",
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
            "const:810:8"
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
      "008389c4",
      "DATA",
      [
        "storage",
        "00c7ed38",
        null,
        "pointer"
      ]
    ],
    [
      "00838a30",
      "DATA",
      [
        "storage",
        "00c74810",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008389c4",
      "DATA",
      [
        "storage",
        "00c7ee08",
        null,
        "pointer"
      ]
    ],
    [
      "00838a30",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838968 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00838968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008389c0 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 008389c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008389c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008389c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0083897c ["INT_ADD", "register:40f0:8", ["const:83897c:8", "const:4:8"]]
- 0083897c ["CALL", null, ["callee:00c53da0:8"]]
+ 008389d4 ["INT_ADD", "register:40f0:8", ["const:8389d4:8", "const:4:8"]]
+ 008389d4 ["CALL", null, ["callee:00c53da0:8"]]
- 00838990 ["COPY", "register:0:8", ["register:4040:8"]]
- 00838990 ["INT_ADD", "register:40f0:8", ["const:838990:8", "const:4:8"]]
- 00838990 ["CALLIND", null, ["register:0:8"]]
+ 008389e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008389e8 ["INT_ADD", "register:40f0:8", ["const:8389e8:8", "const:4:8"]]
+ 008389e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a222d86f539b1f6652db8524e32b16e0"></a>

### [`00838a24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838a24.md) → [`00838a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838a7c.md) FUN_00838a7c

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
      "definition_site": "00838aa0",
      "incomplete_value": false,
      "site": "00838aa0",
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
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838a48",
      "incomplete_value": false,
      "site": "00838a48",
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
            "const:d58:8"
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
      "00838aa0",
      "DATA",
      [
        "storage",
        "00c7ed58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838aa0",
      "DATA",
      [
        "storage",
        "00c7ee28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838a38 ["INT_ADD", "register:40f0:8", ["const:838a38:8", "const:4:8"]]
- 00838a38 ["CALL", null, ["callee:00c57f60:8"]]
+ 00838a90 ["INT_ADD", "register:40f0:8", ["const:838a90:8", "const:4:8"]]
+ 00838a90 ["CALL", null, ["callee:00c57f60:8"]]
- 00838a44 ["COPY", "tmp:0:8", ["const:d58:8"]]
- 00838a44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838a44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838a44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00838a9c ["COPY", "tmp:0:8", ["const:e28:8"]]
+ 00838a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00838a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00838a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-39ae17b10b8bf89b24094f3ce2b52dd3"></a>

### [`00838a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838a58.md) → [`00838ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838ab0.md) FUN_00838ab0

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
      "definition_site": "00838abc",
      "incomplete_value": false,
      "site": "00838abc",
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
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838a64",
      "incomplete_value": false,
      "site": "00838a64",
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
            "const:d58:8"
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
      "00838abc",
      "DATA",
      [
        "storage",
        "00c7ed58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838abc",
      "DATA",
      [
        "storage",
        "00c7ee28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838a60 ["COPY", "tmp:0:8", ["const:d58:8"]]
- 00838a60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838a60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838a60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00838ab8 ["COPY", "tmp:0:8", ["const:e28:8"]]
+ 00838ab8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00838ab8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00838ab8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-87b9d72f06c3e76e8077cbbe53fff99c"></a>

### [`00838ac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838ac0.md) → [`00838b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838b18.md) FUN_00838b18

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
      "definition_site": "00838b3c",
      "incomplete_value": false,
      "site": "00838b3c",
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
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838ae4",
      "incomplete_value": false,
      "site": "00838ae4",
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
            "const:dd8:8"
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
      "00838b3c",
      "DATA",
      [
        "storage",
        "00c7edd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838b3c",
      "DATA",
      [
        "storage",
        "00c7eea8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838ad4 ["INT_ADD", "register:40f0:8", ["const:838ad4:8", "const:4:8"]]
- 00838ad4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00838b2c ["INT_ADD", "register:40f0:8", ["const:838b2c:8", "const:4:8"]]
+ 00838b2c ["CALL", null, ["callee:00c57f60:8"]]
- 00838ae0 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 00838ae0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838ae0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838ae0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00838b38 ["COPY", "tmp:0:8", ["const:ea8:8"]]
+ 00838b38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00838b38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00838b38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-385f0d7daf92cd538ada8996ce4a578c"></a>

### [`00838af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838af4.md) → [`00838b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838b4c.md) FUN_00838b4c

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
      "definition_site": "00838b58",
      "incomplete_value": false,
      "site": "00838b58",
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
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838b00",
      "incomplete_value": false,
      "site": "00838b00",
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
            "const:dd8:8"
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
      "00838b58",
      "DATA",
      [
        "storage",
        "00c7edd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838b58",
      "DATA",
      [
        "storage",
        "00c7eea8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838afc ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 00838afc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838afc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838afc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00838b54 ["COPY", "tmp:0:8", ["const:ea8:8"]]
+ 00838b54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00838b54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00838b54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0771fbd4180bbcf3c47141a569e4e11f"></a>

### [`00838b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838b50.md) → [`00838ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838ba8.md) FUN_00838ba8

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
      "definition_site": "00838bcc",
      "incomplete_value": false,
      "site": "00838bcc",
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
            "const:f28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838b74",
      "incomplete_value": false,
      "site": "00838b74",
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
            "const:e58:8"
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
      "00838bcc",
      "DATA",
      [
        "storage",
        "00c7ee58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838bcc",
      "DATA",
      [
        "storage",
        "00c7ef28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838b64 ["INT_ADD", "register:40f0:8", ["const:838b64:8", "const:4:8"]]
- 00838b64 ["CALL", null, ["callee:00c57f60:8"]]
+ 00838bbc ["INT_ADD", "register:40f0:8", ["const:838bbc:8", "const:4:8"]]
+ 00838bbc ["CALL", null, ["callee:00c57f60:8"]]
- 00838b70 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 00838b70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838b70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838b70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00838bc8 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 00838bc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00838bc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00838bc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a10358a1213dc1e177908771507be074"></a>

### [`00838b84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838b84.md) → [`00838bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838bdc.md) FUN_00838bdc

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
      "definition_site": "00838be8",
      "incomplete_value": false,
      "site": "00838be8",
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
            "const:f28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838b90",
      "incomplete_value": false,
      "site": "00838b90",
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
            "const:e58:8"
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
      "00838be8",
      "DATA",
      [
        "storage",
        "00c7ee58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838be8",
      "DATA",
      [
        "storage",
        "00c7ef28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838b8c ["COPY", "tmp:0:8", ["const:e58:8"]]
- 00838b8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838b8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838b8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00838be4 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 00838be4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00838be4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00838be4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-82adde48855d5b19efd6afec2d28ebd6"></a>

### [`00838ba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838ba0.md) → [`00838bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838bf8.md) FUN_00838bf8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0082d290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082d/0082d290.md) [`00838d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838d00.md) [`00838d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838d04.md) [`00acabd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aca/00acabd4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0082d2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082d/0082d2e8.md) [`00838d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d58.md) [`00838d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d5c.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00838c2c",
      "incomplete_value": false,
      "site": "00838c2c",
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
            "const:f98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838bd4",
      "incomplete_value": false,
      "site": "00838bd4",
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
            "const:ec8:8"
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
      "00838c2c",
      "DATA",
      [
        "storage",
        "00c7eec8",
        null,
        "undefined *"
      ]
    ],
    [
      "00838c68",
      "READ",
      [
        "storage",
        "00c7eee8",
        null,
        "pointer"
      ]
    ],
    [
      "00838c68",
      "READ",
      [
        "storage",
        "00c7eef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838c2c",
      "DATA",
      [
        "storage",
        "00c7ef98",
        null,
        "undefined *"
      ]
    ],
    [
      "00838c68",
      "READ",
      [
        "storage",
        "00c7efb8",
        null,
        "pointer"
      ]
    ],
    [
      "00838c68",
      "READ",
      [
        "storage",
        "00c7efc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838bc4 ["INT_ADD", "register:40f0:8", ["const:838bc4:8", "const:4:8"]]
- 00838bc4 ["CALL", null, ["callee:0082d2e8:8"]]
+ 00838c1c ["INT_ADD", "register:40f0:8", ["const:838c1c:8", "const:4:8"]]
+ 00838c1c ["CALL", null, ["callee:0082d2e8:8"]]
- 00838bcc ["COPY", "tmp:0:8", ["const:ec8:8"]]
- 00838bcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838bcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838bcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00838c24 ["COPY", "tmp:0:8", ["const:f98:8"]]
+ 00838c24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00838c24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00838c24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00838be8 ["INT_ADD", "register:40f0:8", ["const:838be8:8", "const:4:8"]]
- 00838be8 ["CALL", null, ["callee:00acac44:8"]]
+ 00838c40 ["INT_ADD", "register:40f0:8", ["const:838c40:8", "const:4:8"]]
+ 00838c40 ["CALL", null, ["callee:00acac44:8"]]
~~~


<a id="compare-0e755cce7aa917a7d1129ad5df444164"></a>

### [`00838cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838cb8.md) → [`00838d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d10.md) FUN_00838d10

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
      "definition_site": "00838d34",
      "incomplete_value": false,
      "site": "00838d34",
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
            "const:f98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838cdc",
      "incomplete_value": false,
      "site": "00838cdc",
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
            "const:ec8:8"
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
      "00838d34",
      "DATA",
      [
        "storage",
        "00c7eec8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838d34",
      "DATA",
      [
        "storage",
        "00c7ef98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838ccc ["INT_ADD", "register:40f0:8", ["const:838ccc:8", "const:4:8"]]
- 00838ccc ["CALL", null, ["callee:00c57f60:8"]]
+ 00838d24 ["INT_ADD", "register:40f0:8", ["const:838d24:8", "const:4:8"]]
+ 00838d24 ["CALL", null, ["callee:00c57f60:8"]]
- 00838cd8 ["COPY", "tmp:0:8", ["const:ec8:8"]]
- 00838cd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00838cd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00838cd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00838d30 ["COPY", "tmp:0:8", ["const:f98:8"]]
+ 00838d30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00838d30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00838d30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7fb59043e82895c001d922bb5e38e7fd"></a>

### [`00838cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838cec.md) → [`00838d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d44.md) FUN_00838d44

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
      "definition_site": "00838d50",
      "incomplete_value": false,
      "site": "00838d50",
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
            "const:f98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00838cf8",
      "incomplete_value": false,
      "site": "00838cf8",
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
            "const:ec8:8"
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
      "00838d50",
      "DATA",
      [
        "storage",
        "00c7eec8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00838d50",
      "DATA",
      [
        "storage",
        "00c7ef98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838cf4 ["COPY", "tmp:0:8", ["const:ec8:8"]]
- 00838cf4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838cf4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838cf4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00838d4c ["COPY", "tmp:0:8", ["const:f98:8"]]
+ 00838d4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00838d4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00838d4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f9922613db618fa71677eb46e604bfd5"></a>

### [`00838d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838d08.md) → [`00838d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838d60.md) FUN_00838d60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`007562a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00756/007562a4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085bb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085bb70.md) [`00ac863c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac8/00ac863c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 5件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00ac86ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac86ac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_value, call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `branch_value` 1件, `call_target` 1件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00838da4",
      "incomplete_value": false,
      "site": "00838da4",
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
    "old": {
      "definition_site": "00838d4c",
      "incomplete_value": false,
      "site": "00838d4c",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00838d98",
      "incomplete_value": true,
      "site": "00838da4",
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
    "old": {
      "definition_site": "00838d40",
      "incomplete_value": true,
      "site": "00838d4c",
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
                "const:978:8"
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
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00838da8",
      "incomplete_value": false,
      "site": "00838da8",
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
    "old": {
      "definition_site": "00838d50",
      "incomplete_value": false,
      "site": "00838d50",
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
            "const:978:8"
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
      "00838d98",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00838d9c",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "00838da4",
      "WRITE",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00838d98",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00838d9c",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00838da4",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00838d20 ["INT_ADD", "register:40f0:8", ["const:838d20:8", "const:4:8"]]
- 00838d20 ["CALL", null, ["callee:00851550:8"]]
+ 00838d78 ["INT_ADD", "register:40f0:8", ["const:838d78:8", "const:4:8"]]
+ 00838d78 ["CALL", null, ["callee:00851550:8"]]
- 00838d4c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 00838d4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00838da4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 00838da4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00838d50 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:978:8"]]
- 00838d50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 00838da8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
+ 00838da8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
~~~


<a id="compare-c09dfb90aa9b685227b704ead576c51e"></a>

### [`00838e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00838/00838e0c.md) → [`00838e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838e64.md) _INIT_153

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
      "definition_site": "00838ea0",
      "incomplete_value": true,
      "site": "00838ebc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00838e48",
      "incomplete_value": true,
      "site": "00838e64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00838ec4",
      "incomplete_value": true,
      "site": "00838ee0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00838e6c",
      "incomplete_value": true,
      "site": "00838e88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00838ee4",
      "incomplete_value": true,
      "site": "00838f00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00838e8c",
      "incomplete_value": true,
      "site": "00838ea8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00838ea0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00838ec4",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00838ee4",
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
      "00838ea0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00838ec4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00838ee4",
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
- 00838ee0 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00838ee0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838ee0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838ee0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00838f38 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00838f38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00838f38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00838f38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00838f00 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00838f00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00838f00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00838f00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00838f58 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00838f58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00838f58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00838f58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00839040 ["INT_ADD", "register:40f0:8", ["const:839040:8", "const:4:8"]]
- 00839040 ["CALL", null, ["callee:00c57f00:8"]]
+ 00839098 ["INT_ADD", "register:40f0:8", ["const:839098:8", "const:4:8"]]
+ 00839098 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-0ec44358e2ff808f02e8ccadef1ecc83"></a>

### [`0083919c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00839/0083919c.md) → [`008391f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/008391f4.md) _INIT_154

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00839254",
      "incomplete_value": true,
      "site": "00839270",
      "value": [
        "LOAD",
        "16",
        [
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
                "register:4050:8"
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
      "definition_site": "008391fc",
      "incomplete_value": true,
      "site": "00839218",
      "value": [
        "LOAD",
        "16",
        [
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
                "register:4050:8"
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
      "definition_site": "00839274",
      "incomplete_value": true,
      "site": "00839290",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0083921c",
      "incomplete_value": true,
      "site": "00839238",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00839294",
      "incomplete_value": true,
      "site": "008392ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0083923c",
      "incomplete_value": true,
      "site": "00839254",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00839230",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00839254",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00839274",
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
      "00839230",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00839254",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00839274",
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
- 00839270 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00839270 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00839270 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00839270 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008392c8 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 008392c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008392c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008392c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00839290 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00839290 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00839290 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00839290 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008392e8 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 008392e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008392e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008392e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008393d0 ["INT_ADD", "register:40f0:8", ["const:8393d0:8", "const:4:8"]]
- 008393d0 ["CALL", null, ["callee:00c57f00:8"]]
+ 00839428 ["INT_ADD", "register:40f0:8", ["const:839428:8", "const:4:8"]]
+ 00839428 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-5d24768dd5c86fcbb562257ecd265eec"></a>

### [`00839d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00839/00839d4c.md) → [`00839da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839da4.md) _INIT_155

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`0083952c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00839/0083952c.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00839584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839584.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 88.14% / 新版 88.14%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00839e80",
      "incomplete_value": true,
      "site": "00839e9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00839e28",
      "incomplete_value": true,
      "site": "00839e44",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00839ea0",
      "incomplete_value": true,
      "site": "00839ee4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00839e48",
      "incomplete_value": true,
      "site": "00839e8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00839fec",
      "incomplete_value": false,
      "site": "00839fec",
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
                "const:ca8000:8"
              ],
              [
                "leaf",
                "const:208:8"
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
      "definition_site": "00839f94",
      "incomplete_value": false,
      "site": "00839f94",
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
                "const:ca8000:8"
              ],
              [
                "leaf",
                "const:108:8"
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
      "00839de0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00839e04",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00839e24",
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
      "00839de0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00839e04",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00839e24",
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
- 00839f84 ["INT_ADD", "register:40f0:8", ["const:839f84:8", "const:4:8"]]
- 00839f84 ["CALL", null, ["callee:00c57f00:8"]]
+ 00839fdc ["INT_ADD", "register:40f0:8", ["const:839fdc:8", "const:4:8"]]
+ 00839fdc ["CALL", null, ["callee:00c57f00:8"]]
- 00839ff0 ["INT_ADD", "register:40f0:8", ["const:839ff0:8", "const:4:8"]]
- 00839ff0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0083a048 ["INT_ADD", "register:40f0:8", ["const:83a048:8", "const:4:8"]]
+ 0083a048 ["CALL", null, ["callee:00c57f80:8"]]
- 00839d78 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 00839d78 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00839d78 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00839d78 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00839dd0 ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 00839dd0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00839dd0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00839dd0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-1afd3ba8b2bfd70033dc27398966125c"></a>

### [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) → [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) FUN_0083a178

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0084a040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084a/0084a040.md) · 呼出先 150件 [`0044ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab38.md) [`0044ab48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab48.md) [`0044ab50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab50.md) [`0044d808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044d808.md) [`0044dc68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044dc68.md)
- 新版 呼出元 1件 [`0084a098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084a/0084a098.md) · 呼出先 150件 [`0044ab50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ab50.md) [`0044ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ab78.md) [`0044d730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d730.md) [`0044d848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d848.md) [`0044e108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e108.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.87% / 新版 99.87%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0083a1b8",
      "incomplete_value": false,
      "site": "0083a1c0",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083a160",
      "incomplete_value": false,
      "site": "0083a168",
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
            "const:f58:8"
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
      "definition_site": "0083e098",
      "incomplete_value": false,
      "site": "0083e09c",
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
                "const:c80000:8"
              ],
              [
                "leaf",
                "const:2f0:8"
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
      "definition_site": "0083e040",
      "incomplete_value": false,
      "site": "0083e044",
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
                "const:c80000:8"
              ],
              [
                "leaf",
                "const:220:8"
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
    "ordinal": 254,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0083a1c0",
      "DATA",
      [
        "storage",
        "00c7ef58",
        null,
        "undefined *"
      ]
    ],
    [
      "0083a210",
      "DATA",
      [
        "storage",
        "00477d48",
        null,
        null
      ]
    ],
    [
      "0083a220",
      "DATA",
      [
        "storage",
        "00477d30",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0083a1c0",
      "DATA",
      [
        "storage",
        "00c7f028",
        null,
        "undefined *"
      ]
    ],
    [
      "0083a5cc",
      "DATA",
      [
        "storage",
        "0044e1f8",
        null,
        null
      ]
    ],
    [
      "0083a5d4",
      "DATA",
      [
        "storage",
        "0044e200",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0083a15c ["COPY", "register:4040:8", ["const:c7e000:8"]]
+ 0083a1b4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 0083a160 ["COPY", "tmp:0:8", ["const:f58:8"]]
- 0083a160 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0083a160 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0083a160 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0083a1b8 ["COPY", "tmp:0:8", ["const:28:8"]]
+ 0083a1b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0083a1b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0083a1b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0083a174 ["INT_ADD", "register:40f0:8", ["const:83a174:8", "const:4:8"]]
- 0083a174 ["CALL", null, ["callee:00865adc:8"]]
+ 0083a1cc ["INT_ADD", "register:40f0:8", ["const:83a1cc:8", "const:4:8"]]
+ 0083a1cc ["CALL", null, ["callee:00865adc:8"]]
~~~


<a id="compare-55da21ffe11beb4c1b25fa77db18fc44"></a>

### [`0083f468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f468.md) → [`0083f4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f4c0.md) FUN_0083f4c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00814bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00814/00814bf8.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00473540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/00473540.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`004913d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00491/004913d0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`00814c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/00814c50.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00491410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00491/00491410.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_argument_candidate, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.86% / 新版 85.86%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0083f544",
      "incomplete_value": true,
      "site": "0083f550",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3e7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083f4ec",
      "incomplete_value": true,
      "site": "0083f4f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:43b:8"
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
      "definition_site": "0083f598",
      "incomplete_value": true,
      "site": "0083f5a8",
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
      "definition_site": "0083f540",
      "incomplete_value": true,
      "site": "0083f550",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0083f594",
      "incomplete_value": true,
      "site": "0083f5b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:726:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083f53c",
      "incomplete_value": true,
      "site": "0083f558",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:773:8"
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
      "0083f4ec",
      "READ",
      [
        "storage",
        "00c9aca8",
        null,
        "pointer"
      ]
    ],
    [
      "0083f4f8",
      "READ",
      [
        "storage",
        "00ca5150",
        null,
        "undefined1"
      ]
    ],
    [
      "0083f500",
      "READ",
      [
        "storage",
        "00ca5150",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0083f4ec",
      "READ",
      [
        "storage",
        "00c9ad78",
        null,
        "pointer"
      ]
    ],
    [
      "0083f4f8",
      "READ",
      [
        "storage",
        "00ca5250",
        null,
        "undefined1"
      ]
    ],
    [
      "0083f500",
      "READ",
      [
        "storage",
        "00ca5250",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0083f678 ["INT_ADD", "register:40f0:8", ["const:83f678:8", "const:4:8"]]
- 0083f678 ["CALL", null, ["callee:00c57f80:8"]]
+ 0083f6d0 ["INT_ADD", "register:40f0:8", ["const:83f6d0:8", "const:4:8"]]
+ 0083f6d0 ["CALL", null, ["callee:00c57f80:8"]]
- 0083f6d0 ["INT_ADD", "register:40f0:8", ["const:83f6d0:8", "const:4:8"]]
- 0083f6d0 ["CALL", null, ["callee:00c58500:8"]]
+ 0083f728 ["INT_ADD", "register:40f0:8", ["const:83f728:8", "const:4:8"]]
+ 0083f728 ["CALL", null, ["callee:00c58500:8"]]
- 0083f6d4 ["INT_ADD", "register:40f0:8", ["const:83f6d4:8", "const:4:8"]]
- 0083f6d4 ["CALL", null, ["ram:48ccf8:8"]]
+ 0083f72c ["INT_ADD", "register:40f0:8", ["const:83f72c:8", "const:4:8"]]
+ 0083f72c ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-7ddc57fdd1be9b8e2103b14c7469a3a8"></a>

### [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) → [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) FUN_0083f8dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0084a040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084a/0084a040.md) · 呼出先 39件 [`0044e1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044e/0044e1e0.md) [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`00472a00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472a00.md) [`0048ccc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccc8.md)
- 新版 呼出元 1件 [`0084a098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084a/0084a098.md) · 呼出先 39件 [`0044e108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e108.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`00472a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472a40.md) [`0048cd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd08.md)

変更の種類 constant, operands_and_dependencies, store_value, unresolved_store_alignment

命令の説明率　旧版 99.27% / 新版 99.27%

優先判定に残った影響 `store_value` 6件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0083f91c",
      "incomplete_value": false,
      "site": "0083f9d8",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0083f8c4",
      "incomplete_value": false,
      "site": "0083f980",
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
            "const:f58:8"
          ]
        ]
      ]
    },
    "ordinal": 38,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008409e8",
      "incomplete_value": true,
      "site": "00840a04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00840990",
      "incomplete_value": true,
      "site": "008409ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 649,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00841d34",
      "incomplete_value": true,
      "site": "00841d40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:12f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00841cdc",
      "incomplete_value": true,
      "site": "00841ce8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:183:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 1164,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0083f9d8",
      "DATA",
      [
        "storage",
        "00c7ef58",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008407d8",
      "DATA",
      [
        "storage",
        "00c81a40",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008407f4",
      "DATA",
      [
        "storage",
        "00c82328",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0083f9d8",
      "DATA",
      [
        "storage",
        "00c7f028",
        null,
        "undefined *"
      ]
    ],
    [
      "00840830",
      "DATA",
      [
        "storage",
        "00c81b10",
        null,
        "undefined *"
      ]
    ],
    [
      "0084084c",
      "DATA",
      [
        "storage",
        "00c823f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00842724 ["INT_ADD", "register:40f0:8", ["const:842724:8", "const:4:8"]]
- 00842724 ["CALL", null, ["callee:005e81d8:8"]]
+ 0084277c ["INT_ADD", "register:40f0:8", ["const:84277c:8", "const:4:8"]]
+ 0084277c ["CALL", null, ["callee:005e81d8:8"]]
- 0083f8c0 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 0083f918 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0083f8c4 ["COPY", "tmp:0:8", ["const:f58:8"]]
- 0083f8c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0083f8c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0083f8c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0083f91c ["COPY", "tmp:0:8", ["const:28:8"]]
+ 0083f91c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0083f91c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0083f91c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-10030d63e83ac21e4d641b1e994ee4e8"></a>

### [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) → [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) FUN_0084e5f4

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`005ba798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005ba798.md) [`008548ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008548ec.md) [`009ccb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009ccb30.md) [`00a957c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a957c8.md) · 呼出先 79件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00597a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a4c.md)
- 新版 呼出元 4件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) [`009ccb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccb84.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) · 呼出先 80件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0044e108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e108.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 99.36% / 新版 99.36%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `call_target` 3件, `store_destination` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0084e73c",
      "incomplete_value": true,
      "site": "0084e754",
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
                "const:ea0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0084e6e4",
      "incomplete_value": true,
      "site": "0084e6fc",
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
                "const:e60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0084f804",
      "incomplete_value": true,
      "site": "0084f804",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "leaf",
            "const:f6c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0084f7ac",
      "incomplete_value": true,
      "site": "0084f7ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "leaf",
            "const:e9c:8"
          ]
        ]
      ]
    },
    "ordinal": 536,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0084f9c8",
      "incomplete_value": true,
      "site": "0084f9c8",
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
      "definition_site": "0084f970",
      "incomplete_value": true,
      "site": "0084f970",
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
    "ordinal": 50,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0084e71c",
      "DATA",
      [
        "storage",
        "003b6e18",
        null,
        "byte[39]"
      ]
    ],
    [
      "0084e728",
      "DATA",
      [
        "storage",
        "0039b270",
        null,
        "byte[27]"
      ]
    ],
    [
      "0084e72c",
      "DATA",
      [
        "storage",
        "0039b280",
        "fde_0039b280",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "0084e71c",
      "DATA",
      [
        "storage",
        "003b6e18",
        null,
        "dword"
      ]
    ],
    [
      "0084e728",
      "DATA",
      [
        "storage",
        "0039b270",
        null,
        "dword"
      ]
    ],
    [
      "0084e72c",
      "DATA",
      [
        "storage",
        "0039b280",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 0084e824 ["INT_ADD", "register:40f0:8", ["const:84e824:8", "const:4:8"]]
- 0084e824 ["CALL", null, ["ram:8110c8:8"]]
+ 0084e87c ["INT_ADD", "register:40f0:8", ["const:84e87c:8", "const:4:8"]]
+ 0084e87c ["CALL", null, ["ram:811120:8"]]
- 0084f7ac ["COPY", "tmp:0:4", ["register:40c0:4"]]
- 0084f7ac ["INT_ADD", "tmp:1:8", ["register:40b0:8", "const:e9c:8"]]
- 0084f7ac ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 0084f804 ["COPY", "tmp:0:4", ["register:40c0:4"]]
+ 0084f804 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "const:f6c:8"]]
+ 0084f804 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0084f930 ["INT_ADD", "register:40f0:8", ["const:84f930:8", "const:4:8"]]
- 0084f930 ["CALL", null, ["callee:00c57f80:8"]]
+ 0084f988 ["INT_ADD", "register:40f0:8", ["const:84f988:8", "const:4:8"]]
+ 0084f988 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-982fd2335258cefb96c1a0efeb31f7a6"></a>

### [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) → [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) FUN_00851550

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2197件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`0043dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dfb0.md) [`0045ab6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045ab6c.md) [`0045b8d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045b/0045b8d4.md) [`0045c908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045c/0045c908.md) · 呼出先 0件 
- 新版 呼出元 2198件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0043dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dff0.md) [`0045abac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045abac.md) [`0045b914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045b914.md) [`0045c948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045c/0045c948.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00851554",
      "incomplete_value": false,
      "site": "00851558",
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
    "old": {
      "definition_site": "008514fc",
      "incomplete_value": false,
      "site": "00851500",
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
            "const:170:8"
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
      "00851554",
      "DATA",
      [
        "storage",
        "00ca8170",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00851554",
      "DATA",
      [
        "storage",
        "00ca8270",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008514fc ["COPY", "tmp:0:8", ["const:170:8"]]
- 008514fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008514fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008514fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00851554 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 00851554 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00851554 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00851554 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f486c81e3128c8f3ff387ec2a5fbfa96"></a>

### [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) → [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) FUN_0085155c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 43件 [`004440e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/004440e0.md) [`00444678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444678.md) [`00472da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472da4.md) [`00473194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/00473194.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md)
- 新版 呼出元 0件  · 呼出先 43件 [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`004446b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004446b8.md) [`00472de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472de4.md) [`004731d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004731d4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.60% / 新版 97.60%

優先判定に残った影響 `call_target` 4件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00851894",
      "incomplete_value": false,
      "site": "008518a0",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085183c",
      "incomplete_value": false,
      "site": "00851848",
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
            "const:180:8"
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00851764",
      "value": [
        "leaf",
        "ram:768420:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0085170c",
      "value": [
        "leaf",
        "ram:7683c8:8"
      ]
    },
    "ordinal": 36,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0085177c",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00851724",
      "value": [
        "leaf",
        "ram:764384:8"
      ]
    },
    "ordinal": 37,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00851764",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683c8"
      ]
    ],
    [
      "0085177c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "008517ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0087e70c"
      ]
    ]
  ],
  "added": [
    [
      "00851764",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768420"
      ]
    ],
    [
      "0085177c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "008517ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0087e764"
      ]
    ]
  ]
}
~~~


~~~diff
- 008516b4 ["INT_ADD", "register:40f0:8", ["const:8516b4:8", "const:4:8"]]
- 008516b4 ["CALL", null, ["callee:008907ac:8"]]
+ 0085170c ["INT_ADD", "register:40f0:8", ["const:85170c:8", "const:4:8"]]
+ 0085170c ["CALL", null, ["callee:008907ac:8"]]
- 0085170c ["INT_ADD", "register:40f0:8", ["const:85170c:8", "const:4:8"]]
- 0085170c ["CALL", null, ["ram:7683c8:8"]]
+ 00851764 ["INT_ADD", "register:40f0:8", ["const:851764:8", "const:4:8"]]
+ 00851764 ["CALL", null, ["ram:768420:8"]]
- 00851724 ["INT_ADD", "register:40f0:8", ["const:851724:8", "const:4:8"]]
- 00851724 ["CALL", null, ["ram:764384:8"]]
+ 0085177c ["INT_ADD", "register:40f0:8", ["const:85177c:8", "const:4:8"]]
+ 0085177c ["CALL", null, ["ram:7643dc:8"]]
~~~


<a id="compare-5238485d9e1fc85826d38de82099222b"></a>

### [`00851954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851954.md) → [`008519ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/008519ac.md) FUN_008519ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2c200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c200.md) · 呼出先 4件 [`0048b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048b/0048b390.md) [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b2c29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c29c.md) · 呼出先 4件 [`0048b3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048b/0048b3d0.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008519e8",
      "incomplete_value": true,
      "site": "008519e8",
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
                "const:580:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00851990",
      "incomplete_value": true,
      "site": "00851990",
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
                "const:5dc:8"
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
      "008519cc",
      "READ",
      [
        "storage",
        "002a75dc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008519cc",
      "READ",
      [
        "storage",
        "002a7580",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0085196c ["COPY", "tmp:0:8", ["const:5dc:8"]]
- 0085196c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0085196c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0085196c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 008519c4 ["COPY", "tmp:0:8", ["const:580:8"]]
+ 008519c4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 008519c4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 008519c4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0085199c ["INT_ADD", "register:40f0:8", ["const:85199c:8", "const:4:8"]]
- 0085199c ["CALL", null, ["callee:0048b3d0:8"]]
+ 008519f4 ["INT_ADD", "register:40f0:8", ["const:8519f4:8", "const:4:8"]]
+ 008519f4 ["CALL", null, ["callee:0048b3d0:8"]]
- 008519ac ["INT_ADD", "register:40f0:8", ["const:8519ac:8", "const:4:8"]]
- 008519ac ["CALL", null, ["callee:00c57f80:8"]]
+ 00851a04 ["INT_ADD", "register:40f0:8", ["const:851a04:8", "const:4:8"]]
+ 00851a04 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2cb33f43883fb85bdae65f543a83aebc"></a>

### [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) → [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) FUN_00851a64

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 21件 [`006788e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00678/006788e0.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`007ac3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac3c0.md) [`00851954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851954.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 60件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md)
- 新版 呼出元 21件 [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) [`008519ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/008519ac.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 60件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, control_flow, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 88.03% / 新版 88.03%

優先判定に残った影響 `call_argument_candidate` 34件, `call_target` 16件, `store_destination` 23件, `store_value` 20件

アドレスに依存する影響 `branch_value` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00851b6c",
      "incomplete_value": true,
      "site": "00851b70",
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
                "const:ce8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00851b14",
      "incomplete_value": true,
      "site": "00851b18",
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
                "const:ca8:8"
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
      "definition_site": "00851c64",
      "incomplete_value": true,
      "site": "00851c64",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:5ca:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00851c0c",
      "incomplete_value": true,
      "site": "00851c0c",
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
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:617:8"
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
      "definition_site": "00851c68",
      "incomplete_value": true,
      "site": "00851c68",
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
      "definition_site": "00851c10",
      "incomplete_value": true,
      "site": "00851c10",
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
      "00851b6c",
      "READ",
      [
        "storage",
        "002c3ca8",
        null,
        "undefined8"
      ]
    ],
    [
      "00851b74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00851c40",
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
      "00851b6c",
      "READ",
      [
        "storage",
        "002c3ce8",
        null,
        "undefined8"
      ]
    ],
    [
      "00851b74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00851c40",
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
- 00851d78 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00851dd0 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00851d7c ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00851d7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00851d7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00851d7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00851dd4 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00851dd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00851dd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00851dd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00851e2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00851e2c ["INT_ADD", "register:40f0:8", ["const:851e2c:8", "const:4:8"]]
- 00851e2c ["CALLIND", null, ["register:0:8"]]
+ 00851e84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00851e84 ["INT_ADD", "register:40f0:8", ["const:851e84:8", "const:4:8"]]
+ 00851e84 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8bbb4489251a5d0f0cc6b33ff1485d3c"></a>

### [`00853308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853308.md) → [`00853360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853360.md) FUN_00853360

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 22件 [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) [`00472da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00472/00472da4.md) [`0047326c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/0047326c.md) [`00473270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/00473270.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`00472de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472de4.md) [`004732ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004732ac.md) [`004732b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004732b0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 89.36% / 新版 89.36%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 2件, `store_destination` 8件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008534ec",
      "incomplete_value": true,
      "site": "008534ec",
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
                "const:ca8000:8"
              ],
              [
                "leaf",
                "const:270:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
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
      "definition_site": "00853494",
      "incomplete_value": true,
      "site": "00853494",
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
                "const:ca8000:8"
              ],
              [
                "leaf",
                "const:170:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
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
      "definition_site": "00853620",
      "incomplete_value": false,
      "site": "00853620",
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
      "definition_site": "008535c8",
      "incomplete_value": false,
      "site": "008535c8",
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
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00853624",
      "incomplete_value": false,
      "site": "00853624",
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
      "definition_site": "008535cc",
      "incomplete_value": false,
      "site": "008535cc",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008533b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009ccb7c"
      ]
    ],
    [
      "008533bc",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008533c8",
      "PARAM",
      [
        "storage",
        "00ca4f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008533b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009ccbd0"
      ]
    ],
    [
      "008533bc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008533c8",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00853358 ["INT_ADD", "register:40f0:8", ["const:853358:8", "const:4:8"]]
- 00853358 ["CALL", null, ["ram:9ccb7c:8"]]
+ 008533b0 ["INT_ADD", "register:40f0:8", ["const:8533b0:8", "const:4:8"]]
+ 008533b0 ["CALL", null, ["ram:9ccbd0:8"]]
- 00853378 ["INT_ADD", "register:40f0:8", ["const:853378:8", "const:4:8"]]
- 00853378 ["CALL", null, ["callee:008536f8:8"]]
+ 008533d0 ["INT_ADD", "register:40f0:8", ["const:8533d0:8", "const:4:8"]]
+ 008533d0 ["CALL", null, ["callee:008536f8:8"]]
- 008534f8 ["INT_ADD", "register:40f0:8", ["const:8534f8:8", "const:4:8"]]
- 008534f8 ["CALL", null, ["ram:48ccf8:8"]]
+ 00853550 ["INT_ADD", "register:40f0:8", ["const:853550:8", "const:4:8"]]
+ 00853550 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-6e345dc874864b2d95447e7665457748"></a>

### [`008536a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/008536a0.md) → [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) FUN_008536f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00853308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853308.md) · 呼出先 22件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`004894a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/004894a8.md) [`0048abd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048abd0.md) [`0048ac08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ac08.md)
- 新版 呼出元 1件 [`00853360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853360.md) · 呼出先 22件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`004894e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004894e8.md) [`0048ac10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ac10.md) [`0048ac48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ac48.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.47% / 新版 95.47%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00853760",
      "incomplete_value": true,
      "site": "00853760",
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
      "definition_site": "00853708",
      "incomplete_value": true,
      "site": "00853708",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00853770",
      "incomplete_value": true,
      "site": "00853770",
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
      "definition_site": "00853718",
      "incomplete_value": true,
      "site": "00853718",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00853768",
      "incomplete_value": true,
      "site": "00853774",
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
      "definition_site": "00853710",
      "incomplete_value": true,
      "site": "0085371c",
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
      "0085374c",
      "READ",
      [
        "storage",
        "002b099a",
        null,
        "string"
      ]
    ],
    [
      "00853764",
      "READ",
      [
        "storage",
        "002b802c",
        null,
        "string"
      ]
    ],
    [
      "00853768",
      "READ",
      [
        "storage",
        "002b8033",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0085374c",
      "READ",
      [
        "storage",
        "002b093e",
        null,
        "string"
      ]
    ],
    [
      "00853764",
      "READ",
      [
        "storage",
        "002b806c",
        null,
        "string"
      ]
    ],
    [
      "00853768",
      "READ",
      [
        "storage",
        "002b8073",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008536e8 ["COPY", "tmp:0:8", ["const:99a:8"]]
- 008536e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008536e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008536e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00853740 ["COPY", "tmp:0:8", ["const:93e:8"]]
+ 00853740 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00853740 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00853740 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008536fc ["COPY", "register:4040:8", ["const:2b8000:8"]]
- 00853700 ["COPY", "tmp:0:8", ["const:2c:8"]]
- 00853700 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00853700 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00853700 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00853758 ["COPY", "tmp:0:8", ["const:6c:8"]]
+ 00853758 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00853758 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00853758 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0d0fb0e8132d0acf9ce7fc30255b9aa"></a>

### [`00853c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c78.md) → [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) FUN_00853cd0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ce20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce20.md) [`0047cf08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cf08.md) [`0047d1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d1bc.md) [`0047d1f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d1f8.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce60.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md) [`0047d238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d238.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.49% / 新版 97.49%

優先判定に残った影響 `call_target` 5件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00853d84",
      "incomplete_value": true,
      "site": "00853d88",
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
                "const:caa000:8"
              ],
              [
                "leaf",
                "const:510:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00853d2c",
      "incomplete_value": true,
      "site": "00853d30",
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
                "const:caa000:8"
              ],
              [
                "leaf",
                "const:410:8"
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
      "definition_site": "00853da4",
      "incomplete_value": true,
      "site": "00853da8",
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
                "const:caa000:8"
              ],
              [
                "leaf",
                "const:518:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00853d4c",
      "incomplete_value": true,
      "site": "00853d50",
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
                "const:caa000:8"
              ],
              [
                "leaf",
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00853dc4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00853d6c",
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
      "00853d84",
      "READ",
      [
        "storage",
        "00caa410",
        null,
        "undefined8"
      ]
    ],
    [
      "00853da4",
      "READ",
      [
        "storage",
        "00caa418",
        null,
        "undefined8"
      ]
    ],
    [
      "00853dc4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00853d84",
      "READ",
      [
        "storage",
        "00caa510",
        null,
        "undefined8"
      ]
    ],
    [
      "00853da4",
      "READ",
      [
        "storage",
        "00caa518",
        null,
        "undefined8"
      ]
    ],
    [
      "00853dc4",
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
- 00853d2c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:410:8"]]
- 00853d2c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00853d84 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:510:8"]]
+ 00853d84 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00853d30 ["INT_ADD", "register:40f0:8", ["const:853d30:8", "const:4:8"]]
- 00853d30 ["CALL", null, ["callee:00888450:8"]]
+ 00853d88 ["INT_ADD", "register:40f0:8", ["const:853d88:8", "const:4:8"]]
+ 00853d88 ["CALL", null, ["callee:00888450:8"]]
- 00853d50 ["INT_ADD", "register:40f0:8", ["const:853d50:8", "const:4:8"]]
- 00853d50 ["CALL", null, ["callee:00891b8c:8"]]
+ 00853da8 ["INT_ADD", "register:40f0:8", ["const:853da8:8", "const:4:8"]]
+ 00853da8 ["CALL", null, ["callee:00891b8c:8"]]
~~~


<a id="compare-bae13d15630901a0a10afa19f7b0c9d4"></a>

### [`0085408c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/0085408c.md) → [`008540e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008540e4.md) FUN_008540e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 14件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`006bed5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bed5c.md) [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 15件 [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md) [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`006a2d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d48.md) [`006a2d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d4c.md)
- 新版 呼出元 14件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 15件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0085412c",
      "incomplete_value": false,
      "site": "00854134",
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
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008540d4",
      "incomplete_value": false,
      "site": "008540dc",
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
            "const:740:8"
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
      "definition_site": "008541ac",
      "incomplete_value": true,
      "site": "008541c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8b5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00854154",
      "incomplete_value": true,
      "site": "00854168",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:875:8"
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
      "definition_site": "00854248",
      "incomplete_value": false,
      "site": "00854250",
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
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008541f0",
      "incomplete_value": false,
      "site": "008541f8",
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
            "const:7c0:8"
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
      "00854134",
      "DATA",
      [
        "storage",
        "00c7f740",
        null,
        "undefined *"
      ]
    ],
    [
      "008541ac",
      "READ",
      [
        "storage",
        "002b7875",
        null,
        "string"
      ]
    ],
    [
      "00854214",
      "PARAM",
      [
        "storage",
        "006a2d48",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00854134",
      "DATA",
      [
        "storage",
        "00c7f810",
        null,
        "undefined *"
      ]
    ],
    [
      "008541ac",
      "READ",
      [
        "storage",
        "002b78b5",
        null,
        "string"
      ]
    ],
    [
      "00854214",
      "PARAM",
      [
        "storage",
        "006a2da0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00854110 ["INT_ADD", "register:40f0:8", ["const:854110:8", "const:4:8"]]
- 00854110 ["CALL", null, ["callee:00c581b0:8"]]
+ 00854168 ["INT_ADD", "register:40f0:8", ["const:854168:8", "const:4:8"]]
+ 00854168 ["CALL", null, ["callee:00c581b0:8"]]
- 008541c8 ["INT_ADD", "register:40f0:8", ["const:8541c8:8", "const:4:8"]]
- 008541c8 ["CALL", null, ["callee:006a2da4:8"]]
+ 00854220 ["INT_ADD", "register:40f0:8", ["const:854220:8", "const:4:8"]]
+ 00854220 ["CALL", null, ["callee:006a2da4:8"]]
- 008540bc ["INT_ADD", "register:40f0:8", ["const:8540bc:8", "const:4:8"]]
- 008540bc ["CALL", null, ["callee:00a86880:8"]]
+ 00854114 ["INT_ADD", "register:40f0:8", ["const:854114:8", "const:4:8"]]
+ 00854114 ["CALL", null, ["callee:00a86880:8"]]
~~~


<a id="compare-ac6c88780e9a1368d56e43fa5a40790a"></a>

### [`008542f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008542f8.md) → [`00854350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854350.md) FUN_00854350

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`0075b9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075b/0075b9c4.md) [`00853c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c78.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 14件 [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md) [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`006a2d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d48.md) [`006a2d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d4c.md)
- 新版 呼出元 4件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 14件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.18% / 新版 84.18%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 10件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00854384",
      "incomplete_value": false,
      "site": "0085438c",
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
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085432c",
      "incomplete_value": false,
      "site": "00854334",
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
            "const:840:8"
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
      "definition_site": "00854410",
      "incomplete_value": true,
      "site": "00854410",
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
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:e6d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008543b8",
      "incomplete_value": true,
      "site": "008543b8",
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
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:ec9:8"
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
      "definition_site": "00854404",
      "incomplete_value": true,
      "site": "00854414",
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
      "definition_site": "008543ac",
      "incomplete_value": true,
      "site": "008543bc",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0085438c",
      "DATA",
      [
        "storage",
        "00c7f840",
        null,
        "undefined *"
      ]
    ],
    [
      "00854400",
      "READ",
      [
        "storage",
        "002aeec9",
        null,
        "string"
      ]
    ],
    [
      "00854404",
      "READ",
      [
        "storage",
        "002aeed0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0085438c",
      "DATA",
      [
        "storage",
        "00c7f910",
        null,
        "undefined *"
      ]
    ],
    [
      "00854400",
      "READ",
      [
        "storage",
        "002aee6d",
        null,
        "string"
      ]
    ],
    [
      "00854404",
      "READ",
      [
        "storage",
        "002aee74",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00854364 ["INT_ADD", "register:40f0:8", ["const:854364:8", "const:4:8"]]
- 00854364 ["CALL", null, ["callee:00c581b0:8"]]
+ 008543bc ["INT_ADD", "register:40f0:8", ["const:8543bc:8", "const:4:8"]]
+ 008543bc ["CALL", null, ["callee:00c581b0:8"]]
- 0085438c ["INT_ADD", "register:40f0:8", ["const:85438c:8", "const:4:8"]]
- 0085438c ["CALL", null, ["callee:006a2bd0:8"]]
+ 008543e4 ["INT_ADD", "register:40f0:8", ["const:8543e4:8", "const:4:8"]]
+ 008543e4 ["CALL", null, ["callee:006a2bd0:8"]]
- 008543a0 ["COPY", "tmp:0:8", ["const:ec9:8"]]
- 008543a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008543a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008543a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008543f8 ["COPY", "tmp:0:8", ["const:e6d:8"]]
+ 008543f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008543f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008543f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-35a10a014f1b0ce2a483c1701498f8a8"></a>

### [`0085460c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/0085460c.md) → [`00854664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854664.md) FUN_00854664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ce28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce28.md) [`00597638`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597638.md) [`005e0d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0d68.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`00597678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597678.md) [`005e0da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0da8.md)

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
      "site": "00854678",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00854620",
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
      "00854678",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00854678",
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
- 00854620 ["INT_ADD", "register:40f0:8", ["const:854620:8", "const:4:8"]]
- 00854620 ["CALL", null, ["ram:47acf4:8"]]
+ 00854678 ["INT_ADD", "register:40f0:8", ["const:854678:8", "const:4:8"]]
+ 00854678 ["CALL", null, ["ram:47ad34:8"]]
- 00854624 ["INT_ADD", "register:40f0:8", ["const:854624:8", "const:4:8"]]
- 00854624 ["CALL", null, ["callee:0047ce68:8"]]
+ 0085467c ["INT_ADD", "register:40f0:8", ["const:85467c:8", "const:4:8"]]
+ 0085467c ["CALL", null, ["callee:0047ce68:8"]]
- 00854634 ["INT_ADD", "register:40f0:8", ["const:854634:8", "const:4:8"]]
- 00854634 ["CALL", null, ["callee:005e0da8:8"]]
+ 0085468c ["INT_ADD", "register:40f0:8", ["const:85468c:8", "const:4:8"]]
+ 0085468c ["CALL", null, ["callee:005e0da8:8"]]
~~~


<a id="compare-6dfb79d384990ea38b10a88472acaa3a"></a>

### [`00854670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/00854670.md) → [`008546c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008546c8.md) FUN_008546c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047b7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047b/0047b7c0.md) [`0047b848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047b/0047b848.md) [`0047bd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047b/0047bd00.md) [`0069ec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ec1c.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047b800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b800.md) [`0047b888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b888.md) [`0047bd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047bd40.md) [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.86% / 新版 96.86%

優先判定に残った影響 `call_target` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008547e0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00854788",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008547f4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0085479c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00854804",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008547ac",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "008547e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008547f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00854804",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008547e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008547f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00854804",
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
- 00854744 ["INT_ADD", "register:40f0:8", ["const:854744:8", "const:4:8"]]
- 00854744 ["CALL", null, ["callee:00c53da0:8"]]
+ 0085479c ["INT_ADD", "register:40f0:8", ["const:85479c:8", "const:4:8"]]
+ 0085479c ["CALL", null, ["callee:00c53da0:8"]]
- 00854788 ["INT_ADD", "register:40f0:8", ["const:854788:8", "const:4:8"]]
- 00854788 ["CALL", null, ["ram:47acf4:8"]]
+ 008547e0 ["INT_ADD", "register:40f0:8", ["const:8547e0:8", "const:4:8"]]
+ 008547e0 ["CALL", null, ["ram:47ad34:8"]]
- 0085479c ["INT_ADD", "register:40f0:8", ["const:85479c:8", "const:4:8"]]
- 0085479c ["CALL", null, ["ram:47acf4:8"]]
+ 008547f4 ["INT_ADD", "register:40f0:8", ["const:8547f4:8", "const:4:8"]]
+ 008547f4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-aff70ebccf6edd0ead408a5313e6baa9"></a>

### [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) → [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) FUN_00856e84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 167件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00440b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440b00.md) [`0044b188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b188.md)
- 新版 呼出元 0件  · 呼出先 167件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md) [`0044b1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b1c8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 93.00% / 新版 93.00%

優先判定に残った影響 `call_argument_candidate` 45件, `call_target` 48件, `store_destination` 1件, `store_value` 11件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00857140",
      "incomplete_value": true,
      "site": "00857140",
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
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008570e8",
      "incomplete_value": true,
      "site": "008570e8",
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
            "const:330:8"
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008573e4",
      "incomplete_value": true,
      "site": "008573f4",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b5000:8"
              ],
              [
                "leaf",
                "const:3cc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085738c",
      "incomplete_value": true,
      "site": "0085739c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b5000:8"
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
    "ordinal": 64,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008573e8",
      "incomplete_value": true,
      "site": "008573f8",
      "value": [
        "LOAD",
        "16",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00857390",
      "incomplete_value": true,
      "site": "008573a0",
      "value": [
        "LOAD",
        "16",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 65,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00856f70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00856f7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00856f80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048dcb8"
      ]
    ]
  ],
  "added": [
    [
      "00856f70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00856f7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00856f80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048dcf8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00856f18 ["INT_ADD", "register:40f0:8", ["const:856f18:8", "const:4:8"]]
- 00856f18 ["CALL", null, ["ram:48ccf8:8"]]
+ 00856f70 ["INT_ADD", "register:40f0:8", ["const:856f70:8", "const:4:8"]]
+ 00856f70 ["CALL", null, ["ram:48cd38:8"]]
- 00856f24 ["INT_ADD", "register:40f0:8", ["const:856f24:8", "const:4:8"]]
- 00856f24 ["CALL", null, ["ram:48ccf8:8"]]
+ 00856f7c ["INT_ADD", "register:40f0:8", ["const:856f7c:8", "const:4:8"]]
+ 00856f7c ["CALL", null, ["ram:48cd38:8"]]
- 00856f28 ["INT_ADD", "register:40f0:8", ["const:856f28:8", "const:4:8"]]
- 00856f28 ["CALL", null, ["ram:48dcb8:8"]]
+ 00856f80 ["INT_ADD", "register:40f0:8", ["const:856f80:8", "const:4:8"]]
+ 00856f80 ["CALL", null, ["ram:48dcf8:8"]]
~~~


<a id="compare-120dcd61a8eade4a09eaa7dc531db734"></a>

### [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) → [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) FUN_00859bb0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 81件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00467afc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467afc.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467be8.md)
- 新版 呼出元 0件  · 呼出先 81件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b3c.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467c28.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.57% / 新版 97.57%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 10件, `call_target` 12件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0085a95c",
      "incomplete_value": true,
      "site": "0085a95c",
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
      "definition_site": "0085a904",
      "incomplete_value": true,
      "site": "0085a904",
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
    "ordinal": 97,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0085a9a0",
      "incomplete_value": true,
      "site": "0085a9a0",
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
      "definition_site": "0085a948",
      "incomplete_value": true,
      "site": "0085a948",
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
    "ordinal": 99,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0085aa00",
      "incomplete_value": true,
      "site": "0085aa00",
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
      "definition_site": "0085a9a8",
      "incomplete_value": true,
      "site": "0085a9a8",
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
    "ordinal": 103,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00859c44",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "00859c54",
      "READ",
      [
        "storage",
        "00ca4c78",
        null,
        "undefined4"
      ]
    ],
    [
      "00859c54",
      "READ",
      [
        "storage",
        "00ca4c7c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00859c44",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "00859c54",
      "READ",
      [
        "storage",
        "00ca4d78",
        null,
        "undefined4"
      ]
    ],
    [
      "00859c54",
      "READ",
      [
        "storage",
        "00ca4d7c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00859c00 ["INT_ADD", "register:40f0:8", ["const:859c00:8", "const:4:8"]]
- 00859c00 ["CALL", null, ["callee:00467d84:8"]]
+ 00859c58 ["INT_ADD", "register:40f0:8", ["const:859c58:8", "const:4:8"]]
+ 00859c58 ["CALL", null, ["callee:00467d84:8"]]
- 00859db0 ["INT_ADD", "register:40f0:8", ["const:859db0:8", "const:4:8"]]
- 00859db0 ["CALL", null, ["callee:00c586e0:8"]]
+ 00859e08 ["INT_ADD", "register:40f0:8", ["const:859e08:8", "const:4:8"]]
+ 00859e08 ["CALL", null, ["callee:00c586e0:8"]]
- 00859e3c ["INT_ADD", "register:40f0:8", ["const:859e3c:8", "const:4:8"]]
- 00859e3c ["CALL", null, ["callee:0046cac4:8"]]
+ 00859e94 ["INT_ADD", "register:40f0:8", ["const:859e94:8", "const:4:8"]]
+ 00859e94 ["CALL", null, ["callee:0046cac4:8"]]
~~~


<a id="compare-dae0f1ecb80b649374e00e081badb2af"></a>

### [`0085ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085a/0085ade0.md) → [`0085ae38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085a/0085ae38.md) FUN_0085ae38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 15件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00468c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 15件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0085ae70",
      "incomplete_value": true,
      "site": "0085ae70",
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
      "definition_site": "0085ae18",
      "incomplete_value": true,
      "site": "0085ae18",
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
      "definition_site": "0085ae78",
      "incomplete_value": false,
      "site": "0085ae8c",
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
      "definition_site": "0085ae20",
      "incomplete_value": false,
      "site": "0085ae34",
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
      "definition_site": "0085ae80",
      "incomplete_value": false,
      "site": "0085ae8c",
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
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085ae28",
      "incomplete_value": false,
      "site": "0085ae34",
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
            "const:e68:8"
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
      "0085ae6c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0085ae78",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0085ae80",
      "PARAM",
      [
        "storage",
        "00c65e68",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0085ae6c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0085ae78",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0085ae80",
      "PARAM",
      [
        "storage",
        "00c65f38",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0085ae34 ["INT_ADD", "register:40f0:8", ["const:85ae34:8", "const:4:8"]]
- 0085ae34 ["CALL", null, ["callee:00c586e0:8"]]
+ 0085ae8c ["INT_ADD", "register:40f0:8", ["const:85ae8c:8", "const:4:8"]]
+ 0085ae8c ["CALL", null, ["callee:00c586e0:8"]]
- 0085ae4c ["INT_ADD", "register:40f0:8", ["const:85ae4c:8", "const:4:8"]]
- 0085ae4c ["CALL", null, ["callee:0046ca94:8"]]
+ 0085aea4 ["INT_ADD", "register:40f0:8", ["const:85aea4:8", "const:4:8"]]
+ 0085aea4 ["CALL", null, ["callee:0046ca94:8"]]
- 0085ae14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 0085ae14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0085ae6c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 0085ae6c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6deba8cec3fafd62116d61f7be371b0c"></a>

### [`0085b138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b138.md) → [`0085b190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b190.md) FUN_0085b190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0046ca54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca54.md) [`0046cb0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb0c.md) [`0048ce4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce4c.md) [`0048d280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048d280.md) [`0083f290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0048ce8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce8c.md) [`0048d2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d2c0.md) [`0083f2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f2e8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.80% / 新版 97.80%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0085b208",
      "incomplete_value": true,
      "site": "0085b20c",
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
                "register:4000:8"
              ],
              [
                "leaf",
                "const:c38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085b1b0",
      "incomplete_value": true,
      "site": "0085b1b4",
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
                "register:4000:8"
              ],
              [
                "leaf",
                "const:b68:8"
              ]
            ]
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
      "definition_site": "0085b248",
      "incomplete_value": false,
      "site": "0085b24c",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085b1f0",
      "incomplete_value": false,
      "site": "0085b1f4",
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
            "const:c70:8"
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
      "0085b208",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "0085b208",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ],
    [
      "0085b248",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0085b208",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "0085b208",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "0085b248",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0085b1b4 ["INT_ADD", "register:40f0:8", ["const:85b1b4:8", "const:4:8"]]
- 0085b1b4 ["CALL", null, ["callee:0046ca94:8"]]
+ 0085b20c ["INT_ADD", "register:40f0:8", ["const:85b20c:8", "const:4:8"]]
+ 0085b20c ["CALL", null, ["callee:0046ca94:8"]]
- 0085b1f4 ["INT_ADD", "register:40f0:8", ["const:85b1f4:8", "const:4:8"]]
- 0085b1f4 ["CALL", null, ["callee:0046cb4c:8"]]
+ 0085b24c ["INT_ADD", "register:40f0:8", ["const:85b24c:8", "const:4:8"]]
+ 0085b24c ["CALL", null, ["callee:0046cb4c:8"]]
- 0085b188 ["INT_ADD", "register:40f0:8", ["const:85b188:8", "const:4:8"]]
- 0085b188 ["CALL", null, ["callee:0048d2c0:8"]]
+ 0085b1e0 ["INT_ADD", "register:40f0:8", ["const:85b1e0:8", "const:4:8"]]
+ 0085b1e0 ["CALL", null, ["callee:0048d2c0:8"]]
~~~


<a id="compare-4c3d7b79ecb34b2fe2023f12a8f57b12"></a>

### [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) → [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) FUN_0085b488

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`00877a70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877a70.md) [`00877d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877d50.md) · 呼出先 25件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`004953d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00495/004953d4.md)
- 新版 呼出元 3件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00877ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ac8.md) [`00877da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877da8.md) · 呼出先 25件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00495414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00495/00495414.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 94.43% / 新版 94.43%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0085b53c",
      "incomplete_value": false,
      "site": "0085b548",
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
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085b4e4",
      "incomplete_value": false,
      "site": "0085b4f0",
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
            "const:b78:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0085b5b8",
      "incomplete_value": false,
      "site": "0085b5b8",
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
    "old": {
      "definition_site": "0085b560",
      "incomplete_value": false,
      "site": "0085b560",
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
            "const:968:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0085b5ac",
      "incomplete_value": true,
      "site": "0085b5b8",
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
    "old": {
      "definition_site": "0085b554",
      "incomplete_value": true,
      "site": "0085b560",
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
                "const:978:8"
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
      "0085b4c4",
      "PARAM",
      [
        "storage",
        "00c65470",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0085b4cc",
      "PARAM",
      [
        "storage",
        "00c7fb50",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0085b548",
      "DATA",
      [
        "storage",
        "00c7fb78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0085b4c4",
      "PARAM",
      [
        "storage",
        "00c65540",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0085b4cc",
      "PARAM",
      [
        "storage",
        "00c7fc20",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0085b548",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0085b47c ["INT_ADD", "register:40f0:8", ["const:85b47c:8", "const:4:8"]]
- 0085b47c ["CALL", null, ["callee:00c586e0:8"]]
+ 0085b4d4 ["INT_ADD", "register:40f0:8", ["const:85b4d4:8", "const:4:8"]]
+ 0085b4d4 ["CALL", null, ["callee:00c586e0:8"]]
- 0085b560 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:968:8"]]
- 0085b560 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 0085b5b8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a68:8"]]
+ 0085b5b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 0085b564 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:978:8"]]
- 0085b564 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 0085b5bc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
+ 0085b5bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-5595c836e3d7afa64a1fe1ac945767ab"></a>

### [`0085c14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085c14c.md) → [`0085c1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085c1a4.md) FUN_0085c1a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`006dfc2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006df/006dfc2c.md) [`007bbe1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bbe1c.md) [`0085ccf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085ccf0.md) [`009ccb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009ccb7c.md) [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 17件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`006e0500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e0/006e0500.md)
- 新版 呼出元 5件 [`006dfc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006dfc84.md) [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) [`0085cd48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085cd48.md) [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 17件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`006e0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0558.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.86% / 新版 99.86%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0085c2bc",
      "value": [
        "leaf",
        "ram:8040cc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0085c264",
      "value": [
        "leaf",
        "ram:804074:8"
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
      "0085c2bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00804074"
      ]
    ]
  ],
  "added": [
    [
      "0085c2bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008040cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0085c264 ["INT_ADD", "register:40f0:8", ["const:85c264:8", "const:4:8"]]
- 0085c264 ["CALL", null, ["ram:804074:8"]]
+ 0085c2bc ["INT_ADD", "register:40f0:8", ["const:85c2bc:8", "const:4:8"]]
+ 0085c2bc ["CALL", null, ["ram:8040cc:8"]]
- 0085c2bc ["INT_ADD", "register:40f0:8", ["const:85c2bc:8", "const:4:8"]]
- 0085c2bc ["CALL", null, ["callee:00802710:8"]]
+ 0085c314 ["INT_ADD", "register:40f0:8", ["const:85c314:8", "const:4:8"]]
+ 0085c314 ["CALL", null, ["callee:00802710:8"]]
- 0085c200 ["INT_ADD", "register:40f0:8", ["const:85c200:8", "const:4:8"]]
- 0085c200 ["CALL", null, ["callee:006e0558:8"]]
+ 0085c258 ["INT_ADD", "register:40f0:8", ["const:85c258:8", "const:4:8"]]
+ 0085c258 ["CALL", null, ["callee:006e0558:8"]]
~~~


<a id="compare-2b43daec0dcd3d2912ed11c9c4b994bf"></a>

### [`0085cefc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085cefc.md) → [`0085cf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085cf54.md) FUN_0085cf54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`006bea88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bea88.md) [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) [`00a8e5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8e/00a8e5b4.md) [`00ab0ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab0/00ab0ddc.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`007457bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/007457bc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`006beae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006beae0.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) [`00ab0e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab0e4c.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00745814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745814.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.69% / 新版 96.69%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0085d038",
      "incomplete_value": true,
      "site": "0085d040",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085cfe0",
      "incomplete_value": true,
      "site": "0085cfe8",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca3000:8"
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0085d05c",
      "incomplete_value": true,
      "site": "0085d06c",
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085d004",
      "incomplete_value": true,
      "site": "0085d014",
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
                "const:ca3000:8"
              ],
              [
                "leaf",
                "const:f38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0085d0c0",
      "incomplete_value": true,
      "site": "0085d0cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085d068",
      "incomplete_value": true,
      "site": "0085d074",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca3000:8"
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
      "0085d018",
      "DATA",
      [
        "storage",
        "003c7c70",
        null,
        "qword"
      ]
    ],
    [
      "0085d038",
      "READ",
      [
        "storage",
        "00ca3f50",
        null,
        null
      ]
    ],
    [
      "0085d05c",
      "READ",
      [
        "storage",
        "00ca3f38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0085d018",
      "DATA",
      [
        "storage",
        "003c7c70",
        null,
        "dword"
      ]
    ],
    [
      "0085d038",
      "READ",
      [
        "storage",
        "00ca4020",
        null,
        null
      ]
    ],
    [
      "0085d05c",
      "READ",
      [
        "storage",
        "00ca4008",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0085cfd8 ["COPY", "register:4040:8", ["const:ca3000:8"]]
+ 0085d030 ["COPY", "register:4040:8", ["const:ca4000:8"]]
- 0085cfdc ["COPY", "tmp:0:8", ["const:f50:8"]]
- 0085cfdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0085cfdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0085cfdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0085d034 ["COPY", "tmp:0:8", ["const:20:8"]]
+ 0085d034 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0085d034 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0085d034 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0085cffc ["COPY", "register:4040:8", ["const:ca3000:8"]]
+ 0085d054 ["COPY", "register:4040:8", ["const:ca4000:8"]]
~~~


<a id="compare-f63b93c3e55092bce1a524fabf53b5a2"></a>

### [`0085d4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085d/0085d4f4.md) → [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) FUN_0085d54c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0075ea44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075ea44.md) [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`00ab0ddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab0/00ab0ddc.md) · 呼出先 33件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00730cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00730/00730cd4.md) [`00730cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00730/00730cfc.md) [`00731970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00731/00731970.md)
- 新版 呼出元 3件 [`0075ea9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ea9c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00ab0e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab0e4c.md) · 呼出先 33件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00730d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730d2c.md) [`00730d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00730/00730d54.md) [`007319c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/007319c8.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.33% / 新版 99.33%

優先判定に残った影響 `call_target` 13件, `store_value` 1件

アドレスに依存する影響 `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0085da88",
      "incomplete_value": false,
      "site": "0085da88",
      "value": [
        "leaf",
        "const:860a30:8"
      ]
    },
    "old": {
      "definition_site": "0085da30",
      "incomplete_value": false,
      "site": "0085da30",
      "value": [
        "leaf",
        "const:8609d8:8"
      ]
    },
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0085dc80",
      "incomplete_value": false,
      "site": "0085dc80",
      "value": [
        "leaf",
        "const:860a30:8"
      ]
    },
    "old": {
      "definition_site": "0085dc28",
      "incomplete_value": false,
      "site": "0085dc28",
      "value": [
        "leaf",
        "const:8609d8:8"
      ]
    },
    "ordinal": 64,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0085ddfc",
      "incomplete_value": false,
      "site": "0085ddfc",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0085dda4",
      "incomplete_value": false,
      "site": "0085dda4",
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
            "const:940:8"
          ]
        ]
      ]
    },
    "ordinal": 66,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0085d5d4",
      "DATA",
      [
        "storage",
        "0038e030",
        "fde_0038e030",
        "dword"
      ]
    ],
    [
      "0085d5fc",
      "DATA",
      [
        "storage",
        "0038e030",
        "fde_0038e030",
        "dword"
      ]
    ],
    [
      "0085d610",
      "DATA",
      [
        "storage",
        "0038e028",
        null,
        "byte[27]"
      ]
    ]
  ],
  "added": [
    [
      "0085d5d4",
      "DATA",
      [
        "storage",
        "0038e030",
        null,
        "byte[27]"
      ]
    ],
    [
      "0085d5fc",
      "DATA",
      [
        "storage",
        "0038e030",
        null,
        "byte[27]"
      ]
    ],
    [
      "0085d610",
      "DATA",
      [
        "storage",
        "0038e028",
        null,
        "uleb128"
      ]
    ]
  ]
}
~~~


~~~diff
- 0085dac4 ["INT_ADD", "register:40f0:8", ["const:85dac4:8", "const:4:8"]]
- 0085dac4 ["CALL", null, ["ram:804074:8"]]
+ 0085db1c ["INT_ADD", "register:40f0:8", ["const:85db1c:8", "const:4:8"]]
+ 0085db1c ["CALL", null, ["ram:8040cc:8"]]
- 0085e250 ["INT_ADD", "register:40f0:8", ["const:85e250:8", "const:4:8"]]
- 0085e250 ["CALL", null, ["ram:804074:8"]]
+ 0085e2a8 ["INT_ADD", "register:40f0:8", ["const:85e2a8:8", "const:4:8"]]
+ 0085e2a8 ["CALL", null, ["ram:8040cc:8"]]
- 0085e804 ["INT_ADD", "register:40f0:8", ["const:85e804:8", "const:4:8"]]
- 0085e804 ["CALL", null, ["ram:804074:8"]]
+ 0085e85c ["INT_ADD", "register:40f0:8", ["const:85e85c:8", "const:4:8"]]
+ 0085e85c ["CALL", null, ["ram:8040cc:8"]]
~~~


<a id="compare-bd8aadd4bb47b102efb1cdb86af3c040"></a>

### [`00860a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00860/00860a90.md) → [`00860ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00860/00860ae8.md) FUN_00860ae8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) [`00a85294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a85/00a85294.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005c1844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1844.md)
- 新版 呼出元 3件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) [`00a85304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a85/00a85304.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1884.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.88% / 新版 98.88%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00861060",
      "incomplete_value": true,
      "site": "00861060",
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
      "definition_site": "00861008",
      "incomplete_value": true,
      "site": "00861008",
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
    "ordinal": 81,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008610e4",
      "incomplete_value": true,
      "site": "008610ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "0086108c",
      "incomplete_value": true,
      "site": "00861094",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 86,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086104c",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ],
    [
      "008610e4",
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
      "0086104c",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "008610e4",
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
- 00860ae0 ["INT_ADD", "register:40f0:8", ["const:860ae0:8", "const:4:8"]]
- 00860ae0 ["CALL", null, ["callee:0046d7f0:8"]]
+ 00860b38 ["INT_ADD", "register:40f0:8", ["const:860b38:8", "const:4:8"]]
+ 00860b38 ["CALL", null, ["callee:0046d7f0:8"]]
- 00860b38 ["INT_ADD", "register:40f0:8", ["const:860b38:8", "const:4:8"]]
- 00860b38 ["CALL", null, ["callee:00c57f60:8"]]
+ 00860b90 ["INT_ADD", "register:40f0:8", ["const:860b90:8", "const:4:8"]]
+ 00860b90 ["CALL", null, ["callee:00c57f60:8"]]
- 00860b80 ["INT_ADD", "register:40f0:8", ["const:860b80:8", "const:4:8"]]
- 00860b80 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00860bd8 ["INT_ADD", "register:40f0:8", ["const:860bd8:8", "const:4:8"]]
+ 00860bd8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-251a7309cf8c8feb13b8b81ba1dd7a87"></a>

### [`00861388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00861/00861388.md) → [`008613e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008613e0.md) FUN_008613e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 9件 [`005509b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b8.md) [`00871b84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871b84.md) [`00871b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871b88.md) [`0087d504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d504.md) [`0087d508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d508.md)
- 新版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 9件 [`005509f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f8.md) [`00871bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871bdc.md) [`00871be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871be0.md) [`0087d55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d55c.md) [`0087d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d560.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00861410",
      "incomplete_value": false,
      "site": "00861410",
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
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008613b8",
      "incomplete_value": false,
      "site": "008613b8",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086141c",
      "value": [
        "leaf",
        "ram:5509f8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008613c4",
      "value": [
        "leaf",
        "ram:5509b8:8"
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
      "00861410",
      "DATA",
      [
        "storage",
        "00c7f9d0",
        null,
        "undefined *"
      ]
    ],
    [
      "0086141c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005509b8"
      ]
    ],
    [
      "00861444",
      "READ",
      [
        "storage",
        "00c7f9f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00861410",
      "DATA",
      [
        "storage",
        "00c7faa0",
        null,
        "undefined *"
      ]
    ],
    [
      "0086141c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005509f8"
      ]
    ],
    [
      "00861444",
      "READ",
      [
        "storage",
        "00c7fac0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008613c4 ["INT_ADD", "register:40f0:8", ["const:8613c4:8", "const:4:8"]]
- 008613c4 ["CALL", null, ["ram:5509b8:8"]]
+ 0086141c ["INT_ADD", "register:40f0:8", ["const:86141c:8", "const:4:8"]]
+ 0086141c ["CALL", null, ["ram:5509f8:8"]]
- 0086141c ["INT_ADD", "register:40f0:8", ["const:86141c:8", "const:4:8"]]
- 0086141c ["CALL", null, ["callee:00c57f80:8"]]
+ 00861474 ["INT_ADD", "register:40f0:8", ["const:861474:8", "const:4:8"]]
+ 00861474 ["CALL", null, ["callee:00c57f80:8"]]
- 008613b4 ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 008613b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008613b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008613b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086140c ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 0086140c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086140c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086140c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cd3d443682260d8144da6aeba174dac4"></a>

### [`0086155c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00861/0086155c.md) → [`008615b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008615b4.md) FUN_008615b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 98.79% / 新版 98.79%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008615f8",
      "incomplete_value": false,
      "site": "00861600",
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
      "definition_site": "008615a0",
      "incomplete_value": false,
      "site": "008615a8",
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
      "definition_site": "00861628",
      "incomplete_value": true,
      "site": "00861638",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:836:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008615d0",
      "incomplete_value": true,
      "site": "008615e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:88a:8"
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
      "definition_site": "00862714",
      "incomplete_value": true,
      "site": "00862718",
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
      "definition_site": "008626bc",
      "incomplete_value": true,
      "site": "008626c0",
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
    "ordinal": 207,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00861600",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "00861628",
      "READ",
      [
        "storage",
        "002ba88a",
        null,
        "string"
      ]
    ],
    [
      "00862704",
      "READ",
      [
        "storage",
        "00c9abb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00861600",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00861628",
      "READ",
      [
        "storage",
        "002ba836",
        null,
        "string"
      ]
    ],
    [
      "00862704",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086271c ["INT_ADD", "register:40f0:8", ["const:86271c:8", "const:4:8"]]
- 0086271c ["CALL", null, ["callee:00c57f80:8"]]
+ 00862774 ["INT_ADD", "register:40f0:8", ["const:862774:8", "const:4:8"]]
+ 00862774 ["CALL", null, ["callee:00c57f80:8"]]
- 00861594 ["INT_ADD", "register:40f0:8", ["const:861594:8", "const:4:8"]]
- 00861594 ["CALL", null, ["callee:00487e60:8"]]
+ 008615ec ["INT_ADD", "register:40f0:8", ["const:8615ec:8", "const:4:8"]]
+ 008615ec ["CALL", null, ["callee:00487e60:8"]]
- 008615a0 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 008615a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008615a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008615a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008615f8 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 008615f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008615f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008615f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-35daeb916609710d35f7cc7bf095257f"></a>

### [`008628a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00862/008628a8.md) → [`00862900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862900.md) FUN_00862900

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00700544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700544.md) [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) [`00835bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00835/00835bb8.md) [`00a022d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a022d8.md) · 呼出先 8件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467e9c.md) [`00467ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ea4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md)
- 新版 呼出元 4件 [`0070059c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/0070059c.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`00835c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835c10.md) [`00a0232c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0232c.md) · 呼出先 8件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467edc.md) [`00467ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ee4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 90.74% / 新版 90.74%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00862930",
      "incomplete_value": true,
      "site": "00862934",
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
                "const:c38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008628d8",
      "incomplete_value": true,
      "site": "008628dc",
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
                "const:b68:8"
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
      "definition_site": "00862944",
      "incomplete_value": false,
      "site": "00862948",
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
    "old": {
      "definition_site": "008628ec",
      "incomplete_value": false,
      "site": "008628f0",
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
      "00862924",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "00862930",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ],
    [
      "00862944",
      "PARAM",
      [
        "storage",
        "00ca8170",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00862924",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "00862930",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00862944",
      "PARAM",
      [
        "storage",
        "00ca8270",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008628dc ["INT_ADD", "register:40f0:8", ["const:8628dc:8", "const:4:8"]]
- 008628dc ["CALL", null, ["callee:0046cb14:8"]]
+ 00862934 ["INT_ADD", "register:40f0:8", ["const:862934:8", "const:4:8"]]
+ 00862934 ["CALL", null, ["callee:0046cb14:8"]]
- 008628f0 ["INT_ADD", "register:40f0:8", ["const:8628f0:8", "const:4:8"]]
- 008628f0 ["CALL", null, ["callee:0046ca04:8"]]
+ 00862948 ["INT_ADD", "register:40f0:8", ["const:862948:8", "const:4:8"]]
+ 00862948 ["CALL", null, ["callee:0046ca04:8"]]
- 008628cc ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:b68:8"]]
- 008628cc ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00862924 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c38:8"]]
+ 00862924 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


