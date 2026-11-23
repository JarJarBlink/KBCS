# v16.0.1 → v16.0.2 · 最優先の変更候補 (41)

[一覧の目次](README.md)

<a id="compare-c1104881fb1a14c3c95c2a104fde3beb"></a>

### [`0079e760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e760.md) → [`0079e7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e7b8.md) FUN_0079e7b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079a990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079a990.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079e7f0",
      "incomplete_value": false,
      "site": "0079e7f8",
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
      "definition_site": "0079e798",
      "incomplete_value": false,
      "site": "0079e7a0",
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
      "0079e7f8",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "0079e8b0",
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
      "0079e7f8",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "0079e8b0",
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
- 0079e790 ["INT_ADD", "register:40f0:8", ["const:79e790:8", "const:4:8"]]
- 0079e790 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079e7e8 ["INT_ADD", "register:40f0:8", ["const:79e7e8:8", "const:4:8"]]
+ 0079e7e8 ["CALL", null, ["callee:00c57f60:8"]]
- 0079e798 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 0079e798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079e7f0 ["COPY", "tmp:0:8", ["const:690:8"]]
+ 0079e7f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e7f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e7f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079e79c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-2ebaecfc19e9b1fe61fb5bd1aaeeef3c"></a>

### [`0079e8d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e8d8.md) → [`0079e930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e930.md) FUN_0079e930

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
      "definition_site": "0079e948",
      "incomplete_value": false,
      "site": "0079e958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e8f0",
      "incomplete_value": false,
      "site": "0079e900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:208:8"
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
      "0079e958",
      "DATA",
      [
        "storage",
        "00c7a208",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e958",
      "DATA",
      [
        "storage",
        "00c7a2d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e8f0 ["COPY", "tmp:0:8", ["const:208:8"]]
- 0079e8f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e8f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e8f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079e948 ["COPY", "tmp:0:8", ["const:2d8:8"]]
+ 0079e948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079e924 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e924 ["INT_ADD", "register:40f0:8", ["const:79e924:8", "const:4:8"]]
- 0079e924 ["CALLIND", null, ["register:0:8"]]
+ 0079e97c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079e97c ["INT_ADD", "register:40f0:8", ["const:79e97c:8", "const:4:8"]]
+ 0079e97c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b5d34530f5675844bfa04853edc55ce0"></a>

### [`0079e968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e968.md) → [`0079e9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e9c0.md) FUN_0079e9c0

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
      "definition_site": "0079e9d8",
      "incomplete_value": false,
      "site": "0079e9e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e980",
      "incomplete_value": false,
      "site": "0079e990",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:208:8"
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
      "0079e9e8",
      "DATA",
      [
        "storage",
        "00c7a208",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e9e8",
      "DATA",
      [
        "storage",
        "00c7a2d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e980 ["COPY", "tmp:0:8", ["const:208:8"]]
- 0079e980 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e980 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e980 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079e9d8 ["COPY", "tmp:0:8", ["const:2d8:8"]]
+ 0079e9d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e9d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e9d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079e9b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e9b4 ["INT_ADD", "register:40f0:8", ["const:79e9b4:8", "const:4:8"]]
- 0079e9b4 ["CALLIND", null, ["register:0:8"]]
+ 0079ea0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079ea0c ["INT_ADD", "register:40f0:8", ["const:79ea0c:8", "const:4:8"]]
+ 0079ea0c ["CALLIND", null, ["register:0:8"]]
- 0079e9e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e9e0 ["INT_ADD", "register:40f0:8", ["const:79e9e0:8", "const:4:8"]]
- 0079e9e0 ["CALLIND", null, ["register:0:8"]]
+ 0079ea38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079ea38 ["INT_ADD", "register:40f0:8", ["const:79ea38:8", "const:4:8"]]
+ 0079ea38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-956b116703c0a9d429935d970b46f81e"></a>

### [`0079eafc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079eafc.md) → [`0079eb54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079eb54.md) FUN_0079eb54

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
      "definition_site": "0079eb7c",
      "incomplete_value": false,
      "site": "0079eb7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079eb24",
      "incomplete_value": false,
      "site": "0079eb24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:208:8"
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
      "0079eb7c",
      "DATA",
      [
        "storage",
        "00c7a208",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079eb7c",
      "DATA",
      [
        "storage",
        "00c7a2d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079eb1c ["COPY", "tmp:0:8", ["const:208:8"]]
- 0079eb1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079eb1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079eb1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079eb74 ["COPY", "tmp:0:8", ["const:2d8:8"]]
+ 0079eb74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079eb74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079eb74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079eb20 ["COPY", "register:40a0:8", ["register:4008:8"]]
- 0079eb40 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079eb40 ["INT_ADD", "register:40f0:8", ["const:79eb40:8", "const:4:8"]]
- 0079eb40 ["CALLIND", null, ["register:0:8"]]
+ 0079eb98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079eb98 ["INT_ADD", "register:40f0:8", ["const:79eb98:8", "const:4:8"]]
+ 0079eb98 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c66d83b3006c75763651251b652c2f5f"></a>

### [`0079ee88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079ee88.md) → [`0079eee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079eee0.md) FUN_0079eee0

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
      "definition_site": "0079eeec",
      "incomplete_value": false,
      "site": "0079eef8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:358:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079ee94",
      "incomplete_value": false,
      "site": "0079eea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:288:8"
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
      "0079eef8",
      "DATA",
      [
        "storage",
        "00c7a288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079eef8",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079ee94 ["COPY", "tmp:0:8", ["const:288:8"]]
- 0079ee94 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0079ee94 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0079ee94 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0079eeec ["COPY", "tmp:0:8", ["const:358:8"]]
+ 0079eeec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0079eeec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0079eeec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-d7b729968f590959e866507efc1baab6"></a>

### [`0079eecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079eecc.md) → [`0079ef24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ef24.md) FUN_0079ef24

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
      "definition_site": "0079ef3c",
      "incomplete_value": false,
      "site": "0079ef48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:358:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079eee4",
      "incomplete_value": false,
      "site": "0079eef0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:288:8"
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
      "0079ef48",
      "DATA",
      [
        "storage",
        "00c7a288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079ef48",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079eee4 ["COPY", "tmp:0:8", ["const:288:8"]]
- 0079eee4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079eee4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079eee4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079ef3c ["COPY", "tmp:0:8", ["const:358:8"]]
+ 0079ef3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079ef3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079ef3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079ef14 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079ef14 ["INT_ADD", "register:40f0:8", ["const:79ef14:8", "const:4:8"]]
- 0079ef14 ["CALLIND", null, ["register:0:8"]]
+ 0079ef6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079ef6c ["INT_ADD", "register:40f0:8", ["const:79ef6c:8", "const:4:8"]]
+ 0079ef6c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-180ffbfe34c76b57a04a0c081a32e4b2"></a>

### [`0079ef28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079ef28.md) → [`0079ef80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ef80.md) FUN_0079ef80

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
      "definition_site": "0079efac",
      "incomplete_value": false,
      "site": "0079efac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:358:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079ef54",
      "incomplete_value": false,
      "site": "0079ef54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:288:8"
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
      "0079efac",
      "DATA",
      [
        "storage",
        "00c7a288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079efac",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079ef3c ["INT_ADD", "register:40f0:8", ["const:79ef3c:8", "const:4:8"]]
- 0079ef3c ["CALL", null, ["callee:00c57f60:8"]]
+ 0079ef94 ["INT_ADD", "register:40f0:8", ["const:79ef94:8", "const:4:8"]]
+ 0079ef94 ["CALL", null, ["callee:00c57f60:8"]]
- 0079ef4c ["COPY", "tmp:0:8", ["const:288:8"]]
- 0079ef4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079ef4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079ef4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079efa4 ["COPY", "tmp:0:8", ["const:358:8"]]
+ 0079efa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079efa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079efa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079ef70 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079ef70 ["INT_ADD", "register:40f0:8", ["const:79ef70:8", "const:4:8"]]
- 0079ef70 ["CALLIND", null, ["register:0:8"]]
+ 0079efc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079efc8 ["INT_ADD", "register:40f0:8", ["const:79efc8:8", "const:4:8"]]
+ 0079efc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-41025ad5bbad6c5889cb8bfefdcfd2bb"></a>

### [`0079efb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079efb0.md) → [`0079f008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f008.md) FUN_0079f008

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
      "definition_site": "0079f024",
      "incomplete_value": false,
      "site": "0079f024",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:358:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079efcc",
      "incomplete_value": false,
      "site": "0079efcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:288:8"
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
      "0079f024",
      "DATA",
      [
        "storage",
        "00c7a288",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f024",
      "DATA",
      [
        "storage",
        "00c7a358",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079efc8 ["COPY", "tmp:0:8", ["const:288:8"]]
- 0079efc8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079efc8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079efc8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079f020 ["COPY", "tmp:0:8", ["const:358:8"]]
+ 0079f020 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079f020 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079f020 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0079efec ["COPY", "register:0:8", ["register:4048:8"]]
- 0079efec ["INT_ADD", "register:40f0:8", ["const:79efec:8", "const:4:8"]]
- 0079efec ["CALLIND", null, ["register:0:8"]]
+ 0079f044 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0079f044 ["INT_ADD", "register:40f0:8", ["const:79f044:8", "const:4:8"]]
+ 0079f044 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d9a77e7db6e3052df942509ca3696be1"></a>

### [`0079f26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f26c.md) → [`0079f2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f2c4.md) FUN_0079f2c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0079f2dc",
      "incomplete_value": true,
      "site": "0079f2ec",
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
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f284",
      "incomplete_value": true,
      "site": "0079f294",
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
            "const:308:8"
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
      "0079f2ec",
      "DATA",
      [
        "storage",
        "00c7a308",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f2ec",
      "DATA",
      [
        "storage",
        "00c7a3d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f284 ["COPY", "tmp:0:8", ["const:308:8"]]
- 0079f284 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f284 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f284 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079f2dc ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 0079f2dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f2dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f2dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079f2b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f2b8 ["INT_ADD", "register:40f0:8", ["const:79f2b8:8", "const:4:8"]]
- 0079f2b8 ["CALLIND", null, ["register:0:8"]]
+ 0079f310 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f310 ["INT_ADD", "register:40f0:8", ["const:79f310:8", "const:4:8"]]
+ 0079f310 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-37c8fa8acbbd00bf381fe5038ea4fed9"></a>

### [`0079f388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f388.md) → [`0079f3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f3e0.md) FUN_0079f3e0

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
      "definition_site": "0079f410",
      "incomplete_value": false,
      "site": "0079f410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f3b8",
      "incomplete_value": false,
      "site": "0079f3b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:308:8"
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
      "0079f410",
      "DATA",
      [
        "storage",
        "00c7a308",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f410",
      "DATA",
      [
        "storage",
        "00c7a3d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f410 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f410 ["INT_ADD", "register:40f0:8", ["const:79f410:8", "const:4:8"]]
- 0079f410 ["CALLIND", null, ["register:0:8"]]
+ 0079f468 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f468 ["INT_ADD", "register:40f0:8", ["const:79f468:8", "const:4:8"]]
+ 0079f468 ["CALLIND", null, ["register:0:8"]]
- 0079f3a0 ["INT_ADD", "register:40f0:8", ["const:79f3a0:8", "const:4:8"]]
- 0079f3a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079f3f8 ["INT_ADD", "register:40f0:8", ["const:79f3f8:8", "const:4:8"]]
+ 0079f3f8 ["CALL", null, ["callee:00c57f60:8"]]
- 0079f3b0 ["COPY", "tmp:0:8", ["const:308:8"]]
- 0079f3b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f3b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f3b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079f408 ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 0079f408 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f408 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f408 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f452022a64af9bdaf1070bcd27425a0e"></a>

### [`0079f490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f490.md) → [`0079f4e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f4e8.md) FUN_0079f4e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079f510",
      "incomplete_value": false,
      "site": "0079f510",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:3d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f4b8",
      "incomplete_value": false,
      "site": "0079f4b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:308:8"
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
      "0079f510",
      "DATA",
      [
        "storage",
        "00c7a308",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f510",
      "DATA",
      [
        "storage",
        "00c7a3d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f4b0 ["COPY", "tmp:0:8", ["const:308:8"]]
- 0079f4b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f4b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f4b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079f508 ["COPY", "tmp:0:8", ["const:3d8:8"]]
+ 0079f508 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f508 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f508 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079f4d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f4d4 ["INT_ADD", "register:40f0:8", ["const:79f4d4:8", "const:4:8"]]
- 0079f4d4 ["CALLIND", null, ["register:0:8"]]
+ 0079f52c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f52c ["INT_ADD", "register:40f0:8", ["const:79f52c:8", "const:4:8"]]
+ 0079f52c ["CALLIND", null, ["register:0:8"]]
- 0079f50c ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f50c ["INT_ADD", "register:40f0:8", ["const:79f50c:8", "const:4:8"]]
- 0079f50c ["CALLIND", null, ["register:0:8"]]
+ 0079f564 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f564 ["INT_ADD", "register:40f0:8", ["const:79f564:8", "const:4:8"]]
+ 0079f564 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-29e47bb217d5638ac9da6863ab090e18"></a>

### [`0079f834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f834.md) → [`0079f88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f88c.md) FUN_0079f88c

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
      "definition_site": "0079f898",
      "incomplete_value": false,
      "site": "0079f8a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f840",
      "incomplete_value": false,
      "site": "0079f84c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "0079f8a4",
      "DATA",
      [
        "storage",
        "00c7a388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f8a4",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f840 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0079f840 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0079f840 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0079f840 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0079f898 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0079f898 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0079f898 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0079f898 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-84108d815a69ce284d3eb49b631b2681"></a>

### [`0079f878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f878.md) → [`0079f8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f8d0.md) FUN_0079f8d0

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
      "definition_site": "0079f8e8",
      "incomplete_value": false,
      "site": "0079f8f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f890",
      "incomplete_value": false,
      "site": "0079f89c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "0079f8f4",
      "DATA",
      [
        "storage",
        "00c7a388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f8f4",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f890 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0079f890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079f8e8 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0079f8e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f8e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f8e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079f8c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f8c0 ["INT_ADD", "register:40f0:8", ["const:79f8c0:8", "const:4:8"]]
- 0079f8c0 ["CALLIND", null, ["register:0:8"]]
+ 0079f918 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f918 ["INT_ADD", "register:40f0:8", ["const:79f918:8", "const:4:8"]]
+ 0079f918 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-05802e6fbff9888cafd0ae57149d0951"></a>

### [`0079f8d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f8d4.md) → [`0079f92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f92c.md) FUN_0079f92c

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
      "definition_site": "0079f958",
      "incomplete_value": false,
      "site": "0079f958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f900",
      "incomplete_value": false,
      "site": "0079f900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "0079f958",
      "DATA",
      [
        "storage",
        "00c7a388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f958",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f8e8 ["INT_ADD", "register:40f0:8", ["const:79f8e8:8", "const:4:8"]]
- 0079f8e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079f940 ["INT_ADD", "register:40f0:8", ["const:79f940:8", "const:4:8"]]
+ 0079f940 ["CALL", null, ["callee:00c57f60:8"]]
- 0079f8f8 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0079f8f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079f8f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079f8f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079f950 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0079f950 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f950 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079f950 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079f91c ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f91c ["INT_ADD", "register:40f0:8", ["const:79f91c:8", "const:4:8"]]
- 0079f91c ["CALLIND", null, ["register:0:8"]]
+ 0079f974 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f974 ["INT_ADD", "register:40f0:8", ["const:79f974:8", "const:4:8"]]
+ 0079f974 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c403e2c7a9967987e38f11e67a28ab41"></a>

### [`0079f95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f95c.md) → [`0079f9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f9b4.md) FUN_0079f9b4

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
      "definition_site": "0079f9d0",
      "incomplete_value": false,
      "site": "0079f9d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079f978",
      "incomplete_value": false,
      "site": "0079f978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "0079f9d0",
      "DATA",
      [
        "storage",
        "00c7a388",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079f9d0",
      "DATA",
      [
        "storage",
        "00c7a458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079f974 ["COPY", "tmp:0:8", ["const:388:8"]]
- 0079f974 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079f974 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079f974 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079f9cc ["COPY", "tmp:0:8", ["const:458:8"]]
+ 0079f9cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079f9cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079f9cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0079f998 ["COPY", "register:0:8", ["register:4048:8"]]
- 0079f998 ["INT_ADD", "register:40f0:8", ["const:79f998:8", "const:4:8"]]
- 0079f998 ["CALLIND", null, ["register:0:8"]]
+ 0079f9f0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0079f9f0 ["INT_ADD", "register:40f0:8", ["const:79f9f0:8", "const:4:8"]]
+ 0079f9f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-21cdeed7c29e0be7fe85982287145055"></a>

### [`0079faa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079faa0.md) → [`0079faf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079faf8.md) _INIT_142

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0079fb34",
      "incomplete_value": true,
      "site": "0079fb50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0079fadc",
      "incomplete_value": true,
      "site": "0079faf8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079fd28",
      "incomplete_value": false,
      "site": "0079fd2c",
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
      "definition_site": "0079fcd0",
      "incomplete_value": false,
      "site": "0079fcd4",
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
      "0079fb34",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0079fb58",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0079fb78",
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
      "0079fb34",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0079fb58",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0079fb78",
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
- 0079fcd4 ["INT_ADD", "register:40f0:8", ["const:79fcd4:8", "const:4:8"]]
- 0079fcd4 ["CALL", null, ["callee:00c57f00:8"]]
+ 0079fd2c ["INT_ADD", "register:40f0:8", ["const:79fd2c:8", "const:4:8"]]
+ 0079fd2c ["CALL", null, ["callee:00c57f00:8"]]
- 0079fac8 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 0079fb20 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 0079facc ["COPY", "tmp:0:8", ["const:f38:8"]]
- 0079facc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0079facc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0079facc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0079fb24 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 0079fb24 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0079fb24 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0079fb24 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-2d0aeaeb24790959c7363cbeece36be9"></a>

### [`007a1ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1ab0.md) → [`007a1b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1b08.md) FUN_007a1b08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007a18d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a18d0.md) [`007a1c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1c44.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`007a1928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1928.md) [`007a1c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1c9c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007a1b14",
      "incomplete_value": false,
      "site": "007a1b18",
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
      "definition_site": "007a1abc",
      "incomplete_value": false,
      "site": "007a1ac0",
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
      "007a1b14",
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
      "007a1b14",
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
- 007a1ac0 ["INT_ADD", "register:40f0:8", ["const:7a1ac0:8", "const:4:8"]]
- 007a1ac0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 007a1b18 ["INT_ADD", "register:40f0:8", ["const:7a1b18:8", "const:4:8"]]
+ 007a1b18 ["CALL", null, ["callee:0043b7b8:8"]]
- 007a1abc ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 007a1abc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007a1abc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007a1abc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007a1b14 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007a1b14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007a1b14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007a1b14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2843db965e39d85f4ef69af205370b62"></a>

### [`007aa3e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aa3e8.md) → [`007aa440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa440.md) _INIT_143

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
      "definition_site": "007aa47c",
      "incomplete_value": true,
      "site": "007aa498",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aa424",
      "incomplete_value": true,
      "site": "007aa440",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aa4a0",
      "incomplete_value": true,
      "site": "007aa4bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aa448",
      "incomplete_value": true,
      "site": "007aa464",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aa4c0",
      "incomplete_value": true,
      "site": "007aa4dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aa468",
      "incomplete_value": true,
      "site": "007aa484",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "007aa47c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "007aa4a0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "007aa4c0",
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
      "007aa47c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007aa4a0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007aa4c0",
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
- 007aa4bc ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 007aa4bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aa4bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aa4bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007aa514 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 007aa514 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007aa514 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007aa514 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007aa4dc ["COPY", "tmp:0:8", ["const:f09:8"]]
- 007aa4dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aa4dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aa4dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007aa534 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 007aa534 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007aa534 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007aa534 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007aa548 ["INT_ADD", "register:40f0:8", ["const:7aa548:8", "const:4:8"]]
- 007aa548 ["CALL", null, ["callee:0043b838:8"]]
+ 007aa5a0 ["INT_ADD", "register:40f0:8", ["const:7aa5a0:8", "const:4:8"]]
+ 007aa5a0 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-30eb779ec477047e76ebd58ee130640b"></a>

### [`007aa808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aa808.md) → [`007aa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa860.md) FUN_007aa860

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007ad848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad848.md) · 呼出先 6件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`007aaa28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aaa28.md) [`00aadf8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aad/00aadf8c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`007ad8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad8a0.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`007aaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaa80.md) [`00aadffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadffc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007aaa00",
      "incomplete_value": false,
      "site": "007aaa04",
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
      "definition_site": "007aa9a8",
      "incomplete_value": false,
      "site": "007aa9ac",
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
      "007aa8c0",
      "READ",
      [
        "storage",
        "00ca7f80",
        null,
        "undefined1"
      ]
    ],
    [
      "007aa8c4",
      "READ",
      [
        "storage",
        "00ca7f88",
        null,
        "undefined8"
      ]
    ],
    [
      "007aa8c4",
      "READ",
      [
        "storage",
        "00ca7f90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "007aa8c0",
      "READ",
      [
        "storage",
        "00ca8080",
        null,
        "undefined1"
      ]
    ],
    [
      "007aa8c4",
      "READ",
      [
        "storage",
        "00ca8088",
        null,
        "undefined8"
      ]
    ],
    [
      "007aa8c4",
      "READ",
      [
        "storage",
        "00ca8090",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aa9ac ["INT_ADD", "register:40f0:8", ["const:7aa9ac:8", "const:4:8"]]
- 007aa9ac ["CALL", null, ["callee:00442970:8"]]
+ 007aaa04 ["INT_ADD", "register:40f0:8", ["const:7aaa04:8", "const:4:8"]]
+ 007aaa04 ["CALL", null, ["callee:00442970:8"]]
- 007aa84c ["INT_ADD", "register:40f0:8", ["const:7aa84c:8", "const:4:8"]]
- 007aa84c ["CALL", null, ["callee:007aaa80:8"]]
+ 007aa8a4 ["INT_ADD", "register:40f0:8", ["const:7aa8a4:8", "const:4:8"]]
+ 007aa8a4 ["CALL", null, ["callee:007aaa80:8"]]
- 007aa85c ["COPY", "register:4040:8", ["const:ca7000:8"]]
+ 007aa8b4 ["COPY", "register:4040:8", ["const:ca8000:8"]]
~~~


<a id="compare-9aa788b8055e4cf19d9e4320bdbd2f14"></a>

### [`007aaa28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aaa28.md) → [`007aaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaa80.md) FUN_007aaa80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007aa808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aa808.md) [`007aad04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aad04.md) · 呼出先 14件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 2件 [`007aa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa860.md) [`007aad5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aad5c.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 89.55% / 新版 89.55%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007aaab4",
      "incomplete_value": false,
      "site": "007aaab8",
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
      "definition_site": "007aaa5c",
      "incomplete_value": false,
      "site": "007aaa60",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007aabf8",
      "incomplete_value": true,
      "site": "007aabfc",
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
      "definition_site": "007aaba0",
      "incomplete_value": true,
      "site": "007aaba4",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007aabf4",
      "incomplete_value": true,
      "site": "007aac00",
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
      "definition_site": "007aab9c",
      "incomplete_value": true,
      "site": "007aaba8",
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
      "007aaab8",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "007aaac0",
      "PARAM",
      [
        "storage",
        "00ca7fb8",
        null,
        "undefined1"
      ]
    ],
    [
      "007aaaf8",
      "PARAM",
      [
        "storage",
        "00ca7fa0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007aaab8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "007aaac0",
      "PARAM",
      [
        "storage",
        "00ca80b8",
        null,
        "undefined1"
      ]
    ],
    [
      "007aaaf8",
      "PARAM",
      [
        "storage",
        "00ca80a0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 007aaa54 ["INT_ADD", "register:40f0:8", ["const:7aaa54:8", "const:4:8"]]
- 007aaa54 ["CALL", null, ["callee:00487e60:8"]]
+ 007aaaac ["INT_ADD", "register:40f0:8", ["const:7aaaac:8", "const:4:8"]]
+ 007aaaac ["CALL", null, ["callee:00487e60:8"]]
- 007aaa70 ["INT_ADD", "register:40f0:8", ["const:7aaa70:8", "const:4:8"]]
- 007aaa70 ["CALL", null, ["callee:0048ce94:8"]]
+ 007aaac8 ["INT_ADD", "register:40f0:8", ["const:7aaac8:8", "const:4:8"]]
+ 007aaac8 ["CALL", null, ["callee:0048ce94:8"]]
- 007aaaac ["INT_ADD", "register:40f0:8", ["const:7aaaac:8", "const:4:8"]]
- 007aaaac ["CALL", null, ["callee:00492e48:8"]]
+ 007aab04 ["INT_ADD", "register:40f0:8", ["const:7aab04:8", "const:4:8"]]
+ 007aab04 ["CALL", null, ["callee:00492e48:8"]]
~~~


<a id="compare-44250e559d5394bb78589db1c6e98ffb"></a>

### [`007aad04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aad04.md) → [`007aad5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aad5c.md) FUN_007aad5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007aeff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aeff8.md) · 呼出先 8件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`007aaa28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aaa28.md) [`00aadf8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aad/00aadf8c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007af050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af050.md) · 呼出先 8件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`007aaa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaa80.md) [`00aadffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007aaeac",
      "incomplete_value": false,
      "site": "007aaeb0",
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
      "definition_site": "007aae54",
      "incomplete_value": false,
      "site": "007aae58",
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
      "007aadcc",
      "PARAM",
      [
        "storage",
        "002bb7c4",
        null,
        "string"
      ]
    ],
    [
      "007aadd8",
      "PARAM",
      [
        "storage",
        "002ab92e",
        null,
        "string"
      ]
    ],
    [
      "007aaeac",
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
      "007aadcc",
      "PARAM",
      [
        "storage",
        "002bb770",
        null,
        "string"
      ]
    ],
    [
      "007aadd8",
      "PARAM",
      [
        "storage",
        "002ab8d2",
        null,
        "string"
      ]
    ],
    [
      "007aaeac",
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
- 007aae58 ["INT_ADD", "register:40f0:8", ["const:7aae58:8", "const:4:8"]]
- 007aae58 ["CALL", null, ["callee:00442970:8"]]
+ 007aaeb0 ["INT_ADD", "register:40f0:8", ["const:7aaeb0:8", "const:4:8"]]
+ 007aaeb0 ["CALL", null, ["callee:00442970:8"]]
- 007aad4c ["INT_ADD", "register:40f0:8", ["const:7aad4c:8", "const:4:8"]]
- 007aad4c ["CALL", null, ["callee:007aaa80:8"]]
+ 007aada4 ["INT_ADD", "register:40f0:8", ["const:7aada4:8", "const:4:8"]]
+ 007aada4 ["CALL", null, ["callee:007aaa80:8"]]
- 007aad74 ["COPY", "tmp:0:8", ["const:7c4:8"]]
- 007aad74 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007aad74 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007aad74 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007aadcc ["COPY", "tmp:0:8", ["const:770:8"]]
+ 007aadcc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007aadcc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007aadcc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-ddd5ebfa524f35740a7ba842ab2f23cc"></a>

### [`007aaef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aaef4.md) → [`007aaf4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aaf4c.md) _INIT_144

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 74.77% / 新版 74.77%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 11件, `store_value` 11件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007aaf88",
      "incomplete_value": true,
      "site": "007aafa4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aaf30",
      "incomplete_value": true,
      "site": "007aaf4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aafac",
      "incomplete_value": true,
      "site": "007aafc8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aaf54",
      "incomplete_value": true,
      "site": "007aaf70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aafcc",
      "incomplete_value": true,
      "site": "007aafe8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007aaf74",
      "incomplete_value": true,
      "site": "007aaf90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "007aaf88",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "007aafac",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "007aafcc",
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
      "007aaf88",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007aafac",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007aafcc",
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
- 007aafc8 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 007aafc8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aafc8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aafc8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ab020 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 007ab020 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ab020 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ab020 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007aafe8 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 007aafe8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aafe8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aafe8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ab040 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 007ab040 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ab040 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ab040 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007ab054 ["INT_ADD", "register:40f0:8", ["const:7ab054:8", "const:4:8"]]
- 007ab054 ["CALL", null, ["callee:0043b838:8"]]
+ 007ab0ac ["INT_ADD", "register:40f0:8", ["const:7ab0ac:8", "const:4:8"]]
+ 007ab0ac ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-6b933bc8a472a856dbb27352bd4ec34a"></a>

### [`007ab404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab404.md) → [`007ab45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab45c.md) FUN_007ab45c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009311c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009311c4.md) · 呼出先 6件 [`007ab754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab754.md) [`007ae774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae774.md) [`007ae84c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae84c.md) [`007ae850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae850.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00931218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931218.md) · 呼出先 6件 [`007ab7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab7ac.md) [`007ae7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae7cc.md) [`007ae8a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae8a4.md) [`007ae8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae8a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.30% / 新版 97.30%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ab53c",
      "incomplete_value": false,
      "site": "007ab540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ab4e4",
      "incomplete_value": false,
      "site": "007ab4e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:408:8"
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
      "definition_site": "007ab58c",
      "incomplete_value": false,
      "site": "007ab58c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ab534",
      "incomplete_value": false,
      "site": "007ab534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:498:8"
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
      "007ab540",
      "DATA",
      [
        "storage",
        "00c7a408",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab58c",
      "DATA",
      [
        "storage",
        "00c7a498",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab5c8",
      "READ",
      [
        "storage",
        "00c7a4b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007ab540",
      "DATA",
      [
        "storage",
        "00c7a4d8",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab58c",
      "DATA",
      [
        "storage",
        "00c7a568",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab5c8",
      "READ",
      [
        "storage",
        "00c7a588",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ab45c ["COPY", "register:0:8", ["register:4040:8"]]
- 007ab45c ["INT_ADD", "register:40f0:8", ["const:7ab45c:8", "const:4:8"]]
- 007ab45c ["CALLIND", null, ["register:0:8"]]
+ 007ab4b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ab4b4 ["INT_ADD", "register:40f0:8", ["const:7ab4b4:8", "const:4:8"]]
+ 007ab4b4 ["CALLIND", null, ["register:0:8"]]
- 007ab494 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ab494 ["INT_ADD", "register:40f0:8", ["const:7ab494:8", "const:4:8"]]
- 007ab494 ["CALLIND", null, ["register:0:8"]]
+ 007ab4ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ab4ec ["INT_ADD", "register:40f0:8", ["const:7ab4ec:8", "const:4:8"]]
+ 007ab4ec ["CALLIND", null, ["register:0:8"]]
- 007ab4c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ab4c0 ["INT_ADD", "register:40f0:8", ["const:7ab4c0:8", "const:4:8"]]
- 007ab4c0 ["CALLIND", null, ["register:0:8"]]
+ 007ab518 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ab518 ["INT_ADD", "register:40f0:8", ["const:7ab518:8", "const:4:8"]]
+ 007ab518 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a63bf3218ccab8766622dd4ccc709751"></a>

### [`007ab754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab754.md) → [`007ab7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab7ac.md) FUN_007ab7ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ab404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab404.md) · 呼出先 14件 [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md) [`00795e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e5c.md)
- 新版 呼出元 1件 [`007ab45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab45c.md) · 呼出先 14件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ab800",
      "incomplete_value": false,
      "site": "007ab804",
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
                "const:c6e000:8"
              ],
              [
                "leaf",
                "const:d58:8"
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
      "definition_site": "007ab7a8",
      "incomplete_value": false,
      "site": "007ab7ac",
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
                "const:c6e000:8"
              ],
              [
                "leaf",
                "const:c88:8"
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ab830",
      "incomplete_value": false,
      "site": "007ab834",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "007ab7d8",
      "incomplete_value": false,
      "site": "007ab7dc",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ab8c0",
      "incomplete_value": false,
      "site": "007ab8c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ab868",
      "incomplete_value": false,
      "site": "007ab868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:898:8"
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
      "007ab804",
      "DATA",
      [
        "storage",
        "00c6ec98",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab834",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab8c0",
      "DATA",
      [
        "storage",
        "00c7a898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ab804",
      "DATA",
      [
        "storage",
        "00c6ed68",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab834",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "007ab8c0",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ab780 ["INT_ADD", "register:40f0:8", ["const:7ab780:8", "const:4:8"]]
- 007ab780 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ab7d8 ["INT_ADD", "register:40f0:8", ["const:7ab7d8:8", "const:4:8"]]
+ 007ab7d8 ["CALL", null, ["callee:00c57f60:8"]]
- 007ab798 ["INT_ADD", "register:40f0:8", ["const:7ab798:8", "const:4:8"]]
- 007ab798 ["CALL", null, ["callee:0059b948:8"]]
+ 007ab7f0 ["INT_ADD", "register:40f0:8", ["const:7ab7f0:8", "const:4:8"]]
+ 007ab7f0 ["CALL", null, ["callee:0059b948:8"]]
- 007ab7a0 ["COPY", "tmp:0:8", ["const:c88:8"]]
- 007ab7a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ab7a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ab7a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ab7f8 ["COPY", "tmp:0:8", ["const:d58:8"]]
+ 007ab7f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ab7f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ab7f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3f2fb0c4ca6196bbf990ff4a322f5c59"></a>

### [`007abc24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007abc24.md) → [`007abc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007abc7c.md) FUN_007abc7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ae7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae7c4.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0045179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/0045179c.md) [`0045982c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/0045982c.md) [`00459ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459ad0.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 1件 [`007ae81c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae81c.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0045986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/0045986c.md) [`00459b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459b10.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.97% / 新版 92.97%

優先判定に残った影響 `store_value` 11件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007abcc8",
      "incomplete_value": false,
      "site": "007abcd8",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007abc70",
      "incomplete_value": false,
      "site": "007abc80",
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
            "const:ae0:8"
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
      "definition_site": "007abd28",
      "incomplete_value": true,
      "site": "007abd28",
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
                "const:b2c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007abcd0",
      "incomplete_value": true,
      "site": "007abcd0",
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
                "const:b88:8"
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
      "definition_site": "007abdec",
      "incomplete_value": true,
      "site": "007abdec",
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
                "const:44f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007abd94",
      "incomplete_value": true,
      "site": "007abd94",
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
                "const:49c:8"
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
      "007abcd8",
      "DATA",
      [
        "storage",
        "00c63ae0",
        null,
        "pointer"
      ]
    ],
    [
      "007abd14",
      "READ",
      [
        "storage",
        "002afb88",
        null,
        "string"
      ]
    ],
    [
      "007abdd0",
      "DATA",
      [
        "storage",
        "00c63ae0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007abcd8",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "007abd14",
      "READ",
      [
        "storage",
        "002afb2c",
        null,
        "string"
      ]
    ],
    [
      "007abdd0",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007abe70 ["COPY", "register:0:8", ["register:4040:8"]]
- 007abe70 ["INT_ADD", "register:40f0:8", ["const:7abe70:8", "const:4:8"]]
- 007abe70 ["CALLIND", null, ["register:0:8"]]
+ 007abec8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007abec8 ["INT_ADD", "register:40f0:8", ["const:7abec8:8", "const:4:8"]]
+ 007abec8 ["CALLIND", null, ["register:0:8"]]
- 007ac020 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ac020 ["INT_ADD", "register:40f0:8", ["const:7ac020:8", "const:4:8"]]
- 007ac020 ["CALLIND", null, ["register:0:8"]]
+ 007ac078 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ac078 ["INT_ADD", "register:40f0:8", ["const:7ac078:8", "const:4:8"]]
+ 007ac078 ["CALLIND", null, ["register:0:8"]]
- 007abc64 ["INT_ADD", "register:40f0:8", ["const:7abc64:8", "const:4:8"]]
- 007abc64 ["CALL", null, ["callee:00c57f60:8"]]
+ 007abcbc ["INT_ADD", "register:40f0:8", ["const:7abcbc:8", "const:4:8"]]
+ 007abcbc ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8572639eed73810ea06b873501d45bf3"></a>

### [`007ac3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac3c0.md) → [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) FUN_007ac418

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00893dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/00893dbc.md) · 呼出先 15件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ca8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ca8c.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492c00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492c00.md)
- 新版 呼出元 1件 [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492c40.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_target` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007ac468",
      "incomplete_value": true,
      "site": "007ac468",
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
                "const:b2c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ac410",
      "incomplete_value": true,
      "site": "007ac410",
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
                "const:b88:8"
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
      "definition_site": "007ac54c",
      "incomplete_value": true,
      "site": "007ac54c",
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
                "const:492:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ac4f4",
      "incomplete_value": true,
      "site": "007ac4f4",
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
                "const:4df:8"
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
      "definition_site": "007ac540",
      "incomplete_value": true,
      "site": "007ac550",
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
      "definition_site": "007ac4e8",
      "incomplete_value": true,
      "site": "007ac4f8",
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
      "007ac444",
      "READ",
      [
        "storage",
        "002afb88",
        null,
        "string"
      ]
    ],
    [
      "007ac494",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "007ac4a8",
      "READ",
      [
        "storage",
        "002c12fa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007ac444",
      "READ",
      [
        "storage",
        "002afb2c",
        null,
        "string"
      ]
    ],
    [
      "007ac494",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "007ac4a8",
      "READ",
      [
        "storage",
        "002c133a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ac3e4 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 007ac3e4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007ac3e4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007ac3e4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007ac43c ["COPY", "tmp:0:8", ["const:b2c:8"]]
+ 007ac43c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007ac43c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007ac43c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007ac43c ["INT_ADD", "register:40f0:8", ["const:7ac43c:8", "const:4:8"]]
- 007ac43c ["CALL", null, ["ram:48ccf8:8"]]
+ 007ac494 ["INT_ADD", "register:40f0:8", ["const:7ac494:8", "const:4:8"]]
+ 007ac494 ["CALL", null, ["ram:48cd38:8"]]
- 007ac49c ["INT_ADD", "register:40f0:8", ["const:7ac49c:8", "const:4:8"]]
- 007ac49c ["CALL", null, ["callee:00c57f80:8"]]
+ 007ac4f4 ["INT_ADD", "register:40f0:8", ["const:7ac4f4:8", "const:4:8"]]
+ 007ac4f4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4702d95a4df136a56b61c6e8909d5941"></a>

### [`007ac6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac6e0.md) → [`007ac738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac738.md) FUN_007ac738

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`007ac3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac3c0.md) · 呼出先 6件 [`007ad324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad324.md) [`007aec3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aec3c.md) [`007aec40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aec40.md) [`007aecc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aecc0.md) [`007aecc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aecc4.md)
- 新版 呼出元 1件 [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) · 呼出先 6件 [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) [`007aec94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec94.md) [`007aec98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec98.md) [`007aed18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed18.md) [`007aed1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed1c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ac760",
      "incomplete_value": false,
      "site": "007ac760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ac708",
      "incomplete_value": false,
      "site": "007ac708",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:598:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ac774",
      "incomplete_value": false,
      "site": "007ac774",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ac71c",
      "incomplete_value": false,
      "site": "007ac71c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "007ac760",
      "DATA",
      [
        "storage",
        "00c7a598",
        null,
        "undefined *"
      ]
    ],
    [
      "007ac774",
      "DATA",
      [
        "storage",
        "00c7a618",
        null,
        "undefined *"
      ]
    ],
    [
      "007ac7ac",
      "READ",
      [
        "storage",
        "00c7a638",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007ac760",
      "DATA",
      [
        "storage",
        "00c7a668",
        null,
        "undefined *"
      ]
    ],
    [
      "007ac774",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "undefined *"
      ]
    ],
    [
      "007ac7ac",
      "READ",
      [
        "storage",
        "00c7a708",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ac704 ["COPY", "tmp:0:8", ["const:598:8"]]
- 007ac704 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ac704 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ac704 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ac75c ["COPY", "tmp:0:8", ["const:668:8"]]
+ 007ac75c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ac75c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ac75c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ac718 ["COPY", "tmp:0:8", ["const:618:8"]]
- 007ac718 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ac718 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ac718 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ac770 ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 007ac770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ac770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ac770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ac72c ["INT_ADD", "register:40f0:8", ["const:7ac72c:8", "const:4:8"]]
- 007ac72c ["CALL", null, ["callee:007ad37c:8"]]
+ 007ac784 ["INT_ADD", "register:40f0:8", ["const:7ac784:8", "const:4:8"]]
+ 007ac784 ["CALL", null, ["callee:007ad37c:8"]]
~~~


<a id="compare-4b1c0d36b34675ad381456f2d7e3b6e4"></a>

### [`007ac82c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac82c.md) → [`007ac884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac884.md) FUN_007ac884

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ac3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac3c0.md) · 呼出先 7件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`00597658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597658.md)
- 新版 呼出元 1件 [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00597698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597698.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007ac8a4",
      "incomplete_value": true,
      "site": "007ac8bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ac84c",
      "incomplete_value": true,
      "site": "007ac864",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:85:8"
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
      "definition_site": "007ac8c0",
      "incomplete_value": true,
      "site": "007ac8c0",
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
      "definition_site": "007ac868",
      "incomplete_value": true,
      "site": "007ac868",
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
      "007ac8a4",
      "READ",
      [
        "storage",
        "002b4085",
        null,
        "string"
      ]
    ],
    [
      "007ac8b4",
      "READ",
      [
        "storage",
        "002b4093",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007ac8a4",
      "READ",
      [
        "storage",
        "002b40b6",
        null,
        "string"
      ]
    ],
    [
      "007ac8b4",
      "READ",
      [
        "storage",
        "002b40c4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ac8c0 ["INT_ADD", "register:40f0:8", ["const:7ac8c0:8", "const:4:8"]]
- 007ac8c0 ["CALL", null, ["callee:00c57f80:8"]]
+ 007ac918 ["INT_ADD", "register:40f0:8", ["const:7ac918:8", "const:4:8"]]
+ 007ac918 ["CALL", null, ["callee:00c57f80:8"]]
- 007ac844 ["COPY", "tmp:0:8", ["const:85:8"]]
- 007ac844 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ac844 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ac844 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ac89c ["COPY", "tmp:0:8", ["const:b6:8"]]
+ 007ac89c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ac89c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ac89c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007ac878 ["INT_ADD", "register:40f0:8", ["const:7ac878:8", "const:4:8"]]
- 007ac878 ["CALL", null, ["callee:0048ce94:8"]]
+ 007ac8d0 ["INT_ADD", "register:40f0:8", ["const:7ac8d0:8", "const:4:8"]]
+ 007ac8d0 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-1aae3fadc5bc7b11d00159be04be62d1"></a>

### [`007acacc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007acacc.md) → [`007acb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007acb24.md) FUN_007acb24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`007ac3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac3c0.md) · 呼出先 17件 [`0045179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/0045179c.md) [`004519d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/004519d8.md) [`0045bdf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045b/0045bdf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md)
- 新版 呼出元 1件 [`007ac418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac418.md) · 呼出先 17件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`00451a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451a18.md) [`0045be38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045be38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md)

変更の種類 constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 94.62% / 新版 94.62%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007acb70",
      "incomplete_value": false,
      "site": "007acb74",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007acb18",
      "incomplete_value": false,
      "site": "007acb1c",
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
            "const:ae0:8"
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
      "definition_site": "007acbc0",
      "incomplete_value": true,
      "site": "007acbd4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:38e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007acb68",
      "incomplete_value": true,
      "site": "007acb7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:34e:8"
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
      "definition_site": "007acbd8",
      "incomplete_value": true,
      "site": "007acbd8",
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
      "definition_site": "007acb80",
      "incomplete_value": true,
      "site": "007acb80",
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
      "007acb74",
      "DATA",
      [
        "storage",
        "00c63ae0",
        null,
        "pointer"
      ]
    ],
    [
      "007acbc0",
      "READ",
      [
        "storage",
        "002c034e",
        null,
        "string"
      ]
    ],
    [
      "007acbd0",
      "READ",
      [
        "storage",
        "002c035c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007acb74",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "007acbc0",
      "READ",
      [
        "storage",
        "002c038e",
        null,
        "string"
      ]
    ],
    [
      "007acbd0",
      "READ",
      [
        "storage",
        "002c039c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007acd5c ["INT_ADD", "register:40f0:8", ["const:7acd5c:8", "const:4:8"]]
- 007acd5c ["CALL", null, ["callee:00749010:8"]]
+ 007acdb4 ["INT_ADD", "register:40f0:8", ["const:7acdb4:8", "const:4:8"]]
+ 007acdb4 ["CALL", null, ["callee:00749010:8"]]
- 007acb00 ["INT_ADD", "register:40f0:8", ["const:7acb00:8", "const:4:8"]]
- 007acb00 ["CALL", null, ["callee:00c57f60:8"]]
+ 007acb58 ["INT_ADD", "register:40f0:8", ["const:7acb58:8", "const:4:8"]]
+ 007acb58 ["CALL", null, ["callee:00c57f60:8"]]
- 007acb18 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 007acb18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007acb18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007acb18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007acb70 ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 007acb70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007acb70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007acb70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-85884c2524ca3c759e3a28540ae453ca"></a>

### [`007ad104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad104.md) → [`007ad15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad15c.md) FUN_007ad15c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) · 呼出先 10件 [`004519d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/004519d8.md) [`00b0e934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0e/00b0e934.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md)
- 新版 呼出元 1件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 10件 [`00451a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451a18.md) [`00b0e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0e9d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md)

変更の種類 constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 90.57% / 新版 90.57%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad1ac",
      "incomplete_value": true,
      "site": "007ad1b0",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad154",
      "incomplete_value": true,
      "site": "007ad158",
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
            "const:40:8"
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
      "definition_site": "007ad1a8",
      "incomplete_value": true,
      "site": "007ad1b4",
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
              "LOAD",
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
      "definition_site": "007ad150",
      "incomplete_value": true,
      "site": "007ad15c",
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
              "LOAD",
              [
                "leaf",
                "const:8:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "007ad1bc",
      "incomplete_value": true,
      "site": "007ad1bc",
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:30:8"
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
      "definition_site": "007ad164",
      "incomplete_value": true,
      "site": "007ad164",
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:30:8"
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
      "unmatched:007ad144",
      "READ",
      [
        "storage",
        "00c9abb8",
        null,
        "pointer"
      ]
    ],
    [
      "007ad1a8",
      "READ",
      [
        "storage",
        "00c93208",
        null,
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "007ad1a8",
      "READ",
      [
        "storage",
        "00c93210",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ],
  "added": [
    [
      "007ad198",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ],
    [
      "007ad1a8",
      "READ",
      [
        "storage",
        "00c932d8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "007ad1a8",
      "READ",
      [
        "storage",
        "00c932e0",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ad20c ["INT_ADD", "register:40f0:8", ["const:7ad20c:8", "const:4:8"]]
- 007ad20c ["CALL", null, ["callee:00b0e9d0:8"]]
+ 007ad264 ["INT_ADD", "register:40f0:8", ["const:7ad264:8", "const:4:8"]]
+ 007ad264 ["CALL", null, ["callee:00b0e9d0:8"]]
- 007ad140 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:c88:8"]]
- 007ad140 ["LOAD", "register:40c0:8", ["const:1b1:8", "tmp:0:8"]]
+ 007ad19c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:c88:8"]]
+ 007ad19c ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
- 007ad144 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:bb8:8"]]
- 007ad144 ["LOAD", "register:40b8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-67fdeef78839d180f364a600eaacf8dc"></a>

### [`007ad324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad324.md) → [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) FUN_007ad37c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ac6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ac/007ac6e0.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005a59bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a5/005a59bc.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md)
- 新版 呼出元 1件 [`007ac738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007ac738.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a59fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a59fc.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.08% / 新版 97.08%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad438",
      "incomplete_value": false,
      "site": "007ad43c",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "007ad3e0",
      "incomplete_value": false,
      "site": "007ad3e4",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad4c8",
      "incomplete_value": false,
      "site": "007ad4c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad470",
      "incomplete_value": false,
      "site": "007ad470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "definition_site": "007ad5d8",
      "incomplete_value": false,
      "site": "007ad5d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad580",
      "incomplete_value": false,
      "site": "007ad580",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a18:8"
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
      "007ad43c",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad4c8",
      "DATA",
      [
        "storage",
        "00c7a998",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad53c",
      "READ",
      [
        "storage",
        "00c7a9c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ad43c",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad4c8",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ],
    [
      "007ad53c",
      "READ",
      [
        "storage",
        "00c7aa90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ad358 ["INT_ADD", "register:40f0:8", ["const:7ad358:8", "const:4:8"]]
- 007ad358 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ad3b0 ["INT_ADD", "register:40f0:8", ["const:7ad3b0:8", "const:4:8"]]
+ 007ad3b0 ["CALL", null, ["callee:00c57f60:8"]]
- 007ad384 ["INT_ADD", "register:40f0:8", ["const:7ad384:8", "const:4:8"]]
- 007ad384 ["CALL", null, ["callee:0043bb60:8"]]
+ 007ad3dc ["INT_ADD", "register:40f0:8", ["const:7ad3dc:8", "const:4:8"]]
+ 007ad3dc ["CALL", null, ["callee:0043bb60:8"]]
- 007ad390 ["INT_ADD", "register:40f0:8", ["const:7ad390:8", "const:4:8"]]
- 007ad390 ["CALL", null, ["callee:005a59fc:8"]]
+ 007ad3e8 ["INT_ADD", "register:40f0:8", ["const:7ad3e8:8", "const:4:8"]]
+ 007ad3e8 ["CALL", null, ["callee:005a59fc:8"]]
~~~


<a id="compare-800b6ba3e0881d2d4afb155d30562b05"></a>

### [`007ad848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad848.md) → [`007ad8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad8a0.md) FUN_007ad8a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007aec44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aec44.md) · 呼出先 10件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`004938d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/004938d4.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`007aa808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aa808.md) [`007aed30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aed30.md)
- 新版 呼出元 1件 [`007aec9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec9c.md) · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`007aa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa860.md) [`007aed88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed88.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ad90c",
      "incomplete_value": false,
      "site": "007ad914",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ad8b4",
      "incomplete_value": false,
      "site": "007ad8bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ad8e8",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ad890",
      "value": [
        "leaf",
        "ram:764384:8"
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
      "site": "007ad904",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ad8ac",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "007ad8e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "007ad904",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "007ad914",
      "DATA",
      [
        "storage",
        "00c7a698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ad8e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "007ad904",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "007ad914",
      "DATA",
      [
        "storage",
        "00c7a768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ad890 ["INT_ADD", "register:40f0:8", ["const:7ad890:8", "const:4:8"]]
- 007ad890 ["CALL", null, ["ram:764384:8"]]
+ 007ad8e8 ["INT_ADD", "register:40f0:8", ["const:7ad8e8:8", "const:4:8"]]
+ 007ad8e8 ["CALL", null, ["ram:7643dc:8"]]
- 007ad8ac ["INT_ADD", "register:40f0:8", ["const:7ad8ac:8", "const:4:8"]]
- 007ad8ac ["CALL", null, ["ram:48ccf8:8"]]
+ 007ad904 ["INT_ADD", "register:40f0:8", ["const:7ad904:8", "const:4:8"]]
+ 007ad904 ["CALL", null, ["ram:48cd38:8"]]
- 007ad884 ["INT_ADD", "register:40f0:8", ["const:7ad884:8", "const:4:8"]]
- 007ad884 ["CALL", null, ["callee:00aa3e94:8"]]
+ 007ad8dc ["INT_ADD", "register:40f0:8", ["const:7ad8dc:8", "const:4:8"]]
+ 007ad8dc ["CALL", null, ["callee:00aa3e94:8"]]
~~~


<a id="compare-7ac3d90ff4d337bff039f4b39d75268f"></a>

### [`007ad984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad984.md) → [`007ad9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad9dc.md) FUN_007ad9dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007aecc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aecc8.md) · 呼出先 10件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`004938d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/004938d4.md)
- 新版 呼出元 1件 [`007aed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed20.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.64% / 新版 94.64%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007adbb0",
      "incomplete_value": false,
      "site": "007adbb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007adb58",
      "incomplete_value": false,
      "site": "007adb60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007adb3c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007adae4",
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
      "007ada24",
      "PARAM",
      [
        "storage",
        "002b93d4",
        null,
        "string"
      ]
    ],
    [
      "007ada48",
      "PARAM",
      [
        "storage",
        "002b858a",
        null,
        "string"
      ]
    ],
    [
      "007ada54",
      "PARAM",
      [
        "storage",
        "002b7769",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007ada24",
      "PARAM",
      [
        "storage",
        "002b9380",
        null,
        "string"
      ]
    ],
    [
      "007ada48",
      "PARAM",
      [
        "storage",
        "002b8536",
        null,
        "string"
      ]
    ],
    [
      "007ada54",
      "PARAM",
      [
        "storage",
        "002b77a9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007adae4 ["INT_ADD", "register:40f0:8", ["const:7adae4:8", "const:4:8"]]
- 007adae4 ["CALL", null, ["ram:48ccf8:8"]]
+ 007adb3c ["INT_ADD", "register:40f0:8", ["const:7adb3c:8", "const:4:8"]]
+ 007adb3c ["CALL", null, ["ram:48cd38:8"]]
- 007adbb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007adbb8 ["INT_ADD", "register:40f0:8", ["const:7adbb8:8", "const:4:8"]]
- 007adbb8 ["CALLIND", null, ["register:0:8"]]
+ 007adc10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007adc10 ["INT_ADD", "register:40f0:8", ["const:7adc10:8", "const:4:8"]]
+ 007adc10 ["CALLIND", null, ["register:0:8"]]
- 007ad9cc ["COPY", "tmp:0:8", ["const:3d4:8"]]
- 007ad9cc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007ad9cc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007ad9cc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007ada24 ["COPY", "tmp:0:8", ["const:380:8"]]
+ 007ada24 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007ada24 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007ada24 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-8f01d59870a029da08e707f1f91b2a09"></a>

### [`007add58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007add58.md) → [`007addb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007addb0.md) FUN_007addb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0081d1ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0081d/0081d1ec.md) · 呼出先 8件 [`007adf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007adf1c.md) [`007aeff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aeff0.md) [`007aeff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aeff4.md) [`007af0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af0fc.md) [`007af100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af100.md)
- 新版 呼出元 1件 [`0081d244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081d/0081d244.md) · 呼出先 8件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) [`007af048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af048.md) [`007af04c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af04c.md) [`007af154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af154.md) [`007af158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af158.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.11% / 新版 92.11%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ade18",
      "incomplete_value": false,
      "site": "007ade18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007addc0",
      "incomplete_value": false,
      "site": "007addc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:798:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ade2c",
      "incomplete_value": false,
      "site": "007ade34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007addd4",
      "incomplete_value": false,
      "site": "007adddc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:818:8"
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
      "007addf4",
      "PARAM",
      [
        "storage",
        "002a04c5",
        null,
        "string"
      ]
    ],
    [
      "007ade00",
      "PARAM",
      [
        "storage",
        "002b8582",
        null,
        "string"
      ]
    ],
    [
      "007ade18",
      "DATA",
      [
        "storage",
        "00c7a798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007addf4",
      "PARAM",
      [
        "storage",
        "002a0478",
        null,
        "string"
      ]
    ],
    [
      "007ade00",
      "PARAM",
      [
        "storage",
        "002b852e",
        null,
        "string"
      ]
    ],
    [
      "007ade18",
      "DATA",
      [
        "storage",
        "00c7a868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007add9c ["COPY", "tmp:0:8", ["const:4c5:8"]]
- 007add9c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007add9c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007add9c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007addf4 ["COPY", "tmp:0:8", ["const:478:8"]]
+ 007addf4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007addf4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007addf4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 007adda8 ["COPY", "tmp:0:8", ["const:582:8"]]
- 007adda8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007adda8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007adda8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007ade00 ["COPY", "tmp:0:8", ["const:52e:8"]]
+ 007ade00 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007ade00 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007ade00 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 007addb0 ["INT_ADD", "register:40f0:8", ["const:7addb0:8", "const:4:8"]]
- 007addb0 ["CALL", null, ["callee:00c58260:8"]]
+ 007ade08 ["INT_ADD", "register:40f0:8", ["const:7ade08:8", "const:4:8"]]
+ 007ade08 ["CALL", null, ["callee:00c58260:8"]]
~~~


<a id="compare-f9a8e53b3033ae2ee4bc97dd90b03d20"></a>

### [`007adf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007adf1c.md) → [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) FUN_007adf74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007add58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007add58.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005a5018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a5/005a5018.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md)
- 新版 呼出元 1件 [`007addb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007addb0.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a5058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5058.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ae0c0",
      "incomplete_value": false,
      "site": "007ae0c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae068",
      "incomplete_value": false,
      "site": "007ae068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "definition_site": "007ae1d0",
      "incomplete_value": false,
      "site": "007ae1d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae178",
      "incomplete_value": false,
      "site": "007ae178",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "007ae034",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "007ae0c0",
      "DATA",
      [
        "storage",
        "00c7aa98",
        null,
        "undefined *"
      ]
    ],
    [
      "007ae134",
      "READ",
      [
        "storage",
        "00c7aac0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae034",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "007ae0c0",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ],
    [
      "007ae134",
      "READ",
      [
        "storage",
        "00c7ab90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007adf50 ["INT_ADD", "register:40f0:8", ["const:7adf50:8", "const:4:8"]]
- 007adf50 ["CALL", null, ["callee:00c57f60:8"]]
+ 007adfa8 ["INT_ADD", "register:40f0:8", ["const:7adfa8:8", "const:4:8"]]
+ 007adfa8 ["CALL", null, ["callee:00c57f60:8"]]
- 007adf7c ["INT_ADD", "register:40f0:8", ["const:7adf7c:8", "const:4:8"]]
- 007adf7c ["CALL", null, ["callee:0043bb60:8"]]
+ 007adfd4 ["INT_ADD", "register:40f0:8", ["const:7adfd4:8", "const:4:8"]]
+ 007adfd4 ["CALL", null, ["callee:0043bb60:8"]]
- 007adf88 ["INT_ADD", "register:40f0:8", ["const:7adf88:8", "const:4:8"]]
- 007adf88 ["CALL", null, ["callee:005a5058:8"]]
+ 007adfe0 ["INT_ADD", "register:40f0:8", ["const:7adfe0:8", "const:4:8"]]
+ 007adfe0 ["CALL", null, ["callee:005a5058:8"]]
~~~


<a id="compare-d47bd914838ae3211d0128ca525afb12"></a>

### [`007ae440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae440.md) → [`007ae498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae498.md) FUN_007ae498

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ae4bc",
      "incomplete_value": false,
      "site": "007ae4c0",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "007ae464",
      "incomplete_value": false,
      "site": "007ae468",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
      "007ae4c0",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae4c0",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae45c ["COPY", "tmp:0:8", ["const:a10:8"]]
- 007ae45c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae45c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae45c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae4b4 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 007ae4b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae4b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae4b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ae474 ["INT_ADD", "register:40f0:8", ["const:7ae474:8", "const:4:8"]]
- 007ae474 ["CALL", null, ["callee:00c57f80:8"]]
+ 007ae4cc ["INT_ADD", "register:40f0:8", ["const:7ae4cc:8", "const:4:8"]]
+ 007ae4cc ["CALL", null, ["callee:00c57f80:8"]]
- 007ae484 ["INT_ADD", "register:40f0:8", ["const:7ae484:8", "const:4:8"]]
- 007ae484 ["CALL", null, ["callee:00c57f80:8"]]
+ 007ae4dc ["INT_ADD", "register:40f0:8", ["const:7ae4dc:8", "const:4:8"]]
+ 007ae4dc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-40fcd44ee2ced12d24ccf497c5a5ae4f"></a>

### [`007ae4a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae4a4.md) → [`007ae4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae4fc.md) FUN_007ae4fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ae530",
      "incomplete_value": false,
      "site": "007ae534",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "007ae4d8",
      "incomplete_value": false,
      "site": "007ae4dc",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
      "007ae534",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae534",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae4c8 ["INT_ADD", "register:40f0:8", ["const:7ae4c8:8", "const:4:8"]]
- 007ae4c8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007ae520 ["INT_ADD", "register:40f0:8", ["const:7ae520:8", "const:4:8"]]
+ 007ae520 ["CALL", null, ["callee:00c57f80:8"]]
- 007ae4d0 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 007ae4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae528 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 007ae528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ae4e8 ["INT_ADD", "register:40f0:8", ["const:7ae4e8:8", "const:4:8"]]
- 007ae4e8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007ae540 ["INT_ADD", "register:40f0:8", ["const:7ae540:8", "const:4:8"]]
+ 007ae540 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1150ee9f3403a0cd58d38c34803f6550"></a>

### [`007ae518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae518.md) → [`007ae570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae570.md) FUN_007ae570

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ae5a4",
      "incomplete_value": false,
      "site": "007ae5a8",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "definition_site": "007ae54c",
      "incomplete_value": false,
      "site": "007ae550",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:a10:8"
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
      "007ae5a8",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae5a8",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae53c ["INT_ADD", "register:40f0:8", ["const:7ae53c:8", "const:4:8"]]
- 007ae53c ["CALL", null, ["callee:00c57f80:8"]]
+ 007ae594 ["INT_ADD", "register:40f0:8", ["const:7ae594:8", "const:4:8"]]
+ 007ae594 ["CALL", null, ["callee:00c57f80:8"]]
- 007ae544 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 007ae544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae59c ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 007ae59c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae59c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae59c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ae55c ["INT_ADD", "register:40f0:8", ["const:7ae55c:8", "const:4:8"]]
- 007ae55c ["CALL", null, ["callee:00c57f80:8"]]
+ 007ae5b4 ["INT_ADD", "register:40f0:8", ["const:7ae5b4:8", "const:4:8"]]
+ 007ae5b4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7f7f0d790fad650c0c7f282ac5e07303"></a>

### [`007ae58c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae58c.md) → [`007ae5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae5e4.md) FUN_007ae5e4

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
      "definition_site": "007ae5f0",
      "incomplete_value": false,
      "site": "007ae5fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae598",
      "incomplete_value": false,
      "site": "007ae5a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007ae5fc",
      "DATA",
      [
        "storage",
        "00c7a408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae5fc",
      "DATA",
      [
        "storage",
        "00c7a4d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae598 ["COPY", "tmp:0:8", ["const:408:8"]]
- 007ae598 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007ae598 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007ae598 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007ae5f0 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 007ae5f0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007ae5f0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007ae5f0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-3f3544fadc543ec8322f3f4882317b9f"></a>

### [`007ae5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae5d0.md) → [`007ae628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae628.md) FUN_007ae628

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
      "definition_site": "007ae640",
      "incomplete_value": false,
      "site": "007ae64c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae5e8",
      "incomplete_value": false,
      "site": "007ae5f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007ae64c",
      "DATA",
      [
        "storage",
        "00c7a408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae64c",
      "DATA",
      [
        "storage",
        "00c7a4d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae5e8 ["COPY", "tmp:0:8", ["const:408:8"]]
- 007ae5e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae5e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae5e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae640 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 007ae640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ae618 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ae618 ["INT_ADD", "register:40f0:8", ["const:7ae618:8", "const:4:8"]]
- 007ae618 ["CALLIND", null, ["register:0:8"]]
+ 007ae670 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ae670 ["INT_ADD", "register:40f0:8", ["const:7ae670:8", "const:4:8"]]
+ 007ae670 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b86701007ae4c7bc5151b70b41d55a46"></a>

### [`007ae62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae62c.md) → [`007ae684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae684.md) FUN_007ae684

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ae6ac",
      "incomplete_value": false,
      "site": "007ae6b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae654",
      "incomplete_value": false,
      "site": "007ae658",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007ae6b0",
      "DATA",
      [
        "storage",
        "00c7a408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae6b0",
      "DATA",
      [
        "storage",
        "00c7a4d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae640 ["INT_ADD", "register:40f0:8", ["const:7ae640:8", "const:4:8"]]
- 007ae640 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ae698 ["INT_ADD", "register:40f0:8", ["const:7ae698:8", "const:4:8"]]
+ 007ae698 ["CALL", null, ["callee:00c57f60:8"]]
- 007ae654 ["COPY", "tmp:0:8", ["const:408:8"]]
- 007ae654 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ae654 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ae654 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ae6ac ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 007ae6ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ae6ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ae6ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007ae678 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ae678 ["INT_ADD", "register:40f0:8", ["const:7ae678:8", "const:4:8"]]
- 007ae678 ["CALLIND", null, ["register:0:8"]]
+ 007ae6d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ae6d0 ["INT_ADD", "register:40f0:8", ["const:7ae6d0:8", "const:4:8"]]
+ 007ae6d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-770c724c44d5111a56b68cfaf0aa8af9"></a>

### [`007ae6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae6bc.md) → [`007ae714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae714.md) FUN_007ae714

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
      "definition_site": "007ae730",
      "incomplete_value": false,
      "site": "007ae734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae6d8",
      "incomplete_value": false,
      "site": "007ae6dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007ae734",
      "DATA",
      [
        "storage",
        "00c7a408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae734",
      "DATA",
      [
        "storage",
        "00c7a4d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae6d8 ["COPY", "tmp:0:8", ["const:408:8"]]
- 007ae6d8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007ae6d8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007ae6d8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007ae730 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 007ae730 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007ae730 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007ae730 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007ae700 ["COPY", "register:0:8", ["register:4048:8"]]
- 007ae700 ["INT_ADD", "register:40f0:8", ["const:7ae700:8", "const:4:8"]]
- 007ae700 ["CALLIND", null, ["register:0:8"]]
+ 007ae758 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007ae758 ["INT_ADD", "register:40f0:8", ["const:7ae758:8", "const:4:8"]]
+ 007ae758 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c0a9504a7f2dd1e18926641cf1944c04"></a>

### [`007ae804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae804.md) → [`007ae85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae85c.md) FUN_007ae85c

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
      "definition_site": "007ae880",
      "incomplete_value": false,
      "site": "007ae880",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae828",
      "incomplete_value": false,
      "site": "007ae828",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007ae880",
      "DATA",
      [
        "storage",
        "00c7a498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae880",
      "DATA",
      [
        "storage",
        "00c7a568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae818 ["INT_ADD", "register:40f0:8", ["const:7ae818:8", "const:4:8"]]
- 007ae818 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ae870 ["INT_ADD", "register:40f0:8", ["const:7ae870:8", "const:4:8"]]
+ 007ae870 ["CALL", null, ["callee:00c57f60:8"]]
- 007ae824 ["COPY", "tmp:0:8", ["const:498:8"]]
- 007ae824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae87c ["COPY", "tmp:0:8", ["const:568:8"]]
+ 007ae87c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae87c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae87c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8667197f8c32f59aa6f6afe68b26fa50"></a>

### [`007ae838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae838.md) → [`007ae890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae890.md) FUN_007ae890

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
      "definition_site": "007ae89c",
      "incomplete_value": false,
      "site": "007ae89c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae844",
      "incomplete_value": false,
      "site": "007ae844",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007ae89c",
      "DATA",
      [
        "storage",
        "00c7a498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae89c",
      "DATA",
      [
        "storage",
        "00c7a568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae840 ["COPY", "tmp:0:8", ["const:498:8"]]
- 007ae840 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ae840 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ae840 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007ae898 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 007ae898 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007ae898 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007ae898 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-82356966a29fa2c8eb955cd9446787eb"></a>

### [`007ae854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae854.md) → [`007ae8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae8ac.md) FUN_007ae8ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`004938d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/004938d4.md) [`007ae990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae990.md) [`007ae994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae994.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00493914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493914.md) [`007ae9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9e8.md) [`007ae9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9ec.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

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
      "site": "007ae8c8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007ae870",
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
      "007ae8c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "007ae8d8",
      "DATA",
      [
        "storage",
        "00c7a518",
        null,
        "undefined *"
      ]
    ],
    [
      "007ae910",
      "READ",
      [
        "storage",
        "00c7a538",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "007ae8c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "007ae8d8",
      "DATA",
      [
        "storage",
        "00c7a5e8",
        null,
        "undefined *"
      ]
    ],
    [
      "007ae910",
      "READ",
      [
        "storage",
        "00c7a608",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae870 ["INT_ADD", "register:40f0:8", ["const:7ae870:8", "const:4:8"]]
- 007ae870 ["CALL", null, ["ram:48ccf8:8"]]
+ 007ae8c8 ["INT_ADD", "register:40f0:8", ["const:7ae8c8:8", "const:4:8"]]
+ 007ae8c8 ["CALL", null, ["ram:48cd38:8"]]
- 007ae878 ["COPY", "tmp:0:8", ["const:518:8"]]
- 007ae878 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae878 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae878 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae8d0 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 007ae8d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae8d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae8d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007ae890 ["INT_ADD", "register:40f0:8", ["const:7ae890:8", "const:4:8"]]
- 007ae890 ["CALL", null, ["callee:00493914:8"]]
+ 007ae8e8 ["INT_ADD", "register:40f0:8", ["const:7ae8e8:8", "const:4:8"]]
+ 007ae8e8 ["CALL", null, ["callee:00493914:8"]]
~~~


<a id="compare-c749d41c0aa899a056ca695a77a1a99d"></a>

### [`007ae95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae95c.md) → [`007ae9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9b4.md) FUN_007ae9b4

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
      "definition_site": "007ae9c8",
      "incomplete_value": false,
      "site": "007ae9cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae970",
      "incomplete_value": false,
      "site": "007ae974",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:518:8"
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
      "007ae9cc",
      "DATA",
      [
        "storage",
        "00c7a518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae9cc",
      "DATA",
      [
        "storage",
        "00c7a5e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae968 ["INT_ADD", "register:40f0:8", ["const:7ae968:8", "const:4:8"]]
- 007ae968 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ae9c0 ["INT_ADD", "register:40f0:8", ["const:7ae9c0:8", "const:4:8"]]
+ 007ae9c0 ["CALL", null, ["callee:00c57f60:8"]]
- 007ae970 ["COPY", "tmp:0:8", ["const:518:8"]]
- 007ae970 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae970 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae970 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae9c8 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 007ae9c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae9c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae9c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a55688a8e914a0dc9c761f9c89dba23f"></a>

### [`007ae980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae980.md) → [`007ae9d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9d8.md) FUN_007ae9d8

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
      "definition_site": "007ae9dc",
      "incomplete_value": false,
      "site": "007ae9e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ae984",
      "incomplete_value": false,
      "site": "007ae988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:518:8"
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
      "007ae9e0",
      "DATA",
      [
        "storage",
        "00c7a518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007ae9e0",
      "DATA",
      [
        "storage",
        "00c7a5e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007ae984 ["COPY", "tmp:0:8", ["const:518:8"]]
- 007ae984 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007ae984 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007ae984 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007ae9dc ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 007ae9dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae9dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007ae9dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-815cd17461dfbdfff928d68e95d10377"></a>

### [`007ae998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae998.md) → [`007ae9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae9f0.md) FUN_007ae9f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492f28.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.79% / 新版 95.79%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007aeae8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007aea90",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "007aea10",
      "READ",
      [
        "storage",
        "002b7769",
        null,
        "string"
      ]
    ],
    [
      "007aea1c",
      "READ",
      [
        "storage",
        "002b776f",
        null,
        "string"
      ]
    ],
    [
      "007aeae8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "007aea10",
      "READ",
      [
        "storage",
        "002b77a9",
        null,
        "string"
      ]
    ],
    [
      "007aea1c",
      "READ",
      [
        "storage",
        "002b77af",
        null,
        "string"
      ]
    ],
    [
      "007aeae8",
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
- 007aea90 ["INT_ADD", "register:40f0:8", ["const:7aea90:8", "const:4:8"]]
- 007aea90 ["CALL", null, ["ram:48ccf8:8"]]
+ 007aeae8 ["INT_ADD", "register:40f0:8", ["const:7aeae8:8", "const:4:8"]]
+ 007aeae8 ["CALL", null, ["ram:48cd38:8"]]
- 007ae9b0 ["COPY", "tmp:0:8", ["const:769:8"]]
- 007ae9b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007ae9b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007ae9b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007aea08 ["COPY", "tmp:0:8", ["const:7a9:8"]]
+ 007aea08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007aea08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007aea08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007ae9e0 ["INT_ADD", "register:40f0:8", ["const:7ae9e0:8", "const:4:8"]]
- 007ae9e0 ["CALL", null, ["callee:0048ce94:8"]]
+ 007aea38 ["INT_ADD", "register:40f0:8", ["const:7aea38:8", "const:4:8"]]
+ 007aea38 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-46db6245671ff7a552e2aba75b8a9b09"></a>

### [`007aebf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aebf4.md) → [`007aec4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec4c.md) FUN_007aec4c

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
      "definition_site": "007aec70",
      "incomplete_value": false,
      "site": "007aec70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aec18",
      "incomplete_value": false,
      "site": "007aec18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "007aec70",
      "DATA",
      [
        "storage",
        "00c7a598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aec70",
      "DATA",
      [
        "storage",
        "00c7a668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aec08 ["INT_ADD", "register:40f0:8", ["const:7aec08:8", "const:4:8"]]
- 007aec08 ["CALL", null, ["callee:00c57f60:8"]]
+ 007aec60 ["INT_ADD", "register:40f0:8", ["const:7aec60:8", "const:4:8"]]
+ 007aec60 ["CALL", null, ["callee:00c57f60:8"]]
- 007aec14 ["COPY", "tmp:0:8", ["const:598:8"]]
- 007aec14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aec14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aec14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007aec6c ["COPY", "tmp:0:8", ["const:668:8"]]
+ 007aec6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007aec6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007aec6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb30e638789080e3b626648f3d0e9586"></a>

### [`007aec28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aec28.md) → [`007aec80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aec80.md) FUN_007aec80

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
      "definition_site": "007aec8c",
      "incomplete_value": false,
      "site": "007aec8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aec34",
      "incomplete_value": false,
      "site": "007aec34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "007aec8c",
      "DATA",
      [
        "storage",
        "00c7a598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aec8c",
      "DATA",
      [
        "storage",
        "00c7a668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aec30 ["COPY", "tmp:0:8", ["const:598:8"]]
- 007aec30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aec30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aec30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007aec88 ["COPY", "tmp:0:8", ["const:668:8"]]
+ 007aec88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007aec88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007aec88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0c881b7eb359e9e33bf5930f295727fd"></a>

### [`007aec78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aec78.md) → [`007aecd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aecd0.md) FUN_007aecd0

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
      "definition_site": "007aecf4",
      "incomplete_value": false,
      "site": "007aecf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aec9c",
      "incomplete_value": false,
      "site": "007aec9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "007aecf4",
      "DATA",
      [
        "storage",
        "00c7a618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aecf4",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aec8c ["INT_ADD", "register:40f0:8", ["const:7aec8c:8", "const:4:8"]]
- 007aec8c ["CALL", null, ["callee:00c57f60:8"]]
+ 007aece4 ["INT_ADD", "register:40f0:8", ["const:7aece4:8", "const:4:8"]]
+ 007aece4 ["CALL", null, ["callee:00c57f60:8"]]
- 007aec98 ["COPY", "tmp:0:8", ["const:618:8"]]
- 007aec98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aec98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aec98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007aecf0 ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 007aecf0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007aecf0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007aecf0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-67aea1e0b045aa3b7c739edefe73991e"></a>

### [`007aecac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aecac.md) → [`007aed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed04.md) FUN_007aed04

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
      "definition_site": "007aed10",
      "incomplete_value": false,
      "site": "007aed10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aecb8",
      "incomplete_value": false,
      "site": "007aecb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "007aed10",
      "DATA",
      [
        "storage",
        "00c7a618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aed10",
      "DATA",
      [
        "storage",
        "00c7a6e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aecb4 ["COPY", "tmp:0:8", ["const:618:8"]]
- 007aecb4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aecb4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aecb4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007aed0c ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 007aed0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007aed0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007aed0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e495ff3d9a9c7131559cc19ddaa80f43"></a>

### [`007aecfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aecfc.md) → [`007aed54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed54.md) FUN_007aed54

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
      "definition_site": "007aed68",
      "incomplete_value": false,
      "site": "007aed6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aed10",
      "incomplete_value": false,
      "site": "007aed14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "007aed6c",
      "DATA",
      [
        "storage",
        "00c7a698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aed6c",
      "DATA",
      [
        "storage",
        "00c7a768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aed08 ["INT_ADD", "register:40f0:8", ["const:7aed08:8", "const:4:8"]]
- 007aed08 ["CALL", null, ["callee:00c57f60:8"]]
+ 007aed60 ["INT_ADD", "register:40f0:8", ["const:7aed60:8", "const:4:8"]]
+ 007aed60 ["CALL", null, ["callee:00c57f60:8"]]
- 007aed10 ["COPY", "tmp:0:8", ["const:698:8"]]
- 007aed10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aed10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aed10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007aed68 ["COPY", "tmp:0:8", ["const:768:8"]]
+ 007aed68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007aed68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007aed68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6c2b57a31642df991e37f723256fea2f"></a>

### [`007aed20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aed20.md) → [`007aed78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed78.md) FUN_007aed78

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
      "definition_site": "007aed7c",
      "incomplete_value": false,
      "site": "007aed80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aed24",
      "incomplete_value": false,
      "site": "007aed28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "007aed80",
      "DATA",
      [
        "storage",
        "00c7a698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aed80",
      "DATA",
      [
        "storage",
        "00c7a768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aed24 ["COPY", "tmp:0:8", ["const:698:8"]]
- 007aed24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aed24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aed24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007aed7c ["COPY", "tmp:0:8", ["const:768:8"]]
+ 007aed7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007aed7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007aed7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fea97a6a11da49c4572f7f675e03daa6"></a>

### [`007aed38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aed38.md) → [`007aed90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aed90.md) FUN_007aed90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044c48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044c/0044c48c.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0044c4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c4cc.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

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
      "site": "007aedac",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007aed54",
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
      "007aedac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "007aedac",
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
- 007aed54 ["INT_ADD", "register:40f0:8", ["const:7aed54:8", "const:4:8"]]
- 007aed54 ["CALL", null, ["ram:48ccf8:8"]]
+ 007aedac ["INT_ADD", "register:40f0:8", ["const:7aedac:8", "const:4:8"]]
+ 007aedac ["CALL", null, ["ram:48cd38:8"]]
- 007aed60 ["INT_ADD", "register:40f0:8", ["const:7aed60:8", "const:4:8"]]
- 007aed60 ["CALL", null, ["callee:0044c4cc:8"]]
+ 007aedb8 ["INT_ADD", "register:40f0:8", ["const:7aedb8:8", "const:4:8"]]
+ 007aedb8 ["CALL", null, ["callee:0044c4cc:8"]]
- 007aed6c ["INT_ADD", "register:40f0:8", ["const:7aed6c:8", "const:4:8"]]
- 007aed6c ["CALL", null, ["callee:004928ec:8"]]
+ 007aedc4 ["INT_ADD", "register:40f0:8", ["const:7aedc4:8", "const:4:8"]]
+ 007aedc4 ["CALL", null, ["callee:004928ec:8"]]
~~~


<a id="compare-d6da7758ba18280088110a9fa3157112"></a>

### [`007aee18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aee18.md) → [`007aee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aee70.md) FUN_007aee70

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
      "definition_site": "007aee78",
      "incomplete_value": false,
      "site": "007aee7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aee20",
      "incomplete_value": false,
      "site": "007aee24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007aee7c",
      "DATA",
      [
        "storage",
        "00c7a718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aee7c",
      "DATA",
      [
        "storage",
        "00c7a7e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aee20 ["COPY", "tmp:0:8", ["const:718:8"]]
- 007aee20 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007aee20 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007aee20 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007aee78 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 007aee78 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007aee78 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007aee78 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007aee44 ["INT_ADD", "register:40f0:8", ["const:7aee44:8", "const:4:8"]]
- 007aee44 ["CALL", null, ["callee:00c57f80:8"]]
+ 007aee9c ["INT_ADD", "register:40f0:8", ["const:7aee9c:8", "const:4:8"]]
+ 007aee9c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f970b0143641243eb5ebc884f2eeb1ba"></a>

### [`007aee58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aee58.md) → [`007aeeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aeeb0.md) FUN_007aeeb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007aeedc",
      "incomplete_value": false,
      "site": "007aeedc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aee84",
      "incomplete_value": false,
      "site": "007aee84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:718:8"
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
      "007aeedc",
      "DATA",
      [
        "storage",
        "00c7a718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aeedc",
      "DATA",
      [
        "storage",
        "00c7a7e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aee6c ["INT_ADD", "register:40f0:8", ["const:7aee6c:8", "const:4:8"]]
- 007aee6c ["CALL", null, ["callee:00c57f60:8"]]
+ 007aeec4 ["INT_ADD", "register:40f0:8", ["const:7aeec4:8", "const:4:8"]]
+ 007aeec4 ["CALL", null, ["callee:00c57f60:8"]]
- 007aee7c ["COPY", "tmp:0:8", ["const:718:8"]]
- 007aee7c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007aee7c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007aee7c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007aeed4 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 007aeed4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007aeed4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007aeed4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007aeea4 ["INT_ADD", "register:40f0:8", ["const:7aeea4:8", "const:4:8"]]
- 007aeea4 ["CALL", null, ["callee:0043bb60:8"]]
+ 007aeefc ["INT_ADD", "register:40f0:8", ["const:7aeefc:8", "const:4:8"]]
+ 007aeefc ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-68c5e25a645480b7ea0081020684b08d"></a>

### [`007aeecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aeecc.md) → [`007aef24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aef24.md) FUN_007aef24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007aef2c",
      "incomplete_value": false,
      "site": "007aef2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aeed4",
      "incomplete_value": false,
      "site": "007aeed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
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
      "007aef2c",
      "DATA",
      [
        "storage",
        "00c7a718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007aef2c",
      "DATA",
      [
        "storage",
        "00c7a7e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aeed0 ["COPY", "tmp:0:8", ["const:718:8"]]
- 007aeed0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aeed0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aeed0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007aef28 ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 007aef28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007aef28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007aef28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-315f5bba5cdeca79464cad9c5385c42e"></a>

### [`007aef50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aef50.md) → [`007aefa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aefa8.md) FUN_007aefa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`00492f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492f28.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492f68.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007aefb8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007aef60",
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
      "007aefb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "007aefb8",
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
- 007aef60 ["INT_ADD", "register:40f0:8", ["const:7aef60:8", "const:4:8"]]
- 007aef60 ["CALL", null, ["ram:48ccf8:8"]]
+ 007aefb8 ["INT_ADD", "register:40f0:8", ["const:7aefb8:8", "const:4:8"]]
+ 007aefb8 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-cf5f2400f31c1370faa361028ba015b9"></a>

### [`007aefa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aefa0.md) → [`007aeff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aeff8.md) FUN_007aeff8

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
      "definition_site": "007af018",
      "incomplete_value": false,
      "site": "007af01c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aefc0",
      "incomplete_value": false,
      "site": "007aefc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "007af01c",
      "DATA",
      [
        "storage",
        "00c7a798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af01c",
      "DATA",
      [
        "storage",
        "00c7a868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aefb4 ["INT_ADD", "register:40f0:8", ["const:7aefb4:8", "const:4:8"]]
- 007aefb4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007af00c ["INT_ADD", "register:40f0:8", ["const:7af00c:8", "const:4:8"]]
+ 007af00c ["CALL", null, ["callee:00c57f60:8"]]
- 007aefc0 ["COPY", "tmp:0:8", ["const:798:8"]]
- 007aefc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aefc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aefc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af018 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 007af018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7235642bac514ee7b1ab434375963a88"></a>

### [`007aefd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aefd8.md) → [`007af030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af030.md) FUN_007af030

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
      "definition_site": "007af034",
      "incomplete_value": false,
      "site": "007af038",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007aefdc",
      "incomplete_value": false,
      "site": "007aefe0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "007af038",
      "DATA",
      [
        "storage",
        "00c7a798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af038",
      "DATA",
      [
        "storage",
        "00c7a868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007aefdc ["COPY", "tmp:0:8", ["const:798:8"]]
- 007aefdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aefdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aefdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af034 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 007af034 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af034 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af034 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3be344b3b48cb1cff9817131d52f300b"></a>

### [`007aeff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aeff8.md) → [`007af050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af050.md) FUN_007af050

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`007aad04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aad04.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`007aad5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aad5c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

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
      "site": "007af084",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007af02c",
      "value": [
        "leaf",
        "ram:764384:8"
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
      "007af084",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ]
  ],
  "added": [
    [
      "007af084",
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
- 007af02c ["INT_ADD", "register:40f0:8", ["const:7af02c:8", "const:4:8"]]
- 007af02c ["CALL", null, ["ram:764384:8"]]
+ 007af084 ["INT_ADD", "register:40f0:8", ["const:7af084:8", "const:4:8"]]
+ 007af084 ["CALL", null, ["ram:7643dc:8"]]
- 007af024 ["INT_ADD", "register:40f0:8", ["const:7af024:8", "const:4:8"]]
- 007af024 ["CALL", null, ["callee:00851550:8"]]
+ 007af07c ["INT_ADD", "register:40f0:8", ["const:7af07c:8", "const:4:8"]]
+ 007af07c ["CALL", null, ["callee:00851550:8"]]
- 007af038 ["INT_ADD", "register:40f0:8", ["const:7af038:8", "const:4:8"]]
- 007af038 ["CALL", null, ["callee:007aad5c:8"]]
+ 007af090 ["INT_ADD", "register:40f0:8", ["const:7af090:8", "const:4:8"]]
+ 007af090 ["CALL", null, ["callee:007aad5c:8"]]
~~~


<a id="compare-1e095e6826e99abcaed3747fcb5262c3"></a>

### [`007af0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af0c8.md) → [`007af120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af120.md) FUN_007af120

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
      "definition_site": "007af134",
      "incomplete_value": false,
      "site": "007af138",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af0dc",
      "incomplete_value": false,
      "site": "007af0e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:818:8"
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
      "007af138",
      "DATA",
      [
        "storage",
        "00c7a818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af138",
      "DATA",
      [
        "storage",
        "00c7a8e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af0d4 ["INT_ADD", "register:40f0:8", ["const:7af0d4:8", "const:4:8"]]
- 007af0d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007af12c ["INT_ADD", "register:40f0:8", ["const:7af12c:8", "const:4:8"]]
+ 007af12c ["CALL", null, ["callee:00c57f60:8"]]
- 007af0dc ["COPY", "tmp:0:8", ["const:818:8"]]
- 007af0dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af0dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af0dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af134 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 007af134 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af134 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af134 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-af21dd93e11cffcb46f315745b57f4ec"></a>

### [`007af130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af130.md) → [`007af188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af188.md) FUN_007af188

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ab754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab754.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`007ab7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab7ac.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007af1c0",
      "incomplete_value": false,
      "site": "007af1c8",
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
      "definition_site": "007af168",
      "incomplete_value": false,
      "site": "007af170",
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
      "007af1c8",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "007af280",
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
      "007af1c8",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "007af280",
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
- 007af160 ["INT_ADD", "register:40f0:8", ["const:7af160:8", "const:4:8"]]
- 007af160 ["CALL", null, ["callee:00c57f60:8"]]
+ 007af1b8 ["INT_ADD", "register:40f0:8", ["const:7af1b8:8", "const:4:8"]]
+ 007af1b8 ["CALL", null, ["callee:00c57f60:8"]]
- 007af168 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 007af168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af1c0 ["COPY", "tmp:0:8", ["const:690:8"]]
+ 007af1c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af1c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af1c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007af16c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-8fab37eff2322e2a55dc817a0e3dbb30"></a>

### [`007af2a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af2a8.md) → [`007af300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af300.md) FUN_007af300

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
      "definition_site": "007af30c",
      "incomplete_value": false,
      "site": "007af318",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af2b4",
      "incomplete_value": false,
      "site": "007af2c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:898:8"
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
      "007af318",
      "DATA",
      [
        "storage",
        "00c7a898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af318",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af2b4 ["COPY", "tmp:0:8", ["const:898:8"]]
- 007af2b4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007af2b4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007af2b4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007af30c ["COPY", "tmp:0:8", ["const:968:8"]]
+ 007af30c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007af30c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007af30c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-0d2e45996f58e5fa5098f75095da9112"></a>

### [`007af348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af348.md) → [`007af3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af3a0.md) FUN_007af3a0

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
      "definition_site": "007af3cc",
      "incomplete_value": false,
      "site": "007af3cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af374",
      "incomplete_value": false,
      "site": "007af374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:898:8"
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
      "007af3cc",
      "DATA",
      [
        "storage",
        "00c7a898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af3cc",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af35c ["INT_ADD", "register:40f0:8", ["const:7af35c:8", "const:4:8"]]
- 007af35c ["CALL", null, ["callee:00c57f60:8"]]
+ 007af3b4 ["INT_ADD", "register:40f0:8", ["const:7af3b4:8", "const:4:8"]]
+ 007af3b4 ["CALL", null, ["callee:00c57f60:8"]]
- 007af36c ["COPY", "tmp:0:8", ["const:898:8"]]
- 007af36c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af36c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af36c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af3c4 ["COPY", "tmp:0:8", ["const:968:8"]]
+ 007af3c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af3c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af3c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007af390 ["COPY", "register:0:8", ["register:4040:8"]]
- 007af390 ["INT_ADD", "register:40f0:8", ["const:7af390:8", "const:4:8"]]
- 007af390 ["CALLIND", null, ["register:0:8"]]
+ 007af3e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007af3e8 ["INT_ADD", "register:40f0:8", ["const:7af3e8:8", "const:4:8"]]
+ 007af3e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6b59abc7721cc4bb5b525c5c82d0d771"></a>

### [`007af3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af3d0.md) → [`007af428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af428.md) FUN_007af428

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
      "definition_site": "007af444",
      "incomplete_value": false,
      "site": "007af444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af3ec",
      "incomplete_value": false,
      "site": "007af3ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:898:8"
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
      "007af444",
      "DATA",
      [
        "storage",
        "00c7a898",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af444",
      "DATA",
      [
        "storage",
        "00c7a968",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af3e8 ["COPY", "tmp:0:8", ["const:898:8"]]
- 007af3e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007af3e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007af3e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007af440 ["COPY", "tmp:0:8", ["const:968:8"]]
+ 007af440 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007af440 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007af440 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007af40c ["COPY", "register:0:8", ["register:4048:8"]]
- 007af40c ["INT_ADD", "register:40f0:8", ["const:7af40c:8", "const:4:8"]]
- 007af40c ["CALLIND", null, ["register:0:8"]]
+ 007af464 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007af464 ["INT_ADD", "register:40f0:8", ["const:7af464:8", "const:4:8"]]
+ 007af464 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-885242695ccd7e48990e9fcf90ad1af3"></a>

### [`007af62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af62c.md) → [`007af684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af684.md) FUN_007af684

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
      "definition_site": "007af690",
      "incomplete_value": false,
      "site": "007af69c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af638",
      "incomplete_value": false,
      "site": "007af644",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:918:8"
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
      "007af69c",
      "DATA",
      [
        "storage",
        "00c7a918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af69c",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af638 ["COPY", "tmp:0:8", ["const:918:8"]]
- 007af638 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007af638 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007af638 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007af690 ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 007af690 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007af690 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007af690 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-db75f4ec5e40178bc16977a8f4504ffb"></a>

### [`007af670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af670.md) → [`007af6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af6c8.md) FUN_007af6c8

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
      "definition_site": "007af6e0",
      "incomplete_value": false,
      "site": "007af6ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af688",
      "incomplete_value": false,
      "site": "007af694",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:918:8"
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
      "007af6ec",
      "DATA",
      [
        "storage",
        "00c7a918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af6ec",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af688 ["COPY", "tmp:0:8", ["const:918:8"]]
- 007af688 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af688 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af688 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af6e0 ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 007af6e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af6e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af6e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007af6b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007af6b8 ["INT_ADD", "register:40f0:8", ["const:7af6b8:8", "const:4:8"]]
- 007af6b8 ["CALLIND", null, ["register:0:8"]]
+ 007af710 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007af710 ["INT_ADD", "register:40f0:8", ["const:7af710:8", "const:4:8"]]
+ 007af710 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bea9efc1a3870a8d733906bc8066fa2e"></a>

### [`007af6cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af6cc.md) → [`007af724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af724.md) FUN_007af724

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
      "definition_site": "007af750",
      "incomplete_value": false,
      "site": "007af750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af6f8",
      "incomplete_value": false,
      "site": "007af6f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:918:8"
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
      "007af750",
      "DATA",
      [
        "storage",
        "00c7a918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af750",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af6e0 ["INT_ADD", "register:40f0:8", ["const:7af6e0:8", "const:4:8"]]
- 007af6e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007af738 ["INT_ADD", "register:40f0:8", ["const:7af738:8", "const:4:8"]]
+ 007af738 ["CALL", null, ["callee:00c57f60:8"]]
- 007af6f0 ["COPY", "tmp:0:8", ["const:918:8"]]
- 007af6f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af6f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af6f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af748 ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 007af748 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af748 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af748 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007af714 ["COPY", "register:0:8", ["register:4040:8"]]
- 007af714 ["INT_ADD", "register:40f0:8", ["const:7af714:8", "const:4:8"]]
- 007af714 ["CALLIND", null, ["register:0:8"]]
+ 007af76c ["COPY", "register:0:8", ["register:4040:8"]]
+ 007af76c ["INT_ADD", "register:40f0:8", ["const:7af76c:8", "const:4:8"]]
+ 007af76c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ca93a033ba9424b6daa222ccdf93ca57"></a>

### [`007af754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af754.md) → [`007af7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af7ac.md) FUN_007af7ac

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
      "definition_site": "007af7c8",
      "incomplete_value": false,
      "site": "007af7c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007af770",
      "incomplete_value": false,
      "site": "007af770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:918:8"
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
      "007af7c8",
      "DATA",
      [
        "storage",
        "00c7a918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007af7c8",
      "DATA",
      [
        "storage",
        "00c7a9e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007af76c ["COPY", "tmp:0:8", ["const:918:8"]]
- 007af76c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007af76c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007af76c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007af7c4 ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 007af7c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007af7c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007af7c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007af790 ["COPY", "register:0:8", ["register:4048:8"]]
- 007af790 ["INT_ADD", "register:40f0:8", ["const:7af790:8", "const:4:8"]]
- 007af790 ["CALLIND", null, ["register:0:8"]]
+ 007af7e8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007af7e8 ["INT_ADD", "register:40f0:8", ["const:7af7e8:8", "const:4:8"]]
+ 007af7e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3d6ba64143f7dac27da28ba852f2bf6d"></a>

### [`007af898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af898.md) → [`007af8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af8f0.md) FUN_007af8f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ad324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad324.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007af928",
      "incomplete_value": false,
      "site": "007af930",
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
      "definition_site": "007af8d0",
      "incomplete_value": false,
      "site": "007af8d8",
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
      "007af930",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "007af9e8",
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
      "007af930",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "007af9e8",
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
- 007af8c8 ["INT_ADD", "register:40f0:8", ["const:7af8c8:8", "const:4:8"]]
- 007af8c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007af920 ["INT_ADD", "register:40f0:8", ["const:7af920:8", "const:4:8"]]
+ 007af920 ["CALL", null, ["callee:00c57f60:8"]]
- 007af8d0 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 007af8d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007af8d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007af8d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007af928 ["COPY", "tmp:0:8", ["const:690:8"]]
+ 007af928 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007af928 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007af928 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007af8d4 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-d4c90d55f49aafe5410f056c09362ae8"></a>

### [`007afa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afa10.md) → [`007afa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afa68.md) FUN_007afa68

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
      "definition_site": "007afa74",
      "incomplete_value": false,
      "site": "007afa80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afa1c",
      "incomplete_value": false,
      "site": "007afa28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "007afa80",
      "DATA",
      [
        "storage",
        "00c7a998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afa80",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afa1c ["COPY", "tmp:0:8", ["const:998:8"]]
- 007afa1c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007afa1c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007afa1c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007afa74 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 007afa74 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007afa74 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007afa74 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-95170b49b11c624c441647fb2fb8da78"></a>

### [`007afa54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afa54.md) → [`007afaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afaac.md) FUN_007afaac

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
      "definition_site": "007afac4",
      "incomplete_value": false,
      "site": "007afad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afa6c",
      "incomplete_value": false,
      "site": "007afa78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "007afad0",
      "DATA",
      [
        "storage",
        "00c7a998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afad0",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afa6c ["COPY", "tmp:0:8", ["const:998:8"]]
- 007afa6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afa6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afa6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007afac4 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 007afac4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007afac4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007afac4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007afa9c ["COPY", "register:0:8", ["register:4040:8"]]
- 007afa9c ["INT_ADD", "register:40f0:8", ["const:7afa9c:8", "const:4:8"]]
- 007afa9c ["CALLIND", null, ["register:0:8"]]
+ 007afaf4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007afaf4 ["INT_ADD", "register:40f0:8", ["const:7afaf4:8", "const:4:8"]]
+ 007afaf4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-62537961aa303205a82a3215d8ee5018"></a>

### [`007afab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afab0.md) → [`007afb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afb08.md) FUN_007afb08

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
      "definition_site": "007afb34",
      "incomplete_value": false,
      "site": "007afb34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afadc",
      "incomplete_value": false,
      "site": "007afadc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "007afb34",
      "DATA",
      [
        "storage",
        "00c7a998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afb34",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afac4 ["INT_ADD", "register:40f0:8", ["const:7afac4:8", "const:4:8"]]
- 007afac4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007afb1c ["INT_ADD", "register:40f0:8", ["const:7afb1c:8", "const:4:8"]]
+ 007afb1c ["CALL", null, ["callee:00c57f60:8"]]
- 007afad4 ["COPY", "tmp:0:8", ["const:998:8"]]
- 007afad4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afad4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afad4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007afb2c ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 007afb2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007afb2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007afb2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007afaf8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007afaf8 ["INT_ADD", "register:40f0:8", ["const:7afaf8:8", "const:4:8"]]
- 007afaf8 ["CALLIND", null, ["register:0:8"]]
+ 007afb50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007afb50 ["INT_ADD", "register:40f0:8", ["const:7afb50:8", "const:4:8"]]
+ 007afb50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1f45e154eede6e2028a460e6ae0e9122"></a>

### [`007afb38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afb38.md) → [`007afb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afb90.md) FUN_007afb90

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
      "definition_site": "007afbac",
      "incomplete_value": false,
      "site": "007afbac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afb54",
      "incomplete_value": false,
      "site": "007afb54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:998:8"
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
      "007afbac",
      "DATA",
      [
        "storage",
        "00c7a998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afbac",
      "DATA",
      [
        "storage",
        "00c7aa68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afb50 ["COPY", "tmp:0:8", ["const:998:8"]]
- 007afb50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007afb50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007afb50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007afba8 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 007afba8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007afba8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007afba8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007afb74 ["COPY", "register:0:8", ["register:4048:8"]]
- 007afb74 ["INT_ADD", "register:40f0:8", ["const:7afb74:8", "const:4:8"]]
- 007afb74 ["CALLIND", null, ["register:0:8"]]
+ 007afbcc ["COPY", "register:0:8", ["register:4048:8"]]
+ 007afbcc ["INT_ADD", "register:40f0:8", ["const:7afbcc:8", "const:4:8"]]
+ 007afbcc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-58f602ddad27607a3e349abd3074e7d5"></a>

### [`007afc7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afc7c.md) → [`007afcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afcd4.md) FUN_007afcd4

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
      "definition_site": "007afce0",
      "incomplete_value": false,
      "site": "007afcec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afc88",
      "incomplete_value": false,
      "site": "007afc94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a18:8"
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
      "007afcec",
      "DATA",
      [
        "storage",
        "00c7aa18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afcec",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afc88 ["COPY", "tmp:0:8", ["const:a18:8"]]
- 007afc88 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007afc88 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007afc88 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007afce0 ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 007afce0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007afce0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007afce0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-6641f2924663a3b87927eb85a99d56e8"></a>

### [`007afcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afcc0.md) → [`007afd18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afd18.md) FUN_007afd18

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
      "definition_site": "007afd30",
      "incomplete_value": false,
      "site": "007afd3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afcd8",
      "incomplete_value": false,
      "site": "007afce4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a18:8"
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
      "007afd3c",
      "DATA",
      [
        "storage",
        "00c7aa18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afd3c",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afcd8 ["COPY", "tmp:0:8", ["const:a18:8"]]
- 007afcd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afcd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afcd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007afd30 ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 007afd30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007afd30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007afd30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007afd08 ["COPY", "register:0:8", ["register:4040:8"]]
- 007afd08 ["INT_ADD", "register:40f0:8", ["const:7afd08:8", "const:4:8"]]
- 007afd08 ["CALLIND", null, ["register:0:8"]]
+ 007afd60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007afd60 ["INT_ADD", "register:40f0:8", ["const:7afd60:8", "const:4:8"]]
+ 007afd60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8294130d0d8fa79c0f714a0139d8b986"></a>

### [`007afd1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afd1c.md) → [`007afd74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afd74.md) FUN_007afd74

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
      "definition_site": "007afda0",
      "incomplete_value": false,
      "site": "007afda0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afd48",
      "incomplete_value": false,
      "site": "007afd48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a18:8"
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
      "007afda0",
      "DATA",
      [
        "storage",
        "00c7aa18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afda0",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afd30 ["INT_ADD", "register:40f0:8", ["const:7afd30:8", "const:4:8"]]
- 007afd30 ["CALL", null, ["callee:00c57f60:8"]]
+ 007afd88 ["INT_ADD", "register:40f0:8", ["const:7afd88:8", "const:4:8"]]
+ 007afd88 ["CALL", null, ["callee:00c57f60:8"]]
- 007afd40 ["COPY", "tmp:0:8", ["const:a18:8"]]
- 007afd40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007afd40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007afd40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007afd98 ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 007afd98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007afd98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007afd98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007afd64 ["COPY", "register:0:8", ["register:4040:8"]]
- 007afd64 ["INT_ADD", "register:40f0:8", ["const:7afd64:8", "const:4:8"]]
- 007afd64 ["CALLIND", null, ["register:0:8"]]
+ 007afdbc ["COPY", "register:0:8", ["register:4040:8"]]
+ 007afdbc ["INT_ADD", "register:40f0:8", ["const:7afdbc:8", "const:4:8"]]
+ 007afdbc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b3b56312708addbe3fc180d4dc56366a"></a>

### [`007afda4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afda4.md) → [`007afdfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afdfc.md) FUN_007afdfc

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
      "definition_site": "007afe18",
      "incomplete_value": false,
      "site": "007afe18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007afdc0",
      "incomplete_value": false,
      "site": "007afdc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a18:8"
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
      "007afe18",
      "DATA",
      [
        "storage",
        "00c7aa18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007afe18",
      "DATA",
      [
        "storage",
        "00c7aae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007afdbc ["COPY", "tmp:0:8", ["const:a18:8"]]
- 007afdbc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007afdbc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007afdbc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007afe14 ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 007afe14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007afe14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007afe14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007afde0 ["COPY", "register:0:8", ["register:4048:8"]]
- 007afde0 ["INT_ADD", "register:40f0:8", ["const:7afde0:8", "const:4:8"]]
- 007afde0 ["CALLIND", null, ["register:0:8"]]
+ 007afe38 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007afe38 ["INT_ADD", "register:40f0:8", ["const:7afe38:8", "const:4:8"]]
+ 007afe38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-45862494c0829a42084269ba7151db7f"></a>

### [`007aff3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007aff3c.md) → [`007aff94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007aff94.md) FUN_007aff94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007adf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007adf1c.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007affcc",
      "incomplete_value": false,
      "site": "007affd4",
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
      "definition_site": "007aff74",
      "incomplete_value": false,
      "site": "007aff7c",
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
      "007affd4",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "007b008c",
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
      "007affd4",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "007b008c",
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
- 007aff6c ["INT_ADD", "register:40f0:8", ["const:7aff6c:8", "const:4:8"]]
- 007aff6c ["CALL", null, ["callee:00c57f60:8"]]
+ 007affc4 ["INT_ADD", "register:40f0:8", ["const:7affc4:8", "const:4:8"]]
+ 007affc4 ["CALL", null, ["callee:00c57f60:8"]]
- 007aff74 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 007aff74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007aff74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007aff74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007affcc ["COPY", "tmp:0:8", ["const:690:8"]]
+ 007affcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007affcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007affcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007aff78 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-38106ebca877064b8a651726bf116136"></a>

### [`007b00b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b00b4.md) → [`007b010c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b010c.md) FUN_007b010c

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
      "definition_site": "007b0118",
      "incomplete_value": false,
      "site": "007b0124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b00c0",
      "incomplete_value": false,
      "site": "007b00cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "007b0124",
      "DATA",
      [
        "storage",
        "00c7aa98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0124",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b00c0 ["COPY", "tmp:0:8", ["const:a98:8"]]
- 007b00c0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007b00c0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007b00c0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007b0118 ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 007b0118 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0118 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0118 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-2c82816e20dab50c6445272f26bb821a"></a>

### [`007b00f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b00f8.md) → [`007b0150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0150.md) FUN_007b0150

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
      "definition_site": "007b0168",
      "incomplete_value": false,
      "site": "007b0174",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b0110",
      "incomplete_value": false,
      "site": "007b011c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "007b0174",
      "DATA",
      [
        "storage",
        "00c7aa98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0174",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0110 ["COPY", "tmp:0:8", ["const:a98:8"]]
- 007b0110 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007b0110 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007b0110 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b0168 ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 007b0168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b0168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007b0140 ["COPY", "register:0:8", ["register:4040:8"]]
- 007b0140 ["INT_ADD", "register:40f0:8", ["const:7b0140:8", "const:4:8"]]
- 007b0140 ["CALLIND", null, ["register:0:8"]]
+ 007b0198 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b0198 ["INT_ADD", "register:40f0:8", ["const:7b0198:8", "const:4:8"]]
+ 007b0198 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-11c4590dc862e6101b04dd7d30f82395"></a>

### [`007b0154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0154.md) → [`007b01ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b01ac.md) FUN_007b01ac

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
      "definition_site": "007b01d8",
      "incomplete_value": false,
      "site": "007b01d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b0180",
      "incomplete_value": false,
      "site": "007b0180",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "007b01d8",
      "DATA",
      [
        "storage",
        "00c7aa98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b01d8",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0168 ["INT_ADD", "register:40f0:8", ["const:7b0168:8", "const:4:8"]]
- 007b0168 ["CALL", null, ["callee:00c57f60:8"]]
+ 007b01c0 ["INT_ADD", "register:40f0:8", ["const:7b01c0:8", "const:4:8"]]
+ 007b01c0 ["CALL", null, ["callee:00c57f60:8"]]
- 007b0178 ["COPY", "tmp:0:8", ["const:a98:8"]]
- 007b0178 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007b0178 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007b0178 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b01d0 ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 007b01d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b01d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b01d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007b019c ["COPY", "register:0:8", ["register:4040:8"]]
- 007b019c ["INT_ADD", "register:40f0:8", ["const:7b019c:8", "const:4:8"]]
- 007b019c ["CALLIND", null, ["register:0:8"]]
+ 007b01f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b01f4 ["INT_ADD", "register:40f0:8", ["const:7b01f4:8", "const:4:8"]]
+ 007b01f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-563da611d5e1a319428118f2a6b2ba4b"></a>

### [`007b01dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b01dc.md) → [`007b0234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0234.md) FUN_007b0234

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
      "definition_site": "007b0250",
      "incomplete_value": false,
      "site": "007b0250",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b01f8",
      "incomplete_value": false,
      "site": "007b01f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "007b0250",
      "DATA",
      [
        "storage",
        "00c7aa98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0250",
      "DATA",
      [
        "storage",
        "00c7ab68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b01f4 ["COPY", "tmp:0:8", ["const:a98:8"]]
- 007b01f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007b01f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007b01f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007b024c ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 007b024c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007b024c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007b024c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007b0218 ["COPY", "register:0:8", ["register:4048:8"]]
- 007b0218 ["INT_ADD", "register:40f0:8", ["const:7b0218:8", "const:4:8"]]
- 007b0218 ["CALLIND", null, ["register:0:8"]]
+ 007b0270 ["COPY", "register:0:8", ["register:4048:8"]]
+ 007b0270 ["INT_ADD", "register:40f0:8", ["const:7b0270:8", "const:4:8"]]
+ 007b0270 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a50503f2ada27dbdb814a6aa02cf4185"></a>

### [`007b0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0320.md) → [`007b0378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0378.md) FUN_007b0378

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
      "definition_site": "007b0384",
      "incomplete_value": false,
      "site": "007b0390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b032c",
      "incomplete_value": false,
      "site": "007b0338",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "007b0390",
      "DATA",
      [
        "storage",
        "00c7ab18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0390",
      "DATA",
      [
        "storage",
        "00c7abe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b032c ["COPY", "tmp:0:8", ["const:b18:8"]]
- 007b032c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 007b032c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 007b032c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007b0384 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 007b0384 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0384 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007b0384 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-2efc9932129623d81c90dcde7e8b7ae3"></a>

### [`007b03c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b03c0.md) → [`007b0418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0418.md) FUN_007b0418

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
      "definition_site": "007b0444",
      "incomplete_value": false,
      "site": "007b0444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b03ec",
      "incomplete_value": false,
      "site": "007b03ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "007b0444",
      "DATA",
      [
        "storage",
        "00c7ab18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b0444",
      "DATA",
      [
        "storage",
        "00c7abe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b03d4 ["INT_ADD", "register:40f0:8", ["const:7b03d4:8", "const:4:8"]]
- 007b03d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007b042c ["INT_ADD", "register:40f0:8", ["const:7b042c:8", "const:4:8"]]
+ 007b042c ["CALL", null, ["callee:00c57f60:8"]]
- 007b03e4 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 007b03e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007b03e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007b03e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007b043c ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 007b043c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007b043c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007b043c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007b0408 ["COPY", "register:0:8", ["register:4040:8"]]
- 007b0408 ["INT_ADD", "register:40f0:8", ["const:7b0408:8", "const:4:8"]]
- 007b0408 ["CALLIND", null, ["register:0:8"]]
+ 007b0460 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b0460 ["INT_ADD", "register:40f0:8", ["const:7b0460:8", "const:4:8"]]
+ 007b0460 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-81fa9fc7547deb93122d8ee86e564584"></a>

### [`007b0448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0448.md) → [`007b04a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b04a0.md) FUN_007b04a0

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
      "definition_site": "007b04bc",
      "incomplete_value": false,
      "site": "007b04bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007b0464",
      "incomplete_value": false,
      "site": "007b0464",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7a000:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "007b04bc",
      "DATA",
      [
        "storage",
        "00c7ab18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007b04bc",
      "DATA",
      [
        "storage",
        "00c7abe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007b0460 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 007b0460 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007b0460 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007b0460 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007b04b8 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 007b04b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007b04b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007b04b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007b0484 ["COPY", "register:0:8", ["register:4048:8"]]
- 007b0484 ["INT_ADD", "register:40f0:8", ["const:7b0484:8", "const:4:8"]]
- 007b0484 ["CALLIND", null, ["register:0:8"]]
+ 007b04dc ["COPY", "register:0:8", ["register:4048:8"]]
+ 007b04dc ["INT_ADD", "register:40f0:8", ["const:7b04dc:8", "const:4:8"]]
+ 007b04dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6ab092b04ce1c7decc5e6206b7557a7e"></a>

### [`007b058c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b058c.md) → [`007b05e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b05e4.md) _INIT_145

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
      "definition_site": "007b0664",
      "incomplete_value": true,
      "site": "007b0680",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007b060c",
      "incomplete_value": true,
      "site": "007b0628",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007b0684",
      "incomplete_value": true,
      "site": "007b069c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007b062c",
      "incomplete_value": true,
      "site": "007b0644",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007b06a0",
      "incomplete_value": true,
      "site": "007b06bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007b0648",
      "incomplete_value": true,
      "site": "007b0664",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007b0620",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "007b0644",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "007b0664",
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
      "007b0620",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007b0644",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "007b0664",
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
- 007b0680 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 007b0680 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007b0680 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007b0680 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007b06d8 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 007b06d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007b06d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007b06d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007b07c0 ["INT_ADD", "register:40f0:8", ["const:7b07c0:8", "const:4:8"]]
- 007b07c0 ["CALL", null, ["callee:00c57f00:8"]]
+ 007b0818 ["INT_ADD", "register:40f0:8", ["const:7b0818:8", "const:4:8"]]
+ 007b0818 ["CALL", null, ["callee:00c57f00:8"]]
- 007b05b4 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 007b060c ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-309f3ce25412ccb807680e58ffd12eac"></a>

### [`007bbe1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bbe1c.md) → [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) FUN_007bbe74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007b0a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0a18.md) · 呼出先 30件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md)
- 新版 呼出元 1件 [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) · 呼出先 30件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.26% / 新版 97.26%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007bcce0",
      "incomplete_value": true,
      "site": "007bccf8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007bcc88",
      "incomplete_value": true,
      "site": "007bcca0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:116:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 316,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007bce2c",
      "incomplete_value": true,
      "site": "007bce40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a1b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007bcdd4",
      "incomplete_value": true,
      "site": "007bcde8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a6f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 330,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007bce44",
      "incomplete_value": true,
      "site": "007bce44",
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
      "definition_site": "007bcdec",
      "incomplete_value": true,
      "site": "007bcdec",
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
    "ordinal": 331,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007bcccc",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "007bcce0",
      "READ",
      [
        "storage",
        "002bf116",
        null,
        "string"
      ]
    ],
    [
      "007bcd3c",
      "READ",
      [
        "storage",
        "002a908a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007bcccc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "007bcce0",
      "READ",
      [
        "storage",
        "002bf0c2",
        null,
        "string"
      ]
    ],
    [
      "007bcd3c",
      "READ",
      [
        "storage",
        "002a90b9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007bcc48 ["INT_ADD", "register:40f0:8", ["const:7bcc48:8", "const:4:8"]]
- 007bcc48 ["CALL", null, ["callee:00851550:8"]]
+ 007bcca0 ["INT_ADD", "register:40f0:8", ["const:7bcca0:8", "const:4:8"]]
+ 007bcca0 ["CALL", null, ["callee:00851550:8"]]
- 007bcd4c ["INT_ADD", "register:40f0:8", ["const:7bcd4c:8", "const:4:8"]]
- 007bcd4c ["CALL", null, ["callee:0047e64c:8"]]
+ 007bcda4 ["INT_ADD", "register:40f0:8", ["const:7bcda4:8", "const:4:8"]]
+ 007bcda4 ["CALL", null, ["callee:0047e64c:8"]]
- 007bcf54 ["INT_ADD", "register:40f0:8", ["const:7bcf54:8", "const:4:8"]]
- 007bcf54 ["CALL", null, ["callee:007f18ec:8"]]
+ 007bcfac ["INT_ADD", "register:40f0:8", ["const:7bcfac:8", "const:4:8"]]
+ 007bcfac ["CALL", null, ["callee:007f18ec:8"]]
~~~


<a id="compare-f9d5c24f6cf4bd19fba623431ee8f2c3"></a>

### [`007c7bc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c7/007c7bc0.md) → [`007c7c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7c18.md) FUN_007c7c18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 15件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488178.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`004881b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/004881b8.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.77% / 新版 94.77%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007c7c50",
      "incomplete_value": false,
      "site": "007c7c5c",
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
      "definition_site": "007c7bf8",
      "incomplete_value": false,
      "site": "007c7c04",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007c7dfc",
      "incomplete_value": true,
      "site": "007c7e00",
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
      "definition_site": "007c7da4",
      "incomplete_value": true,
      "site": "007c7da8",
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
    "ordinal": 35,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007c7c5c",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "007c7c64",
      "READ",
      [
        "storage",
        "002a6b3d",
        null,
        "string"
      ]
    ],
    [
      "007c7dc8",
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
      "007c7c5c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "007c7c64",
      "READ",
      [
        "storage",
        "002a6ae1",
        null,
        "string"
      ]
    ],
    [
      "007c7dc8",
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
- 007c7bf0 ["INT_ADD", "register:40f0:8", ["const:7c7bf0:8", "const:4:8"]]
- 007c7bf0 ["CALL", null, ["callee:00487e60:8"]]
+ 007c7c48 ["INT_ADD", "register:40f0:8", ["const:7c7c48:8", "const:4:8"]]
+ 007c7c48 ["CALL", null, ["callee:00487e60:8"]]
- 007c7bf8 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 007c7bf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007c7bf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007c7bf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007c7c50 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 007c7c50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007c7c50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007c7c50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007c7bfc ["COPY", "register:4048:8", ["const:2a6000:8"]]
~~~


<a id="compare-4dc454f48dbabf82854ee46e65b20422"></a>

### [`007c800c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c8/007c800c.md) → [`007c8064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c8/007c8064.md) FUN_007c8064

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 24件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0071d034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d034.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 24件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0071d08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d08c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.36% / 新版 93.36%

優先判定に残った影響 `call_argument_candidate` 16件, `store_destination` 11件, `store_value` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007c8b54",
      "incomplete_value": false,
      "site": "007c8b54",
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
      "definition_site": "007c8afc",
      "incomplete_value": false,
      "site": "007c8afc",
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
    "ordinal": 89,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007c8b58",
      "incomplete_value": false,
      "site": "007c8b58",
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
      "definition_site": "007c8b00",
      "incomplete_value": false,
      "site": "007c8b00",
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
    "ordinal": 90,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007c8b54",
      "incomplete_value": false,
      "site": "007c8b58",
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
      "definition_site": "007c8afc",
      "incomplete_value": false,
      "site": "007c8b00",
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
    "ordinal": 90,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007c80ac",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007c80c0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007c80c8",
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
      "007c80ac",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007c80c0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007c80c8",
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
- 007c8488 ["INT_ADD", "register:40f0:8", ["const:7c8488:8", "const:4:8"]]
- 007c8488 ["CALL", null, ["callee:0047e91c:8"]]
+ 007c84e0 ["INT_ADD", "register:40f0:8", ["const:7c84e0:8", "const:4:8"]]
+ 007c84e0 ["CALL", null, ["callee:0047e91c:8"]]
- 007c89f0 ["INT_ADD", "register:40f0:8", ["const:7c89f0:8", "const:4:8"]]
- 007c89f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 007c8a48 ["INT_ADD", "register:40f0:8", ["const:7c8a48:8", "const:4:8"]]
+ 007c8a48 ["CALL", null, ["callee:00c57f80:8"]]
- 007c8a38 ["INT_ADD", "register:40f0:8", ["const:7c8a38:8", "const:4:8"]]
- 007c8a38 ["CALL", null, ["callee:00c58180:8"]]
+ 007c8a90 ["INT_ADD", "register:40f0:8", ["const:7c8a90:8", "const:4:8"]]
+ 007c8a90 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-b3e2872d99b13b9f46e4c27527f9c26d"></a>

### [`007c8cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c8/007c8cf0.md) → [`007c8d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c8/007c8d48.md) FUN_007c8d48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 24件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ab40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab40.md) [`0048ab48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab48.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 24件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`0048ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab88.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.35% / 新版 87.35%

優先判定に残った影響 `call_argument_candidate` 11件, `store_destination` 9件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007c9094",
      "incomplete_value": false,
      "site": "007c9094",
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
      "definition_site": "007c903c",
      "incomplete_value": false,
      "site": "007c903c",
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
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007c9098",
      "incomplete_value": false,
      "site": "007c9098",
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
      "definition_site": "007c9040",
      "incomplete_value": false,
      "site": "007c9040",
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
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007c9094",
      "incomplete_value": false,
      "site": "007c9098",
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
      "definition_site": "007c903c",
      "incomplete_value": false,
      "site": "007c9040",
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
      "007c8da4",
      "DATA",
      [
        "storage",
        "0039badc",
        null,
        "uleb128"
      ]
    ],
    [
      "007c8dc4",
      "DATA",
      [
        "storage",
        "0038f284",
        "fde_0038f284",
        "dword"
      ]
    ],
    [
      "007c8dec",
      "DATA",
      [
        "storage",
        "0038f284",
        "fde_0038f284",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "007c8da4",
      "DATA",
      [
        "storage",
        "0039badc",
        null,
        "qword"
      ]
    ],
    [
      "007c8dc4",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ],
    [
      "007c8dec",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ]
  ]
}
~~~


~~~diff
- 007c8db8 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 007c8db8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007c8db8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007c8db8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007c8e10 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 007c8e10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007c8e10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007c8e10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007c8e10 ["INT_ADD", "register:40f0:8", ["const:7c8e10:8", "const:4:8"]]
- 007c8e10 ["CALL", null, ["callee:0047e91c:8"]]
+ 007c8e68 ["INT_ADD", "register:40f0:8", ["const:7c8e68:8", "const:4:8"]]
+ 007c8e68 ["CALL", null, ["callee:0047e91c:8"]]
- 007c8f58 ["INT_ADD", "register:40f0:8", ["const:7c8f58:8", "const:4:8"]]
- 007c8f58 ["CALL", null, ["callee:0047e91c:8"]]
+ 007c8fb0 ["INT_ADD", "register:40f0:8", ["const:7c8fb0:8", "const:4:8"]]
+ 007c8fb0 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-1989e31b747c9165174bb20f2dcb54d4"></a>

### [`007c911c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c9/007c911c.md) → [`007c9174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c9/007c9174.md) FUN_007c9174

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) · 呼出先 22件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`007ff194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ff/007ff194.md)
- 新版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`007ff1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff1ec.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.59% / 新版 97.59%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007c9508",
      "incomplete_value": false,
      "site": "007c9508",
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
      "definition_site": "007c94b0",
      "incomplete_value": false,
      "site": "007c94b0",
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
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007c95c4",
      "incomplete_value": false,
      "site": "007c95c8",
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
      "definition_site": "007c956c",
      "incomplete_value": false,
      "site": "007c9570",
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
    "ordinal": 58,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007c91bc",
      "incomplete_value": true,
      "site": "007c91bc",
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
      "definition_site": "007c9164",
      "incomplete_value": true,
      "site": "007c9164",
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
      "007c91b0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007c91c4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007c91cc",
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
      "007c91b0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007c91c4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007c91cc",
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
- 007c917c ["INT_ADD", "register:40f0:8", ["const:7c917c:8", "const:4:8"]]
- 007c917c ["CALL", null, ["callee:00c586e0:8"]]
+ 007c91d4 ["INT_ADD", "register:40f0:8", ["const:7c91d4:8", "const:4:8"]]
+ 007c91d4 ["CALL", null, ["callee:00c586e0:8"]]
- 007c9158 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 007c9158 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 007c91b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 007c91b0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 007c916c ["COPY", "tmp:0:8", ["const:e58:8"]]
- 007c916c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007c916c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007c916c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 007c91c4 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 007c91c4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 007c91c4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 007c91c4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-1b9c0e0afa0257c0a2e36985f4a7805b"></a>

### [`007c974c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c9/007c974c.md) → [`007c97a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c9/007c97a4.md) FUN_007c97a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 30件 [`0046da5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da5c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 30件 [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 89.54% / 新版 89.54%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_destination` 7件, `store_value` 11件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007c9a68",
      "incomplete_value": true,
      "site": "007c9a68",
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
      "definition_site": "007c9a10",
      "incomplete_value": true,
      "site": "007c9a10",
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007c9ad4",
      "incomplete_value": true,
      "site": "007c9ad4",
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
      "definition_site": "007c9a7c",
      "incomplete_value": true,
      "site": "007c9a7c",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007c9c20",
      "incomplete_value": true,
      "site": "007c9c20",
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
      "definition_site": "007c9bc8",
      "incomplete_value": true,
      "site": "007c9bc8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007c97f4",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007c9800",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007c9808",
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
      "007c97f4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007c9800",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007c9808",
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
- 007c97b8 ["INT_ADD", "register:40f0:8", ["const:7c97b8:8", "const:4:8"]]
- 007c97b8 ["CALL", null, ["callee:00c586e0:8"]]
+ 007c9810 ["INT_ADD", "register:40f0:8", ["const:7c9810:8", "const:4:8"]]
+ 007c9810 ["CALL", null, ["callee:00c586e0:8"]]
- 007c9a68 ["INT_ADD", "register:40f0:8", ["const:7c9a68:8", "const:4:8"]]
- 007c9a68 ["CALL", null, ["callee:00c57f50:8"]]
+ 007c9ac0 ["INT_ADD", "register:40f0:8", ["const:7c9ac0:8", "const:4:8"]]
+ 007c9ac0 ["CALL", null, ["callee:00c57f50:8"]]
- 007c9a88 ["INT_ADD", "register:40f0:8", ["const:7c9a88:8", "const:4:8"]]
- 007c9a88 ["CALL", null, ["callee:00c57f80:8"]]
+ 007c9ae0 ["INT_ADD", "register:40f0:8", ["const:7c9ae0:8", "const:4:8"]]
+ 007c9ae0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b65598a23aeff022168fedb2887281a7"></a>

### [`007ca06c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ca/007ca06c.md) → [`007ca0c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca0c4.md) FUN_007ca0c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 22件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 22件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 90.84% / 新版 90.84%

優先判定に残った影響 `call_argument_candidate` 9件, `store_destination` 7件, `store_value` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ca36c",
      "incomplete_value": false,
      "site": "007ca36c",
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
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ca314",
      "incomplete_value": false,
      "site": "007ca314",
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
            "const:1b0:8"
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007ca4ac",
      "incomplete_value": false,
      "site": "007ca4ac",
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
      "definition_site": "007ca454",
      "incomplete_value": false,
      "site": "007ca454",
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
    "ordinal": 33,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007ca4b0",
      "incomplete_value": false,
      "site": "007ca4b0",
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
      "definition_site": "007ca458",
      "incomplete_value": false,
      "site": "007ca458",
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
      "007ca104",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007ca110",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007ca118",
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
      "007ca104",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007ca110",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007ca118",
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
- 007ca0c8 ["INT_ADD", "register:40f0:8", ["const:7ca0c8:8", "const:4:8"]]
- 007ca0c8 ["CALL", null, ["callee:00c586e0:8"]]
+ 007ca120 ["INT_ADD", "register:40f0:8", ["const:7ca120:8", "const:4:8"]]
+ 007ca120 ["CALL", null, ["callee:00c586e0:8"]]
- 007ca1a0 ["INT_ADD", "register:40f0:8", ["const:7ca1a0:8", "const:4:8"]]
- 007ca1a0 ["CALL", null, ["callee:0047e91c:8"]]
+ 007ca1f8 ["INT_ADD", "register:40f0:8", ["const:7ca1f8:8", "const:4:8"]]
+ 007ca1f8 ["CALL", null, ["callee:0047e91c:8"]]
- 007ca430 ["INT_ADD", "register:40f0:8", ["const:7ca430:8", "const:4:8"]]
- 007ca430 ["CALL", null, ["callee:00c57f20:8"]]
+ 007ca488 ["INT_ADD", "register:40f0:8", ["const:7ca488:8", "const:4:8"]]
+ 007ca488 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-f916c01357b5ef5851fa16b666545fb4"></a>

### [`007ca528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ca/007ca528.md) → [`007ca580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca580.md) FUN_007ca580

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 20件 [`0046da5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da5c.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`007ff95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ff/007ff95c.md) [`007ff960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ff/007ff960.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 20件 [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`007ff9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff9b4.md) [`007ff9b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ff/007ff9b8.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.60% / 新版 92.60%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 5件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007ca8b8",
      "incomplete_value": true,
      "site": "007ca8b8",
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
      "definition_site": "007ca860",
      "incomplete_value": true,
      "site": "007ca860",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007ca928",
      "incomplete_value": false,
      "site": "007ca928",
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
            "const:380:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007ca8d0",
      "incomplete_value": false,
      "site": "007ca8d0",
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
            "const:2b0:8"
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
      "definition_site": "007ca9a8",
      "incomplete_value": true,
      "site": "007ca9a8",
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
      "definition_site": "007ca950",
      "incomplete_value": true,
      "site": "007ca950",
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
    "ordinal": 38,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007ca5c4",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007ca5d0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007ca5d8",
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
      "007ca5c4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007ca5d0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007ca5d8",
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
- 007ca588 ["INT_ADD", "register:40f0:8", ["const:7ca588:8", "const:4:8"]]
- 007ca588 ["CALL", null, ["callee:00c586e0:8"]]
+ 007ca5e0 ["INT_ADD", "register:40f0:8", ["const:7ca5e0:8", "const:4:8"]]
+ 007ca5e0 ["CALL", null, ["callee:00c586e0:8"]]
- 007ca808 ["INT_ADD", "register:40f0:8", ["const:7ca808:8", "const:4:8"]]
- 007ca808 ["CALL", null, ["callee:00a47014:8"]]
+ 007ca860 ["INT_ADD", "register:40f0:8", ["const:7ca860:8", "const:4:8"]]
+ 007ca860 ["CALL", null, ["callee:00a47014:8"]]
- 007ca9a8 ["INT_ADD", "register:40f0:8", ["const:7ca9a8:8", "const:4:8"]]
- 007ca9a8 ["CALL", null, ["callee:00c57f50:8"]]
+ 007caa00 ["INT_ADD", "register:40f0:8", ["const:7caa00:8", "const:4:8"]]
+ 007caa00 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-8ff56a2b6444ac90fa3191746bbc8dee"></a>

### [`007caac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ca/007caac8.md) → [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) FUN_007cab20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 30件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00727d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727d1c.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 30件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.69% / 新版 95.69%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007cad80",
      "incomplete_value": false,
      "site": "007cad84",
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
      "definition_site": "007cad28",
      "incomplete_value": false,
      "site": "007cad2c",
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
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007cb164",
      "incomplete_value": false,
      "site": "007cb168",
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
      "definition_site": "007cb10c",
      "incomplete_value": false,
      "site": "007cb110",
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
    "ordinal": 60,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007cb1e8",
      "incomplete_value": false,
      "site": "007cb1ec",
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
      "definition_site": "007cb190",
      "incomplete_value": false,
      "site": "007cb194",
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
      "007cab88",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007cab94",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007cab9c",
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
      "007cab88",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007cab94",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "007cab9c",
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
- 007cab4c ["INT_ADD", "register:40f0:8", ["const:7cab4c:8", "const:4:8"]]
- 007cab4c ["CALL", null, ["callee:00c586e0:8"]]
+ 007caba4 ["INT_ADD", "register:40f0:8", ["const:7caba4:8", "const:4:8"]]
+ 007caba4 ["CALL", null, ["callee:00c586e0:8"]]
- 007cab8c ["INT_ADD", "register:40f0:8", ["const:7cab8c:8", "const:4:8"]]
- 007cab8c ["CALL", null, ["callee:00489f8c:8"]]
+ 007cabe4 ["INT_ADD", "register:40f0:8", ["const:7cabe4:8", "const:4:8"]]
+ 007cabe4 ["CALL", null, ["callee:00489f8c:8"]]
- 007cb0b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007cb0b8 ["INT_ADD", "register:40f0:8", ["const:7cb0b8:8", "const:4:8"]]
- 007cb0b8 ["CALLIND", null, ["register:0:8"]]
+ 007cb110 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007cb110 ["INT_ADD", "register:40f0:8", ["const:7cb110:8", "const:4:8"]]
+ 007cb110 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-46e881a0bd6cdb24e64475d977b660a8"></a>

### [`007cb5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cb/007cb5e0.md) → [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) FUN_007cb638

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`009fb44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fb/009fb44c.md) · 呼出先 67件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md)
- 新版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 67件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.20% / 新版 93.20%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 12件, `call_target` 5件, `store_value` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cb690",
      "incomplete_value": true,
      "site": "007cb69c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7ed:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007cb638",
      "incomplete_value": true,
      "site": "007cb644",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7ad:8"
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
      "definition_site": "007cbb1c",
      "incomplete_value": true,
      "site": "007cbb30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7cf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007cbac4",
      "incomplete_value": true,
      "site": "007cbad8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:823:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "007cbc60",
      "incomplete_value": true,
      "site": "007cbc7c",
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
                "const:564:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007cbc08",
      "incomplete_value": true,
      "site": "007cbc24",
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
                "const:524:8"
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
      "007cb690",
      "READ",
      [
        "storage",
        "002b77ad",
        null,
        "string"
      ]
    ],
    [
      "007cb6b0",
      "PARAM",
      [
        "storage",
        "002a151b",
        null,
        "string"
      ]
    ],
    [
      "007cb7a0",
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
      "007cb690",
      "READ",
      [
        "storage",
        "002b77ed",
        null,
        "string"
      ]
    ],
    [
      "007cb6b0",
      "PARAM",
      [
        "storage",
        "002a14ce",
        null,
        "string"
      ]
    ],
    [
      "007cb7a0",
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
- 007cb660 ["INT_ADD", "register:40f0:8", ["const:7cb660:8", "const:4:8"]]
- 007cb660 ["CALL", null, ["callee:00c58040:8"]]
+ 007cb6b8 ["INT_ADD", "register:40f0:8", ["const:7cb6b8:8", "const:4:8"]]
+ 007cb6b8 ["CALL", null, ["callee:00c58040:8"]]
- 007cb778 ["INT_ADD", "register:40f0:8", ["const:7cb778:8", "const:4:8"]]
- 007cb778 ["CALL", null, ["callee:00c586e0:8"]]
+ 007cb7d0 ["INT_ADD", "register:40f0:8", ["const:7cb7d0:8", "const:4:8"]]
+ 007cb7d0 ["CALL", null, ["callee:00c586e0:8"]]
- 007cbd00 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 007cbd00 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 007cbd00 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 007cbd00 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007cbd58 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 007cbd58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007cbd58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007cbd58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4ffe3c60fe9eda35c974517156a4cd59"></a>

### [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) → [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) FUN_007ccf44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 432件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00440b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440b00.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 432件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 96.35% / 新版 96.35%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 147件, `call_target` 68件, `store_destination` 14件, `store_value` 78件

アドレスに依存する影響 `branch_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cd49c",
      "incomplete_value": true,
      "site": "007cd49c",
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
                "const:2a1000:8"
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
      "definition_site": "007cd444",
      "incomplete_value": true,
      "site": "007cd444",
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
                "const:2a1000:8"
              ],
              [
                "leaf",
                "const:4ea:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 63,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007cd4a0",
      "incomplete_value": true,
      "site": "007cd4a0",
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
      "definition_site": "007cd448",
      "incomplete_value": true,
      "site": "007cd448",
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
    "ordinal": 64,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007cd57c",
      "incomplete_value": false,
      "site": "007cd57c",
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
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007cd524",
      "incomplete_value": false,
      "site": "007cd524",
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
            "const:330:8"
          ]
        ]
      ]
    },
    "ordinal": 83,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007ccffc",
      "DATA",
      [
        "storage",
        "003c80e4",
        "fde_003c80e4",
        "dword"
      ]
    ],
    [
      "007cd00c",
      "DATA",
      [
        "storage",
        "003c80d8",
        null,
        "uleb128"
      ]
    ],
    [
      "007cd014",
      "DATA",
      [
        "storage",
        "003c80d8",
        null,
        "uleb128"
      ]
    ]
  ],
  "added": [
    [
      "007ccffc",
      "DATA",
      [
        "storage",
        "003c80e4",
        null,
        "byte[11]"
      ]
    ],
    [
      "007cd00c",
      "DATA",
      [
        "storage",
        "003c80d8",
        null,
        "dword"
      ]
    ],
    [
      "007cd014",
      "DATA",
      [
        "storage",
        "003c80d8",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 007cd3ec ["INT_ADD", "register:40f0:8", ["const:7cd3ec:8", "const:4:8"]]
- 007cd3ec ["CALL", null, ["callee:00acebcc:8"]]
+ 007cd444 ["INT_ADD", "register:40f0:8", ["const:7cd444:8", "const:4:8"]]
+ 007cd444 ["CALL", null, ["callee:00acebcc:8"]]
- 007cd51c ["COPY", "tmp:0:8", ["const:330:8"]]
- 007cd51c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007cd51c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007cd51c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007cd574 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 007cd574 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007cd574 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007cd574 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 007cd6a4 ["INT_ADD", "register:40f0:8", ["const:7cd6a4:8", "const:4:8"]]
- 007cd6a4 ["CALL", null, ["callee:0052dd40:8"]]
+ 007cd6fc ["INT_ADD", "register:40f0:8", ["const:7cd6fc:8", "const:4:8"]]
+ 007cd6fc ["CALL", null, ["callee:0052dd40:8"]]
~~~


