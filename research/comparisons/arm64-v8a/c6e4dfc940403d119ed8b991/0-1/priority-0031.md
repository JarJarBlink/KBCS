# v16.0.1 → v16.0.2 · 最優先の変更候補 (31)

[一覧の目次](README.md)

<a id="compare-4b2a579e6738a1b34fff84432ca01900"></a>

### [`00696530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696530.md) → [`00696588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696588.md) FUN_00696588

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
      "definition_site": "006965ac",
      "incomplete_value": false,
      "site": "006965ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:250:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696554",
      "incomplete_value": false,
      "site": "00696554",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:180:8"
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
      "006965ac",
      "DATA",
      [
        "storage",
        "00c75180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006965ac",
      "DATA",
      [
        "storage",
        "00c75250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696544 ["INT_ADD", "register:40f0:8", ["const:696544:8", "const:4:8"]]
- 00696544 ["CALL", null, ["callee:00c57f60:8"]]
+ 0069659c ["INT_ADD", "register:40f0:8", ["const:69659c:8", "const:4:8"]]
+ 0069659c ["CALL", null, ["callee:00c57f60:8"]]
- 00696550 ["COPY", "tmp:0:8", ["const:180:8"]]
- 00696550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006965a8 ["COPY", "tmp:0:8", ["const:250:8"]]
+ 006965a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006965a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006965a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad189c3a31dcccea5dbd57c0924542cd"></a>

### [`00696564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696564.md) → [`006965bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/006965bc.md) FUN_006965bc

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
      "definition_site": "006965c8",
      "incomplete_value": false,
      "site": "006965c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:250:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696570",
      "incomplete_value": false,
      "site": "00696570",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:180:8"
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
      "006965c8",
      "DATA",
      [
        "storage",
        "00c75180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006965c8",
      "DATA",
      [
        "storage",
        "00c75250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069656c ["COPY", "tmp:0:8", ["const:180:8"]]
- 0069656c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0069656c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0069656c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006965c4 ["COPY", "tmp:0:8", ["const:250:8"]]
+ 006965c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006965c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006965c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-003e202500901283bd3cad33e3715989"></a>

### [`00696580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696580.md) → [`006965d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/006965d8.md) FUN_006965d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`0085b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2e0.md) [`008b9298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9298.md) [`008b9500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9500.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`008b9558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9558.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.03% / 新版 94.03%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00696658",
      "incomplete_value": true,
      "site": "0069665c",
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
      "definition_site": "00696600",
      "incomplete_value": true,
      "site": "00696604",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00696654",
      "incomplete_value": true,
      "site": "0069665c",
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
                "const:8:8"
              ]
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
    "new": null,
    "old": {
      "definition_site": "00696654",
      "incomplete_value": true,
      "site": "0069665c",
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
      "unmatched:006965b8",
      "DATA",
      [
        "storage",
        "00338758",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00696658",
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
      "00696610",
      "DATA",
      [
        "storage",
        "00338758",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00696658",
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
- 0069665c ["INT_ADD", "register:40f0:8", ["const:69665c:8", "const:4:8"]]
- 0069665c ["CALL", null, ["callee:008b9558:8"]]
+ 006966b4 ["INT_ADD", "register:40f0:8", ["const:6966b4:8", "const:4:8"]]
+ 006966b4 ["CALL", null, ["callee:008b9558:8"]]
- 006965b4 ["INT_LEFT", "tmp:0:8", ["const:338:8", "const:c:4"]]
- 006965b4 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 006965b4 ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:1:8"]]
- 006965b4 ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:1:8"]]
- 006965b8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:758:8"]]
- 006965b8 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 006965b8 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
~~~


<a id="compare-991fbd14b5d0493f8cacc03e3f9c34d8"></a>

### [`006966b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/006966b8.md) → [`00696710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696710.md) FUN_00696710

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
      "definition_site": "00696730",
      "incomplete_value": false,
      "site": "00696734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006966d8",
      "incomplete_value": false,
      "site": "006966dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:200:8"
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
      "00696734",
      "DATA",
      [
        "storage",
        "00c75200",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696734",
      "DATA",
      [
        "storage",
        "00c752d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006966cc ["INT_ADD", "register:40f0:8", ["const:6966cc:8", "const:4:8"]]
- 006966cc ["CALL", null, ["callee:00c57f60:8"]]
+ 00696724 ["INT_ADD", "register:40f0:8", ["const:696724:8", "const:4:8"]]
+ 00696724 ["CALL", null, ["callee:00c57f60:8"]]
- 006966d8 ["COPY", "tmp:0:8", ["const:200:8"]]
- 006966d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006966d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006966d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00696730 ["COPY", "tmp:0:8", ["const:2d0:8"]]
+ 00696730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00696730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00696730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1fbc01757fcb42f4a874142227ded13d"></a>

### [`006966f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/006966f0.md) → [`00696748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696748.md) FUN_00696748

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
      "definition_site": "0069674c",
      "incomplete_value": false,
      "site": "00696750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006966f4",
      "incomplete_value": false,
      "site": "006966f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:200:8"
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
      "00696750",
      "DATA",
      [
        "storage",
        "00c75200",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696750",
      "DATA",
      [
        "storage",
        "00c752d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006966f4 ["COPY", "tmp:0:8", ["const:200:8"]]
- 006966f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006966f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006966f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0069674c ["COPY", "tmp:0:8", ["const:2d0:8"]]
+ 0069674c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0069674c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0069674c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a55b962a73a4a3058f53390fedc387b7"></a>

### [`00696710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696710.md) → [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) FUN_00696768

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 21件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md)
- 新版 呼出元 0件  · 呼出先 21件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.93% / 新版 90.93%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069684c",
      "incomplete_value": false,
      "site": "00696854",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006967f4",
      "incomplete_value": true,
      "site": "006967fc",
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
            "const:fd8:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069699c",
      "incomplete_value": true,
      "site": "006969b4",
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
                "register:40d8:8"
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
      "definition_site": "00696944",
      "incomplete_value": true,
      "site": "0069695c",
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
                "register:40d8:8"
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
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006969a4",
      "incomplete_value": false,
      "site": "006969b4",
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
      "definition_site": "0069694c",
      "incomplete_value": false,
      "site": "0069695c",
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
      "unmatched:006967dc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0069683c"
      ]
    ],
    [
      "0069683c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:006967ec",
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
      "00696834",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0069683c"
      ]
    ],
    [
      "0069683c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00696844",
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
- 006967fc ["INT_ADD", "register:40f0:8", ["const:6967fc:8", "const:4:8"]]
- 006967fc ["CALL", null, ["callee:00c586e0:8"]]
+ 00696854 ["INT_ADD", "register:40f0:8", ["const:696854:8", "const:4:8"]]
+ 00696854 ["CALL", null, ["callee:00c586e0:8"]]
- 00696904 ["INT_ADD", "register:40f0:8", ["const:696904:8", "const:4:8"]]
- 00696904 ["CALL", null, ["callee:00851550:8"]]
+ 0069695c ["INT_ADD", "register:40f0:8", ["const:69695c:8", "const:4:8"]]
+ 0069695c ["CALL", null, ["callee:00851550:8"]]
- 0069695c ["INT_ADD", "register:40f0:8", ["const:69695c:8", "const:4:8"]]
- 0069695c ["CALL", null, ["callee:00c586e0:8"]]
+ 006969b4 ["INT_ADD", "register:40f0:8", ["const:6969b4:8", "const:4:8"]]
+ 006969b4 ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-7bcdf27f84041e2b4d3ef10f9ed01d22"></a>

### [`00696dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696dcc.md) → [`00696e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e24.md) FUN_00696e24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00696df0",
      "DATA",
      [
        "storage",
        "00c75280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696e48",
      "DATA",
      [
        "storage",
        "00c75350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696de0 ["INT_ADD", "register:40f0:8", ["const:696de0:8", "const:4:8"]]
- 00696de0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00696e38 ["INT_ADD", "register:40f0:8", ["const:696e38:8", "const:4:8"]]
+ 00696e38 ["CALL", null, ["callee:00c57f60:8"]]
- 00696dec ["COPY", "tmp:0:8", ["const:280:8"]]
- 00696dec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696dec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696dec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00696df0 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00696df0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-97a9a665db8be41968c02e7193dc76dd"></a>

### [`00696e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696e04.md) → [`00696e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e5c.md) FUN_00696e5c

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
      "definition_site": "00696e60",
      "incomplete_value": false,
      "site": "00696e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696e08",
      "incomplete_value": false,
      "site": "00696e0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
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
      "00696e64",
      "DATA",
      [
        "storage",
        "00c75280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00696e64",
      "DATA",
      [
        "storage",
        "00c75350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696e08 ["COPY", "tmp:0:8", ["const:280:8"]]
- 00696e08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00696e08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00696e08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00696e60 ["COPY", "tmp:0:8", ["const:350:8"]]
+ 00696e60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00696e60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00696e60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2c5231903388f3582ca7e9246839b8dc"></a>

### [`00696e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696e24.md) → [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) FUN_00696e7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068ed80.md) [`006906e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00690/006906e8.md) [`00697168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697168.md)
- 新版 呼出元 0件  · 呼出先 16件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) [`00690740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00690/00690740.md) [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md)

変更の種類 call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.27% / 新版 89.27%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_value` 3件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0069700c",
      "incomplete_value": false,
      "site": "00697014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:e26:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696fb4",
      "incomplete_value": false,
      "site": "00696fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:df7:8"
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
      "definition_site": "00697034",
      "incomplete_value": false,
      "site": "00697040",
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
            "const:eb5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00696fdc",
      "incomplete_value": false,
      "site": "00696fe8",
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
            "const:f11:8"
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
      "definition_site": "0069705c",
      "incomplete_value": false,
      "site": "00697068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:eb9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697004",
      "incomplete_value": false,
      "site": "00697010",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2be000:8"
          ],
          [
            "leaf",
            "const:f0d:8"
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
      "unmatched:00696e44",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00696e58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00696ef8"
      ]
    ],
    [
      "unmatched:00696e60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00696ef8"
      ]
    ]
  ],
  "added": [
    [
      "00696e9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00696eb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00696ef8"
      ]
    ],
    [
      "00696eb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00696ef8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00696e84 ["INT_ADD", "register:40f0:8", ["const:696e84:8", "const:4:8"]]
- 00696e84 ["CALL", null, ["ram:47acf4:8"]]
+ 00696edc ["INT_ADD", "register:40f0:8", ["const:696edc:8", "const:4:8"]]
+ 00696edc ["CALL", null, ["ram:47ad34:8"]]
- 00696ed0 ["INT_ADD", "register:40f0:8", ["const:696ed0:8", "const:4:8"]]
- 00696ed0 ["CALL", null, ["callee:00851550:8"]]
+ 00696f28 ["INT_ADD", "register:40f0:8", ["const:696f28:8", "const:4:8"]]
+ 00696f28 ["CALL", null, ["callee:00851550:8"]]
- 00696edc ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00696edc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00696edc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00696edc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-39f1889c8a1f286f2f27dae0205a60cb"></a>

### [`00697168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697168.md) → [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md) FUN_006971c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`00696e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696e24.md) [`0071d1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d1fc.md) [`00720090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00720/00720090.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) · 呼出先 5件 [`00697290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697290.md) [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md) [`00b3bf20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3bf20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 5件 [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) [`0071d254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d254.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 5件 [`006972e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006972e8.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md) [`00b3bfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bfbc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00697238",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006972e4"
      ]
    ]
  ],
  "added": [
    [
      "00697290",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006972e4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069719c ["INT_ADD", "register:40f0:8", ["const:69719c:8", "const:4:8"]]
- 0069719c ["CALL", null, ["callee:00b3bf30:8"]]
+ 006971f4 ["INT_ADD", "register:40f0:8", ["const:6971f4:8", "const:4:8"]]
+ 006971f4 ["CALL", null, ["callee:00b3bf30:8"]]
- 006971b8 ["INT_ADD", "register:40f0:8", ["const:6971b8:8", "const:4:8"]]
- 006971b8 ["CALL", null, ["callee:00b3bfbc:8"]]
+ 00697210 ["INT_ADD", "register:40f0:8", ["const:697210:8", "const:4:8"]]
+ 00697210 ["CALL", null, ["callee:00b3bfbc:8"]]
- 00697204 ["INT_ADD", "register:40f0:8", ["const:697204:8", "const:4:8"]]
- 00697204 ["CALL", null, ["callee:006972e8:8"]]
+ 0069725c ["INT_ADD", "register:40f0:8", ["const:69725c:8", "const:4:8"]]
+ 0069725c ["CALL", null, ["callee:006972e8:8"]]
~~~


<a id="compare-1f938db3f144d88f0a7fff6434d54dc5"></a>

### [`00697290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697290.md) → [`006972e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006972e8.md) FUN_006972e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00697168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697168.md) [`0071e394`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e394.md) [`0071e5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e5c0.md) [`0071e834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e834.md) · 呼出先 6件 [`00767148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00767/00767148.md) [`00767cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00767/00767cb4.md) [`007696b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/007696b4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 4件 [`006971c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006971c0.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`0071e618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e618.md) [`0071e88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e88c.md) · 呼出先 6件 [`007671a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/007671a0.md) [`00767d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/00767d0c.md) [`0076970c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/0076970c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.94% / 新版 91.94%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006972c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:006972c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007696b4"
      ]
    ]
  ],
  "added": [
    [
      "00697318",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0069731c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076970c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006972b4 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 006972b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006972b8 ["COPY", "register:40a8:8", ["register:4008:8"]]
- 006972bc ["COPY", "register:40b0:8", ["register:4000:8"]]
~~~


<a id="compare-1fe93b65c3e98fcc826a12fd6481392f"></a>

### [`006973b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006973b4.md) → [`0069740c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/0069740c.md) FUN_0069740c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006973d8",
      "DATA",
      [
        "storage",
        "00c75300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697430",
      "DATA",
      [
        "storage",
        "00c753d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006973c8 ["INT_ADD", "register:40f0:8", ["const:6973c8:8", "const:4:8"]]
- 006973c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00697420 ["INT_ADD", "register:40f0:8", ["const:697420:8", "const:4:8"]]
+ 00697420 ["CALL", null, ["callee:00c57f60:8"]]
- 006973d4 ["COPY", "tmp:0:8", ["const:300:8"]]
- 006973d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006973d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006973d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006973d8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006973d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-c5c1869c720826308421d519e97ceea5"></a>

### [`006973ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006973ec.md) → [`00697444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697444.md) FUN_00697444

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
      "unmatched:006973f4",
      "DATA",
      [
        "storage",
        "00c75300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069744c",
      "DATA",
      [
        "storage",
        "00c753d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006973ec ["COPY", "register:4040:8", ["const:c75000:8"]]
- 006973f0 ["COPY", "tmp:0:8", ["const:300:8"]]
- 006973f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006973f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006973f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006973f4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006973f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-15efb7084143be24bce75debb34faf08"></a>

### [`0069740c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/0069740c.md) → [`00697464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697464.md) FUN_00697464

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f48.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_target, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069749c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00697444",
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
      "site": "006974b4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069745c",
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
      "0069749c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006974b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0069749c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006974b4",
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
- 00697444 ["INT_ADD", "register:40f0:8", ["const:697444:8", "const:4:8"]]
- 00697444 ["CALL", null, ["ram:47acf4:8"]]
+ 0069749c ["INT_ADD", "register:40f0:8", ["const:69749c:8", "const:4:8"]]
+ 0069749c ["CALL", null, ["ram:47ad34:8"]]
- 0069745c ["INT_ADD", "register:40f0:8", ["const:69745c:8", "const:4:8"]]
- 0069745c ["CALL", null, ["ram:47acf4:8"]]
+ 006974b4 ["INT_ADD", "register:40f0:8", ["const:6974b4:8", "const:4:8"]]
+ 006974b4 ["CALL", null, ["ram:47ad34:8"]]
- 00697428 ["INT_ADD", "register:40f0:8", ["const:697428:8", "const:4:8"]]
- 00697428 ["CALL", null, ["callee:008b6fa0:8"]]
+ 00697480 ["INT_ADD", "register:40f0:8", ["const:697480:8", "const:4:8"]]
+ 00697480 ["CALL", null, ["callee:008b6fa0:8"]]
~~~


<a id="compare-706b35a9cba23ae210ef71011531a3f6"></a>

### [`006974b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006974b0.md) → [`00697508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697508.md) FUN_00697508

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
      "definition_site": "00697528",
      "incomplete_value": false,
      "site": "0069752c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006974d0",
      "incomplete_value": false,
      "site": "006974d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:380:8"
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
      "0069752c",
      "DATA",
      [
        "storage",
        "00c75380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069752c",
      "DATA",
      [
        "storage",
        "00c75450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006974c4 ["INT_ADD", "register:40f0:8", ["const:6974c4:8", "const:4:8"]]
- 006974c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0069751c ["INT_ADD", "register:40f0:8", ["const:69751c:8", "const:4:8"]]
+ 0069751c ["CALL", null, ["callee:00c57f60:8"]]
- 006974d0 ["COPY", "tmp:0:8", ["const:380:8"]]
- 006974d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006974d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006974d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697528 ["COPY", "tmp:0:8", ["const:450:8"]]
+ 00697528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7f427d8beee25149b2bc1d63180df458"></a>

### [`006974e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006974e8.md) → [`00697540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697540.md) FUN_00697540

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
      "definition_site": "00697544",
      "incomplete_value": false,
      "site": "00697548",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006974ec",
      "incomplete_value": false,
      "site": "006974f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:380:8"
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
      "00697548",
      "DATA",
      [
        "storage",
        "00c75380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697548",
      "DATA",
      [
        "storage",
        "00c75450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006974ec ["COPY", "tmp:0:8", ["const:380:8"]]
- 006974ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006974ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006974ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697544 ["COPY", "tmp:0:8", ["const:450:8"]]
+ 00697544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-356164ea8d93016c59012fda3edd933f"></a>

### [`00697508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697508.md) → [`00697560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697560.md) FUN_00697560

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f48.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00697598",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00697540",
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
      "site": "006975a4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069754c",
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
      "00697598",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006975a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00697598",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006975a4",
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
- 00697540 ["INT_ADD", "register:40f0:8", ["const:697540:8", "const:4:8"]]
- 00697540 ["CALL", null, ["ram:47acf4:8"]]
+ 00697598 ["INT_ADD", "register:40f0:8", ["const:697598:8", "const:4:8"]]
+ 00697598 ["CALL", null, ["ram:47ad34:8"]]
- 0069754c ["INT_ADD", "register:40f0:8", ["const:69754c:8", "const:4:8"]]
- 0069754c ["CALL", null, ["ram:47acf4:8"]]
+ 006975a4 ["INT_ADD", "register:40f0:8", ["const:6975a4:8", "const:4:8"]]
+ 006975a4 ["CALL", null, ["ram:47ad34:8"]]
- 00697524 ["INT_ADD", "register:40f0:8", ["const:697524:8", "const:4:8"]]
- 00697524 ["CALL", null, ["callee:008b6fa0:8"]]
+ 0069757c ["INT_ADD", "register:40f0:8", ["const:69757c:8", "const:4:8"]]
+ 0069757c ["CALL", null, ["callee:008b6fa0:8"]]
~~~


<a id="compare-b349f7e2a7403347d855ff6afdeebff1"></a>

### [`006975a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006975a8.md) → [`00697600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697600.md) FUN_00697600

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
      "definition_site": "0069760c",
      "incomplete_value": false,
      "site": "00697610",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006975b4",
      "incomplete_value": false,
      "site": "006975b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:400:8"
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
      "00697610",
      "DATA",
      [
        "storage",
        "00c75400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697610",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006975b4 ["COPY", "tmp:0:8", ["const:400:8"]]
- 006975b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006975b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006975b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0069760c ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 0069760c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0069760c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0069760c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-672a7ba596877006720a9ff1a6f6c84e"></a>

### [`006975cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006975cc.md) → [`00697624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697624.md) FUN_00697624

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
      "definition_site": "0069762c",
      "incomplete_value": false,
      "site": "00697630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006975d4",
      "incomplete_value": false,
      "site": "006975d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:400:8"
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
      "00697630",
      "DATA",
      [
        "storage",
        "00c75400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697630",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006975d4 ["COPY", "tmp:0:8", ["const:400:8"]]
- 006975d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006975d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006975d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0069762c ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 0069762c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0069762c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0069762c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006975f8 ["INT_ADD", "register:40f0:8", ["const:6975f8:8", "const:4:8"]]
- 006975f8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00697650 ["INT_ADD", "register:40f0:8", ["const:697650:8", "const:4:8"]]
+ 00697650 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-63524ad525687e165db2c8bd51db55ac"></a>

### [`0069760c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/0069760c.md) → [`00697664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697664.md) FUN_00697664

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00697684",
      "incomplete_value": false,
      "site": "0069768c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069762c",
      "incomplete_value": false,
      "site": "00697634",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:400:8"
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
      "0069768c",
      "DATA",
      [
        "storage",
        "00c75400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0069768c",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697624 ["INT_ADD", "register:40f0:8", ["const:697624:8", "const:4:8"]]
- 00697624 ["CALL", null, ["callee:00c57f60:8"]]
+ 0069767c ["INT_ADD", "register:40f0:8", ["const:69767c:8", "const:4:8"]]
+ 0069767c ["CALL", null, ["callee:00c57f60:8"]]
- 0069762c ["COPY", "tmp:0:8", ["const:400:8"]]
- 0069762c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069762c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069762c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697684 ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 00697684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00697660 ["INT_ADD", "register:40f0:8", ["const:697660:8", "const:4:8"]]
- 00697660 ["CALL", null, ["callee:00c57f60:8"]]
+ 006976b8 ["INT_ADD", "register:40f0:8", ["const:6976b8:8", "const:4:8"]]
+ 006976b8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-a9eb8a4bc8840cc2ead5dab9d22d6111"></a>

### [`006976c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006976c4.md) → [`0069771c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/0069771c.md) FUN_0069771c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00697730",
      "incomplete_value": false,
      "site": "00697738",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006976d8",
      "incomplete_value": false,
      "site": "006976e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:400:8"
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
      "00697738",
      "DATA",
      [
        "storage",
        "00c75400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697738",
      "DATA",
      [
        "storage",
        "00c754d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006976d8 ["COPY", "tmp:0:8", ["const:400:8"]]
- 006976d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006976d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006976d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697730 ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 00697730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0069770c ["INT_ADD", "register:40f0:8", ["const:69770c:8", "const:4:8"]]
- 0069770c ["CALL", null, ["callee:00c57f60:8"]]
+ 00697764 ["INT_ADD", "register:40f0:8", ["const:697764:8", "const:4:8"]]
+ 00697764 ["CALL", null, ["callee:00c57f60:8"]]
- 00697724 ["INT_ADD", "register:40f0:8", ["const:697724:8", "const:4:8"]]
- 00697724 ["CALL", null, ["callee:00c580d0:8"]]
+ 0069777c ["INT_ADD", "register:40f0:8", ["const:69777c:8", "const:4:8"]]
+ 0069777c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-672b9d890d805ab1f30c9e75d9bfe018"></a>

### [`0069777c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/0069777c.md) → [`006977d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/006977d4.md) FUN_006977d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0068f5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068f/0068f5d8.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00697780 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00697780 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 006977d8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006977d8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0069779c ["INT_ADD", "register:40f0:8", ["const:69779c:8", "const:4:8"]]
- 0069779c ["CALL", null, ["callee:00c57f80:8"]]
+ 006977f4 ["INT_ADD", "register:40f0:8", ["const:6977f4:8", "const:4:8"]]
+ 006977f4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-3c4c574a514718edd339a81f66f7216d"></a>

### [`006977b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/006977b0.md) → [`00697808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697808.md) FUN_00697808

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 24件 [`00684fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684fb0.md) [`00685374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685374.md) [`00691e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691e2c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2a4.md)
- 新版 呼出元 0件  · 呼出先 24件 [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md) [`006853b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006853b4.md) [`00691e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691e84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.94% / 新版 85.94%

優先判定に残った影響 `call_argument_candidate` 19件, `store_condition` 10件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006977fc",
      "incomplete_value": true,
      "site": "00697810",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:2f38:8"
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
      "definition_site": "00697800",
      "incomplete_value": false,
      "site": "00697810",
      "value": [
        "leaf",
        "const:38b:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069786c",
      "incomplete_value": false,
      "site": "00697874",
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
    "old": null,
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
      "unmatched:006977b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006977b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006977bc",
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
      "0069780c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00697810",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00697814",
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
- 00697810 ["INT_ADD", "register:40f0:8", ["const:697810:8", "const:4:8"]]
- 00697810 ["CALL", null, ["callee:008b7a20:8"]]
+ 00697868 ["INT_ADD", "register:40f0:8", ["const:697868:8", "const:4:8"]]
+ 00697868 ["CALL", null, ["callee:008b7a20:8"]]
+ 00697810 ["COPY", "tmp:0:8", ["register:40e0:8"]]
+ 00697810 ["COPY", "tmp:1:8", ["register:40d8:8"]]
+ 00697810 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:d0:8"]]
+ 00697810 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0069781c ["INT_ADD", "register:40f0:8", ["const:69781c:8", "const:4:8"]]
- 0069781c ["CALL", null, ["callee:008b6ab4:8"]]
+ 00697874 ["INT_ADD", "register:40f0:8", ["const:697874:8", "const:4:8"]]
+ 00697874 ["CALL", null, ["callee:008b6ab4:8"]]
~~~


<a id="compare-319cf5fc2ec729b48038ada7a89ad1cf"></a>

### [`00697dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697dbc.md) → [`00697e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697e14.md) FUN_00697e14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 44.44% / 新版 44.44%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00697dcc",
      "DATA",
      [
        "storage",
        "00c75480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697e24",
      "DATA",
      [
        "storage",
        "00c75550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697dbc ["COPY", "register:4040:8", ["register:4000:8"]]
- 00697dc0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 00697dc0 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00697dc4 ["COPY", "register:4048:8", ["const:c75000:8"]]
~~~


<a id="compare-95a189e4a822929cfe95654690b6f783"></a>

### [`00697de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697de0.md) → [`00697e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697e38.md) FUN_00697e38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00697dec",
      "DATA",
      [
        "storage",
        "00c75480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697e44",
      "DATA",
      [
        "storage",
        "00c75550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697de0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 00697de0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00697de4 ["COPY", "register:4048:8", ["const:c75000:8"]]
- 00697de8 ["COPY", "tmp:0:8", ["const:480:8"]]
- 00697de8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00697de8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00697de8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3d7790fe79dcf9b85c06236e667dac84"></a>

### [`00697e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697e20.md) → [`00697e78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697e78.md) FUN_00697e78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00697e98",
      "incomplete_value": false,
      "site": "00697ea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00697e40",
      "incomplete_value": false,
      "site": "00697e48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "00697ea0",
      "DATA",
      [
        "storage",
        "00c75480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00697ea0",
      "DATA",
      [
        "storage",
        "00c75550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00697e38 ["INT_ADD", "register:40f0:8", ["const:697e38:8", "const:4:8"]]
- 00697e38 ["CALL", null, ["callee:00c57f60:8"]]
+ 00697e90 ["INT_ADD", "register:40f0:8", ["const:697e90:8", "const:4:8"]]
+ 00697e90 ["CALL", null, ["callee:00c57f60:8"]]
- 00697e40 ["COPY", "tmp:0:8", ["const:480:8"]]
- 00697e40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00697e40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00697e40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00697e98 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 00697e98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00697e98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00697e98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00697e7c ["INT_ADD", "register:40f0:8", ["const:697e7c:8", "const:4:8"]]
- 00697e7c ["CALL", null, ["callee:00c57f60:8"]]
+ 00697ed4 ["INT_ADD", "register:40f0:8", ["const:697ed4:8", "const:4:8"]]
+ 00697ed4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d2342cd5919c047eaa338ac6d394cb10"></a>

### [`00697ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697ee0.md) → [`00697f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697f38.md) FUN_00697f38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`006924c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/006924c4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0069251c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/0069251c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.90% / 新版 61.90%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00697f38",
      "incomplete_value": true,
      "site": "00697f48",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00697f3c",
      "incomplete_value": true,
      "site": "00697f48",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00697fcc",
      "incomplete_value": true,
      "site": "00697fd4",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": null,
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
      "unmatched:00697ee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00697ee4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00697ee8",
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
      "00697f38",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00697f3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00697f40",
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
- 00697f48 ["INT_ADD", "register:40f0:8", ["const:697f48:8", "const:4:8"]]
- 00697f48 ["CALL", null, ["callee:00c580d0:8"]]
+ 00697fa0 ["INT_ADD", "register:40f0:8", ["const:697fa0:8", "const:4:8"]]
+ 00697fa0 ["CALL", null, ["callee:00c580d0:8"]]
+ 00697f48 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00697f7c ["INT_ADD", "register:40f0:8", ["const:697f7c:8", "const:4:8"]]
- 00697f7c ["CALL", null, ["callee:00c57f80:8"]]
+ 00697fd4 ["INT_ADD", "register:40f0:8", ["const:697fd4:8", "const:4:8"]]
+ 00697fd4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-28b912545afabe2e5fe21d81a4f6d4e5"></a>

### [`00697f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697f88.md) → [`00697fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00697/00697fe0.md) FUN_00697fe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00697f90 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00697f90 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00697fe8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00697fe8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-293e04ba4f693ef155e23403f91fe3eb"></a>

### [`00697fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697fd4.md) → [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) FUN_0069802c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 28件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 0件  · 呼出先 28件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.22% / 新版 86.22%

優先判定に残った影響 `call_argument_candidate` 33件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069806c",
      "incomplete_value": true,
      "site": "00698070",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": {
      "definition_site": "00698014",
      "incomplete_value": true,
      "site": "00698018",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006980bc",
      "incomplete_value": true,
      "site": "006980d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006980c4",
      "incomplete_value": false,
      "site": "006980d8",
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
      "definition_site": "0069806c",
      "incomplete_value": false,
      "site": "00698080",
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
      "unmatched:00698048",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:0069804c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00698054",
      "PARAM",
      [
        "storage",
        "00c74fd8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006980a0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006980a4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006980ac",
      "PARAM",
      [
        "storage",
        "00c750a8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698018 ["INT_ADD", "register:40f0:8", ["const:698018:8", "const:4:8"]]
- 00698018 ["CALL", null, ["callee:008b92e8:8"]]
+ 00698070 ["INT_ADD", "register:40f0:8", ["const:698070:8", "const:4:8"]]
+ 00698070 ["CALL", null, ["callee:008b92e8:8"]]
- 00698070 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 00698070 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00698070 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00698070 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00698080 ["INT_ADD", "register:40f0:8", ["const:698080:8", "const:4:8"]]
- 00698080 ["CALL", null, ["callee:00695c04:8"]]
+ 006980d8 ["INT_ADD", "register:40f0:8", ["const:6980d8:8", "const:4:8"]]
+ 006980d8 ["CALL", null, ["callee:00695c04:8"]]
~~~


<a id="compare-afd68a07651c3e778c07fe1206fc6b61"></a>

### [`00698730`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698730.md) → [`00698788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698788.md) FUN_00698788

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
      "definition_site": "006987a8",
      "incomplete_value": false,
      "site": "006987ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698750",
      "incomplete_value": false,
      "site": "00698754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:500:8"
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
      "006987ac",
      "DATA",
      [
        "storage",
        "00c75500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006987ac",
      "DATA",
      [
        "storage",
        "00c755d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698744 ["INT_ADD", "register:40f0:8", ["const:698744:8", "const:4:8"]]
- 00698744 ["CALL", null, ["callee:00c57f60:8"]]
+ 0069879c ["INT_ADD", "register:40f0:8", ["const:69879c:8", "const:4:8"]]
+ 0069879c ["CALL", null, ["callee:00c57f60:8"]]
- 00698750 ["COPY", "tmp:0:8", ["const:500:8"]]
- 00698750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006987a8 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 006987a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006987a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006987a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-376b4b0393d07a43a0f57d43c02b03e1"></a>

### [`00698768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698768.md) → [`006987c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006987c0.md) FUN_006987c0

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
      "definition_site": "006987c4",
      "incomplete_value": false,
      "site": "006987c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069876c",
      "incomplete_value": false,
      "site": "00698770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:500:8"
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
      "006987c8",
      "DATA",
      [
        "storage",
        "00c75500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006987c8",
      "DATA",
      [
        "storage",
        "00c755d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069876c ["COPY", "tmp:0:8", ["const:500:8"]]
- 0069876c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069876c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069876c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006987c4 ["COPY", "tmp:0:8", ["const:5d0:8"]]
+ 006987c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006987c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006987c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8bfa389d24268698d4543f31e5b5045"></a>

### [`00698788`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698788.md) → [`006987e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006987e0.md) FUN_006987e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068f5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068f/0068f5d8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00698810",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006987b8",
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
      "00698810",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00698810",
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
- 006987b8 ["INT_ADD", "register:40f0:8", ["const:6987b8:8", "const:4:8"]]
- 006987b8 ["CALL", null, ["ram:47acf4:8"]]
+ 00698810 ["INT_ADD", "register:40f0:8", ["const:698810:8", "const:4:8"]]
+ 00698810 ["CALL", null, ["ram:47ad34:8"]]
- 006987b4 ["INT_ADD", "register:40f0:8", ["const:6987b4:8", "const:4:8"]]
- 006987b4 ["CALL", null, ["callee:008b91d0:8"]]
+ 0069880c ["INT_ADD", "register:40f0:8", ["const:69880c:8", "const:4:8"]]
+ 0069880c ["CALL", null, ["callee:008b91d0:8"]]
- 006987d8 ["INT_ADD", "register:40f0:8", ["const:6987d8:8", "const:4:8"]]
- 006987d8 ["CALL", null, ["callee:00851550:8"]]
+ 00698830 ["INT_ADD", "register:40f0:8", ["const:698830:8", "const:4:8"]]
+ 00698830 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-26577b338b97c4c27d0ed71e7655f234"></a>

### [`0069884c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/0069884c.md) → [`006988a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006988a4.md) FUN_006988a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698870",
      "DATA",
      [
        "storage",
        "00c75580",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00698878",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069887c",
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
      "006988c8",
      "DATA",
      [
        "storage",
        "00c75650",
        null,
        "undefined *"
      ]
    ],
    [
      "006988d0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006988d4",
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
- 00698860 ["INT_ADD", "register:40f0:8", ["const:698860:8", "const:4:8"]]
- 00698860 ["CALL", null, ["callee:00c57f60:8"]]
+ 006988b8 ["INT_ADD", "register:40f0:8", ["const:6988b8:8", "const:4:8"]]
+ 006988b8 ["CALL", null, ["callee:00c57f60:8"]]
- 0069886c ["COPY", "tmp:0:8", ["const:580:8"]]
- 0069886c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069886c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069886c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00698870 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00698870 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a1054fd912889d312ce4654fe212d62a"></a>

### [`00698884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698884.md) → [`006988dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006988dc.md) FUN_006988dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006988e0",
      "incomplete_value": true,
      "site": "006988e4",
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
            "const:650:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698888",
      "incomplete_value": true,
      "site": "0069888c",
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
            "const:580:8"
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
      "006988e4",
      "DATA",
      [
        "storage",
        "00c75580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006988e4",
      "DATA",
      [
        "storage",
        "00c75650",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698888 ["COPY", "tmp:0:8", ["const:580:8"]]
- 00698888 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698888 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698888 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006988e0 ["COPY", "tmp:0:8", ["const:650:8"]]
+ 006988e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006988e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006988e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7b5ab1ad559b5311db70c155925e00e0"></a>

### [`006988a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/006988a4.md) → [`006988fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006988fc.md) FUN_006988fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f48.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006988a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006988a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0069892c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006988f4"
      ]
    ]
  ],
  "added": [
    [
      "006988fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00698900",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0069892c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069894c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006988a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006988a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006988a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006988a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006988a8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006988a8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006988a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 006988a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006988ac ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-bc97fb2dd425a4bdb55a1988924c11e2"></a>

### [`00698948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698948.md) → [`006989a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989a0.md) FUN_006989a0

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
      "unmatched:00698948",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069894c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069896c",
      "DATA",
      [
        "storage",
        "00c75600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006989a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006989a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006989c4",
      "DATA",
      [
        "storage",
        "00c756d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698948 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00698948 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00698948 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00698948 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0069894c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0069894c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00698950 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-6051ad097a3fd35bb1231d99e8be1b4f"></a>

### [`0069897c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/0069897c.md) → [`006989d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989d4.md) FUN_006989d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 20.00% / 新版 20.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698988",
      "DATA",
      [
        "storage",
        "00c75600",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006989e0",
      "DATA",
      [
        "storage",
        "00c756d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698980 ["COPY", "register:4048:8", ["const:c75000:8"]]
- 00698984 ["COPY", "tmp:0:8", ["const:600:8"]]
- 00698984 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00698984 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00698984 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00698988 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00698988 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 00698988 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 00698988 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-3460f726f2ac5ae467a5ff781f9103ad"></a>

### [`00698998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698998.md) → [`006989f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/006989f0.md) FUN_006989f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 68.42% / 新版 68.42%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006989ac",
      "incomplete_value": true,
      "site": "006989b0",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:00698998",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069899c",
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
      "006989f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006989f4",
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
- 006989b0 ["INT_ADD", "register:40f0:8", ["const:6989b0:8", "const:4:8"]]
- 006989b0 ["CALL", null, ["callee:008b92e8:8"]]
+ 00698a08 ["INT_ADD", "register:40f0:8", ["const:698a08:8", "const:4:8"]]
+ 00698a08 ["CALL", null, ["callee:008b92e8:8"]]
- 00698998 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00698998 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00698998 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00698998 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0069899c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0069899c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-a51d314402f446fa9f8e78e03a1196ea"></a>

### [`00698a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698a10.md) → [`00698a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698a68.md) FUN_00698a68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698a78",
      "incomplete_value": false,
      "site": "00698a7c",
      "value": [
        "leaf",
        "const:20:8"
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
      "unmatched:00698a10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00698a14",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00698a38",
      "DATA",
      [
        "storage",
        "00c75680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698a68",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00698a6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00698a90",
      "DATA",
      [
        "storage",
        "00c75750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698a24 ["INT_ADD", "register:40f0:8", ["const:698a24:8", "const:4:8"]]
- 00698a24 ["CALL", null, ["callee:00c57f60:8"]]
+ 00698a7c ["INT_ADD", "register:40f0:8", ["const:698a7c:8", "const:4:8"]]
+ 00698a7c ["CALL", null, ["callee:00c57f60:8"]]
- 00698a10 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00698a10 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00698a10 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00698a10 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00698a14 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00698a14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-e31a9b6909c91075d8fd24d729981ead"></a>

### [`00698a50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698a50.md) → [`00698aa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698aa8.md) FUN_00698aa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698a58",
      "DATA",
      [
        "storage",
        "00c75680",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698ab0",
      "DATA",
      [
        "storage",
        "00c75750",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698a50 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00698a54 ["COPY", "tmp:0:8", ["const:680:8"]]
- 00698a54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698a54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698a54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00698a58 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00698a58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-7c2657c75c4cf1a0d9ead0ac11935eca"></a>

### [`00698a78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698a78.md) → [`00698ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698ad0.md) FUN_00698ad0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md)
- 新版 呼出元 0件  · 呼出先 16件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 15件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00698b34",
      "incomplete_value": true,
      "site": "00698b34",
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
      "definition_site": "00698adc",
      "incomplete_value": true,
      "site": "00698adc",
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
      "definition_site": "00698b3c",
      "incomplete_value": false,
      "site": "00698b4c",
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
      "definition_site": "00698ae4",
      "incomplete_value": false,
      "site": "00698af4",
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
      "definition_site": "00698b44",
      "incomplete_value": false,
      "site": "00698b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698aec",
      "incomplete_value": false,
      "site": "00698af4",
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
            "const:fd8:8"
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
      "unmatched:00698a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00698a80",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00698a84",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00698ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00698ad8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00698adc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00698adc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00698adc ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00698b34 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00698b34 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00698adc ["COPY", "tmp:0:8", ["register:40e0:8"]]
+ 00698adc ["COPY", "tmp:1:8", ["register:40d8:8"]]
+ 00698adc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
+ 00698adc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00698af4 ["INT_ADD", "register:40f0:8", ["const:698af4:8", "const:4:8"]]
- 00698af4 ["CALL", null, ["callee:00c586e0:8"]]
+ 00698b4c ["INT_ADD", "register:40f0:8", ["const:698b4c:8", "const:4:8"]]
+ 00698b4c ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-17cebc83a72588de7a3625eabe307db7"></a>

### [`00698d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698d7c.md) → [`00698dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698dd4.md) FUN_00698dd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00698da0",
      "DATA",
      [
        "storage",
        "00c75700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698df8",
      "DATA",
      [
        "storage",
        "00c757d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698d90 ["INT_ADD", "register:40f0:8", ["const:698d90:8", "const:4:8"]]
- 00698d90 ["CALL", null, ["callee:00c57f60:8"]]
+ 00698de8 ["INT_ADD", "register:40f0:8", ["const:698de8:8", "const:4:8"]]
+ 00698de8 ["CALL", null, ["callee:00c57f60:8"]]
- 00698d9c ["COPY", "tmp:0:8", ["const:700:8"]]
- 00698d9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698d9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698d9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00698da0 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00698da0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a327fa9b15ef88bff8e4b10880e23e16"></a>

### [`00698db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698db4.md) → [`00698e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698e0c.md) FUN_00698e0c

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
      "unmatched:00698dbc",
      "DATA",
      [
        "storage",
        "00c75700",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698e14",
      "DATA",
      [
        "storage",
        "00c757d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698db4 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00698db8 ["COPY", "tmp:0:8", ["const:700:8"]]
- 00698db8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698db8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698db8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00698dbc ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00698dbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-d8462aa91a3e571feffd6510e57e8ca0"></a>

### [`00698dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698dd4.md) → [`00698e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698e2c.md) FUN_00698e2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00688294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688294.md) [`0068974c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/0068974c.md) [`0068ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068ed80.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006882d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006882d4.md) [`0068978c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/0068978c.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md)

変更の種類 call, call_argument_candidate, call_count, call_target, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.19% / 新版 92.19%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00698e60",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00698e08",
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
      "site": "00698eec",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00698e94",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "bounded",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": false,
      "site": "00698efc",
      "value": [
        "leaf",
        "callee:0071d254:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": false,
      "site": "00698ebc",
      "value": [
        "leaf",
        "callee:00a1a6f8:8"
      ]
    },
    "ordinal": 9,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00698e60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00698eec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "unmatched:00698ea4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0071d254"
      ]
    ]
  ],
  "added": [
    [
      "00698e60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00698eec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "00698efc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0071d254"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698e08 ["INT_ADD", "register:40f0:8", ["const:698e08:8", "const:4:8"]]
- 00698e08 ["CALL", null, ["ram:47acf4:8"]]
+ 00698e60 ["INT_ADD", "register:40f0:8", ["const:698e60:8", "const:4:8"]]
+ 00698e60 ["CALL", null, ["ram:47ad34:8"]]
- 00698e94 ["INT_ADD", "register:40f0:8", ["const:698e94:8", "const:4:8"]]
- 00698e94 ["CALL", null, ["ram:71bed8:8"]]
+ 00698eec ["INT_ADD", "register:40f0:8", ["const:698eec:8", "const:4:8"]]
+ 00698eec ["CALL", null, ["ram:71bf30:8"]]
- 00698ebc ["INT_ADD", "register:40f0:8", ["const:698ebc:8", "const:4:8"]]
- 00698ebc ["CALL", null, ["callee:00a1a6f8:8"]]
+ 00698efc ["INT_ADD", "register:40f0:8", ["const:698efc:8", "const:4:8"]]
+ 00698efc ["CALL", null, ["callee:0071d254:8"]]
~~~


<a id="compare-535b74dd8cbbe970392b902e38532d61"></a>

### [`00698f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698f00.md) → [`00698f58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698f58.md) FUN_00698f58

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
      "definition_site": "00698f78",
      "incomplete_value": false,
      "site": "00698f7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698f20",
      "incomplete_value": false,
      "site": "00698f24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:780:8"
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
      "00698f7c",
      "DATA",
      [
        "storage",
        "00c75780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698f7c",
      "DATA",
      [
        "storage",
        "00c75850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698f14 ["INT_ADD", "register:40f0:8", ["const:698f14:8", "const:4:8"]]
- 00698f14 ["CALL", null, ["callee:00c57f60:8"]]
+ 00698f6c ["INT_ADD", "register:40f0:8", ["const:698f6c:8", "const:4:8"]]
+ 00698f6c ["CALL", null, ["callee:00c57f60:8"]]
- 00698f20 ["COPY", "tmp:0:8", ["const:780:8"]]
- 00698f20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698f20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698f20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00698f78 ["COPY", "tmp:0:8", ["const:850:8"]]
+ 00698f78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00698f78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00698f78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5090a5af36ee01fcee293a3daeea38e0"></a>

### [`00698f38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698f38.md) → [`00698f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698f90.md) FUN_00698f90

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
      "definition_site": "00698f94",
      "incomplete_value": false,
      "site": "00698f98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00698f3c",
      "incomplete_value": false,
      "site": "00698f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:780:8"
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
      "00698f98",
      "DATA",
      [
        "storage",
        "00c75780",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00698f98",
      "DATA",
      [
        "storage",
        "00c75850",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698f3c ["COPY", "tmp:0:8", ["const:780:8"]]
- 00698f3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00698f3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00698f3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00698f94 ["COPY", "tmp:0:8", ["const:850:8"]]
+ 00698f94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00698f94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00698f94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d3577fdd995a94b78434d6f1cbf4d9e9"></a>

### [`00698f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698f58.md) → [`00698fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/00698fb0.md) FUN_00698fb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f48.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00698fc8",
      "incomplete_value": true,
      "site": "00698fcc",
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
    "old": {
      "definition_site": "00698f70",
      "incomplete_value": true,
      "site": "00698f74",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:00698f58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00698f5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00698fe0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00698fa8"
      ]
    ]
  ],
  "added": [
    [
      "00698fb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00698fb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00698fe0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00699000"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698f74 ["INT_ADD", "register:40f0:8", ["const:698f74:8", "const:4:8"]]
- 00698f74 ["CALL", null, ["callee:008b6fa0:8"]]
+ 00698fcc ["INT_ADD", "register:40f0:8", ["const:698fcc:8", "const:4:8"]]
+ 00698fcc ["CALL", null, ["callee:008b6fa0:8"]]
- 00698f58 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00698f58 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00698f58 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00698f58 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00698f5c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00698f5c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00698f5c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00698f5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1cdd705f4df76911aabde5a7a0d60cf5"></a>

### [`00698ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00698/00698ffc.md) → [`00699054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699054.md) FUN_00699054

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
      "unmatched:00698ffc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00699000",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00699020",
      "DATA",
      [
        "storage",
        "00c75800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00699054",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00699058",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00699078",
      "DATA",
      [
        "storage",
        "00c758d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00698ffc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00698ffc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00698ffc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00698ffc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00699000 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00699000 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00699004 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-c45ccd445000bb64b8c789ad07a2c754"></a>

### [`00699030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/00699030.md) → [`00699088`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699088.md) FUN_00699088

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
      "definition_site": "00699094",
      "incomplete_value": false,
      "site": "00699094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069903c",
      "incomplete_value": false,
      "site": "0069903c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:800:8"
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
      "00699094",
      "DATA",
      [
        "storage",
        "00c75800",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00699094",
      "DATA",
      [
        "storage",
        "00c758d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00699038 ["COPY", "tmp:0:8", ["const:800:8"]]
- 00699038 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00699038 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00699038 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00699090 ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 00699090 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00699090 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00699090 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5721b0db5ec6af0160de827b9208a2d4"></a>

### [`0069904c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/0069904c.md) → [`006990a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006990a4.md) FUN_006990a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 13件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2a4.md) [`0085b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2ac.md) [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md) [`008b6e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6e58.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b6eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb0.md)

変更の種類 call, call_count, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.33% / 新版 96.33%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00699158",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a46944"
      ]
    ],
    [
      "unmatched:0069917c",
      "DATA",
      [
        "storage",
        "00333fb0",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "006991b0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00a46944"
      ]
    ],
    [
      "006991d4",
      "DATA",
      [
        "storage",
        "00333fb0",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069906c ["INT_ADD", "register:40f0:8", ["const:69906c:8", "const:4:8"]]
- 0069906c ["CALL", null, ["callee:008b92e8:8"]]
+ 006990c4 ["INT_ADD", "register:40f0:8", ["const:6990c4:8", "const:4:8"]]
+ 006990c4 ["CALL", null, ["callee:008b92e8:8"]]
- 0069908c ["INT_ADD", "register:40f0:8", ["const:69908c:8", "const:4:8"]]
- 0069908c ["CALL", null, ["callee:008b7a20:8"]]
+ 006990e4 ["INT_ADD", "register:40f0:8", ["const:6990e4:8", "const:4:8"]]
+ 006990e4 ["CALL", null, ["callee:008b7a20:8"]]
- 00699098 ["INT_ADD", "register:40f0:8", ["const:699098:8", "const:4:8"]]
- 00699098 ["CALL", null, ["callee:008b6ab4:8"]]
+ 006990f0 ["INT_ADD", "register:40f0:8", ["const:6990f0:8", "const:4:8"]]
+ 006990f0 ["CALL", null, ["callee:008b6ab4:8"]]
~~~


<a id="compare-866e6ceb38a28453fe8b3945aaa29e6e"></a>

### [`0069922c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/0069922c.md) → [`00699284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699284.md) FUN_00699284

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00699250",
      "DATA",
      [
        "storage",
        "00c75880",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00699254",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00699258",
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
      "006992a8",
      "DATA",
      [
        "storage",
        "00c75950",
        null,
        "undefined *"
      ]
    ],
    [
      "006992ac",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006992b0",
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
- 00699240 ["INT_ADD", "register:40f0:8", ["const:699240:8", "const:4:8"]]
- 00699240 ["CALL", null, ["callee:00c57f60:8"]]
+ 00699298 ["INT_ADD", "register:40f0:8", ["const:699298:8", "const:4:8"]]
+ 00699298 ["CALL", null, ["callee:00c57f60:8"]]
- 0069924c ["COPY", "tmp:0:8", ["const:880:8"]]
- 0069924c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0069924c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0069924c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00699250 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00699250 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00699250 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00699250 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4490e8fb6b391501bd1e767f4078ec3a"></a>

### [`00699260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/00699260.md) → [`006992b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992b8.md) FUN_006992b8

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
      "definition_site": "006992c4",
      "incomplete_value": false,
      "site": "006992c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069926c",
      "incomplete_value": false,
      "site": "0069926c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "006992c4",
      "DATA",
      [
        "storage",
        "00c75880",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006992c4",
      "DATA",
      [
        "storage",
        "00c75950",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00699268 ["COPY", "tmp:0:8", ["const:880:8"]]
- 00699268 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00699268 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00699268 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006992c0 ["COPY", "tmp:0:8", ["const:950:8"]]
+ 006992c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006992c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006992c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8f98fb374e3b6c93c9d3c56f04b64abe"></a>

### [`0069927c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/0069927c.md) → [`006992d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992d4.md) FUN_006992d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 16件 [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`00687b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687b4c.md)
- 新版 呼出元 0件  · 呼出先 16件 [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00687b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687b8c.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 87.21% / 新版 87.21%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00699324",
      "incomplete_value": true,
      "site": "00699334",
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
      "definition_site": "006992cc",
      "incomplete_value": true,
      "site": "006992dc",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00699320",
      "incomplete_value": false,
      "site": "00699334",
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
      "definition_site": "006992c8",
      "incomplete_value": false,
      "site": "006992dc",
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
      "definition_site": "0069932c",
      "incomplete_value": false,
      "site": "00699334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006992d4",
      "incomplete_value": false,
      "site": "006992dc",
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
            "const:fd8:8"
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
      "00699320",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00699324",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0069932c",
      "PARAM",
      [
        "storage",
        "00c74fd8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00699320",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00699324",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0069932c",
      "PARAM",
      [
        "storage",
        "00c750a8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006992dc ["INT_ADD", "register:40f0:8", ["const:6992dc:8", "const:4:8"]]
- 006992dc ["CALL", null, ["callee:00c586e0:8"]]
+ 00699334 ["INT_ADD", "register:40f0:8", ["const:699334:8", "const:4:8"]]
+ 00699334 ["CALL", null, ["callee:00c586e0:8"]]
- 00699354 ["INT_ADD", "register:40f0:8", ["const:699354:8", "const:4:8"]]
- 00699354 ["CALL", null, ["callee:00687b8c:8"]]
+ 006993ac ["INT_ADD", "register:40f0:8", ["const:6993ac:8", "const:4:8"]]
+ 006993ac ["CALL", null, ["callee:00687b8c:8"]]
+ 00699354 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 00699354 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 00699354 ["INT_ZEXT", "register:40b0:8", ["tmp:1:4"]]
~~~


<a id="compare-df6852c908bef786d5e10e9a4c2ed9f0"></a>

### [`00699578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/00699578.md) → [`006995d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006995d0.md) _INIT_101

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.18% / 新版 84.18%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006997f0",
      "incomplete_value": false,
      "site": "00699804",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699798",
      "incomplete_value": false,
      "site": "006997ac",
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
    "new": {
      "definition_site": "006997f8",
      "incomplete_value": false,
      "site": "00699804",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006997a0",
      "incomplete_value": false,
      "site": "006997ac",
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
            "const:6b8:8"
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
      "definition_site": "00699800",
      "incomplete_value": false,
      "site": "00699804",
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
      "definition_site": "006997a8",
      "incomplete_value": false,
      "site": "006997ac",
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
      "unmatched:006995a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006995b4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006995d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00699600",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0069960c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00699628",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006997ac ["INT_ADD", "register:40f0:8", ["const:6997ac:8", "const:4:8"]]
- 006997ac ["CALL", null, ["callee:00c57f00:8"]]
+ 00699804 ["INT_ADD", "register:40f0:8", ["const:699804:8", "const:4:8"]]
+ 00699804 ["CALL", null, ["callee:00c57f00:8"]]
- 00699828 ["INT_ADD", "register:40f0:8", ["const:699828:8", "const:4:8"]]
- 00699828 ["CALL", null, ["callee:00c57f80:8"]]
+ 00699880 ["INT_ADD", "register:40f0:8", ["const:699880:8", "const:4:8"]]
+ 00699880 ["CALL", null, ["callee:00c57f80:8"]]
- 006995a4 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 006995a4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 006995a4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 006995a4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-29377788f06562c46c61705be9ed9708"></a>

### [`00699908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/00699908.md) → [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) FUN_00699960

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) · 呼出先 28件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md)
- 新版 呼出元 1件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) · 呼出先 28件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.04% / 新版 81.04%

優先判定に残った影響 `call_argument_candidate` 10件, `store_condition` 1件, `store_destination` 1件, `store_value` 8件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 21件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006999a0",
      "incomplete_value": false,
      "site": "006999ac",
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
      "definition_site": "00699948",
      "incomplete_value": false,
      "site": "00699954",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00699a60",
      "incomplete_value": true,
      "site": "00699a70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cdf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699a08",
      "incomplete_value": true,
      "site": "00699a18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d3b:8"
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
      "definition_site": "00699d48",
      "incomplete_value": true,
      "site": "00699d58",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:433:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00699cf0",
      "incomplete_value": true,
      "site": "00699d00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:487:8"
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
      "006999ac",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "00699a60",
      "READ",
      [
        "storage",
        "002afd3b",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00699ad0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00699b04"
      ]
    ]
  ],
  "added": [
    [
      "006999ac",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00699a60",
      "READ",
      [
        "storage",
        "002afcdf",
        null,
        "string"
      ]
    ],
    [
      "00699b28",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00699b5c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006999c0 ["INT_ADD", "register:40f0:8", ["const:6999c0:8", "const:4:8"]]
- 006999c0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00699a18 ["INT_ADD", "register:40f0:8", ["const:699a18:8", "const:4:8"]]
+ 00699a18 ["CALL", null, ["callee:00c57f80:8"]]
- 006999d4 ["INT_ADD", "register:40f0:8", ["const:6999d4:8", "const:4:8"]]
- 006999d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00699a2c ["INT_ADD", "register:40f0:8", ["const:699a2c:8", "const:4:8"]]
+ 00699a2c ["CALL", null, ["callee:00c57f80:8"]]
- 006999f4 ["INT_ADD", "register:40f0:8", ["const:6999f4:8", "const:4:8"]]
- 006999f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00699a4c ["INT_ADD", "register:40f0:8", ["const:699a4c:8", "const:4:8"]]
+ 00699a4c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-99e5106d178cda767ddab22c0540a3f2"></a>

### [`0069a404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a404.md) → [`0069a45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a45c.md) FUN_0069a45c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069a404",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069a408",
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
      "0069a45c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0069a460",
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
- 0069a404 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0069a404 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0069a404 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0069a404 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0069a408 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0069a408 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0069a40c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-0c4d387b2bccf8e3d2592c7e233eeac6"></a>

### [`0069a458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a458.md) → [`0069a4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a4b0.md) FUN_0069a4b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 3件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00c580e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md)
- 新版 呼出元 2件 [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 3件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069a51c",
      "incomplete_value": false,
      "site": "0069a520",
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
      "definition_site": "0069a4c4",
      "incomplete_value": false,
      "site": "0069a4c8",
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
      "0069a51c",
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
      "0069a51c",
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
- 0069a4c8 ["INT_ADD", "register:40f0:8", ["const:69a4c8:8", "const:4:8"]]
- 0069a4c8 ["CALL", null, ["callee:00442970:8"]]
+ 0069a520 ["INT_ADD", "register:40f0:8", ["const:69a520:8", "const:4:8"]]
+ 0069a520 ["CALL", null, ["callee:00442970:8"]]
- 0069a46c ["INT_ADD", "register:40f0:8", ["const:69a46c:8", "const:4:8"]]
- 0069a46c ["CALL", null, ["callee:00c581b0:8"]]
+ 0069a4c4 ["INT_ADD", "register:40f0:8", ["const:69a4c4:8", "const:4:8"]]
+ 0069a4c4 ["CALL", null, ["callee:00c581b0:8"]]
- 0069a474 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0069a474 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0069a4cc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0069a4cc ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-6d4b33f33d5bed2390345412ee62e057"></a>

### [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) → [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) FUN_0069a55c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005ba798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005ba798.md) [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`00a89ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a89/00a89ad0.md) · 呼出先 62件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0059765c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/0059765c.md) [`005976e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005976e8.md)
- 新版 呼出元 4件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`00a89b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89b40.md) · 呼出先 62件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 68.12% / 新版 68.12%

優先判定に残った影響 `call_argument_candidate` 23件, `store_condition` 11件, `store_destination` 1件, `store_value` 1件, `unresolved_branch_alignment` 227件, `unresolved_call_alignment` 175件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 156件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069d1a8",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069d098",
      "value": [
        "live",
        "register:40e0:8"
      ]
    },
    "ordinal": 345,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0069d1ac",
      "incomplete_value": true,
      "site": "0069d1ac",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "0069d09c",
      "incomplete_value": true,
      "site": "0069d09c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 346,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069a6b0",
      "incomplete_value": true,
      "site": "0069a6b4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40e0:4"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:0069a5d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x360]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069a5ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x308]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069a5f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x318]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0069a628",
      "WRITE",
      [
        "storage",
        "Stack[-0x360]",
        null,
        null
      ]
    ],
    [
      "0069a644",
      "WRITE",
      [
        "storage",
        "Stack[-0x308]",
        null,
        null
      ]
    ],
    [
      "0069a648",
      "WRITE",
      [
        "storage",
        "Stack[-0x318]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0069a65c ["INT_ADD", "register:40f0:8", ["const:69a65c:8", "const:4:8"]]
- 0069a65c ["CALL", null, ["callee:00a38bd0:8"]]
+ 0069a6b4 ["INT_ADD", "register:40f0:8", ["const:69a6b4:8", "const:4:8"]]
+ 0069a6b4 ["CALL", null, ["callee:00a38bd0:8"]]
- 0069a6b4 ["COPY", "tmp:0:8", ["const:208:8"]]
- 0069a6b4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 0069a6b4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 0069a6b4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 0069a860 ["INT_ADD", "register:40f0:8", ["const:69a860:8", "const:4:8"]]
- 0069a860 ["CALL", null, ["callee:00c580d0:8"]]
+ 0069a98c ["INT_ADD", "register:40f0:8", ["const:69a98c:8", "const:4:8"]]
+ 0069a98c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-6ce95a93143160bb171d977f74238c59"></a>

### [`0069e804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069e804.md) → [`0069e85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e85c.md) FUN_0069e85c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 85.29% / 新版 85.29%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069e82c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069e898"
      ]
    ],
    [
      "unmatched:0069e83c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069e8bc"
      ]
    ],
    [
      "0069e8ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0069e834"
      ]
    ]
  ],
  "added": [
    [
      "0069e884",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069e898"
      ]
    ],
    [
      "0069e894",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069e8bc"
      ]
    ],
    [
      "0069e8ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069e88c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069e828 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:40a8:8"]]
- 0069e828 ["INT_SBORROW", "register:106:1", ["register:40a8:8", "register:40a0:8"]]
- 0069e828 ["INT_SUB", "tmp:0:8", ["register:40a8:8", "register:40a0:8"]]
- 0069e828 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 0069e82c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0069e82c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 0069e834 ["INT_SUB", "register:40a8:8", ["register:40a8:8", "const:88:8"]]
~~~


<a id="compare-b19d62a64955ea662ff7c019a42e7782"></a>

### [`0069e910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069e910.md) → [`0069e968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e968.md) FUN_0069e968

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0089bc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089bc8c.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0063495c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00634/0063495c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0063499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/0063499c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 82.47% / 新版 82.47%

優先判定に残った影響 `unresolved_branch_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069e9ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069eae0"
      ]
    ],
    [
      "unmatched:0069ea10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ea84"
      ]
    ],
    [
      "unmatched:0069ea18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069eae8"
      ]
    ]
  ],
  "added": [
    [
      "0069ea44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069eae0"
      ]
    ],
    [
      "0069ea68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069ea84"
      ]
    ],
    [
      "0069ea70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069eae8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069e934 ["INT_ADD", "register:40f0:8", ["const:69e934:8", "const:4:8"]]
- 0069e934 ["CALL", null, ["callee:00c581b0:8"]]
+ 0069e98c ["INT_ADD", "register:40f0:8", ["const:69e98c:8", "const:4:8"]]
+ 0069e98c ["CALL", null, ["callee:00c581b0:8"]]
- 0069e94c ["INT_ADD", "register:40f0:8", ["const:69e94c:8", "const:4:8"]]
- 0069e94c ["CALL", null, ["callee:00c58520:8"]]
+ 0069e9a4 ["INT_ADD", "register:40f0:8", ["const:69e9a4:8", "const:4:8"]]
+ 0069e9a4 ["CALL", null, ["callee:00c58520:8"]]
- 0069e960 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0069e960 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
+ 0069e9b8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0069e9b8 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
~~~


<a id="compare-a8c541225b3553bd76c0260bccee6fd1"></a>

### [`0069eab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069eab0.md) → [`0069eb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069eb08.md) FUN_0069eb08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0069f0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069f0fc.md) · 呼出先 5件 [`005509b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0069f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069f154.md) · 呼出先 5件 [`005509f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069eae0",
      "incomplete_value": false,
      "site": "0069eaec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:9f3:8"
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
      "unmatched:0069eab4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069eab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069eabc",
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
      "0069eb0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0069eb10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0069eb14",
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
- 0069eaec ["INT_ADD", "register:40f0:8", ["const:69eaec:8", "const:4:8"]]
- 0069eaec ["CALL", null, ["callee:00c58030:8"]]
+ 0069eb44 ["INT_ADD", "register:40f0:8", ["const:69eb44:8", "const:4:8"]]
+ 0069eb44 ["CALL", null, ["callee:00c58030:8"]]
- 0069eab0 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
- 0069eab4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0069eab4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0069eab4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:90:8"]]
- 0069eab4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-989a07a2397114fdb6effde661f57a3f"></a>

### [`0069ec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ec1c.md) → [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) FUN_0069ec74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`005ba798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005ba798.md) [`00853c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c78.md) [`00854670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/00854670.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) · 呼出先 16件 [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md) [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`006a2d10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d10.md) [`006a2d14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d14.md)
- 新版 呼出元 6件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`008546c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008546c8.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) · 呼出先 16件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d68.md) [`006a2d6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d6c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 93.71% / 新版 93.71%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0069ee38",
      "incomplete_value": false,
      "site": "0069ee38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069ede0",
      "incomplete_value": false,
      "site": "0069ede0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:980:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0069ec78",
      "incomplete_value": true,
      "site": "0069ec80",
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
            "const:20:8"
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
      "definition_site": "0069ec74",
      "incomplete_value": true,
      "site": "0069ec80",
      "value": [
        "live",
        "register:4000:8"
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
      "unmatched:0069ec40",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069ec64",
      "DATA",
      [
        "storage",
        "00c75900",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0069ec64",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0069ec98",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "0069ecbc",
      "DATA",
      [
        "storage",
        "00c759d0",
        null,
        "undefined *"
      ]
    ],
    [
      "0069ecbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0069ec80 ["INT_ADD", "register:40f0:8", ["const:69ec80:8", "const:4:8"]]
- 0069ec80 ["CALL", null, ["callee:0069ef6c:8"]]
+ 0069ecd8 ["INT_ADD", "register:40f0:8", ["const:69ecd8:8", "const:4:8"]]
+ 0069ecd8 ["CALL", null, ["callee:0069ef6c:8"]]
- 0069edb4 ["INT_ADD", "register:40f0:8", ["const:69edb4:8", "const:4:8"]]
- 0069edb4 ["CALL", null, ["callee:006a2da4:8"]]
+ 0069ee0c ["INT_ADD", "register:40f0:8", ["const:69ee0c:8", "const:4:8"]]
+ 0069ee0c ["CALL", null, ["callee:006a2da4:8"]]
- 0069ec3c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:28:8"]]
- 0069ec3c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9fc2969a0d7cea9e734d79e3e1c32b32"></a>

### [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) → [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) FUN_0069ef6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 6件 [`0069ec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ec1c.md) [`006b7130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7130.md) [`0085408c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/0085408c.md) [`008542f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008542f8.md) [`0088a16c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a16c.md) · 呼出先 6件 [`0069fd48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069fd48.md) [`0069fff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069fff0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md)
- 新版 呼出元 6件 [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`008540e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008540e4.md) [`00854350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854350.md) [`0088a1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c4.md) · 呼出先 6件 [`0069fda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069fda0.md) [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 98.97% / 新版 98.97%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069ef80",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0069efd8",
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
- 0069ef40 ["INT_ADD", "register:40f0:8", ["const:69ef40:8", "const:4:8"]]
- 0069ef40 ["CALL", null, ["callee:00c581b0:8"]]
+ 0069ef98 ["INT_ADD", "register:40f0:8", ["const:69ef98:8", "const:4:8"]]
+ 0069ef98 ["CALL", null, ["callee:00c581b0:8"]]
- 0069ef5c ["COPY", "register:0:8", ["register:4040:8"]]
- 0069ef5c ["INT_ADD", "register:40f0:8", ["const:69ef5c:8", "const:4:8"]]
- 0069ef5c ["CALLIND", null, ["register:0:8"]]
+ 0069efb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0069efb4 ["INT_ADD", "register:40f0:8", ["const:69efb4:8", "const:4:8"]]
+ 0069efb4 ["CALLIND", null, ["register:0:8"]]
- 0069ef64 ["BRANCH", null, ["local:b6:8"]]
+ 0069efbc ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-8a5b3f9a1cf6af8a33744750f06511ed"></a>

### [`0069f0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069f0fc.md) → [`0069f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069f154.md) FUN_0069f154

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006a2d18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d18.md) [`006a39d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a39d4.md) · 呼出先 26件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 2件 [`006a2d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d70.md) [`006a3a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3a2c.md) · 呼出先 26件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.34% / 新版 86.34%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 3件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 21件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0069f2e4",
      "incomplete_value": false,
      "site": "0069f2e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:2d6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069f28c",
      "incomplete_value": false,
      "site": "0069f290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ab000:8"
          ],
          [
            "leaf",
            "const:332:8"
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
      "definition_site": "0069f380",
      "incomplete_value": false,
      "site": "0069f384",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:c11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069f328",
      "incomplete_value": false,
      "site": "0069f32c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b4000:8"
          ],
          [
            "leaf",
            "const:be0:8"
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
    "new": {
      "definition_site": "0069f7a0",
      "incomplete_value": false,
      "site": "0069f7a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:997:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0069f748",
      "incomplete_value": false,
      "site": "0069f74c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ad000:8"
          ],
          [
            "leaf",
            "const:9f3:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069f148",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069fa20"
      ]
    ],
    [
      "unmatched:0069f164",
      "WRITE",
      [
        "storage",
        "Stack[-0x170]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069f180",
      "WRITE",
      [
        "storage",
        "Stack[-0x1a8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0069f1a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0069fa20"
      ]
    ],
    [
      "0069f1bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x170]",
        null,
        null
      ]
    ],
    [
      "0069f1d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1a8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0069f290 ["INT_ADD", "register:40f0:8", ["const:69f290:8", "const:4:8"]]
- 0069f290 ["CALL", null, ["callee:00c58040:8"]]
+ 0069f2e8 ["INT_ADD", "register:40f0:8", ["const:69f2e8:8", "const:4:8"]]
+ 0069f2e8 ["CALL", null, ["callee:00c58040:8"]]
- 0069f2d4 ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 0069f2d4 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
+ 0069f32c ["INT_NOTEQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 0069f32c ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
- 0069f32c ["INT_ADD", "register:40f0:8", ["const:69f32c:8", "const:4:8"]]
- 0069f32c ["CALL", null, ["callee:00c58040:8"]]
+ 0069f384 ["INT_ADD", "register:40f0:8", ["const:69f384:8", "const:4:8"]]
+ 0069f384 ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-ba91911cefcd4108e70dd9cee2305f75"></a>

### [`0069fd48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069fd48.md) → [`0069fda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069fda0.md) FUN_0069fda0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0069ffdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069ffdc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006a0034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0034.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0069fe00"
      ],
      [
        "FALL_THROUGH",
        "0069fe58"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069fe5c",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "0069fdfc",
      "incomplete_value": true,
      "site": "0069fe04",
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
                "register:4048:8"
              ],
              [
                "live",
                "register:40b0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0069fe00"
      ],
      [
        "CONDITIONAL_JUMP",
        "0069fe58"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0069fe74",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "0069fdfc",
      "incomplete_value": true,
      "site": "0069fe1c",
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
                "register:4048:8"
              ],
              [
                "live",
                "register:40b0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
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
      "unmatched:0069fd48",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069fd4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069fd50",
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
      "0069fda0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0069fda4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0069fda8",
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
+ 0069fe1c ["INT_EQUAL", "tmp:0:1", ["register:40d0:8", "const:0:8"]]
+ 0069fe1c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 0069fe74 ["BRANCH", null, ["local:b20:8"]]
+ 0069fecc ["BRANCH", null, ["local:b22:8"]]
- 0069fd48 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0069fd48 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0069fd48 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 0069fd48 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f606639900b47dd13861006499f14891"></a>

### [`0069ffdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069ffdc.md) → [`006a0034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0034.md) FUN_006a0034

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0069fd48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069fd48.md) [`006a35d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a35d8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`0069fda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069fda0.md) [`006a3630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3630.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0069ffdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0069ffe8",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0069ffec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043b7b8"
      ]
    ]
  ],
  "added": [
    [
      "006a0034",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006a0040",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "006a0044",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043b7b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0069ffdc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0069ffdc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0069ffdc ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0069ffdc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0069ffe0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 0069ffe4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-89fb760cf1098730ae34d073948193ac"></a>

### [`0069fff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069fff0.md) → [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) FUN_006a0048

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) [`006a2e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2e50.md) [`006a31dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a31dc.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) [`006a3234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3234.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.58% / 新版 96.58%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a0150",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0100"
      ]
    ]
  ],
  "added": [
    [
      "006a01a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0100"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a008c ["COPY", "register:0:8", ["register:4040:8"]]
- 006a008c ["INT_ADD", "register:40f0:8", ["const:6a008c:8", "const:4:8"]]
- 006a008c ["CALLIND", null, ["register:0:8"]]
+ 006a00e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 006a00e4 ["INT_ADD", "register:40f0:8", ["const:6a00e4:8", "const:4:8"]]
+ 006a00e4 ["CALLIND", null, ["register:0:8"]]
- 006a00dc ["COPY", "register:0:8", ["register:4040:8"]]
- 006a00dc ["INT_ADD", "register:40f0:8", ["const:6a00dc:8", "const:4:8"]]
- 006a00dc ["CALLIND", null, ["register:0:8"]]
+ 006a0134 ["COPY", "register:0:8", ["register:4040:8"]]
+ 006a0134 ["INT_ADD", "register:40f0:8", ["const:6a0134:8", "const:4:8"]]
+ 006a0134 ["CALLIND", null, ["register:0:8"]]
- 006a0118 ["COPY", "register:0:8", ["register:4040:8"]]
- 006a0118 ["INT_ADD", "register:40f0:8", ["const:6a0118:8", "const:4:8"]]
- 006a0118 ["CALLIND", null, ["register:0:8"]]
+ 006a0170 ["COPY", "register:0:8", ["register:4040:8"]]
+ 006a0170 ["INT_ADD", "register:40f0:8", ["const:6a0170:8", "const:4:8"]]
+ 006a0170 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-973bf3a297139aad998df0c18e9f0581"></a>

### [`006a0294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0294.md) → [`006a02ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a02ec.md) FUN_006a02ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00699908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/00699908.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006a04a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a04a8.md) [`006a0660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0660.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006a0500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0500.md) [`006a06b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06b8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.06% / 新版 83.06%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 13件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a02c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0398",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a03b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006a031c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006a03f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006a0410",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a02a8 ["COPY", "tmp:0:8", ["const:30:8"]]
- 006a02a8 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 006a02a8 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 006a02a8 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 006a02c4 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006a02c4 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 006a02c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 006a02f4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006a02f4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006a02f4 ["CBRANCH", null, ["local:b21:8", "tmp:1:1"]]
+ 006a034c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006a034c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 006a034c ["CBRANCH", null, ["local:b20:8", "tmp:1:1"]]
~~~


<a id="compare-27a1eabb34057bec586369bf24af6c29"></a>

### [`006a04a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a04a8.md) → [`006a0500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0500.md) FUN_006a0500

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a0294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0294.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006a02ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a02ec.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.67% / 新版 90.67%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a0558"
      ],
      [
        "FALL_THROUGH",
        "006a05b0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a05b0",
      "incomplete_value": true,
      "site": "006a05b4",
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
      "definition_site": "006a0558",
      "incomplete_value": true,
      "site": "006a055c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a04d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a05e0"
      ]
    ],
    [
      "unmatched:006a0540",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a053c"
      ]
    ],
    [
      "unmatched:006a0558",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a05bc"
      ]
    ]
  ],
  "added": [
    [
      "006a0530",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a05e0"
      ]
    ],
    [
      "006a0598",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a053c"
      ]
    ],
    [
      "006a05b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a05bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a04d4 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 006a04d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006a04d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006a04d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006a04d8 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 006a04ec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:10:8"]]
- 006a04ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
~~~


<a id="compare-bbca0285a0444b79559e705500d18d0d"></a>

### [`006a05d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a05d4.md) → [`006a062c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a062c.md) FUN_006a062c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.29% / 新版 74.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a061c",
      "incomplete_value": true,
      "site": "006a0620",
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
                "const:ffffffffffffffe0:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "006a0608"
      ],
      [
        "FALL_THROUGH",
        "006a0660"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a0660",
      "incomplete_value": true,
      "site": "006a0664",
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
      "definition_site": "006a0608",
      "incomplete_value": true,
      "site": "006a060c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
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
      "unmatched:006a05d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a05d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a05dc",
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
      "006a062c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006a0630",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006a0634",
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
- 006a0620 ["INT_ADD", "register:40f0:8", ["const:6a0620:8", "const:4:8"]]
- 006a0620 ["CALL", null, ["callee:00c57f80:8"]]
+ 006a0678 ["INT_ADD", "register:40f0:8", ["const:6a0678:8", "const:4:8"]]
+ 006a0678 ["CALL", null, ["callee:00c57f80:8"]]
- 006a05d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a05d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a05d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 006a05d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a05d8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006a05d8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006a05d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 006a05d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e6f7c97e64090e6e70dcc4c0df75e8f8"></a>

### [`006a0660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0660.md) → [`006a06b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06b8.md) FUN_006a06b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006a0294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0294.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`006a02ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a02ec.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a06c4",
      "incomplete_value": false,
      "site": "006a06c8",
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
      "definition_site": "006a066c",
      "incomplete_value": false,
      "site": "006a0670",
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
      "006a06c4",
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
      "006a06c4",
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
- 006a0670 ["INT_ADD", "register:40f0:8", ["const:6a0670:8", "const:4:8"]]
- 006a0670 ["CALL", null, ["callee:0043b7b8:8"]]
+ 006a06c8 ["INT_ADD", "register:40f0:8", ["const:6a06c8:8", "const:4:8"]]
+ 006a06c8 ["CALL", null, ["callee:0043b7b8:8"]]
- 006a066c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006a066c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a066c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a066c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a06c4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 006a06c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a06c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a06c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8d3113660fb5e06c1e205384317ae871"></a>

### [`006a0674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0674.md) → [`006a06cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06cc.md) FUN_006a06cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00699908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/00699908.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 2件 [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a06d8",
      "incomplete_value": false,
      "site": "006a06dc",
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
      "definition_site": "006a0680",
      "incomplete_value": false,
      "site": "006a0684",
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
      "006a06d8",
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
      "006a06d8",
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
- 006a0684 ["INT_ADD", "register:40f0:8", ["const:6a0684:8", "const:4:8"]]
- 006a0684 ["CALL", null, ["callee:00442970:8"]]
+ 006a06dc ["INT_ADD", "register:40f0:8", ["const:6a06dc:8", "const:4:8"]]
+ 006a06dc ["CALL", null, ["callee:00442970:8"]]
- 006a0680 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006a0680 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a0680 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a0680 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a06d8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 006a06d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a06d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a06d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8e151468a34c4dd36cadbbb04127de25"></a>

### [`006a0688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0688.md) → [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) FUN_006a06e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00699908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/00699908.md) [`006a0688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0688.md) [`006a0a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0a38.md) · 呼出先 5件 [`006a0688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0688.md) [`006a0a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0a38.md) [`006a0db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0db0.md) [`008022c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008022c8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00699960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/00699960.md) [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`006a0a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0a90.md) · 呼出先 5件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`006a0a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0a90.md) [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.03% / 新版 97.03%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a0744",
      "incomplete_value": true,
      "site": "006a0748",
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
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a06ec",
      "incomplete_value": true,
      "site": "006a06f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a06e4",
      "incomplete_value": true,
      "site": "006a06f0",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a0754",
      "incomplete_value": true,
      "site": "006a075c",
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
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:006a081c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a08d8"
      ]
    ]
  ],
  "added": [
    [
      "006a0874",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a08d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a06f0 ["INT_ADD", "register:40f0:8", ["const:6a06f0:8", "const:4:8"]]
- 006a06f0 ["CALL", null, ["callee:00802320:8"]]
+ 006a0748 ["INT_ADD", "register:40f0:8", ["const:6a0748:8", "const:4:8"]]
+ 006a0748 ["CALL", null, ["callee:00802320:8"]]
- 006a0704 ["INT_ADD", "register:40f0:8", ["const:6a0704:8", "const:4:8"]]
- 006a0704 ["CALL", null, ["callee:00802320:8"]]
+ 006a075c ["INT_ADD", "register:40f0:8", ["const:6a075c:8", "const:4:8"]]
+ 006a075c ["CALL", null, ["callee:00802320:8"]]
- 006a0788 ["INT_ADD", "register:40f0:8", ["const:6a0788:8", "const:4:8"]]
- 006a0788 ["CALL", null, ["callee:00802320:8"]]
+ 006a07e0 ["INT_ADD", "register:40f0:8", ["const:6a07e0:8", "const:4:8"]]
+ 006a07e0 ["CALL", null, ["callee:00802320:8"]]
~~~


<a id="compare-ced369a08ed7ac916dd7b91769078c92"></a>

### [`006a0a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0a38.md) → [`006a0a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0a90.md) FUN_006a0a90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a0688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0688.md) · 呼出先 3件 [`006a0688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0688.md) [`008022c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008022c8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) · 呼出先 3件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.40% / 新版 96.40%

アドレスに依存する影響 `store_condition` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a0aec"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a0b44"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a0b44",
      "incomplete_value": true,
      "site": "006a0c68",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              [
                "live",
                "register:101:1"
              ]
            ]
          ],
          [
            "INT_EQUAL",
            "1",
            [
              [
                "live",
                "register:100:1"
              ],
              [
                "live",
                "register:103:1"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a0aec",
      "incomplete_value": true,
      "site": "006a0c10",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ],
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
      "unmatched:006a0aec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0c2c"
      ]
    ],
    [
      "unmatched:006a0b04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0b20"
      ]
    ]
  ],
  "added": [
    [
      "006a0b44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0c2c"
      ]
    ],
    [
      "006a0b5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a0b20"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a0a80 ["INT_ADD", "register:40f0:8", ["const:6a0a80:8", "const:4:8"]]
- 006a0a80 ["CALL", null, ["callee:00851550:8"]]
+ 006a0ad8 ["INT_ADD", "register:40f0:8", ["const:6a0ad8:8", "const:4:8"]]
+ 006a0ad8 ["CALL", null, ["callee:00851550:8"]]
- 006a0a94 ["INT_ADD", "register:40f0:8", ["const:6a0a94:8", "const:4:8"]]
- 006a0a94 ["CALL", null, ["callee:00802320:8"]]
+ 006a0aec ["INT_ADD", "register:40f0:8", ["const:6a0aec:8", "const:4:8"]]
+ 006a0aec ["CALL", null, ["callee:00802320:8"]]
- 006a0a9c ["INT_ADD", "register:40f0:8", ["const:6a0a9c:8", "const:4:8"]]
- 006a0a9c ["CALL", null, ["callee:00851550:8"]]
+ 006a0af4 ["INT_ADD", "register:40f0:8", ["const:6a0af4:8", "const:4:8"]]
+ 006a0af4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-2b96b548ef7abe4f4d62218069b60a42"></a>

### [`006a0db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0db0.md) → [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) FUN_006a0e08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006a0688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0688.md) [`006a0db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0db0.md) · 呼出先 4件 [`006a0db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0db0.md) [`008022c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008022c8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`006a06e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a06e0.md) [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) · 呼出先 4件 [`006a0e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0e08.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.58% / 新版 90.58%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a119c",
      "incomplete_value": true,
      "site": "006a11bc",
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
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a11b8",
      "incomplete_value": true,
      "site": "006a11bc",
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
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:fffffffffffffff0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a1160",
      "incomplete_value": true,
      "site": "006a1164",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 14,
    "slot": 7
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1344",
      "incomplete_value": true,
      "site": "006a134c",
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
      "unmatched:006a0dc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0dc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a0dd0",
      "WRITE",
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
      "006a0e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006a0e20",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006a0e28",
      "WRITE",
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
- 006a1164 ["INT_ADD", "register:40f0:8", ["const:6a1164:8", "const:4:8"]]
- 006a1164 ["CALL", null, ["local:b0:8"]]
+ 006a11bc ["INT_ADD", "register:40f0:8", ["const:6a11bc:8", "const:4:8"]]
+ 006a11bc ["CALL", null, ["local:b0:8"]]
- 006a12f4 ["INT_ADD", "register:40f0:8", ["const:6a12f4:8", "const:4:8"]]
- 006a12f4 ["CALL", null, ["callee:00802320:8"]]
+ 006a134c ["INT_ADD", "register:40f0:8", ["const:6a134c:8", "const:4:8"]]
+ 006a134c ["CALL", null, ["callee:00802320:8"]]
- 006a0dc4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006a0dc4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006a0dc4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 006a0dc4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-21875129c63ab7b8134f8c50efa21282"></a>

### [`006a14f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a14f8.md) → [`006a1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1550.md) FUN_006a1550

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) [`006a14f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a14f8.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 2件 [`006a14f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a14f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`006a1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1550.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`006a1550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1574",
      "incomplete_value": true,
      "site": "006a1578",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1570",
      "incomplete_value": true,
      "site": "006a1578",
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
    "old": null,
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
      "unmatched:006a14fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a1500",
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
      "006a1554",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006a1558",
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
- 006a1520 ["INT_ADD", "register:40f0:8", ["const:6a1520:8", "const:4:8"]]
- 006a1520 ["CALL", null, ["local:b0:8"]]
+ 006a1578 ["INT_ADD", "register:40f0:8", ["const:6a1578:8", "const:4:8"]]
+ 006a1578 ["CALL", null, ["local:b0:8"]]
- 006a14f8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006a14f8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 006a1550 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006a1550 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 006a14fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a14fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a14fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006a14fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-e354e0acdca6ccd9301b201dbc704a2a"></a>

### [`006a1548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1548.md) → [`006a15a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15a0.md) FUN_006a15a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a15ac",
      "incomplete_value": true,
      "site": "006a15b0",
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
            "const:f8c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a1554",
      "incomplete_value": true,
      "site": "006a1558",
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
      "006a15ac",
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
      "006a15ac",
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
- 006a1558 ["INT_ADD", "register:40f0:8", ["const:6a1558:8", "const:4:8"]]
- 006a1558 ["CALL", null, ["callee:0043b7b8:8"]]
+ 006a15b0 ["INT_ADD", "register:40f0:8", ["const:6a15b0:8", "const:4:8"]]
+ 006a15b0 ["CALL", null, ["callee:0043b7b8:8"]]
- 006a1554 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006a1554 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a1554 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a1554 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a15ac ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 006a15ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a15ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a15ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ec5122eefc55e16a921991cd4e2bc221"></a>

### [`006a155c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a155c.md) → [`006a15b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15b4.md) FUN_006a15b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a155c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a1568",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006a156c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00442970"
      ]
    ]
  ],
  "added": [
    [
      "006a15b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006a15c0",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "006a15c4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00442970"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a155c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a155c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a155c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 006a155c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a1560 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006a1564 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-8ee31878bdf534202b9fcdd7718546f6"></a>

### [`006a1570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1570.md) → [`006a15c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15c8.md) FUN_006a15c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006a2a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2a90.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 006a1584 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 006a1584 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 006a15dc ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 006a15dc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 006a159c ["INT_ADD", "register:40f0:8", ["const:6a159c:8", "const:4:8"]]
- 006a159c ["CALL", null, ["callee:00c57f80:8"]]
+ 006a15f4 ["INT_ADD", "register:40f0:8", ["const:6a15f4:8", "const:4:8"]]
+ 006a15f4 ["CALL", null, ["callee:00c57f80:8"]]
- 006a15b8 ["COPY", "register:0:8", ["register:40f0:8"]]
- 006a15b8 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-3723804b1d7451dc80acc199f98f0850"></a>

### [`006a15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a15bc.md) → [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) FUN_006a1614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) [`006a15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a15bc.md) [`006a1a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1a38.md) · 呼出先 6件 [`006a15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a15bc.md) [`006a1a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1a38.md) [`006a1ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1ea4.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`008022c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008022c8.md)
- 新版 呼出元 3件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`006a1a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1a90.md) · 呼出先 6件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`006a1a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1a90.md) [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.64% / 新版 91.64%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1640",
      "incomplete_value": true,
      "site": "006a1644",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1638",
      "incomplete_value": true,
      "site": "006a1644",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a16a8",
      "incomplete_value": true,
      "site": "006a16b0",
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
            "register:40a0:8"
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
      "unmatched:006a15c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a15c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a15c8",
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
      "006a1618",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006a161c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006a1620",
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
- 006a1644 ["INT_ADD", "register:40f0:8", ["const:6a1644:8", "const:4:8"]]
- 006a1644 ["CALL", null, ["callee:00802320:8"]]
+ 006a169c ["INT_ADD", "register:40f0:8", ["const:6a169c:8", "const:4:8"]]
+ 006a169c ["CALL", null, ["callee:00802320:8"]]
- 006a1658 ["INT_ADD", "register:40f0:8", ["const:6a1658:8", "const:4:8"]]
- 006a1658 ["CALL", null, ["callee:00802320:8"]]
+ 006a16b0 ["INT_ADD", "register:40f0:8", ["const:6a16b0:8", "const:4:8"]]
+ 006a16b0 ["CALL", null, ["callee:00802320:8"]]
- 006a1980 ["INT_ADD", "register:40f0:8", ["const:6a1980:8", "const:4:8"]]
- 006a1980 ["CALL", null, ["callee:00802320:8"]]
+ 006a19d8 ["INT_ADD", "register:40f0:8", ["const:6a19d8:8", "const:4:8"]]
+ 006a19d8 ["CALL", null, ["callee:00802320:8"]]
~~~


<a id="compare-5ea5ce942913b1e99f264d654c390928"></a>

### [`006a1a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1a38.md) → [`006a1a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1a90.md) FUN_006a1a90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a15bc.md) · 呼出先 4件 [`006a15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a15bc.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`008022c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008022c8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) · 呼出先 4件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.10% / 新版 84.10%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1d1c",
      "incomplete_value": true,
      "site": "006a1d40",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a1d94",
      "incomplete_value": true,
      "site": "006a1d98",
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
            "register:40a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a1d3c",
      "incomplete_value": true,
      "site": "006a1d40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:2:8"
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a1d2c",
      "incomplete_value": true,
      "site": "006a1d40",
      "value": [
        "INT_RIGHT",
        "8",
        [
          [
            "live",
            "register:4010:8"
          ],
          [
            "leaf",
            "const:1:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a1a3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a1a40",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a1a44",
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
      "006a1a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006a1a98",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006a1a9c",
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
- 006a1ce8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006a1ce8 ["CBRANCH", null, ["local:b32:8", "tmp:0:1"]]
+ 006a1d40 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006a1d40 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
- 006a1d40 ["INT_ADD", "register:40f0:8", ["const:6a1d40:8", "const:4:8"]]
- 006a1d40 ["CALL", null, ["callee:006a1614:8"]]
+ 006a1d98 ["INT_ADD", "register:40f0:8", ["const:6a1d98:8", "const:4:8"]]
+ 006a1d98 ["CALL", null, ["callee:006a1614:8"]]
- 006a1d58 ["INT_ADD", "register:40f0:8", ["const:6a1d58:8", "const:4:8"]]
- 006a1d58 ["CALL", null, ["callee:006a1614:8"]]
+ 006a1db0 ["INT_ADD", "register:40f0:8", ["const:6a1db0:8", "const:4:8"]]
+ 006a1db0 ["CALL", null, ["callee:006a1614:8"]]
~~~


<a id="compare-c9e3e362df02021de908ea89e600bd90"></a>

### [`006a1ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1ea4.md) → [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) FUN_006a1efc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006a15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a15bc.md) [`006a1ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1ea4.md) · 呼出先 6件 [`006a1ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1ea4.md) [`006a259c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a259c.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`008022c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008022c8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`006a1614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1614.md) [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) · 呼出先 6件 [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) [`006a25f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a25f4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802320.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 93.72% / 新版 93.72%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a21a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2160"
      ]
    ],
    [
      "006a2498",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006a256c"
      ]
    ],
    [
      "unmatched:006a24b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2518"
      ]
    ]
  ],
  "added": [
    [
      "006a2200",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2160"
      ]
    ],
    [
      "006a2498",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a25c4"
      ]
    ],
    [
      "006a250c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2518"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a1f10 ["INT_ADD", "register:40f0:8", ["const:6a1f10:8", "const:4:8"]]
- 006a1f10 ["CALL", null, ["callee:008003d0:8"]]
+ 006a1f68 ["INT_ADD", "register:40f0:8", ["const:6a1f68:8", "const:4:8"]]
+ 006a1f68 ["CALL", null, ["callee:008003d0:8"]]
- 006a1f1c ["INT_ADD", "register:40f0:8", ["const:6a1f1c:8", "const:4:8"]]
- 006a1f1c ["CALL", null, ["callee:008003d0:8"]]
+ 006a1f74 ["INT_ADD", "register:40f0:8", ["const:6a1f74:8", "const:4:8"]]
+ 006a1f74 ["CALL", null, ["callee:008003d0:8"]]
- 006a1f24 ["INT_ADD", "register:40f0:8", ["const:6a1f24:8", "const:4:8"]]
- 006a1f24 ["CALL", null, ["callee:00851550:8"]]
+ 006a1f7c ["INT_ADD", "register:40f0:8", ["const:6a1f7c:8", "const:4:8"]]
+ 006a1f7c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4862fd0d8e440c24af2e5eaff41dbdfd"></a>

### [`006a259c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a259c.md) → [`006a25f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a25f4.md) FUN_006a25f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a1ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1ea4.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`006a1efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1efc.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a25e4"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a263c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a2638",
      "incomplete_value": true,
      "site": "006a271c",
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
              [
                "live",
                "register:4010:8"
              ]
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
      "site": "006a26c4",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 17,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a25e4"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a263c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a2638",
      "incomplete_value": true,
      "site": "006a2720",
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
              [
                "live",
                "register:4010:8"
              ]
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
      "site": "006a26c8",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:006a25cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a26bc"
      ]
    ],
    [
      "006a2624",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2704"
      ]
    ],
    [
      "unmatched:006a260c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a275c"
      ]
    ]
  ],
  "added": [
    [
      "006a2624",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a26bc"
      ]
    ],
    [
      "006a263c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2704"
      ]
    ],
    [
      "006a2664",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a275c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a25c4 ["CBRANCH", null, ["local:b27:8", "register:101:1"]]
+ 006a261c ["CBRANCH", null, ["local:b26:8", "register:101:1"]]
- 006a25cc ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
- 006a25d8 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
+ 006a2630 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
~~~


<a id="compare-346255d22b9a725273e45a7373b63173"></a>

### [`006a27cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a27cc.md) → [`006a2824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2824.md) FUN_006a2824

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0069e88c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069e88c.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`006a28e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a28e8.md) [`006a2a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2a90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0069e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e8e4.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006a2940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2940.md) [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `unresolved_store_alignment` 4件

~~~diff
- 006a27f4 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 006a284c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 006a2810 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 006a2868 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 006a2828 ["INT_ADD", "register:40f0:8", ["const:6a2828:8", "const:4:8"]]
- 006a2828 ["CALL", null, ["callee:006a2940:8"]]
+ 006a2880 ["INT_ADD", "register:40f0:8", ["const:6a2880:8", "const:4:8"]]
+ 006a2880 ["CALL", null, ["callee:006a2940:8"]]
~~~


<a id="compare-4869b0d1c8a5b6f0835edf2767838840"></a>

### [`006a28e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a28e8.md) → [`006a2940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2940.md) FUN_006a2940

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006a27cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a27cc.md) · 呼出先 0件 
- 新版 呼出元 1件 [`006a2824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2824.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 97.17% / 新版 97.17%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006a2a2c",
      "incomplete_value": true,
      "site": "006a2a34",
      "value": [
        "live",
        "register:4018:8"
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
      "unmatched:006a29ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2a2c"
      ]
    ],
    [
      "unmatched:006a29c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2a2c"
      ]
    ],
    [
      "unmatched:006a2a50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2ad0"
      ]
    ]
  ],
  "added": [
    [
      "006a2a04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2a2c"
      ]
    ],
    [
      "006a2a1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2a2c"
      ]
    ],
    [
      "006a2aa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2ad0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2998 ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 006a2998 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 006a29f0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 006a29f0 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
- 006a29ac ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 006a29ac ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
- 006a29c4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a29c4 ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
~~~


<a id="compare-d541799b6008392cc8976c3e2b75a0ed"></a>

### [`006a2a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2a90.md) → [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) FUN_006a2ae8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006a27cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a27cc.md) · 呼出先 6件 [`005c1cdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1cdc.md) [`006a1570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a1570.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006a2824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2824.md) · 呼出先 6件 [`005c1d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d1c.md) [`006a15c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a15c8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a2b14",
      "incomplete_value": true,
      "site": "006a2b24",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 2,
    "slot": 2
  }
]
~~~


~~~diff
- 006a2b24 ["INT_ADD", "register:40f0:8", ["const:6a2b24:8", "const:4:8"]]
- 006a2b24 ["CALL", null, ["callee:00c580d0:8"]]
+ 006a2b7c ["INT_ADD", "register:40f0:8", ["const:6a2b7c:8", "const:4:8"]]
+ 006a2b7c ["CALL", null, ["callee:00c580d0:8"]]
- 006a2ab4 ["INT_ADD", "register:40f0:8", ["const:6a2ab4:8", "const:4:8"]]
- 006a2ab4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006a2b0c ["INT_ADD", "register:40f0:8", ["const:6a2b0c:8", "const:4:8"]]
+ 006a2b0c ["CALL", null, ["callee:00c57f60:8"]]
- 006a2adc ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 006a2b34 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
~~~


<a id="compare-6b6d463b515f91af0b2ab1b2439fc6d0"></a>

### [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) → [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) FUN_006a2bd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 14件 [`0069ec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ec1c.md) [`006b7130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7130.md) [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00846c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00846/00846c50.md) [`00848080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848080.md) · 呼出先 8件 [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580d0.md) [`00c580e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md)
- 新版 呼出元 14件 [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) [`008480d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008480d8.md) · 呼出先 8件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2be8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2c60"
      ]
    ]
  ],
  "added": [
    [
      "006a2c40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a2c60"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2b8c ["INT_ADD", "register:40f0:8", ["const:6a2b8c:8", "const:4:8"]]
- 006a2b8c ["CALL", null, ["callee:00c581b0:8"]]
+ 006a2be4 ["INT_ADD", "register:40f0:8", ["const:6a2be4:8", "const:4:8"]]
+ 006a2be4 ["CALL", null, ["callee:00c581b0:8"]]
- 006a2b98 ["INT_ADD", "register:40f0:8", ["const:6a2b98:8", "const:4:8"]]
- 006a2b98 ["CALL", null, ["callee:00c58450:8"]]
+ 006a2bf0 ["INT_ADD", "register:40f0:8", ["const:6a2bf0:8", "const:4:8"]]
+ 006a2bf0 ["CALL", null, ["callee:00c58450:8"]]
- 006a2ba0 ["INT_ADD", "register:40f0:8", ["const:6a2ba0:8", "const:4:8"]]
- 006a2ba0 ["CALL", null, ["callee:00c581c0:8"]]
+ 006a2bf8 ["INT_ADD", "register:40f0:8", ["const:6a2bf8:8", "const:4:8"]]
+ 006a2bf8 ["CALL", null, ["callee:00c581c0:8"]]
~~~


<a id="compare-fa0ab618941f338d4dcd2ed062dbe2f2"></a>

### [`006a2cc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2cc8.md) → [`006a2d20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d20.md) FUN_006a2d20

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
      "definition_site": "006a2d44",
      "incomplete_value": false,
      "site": "006a2d44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2cec",
      "incomplete_value": false,
      "site": "006a2cec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
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
      "006a2d44",
      "DATA",
      [
        "storage",
        "00c75900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a2d44",
      "DATA",
      [
        "storage",
        "00c759d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2cdc ["INT_ADD", "register:40f0:8", ["const:6a2cdc:8", "const:4:8"]]
- 006a2cdc ["CALL", null, ["callee:00c57f60:8"]]
+ 006a2d34 ["INT_ADD", "register:40f0:8", ["const:6a2d34:8", "const:4:8"]]
+ 006a2d34 ["CALL", null, ["callee:00c57f60:8"]]
- 006a2ce8 ["COPY", "tmp:0:8", ["const:900:8"]]
- 006a2ce8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006a2ce8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006a2ce8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006a2d40 ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 006a2d40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006a2d40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006a2d40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3341bb4ede7321e5be649627b5d7ccc8"></a>

### [`006a2cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2cfc.md) → [`006a2d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2d54.md) FUN_006a2d54

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
      "definition_site": "006a2d60",
      "incomplete_value": false,
      "site": "006a2d60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a2d08",
      "incomplete_value": false,
      "site": "006a2d08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:900:8"
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
      "006a2d60",
      "DATA",
      [
        "storage",
        "00c75900",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a2d60",
      "DATA",
      [
        "storage",
        "00c759d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a2d04 ["COPY", "tmp:0:8", ["const:900:8"]]
- 006a2d04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006a2d04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006a2d04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006a2d5c ["COPY", "tmp:0:8", ["const:9d0:8"]]
+ 006a2d5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006a2d5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006a2d5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d17179af9f0f0ec5ba52d3bfebdb09cb"></a>

### [`006a2d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d4c.md) → [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md) FUN_006a2da4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0069ec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ec1c.md) [`006b7130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7130.md) [`0085408c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/0085408c.md) [`008542f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008542f8.md) [`0088a16c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a16c.md) · 呼出先 6件 [`006a3878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3878.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58100.md) [`00c58110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58110.md)
- 新版 呼出元 6件 [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`008540e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008540e4.md) [`00854350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854350.md) [`0088a1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a1c4.md) · 呼出先 6件 [`006a38d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a38d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) [`00c581e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581e0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a2e08",
      "incomplete_value": false,
      "site": "006a2e14",
      "value": [
        "leaf",
        "const:6a38d0:8"
      ]
    },
    "old": {
      "definition_site": "006a2db0",
      "incomplete_value": false,
      "site": "006a2dbc",
      "value": [
        "leaf",
        "const:6a3878:8"
      ]
    },
    "ordinal": 3,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a2d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a2d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a2d58",
      "WRITE",
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
      "006a2da8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006a2dac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006a2db0",
      "WRITE",
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
- 006a2dbc ["INT_ADD", "register:40f0:8", ["const:6a2dbc:8", "const:4:8"]]
- 006a2dbc ["CALL", null, ["callee:00c581e0:8"]]
+ 006a2e14 ["INT_ADD", "register:40f0:8", ["const:6a2e14:8", "const:4:8"]]
+ 006a2e14 ["CALL", null, ["callee:00c581e0:8"]]
- 006a2d4c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 006a2d50 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a2d50 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a2d50 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006a2d50 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6b3204633cf846a15d85c921bbbb894c"></a>

### [`006a2e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2e50.md) → [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) FUN_006a2ea8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d48.md) · 呼出先 10件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0069fff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069fff0.md) [`006a31dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a31dc.md) [`006a35d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a35d8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) · 呼出先 10件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) [`006a3234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3234.md) [`006a3630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3630.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 95.94% / 新版 95.94%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a30c4",
      "incomplete_value": true,
      "site": "006a30cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a30c8",
      "incomplete_value": true,
      "site": "006a30cc",
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
            "const:10:8"
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
      "unmatched:006a3158",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3230"
      ]
    ],
    [
      "unmatched:006a2f94",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "006a31b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3230"
      ]
    ],
    [
      "006a2fec",
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
- 006a30cc ["INT_ADD", "register:40f0:8", ["const:6a30cc:8", "const:4:8"]]
- 006a30cc ["CALL", null, ["callee:00c58550:8"]]
+ 006a3124 ["INT_ADD", "register:40f0:8", ["const:6a3124:8", "const:4:8"]]
+ 006a3124 ["CALL", null, ["callee:00c58550:8"]]
- 006a2eb0 ["INT_AND", "register:40c0:8", ["register:40c0:8", "const:ffffffffffff:8"]]
- 006a2eb0 ["INT_OR", "register:40c0:8", ["register:40c0:8", "const:20000000000000:8"]]
- 006a2eb4 ["COPY", "register:40c8:8", ["const:3e8:8"]]
~~~


<a id="compare-6509f6d5233b84c0fb567ede258908ef"></a>

### [`006a31dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a31dc.md) → [`006a3234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3234.md) FUN_006a3234

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2e50.md) · 呼出先 2件 [`0069fff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069fff0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) · 呼出先 2件 [`006a0048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0048.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.89% / 新版 93.89%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a34c4"
      ],
      [
        "FALL_THROUGH",
        "006a351c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a3518",
      "incomplete_value": true,
      "site": "006a3524",
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
              [
                "live",
                "register:4048:8"
              ]
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
      "definition_site": "006a34c0",
      "incomplete_value": true,
      "site": "006a34cc",
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
    "ordinal": 38,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006a34c4"
      ],
      [
        "CONDITIONAL_JUMP",
        "006a351c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a3518",
      "incomplete_value": true,
      "site": "006a3534",
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
              [
                "live",
                "register:4048:8"
              ]
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
      "definition_site": "006a34c0",
      "incomplete_value": true,
      "site": "006a34dc",
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
    "ordinal": 40,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a3288",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3514"
      ]
    ],
    [
      "unmatched:006a3254",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a3364",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a33d4"
      ]
    ]
  ],
  "added": [
    [
      "006a3288",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a32a4"
      ]
    ],
    [
      "006a32ac",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "006a33bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a33d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a3228 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 006a3228 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006a3280 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 006a3280 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 006a3230 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 006a3288 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
- 006a3238 ["BRANCH", null, ["local:b5:8"]]
+ 006a3290 ["BRANCH", null, ["local:b6:8"]]
~~~


<a id="compare-02c1a283eea51754bb37e1e42cbf0a42"></a>

### [`006a35d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a35d8.md) → [`006a3630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3630.md) FUN_006a3630

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2e50.md) · 呼出先 5件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0069ffdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069ffdc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`006a2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ea8.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006a0034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a0034.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 91.77% / 新版 91.77%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a362c"
      ],
      [
        "FALL_THROUGH",
        "006a3684"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a3684",
      "incomplete_value": true,
      "site": "006a3694",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "live",
            "register:102:1"
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              [
                "live",
                "register:101:1"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a362c",
      "incomplete_value": true,
      "site": "006a363c",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "INT_OR",
              "INT_ADD"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
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
      "unmatched:006a362c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3878"
      ]
    ],
    [
      "unmatched:006a37b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3824"
      ]
    ]
  ],
  "added": [
    [
      "006a3684",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3878"
      ]
    ],
    [
      "006a3808",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a3824"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a362c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006a362c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006a362c ["CBRANCH", null, ["local:b31:8", "tmp:1:1"]]
- 006a3648 ["INT_SRIGHT", "register:4050:8", ["register:4050:8", "const:4:8"]]
- 006a364c ["INT_AND", "register:4068:8", ["register:4068:8", "const:ffffffffffff:8"]]
- 006a364c ["INT_OR", "register:4068:8", ["register:4068:8", "const:199000000000000:8"]]
~~~


<a id="compare-50ef15cdc6ea2f67e52c30babb185c03"></a>

### [`006a3878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3878.md) → [`006a38d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a38d0.md) FUN_006a38d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006a2d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d4c.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58130.md) [`00c58140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58140.md) [`00c58150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58150.md)
- 新版 呼出元 1件 [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)

変更の種類 call, call_count, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 97.30% / 新版 97.30%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a38b8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "006a3910",
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
- 006a38a0 ["INT_ADD", "register:40f0:8", ["const:6a38a0:8", "const:4:8"]]
- 006a38a0 ["CALL", null, ["callee:00c58200:8"]]
+ 006a38f8 ["INT_ADD", "register:40f0:8", ["const:6a38f8:8", "const:4:8"]]
+ 006a38f8 ["CALL", null, ["callee:00c58200:8"]]
- 006a38b0 ["INT_ADD", "register:40f0:8", ["const:6a38b0:8", "const:4:8"]]
- 006a38b0 ["CALL", null, ["callee:00c58210:8"]]
+ 006a3908 ["INT_ADD", "register:40f0:8", ["const:6a3908:8", "const:4:8"]]
+ 006a3908 ["CALL", null, ["callee:00c58210:8"]]
- 006a38b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 006a38b8 ["INT_ADD", "register:40f0:8", ["const:6a38b8:8", "const:4:8"]]
- 006a38b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0feac710e81819795d4decb14ae987c9"></a>

### [`006a3930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3930.md) → [`006a3988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3988.md) FUN_006a3988

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58150.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a395c",
      "incomplete_value": true,
      "site": "006a3960",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 006a3960 ["INT_ADD", "register:40f0:8", ["const:6a3960:8", "const:4:8"]]
- 006a3960 ["CALL", null, ["callee:00c57f80:8"]]
+ 006a39b8 ["INT_ADD", "register:40f0:8", ["const:6a39b8:8", "const:4:8"]]
+ 006a39b8 ["CALL", null, ["callee:00c57f80:8"]]
- 006a3944 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 006a3944 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006a399c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 006a399c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 006a3950 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 006a3950 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006a39a8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 006a39a8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-4ef7ac29f7a0de93344d18a7520ad73b"></a>

### [`006a3984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3984.md) → [`006a39dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a39dc.md) FUN_006a39dc

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
      "definition_site": "006a3a00",
      "incomplete_value": false,
      "site": "006a3a00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:a50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a39a8",
      "incomplete_value": false,
      "site": "006a39a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
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
      "006a3a00",
      "DATA",
      [
        "storage",
        "00c75980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a3a00",
      "DATA",
      [
        "storage",
        "00c75a50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a3998 ["INT_ADD", "register:40f0:8", ["const:6a3998:8", "const:4:8"]]
- 006a3998 ["CALL", null, ["callee:00c57f60:8"]]
+ 006a39f0 ["INT_ADD", "register:40f0:8", ["const:6a39f0:8", "const:4:8"]]
+ 006a39f0 ["CALL", null, ["callee:00c57f60:8"]]
- 006a39a4 ["COPY", "tmp:0:8", ["const:980:8"]]
- 006a39a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006a39a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006a39a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006a39fc ["COPY", "tmp:0:8", ["const:a50:8"]]
+ 006a39fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006a39fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006a39fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5ec17e6697dca83c7c1b50de5ed58e0"></a>

### [`006a39b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a39b8.md) → [`006a3a10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3a10.md) FUN_006a3a10

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
      "unmatched:006a39c4",
      "DATA",
      [
        "storage",
        "00c75980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a3a1c",
      "DATA",
      [
        "storage",
        "00c75a50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a39b8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 006a39b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006a39bc ["COPY", "register:4048:8", ["const:c75000:8"]]
- 006a39c0 ["COPY", "tmp:0:8", ["const:980:8"]]
- 006a39c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006a39c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006a39c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-622beb7d62793312e5f91654c2bdc252"></a>

### [`006a3a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3a04.md) → [`006a3a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3a5c.md) _INIT_102

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.84% / 新版 76.84%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a3b50",
      "incomplete_value": true,
      "site": "006a3b64",
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
            "const:8:8"
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
      "definition_site": "006a3bc0",
      "incomplete_value": true,
      "site": "006a3bd0",
      "value": [
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
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a3be8",
      "incomplete_value": true,
      "site": "006a3bf8",
      "value": [
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
    },
    "old": null,
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
      "unmatched:006a3a34",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a3a40",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006a3a5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006a3a8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "006a3a98",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006a3ab4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a3b64 ["INT_ADD", "register:40f0:8", ["const:6a3b64:8", "const:4:8"]]
- 006a3b64 ["CALL", null, ["callee:0043b838:8"]]
+ 006a3bbc ["INT_ADD", "register:40f0:8", ["const:6a3bbc:8", "const:4:8"]]
+ 006a3bbc ["CALL", null, ["callee:0043b838:8"]]
- 006a3b78 ["INT_ADD", "register:40f0:8", ["const:6a3b78:8", "const:4:8"]]
- 006a3b78 ["CALL", null, ["callee:0043b838:8"]]
+ 006a3bd0 ["INT_ADD", "register:40f0:8", ["const:6a3bd0:8", "const:4:8"]]
+ 006a3bd0 ["CALL", null, ["callee:0043b838:8"]]
- 006a3ba0 ["INT_ADD", "register:40f0:8", ["const:6a3ba0:8", "const:4:8"]]
- 006a3ba0 ["CALL", null, ["callee:0043b838:8"]]
+ 006a3bf8 ["INT_ADD", "register:40f0:8", ["const:6a3bf8:8", "const:4:8"]]
+ 006a3bf8 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-b60a43b55b1375fe6ce2d3fea62eccdb"></a>

### [`006a3d94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3d94.md) → [`006a3dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3dec.md) FUN_006a3dec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 1件 [`006a60d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a60d8.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a3da8",
      "incomplete_value": true,
      "site": "006a3dac",
      "value": [
        "INT_SUB",
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
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 006a3dac ["INT_ADD", "register:40f0:8", ["const:6a3dac:8", "const:4:8"]]
- 006a3dac ["CALL", null, ["callee:006a6130:8"]]
+ 006a3e04 ["INT_ADD", "register:40f0:8", ["const:6a3e04:8", "const:4:8"]]
+ 006a3e04 ["CALL", null, ["callee:006a6130:8"]]
- 006a3da4 ["INT_ADD", "register:4098:8", ["register:4098:8", "const:20:8"]]
- 006a3da4 ["LOAD", "register:4008:8", ["const:1b1:8", "register:4098:8"]]
- 006a3da8 ["INT_SUB", "register:4000:8", ["register:4098:8", "const:8:8"]]
~~~


<a id="compare-3a934b89753117470a323e042e58b3a1"></a>

### [`006a3dc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a3/006a3dc4.md) → [`006a3e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3e1c.md) FUN_006a3e1c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 21件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 21件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.17% / 新版 72.17%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 2件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 27件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 37件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a47ac",
      "incomplete_value": true,
      "site": "006a47b0",
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
      "definition_site": "006a4754",
      "incomplete_value": true,
      "site": "006a4758",
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
    "ordinal": 120,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a47a8",
      "incomplete_value": true,
      "site": "006a47b4",
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
      "definition_site": "006a4750",
      "incomplete_value": true,
      "site": "006a475c",
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
    "ordinal": 121,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "006a47c0",
      "incomplete_value": true,
      "site": "006a47c0",
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
      "definition_site": "006a4768",
      "incomplete_value": true,
      "site": "006a4768",
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
    "ordinal": 122,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a3df8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a3e14",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006a3e14",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006a3e50",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006a3e6c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006a3e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a3e18 ["INT_ADD", "register:40f0:8", ["const:6a3e18:8", "const:4:8"]]
- 006a3e18 ["CALL", null, ["callee:006a6180:8"]]
+ 006a3e70 ["INT_ADD", "register:40f0:8", ["const:6a3e70:8", "const:4:8"]]
+ 006a3e70 ["CALL", null, ["callee:006a6180:8"]]
- 006a4078 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a4078 ["CBRANCH", null, ["local:b39:8", "tmp:0:1"]]
+ 006a40d0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a40d0 ["CBRANCH", null, ["local:b35:8", "tmp:0:1"]]
- 006a40d0 ["INT_ADD", "register:40f0:8", ["const:6a40d0:8", "const:4:8"]]
- 006a40d0 ["CALL", null, ["callee:004410cc:8"]]
+ 006a4128 ["INT_ADD", "register:40f0:8", ["const:6a4128:8", "const:4:8"]]
+ 006a4128 ["CALL", null, ["callee:004410cc:8"]]
~~~


