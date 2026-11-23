# v16.0.1 → v16.0.2 · 最優先の変更候補 (20)

[一覧の目次](README.md)

<a id="compare-04582289effb272b74919b792d955c57"></a>

### [`00599ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00599/00599ffc.md) → [`0059a03c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a03c.md) FUN_0059a03c

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
      "definition_site": "0059a068",
      "incomplete_value": false,
      "site": "0059a068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:860:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a028",
      "incomplete_value": false,
      "site": "0059a028",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:790:8"
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
      "0059a068",
      "DATA",
      [
        "storage",
        "00c6d790",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a068",
      "DATA",
      [
        "storage",
        "00c6d860",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a010 ["INT_ADD", "register:40f0:8", ["const:59a010:8", "const:4:8"]]
- 0059a010 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059a050 ["INT_ADD", "register:40f0:8", ["const:59a050:8", "const:4:8"]]
+ 0059a050 ["CALL", null, ["callee:00c57f60:8"]]
- 0059a020 ["COPY", "tmp:0:8", ["const:790:8"]]
- 0059a020 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059a020 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059a020 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059a060 ["COPY", "tmp:0:8", ["const:860:8"]]
+ 0059a060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059a044 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a044 ["INT_ADD", "register:40f0:8", ["const:59a044:8", "const:4:8"]]
- 0059a044 ["CALLIND", null, ["register:0:8"]]
+ 0059a084 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a084 ["INT_ADD", "register:40f0:8", ["const:59a084:8", "const:4:8"]]
+ 0059a084 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-075a879b41104452b57bfb7b9dffcc6e"></a>

### [`0059a084`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059a084.md) → [`0059a0c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a0c4.md) FUN_0059a0c4

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
      "definition_site": "0059a0e0",
      "incomplete_value": false,
      "site": "0059a0e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:860:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a0a0",
      "incomplete_value": false,
      "site": "0059a0a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:790:8"
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
      "0059a0e0",
      "DATA",
      [
        "storage",
        "00c6d790",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a0e0",
      "DATA",
      [
        "storage",
        "00c6d860",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a09c ["COPY", "tmp:0:8", ["const:790:8"]]
- 0059a09c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a09c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a09c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a0dc ["COPY", "tmp:0:8", ["const:860:8"]]
+ 0059a0dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a0dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a0dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059a0c0 ["COPY", "register:0:8", ["register:4048:8"]]
- 0059a0c0 ["INT_ADD", "register:40f0:8", ["const:59a0c0:8", "const:4:8"]]
- 0059a0c0 ["CALLIND", null, ["register:0:8"]]
+ 0059a100 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0059a100 ["INT_ADD", "register:40f0:8", ["const:59a100:8", "const:4:8"]]
+ 0059a100 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8643759ad0576e891db82ee9eb237b6a"></a>

### [`0059a498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059a498.md) → [`0059a4d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a4d8.md) FUN_0059a4d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00598dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598dc0.md) [`005aca44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ac/005aca44.md) · 呼出先 3件 [`00bf03d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf03d4.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 2件 [`00598e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598e00.md) [`005aca84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca84.md) · 呼出先 3件 [`00bf0470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0470.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a4f8",
      "incomplete_value": true,
      "site": "0059a4fc",
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
      "definition_site": "0059a4b8",
      "incomplete_value": true,
      "site": "0059a4bc",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0059a500",
      "incomplete_value": true,
      "site": "0059a508",
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
                "const:3e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a4c0",
      "incomplete_value": true,
      "site": "0059a4c8",
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
                "const:310:8"
              ]
            ]
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
      "definition_site": "0059a504",
      "incomplete_value": true,
      "site": "0059a508",
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
                "const:3e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a4c4",
      "incomplete_value": true,
      "site": "0059a4c8",
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
                "const:318:8"
              ]
            ]
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
      "0059a4f4",
      "READ",
      [
        "storage",
        "00c9b308",
        null,
        "pointer"
      ]
    ],
    [
      "0059a4fc",
      "DATA",
      [
        "storage",
        "00c92a08",
        null,
        "pointer"
      ]
    ],
    [
      "0059a500",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059a4f4",
      "READ",
      [
        "storage",
        "00c9b3d8",
        null,
        "pointer"
      ]
    ],
    [
      "0059a4fc",
      "DATA",
      [
        "storage",
        "00c92ad8",
        null,
        "pointer"
      ]
    ],
    [
      "0059a500",
      "READ",
      [
        "storage",
        "00c9b3e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a4c8 ["INT_ADD", "register:40f0:8", ["const:59a4c8:8", "const:4:8"]]
- 0059a4c8 ["CALL", null, ["callee:00c57fe0:8"]]
+ 0059a508 ["INT_ADD", "register:40f0:8", ["const:59a508:8", "const:4:8"]]
+ 0059a508 ["CALL", null, ["callee:00c57fe0:8"]]
- 0059a4a4 ["INT_ADD", "register:40f0:8", ["const:59a4a4:8", "const:4:8"]]
- 0059a4a4 ["CALL", null, ["callee:00c57fc0:8"]]
+ 0059a4e4 ["INT_ADD", "register:40f0:8", ["const:59a4e4:8", "const:4:8"]]
+ 0059a4e4 ["CALL", null, ["callee:00c57fc0:8"]]
- 0059a4b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:308:8"]]
- 0059a4b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0059a4f4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3d8:8"]]
+ 0059a4f4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1bc43a1899f71cdcdf33a4ad441bd1ca"></a>

### [`0059a4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059a4cc.md) → [`0059a50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a50c.md) FUN_0059a50c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a524",
      "incomplete_value": false,
      "site": "0059a528",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a4e4",
      "incomplete_value": false,
      "site": "0059a4e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "0059a528",
      "DATA",
      [
        "storage",
        "00c6d880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a528",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a4e4 ["COPY", "tmp:0:8", ["const:880:8"]]
- 0059a4e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a4e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a4e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a524 ["COPY", "tmp:0:8", ["const:950:8"]]
+ 0059a524 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a524 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a524 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059a4f4 ["INT_ADD", "register:40f0:8", ["const:59a4f4:8", "const:4:8"]]
- 0059a4f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059a534 ["INT_ADD", "register:40f0:8", ["const:59a534:8", "const:4:8"]]
+ 0059a534 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-93bbf0fedf01854a569fc4efe9579478"></a>

### [`0059a518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059a518.md) → [`0059a558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a558.md) FUN_0059a558

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a570",
      "incomplete_value": false,
      "site": "0059a574",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a530",
      "incomplete_value": false,
      "site": "0059a534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "0059a574",
      "DATA",
      [
        "storage",
        "00c6d880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a574",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a530 ["COPY", "tmp:0:8", ["const:880:8"]]
- 0059a530 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a530 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a530 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a570 ["COPY", "tmp:0:8", ["const:950:8"]]
+ 0059a570 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a570 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a570 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059a540 ["INT_ADD", "register:40f0:8", ["const:59a540:8", "const:4:8"]]
- 0059a540 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059a580 ["INT_ADD", "register:40f0:8", ["const:59a580:8", "const:4:8"]]
+ 0059a580 ["CALL", null, ["callee:00c57f80:8"]]
- 0059a54c ["INT_ADD", "register:40f0:8", ["const:59a54c:8", "const:4:8"]]
- 0059a54c ["CALL", null, ["callee:00c57f50:8"]]
+ 0059a58c ["INT_ADD", "register:40f0:8", ["const:59a58c:8", "const:4:8"]]
+ 0059a58c ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-bbb9de16a721a4f5efc5d189af72245e"></a>

### [`0059a560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059a560.md) → [`0059a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a5a0.md) FUN_0059a5a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a5c8",
      "incomplete_value": false,
      "site": "0059a5c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a588",
      "incomplete_value": false,
      "site": "0059a588",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "0059a5c8",
      "DATA",
      [
        "storage",
        "00c6d880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a5c8",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a5c8 ["INT_ADD", "register:40f0:8", ["const:59a5c8:8", "const:4:8"]]
- 0059a5c8 ["CALL", null, ["callee:0043bb60:8"]]
+ 0059a608 ["INT_ADD", "register:40f0:8", ["const:59a608:8", "const:4:8"]]
+ 0059a608 ["CALL", null, ["callee:0043bb60:8"]]
- 0059a574 ["INT_ADD", "register:40f0:8", ["const:59a574:8", "const:4:8"]]
- 0059a574 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059a5b4 ["INT_ADD", "register:40f0:8", ["const:59a5b4:8", "const:4:8"]]
+ 0059a5b4 ["CALL", null, ["callee:00c57f60:8"]]
- 0059a584 ["COPY", "tmp:0:8", ["const:880:8"]]
- 0059a584 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a584 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a584 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a5c4 ["COPY", "tmp:0:8", ["const:950:8"]]
+ 0059a5c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a5c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a5c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0f640d16e3786cd2a849c309efe6ead1"></a>

### [`0059a600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059a600.md) → [`0059a640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a640.md) FUN_0059a640

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a660",
      "incomplete_value": false,
      "site": "0059a660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a620",
      "incomplete_value": false,
      "site": "0059a620",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "0059a660",
      "DATA",
      [
        "storage",
        "00c6d880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a660",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a660 ["INT_ADD", "register:40f0:8", ["const:59a660:8", "const:4:8"]]
- 0059a660 ["CALL", null, ["callee:0043bb60:8"]]
+ 0059a6a0 ["INT_ADD", "register:40f0:8", ["const:59a6a0:8", "const:4:8"]]
+ 0059a6a0 ["CALL", null, ["callee:0043bb60:8"]]
- 0059a61c ["COPY", "tmp:0:8", ["const:880:8"]]
- 0059a61c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a61c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a61c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a65c ["COPY", "tmp:0:8", ["const:950:8"]]
+ 0059a65c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a65c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a65c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059a634 ["INT_ADD", "register:40f0:8", ["const:59a634:8", "const:4:8"]]
- 0059a634 ["CALL", null, ["callee:00c53d70:8"]]
+ 0059a674 ["INT_ADD", "register:40f0:8", ["const:59a674:8", "const:4:8"]]
+ 0059a674 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-1380e4b3eb8a56a3a0bb630ed14f0aea"></a>

### [`0059ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059ab38.md) → [`0059ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ab78.md) FUN_0059ab78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ab90",
      "incomplete_value": false,
      "site": "0059ab94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ab50",
      "incomplete_value": false,
      "site": "0059ab54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:900:8"
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
      "0059ab94",
      "DATA",
      [
        "storage",
        "00c6d900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ab94",
      "DATA",
      [
        "storage",
        "00c6d9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ab94 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059ab94 ["INT_ADD", "register:40f0:8", ["const:59ab94:8", "const:4:8"]]
- 0059ab94 ["CALLIND", null, ["register:0:8"]]
+ 0059abd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059abd4 ["INT_ADD", "register:40f0:8", ["const:59abd4:8", "const:4:8"]]
+ 0059abd4 ["CALLIND", null, ["register:0:8"]]
- 0059ab50 ["COPY", "tmp:0:8", ["const:900:8"]]
- 0059ab50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059ab50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059ab50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059ab90 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 0059ab90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ab90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ab90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059ab60 ["INT_ADD", "register:40f0:8", ["const:59ab60:8", "const:4:8"]]
- 0059ab60 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059aba0 ["INT_ADD", "register:40f0:8", ["const:59aba0:8", "const:4:8"]]
+ 0059aba0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-13d5b678ea8e8e60608ae762168259c5"></a>

### [`0059aba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059aba8.md) → [`0059abe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059abe8.md) FUN_0059abe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ac00",
      "incomplete_value": false,
      "site": "0059ac04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059abc0",
      "incomplete_value": false,
      "site": "0059abc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:900:8"
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
      "0059ac04",
      "DATA",
      [
        "storage",
        "00c6d900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ac04",
      "DATA",
      [
        "storage",
        "00c6d9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059abc0 ["COPY", "tmp:0:8", ["const:900:8"]]
- 0059abc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059abc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059abc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059ac00 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 0059ac00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ac00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ac00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059abd0 ["INT_ADD", "register:40f0:8", ["const:59abd0:8", "const:4:8"]]
- 0059abd0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ac10 ["INT_ADD", "register:40f0:8", ["const:59ac10:8", "const:4:8"]]
+ 0059ac10 ["CALL", null, ["callee:00c57f80:8"]]
- 0059abe4 ["INT_ADD", "register:40f0:8", ["const:59abe4:8", "const:4:8"]]
- 0059abe4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0059ac24 ["INT_ADD", "register:40f0:8", ["const:59ac24:8", "const:4:8"]]
+ 0059ac24 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-2de6eea361f4252ccdb748f2ca07fa63"></a>

### [`0059ac14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059ac14.md) → [`0059ac54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ac54.md) FUN_0059ac54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ac74",
      "incomplete_value": false,
      "site": "0059ac7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ac34",
      "incomplete_value": false,
      "site": "0059ac3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:900:8"
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
      "0059ac7c",
      "DATA",
      [
        "storage",
        "00c6d900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ac7c",
      "DATA",
      [
        "storage",
        "00c6d9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ac2c ["INT_ADD", "register:40f0:8", ["const:59ac2c:8", "const:4:8"]]
- 0059ac2c ["CALL", null, ["callee:00c57f60:8"]]
+ 0059ac6c ["INT_ADD", "register:40f0:8", ["const:59ac6c:8", "const:4:8"]]
+ 0059ac6c ["CALL", null, ["callee:00c57f60:8"]]
- 0059ac34 ["COPY", "tmp:0:8", ["const:900:8"]]
- 0059ac34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ac34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ac34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ac74 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 0059ac74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ac74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ac74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059ac38 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-c05b19502b3615de9b196e72ebea5932"></a>

### [`0059acbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059acbc.md) → [`0059acfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059acfc.md) FUN_0059acfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ad10",
      "incomplete_value": false,
      "site": "0059ad18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059acd0",
      "incomplete_value": false,
      "site": "0059acd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:900:8"
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
      "0059ad18",
      "DATA",
      [
        "storage",
        "00c6d900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ad18",
      "DATA",
      [
        "storage",
        "00c6d9d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059acd0 ["COPY", "tmp:0:8", ["const:900:8"]]
- 0059acd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059acd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059acd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ad10 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 0059ad10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ad10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ad10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059ad00 ["INT_ADD", "register:40f0:8", ["const:59ad00:8", "const:4:8"]]
- 0059ad00 ["CALL", null, ["callee:00c53d70:8"]]
+ 0059ad40 ["INT_ADD", "register:40f0:8", ["const:59ad40:8", "const:4:8"]]
+ 0059ad40 ["CALL", null, ["callee:00c53d70:8"]]
- 0059ad2c ["INT_ADD", "register:40f0:8", ["const:59ad2c:8", "const:4:8"]]
- 0059ad2c ["CALL", null, ["callee:0043bb60:8"]]
+ 0059ad6c ["INT_ADD", "register:40f0:8", ["const:59ad6c:8", "const:4:8"]]
+ 0059ad6c ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-ada411e07dac82ec9eeb6c75c092419c"></a>

### [`0059b204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b204.md) → [`0059b244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b244.md) FUN_0059b244

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
      "definition_site": "0059b258",
      "incomplete_value": false,
      "site": "0059b25c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059b218",
      "incomplete_value": false,
      "site": "0059b21c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:980:8"
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
      "0059b25c",
      "DATA",
      [
        "storage",
        "00c6d980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059b25c",
      "DATA",
      [
        "storage",
        "00c6da50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059b218 ["COPY", "tmp:0:8", ["const:980:8"]]
- 0059b218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059b218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059b218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059b258 ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 0059b258 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b258 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b258 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059b22c ["INT_ADD", "register:40f0:8", ["const:59b22c:8", "const:4:8"]]
- 0059b22c ["CALL", null, ["callee:00c53da0:8"]]
+ 0059b26c ["INT_ADD", "register:40f0:8", ["const:59b26c:8", "const:4:8"]]
+ 0059b26c ["CALL", null, ["callee:00c53da0:8"]]
- 0059b24c ["COPY", "register:0:8", ["register:4040:8"]]
- 0059b24c ["INT_ADD", "register:40f0:8", ["const:59b24c:8", "const:4:8"]]
- 0059b24c ["CALLIND", null, ["register:0:8"]]
+ 0059b28c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059b28c ["INT_ADD", "register:40f0:8", ["const:59b28c:8", "const:4:8"]]
+ 0059b28c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5a3f02d8c971c9804fa803297076c199"></a>

### [`0059b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b260.md) → [`0059b2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b2a0.md) FUN_0059b2a0

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
      "definition_site": "0059b2b8",
      "incomplete_value": false,
      "site": "0059b2bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059b278",
      "incomplete_value": false,
      "site": "0059b27c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:980:8"
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
      "0059b2bc",
      "DATA",
      [
        "storage",
        "00c6d980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059b2bc",
      "DATA",
      [
        "storage",
        "00c6da50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059b278 ["COPY", "tmp:0:8", ["const:980:8"]]
- 0059b278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059b278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059b278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059b2b8 ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 0059b2b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b2b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b2b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059b28c ["INT_ADD", "register:40f0:8", ["const:59b28c:8", "const:4:8"]]
- 0059b28c ["CALL", null, ["callee:00c53da0:8"]]
+ 0059b2cc ["INT_ADD", "register:40f0:8", ["const:59b2cc:8", "const:4:8"]]
+ 0059b2cc ["CALL", null, ["callee:00c53da0:8"]]
- 0059b2a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059b2a0 ["INT_ADD", "register:40f0:8", ["const:59b2a0:8", "const:4:8"]]
- 0059b2a0 ["CALLIND", null, ["register:0:8"]]
+ 0059b2e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059b2e0 ["INT_ADD", "register:40f0:8", ["const:59b2e0:8", "const:4:8"]]
+ 0059b2e0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d80c138c58322ed71fade21b0b7f475b"></a>

### [`0059b2bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b2bc.md) → [`0059b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b2fc.md) FUN_0059b2fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059b320",
      "incomplete_value": false,
      "site": "0059b320",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059b2e0",
      "incomplete_value": false,
      "site": "0059b2e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:980:8"
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
      "0059b320",
      "DATA",
      [
        "storage",
        "00c6d980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059b320",
      "DATA",
      [
        "storage",
        "00c6da50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059b2d0 ["INT_ADD", "register:40f0:8", ["const:59b2d0:8", "const:4:8"]]
- 0059b2d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059b310 ["INT_ADD", "register:40f0:8", ["const:59b310:8", "const:4:8"]]
+ 0059b310 ["CALL", null, ["callee:00c57f60:8"]]
- 0059b2dc ["COPY", "tmp:0:8", ["const:980:8"]]
- 0059b2dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059b2dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059b2dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059b31c ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 0059b31c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059b31c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059b31c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059b2f8 ["INT_ADD", "register:40f0:8", ["const:59b2f8:8", "const:4:8"]]
- 0059b2f8 ["CALL", null, ["callee:00c53d70:8"]]
+ 0059b338 ["INT_ADD", "register:40f0:8", ["const:59b338:8", "const:4:8"]]
+ 0059b338 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-c8c87b438aa1004b43c83d0adca1eb17"></a>

### [`0059b30c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b30c.md) → [`0059b34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b34c.md) FUN_0059b34c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059b358",
      "incomplete_value": false,
      "site": "0059b358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059b318",
      "incomplete_value": false,
      "site": "0059b318",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:980:8"
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
      "0059b358",
      "DATA",
      [
        "storage",
        "00c6d980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059b358",
      "DATA",
      [
        "storage",
        "00c6da50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059b314 ["COPY", "tmp:0:8", ["const:980:8"]]
- 0059b314 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059b314 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059b314 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059b354 ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 0059b354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059b354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059b354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059b334 ["INT_ADD", "register:40f0:8", ["const:59b334:8", "const:4:8"]]
- 0059b334 ["CALL", null, ["callee:00c53d70:8"]]
+ 0059b374 ["INT_ADD", "register:40f0:8", ["const:59b374:8", "const:4:8"]]
+ 0059b374 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-68095dd7c142ffa419c23319a82dfea9"></a>

### [`0059b3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b3e0.md) → [`0059b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b420.md) FUN_0059b420

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0059b98c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b98c.md) [`00768e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768e90.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0059b9cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b9cc.md) [`00768ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ee8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

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
      "site": "0059b45c",
      "value": [
        "leaf",
        "ram:768ee8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0059b41c",
      "value": [
        "leaf",
        "ram:768e90:8"
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
      "0059b45c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768e90"
      ]
    ]
  ],
  "added": [
    [
      "0059b45c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768ee8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059b41c ["INT_ADD", "register:40f0:8", ["const:59b41c:8", "const:4:8"]]
- 0059b41c ["CALL", null, ["ram:768e90:8"]]
+ 0059b45c ["INT_ADD", "register:40f0:8", ["const:59b45c:8", "const:4:8"]]
+ 0059b45c ["CALL", null, ["ram:768ee8:8"]]
- 0059b414 ["INT_ADD", "register:40f0:8", ["const:59b414:8", "const:4:8"]]
- 0059b414 ["CALL", null, ["callee:00851550:8"]]
+ 0059b454 ["INT_ADD", "register:40f0:8", ["const:59b454:8", "const:4:8"]]
+ 0059b454 ["CALL", null, ["callee:00851550:8"]]
- 0059b428 ["INT_ADD", "register:40f0:8", ["const:59b428:8", "const:4:8"]]
- 0059b428 ["CALL", null, ["callee:0059b9cc:8"]]
+ 0059b468 ["INT_ADD", "register:40f0:8", ["const:59b468:8", "const:4:8"]]
+ 0059b468 ["CALL", null, ["callee:0059b9cc:8"]]
~~~


<a id="compare-11605e25f7bec103c5531202102b46ef"></a>

### [`0059b4d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b4d8.md) → [`0059b518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b518.md) _INIT_36

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 77.18% / 新版 77.18%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 7件, `store_value` 6件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059b554",
      "incomplete_value": true,
      "site": "0059b570",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059b514",
      "incomplete_value": true,
      "site": "0059b530",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059b578",
      "incomplete_value": true,
      "site": "0059b594",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059b538",
      "incomplete_value": true,
      "site": "0059b554",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059b598",
      "incomplete_value": true,
      "site": "0059b5b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059b558",
      "incomplete_value": true,
      "site": "0059b574",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0059b554",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0059b578",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0059b598",
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
      "0059b554",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0059b578",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0059b598",
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
- 0059b550 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0059b550 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059b550 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059b550 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059b590 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0059b590 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059b590 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059b590 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059b570 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0059b570 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059b570 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059b570 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059b5b0 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0059b5b0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059b5b0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059b5b0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059b6f4 ["COPY", "register:4098:8", ["const:c62000:8"]]
+ 0059b734 ["COPY", "register:4098:8", ["const:c63000:8"]]
~~~


<a id="compare-1a653729666126d99bfcef911bc60925"></a>

### [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) → [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) FUN_0059b91c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 18件 [`0059c548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c548.md) [`0059d164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d164.md) [`0059e150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e150.md) [`0059e71c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e71c.md) [`0059f310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f310.md) · 呼出先 0件 
- 新版 呼出元 18件 [`0059c588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c588.md) [`0059d1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d1a4.md) [`0059e190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e190.md) [`0059e75c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e75c.md) [`0059f350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f350.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059b920",
      "incomplete_value": false,
      "site": "0059b928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059b8e0",
      "incomplete_value": false,
      "site": "0059b8e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059b928",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059b928",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059b8e0 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059b8e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059b8e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059b8e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059b920 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059b920 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b920 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b920 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1e5b4f56f819bbbdad23e60b9119d99c"></a>

### [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md) → [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md) FUN_0059b948

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 18件 [`0059c89c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c89c.md) [`0059d354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d354.md) [`0059eb60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059eb60.md) [`0059f500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f500.md) [`005a0668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a0/005a0668.md) · 呼出先 1件 [`0059b98c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b98c.md)
- 新版 呼出元 18件 [`0059c8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c8dc.md) [`0059d394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d394.md) [`0059eba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059eba0.md) [`0059f540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f540.md) [`005a06a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a06a8.md) · 呼出先 1件 [`0059b9cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b9cc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059b964",
      "incomplete_value": false,
      "site": "0059b96c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059b924",
      "incomplete_value": false,
      "site": "0059b92c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "0059b96c",
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
      "0059b96c",
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
- 0059b924 ["COPY", "tmp:0:8", ["const:a20:8"]]
- 0059b924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059b924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059b924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059b964 ["COPY", "tmp:0:8", ["const:af0:8"]]
+ 0059b964 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b964 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059b964 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059b928 ["COPY", "register:40a8:8", ["register:4000:8"]]
- 0059b93c ["INT_ADD", "register:40f0:8", ["const:59b93c:8", "const:4:8"]]
- 0059b93c ["CALL", null, ["callee:0059b9cc:8"]]
+ 0059b97c ["INT_ADD", "register:40f0:8", ["const:59b97c:8", "const:4:8"]]
+ 0059b97c ["CALL", null, ["callee:0059b9cc:8"]]
~~~


<a id="compare-8d3551b32715645b7a825b180e3a6fc1"></a>

### [`0059bae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059bae4.md) → [`0059bb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bb24.md) FUN_0059bb24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004593f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004593f0.md) [`00459ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459ad0.md) [`0059bda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059bda0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459430.md) [`00459b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459b10.md) [`0059bde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bde0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.37% / 新版 88.37%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059bb5c",
      "incomplete_value": false,
      "site": "0059bb64",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059bb1c",
      "incomplete_value": false,
      "site": "0059bb24",
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
            "const:a90:8"
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
      "definition_site": "0059bb7c",
      "incomplete_value": false,
      "site": "0059bb7c",
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
      "definition_site": "0059bb3c",
      "incomplete_value": false,
      "site": "0059bb3c",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059bc4c",
      "incomplete_value": true,
      "site": "0059bc4c",
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
                "const:f07:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059bc0c",
      "incomplete_value": true,
      "site": "0059bc0c",
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
                "const:f54:8"
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
      "0059bb64",
      "DATA",
      [
        "storage",
        "00c63a90",
        null,
        "pointer"
      ]
    ],
    [
      "0059bb7c",
      "DATA",
      [
        "storage",
        "00c63ae0",
        null,
        "pointer"
      ]
    ],
    [
      "0059bba8",
      "READ",
      [
        "storage",
        "002b390e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0059bb64",
      "DATA",
      [
        "storage",
        "00c63b60",
        null,
        "pointer"
      ]
    ],
    [
      "0059bb7c",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "0059bba8",
      "READ",
      [
        "storage",
        "002b393f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059bc24 ["INT_ADD", "register:40f0:8", ["const:59bc24:8", "const:4:8"]]
- 0059bc24 ["CALL", null, ["callee:00c58180:8"]]
+ 0059bc64 ["INT_ADD", "register:40f0:8", ["const:59bc64:8", "const:4:8"]]
+ 0059bc64 ["CALL", null, ["callee:00c58180:8"]]
- 0059bb14 ["INT_ADD", "register:40f0:8", ["const:59bb14:8", "const:4:8"]]
- 0059bb14 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059bb54 ["INT_ADD", "register:40f0:8", ["const:59bb54:8", "const:4:8"]]
+ 0059bb54 ["CALL", null, ["callee:00c57f60:8"]]
- 0059bb1c ["COPY", "tmp:0:8", ["const:a90:8"]]
- 0059bb1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059bb1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059bb1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059bb5c ["COPY", "tmp:0:8", ["const:b60:8"]]
+ 0059bb5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059bb5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059bb5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-472fb49b6c8bfe4f0a5a13d1dc737f89"></a>

### [`0059bda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059bda0.md) → [`0059bde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bde0.md) FUN_0059bde0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0059bae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059bae4.md) · 呼出先 7件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0059bb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bb24.md) · 呼出先 7件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059bea4",
      "incomplete_value": false,
      "site": "0059bea8",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059be64",
      "incomplete_value": false,
      "site": "0059be68",
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
            "const:760:8"
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
      "0059bea8",
      "DATA",
      [
        "storage",
        "00c63760",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059bea8",
      "DATA",
      [
        "storage",
        "00c63830",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059bdd4 ["INT_ADD", "register:40f0:8", ["const:59bdd4:8", "const:4:8"]]
- 0059bdd4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059be14 ["INT_ADD", "register:40f0:8", ["const:59be14:8", "const:4:8"]]
+ 0059be14 ["CALL", null, ["callee:00c57f60:8"]]
- 0059bde0 ["INT_ADD", "register:40f0:8", ["const:59bde0:8", "const:4:8"]]
- 0059bde0 ["CALL", null, ["callee:00c580b0:8"]]
+ 0059be20 ["INT_ADD", "register:40f0:8", ["const:59be20:8", "const:4:8"]]
+ 0059be20 ["CALL", null, ["callee:00c580b0:8"]]
- 0059be2c ["INT_ADD", "register:40f0:8", ["const:59be2c:8", "const:4:8"]]
- 0059be2c ["CALL", null, ["callee:00c57f60:8"]]
+ 0059be6c ["INT_ADD", "register:40f0:8", ["const:59be6c:8", "const:4:8"]]
+ 0059be6c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-dfee92df819bb5d923955fb1c08ef281"></a>

### [`0059c044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c044.md) → [`0059c084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c084.md) FUN_0059c084

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c09c",
      "incomplete_value": false,
      "site": "0059c0a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:af0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059c05c",
      "incomplete_value": false,
      "site": "0059c060",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a20:8"
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
      "0059c0a0",
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
      "0059c0a0",
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
- 0059c05c ["COPY", "tmp:0:8", ["const:a20:8"]]
- 0059c05c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059c05c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059c05c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059c09c ["COPY", "tmp:0:8", ["const:af0:8"]]
+ 0059c09c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059c09c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059c09c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059c06c ["INT_ADD", "register:40f0:8", ["const:59c06c:8", "const:4:8"]]
- 0059c06c ["CALL", null, ["callee:00c57f80:8"]]
+ 0059c0ac ["INT_ADD", "register:40f0:8", ["const:59c0ac:8", "const:4:8"]]
+ 0059c0ac ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-053be2b7a0d42b44328870fa2fcdf987"></a>

### [`0059c098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c098.md) → [`0059c0d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c0d8.md) FUN_0059c0d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c0e0",
      "incomplete_value": false,
      "site": "0059c0e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059c0a0",
      "incomplete_value": false,
      "site": "0059c0a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059c0e4",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059c0e4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059c0a0 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059c0a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059c0a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059c0a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059c0e0 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059c0e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059c0e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059c0e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a6679ba1a6b898989ef5a9bedd1c267c"></a>

### [`0059c0b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c0b8.md) → [`0059c0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c0f8.md) FUN_0059c0f8

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
      "definition_site": "0059c100",
      "incomplete_value": false,
      "site": "0059c104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059c0c0",
      "incomplete_value": false,
      "site": "0059c0c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059c104",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059c104",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059c0c0 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059c0c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059c0c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059c0c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059c100 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059c100 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059c100 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059c100 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059c0e4 ["INT_ADD", "register:40f0:8", ["const:59c0e4:8", "const:4:8"]]
- 0059c0e4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059c124 ["INT_ADD", "register:40f0:8", ["const:59c124:8", "const:4:8"]]
+ 0059c124 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-350870082a4c85425def6630284fe7d2"></a>

### [`0059c0f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c0f8.md) → [`0059c138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c138.md) _INIT_37

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 80.44% / 新版 80.44%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 9件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c178",
      "incomplete_value": true,
      "site": "0059c194",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059c138",
      "incomplete_value": true,
      "site": "0059c154",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c19c",
      "incomplete_value": true,
      "site": "0059c1b8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059c15c",
      "incomplete_value": true,
      "site": "0059c178",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c1bc",
      "incomplete_value": true,
      "site": "0059c1d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059c17c",
      "incomplete_value": true,
      "site": "0059c198",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0059c178",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0059c19c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0059c1bc",
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
      "0059c178",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0059c19c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0059c1bc",
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
- 0059c174 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0059c174 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059c174 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059c174 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059c1b4 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0059c1b4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059c1b4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059c1b4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059c194 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0059c194 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059c194 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059c194 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059c1d4 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0059c1d4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059c1d4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059c1d4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059c25c ["INT_ADD", "register:40f0:8", ["const:59c25c:8", "const:4:8"]]
- 0059c25c ["CALL", null, ["callee:0043b838:8"]]
+ 0059c29c ["INT_ADD", "register:40f0:8", ["const:59c29c:8", "const:4:8"]]
+ 0059c29c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-5fb35d3f12211a647338634e1d90e705"></a>

### [`0059c548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c548.md) → [`0059c588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c588.md) FUN_0059c588

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.98% / 新版 95.98%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c7b8",
      "incomplete_value": false,
      "site": "0059c7c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059c778",
      "incomplete_value": false,
      "site": "0059c784",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:b80:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c7dc",
      "incomplete_value": false,
      "site": "0059c7e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059c79c",
      "incomplete_value": false,
      "site": "0059c7a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "0059c5bc",
      "READ",
      [
        "storage",
        "002b71a5",
        null,
        "string"
      ]
    ],
    [
      "0059c6e8",
      "READ",
      [
        "storage",
        "002a5702",
        null,
        "string"
      ]
    ],
    [
      "0059c7c4",
      "DATA",
      [
        "storage",
        "00c6db80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059c5bc",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "0059c6e8",
      "READ",
      [
        "storage",
        "002a56a6",
        null,
        "string"
      ]
    ],
    [
      "0059c7c4",
      "DATA",
      [
        "storage",
        "00c6dc50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059c764 ["INT_ADD", "register:40f0:8", ["const:59c764:8", "const:4:8"]]
- 0059c764 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059c7a4 ["INT_ADD", "register:40f0:8", ["const:59c7a4:8", "const:4:8"]]
+ 0059c7a4 ["CALL", null, ["callee:00c57f80:8"]]
- 0059c570 ["COPY", "tmp:0:8", ["const:1a5:8"]]
- 0059c570 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059c570 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059c570 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059c5b0 ["COPY", "tmp:0:8", ["const:1e5:8"]]
+ 0059c5b0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059c5b0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059c5b0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059c5a8 ["INT_ADD", "register:40f0:8", ["const:59c5a8:8", "const:4:8"]]
- 0059c5a8 ["CALL", null, ["callee:004410cc:8"]]
+ 0059c5e8 ["INT_ADD", "register:40f0:8", ["const:59c5e8:8", "const:4:8"]]
+ 0059c5e8 ["CALL", null, ["callee:004410cc:8"]]
~~~


<a id="compare-5123e60aa8ae4c43bcd1fd131ec09986"></a>

### [`0059c89c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c89c.md) → [`0059c8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c8dc.md) FUN_0059c8dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005b4e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b4/005b4e54.md) · 呼出先 1件 [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md)
- 新版 呼出元 1件 [`005b4e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4e94.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059c904",
      "incomplete_value": false,
      "site": "0059c908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059c8c4",
      "incomplete_value": false,
      "site": "0059c8c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
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
      "0059c908",
      "DATA",
      [
        "storage",
        "00c6dab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059c908",
      "DATA",
      [
        "storage",
        "00c6db88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059c8bc ["INT_ADD", "register:40f0:8", ["const:59c8bc:8", "const:4:8"]]
- 0059c8bc ["CALL", null, ["callee:0059b948:8"]]
+ 0059c8fc ["INT_ADD", "register:40f0:8", ["const:59c8fc:8", "const:4:8"]]
+ 0059c8fc ["CALL", null, ["callee:0059b948:8"]]
- 0059c8c4 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 0059c8c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059c8c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059c8c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059c904 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 0059c904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059c904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059c904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c1327394f366e2e42436618c1389a603"></a>

### [`0059c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059c938.md) → [`0059c978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059c978.md) FUN_0059c978

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0045179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/0045179c.md) [`0045982c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/0045982c.md) [`00597110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597110.md) [`0059bf44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059bf44.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0045986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/0045986c.md) [`00597150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597150.md) [`0059bf84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bf84.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ca34",
      "incomplete_value": true,
      "site": "0059ca3c",
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
      "definition_site": "0059c9f4",
      "incomplete_value": true,
      "site": "0059c9fc",
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
      "0059ca28",
      "READ",
      [
        "storage",
        "00c9ac20",
        null,
        "pointer"
      ]
    ],
    [
      "0059ca3c",
      "DATA",
      [
        "storage",
        "00c6d608",
        null,
        "pointer"
      ]
    ],
    [
      "0059ca64",
      "READ",
      [
        "storage",
        "00c6d610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ca28",
      "READ",
      [
        "storage",
        "00c9acf0",
        null,
        "pointer"
      ]
    ],
    [
      "0059ca3c",
      "DATA",
      [
        "storage",
        "00c6d6d8",
        null,
        "pointer"
      ]
    ],
    [
      "0059ca64",
      "READ",
      [
        "storage",
        "00c6d6e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059c968 ["INT_ADD", "register:40f0:8", ["const:59c968:8", "const:4:8"]]
- 0059c968 ["CALL", null, ["callee:0059bf84:8"]]
+ 0059c9a8 ["INT_ADD", "register:40f0:8", ["const:59c9a8:8", "const:4:8"]]
+ 0059c9a8 ["CALL", null, ["callee:0059bf84:8"]]
- 0059c99c ["INT_ADD", "register:40f0:8", ["const:59c99c:8", "const:4:8"]]
- 0059c99c ["CALL", null, ["callee:004517dc:8"]]
+ 0059c9dc ["INT_ADD", "register:40f0:8", ["const:59c9dc:8", "const:4:8"]]
+ 0059c9dc ["CALL", null, ["callee:004517dc:8"]]
- 0059c9ac ["INT_ADD", "register:40f0:8", ["const:59c9ac:8", "const:4:8"]]
- 0059c9ac ["CALL", null, ["callee:00c57f80:8"]]
+ 0059c9ec ["INT_ADD", "register:40f0:8", ["const:59c9ec:8", "const:4:8"]]
+ 0059c9ec ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ce7bb7813bc2aacd1ad46e26dbcdc7b5"></a>

### [`0059cb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cb30.md) → [`0059cb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cb70.md) FUN_0059cb70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059cb8c",
      "incomplete_value": false,
      "site": "0059cb94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059cb4c",
      "incomplete_value": false,
      "site": "0059cb54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:bd0:8"
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
      "definition_site": "0059cba4",
      "incomplete_value": false,
      "site": "0059cba4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:be0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059cb64",
      "incomplete_value": false,
      "site": "0059cb64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "0059cb94",
      "DATA",
      [
        "storage",
        "00c6dbd0",
        null,
        "undefined *"
      ]
    ],
    [
      "0059cba4",
      "DATA",
      [
        "storage",
        "00c6db10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059cb94",
      "DATA",
      [
        "storage",
        "00c6dca0",
        null,
        "undefined *"
      ]
    ],
    [
      "0059cba4",
      "DATA",
      [
        "storage",
        "00c6dbe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059cb44 ["INT_ADD", "register:40f0:8", ["const:59cb44:8", "const:4:8"]]
- 0059cb44 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059cb84 ["INT_ADD", "register:40f0:8", ["const:59cb84:8", "const:4:8"]]
+ 0059cb84 ["CALL", null, ["callee:00c57f60:8"]]
- 0059cb4c ["COPY", "tmp:0:8", ["const:bd0:8"]]
- 0059cb4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059cb4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059cb4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059cb8c ["COPY", "tmp:0:8", ["const:ca0:8"]]
+ 0059cb8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cb8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cb8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059cb58 ["COPY", "register:4040:8", ["const:c6d000:8"]]
~~~


<a id="compare-95117dfd9fa1b9a934b634cc834067af"></a>

### [`0059cb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cb78.md) → [`0059cbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cbb8.md) FUN_0059cbb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

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
      "definition_site": "0059cbf4",
      "incomplete_value": false,
      "site": "0059cbf8",
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
      "definition_site": "0059cbb4",
      "incomplete_value": false,
      "site": "0059cbb8",
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
      "0059cbf8",
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
      "0059cbf8",
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
- 0059cb94 ["INT_ADD", "register:40f0:8", ["const:59cb94:8", "const:4:8"]]
- 0059cb94 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059cbd4 ["INT_ADD", "register:40f0:8", ["const:59cbd4:8", "const:4:8"]]
+ 0059cbd4 ["CALL", null, ["callee:00c57f80:8"]]
- 0059cba4 ["INT_ADD", "register:40f0:8", ["const:59cba4:8", "const:4:8"]]
- 0059cba4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059cbe4 ["INT_ADD", "register:40f0:8", ["const:59cbe4:8", "const:4:8"]]
+ 0059cbe4 ["CALL", null, ["callee:00c57f80:8"]]
- 0059cbac ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059cbac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059cbac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059cbac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059cbec ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059cbec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cbec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cbec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b3a7a47d47f654e7a867e1de64b9142d"></a>

### [`0059cbec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cbec.md) → [`0059cc2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cc2c.md) FUN_0059cc2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059cc68",
      "incomplete_value": false,
      "site": "0059cc6c",
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
      "definition_site": "0059cc28",
      "incomplete_value": false,
      "site": "0059cc2c",
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
      "0059cc6c",
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
      "0059cc6c",
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
- 0059cc08 ["INT_ADD", "register:40f0:8", ["const:59cc08:8", "const:4:8"]]
- 0059cc08 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059cc48 ["INT_ADD", "register:40f0:8", ["const:59cc48:8", "const:4:8"]]
+ 0059cc48 ["CALL", null, ["callee:00c57f80:8"]]
- 0059cc18 ["INT_ADD", "register:40f0:8", ["const:59cc18:8", "const:4:8"]]
- 0059cc18 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059cc58 ["INT_ADD", "register:40f0:8", ["const:59cc58:8", "const:4:8"]]
+ 0059cc58 ["CALL", null, ["callee:00c57f80:8"]]
- 0059cc20 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059cc20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059cc20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059cc20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059cc60 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059cc60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cc60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cc60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a83a97faeb0824df46896b16d23f2196"></a>

### [`0059cc5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cc5c.md) → [`0059cc9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cc9c.md) FUN_0059cc9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ccc4",
      "incomplete_value": false,
      "site": "0059ccc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059cc84",
      "incomplete_value": false,
      "site": "0059cc88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059ccc8",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059ccc8",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059cc78 ["INT_ADD", "register:40f0:8", ["const:59cc78:8", "const:4:8"]]
- 0059cc78 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ccb8 ["INT_ADD", "register:40f0:8", ["const:59ccb8:8", "const:4:8"]]
+ 0059ccb8 ["CALL", null, ["callee:00c57f80:8"]]
- 0059cc84 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059cc84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059cc84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059cc84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059ccc4 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059ccc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ccc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ccc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f830569854a4ee3dcee7b645d57a6f96"></a>

### [`0059ccac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059ccac.md) → [`0059ccec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059ccec.md) FUN_0059ccec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059cd14",
      "incomplete_value": false,
      "site": "0059cd18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ccd4",
      "incomplete_value": false,
      "site": "0059ccd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059cd18",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059cd18",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ccc8 ["INT_ADD", "register:40f0:8", ["const:59ccc8:8", "const:4:8"]]
- 0059ccc8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059cd08 ["INT_ADD", "register:40f0:8", ["const:59cd08:8", "const:4:8"]]
+ 0059cd08 ["CALL", null, ["callee:00c57f80:8"]]
- 0059ccd4 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059ccd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059ccd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059ccd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059cd14 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059cd14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059cd14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059cd14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059cce4 ["INT_ADD", "register:40f0:8", ["const:59cce4:8", "const:4:8"]]
- 0059cce4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059cd24 ["INT_ADD", "register:40f0:8", ["const:59cd24:8", "const:4:8"]]
+ 0059cd24 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-79b5d0842685f49c2fc5e91ca088e285"></a>

### [`0059ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059ccf8.md) → [`0059cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cd38.md) FUN_0059cd38

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
      "definition_site": "0059cd3c",
      "incomplete_value": false,
      "site": "0059cd40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ccfc",
      "incomplete_value": false,
      "site": "0059cd00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
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
      "0059cd40",
      "DATA",
      [
        "storage",
        "00c6db80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059cd40",
      "DATA",
      [
        "storage",
        "00c6dc50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ccfc ["COPY", "tmp:0:8", ["const:b80:8"]]
- 0059ccfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ccfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ccfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059cd3c ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 0059cd3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cd3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cd3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-984348751e098a41cdf5a8d522475c58"></a>

### [`0059cd08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cd08.md) → [`0059cd48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cd48.md) FUN_0059cd48

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
      "definition_site": "0059cd58",
      "incomplete_value": false,
      "site": "0059cd60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059cd18",
      "incomplete_value": false,
      "site": "0059cd20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
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
      "0059cd60",
      "DATA",
      [
        "storage",
        "00c6db80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059cd60",
      "DATA",
      [
        "storage",
        "00c6dc50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059cd18 ["COPY", "tmp:0:8", ["const:b80:8"]]
- 0059cd18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059cd18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059cd18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059cd58 ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 0059cd58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cd58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cd58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059cd24 ["INT_ADD", "register:40f0:8", ["const:59cd24:8", "const:4:8"]]
- 0059cd24 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059cd64 ["INT_ADD", "register:40f0:8", ["const:59cd64:8", "const:4:8"]]
+ 0059cd64 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-0fde818642bc67db68b08db0f010519f"></a>

### [`0059cd38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cd38.md) → [`0059cd78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cd78.md) FUN_0059cd78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059cda0",
      "incomplete_value": false,
      "site": "0059cda4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059cd60",
      "incomplete_value": false,
      "site": "0059cd64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059cda4",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059cda4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059cd54 ["INT_ADD", "register:40f0:8", ["const:59cd54:8", "const:4:8"]]
- 0059cd54 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059cd94 ["INT_ADD", "register:40f0:8", ["const:59cd94:8", "const:4:8"]]
+ 0059cd94 ["CALL", null, ["callee:00c57f80:8"]]
- 0059cd60 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059cd60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059cd60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059cd60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059cda0 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059cda0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059cda0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059cda0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6e86b8152b325d314910804549e29328"></a>

### [`0059cd8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cd8c.md) → [`0059cdcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cdcc.md) FUN_0059cdcc

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
      "definition_site": "0059cdd0",
      "incomplete_value": false,
      "site": "0059cdd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059cd90",
      "incomplete_value": false,
      "site": "0059cd94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:bd0:8"
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
      "0059cdd4",
      "DATA",
      [
        "storage",
        "00c6dbd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059cdd4",
      "DATA",
      [
        "storage",
        "00c6dca0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059cd90 ["COPY", "tmp:0:8", ["const:bd0:8"]]
- 0059cd90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059cd90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059cd90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059cdd0 ["COPY", "tmp:0:8", ["const:ca0:8"]]
+ 0059cdd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cdd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cdd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e1a89b60fff487e9e1915695ed43757f"></a>

### [`0059cd9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cd9c.md) → [`0059cddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059cddc.md) FUN_0059cddc

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
      "definition_site": "0059cdec",
      "incomplete_value": false,
      "site": "0059cdf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059cdac",
      "incomplete_value": false,
      "site": "0059cdb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:bd0:8"
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
      "0059cdf4",
      "DATA",
      [
        "storage",
        "00c6dbd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059cdf4",
      "DATA",
      [
        "storage",
        "00c6dca0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059cdac ["COPY", "tmp:0:8", ["const:bd0:8"]]
- 0059cdac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059cdac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059cdac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059cdec ["COPY", "tmp:0:8", ["const:ca0:8"]]
+ 0059cdec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cdec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059cdec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059cdb8 ["INT_ADD", "register:40f0:8", ["const:59cdb8:8", "const:4:8"]]
- 0059cdb8 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059cdf8 ["INT_ADD", "register:40f0:8", ["const:59cdf8:8", "const:4:8"]]
+ 0059cdf8 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-1093c480eb26525b516db699e08ae2ed"></a>

### [`0059cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059c/0059cdd4.md) → [`0059ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059c/0059ce14.md) _INIT_38

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
      "definition_site": "0059ce50",
      "incomplete_value": true,
      "site": "0059ce6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059ce10",
      "incomplete_value": true,
      "site": "0059ce2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059ce74",
      "incomplete_value": true,
      "site": "0059ce90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059ce34",
      "incomplete_value": true,
      "site": "0059ce50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059ce94",
      "incomplete_value": true,
      "site": "0059ceb0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059ce54",
      "incomplete_value": true,
      "site": "0059ce70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0059ce50",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0059ce74",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0059ce94",
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
      "0059ce50",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0059ce74",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0059ce94",
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
- 0059ce4c ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0059ce4c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059ce4c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059ce4c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059ce8c ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0059ce8c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059ce8c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059ce8c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059ce6c ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0059ce6c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059ce6c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059ce6c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059ceac ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0059ceac ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059ceac ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059ceac ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059cf34 ["INT_ADD", "register:40f0:8", ["const:59cf34:8", "const:4:8"]]
- 0059cf34 ["CALL", null, ["callee:0043b838:8"]]
+ 0059cf74 ["INT_ADD", "register:40f0:8", ["const:59cf74:8", "const:4:8"]]
+ 0059cf74 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-511965f03fdb77759c0df74b47abecda"></a>

### [`0059d164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d164.md) → [`0059d1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d1a4.md) FUN_0059d1a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059d1f0",
      "incomplete_value": true,
      "site": "0059d1f0",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d1b0",
      "incomplete_value": true,
      "site": "0059d1b0",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1a5:8"
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
      "definition_site": "0059d2a0",
      "incomplete_value": false,
      "site": "0059d2ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d260",
      "incomplete_value": false,
      "site": "0059d26c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
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
      "definition_site": "0059d2c4",
      "incomplete_value": false,
      "site": "0059d2cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:cf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d284",
      "incomplete_value": false,
      "site": "0059d28c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:c20:8"
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
      "0059d1d4",
      "READ",
      [
        "storage",
        "002b71a5",
        null,
        "string"
      ]
    ],
    [
      "0059d2ac",
      "DATA",
      [
        "storage",
        "00c6dcf8",
        null,
        "undefined *"
      ]
    ],
    [
      "0059d2cc",
      "DATA",
      [
        "storage",
        "00c6dc20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059d1d4",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "0059d2ac",
      "DATA",
      [
        "storage",
        "00c6ddc8",
        null,
        "undefined *"
      ]
    ],
    [
      "0059d2cc",
      "DATA",
      [
        "storage",
        "00c6dcf0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d1f0 ["INT_ADD", "register:40f0:8", ["const:59d1f0:8", "const:4:8"]]
- 0059d1f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059d230 ["INT_ADD", "register:40f0:8", ["const:59d230:8", "const:4:8"]]
+ 0059d230 ["CALL", null, ["callee:00c57f80:8"]]
- 0059d24c ["INT_ADD", "register:40f0:8", ["const:59d24c:8", "const:4:8"]]
- 0059d24c ["CALL", null, ["callee:00c57f80:8"]]
+ 0059d28c ["INT_ADD", "register:40f0:8", ["const:59d28c:8", "const:4:8"]]
+ 0059d28c ["CALL", null, ["callee:00c57f80:8"]]
- 0059d188 ["COPY", "tmp:0:8", ["const:1a5:8"]]
- 0059d188 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059d188 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059d188 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059d1c8 ["COPY", "tmp:0:8", ["const:1e5:8"]]
+ 0059d1c8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059d1c8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059d1c8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-0d1159da552680e7f41431070a066a07"></a>

### [`0059d354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d354.md) → [`0059d394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d394.md) FUN_0059d394

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005b35f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b3/005b35f8.md) · 呼出先 1件 [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md)
- 新版 呼出元 1件 [`005b3638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3638.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059d3b0",
      "incomplete_value": false,
      "site": "0059d3b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:d10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d370",
      "incomplete_value": false,
      "site": "0059d374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:c40:8"
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
      "0059d3b4",
      "DATA",
      [
        "storage",
        "00c6dc40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059d3b4",
      "DATA",
      [
        "storage",
        "00c6dd10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d368 ["INT_ADD", "register:40f0:8", ["const:59d368:8", "const:4:8"]]
- 0059d368 ["CALL", null, ["callee:0059b948:8"]]
+ 0059d3a8 ["INT_ADD", "register:40f0:8", ["const:59d3a8:8", "const:4:8"]]
+ 0059d3a8 ["CALL", null, ["callee:0059b948:8"]]
- 0059d370 ["COPY", "tmp:0:8", ["const:c40:8"]]
- 0059d370 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d370 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d370 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d3b0 ["COPY", "tmp:0:8", ["const:d10:8"]]
+ 0059d3b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d3b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d3b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5959bf400a70105e3366ee4f2f50eed6"></a>

### [`0059d4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d4c0.md) → [`0059d500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d500.md) FUN_0059d500

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059d51c",
      "incomplete_value": false,
      "site": "0059d524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d4dc",
      "incomplete_value": false,
      "site": "0059d4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:d48:8"
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
      "definition_site": "0059d534",
      "incomplete_value": false,
      "site": "0059d534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d4f4",
      "incomplete_value": false,
      "site": "0059d4f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "0059d524",
      "DATA",
      [
        "storage",
        "00c6dd48",
        null,
        "undefined *"
      ]
    ],
    [
      "0059d534",
      "DATA",
      [
        "storage",
        "00c6dc98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059d524",
      "DATA",
      [
        "storage",
        "00c6de18",
        null,
        "undefined *"
      ]
    ],
    [
      "0059d534",
      "DATA",
      [
        "storage",
        "00c6dd68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d4d4 ["INT_ADD", "register:40f0:8", ["const:59d4d4:8", "const:4:8"]]
- 0059d4d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059d514 ["INT_ADD", "register:40f0:8", ["const:59d514:8", "const:4:8"]]
+ 0059d514 ["CALL", null, ["callee:00c57f60:8"]]
- 0059d4dc ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0059d4dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d4dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d4dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d51c ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 0059d51c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d51c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d51c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059d4e8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
~~~


<a id="compare-cd477c347842958d7e2e2c599d2cdbb1"></a>

### [`0059d508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d508.md) → [`0059d548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d548.md) FUN_0059d548

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
      "definition_site": "0059d574",
      "incomplete_value": false,
      "site": "0059d578",
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
      "definition_site": "0059d534",
      "incomplete_value": false,
      "site": "0059d538",
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
      "0059d578",
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
      "0059d578",
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
- 0059d524 ["INT_ADD", "register:40f0:8", ["const:59d524:8", "const:4:8"]]
- 0059d524 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059d564 ["INT_ADD", "register:40f0:8", ["const:59d564:8", "const:4:8"]]
+ 0059d564 ["CALL", null, ["callee:00c57f80:8"]]
- 0059d52c ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059d52c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d52c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d52c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d56c ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059d56c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d56c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d56c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059d544 ["INT_ADD", "register:40f0:8", ["const:59d544:8", "const:4:8"]]
- 0059d544 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059d584 ["INT_ADD", "register:40f0:8", ["const:59d584:8", "const:4:8"]]
+ 0059d584 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-32fe915fd3e9e6d74bce85952b6ba53a"></a>

### [`0059d56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d56c.md) → [`0059d5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d5ac.md) FUN_0059d5ac

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
      "definition_site": "0059d5d8",
      "incomplete_value": false,
      "site": "0059d5dc",
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
      "definition_site": "0059d598",
      "incomplete_value": false,
      "site": "0059d59c",
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
      "0059d5dc",
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
      "0059d5dc",
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
- 0059d588 ["INT_ADD", "register:40f0:8", ["const:59d588:8", "const:4:8"]]
- 0059d588 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059d5c8 ["INT_ADD", "register:40f0:8", ["const:59d5c8:8", "const:4:8"]]
+ 0059d5c8 ["CALL", null, ["callee:00c57f80:8"]]
- 0059d590 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059d590 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d590 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d590 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d5d0 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059d5d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d5d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d5d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059d5a8 ["INT_ADD", "register:40f0:8", ["const:59d5a8:8", "const:4:8"]]
- 0059d5a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059d5e8 ["INT_ADD", "register:40f0:8", ["const:59d5e8:8", "const:4:8"]]
+ 0059d5e8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-86e961dfc6ac3da535b176f47ce10f10"></a>

### [`0059d5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d5cc.md) → [`0059d60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d60c.md) FUN_0059d60c

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
      "definition_site": "0059d614",
      "incomplete_value": false,
      "site": "0059d618",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d5d4",
      "incomplete_value": false,
      "site": "0059d5d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059d618",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059d618",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d5d4 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059d5d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059d5d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059d5d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059d614 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059d614 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059d614 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059d614 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059d5f8 ["INT_ADD", "register:40f0:8", ["const:59d5f8:8", "const:4:8"]]
- 0059d5f8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059d638 ["INT_ADD", "register:40f0:8", ["const:59d638:8", "const:4:8"]]
+ 0059d638 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-3b7507a9234afa5006c6a6a075216969"></a>

### [`0059d60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d60c.md) → [`0059d64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d64c.md) FUN_0059d64c

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
      "definition_site": "0059d650",
      "incomplete_value": false,
      "site": "0059d654",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d610",
      "incomplete_value": false,
      "site": "0059d614",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
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
      "0059d654",
      "DATA",
      [
        "storage",
        "00c6dcf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059d654",
      "DATA",
      [
        "storage",
        "00c6ddc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d610 ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 0059d610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d650 ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 0059d650 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d650 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d650 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fd8e3da0e1f14a46e591c159a74427d0"></a>

### [`0059d61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d61c.md) → [`0059d65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d65c.md) FUN_0059d65c

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
      "definition_site": "0059d66c",
      "incomplete_value": false,
      "site": "0059d674",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:dc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d62c",
      "incomplete_value": false,
      "site": "0059d634",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
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
      "0059d674",
      "DATA",
      [
        "storage",
        "00c6dcf8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059d674",
      "DATA",
      [
        "storage",
        "00c6ddc8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d62c ["COPY", "tmp:0:8", ["const:cf8:8"]]
- 0059d62c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d62c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d62c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d66c ["COPY", "tmp:0:8", ["const:dc8:8"]]
+ 0059d66c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d66c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d66c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059d638 ["INT_ADD", "register:40f0:8", ["const:59d638:8", "const:4:8"]]
- 0059d638 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059d678 ["INT_ADD", "register:40f0:8", ["const:59d678:8", "const:4:8"]]
+ 0059d678 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-116c7e0c3c826f8470e3911904fce1b7"></a>

### [`0059d64c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d64c.md) → [`0059d68c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d68c.md) FUN_0059d68c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059d694",
      "incomplete_value": false,
      "site": "0059d698",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d654",
      "incomplete_value": false,
      "site": "0059d658",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059d698",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059d698",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d654 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059d654 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059d654 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059d654 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059d694 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059d694 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059d694 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059d694 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-02bc5030e27946bcf3fc4b1f99232b60"></a>

### [`0059d670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d670.md) → [`0059d6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d6b0.md) FUN_0059d6b0

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
      "definition_site": "0059d6b4",
      "incomplete_value": false,
      "site": "0059d6b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d674",
      "incomplete_value": false,
      "site": "0059d678",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:d48:8"
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
      "0059d6b8",
      "DATA",
      [
        "storage",
        "00c6dd48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059d6b8",
      "DATA",
      [
        "storage",
        "00c6de18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d674 ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0059d674 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d674 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d674 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d6b4 ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 0059d6b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d6b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d6b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a59036d1b10d9f2c3334302d82595bcc"></a>

### [`0059d680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d680.md) → [`0059d6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d6c0.md) FUN_0059d6c0

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
      "definition_site": "0059d6d0",
      "incomplete_value": false,
      "site": "0059d6d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059d690",
      "incomplete_value": false,
      "site": "0059d698",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:d48:8"
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
      "0059d6d8",
      "DATA",
      [
        "storage",
        "00c6dd48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059d6d8",
      "DATA",
      [
        "storage",
        "00c6de18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059d690 ["COPY", "tmp:0:8", ["const:d48:8"]]
- 0059d690 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059d690 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059d690 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059d6d0 ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 0059d6d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d6d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059d6d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059d69c ["INT_ADD", "register:40f0:8", ["const:59d69c:8", "const:4:8"]]
- 0059d69c ["CALL", null, ["callee:00c57f70:8"]]
+ 0059d6dc ["INT_ADD", "register:40f0:8", ["const:59d6dc:8", "const:4:8"]]
+ 0059d6dc ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-5354d9330d22f9e5a74cdac8c0948984"></a>

### [`0059d6b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059d6b8.md) → [`0059d6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d6f8.md) _INIT_39

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
      "definition_site": "0059d734",
      "incomplete_value": true,
      "site": "0059d750",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059d6f4",
      "incomplete_value": true,
      "site": "0059d710",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059d758",
      "incomplete_value": true,
      "site": "0059d774",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059d718",
      "incomplete_value": true,
      "site": "0059d734",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059d778",
      "incomplete_value": true,
      "site": "0059d794",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059d738",
      "incomplete_value": true,
      "site": "0059d754",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0059d734",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0059d758",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0059d778",
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
      "0059d734",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0059d758",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0059d778",
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
- 0059d730 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0059d730 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059d730 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059d730 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059d770 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0059d770 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059d770 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059d770 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059d750 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0059d750 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059d750 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059d750 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059d790 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0059d790 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059d790 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059d790 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059d818 ["INT_ADD", "register:40f0:8", ["const:59d818:8", "const:4:8"]]
- 0059d818 ["CALL", null, ["callee:0043b838:8"]]
+ 0059d858 ["INT_ADD", "register:40f0:8", ["const:59d858:8", "const:4:8"]]
+ 0059d858 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-5824d8e78461cf03736bf8176edb38f8"></a>

### [`0059da70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059da70.md) → [`0059dab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059dab0.md) FUN_0059dab0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0059e150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059e190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e190.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.88% / 新版 98.88%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059db08",
      "incomplete_value": true,
      "site": "0059db08",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059dac8",
      "incomplete_value": true,
      "site": "0059dac8",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1a5:8"
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
      "0059daec",
      "READ",
      [
        "storage",
        "002b71a5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0059daec",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059db08 ["INT_ADD", "register:40f0:8", ["const:59db08:8", "const:4:8"]]
- 0059db08 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059db48 ["INT_ADD", "register:40f0:8", ["const:59db48:8", "const:4:8"]]
+ 0059db48 ["CALL", null, ["callee:00c57f80:8"]]
- 0059da9c ["COPY", "tmp:0:8", ["const:1a5:8"]]
- 0059da9c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059da9c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059da9c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059dadc ["COPY", "tmp:0:8", ["const:1e5:8"]]
+ 0059dadc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059dadc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059dadc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059dad8 ["INT_ADD", "register:40f0:8", ["const:59dad8:8", "const:4:8"]]
- 0059dad8 ["CALL", null, ["callee:004410cc:8"]]
+ 0059db18 ["INT_ADD", "register:40f0:8", ["const:59db18:8", "const:4:8"]]
+ 0059db18 ["CALL", null, ["callee:004410cc:8"]]
~~~


<a id="compare-4906d216a06a52bcbab07699c19e0ef0"></a>

### [`0059df90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059df90.md) → [`0059dfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059dfd0.md) FUN_0059dfd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059dfec",
      "incomplete_value": false,
      "site": "0059dff4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059dfac",
      "incomplete_value": false,
      "site": "0059dfb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ec0:8"
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
      "definition_site": "0059e004",
      "incomplete_value": false,
      "site": "0059e004",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059dfc4",
      "incomplete_value": false,
      "site": "0059dfc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:db8:8"
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
      "0059dff4",
      "DATA",
      [
        "storage",
        "00c6dec0",
        null,
        "undefined *"
      ]
    ],
    [
      "0059e004",
      "DATA",
      [
        "storage",
        "00c6ddb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059dff4",
      "DATA",
      [
        "storage",
        "00c6df90",
        null,
        "undefined *"
      ]
    ],
    [
      "0059e004",
      "DATA",
      [
        "storage",
        "00c6de88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059dfa4 ["INT_ADD", "register:40f0:8", ["const:59dfa4:8", "const:4:8"]]
- 0059dfa4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059dfe4 ["INT_ADD", "register:40f0:8", ["const:59dfe4:8", "const:4:8"]]
+ 0059dfe4 ["CALL", null, ["callee:00c57f60:8"]]
- 0059dfac ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 0059dfac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059dfac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059dfac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059dfec ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 0059dfec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059dfec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059dfec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059dfb8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
~~~


<a id="compare-9029d8975ba5ec35905e63b14dc60037"></a>

### [`0059dfd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059dfd8.md) → [`0059e018`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e018.md) FUN_0059e018

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059e034",
      "incomplete_value": true,
      "site": "0059e038",
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
      "definition_site": "0059dff4",
      "incomplete_value": true,
      "site": "0059dff8",
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
      "0059e02c",
      "READ",
      [
        "storage",
        "00c9b320",
        null,
        "pointer"
      ]
    ],
    [
      "0059e038",
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
      "0059e02c",
      "READ",
      [
        "storage",
        "00c9b3f0",
        null,
        "pointer"
      ]
    ],
    [
      "0059e038",
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
- 0059dfec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:320:8"]]
- 0059dfec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0059e02c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3f0:8"]]
+ 0059e02c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0059e004 ["INT_ADD", "register:40f0:8", ["const:59e004:8", "const:4:8"]]
- 0059e004 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e044 ["INT_ADD", "register:40f0:8", ["const:59e044:8", "const:4:8"]]
+ 0059e044 ["CALL", null, ["callee:00c57f80:8"]]
- 0059e014 ["INT_ADD", "register:40f0:8", ["const:59e014:8", "const:4:8"]]
- 0059e014 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e054 ["INT_ADD", "register:40f0:8", ["const:59e054:8", "const:4:8"]]
+ 0059e054 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1c0957852a030e3fe63f19b9d8dd4478"></a>

### [`0059e028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e028.md) → [`0059e068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e068.md) FUN_0059e068

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059e0d0",
      "incomplete_value": false,
      "site": "0059e0d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e090",
      "incomplete_value": false,
      "site": "0059e094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059e0d4",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059e0d4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e074 ["INT_ADD", "register:40f0:8", ["const:59e074:8", "const:4:8"]]
- 0059e074 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e0b4 ["INT_ADD", "register:40f0:8", ["const:59e0b4:8", "const:4:8"]]
+ 0059e0b4 ["CALL", null, ["callee:00c57f80:8"]]
- 0059e084 ["INT_ADD", "register:40f0:8", ["const:59e084:8", "const:4:8"]]
- 0059e084 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e0c4 ["INT_ADD", "register:40f0:8", ["const:59e0c4:8", "const:4:8"]]
+ 0059e0c4 ["CALL", null, ["callee:00c57f80:8"]]
- 0059e090 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059e090 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059e090 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059e090 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059e0d0 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059e0d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059e0d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059e0d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f4089ec4cbedf10a791dd0e803ad4de7"></a>

### [`0059e0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e0c0.md) → [`0059e100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e100.md) FUN_0059e100

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059e168",
      "incomplete_value": false,
      "site": "0059e16c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e128",
      "incomplete_value": false,
      "site": "0059e12c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059e16c",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059e16c",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e10c ["INT_ADD", "register:40f0:8", ["const:59e10c:8", "const:4:8"]]
- 0059e10c ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e14c ["INT_ADD", "register:40f0:8", ["const:59e14c:8", "const:4:8"]]
+ 0059e14c ["CALL", null, ["callee:00c57f80:8"]]
- 0059e11c ["INT_ADD", "register:40f0:8", ["const:59e11c:8", "const:4:8"]]
- 0059e11c ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e15c ["INT_ADD", "register:40f0:8", ["const:59e15c:8", "const:4:8"]]
+ 0059e15c ["CALL", null, ["callee:00c57f80:8"]]
- 0059e128 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059e128 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059e128 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059e128 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059e168 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059e168 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059e168 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059e168 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8623996bf3e4d4325e70852653e163af"></a>

### [`0059e150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e150.md) → [`0059e190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e190.md) FUN_0059e190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0059da70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059d/0059da70.md) · 呼出先 4件 [`0054075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054075c.md) [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0059dab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059dab0.md) · 呼出先 4件 [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.73% / 新版 92.73%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059e1fc",
      "incomplete_value": false,
      "site": "0059e200",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e1bc",
      "incomplete_value": false,
      "site": "0059e1c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e70:8"
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
      "definition_site": "0059e224",
      "incomplete_value": false,
      "site": "0059e22c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e1e4",
      "incomplete_value": false,
      "site": "0059e1ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "0059e200",
      "DATA",
      [
        "storage",
        "00c6de70",
        null,
        "undefined *"
      ]
    ],
    [
      "0059e22c",
      "DATA",
      [
        "storage",
        "00c6dd98",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059e200",
      "DATA",
      [
        "storage",
        "00c6df40",
        null,
        "undefined *"
      ]
    ],
    [
      "0059e22c",
      "DATA",
      [
        "storage",
        "00c6de68",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e188 ["INT_ADD", "register:40f0:8", ["const:59e188:8", "const:4:8"]]
- 0059e188 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059e1c8 ["INT_ADD", "register:40f0:8", ["const:59e1c8:8", "const:4:8"]]
+ 0059e1c8 ["CALL", null, ["callee:00c57f60:8"]]
- 0059e1bc ["COPY", "tmp:0:8", ["const:e70:8"]]
- 0059e1bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059e1bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059e1bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059e1fc ["COPY", "tmp:0:8", ["const:f40:8"]]
+ 0059e1fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e1fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e1fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059e1c8 ["INT_ADD", "register:40f0:8", ["const:59e1c8:8", "const:4:8"]]
- 0059e1c8 ["CALL", null, ["callee:0054079c:8"]]
+ 0059e208 ["INT_ADD", "register:40f0:8", ["const:59e208:8", "const:4:8"]]
+ 0059e208 ["CALL", null, ["callee:0054079c:8"]]
~~~


<a id="compare-b0803721a527fb4e3d7bca9a5fe1513d"></a>

### [`0059e268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e268.md) → [`0059e2a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e2a8.md) FUN_0059e2a8

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
      "definition_site": "0059e2ac",
      "incomplete_value": false,
      "site": "0059e2b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e26c",
      "incomplete_value": false,
      "site": "0059e270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e70:8"
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
      "0059e2b0",
      "DATA",
      [
        "storage",
        "00c6de70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059e2b0",
      "DATA",
      [
        "storage",
        "00c6df40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e26c ["COPY", "tmp:0:8", ["const:e70:8"]]
- 0059e26c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059e26c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059e26c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059e2ac ["COPY", "tmp:0:8", ["const:f40:8"]]
+ 0059e2ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e2ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e2ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f7972245ae05ddb53d3e07dc527518bd"></a>

### [`0059e278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e278.md) → [`0059e2b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e2b8.md) FUN_0059e2b8

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
      "definition_site": "0059e2c8",
      "incomplete_value": false,
      "site": "0059e2d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e288",
      "incomplete_value": false,
      "site": "0059e290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:e70:8"
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
      "0059e2d0",
      "DATA",
      [
        "storage",
        "00c6de70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059e2d0",
      "DATA",
      [
        "storage",
        "00c6df40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e288 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 0059e288 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059e288 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059e288 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059e2c8 ["COPY", "tmp:0:8", ["const:f40:8"]]
+ 0059e2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059e294 ["INT_ADD", "register:40f0:8", ["const:59e294:8", "const:4:8"]]
- 0059e294 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059e2d4 ["INT_ADD", "register:40f0:8", ["const:59e2d4:8", "const:4:8"]]
+ 0059e2d4 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-3159d5efb30baa94d2afa4ca3a60a8b2"></a>

### [`0059e2a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e2a8.md) → [`0059e2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e2e8.md) FUN_0059e2e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059e350",
      "incomplete_value": false,
      "site": "0059e354",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e310",
      "incomplete_value": false,
      "site": "0059e314",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059e354",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059e354",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e2f4 ["INT_ADD", "register:40f0:8", ["const:59e2f4:8", "const:4:8"]]
- 0059e2f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e334 ["INT_ADD", "register:40f0:8", ["const:59e334:8", "const:4:8"]]
+ 0059e334 ["CALL", null, ["callee:00c57f80:8"]]
- 0059e304 ["INT_ADD", "register:40f0:8", ["const:59e304:8", "const:4:8"]]
- 0059e304 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e344 ["INT_ADD", "register:40f0:8", ["const:59e344:8", "const:4:8"]]
+ 0059e344 ["CALL", null, ["callee:00c57f80:8"]]
- 0059e310 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059e310 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059e310 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059e310 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059e350 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059e350 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059e350 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059e350 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b7a72b6ff1f78fab9b4da7e0fa37a0b5"></a>

### [`0059e344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e344.md) → [`0059e384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e384.md) FUN_0059e384

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
      "definition_site": "0059e388",
      "incomplete_value": false,
      "site": "0059e38c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e348",
      "incomplete_value": false,
      "site": "0059e34c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
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
      "0059e38c",
      "DATA",
      [
        "storage",
        "00c6dec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059e38c",
      "DATA",
      [
        "storage",
        "00c6df90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e348 ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 0059e348 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059e348 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059e348 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059e388 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 0059e388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bdd618a6668d7fd437e97c28b6da36e9"></a>

### [`0059e354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e354.md) → [`0059e394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e394.md) FUN_0059e394

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
      "definition_site": "0059e3a4",
      "incomplete_value": false,
      "site": "0059e3ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e364",
      "incomplete_value": false,
      "site": "0059e36c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
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
      "0059e3ac",
      "DATA",
      [
        "storage",
        "00c6dec0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059e3ac",
      "DATA",
      [
        "storage",
        "00c6df90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e364 ["COPY", "tmp:0:8", ["const:ec0:8"]]
- 0059e364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059e364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059e364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059e3a4 ["COPY", "tmp:0:8", ["const:f90:8"]]
+ 0059e3a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e3a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059e3a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059e370 ["INT_ADD", "register:40f0:8", ["const:59e370:8", "const:4:8"]]
- 0059e370 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059e3b0 ["INT_ADD", "register:40f0:8", ["const:59e3b0:8", "const:4:8"]]
+ 0059e3b0 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-f6c61b221bc6dab32c9dbf1f7016543b"></a>

### [`0059e38c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e38c.md) → [`0059e3cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e3cc.md) _INIT_40

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
      "definition_site": "0059e408",
      "incomplete_value": true,
      "site": "0059e424",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059e3c8",
      "incomplete_value": true,
      "site": "0059e3e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059e42c",
      "incomplete_value": true,
      "site": "0059e448",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059e3ec",
      "incomplete_value": true,
      "site": "0059e408",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059e44c",
      "incomplete_value": true,
      "site": "0059e468",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059e40c",
      "incomplete_value": true,
      "site": "0059e428",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0059e408",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0059e42c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0059e44c",
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
      "0059e408",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0059e42c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0059e44c",
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
- 0059e404 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0059e404 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059e404 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059e404 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059e444 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0059e444 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059e444 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059e444 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059e424 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0059e424 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059e424 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059e424 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059e464 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0059e464 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059e464 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059e464 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059e5c0 ["INT_ADD", "register:40f0:8", ["const:59e5c0:8", "const:4:8"]]
- 0059e5c0 ["CALL", null, ["callee:00c57f00:8"]]
+ 0059e600 ["INT_ADD", "register:40f0:8", ["const:59e600:8", "const:4:8"]]
+ 0059e600 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-3e010a7fb16f3883030c69e32aa551ff"></a>

### [`0059e71c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059e71c.md) → [`0059e75c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059e75c.md) FUN_0059e75c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.69% / 新版 94.69%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059e7b0",
      "incomplete_value": true,
      "site": "0059e7b0",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e770",
      "incomplete_value": true,
      "site": "0059e770",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1a5:8"
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
      "definition_site": "0059e8e4",
      "incomplete_value": true,
      "site": "0059e8e4",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:ee0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e8a4",
      "incomplete_value": true,
      "site": "0059e8a4",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:f2d:8"
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
      "definition_site": "0059e9c0",
      "incomplete_value": true,
      "site": "0059e9c0",
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
                "const:b1f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059e980",
      "incomplete_value": true,
      "site": "0059e980",
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
                "const:b7b:8"
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
      "0059e794",
      "READ",
      [
        "storage",
        "002b71a5",
        null,
        "string"
      ]
    ],
    [
      "0059e8d0",
      "READ",
      [
        "storage",
        "0029ff2d",
        null,
        "string"
      ]
    ],
    [
      "0059e9ac",
      "READ",
      [
        "storage",
        "002afb7b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0059e794",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "0059e8d0",
      "READ",
      [
        "storage",
        "0029fee0",
        null,
        "string"
      ]
    ],
    [
      "0059e9ac",
      "READ",
      [
        "storage",
        "002afb1f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059e7b0 ["INT_ADD", "register:40f0:8", ["const:59e7b0:8", "const:4:8"]]
- 0059e7b0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059e7f0 ["INT_ADD", "register:40f0:8", ["const:59e7f0:8", "const:4:8"]]
+ 0059e7f0 ["CALL", null, ["callee:00c57f80:8"]]
- 0059e748 ["COPY", "tmp:0:8", ["const:1a5:8"]]
- 0059e748 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059e748 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059e748 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059e788 ["COPY", "tmp:0:8", ["const:1e5:8"]]
+ 0059e788 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059e788 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059e788 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059e780 ["INT_ADD", "register:40f0:8", ["const:59e780:8", "const:4:8"]]
- 0059e780 ["CALL", null, ["callee:004410cc:8"]]
+ 0059e7c0 ["INT_ADD", "register:40f0:8", ["const:59e7c0:8", "const:4:8"]]
+ 0059e7c0 ["CALL", null, ["callee:004410cc:8"]]
~~~


<a id="compare-30ff0c8842723e6c7814e589eae8d8b5"></a>

### [`0059eb60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059eb60.md) → [`0059eba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059eba0.md) FUN_0059eba0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005b4020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b4/005b4020.md) · 呼出先 1件 [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md)
- 新版 呼出元 1件 [`005b4060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4060.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ebbc",
      "incomplete_value": false,
      "site": "0059ebc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059eb7c",
      "incomplete_value": false,
      "site": "0059eb80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f30:8"
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
      "0059ebc0",
      "DATA",
      [
        "storage",
        "00c6df30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ebc0",
      "DATA",
      [
        "storage",
        "00c6e000",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059eb74 ["INT_ADD", "register:40f0:8", ["const:59eb74:8", "const:4:8"]]
- 0059eb74 ["CALL", null, ["callee:0059b948:8"]]
+ 0059ebb4 ["INT_ADD", "register:40f0:8", ["const:59ebb4:8", "const:4:8"]]
+ 0059ebb4 ["CALL", null, ["callee:0059b948:8"]]
- 0059eb78 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059ebb8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0059eb7c ["COPY", "tmp:0:8", ["const:f30:8"]]
- 0059eb7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059eb7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059eb7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ebbc ["COPY", "tmp:0:8", ["const:0:8"]]
+ 0059ebbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ebbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ebbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b775d65987776618036c59b20be719dc"></a>

### [`0059eccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059eccc.md) → [`0059ed0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059ed0c.md) FUN_0059ed0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ed28",
      "incomplete_value": false,
      "site": "0059ed30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ece8",
      "incomplete_value": false,
      "site": "0059ecf0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:38:8"
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
      "definition_site": "0059ed40",
      "incomplete_value": false,
      "site": "0059ed40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ed00",
      "incomplete_value": false,
      "site": "0059ed00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:f88:8"
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
      "0059ed30",
      "DATA",
      [
        "storage",
        "00c6e038",
        null,
        "undefined *"
      ]
    ],
    [
      "0059ed40",
      "DATA",
      [
        "storage",
        "00c6df88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ed30",
      "DATA",
      [
        "storage",
        "00c6e108",
        null,
        "undefined *"
      ]
    ],
    [
      "0059ed40",
      "DATA",
      [
        "storage",
        "00c6e058",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ece0 ["INT_ADD", "register:40f0:8", ["const:59ece0:8", "const:4:8"]]
- 0059ece0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059ed20 ["INT_ADD", "register:40f0:8", ["const:59ed20:8", "const:4:8"]]
+ 0059ed20 ["CALL", null, ["callee:00c57f60:8"]]
- 0059ece8 ["COPY", "tmp:0:8", ["const:38:8"]]
- 0059ece8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ece8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ece8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ed28 ["COPY", "tmp:0:8", ["const:108:8"]]
+ 0059ed28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ed28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ed28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059ecf4 ["COPY", "register:4040:8", ["const:c6d000:8"]]
~~~


<a id="compare-42400e76c9a680e409d8f2d5335eb2f2"></a>

### [`0059ed14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059ed14.md) → [`0059ed54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059ed54.md) FUN_0059ed54

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
      "definition_site": "0059ed80",
      "incomplete_value": false,
      "site": "0059ed84",
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
      "definition_site": "0059ed40",
      "incomplete_value": false,
      "site": "0059ed44",
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
      "0059ed84",
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
      "0059ed84",
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
- 0059ed30 ["INT_ADD", "register:40f0:8", ["const:59ed30:8", "const:4:8"]]
- 0059ed30 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ed70 ["INT_ADD", "register:40f0:8", ["const:59ed70:8", "const:4:8"]]
+ 0059ed70 ["CALL", null, ["callee:00c57f80:8"]]
- 0059ed38 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059ed38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ed38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ed38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ed78 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059ed78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ed78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ed78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059ed50 ["INT_ADD", "register:40f0:8", ["const:59ed50:8", "const:4:8"]]
- 0059ed50 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ed90 ["INT_ADD", "register:40f0:8", ["const:59ed90:8", "const:4:8"]]
+ 0059ed90 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-04a6b0f1c13c068bdaea955fbee37594"></a>

### [`0059ed78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059ed78.md) → [`0059edb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059edb8.md) FUN_0059edb8

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
      "definition_site": "0059ede4",
      "incomplete_value": false,
      "site": "0059ede8",
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
      "definition_site": "0059eda4",
      "incomplete_value": false,
      "site": "0059eda8",
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
      "0059ede8",
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
      "0059ede8",
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
- 0059ed94 ["INT_ADD", "register:40f0:8", ["const:59ed94:8", "const:4:8"]]
- 0059ed94 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059edd4 ["INT_ADD", "register:40f0:8", ["const:59edd4:8", "const:4:8"]]
+ 0059edd4 ["CALL", null, ["callee:00c57f80:8"]]
- 0059ed9c ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059ed9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ed9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ed9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059eddc ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059eddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059eddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059eddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059edb4 ["INT_ADD", "register:40f0:8", ["const:59edb4:8", "const:4:8"]]
- 0059edb4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059edf4 ["INT_ADD", "register:40f0:8", ["const:59edf4:8", "const:4:8"]]
+ 0059edf4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2779e5c2b4dbfc9a370f7d1085c724d6"></a>

### [`0059edd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059edd8.md) → [`0059ee18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059ee18.md) FUN_0059ee18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ee50",
      "incomplete_value": false,
      "site": "0059ee54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ee10",
      "incomplete_value": false,
      "site": "0059ee14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059ee54",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059ee54",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059edf4 ["INT_ADD", "register:40f0:8", ["const:59edf4:8", "const:4:8"]]
- 0059edf4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ee34 ["INT_ADD", "register:40f0:8", ["const:59ee34:8", "const:4:8"]]
+ 0059ee34 ["CALL", null, ["callee:00c57f80:8"]]
- 0059ee04 ["INT_ADD", "register:40f0:8", ["const:59ee04:8", "const:4:8"]]
- 0059ee04 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ee44 ["INT_ADD", "register:40f0:8", ["const:59ee44:8", "const:4:8"]]
+ 0059ee44 ["CALL", null, ["callee:00c57f80:8"]]
- 0059ee10 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059ee10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059ee10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059ee10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059ee50 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059ee50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ee50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ee50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-814331b91188f8e9479ebaf66f3f9fb8"></a>

### [`0059ee94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059ee94.md) → [`0059eed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059eed4.md) FUN_0059eed4

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
      "definition_site": "0059eed8",
      "incomplete_value": false,
      "site": "0059eedc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ee98",
      "incomplete_value": false,
      "site": "0059ee9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
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
      "0059eedc",
      "DATA",
      [
        "storage",
        "00c6dfe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059eedc",
      "DATA",
      [
        "storage",
        "00c6e0b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ee94 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059eed4 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0059ee98 ["COPY", "tmp:0:8", ["const:fe8:8"]]
- 0059ee98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ee98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ee98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059eed8 ["COPY", "tmp:0:8", ["const:b8:8"]]
+ 0059eed8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059eed8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059eed8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a83476656fdb055a8ac01343893cea5d"></a>

### [`0059eea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059eea4.md) → [`0059eee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059eee4.md) FUN_0059eee4

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
      "definition_site": "0059eef4",
      "incomplete_value": false,
      "site": "0059eefc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059eeb4",
      "incomplete_value": false,
      "site": "0059eebc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
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
      "0059eefc",
      "DATA",
      [
        "storage",
        "00c6dfe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059eefc",
      "DATA",
      [
        "storage",
        "00c6e0b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059eeb0 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059eef0 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0059eeb4 ["COPY", "tmp:0:8", ["const:fe8:8"]]
- 0059eeb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059eeb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059eeb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059eef4 ["COPY", "tmp:0:8", ["const:b8:8"]]
+ 0059eef4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059eef4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059eef4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059eec0 ["INT_ADD", "register:40f0:8", ["const:59eec0:8", "const:4:8"]]
- 0059eec0 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059ef00 ["INT_ADD", "register:40f0:8", ["const:59ef00:8", "const:4:8"]]
+ 0059ef00 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-1a15e5374bc56443214f0acbf0355de8"></a>

### [`0059eed4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059eed4.md) → [`0059ef14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059ef14.md) FUN_0059ef14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ef4c",
      "incomplete_value": false,
      "site": "0059ef50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ef0c",
      "incomplete_value": false,
      "site": "0059ef10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059ef50",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059ef50",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059eef0 ["INT_ADD", "register:40f0:8", ["const:59eef0:8", "const:4:8"]]
- 0059eef0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ef30 ["INT_ADD", "register:40f0:8", ["const:59ef30:8", "const:4:8"]]
+ 0059ef30 ["CALL", null, ["callee:00c57f80:8"]]
- 0059ef00 ["INT_ADD", "register:40f0:8", ["const:59ef00:8", "const:4:8"]]
- 0059ef00 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059ef40 ["INT_ADD", "register:40f0:8", ["const:59ef40:8", "const:4:8"]]
+ 0059ef40 ["CALL", null, ["callee:00c57f80:8"]]
- 0059ef0c ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059ef0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059ef0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059ef0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059ef4c ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059ef4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ef4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ef4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0437ba24a153588c74897ce6021ae74d"></a>

### [`0059ef38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059ef38.md) → [`0059ef78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059ef78.md) FUN_0059ef78

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
      "definition_site": "0059ef7c",
      "incomplete_value": false,
      "site": "0059ef80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ef3c",
      "incomplete_value": false,
      "site": "0059ef40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:38:8"
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
      "0059ef80",
      "DATA",
      [
        "storage",
        "00c6e038",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ef80",
      "DATA",
      [
        "storage",
        "00c6e108",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ef3c ["COPY", "tmp:0:8", ["const:38:8"]]
- 0059ef3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ef3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ef3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ef7c ["COPY", "tmp:0:8", ["const:108:8"]]
+ 0059ef7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ef7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ef7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-47584cff2536601ca7d8c66af2f8732d"></a>

### [`0059ef48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059ef48.md) → [`0059ef88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059ef88.md) FUN_0059ef88

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
      "definition_site": "0059ef98",
      "incomplete_value": false,
      "site": "0059efa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ef58",
      "incomplete_value": false,
      "site": "0059ef60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:38:8"
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
      "0059efa0",
      "DATA",
      [
        "storage",
        "00c6e038",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059efa0",
      "DATA",
      [
        "storage",
        "00c6e108",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ef58 ["COPY", "tmp:0:8", ["const:38:8"]]
- 0059ef58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ef58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ef58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ef98 ["COPY", "tmp:0:8", ["const:108:8"]]
+ 0059ef98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ef98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ef98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059ef64 ["INT_ADD", "register:40f0:8", ["const:59ef64:8", "const:4:8"]]
- 0059ef64 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059efa4 ["INT_ADD", "register:40f0:8", ["const:59efa4:8", "const:4:8"]]
+ 0059efa4 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-7a3a10d4c78710a24d5d9841bdef09c1"></a>

### [`0059ef80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059e/0059ef80.md) → [`0059efc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059efc0.md) _INIT_41

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
      "definition_site": "0059effc",
      "incomplete_value": true,
      "site": "0059f018",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059efbc",
      "incomplete_value": true,
      "site": "0059efd8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f020",
      "incomplete_value": true,
      "site": "0059f03c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059efe0",
      "incomplete_value": true,
      "site": "0059effc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f060",
      "incomplete_value": true,
      "site": "0059f078",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f020",
      "incomplete_value": true,
      "site": "0059f038",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0059effc",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0059f020",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0059f040",
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
      "0059effc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0059f020",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0059f040",
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
- 0059eff8 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0059eff8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059eff8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059eff8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059f038 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0059f038 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f038 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f038 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059f018 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0059f018 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059f018 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059f018 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059f058 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0059f058 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f058 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f058 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059f1b4 ["INT_ADD", "register:40f0:8", ["const:59f1b4:8", "const:4:8"]]
- 0059f1b4 ["CALL", null, ["callee:00c57f00:8"]]
+ 0059f1f4 ["INT_ADD", "register:40f0:8", ["const:59f1f4:8", "const:4:8"]]
+ 0059f1f4 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-479403b5c54194b513018f463ec0cb64"></a>

### [`0059f310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f310.md) → [`0059f350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f350.md) FUN_0059f350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059f39c",
      "incomplete_value": true,
      "site": "0059f39c",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f35c",
      "incomplete_value": true,
      "site": "0059f35c",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1a5:8"
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
      "definition_site": "0059f44c",
      "incomplete_value": false,
      "site": "0059f458",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:230:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f40c",
      "incomplete_value": false,
      "site": "0059f418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "definition_site": "0059f470",
      "incomplete_value": false,
      "site": "0059f478",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f430",
      "incomplete_value": false,
      "site": "0059f438",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:88:8"
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
      "0059f380",
      "READ",
      [
        "storage",
        "002b71a5",
        null,
        "string"
      ]
    ],
    [
      "0059f458",
      "DATA",
      [
        "storage",
        "00c6e160",
        null,
        "undefined *"
      ]
    ],
    [
      "0059f478",
      "DATA",
      [
        "storage",
        "00c6e088",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059f380",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "0059f458",
      "DATA",
      [
        "storage",
        "00c6e230",
        null,
        "undefined *"
      ]
    ],
    [
      "0059f478",
      "DATA",
      [
        "storage",
        "00c6e158",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f39c ["INT_ADD", "register:40f0:8", ["const:59f39c:8", "const:4:8"]]
- 0059f39c ["CALL", null, ["callee:00c57f80:8"]]
+ 0059f3dc ["INT_ADD", "register:40f0:8", ["const:59f3dc:8", "const:4:8"]]
+ 0059f3dc ["CALL", null, ["callee:00c57f80:8"]]
- 0059f3f8 ["INT_ADD", "register:40f0:8", ["const:59f3f8:8", "const:4:8"]]
- 0059f3f8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059f438 ["INT_ADD", "register:40f0:8", ["const:59f438:8", "const:4:8"]]
+ 0059f438 ["CALL", null, ["callee:00c57f80:8"]]
- 0059f334 ["COPY", "tmp:0:8", ["const:1a5:8"]]
- 0059f334 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059f334 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059f334 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059f374 ["COPY", "tmp:0:8", ["const:1e5:8"]]
+ 0059f374 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f374 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f374 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-9de0a7e51e40f4ae7eecc1dd52f0f44f"></a>

### [`0059f500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f500.md) → [`0059f540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f540.md) FUN_0059f540

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005b275c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b2/005b275c.md) · 呼出先 1件 [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md)
- 新版 呼出元 1件 [`005b279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b279c.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059f55c",
      "incomplete_value": false,
      "site": "0059f560",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:178:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f51c",
      "incomplete_value": false,
      "site": "0059f520",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:a8:8"
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
      "0059f560",
      "DATA",
      [
        "storage",
        "00c6e0a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059f560",
      "DATA",
      [
        "storage",
        "00c6e178",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f514 ["INT_ADD", "register:40f0:8", ["const:59f514:8", "const:4:8"]]
- 0059f514 ["CALL", null, ["callee:0059b948:8"]]
+ 0059f554 ["INT_ADD", "register:40f0:8", ["const:59f554:8", "const:4:8"]]
+ 0059f554 ["CALL", null, ["callee:0059b948:8"]]
- 0059f51c ["COPY", "tmp:0:8", ["const:a8:8"]]
- 0059f51c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f51c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f51c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f55c ["COPY", "tmp:0:8", ["const:178:8"]]
+ 0059f55c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f55c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f55c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8393480d778e2cb2b638096375bef96"></a>

### [`0059f670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f670.md) → [`0059f6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f6b0.md) FUN_0059f6b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059f6cc",
      "incomplete_value": false,
      "site": "0059f6d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f68c",
      "incomplete_value": false,
      "site": "0059f694",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
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
      "definition_site": "0059f6e4",
      "incomplete_value": false,
      "site": "0059f6e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f6a4",
      "incomplete_value": false,
      "site": "0059f6a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:100:8"
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
      "0059f6d4",
      "DATA",
      [
        "storage",
        "00c6e1b0",
        null,
        "undefined *"
      ]
    ],
    [
      "0059f6e4",
      "DATA",
      [
        "storage",
        "00c6e100",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059f6d4",
      "DATA",
      [
        "storage",
        "00c6e280",
        null,
        "undefined *"
      ]
    ],
    [
      "0059f6e4",
      "DATA",
      [
        "storage",
        "00c6e1d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f684 ["INT_ADD", "register:40f0:8", ["const:59f684:8", "const:4:8"]]
- 0059f684 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059f6c4 ["INT_ADD", "register:40f0:8", ["const:59f6c4:8", "const:4:8"]]
+ 0059f6c4 ["CALL", null, ["callee:00c57f60:8"]]
- 0059f68c ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 0059f68c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f68c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f68c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f6cc ["COPY", "tmp:0:8", ["const:280:8"]]
+ 0059f6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059f698 ["COPY", "register:4040:8", ["const:c6e000:8"]]
~~~


<a id="compare-956bb0806bddf86d664847457e5ef0e2"></a>

### [`0059f6b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f6b8.md) → [`0059f6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f6f8.md) FUN_0059f6f8

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
      "definition_site": "0059f724",
      "incomplete_value": false,
      "site": "0059f728",
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
      "definition_site": "0059f6e4",
      "incomplete_value": false,
      "site": "0059f6e8",
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
      "0059f728",
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
      "0059f728",
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
- 0059f6d4 ["INT_ADD", "register:40f0:8", ["const:59f6d4:8", "const:4:8"]]
- 0059f6d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059f714 ["INT_ADD", "register:40f0:8", ["const:59f714:8", "const:4:8"]]
+ 0059f714 ["CALL", null, ["callee:00c57f80:8"]]
- 0059f6dc ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059f6dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f6dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f6dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f71c ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059f71c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f71c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f71c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059f6f4 ["INT_ADD", "register:40f0:8", ["const:59f6f4:8", "const:4:8"]]
- 0059f6f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059f734 ["INT_ADD", "register:40f0:8", ["const:59f734:8", "const:4:8"]]
+ 0059f734 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-3e5bc634dbe6bdc7bd9b6d65dd0ee603"></a>

### [`0059f71c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f71c.md) → [`0059f75c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f75c.md) FUN_0059f75c

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
      "definition_site": "0059f788",
      "incomplete_value": false,
      "site": "0059f78c",
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
      "definition_site": "0059f748",
      "incomplete_value": false,
      "site": "0059f74c",
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
      "0059f78c",
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
      "0059f78c",
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
- 0059f738 ["INT_ADD", "register:40f0:8", ["const:59f738:8", "const:4:8"]]
- 0059f738 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059f778 ["INT_ADD", "register:40f0:8", ["const:59f778:8", "const:4:8"]]
+ 0059f778 ["CALL", null, ["callee:00c57f80:8"]]
- 0059f740 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0059f740 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f740 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f740 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f780 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0059f780 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f780 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f780 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059f758 ["INT_ADD", "register:40f0:8", ["const:59f758:8", "const:4:8"]]
- 0059f758 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059f798 ["INT_ADD", "register:40f0:8", ["const:59f798:8", "const:4:8"]]
+ 0059f798 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0cf6e0ae1157a555f32060f63b2e8d14"></a>

### [`0059f77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f77c.md) → [`0059f7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f7bc.md) FUN_0059f7bc

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
      "definition_site": "0059f7c4",
      "incomplete_value": false,
      "site": "0059f7c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f784",
      "incomplete_value": false,
      "site": "0059f788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059f7c8",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059f7c8",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f784 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059f784 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059f784 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059f784 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059f7c4 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059f7c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059f7c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059f7c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059f7a8 ["INT_ADD", "register:40f0:8", ["const:59f7a8:8", "const:4:8"]]
- 0059f7a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059f7e8 ["INT_ADD", "register:40f0:8", ["const:59f7e8:8", "const:4:8"]]
+ 0059f7e8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-222321ba5013c1a716e1d17004a31c07"></a>

### [`0059f7bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f7bc.md) → [`0059f7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f7fc.md) FUN_0059f7fc

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
      "definition_site": "0059f800",
      "incomplete_value": false,
      "site": "0059f804",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:230:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f7c0",
      "incomplete_value": false,
      "site": "0059f7c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "0059f804",
      "DATA",
      [
        "storage",
        "00c6e160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059f804",
      "DATA",
      [
        "storage",
        "00c6e230",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f7c0 ["COPY", "tmp:0:8", ["const:160:8"]]
- 0059f7c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f7c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f7c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f800 ["COPY", "tmp:0:8", ["const:230:8"]]
+ 0059f800 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f800 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f800 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-104cdd6cbcf5d00cd637a8c6bb54567e"></a>

### [`0059f7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f7cc.md) → [`0059f80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f80c.md) FUN_0059f80c

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
      "definition_site": "0059f81c",
      "incomplete_value": false,
      "site": "0059f824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:230:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f7dc",
      "incomplete_value": false,
      "site": "0059f7e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "0059f824",
      "DATA",
      [
        "storage",
        "00c6e160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059f824",
      "DATA",
      [
        "storage",
        "00c6e230",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f7dc ["COPY", "tmp:0:8", ["const:160:8"]]
- 0059f7dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f7dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f7dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f81c ["COPY", "tmp:0:8", ["const:230:8"]]
+ 0059f81c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f81c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f81c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059f7e8 ["INT_ADD", "register:40f0:8", ["const:59f7e8:8", "const:4:8"]]
- 0059f7e8 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059f828 ["INT_ADD", "register:40f0:8", ["const:59f828:8", "const:4:8"]]
+ 0059f828 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-d47ddbdfd037fb8b74435ab68dc14b89"></a>

### [`0059f7fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f7fc.md) → [`0059f83c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f83c.md) FUN_0059f83c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059f844",
      "incomplete_value": false,
      "site": "0059f848",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f804",
      "incomplete_value": false,
      "site": "0059f808",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059f848",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059f848",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f804 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059f804 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059f804 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059f804 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059f844 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059f844 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059f844 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059f844 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-dfca997bca9a387d37a3c707f53517ac"></a>

### [`0059f820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f820.md) → [`0059f860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f860.md) FUN_0059f860

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
      "definition_site": "0059f864",
      "incomplete_value": false,
      "site": "0059f868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f824",
      "incomplete_value": false,
      "site": "0059f828",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
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
      "0059f868",
      "DATA",
      [
        "storage",
        "00c6e1b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059f868",
      "DATA",
      [
        "storage",
        "00c6e280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f824 ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 0059f824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f864 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 0059f864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-18076ea9b594bd6d00dea4c660ab80ba"></a>

### [`0059f830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f830.md) → [`0059f870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f870.md) FUN_0059f870

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
      "definition_site": "0059f880",
      "incomplete_value": false,
      "site": "0059f888",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059f840",
      "incomplete_value": false,
      "site": "0059f848",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
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
      "0059f888",
      "DATA",
      [
        "storage",
        "00c6e1b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059f888",
      "DATA",
      [
        "storage",
        "00c6e280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059f840 ["COPY", "tmp:0:8", ["const:1b0:8"]]
- 0059f840 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059f840 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059f840 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059f880 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 0059f880 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f880 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059f880 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059f84c ["INT_ADD", "register:40f0:8", ["const:59f84c:8", "const:4:8"]]
- 0059f84c ["CALL", null, ["callee:00c57f70:8"]]
+ 0059f88c ["INT_ADD", "register:40f0:8", ["const:59f88c:8", "const:4:8"]]
+ 0059f88c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-df6efce7eb8be345d252a821a4c26b75"></a>

### [`0059f868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059f868.md) → [`0059f8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f8a8.md) _INIT_42

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
      "definition_site": "0059f8e4",
      "incomplete_value": true,
      "site": "0059f900",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f8a4",
      "incomplete_value": true,
      "site": "0059f8c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f908",
      "incomplete_value": true,
      "site": "0059f924",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f8c8",
      "incomplete_value": true,
      "site": "0059f8e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f928",
      "incomplete_value": true,
      "site": "0059f944",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0059f8e8",
      "incomplete_value": true,
      "site": "0059f904",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0059f8e4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0059f908",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0059f928",
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
      "0059f8e4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0059f908",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0059f928",
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
- 0059f8e0 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0059f8e0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059f8e0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059f8e0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059f920 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0059f920 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f920 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f920 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059f900 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0059f900 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059f900 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059f900 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059f940 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0059f940 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f940 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059f940 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0059f9c8 ["INT_ADD", "register:40f0:8", ["const:59f9c8:8", "const:4:8"]]
- 0059f9c8 ["CALL", null, ["callee:0043b838:8"]]
+ 0059fa08 ["INT_ADD", "register:40f0:8", ["const:59fa08:8", "const:4:8"]]
+ 0059fa08 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-734b0b035de9f38a0b57e314d0663744"></a>

### [`0059fbf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059fbf8.md) → [`0059fc38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059fc38.md) FUN_0059fc38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059fc40",
      "incomplete_value": false,
      "site": "0059fc44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059fc00",
      "incomplete_value": false,
      "site": "0059fc04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059fc44",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059fc44",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059fc00 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059fc00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059fc00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059fc00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059fc40 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059fc40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059fc40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059fc40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-85d9fbd7ef19663d11197e0033789491"></a>

### [`0059fc18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059fc18.md) → [`0059fc58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059fc58.md) FUN_0059fc58

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
      "definition_site": "0059fc60",
      "incomplete_value": false,
      "site": "0059fc64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059fc20",
      "incomplete_value": false,
      "site": "0059fc24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059fc64",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059fc64",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059fc20 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059fc20 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059fc20 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059fc20 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059fc60 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059fc60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059fc60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059fc60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059fc44 ["INT_ADD", "register:40f0:8", ["const:59fc44:8", "const:4:8"]]
- 0059fc44 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059fc84 ["INT_ADD", "register:40f0:8", ["const:59fc84:8", "const:4:8"]]
+ 0059fc84 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-89e462bfd5499a74a8f9e41aaba38753"></a>

### [`0059fc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059fc58.md) → [`0059fc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059fc98.md) FUN_0059fc98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059fce4",
      "incomplete_value": true,
      "site": "0059fce4",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059fca4",
      "incomplete_value": true,
      "site": "0059fca4",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1a5:8"
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
      "definition_site": "0059fd94",
      "incomplete_value": false,
      "site": "0059fda0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:3a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059fd54",
      "incomplete_value": false,
      "site": "0059fd60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
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
      "definition_site": "0059fdb8",
      "incomplete_value": false,
      "site": "0059fdc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059fd78",
      "incomplete_value": false,
      "site": "0059fd80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:200:8"
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
      "0059fcc8",
      "READ",
      [
        "storage",
        "002b71a5",
        null,
        "string"
      ]
    ],
    [
      "0059fda0",
      "DATA",
      [
        "storage",
        "00c6e2d8",
        null,
        "undefined *"
      ]
    ],
    [
      "0059fdc0",
      "DATA",
      [
        "storage",
        "00c6e200",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059fcc8",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "0059fda0",
      "DATA",
      [
        "storage",
        "00c6e3a8",
        null,
        "undefined *"
      ]
    ],
    [
      "0059fdc0",
      "DATA",
      [
        "storage",
        "00c6e2d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059fce4 ["INT_ADD", "register:40f0:8", ["const:59fce4:8", "const:4:8"]]
- 0059fce4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059fd24 ["INT_ADD", "register:40f0:8", ["const:59fd24:8", "const:4:8"]]
+ 0059fd24 ["CALL", null, ["callee:00c57f80:8"]]
- 0059fd40 ["INT_ADD", "register:40f0:8", ["const:59fd40:8", "const:4:8"]]
- 0059fd40 ["CALL", null, ["callee:00c57f80:8"]]
+ 0059fd80 ["INT_ADD", "register:40f0:8", ["const:59fd80:8", "const:4:8"]]
+ 0059fd80 ["CALL", null, ["callee:00c57f80:8"]]
- 0059fc7c ["COPY", "tmp:0:8", ["const:1a5:8"]]
- 0059fc7c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0059fc7c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0059fc7c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059fcbc ["COPY", "tmp:0:8", ["const:1e5:8"]]
+ 0059fcbc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059fcbc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059fcbc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-ac896ce856d676ee8e285c4fb5ca2c0e"></a>

### [`0059fea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059fea4.md) → [`0059fee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059fee4.md) FUN_0059fee4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ff00",
      "incomplete_value": false,
      "site": "0059ff08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:3f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059fec0",
      "incomplete_value": false,
      "site": "0059fec8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:328:8"
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
      "definition_site": "0059ff18",
      "incomplete_value": false,
      "site": "0059ff18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059fed8",
      "incomplete_value": false,
      "site": "0059fed8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:238:8"
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
      "0059ff08",
      "DATA",
      [
        "storage",
        "00c6e328",
        null,
        "undefined *"
      ]
    ],
    [
      "0059ff18",
      "DATA",
      [
        "storage",
        "00c6e238",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ff08",
      "DATA",
      [
        "storage",
        "00c6e3f8",
        null,
        "undefined *"
      ]
    ],
    [
      "0059ff18",
      "DATA",
      [
        "storage",
        "00c6e308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059feb8 ["INT_ADD", "register:40f0:8", ["const:59feb8:8", "const:4:8"]]
- 0059feb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0059fef8 ["INT_ADD", "register:40f0:8", ["const:59fef8:8", "const:4:8"]]
+ 0059fef8 ["CALL", null, ["callee:00c57f60:8"]]
- 0059fec0 ["COPY", "tmp:0:8", ["const:328:8"]]
- 0059fec0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059fec0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059fec0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ff00 ["COPY", "tmp:0:8", ["const:3f8:8"]]
+ 0059ff00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ff00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ff00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059fecc ["COPY", "register:4040:8", ["const:c6e000:8"]]
~~~


<a id="compare-fff6389482eeb3ef0dec9fffc79b9650"></a>

### [`0059ff3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059ff3c.md) → [`0059ff7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059ff7c.md) FUN_0059ff7c

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
      "definition_site": "0059ff80",
      "incomplete_value": false,
      "site": "0059ff84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:3a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ff40",
      "incomplete_value": false,
      "site": "0059ff44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
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
      "0059ff84",
      "DATA",
      [
        "storage",
        "00c6e2d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ff84",
      "DATA",
      [
        "storage",
        "00c6e3a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ff40 ["COPY", "tmp:0:8", ["const:2d8:8"]]
- 0059ff40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ff40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ff40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ff80 ["COPY", "tmp:0:8", ["const:3a8:8"]]
+ 0059ff80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ff80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ff80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7453aa92cf08bc33c1ed950ecc0896f8"></a>

### [`0059ff4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059ff4c.md) → [`0059ff8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059ff8c.md) FUN_0059ff8c

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
      "definition_site": "0059ff9c",
      "incomplete_value": false,
      "site": "0059ffa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:3a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ff5c",
      "incomplete_value": false,
      "site": "0059ff64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:2d8:8"
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
      "0059ffa4",
      "DATA",
      [
        "storage",
        "00c6e2d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ffa4",
      "DATA",
      [
        "storage",
        "00c6e3a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ff5c ["COPY", "tmp:0:8", ["const:2d8:8"]]
- 0059ff5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ff5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ff5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ff9c ["COPY", "tmp:0:8", ["const:3a8:8"]]
+ 0059ff9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ff9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ff9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059ff68 ["INT_ADD", "register:40f0:8", ["const:59ff68:8", "const:4:8"]]
- 0059ff68 ["CALL", null, ["callee:00c57f70:8"]]
+ 0059ffa8 ["INT_ADD", "register:40f0:8", ["const:59ffa8:8", "const:4:8"]]
+ 0059ffa8 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-35d7275d5a60cc4e9fa22a48a065c506"></a>

### [`0059ff7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059ff7c.md) → [`0059ffbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059ffbc.md) FUN_0059ffbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059ffc4",
      "incomplete_value": false,
      "site": "0059ffc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ff84",
      "incomplete_value": false,
      "site": "0059ff88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:a00:8"
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
      "0059ffc8",
      "DATA",
      [
        "storage",
        "00c6da00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059ffc8",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ff84 ["COPY", "tmp:0:8", ["const:a00:8"]]
- 0059ff84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059ff84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059ff84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059ffc4 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 0059ffc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ffc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059ffc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-908e8a8c27278c066cdf45d7de44cdb6"></a>

### [`0059ffa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059ffa0.md) → [`0059ffe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059ffe0.md) FUN_0059ffe0

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
      "definition_site": "0059ffe4",
      "incomplete_value": false,
      "site": "0059ffe8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:3f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ffa4",
      "incomplete_value": false,
      "site": "0059ffa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:328:8"
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
      "0059ffe8",
      "DATA",
      [
        "storage",
        "00c6e328",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059ffe8",
      "DATA",
      [
        "storage",
        "00c6e3f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ffa4 ["COPY", "tmp:0:8", ["const:328:8"]]
- 0059ffa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ffa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ffa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059ffe4 ["COPY", "tmp:0:8", ["const:3f8:8"]]
+ 0059ffe4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ffe4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059ffe4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c35524c4aaccd385a69fc6b877fb9e21"></a>

### [`0059ffb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059ffb0.md) → [`0059fff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059fff0.md) FUN_0059fff0

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
      "definition_site": "005a0000",
      "incomplete_value": false,
      "site": "005a0008",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:3f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059ffc0",
      "incomplete_value": false,
      "site": "0059ffc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:328:8"
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
      "005a0008",
      "DATA",
      [
        "storage",
        "00c6e328",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a0008",
      "DATA",
      [
        "storage",
        "00c6e3f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059ffc0 ["COPY", "tmp:0:8", ["const:328:8"]]
- 0059ffc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059ffc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059ffc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a0000 ["COPY", "tmp:0:8", ["const:3f8:8"]]
+ 005a0000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059ffcc ["INT_ADD", "register:40f0:8", ["const:59ffcc:8", "const:4:8"]]
- 0059ffcc ["CALL", null, ["callee:00c57f70:8"]]
+ 005a000c ["INT_ADD", "register:40f0:8", ["const:5a000c:8", "const:4:8"]]
+ 005a000c ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-8ce4fff4ff3b483f6f9c07747ac8657e"></a>

### [`0059ffe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059f/0059ffe8.md) → [`005a0028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0028.md) _INIT_43

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a0064",
      "incomplete_value": true,
      "site": "005a0080",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0024",
      "incomplete_value": true,
      "site": "005a0040",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0088",
      "incomplete_value": true,
      "site": "005a00a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0048",
      "incomplete_value": true,
      "site": "005a0064",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a00c8",
      "incomplete_value": true,
      "site": "005a00e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0088",
      "incomplete_value": true,
      "site": "005a00a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005a0064",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005a0088",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005a00a8",
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
      "005a0064",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a0088",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a00a8",
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
- 005a0060 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005a0060 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a0060 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a0060 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a00a0 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005a00a0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a00a0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a00a0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005a0080 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005a0080 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a0080 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a0080 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a00c0 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005a00c0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a00c0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a00c0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005a021c ["INT_ADD", "register:40f0:8", ["const:5a021c:8", "const:4:8"]]
- 005a021c ["CALL", null, ["callee:00c57f00:8"]]
+ 005a025c ["INT_ADD", "register:40f0:8", ["const:5a025c:8", "const:4:8"]]
+ 005a025c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-f3d538df00233025c4f76f211c59d443"></a>

### [`005a0378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a0/005a0378.md) → [`005a03b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a03b8.md) FUN_005a03b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0059b8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b8dc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.59% / 新版 93.59%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a0404",
      "incomplete_value": true,
      "site": "005a0404",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a03c4",
      "incomplete_value": true,
      "site": "005a03c4",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:1a5:8"
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
      "definition_site": "005a0524",
      "incomplete_value": true,
      "site": "005a0524",
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
                "const:28b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a04e4",
      "incomplete_value": true,
      "site": "005a04e4",
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
                "const:24b:8"
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
      "definition_site": "005a0578",
      "incomplete_value": false,
      "site": "005a0584",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a0538",
      "incomplete_value": false,
      "site": "005a0544",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:450:8"
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
      "005a03e8",
      "READ",
      [
        "storage",
        "002b71a5",
        null,
        "string"
      ]
    ],
    [
      "005a0514",
      "READ",
      [
        "storage",
        "002b624b",
        null,
        "string"
      ]
    ],
    [
      "005a0584",
      "DATA",
      [
        "storage",
        "00c6e450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a03e8",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "005a0514",
      "READ",
      [
        "storage",
        "002b628b",
        null,
        "string"
      ]
    ],
    [
      "005a0584",
      "DATA",
      [
        "storage",
        "00c6e520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a0404 ["INT_ADD", "register:40f0:8", ["const:5a0404:8", "const:4:8"]]
- 005a0404 ["CALL", null, ["callee:00c57f80:8"]]
+ 005a0444 ["INT_ADD", "register:40f0:8", ["const:5a0444:8", "const:4:8"]]
+ 005a0444 ["CALL", null, ["callee:00c57f80:8"]]
- 005a0524 ["INT_ADD", "register:40f0:8", ["const:5a0524:8", "const:4:8"]]
- 005a0524 ["CALL", null, ["callee:00c57f80:8"]]
+ 005a0564 ["INT_ADD", "register:40f0:8", ["const:5a0564:8", "const:4:8"]]
+ 005a0564 ["CALL", null, ["callee:00c57f80:8"]]
- 005a039c ["COPY", "tmp:0:8", ["const:1a5:8"]]
- 005a039c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a039c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a039c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a03dc ["COPY", "tmp:0:8", ["const:1e5:8"]]
+ 005a03dc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a03dc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a03dc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-f178d801a57ad43072fa9f8578d61434"></a>

### [`005a0668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a0/005a0668.md) → [`005a06a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a06a8.md) FUN_005a06a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005b4590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b4/005b4590.md) · 呼出先 1件 [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md)
- 新版 呼出元 1件 [`005b45d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b45d0.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a06c4",
      "incomplete_value": false,
      "site": "005a06c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a0684",
      "incomplete_value": false,
      "site": "005a0688",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "005a06c8",
      "DATA",
      [
        "storage",
        "00c6e398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a06c8",
      "DATA",
      [
        "storage",
        "00c6e468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a067c ["INT_ADD", "register:40f0:8", ["const:5a067c:8", "const:4:8"]]
- 005a067c ["CALL", null, ["callee:0059b948:8"]]
+ 005a06bc ["INT_ADD", "register:40f0:8", ["const:5a06bc:8", "const:4:8"]]
+ 005a06bc ["CALL", null, ["callee:0059b948:8"]]
- 005a0684 ["COPY", "tmp:0:8", ["const:398:8"]]
- 005a0684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a0684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a0684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a06c4 ["COPY", "tmp:0:8", ["const:468:8"]]
+ 005a06c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a06c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a06c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-93d376ea787003945c9053aa09ccf455"></a>

### [`005a0704`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a0/005a0704.md) → [`005a0744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0744.md) FUN_005a0744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0045179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/0045179c.md) [`0045982c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/0045982c.md) [`00597110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597110.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0045986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/0045986c.md) [`00597150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597150.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.18% / 新版 82.18%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a077c",
      "incomplete_value": false,
      "site": "005a0784",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a073c",
      "incomplete_value": false,
      "site": "005a0744",
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
            "const:a90:8"
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
      "definition_site": "005a07a4",
      "incomplete_value": false,
      "site": "005a07a4",
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
      "definition_site": "005a0764",
      "incomplete_value": false,
      "site": "005a0764",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a07d8",
      "incomplete_value": true,
      "site": "005a07d8",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:93f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a0798",
      "incomplete_value": true,
      "site": "005a0798",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:90e:8"
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
      "005a0784",
      "DATA",
      [
        "storage",
        "00c63a90",
        null,
        "pointer"
      ]
    ],
    [
      "005a07a4",
      "DATA",
      [
        "storage",
        "00c63ae0",
        null,
        "pointer"
      ]
    ],
    [
      "005a07c0",
      "READ",
      [
        "storage",
        "002b390e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a0784",
      "DATA",
      [
        "storage",
        "00c63b60",
        null,
        "pointer"
      ]
    ],
    [
      "005a07a4",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "005a07c0",
      "READ",
      [
        "storage",
        "002b393f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a0758 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005a0758 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a0758 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a0758 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a0798 ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 005a0798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a07a4 ["INT_ADD", "register:40f0:8", ["const:5a07a4:8", "const:4:8"]]
- 005a07a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 005a07e4 ["INT_ADD", "register:40f0:8", ["const:5a07e4:8", "const:4:8"]]
+ 005a07e4 ["CALL", null, ["callee:00c57f60:8"]]
- 005a07d8 ["INT_ADD", "register:40f0:8", ["const:5a07d8:8", "const:4:8"]]
- 005a07d8 ["CALL", null, ["callee:0045986c:8"]]
+ 005a0818 ["INT_ADD", "register:40f0:8", ["const:5a0818:8", "const:4:8"]]
+ 005a0818 ["CALL", null, ["callee:0045986c:8"]]
~~~


