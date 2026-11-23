# v16.0.1 → v16.0.2 · 最優先の変更候補 (25)

[一覧の目次](README.md)

<a id="compare-1e7db6fe0d7fd44a91b233751aaf3054"></a>

### [`005db074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db074.md) → [`005db0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db0b4.md) FUN_005db0b4

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
      "site": "005db0d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db098",
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
      "005db0d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005db0d8",
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
- 005db098 ["INT_ADD", "register:40f0:8", ["const:5db098:8", "const:4:8"]]
- 005db098 ["CALL", null, ["ram:47acf4:8"]]
+ 005db0d8 ["INT_ADD", "register:40f0:8", ["const:5db0d8:8", "const:4:8"]]
+ 005db0d8 ["CALL", null, ["ram:47ad34:8"]]
- 005db0a4 ["INT_ADD", "register:40f0:8", ["const:5db0a4:8", "const:4:8"]]
- 005db0a4 ["CALL", null, ["callee:0047ce14:8"]]
+ 005db0e4 ["INT_ADD", "register:40f0:8", ["const:5db0e4:8", "const:4:8"]]
+ 005db0e4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-5b9ec0ff145fb275b20eb6c734f4b9b2"></a>

### [`005db0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db0e8.md) → [`005db128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db128.md) FUN_005db128

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
      "definition_site": "005db14c",
      "incomplete_value": false,
      "site": "005db14c",
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
            "const:558:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db10c",
      "incomplete_value": false,
      "site": "005db10c",
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
            "const:488:8"
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
      "005db14c",
      "DATA",
      [
        "storage",
        "00c71488",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db14c",
      "DATA",
      [
        "storage",
        "00c71558",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db0fc ["INT_ADD", "register:40f0:8", ["const:5db0fc:8", "const:4:8"]]
- 005db0fc ["CALL", null, ["callee:00c57f60:8"]]
+ 005db13c ["INT_ADD", "register:40f0:8", ["const:5db13c:8", "const:4:8"]]
+ 005db13c ["CALL", null, ["callee:00c57f60:8"]]
- 005db108 ["COPY", "tmp:0:8", ["const:488:8"]]
- 005db108 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db108 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db108 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db148 ["COPY", "tmp:0:8", ["const:558:8"]]
+ 005db148 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db148 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db148 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e9646e0ae71e3276ebc482c41032d844"></a>

### [`005db138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db138.md) → [`005db178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db178.md) FUN_005db178

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005cc5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc5a0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005cc5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc5e0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db198",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db158",
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
      "site": "005db1a4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db164",
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
      "005db198",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005db1a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005db198",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005db1a4",
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
- 005db158 ["INT_ADD", "register:40f0:8", ["const:5db158:8", "const:4:8"]]
- 005db158 ["CALL", null, ["ram:47acf4:8"]]
+ 005db198 ["INT_ADD", "register:40f0:8", ["const:5db198:8", "const:4:8"]]
+ 005db198 ["CALL", null, ["ram:47ad34:8"]]
- 005db164 ["INT_ADD", "register:40f0:8", ["const:5db164:8", "const:4:8"]]
- 005db164 ["CALL", null, ["ram:47acf4:8"]]
+ 005db1a4 ["INT_ADD", "register:40f0:8", ["const:5db1a4:8", "const:4:8"]]
+ 005db1a4 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-19ecec925dbf7a1dddf0e06a4ad3f243"></a>

### [`005db1b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db1b8.md) → [`005db1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db1f8.md) FUN_005db1f8

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
      "definition_site": "005db21c",
      "incomplete_value": false,
      "site": "005db21c",
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
            "const:5d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db1dc",
      "incomplete_value": false,
      "site": "005db1dc",
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
            "const:508:8"
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
      "005db21c",
      "DATA",
      [
        "storage",
        "00c71508",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db21c",
      "DATA",
      [
        "storage",
        "00c715d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db1cc ["INT_ADD", "register:40f0:8", ["const:5db1cc:8", "const:4:8"]]
- 005db1cc ["CALL", null, ["callee:00c57f60:8"]]
+ 005db20c ["INT_ADD", "register:40f0:8", ["const:5db20c:8", "const:4:8"]]
+ 005db20c ["CALL", null, ["callee:00c57f60:8"]]
- 005db1d8 ["COPY", "tmp:0:8", ["const:508:8"]]
- 005db1d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db1d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db1d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db218 ["COPY", "tmp:0:8", ["const:5d8:8"]]
+ 005db218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6bde1666a5877280430b724edac30c3c"></a>

### [`005db208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db208.md) → [`005db248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db248.md) FUN_005db248

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006877c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/006877c8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00687808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687808.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.45% / 新版 98.45%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db274",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db234",
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
      "site": "005db280",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db240",
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
      "005db274",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005db280",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005db2c8",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "uleb128"
      ]
    ]
  ],
  "added": [
    [
      "005db274",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005db280",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005db2c8",
      "DATA",
      [
        "storage",
        "0042ef44",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db234 ["INT_ADD", "register:40f0:8", ["const:5db234:8", "const:4:8"]]
- 005db234 ["CALL", null, ["ram:47acf4:8"]]
+ 005db274 ["INT_ADD", "register:40f0:8", ["const:5db274:8", "const:4:8"]]
+ 005db274 ["CALL", null, ["ram:47ad34:8"]]
- 005db240 ["INT_ADD", "register:40f0:8", ["const:5db240:8", "const:4:8"]]
- 005db240 ["CALL", null, ["ram:47acf4:8"]]
+ 005db280 ["INT_ADD", "register:40f0:8", ["const:5db280:8", "const:4:8"]]
+ 005db280 ["CALL", null, ["ram:47ad34:8"]]
- 005db264 ["INT_ADD", "register:40f0:8", ["const:5db264:8", "const:4:8"]]
- 005db264 ["CALL", null, ["callee:00851550:8"]]
+ 005db2a4 ["INT_ADD", "register:40f0:8", ["const:5db2a4:8", "const:4:8"]]
+ 005db2a4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8fe4fff58e2e4ec9d07340e140079b7a"></a>

### [`005db438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db438.md) → [`005db478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db478.md) FUN_005db478

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
      "definition_site": "005db49c",
      "incomplete_value": false,
      "site": "005db49c",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db45c",
      "incomplete_value": false,
      "site": "005db45c",
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
            "const:588:8"
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
      "005db49c",
      "DATA",
      [
        "storage",
        "00c71588",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db49c",
      "DATA",
      [
        "storage",
        "00c71658",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db44c ["INT_ADD", "register:40f0:8", ["const:5db44c:8", "const:4:8"]]
- 005db44c ["CALL", null, ["callee:00c57f60:8"]]
+ 005db48c ["INT_ADD", "register:40f0:8", ["const:5db48c:8", "const:4:8"]]
+ 005db48c ["CALL", null, ["callee:00c57f60:8"]]
- 005db458 ["COPY", "tmp:0:8", ["const:588:8"]]
- 005db458 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db458 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db458 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db498 ["COPY", "tmp:0:8", ["const:658:8"]]
+ 005db498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-524636269ad4f719cce287a38f8ec3a3"></a>

### [`005db488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db488.md) → [`005db4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4c8.md) FUN_005db4c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)

変更の種類 call, call_argument_candidate, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005db604",
      "incomplete_value": false,
      "site": "005db604",
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
            "const:6c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db5c4",
      "incomplete_value": false,
      "site": "005db5c4",
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
            "const:5f8:8"
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
      "site": "005db500",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db4c0",
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
      "site": "005db51c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db4dc",
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
      "005db500",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005db51c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005db590",
      "READ",
      [
        "storage",
        "002a44a8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005db500",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005db51c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005db590",
      "READ",
      [
        "storage",
        "002a445b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db4c0 ["INT_ADD", "register:40f0:8", ["const:5db4c0:8", "const:4:8"]]
- 005db4c0 ["CALL", null, ["ram:47acf4:8"]]
+ 005db500 ["INT_ADD", "register:40f0:8", ["const:5db500:8", "const:4:8"]]
+ 005db500 ["CALL", null, ["ram:47ad34:8"]]
- 005db4dc ["INT_ADD", "register:40f0:8", ["const:5db4dc:8", "const:4:8"]]
- 005db4dc ["CALL", null, ["ram:47acf4:8"]]
+ 005db51c ["INT_ADD", "register:40f0:8", ["const:5db51c:8", "const:4:8"]]
+ 005db51c ["CALL", null, ["ram:47ad34:8"]]
- 005db590 ["INT_ADD", "register:40f0:8", ["const:5db590:8", "const:4:8"]]
- 005db590 ["CALL", null, ["callee:005cd558:8"]]
+ 005db5d0 ["INT_ADD", "register:40f0:8", ["const:5db5d0:8", "const:4:8"]]
+ 005db5d0 ["CALL", null, ["callee:005cd558:8"]]
~~~


<a id="compare-485b06d415bc5df350622e050cf53492"></a>

### [`005db7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db7a4.md) → [`005db7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db7e4.md) FUN_005db7e4

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
      "definition_site": "005db808",
      "incomplete_value": false,
      "site": "005db808",
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
            "const:6c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db7c8",
      "incomplete_value": false,
      "site": "005db7c8",
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
            "const:5f8:8"
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
      "005db808",
      "DATA",
      [
        "storage",
        "00c715f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db808",
      "DATA",
      [
        "storage",
        "00c716c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db7b8 ["INT_ADD", "register:40f0:8", ["const:5db7b8:8", "const:4:8"]]
- 005db7b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 005db7f8 ["INT_ADD", "register:40f0:8", ["const:5db7f8:8", "const:4:8"]]
+ 005db7f8 ["CALL", null, ["callee:00c57f60:8"]]
- 005db7c4 ["COPY", "tmp:0:8", ["const:5f8:8"]]
- 005db7c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db7c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db7c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db804 ["COPY", "tmp:0:8", ["const:6c8:8"]]
+ 005db804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-acc16147b1b2bc9a8a8b6fda676844e5"></a>

### [`005db7d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db7d8.md) → [`005db818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db818.md) FUN_005db818

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
      "definition_site": "005db824",
      "incomplete_value": false,
      "site": "005db824",
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
            "const:6c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db7e4",
      "incomplete_value": false,
      "site": "005db7e4",
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
            "const:5f8:8"
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
      "005db824",
      "DATA",
      [
        "storage",
        "00c715f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db824",
      "DATA",
      [
        "storage",
        "00c716c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db7e0 ["COPY", "tmp:0:8", ["const:5f8:8"]]
- 005db7e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005db7e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005db7e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005db820 ["COPY", "tmp:0:8", ["const:6c8:8"]]
+ 005db820 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005db820 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005db820 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fcf7ffb05fd99ec041a9c645dc1e0249"></a>

### [`005db7f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db7f4.md) → [`005db834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db834.md) FUN_005db834

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
      "site": "005db858",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005db818",
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
      "005db858",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005db858",
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
- 005db818 ["INT_ADD", "register:40f0:8", ["const:5db818:8", "const:4:8"]]
- 005db818 ["CALL", null, ["ram:47acf4:8"]]
+ 005db858 ["INT_ADD", "register:40f0:8", ["const:5db858:8", "const:4:8"]]
+ 005db858 ["CALL", null, ["ram:47ad34:8"]]
- 005db824 ["INT_ADD", "register:40f0:8", ["const:5db824:8", "const:4:8"]]
- 005db824 ["CALL", null, ["callee:0047ce14:8"]]
+ 005db864 ["INT_ADD", "register:40f0:8", ["const:5db864:8", "const:4:8"]]
+ 005db864 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-6adccdfdc348e5223d99092a662aee4f"></a>

### [`005db868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db868.md) → [`005db8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db8a8.md) FUN_005db8a8

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
      "definition_site": "005db8c8",
      "incomplete_value": false,
      "site": "005db8cc",
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
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db888",
      "incomplete_value": false,
      "site": "005db88c",
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
            "const:688:8"
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
      "005db8cc",
      "DATA",
      [
        "storage",
        "00c71688",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db8cc",
      "DATA",
      [
        "storage",
        "00c71758",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db87c ["INT_ADD", "register:40f0:8", ["const:5db87c:8", "const:4:8"]]
- 005db87c ["CALL", null, ["callee:00c57f60:8"]]
+ 005db8bc ["INT_ADD", "register:40f0:8", ["const:5db8bc:8", "const:4:8"]]
+ 005db8bc ["CALL", null, ["callee:00c57f60:8"]]
- 005db888 ["COPY", "tmp:0:8", ["const:688:8"]]
- 005db888 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db888 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db888 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db8c8 ["COPY", "tmp:0:8", ["const:758:8"]]
+ 005db8c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db8c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db8c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f470049592fe2a2e5192c04931a4bf22"></a>

### [`005db8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db8c0.md) → [`005db900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db900.md) FUN_005db900

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 18件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005dbd14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbd14.md)
- 新版 呼出元 0件  · 呼出先 18件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005dbd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbd54.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.01% / 新版 94.01%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005dbae8",
      "incomplete_value": true,
      "site": "005dbae8",
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
                "const:d58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbaa8",
      "incomplete_value": true,
      "site": "005dbaa8",
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
                "const:db4:8"
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
      "definition_site": "005dbadc",
      "incomplete_value": true,
      "site": "005dbaec",
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
      "definition_site": "005dba9c",
      "incomplete_value": true,
      "site": "005dbaac",
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
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005dbb98",
      "incomplete_value": false,
      "site": "005dbb98",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbb58",
      "incomplete_value": false,
      "site": "005dbb58",
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
            "const:778:8"
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
      "005db93c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005db958",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005dba0c",
      "READ",
      [
        "storage",
        "002b5032",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005db93c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005db958",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005dba0c",
      "READ",
      [
        "storage",
        "002b5063",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db8fc ["INT_ADD", "register:40f0:8", ["const:5db8fc:8", "const:4:8"]]
- 005db8fc ["CALL", null, ["ram:47acf4:8"]]
+ 005db93c ["INT_ADD", "register:40f0:8", ["const:5db93c:8", "const:4:8"]]
+ 005db93c ["CALL", null, ["ram:47ad34:8"]]
- 005db918 ["INT_ADD", "register:40f0:8", ["const:5db918:8", "const:4:8"]]
- 005db918 ["CALL", null, ["ram:47acf4:8"]]
+ 005db958 ["INT_ADD", "register:40f0:8", ["const:5db958:8", "const:4:8"]]
+ 005db958 ["CALL", null, ["ram:47ad34:8"]]
- 005dbae8 ["INT_ADD", "register:40f0:8", ["const:5dbae8:8", "const:4:8"]]
- 005dbae8 ["CALL", null, ["callee:00b3bf30:8"]]
+ 005dbb28 ["INT_ADD", "register:40f0:8", ["const:5dbb28:8", "const:4:8"]]
+ 005dbb28 ["CALL", null, ["callee:00b3bf30:8"]]
~~~


<a id="compare-9782aa16098b9dfe64a88bd0ea810377"></a>

### [`005dbe50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbe50.md) → [`005dbe90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbe90.md) FUN_005dbe90

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
      "definition_site": "005dbeb4",
      "incomplete_value": false,
      "site": "005dbeb4",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbe74",
      "incomplete_value": false,
      "site": "005dbe74",
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
            "const:6f8:8"
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
      "005dbeb4",
      "DATA",
      [
        "storage",
        "00c716f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dbeb4",
      "DATA",
      [
        "storage",
        "00c717c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbe64 ["INT_ADD", "register:40f0:8", ["const:5dbe64:8", "const:4:8"]]
- 005dbe64 ["CALL", null, ["callee:00c57f60:8"]]
+ 005dbea4 ["INT_ADD", "register:40f0:8", ["const:5dbea4:8", "const:4:8"]]
+ 005dbea4 ["CALL", null, ["callee:00c57f60:8"]]
- 005dbe70 ["COPY", "tmp:0:8", ["const:6f8:8"]]
- 005dbe70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dbe70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dbe70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dbeb0 ["COPY", "tmp:0:8", ["const:7c8:8"]]
+ 005dbeb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dbeb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dbeb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3c3397f29d78010d69636548d30e0bd7"></a>

### [`005dbe84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbe84.md) → [`005dbec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbec4.md) FUN_005dbec4

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
      "definition_site": "005dbed0",
      "incomplete_value": false,
      "site": "005dbed0",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbe90",
      "incomplete_value": false,
      "site": "005dbe90",
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
            "const:6f8:8"
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
      "005dbed0",
      "DATA",
      [
        "storage",
        "00c716f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dbed0",
      "DATA",
      [
        "storage",
        "00c717c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbe8c ["COPY", "tmp:0:8", ["const:6f8:8"]]
- 005dbe8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005dbe8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005dbe8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005dbecc ["COPY", "tmp:0:8", ["const:7c8:8"]]
+ 005dbecc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005dbecc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005dbecc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8fd2c5dfa849dc64a241c670417dffa1"></a>

### [`005dbea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbea0.md) → [`005dbee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbee0.md) FUN_005dbee0

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
      "site": "005dbf04",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dbec4",
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
      "005dbf04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005dbf04",
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
- 005dbec4 ["INT_ADD", "register:40f0:8", ["const:5dbec4:8", "const:4:8"]]
- 005dbec4 ["CALL", null, ["ram:47acf4:8"]]
+ 005dbf04 ["INT_ADD", "register:40f0:8", ["const:5dbf04:8", "const:4:8"]]
+ 005dbf04 ["CALL", null, ["ram:47ad34:8"]]
- 005dbed0 ["INT_ADD", "register:40f0:8", ["const:5dbed0:8", "const:4:8"]]
- 005dbed0 ["CALL", null, ["callee:0047ce14:8"]]
+ 005dbf10 ["INT_ADD", "register:40f0:8", ["const:5dbf10:8", "const:4:8"]]
+ 005dbf10 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-7e8c94f3f800596ddd632e32b5f7606e"></a>

### [`005dbf14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbf14.md) → [`005dbf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbf54.md) FUN_005dbf54

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
      "definition_site": "005dbf78",
      "incomplete_value": false,
      "site": "005dbf7c",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbf38",
      "incomplete_value": false,
      "site": "005dbf3c",
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
            "const:778:8"
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
      "005dbf7c",
      "DATA",
      [
        "storage",
        "00c71778",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dbf7c",
      "DATA",
      [
        "storage",
        "00c71848",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbf28 ["INT_ADD", "register:40f0:8", ["const:5dbf28:8", "const:4:8"]]
- 005dbf28 ["CALL", null, ["callee:00c57f60:8"]]
+ 005dbf68 ["INT_ADD", "register:40f0:8", ["const:5dbf68:8", "const:4:8"]]
+ 005dbf68 ["CALL", null, ["callee:00c57f60:8"]]
- 005dbf38 ["COPY", "tmp:0:8", ["const:778:8"]]
- 005dbf38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dbf78 ["COPY", "tmp:0:8", ["const:848:8"]]
+ 005dbf78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dbf78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dbf78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b30eb20cc69a1cde92fd35b17578ab6f"></a>

### [`005dbf54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbf54.md) → [`005dbf94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbf94.md) FUN_005dbf94

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
      "definition_site": "005dbf98",
      "incomplete_value": false,
      "site": "005dbf9c",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dbf58",
      "incomplete_value": false,
      "site": "005dbf5c",
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
            "const:778:8"
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
      "005dbf9c",
      "DATA",
      [
        "storage",
        "00c71778",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dbf9c",
      "DATA",
      [
        "storage",
        "00c71848",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dbf58 ["COPY", "tmp:0:8", ["const:778:8"]]
- 005dbf58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dbf58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dbf98 ["COPY", "tmp:0:8", ["const:848:8"]]
+ 005dbf98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dbf98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dbf98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-39d1152376ab588a2163f091625180e3"></a>

### [`005dbf7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbf7c.md) → [`005dbfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbfbc.md) FUN_005dbfbc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00687ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687ea4.md) [`00689954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689954.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00687ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687ee4.md) [`00689994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/00689994.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

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
      "site": "005dc070",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc030",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "005dc058",
      "DATA",
      [
        "storage",
        "0042ec00",
        null,
        "byte[35]"
      ]
    ],
    [
      "005dc070",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005dc058",
      "DATA",
      [
        "storage",
        "0042ec00",
        null,
        "byte[59]"
      ]
    ],
    [
      "005dc070",
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
- 005dc030 ["INT_ADD", "register:40f0:8", ["const:5dc030:8", "const:4:8"]]
- 005dc030 ["CALL", null, ["ram:47acf4:8"]]
+ 005dc070 ["INT_ADD", "register:40f0:8", ["const:5dc070:8", "const:4:8"]]
+ 005dc070 ["CALL", null, ["ram:47ad34:8"]]
- 005dbfac ["INT_ADD", "register:40f0:8", ["const:5dbfac:8", "const:4:8"]]
- 005dbfac ["CALL", null, ["callee:00851550:8"]]
+ 005dbfec ["INT_ADD", "register:40f0:8", ["const:5dbfec:8", "const:4:8"]]
+ 005dbfec ["CALL", null, ["callee:00851550:8"]]
- 005dbfbc ["INT_ADD", "register:40f0:8", ["const:5dbfbc:8", "const:4:8"]]
- 005dbfbc ["CALL", null, ["callee:00b3bfbc:8"]]
+ 005dbffc ["INT_ADD", "register:40f0:8", ["const:5dbffc:8", "const:4:8"]]
+ 005dbffc ["CALL", null, ["callee:00b3bfbc:8"]]
~~~


<a id="compare-4273e0c00c9f2e18a516e79816e4154c"></a>

### [`005dc090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc090.md) → [`005dc0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc0d0.md) FUN_005dc0d0

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
      "definition_site": "005dc0f4",
      "incomplete_value": false,
      "site": "005dc0f4",
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
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc0b4",
      "incomplete_value": false,
      "site": "005dc0b4",
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
            "const:808:8"
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
      "005dc0f4",
      "DATA",
      [
        "storage",
        "00c71808",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc0f4",
      "DATA",
      [
        "storage",
        "00c718d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc0a4 ["INT_ADD", "register:40f0:8", ["const:5dc0a4:8", "const:4:8"]]
- 005dc0a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 005dc0e4 ["INT_ADD", "register:40f0:8", ["const:5dc0e4:8", "const:4:8"]]
+ 005dc0e4 ["CALL", null, ["callee:00c57f60:8"]]
- 005dc0b0 ["COPY", "tmp:0:8", ["const:808:8"]]
- 005dc0b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc0b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc0b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc0f0 ["COPY", "tmp:0:8", ["const:8d8:8"]]
+ 005dc0f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc0f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc0f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-32d539ee345d3e9516f3712ecf9bb588"></a>

### [`005dc0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc0e0.md) → [`005dc120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc120.md) FUN_005dc120

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
      "site": "005dc140",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc100",
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
      "site": "005dc14c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc10c",
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
      "005dc140",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005dc14c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005dc140",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005dc14c",
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
- 005dc100 ["INT_ADD", "register:40f0:8", ["const:5dc100:8", "const:4:8"]]
- 005dc100 ["CALL", null, ["ram:47acf4:8"]]
+ 005dc140 ["INT_ADD", "register:40f0:8", ["const:5dc140:8", "const:4:8"]]
+ 005dc140 ["CALL", null, ["ram:47ad34:8"]]
- 005dc10c ["INT_ADD", "register:40f0:8", ["const:5dc10c:8", "const:4:8"]]
- 005dc10c ["CALL", null, ["ram:47acf4:8"]]
+ 005dc14c ["INT_ADD", "register:40f0:8", ["const:5dc14c:8", "const:4:8"]]
+ 005dc14c ["CALL", null, ["ram:47ad34:8"]]
- 005dc140 ["INT_ADD", "register:40f0:8", ["const:5dc140:8", "const:4:8"]]
- 005dc140 ["CALL", null, ["callee:00851550:8"]]
+ 005dc180 ["INT_ADD", "register:40f0:8", ["const:5dc180:8", "const:4:8"]]
+ 005dc180 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f6f52da39dc1339c6a3fce71e6a24d68"></a>

### [`005dc190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc190.md) → [`005dc1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc1d0.md) FUN_005dc1d0

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
      "definition_site": "005dc1f4",
      "incomplete_value": false,
      "site": "005dc1f4",
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
            "const:958:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc1b4",
      "incomplete_value": false,
      "site": "005dc1b4",
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
            "const:888:8"
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
      "005dc1f4",
      "DATA",
      [
        "storage",
        "00c71888",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc1f4",
      "DATA",
      [
        "storage",
        "00c71958",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc1a4 ["INT_ADD", "register:40f0:8", ["const:5dc1a4:8", "const:4:8"]]
- 005dc1a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 005dc1e4 ["INT_ADD", "register:40f0:8", ["const:5dc1e4:8", "const:4:8"]]
+ 005dc1e4 ["CALL", null, ["callee:00c57f60:8"]]
- 005dc1b0 ["COPY", "tmp:0:8", ["const:888:8"]]
- 005dc1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc1f0 ["COPY", "tmp:0:8", ["const:958:8"]]
+ 005dc1f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc1f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc1f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a1baa44cf86ffbf5113f9f5ecd4b5b38"></a>

### [`005dc1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc1e0.md) → [`005dc220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc220.md) FUN_005dc220

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005cc5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc5a0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005cc5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc5e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc2cc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc28c",
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
      "site": "005dc2d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc298",
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
      "005dc2cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005dc2d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005dc2cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005dc2d8",
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
- 005dc258 ["INT_ADD", "register:40f0:8", ["const:5dc258:8", "const:4:8"]]
- 005dc258 ["CALL", null, ["callee:00a46944:8"]]
+ 005dc298 ["INT_ADD", "register:40f0:8", ["const:5dc298:8", "const:4:8"]]
+ 005dc298 ["CALL", null, ["callee:00a46944:8"]]
- 005dc28c ["INT_ADD", "register:40f0:8", ["const:5dc28c:8", "const:4:8"]]
- 005dc28c ["CALL", null, ["ram:47acf4:8"]]
+ 005dc2cc ["INT_ADD", "register:40f0:8", ["const:5dc2cc:8", "const:4:8"]]
+ 005dc2cc ["CALL", null, ["ram:47ad34:8"]]
- 005dc298 ["INT_ADD", "register:40f0:8", ["const:5dc298:8", "const:4:8"]]
- 005dc298 ["CALL", null, ["ram:47acf4:8"]]
+ 005dc2d8 ["INT_ADD", "register:40f0:8", ["const:5dc2d8:8", "const:4:8"]]
+ 005dc2d8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-29ddefddde2cf729abe4194db5716349"></a>

### [`005dc300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc300.md) → [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) FUN_005dc340

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`005ccb08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005ccb08.md) [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`008b0a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0a6c.md) [`008d4d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d4/008d4d5c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 8件 [`005ccb48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccb48.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`008b0ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0ac4.md) [`008d4db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d4/008d4db0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dc34c",
      "incomplete_value": false,
      "site": "005dc350",
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
      "definition_site": "005dc30c",
      "incomplete_value": false,
      "site": "005dc310",
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
      "005dc34c",
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
      "005dc34c",
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
- 005dc310 ["INT_ADD", "register:40f0:8", ["const:5dc310:8", "const:4:8"]]
- 005dc310 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005dc350 ["INT_ADD", "register:40f0:8", ["const:5dc350:8", "const:4:8"]]
+ 005dc350 ["CALL", null, ["callee:0043b7b8:8"]]
- 005dc30c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005dc30c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005dc30c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005dc30c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005dc34c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005dc34c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005dc34c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005dc34c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0cf951a0d621e679a0c1310f5cef7c62"></a>

### [`005dc31c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc31c.md) → [`005dc35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc35c.md) FUN_005dc35c

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
      "definition_site": "005dc37c",
      "incomplete_value": false,
      "site": "005dc380",
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
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc33c",
      "incomplete_value": false,
      "site": "005dc340",
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
            "const:908:8"
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
      "005dc380",
      "DATA",
      [
        "storage",
        "00c71908",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc380",
      "DATA",
      [
        "storage",
        "00c719d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc330 ["INT_ADD", "register:40f0:8", ["const:5dc330:8", "const:4:8"]]
- 005dc330 ["CALL", null, ["callee:00c57f60:8"]]
+ 005dc370 ["INT_ADD", "register:40f0:8", ["const:5dc370:8", "const:4:8"]]
+ 005dc370 ["CALL", null, ["callee:00c57f60:8"]]
- 005dc33c ["COPY", "tmp:0:8", ["const:908:8"]]
- 005dc33c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc33c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc33c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc37c ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 005dc37c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc37c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc37c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ffdf57a9a94c3a39e4af5726de486ea0"></a>

### [`005dc354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc354.md) → [`005dc394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc394.md) FUN_005dc394

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
      "definition_site": "005dc398",
      "incomplete_value": false,
      "site": "005dc39c",
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
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc358",
      "incomplete_value": false,
      "site": "005dc35c",
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
            "const:908:8"
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
      "005dc39c",
      "DATA",
      [
        "storage",
        "00c71908",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dc39c",
      "DATA",
      [
        "storage",
        "00c719d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc358 ["COPY", "tmp:0:8", ["const:908:8"]]
- 005dc358 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dc358 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dc358 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dc398 ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 005dc398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dc398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4b5378b102c1c71a3e642f47f4dd30b6"></a>

### [`005dc374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc374.md) → [`005dc3b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc3b4.md) FUN_005dc3b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.80% / 新版 98.80%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc3e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dc3a4",
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
      "005dc3e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005dc3e4",
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
- 005dc3a4 ["INT_ADD", "register:40f0:8", ["const:5dc3a4:8", "const:4:8"]]
- 005dc3a4 ["CALL", null, ["ram:47acf4:8"]]
+ 005dc3e4 ["INT_ADD", "register:40f0:8", ["const:5dc3e4:8", "const:4:8"]]
+ 005dc3e4 ["CALL", null, ["ram:47ad34:8"]]
- 005dc3b0 ["INT_ADD", "register:40f0:8", ["const:5dc3b0:8", "const:4:8"]]
- 005dc3b0 ["CALL", null, ["callee:0047ce14:8"]]
+ 005dc3f0 ["INT_ADD", "register:40f0:8", ["const:5dc3f0:8", "const:4:8"]]
+ 005dc3f0 ["CALL", null, ["callee:0047ce14:8"]]
- 005dc440 ["INT_ADD", "register:40f0:8", ["const:5dc440:8", "const:4:8"]]
- 005dc440 ["CALL", null, ["callee:00c57f60:8"]]
+ 005dc480 ["INT_ADD", "register:40f0:8", ["const:5dc480:8", "const:4:8"]]
+ 005dc480 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-3e3460f3a353d2097b285d72e5d174b6"></a>

### [`005dc4e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc4e8.md) → [`005dc528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc528.md) _INIT_65

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005dc588",
      "incomplete_value": true,
      "site": "005dc5a4",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "005dc548",
      "incomplete_value": true,
      "site": "005dc564",
      "value": [
        "LOAD",
        "16",
        [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dc750",
      "incomplete_value": false,
      "site": "005dc75c",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc710",
      "incomplete_value": false,
      "site": "005dc71c",
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
            "const:8b8:8"
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
      "definition_site": "005dc758",
      "incomplete_value": false,
      "site": "005dc75c",
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
      "definition_site": "005dc718",
      "incomplete_value": false,
      "site": "005dc71c",
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
      "005dc564",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005dc588",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005dc5a8",
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
      "005dc564",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005dc588",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005dc5a8",
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
- 005dc71c ["INT_ADD", "register:40f0:8", ["const:5dc71c:8", "const:4:8"]]
- 005dc71c ["CALL", null, ["callee:00c57f00:8"]]
+ 005dc75c ["INT_ADD", "register:40f0:8", ["const:5dc75c:8", "const:4:8"]]
+ 005dc75c ["CALL", null, ["callee:00c57f00:8"]]
- 005dc514 ["COPY", "tmp:0:8", ["const:8b8:8"]]
- 005dc514 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005dc514 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005dc514 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005dc554 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 005dc554 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005dc554 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005dc554 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 005dc51c ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-2e4a43620c2aee829c58ee5accac6adc"></a>

### [`005dc888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc888.md) → [`005dc8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc8c8.md) FUN_005dc8c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005e94f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e94f4.md) · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`005dcaa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dcaa8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.36% / 新版 98.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005dc8e8",
      "incomplete_value": true,
      "site": "005dc8f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dc8a8",
      "incomplete_value": true,
      "site": "005dc8b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e30:8"
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
      "005dc8e8",
      "READ",
      [
        "storage",
        "002c2e30",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005dc8e8",
      "READ",
      [
        "storage",
        "002c2e70",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005dc8a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e30:8"]]
- 005dc8a8 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 005dc8a8 ["COPY", "register:5010:8", ["const:0:8"]]
- 005dc8a8 ["COPY", "register:5018:8", ["const:0:8"]]
+ 005dc8e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e70:8"]]
+ 005dc8e8 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 005dc8e8 ["COPY", "register:5010:8", ["const:0:8"]]
+ 005dc8e8 ["COPY", "register:5018:8", ["const:0:8"]]
- 005dc8e0 ["INT_ADD", "register:40f0:8", ["const:5dc8e0:8", "const:4:8"]]
- 005dc8e0 ["CALL", null, ["callee:004410cc:8"]]
+ 005dc920 ["INT_ADD", "register:40f0:8", ["const:5dc920:8", "const:4:8"]]
+ 005dc920 ["CALL", null, ["callee:004410cc:8"]]
- 005dc8fc ["COPY", "register:0:8", ["register:4040:8"]]
- 005dc8fc ["INT_ADD", "register:40f0:8", ["const:5dc8fc:8", "const:4:8"]]
- 005dc8fc ["CALLIND", null, ["register:0:8"]]
+ 005dc93c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005dc93c ["INT_ADD", "register:40f0:8", ["const:5dc93c:8", "const:4:8"]]
+ 005dc93c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2f6d449ce6b00189d3bd5574596c17d6"></a>

### [`005dcaa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dcaa8.md) → [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) FUN_005dcae8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005dc888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc888.md) [`005dde28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005dde28.md) [`005de4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005de4b0.md) [`005de680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005de680.md) [`005dee80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005dee80.md) · 呼出先 1件 [`00441e94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441e94.md)
- 新版 呼出元 5件 [`005dc8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc8c8.md) [`005dde68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde68.md) [`005de4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de4f0.md) [`005de6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de6c0.md) [`005deec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005deec0.md) · 呼出先 1件 [`00441ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441ed4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `call_argument_candidate` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dcc6c",
      "incomplete_value": false,
      "site": "005dcc74",
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
            "const:d79:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dcc2c",
      "incomplete_value": false,
      "site": "005dcc34",
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
            "const:d48:8"
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
      "definition_site": "005dcc88",
      "incomplete_value": false,
      "site": "005dcc90",
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
            "const:915:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dcc48",
      "incomplete_value": false,
      "site": "005dcc50",
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
            "const:971:8"
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
      "definition_site": "005dcca4",
      "incomplete_value": false,
      "site": "005dccac",
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
            "const:7eb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dcc64",
      "incomplete_value": false,
      "site": "005dcc6c",
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
            "const:847:8"
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
      "005dcc6c",
      "PARAM",
      [
        "storage",
        "002b3d48",
        null,
        "string"
      ]
    ],
    [
      "005dcc88",
      "PARAM",
      [
        "storage",
        "002ad971",
        null,
        "string"
      ]
    ],
    [
      "005dcca4",
      "PARAM",
      [
        "storage",
        "002a6847",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005dcc6c",
      "PARAM",
      [
        "storage",
        "002b3d79",
        null,
        "string"
      ]
    ],
    [
      "005dcc88",
      "PARAM",
      [
        "storage",
        "002ad915",
        null,
        "string"
      ]
    ],
    [
      "005dcca4",
      "PARAM",
      [
        "storage",
        "002a67eb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dcc2c ["COPY", "tmp:0:8", ["const:d48:8"]]
- 005dcc2c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 005dcc2c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 005dcc2c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 005dcc6c ["COPY", "tmp:0:8", ["const:d79:8"]]
+ 005dcc6c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 005dcc6c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 005dcc6c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 005dcc34 ["INT_ADD", "register:40f0:8", ["const:5dcc34:8", "const:4:8"]]
- 005dcc34 ["CALL", null, ["callee:00441ed4:8"]]
+ 005dcc74 ["INT_ADD", "register:40f0:8", ["const:5dcc74:8", "const:4:8"]]
+ 005dcc74 ["CALL", null, ["callee:00441ed4:8"]]
- 005dcc48 ["COPY", "tmp:0:8", ["const:971:8"]]
- 005dcc48 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 005dcc48 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 005dcc48 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 005dcc88 ["COPY", "tmp:0:8", ["const:915:8"]]
+ 005dcc88 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 005dcc88 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 005dcc88 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-bfcb7a94a4f17ae997759ccebbbe0ff9"></a>

### [`005dd750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005dd750.md) → [`005dd790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dd790.md) FUN_005dd790

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005dcd8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dcd8c.md) [`005e90d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e90d4.md) · 呼出先 9件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md) [`0046dad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dad4.md)
- 新版 呼出元 2件 [`005dcdcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcdcc.md) [`005e9114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9114.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005dda64",
      "incomplete_value": true,
      "site": "005dda68",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "definition_site": "005dda24",
      "incomplete_value": true,
      "site": "005dda28",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dd934",
      "incomplete_value": false,
      "site": "005dd938",
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
      "definition_site": "005dd8f4",
      "incomplete_value": false,
      "site": "005dd8f8",
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
      "005dd934",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ],
    [
      "005dda54",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ],
    [
      "005dda58",
      "READ",
      [
        "storage",
        "00c9b460",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005dd934",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "005dda54",
      "READ",
      [
        "storage",
        "00c9b528",
        null,
        "pointer"
      ]
    ],
    [
      "005dda58",
      "READ",
      [
        "storage",
        "00c9b530",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dd8f8 ["INT_ADD", "register:40f0:8", ["const:5dd8f8:8", "const:4:8"]]
- 005dd8f8 ["CALL", null, ["callee:00442970:8"]]
+ 005dd938 ["INT_ADD", "register:40f0:8", ["const:5dd938:8", "const:4:8"]]
+ 005dd938 ["CALL", null, ["callee:00442970:8"]]
- 005dd7ac ["INT_ADD", "register:40f0:8", ["const:5dd7ac:8", "const:4:8"]]
- 005dd7ac ["CALL", null, ["callee:0046d7f0:8"]]
+ 005dd7ec ["INT_ADD", "register:40f0:8", ["const:5dd7ec:8", "const:4:8"]]
+ 005dd7ec ["CALL", null, ["callee:0046d7f0:8"]]
- 005dd828 ["INT_ADD", "register:40f0:8", ["const:5dd828:8", "const:4:8"]]
- 005dd828 ["CALL", null, ["callee:00c57f60:8"]]
+ 005dd868 ["INT_ADD", "register:40f0:8", ["const:5dd868:8", "const:4:8"]]
+ 005dd868 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d4201e686fbd630775a4b72b1e387447"></a>

### [`005dde28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005dde28.md) → [`005dde68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde68.md) FUN_005dde68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005e94f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e94f4.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005dcaa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dcaa8.md) [`005de4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005de4b0.md)
- 新版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`005de4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de4f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.24% / 新版 99.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005de3b8",
      "incomplete_value": true,
      "site": "005de3b8",
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
                "const:475:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005de378",
      "incomplete_value": true,
      "site": "005de378",
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
                "const:4c2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 68,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005de3a8",
      "READ",
      [
        "storage",
        "002a44c2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005de3a8",
      "READ",
      [
        "storage",
        "002a4475",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ddec8 ["INT_ADD", "register:40f0:8", ["const:5ddec8:8", "const:4:8"]]
- 005ddec8 ["CALL", null, ["callee:004410cc:8"]]
+ 005ddf08 ["INT_ADD", "register:40f0:8", ["const:5ddf08:8", "const:4:8"]]
+ 005ddf08 ["CALL", null, ["callee:004410cc:8"]]
- 005ddee8 ["INT_ADD", "register:40f0:8", ["const:5ddee8:8", "const:4:8"]]
- 005ddee8 ["CALL", null, ["callee:00c57f80:8"]]
+ 005ddf28 ["INT_ADD", "register:40f0:8", ["const:5ddf28:8", "const:4:8"]]
+ 005ddf28 ["CALL", null, ["callee:00c57f80:8"]]
- 005ddf18 ["INT_ADD", "register:40f0:8", ["const:5ddf18:8", "const:4:8"]]
- 005ddf18 ["CALL", null, ["callee:004410cc:8"]]
+ 005ddf58 ["INT_ADD", "register:40f0:8", ["const:5ddf58:8", "const:4:8"]]
+ 005ddf58 ["CALL", null, ["callee:004410cc:8"]]
~~~


<a id="compare-8ba6b8399650d744bf4800c8a1cf5a5b"></a>

### [`005de680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005de680.md) → [`005de6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de6c0.md) FUN_005de6c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005e94f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e94f4.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0046c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c460.md) [`005dcaa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dcaa8.md) [`005dee80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005dee80.md)
- 新版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0046c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4a0.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`005deec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005deec0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 96.91% / 新版 96.91%

優先判定に残った影響 `branch_value` 2件, `store_condition` 14件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ded4c",
      "incomplete_value": true,
      "site": "005ded4c",
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
                "const:475:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ded0c",
      "incomplete_value": true,
      "site": "005ded0c",
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
                "const:4c2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 74,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005de7a8",
      "incomplete_value": true,
      "site": "005de7ac",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "definition_site": "005de768",
      "incomplete_value": true,
      "site": "005de76c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005de8ec",
      "incomplete_value": true,
      "site": "005de8f0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "definition_site": "005de8ac",
      "incomplete_value": true,
      "site": "005de8b0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005de798",
      "READ",
      [
        "storage",
        "00c9b460",
        null,
        "pointer"
      ]
    ],
    [
      "005de79c",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ],
    [
      "005de7a0",
      "READ",
      [
        "storage",
        "00c97078",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005de798",
      "READ",
      [
        "storage",
        "00c9b530",
        null,
        "pointer"
      ]
    ],
    [
      "005de79c",
      "READ",
      [
        "storage",
        "00c9b528",
        null,
        "pointer"
      ]
    ],
    [
      "005de7a0",
      "READ",
      [
        "storage",
        "00c97148",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005de744 ["INT_ADD", "register:40f0:8", ["const:5de744:8", "const:4:8"]]
- 005de744 ["CALL", null, ["callee:00c57f80:8"]]
+ 005de784 ["INT_ADD", "register:40f0:8", ["const:5de784:8", "const:4:8"]]
+ 005de784 ["CALL", null, ["callee:00c57f80:8"]]
- 005de7ac ["COPY", "register:0:8", ["register:4040:8"]]
- 005de7ac ["INT_ADD", "register:40f0:8", ["const:5de7ac:8", "const:4:8"]]
- 005de7ac ["CALLIND", null, ["register:0:8"]]
+ 005de7ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 005de7ec ["INT_ADD", "register:40f0:8", ["const:5de7ec:8", "const:4:8"]]
+ 005de7ec ["CALLIND", null, ["register:0:8"]]
- 005de880 ["INT_ADD", "register:40f0:8", ["const:5de880:8", "const:4:8"]]
- 005de880 ["CALL", null, ["callee:00c57f80:8"]]
+ 005de8c0 ["INT_ADD", "register:40f0:8", ["const:5de8c0:8", "const:4:8"]]
+ 005de8c0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-86b793674786ff04663340cf63874e60"></a>

### [`005dee80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005dee80.md) → [`005deec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005deec0.md) FUN_005deec0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005de680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005de/005de680.md) · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`005dcaa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dcaa8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005de6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de6c0.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005dcae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dcae8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 95.42% / 新版 95.42%

優先判定に残った影響 `branch_value` 1件, `store_condition` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005def5c",
      "incomplete_value": true,
      "site": "005def60",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "definition_site": "005def1c",
      "incomplete_value": true,
      "site": "005def20",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005def20"
      ],
      [
        "FALL_THROUGH",
        "005def60"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005def5c",
      "incomplete_value": true,
      "site": "005def70",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "definition_site": "005def1c",
      "incomplete_value": true,
      "site": "005def30",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005def20"
      ],
      [
        "FALL_THROUGH",
        "005def60"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005def5c",
      "incomplete_value": true,
      "site": "005def78",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "definition_site": "005def1c",
      "incomplete_value": true,
      "site": "005def38",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
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
      "005def4c",
      "READ",
      [
        "storage",
        "00c9b460",
        null,
        "pointer"
      ]
    ],
    [
      "005def50",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ],
    [
      "005def54",
      "READ",
      [
        "storage",
        "00c97078",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005def4c",
      "READ",
      [
        "storage",
        "00c9b530",
        null,
        "pointer"
      ]
    ],
    [
      "005def50",
      "READ",
      [
        "storage",
        "00c9b528",
        null,
        "pointer"
      ]
    ],
    [
      "005def54",
      "READ",
      [
        "storage",
        "00c97148",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005deefc ["INT_ADD", "register:40f0:8", ["const:5deefc:8", "const:4:8"]]
- 005deefc ["CALL", null, ["callee:00c57f80:8"]]
+ 005def3c ["INT_ADD", "register:40f0:8", ["const:5def3c:8", "const:4:8"]]
+ 005def3c ["CALL", null, ["callee:00c57f80:8"]]
- 005def48 ["INT_ADD", "register:40f0:8", ["const:5def48:8", "const:4:8"]]
- 005def48 ["CALL", null, ["callee:004410cc:8"]]
+ 005def88 ["INT_ADD", "register:40f0:8", ["const:5def88:8", "const:4:8"]]
+ 005def88 ["CALL", null, ["callee:004410cc:8"]]
- 005def60 ["COPY", "register:0:8", ["register:4040:8"]]
- 005def60 ["INT_ADD", "register:40f0:8", ["const:5def60:8", "const:4:8"]]
- 005def60 ["CALLIND", null, ["register:0:8"]]
+ 005defa0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005defa0 ["INT_ADD", "register:40f0:8", ["const:5defa0:8", "const:4:8"]]
+ 005defa0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b62d8621682f12ff3ce5c15e1ff0630c"></a>

### [`005df0d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005df/005df0d4.md) → [`005df114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df114.md) FUN_005df114

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005dd750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005dd750.md) [`005eda7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ed/005eda7c.md) [`005ee5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ee/005ee5d0.md) [`005ef5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ef/005ef5ac.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0046ee04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee04.md) [`005df5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005df/005df5cc.md)
- 新版 呼出元 4件 [`005dd790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dd790.md) [`005edabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005edabc.md) [`005ee610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ee/005ee610.md) [`005ef5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005ef5ec.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md) [`005df60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df60c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.23% / 新版 96.23%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005df17c",
      "incomplete_value": true,
      "site": "005df17c",
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
      "definition_site": "005df13c",
      "incomplete_value": true,
      "site": "005df13c",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "005df218",
      "incomplete_value": true,
      "site": "005df218",
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
      "definition_site": "005df1d8",
      "incomplete_value": true,
      "site": "005df1d8",
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
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005df238",
      "incomplete_value": false,
      "site": "005df240",
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
      "definition_site": "005df1f8",
      "incomplete_value": false,
      "site": "005df200",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005df15c",
      "DATA",
      [
        "storage",
        "002d85f2",
        "switchD_005df124::switchdataD_002d85f2",
        "ushort"
      ]
    ],
    [
      "005df178",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005df18c",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005df15c",
      "DATA",
      [
        "storage",
        "002d8632",
        "switchD_005df164::switchdataD_002d8632",
        "ushort"
      ]
    ],
    [
      "005df178",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005df18c",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005df198 ["INT_ADD", "register:40f0:8", ["const:5df198:8", "const:4:8"]]
- 005df198 ["CALL", null, ["callee:00851550:8"]]
+ 005df1d8 ["INT_ADD", "register:40f0:8", ["const:5df1d8:8", "const:4:8"]]
+ 005df1d8 ["CALL", null, ["callee:00851550:8"]]
- 005df200 ["INT_ADD", "register:40f0:8", ["const:5df200:8", "const:4:8"]]
- 005df200 ["CALL", null, ["callee:00c586e0:8"]]
+ 005df240 ["INT_ADD", "register:40f0:8", ["const:5df240:8", "const:4:8"]]
+ 005df240 ["CALL", null, ["callee:00c586e0:8"]]
- 005df218 ["INT_ADD", "register:40f0:8", ["const:5df218:8", "const:4:8"]]
- 005df218 ["CALL", null, ["callee:0046ca04:8"]]
+ 005df258 ["INT_ADD", "register:40f0:8", ["const:5df258:8", "const:4:8"]]
+ 005df258 ["CALL", null, ["callee:0046ca04:8"]]
~~~


<a id="compare-fdab06e139128a78661bea30bfb9bf32"></a>

### [`005df7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005df/005df7cc.md) → [`005df80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df80c.md) FUN_005df80c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005ddaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005ddaa0.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0046ee04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee04.md) [`005df5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005df/005df5cc.md)
- 新版 呼出元 1件 [`005ddae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005ddae0.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md) [`005df60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df60c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.24% / 新版 96.24%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005df878",
      "incomplete_value": true,
      "site": "005df878",
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
      "definition_site": "005df838",
      "incomplete_value": true,
      "site": "005df838",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "005df910",
      "incomplete_value": true,
      "site": "005df910",
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
      "definition_site": "005df8d0",
      "incomplete_value": true,
      "site": "005df8d0",
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
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005df898",
      "incomplete_value": false,
      "site": "005df8a0",
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
      "definition_site": "005df858",
      "incomplete_value": false,
      "site": "005df860",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005df850",
      "DATA",
      [
        "storage",
        "002d8614",
        "switchD_005df818::switchdataD_002d8614",
        "ushort"
      ]
    ],
    [
      "005df874",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005df888",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005df850",
      "DATA",
      [
        "storage",
        "002d8654",
        "switchD_005df858::switchdataD_002d8654",
        "ushort"
      ]
    ],
    [
      "005df874",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005df888",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005df860 ["INT_ADD", "register:40f0:8", ["const:5df860:8", "const:4:8"]]
- 005df860 ["CALL", null, ["callee:00c586e0:8"]]
+ 005df8a0 ["INT_ADD", "register:40f0:8", ["const:5df8a0:8", "const:4:8"]]
+ 005df8a0 ["CALL", null, ["callee:00c586e0:8"]]
- 005df878 ["INT_ADD", "register:40f0:8", ["const:5df878:8", "const:4:8"]]
- 005df878 ["CALL", null, ["callee:00851550:8"]]
+ 005df8b8 ["INT_ADD", "register:40f0:8", ["const:5df8b8:8", "const:4:8"]]
+ 005df8b8 ["CALL", null, ["callee:00851550:8"]]
- 005df8f8 ["INT_ADD", "register:40f0:8", ["const:5df8f8:8", "const:4:8"]]
- 005df8f8 ["CALL", null, ["callee:00c586e0:8"]]
+ 005df938 ["INT_ADD", "register:40f0:8", ["const:5df938:8", "const:4:8"]]
+ 005df938 ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-ca0d5c328d3e7d5b888166fbed433e83"></a>

### [`005dfcc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005df/005dfcc8.md) → [`005dfd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005dfd08.md) FUN_005dfd08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005ddaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005ddaa0.md) [`00789de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00789/00789de0.md) [`00a67af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a67/00a67af0.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 3件 [`005ddae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005ddae0.md) [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) [`00a67b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67b60.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005dfd14",
      "incomplete_value": false,
      "site": "005dfd18",
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
      "definition_site": "005dfcd4",
      "incomplete_value": false,
      "site": "005dfcd8",
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
      "005dfd14",
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
      "005dfd14",
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
- 005dfcd8 ["INT_ADD", "register:40f0:8", ["const:5dfcd8:8", "const:4:8"]]
- 005dfcd8 ["CALL", null, ["callee:00442970:8"]]
+ 005dfd18 ["INT_ADD", "register:40f0:8", ["const:5dfd18:8", "const:4:8"]]
+ 005dfd18 ["CALL", null, ["callee:00442970:8"]]
- 005dfcd4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005dfcd4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005dfcd4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005dfcd4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005dfd14 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005dfd14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005dfd14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005dfd14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-69c700ba06819f1a8136f3c58acfa972"></a>

### [`005dfcdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005df/005dfcdc.md) → [`005dfd1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005dfd1c.md) _INIT_66

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005dfd58",
      "incomplete_value": true,
      "site": "005dfd74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005dfd18",
      "incomplete_value": true,
      "site": "005dfd34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005dfd9c",
      "incomplete_value": true,
      "site": "005dfdb8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005dfd5c",
      "incomplete_value": true,
      "site": "005dfd78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005dfdbc",
      "incomplete_value": true,
      "site": "005dfdd4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005dfd7c",
      "incomplete_value": true,
      "site": "005dfd94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005dfd58",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005dfd7c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005dfd9c",
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
      "005dfd58",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005dfd7c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005dfd9c",
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
- 005dfd54 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005dfd54 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005dfd54 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005dfd54 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005dfd94 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005dfd94 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005dfd94 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005dfd94 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005dfd74 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005dfd74 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005dfd74 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005dfd74 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005dfdb4 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005dfdb4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005dfdb4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005dfdb4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005dff10 ["INT_ADD", "register:40f0:8", ["const:5dff10:8", "const:4:8"]]
- 005dff10 ["CALL", null, ["callee:00c57f00:8"]]
+ 005dff50 ["INT_ADD", "register:40f0:8", ["const:5dff50:8", "const:4:8"]]
+ 005dff50 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-945a409ba0e69249b773473892995f34"></a>

### [`005e0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0320.md) → [`005e0360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0360.md) FUN_005e0360

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 4件 [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005e09a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e09a0.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 4件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e09e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e09e0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_target` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e038c",
      "incomplete_value": true,
      "site": "005e0390",
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
                "const:300:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e034c",
      "incomplete_value": true,
      "site": "005e0350",
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
                "const:2c0:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005e043c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005e03fc",
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
      "site": "005e0448",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005e0408",
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
      "005e038c",
      "READ",
      [
        "storage",
        "002c42c0",
        null,
        "undefined8"
      ]
    ],
    [
      "005e0434",
      "READ",
      [
        "storage",
        "002c4020",
        null,
        "undefined8"
      ]
    ],
    [
      "005e043c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005e038c",
      "READ",
      [
        "storage",
        "002c4300",
        null,
        "undefined8"
      ]
    ],
    [
      "005e0434",
      "READ",
      [
        "storage",
        "002c4060",
        null,
        "undefined8"
      ]
    ],
    [
      "005e043c",
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
- 005e03fc ["INT_ADD", "register:40f0:8", ["const:5e03fc:8", "const:4:8"]]
- 005e03fc ["CALL", null, ["ram:47acf4:8"]]
+ 005e043c ["INT_ADD", "register:40f0:8", ["const:5e043c:8", "const:4:8"]]
+ 005e043c ["CALL", null, ["ram:47ad34:8"]]
- 005e0408 ["INT_ADD", "register:40f0:8", ["const:5e0408:8", "const:4:8"]]
- 005e0408 ["CALL", null, ["ram:47acf4:8"]]
+ 005e0448 ["INT_ADD", "register:40f0:8", ["const:5e0448:8", "const:4:8"]]
+ 005e0448 ["CALL", null, ["ram:47ad34:8"]]
- 005e0338 ["INT_ADD", "register:40f0:8", ["const:5e0338:8", "const:4:8"]]
- 005e0338 ["CALL", null, ["callee:005e09e0:8"]]
+ 005e0378 ["INT_ADD", "register:40f0:8", ["const:5e0378:8", "const:4:8"]]
+ 005e0378 ["CALL", null, ["callee:005e09e0:8"]]
~~~


<a id="compare-246428f1b50e514fb514a8f1e4b90c5d"></a>

### [`005e0520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0520.md) → [`005e0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0560.md) _INIT_67

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e059c",
      "incomplete_value": true,
      "site": "005e05b8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e055c",
      "incomplete_value": true,
      "site": "005e0578",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e05e0",
      "incomplete_value": true,
      "site": "005e05fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e05a0",
      "incomplete_value": true,
      "site": "005e05bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e061c",
      "incomplete_value": true,
      "site": "005e0638",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e05dc",
      "incomplete_value": true,
      "site": "005e05f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005e059c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005e05c0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005e05e0",
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
      "005e059c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005e05c0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005e05e0",
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
- 005e05b8 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005e05b8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e05b8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e05b8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e05f8 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005e05f8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e05f8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e05f8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e0754 ["INT_ADD", "register:40f0:8", ["const:5e0754:8", "const:4:8"]]
- 005e0754 ["CALL", null, ["callee:00c57f00:8"]]
+ 005e0794 ["INT_ADD", "register:40f0:8", ["const:5e0794:8", "const:4:8"]]
+ 005e0794 ["CALL", null, ["callee:00c57f00:8"]]
- 005e054c ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 005e054c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005e054c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005e054c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005e058c ["COPY", "tmp:0:8", ["const:9e8:8"]]
+ 005e058c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005e058c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005e058c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-1cd9564574277e356ca88c41e1f2f62b"></a>

### [`005e1bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1bb8.md) → [`005e1bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1bf8.md) FUN_005e1bf8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ccb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009ccb7c.md) · 呼出先 29件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f6e4.md) [`0046f744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f744.md)
- 新版 呼出元 1件 [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md) [`0046f784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f784.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e1e0c",
      "incomplete_value": true,
      "site": "005e1e1c",
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
                "const:2a2000:8"
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
    "old": {
      "definition_site": "005e1dcc",
      "incomplete_value": true,
      "site": "005e1ddc",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:1f2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e2018",
      "incomplete_value": true,
      "site": "005e2024",
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
                "const:301:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e1fd8",
      "incomplete_value": true,
      "site": "005e1fe4",
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
                "const:355:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 41,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e2534",
      "incomplete_value": true,
      "site": "005e2548",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:368:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e24f4",
      "incomplete_value": true,
      "site": "005e2508",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:328:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 77,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005e1d88",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "005e1e0c",
      "READ",
      [
        "storage",
        "002a21f2",
        null,
        "string"
      ]
    ],
    [
      "005e1e70",
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
      "005e1d88",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "005e1e0c",
      "READ",
      [
        "storage",
        "002a21a5",
        null,
        "string"
      ]
    ],
    [
      "005e1e70",
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
- 005e1e1c ["INT_ADD", "register:40f0:8", ["const:5e1e1c:8", "const:4:8"]]
- 005e1e1c ["CALL", null, ["callee:0048ce94:8"]]
+ 005e1e5c ["INT_ADD", "register:40f0:8", ["const:5e1e5c:8", "const:4:8"]]
+ 005e1e5c ["CALL", null, ["callee:0048ce94:8"]]
- 005e1e38 ["INT_ADD", "register:40f0:8", ["const:5e1e38:8", "const:4:8"]]
- 005e1e38 ["CALL", null, ["callee:0047e64c:8"]]
+ 005e1e78 ["INT_ADD", "register:40f0:8", ["const:5e1e78:8", "const:4:8"]]
+ 005e1e78 ["CALL", null, ["callee:0047e64c:8"]]
- 005e2024 ["INT_ADD", "register:40f0:8", ["const:5e2024:8", "const:4:8"]]
- 005e2024 ["CALL", null, ["callee:0048ce94:8"]]
+ 005e2064 ["INT_ADD", "register:40f0:8", ["const:5e2064:8", "const:4:8"]]
+ 005e2064 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-8914e49138f51a38707e2a0a08293756"></a>

### [`005e2a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e2/005e2a2c.md) → [`005e2a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e2/005e2a6c.md) FUN_005e2a6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 24件 [`005e3114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e3/005e3114.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`006b3ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3ba4.md) [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 4件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 24件 [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 4件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 71.88% / 新版 71.88%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e2a98",
      "incomplete_value": false,
      "site": "005e2a9c",
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
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e2a58",
      "incomplete_value": false,
      "site": "005e2a5c",
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
            "const:f38:8"
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
      "definition_site": "005e2abc",
      "incomplete_value": true,
      "site": "005e2ad8",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e2a7c",
      "incomplete_value": true,
      "site": "005e2a98",
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
            "const:f90:8"
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
      "definition_site": "005e2ae0",
      "incomplete_value": false,
      "site": "005e2ae4",
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
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e2aa0",
      "incomplete_value": false,
      "site": "005e2aa4",
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
            "const:f38:8"
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
      "005e2a7c",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "005e2a88",
      "DATA",
      [
        "storage",
        "00ca4f00",
        null,
        "undefined8"
      ]
    ],
    [
      "005e2a98",
      "PARAM",
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
      "005e2a7c",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "005e2a88",
      "DATA",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ],
    [
      "005e2a98",
      "PARAM",
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
- 005e2a58 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 005e2a58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005e2a58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005e2a58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005e2a98 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 005e2a98 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005e2a98 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005e2a98 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 005e2a5c ["INT_ADD", "register:40f0:8", ["const:5e2a5c:8", "const:4:8"]]
- 005e2a5c ["CALL", null, ["callee:00c57f20:8"]]
+ 005e2a9c ["INT_ADD", "register:40f0:8", ["const:5e2a9c:8", "const:4:8"]]
+ 005e2a9c ["CALL", null, ["callee:00c57f20:8"]]
- 005e2a64 ["COPY", "register:4008:8", ["const:ca4000:8"]]
+ 005e2aa4 ["COPY", "register:4008:8", ["const:ca5000:8"]]
~~~


<a id="compare-ffd81a015a4b7e97f3365abd7b7858e0"></a>

### [`005e3114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e3/005e3114.md) → [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) FUN_005e3154

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`006559f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00655/006559f0.md) [`00657b44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00657/00657b44.md) [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 32件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00449028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/00449028.md) [`0046e538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e538.md)
- 新版 呼出元 4件 [`00655a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655a30.md) [`00657b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b84.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 32件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00449068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449068.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.11% / 新版 89.11%

優先判定に残った影響 `call_argument_candidate` 14件, `store_destination` 2件, `store_value` 17件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e3358",
      "incomplete_value": true,
      "site": "005e3370",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e3318",
      "incomplete_value": true,
      "site": "005e3330",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e3368",
      "incomplete_value": true,
      "site": "005e337c",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e3328",
      "incomplete_value": true,
      "site": "005e333c",
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
                "const:18:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "005e338c",
      "incomplete_value": true,
      "site": "005e33a4",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:6a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e334c",
      "incomplete_value": true,
      "site": "005e3364",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:660:8"
              ]
            ]
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
      "005e31fc",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "005e3210",
      "READ",
      [
        "storage",
        "002a9e95",
        null,
        "string"
      ]
    ],
    [
      "005e3260",
      "READ",
      [
        "storage",
        "002ba4de",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005e31fc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "005e3210",
      "READ",
      [
        "storage",
        "002a9e39",
        null,
        "string"
      ]
    ],
    [
      "005e3260",
      "READ",
      [
        "storage",
        "002ba48a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005e3274 ["INT_ADD", "register:40f0:8", ["const:5e3274:8", "const:4:8"]]
- 005e3274 ["CALL", null, ["callee:0047e64c:8"]]
+ 005e32b4 ["INT_ADD", "register:40f0:8", ["const:5e32b4:8", "const:4:8"]]
+ 005e32b4 ["CALL", null, ["callee:0047e64c:8"]]
- 005e334c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:660:8"]]
- 005e334c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 005e334c ["COPY", "register:5010:8", ["const:0:8"]]
- 005e334c ["COPY", "register:5018:8", ["const:0:8"]]
+ 005e338c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6a0:8"]]
+ 005e338c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 005e338c ["COPY", "register:5010:8", ["const:0:8"]]
+ 005e338c ["COPY", "register:5018:8", ["const:0:8"]]
- 005e3370 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:bc0:8"]]
- 005e3370 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 005e33b0 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:c90:8"]]
+ 005e33b0 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-54354d30aa32da69111226117795e933"></a>

### [`005e4074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4074.md) → [`005e40b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e40b4.md) FUN_005e40b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006b5404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b5/006b5404.md) [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 9件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0048ab30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab30.md) [`0048ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab38.md)
- 新版 呼出元 2件 [`006b545c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b5/006b545c.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`0048ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab78.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e427c",
      "incomplete_value": true,
      "site": "005e4290",
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
                "register:4040:8"
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
      "definition_site": "005e423c",
      "incomplete_value": true,
      "site": "005e4250",
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
                "register:4040:8"
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
    "ordinal": 23,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e4284",
      "incomplete_value": false,
      "site": "005e4290",
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
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e4244",
      "incomplete_value": false,
      "site": "005e4250",
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
            "const:978:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005e4278",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005e427c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005e4284",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005e4278",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005e427c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005e4284",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005e4250 ["INT_ADD", "register:40f0:8", ["const:5e4250:8", "const:4:8"]]
- 005e4250 ["CALL", null, ["callee:00c586e0:8"]]
+ 005e4290 ["INT_ADD", "register:40f0:8", ["const:5e4290:8", "const:4:8"]]
+ 005e4290 ["CALL", null, ["callee:00c586e0:8"]]
- 005e4098 ["INT_ADD", "register:40f0:8", ["const:5e4098:8", "const:4:8"]]
- 005e4098 ["CALL", null, ["callee:004678a0:8"]]
+ 005e40d8 ["INT_ADD", "register:40f0:8", ["const:5e40d8:8", "const:4:8"]]
+ 005e40d8 ["CALL", null, ["callee:004678a0:8"]]
- 005e40a0 ["INT_ADD", "register:40f0:8", ["const:5e40a0:8", "const:4:8"]]
- 005e40a0 ["CALL", null, ["callee:00851550:8"]]
+ 005e40e0 ["INT_ADD", "register:40f0:8", ["const:5e40e0:8", "const:4:8"]]
+ 005e40e0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-dc16c30cf1e5c6365033fa990124996f"></a>

### [`005e50fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e5/005e50fc.md) → [`005e513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e5/005e513c.md) _INIT_68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e5178",
      "incomplete_value": true,
      "site": "005e5194",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e5138",
      "incomplete_value": true,
      "site": "005e5154",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e51dc",
      "incomplete_value": true,
      "site": "005e51f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e519c",
      "incomplete_value": true,
      "site": "005e51b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e51f8",
      "incomplete_value": true,
      "site": "005e5214",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e51b8",
      "incomplete_value": true,
      "site": "005e51d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005e5178",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005e519c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005e51bc",
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
      "005e5178",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005e519c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005e51bc",
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
- 005e5174 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005e5174 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e5174 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e5174 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e51b4 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005e51b4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e51b4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e51b4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e5194 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005e5194 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e5194 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e5194 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e51d4 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005e51d4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e51d4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e51d4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e5330 ["INT_ADD", "register:40f0:8", ["const:5e5330:8", "const:4:8"]]
- 005e5330 ["CALL", null, ["callee:00c57f00:8"]]
+ 005e5370 ["INT_ADD", "register:40f0:8", ["const:5e5370:8", "const:4:8"]]
+ 005e5370 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-2769bc6be133f04f093b1149a661a053"></a>

### [`005e548c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e5/005e548c.md) → [`005e54cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e5/005e54cc.md) _INIT_69

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
      "definition_site": "005e5508",
      "incomplete_value": true,
      "site": "005e5524",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e54c8",
      "incomplete_value": true,
      "site": "005e54e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e552c",
      "incomplete_value": true,
      "site": "005e5548",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e54ec",
      "incomplete_value": true,
      "site": "005e5508",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e554c",
      "incomplete_value": true,
      "site": "005e5568",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e550c",
      "incomplete_value": true,
      "site": "005e5528",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005e5508",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005e552c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005e554c",
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
      "005e5508",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005e552c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005e554c",
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
- 005e5504 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005e5504 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e5504 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e5504 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e5544 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005e5544 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e5544 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e5544 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e5524 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005e5524 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e5524 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e5524 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e5564 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005e5564 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e5564 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e5564 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e56c0 ["INT_ADD", "register:40f0:8", ["const:5e56c0:8", "const:4:8"]]
- 005e56c0 ["CALL", null, ["callee:00c57f00:8"]]
+ 005e5700 ["INT_ADD", "register:40f0:8", ["const:5e5700:8", "const:4:8"]]
+ 005e5700 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-f72cd1004bbcca0b02b31bf32327dcc0"></a>

### [`005e581c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e5/005e581c.md) → [`005e585c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e5/005e585c.md) FUN_005e585c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 96.41% / 新版 96.41%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e58d0",
      "incomplete_value": true,
      "site": "005e58e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4b4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e5890",
      "incomplete_value": true,
      "site": "005e58a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:508:8"
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
      "definition_site": "005e58e4",
      "incomplete_value": true,
      "site": "005e58e4",
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
      "definition_site": "005e58a4",
      "incomplete_value": true,
      "site": "005e58a4",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e58d8",
      "incomplete_value": true,
      "site": "005e58e8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e5898",
      "incomplete_value": true,
      "site": "005e58a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005e58a8",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005e58d0",
      "READ",
      [
        "storage",
        "002ba508",
        null,
        "string"
      ]
    ],
    [
      "005e58d4",
      "READ",
      [
        "storage",
        "002ba517",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005e58a8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005e58d0",
      "READ",
      [
        "storage",
        "002ba4b4",
        null,
        "string"
      ]
    ],
    [
      "005e58d4",
      "READ",
      [
        "storage",
        "002ba4c3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005e58e8 ["INT_ADD", "register:40f0:8", ["const:5e58e8:8", "const:4:8"]]
- 005e58e8 ["CALL", null, ["callee:0043bbe4:8"]]
+ 005e5928 ["INT_ADD", "register:40f0:8", ["const:5e5928:8", "const:4:8"]]
+ 005e5928 ["CALL", null, ["callee:0043bbe4:8"]]
- 005e5f90 ["INT_ADD", "register:40f0:8", ["const:5e5f90:8", "const:4:8"]]
- 005e5f90 ["CALL", null, ["callee:00c58080:8"]]
+ 005e5fd0 ["INT_ADD", "register:40f0:8", ["const:5e5fd0:8", "const:4:8"]]
+ 005e5fd0 ["CALL", null, ["callee:00c58080:8"]]
- 005e5850 ["INT_ADD", "register:40f0:8", ["const:5e5850:8", "const:4:8"]]
- 005e5850 ["CALL", null, ["callee:00487e60:8"]]
+ 005e5890 ["INT_ADD", "register:40f0:8", ["const:5e5890:8", "const:4:8"]]
+ 005e5890 ["CALL", null, ["callee:00487e60:8"]]
~~~


<a id="compare-69584c058edd3cd900e8e7d314ccaee3"></a>

### [`005e6a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e6/005e6a28.md) → [`005e6a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e6/005e6a68.md) _INIT_70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e6b24",
      "incomplete_value": true,
      "site": "005e6b40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e6ae4",
      "incomplete_value": true,
      "site": "005e6b00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e6b44",
      "incomplete_value": true,
      "site": "005e6b60",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e6b04",
      "incomplete_value": true,
      "site": "005e6b20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e6c88",
      "incomplete_value": false,
      "site": "005e6c9c",
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
      "definition_site": "005e6c48",
      "incomplete_value": false,
      "site": "005e6c5c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005e6aa4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005e6ac8",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005e6ae8",
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
      "005e6aa4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005e6ac8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005e6ae8",
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
- 005e6ac0 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005e6ac0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e6ac0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e6ac0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e6b00 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005e6b00 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e6b00 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e6b00 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e6c5c ["INT_ADD", "register:40f0:8", ["const:5e6c5c:8", "const:4:8"]]
- 005e6c5c ["CALL", null, ["callee:00c57f00:8"]]
+ 005e6c9c ["INT_ADD", "register:40f0:8", ["const:5e6c9c:8", "const:4:8"]]
+ 005e6c9c ["CALL", null, ["callee:00c57f00:8"]]
- 005e6a54 ["COPY", "tmp:0:8", ["const:930:8"]]
- 005e6a54 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005e6a54 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005e6a54 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005e6a94 ["COPY", "tmp:0:8", ["const:a30:8"]]
+ 005e6a94 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005e6a94 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005e6a94 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-aac4d266587b82e32bd5752ac886e2a3"></a>

### [`005e7090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7090.md) → [`005e70d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e70d0.md) _INIT_71

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e710c",
      "incomplete_value": true,
      "site": "005e7128",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e70cc",
      "incomplete_value": true,
      "site": "005e70e8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e7130",
      "incomplete_value": true,
      "site": "005e714c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e70f0",
      "incomplete_value": true,
      "site": "005e710c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e7150",
      "incomplete_value": true,
      "site": "005e716c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e7110",
      "incomplete_value": true,
      "site": "005e712c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005e710c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005e7130",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005e7150",
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
      "005e710c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005e7130",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005e7150",
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
- 005e7108 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005e7108 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e7108 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e7108 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e7148 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005e7148 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e7148 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e7148 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e7128 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005e7128 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e7128 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e7128 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e7168 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005e7168 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e7168 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e7168 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e72c4 ["INT_ADD", "register:40f0:8", ["const:5e72c4:8", "const:4:8"]]
- 005e72c4 ["CALL", null, ["callee:00c57f00:8"]]
+ 005e7304 ["INT_ADD", "register:40f0:8", ["const:5e7304:8", "const:4:8"]]
+ 005e7304 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-8c4ae5d51028dbffe31c5230e9b59ab9"></a>

### [`005e7504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7504.md) → [`005e7544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7544.md) FUN_005e7544

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`005e7474`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7474.md) [`005e76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e76a0.md) [`005f4d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f4/005f4d6c.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`00718774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00718/00718774.md) · 呼出先 9件 [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`005afc78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005af/005afc78.md) [`0066a584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066a/0066a584.md) [`0066a61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066a/0066a61c.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md)
- 新版 呼出元 7件 [`005e74b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e74b4.md) [`005e76e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e76e0.md) [`005f4dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f4/005f4dac.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`007187cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00718/007187cc.md) · 呼出先 9件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`0066a5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a5c4.md) [`0066a65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a65c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.03% / 新版 99.03%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005e76b0",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005e7670",
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
      "005e76b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ]
  ],
  "added": [
    [
      "005e76b0",
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
- 005e7670 ["INT_ADD", "register:40f0:8", ["const:5e7670:8", "const:4:8"]]
- 005e7670 ["CALL", null, ["ram:71bed8:8"]]
+ 005e76b0 ["INT_ADD", "register:40f0:8", ["const:5e76b0:8", "const:4:8"]]
+ 005e76b0 ["CALL", null, ["ram:71bf30:8"]]
- 005e7514 ["INT_ADD", "register:40f0:8", ["const:5e7514:8", "const:4:8"]]
- 005e7514 ["CALL", null, ["callee:00851550:8"]]
+ 005e7554 ["INT_ADD", "register:40f0:8", ["const:5e7554:8", "const:4:8"]]
+ 005e7554 ["CALL", null, ["callee:00851550:8"]]
- 005e7520 ["INT_ADD", "register:40f0:8", ["const:5e7520:8", "const:4:8"]]
- 005e7520 ["CALL", null, ["callee:00802bb0:8"]]
+ 005e7560 ["INT_ADD", "register:40f0:8", ["const:5e7560:8", "const:4:8"]]
+ 005e7560 ["CALL", null, ["callee:00802bb0:8"]]
~~~


<a id="compare-9a46276c78104759996e462dfa1abb0a"></a>

### [`005e7c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7c98.md) → [`005e7cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7cd8.md) FUN_005e7cd8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`005e7bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7bd0.md) [`005e7c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7c40.md) [`005e8060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8060.md) [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00a51fc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a51/00a51fc4.md) · 呼出先 10件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`005e1b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1b18.md) [`006647c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006647c0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md)
- 新版 呼出元 6件 [`005e7c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7c10.md) [`005e7c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7c80.md) [`005e80a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e80a0.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005e1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b58.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.32% / 新版 96.32%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e7d24",
      "incomplete_value": false,
      "site": "005e7d30",
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
            "const:263:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e7ce4",
      "incomplete_value": false,
      "site": "005e7cf0",
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
            "const:2b0:8"
          ]
        ]
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
      "005e7d24",
      "PARAM",
      [
        "storage",
        "002a02b0",
        null,
        "string"
      ]
    ],
    [
      "005e7d80",
      "READ",
      [
        "storage",
        "002b1e24",
        null,
        "string"
      ]
    ],
    [
      "005e7d80",
      "READ",
      [
        "storage",
        "002b1e34",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005e7d24",
      "PARAM",
      [
        "storage",
        "002a0263",
        null,
        "string"
      ]
    ],
    [
      "005e7d80",
      "READ",
      [
        "storage",
        "002b1e55",
        null,
        "string"
      ]
    ],
    [
      "005e7d80",
      "READ",
      [
        "storage",
        "002b1e65",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005e7cf0 ["INT_ADD", "register:40f0:8", ["const:5e7cf0:8", "const:4:8"]]
- 005e7cf0 ["CALL", null, ["callee:00c58030:8"]]
+ 005e7d30 ["INT_ADD", "register:40f0:8", ["const:5e7d30:8", "const:4:8"]]
+ 005e7d30 ["CALL", null, ["callee:00c58030:8"]]
- 005e7d30 ["INT_ADD", "register:40f0:8", ["const:5e7d30:8", "const:4:8"]]
- 005e7d30 ["CALL", null, ["callee:00c57f60:8"]]
+ 005e7d70 ["INT_ADD", "register:40f0:8", ["const:5e7d70:8", "const:4:8"]]
+ 005e7d70 ["CALL", null, ["callee:00c57f60:8"]]
- 005e7cd0 ["INT_ADD", "register:40f0:8", ["const:5e7cd0:8", "const:4:8"]]
- 005e7cd0 ["CALL", null, ["callee:005e1b58:8"]]
+ 005e7d10 ["INT_ADD", "register:40f0:8", ["const:5e7d10:8", "const:4:8"]]
+ 005e7d10 ["CALL", null, ["callee:005e1b58:8"]]
~~~


<a id="compare-a4e2eef79957a7a2d8cde498a7631fc2"></a>

### [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) → [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) FUN_005e81d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 37件 [`005e7474`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7474.md) [`005e76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e76a0.md) [`005e7940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7940.md) [`005e79b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e79b8.md) [`006bed5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bed5c.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 37件 [`005e74b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e74b4.md) [`005e76e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e76e0.md) [`005e7980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7980.md) [`005e79f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e79f8.md) [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e8220",
      "incomplete_value": true,
      "site": "005e8220",
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
                "register:4050:8"
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
      "definition_site": "005e81e0",
      "incomplete_value": true,
      "site": "005e81e0",
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
                "register:4050:8"
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
      "005e8200",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005e8200",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005e81b8 ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 005e81b8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e81b8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e81b8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e81f8 ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 005e81f8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e81f8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e81f8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e81f0 ["INT_ADD", "register:40f0:8", ["const:5e81f0:8", "const:4:8"]]
- 005e81f0 ["CALL", null, ["callee:00c58470:8"]]
+ 005e8230 ["INT_ADD", "register:40f0:8", ["const:5e8230:8", "const:4:8"]]
+ 005e8230 ["CALL", null, ["callee:00c58470:8"]]
- 005e8200 ["INT_ADD", "register:40f0:8", ["const:5e8200:8", "const:4:8"]]
- 005e8200 ["CALL", null, ["callee:00c57f80:8"]]
+ 005e8240 ["INT_ADD", "register:40f0:8", ["const:5e8240:8", "const:4:8"]]
+ 005e8240 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-eef9e2cb8ab2595775a3d968410c9814"></a>

### [`005e834c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e834c.md) → [`005e838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e838c.md) _INIT_72

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.40% / 新版 90.40%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005e8448",
      "incomplete_value": true,
      "site": "005e8464",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005e8408",
      "incomplete_value": true,
      "site": "005e8424",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005e85ac",
      "incomplete_value": false,
      "site": "005e85c0",
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
      "definition_site": "005e856c",
      "incomplete_value": false,
      "site": "005e8580",
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
      "definition_site": "005e85b4",
      "incomplete_value": false,
      "site": "005e85c0",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e8574",
      "incomplete_value": false,
      "site": "005e8580",
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
            "const:960:8"
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
      "005e83c8",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005e83ec",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005e840c",
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
      "005e83c8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005e83ec",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005e840c",
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
- 005e83e4 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005e83e4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005e83e4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005e83e4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005e8424 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005e8424 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005e8424 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005e8424 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005e8580 ["INT_ADD", "register:40f0:8", ["const:5e8580:8", "const:4:8"]]
- 005e8580 ["CALL", null, ["callee:00c57f00:8"]]
+ 005e85c0 ["INT_ADD", "register:40f0:8", ["const:5e85c0:8", "const:4:8"]]
+ 005e85c0 ["CALL", null, ["callee:00c57f00:8"]]
- 005e8378 ["COPY", "tmp:0:8", ["const:960:8"]]
- 005e8378 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005e8378 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005e8378 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005e83b8 ["COPY", "tmp:0:8", ["const:a60:8"]]
+ 005e83b8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005e83b8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005e83b8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-9dc40632ca2a9152d64a547909fcce25"></a>

### [`005e94f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e94f4.md) → [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) FUN_005e9534

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005e90d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e90d4.md) [`005e94f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e94f4.md) · 呼出先 43件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md)
- 新版 呼出元 2件 [`005e9114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9114.md) [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 43件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 97.43% / 新版 97.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 15件, `store_condition` 2件, `store_value` 9件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005e9574",
      "incomplete_value": false,
      "site": "005e957c",
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
      "definition_site": "005e9534",
      "incomplete_value": false,
      "site": "005e953c",
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
      "definition_site": "005e95a0",
      "incomplete_value": true,
      "site": "005e95a0",
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
                "const:a8c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e9560",
      "incomplete_value": true,
      "site": "005e9560",
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
                "const:ae8:8"
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
      "definition_site": "005e9f18",
      "incomplete_value": true,
      "site": "005e9f28",
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
                "const:2b1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005e9ed8",
      "incomplete_value": true,
      "site": "005e9ee8",
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
                "const:271:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 84,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005e957c",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005e9594",
      "READ",
      [
        "storage",
        "002aeae8",
        null,
        "string"
      ]
    ],
    [
      "005e9784",
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
      "005e957c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005e9594",
      "READ",
      [
        "storage",
        "002aea8c",
        null,
        "string"
      ]
    ],
    [
      "005e9784",
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
- 005e9760 ["INT_ADD", "register:40f0:8", ["const:5e9760:8", "const:4:8"]]
- 005e9760 ["CALL", null, ["callee:00c586e0:8"]]
+ 005e97a0 ["INT_ADD", "register:40f0:8", ["const:5e97a0:8", "const:4:8"]]
+ 005e97a0 ["CALL", null, ["callee:00c586e0:8"]]
- 005e9ea8 ["INT_ADD", "register:40f0:8", ["const:5e9ea8:8", "const:4:8"]]
- 005e9ea8 ["CALL", null, ["callee:00c57f80:8"]]
+ 005e9ee8 ["INT_ADD", "register:40f0:8", ["const:5e9ee8:8", "const:4:8"]]
+ 005e9ee8 ["CALL", null, ["callee:00c57f80:8"]]
- 005eb034 ["INT_ADD", "register:40f0:8", ["const:5eb034:8", "const:4:8"]]
- 005eb034 ["CALL", null, ["callee:0047e64c:8"]]
+ 005eb074 ["INT_ADD", "register:40f0:8", ["const:5eb074:8", "const:4:8"]]
+ 005eb074 ["CALL", null, ["callee:0047e64c:8"]]
~~~


<a id="compare-b42d030de8005910ab6bb1a199f679c8"></a>

### [`005eba70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005eb/005eba70.md) → [`005ebab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005eb/005ebab0.md) FUN_005ebab0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005e94f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e94f4.md) · 呼出先 3件 [`005dc878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc878.md) [`005dddd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005dddd0.md) [`005dddfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dd/005dddfc.md)
- 新版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 3件 [`005dc8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc8b8.md) [`005dde10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde10.md) [`005dde3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dd/005dde3c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.57% / 新版 98.57%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ebbb8",
      "value": [
        "leaf",
        "ram:5dc8b8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ebb78",
      "value": [
        "leaf",
        "ram:5dc878:8"
      ]
    },
    "ordinal": 31,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005ebbb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005dc878"
      ]
    ]
  ],
  "added": [
    [
      "005ebbb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005dc8b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ebb38 ["INT_ADD", "register:40f0:8", ["const:5ebb38:8", "const:4:8"]]
- 005ebb38 ["CALL", null, ["callee:005dde3c:8"]]
+ 005ebb78 ["INT_ADD", "register:40f0:8", ["const:5ebb78:8", "const:4:8"]]
+ 005ebb78 ["CALL", null, ["callee:005dde3c:8"]]
- 005ebb78 ["INT_ADD", "register:40f0:8", ["const:5ebb78:8", "const:4:8"]]
- 005ebb78 ["CALL", null, ["ram:5dc878:8"]]
+ 005ebbb8 ["INT_ADD", "register:40f0:8", ["const:5ebbb8:8", "const:4:8"]]
+ 005ebbb8 ["CALL", null, ["ram:5dc8b8:8"]]
- 005eba80 ["INT_ADD", "register:40f0:8", ["const:5eba80:8", "const:4:8"]]
- 005eba80 ["CALL", null, ["callee:005dde10:8"]]
+ 005ebac0 ["INT_ADD", "register:40f0:8", ["const:5ebac0:8", "const:4:8"]]
+ 005ebac0 ["CALL", null, ["callee:005dde10:8"]]
~~~


<a id="compare-a25a6702511f969b7b2b7a10af3b1b3a"></a>

### [`005ed798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ed/005ed798.md) → [`005ed7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005ed7d8.md) FUN_005ed7d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005ed274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ed/005ed274.md) [`005efe0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ef/005efe0c.md) [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 4件 [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 4件 [`005ed2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005ed2b4.md) [`005efe4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005efe4c.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 4件 [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.30% / 新版 94.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ed908",
      "incomplete_value": true,
      "site": "005ed918",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:82c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ed8c8",
      "incomplete_value": true,
      "site": "005ed8d8",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:888:8"
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
      "005ed808",
      "READ",
      [
        "storage",
        "002bb5bd",
        null,
        "string"
      ]
    ],
    [
      "005ed880",
      "READ",
      [
        "storage",
        "002b8360",
        null,
        "string"
      ]
    ],
    [
      "005ed8e4",
      "READ",
      [
        "storage",
        "00ca3fa8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "005ed808",
      "READ",
      [
        "storage",
        "002bb569",
        null,
        "string"
      ]
    ],
    [
      "005ed880",
      "READ",
      [
        "storage",
        "002b830c",
        null,
        "string"
      ]
    ],
    [
      "005ed8e4",
      "READ",
      [
        "storage",
        "00ca4078",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ed7c0 ["COPY", "tmp:0:8", ["const:5bd:8"]]
- 005ed7c0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005ed7c0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005ed7c0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005ed800 ["COPY", "tmp:0:8", ["const:569:8"]]
+ 005ed800 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005ed800 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005ed800 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005ed7fc ["INT_ADD", "register:40f0:8", ["const:5ed7fc:8", "const:4:8"]]
- 005ed7fc ["CALL", null, ["callee:00936618:8"]]
+ 005ed83c ["INT_ADD", "register:40f0:8", ["const:5ed83c:8", "const:4:8"]]
+ 005ed83c ["CALL", null, ["callee:00936618:8"]]
- 005ed81c ["INT_ADD", "register:40f0:8", ["const:5ed81c:8", "const:4:8"]]
- 005ed81c ["CALL", null, ["callee:00c57f80:8"]]
+ 005ed85c ["INT_ADD", "register:40f0:8", ["const:5ed85c:8", "const:4:8"]]
+ 005ed85c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7ae0923ee4e605e30ff767be13f696fa"></a>

### [`005ee5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ee/005ee5d0.md) → [`005ee610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ee/005ee610.md) FUN_005ee610

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 38件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ffc.md) [`00468bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468bdc.md)
- 新版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 38件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.70% / 新版 99.70%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ee65c",
      "incomplete_value": false,
      "site": "005ee66c",
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
      "definition_site": "005ee61c",
      "incomplete_value": false,
      "site": "005ee62c",
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
      "definition_site": "005ee664",
      "incomplete_value": false,
      "site": "005ee66c",
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
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ee624",
      "incomplete_value": false,
      "site": "005ee62c",
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
            "const:978:8"
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
      "definition_site": "005ef598",
      "incomplete_value": false,
      "site": "005ef59c",
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
      "definition_site": "005ef558",
      "incomplete_value": false,
      "site": "005ef55c",
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
    "ordinal": 78,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005ee64c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005ee65c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005ee664",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005ee64c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005ee65c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005ee664",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ee62c ["INT_ADD", "register:40f0:8", ["const:5ee62c:8", "const:4:8"]]
- 005ee62c ["CALL", null, ["callee:00c586e0:8"]]
+ 005ee66c ["INT_ADD", "register:40f0:8", ["const:5ee66c:8", "const:4:8"]]
+ 005ee66c ["CALL", null, ["callee:00c586e0:8"]]
- 005ef55c ["INT_ADD", "register:40f0:8", ["const:5ef55c:8", "const:4:8"]]
- 005ef55c ["CALL", null, ["callee:00442970:8"]]
+ 005ef59c ["INT_ADD", "register:40f0:8", ["const:5ef59c:8", "const:4:8"]]
+ 005ef59c ["CALL", null, ["callee:00442970:8"]]
- 005ee60c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 005ee60c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 005ee64c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 005ee64c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dd90179818e72aad54459b3a6055990f"></a>

### [`005ef5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ef/005ef5ac.md) → [`005ef5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005ef5ec.md) FUN_005ef5ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 34件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`004681c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/004681c0.md)
- 新版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 34件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468200.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005efd6c",
      "incomplete_value": true,
      "site": "005efd7c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:6f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005efd2c",
      "incomplete_value": true,
      "site": "005efd3c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:6b0:8"
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
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005ef634",
      "incomplete_value": true,
      "site": "005ef634",
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
      "definition_site": "005ef5f4",
      "incomplete_value": true,
      "site": "005ef5f4",
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
      "definition_site": "005ef63c",
      "incomplete_value": false,
      "site": "005ef64c",
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
      "definition_site": "005ef5fc",
      "incomplete_value": false,
      "site": "005ef60c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005ef624",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005ef63c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005ef644",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005ef624",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005ef63c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005ef644",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ef60c ["INT_ADD", "register:40f0:8", ["const:5ef60c:8", "const:4:8"]]
- 005ef60c ["CALL", null, ["callee:00c586e0:8"]]
+ 005ef64c ["INT_ADD", "register:40f0:8", ["const:5ef64c:8", "const:4:8"]]
+ 005ef64c ["CALL", null, ["callee:00c586e0:8"]]
- 005efcfc ["INT_ADD", "register:40f0:8", ["const:5efcfc:8", "const:4:8"]]
- 005efcfc ["CALL", null, ["callee:0046ca04:8"]]
+ 005efd3c ["INT_ADD", "register:40f0:8", ["const:5efd3c:8", "const:4:8"]]
+ 005efd3c ["CALL", null, ["callee:0046ca04:8"]]
- 005ef5e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 005ef5e4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 005ef624 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 005ef624 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-56a99fbad5e6e763a5373531da97afd9"></a>

### [`005efe0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ef/005efe0c.md) → [`005efe4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005efe4c.md) FUN_005efe4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00720090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00720/00720090.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) [`00a51778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a51/00a51778.md) · 呼出先 4件 [`005ed798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ed/005ed798.md) [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 4件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00a517e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a51/00a517e8.md) · 呼出先 4件 [`005ed7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005ed7d8.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005efe8c",
      "incomplete_value": true,
      "site": "005efeac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005efe4c",
      "incomplete_value": true,
      "site": "005efe6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d5f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005efe8c",
      "READ",
      [
        "storage",
        "002b3d5f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005efe8c",
      "READ",
      [
        "storage",
        "002b3d90",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005efe48 ["COPY", "tmp:0:8", ["const:d5f:8"]]
- 005efe48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005efe48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005efe48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005efe88 ["COPY", "tmp:0:8", ["const:d90:8"]]
+ 005efe88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005efe88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005efe88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005efe80 ["INT_ADD", "register:40f0:8", ["const:5efe80:8", "const:4:8"]]
- 005efe80 ["CALL", null, ["callee:00936618:8"]]
+ 005efec0 ["INT_ADD", "register:40f0:8", ["const:5efec0:8", "const:4:8"]]
+ 005efec0 ["CALL", null, ["callee:00936618:8"]]
- 005efe98 ["INT_ADD", "register:40f0:8", ["const:5efe98:8", "const:4:8"]]
- 005efe98 ["CALL", null, ["callee:005ed7d8:8"]]
+ 005efed8 ["INT_ADD", "register:40f0:8", ["const:5efed8:8", "const:4:8"]]
+ 005efed8 ["CALL", null, ["callee:005ed7d8:8"]]
~~~


<a id="compare-b142bb4f0a3b7b6ca8faae15aaeff440"></a>

### [`005eff54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ef/005eff54.md) → [`005eff94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005eff94.md) FUN_005eff94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005e94f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e94f4.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005effa0",
      "incomplete_value": false,
      "site": "005effa4",
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
      "definition_site": "005eff60",
      "incomplete_value": false,
      "site": "005eff64",
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
      "005effa0",
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
      "005effa0",
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
- 005eff64 ["INT_ADD", "register:40f0:8", ["const:5eff64:8", "const:4:8"]]
- 005eff64 ["CALL", null, ["callee:00442970:8"]]
+ 005effa4 ["INT_ADD", "register:40f0:8", ["const:5effa4:8", "const:4:8"]]
+ 005effa4 ["CALL", null, ["callee:00442970:8"]]
- 005eff60 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005eff60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005eff60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005eff60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005effa0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005effa0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005effa0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005effa0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-25bbf90944cf546abbdb05beb4777673"></a>

### [`005f0198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f0/005f0198.md) → [`005f01d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f0/005f01d8.md) FUN_005f01d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005eff68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ef/005eff68.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005effa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005effa8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f01e4",
      "incomplete_value": false,
      "site": "005f01e8",
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
      "definition_site": "005f01a4",
      "incomplete_value": false,
      "site": "005f01a8",
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
      "005f01e4",
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
      "005f01e4",
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
- 005f01a8 ["INT_ADD", "register:40f0:8", ["const:5f01a8:8", "const:4:8"]]
- 005f01a8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005f01e8 ["INT_ADD", "register:40f0:8", ["const:5f01e8:8", "const:4:8"]]
+ 005f01e8 ["CALL", null, ["callee:0043b7b8:8"]]
- 005f01a4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005f01a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005f01a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005f01a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005f01e4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005f01e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005f01e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005f01e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-aa3905e9493a4af69ff7391761891d1f"></a>

### [`005f01ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f0/005f01ac.md) → [`005f01ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f0/005f01ec.md) FUN_005f01ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005e90d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e9/005e90d4.md) [`005ec274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ec/005ec274.md) [`005eda7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ed/005eda7c.md) [`005ee5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ee/005ee5d0.md) [`005ef5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ef/005ef5ac.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 5件 [`005e9114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9114.md) [`005ec2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ec/005ec2b4.md) [`005edabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005edabc.md) [`005ee610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ee/005ee610.md) [`005ef5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005ef5ec.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f01f8",
      "incomplete_value": false,
      "site": "005f01fc",
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
      "definition_site": "005f01b8",
      "incomplete_value": false,
      "site": "005f01bc",
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
      "005f01f8",
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
      "005f01f8",
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
- 005f01bc ["INT_ADD", "register:40f0:8", ["const:5f01bc:8", "const:4:8"]]
- 005f01bc ["CALL", null, ["callee:00442970:8"]]
+ 005f01fc ["INT_ADD", "register:40f0:8", ["const:5f01fc:8", "const:4:8"]]
+ 005f01fc ["CALL", null, ["callee:00442970:8"]]
- 005f01b8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005f01b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005f01b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005f01b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005f01f8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005f01f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005f01f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005f01f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b7d975997038d80d7980626114597544"></a>

### [`005f0a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f0/005f0a90.md) → [`005f0ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f0/005f0ad0.md) FUN_005f0ad0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005f01c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f0/005f01c0.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005f0200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f0/005f0200.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f0adc",
      "incomplete_value": false,
      "site": "005f0ae0",
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
      "definition_site": "005f0a9c",
      "incomplete_value": false,
      "site": "005f0aa0",
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
      "005f0adc",
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
      "005f0adc",
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
- 005f0aa0 ["INT_ADD", "register:40f0:8", ["const:5f0aa0:8", "const:4:8"]]
- 005f0aa0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005f0ae0 ["INT_ADD", "register:40f0:8", ["const:5f0ae0:8", "const:4:8"]]
+ 005f0ae0 ["CALL", null, ["callee:0043b7b8:8"]]
- 005f0a9c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005f0a9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005f0a9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005f0a9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005f0adc ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005f0adc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005f0adc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005f0adc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-92ff5337b2c45f5231aa6767dd92fadb"></a>

### [`005f0f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f0/005f0f50.md) → [`005f0f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f0/005f0f90.md) _INIT_73

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f0ff0",
      "incomplete_value": true,
      "site": "005f100c",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "005f0fb0",
      "incomplete_value": true,
      "site": "005f0fcc",
      "value": [
        "LOAD",
        "16",
        [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f11b8",
      "incomplete_value": true,
      "site": "005f11c4",
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
            "const:a78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f1178",
      "incomplete_value": true,
      "site": "005f1184",
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
            "const:978:8"
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
      "definition_site": "005f11c0",
      "incomplete_value": false,
      "site": "005f11c4",
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
      "definition_site": "005f1180",
      "incomplete_value": false,
      "site": "005f1184",
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
      "005f0fcc",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005f0ff0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005f1010",
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
      "005f0fcc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005f0ff0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005f1010",
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
- 005f1184 ["INT_ADD", "register:40f0:8", ["const:5f1184:8", "const:4:8"]]
- 005f1184 ["CALL", null, ["callee:00c57f00:8"]]
+ 005f11c4 ["INT_ADD", "register:40f0:8", ["const:5f11c4:8", "const:4:8"]]
+ 005f11c4 ["CALL", null, ["callee:00c57f00:8"]]
- 005f0f7c ["COPY", "tmp:0:8", ["const:978:8"]]
- 005f0f7c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005f0f7c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005f0f7c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005f0fbc ["COPY", "tmp:0:8", ["const:a78:8"]]
+ 005f0fbc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005f0fbc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005f0fbc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 005f0f84 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-e630ad943b1e6126856e6b48ee1a33bf"></a>

### [`005f12e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f1/005f12e0.md) → [`005f1320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f1/005f1320.md) _INIT_74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 90.40% / 新版 90.40%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f1540",
      "incomplete_value": true,
      "site": "005f1554",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f1500",
      "incomplete_value": true,
      "site": "005f1514",
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
      "definition_site": "005f1548",
      "incomplete_value": false,
      "site": "005f1554",
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
            "const:a90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f1508",
      "incomplete_value": false,
      "site": "005f1514",
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
            "const:990:8"
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
      "definition_site": "005f1550",
      "incomplete_value": false,
      "site": "005f1554",
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
      "definition_site": "005f1510",
      "incomplete_value": false,
      "site": "005f1514",
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
      "005f135c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005f1380",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005f13a0",
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
      "005f135c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005f1380",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005f13a0",
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
- 005f1514 ["INT_ADD", "register:40f0:8", ["const:5f1514:8", "const:4:8"]]
- 005f1514 ["CALL", null, ["callee:00c57f00:8"]]
+ 005f1554 ["INT_ADD", "register:40f0:8", ["const:5f1554:8", "const:4:8"]]
+ 005f1554 ["CALL", null, ["callee:00c57f00:8"]]
- 005f130c ["COPY", "tmp:0:8", ["const:990:8"]]
- 005f130c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005f130c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005f130c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005f134c ["COPY", "tmp:0:8", ["const:a90:8"]]
+ 005f134c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005f134c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005f134c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 005f1314 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-31358eb372f9945ae3e03a0770684070"></a>

### [`005f1ad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f1/005f1ad4.md) → [`005f1b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f1/005f1b14.md) FUN_005f1b14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 4件 [`0046ee04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee04.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cddc.md) [`005e01ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e01ec.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 4件 [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce1c.md) [`005e022c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e022c.md)

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
      "site": "005f1b5c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005f1b1c",
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
      "005f1b5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005f1b5c",
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
- 005f1b1c ["INT_ADD", "register:40f0:8", ["const:5f1b1c:8", "const:4:8"]]
- 005f1b1c ["CALL", null, ["ram:47acf4:8"]]
+ 005f1b5c ["INT_ADD", "register:40f0:8", ["const:5f1b5c:8", "const:4:8"]]
+ 005f1b5c ["CALL", null, ["ram:47ad34:8"]]
- 005f1b24 ["INT_ADD", "register:40f0:8", ["const:5f1b24:8", "const:4:8"]]
- 005f1b24 ["CALL", null, ["callee:0047ce1c:8"]]
+ 005f1b64 ["INT_ADD", "register:40f0:8", ["const:5f1b64:8", "const:4:8"]]
+ 005f1b64 ["CALL", null, ["callee:0047ce1c:8"]]
- 005f1b38 ["INT_ADD", "register:40f0:8", ["const:5f1b38:8", "const:4:8"]]
- 005f1b38 ["CALL", null, ["callee:0046ee44:8"]]
+ 005f1b78 ["INT_ADD", "register:40f0:8", ["const:5f1b78:8", "const:4:8"]]
+ 005f1b78 ["CALL", null, ["callee:0046ee44:8"]]
~~~


<a id="compare-53e71f318947d675057cc2a6ea409681"></a>

### [`005f210c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f210c.md) → [`005f214c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f214c.md) FUN_005f214c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 4件 [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cddc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 4件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce1c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.61% / 新版 98.61%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005f21b4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005f2174",
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
      "005f21b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005f21b4",
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
- 005f2174 ["INT_ADD", "register:40f0:8", ["const:5f2174:8", "const:4:8"]]
- 005f2174 ["CALL", null, ["ram:47acf4:8"]]
+ 005f21b4 ["INT_ADD", "register:40f0:8", ["const:5f21b4:8", "const:4:8"]]
+ 005f21b4 ["CALL", null, ["ram:47ad34:8"]]
- 005f217c ["INT_ADD", "register:40f0:8", ["const:5f217c:8", "const:4:8"]]
- 005f217c ["CALL", null, ["callee:0047ce1c:8"]]
+ 005f21bc ["INT_ADD", "register:40f0:8", ["const:5f21bc:8", "const:4:8"]]
+ 005f21bc ["CALL", null, ["callee:0047ce1c:8"]]
- 005f2198 ["INT_ADD", "register:40f0:8", ["const:5f2198:8", "const:4:8"]]
- 005f2198 ["CALL", null, ["callee:0046edcc:8"]]
+ 005f21d8 ["INT_ADD", "register:40f0:8", ["const:5f21d8:8", "const:4:8"]]
+ 005f21d8 ["CALL", null, ["callee:0046edcc:8"]]
~~~


<a id="compare-394fa26c5b60ab8e33c32412e862f3b5"></a>

### [`005f2340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2340.md) → [`005f2380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2380.md) FUN_005f2380

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 4件 [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cddc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 4件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce1c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.61% / 新版 98.61%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005f23e8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005f23a8",
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
      "005f23e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005f23e8",
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
- 005f23a8 ["INT_ADD", "register:40f0:8", ["const:5f23a8:8", "const:4:8"]]
- 005f23a8 ["CALL", null, ["ram:47acf4:8"]]
+ 005f23e8 ["INT_ADD", "register:40f0:8", ["const:5f23e8:8", "const:4:8"]]
+ 005f23e8 ["CALL", null, ["ram:47ad34:8"]]
- 005f23b0 ["INT_ADD", "register:40f0:8", ["const:5f23b0:8", "const:4:8"]]
- 005f23b0 ["CALL", null, ["callee:0047ce1c:8"]]
+ 005f23f0 ["INT_ADD", "register:40f0:8", ["const:5f23f0:8", "const:4:8"]]
+ 005f23f0 ["CALL", null, ["callee:0047ce1c:8"]]
- 005f23cc ["INT_ADD", "register:40f0:8", ["const:5f23cc:8", "const:4:8"]]
- 005f23cc ["CALL", null, ["callee:0046edcc:8"]]
+ 005f240c ["INT_ADD", "register:40f0:8", ["const:5f240c:8", "const:4:8"]]
+ 005f240c ["CALL", null, ["callee:0046edcc:8"]]
~~~


<a id="compare-acf6e9d837257e5bf6392aa46e127bc2"></a>

### [`005f2798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2798.md) → [`005f27d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f27d8.md) FUN_005f27d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 4件 [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cddc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 4件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce1c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005f2844",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005f2804",
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
      "005f2844",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005f2844",
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
- 005f2804 ["INT_ADD", "register:40f0:8", ["const:5f2804:8", "const:4:8"]]
- 005f2804 ["CALL", null, ["ram:47acf4:8"]]
+ 005f2844 ["INT_ADD", "register:40f0:8", ["const:5f2844:8", "const:4:8"]]
+ 005f2844 ["CALL", null, ["ram:47ad34:8"]]
- 005f280c ["INT_ADD", "register:40f0:8", ["const:5f280c:8", "const:4:8"]]
- 005f280c ["CALL", null, ["callee:0047ce1c:8"]]
+ 005f284c ["INT_ADD", "register:40f0:8", ["const:5f284c:8", "const:4:8"]]
+ 005f284c ["CALL", null, ["callee:0047ce1c:8"]]
- 005f2828 ["INT_ADD", "register:40f0:8", ["const:5f2828:8", "const:4:8"]]
- 005f2828 ["CALL", null, ["callee:0046edcc:8"]]
+ 005f2868 ["INT_ADD", "register:40f0:8", ["const:5f2868:8", "const:4:8"]]
+ 005f2868 ["CALL", null, ["callee:0046edcc:8"]]
~~~


<a id="compare-b3e6cd662e7aa2197108d24b126e7d99"></a>

### [`005f29d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f29d8.md) → [`005f2a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2a18.md) _INIT_75

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.14% / 新版 88.14%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f2ab8",
      "incomplete_value": true,
      "site": "005f2ad0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005f2a78",
      "incomplete_value": true,
      "site": "005f2a90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005f2ad4",
      "incomplete_value": true,
      "site": "005f2af0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005f2a94",
      "incomplete_value": true,
      "site": "005f2ab0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005f2af4",
      "incomplete_value": true,
      "site": "005f2b10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005f2ab4",
      "incomplete_value": true,
      "site": "005f2ad0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005f2a54",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005f2a78",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005f2a98",
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
      "005f2a54",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005f2a78",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005f2a98",
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
- 005f2a50 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005f2a50 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005f2a50 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005f2a50 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005f2a90 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005f2a90 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005f2a90 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005f2a90 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005f2a70 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005f2a70 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005f2a70 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005f2a70 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005f2ab0 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005f2ab0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005f2ab0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005f2ab0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005f2c0c ["INT_ADD", "register:40f0:8", ["const:5f2c0c:8", "const:4:8"]]
- 005f2c0c ["CALL", null, ["callee:00c57f00:8"]]
+ 005f2c4c ["INT_ADD", "register:40f0:8", ["const:5f2c4c:8", "const:4:8"]]
+ 005f2c4c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-09ff6640d59f39a3f1bb7b608d482774"></a>

### [`005f3290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f3/005f3290.md) → [`005f32d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f3/005f32d0.md) FUN_005f32d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 10件 [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0046d974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d974.md) [`0046d9ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d9ac.md) [`0046d9e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d9e4.md) [`005e0920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0920.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 10件 [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046d9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9b4.md) [`0046d9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9ec.md) [`0046da24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da24.md) [`005e0960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0960.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.01% / 新版 99.01%

優先判定に残った影響 `store_value` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f37f0",
      "incomplete_value": true,
      "site": "005f3808",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f37b0",
      "incomplete_value": true,
      "site": "005f37c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ee0:8"
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
      "definition_site": "005f3820",
      "incomplete_value": true,
      "site": "005f3834",
      "value": [
        "LOAD",
        "16",
        [
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
                "register:4058:8"
              ],
              [
                "leaf",
                "const:970:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f37e0",
      "incomplete_value": true,
      "site": "005f37f4",
      "value": [
        "LOAD",
        "16",
        [
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
                "register:4058:8"
              ],
              [
                "leaf",
                "const:930:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 67,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f3838",
      "incomplete_value": true,
      "site": "005f3844",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:310:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f37f8",
      "incomplete_value": true,
      "site": "005f3804",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 69,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005f37f0",
      "READ",
      [
        "storage",
        "002c2ee0",
        null,
        null
      ]
    ],
    [
      "005f380c",
      "READ",
      [
        "storage",
        "002c2400",
        null,
        null
      ]
    ],
    [
      "005f3820",
      "READ",
      [
        "storage",
        "002c2930",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005f37f0",
      "READ",
      [
        "storage",
        "002c2f20",
        null,
        null
      ]
    ],
    [
      "005f380c",
      "READ",
      [
        "storage",
        "002c2440",
        null,
        null
      ]
    ],
    [
      "005f3820",
      "READ",
      [
        "storage",
        "002c2970",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005f32c8 ["INT_ADD", "register:40f0:8", ["const:5f32c8:8", "const:4:8"]]
- 005f32c8 ["CALL", null, ["callee:005e4f7c:8"]]
+ 005f3308 ["INT_ADD", "register:40f0:8", ["const:5f3308:8", "const:4:8"]]
+ 005f3308 ["CALL", null, ["callee:005e4f7c:8"]]
- 005f32d8 ["INT_ADD", "register:40f0:8", ["const:5f32d8:8", "const:4:8"]]
- 005f32d8 ["CALL", null, ["callee:005e0da8:8"]]
+ 005f3318 ["INT_ADD", "register:40f0:8", ["const:5f3318:8", "const:4:8"]]
+ 005f3318 ["CALL", null, ["callee:005e0da8:8"]]
- 005f3314 ["INT_ADD", "register:40f0:8", ["const:5f3314:8", "const:4:8"]]
- 005f3314 ["CALL", null, ["callee:00af3f08:8"]]
+ 005f3354 ["INT_ADD", "register:40f0:8", ["const:5f3354:8", "const:4:8"]]
+ 005f3354 ["CALL", null, ["callee:00af3f08:8"]]
~~~


<a id="compare-4138ac90794591600a15e5ba02895d44"></a>

### [`005f46ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f4/005f46ac.md) → [`005f46ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f4/005f46ec.md) FUN_005f46ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`0070e3ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070e3ac.md) · 呼出先 19件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467fac.md) [`00467ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ffc.md)
- 新版 呼出元 2件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070e404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e404.md) · 呼出先 19件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467fec.md) [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.09% / 新版 98.09%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f4ad0",
      "incomplete_value": true,
      "site": "005f4af0",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:338:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f4a90",
      "incomplete_value": true,
      "site": "005f4ab0",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:2f8:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f4750",
      "incomplete_value": false,
      "site": "005f4754",
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
      "definition_site": "005f4710",
      "incomplete_value": false,
      "site": "005f4714",
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
      "005f4750",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ],
    [
      "005f47a8",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ],
    [
      "005f47bc",
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
      "005f4750",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "005f47a8",
      "READ",
      [
        "storage",
        "00c9b578",
        null,
        "pointer"
      ]
    ],
    [
      "005f47bc",
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
- 005f4714 ["INT_ADD", "register:40f0:8", ["const:5f4714:8", "const:4:8"]]
- 005f4714 ["CALL", null, ["callee:0046cb9c:8"]]
+ 005f4754 ["INT_ADD", "register:40f0:8", ["const:5f4754:8", "const:4:8"]]
+ 005f4754 ["CALL", null, ["callee:0046cb9c:8"]]
- 005f4754 ["INT_ADD", "register:40f0:8", ["const:5f4754:8", "const:4:8"]]
- 005f4754 ["CALL", null, ["callee:0046ca04:8"]]
+ 005f4794 ["INT_ADD", "register:40f0:8", ["const:5f4794:8", "const:4:8"]]
+ 005f4794 ["CALL", null, ["callee:0046ca04:8"]]
- 005f4af0 ["INT_ADD", "register:40f0:8", ["const:5f4af0:8", "const:4:8"]]
- 005f4af0 ["CALL", null, ["callee:005e4e58:8"]]
+ 005f4b30 ["INT_ADD", "register:40f0:8", ["const:5f4b30:8", "const:4:8"]]
+ 005f4b30 ["CALL", null, ["callee:005e4e58:8"]]
~~~


<a id="compare-b7f63ee0b15ba03be1b4ef1f11299b37"></a>

### [`005f4d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f4/005f4d6c.md) → [`005f4dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f4/005f4dac.md) FUN_005f4dac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 9件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.28% / 新版 99.28%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f4df8",
      "incomplete_value": true,
      "site": "005f4dfc",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f4db8",
      "incomplete_value": true,
      "site": "005f4dbc",
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
            "const:c70:8"
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
      "005f4df8",
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
      "005f4df8",
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
- 005f4dbc ["INT_ADD", "register:40f0:8", ["const:5f4dbc:8", "const:4:8"]]
- 005f4dbc ["CALL", null, ["callee:0046cb9c:8"]]
+ 005f4dfc ["INT_ADD", "register:40f0:8", ["const:5f4dfc:8", "const:4:8"]]
+ 005f4dfc ["CALL", null, ["callee:0046cb9c:8"]]
- 005f4dac ["INT_ADD", "register:40f0:8", ["const:5f4dac:8", "const:4:8"]]
- 005f4dac ["CALL", null, ["callee:004678a0:8"]]
+ 005f4dec ["INT_ADD", "register:40f0:8", ["const:5f4dec:8", "const:4:8"]]
+ 005f4dec ["CALL", null, ["callee:004678a0:8"]]
- 005f4db8 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 005f4db8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005f4db8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005f4db8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005f4df8 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 005f4df8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005f4df8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005f4df8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2445c9fe1cbd98caa47227565c5c65b1"></a>

### [`005f5790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f5/005f5790.md) → [`005f57d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f5/005f57d0.md) FUN_005f57d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005f5230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f5/005f5230.md) · 呼出先 47件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467af0.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md)
- 新版 呼出元 1件 [`005f5270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f5/005f5270.md) · 呼出先 47件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 98.34% / 新版 98.34%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f5910",
      "incomplete_value": true,
      "site": "005f5920",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:490:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f58d0",
      "incomplete_value": true,
      "site": "005f58e0",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:450:8"
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
      "005f582c",
      "READ",
      [
        "storage",
        "00c9b4b0",
        null,
        "pointer"
      ]
    ],
    [
      "005f5834",
      "DATA",
      [
        "storage",
        "00ca3f80",
        null,
        "undefined4"
      ]
    ],
    [
      "005f5848",
      "READ",
      [
        "storage",
        "00c9b4a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005f582c",
      "READ",
      [
        "storage",
        "00c9b580",
        null,
        "pointer"
      ]
    ],
    [
      "005f5834",
      "DATA",
      [
        "storage",
        "00ca4050",
        null,
        "undefined4"
      ]
    ],
    [
      "005f5848",
      "READ",
      [
        "storage",
        "00c9b570",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005f58a0 ["INT_ADD", "register:40f0:8", ["const:5f58a0:8", "const:4:8"]]
- 005f58a0 ["CALL", null, ["callee:0046ca04:8"]]
+ 005f58e0 ["INT_ADD", "register:40f0:8", ["const:5f58e0:8", "const:4:8"]]
+ 005f58e0 ["CALL", null, ["callee:0046ca04:8"]]
- 005f57dc ["INT_ADD", "register:40f0:8", ["const:5f57dc:8", "const:4:8"]]
- 005f57dc ["CALL", null, ["callee:004678a0:8"]]
+ 005f581c ["INT_ADD", "register:40f0:8", ["const:5f581c:8", "const:4:8"]]
+ 005f581c ["CALL", null, ["callee:004678a0:8"]]
- 005f57ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:4b0:8"]]
- 005f57ec ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 005f582c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:580:8"]]
+ 005f582c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4121c2de28db4236049f4f63fab8d751"></a>

### [`005f65cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f6/005f65cc.md) → [`005f660c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f6/005f660c.md) FUN_005f660c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005f5790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f5/005f5790.md) · 呼出先 10件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`005b06cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b0/005b06cc.md) [`005e7a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7a28.md)
- 新版 呼出元 1件 [`005f57d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f5/005f57d0.md) · 呼出先 10件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005b070c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b070c.md) [`005e7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7a68.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.48% / 新版 93.48%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f6718",
      "incomplete_value": true,
      "site": "005f6728",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:82c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f66d8",
      "incomplete_value": true,
      "site": "005f66e8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:888:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f672c",
      "incomplete_value": true,
      "site": "005f672c",
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
      "definition_site": "005f66ec",
      "incomplete_value": true,
      "site": "005f66ec",
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
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f6720",
      "incomplete_value": true,
      "site": "005f6730",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005f66e0",
      "incomplete_value": true,
      "site": "005f66f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005f66e0",
      "READ",
      [
        "storage",
        "002c4118",
        null,
        "undefined8"
      ]
    ],
    [
      "005f6718",
      "READ",
      [
        "storage",
        "002a6888",
        null,
        "string"
      ]
    ],
    [
      "005f671c",
      "READ",
      [
        "storage",
        "002a6897",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005f66e0",
      "READ",
      [
        "storage",
        "002c4158",
        null,
        "undefined8"
      ]
    ],
    [
      "005f6718",
      "READ",
      [
        "storage",
        "002a682c",
        null,
        "string"
      ]
    ],
    [
      "005f671c",
      "READ",
      [
        "storage",
        "002a683b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005f6730 ["INT_ADD", "register:40f0:8", ["const:5f6730:8", "const:4:8"]]
- 005f6730 ["CALL", null, ["callee:00467b6c:8"]]
+ 005f6770 ["INT_ADD", "register:40f0:8", ["const:5f6770:8", "const:4:8"]]
+ 005f6770 ["CALL", null, ["callee:00467b6c:8"]]
- 005f661c ["INT_ADD", "register:40f0:8", ["const:5f661c:8", "const:4:8"]]
- 005f661c ["CALL", null, ["callee:005b070c:8"]]
+ 005f665c ["INT_ADD", "register:40f0:8", ["const:5f665c:8", "const:4:8"]]
+ 005f665c ["CALL", null, ["callee:005b070c:8"]]
- 005f6634 ["INT_ADD", "register:40f0:8", ["const:5f6634:8", "const:4:8"]]
- 005f6634 ["CALL", null, ["callee:005e7a68:8"]]
+ 005f6674 ["INT_ADD", "register:40f0:8", ["const:5f6674:8", "const:4:8"]]
+ 005f6674 ["CALL", null, ["callee:005e7a68:8"]]
~~~


<a id="compare-63a4c709c12fa0d5b376ab2801d6a4dc"></a>

### [`005f6c54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f6/005f6c54.md) → [`005f6c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f6/005f6c94.md) FUN_005f6c94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`0070e684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070e684.md) · 呼出先 8件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046cb5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb5c.md) [`0046cc1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cc1c.md)
- 新版 呼出元 2件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070e6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e6dc.md) · 呼出先 8件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb9c.md) [`0046cc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cc5c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.66% / 新版 98.66%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f6f38",
      "incomplete_value": true,
      "site": "005f6f3c",
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
      "definition_site": "005f6ef8",
      "incomplete_value": true,
      "site": "005f6efc",
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
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f70ec",
      "incomplete_value": true,
      "site": "005f70f0",
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
      "definition_site": "005f70ac",
      "incomplete_value": true,
      "site": "005f70b0",
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
    "ordinal": 30,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005f6f34",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "005f6f38",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ],
    [
      "005f6f4c",
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
      "005f6f34",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "005f6f38",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "005f6f4c",
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
- 005f6efc ["INT_ADD", "register:40f0:8", ["const:5f6efc:8", "const:4:8"]]
- 005f6efc ["CALL", null, ["callee:0046cb9c:8"]]
+ 005f6f3c ["INT_ADD", "register:40f0:8", ["const:5f6f3c:8", "const:4:8"]]
+ 005f6f3c ["CALL", null, ["callee:0046cb9c:8"]]
- 005f7070 ["INT_ADD", "register:40f0:8", ["const:5f7070:8", "const:4:8"]]
- 005f7070 ["CALL", null, ["callee:00468fc8:8"]]
+ 005f70b0 ["INT_ADD", "register:40f0:8", ["const:5f70b0:8", "const:4:8"]]
+ 005f70b0 ["CALL", null, ["callee:00468fc8:8"]]
- 005f70b0 ["INT_ADD", "register:40f0:8", ["const:5f70b0:8", "const:4:8"]]
- 005f70b0 ["CALL", null, ["callee:0046cb9c:8"]]
+ 005f70f0 ["INT_ADD", "register:40f0:8", ["const:5f70f0:8", "const:4:8"]]
+ 005f70f0 ["CALL", null, ["callee:0046cb9c:8"]]
~~~


<a id="compare-e656849ea111cb153885db25fbd668fb"></a>

### [`005f7130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f7/005f7130.md) → [`005f7170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f7170.md) FUN_005f7170

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`0070e518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070e518.md) · 呼出先 11件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046af18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af18.md) [`0046cb0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb0c.md)
- 新版 呼出元 2件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`0070e570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e570.md) · 呼出先 11件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.89% / 新版 97.89%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f7210",
      "incomplete_value": true,
      "site": "005f7214",
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
      "definition_site": "005f71d0",
      "incomplete_value": true,
      "site": "005f71d4",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f7350",
      "incomplete_value": true,
      "site": "005f735c",
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
      "definition_site": "005f7310",
      "incomplete_value": true,
      "site": "005f731c",
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
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005f74a4",
      "incomplete_value": true,
      "site": "005f74b0",
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
      "definition_site": "005f7464",
      "incomplete_value": true,
      "site": "005f7470",
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
    "ordinal": 27,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005f720c",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "005f7210",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ],
    [
      "005f7240",
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
      "005f720c",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "005f7210",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "005f7240",
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
- 005f71d4 ["INT_ADD", "register:40f0:8", ["const:5f71d4:8", "const:4:8"]]
- 005f71d4 ["CALL", null, ["callee:0046cb4c:8"]]
+ 005f7214 ["INT_ADD", "register:40f0:8", ["const:5f7214:8", "const:4:8"]]
+ 005f7214 ["CALL", null, ["callee:0046cb4c:8"]]
- 005f731c ["INT_ADD", "register:40f0:8", ["const:5f731c:8", "const:4:8"]]
- 005f731c ["CALL", null, ["callee:0046cb4c:8"]]
+ 005f735c ["INT_ADD", "register:40f0:8", ["const:5f735c:8", "const:4:8"]]
+ 005f735c ["CALL", null, ["callee:0046cb4c:8"]]
- 005f7470 ["INT_ADD", "register:40f0:8", ["const:5f7470:8", "const:4:8"]]
- 005f7470 ["CALL", null, ["callee:0046cb4c:8"]]
+ 005f74b0 ["INT_ADD", "register:40f0:8", ["const:5f74b0:8", "const:4:8"]]
+ 005f74b0 ["CALL", null, ["callee:0046cb4c:8"]]
~~~


<a id="compare-6a8b233771982ddaaf91e559a72eae60"></a>

### [`005f75a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f7/005f75a4.md) → [`005f75e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f75e4.md) FUN_005f75e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 8件 [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005e0d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0d68.md) [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 8件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e0da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0da8.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 95.43% / 新版 95.43%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_value` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f76b4",
      "incomplete_value": true,
      "site": "005f76bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:47f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f7674",
      "incomplete_value": true,
      "site": "005f767c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4cc:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "005f7634",
      "incomplete_value": true,
      "site": "005f7634",
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
      "definition_site": "005f75f4",
      "incomplete_value": true,
      "site": "005f75f4",
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
      "definition_site": "005f763c",
      "incomplete_value": false,
      "site": "005f764c",
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
      "definition_site": "005f75fc",
      "incomplete_value": false,
      "site": "005f760c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005f7624",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005f763c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005f7644",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005f7624",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005f763c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005f7644",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005f760c ["INT_ADD", "register:40f0:8", ["const:5f760c:8", "const:4:8"]]
- 005f760c ["CALL", null, ["callee:00c586e0:8"]]
+ 005f764c ["INT_ADD", "register:40f0:8", ["const:5f764c:8", "const:4:8"]]
+ 005f764c ["CALL", null, ["callee:00c586e0:8"]]
- 005f7738 ["INT_ADD", "register:40f0:8", ["const:5f7738:8", "const:4:8"]]
- 005f7738 ["CALL", null, ["callee:005e0da8:8"]]
+ 005f7778 ["INT_ADD", "register:40f0:8", ["const:5f7778:8", "const:4:8"]]
+ 005f7778 ["CALL", null, ["callee:005e0da8:8"]]
- 005f7778 ["INT_ADD", "register:40f0:8", ["const:5f7778:8", "const:4:8"]]
- 005f7778 ["CALL", null, ["ram:47acf4:8"]]
+ 005f77b8 ["INT_ADD", "register:40f0:8", ["const:5f77b8:8", "const:4:8"]]
+ 005f77b8 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-f4bd07dc4734703f3800e4eaf1d79266"></a>

### [`005f7940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f7/005f7940.md) → [`005f7980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f7980.md) FUN_005f7980

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005e0920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0920.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005e0960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0960.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.59% / 新版 97.59%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f7b4c",
      "incomplete_value": true,
      "site": "005f7b5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:43:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f7b0c",
      "incomplete_value": true,
      "site": "005f7b1c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f7bac",
      "incomplete_value": true,
      "site": "005f7bbc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f7b6c",
      "incomplete_value": true,
      "site": "005f7b7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dc4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f7e74",
      "incomplete_value": true,
      "site": "005f7e84",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f7e34",
      "incomplete_value": true,
      "site": "005f7e44",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dc4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 63,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005f7a60",
      "READ",
      [
        "storage",
        "00c9b470",
        null,
        "pointer"
      ]
    ],
    [
      "005f7a64",
      "READ",
      [
        "storage",
        "002c40e0",
        null,
        "undefined8"
      ]
    ],
    [
      "005f7aec",
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
      "005f7a60",
      "READ",
      [
        "storage",
        "00c9b540",
        null,
        "pointer"
      ]
    ],
    [
      "005f7a64",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ],
    [
      "005f7aec",
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
- 005f7ac4 ["INT_ADD", "register:40f0:8", ["const:5f7ac4:8", "const:4:8"]]
- 005f7ac4 ["CALL", null, ["callee:00c586e0:8"]]
+ 005f7b04 ["INT_ADD", "register:40f0:8", ["const:5f7b04:8", "const:4:8"]]
+ 005f7b04 ["CALL", null, ["callee:00c586e0:8"]]
- 005f7dec ["INT_ADD", "register:40f0:8", ["const:5f7dec:8", "const:4:8"]]
- 005f7dec ["CALL", null, ["callee:00c586e0:8"]]
+ 005f7e2c ["INT_ADD", "register:40f0:8", ["const:5f7e2c:8", "const:4:8"]]
+ 005f7e2c ["CALL", null, ["callee:00c586e0:8"]]
- 005f7a20 ["INT_ADD", "tmp:0:8", ["register:40e0:8", "const:470:8"]]
- 005f7a20 ["LOAD", "register:40e0:8", ["const:1b1:8", "tmp:0:8"]]
+ 005f7a60 ["INT_ADD", "tmp:0:8", ["register:40e0:8", "const:540:8"]]
+ 005f7a60 ["LOAD", "register:40e0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-782d35a499e10585a3a80bdd1badce65"></a>

### [`005f96b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f9/005f96b0.md) → [`005f96f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f9/005f96f0.md) FUN_005f96f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 17件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046dad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dad4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cddc.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 17件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce1c.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value, unresolved_store_alignment

命令の説明率　旧版 91.87% / 新版 91.87%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 1件, `store_value` 17件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f9980",
      "incomplete_value": true,
      "site": "005f9990",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:921:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f9940",
      "incomplete_value": true,
      "site": "005f9950",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:97d:8"
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
      "definition_site": "005f9994",
      "incomplete_value": true,
      "site": "005f9994",
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
      "definition_site": "005f9954",
      "incomplete_value": true,
      "site": "005f9954",
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
    "ordinal": 50,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005f99fc",
      "incomplete_value": true,
      "site": "005f9a08",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2bf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005f99bc",
      "incomplete_value": true,
      "site": "005f99c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:30c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005f9724",
      "DATA",
      [
        "storage",
        "00344430",
        null,
        "qword"
      ]
    ],
    [
      "005f9728",
      "DATA",
      [
        "storage",
        "00344428",
        null,
        "dword"
      ]
    ],
    [
      "005f976c",
      "READ",
      [
        "storage",
        "002c2450",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005f9724",
      "DATA",
      [
        "storage",
        "00344430",
        null,
        "byte[23]"
      ]
    ],
    [
      "005f9728",
      "DATA",
      [
        "storage",
        "00344428",
        null,
        "byte[23]"
      ]
    ],
    [
      "005f976c",
      "READ",
      [
        "storage",
        "002c2490",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005f986c ["INT_ADD", "register:40f0:8", ["const:5f986c:8", "const:4:8"]]
- 005f986c ["CALL", null, ["callee:00c58030:8"]]
+ 005f98ac ["INT_ADD", "register:40f0:8", ["const:5f98ac:8", "const:4:8"]]
+ 005f98ac ["CALL", null, ["callee:00c58030:8"]]
- 005f9a94 ["INT_ADD", "register:40f0:8", ["const:5f9a94:8", "const:4:8"]]
- 005f9a94 ["CALL", null, ["callee:00c57f80:8"]]
+ 005f9ad4 ["INT_ADD", "register:40f0:8", ["const:5f9ad4:8", "const:4:8"]]
+ 005f9ad4 ["CALL", null, ["callee:00c57f80:8"]]
- 005f9b18 ["INT_ADD", "register:40f0:8", ["const:5f9b18:8", "const:4:8"]]
- 005f9b18 ["CALL", null, ["callee:00936618:8"]]
+ 005f9b58 ["INT_ADD", "register:40f0:8", ["const:5f9b58:8", "const:4:8"]]
+ 005f9b58 ["CALL", null, ["callee:00936618:8"]]
~~~


<a id="compare-f3bcaca72794d2ed7531cc0c75cfd614"></a>

### [`005fb338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb338.md) → [`005fb378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb378.md) FUN_005fb378

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 2件 [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 2件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005fb390",
      "incomplete_value": true,
      "site": "005fb390",
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
      "definition_site": "005fb350",
      "incomplete_value": true,
      "site": "005fb350",
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
      "005fb38c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005fb398",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005fb3a0",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005fb38c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005fb398",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005fb3a0",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005fb34c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 005fb34c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005fb38c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 005fb38c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005fb358 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 005fb358 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 005fb358 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 005fb358 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 005fb398 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 005fb398 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 005fb398 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 005fb398 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 005fb360 ["COPY", "tmp:0:8", ["const:978:8"]]
- 005fb360 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 005fb360 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 005fb360 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 005fb3a0 ["COPY", "tmp:0:8", ["const:a48:8"]]
+ 005fb3a0 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 005fb3a0 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 005fb3a0 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-17f29d8031fa98916821377c4a4c0ac7"></a>

### [`005fb93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb93c.md) → [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) FUN_005fb97c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005fb440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb440.md) · 呼出先 52件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md)
- 新版 呼出元 1件 [`005fb480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb480.md) · 呼出先 52件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.50% / 新版 98.50%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fbccc",
      "incomplete_value": false,
      "site": "005fbcd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:2bd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005fbc8c",
      "incomplete_value": false,
      "site": "005fbc94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:27d:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fbda4",
      "incomplete_value": false,
      "site": "005fbdb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:2bd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005fbd64",
      "incomplete_value": false,
      "site": "005fbd70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b6000:8"
          ],
          [
            "leaf",
            "const:27d:8"
          ]
        ]
      ]
    },
    "ordinal": 38,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fbe84",
      "incomplete_value": true,
      "site": "005fbe8c",
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
            "const:339:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005fbe44",
      "incomplete_value": true,
      "site": "005fbe4c",
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
            "const:38d:8"
          ]
        ]
      ]
    },
    "ordinal": 50,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005fbbb8",
      "READ",
      [
        "storage",
        "002c40e0",
        null,
        "undefined8"
      ]
    ],
    [
      "005fbc0c",
      "READ",
      [
        "storage",
        "002c40e0",
        null,
        "undefined8"
      ]
    ],
    [
      "005fbccc",
      "PARAM",
      [
        "storage",
        "002b627d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005fbbb8",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ],
    [
      "005fbc0c",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ],
    [
      "005fbccc",
      "PARAM",
      [
        "storage",
        "002b62bd",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005fbc54 ["INT_ADD", "register:40f0:8", ["const:5fbc54:8", "const:4:8"]]
- 005fbc54 ["CALL", null, ["callee:00af52a8:8"]]
+ 005fbc94 ["INT_ADD", "register:40f0:8", ["const:5fbc94:8", "const:4:8"]]
+ 005fbc94 ["CALL", null, ["callee:00af52a8:8"]]
- 005fbc94 ["INT_ADD", "register:40f0:8", ["const:5fbc94:8", "const:4:8"]]
- 005fbc94 ["CALL", null, ["callee:00c58180:8"]]
+ 005fbcd4 ["INT_ADD", "register:40f0:8", ["const:5fbcd4:8", "const:4:8"]]
+ 005fbcd4 ["CALL", null, ["callee:00c58180:8"]]
- 005fbd70 ["INT_ADD", "register:40f0:8", ["const:5fbd70:8", "const:4:8"]]
- 005fbd70 ["CALL", null, ["callee:00c58180:8"]]
+ 005fbdb0 ["INT_ADD", "register:40f0:8", ["const:5fbdb0:8", "const:4:8"]]
+ 005fbdb0 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-89c6585ecb4b3dfd98c3b79ffc8708d3"></a>

### [`005fc3a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fc/005fc3a0.md) → [`005fc3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fc/005fc3e0.md) FUN_005fc3e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 30件 [`004675e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/004675e8.md) [`00467604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467604.md) [`00467650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467650.md) [`00467780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467780.md) [`004677e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/004677e0.md)
- 新版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 30件 [`00467628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467628.md) [`00467644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467644.md) [`00467690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467690.md) [`004677c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004677c0.md) [`00467820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467820.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.17% / 新版 98.17%

優先判定に残った影響 `call_target` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fc584",
      "value": [
        "leaf",
        "ram:467628:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fc544",
      "value": [
        "leaf",
        "ram:4675e8:8"
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
      "site": "005fc58c",
      "value": [
        "leaf",
        "ram:467628:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fc54c",
      "value": [
        "leaf",
        "ram:4675e8:8"
      ]
    },
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fc594",
      "value": [
        "leaf",
        "ram:467628:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fc554",
      "value": [
        "leaf",
        "ram:4675e8:8"
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
      "005fc444",
      "READ",
      [
        "storage",
        "00c9b470",
        null,
        "pointer"
      ]
    ],
    [
      "005fc46c",
      "READ",
      [
        "storage",
        "00ca43e8",
        null,
        "undefined4"
      ]
    ],
    [
      "005fc584",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "004675e8"
      ]
    ]
  ],
  "added": [
    [
      "005fc444",
      "READ",
      [
        "storage",
        "00c9b540",
        null,
        "pointer"
      ]
    ],
    [
      "005fc46c",
      "READ",
      [
        "storage",
        "00ca44b8",
        null,
        "undefined4"
      ]
    ],
    [
      "005fc584",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00467628"
      ]
    ]
  ]
}
~~~


~~~diff
- 005fc544 ["INT_ADD", "register:40f0:8", ["const:5fc544:8", "const:4:8"]]
- 005fc544 ["CALL", null, ["ram:4675e8:8"]]
+ 005fc584 ["INT_ADD", "register:40f0:8", ["const:5fc584:8", "const:4:8"]]
+ 005fc584 ["CALL", null, ["ram:467628:8"]]
- 005fc54c ["INT_ADD", "register:40f0:8", ["const:5fc54c:8", "const:4:8"]]
- 005fc54c ["CALL", null, ["ram:4675e8:8"]]
+ 005fc58c ["INT_ADD", "register:40f0:8", ["const:5fc58c:8", "const:4:8"]]
+ 005fc58c ["CALL", null, ["ram:467628:8"]]
- 005fc554 ["INT_ADD", "register:40f0:8", ["const:5fc554:8", "const:4:8"]]
- 005fc554 ["CALL", null, ["ram:4675e8:8"]]
+ 005fc594 ["INT_ADD", "register:40f0:8", ["const:5fc594:8", "const:4:8"]]
+ 005fc594 ["CALL", null, ["ram:467628:8"]]
~~~


<a id="compare-d4a08192ea588e2df5b9041381202b1f"></a>

### [`005fdc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fd/005fdc58.md) → [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) FUN_005fdc98

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00718774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00718/00718774.md) · 呼出先 28件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005e0f90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0f90.md) [`005e1b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1b18.md) [`005e1b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1b30.md)
- 新版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007187cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00718/007187cc.md) · 呼出先 28件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e0fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0fd0.md) [`005e1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b58.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.49% / 新版 97.49%

優先判定に残った影響 `call_target` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fdcd4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fdc94",
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
      "site": "005fdd38",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fdcf8",
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
      "site": "005fdd58",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005fdd18",
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
      "005fdcd4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005fdd38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005fdd58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005fdcd4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005fdd38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005fdd58",
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
- 005fdc94 ["INT_ADD", "register:40f0:8", ["const:5fdc94:8", "const:4:8"]]
- 005fdc94 ["CALL", null, ["ram:47acf4:8"]]
+ 005fdcd4 ["INT_ADD", "register:40f0:8", ["const:5fdcd4:8", "const:4:8"]]
+ 005fdcd4 ["CALL", null, ["ram:47ad34:8"]]
- 005fdcd4 ["INT_ADD", "register:40f0:8", ["const:5fdcd4:8", "const:4:8"]]
- 005fdcd4 ["CALL", null, ["callee:00af2da4:8"]]
+ 005fdd14 ["INT_ADD", "register:40f0:8", ["const:5fdd14:8", "const:4:8"]]
+ 005fdd14 ["CALL", null, ["callee:00af2da4:8"]]
- 005fdcf8 ["INT_ADD", "register:40f0:8", ["const:5fdcf8:8", "const:4:8"]]
- 005fdcf8 ["CALL", null, ["ram:47acf4:8"]]
+ 005fdd38 ["INT_ADD", "register:40f0:8", ["const:5fdd38:8", "const:4:8"]]
+ 005fdd38 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-1e055aa1ee5dafb4714c081a518f69e3"></a>

### [`005fe234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe234.md) → [`005fe274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe274.md) FUN_005fe274

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005f7940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f7/005f7940.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005f7980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f7980.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fe280",
      "incomplete_value": false,
      "site": "005fe284",
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
      "definition_site": "005fe240",
      "incomplete_value": false,
      "site": "005fe244",
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
      "005fe280",
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
      "005fe280",
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
- 005fe244 ["INT_ADD", "register:40f0:8", ["const:5fe244:8", "const:4:8"]]
- 005fe244 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005fe284 ["INT_ADD", "register:40f0:8", ["const:5fe284:8", "const:4:8"]]
+ 005fe284 ["CALL", null, ["callee:0043b7b8:8"]]
- 005fe240 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005fe240 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005fe240 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005fe240 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005fe280 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005fe280 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe280 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe280 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a73a6dc5e33dd8144b067450579ec965"></a>

### [`005fe248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe248.md) → [`005fe288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe288.md) FUN_005fe288

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`005f8820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f8/005f8820.md) [`005f8c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f8/005f8c94.md) [`005f8e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f8/005f8e80.md) [`00713358`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`0071425c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 8件 [`005f8860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8860.md) [`005f8cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8cd4.md) [`005f8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8ec0.md) [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fe294",
      "incomplete_value": false,
      "site": "005fe298",
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
      "definition_site": "005fe254",
      "incomplete_value": false,
      "site": "005fe258",
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
      "005fe294",
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
      "005fe294",
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
- 005fe258 ["INT_ADD", "register:40f0:8", ["const:5fe258:8", "const:4:8"]]
- 005fe258 ["CALL", null, ["callee:00442970:8"]]
+ 005fe298 ["INT_ADD", "register:40f0:8", ["const:5fe298:8", "const:4:8"]]
+ 005fe298 ["CALL", null, ["callee:00442970:8"]]
- 005fe254 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005fe254 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005fe254 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005fe254 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005fe294 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005fe294 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe294 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe294 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6d732fd3820610c82b47f95ffd1f4da2"></a>

### [`005fe25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe25c.md) → [`005fe29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe29c.md) FUN_005fe29c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005f8e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f8/005f8e80.md) [`00713358`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00713/00713358.md) [`00714124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/00714124.md) [`0071425c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00714/0071425c.md) [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 5件 [`005f8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f8/005f8ec0.md) [`007133b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00713/007133b0.md) [`0071417c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/0071417c.md) [`007142b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00714/007142b4.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fe2a8",
      "incomplete_value": false,
      "site": "005fe2ac",
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
      "definition_site": "005fe268",
      "incomplete_value": false,
      "site": "005fe26c",
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
      "005fe2a8",
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
      "005fe2a8",
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
- 005fe26c ["INT_ADD", "register:40f0:8", ["const:5fe26c:8", "const:4:8"]]
- 005fe26c ["CALL", null, ["callee:0043b7b8:8"]]
+ 005fe2ac ["INT_ADD", "register:40f0:8", ["const:5fe2ac:8", "const:4:8"]]
+ 005fe2ac ["CALL", null, ["callee:0043b7b8:8"]]
- 005fe268 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005fe268 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005fe268 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005fe268 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005fe2a8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005fe2a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe2a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe2a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8b899cb4d9ce8cd8a2d1f1dd3c56802e"></a>

### [`005fe270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe270.md) → [`005fe2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe2b0.md) FUN_005fe2b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005f954c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f9/005f954c.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`005f958c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f9/005f958c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fe2bc",
      "incomplete_value": false,
      "site": "005fe2c0",
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
      "definition_site": "005fe27c",
      "incomplete_value": false,
      "site": "005fe280",
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
      "005fe2bc",
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
      "005fe2bc",
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
- 005fe280 ["INT_ADD", "register:40f0:8", ["const:5fe280:8", "const:4:8"]]
- 005fe280 ["CALL", null, ["callee:00442970:8"]]
+ 005fe2c0 ["INT_ADD", "register:40f0:8", ["const:5fe2c0:8", "const:4:8"]]
+ 005fe2c0 ["CALL", null, ["callee:00442970:8"]]
- 005fe27c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005fe27c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005fe27c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005fe27c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005fe2bc ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005fe2bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe2bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe2bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cc8629adc42b6cf2bfccca6810381e55"></a>

### [`005fe284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe284.md) → [`005fe2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe2c4.md) FUN_005fe2c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005f96b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f9/005f96b0.md) [`005fa4f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fa/005fa4f8.md) [`00715400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715400.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 3件 [`005f96f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f9/005f96f0.md) [`005fa538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fa/005fa538.md) [`00715458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715458.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005fe2d0",
      "incomplete_value": true,
      "site": "005fe2d4",
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
      "definition_site": "005fe290",
      "incomplete_value": true,
      "site": "005fe294",
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
      "005fe2d0",
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
      "005fe2d0",
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
- 005fe294 ["INT_ADD", "register:40f0:8", ["const:5fe294:8", "const:4:8"]]
- 005fe294 ["CALL", null, ["callee:00442970:8"]]
+ 005fe2d4 ["INT_ADD", "register:40f0:8", ["const:5fe2d4:8", "const:4:8"]]
+ 005fe2d4 ["CALL", null, ["callee:00442970:8"]]
- 005fe290 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005fe290 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005fe290 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005fe290 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005fe2d0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005fe2d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe2d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005fe2d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-75c0ddd9a6fdff4b5be08590dd44c683"></a>

### [`005fe2dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe2dc.md) → [`005fe31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe31c.md) _INIT_76

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 84.18% / 新版 84.18%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005fe358",
      "incomplete_value": true,
      "site": "005fe374",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005fe318",
      "incomplete_value": true,
      "site": "005fe334",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005fe37c",
      "incomplete_value": true,
      "site": "005fe398",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005fe33c",
      "incomplete_value": true,
      "site": "005fe358",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005fe39c",
      "incomplete_value": true,
      "site": "005fe3b8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005fe35c",
      "incomplete_value": true,
      "site": "005fe378",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005fe358",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005fe37c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005fe39c",
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
      "005fe358",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005fe37c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005fe39c",
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
- 005fe354 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005fe354 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005fe354 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005fe354 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005fe394 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005fe394 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005fe394 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005fe394 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005fe374 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005fe374 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005fe374 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005fe374 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005fe3b4 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005fe3b4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005fe3b4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005fe3b4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005fe464 ["INT_ADD", "register:40f0:8", ["const:5fe464:8", "const:4:8"]]
- 005fe464 ["CALL", null, ["callee:0043b838:8"]]
+ 005fe4a4 ["INT_ADD", "register:40f0:8", ["const:5fe4a4:8", "const:4:8"]]
+ 005fe4a4 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-7a92cdf66cd6a22a79467b489c7152c9"></a>

### [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) → [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) FUN_005fe6ac

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 188件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md)
- 新版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 188件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.08% / 新版 99.08%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 21件, `store_value` 11件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006008d8",
      "incomplete_value": false,
      "site": "006008d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ae000:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00600898",
      "incomplete_value": false,
      "site": "00600898",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ae000:8"
          ],
          [
            "leaf",
            "const:af4:8"
          ]
        ]
      ]
    },
    "ordinal": 350,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00600904",
      "incomplete_value": false,
      "site": "00600904",
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
            "const:5ae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006008c4",
      "incomplete_value": false,
      "site": "006008c4",
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
            "const:56e:8"
          ]
        ]
      ]
    },
    "ordinal": 354,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00600930",
      "incomplete_value": true,
      "site": "00600930",
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
            "const:e79:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006008f0",
      "incomplete_value": true,
      "site": "006008f0",
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
            "const:e48:8"
          ]
        ]
      ]
    },
    "ordinal": 355,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005fe810",
      "READ",
      [
        "storage",
        "002b629c",
        null,
        "string"
      ]
    ],
    [
      "005fe998",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "005feb34",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005fe810",
      "READ",
      [
        "storage",
        "002b62dc",
        null,
        "string"
      ]
    ],
    [
      "005fe998",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "005feb34",
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
- 005fe918 ["INT_ADD", "register:40f0:8", ["const:5fe918:8", "const:4:8"]]
- 005fe918 ["CALL", null, ["callee:005c17dc:8"]]
+ 005fe958 ["INT_ADD", "register:40f0:8", ["const:5fe958:8", "const:4:8"]]
+ 005fe958 ["CALL", null, ["callee:005c17dc:8"]]
- 005fe958 ["INT_ADD", "register:40f0:8", ["const:5fe958:8", "const:4:8"]]
- 005fe958 ["CALL", null, ["ram:71bed8:8"]]
+ 005fe998 ["INT_ADD", "register:40f0:8", ["const:5fe998:8", "const:4:8"]]
+ 005fe998 ["CALL", null, ["ram:71bf30:8"]]
- 005feaf4 ["INT_ADD", "register:40f0:8", ["const:5feaf4:8", "const:4:8"]]
- 005feaf4 ["CALL", null, ["ram:47acf4:8"]]
+ 005feb34 ["INT_ADD", "register:40f0:8", ["const:5feb34:8", "const:4:8"]]
+ 005feb34 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-eaa1ddfb4c457d846a68ae6e6d0cfbbd"></a>

### [`006051a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/006051a4.md) → [`006051e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/006051e4.md) FUN_006051e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) · 呼出先 4件 [`00616158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00616/00616158.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 4件 [`00616198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616198.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00605218",
      "incomplete_value": true,
      "site": "0060521c",
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
      "definition_site": "006051d8",
      "incomplete_value": true,
      "site": "006051dc",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0060525c",
      "incomplete_value": true,
      "site": "00605260",
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
      "definition_site": "0060521c",
      "incomplete_value": true,
      "site": "00605220",
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
      "00605210",
      "READ",
      [
        "storage",
        "00c9b370",
        null,
        "pointer"
      ]
    ],
    [
      "0060521c",
      "DATA",
      [
        "storage",
        "00c8b7b0",
        null,
        "undefined *"
      ]
    ],
    [
      "00605254",
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
      "00605210",
      "READ",
      [
        "storage",
        "00c9b440",
        null,
        "pointer"
      ]
    ],
    [
      "0060521c",
      "DATA",
      [
        "storage",
        "00c8b880",
        null,
        "undefined *"
      ]
    ],
    [
      "00605254",
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
- 006051d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:370:8"]]
- 006051d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00605210 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:440:8"]]
+ 00605210 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006051ec ["INT_ADD", "register:40f0:8", ["const:6051ec:8", "const:4:8"]]
- 006051ec ["CALL", null, ["callee:00c53da0:8"]]
+ 0060522c ["INT_ADD", "register:40f0:8", ["const:60522c:8", "const:4:8"]]
+ 0060522c ["CALL", null, ["callee:00c53da0:8"]]
- 00605200 ["COPY", "register:0:8", ["register:4040:8"]]
- 00605200 ["INT_ADD", "register:40f0:8", ["const:605200:8", "const:4:8"]]
- 00605200 ["CALLIND", null, ["register:0:8"]]
+ 00605240 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00605240 ["INT_ADD", "register:40f0:8", ["const:605240:8", "const:4:8"]]
+ 00605240 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0818ea683be144caa0a5247ebf80cbf4"></a>

### [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) → [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) FUN_00605294

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 61件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046cc74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cc74.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 61件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046ccb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ccb4.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.22% / 新版 99.22%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 5件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006061f0",
      "incomplete_value": true,
      "site": "00606200",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:1d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006061b0",
      "incomplete_value": true,
      "site": "006061c0",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:198:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 208,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0060539c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0060535c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0060562c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006055ec",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0060539c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0060562c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00605658",
      "READ",
      [
        "storage",
        "002c4300",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0060539c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0060562c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00605658",
      "READ",
      [
        "storage",
        "002c4340",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0060535c ["INT_ADD", "register:40f0:8", ["const:60535c:8", "const:4:8"]]
- 0060535c ["CALL", null, ["ram:47acf4:8"]]
+ 0060539c ["INT_ADD", "register:40f0:8", ["const:60539c:8", "const:4:8"]]
+ 0060539c ["CALL", null, ["ram:47ad34:8"]]
- 006055ec ["INT_ADD", "register:40f0:8", ["const:6055ec:8", "const:4:8"]]
- 006055ec ["CALL", null, ["ram:47acf4:8"]]
+ 0060562c ["INT_ADD", "register:40f0:8", ["const:60562c:8", "const:4:8"]]
+ 0060562c ["CALL", null, ["ram:47ad34:8"]]
- 006059d0 ["INT_ADD", "register:40f0:8", ["const:6059d0:8", "const:4:8"]]
- 006059d0 ["CALL", null, ["ram:47acf4:8"]]
+ 00605a10 ["INT_ADD", "register:40f0:8", ["const:605a10:8", "const:4:8"]]
+ 00605a10 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-3fed9d17aa2a48206d88efceb850be7f"></a>

### [`006064d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/006064d4.md) → [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) FUN_00606514

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 22件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046cb5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb5c.md) [`0046cc74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cc74.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`00616158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00616/00616158.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 22件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb9c.md) [`0046ccb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ccb4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00616198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616198.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.01% / 新版 97.01%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00606914",
      "incomplete_value": false,
      "site": "00606914",
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
            "const:e18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006068d4",
      "incomplete_value": false,
      "site": "006068d4",
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
            "const:d48:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00606554",
      "incomplete_value": true,
      "site": "00606554",
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
      "definition_site": "00606514",
      "incomplete_value": true,
      "site": "00606514",
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
      "definition_site": "0060655c",
      "incomplete_value": false,
      "site": "0060656c",
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
      "definition_site": "0060651c",
      "incomplete_value": false,
      "site": "0060652c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00606550",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0060655c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00606564",
      "PARAM",
      [
        "storage",
        "00c71978",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00606550",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0060655c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00606564",
      "PARAM",
      [
        "storage",
        "00c71a48",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0060652c ["INT_ADD", "register:40f0:8", ["const:60652c:8", "const:4:8"]]
- 0060652c ["CALL", null, ["callee:00c586e0:8"]]
+ 0060656c ["INT_ADD", "register:40f0:8", ["const:60656c:8", "const:4:8"]]
+ 0060656c ["CALL", null, ["callee:00c586e0:8"]]
- 00606574 ["INT_ADD", "register:40f0:8", ["const:606574:8", "const:4:8"]]
- 00606574 ["CALL", null, ["callee:0046cb9c:8"]]
+ 006065b4 ["INT_ADD", "register:40f0:8", ["const:6065b4:8", "const:4:8"]]
+ 006065b4 ["CALL", null, ["callee:0046cb9c:8"]]
- 006065b4 ["INT_ADD", "register:40f0:8", ["const:6065b4:8", "const:4:8"]]
- 006065b4 ["CALL", null, ["callee:00a46950:8"]]
+ 006065f4 ["INT_ADD", "register:40f0:8", ["const:6065f4:8", "const:4:8"]]
+ 006065f4 ["CALL", null, ["callee:00a46950:8"]]
~~~


<a id="compare-d8c83333878f1327fa356bad7e02956d"></a>

### [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) → [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) FUN_00606b24

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 149件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 149件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.54% / 新版 94.54%

優先判定に残った影響 `call_argument_candidate` 42件, `call_target` 21件, `store_value` 31件

アドレスに依存する影響 `branch_value` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00606c48",
      "incomplete_value": true,
      "site": "00606c54",
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
                "const:f80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00606c08",
      "incomplete_value": true,
      "site": "00606c14",
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
                "const:f40:8"
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
      "definition_site": "00606d00",
      "incomplete_value": true,
      "site": "00606d04",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:f90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00606cc0",
      "incomplete_value": true,
      "site": "00606cc4",
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
                "register:4040:8"
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
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00606ea0",
      "incomplete_value": false,
      "site": "00606ea0",
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
            "const:f98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00606e60",
      "incomplete_value": false,
      "site": "00606e60",
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
            "const:ec8:8"
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00606ba0",
      "DATA",
      [
        "storage",
        "003c764c",
        "fde_003c764c",
        "dword"
      ]
    ],
    [
      "00606bb0",
      "DATA",
      [
        "storage",
        "003c764c",
        "fde_003c764c",
        "dword"
      ]
    ],
    [
      "00606c48",
      "READ",
      [
        "storage",
        "002c3f40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00606ba0",
      "DATA",
      [
        "storage",
        "003c764c",
        null,
        "dword"
      ]
    ],
    [
      "00606bb0",
      "DATA",
      [
        "storage",
        "003c764c",
        null,
        "dword"
      ]
    ],
    [
      "00606c48",
      "READ",
      [
        "storage",
        "002c3f80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00606c54 ["INT_ADD", "register:40f0:8", ["const:606c54:8", "const:4:8"]]
- 00606c54 ["CALL", null, ["callee:00859ba4:8"]]
+ 00606c94 ["INT_ADD", "register:40f0:8", ["const:606c94:8", "const:4:8"]]
+ 00606c94 ["CALL", null, ["callee:00859ba4:8"]]
- 00606ea0 ["INT_ADD", "register:40f0:8", ["const:606ea0:8", "const:4:8"]]
- 00606ea0 ["CALL", null, ["callee:008b9624:8"]]
+ 00606ee0 ["INT_ADD", "register:40f0:8", ["const:606ee0:8", "const:4:8"]]
+ 00606ee0 ["CALL", null, ["callee:008b9624:8"]]
- 00607020 ["COPY", "tmp:0:8", ["const:324:8"]]
- 00607020 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00607020 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00607020 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00607060 ["COPY", "tmp:0:8", ["const:2d7:8"]]
+ 00607060 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00607060 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00607060 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-0cd1083fde04eec101bb80f5875159d4"></a>

### [`0060a8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060a/0060a8a0.md) → [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) FUN_0060a8e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 37件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md)
- 新版 呼出元 2件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 37件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.11% / 新版 97.11%

優先判定に残った影響 `call_argument_candidate` 23件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0060a94c",
      "incomplete_value": true,
      "site": "0060a94c",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:6c9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0060a90c",
      "incomplete_value": true,
      "site": "0060a90c",
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
                "const:2ab000:8"
              ],
              [
                "leaf",
                "const:725:8"
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
      "definition_site": "0060a994",
      "incomplete_value": true,
      "site": "0060a994",
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
                "const:b27:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0060a954",
      "incomplete_value": true,
      "site": "0060a954",
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
                "const:b7b:8"
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
      "definition_site": "0060a9e4",
      "incomplete_value": true,
      "site": "0060a9e4",
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
                "const:4cc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0060a9a4",
      "incomplete_value": true,
      "site": "0060a9a4",
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
                "const:520:8"
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
      "0060a938",
      "READ",
      [
        "storage",
        "002ab725",
        null,
        "string"
      ]
    ],
    [
      "0060a980",
      "READ",
      [
        "storage",
        "002bdb7b",
        null,
        "string"
      ]
    ],
    [
      "0060a9c0",
      "DATA",
      [
        "storage",
        "0039b19c",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "0060a938",
      "READ",
      [
        "storage",
        "002ab6c9",
        null,
        "string"
      ]
    ],
    [
      "0060a980",
      "READ",
      [
        "storage",
        "002bdb27",
        null,
        "string"
      ]
    ],
    [
      "0060a9c0",
      "DATA",
      [
        "storage",
        "0039b19c",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 0060a964 ["INT_ADD", "register:40f0:8", ["const:60a964:8", "const:4:8"]]
- 0060a964 ["CALL", null, ["callee:0048ce94:8"]]
+ 0060a9a4 ["INT_ADD", "register:40f0:8", ["const:60a9a4:8", "const:4:8"]]
+ 0060a9a4 ["CALL", null, ["callee:0048ce94:8"]]
- 0060b1cc ["INT_ADD", "register:40f0:8", ["const:60b1cc:8", "const:4:8"]]
- 0060b1cc ["CALL", null, ["callee:0060dd0c:8"]]
+ 0060b20c ["INT_ADD", "register:40f0:8", ["const:60b20c:8", "const:4:8"]]
+ 0060b20c ["CALL", null, ["callee:0060dd0c:8"]]
- 0060b34c ["INT_ADD", "register:40f0:8", ["const:60b34c:8", "const:4:8"]]
- 0060b34c ["CALL", null, ["callee:0043de18:8"]]
+ 0060b38c ["INT_ADD", "register:40f0:8", ["const:60b38c:8", "const:4:8"]]
+ 0060b38c ["CALL", null, ["callee:0043de18:8"]]
~~~


<a id="compare-1578d1d22befd4dc0e1c783772606225"></a>

### [`0060d624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060d/0060d624.md) → [`0060d664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060d/0060d664.md) FUN_0060d664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`00615748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00615/00615748.md) [`0071d134`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d134.md)
- 新版 呼出元 2件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00615788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615788.md) [`0071d18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d18c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.54% / 新版 95.54%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0060d69c",
      "incomplete_value": true,
      "site": "0060d6b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dbd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0060d65c",
      "incomplete_value": true,
      "site": "0060d674",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e19:8"
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
      "definition_site": "0060d6b8",
      "incomplete_value": true,
      "site": "0060d6b8",
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
      "definition_site": "0060d678",
      "incomplete_value": true,
      "site": "0060d678",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0060d780",
      "incomplete_value": true,
      "site": "0060d78c",
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
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:e88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0060d740",
      "incomplete_value": true,
      "site": "0060d74c",
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
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:e59:8"
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
      "0060d69c",
      "READ",
      [
        "storage",
        "002b0e19",
        null,
        "string"
      ]
    ],
    [
      "0060d6a0",
      "READ",
      [
        "storage",
        "002b0e27",
        null,
        "string"
      ]
    ],
    [
      "0060d780",
      "READ",
      [
        "storage",
        "002a8e59",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0060d69c",
      "READ",
      [
        "storage",
        "002b0dbd",
        null,
        "string"
      ]
    ],
    [
      "0060d6a0",
      "READ",
      [
        "storage",
        "002b0dcb",
        null,
        "string"
      ]
    ],
    [
      "0060d780",
      "READ",
      [
        "storage",
        "002a8e88",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0060d650 ["COPY", "tmp:0:8", ["const:e19:8"]]
- 0060d650 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0060d650 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0060d650 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0060d690 ["COPY", "tmp:0:8", ["const:dbd:8"]]
+ 0060d690 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0060d690 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0060d690 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0060d68c ["INT_ADD", "register:40f0:8", ["const:60d68c:8", "const:4:8"]]
- 0060d68c ["CALL", null, ["callee:0048ce94:8"]]
+ 0060d6cc ["INT_ADD", "register:40f0:8", ["const:60d6cc:8", "const:4:8"]]
+ 0060d6cc ["CALL", null, ["callee:0048ce94:8"]]
- 0060d69c ["INT_ADD", "register:40f0:8", ["const:60d69c:8", "const:4:8"]]
- 0060d69c ["CALL", null, ["callee:00c57f80:8"]]
+ 0060d6dc ["INT_ADD", "register:40f0:8", ["const:60d6dc:8", "const:4:8"]]
+ 0060d6dc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c519d44933868647b183b49d10f05f77"></a>

### [`0060e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060e0c4.md) → [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) FUN_0060e104

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`006170ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00617/006170ac.md) [`00934604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00934/00934604.md) · 呼出先 37件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 4件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`006170ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006170ec.md) [`00934658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934658.md) · 呼出先 37件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.28% / 新版 96.28%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0060e4e0",
      "incomplete_value": true,
      "site": "0060e4f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:367:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0060e4a0",
      "incomplete_value": true,
      "site": "0060e4b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3bb:8"
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
      "definition_site": "0060e4e4",
      "incomplete_value": true,
      "site": "0060e4f8",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "0060e4a4",
      "incomplete_value": true,
      "site": "0060e4b8",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0060e4e8",
      "incomplete_value": true,
      "site": "0060e4fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0060e4a8",
      "incomplete_value": true,
      "site": "0060e4bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0060e220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00804074"
      ]
    ],
    [
      "0060e2dc",
      "DATA",
      [
        "storage",
        "0039b810",
        null,
        "byte[43]"
      ]
    ],
    [
      "0060e33c",
      "DATA",
      [
        "storage",
        "0039b810",
        null,
        "byte[43]"
      ]
    ]
  ],
  "added": [
    [
      "0060e220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008040cc"
      ]
    ],
    [
      "0060e2dc",
      "DATA",
      [
        "storage",
        "0039b810",
        null,
        "byte[31]"
      ]
    ],
    [
      "0060e33c",
      "DATA",
      [
        "storage",
        "0039b810",
        null,
        "byte[31]"
      ]
    ]
  ]
}
~~~


~~~diff
- 0060e1a0 ["INT_ADD", "register:40f0:8", ["const:60e1a0:8", "const:4:8"]]
- 0060e1a0 ["CALL", null, ["callee:00805744:8"]]
+ 0060e1e0 ["INT_ADD", "register:40f0:8", ["const:60e1e0:8", "const:4:8"]]
+ 0060e1e0 ["CALL", null, ["callee:00805744:8"]]
- 0060e1e0 ["INT_ADD", "register:40f0:8", ["const:60e1e0:8", "const:4:8"]]
- 0060e1e0 ["CALL", null, ["ram:804074:8"]]
+ 0060e220 ["INT_ADD", "register:40f0:8", ["const:60e220:8", "const:4:8"]]
+ 0060e220 ["CALL", null, ["ram:8040cc:8"]]
- 0060e380 ["INT_ADD", "register:40f0:8", ["const:60e380:8", "const:4:8"]]
- 0060e380 ["CALL", null, ["ram:71bed8:8"]]
+ 0060e3c0 ["INT_ADD", "register:40f0:8", ["const:60e3c0:8", "const:4:8"]]
+ 0060e3c0 ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-7346a72d6bdc06fe91fccdea0d5a7cd3"></a>

### [`0060eb50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060eb50.md) → [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) FUN_0060eb90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 38件 [`00467af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467af0.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c68.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md)
- 新版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 38件 [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca8.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.95% / 新版 97.95%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0060fb84",
      "incomplete_value": false,
      "site": "0060fb90",
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
      "definition_site": "0060fb44",
      "incomplete_value": false,
      "site": "0060fb50",
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
    "ordinal": 114,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0060fd00",
      "incomplete_value": true,
      "site": "0060fd08",
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
      "definition_site": "0060fcc0",
      "incomplete_value": true,
      "site": "0060fcc8",
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
    "ordinal": 125,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0060ec98",
      "READ",
      [
        "storage",
        "00c9b4e8",
        null,
        "pointer"
      ]
    ],
    [
      "0060eca4",
      "READ",
      [
        "storage",
        "00ca406c",
        null,
        "undefined4"
      ]
    ],
    [
      "0060ecf0",
      "READ",
      [
        "storage",
        "00c9b4e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0060ec98",
      "READ",
      [
        "storage",
        "00c9b5b8",
        null,
        "pointer"
      ]
    ],
    [
      "0060eca4",
      "READ",
      [
        "storage",
        "00ca413c",
        null,
        "undefined4"
      ]
    ],
    [
      "0060ecf0",
      "READ",
      [
        "storage",
        "00c9b5b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0060fb10 ["INT_ADD", "register:40f0:8", ["const:60fb10:8", "const:4:8"]]
- 0060fb10 ["CALL", null, ["callee:00747648:8"]]
+ 0060fb50 ["INT_ADD", "register:40f0:8", ["const:60fb50:8", "const:4:8"]]
+ 0060fb50 ["CALL", null, ["callee:00747648:8"]]
- 0060fb50 ["INT_ADD", "register:40f0:8", ["const:60fb50:8", "const:4:8"]]
- 0060fb50 ["CALL", null, ["callee:00c586e0:8"]]
+ 0060fb90 ["INT_ADD", "register:40f0:8", ["const:60fb90:8", "const:4:8"]]
+ 0060fb90 ["CALL", null, ["callee:00c586e0:8"]]
- 0060fcc8 ["INT_ADD", "register:40f0:8", ["const:60fcc8:8", "const:4:8"]]
- 0060fcc8 ["CALL", null, ["callee:0046ccb4:8"]]
+ 0060fd08 ["INT_ADD", "register:40f0:8", ["const:60fd08:8", "const:4:8"]]
+ 0060fd08 ["CALL", null, ["callee:0046ccb4:8"]]
~~~


<a id="compare-afec92430b74ae8ba3544115006fdc8f"></a>

### [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) → [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) FUN_006103fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 68件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 68件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 17件, `call_target` 10件, `store_value` 7件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006104e8",
      "incomplete_value": true,
      "site": "006104fc",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:e5b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006104a8",
      "incomplete_value": true,
      "site": "006104bc",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:e2c:8"
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
      "definition_site": "006104ec",
      "incomplete_value": true,
      "site": "00610500",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "006104ac",
      "incomplete_value": true,
      "site": "006104c0",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006104f0",
      "incomplete_value": true,
      "site": "00610504",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006104b0",
      "incomplete_value": true,
      "site": "006104c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a90:8"
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
      "006104e8",
      "READ",
      [
        "storage",
        "002a8e2c",
        null,
        "string"
      ]
    ],
    [
      "006104ec",
      "READ",
      [
        "storage",
        "002a8e36",
        null,
        "string"
      ]
    ],
    [
      "006104f0",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006104e8",
      "READ",
      [
        "storage",
        "002a8e5b",
        null,
        "string"
      ]
    ],
    [
      "006104ec",
      "READ",
      [
        "storage",
        "002a8e65",
        null,
        "string"
      ]
    ],
    [
      "006104f0",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
+ 006104e4 ["COPY", "register:4048:8", ["const:2c2000:8"]]
- 006106a0 ["INT_ADD", "register:40f0:8", ["const:6106a0:8", "const:4:8"]]
- 006106a0 ["CALL", null, ["ram:47acf4:8"]]
+ 006106e0 ["INT_ADD", "register:40f0:8", ["const:6106e0:8", "const:4:8"]]
+ 006106e0 ["CALL", null, ["ram:47ad34:8"]]
- 00610a5c ["INT_ADD", "register:40f0:8", ["const:610a5c:8", "const:4:8"]]
- 00610a5c ["CALL", null, ["callee:0047e91c:8"]]
+ 00610a9c ["INT_ADD", "register:40f0:8", ["const:610a9c:8", "const:4:8"]]
+ 00610a9c ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-23d4f899d9f083223daa758e64742e09"></a>

### [`00611e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00611/00611e60.md) → [`00611ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00611/00611ea0.md) FUN_00611ea0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`006264c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00626/006264c4.md) · 呼出先 15件 [`005e6104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e6/005e6104.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00802ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ee0.md)
- 新版 呼出元 2件 [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00626504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626504.md) · 呼出先 15件 [`005e6144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e6/005e6144.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_target` 1件, `store_value` 7件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00611f50",
      "incomplete_value": false,
      "site": "00611f58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ae000:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00611f10",
      "incomplete_value": false,
      "site": "00611f18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ae000:8"
          ],
          [
            "leaf",
            "const:af4:8"
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
      "definition_site": "00611f78",
      "incomplete_value": false,
      "site": "00611f84",
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
            "const:5ae:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00611f38",
      "incomplete_value": false,
      "site": "00611f44",
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
            "const:56e:8"
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
      "definition_site": "00611fb0",
      "incomplete_value": false,
      "site": "00611fb4",
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
            "const:e79:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00611f70",
      "incomplete_value": false,
      "site": "00611f74",
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
            "const:e48:8"
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
      "00611edc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005e6104"
      ]
    ],
    [
      "00611f58",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "00611f84",
      "DATA",
      [
        "storage",
        "002b756e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00611edc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "005e6144"
      ]
    ],
    [
      "00611f58",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00611f84",
      "DATA",
      [
        "storage",
        "002b75ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00611e9c ["INT_ADD", "register:40f0:8", ["const:611e9c:8", "const:4:8"]]
- 00611e9c ["CALL", null, ["ram:5e6104:8"]]
+ 00611edc ["INT_ADD", "register:40f0:8", ["const:611edc:8", "const:4:8"]]
+ 00611edc ["CALL", null, ["ram:5e6144:8"]]
- 00611fd8 ["INT_ADD", "register:40f0:8", ["const:611fd8:8", "const:4:8"]]
- 00611fd8 ["CALL", null, ["callee:00c5a900:8"]]
+ 00612018 ["INT_ADD", "register:40f0:8", ["const:612018:8", "const:4:8"]]
+ 00612018 ["CALL", null, ["callee:00c5a900:8"]]
- 00612050 ["INT_ADD", "register:40f0:8", ["const:612050:8", "const:4:8"]]
- 00612050 ["CALL", null, ["callee:00c5a900:8"]]
+ 00612090 ["INT_ADD", "register:40f0:8", ["const:612090:8", "const:4:8"]]
+ 00612090 ["CALL", null, ["callee:00c5a900:8"]]
~~~


