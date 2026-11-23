# v16.0.1 → v16.0.2 · 最優先の変更候補 (28)

[一覧の目次](README.md)

<a id="compare-b3ea15db0a6ae7c324dacba07c5b6576"></a>

### [`00639d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/00639d1c.md) → [`00639d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639d5c.md) FUN_00639d5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00639d80",
      "incomplete_value": true,
      "site": "00639d80",
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
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00639d40",
      "incomplete_value": true,
      "site": "00639d40",
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
            "const:720:8"
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
      "00639d80",
      "DATA",
      [
        "storage",
        "00c73720",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00639d80",
      "DATA",
      [
        "storage",
        "00c737f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639d30 ["INT_ADD", "register:40f0:8", ["const:639d30:8", "const:4:8"]]
- 00639d30 ["CALL", null, ["callee:00c57f60:8"]]
+ 00639d70 ["INT_ADD", "register:40f0:8", ["const:639d70:8", "const:4:8"]]
+ 00639d70 ["CALL", null, ["callee:00c57f60:8"]]
- 00639d3c ["COPY", "tmp:0:8", ["const:720:8"]]
- 00639d3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00639d3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00639d3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00639d7c ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 00639d7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00639d7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00639d7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00639d58 ["INT_ADD", "register:40f0:8", ["const:639d58:8", "const:4:8"]]
- 00639d58 ["CALL", null, ["callee:00c53d70:8"]]
+ 00639d98 ["INT_ADD", "register:40f0:8", ["const:639d98:8", "const:4:8"]]
+ 00639d98 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-25c19e12df30eff72eb9b100eaa988e0"></a>

### [`00639d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/00639d6c.md) → [`00639dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639dac.md) FUN_00639dac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00639db8",
      "incomplete_value": true,
      "site": "00639db8",
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
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00639d78",
      "incomplete_value": true,
      "site": "00639d78",
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
            "const:720:8"
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
      "00639db8",
      "DATA",
      [
        "storage",
        "00c73720",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00639db8",
      "DATA",
      [
        "storage",
        "00c737f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639d74 ["COPY", "tmp:0:8", ["const:720:8"]]
- 00639d74 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00639d74 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00639d74 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00639db4 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 00639db4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00639db4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00639db4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00639d94 ["INT_ADD", "register:40f0:8", ["const:639d94:8", "const:4:8"]]
- 00639d94 ["CALL", null, ["callee:00c53d70:8"]]
+ 00639dd4 ["INT_ADD", "register:40f0:8", ["const:639dd4:8", "const:4:8"]]
+ 00639dd4 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-9163410f13a4e5de97ba63936660a392"></a>

### [`00639f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/00639f30.md) → [`00639f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639f70.md) FUN_00639f70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00639f88",
      "incomplete_value": false,
      "site": "00639f8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00639f48",
      "incomplete_value": false,
      "site": "00639f4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "00639f8c",
      "DATA",
      [
        "storage",
        "00c737a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00639f8c",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639f8c ["INT_ADD", "register:40f0:8", ["const:639f8c:8", "const:4:8"]]
- 00639f8c ["CALL", null, ["callee:00c57f50:8"]]
+ 00639fcc ["INT_ADD", "register:40f0:8", ["const:639fcc:8", "const:4:8"]]
+ 00639fcc ["CALL", null, ["callee:00c57f50:8"]]
- 00639f48 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 00639f48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00639f48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00639f48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00639f88 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 00639f88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00639f88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00639f88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00639f5c ["INT_ADD", "register:40f0:8", ["const:639f5c:8", "const:4:8"]]
- 00639f5c ["CALL", null, ["callee:00c53da0:8"]]
+ 00639f9c ["INT_ADD", "register:40f0:8", ["const:639f9c:8", "const:4:8"]]
+ 00639f9c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-8177bac77ecaa6088d3df75a7d75bd07"></a>

### [`00639fa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/00639fa8.md) → [`00639fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639fe8.md) FUN_00639fe8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a000",
      "incomplete_value": false,
      "site": "0063a004",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00639fc0",
      "incomplete_value": false,
      "site": "00639fc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "0063a004",
      "DATA",
      [
        "storage",
        "00c737a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a004",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639fc0 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 00639fc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00639fc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00639fc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0063a000 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 0063a000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00639fd4 ["INT_ADD", "register:40f0:8", ["const:639fd4:8", "const:4:8"]]
- 00639fd4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0063a014 ["INT_ADD", "register:40f0:8", ["const:63a014:8", "const:4:8"]]
+ 0063a014 ["CALL", null, ["callee:00c53da0:8"]]
- 00639fe8 ["INT_ADD", "register:40f0:8", ["const:639fe8:8", "const:4:8"]]
- 00639fe8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0063a028 ["INT_ADD", "register:40f0:8", ["const:63a028:8", "const:4:8"]]
+ 0063a028 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-580d02b0594d61c1e2a56704d1c9483e"></a>

### [`0063a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063a020.md) → [`0063a060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a060.md) FUN_0063a060

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a090",
      "incomplete_value": false,
      "site": "0063a090",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063a050",
      "incomplete_value": false,
      "site": "0063a050",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "0063a090",
      "DATA",
      [
        "storage",
        "00c737a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a090",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063a034 ["INT_ADD", "register:40f0:8", ["const:63a034:8", "const:4:8"]]
- 0063a034 ["CALL", null, ["callee:00c57f60:8"]]
+ 0063a074 ["INT_ADD", "register:40f0:8", ["const:63a074:8", "const:4:8"]]
+ 0063a074 ["CALL", null, ["callee:00c57f60:8"]]
- 0063a044 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 0063a044 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 0063a044 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 0063a044 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 0063a084 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 0063a084 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 0063a084 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 0063a084 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
- 0063a074 ["INT_ADD", "register:40f0:8", ["const:63a074:8", "const:4:8"]]
- 0063a074 ["CALL", null, ["callee:0043bb60:8"]]
+ 0063a0b4 ["INT_ADD", "register:40f0:8", ["const:63a0b4:8", "const:4:8"]]
+ 0063a0b4 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-8e12443aa56ab2671ba6f6ac41bf0c17"></a>

### [`0063a0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063a0b4.md) → [`0063a0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a0f4.md) FUN_0063a0f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a114",
      "incomplete_value": false,
      "site": "0063a114",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063a0d4",
      "incomplete_value": false,
      "site": "0063a0d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "0063a114",
      "DATA",
      [
        "storage",
        "00c737a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a114",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063a0c8 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 0063a0c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0063a0c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0063a0c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0063a108 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 0063a108 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0063a108 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0063a108 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0063a0d0 ["COPY", "register:40a0:8", ["register:4000:8"]]
- 0063a100 ["INT_ADD", "register:40f0:8", ["const:63a100:8", "const:4:8"]]
- 0063a100 ["CALL", null, ["callee:0043bb60:8"]]
+ 0063a140 ["INT_ADD", "register:40f0:8", ["const:63a140:8", "const:4:8"]]
+ 0063a140 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-de66d60a83a8c1beda513217a5f107ac"></a>

### [`0063a200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063a200.md) → [`0063a240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a240.md) FUN_0063a240

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00481430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481430.md) [`004823fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/004823fc.md) [`00482538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/00482538.md) [`00482b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/00482b0c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md) [`0048243c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/0048243c.md) [`00482578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482578.md) [`00482b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482b4c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.84% / 新版 96.84%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a2f0",
      "incomplete_value": false,
      "site": "0063a2f4",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:600:8"
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
      "definition_site": "0063a2b0",
      "incomplete_value": false,
      "site": "0063a2b4",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:530:8"
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
      "0063a2f4",
      "DATA",
      [
        "storage",
        "00c65540",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a2f4",
      "DATA",
      [
        "storage",
        "00c65610",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063a22c ["INT_ADD", "register:40f0:8", ["const:63a22c:8", "const:4:8"]]
- 0063a22c ["CALL", null, ["callee:00481470:8"]]
+ 0063a26c ["INT_ADD", "register:40f0:8", ["const:63a26c:8", "const:4:8"]]
+ 0063a26c ["CALL", null, ["callee:00481470:8"]]
- 0063a23c ["INT_ADD", "register:40f0:8", ["const:63a23c:8", "const:4:8"]]
- 0063a23c ["CALL", null, ["callee:0048243c:8"]]
+ 0063a27c ["INT_ADD", "register:40f0:8", ["const:63a27c:8", "const:4:8"]]
+ 0063a27c ["CALL", null, ["callee:0048243c:8"]]
- 0063a258 ["INT_ADD", "register:40f0:8", ["const:63a258:8", "const:4:8"]]
- 0063a258 ["CALL", null, ["callee:00c53d70:8"]]
+ 0063a298 ["INT_ADD", "register:40f0:8", ["const:63a298:8", "const:4:8"]]
+ 0063a298 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-a8a26f99037b9ca6f1915e392bec85fd"></a>

### [`0063a3d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063a3d8.md) → [`0063a418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a418.md) _INIT_81

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
      "definition_site": "0063a454",
      "incomplete_value": true,
      "site": "0063a470",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a414",
      "incomplete_value": true,
      "site": "0063a430",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a478",
      "incomplete_value": true,
      "site": "0063a494",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a438",
      "incomplete_value": true,
      "site": "0063a454",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a498",
      "incomplete_value": true,
      "site": "0063a4b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a458",
      "incomplete_value": true,
      "site": "0063a474",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0063a454",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0063a478",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0063a498",
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
      "0063a454",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0063a478",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0063a498",
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
- 0063a450 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0063a450 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0063a450 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0063a450 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0063a490 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0063a490 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0063a490 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0063a490 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0063a470 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0063a470 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0063a470 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0063a470 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0063a4b0 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0063a4b0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0063a4b0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0063a4b0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0063a60c ["INT_ADD", "register:40f0:8", ["const:63a60c:8", "const:4:8"]]
- 0063a60c ["CALL", null, ["callee:00c57f00:8"]]
+ 0063a64c ["INT_ADD", "register:40f0:8", ["const:63a64c:8", "const:4:8"]]
+ 0063a64c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-e831d956aa22a28fe6c2d9cf33f6e328"></a>

### [`0063a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063a7a4.md) → [`0063a7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a7e4.md) FUN_0063a7e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0064d9ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064d/0064d9ec.md) · 呼出先 17件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f6e4.md) [`0046f744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f744.md)
- 新版 呼出元 1件 [`0064da2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064da2c.md) · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md) [`0046f784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f784.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 1件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a82c",
      "incomplete_value": true,
      "site": "0063a83c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:308:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063a7ec",
      "incomplete_value": true,
      "site": "0063a7fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:355:8"
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
      "definition_site": "0063a830",
      "incomplete_value": true,
      "site": "0063a840",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "0063a7f0",
      "incomplete_value": true,
      "site": "0063a800",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a834",
      "incomplete_value": true,
      "site": "0063a844",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a7f4",
      "incomplete_value": true,
      "site": "0063a804",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0063a810",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "0063a82c",
      "READ",
      [
        "storage",
        "002a1355",
        null,
        "string"
      ]
    ],
    [
      "0063a830",
      "READ",
      [
        "storage",
        "002a1364",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0063a810",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0063a82c",
      "READ",
      [
        "storage",
        "002a1308",
        null,
        "string"
      ]
    ],
    [
      "0063a830",
      "READ",
      [
        "storage",
        "002a1317",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063a880 ["INT_ADD", "register:40f0:8", ["const:63a880:8", "const:4:8"]]
- 0063a880 ["CALL", null, ["callee:0047e64c:8"]]
+ 0063a8c0 ["INT_ADD", "register:40f0:8", ["const:63a8c0:8", "const:4:8"]]
+ 0063a8c0 ["CALL", null, ["callee:0047e64c:8"]]
- 0063a9b4 ["INT_ADD", "register:40f0:8", ["const:63a9b4:8", "const:4:8"]]
- 0063a9b4 ["CALL", null, ["callee:0046e9b0:8"]]
+ 0063a9f4 ["INT_ADD", "register:40f0:8", ["const:63a9f4:8", "const:4:8"]]
+ 0063a9f4 ["CALL", null, ["callee:0046e9b0:8"]]
- 0063a9f4 ["INT_ADD", "register:40f0:8", ["const:63a9f4:8", "const:4:8"]]
- 0063a9f4 ["CALL", null, ["callee:00851550:8"]]
+ 0063aa34 ["INT_ADD", "register:40f0:8", ["const:63aa34:8", "const:4:8"]]
+ 0063aa34 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-766555bf4122fcf1f74412477424e991"></a>

### [`0063b7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063b/0063b7c4.md) → [`0063b804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b804.md) FUN_0063b804

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0063b634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063b/0063b634.md) [`0064d9ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064d/0064d9ec.md) · 呼出先 16件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f6e4.md) [`0046f744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f744.md)
- 新版 呼出元 2件 [`0063b674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b674.md) [`0064da2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064da2c.md) · 呼出先 16件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md) [`0046f784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f784.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.12% / 新版 92.12%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063b854",
      "incomplete_value": true,
      "site": "0063b86c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063b814",
      "incomplete_value": true,
      "site": "0063b82c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:780:8"
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
      "definition_site": "0063b870",
      "incomplete_value": true,
      "site": "0063b87c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063b830",
      "incomplete_value": true,
      "site": "0063b83c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063ba5c",
      "incomplete_value": true,
      "site": "0063ba74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063ba1c",
      "incomplete_value": true,
      "site": "0063ba34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cb0:8"
              ]
            ]
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
      "0063b854",
      "READ",
      [
        "storage",
        "002c2780",
        null,
        null
      ]
    ],
    [
      "0063b870",
      "READ",
      [
        "storage",
        "002c2660",
        null,
        null
      ]
    ],
    [
      "0063b89c",
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
      "0063b854",
      "READ",
      [
        "storage",
        "002c27c0",
        null,
        null
      ]
    ],
    [
      "0063b870",
      "READ",
      [
        "storage",
        "002c26a0",
        null,
        null
      ]
    ],
    [
      "0063b89c",
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
+ 0063b83c ["COPY", "register:40a8:8", ["const:ca5000:8"]]
- 0063b9f8 ["INT_ADD", "register:40f0:8", ["const:63b9f8:8", "const:4:8"]]
- 0063b9f8 ["CALL", null, ["callee:00c57f00:8"]]
+ 0063ba38 ["INT_ADD", "register:40f0:8", ["const:63ba38:8", "const:4:8"]]
+ 0063ba38 ["CALL", null, ["callee:00c57f00:8"]]
- 0063bab4 ["INT_ADD", "register:40f0:8", ["const:63bab4:8", "const:4:8"]]
- 0063bab4 ["CALL", null, ["callee:0046e9b0:8"]]
+ 0063baf4 ["INT_ADD", "register:40f0:8", ["const:63baf4:8", "const:4:8"]]
+ 0063baf4 ["CALL", null, ["callee:0046e9b0:8"]]
~~~


<a id="compare-04e201604f86c8d178dc7bf9f7d1f45b"></a>

### [`0063bc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063b/0063bc98.md) → [`0063bcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063bcd8.md) FUN_0063bcd8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0063d0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063d/0063d0b0.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) · 呼出先 11件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0046ee58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee58.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 2件 [`0063d0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d0f0.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 11件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.60% / 新版 99.60%

優先判定に残った影響 `call_target` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063bfd4",
      "incomplete_value": true,
      "site": "0063bfdc",
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
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063bf94",
      "incomplete_value": true,
      "site": "0063bf9c",
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
                "const:80:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063bd60",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063bd20",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "0063be90",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063be50",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 24,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0063bcf8",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[39]"
      ]
    ],
    [
      "0063bd1c",
      "DATA",
      [
        "storage",
        "00434788",
        null,
        "byte[43]"
      ]
    ],
    [
      "0063bd60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0063bcf8",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[43]"
      ]
    ],
    [
      "0063bd1c",
      "DATA",
      [
        "storage",
        "00434788",
        "fde_00434788",
        "dword"
      ]
    ],
    [
      "0063bd60",
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
- 0063bd20 ["INT_ADD", "register:40f0:8", ["const:63bd20:8", "const:4:8"]]
- 0063bd20 ["CALL", null, ["ram:47acf4:8"]]
+ 0063bd60 ["INT_ADD", "register:40f0:8", ["const:63bd60:8", "const:4:8"]]
+ 0063bd60 ["CALL", null, ["ram:47ad34:8"]]
- 0063bd60 ["INT_ADD", "register:40f0:8", ["const:63bd60:8", "const:4:8"]]
- 0063bd60 ["CALL", null, ["callee:0085b32c:8"]]
+ 0063bda0 ["INT_ADD", "register:40f0:8", ["const:63bda0:8", "const:4:8"]]
+ 0063bda0 ["CALL", null, ["callee:0085b32c:8"]]
- 0063be50 ["INT_ADD", "register:40f0:8", ["const:63be50:8", "const:4:8"]]
- 0063be50 ["CALL", null, ["ram:47acf4:8"]]
+ 0063be90 ["INT_ADD", "register:40f0:8", ["const:63be90:8", "const:4:8"]]
+ 0063be90 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-e1232b1a9f29ca02b411d89d9a0e3e09"></a>

### [`0063c5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063c/0063c5cc.md) → [`0063c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c60c.md) FUN_0063c60c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) [`006ee740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ee/006ee740.md) [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) [`006fb1f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb1f4.md) [`006fda2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fd/006fda2c.md) · 呼出先 13件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0063b634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063b/0063b634.md) [`0063cd1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063c/0063cd1c.md) [`00652b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/00652b0c.md)
- 新版 呼出元 5件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006ee798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ee/006ee798.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) [`006fb24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb24c.md) [`006fda84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fda84.md) · 呼出先 13件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0063b674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b674.md) [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md) [`00652b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652b4c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.79% / 新版 96.79%

優先判定に残った影響 `call_target` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063c634",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063c5f4",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "site": "0063c6c0",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063c680",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063c75c",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063c71c",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "0063c634",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0063c6c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0063c75c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "0063c634",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0063c6c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0063c75c",
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
- 0063c5f4 ["INT_ADD", "register:40f0:8", ["const:63c5f4:8", "const:4:8"]]
- 0063c5f4 ["CALL", null, ["ram:71bed8:8"]]
+ 0063c634 ["INT_ADD", "register:40f0:8", ["const:63c634:8", "const:4:8"]]
+ 0063c634 ["CALL", null, ["ram:71bf30:8"]]
- 0063c680 ["INT_ADD", "register:40f0:8", ["const:63c680:8", "const:4:8"]]
- 0063c680 ["CALL", null, ["ram:71bed8:8"]]
+ 0063c6c0 ["INT_ADD", "register:40f0:8", ["const:63c6c0:8", "const:4:8"]]
+ 0063c6c0 ["CALL", null, ["ram:71bf30:8"]]
- 0063c71c ["INT_ADD", "register:40f0:8", ["const:63c71c:8", "const:4:8"]]
- 0063c71c ["CALL", null, ["ram:71bed8:8"]]
+ 0063c75c ["INT_ADD", "register:40f0:8", ["const:63c75c:8", "const:4:8"]]
+ 0063c75c ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-c27881f0e2f127afd60c1208ecccb58e"></a>

### [`0063cd1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063c/0063cd1c.md) → [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md) FUN_0063cd5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0063c5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063c/0063c5cc.md) [`0064e37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e37c.md) [`0064e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e540.md) [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0063b634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063b/0063b634.md) [`00652b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/00652b0c.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md)
- 新版 呼出元 4件 [`0063c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c60c.md) [`0064e3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3bc.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0063b674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b674.md) [`00652b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652b4c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_target` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063cd88",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063cd48",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "site": "0063cdf4",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063cdb4",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "site": "0063cee4",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063cea4",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "0063cd88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0063cdf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0063cee4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "0063cd88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0063cdf4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0063cee4",
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
- 0063cd48 ["INT_ADD", "register:40f0:8", ["const:63cd48:8", "const:4:8"]]
- 0063cd48 ["CALL", null, ["ram:71bed8:8"]]
+ 0063cd88 ["INT_ADD", "register:40f0:8", ["const:63cd88:8", "const:4:8"]]
+ 0063cd88 ["CALL", null, ["ram:71bf30:8"]]
- 0063cdb4 ["INT_ADD", "register:40f0:8", ["const:63cdb4:8", "const:4:8"]]
- 0063cdb4 ["CALL", null, ["ram:71bed8:8"]]
+ 0063cdf4 ["INT_ADD", "register:40f0:8", ["const:63cdf4:8", "const:4:8"]]
+ 0063cdf4 ["CALL", null, ["ram:71bf30:8"]]
- 0063cea4 ["INT_ADD", "register:40f0:8", ["const:63cea4:8", "const:4:8"]]
- 0063cea4 ["CALL", null, ["ram:71bed8:8"]]
+ 0063cee4 ["INT_ADD", "register:40f0:8", ["const:63cee4:8", "const:4:8"]]
+ 0063cee4 ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-66fe4957a77e22b38947e60a61c5f975"></a>

### [`0063d24c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063d/0063d24c.md) → [`0063d28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d28c.md) FUN_0063d28c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0063dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063d/0063dd10.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 95.42% / 新版 95.42%

優先判定に残った影響 `store_value` 4件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063d2c8",
      "incomplete_value": false,
      "site": "0063d2cc",
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
      "definition_site": "0063d288",
      "incomplete_value": false,
      "site": "0063d28c",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063d2e4",
      "incomplete_value": true,
      "site": "0063d2f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5dc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063d2a4",
      "incomplete_value": true,
      "site": "0063d2b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:630:8"
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
      "definition_site": "0063d2e8",
      "incomplete_value": true,
      "site": "0063d2f8",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "0063d2a8",
      "incomplete_value": true,
      "site": "0063d2b8",
      "value": [
        "LOAD",
        "16",
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
      "0063d2cc",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "0063d2e4",
      "READ",
      [
        "storage",
        "002bb630",
        null,
        "string"
      ]
    ],
    [
      "0063d2e8",
      "READ",
      [
        "storage",
        "002bb63a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0063d2cc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0063d2e4",
      "READ",
      [
        "storage",
        "002bb5dc",
        null,
        "string"
      ]
    ],
    [
      "0063d2e8",
      "READ",
      [
        "storage",
        "002bb5e6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063d2f4 ["INT_ADD", "register:40f0:8", ["const:63d2f4:8", "const:4:8"]]
- 0063d2f4 ["CALL", null, ["callee:0048795c:8"]]
+ 0063d334 ["INT_ADD", "register:40f0:8", ["const:63d334:8", "const:4:8"]]
+ 0063d334 ["CALL", null, ["callee:0048795c:8"]]
- 0063d280 ["INT_ADD", "register:40f0:8", ["const:63d280:8", "const:4:8"]]
- 0063d280 ["CALL", null, ["callee:00487e60:8"]]
+ 0063d2c0 ["INT_ADD", "register:40f0:8", ["const:63d2c0:8", "const:4:8"]]
+ 0063d2c0 ["CALL", null, ["callee:00487e60:8"]]
- 0063d288 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 0063d288 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0063d288 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0063d288 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0063d2c8 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 0063d2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0063d2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0063d2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6de448c044c4a98e98a78f21c2ca5242"></a>

### [`0063dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063d/0063dd10.md) → [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) FUN_0063dd50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b11d84.md) · 呼出先 28件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md)
- 新版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 28件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 98.83% / 新版 98.83%

優先判定に残った影響 `store_destination` 1件, `store_value` 10件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063dd90",
      "incomplete_value": false,
      "site": "0063dd94",
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
      "definition_site": "0063dd50",
      "incomplete_value": false,
      "site": "0063dd54",
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
      "definition_site": "0063ddbc",
      "incomplete_value": true,
      "site": "0063ddd8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:317:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063dd7c",
      "incomplete_value": true,
      "site": "0063dd98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d7:8"
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
      "definition_site": "0063dddc",
      "incomplete_value": true,
      "site": "0063dddc",
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
      "definition_site": "0063dd9c",
      "incomplete_value": true,
      "site": "0063dd9c",
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
      "0063dd94",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "0063ddbc",
      "READ",
      [
        "storage",
        "002b62d7",
        null,
        "string"
      ]
    ],
    [
      "0063ddc4",
      "READ",
      [
        "storage",
        "002b62e5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0063dd94",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0063ddbc",
      "READ",
      [
        "storage",
        "002b6317",
        null,
        "string"
      ]
    ],
    [
      "0063ddc4",
      "READ",
      [
        "storage",
        "002b6325",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063dd5c ["INT_ADD", "register:40f0:8", ["const:63dd5c:8", "const:4:8"]]
- 0063dd5c ["CALL", null, ["callee:0063d28c:8"]]
+ 0063dd9c ["INT_ADD", "register:40f0:8", ["const:63dd9c:8", "const:4:8"]]
+ 0063dd9c ["CALL", null, ["callee:0063d28c:8"]]
- 0063dddc ["INT_ADD", "register:40f0:8", ["const:63dddc:8", "const:4:8"]]
- 0063dddc ["CALL", null, ["callee:0048795c:8"]]
+ 0063de1c ["INT_ADD", "register:40f0:8", ["const:63de1c:8", "const:4:8"]]
+ 0063de1c ["CALL", null, ["callee:0048795c:8"]]
- 006402ac ["INT_ADD", "register:40f0:8", ["const:6402ac:8", "const:4:8"]]
- 006402ac ["CALL", null, ["callee:006409f0:8"]]
+ 006402ec ["INT_ADD", "register:40f0:8", ["const:6402ec:8", "const:4:8"]]
+ 006402ec ["CALL", null, ["callee:006409f0:8"]]
~~~


<a id="compare-f0806f7ad8dc5780f760722434798610"></a>

### [`00642010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00642/00642010.md) → [`00642050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00642/00642050.md) FUN_00642050

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006430f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00643/006430f0.md) [`00645294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00645/00645294.md) · 呼出先 19件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md)
- 新版 呼出元 2件 [`00643130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00643/00643130.md) [`006452d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/006452d4.md) · 呼出先 19件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 88.74% / 新版 88.74%

優先判定に残った影響 `call_argument_candidate` 17件, `call_target` 1件, `store_destination` 14件, `store_value` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006421c8",
      "incomplete_value": true,
      "site": "006421d8",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00642188",
      "incomplete_value": true,
      "site": "00642198",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:a90:8"
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
      "definition_site": "006421dc",
      "incomplete_value": true,
      "site": "006421e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064219c",
      "incomplete_value": true,
      "site": "006421a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:290:8"
              ]
            ]
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
      "definition_site": "00642394",
      "incomplete_value": true,
      "site": "006423a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:109:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00642354",
      "incomplete_value": true,
      "site": "00642360",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:15d:8"
              ]
            ]
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
      "006421c8",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ],
    [
      "006421dc",
      "READ",
      [
        "storage",
        "002c3290",
        null,
        null
      ]
    ],
    [
      "006422a4",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "006421c8",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ],
    [
      "006421dc",
      "READ",
      [
        "storage",
        "002c32d0",
        null,
        null
      ]
    ],
    [
      "006422a4",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00642158 ["COPY", "register:0:8", ["register:4040:8"]]
- 00642158 ["INT_ADD", "register:40f0:8", ["const:642158:8", "const:4:8"]]
- 00642158 ["CALLIND", null, ["register:0:8"]]
+ 00642198 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00642198 ["INT_ADD", "register:40f0:8", ["const:642198:8", "const:4:8"]]
+ 00642198 ["CALLIND", null, ["register:0:8"]]
- 00642160 ["INT_ADD", "register:40f0:8", ["const:642160:8", "const:4:8"]]
- 00642160 ["CALL", null, ["callee:00c57f50:8"]]
+ 006421a0 ["INT_ADD", "register:40f0:8", ["const:6421a0:8", "const:4:8"]]
+ 006421a0 ["CALL", null, ["callee:00c57f50:8"]]
- 006421d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 006421d8 ["INT_ADD", "register:40f0:8", ["const:6421d8:8", "const:4:8"]]
- 006421d8 ["CALLIND", null, ["register:0:8"]]
+ 00642218 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00642218 ["INT_ADD", "register:40f0:8", ["const:642218:8", "const:4:8"]]
+ 00642218 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a40a3e82b9abc5da71ea6b9b1ddec471"></a>

### [`006430f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00643/006430f0.md) → [`00643130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00643/00643130.md) FUN_00643130

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) · 呼出先 45件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 45件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 98.84% / 新版 98.84%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 8件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00643b6c",
      "incomplete_value": false,
      "site": "00643b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00643b2c",
      "incomplete_value": false,
      "site": "00643b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:838:8"
          ]
        ]
      ]
    },
    "ordinal": 122,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006441f8",
      "incomplete_value": false,
      "site": "006441f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006441b8",
      "incomplete_value": false,
      "site": "006441b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "ordinal": 150,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00644520",
      "incomplete_value": false,
      "site": "00644520",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006444e0",
      "incomplete_value": false,
      "site": "006444e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "ordinal": 173,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00643168",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00643174",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064317c",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00643168",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00643174",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064317c",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00643148 ["INT_ADD", "register:40f0:8", ["const:643148:8", "const:4:8"]]
- 00643148 ["CALL", null, ["callee:00c586e0:8"]]
+ 00643188 ["INT_ADD", "register:40f0:8", ["const:643188:8", "const:4:8"]]
+ 00643188 ["CALL", null, ["callee:00c586e0:8"]]
- 00644178 ["INT_ADD", "register:40f0:8", ["const:644178:8", "const:4:8"]]
- 00644178 ["CALL", null, ["callee:00c57f50:8"]]
+ 006441b8 ["INT_ADD", "register:40f0:8", ["const:6441b8:8", "const:4:8"]]
+ 006441b8 ["CALL", null, ["callee:00c57f50:8"]]
- 00643128 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 00643128 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00643168 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 00643168 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-10e1f87f0b15a541ca56e2f6d7339dfc"></a>

### [`00646080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00646/00646080.md) → [`006460c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/006460c0.md) FUN_006460c0

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00651aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00651/00651aa4.md) · 呼出先 13件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 13件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.80% / 新版 98.80%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006460f8",
      "incomplete_value": true,
      "site": "006460f8",
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
      "definition_site": "006460b8",
      "incomplete_value": true,
      "site": "006460b8",
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
      "definition_site": "00646100",
      "incomplete_value": false,
      "site": "00646110",
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
      "definition_site": "006460c0",
      "incomplete_value": false,
      "site": "006460d0",
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
      "definition_site": "00646108",
      "incomplete_value": false,
      "site": "00646110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006460c8",
      "incomplete_value": false,
      "site": "006460d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "006460f0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00646100",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00646108",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006460f0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00646100",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00646108",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006460d0 ["INT_ADD", "register:40f0:8", ["const:6460d0:8", "const:4:8"]]
- 006460d0 ["CALL", null, ["callee:00c586e0:8"]]
+ 00646110 ["INT_ADD", "register:40f0:8", ["const:646110:8", "const:4:8"]]
+ 00646110 ["CALL", null, ["callee:00c586e0:8"]]
- 006460f8 ["INT_ADD", "register:40f0:8", ["const:6460f8:8", "const:4:8"]]
- 006460f8 ["CALL", null, ["callee:00467b6c:8"]]
+ 00646138 ["INT_ADD", "register:40f0:8", ["const:646138:8", "const:4:8"]]
+ 00646138 ["CALL", null, ["callee:00467b6c:8"]]
- 00646110 ["INT_ADD", "register:40f0:8", ["const:646110:8", "const:4:8"]]
- 00646110 ["CALL", null, ["callee:00851550:8"]]
+ 00646150 ["INT_ADD", "register:40f0:8", ["const:646150:8", "const:4:8"]]
+ 00646150 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-726ffc64616577e3e50ae2243657ee2c"></a>

### [`006465b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00646/006465b0.md) → [`006465f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/006465f0.md) FUN_006465f0

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00646080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00646/00646080.md) · 呼出先 34件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00469068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469068.md)
- 新版 呼出元 1件 [`006460c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/006460c0.md) · 呼出先 34件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`004690a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/004690a8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.60% / 新版 99.60%

優先判定に残った影響 `call_target` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064754c",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064750c",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 95,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00647674",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00647634",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 105,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00647718",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006476d8",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 109,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00646804",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[47]"
      ]
    ],
    [
      "00646808",
      "DATA",
      [
        "storage",
        "004347b8",
        null,
        "byte[47]"
      ]
    ],
    [
      "00646828",
      "DATA",
      [
        "storage",
        "004347b8",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00646804",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[43]"
      ]
    ],
    [
      "00646808",
      "DATA",
      [
        "storage",
        "004347b8",
        null,
        "byte[43]"
      ]
    ],
    [
      "00646828",
      "DATA",
      [
        "storage",
        "004347b8",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064750c ["INT_ADD", "register:40f0:8", ["const:64750c:8", "const:4:8"]]
- 0064750c ["CALL", null, ["ram:71bed8:8"]]
+ 0064754c ["INT_ADD", "register:40f0:8", ["const:64754c:8", "const:4:8"]]
+ 0064754c ["CALL", null, ["ram:71bf30:8"]]
- 00647634 ["INT_ADD", "register:40f0:8", ["const:647634:8", "const:4:8"]]
- 00647634 ["CALL", null, ["ram:71bed8:8"]]
+ 00647674 ["INT_ADD", "register:40f0:8", ["const:647674:8", "const:4:8"]]
+ 00647674 ["CALL", null, ["ram:71bf30:8"]]
- 006476d8 ["INT_ADD", "register:40f0:8", ["const:6476d8:8", "const:4:8"]]
- 006476d8 ["CALL", null, ["ram:71bed8:8"]]
+ 00647718 ["INT_ADD", "register:40f0:8", ["const:647718:8", "const:4:8"]]
+ 00647718 ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-7931aabe74a9311203f72166d3c5f630"></a>

### [`0064be88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064b/0064be88.md) → [`0064bec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064bec8.md) FUN_0064bec8

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00651aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00651/00651aa4.md) · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.46% / 新版 99.46%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0064bf10",
      "incomplete_value": false,
      "site": "0064bf24",
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
      "definition_site": "0064bed0",
      "incomplete_value": false,
      "site": "0064bee4",
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
      "definition_site": "0064bf18",
      "incomplete_value": false,
      "site": "0064bf24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064bed8",
      "incomplete_value": false,
      "site": "0064bee4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "0064bf04",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0064bf10",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064bf18",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0064bf04",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0064bf10",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064bf18",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064bee4 ["INT_ADD", "register:40f0:8", ["const:64bee4:8", "const:4:8"]]
- 0064bee4 ["CALL", null, ["callee:00c586e0:8"]]
+ 0064bf24 ["INT_ADD", "register:40f0:8", ["const:64bf24:8", "const:4:8"]]
+ 0064bf24 ["CALL", null, ["callee:00c586e0:8"]]
- 0064bec4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 0064bec4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0064bf04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 0064bf04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0064bed0 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 0064bed0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0064bed0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0064bed0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0064bf10 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 0064bf10 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0064bf10 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0064bf10 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-fe7e9286d85109c2c7c0e5e1c7e94aaa"></a>

### [`0064ca08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064c/0064ca08.md) → [`0064ca48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064c/0064ca48.md) FUN_0064ca48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0064cc70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064c/0064cc70.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0064ccb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064c/0064ccb0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.59% / 新版 97.59%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0064ca60",
      "incomplete_value": true,
      "site": "0064ca64",
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
                "const:ca6000:8"
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
    "old": {
      "definition_site": "0064ca20",
      "incomplete_value": true,
      "site": "0064ca24",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:ba0:8"
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
      "definition_site": "0064ca78",
      "incomplete_value": true,
      "site": "0064ca7c",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:c88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064ca38",
      "incomplete_value": true,
      "site": "0064ca3c",
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
                "const:ca6000:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0064ca90",
      "incomplete_value": true,
      "site": "0064ca94",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:c70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064ca50",
      "incomplete_value": true,
      "site": "0064ca54",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:b70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0064ca54",
      "READ",
      [
        "storage",
        "00ca6b90",
        null,
        "undefined1"
      ]
    ],
    [
      "0064ca60",
      "READ",
      [
        "storage",
        "00ca6ba0",
        null,
        "undefined8"
      ]
    ],
    [
      "0064ca6c",
      "READ",
      [
        "storage",
        "00ca6b78",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0064ca54",
      "READ",
      [
        "storage",
        "00ca6c90",
        null,
        "undefined1"
      ]
    ],
    [
      "0064ca60",
      "READ",
      [
        "storage",
        "00ca6ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "0064ca6c",
      "READ",
      [
        "storage",
        "00ca6c78",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064ca14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b90:8"]]
- 0064ca14 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0064ca14 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 0064ca54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c90:8"]]
+ 0064ca54 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0064ca54 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 0064ca24 ["INT_ADD", "register:40f0:8", ["const:64ca24:8", "const:4:8"]]
- 0064ca24 ["CALL", null, ["callee:00c57f80:8"]]
+ 0064ca64 ["INT_ADD", "register:40f0:8", ["const:64ca64:8", "const:4:8"]]
+ 0064ca64 ["CALL", null, ["callee:00c57f80:8"]]
- 0064ca2c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b78:8"]]
- 0064ca2c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0064ca2c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 0064ca6c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c78:8"]]
+ 0064ca6c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0064ca6c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-26dc21c9ed4733c9e081f20b792a65a5"></a>

### [`0064d834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064d/0064d834.md) → [`0064d874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064d874.md) FUN_0064d874

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b11d84.md) · 呼出先 10件 [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md) [`00b110ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b110ec.md)
- 新版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 10件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 81.11% / 新版 81.11%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0064d8a8",
      "incomplete_value": false,
      "site": "0064d8b4",
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
      "definition_site": "0064d868",
      "incomplete_value": false,
      "site": "0064d874",
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
      "definition_site": "0064d8bc",
      "incomplete_value": true,
      "site": "0064d8cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f0e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064d87c",
      "incomplete_value": true,
      "site": "0064d88c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f6a:8"
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
      "definition_site": "0064d8d0",
      "incomplete_value": true,
      "site": "0064d8d0",
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
      "definition_site": "0064d890",
      "incomplete_value": true,
      "site": "0064d890",
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
      "0064d8b4",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "0064d8bc",
      "READ",
      [
        "storage",
        "002a9f6a",
        null,
        "string"
      ]
    ],
    [
      "0064d8c4",
      "READ",
      [
        "storage",
        "002a9f77",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0064d8b4",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0064d8bc",
      "READ",
      [
        "storage",
        "002a9f0e",
        null,
        "string"
      ]
    ],
    [
      "0064d8c4",
      "READ",
      [
        "storage",
        "002a9f1b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064d8c4 ["INT_ADD", "register:40f0:8", ["const:64d8c4:8", "const:4:8"]]
- 0064d8c4 ["CALL", null, ["callee:0048795c:8"]]
+ 0064d904 ["INT_ADD", "register:40f0:8", ["const:64d904:8", "const:4:8"]]
+ 0064d904 ["CALL", null, ["callee:0048795c:8"]]
- 0064d8d0 ["INT_ADD", "register:40f0:8", ["const:64d8d0:8", "const:4:8"]]
- 0064d8d0 ["CALL", null, ["callee:0048797c:8"]]
+ 0064d910 ["INT_ADD", "register:40f0:8", ["const:64d910:8", "const:4:8"]]
+ 0064d910 ["CALL", null, ["callee:0048797c:8"]]
- 0064d944 ["INT_ADD", "register:40f0:8", ["const:64d944:8", "const:4:8"]]
- 0064d944 ["CALL", null, ["callee:00c58080:8"]]
+ 0064d984 ["INT_ADD", "register:40f0:8", ["const:64d984:8", "const:4:8"]]
+ 0064d984 ["CALL", null, ["callee:00c58080:8"]]
~~~


<a id="compare-13baea9f15ed8d234b83454211c32387"></a>

### [`0064d9ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064d/0064d9ec.md) → [`0064da2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064da2c.md) FUN_0064da2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0064e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e540.md) · 呼出先 13件 [`0046e770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e770.md) [`0046e780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e780.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f6e4.md)
- 新版 呼出元 1件 [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) · 呼出先 13件 [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.85% / 新版 85.85%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064da7c",
      "incomplete_value": true,
      "site": "0064da7c",
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
                "const:1fe:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064da3c",
      "incomplete_value": true,
      "site": "0064da3c",
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
                "const:24b:8"
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
      "definition_site": "0064da70",
      "incomplete_value": true,
      "site": "0064da80",
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
      "definition_site": "0064da30",
      "incomplete_value": true,
      "site": "0064da40",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064db30",
      "incomplete_value": true,
      "site": "0064db44",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064daf0",
      "incomplete_value": true,
      "site": "0064db04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dec:8"
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
      "0064da6c",
      "READ",
      [
        "storage",
        "0029f24b",
        null,
        "string"
      ]
    ],
    [
      "0064da70",
      "READ",
      [
        "storage",
        "0029f252",
        null,
        "string"
      ]
    ],
    [
      "0064db30",
      "READ",
      [
        "storage",
        "002b3dec",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0064da6c",
      "READ",
      [
        "storage",
        "0029f1fe",
        null,
        "string"
      ]
    ],
    [
      "0064da70",
      "READ",
      [
        "storage",
        "0029f205",
        null,
        "string"
      ]
    ],
    [
      "0064db30",
      "READ",
      [
        "storage",
        "002b3e1d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064da80 ["INT_ADD", "register:40f0:8", ["const:64da80:8", "const:4:8"]]
- 0064da80 ["CALL", null, ["callee:00470104:8"]]
+ 0064dac0 ["INT_ADD", "register:40f0:8", ["const:64dac0:8", "const:4:8"]]
+ 0064dac0 ["CALL", null, ["callee:00470104:8"]]
- 0064dac8 ["INT_ADD", "register:40f0:8", ["const:64dac8:8", "const:4:8"]]
- 0064dac8 ["CALL", null, ["callee:00470120:8"]]
+ 0064db08 ["INT_ADD", "register:40f0:8", ["const:64db08:8", "const:4:8"]]
+ 0064db08 ["CALL", null, ["callee:00470120:8"]]
- 0064da14 ["INT_ADD", "register:40f0:8", ["const:64da14:8", "const:4:8"]]
- 0064da14 ["CALL", null, ["callee:0063a7e4:8"]]
+ 0064da54 ["INT_ADD", "register:40f0:8", ["const:64da54:8", "const:4:8"]]
+ 0064da54 ["CALL", null, ["callee:0063a7e4:8"]]
~~~


<a id="compare-613ae09838c4de167a3aed1e0b6867df"></a>

### [`0064dbc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064d/0064dbc8.md) → [`0064dc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064dc08.md) FUN_0064dc08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006554f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006554f0.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00641174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641174.md) [`00641c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641c68.md) [`006b7130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b7/006b7130.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md)
- 新版 呼出元 1件 [`00655530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655530.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006411b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/006411b4.md) [`00641ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ca8.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_target` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064dd04",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064dcc4",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "site": "0064dd1c",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064dcdc",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064ddf0",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064ddb0",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "0064dd04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0064dd1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0064dd4c",
      "DATA",
      [
        "storage",
        "00432898",
        null,
        "byte[27]"
      ]
    ]
  ],
  "added": [
    [
      "0064dd04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0064dd1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0064dd4c",
      "DATA",
      [
        "storage",
        "00432898",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064dcc4 ["INT_ADD", "register:40f0:8", ["const:64dcc4:8", "const:4:8"]]
- 0064dcc4 ["CALL", null, ["ram:71bed8:8"]]
+ 0064dd04 ["INT_ADD", "register:40f0:8", ["const:64dd04:8", "const:4:8"]]
+ 0064dd04 ["CALL", null, ["ram:71bf30:8"]]
- 0064dcdc ["INT_ADD", "register:40f0:8", ["const:64dcdc:8", "const:4:8"]]
- 0064dcdc ["CALL", null, ["ram:71bed8:8"]]
+ 0064dd1c ["INT_ADD", "register:40f0:8", ["const:64dd1c:8", "const:4:8"]]
+ 0064dd1c ["CALL", null, ["ram:71bf30:8"]]
- 0064ddb0 ["INT_ADD", "register:40f0:8", ["const:64ddb0:8", "const:4:8"]]
- 0064ddb0 ["CALL", null, ["ram:71bed8:8"]]
+ 0064ddf0 ["INT_ADD", "register:40f0:8", ["const:64ddf0:8", "const:4:8"]]
+ 0064ddf0 ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-989d3b69323343afee08f5c0cf6e4359"></a>

### [`0064df10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064d/0064df10.md) → [`0064df50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064df50.md) FUN_0064df50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0064a530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064a/0064a530.md) [`006535a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006535a0.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00641174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641174.md) [`00641c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641c68.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`0071d134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d134.md)
- 新版 呼出元 2件 [`0064a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a570.md) [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006411b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/006411b4.md) [`00641ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ca8.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`0071d18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d18c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.77% / 新版 98.77%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e028",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064dfe8",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "site": "0064e10c",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e0cc",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "0064e028",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0064e10c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "0064e028",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0064e10c",
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
- 0064dfe8 ["INT_ADD", "register:40f0:8", ["const:64dfe8:8", "const:4:8"]]
- 0064dfe8 ["CALL", null, ["ram:71bed8:8"]]
+ 0064e028 ["INT_ADD", "register:40f0:8", ["const:64e028:8", "const:4:8"]]
+ 0064e028 ["CALL", null, ["ram:71bf30:8"]]
- 0064e08c ["INT_ADD", "register:40f0:8", ["const:64e08c:8", "const:4:8"]]
- 0064e08c ["CALL", null, ["callee:00c57f80:8"]]
+ 0064e0cc ["INT_ADD", "register:40f0:8", ["const:64e0cc:8", "const:4:8"]]
+ 0064e0cc ["CALL", null, ["callee:00c57f80:8"]]
- 0064e0cc ["INT_ADD", "register:40f0:8", ["const:64e0cc:8", "const:4:8"]]
- 0064e0cc ["CALL", null, ["ram:71bed8:8"]]
+ 0064e10c ["INT_ADD", "register:40f0:8", ["const:64e10c:8", "const:4:8"]]
+ 0064e10c ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-093149f3f3040bcd2c9b906d72445c13"></a>

### [`0064e19c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e19c.md) → [`0064e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e1dc.md) FUN_0064e1dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0064a530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064a/0064a530.md) [`006535a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006535a0.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00641174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641174.md) [`00641c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641c68.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0064a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a570.md) [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006411b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/006411b4.md) [`00641ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ca8.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.31% / 新版 98.31%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e214",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e1d4",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "site": "0064e2e0",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e2a0",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "0064e214",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0064e2e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "0064e214",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0064e2e0",
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
- 0064e1d4 ["INT_ADD", "register:40f0:8", ["const:64e1d4:8", "const:4:8"]]
- 0064e1d4 ["CALL", null, ["ram:71bed8:8"]]
+ 0064e214 ["INT_ADD", "register:40f0:8", ["const:64e214:8", "const:4:8"]]
+ 0064e214 ["CALL", null, ["ram:71bf30:8"]]
- 0064e2a0 ["INT_ADD", "register:40f0:8", ["const:64e2a0:8", "const:4:8"]]
- 0064e2a0 ["CALL", null, ["ram:71bed8:8"]]
+ 0064e2e0 ["INT_ADD", "register:40f0:8", ["const:64e2e0:8", "const:4:8"]]
+ 0064e2e0 ["CALL", null, ["ram:71bf30:8"]]
- 0064e228 ["INT_ADD", "register:40f0:8", ["const:64e228:8", "const:4:8"]]
- 0064e228 ["CALL", null, ["callee:00c57f60:8"]]
+ 0064e268 ["INT_ADD", "register:40f0:8", ["const:64e268:8", "const:4:8"]]
+ 0064e268 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-0f189d39bb8435d043f56091c4a594fd"></a>

### [`0064e37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e37c.md) → [`0064e3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3bc.md) FUN_0064e3bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0064e374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e374.md) [`0064e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e540.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`006b3ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3ba4.md) · 呼出先 12件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ca8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ca8c.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0063cd1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063c/0063cd1c.md)
- 新版 呼出元 4件 [`0064e3b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3b4.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) · 呼出先 12件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `call_target` 5件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064e464",
      "incomplete_value": true,
      "site": "0064e474",
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
                "const:408:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064e424",
      "incomplete_value": true,
      "site": "0064e434",
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
                "const:3c8:8"
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
      "site": "0064e3fc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e3bc",
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
      "site": "0064e408",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e3c8",
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
      "0064e3fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0064e408",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0064e464",
      "READ",
      [
        "storage",
        "002c43c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0064e3fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0064e408",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0064e464",
      "READ",
      [
        "storage",
        "002c4408",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064e3bc ["INT_ADD", "register:40f0:8", ["const:64e3bc:8", "const:4:8"]]
- 0064e3bc ["CALL", null, ["ram:47acf4:8"]]
+ 0064e3fc ["INT_ADD", "register:40f0:8", ["const:64e3fc:8", "const:4:8"]]
+ 0064e3fc ["CALL", null, ["ram:47ad34:8"]]
- 0064e3c8 ["INT_ADD", "register:40f0:8", ["const:64e3c8:8", "const:4:8"]]
- 0064e3c8 ["CALL", null, ["ram:47acf4:8"]]
+ 0064e408 ["INT_ADD", "register:40f0:8", ["const:64e408:8", "const:4:8"]]
+ 0064e408 ["CALL", null, ["ram:47ad34:8"]]
- 0064e3fc ["INT_ADD", "register:40f0:8", ["const:64e3fc:8", "const:4:8"]]
- 0064e3fc ["CALL", null, ["callee:0046ca04:8"]]
+ 0064e43c ["INT_ADD", "register:40f0:8", ["const:64e43c:8", "const:4:8"]]
+ 0064e43c ["CALL", null, ["callee:0046ca04:8"]]
~~~


<a id="compare-3970bfc966d2548c92d948a439457ff0"></a>

### [`0064e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e540.md) → [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) FUN_0064e580

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b29a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b29a8.md) · 呼出先 31件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`004700e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700e0.md) [`0048ce4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce4c.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md)
- 新版 呼出元 1件 [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`0048ce8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.53% / 新版 97.53%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_value` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064e850",
      "incomplete_value": true,
      "site": "0064e858",
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
                "const:408:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064e810",
      "incomplete_value": true,
      "site": "0064e818",
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
                "const:3c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0064e930",
      "incomplete_value": false,
      "site": "0064e930",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064e8f0",
      "incomplete_value": false,
      "site": "0064e8f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:f48:8"
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0064eab4",
      "incomplete_value": false,
      "site": "0064eab4",
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
            "const:118:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064ea74",
      "incomplete_value": false,
      "site": "0064ea74",
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
            "const:48:8"
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
      "0064e5b8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0064e5cc",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064e5d4",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0064e5b8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0064e5cc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064e5d4",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064e59c ["INT_ADD", "register:40f0:8", ["const:64e59c:8", "const:4:8"]]
- 0064e59c ["CALL", null, ["callee:00c586e0:8"]]
+ 0064e5dc ["INT_ADD", "register:40f0:8", ["const:64e5dc:8", "const:4:8"]]
+ 0064e5dc ["CALL", null, ["callee:00c586e0:8"]]
- 0064e7d8 ["INT_ADD", "register:40f0:8", ["const:64e7d8:8", "const:4:8"]]
- 0064e7d8 ["CALL", null, ["callee:006b2488:8"]]
+ 0064e818 ["INT_ADD", "register:40f0:8", ["const:64e818:8", "const:4:8"]]
+ 0064e818 ["CALL", null, ["callee:006b2488:8"]]
- 0064e83c ["INT_ADD", "register:40f0:8", ["const:64e83c:8", "const:4:8"]]
- 0064e83c ["CALL", null, ["ram:64aa58:8"]]
+ 0064e87c ["INT_ADD", "register:40f0:8", ["const:64e87c:8", "const:4:8"]]
+ 0064e87c ["CALL", null, ["ram:64aa98:8"]]
~~~


<a id="compare-a28b8561b531d1639fec7e6ca7120526"></a>

### [`00651770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00651/00651770.md) → [`006517b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/006517b0.md) FUN_006517b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00651aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00651/00651aa4.md) · 呼出先 10件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 10件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.40% / 新版 99.40%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006519c4",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00651984",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 22,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006519c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "006519c4",
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
- 00651984 ["INT_ADD", "register:40f0:8", ["const:651984:8", "const:4:8"]]
- 00651984 ["CALL", null, ["ram:71bed8:8"]]
+ 006519c4 ["INT_ADD", "register:40f0:8", ["const:6519c4:8", "const:4:8"]]
+ 006519c4 ["CALL", null, ["ram:71bf30:8"]]
- 006517ac ["INT_ADD", "register:40f0:8", ["const:6517ac:8", "const:4:8"]]
- 006517ac ["CALL", null, ["callee:004678a0:8"]]
+ 006517ec ["INT_ADD", "register:40f0:8", ["const:6517ec:8", "const:4:8"]]
+ 006517ec ["CALL", null, ["callee:004678a0:8"]]
- 006517b4 ["INT_ADD", "register:40f0:8", ["const:6517b4:8", "const:4:8"]]
- 006517b4 ["CALL", null, ["callee:00851550:8"]]
+ 006517f4 ["INT_ADD", "register:40f0:8", ["const:6517f4:8", "const:4:8"]]
+ 006517f4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-88c6b66b05fddee66110cc1981b9e17f"></a>

### [`00651aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00651/00651aa4.md) → [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) FUN_00651ae4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) · 呼出先 24件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md)
- 新版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 24件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.37% / 新版 99.37%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00652408",
      "incomplete_value": true,
      "site": "00652408",
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
      "definition_site": "006523c8",
      "incomplete_value": true,
      "site": "006523c8",
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
    "ordinal": 56,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00652410",
      "incomplete_value": false,
      "site": "00652420",
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
      "definition_site": "006523d0",
      "incomplete_value": false,
      "site": "006523e0",
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
    "ordinal": 142,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00652418",
      "incomplete_value": false,
      "site": "00652420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006523d8",
      "incomplete_value": false,
      "site": "006523e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "ordinal": 142,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00651b74",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[39]"
      ]
    ],
    [
      "00652404",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00652410",
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
      "00651b74",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[43]"
      ]
    ],
    [
      "00652404",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00652410",
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
- 006523e0 ["INT_ADD", "register:40f0:8", ["const:6523e0:8", "const:4:8"]]
- 006523e0 ["CALL", null, ["callee:00c586e0:8"]]
+ 00652420 ["INT_ADD", "register:40f0:8", ["const:652420:8", "const:4:8"]]
+ 00652420 ["CALL", null, ["callee:00c586e0:8"]]
- 00652408 ["INT_ADD", "register:40f0:8", ["const:652408:8", "const:4:8"]]
- 00652408 ["CALL", null, ["callee:00851550:8"]]
+ 00652448 ["INT_ADD", "register:40f0:8", ["const:652448:8", "const:4:8"]]
+ 00652448 ["CALL", null, ["callee:00851550:8"]]
- 00652420 ["INT_ADD", "register:40f0:8", ["const:652420:8", "const:4:8"]]
- 00652420 ["CALL", null, ["callee:0046ca04:8"]]
+ 00652460 ["INT_ADD", "register:40f0:8", ["const:652460:8", "const:4:8"]]
+ 00652460 ["CALL", null, ["callee:0046ca04:8"]]
~~~


<a id="compare-57b82fa437448e8c6e8f48bec468a759"></a>

### [`00652b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/00652b0c.md) → [`00652b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652b4c.md) FUN_00652b4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0063c5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063c/0063c5cc.md) [`0063cd1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063c/0063cd1c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`0063c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c60c.md) [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00652b58",
      "incomplete_value": false,
      "site": "00652b5c",
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
      "definition_site": "00652b18",
      "incomplete_value": false,
      "site": "00652b1c",
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
      "00652b58",
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
      "00652b58",
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
- 00652b1c ["INT_ADD", "register:40f0:8", ["const:652b1c:8", "const:4:8"]]
- 00652b1c ["CALL", null, ["callee:0043b7b8:8"]]
+ 00652b5c ["INT_ADD", "register:40f0:8", ["const:652b5c:8", "const:4:8"]]
+ 00652b5c ["CALL", null, ["callee:0043b7b8:8"]]
- 00652b18 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00652b18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00652b18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00652b18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00652b58 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00652b58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00652b58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00652b58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-473c822cc6991895888bf70dab30f676"></a>

### [`00653134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/00653134.md) → [`00653174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653174.md) FUN_00653174

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00644fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00644/00644fd0.md) [`00652ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/00652ea0.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`00645010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/00645010.md) [`00652ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652ee0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00653180",
      "incomplete_value": false,
      "site": "00653184",
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
      "definition_site": "00653140",
      "incomplete_value": false,
      "site": "00653144",
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
      "00653180",
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
      "00653180",
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
- 00653144 ["INT_ADD", "register:40f0:8", ["const:653144:8", "const:4:8"]]
- 00653144 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00653184 ["INT_ADD", "register:40f0:8", ["const:653184:8", "const:4:8"]]
+ 00653184 ["CALL", null, ["callee:0043b7b8:8"]]
- 00653140 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00653140 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00653140 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00653140 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00653180 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00653180 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00653180 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00653180 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-61a158a843ebe52f3f1baff806b0b28e"></a>

### [`006534a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006534a8.md) → [`006534e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006534e8.md) FUN_006534e8

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
      "definition_site": "006534fc",
      "incomplete_value": false,
      "site": "00653500",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006534bc",
      "incomplete_value": false,
      "site": "006534c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:838:8"
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
      "00653500",
      "DATA",
      [
        "storage",
        "00c73838",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00653500",
      "DATA",
      [
        "storage",
        "00c73908",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006534b4 ["INT_ADD", "register:40f0:8", ["const:6534b4:8", "const:4:8"]]
- 006534b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006534f4 ["INT_ADD", "register:40f0:8", ["const:6534f4:8", "const:4:8"]]
+ 006534f4 ["CALL", null, ["callee:00c57f60:8"]]
- 006534bc ["COPY", "tmp:0:8", ["const:838:8"]]
- 006534bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006534bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006534bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006534fc ["COPY", "tmp:0:8", ["const:908:8"]]
+ 006534fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006534fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006534fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-54f22ed25fc931a6791d86af6e31ddc0"></a>

### [`006534cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006534cc.md) → [`0065350c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065350c.md) FUN_0065350c

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
      "definition_site": "00653510",
      "incomplete_value": false,
      "site": "00653514",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006534d0",
      "incomplete_value": false,
      "site": "006534d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:838:8"
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
      "00653514",
      "DATA",
      [
        "storage",
        "00c73838",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00653514",
      "DATA",
      [
        "storage",
        "00c73908",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006534d0 ["COPY", "tmp:0:8", ["const:838:8"]]
- 006534d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006534d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006534d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00653510 ["COPY", "tmp:0:8", ["const:908:8"]]
+ 00653510 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00653510 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00653510 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7175622f24f3391efde11406eabd9e5c"></a>

### [`00653518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/00653518.md) → [`00653558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653558.md) FUN_00653558

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
      "definition_site": "0065357c",
      "incomplete_value": false,
      "site": "0065357c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065353c",
      "incomplete_value": false,
      "site": "0065353c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
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
      "0065357c",
      "DATA",
      [
        "storage",
        "00c738c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065357c",
      "DATA",
      [
        "storage",
        "00c73998",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065352c ["INT_ADD", "register:40f0:8", ["const:65352c:8", "const:4:8"]]
- 0065352c ["CALL", null, ["callee:00c57f60:8"]]
+ 0065356c ["INT_ADD", "register:40f0:8", ["const:65356c:8", "const:4:8"]]
+ 0065356c ["CALL", null, ["callee:00c57f60:8"]]
- 00653538 ["COPY", "tmp:0:8", ["const:8c8:8"]]
- 00653538 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00653538 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00653538 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00653578 ["COPY", "tmp:0:8", ["const:998:8"]]
+ 00653578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00653578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00653578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-511523ab3a882c5edb38bfa53534ecf4"></a>

### [`006535a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006535a0.md) → [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) FUN_006535e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00653568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/00653568.md) · 呼出先 45件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 1件 [`006535a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535a8.md) · 呼出先 45件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.27% / 新版 96.27%

優先判定に残った影響 `call_argument_candidate` 16件, `call_target` 2件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00653bcc",
      "incomplete_value": true,
      "site": "00653bdc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9f9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00653b8c",
      "incomplete_value": true,
      "site": "00653b9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a55:8"
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
      "definition_site": "00653be0",
      "incomplete_value": true,
      "site": "00653be0",
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
      "definition_site": "00653ba0",
      "incomplete_value": true,
      "site": "00653ba0",
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00653db0",
      "incomplete_value": false,
      "site": "00653db8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00653d70",
      "incomplete_value": false,
      "site": "00653d78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a38:8"
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
      "00653694",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00653710",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[47]"
      ]
    ],
    [
      "00653780",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00653694",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00653710",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[39]"
      ]
    ],
    [
      "00653780",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00653654 ["INT_ADD", "register:40f0:8", ["const:653654:8", "const:4:8"]]
- 00653654 ["CALL", null, ["ram:47acf4:8"]]
+ 00653694 ["INT_ADD", "register:40f0:8", ["const:653694:8", "const:4:8"]]
+ 00653694 ["CALL", null, ["ram:47ad34:8"]]
- 00653c08 ["INT_ADD", "register:40f0:8", ["const:653c08:8", "const:4:8"]]
- 00653c08 ["CALL", null, ["ram:47acf4:8"]]
+ 00653c48 ["INT_ADD", "register:40f0:8", ["const:653c48:8", "const:4:8"]]
+ 00653c48 ["CALL", null, ["ram:47ad34:8"]]
- 00653db8 ["INT_ADD", "register:40f0:8", ["const:653db8:8", "const:4:8"]]
- 00653db8 ["CALL", null, ["callee:00851550:8"]]
+ 00653df8 ["INT_ADD", "register:40f0:8", ["const:653df8:8", "const:4:8"]]
+ 00653df8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-6cff4b4c3450f19e3bedf625bb776c74"></a>

### [`006550b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006550b8.md) → [`006550f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006550f8.md) FUN_006550f8

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
      "definition_site": "0065510c",
      "incomplete_value": false,
      "site": "00655110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006550cc",
      "incomplete_value": false,
      "site": "006550d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:938:8"
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
      "00655110",
      "DATA",
      [
        "storage",
        "00c73938",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655110",
      "DATA",
      [
        "storage",
        "00c73a08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006550c4 ["INT_ADD", "register:40f0:8", ["const:6550c4:8", "const:4:8"]]
- 006550c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00655104 ["INT_ADD", "register:40f0:8", ["const:655104:8", "const:4:8"]]
+ 00655104 ["CALL", null, ["callee:00c57f60:8"]]
- 006550cc ["COPY", "tmp:0:8", ["const:938:8"]]
- 006550cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006550cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006550cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065510c ["COPY", "tmp:0:8", ["const:a08:8"]]
+ 0065510c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065510c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065510c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-af176c14f26a1de6314f8bbf364a4027"></a>

### [`006550dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006550dc.md) → [`0065511c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/0065511c.md) FUN_0065511c

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
      "definition_site": "00655120",
      "incomplete_value": false,
      "site": "00655124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006550e0",
      "incomplete_value": false,
      "site": "006550e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
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
      "00655124",
      "DATA",
      [
        "storage",
        "00c73938",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655124",
      "DATA",
      [
        "storage",
        "00c73a08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006550e0 ["COPY", "tmp:0:8", ["const:938:8"]]
- 006550e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006550e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006550e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655120 ["COPY", "tmp:0:8", ["const:a08:8"]]
+ 00655120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b251272e34f3253eaf43fbf4ae848d4d"></a>

### [`006550f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006550f4.md) → [`00655134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655134.md) FUN_00655134

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655158",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655118",
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
      "00655158",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00655184",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00655158",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00655184",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655118 ["INT_ADD", "register:40f0:8", ["const:655118:8", "const:4:8"]]
- 00655118 ["CALL", null, ["ram:47acf4:8"]]
+ 00655158 ["INT_ADD", "register:40f0:8", ["const:655158:8", "const:4:8"]]
+ 00655158 ["CALL", null, ["ram:47ad34:8"]]
- 00655124 ["INT_ADD", "register:40f0:8", ["const:655124:8", "const:4:8"]]
- 00655124 ["CALL", null, ["callee:0047ce14:8"]]
+ 00655164 ["INT_ADD", "register:40f0:8", ["const:655164:8", "const:4:8"]]
+ 00655164 ["CALL", null, ["callee:0047ce14:8"]]
- 00655138 ["INT_ADD", "register:40f0:8", ["const:655138:8", "const:4:8"]]
- 00655138 ["CALL", null, ["callee:00851550:8"]]
+ 00655178 ["INT_ADD", "register:40f0:8", ["const:655178:8", "const:4:8"]]
+ 00655178 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-337ef43e16958961103e376ad38839d4"></a>

### [`00655180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655180.md) → [`006551c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006551c0.md) FUN_006551c0

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
      "definition_site": "006551d4",
      "incomplete_value": false,
      "site": "006551d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655194",
      "incomplete_value": false,
      "site": "00655198",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
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
      "006551d8",
      "DATA",
      [
        "storage",
        "00c739b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006551d8",
      "DATA",
      [
        "storage",
        "00c73a88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065518c ["INT_ADD", "register:40f0:8", ["const:65518c:8", "const:4:8"]]
- 0065518c ["CALL", null, ["callee:00c57f60:8"]]
+ 006551cc ["INT_ADD", "register:40f0:8", ["const:6551cc:8", "const:4:8"]]
+ 006551cc ["CALL", null, ["callee:00c57f60:8"]]
- 00655194 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 00655194 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655194 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655194 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006551d4 ["COPY", "tmp:0:8", ["const:a88:8"]]
+ 006551d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006551d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006551d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-49776f6c5a3cf847f3d6b0d38d2a7bb2"></a>

### [`006551a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006551a4.md) → [`006551e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006551e4.md) FUN_006551e4

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
      "definition_site": "006551e8",
      "incomplete_value": false,
      "site": "006551ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006551a8",
      "incomplete_value": false,
      "site": "006551ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
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
      "006551ec",
      "DATA",
      [
        "storage",
        "00c739b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006551ec",
      "DATA",
      [
        "storage",
        "00c73a88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006551a8 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 006551a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006551a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006551a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006551e8 ["COPY", "tmp:0:8", ["const:a88:8"]]
+ 006551e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006551e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006551e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-311b9ec0659cc6b7358fc89a13305ee6"></a>

### [`006551bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006551bc.md) → [`006551fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006551fc.md) FUN_006551fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655220",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006551e0",
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
      "00655220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0065524c",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00655220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065524c",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006551e0 ["INT_ADD", "register:40f0:8", ["const:6551e0:8", "const:4:8"]]
- 006551e0 ["CALL", null, ["ram:47acf4:8"]]
+ 00655220 ["INT_ADD", "register:40f0:8", ["const:655220:8", "const:4:8"]]
+ 00655220 ["CALL", null, ["ram:47ad34:8"]]
- 006551ec ["INT_ADD", "register:40f0:8", ["const:6551ec:8", "const:4:8"]]
- 006551ec ["CALL", null, ["callee:0047ce14:8"]]
+ 0065522c ["INT_ADD", "register:40f0:8", ["const:65522c:8", "const:4:8"]]
+ 0065522c ["CALL", null, ["callee:0047ce14:8"]]
- 00655200 ["INT_ADD", "register:40f0:8", ["const:655200:8", "const:4:8"]]
- 00655200 ["CALL", null, ["callee:00851550:8"]]
+ 00655240 ["INT_ADD", "register:40f0:8", ["const:655240:8", "const:4:8"]]
+ 00655240 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-b27ea68a44eb6e783c56976fd7465b5e"></a>

### [`00655248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655248.md) → [`00655288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655288.md) FUN_00655288

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
      "definition_site": "0065529c",
      "incomplete_value": false,
      "site": "006552a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065525c",
      "incomplete_value": false,
      "site": "00655260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a38:8"
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
      "006552a0",
      "DATA",
      [
        "storage",
        "00c73a38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006552a0",
      "DATA",
      [
        "storage",
        "00c73b08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655254 ["INT_ADD", "register:40f0:8", ["const:655254:8", "const:4:8"]]
- 00655254 ["CALL", null, ["callee:00c57f60:8"]]
+ 00655294 ["INT_ADD", "register:40f0:8", ["const:655294:8", "const:4:8"]]
+ 00655294 ["CALL", null, ["callee:00c57f60:8"]]
- 0065525c ["COPY", "tmp:0:8", ["const:a38:8"]]
- 0065525c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065525c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065525c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065529c ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 0065529c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065529c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065529c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-db0ec43ceb8e814e09d93cf706391854"></a>

### [`0065526c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/0065526c.md) → [`006552ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006552ac.md) FUN_006552ac

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
      "definition_site": "006552b0",
      "incomplete_value": false,
      "site": "006552b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655270",
      "incomplete_value": false,
      "site": "00655274",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
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
      "006552b4",
      "DATA",
      [
        "storage",
        "00c73a38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006552b4",
      "DATA",
      [
        "storage",
        "00c73b08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655270 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00655270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006552b0 ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 006552b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006552b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006552b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7bbabfb7b22d3160e951418ca9437715"></a>

### [`00655284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655284.md) → [`006552c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006552c4.md) FUN_006552c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006552e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006552a8",
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
      "006552e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00655314",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "006552e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00655314",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006552a8 ["INT_ADD", "register:40f0:8", ["const:6552a8:8", "const:4:8"]]
- 006552a8 ["CALL", null, ["ram:47acf4:8"]]
+ 006552e8 ["INT_ADD", "register:40f0:8", ["const:6552e8:8", "const:4:8"]]
+ 006552e8 ["CALL", null, ["ram:47ad34:8"]]
- 006552b4 ["INT_ADD", "register:40f0:8", ["const:6552b4:8", "const:4:8"]]
- 006552b4 ["CALL", null, ["callee:0047ce14:8"]]
+ 006552f4 ["INT_ADD", "register:40f0:8", ["const:6552f4:8", "const:4:8"]]
+ 006552f4 ["CALL", null, ["callee:0047ce14:8"]]
- 006552c8 ["INT_ADD", "register:40f0:8", ["const:6552c8:8", "const:4:8"]]
- 006552c8 ["CALL", null, ["callee:00851550:8"]]
+ 00655308 ["INT_ADD", "register:40f0:8", ["const:655308:8", "const:4:8"]]
+ 00655308 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5e51f5409bc8f07a91b9d6d03cdf0ee1"></a>

### [`00655310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655310.md) → [`00655350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655350.md) FUN_00655350

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
      "definition_site": "00655364",
      "incomplete_value": false,
      "site": "00655368",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655324",
      "incomplete_value": false,
      "site": "00655328",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
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
      "00655368",
      "DATA",
      [
        "storage",
        "00c73ab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655368",
      "DATA",
      [
        "storage",
        "00c73b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065531c ["INT_ADD", "register:40f0:8", ["const:65531c:8", "const:4:8"]]
- 0065531c ["CALL", null, ["callee:00c57f60:8"]]
+ 0065535c ["INT_ADD", "register:40f0:8", ["const:65535c:8", "const:4:8"]]
+ 0065535c ["CALL", null, ["callee:00c57f60:8"]]
- 00655324 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 00655324 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655324 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655324 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655364 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 00655364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d6142dd9663641fa402ed01217f092d0"></a>

### [`00655334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655334.md) → [`00655374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655374.md) FUN_00655374

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
      "definition_site": "00655378",
      "incomplete_value": false,
      "site": "0065537c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655338",
      "incomplete_value": false,
      "site": "0065533c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
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
      "0065537c",
      "DATA",
      [
        "storage",
        "00c73ab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065537c",
      "DATA",
      [
        "storage",
        "00c73b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655338 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 00655338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655378 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 00655378 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655378 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655378 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ce0510fe4e05a8caa69eee5777df1ec"></a>

### [`0065534c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/0065534c.md) → [`0065538c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/0065538c.md) FUN_0065538c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006553b0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655370",
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
      "006553b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006553dc",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "006553b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006553dc",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655370 ["INT_ADD", "register:40f0:8", ["const:655370:8", "const:4:8"]]
- 00655370 ["CALL", null, ["ram:47acf4:8"]]
+ 006553b0 ["INT_ADD", "register:40f0:8", ["const:6553b0:8", "const:4:8"]]
+ 006553b0 ["CALL", null, ["ram:47ad34:8"]]
- 0065537c ["INT_ADD", "register:40f0:8", ["const:65537c:8", "const:4:8"]]
- 0065537c ["CALL", null, ["callee:0047ce14:8"]]
+ 006553bc ["INT_ADD", "register:40f0:8", ["const:6553bc:8", "const:4:8"]]
+ 006553bc ["CALL", null, ["callee:0047ce14:8"]]
- 00655390 ["INT_ADD", "register:40f0:8", ["const:655390:8", "const:4:8"]]
- 00655390 ["CALL", null, ["callee:00851550:8"]]
+ 006553d0 ["INT_ADD", "register:40f0:8", ["const:6553d0:8", "const:4:8"]]
+ 006553d0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f14c0118cc5b9bb3ef953c799d24fbe9"></a>

### [`006553d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006553d8.md) → [`00655418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655418.md) FUN_00655418

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
      "definition_site": "0065542c",
      "incomplete_value": false,
      "site": "00655430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006553ec",
      "incomplete_value": false,
      "site": "006553f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b38:8"
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
      "00655430",
      "DATA",
      [
        "storage",
        "00c73b38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655430",
      "DATA",
      [
        "storage",
        "00c73c08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006553e4 ["INT_ADD", "register:40f0:8", ["const:6553e4:8", "const:4:8"]]
- 006553e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00655424 ["INT_ADD", "register:40f0:8", ["const:655424:8", "const:4:8"]]
+ 00655424 ["CALL", null, ["callee:00c57f60:8"]]
- 006553ec ["COPY", "tmp:0:8", ["const:b38:8"]]
- 006553ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006553ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006553ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065542c ["COPY", "tmp:0:8", ["const:c08:8"]]
+ 0065542c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065542c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065542c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ef5a554684e8c357c8f3505498e14e54"></a>

### [`006553fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006553fc.md) → [`0065543c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/0065543c.md) FUN_0065543c

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
      "definition_site": "00655440",
      "incomplete_value": false,
      "site": "00655444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655400",
      "incomplete_value": false,
      "site": "00655404",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
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
      "00655444",
      "DATA",
      [
        "storage",
        "00c73b38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655444",
      "DATA",
      [
        "storage",
        "00c73c08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655400 ["COPY", "tmp:0:8", ["const:b38:8"]]
- 00655400 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655400 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655400 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655440 ["COPY", "tmp:0:8", ["const:c08:8"]]
+ 00655440 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655440 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655440 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e0baf23e108d4942ecc57bfc22b3a8ad"></a>

### [`00655414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655414.md) → [`00655454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655454.md) FUN_00655454

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655478",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655438",
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
      "00655478",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006554a4",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00655478",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006554a4",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[39]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655438 ["INT_ADD", "register:40f0:8", ["const:655438:8", "const:4:8"]]
- 00655438 ["CALL", null, ["ram:47acf4:8"]]
+ 00655478 ["INT_ADD", "register:40f0:8", ["const:655478:8", "const:4:8"]]
+ 00655478 ["CALL", null, ["ram:47ad34:8"]]
- 00655444 ["INT_ADD", "register:40f0:8", ["const:655444:8", "const:4:8"]]
- 00655444 ["CALL", null, ["callee:0047ce14:8"]]
+ 00655484 ["INT_ADD", "register:40f0:8", ["const:655484:8", "const:4:8"]]
+ 00655484 ["CALL", null, ["callee:0047ce14:8"]]
- 00655458 ["INT_ADD", "register:40f0:8", ["const:655458:8", "const:4:8"]]
- 00655458 ["CALL", null, ["callee:00851550:8"]]
+ 00655498 ["INT_ADD", "register:40f0:8", ["const:655498:8", "const:4:8"]]
+ 00655498 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4b1f59097614f9eb99505bca433c3511"></a>

### [`006554a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006554a0.md) → [`006554e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006554e0.md) FUN_006554e0

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
      "definition_site": "00655504",
      "incomplete_value": false,
      "site": "00655504",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006554c4",
      "incomplete_value": false,
      "site": "006554c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
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
      "00655504",
      "DATA",
      [
        "storage",
        "00c73bb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655504",
      "DATA",
      [
        "storage",
        "00c73c88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006554b4 ["INT_ADD", "register:40f0:8", ["const:6554b4:8", "const:4:8"]]
- 006554b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006554f4 ["INT_ADD", "register:40f0:8", ["const:6554f4:8", "const:4:8"]]
+ 006554f4 ["CALL", null, ["callee:00c57f60:8"]]
- 006554c0 ["COPY", "tmp:0:8", ["const:bb8:8"]]
- 006554c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006554c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006554c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655500 ["COPY", "tmp:0:8", ["const:c88:8"]]
+ 00655500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6541701635fefe4012b90aa17481f4ae"></a>

### [`006554d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006554d4.md) → [`00655514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655514.md) FUN_00655514

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
      "definition_site": "00655520",
      "incomplete_value": false,
      "site": "00655520",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006554e0",
      "incomplete_value": false,
      "site": "006554e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
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
      "00655520",
      "DATA",
      [
        "storage",
        "00c73bb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655520",
      "DATA",
      [
        "storage",
        "00c73c88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006554dc ["COPY", "tmp:0:8", ["const:bb8:8"]]
- 006554dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006554dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006554dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0065551c ["COPY", "tmp:0:8", ["const:c88:8"]]
+ 0065551c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0065551c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0065551c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3c9ddb675e3e027c7035cfcf1f5b3fc4"></a>

### [`006554f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006554f0.md) → [`00655530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655530.md) FUN_00655530

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ca8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ca8c.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00641f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641f40.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00641f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655564",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655524",
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
      "site": "0065582c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006557ec",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 21,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655838",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006557f8",
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
      "00655564",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006555a4",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[47]"
      ]
    ],
    [
      "006555d0",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00655564",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006555a4",
      "DATA",
      [
        "storage",
        "00435360",
        null,
        "byte[39]"
      ]
    ],
    [
      "006555d0",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655524 ["INT_ADD", "register:40f0:8", ["const:655524:8", "const:4:8"]]
- 00655524 ["CALL", null, ["ram:47acf4:8"]]
+ 00655564 ["INT_ADD", "register:40f0:8", ["const:655564:8", "const:4:8"]]
+ 00655564 ["CALL", null, ["ram:47ad34:8"]]
- 006557b8 ["INT_ADD", "register:40f0:8", ["const:6557b8:8", "const:4:8"]]
- 006557b8 ["CALL", null, ["callee:00851550:8"]]
+ 006557f8 ["INT_ADD", "register:40f0:8", ["const:6557f8:8", "const:4:8"]]
+ 006557f8 ["CALL", null, ["callee:00851550:8"]]
- 006557ec ["INT_ADD", "register:40f0:8", ["const:6557ec:8", "const:4:8"]]
- 006557ec ["CALL", null, ["ram:47acf4:8"]]
+ 0065582c ["INT_ADD", "register:40f0:8", ["const:65582c:8", "const:4:8"]]
+ 0065582c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-3c37da4cb88b8fbcd2e8acc4bdd4bca2"></a>

### [`00655844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655844.md) → [`00655884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655884.md) FUN_00655884

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
      "definition_site": "00655898",
      "incomplete_value": false,
      "site": "0065589c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655858",
      "incomplete_value": false,
      "site": "0065585c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c48:8"
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
      "0065589c",
      "DATA",
      [
        "storage",
        "00c73c48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065589c",
      "DATA",
      [
        "storage",
        "00c73d18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655850 ["INT_ADD", "register:40f0:8", ["const:655850:8", "const:4:8"]]
- 00655850 ["CALL", null, ["callee:00c57f60:8"]]
+ 00655890 ["INT_ADD", "register:40f0:8", ["const:655890:8", "const:4:8"]]
+ 00655890 ["CALL", null, ["callee:00c57f60:8"]]
- 00655858 ["COPY", "tmp:0:8", ["const:c48:8"]]
- 00655858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655898 ["COPY", "tmp:0:8", ["const:d18:8"]]
+ 00655898 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655898 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655898 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-19df11fa118639d42285bace938de8c2"></a>

### [`00655880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655880.md) → [`006558c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006558c0.md) FUN_006558c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00641f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641f40.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00641f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641f80.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065596c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065592c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655978",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655938",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0065596c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00655978",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0065596c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00655978",
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
- 006558ec ["INT_ADD", "register:40f0:8", ["const:6558ec:8", "const:4:8"]]
- 006558ec ["CALL", null, ["callee:00a46c0c:8"]]
+ 0065592c ["INT_ADD", "register:40f0:8", ["const:65592c:8", "const:4:8"]]
+ 0065592c ["CALL", null, ["callee:00a46c0c:8"]]
- 0065592c ["INT_ADD", "register:40f0:8", ["const:65592c:8", "const:4:8"]]
- 0065592c ["CALL", null, ["ram:47acf4:8"]]
+ 0065596c ["INT_ADD", "register:40f0:8", ["const:65596c:8", "const:4:8"]]
+ 0065596c ["CALL", null, ["ram:47ad34:8"]]
- 00655938 ["INT_ADD", "register:40f0:8", ["const:655938:8", "const:4:8"]]
- 00655938 ["CALL", null, ["ram:47acf4:8"]]
+ 00655978 ["INT_ADD", "register:40f0:8", ["const:655978:8", "const:4:8"]]
+ 00655978 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-de2a1d50dde2590e73b9ef122a91c49e"></a>

### [`006559a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006559a0.md) → [`006559e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006559e0.md) FUN_006559e0

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
      "definition_site": "00655a04",
      "incomplete_value": false,
      "site": "00655a04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006559c4",
      "incomplete_value": false,
      "site": "006559c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
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
      "00655a04",
      "DATA",
      [
        "storage",
        "00c73cc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655a04",
      "DATA",
      [
        "storage",
        "00c73d98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006559b4 ["INT_ADD", "register:40f0:8", ["const:6559b4:8", "const:4:8"]]
- 006559b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006559f4 ["INT_ADD", "register:40f0:8", ["const:6559f4:8", "const:4:8"]]
+ 006559f4 ["CALL", null, ["callee:00c57f60:8"]]
- 006559c0 ["COPY", "tmp:0:8", ["const:cc8:8"]]
- 006559c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006559c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006559c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655a00 ["COPY", "tmp:0:8", ["const:d98:8"]]
+ 00655a00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655a00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655a00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9c9321d1d4c6ad8f36bd2dad129f37e2"></a>

### [`00655dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655dbc.md) → [`00655dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655dfc.md) FUN_00655dfc

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
      "definition_site": "00655e10",
      "incomplete_value": false,
      "site": "00655e14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655dd0",
      "incomplete_value": false,
      "site": "00655dd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "00655e14",
      "DATA",
      [
        "storage",
        "00c73d38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655e14",
      "DATA",
      [
        "storage",
        "00c73e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655dc8 ["INT_ADD", "register:40f0:8", ["const:655dc8:8", "const:4:8"]]
- 00655dc8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00655e08 ["INT_ADD", "register:40f0:8", ["const:655e08:8", "const:4:8"]]
+ 00655e08 ["CALL", null, ["callee:00c57f60:8"]]
- 00655dd0 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00655dd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655dd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655dd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655e10 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00655e10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655e10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655e10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb80540590386dfaf76f3d32069e1783"></a>

### [`00655df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655df8.md) → [`00655e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655e38.md) FUN_00655e38

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
      "site": "00655e54",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655e14",
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
      "00655e54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00655e54",
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
- 00655e14 ["INT_ADD", "register:40f0:8", ["const:655e14:8", "const:4:8"]]
- 00655e14 ["CALL", null, ["ram:47acf4:8"]]
+ 00655e54 ["INT_ADD", "register:40f0:8", ["const:655e54:8", "const:4:8"]]
+ 00655e54 ["CALL", null, ["ram:47ad34:8"]]
- 00655e20 ["INT_ADD", "register:40f0:8", ["const:655e20:8", "const:4:8"]]
- 00655e20 ["CALL", null, ["callee:0047ce14:8"]]
+ 00655e60 ["INT_ADD", "register:40f0:8", ["const:655e60:8", "const:4:8"]]
+ 00655e60 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b0f98926c2bacf82a1cca0a80740e3e0"></a>

### [`00655e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/00655e64.md) → [`00655ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655ea4.md) FUN_00655ea4

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
      "definition_site": "00655ec8",
      "incomplete_value": false,
      "site": "00655ec8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655e88",
      "incomplete_value": false,
      "site": "00655e88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:dc8:8"
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
      "00655ec8",
      "DATA",
      [
        "storage",
        "00c73dc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655ec8",
      "DATA",
      [
        "storage",
        "00c73e98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655e78 ["INT_ADD", "register:40f0:8", ["const:655e78:8", "const:4:8"]]
- 00655e78 ["CALL", null, ["callee:00c57f60:8"]]
+ 00655eb8 ["INT_ADD", "register:40f0:8", ["const:655eb8:8", "const:4:8"]]
+ 00655eb8 ["CALL", null, ["callee:00c57f60:8"]]
- 00655e84 ["COPY", "tmp:0:8", ["const:dc8:8"]]
- 00655e84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655e84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655e84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655ec4 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00655ec4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655ec4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655ec4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fc852d2bf72aa982fae8121cc283c954"></a>

### [`0065654c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00656/0065654c.md) → [`0065658c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/0065658c.md) FUN_0065658c

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
      "definition_site": "006565b0",
      "incomplete_value": false,
      "site": "006565b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:f18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00656570",
      "incomplete_value": false,
      "site": "00656570",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:e48:8"
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
      "006565b0",
      "DATA",
      [
        "storage",
        "00c73e48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006565b0",
      "DATA",
      [
        "storage",
        "00c73f18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00656560 ["INT_ADD", "register:40f0:8", ["const:656560:8", "const:4:8"]]
- 00656560 ["CALL", null, ["callee:00c57f60:8"]]
+ 006565a0 ["INT_ADD", "register:40f0:8", ["const:6565a0:8", "const:4:8"]]
+ 006565a0 ["CALL", null, ["callee:00c57f60:8"]]
- 0065656c ["COPY", "tmp:0:8", ["const:e48:8"]]
- 0065656c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065656c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065656c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006565ac ["COPY", "tmp:0:8", ["const:f18:8"]]
+ 006565ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006565ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006565ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e1f58dcc75412d9cd2514342b63ced26"></a>

### [`0065659c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00656/0065659c.md) → [`006565dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/006565dc.md) FUN_006565dc

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.69% / 新版 98.69%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00656b04",
      "incomplete_value": true,
      "site": "00656b14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4b5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00656ac4",
      "incomplete_value": true,
      "site": "00656ad4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:502:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065661c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006565dc",
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
      "site": "00656638",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006565f8",
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
      "0065661c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00656638",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0065668c",
      "DATA",
      [
        "storage",
        "004347b8",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "0065661c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00656638",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065668c",
      "DATA",
      [
        "storage",
        "004347b8",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006565dc ["INT_ADD", "register:40f0:8", ["const:6565dc:8", "const:4:8"]]
- 006565dc ["CALL", null, ["ram:47acf4:8"]]
+ 0065661c ["INT_ADD", "register:40f0:8", ["const:65661c:8", "const:4:8"]]
+ 0065661c ["CALL", null, ["ram:47ad34:8"]]
- 006565f8 ["INT_ADD", "register:40f0:8", ["const:6565f8:8", "const:4:8"]]
- 006565f8 ["CALL", null, ["ram:47acf4:8"]]
+ 00656638 ["INT_ADD", "register:40f0:8", ["const:656638:8", "const:4:8"]]
+ 00656638 ["CALL", null, ["ram:47ad34:8"]]
- 00656634 ["INT_ADD", "register:40f0:8", ["const:656634:8", "const:4:8"]]
- 00656634 ["CALL", null, ["callee:00851550:8"]]
+ 00656674 ["INT_ADD", "register:40f0:8", ["const:656674:8", "const:4:8"]]
+ 00656674 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-edb871a30ab76449967b4eb19147ea6e"></a>

### [`00656c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00656/00656c60.md) → [`00656ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656ca0.md) FUN_00656ca0

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
      "definition_site": "00656cc4",
      "incomplete_value": false,
      "site": "00656cc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:f98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00656c84",
      "incomplete_value": false,
      "site": "00656c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
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
      "00656cc4",
      "DATA",
      [
        "storage",
        "00c73ec8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00656cc4",
      "DATA",
      [
        "storage",
        "00c73f98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00656c74 ["INT_ADD", "register:40f0:8", ["const:656c74:8", "const:4:8"]]
- 00656c74 ["CALL", null, ["callee:00c57f60:8"]]
+ 00656cb4 ["INT_ADD", "register:40f0:8", ["const:656cb4:8", "const:4:8"]]
+ 00656cb4 ["CALL", null, ["callee:00c57f60:8"]]
- 00656c80 ["COPY", "tmp:0:8", ["const:ec8:8"]]
- 00656c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00656c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00656c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00656cc0 ["COPY", "tmp:0:8", ["const:f98:8"]]
+ 00656cc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00656cc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00656cc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-86904c4ece9aae1f2276f6a477942002"></a>

### [`00656cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00656/00656cb0.md) → [`00656cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656cf0.md) FUN_00656cf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00656d10",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00656cd0",
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
      "site": "00656d1c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00656cdc",
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
      "00656d10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00656d1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00656d10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00656d1c",
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
- 00656cd0 ["INT_ADD", "register:40f0:8", ["const:656cd0:8", "const:4:8"]]
- 00656cd0 ["CALL", null, ["ram:47acf4:8"]]
+ 00656d10 ["INT_ADD", "register:40f0:8", ["const:656d10:8", "const:4:8"]]
+ 00656d10 ["CALL", null, ["ram:47ad34:8"]]
- 00656cdc ["INT_ADD", "register:40f0:8", ["const:656cdc:8", "const:4:8"]]
- 00656cdc ["CALL", null, ["ram:47acf4:8"]]
+ 00656d1c ["INT_ADD", "register:40f0:8", ["const:656d1c:8", "const:4:8"]]
+ 00656d1c ["CALL", null, ["ram:47ad34:8"]]
- 00656d10 ["INT_ADD", "register:40f0:8", ["const:656d10:8", "const:4:8"]]
- 00656d10 ["CALL", null, ["callee:00851550:8"]]
+ 00656d50 ["INT_ADD", "register:40f0:8", ["const:656d50:8", "const:4:8"]]
+ 00656d50 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-6ea75c809d36f9e593d171668671b5d9"></a>

### [`00656e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00656/00656e90.md) → [`00656ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656ed0.md) FUN_00656ed0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00656d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00656/00656d58.md) [`00656e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00656/00656e90.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00656d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656d98.md) [`00656ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656ed0.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.81% / 新版 98.81%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00657044",
      "incomplete_value": false,
      "site": "0065704c",
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
      "definition_site": "00657004",
      "incomplete_value": false,
      "site": "0065700c",
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
      "definition_site": "00657104",
      "incomplete_value": false,
      "site": "0065710c",
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
      "definition_site": "006570c4",
      "incomplete_value": false,
      "site": "006570cc",
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
      "definition_site": "00657120",
      "incomplete_value": false,
      "site": "0065712c",
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
      "definition_site": "006570e0",
      "incomplete_value": false,
      "site": "006570ec",
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
      "00657044",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00657104",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "00657120",
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
      "00657044",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00657104",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "00657120",
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
- 0065700c ["INT_ADD", "register:40f0:8", ["const:65700c:8", "const:4:8"]]
- 0065700c ["CALL", null, ["callee:00441ed4:8"]]
+ 0065704c ["INT_ADD", "register:40f0:8", ["const:65704c:8", "const:4:8"]]
+ 0065704c ["CALL", null, ["callee:00441ed4:8"]]
- 006570cc ["INT_ADD", "register:40f0:8", ["const:6570cc:8", "const:4:8"]]
- 006570cc ["CALL", null, ["callee:00441ed4:8"]]
+ 0065710c ["INT_ADD", "register:40f0:8", ["const:65710c:8", "const:4:8"]]
+ 0065710c ["CALL", null, ["callee:00441ed4:8"]]
- 006570ec ["INT_ADD", "register:40f0:8", ["const:6570ec:8", "const:4:8"]]
- 006570ec ["CALL", null, ["callee:00442834:8"]]
+ 0065712c ["INT_ADD", "register:40f0:8", ["const:65712c:8", "const:4:8"]]
+ 0065712c ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-d49ffcff1e9d1a07c664938fb4845038"></a>

### [`006578e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/006578e8.md) → [`00657928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657928.md) FUN_00657928

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
      "definition_site": "00657948",
      "incomplete_value": false,
      "site": "0065794c",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657908",
      "incomplete_value": false,
      "site": "0065790c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:f48:8"
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
      "0065794c",
      "DATA",
      [
        "storage",
        "00c73f48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065794c",
      "DATA",
      [
        "storage",
        "00c74018",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006578fc ["INT_ADD", "register:40f0:8", ["const:6578fc:8", "const:4:8"]]
- 006578fc ["CALL", null, ["callee:00c57f60:8"]]
+ 0065793c ["INT_ADD", "register:40f0:8", ["const:65793c:8", "const:4:8"]]
+ 0065793c ["CALL", null, ["callee:00c57f60:8"]]
- 00657904 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00657944 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00657908 ["COPY", "tmp:0:8", ["const:f48:8"]]
- 00657908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657948 ["COPY", "tmp:0:8", ["const:18:8"]]
+ 00657948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d9f5462712107257b88dcdc3f52ffee9"></a>

### [`00657920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657920.md) → [`00657960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657960.md) FUN_00657960

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
      "definition_site": "00657964",
      "incomplete_value": false,
      "site": "00657968",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657924",
      "incomplete_value": false,
      "site": "00657928",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:f48:8"
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
      "00657968",
      "DATA",
      [
        "storage",
        "00c73f48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657968",
      "DATA",
      [
        "storage",
        "00c74018",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657920 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00657960 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00657924 ["COPY", "tmp:0:8", ["const:f48:8"]]
- 00657924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657964 ["COPY", "tmp:0:8", ["const:18:8"]]
+ 00657964 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657964 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657964 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b420c01d7f9473c8eb286170ae29080a"></a>

### [`00657940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657940.md) → [`00657980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657980.md) FUN_00657980

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00657b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657b3c.md) [`00657b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657b40.md) [`0065ad40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065a/0065ad40.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00657b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b7c.md) [`00657b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b80.md) [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `call_target` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00657a40",
      "incomplete_value": false,
      "site": "00657a40",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657a00",
      "incomplete_value": false,
      "site": "00657a00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006579bc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065797c",
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
      "site": "006579f4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006579b4",
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
      "006579bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006579f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00657a10",
      "DATA",
      [
        "storage",
        "004347b0",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "006579bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006579f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00657a10",
      "DATA",
      [
        "storage",
        "004347b0",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065797c ["INT_ADD", "register:40f0:8", ["const:65797c:8", "const:4:8"]]
- 0065797c ["CALL", null, ["ram:47acf4:8"]]
+ 006579bc ["INT_ADD", "register:40f0:8", ["const:6579bc:8", "const:4:8"]]
+ 006579bc ["CALL", null, ["ram:47ad34:8"]]
- 006579b4 ["INT_ADD", "register:40f0:8", ["const:6579b4:8", "const:4:8"]]
- 006579b4 ["CALL", null, ["ram:47acf4:8"]]
+ 006579f4 ["INT_ADD", "register:40f0:8", ["const:6579f4:8", "const:4:8"]]
+ 006579f4 ["CALL", null, ["ram:47ad34:8"]]
- 006579c0 ["INT_ADD", "register:40f0:8", ["const:6579c0:8", "const:4:8"]]
- 006579c0 ["CALL", null, ["callee:0047ce14:8"]]
+ 00657a00 ["INT_ADD", "register:40f0:8", ["const:657a00:8", "const:4:8"]]
+ 00657a00 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-cceefa35fc7b0c4bf8379bcf19d5558c"></a>

### [`00657aec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657aec.md) → [`00657b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b2c.md) FUN_00657b2c

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
      "definition_site": "00657b4c",
      "incomplete_value": false,
      "site": "00657b50",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657b0c",
      "incomplete_value": false,
      "site": "00657b10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
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
      "00657b50",
      "DATA",
      [
        "storage",
        "00c73fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657b50",
      "DATA",
      [
        "storage",
        "00c74088",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657b00 ["INT_ADD", "register:40f0:8", ["const:657b00:8", "const:4:8"]]
- 00657b00 ["CALL", null, ["callee:00c57f60:8"]]
+ 00657b40 ["INT_ADD", "register:40f0:8", ["const:657b40:8", "const:4:8"]]
+ 00657b40 ["CALL", null, ["callee:00c57f60:8"]]
- 00657b08 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00657b48 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00657b0c ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 00657b0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657b0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657b0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657b4c ["COPY", "tmp:0:8", ["const:88:8"]]
+ 00657b4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657b4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657b4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-031e5fcdf657dbdef62add245535155b"></a>

### [`00657b24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657b24.md) → [`00657b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b64.md) FUN_00657b64

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
      "definition_site": "00657b68",
      "incomplete_value": false,
      "site": "00657b6c",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657b28",
      "incomplete_value": false,
      "site": "00657b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
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
      "00657b6c",
      "DATA",
      [
        "storage",
        "00c73fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657b6c",
      "DATA",
      [
        "storage",
        "00c74088",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657b24 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00657b64 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00657b28 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 00657b28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657b28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657b28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657b68 ["COPY", "tmp:0:8", ["const:88:8"]]
+ 00657b68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657b68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657b68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ca473a9f9fc5d18e49683a878c50e4b"></a>

### [`00657b44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657b44.md) → [`00657b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b84.md) FUN_00657b84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`005e3114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e3/005e3114.md) [`006b2424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2424.md) [`006b25d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b25d4.md) [`006b2610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2610.md) [`006b264c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b264c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006b262c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b262c.md) [`006b2668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2668.md) [`006b26a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b26a4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657ba8",
      "value": [
        "leaf",
        "ram:6b262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657b68",
      "value": [
        "leaf",
        "ram:6b25d4:8"
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
      "site": "00657bb8",
      "value": [
        "leaf",
        "ram:6b2668:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657b78",
      "value": [
        "leaf",
        "ram:6b2610:8"
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
      "site": "00657bc8",
      "value": [
        "leaf",
        "ram:6b26a4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657b88",
      "value": [
        "leaf",
        "ram:6b264c:8"
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
      "00657ba8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b25d4"
      ]
    ],
    [
      "00657bb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b2610"
      ]
    ],
    [
      "00657bc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b264c"
      ]
    ]
  ],
  "added": [
    [
      "00657ba8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b262c"
      ]
    ],
    [
      "00657bb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b2668"
      ]
    ],
    [
      "00657bc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b26a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657b68 ["INT_ADD", "register:40f0:8", ["const:657b68:8", "const:4:8"]]
- 00657b68 ["CALL", null, ["ram:6b25d4:8"]]
+ 00657ba8 ["INT_ADD", "register:40f0:8", ["const:657ba8:8", "const:4:8"]]
+ 00657ba8 ["CALL", null, ["ram:6b262c:8"]]
- 00657b78 ["INT_ADD", "register:40f0:8", ["const:657b78:8", "const:4:8"]]
- 00657b78 ["CALL", null, ["ram:6b2610:8"]]
+ 00657bb8 ["INT_ADD", "register:40f0:8", ["const:657bb8:8", "const:4:8"]]
+ 00657bb8 ["CALL", null, ["ram:6b2668:8"]]
- 00657b88 ["INT_ADD", "register:40f0:8", ["const:657b88:8", "const:4:8"]]
- 00657b88 ["CALL", null, ["ram:6b264c:8"]]
+ 00657bc8 ["INT_ADD", "register:40f0:8", ["const:657bc8:8", "const:4:8"]]
+ 00657bc8 ["CALL", null, ["ram:6b26a4:8"]]
~~~


<a id="compare-f903b10b6660d2444243bef73aa697f6"></a>

### [`00657be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657be8.md) → [`00657c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657c28.md) FUN_00657c28

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
      "definition_site": "00657c48",
      "incomplete_value": false,
      "site": "00657c4c",
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
            "const:118:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657c08",
      "incomplete_value": false,
      "site": "00657c0c",
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
            "const:48:8"
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
      "00657c4c",
      "DATA",
      [
        "storage",
        "00c74048",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657c4c",
      "DATA",
      [
        "storage",
        "00c74118",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657bfc ["INT_ADD", "register:40f0:8", ["const:657bfc:8", "const:4:8"]]
- 00657bfc ["CALL", null, ["callee:00c57f60:8"]]
+ 00657c3c ["INT_ADD", "register:40f0:8", ["const:657c3c:8", "const:4:8"]]
+ 00657c3c ["CALL", null, ["callee:00c57f60:8"]]
- 00657c08 ["COPY", "tmp:0:8", ["const:48:8"]]
- 00657c08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657c08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657c08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657c48 ["COPY", "tmp:0:8", ["const:118:8"]]
+ 00657c48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657c48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657c48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4fcbfe1623590893c2813f1d4b71ba0f"></a>

### [`00657c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657c40.md) → [`00657c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657c80.md) FUN_00657c80

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
      "site": "00657ca0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657c60",
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
      "site": "00657cac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657c6c",
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
      "00657ca0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00657cac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00657ca0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00657cac",
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
- 00657c60 ["INT_ADD", "register:40f0:8", ["const:657c60:8", "const:4:8"]]
- 00657c60 ["CALL", null, ["ram:47acf4:8"]]
+ 00657ca0 ["INT_ADD", "register:40f0:8", ["const:657ca0:8", "const:4:8"]]
+ 00657ca0 ["CALL", null, ["ram:47ad34:8"]]
- 00657c6c ["INT_ADD", "register:40f0:8", ["const:657c6c:8", "const:4:8"]]
- 00657c6c ["CALL", null, ["ram:47acf4:8"]]
+ 00657cac ["INT_ADD", "register:40f0:8", ["const:657cac:8", "const:4:8"]]
+ 00657cac ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-634ab95b0b824b209930a653c1506761"></a>

### [`00657cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657cd0.md) → [`00657d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657d10.md) FUN_00657d10

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
      "definition_site": "00657d24",
      "incomplete_value": false,
      "site": "00657d28",
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
            "const:198:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657ce4",
      "incomplete_value": false,
      "site": "00657ce8",
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
            "const:c8:8"
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
      "00657d28",
      "DATA",
      [
        "storage",
        "00c740c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657d28",
      "DATA",
      [
        "storage",
        "00c74198",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657cdc ["INT_ADD", "register:40f0:8", ["const:657cdc:8", "const:4:8"]]
- 00657cdc ["CALL", null, ["callee:00c57f60:8"]]
+ 00657d1c ["INT_ADD", "register:40f0:8", ["const:657d1c:8", "const:4:8"]]
+ 00657d1c ["CALL", null, ["callee:00c57f60:8"]]
- 00657ce4 ["COPY", "tmp:0:8", ["const:c8:8"]]
- 00657ce4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657ce4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657ce4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657d24 ["COPY", "tmp:0:8", ["const:198:8"]]
+ 00657d24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657d24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657d24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9d98ba2c352e86ecca536cd6751e6bd4"></a>

### [`00657df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657df8.md) → [`00657e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657e38.md) FUN_00657e38

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
      "definition_site": "00657e4c",
      "incomplete_value": false,
      "site": "00657e50",
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
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657e0c",
      "incomplete_value": false,
      "site": "00657e10",
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
            "const:148:8"
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
      "00657e50",
      "DATA",
      [
        "storage",
        "00c74148",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657e50",
      "DATA",
      [
        "storage",
        "00c74218",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657e04 ["INT_ADD", "register:40f0:8", ["const:657e04:8", "const:4:8"]]
- 00657e04 ["CALL", null, ["callee:00c57f60:8"]]
+ 00657e44 ["INT_ADD", "register:40f0:8", ["const:657e44:8", "const:4:8"]]
+ 00657e44 ["CALL", null, ["callee:00c57f60:8"]]
- 00657e0c ["COPY", "tmp:0:8", ["const:148:8"]]
- 00657e0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657e0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657e0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657e4c ["COPY", "tmp:0:8", ["const:218:8"]]
+ 00657e4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657e4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657e4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6074c0d3bbd6653fc24e2dbd883cb886"></a>

### [`00657ec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657ec4.md) → [`00657f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657f04.md) FUN_00657f04

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
      "definition_site": "00657f18",
      "incomplete_value": false,
      "site": "00657f1c",
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
            "const:298:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657ed8",
      "incomplete_value": false,
      "site": "00657edc",
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
            "const:1c8:8"
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
      "00657f1c",
      "DATA",
      [
        "storage",
        "00c741c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657f1c",
      "DATA",
      [
        "storage",
        "00c74298",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657ed0 ["INT_ADD", "register:40f0:8", ["const:657ed0:8", "const:4:8"]]
- 00657ed0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00657f10 ["INT_ADD", "register:40f0:8", ["const:657f10:8", "const:4:8"]]
+ 00657f10 ["CALL", null, ["callee:00c57f60:8"]]
- 00657ed8 ["COPY", "tmp:0:8", ["const:1c8:8"]]
- 00657ed8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657ed8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657ed8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657f18 ["COPY", "tmp:0:8", ["const:298:8"]]
+ 00657f18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657f18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657f18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eae144cca24cfcd7f786ccf0c8a66154"></a>

### [`00657f8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657f8c.md) → [`00657fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657fcc.md) FUN_00657fcc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`00ad6f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad6/00ad6f4c.md) · 呼出先 21件 [`0044db50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044db50.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046da48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da48.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048eef0.md)
- 新版 呼出元 2件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 21件 [`0044db90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044db90.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.90% / 新版 91.90%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_destination` 6件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0065808c",
      "incomplete_value": true,
      "site": "0065808c",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:20f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065804c",
      "incomplete_value": true,
      "site": "0065804c",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:263:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "006581b8",
      "incomplete_value": true,
      "site": "006581b8",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00658178",
      "incomplete_value": true,
      "site": "00658178",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "ordinal": 18,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00658224",
      "incomplete_value": true,
      "site": "00658224",
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
            "const:dd4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006581e4",
      "incomplete_value": true,
      "site": "006581e4",
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
            "const:cd4:8"
          ]
        ]
      ]
    },
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
      "00658024",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "0065803c",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "00658044",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ]
  ],
  "added": [
    [
      "00658024",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "0065803c",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "00658044",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00658020 ["INT_ADD", "register:40f0:8", ["const:658020:8", "const:4:8"]]
- 00658020 ["CALL", null, ["ram:48ccf8:8"]]
+ 00658060 ["INT_ADD", "register:40f0:8", ["const:658060:8", "const:4:8"]]
+ 00658060 ["CALL", null, ["ram:48cd38:8"]]
- 00658178 ["COPY", "tmp:0:4", ["register:40a8:4"]]
- 00658178 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "const:cd0:8"]]
- 00658178 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 006581b8 ["COPY", "tmp:0:4", ["register:40a8:4"]]
+ 006581b8 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "const:dd0:8"]]
+ 006581b8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 006581e4 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:cd4:8"]]
- 006581e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00658224 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:dd4:8"]]
+ 00658224 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
~~~


<a id="compare-d53399e5d78c86bd69c687acf49e5fbc"></a>

### [`00658488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658488.md) → [`006584c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006584c8.md) FUN_006584c8

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00659e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00659/00659e9c.md) [`0065be2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065b/0065be2c.md) [`0065f11c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065f/0065f11c.md) [`0065f7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065f/0065f7b8.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00652ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/00652ccc.md) [`00658bec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658bec.md) [`0065fc74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065f/0065fc74.md)
- 新版 呼出元 4件 [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) [`0065f15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f15c.md) [`0065f7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f7f8.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00652d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652d0c.md) [`00658c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658c2c.md) [`0065fcb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065fcb4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.78% / 新版 99.78%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006587f4",
      "incomplete_value": false,
      "site": "006587f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bc000:8"
          ],
          [
            "leaf",
            "const:76a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006587b4",
      "incomplete_value": false,
      "site": "006587b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bc000:8"
          ],
          [
            "leaf",
            "const:7be:8"
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
      "00658630",
      "DATA",
      [
        "storage",
        "00436198",
        null,
        "dword"
      ]
    ],
    [
      "0065866c",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "dword"
      ]
    ],
    [
      "006587f4",
      "PARAM",
      [
        "storage",
        "002bc7be",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00658630",
      "DATA",
      [
        "storage",
        "00436198",
        null,
        "byte[63]"
      ]
    ],
    [
      "0065866c",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "byte[23]"
      ]
    ],
    [
      "006587f4",
      "PARAM",
      [
        "storage",
        "002bc76a",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006587b8 ["INT_ADD", "register:40f0:8", ["const:6587b8:8", "const:4:8"]]
- 006587b8 ["CALL", null, ["callee:00c58040:8"]]
+ 006587f8 ["INT_ADD", "register:40f0:8", ["const:6587f8:8", "const:4:8"]]
+ 006587f8 ["CALL", null, ["callee:00c58040:8"]]
- 006584b8 ["INT_ADD", "register:40f0:8", ["const:6584b8:8", "const:4:8"]]
- 006584b8 ["CALL", null, ["callee:00851550:8"]]
+ 006584f8 ["INT_ADD", "register:40f0:8", ["const:6584f8:8", "const:4:8"]]
+ 006584f8 ["CALL", null, ["callee:00851550:8"]]
- 006584c8 ["INT_ADD", "register:40f0:8", ["const:6584c8:8", "const:4:8"]]
- 006584c8 ["CALL", null, ["callee:00a832d0:8"]]
+ 00658508 ["INT_ADD", "register:40f0:8", ["const:658508:8", "const:4:8"]]
+ 00658508 ["CALL", null, ["callee:00a832d0:8"]]
~~~


<a id="compare-10fe589cd9d91d7b598eef0d3d604ef5"></a>

### [`00659e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00659/00659e9c.md) → [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) FUN_00659edc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00658dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658dac.md) [`0065ebf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ebf8.md) · 呼出先 32件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md)
- 新版 呼出元 2件 [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) [`0065ec38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ec38.md) · 呼出先 32件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 89.73% / 新版 89.73%

優先判定に残った影響 `call_argument_candidate` 11件, `store_destination` 11件, `store_value` 20件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00659f44",
      "incomplete_value": false,
      "site": "00659f44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00659f04",
      "incomplete_value": false,
      "site": "00659f04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00659f50",
      "incomplete_value": true,
      "site": "00659f50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00659f10",
      "incomplete_value": true,
      "site": "00659f10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:cd0:8"
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
      "definition_site": "00659f58",
      "incomplete_value": false,
      "site": "00659f58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:dd4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00659f18",
      "incomplete_value": false,
      "site": "00659f18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:cd4:8"
          ]
        ]
      ]
    },
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
      "00659f44",
      "WRITE",
      [
        "storage",
        "00ca6cd8",
        null,
        "undefined4"
      ]
    ],
    [
      "00659f50",
      "WRITE",
      [
        "storage",
        "00ca6cd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00659f58",
      "WRITE",
      [
        "storage",
        "00ca6cd4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00659f44",
      "WRITE",
      [
        "storage",
        "00ca6dd8",
        null,
        "undefined4"
      ]
    ],
    [
      "00659f50",
      "WRITE",
      [
        "storage",
        "00ca6dd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00659f58",
      "WRITE",
      [
        "storage",
        "00ca6dd4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00659ed8 ["INT_ADD", "register:40f0:8", ["const:659ed8:8", "const:4:8"]]
- 00659ed8 ["CALL", null, ["callee:00851550:8"]]
+ 00659f18 ["INT_ADD", "register:40f0:8", ["const:659f18:8", "const:4:8"]]
+ 00659f18 ["CALL", null, ["callee:00851550:8"]]
- 00659f04 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:cd8:8"]]
- 00659f04 ["COPY", "tmp:1:4", ["const:0:4"]]
- 00659f04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
+ 00659f44 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:dd8:8"]]
+ 00659f44 ["COPY", "tmp:1:4", ["const:0:4"]]
+ 00659f44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
- 00659f10 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00659f10 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00659f10 ["INT_ADD", "tmp:2:8", ["register:4058:8", "const:cd0:8"]]
- 00659f10 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00659f50 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00659f50 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00659f50 ["INT_ADD", "tmp:2:8", ["register:4058:8", "const:dd0:8"]]
+ 00659f50 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-89794913776fbe53877fa8dc88a74d82"></a>

### [`0065be2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065b/0065be2c.md) → [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) FUN_0065be6c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0065ad40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065a/0065ad40.md) [`0065f670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065f/0065f670.md) · 呼出先 32件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md)
- 新版 呼出元 2件 [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) [`0065f6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f6b0.md) · 呼出先 32件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.72% / 新版 89.72%

優先判定に残った影響 `call_argument_candidate` 10件, `store_destination` 11件, `store_value` 20件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0065bed4",
      "incomplete_value": false,
      "site": "0065bed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065be94",
      "incomplete_value": false,
      "site": "0065be94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0065bee0",
      "incomplete_value": true,
      "site": "0065bee0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065bea0",
      "incomplete_value": true,
      "site": "0065bea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:cd0:8"
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
      "definition_site": "0065bee8",
      "incomplete_value": false,
      "site": "0065bee8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:dd4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065bea8",
      "incomplete_value": false,
      "site": "0065bea8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:cd4:8"
          ]
        ]
      ]
    },
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
      "0065bed4",
      "WRITE",
      [
        "storage",
        "00ca6cd8",
        null,
        "undefined4"
      ]
    ],
    [
      "0065bee0",
      "WRITE",
      [
        "storage",
        "00ca6cd0",
        null,
        "undefined1"
      ]
    ],
    [
      "0065bee8",
      "WRITE",
      [
        "storage",
        "00ca6cd4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0065bed4",
      "WRITE",
      [
        "storage",
        "00ca6dd8",
        null,
        "undefined4"
      ]
    ],
    [
      "0065bee0",
      "WRITE",
      [
        "storage",
        "00ca6dd0",
        null,
        "undefined1"
      ]
    ],
    [
      "0065bee8",
      "WRITE",
      [
        "storage",
        "00ca6dd4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065be68 ["INT_ADD", "register:40f0:8", ["const:65be68:8", "const:4:8"]]
- 0065be68 ["CALL", null, ["callee:00851550:8"]]
+ 0065bea8 ["INT_ADD", "register:40f0:8", ["const:65bea8:8", "const:4:8"]]
+ 0065bea8 ["CALL", null, ["callee:00851550:8"]]
- 0065be94 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:cd8:8"]]
- 0065be94 ["COPY", "tmp:1:4", ["const:0:4"]]
- 0065be94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
+ 0065bed4 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:dd8:8"]]
+ 0065bed4 ["COPY", "tmp:1:4", ["const:0:4"]]
+ 0065bed4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
- 0065bea0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 0065bea0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 0065bea0 ["INT_ADD", "tmp:2:8", ["register:4058:8", "const:cd0:8"]]
- 0065bea0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 0065bee0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 0065bee0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 0065bee0 ["INT_ADD", "tmp:2:8", ["register:4058:8", "const:dd0:8"]]
+ 0065bee0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-f4610c44f85200b6d3d45122c3dbecc3"></a>

### [`0065cccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065c/0065cccc.md) → [`0065cd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065c/0065cd0c.md) FUN_0065cd0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00ae128c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ae1/00ae128c.md) · 呼出先 31件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md)
- 新版 呼出元 1件 [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.15% / 新版 99.15%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065d22c",
      "incomplete_value": false,
      "site": "0065d230",
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
      "definition_site": "0065d1ec",
      "incomplete_value": false,
      "site": "0065d1f0",
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
    "ordinal": 50,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0065cf30",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "dword"
      ]
    ],
    [
      "0065cf44",
      "DATA",
      [
        "storage",
        "004347f8",
        null,
        "byte[39]"
      ]
    ],
    [
      "0065d00c",
      "READ",
      [
        "storage",
        "002dc6e0",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0065cf30",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "byte[23]"
      ]
    ],
    [
      "0065cf44",
      "DATA",
      [
        "storage",
        "004347f8",
        null,
        "byte[47]"
      ]
    ],
    [
      "0065d00c",
      "READ",
      [
        "storage",
        "002dc720",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065d1f0 ["INT_ADD", "register:40f0:8", ["const:65d1f0:8", "const:4:8"]]
- 0065d1f0 ["CALL", null, ["callee:0046cb14:8"]]
+ 0065d230 ["INT_ADD", "register:40f0:8", ["const:65d230:8", "const:4:8"]]
+ 0065d230 ["CALL", null, ["callee:0046cb14:8"]]
- 0065cd08 ["INT_ADD", "register:40f0:8", ["const:65cd08:8", "const:4:8"]]
- 0065cd08 ["CALL", null, ["callee:004678a0:8"]]
+ 0065cd48 ["INT_ADD", "register:40f0:8", ["const:65cd48:8", "const:4:8"]]
+ 0065cd48 ["CALL", null, ["callee:004678a0:8"]]
- 0065cd30 ["INT_ADD", "register:40f0:8", ["const:65cd30:8", "const:4:8"]]
- 0065cd30 ["CALL", null, ["callee:00851550:8"]]
+ 0065cd70 ["INT_ADD", "register:40f0:8", ["const:65cd70:8", "const:4:8"]]
+ 0065cd70 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-97e062ca0cb5b79fc5987fcf5f5fb423"></a>

### [`0065d630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065d/0065d630.md) → [`0065d670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065d/0065d670.md) FUN_0065d670

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00651aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00651/00651aa4.md) · 呼出先 31件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md)
- 新版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.15% / 新版 99.15%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065db90",
      "incomplete_value": false,
      "site": "0065db94",
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
      "definition_site": "0065db50",
      "incomplete_value": false,
      "site": "0065db54",
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
    "ordinal": 50,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0065d894",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "dword"
      ]
    ],
    [
      "0065d8a8",
      "DATA",
      [
        "storage",
        "004347f8",
        null,
        "byte[39]"
      ]
    ],
    [
      "0065d970",
      "READ",
      [
        "storage",
        "002dc6e0",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0065d894",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "byte[23]"
      ]
    ],
    [
      "0065d8a8",
      "DATA",
      [
        "storage",
        "004347f8",
        null,
        "byte[47]"
      ]
    ],
    [
      "0065d970",
      "READ",
      [
        "storage",
        "002dc720",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065db54 ["INT_ADD", "register:40f0:8", ["const:65db54:8", "const:4:8"]]
- 0065db54 ["CALL", null, ["callee:0046cb14:8"]]
+ 0065db94 ["INT_ADD", "register:40f0:8", ["const:65db94:8", "const:4:8"]]
+ 0065db94 ["CALL", null, ["callee:0046cb14:8"]]
- 0065d66c ["INT_ADD", "register:40f0:8", ["const:65d66c:8", "const:4:8"]]
- 0065d66c ["CALL", null, ["callee:004678a0:8"]]
+ 0065d6ac ["INT_ADD", "register:40f0:8", ["const:65d6ac:8", "const:4:8"]]
+ 0065d6ac ["CALL", null, ["callee:004678a0:8"]]
- 0065d694 ["INT_ADD", "register:40f0:8", ["const:65d694:8", "const:4:8"]]
- 0065d694 ["CALL", null, ["callee:00851550:8"]]
+ 0065d6d4 ["INT_ADD", "register:40f0:8", ["const:65d6d4:8", "const:4:8"]]
+ 0065d6d4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f9f84d1a6c62d7a4a6307553d8e6d45c"></a>

### [`0065df94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065d/0065df94.md) → [`0065dfd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065d/0065dfd4.md) FUN_0065dfd4

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
      "definition_site": "0065dfe0",
      "incomplete_value": false,
      "site": "0065dfec",
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
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065dfa0",
      "incomplete_value": false,
      "site": "0065dfac",
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
            "const:248:8"
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
      "0065dfec",
      "DATA",
      [
        "storage",
        "00c74248",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065dfec",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065dfa0 ["COPY", "tmp:0:8", ["const:248:8"]]
- 0065dfa0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0065dfa0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0065dfa0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0065dfe0 ["COPY", "tmp:0:8", ["const:318:8"]]
+ 0065dfe0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0065dfe0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0065dfe0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-59eae72f2fe0a61289868a54271ad45a"></a>

### [`0065dfd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065d/0065dfd8.md) → [`0065e018`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e018.md) FUN_0065e018

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
      "definition_site": "0065e030",
      "incomplete_value": false,
      "site": "0065e03c",
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
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065dff0",
      "incomplete_value": false,
      "site": "0065dffc",
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
            "const:248:8"
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
      "0065e03c",
      "DATA",
      [
        "storage",
        "00c74248",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e03c",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065dff0 ["COPY", "tmp:0:8", ["const:248:8"]]
- 0065dff0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065dff0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065dff0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065e030 ["COPY", "tmp:0:8", ["const:318:8"]]
+ 0065e030 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e030 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e030 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0065e020 ["COPY", "register:0:8", ["register:4040:8"]]
- 0065e020 ["INT_ADD", "register:40f0:8", ["const:65e020:8", "const:4:8"]]
- 0065e020 ["CALLIND", null, ["register:0:8"]]
+ 0065e060 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0065e060 ["INT_ADD", "register:40f0:8", ["const:65e060:8", "const:4:8"]]
+ 0065e060 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-53b1b44b8371843bfb09216695650430"></a>

### [`0065e034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e034.md) → [`0065e074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e074.md) FUN_0065e074

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
      "definition_site": "0065e09c",
      "incomplete_value": false,
      "site": "0065e0a0",
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
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e05c",
      "incomplete_value": false,
      "site": "0065e060",
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
            "const:248:8"
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
      "0065e0a0",
      "DATA",
      [
        "storage",
        "00c74248",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e0a0",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e048 ["INT_ADD", "register:40f0:8", ["const:65e048:8", "const:4:8"]]
- 0065e048 ["CALL", null, ["callee:00c57f60:8"]]
+ 0065e088 ["INT_ADD", "register:40f0:8", ["const:65e088:8", "const:4:8"]]
+ 0065e088 ["CALL", null, ["callee:00c57f60:8"]]
- 0065e05c ["COPY", "tmp:0:8", ["const:248:8"]]
- 0065e05c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0065e05c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0065e05c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0065e09c ["COPY", "tmp:0:8", ["const:318:8"]]
+ 0065e09c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0065e09c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0065e09c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0065e080 ["COPY", "register:0:8", ["register:4040:8"]]
- 0065e080 ["INT_ADD", "register:40f0:8", ["const:65e080:8", "const:4:8"]]
- 0065e080 ["CALLIND", null, ["register:0:8"]]
+ 0065e0c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0065e0c0 ["INT_ADD", "register:40f0:8", ["const:65e0c0:8", "const:4:8"]]
+ 0065e0c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9bccde27378d5b4123016713700ab9f7"></a>

### [`0065e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e0c4.md) → [`0065e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e104.md) FUN_0065e104

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
      "definition_site": "0065e120",
      "incomplete_value": false,
      "site": "0065e124",
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
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e0e0",
      "incomplete_value": false,
      "site": "0065e0e4",
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
            "const:248:8"
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
      "0065e124",
      "DATA",
      [
        "storage",
        "00c74248",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e124",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e0e0 ["COPY", "tmp:0:8", ["const:248:8"]]
- 0065e0e0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0065e0e0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0065e0e0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0065e120 ["COPY", "tmp:0:8", ["const:318:8"]]
+ 0065e120 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0065e120 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0065e120 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0065e108 ["COPY", "register:0:8", ["register:4048:8"]]
- 0065e108 ["INT_ADD", "register:40f0:8", ["const:65e108:8", "const:4:8"]]
- 0065e108 ["CALLIND", null, ["register:0:8"]]
+ 0065e148 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0065e148 ["INT_ADD", "register:40f0:8", ["const:65e148:8", "const:4:8"]]
+ 0065e148 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b07ef530bf47aac50d205d23331c7b02"></a>

### [`0065e1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e1fc.md) → [`0065e23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e23c.md) FUN_0065e23c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065e1cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e1cc.md) · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006583a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/006583a4.md)
- 新版 呼出元 1件 [`0065e20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e20c.md) · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006583e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006583e4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e260",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e220",
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
      "site": "0065e26c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e22c",
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
      "0065e260",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0065e26c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0065e260",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065e26c",
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
- 0065e220 ["INT_ADD", "register:40f0:8", ["const:65e220:8", "const:4:8"]]
- 0065e220 ["CALL", null, ["ram:47acf4:8"]]
+ 0065e260 ["INT_ADD", "register:40f0:8", ["const:65e260:8", "const:4:8"]]
+ 0065e260 ["CALL", null, ["ram:47ad34:8"]]
- 0065e22c ["INT_ADD", "register:40f0:8", ["const:65e22c:8", "const:4:8"]]
- 0065e22c ["CALL", null, ["ram:47acf4:8"]]
+ 0065e26c ["INT_ADD", "register:40f0:8", ["const:65e26c:8", "const:4:8"]]
+ 0065e26c ["CALL", null, ["ram:47ad34:8"]]
- 0065e250 ["INT_ADD", "register:40f0:8", ["const:65e250:8", "const:4:8"]]
- 0065e250 ["CALL", null, ["callee:006583e4:8"]]
+ 0065e290 ["INT_ADD", "register:40f0:8", ["const:65e290:8", "const:4:8"]]
+ 0065e290 ["CALL", null, ["callee:006583e4:8"]]
~~~


<a id="compare-83e0ed4ca5eda89b9c8043abfd740198"></a>

### [`0065e284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e284.md) → [`0065e2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e2c4.md) FUN_0065e2c4

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
      "definition_site": "0065e2d8",
      "incomplete_value": false,
      "site": "0065e2dc",
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
            "const:398:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e298",
      "incomplete_value": false,
      "site": "0065e29c",
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
            "const:2c8:8"
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
      "0065e2dc",
      "DATA",
      [
        "storage",
        "00c742c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e2dc",
      "DATA",
      [
        "storage",
        "00c74398",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e290 ["INT_ADD", "register:40f0:8", ["const:65e290:8", "const:4:8"]]
- 0065e290 ["CALL", null, ["callee:00c57f60:8"]]
+ 0065e2d0 ["INT_ADD", "register:40f0:8", ["const:65e2d0:8", "const:4:8"]]
+ 0065e2d0 ["CALL", null, ["callee:00c57f60:8"]]
- 0065e298 ["COPY", "tmp:0:8", ["const:2c8:8"]]
- 0065e298 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065e298 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065e298 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065e2d8 ["COPY", "tmp:0:8", ["const:398:8"]]
+ 0065e2d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e2d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e2d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb736f1ce96060249a2e9203550431dd"></a>

### [`0065e2f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e2f0.md) → [`0065e330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e330.md) FUN_0065e330

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065e2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e2c0.md) · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 1件 [`0065e300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e300.md) · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e350",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e310",
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
      "site": "0065e35c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e31c",
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
      "0065e350",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0065e35c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0065e350",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065e35c",
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
- 0065e310 ["INT_ADD", "register:40f0:8", ["const:65e310:8", "const:4:8"]]
- 0065e310 ["CALL", null, ["ram:47acf4:8"]]
+ 0065e350 ["INT_ADD", "register:40f0:8", ["const:65e350:8", "const:4:8"]]
+ 0065e350 ["CALL", null, ["ram:47ad34:8"]]
- 0065e31c ["INT_ADD", "register:40f0:8", ["const:65e31c:8", "const:4:8"]]
- 0065e31c ["CALL", null, ["ram:47acf4:8"]]
+ 0065e35c ["INT_ADD", "register:40f0:8", ["const:65e35c:8", "const:4:8"]]
+ 0065e35c ["CALL", null, ["ram:47ad34:8"]]
- 0065e350 ["INT_ADD", "register:40f0:8", ["const:65e350:8", "const:4:8"]]
- 0065e350 ["CALL", null, ["callee:00851550:8"]]
+ 0065e390 ["INT_ADD", "register:40f0:8", ["const:65e390:8", "const:4:8"]]
+ 0065e390 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-269f7c9b7efac6fd02e0ed3cd1e385e8"></a>

### [`0065e370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e370.md) → [`0065e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e3b0.md) FUN_0065e3b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`00658dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658dac.md) [`00659e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00659/00659e9c.md) [`0065ad40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065a/0065ad40.md) [`0065be2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065b/0065be2c.md) [`0065e370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065e370.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 8件 [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) [`0065e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e3b0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065e500",
      "incomplete_value": false,
      "site": "0065e508",
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
      "definition_site": "0065e4c0",
      "incomplete_value": false,
      "site": "0065e4c8",
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
      "definition_site": "0065e524",
      "incomplete_value": false,
      "site": "0065e530",
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
      "definition_site": "0065e4e4",
      "incomplete_value": false,
      "site": "0065e4f0",
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
      "definition_site": "0065e658",
      "incomplete_value": false,
      "site": "0065e660",
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
      "definition_site": "0065e618",
      "incomplete_value": false,
      "site": "0065e620",
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
      "0065e500",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0065e524",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "0065e658",
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
      "0065e500",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0065e524",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "0065e658",
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
- 0065e4c8 ["INT_ADD", "register:40f0:8", ["const:65e4c8:8", "const:4:8"]]
- 0065e4c8 ["CALL", null, ["callee:00441ed4:8"]]
+ 0065e508 ["INT_ADD", "register:40f0:8", ["const:65e508:8", "const:4:8"]]
+ 0065e508 ["CALL", null, ["callee:00441ed4:8"]]
- 0065e4f0 ["INT_ADD", "register:40f0:8", ["const:65e4f0:8", "const:4:8"]]
- 0065e4f0 ["CALL", null, ["callee:00442834:8"]]
+ 0065e530 ["INT_ADD", "register:40f0:8", ["const:65e530:8", "const:4:8"]]
+ 0065e530 ["CALL", null, ["callee:00442834:8"]]
- 0065e620 ["INT_ADD", "register:40f0:8", ["const:65e620:8", "const:4:8"]]
- 0065e620 ["CALL", null, ["callee:00441ed4:8"]]
+ 0065e660 ["INT_ADD", "register:40f0:8", ["const:65e660:8", "const:4:8"]]
+ 0065e660 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-5c3d1daf1689ba4054365e2eeb68f573"></a>

### [`0065ebf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ebf8.md) → [`0065ec38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ec38.md) FUN_0065ec38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065ebc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ebc8.md) · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00659e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00659/00659e9c.md)
- 新版 呼出元 1件 [`0065ec08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ec08.md) · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ec58",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ec18",
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
      "site": "0065ec80",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ec40",
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
      "0065ec58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0065ec80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0065ec58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065ec80",
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
- 0065ec18 ["INT_ADD", "register:40f0:8", ["const:65ec18:8", "const:4:8"]]
- 0065ec18 ["CALL", null, ["ram:47acf4:8"]]
+ 0065ec58 ["INT_ADD", "register:40f0:8", ["const:65ec58:8", "const:4:8"]]
+ 0065ec58 ["CALL", null, ["ram:47ad34:8"]]
- 0065ec40 ["INT_ADD", "register:40f0:8", ["const:65ec40:8", "const:4:8"]]
- 0065ec40 ["CALL", null, ["ram:47acf4:8"]]
+ 0065ec80 ["INT_ADD", "register:40f0:8", ["const:65ec80:8", "const:4:8"]]
+ 0065ec80 ["CALL", null, ["ram:47ad34:8"]]
- 0065ec54 ["INT_ADD", "register:40f0:8", ["const:65ec54:8", "const:4:8"]]
- 0065ec54 ["CALL", null, ["callee:0047ce14:8"]]
+ 0065ec94 ["INT_ADD", "register:40f0:8", ["const:65ec94:8", "const:4:8"]]
+ 0065ec94 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-2adefa54b1611edca8f84034697878aa"></a>

### [`0065ec9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ec9c.md) → [`0065ecdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ecdc.md) FUN_0065ecdc

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
      "definition_site": "0065ece8",
      "incomplete_value": false,
      "site": "0065ecf4",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065eca8",
      "incomplete_value": false,
      "site": "0065ecb4",
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
            "const:3c8:8"
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
      "0065ecf4",
      "DATA",
      [
        "storage",
        "00c743c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065ecf4",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065eca8 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 0065eca8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0065eca8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0065eca8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0065ece8 ["COPY", "tmp:0:8", ["const:498:8"]]
+ 0065ece8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0065ece8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0065ece8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-42d0bd1be2c54f2dcf994a00365656b9"></a>

### [`0065ece0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ece0.md) → [`0065ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ed20.md) FUN_0065ed20

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
      "definition_site": "0065ed38",
      "incomplete_value": false,
      "site": "0065ed44",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065ecf8",
      "incomplete_value": false,
      "site": "0065ed04",
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
            "const:3c8:8"
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
      "0065ed44",
      "DATA",
      [
        "storage",
        "00c743c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065ed44",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ecf8 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 0065ecf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065ecf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065ecf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065ed38 ["COPY", "tmp:0:8", ["const:498:8"]]
+ 0065ed38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065ed38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065ed38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0065ed28 ["COPY", "register:0:8", ["register:4040:8"]]
- 0065ed28 ["INT_ADD", "register:40f0:8", ["const:65ed28:8", "const:4:8"]]
- 0065ed28 ["CALLIND", null, ["register:0:8"]]
+ 0065ed68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0065ed68 ["INT_ADD", "register:40f0:8", ["const:65ed68:8", "const:4:8"]]
+ 0065ed68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3e137be340705c51254c03397ad1bb95"></a>

### [`0065ed3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ed3c.md) → [`0065ed7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ed7c.md) FUN_0065ed7c

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
      "definition_site": "0065eda4",
      "incomplete_value": false,
      "site": "0065eda8",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065ed64",
      "incomplete_value": false,
      "site": "0065ed68",
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
            "const:3c8:8"
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
      "0065eda8",
      "DATA",
      [
        "storage",
        "00c743c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065eda8",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ed50 ["INT_ADD", "register:40f0:8", ["const:65ed50:8", "const:4:8"]]
- 0065ed50 ["CALL", null, ["callee:00c57f60:8"]]
+ 0065ed90 ["INT_ADD", "register:40f0:8", ["const:65ed90:8", "const:4:8"]]
+ 0065ed90 ["CALL", null, ["callee:00c57f60:8"]]
- 0065ed64 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 0065ed64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0065ed64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0065ed64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0065eda4 ["COPY", "tmp:0:8", ["const:498:8"]]
+ 0065eda4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0065eda4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0065eda4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0065ed88 ["COPY", "register:0:8", ["register:4040:8"]]
- 0065ed88 ["INT_ADD", "register:40f0:8", ["const:65ed88:8", "const:4:8"]]
- 0065ed88 ["CALLIND", null, ["register:0:8"]]
+ 0065edc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0065edc8 ["INT_ADD", "register:40f0:8", ["const:65edc8:8", "const:4:8"]]
+ 0065edc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2822eb99f23c804c6efd6c206f0882d1"></a>

### [`0065edcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065edcc.md) → [`0065ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ee0c.md) FUN_0065ee0c

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
      "definition_site": "0065ee28",
      "incomplete_value": false,
      "site": "0065ee2c",
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
            "const:498:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065ede8",
      "incomplete_value": false,
      "site": "0065edec",
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
            "const:3c8:8"
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
      "0065ee2c",
      "DATA",
      [
        "storage",
        "00c743c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065ee2c",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ede8 ["COPY", "tmp:0:8", ["const:3c8:8"]]
- 0065ede8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0065ede8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0065ede8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0065ee28 ["COPY", "tmp:0:8", ["const:498:8"]]
+ 0065ee28 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0065ee28 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0065ee28 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0065ee10 ["COPY", "register:0:8", ["register:4048:8"]]
- 0065ee10 ["INT_ADD", "register:40f0:8", ["const:65ee10:8", "const:4:8"]]
- 0065ee10 ["CALLIND", null, ["register:0:8"]]
+ 0065ee50 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0065ee50 ["INT_ADD", "register:40f0:8", ["const:65ee50:8", "const:4:8"]]
+ 0065ee50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-56ec4fc6c3c88cf298c2f62163084519"></a>

### [`0065ef04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ef04.md) → [`0065ef44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ef44.md) FUN_0065ef44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065eed4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065eed4.md) · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006583a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/006583a4.md)
- 新版 呼出元 1件 [`0065ef14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ef14.md) · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006583e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006583e4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ef68",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ef28",
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
      "site": "0065ef74",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ef34",
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
      "0065ef68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0065ef74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0065ef68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065ef74",
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
- 0065ef28 ["INT_ADD", "register:40f0:8", ["const:65ef28:8", "const:4:8"]]
- 0065ef28 ["CALL", null, ["ram:47acf4:8"]]
+ 0065ef68 ["INT_ADD", "register:40f0:8", ["const:65ef68:8", "const:4:8"]]
+ 0065ef68 ["CALL", null, ["ram:47ad34:8"]]
- 0065ef34 ["INT_ADD", "register:40f0:8", ["const:65ef34:8", "const:4:8"]]
- 0065ef34 ["CALL", null, ["ram:47acf4:8"]]
+ 0065ef74 ["INT_ADD", "register:40f0:8", ["const:65ef74:8", "const:4:8"]]
+ 0065ef74 ["CALL", null, ["ram:47ad34:8"]]
- 0065ef58 ["INT_ADD", "register:40f0:8", ["const:65ef58:8", "const:4:8"]]
- 0065ef58 ["CALL", null, ["callee:006583e4:8"]]
+ 0065ef98 ["INT_ADD", "register:40f0:8", ["const:65ef98:8", "const:4:8"]]
+ 0065ef98 ["CALL", null, ["callee:006583e4:8"]]
~~~


<a id="compare-352aed180e9312c93ba4f79243c26d2d"></a>

### [`0065ef8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065ef8c.md) → [`0065efcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065efcc.md) FUN_0065efcc

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
      "definition_site": "0065efe0",
      "incomplete_value": false,
      "site": "0065efe4",
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
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065efa0",
      "incomplete_value": false,
      "site": "0065efa4",
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
            "const:448:8"
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
      "0065efe4",
      "DATA",
      [
        "storage",
        "00c74448",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065efe4",
      "DATA",
      [
        "storage",
        "00c74518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ef98 ["INT_ADD", "register:40f0:8", ["const:65ef98:8", "const:4:8"]]
- 0065ef98 ["CALL", null, ["callee:00c57f60:8"]]
+ 0065efd8 ["INT_ADD", "register:40f0:8", ["const:65efd8:8", "const:4:8"]]
+ 0065efd8 ["CALL", null, ["callee:00c57f60:8"]]
- 0065efa0 ["COPY", "tmp:0:8", ["const:448:8"]]
- 0065efa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065efa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065efa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065efe0 ["COPY", "tmp:0:8", ["const:518:8"]]
+ 0065efe0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065efe0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065efe0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e94ec8e7afb4fa22050c21aaa4faeaf0"></a>

### [`0065eff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065eff8.md) → [`0065f038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f038.md) FUN_0065f038

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065efc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065e/0065efc8.md) · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 1件 [`0065f008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f008.md) · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f058",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f018",
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
      "site": "0065f064",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f024",
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
      "0065f058",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0065f064",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0065f058",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065f064",
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
- 0065f018 ["INT_ADD", "register:40f0:8", ["const:65f018:8", "const:4:8"]]
- 0065f018 ["CALL", null, ["ram:47acf4:8"]]
+ 0065f058 ["INT_ADD", "register:40f0:8", ["const:65f058:8", "const:4:8"]]
+ 0065f058 ["CALL", null, ["ram:47ad34:8"]]
- 0065f024 ["INT_ADD", "register:40f0:8", ["const:65f024:8", "const:4:8"]]
- 0065f024 ["CALL", null, ["ram:47acf4:8"]]
+ 0065f064 ["INT_ADD", "register:40f0:8", ["const:65f064:8", "const:4:8"]]
+ 0065f064 ["CALL", null, ["ram:47ad34:8"]]
- 0065f058 ["INT_ADD", "register:40f0:8", ["const:65f058:8", "const:4:8"]]
- 0065f058 ["CALL", null, ["callee:00851550:8"]]
+ 0065f098 ["INT_ADD", "register:40f0:8", ["const:65f098:8", "const:4:8"]]
+ 0065f098 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-229bcb73024d49b001eb203142684d32"></a>

### [`0065f07c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065f/0065f07c.md) → [`0065f0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f0bc.md) FUN_0065f0bc

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
      "definition_site": "0065f0e0",
      "incomplete_value": false,
      "site": "0065f0e4",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065f0a0",
      "incomplete_value": false,
      "site": "0065f0a4",
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
            "const:4c8:8"
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
      "0065f0e4",
      "DATA",
      [
        "storage",
        "00c744c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f0e4",
      "DATA",
      [
        "storage",
        "00c74598",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065f090 ["INT_ADD", "register:40f0:8", ["const:65f090:8", "const:4:8"]]
- 0065f090 ["CALL", null, ["callee:00c57f60:8"]]
+ 0065f0d0 ["INT_ADD", "register:40f0:8", ["const:65f0d0:8", "const:4:8"]]
+ 0065f0d0 ["CALL", null, ["callee:00c57f60:8"]]
- 0065f0a0 ["COPY", "tmp:0:8", ["const:4c8:8"]]
- 0065f0a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065f0a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065f0a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065f0e0 ["COPY", "tmp:0:8", ["const:598:8"]]
+ 0065f0e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065f0e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065f0e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-867a9924df43772a4a24e3de650c989e"></a>

### [`0065f0bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065f/0065f0bc.md) → [`0065f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f0fc.md) FUN_0065f0fc

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
      "definition_site": "0065f100",
      "incomplete_value": false,
      "site": "0065f104",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065f0c0",
      "incomplete_value": false,
      "site": "0065f0c4",
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
            "const:4c8:8"
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
      "0065f104",
      "DATA",
      [
        "storage",
        "00c744c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f104",
      "DATA",
      [
        "storage",
        "00c74598",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065f0c0 ["COPY", "tmp:0:8", ["const:4c8:8"]]
- 0065f0c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065f0c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065f0c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065f100 ["COPY", "tmp:0:8", ["const:598:8"]]
+ 0065f100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065f100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065f100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


