# v16.0.1 → v16.0.2 · 最優先の変更候補 (56)

[一覧の目次](README.md)

<a id="compare-a8c6534bad33c8dd4dfc1b1f408ba438"></a>

### [`009218cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/009218cc.md) → [`00921920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921920.md) FUN_00921920

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
      "site": "00921944",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009218f0",
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
      "00921944",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00921944",
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
- 009218f0 ["INT_ADD", "register:40f0:8", ["const:9218f0:8", "const:4:8"]]
- 009218f0 ["CALL", null, ["ram:47acf4:8"]]
+ 00921944 ["INT_ADD", "register:40f0:8", ["const:921944:8", "const:4:8"]]
+ 00921944 ["CALL", null, ["ram:47ad34:8"]]
- 009218fc ["INT_ADD", "register:40f0:8", ["const:9218fc:8", "const:4:8"]]
- 009218fc ["CALL", null, ["callee:0047ce14:8"]]
+ 00921950 ["INT_ADD", "register:40f0:8", ["const:921950:8", "const:4:8"]]
+ 00921950 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-8f8ea9a22854fe72a77bc4bfa8364912"></a>

### [`00921940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921940.md) → [`00921994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921994.md) FUN_00921994

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
      "definition_site": "009219a8",
      "incomplete_value": false,
      "site": "009219ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921954",
      "incomplete_value": false,
      "site": "00921958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009219ac",
      "DATA",
      [
        "storage",
        "00c86010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009219ac",
      "DATA",
      [
        "storage",
        "00c860e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092194c ["INT_ADD", "register:40f0:8", ["const:92194c:8", "const:4:8"]]
- 0092194c ["CALL", null, ["callee:00c57f60:8"]]
+ 009219a0 ["INT_ADD", "register:40f0:8", ["const:9219a0:8", "const:4:8"]]
+ 009219a0 ["CALL", null, ["callee:00c57f60:8"]]
- 00921954 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00921954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009219a8 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 009219a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009219a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009219a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8d3bcbfea6cf1c40828b3461da997349"></a>

### [`0092197c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/0092197c.md) → [`009219d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/009219d0.md) FUN_009219d0

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
      "site": "009219f8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009219a4",
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
      "009219f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009219f8",
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
- 009219a4 ["INT_ADD", "register:40f0:8", ["const:9219a4:8", "const:4:8"]]
- 009219a4 ["CALL", null, ["ram:47acf4:8"]]
+ 009219f8 ["INT_ADD", "register:40f0:8", ["const:9219f8:8", "const:4:8"]]
+ 009219f8 ["CALL", null, ["ram:47ad34:8"]]
- 009219b0 ["INT_ADD", "register:40f0:8", ["const:9219b0:8", "const:4:8"]]
- 009219b0 ["CALL", null, ["callee:0047ce14:8"]]
+ 00921a04 ["INT_ADD", "register:40f0:8", ["const:921a04:8", "const:4:8"]]
+ 00921a04 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-31492ce391d53d88f277419b6401f70b"></a>

### [`009219f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/009219f4.md) → [`00921a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921a48.md) FUN_00921a48

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
      "definition_site": "00921a5c",
      "incomplete_value": false,
      "site": "00921a60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:160:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921a08",
      "incomplete_value": false,
      "site": "00921a0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:90:8"
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
      "00921a60",
      "DATA",
      [
        "storage",
        "00c86090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00921a60",
      "DATA",
      [
        "storage",
        "00c86160",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921a00 ["INT_ADD", "register:40f0:8", ["const:921a00:8", "const:4:8"]]
- 00921a00 ["CALL", null, ["callee:00c57f60:8"]]
+ 00921a54 ["INT_ADD", "register:40f0:8", ["const:921a54:8", "const:4:8"]]
+ 00921a54 ["CALL", null, ["callee:00c57f60:8"]]
- 00921a08 ["COPY", "tmp:0:8", ["const:90:8"]]
- 00921a08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921a08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921a08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00921a5c ["COPY", "tmp:0:8", ["const:160:8"]]
+ 00921a5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00921a5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00921a5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d9825752518b81d438840af7fdb5cd69"></a>

### [`00921a30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921a30.md) → [`00921a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921a84.md) FUN_00921a84

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
      "site": "00921aac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921a58",
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
      "00921aac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00921aac",
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
- 00921a58 ["INT_ADD", "register:40f0:8", ["const:921a58:8", "const:4:8"]]
- 00921a58 ["CALL", null, ["ram:47acf4:8"]]
+ 00921aac ["INT_ADD", "register:40f0:8", ["const:921aac:8", "const:4:8"]]
+ 00921aac ["CALL", null, ["ram:47ad34:8"]]
- 00921a64 ["INT_ADD", "register:40f0:8", ["const:921a64:8", "const:4:8"]]
- 00921a64 ["CALL", null, ["callee:0047ce14:8"]]
+ 00921ab8 ["INT_ADD", "register:40f0:8", ["const:921ab8:8", "const:4:8"]]
+ 00921ab8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-213c8b00b89bb8fbdde9ad9ef4e17a9d"></a>

### [`00921aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921aa8.md) → [`00921afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921afc.md) FUN_00921afc

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
      "definition_site": "00921b10",
      "incomplete_value": false,
      "site": "00921b14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921abc",
      "incomplete_value": false,
      "site": "00921ac0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:110:8"
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
      "00921b14",
      "DATA",
      [
        "storage",
        "00c86110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00921b14",
      "DATA",
      [
        "storage",
        "00c861e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921ab4 ["INT_ADD", "register:40f0:8", ["const:921ab4:8", "const:4:8"]]
- 00921ab4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00921b08 ["INT_ADD", "register:40f0:8", ["const:921b08:8", "const:4:8"]]
+ 00921b08 ["CALL", null, ["callee:00c57f60:8"]]
- 00921abc ["COPY", "tmp:0:8", ["const:110:8"]]
- 00921abc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921abc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921abc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00921b10 ["COPY", "tmp:0:8", ["const:1e0:8"]]
+ 00921b10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00921b10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00921b10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-99c0794f5b0915c1ec18a539379a83ad"></a>

### [`00921ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921ae4.md) → [`00921b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921b38.md) FUN_00921b38

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) [`0071e394`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e394.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.66% / 新版 98.66%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921b74",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921b20",
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
      "site": "00921d28",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921cd4",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 26,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00921b74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00921bc8",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "qword"
      ]
    ],
    [
      "00921c4c",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "00921b74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00921bc8",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "dword"
      ]
    ],
    [
      "00921c4c",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921b20 ["INT_ADD", "register:40f0:8", ["const:921b20:8", "const:4:8"]]
- 00921b20 ["CALL", null, ["ram:47acf4:8"]]
+ 00921b74 ["INT_ADD", "register:40f0:8", ["const:921b74:8", "const:4:8"]]
+ 00921b74 ["CALL", null, ["ram:47ad34:8"]]
- 00921cd4 ["INT_ADD", "register:40f0:8", ["const:921cd4:8", "const:4:8"]]
- 00921cd4 ["CALL", null, ["ram:47acf4:8"]]
+ 00921d28 ["INT_ADD", "register:40f0:8", ["const:921d28:8", "const:4:8"]]
+ 00921d28 ["CALL", null, ["ram:47ad34:8"]]
- 00921b2c ["INT_ADD", "register:40f0:8", ["const:921b2c:8", "const:4:8"]]
- 00921b2c ["CALL", null, ["callee:0047ce14:8"]]
+ 00921b80 ["INT_ADD", "register:40f0:8", ["const:921b80:8", "const:4:8"]]
+ 00921b80 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-8875feb7a2b7300c71278a78b7c4c3d0"></a>

### [`00921d64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921d64.md) → [`00921db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921db8.md) FUN_00921db8

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
      "definition_site": "00921ddc",
      "incomplete_value": false,
      "site": "00921ddc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921d88",
      "incomplete_value": false,
      "site": "00921d88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:190:8"
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
      "00921ddc",
      "DATA",
      [
        "storage",
        "00c86190",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00921ddc",
      "DATA",
      [
        "storage",
        "00c86260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921d78 ["INT_ADD", "register:40f0:8", ["const:921d78:8", "const:4:8"]]
- 00921d78 ["CALL", null, ["callee:00c57f60:8"]]
+ 00921dcc ["INT_ADD", "register:40f0:8", ["const:921dcc:8", "const:4:8"]]
+ 00921dcc ["CALL", null, ["callee:00c57f60:8"]]
- 00921d84 ["COPY", "tmp:0:8", ["const:190:8"]]
- 00921d84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921d84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921d84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00921dd8 ["COPY", "tmp:0:8", ["const:260:8"]]
+ 00921dd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00921dd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00921dd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8dc580532558bfa14417bddff9673683"></a>

### [`00921e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921e10.md) → [`00921e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921e64.md) FUN_00921e64

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
      "definition_site": "00921e88",
      "incomplete_value": false,
      "site": "00921e88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921e34",
      "incomplete_value": false,
      "site": "00921e34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "00921e88",
      "DATA",
      [
        "storage",
        "00c86210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00921e88",
      "DATA",
      [
        "storage",
        "00c862e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921e24 ["INT_ADD", "register:40f0:8", ["const:921e24:8", "const:4:8"]]
- 00921e24 ["CALL", null, ["callee:00c57f60:8"]]
+ 00921e78 ["INT_ADD", "register:40f0:8", ["const:921e78:8", "const:4:8"]]
+ 00921e78 ["CALL", null, ["callee:00c57f60:8"]]
- 00921e30 ["COPY", "tmp:0:8", ["const:210:8"]]
- 00921e30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921e30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921e30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00921e84 ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 00921e84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00921e84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00921e84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7140af1e0e4f1cce0c4ecaa044163087"></a>

### [`00921e44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921e44.md) → [`00921e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921e98.md) FUN_00921e98

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
      "definition_site": "00921ea4",
      "incomplete_value": false,
      "site": "00921ea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:2e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921e50",
      "incomplete_value": false,
      "site": "00921e50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:210:8"
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
      "00921ea4",
      "DATA",
      [
        "storage",
        "00c86210",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00921ea4",
      "DATA",
      [
        "storage",
        "00c862e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921e4c ["COPY", "tmp:0:8", ["const:210:8"]]
- 00921e4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00921e4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00921e4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00921ea0 ["COPY", "tmp:0:8", ["const:2e0:8"]]
+ 00921ea0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00921ea0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00921ea0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b4cf792d62e2306015cc1a71f497996d"></a>

### [`00921e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921e60.md) → [`00921eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921eb4.md) FUN_00921eb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008b9298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9298.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 91.21% / 新版 91.21%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 4件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00921f54",
      "incomplete_value": true,
      "site": "00921f64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cfb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921f00",
      "incomplete_value": true,
      "site": "00921f10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d57:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00921f84",
      "incomplete_value": false,
      "site": "00921f84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921f30",
      "incomplete_value": false,
      "site": "00921f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:280:8"
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
      "definition_site": "009220a8",
      "incomplete_value": false,
      "site": "009220a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922054",
      "incomplete_value": false,
      "site": "00922054",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:400:8"
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
      "00921ef4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00921f10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00921f54",
      "READ",
      [
        "storage",
        "002add57",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00921ef4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00921f10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00921f54",
      "READ",
      [
        "storage",
        "002adcfb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921ea0 ["INT_ADD", "register:40f0:8", ["const:921ea0:8", "const:4:8"]]
- 00921ea0 ["CALL", null, ["ram:47acf4:8"]]
+ 00921ef4 ["INT_ADD", "register:40f0:8", ["const:921ef4:8", "const:4:8"]]
+ 00921ef4 ["CALL", null, ["ram:47ad34:8"]]
- 00921ebc ["INT_ADD", "register:40f0:8", ["const:921ebc:8", "const:4:8"]]
- 00921ebc ["CALL", null, ["ram:47acf4:8"]]
+ 00921f10 ["INT_ADD", "register:40f0:8", ["const:921f10:8", "const:4:8"]]
+ 00921f10 ["CALL", null, ["ram:47ad34:8"]]
- 00921fd8 ["INT_ADD", "register:40f0:8", ["const:921fd8:8", "const:4:8"]]
- 00921fd8 ["CALL", null, ["callee:00c586e0:8"]]
+ 0092202c ["INT_ADD", "register:40f0:8", ["const:92202c:8", "const:4:8"]]
+ 0092202c ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-67f86fa37fec63095cc5113fe6be0a50"></a>

### [`00922264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922264.md) → [`009222b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009222b8.md) FUN_009222b8

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
      "definition_site": "009222d8",
      "incomplete_value": false,
      "site": "009222dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922284",
      "incomplete_value": false,
      "site": "00922288",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "009222dc",
      "DATA",
      [
        "storage",
        "00c86280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009222dc",
      "DATA",
      [
        "storage",
        "00c86350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922278 ["INT_ADD", "register:40f0:8", ["const:922278:8", "const:4:8"]]
- 00922278 ["CALL", null, ["callee:00c57f60:8"]]
+ 009222cc ["INT_ADD", "register:40f0:8", ["const:9222cc:8", "const:4:8"]]
+ 009222cc ["CALL", null, ["callee:00c57f60:8"]]
- 00922284 ["COPY", "tmp:0:8", ["const:280:8"]]
- 00922284 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00922284 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00922284 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009222d8 ["COPY", "tmp:0:8", ["const:350:8"]]
+ 009222d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009222d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009222d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-272cb96d82f2c81db2789015f9c6e675"></a>

### [`0092229c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/0092229c.md) → [`009222f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009222f0.md) FUN_009222f0

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
      "definition_site": "009222f4",
      "incomplete_value": false,
      "site": "009222f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009222a0",
      "incomplete_value": false,
      "site": "009222a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "009222f8",
      "DATA",
      [
        "storage",
        "00c86280",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009222f8",
      "DATA",
      [
        "storage",
        "00c86350",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009222a0 ["COPY", "tmp:0:8", ["const:280:8"]]
- 009222a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009222a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009222a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009222f4 ["COPY", "tmp:0:8", ["const:350:8"]]
+ 009222f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009222f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009222f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5265ecd2f99982a4d2c264e0ccec28b8"></a>

### [`009222bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/009222bc.md) → [`00922310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922310.md) FUN_00922310

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047ca8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ca8c.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00888428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888428.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00888480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888480.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009223b8",
      "incomplete_value": false,
      "site": "009223b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922364",
      "incomplete_value": false,
      "site": "00922364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
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
      "site": "00922360",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092230c",
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
      "site": "009223a0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092234c",
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
      "00922350",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "dword"
      ]
    ],
    [
      "00922360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009223a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00922350",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "byte[11]"
      ]
    ],
    [
      "00922360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009223a0",
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
- 0092230c ["INT_ADD", "register:40f0:8", ["const:92230c:8", "const:4:8"]]
- 0092230c ["CALL", null, ["ram:47acf4:8"]]
+ 00922360 ["INT_ADD", "register:40f0:8", ["const:922360:8", "const:4:8"]]
+ 00922360 ["CALL", null, ["ram:47ad34:8"]]
- 0092234c ["INT_ADD", "register:40f0:8", ["const:92234c:8", "const:4:8"]]
- 0092234c ["CALL", null, ["ram:47acf4:8"]]
+ 009223a0 ["INT_ADD", "register:40f0:8", ["const:9223a0:8", "const:4:8"]]
+ 009223a0 ["CALL", null, ["ram:47ad34:8"]]
- 00922318 ["INT_ADD", "register:40f0:8", ["const:922318:8", "const:4:8"]]
- 00922318 ["CALL", null, ["callee:0047ce14:8"]]
+ 0092236c ["INT_ADD", "register:40f0:8", ["const:92236c:8", "const:4:8"]]
+ 0092236c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-cddb340f848170efe46d69d15850a007"></a>

### [`00922444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922444.md) → [`00922498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922498.md) FUN_00922498

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
      "definition_site": "009224bc",
      "incomplete_value": false,
      "site": "009224bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922468",
      "incomplete_value": false,
      "site": "00922468",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
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
      "009224bc",
      "DATA",
      [
        "storage",
        "00c862f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009224bc",
      "DATA",
      [
        "storage",
        "00c863c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922458 ["INT_ADD", "register:40f0:8", ["const:922458:8", "const:4:8"]]
- 00922458 ["CALL", null, ["callee:00c57f60:8"]]
+ 009224ac ["INT_ADD", "register:40f0:8", ["const:9224ac:8", "const:4:8"]]
+ 009224ac ["CALL", null, ["callee:00c57f60:8"]]
- 00922464 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 00922464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00922464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00922464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009224b8 ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 009224b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009224b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009224b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-920c5926d4473979f832d587465edac0"></a>

### [`00922478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922478.md) → [`009224cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009224cc.md) FUN_009224cc

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
      "definition_site": "009224d8",
      "incomplete_value": false,
      "site": "009224d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922484",
      "incomplete_value": false,
      "site": "00922484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
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
      "009224d8",
      "DATA",
      [
        "storage",
        "00c862f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009224d8",
      "DATA",
      [
        "storage",
        "00c863c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922480 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 00922480 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00922480 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00922480 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009224d4 ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 009224d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009224d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009224d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-50a4f31be5a96e0951d51a870c10bdf9"></a>

### [`00922754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922754.md) → [`009227a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009227a8.md) FUN_009227a8

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
      "definition_site": "009227bc",
      "incomplete_value": false,
      "site": "009227c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922768",
      "incomplete_value": false,
      "site": "0092276c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:360:8"
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
      "009227c0",
      "DATA",
      [
        "storage",
        "00c86360",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009227c0",
      "DATA",
      [
        "storage",
        "00c86430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922760 ["INT_ADD", "register:40f0:8", ["const:922760:8", "const:4:8"]]
- 00922760 ["CALL", null, ["callee:00c57f60:8"]]
+ 009227b4 ["INT_ADD", "register:40f0:8", ["const:9227b4:8", "const:4:8"]]
+ 009227b4 ["CALL", null, ["callee:00c57f60:8"]]
- 00922768 ["COPY", "tmp:0:8", ["const:360:8"]]
- 00922768 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00922768 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00922768 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009227bc ["COPY", "tmp:0:8", ["const:430:8"]]
+ 009227bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009227bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009227bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-714e029eb26935027d4635e31e3e1b84"></a>

### [`00922790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922790.md) → [`009227e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009227e4.md) FUN_009227e4

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
      "site": "00922808",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009227b4",
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
      "00922808",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00922808",
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
- 009227b4 ["INT_ADD", "register:40f0:8", ["const:9227b4:8", "const:4:8"]]
- 009227b4 ["CALL", null, ["ram:47acf4:8"]]
+ 00922808 ["INT_ADD", "register:40f0:8", ["const:922808:8", "const:4:8"]]
+ 00922808 ["CALL", null, ["ram:47ad34:8"]]
- 009227c0 ["INT_ADD", "register:40f0:8", ["const:9227c0:8", "const:4:8"]]
- 009227c0 ["CALL", null, ["callee:0047ce14:8"]]
+ 00922814 ["INT_ADD", "register:40f0:8", ["const:922814:8", "const:4:8"]]
+ 00922814 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b960d60a7a1a9b2809dce4aa79723caa"></a>

### [`00922804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922804.md) → [`00922858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922858.md) FUN_00922858

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
      "definition_site": "0092287c",
      "incomplete_value": false,
      "site": "00922880",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922828",
      "incomplete_value": false,
      "site": "0092282c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:400:8"
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
      "00922880",
      "DATA",
      [
        "storage",
        "00c86400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922880",
      "DATA",
      [
        "storage",
        "00c864d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922818 ["INT_ADD", "register:40f0:8", ["const:922818:8", "const:4:8"]]
- 00922818 ["CALL", null, ["callee:00c57f60:8"]]
+ 0092286c ["INT_ADD", "register:40f0:8", ["const:92286c:8", "const:4:8"]]
+ 0092286c ["CALL", null, ["callee:00c57f60:8"]]
- 00922828 ["COPY", "tmp:0:8", ["const:400:8"]]
- 00922828 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00922828 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00922828 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092287c ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 0092287c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092287c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092287c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-669f7abd4519e61461c9de048ae07a8d"></a>

### [`00922844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922844.md) → [`00922898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922898.md) FUN_00922898

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
      "definition_site": "0092289c",
      "incomplete_value": false,
      "site": "009228a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922848",
      "incomplete_value": false,
      "site": "0092284c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "009228a0",
      "DATA",
      [
        "storage",
        "00c86400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009228a0",
      "DATA",
      [
        "storage",
        "00c864d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922848 ["COPY", "tmp:0:8", ["const:400:8"]]
- 00922848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00922848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00922848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092289c ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 0092289c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092289c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092289c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1c8ad510857613495c303953bcfcdb15"></a>

### [`0092286c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/0092286c.md) → [`009228c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009228c0.md) FUN_009228c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md) [`0085b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2e0.md) [`009dce40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dc/009dce40.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md) [`009dce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00922904",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009228b0",
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
      "site": "00922950",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009228fc",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00922904",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00922944",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "dword"
      ]
    ],
    [
      "0092294c",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00922904",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00922944",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "byte[11]"
      ]
    ],
    [
      "0092294c",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "byte[11]"
      ]
    ]
  ]
}
~~~


~~~diff
- 009228b0 ["INT_ADD", "register:40f0:8", ["const:9228b0:8", "const:4:8"]]
- 009228b0 ["CALL", null, ["ram:47acf4:8"]]
+ 00922904 ["INT_ADD", "register:40f0:8", ["const:922904:8", "const:4:8"]]
+ 00922904 ["CALL", null, ["ram:47ad34:8"]]
- 009228fc ["INT_ADD", "register:40f0:8", ["const:9228fc:8", "const:4:8"]]
- 009228fc ["CALL", null, ["ram:47acf4:8"]]
+ 00922950 ["INT_ADD", "register:40f0:8", ["const:922950:8", "const:4:8"]]
+ 00922950 ["CALL", null, ["ram:47ad34:8"]]
- 0092288c ["INT_ADD", "register:40f0:8", ["const:92288c:8", "const:4:8"]]
- 0092288c ["CALL", null, ["callee:00859ba4:8"]]
+ 009228e0 ["INT_ADD", "register:40f0:8", ["const:9228e0:8", "const:4:8"]]
+ 009228e0 ["CALL", null, ["callee:00859ba4:8"]]
~~~


<a id="compare-c754b9ca658b15c0a31c41fa7f10e88a"></a>

### [`00922954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922954.md) → [`009229a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009229a8.md) FUN_009229a8

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
      "definition_site": "009229cc",
      "incomplete_value": false,
      "site": "009229d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922978",
      "incomplete_value": false,
      "site": "0092297c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "009229d0",
      "DATA",
      [
        "storage",
        "00c86480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009229d0",
      "DATA",
      [
        "storage",
        "00c86550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922968 ["INT_ADD", "register:40f0:8", ["const:922968:8", "const:4:8"]]
- 00922968 ["CALL", null, ["callee:00c57f60:8"]]
+ 009229bc ["INT_ADD", "register:40f0:8", ["const:9229bc:8", "const:4:8"]]
+ 009229bc ["CALL", null, ["callee:00c57f60:8"]]
- 00922978 ["COPY", "tmp:0:8", ["const:480:8"]]
- 00922978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00922978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00922978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009229cc ["COPY", "tmp:0:8", ["const:550:8"]]
+ 009229cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009229cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009229cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c431927ced54f436ea5a8daebd38e393"></a>

### [`00922994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922994.md) → [`009229e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009229e8.md) FUN_009229e8

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
      "definition_site": "009229ec",
      "incomplete_value": false,
      "site": "009229f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00922998",
      "incomplete_value": false,
      "site": "0092299c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "009229f0",
      "DATA",
      [
        "storage",
        "00c86480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009229f0",
      "DATA",
      [
        "storage",
        "00c86550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922998 ["COPY", "tmp:0:8", ["const:480:8"]]
- 00922998 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00922998 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00922998 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009229ec ["COPY", "tmp:0:8", ["const:550:8"]]
+ 009229ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009229ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009229ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-06c53d3d823c972b532e08c8fba64837"></a>

### [`00922a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922a38.md) → [`00922a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922a8c.md) _INIT_179

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
      "definition_site": "00922ac8",
      "incomplete_value": true,
      "site": "00922ae4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00922a74",
      "incomplete_value": true,
      "site": "00922a90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00922aec",
      "incomplete_value": true,
      "site": "00922b08",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00922a98",
      "incomplete_value": true,
      "site": "00922ab4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00922b0c",
      "incomplete_value": true,
      "site": "00922b28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00922ab8",
      "incomplete_value": true,
      "site": "00922ad4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00922ac8",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00922aec",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00922b0c",
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
      "00922ac8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00922aec",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00922b0c",
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
- 00922b2c ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00922b2c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00922b2c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00922b2c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00922b80 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00922b80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00922b80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00922b80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00922b98 ["INT_ADD", "register:40f0:8", ["const:922b98:8", "const:4:8"]]
- 00922b98 ["CALL", null, ["callee:0043b838:8"]]
+ 00922bec ["INT_ADD", "register:40f0:8", ["const:922bec:8", "const:4:8"]]
+ 00922bec ["CALL", null, ["callee:0043b838:8"]]
- 00922bd4 ["INT_ADD", "register:40f0:8", ["const:922bd4:8", "const:4:8"]]
- 00922bd4 ["CALL", null, ["callee:0043b838:8"]]
+ 00922c28 ["INT_ADD", "register:40f0:8", ["const:922c28:8", "const:4:8"]]
+ 00922c28 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-0b56fa7f2d9061663f7c338af147f42a"></a>

### [`00925530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00925/00925530.md) → [`00925584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00925/00925584.md) FUN_00925584

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`009248c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00924/009248c8.md) · 呼出先 15件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00597ebc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ebc.md) [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md) [`008bb0ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb0ec.md)
- 新版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 15件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00597efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597efc.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 95.73% / 新版 95.73%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00925634",
      "incomplete_value": true,
      "site": "00925634",
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
                "const:8b5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009255e0",
      "incomplete_value": true,
      "site": "009255e0",
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
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009256d0",
      "incomplete_value": false,
      "site": "009256d8",
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
      "definition_site": "0092567c",
      "incomplete_value": false,
      "site": "00925684",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00925780",
      "incomplete_value": true,
      "site": "00925798",
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
            "const:2f08:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 11,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009255b0",
      "DATA",
      [
        "storage",
        "00393ca8",
        null,
        "uleb128"
      ]
    ],
    [
      "00925620",
      "READ",
      [
        "storage",
        "002b6875",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0092567c",
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
      "009255b0",
      "DATA",
      [
        "storage",
        "00393ca8",
        null,
        "byte[59]"
      ]
    ],
    [
      "00925620",
      "READ",
      [
        "storage",
        "002b68b5",
        null,
        "string"
      ]
    ],
    [
      "009256d0",
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
- 00925684 ["INT_ADD", "register:40f0:8", ["const:925684:8", "const:4:8"]]
- 00925684 ["CALL", null, ["callee:00c58040:8"]]
+ 009256d8 ["INT_ADD", "register:40f0:8", ["const:9256d8:8", "const:4:8"]]
+ 009256d8 ["CALL", null, ["callee:00c58040:8"]]
- 00925744 ["INT_ADD", "register:40f0:8", ["const:925744:8", "const:4:8"]]
- 00925744 ["CALL", null, ["callee:008bb144:8"]]
+ 00925798 ["INT_ADD", "register:40f0:8", ["const:925798:8", "const:4:8"]]
+ 00925798 ["CALL", null, ["callee:008bb144:8"]]
- 00925780 ["INT_ADD", "register:40f0:8", ["const:925780:8", "const:4:8"]]
- 00925780 ["CALL", null, ["callee:00851a64:8"]]
+ 009257d4 ["INT_ADD", "register:40f0:8", ["const:9257d4:8", "const:4:8"]]
+ 009257d4 ["CALL", null, ["callee:00851a64:8"]]
~~~


<a id="compare-9d18ee6b7ed3e534404f8257b6805cce"></a>

### [`009265b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00926/009265b0.md) → [`00926604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00926/00926604.md) FUN_00926604

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00922dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922dc8.md) · 呼出先 25件 [`0046e780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e780.md) [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md)
- 新版 呼出元 1件 [`00922e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922e1c.md) · 呼出先 25件 [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 55.53% / 新版 55.53%

優先判定に残った影響 `call_argument_candidate` 10件, `call_target` 2件, `store_condition` 4件, `store_value` 3件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 29件, `unresolved_store_alignment` 40件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009266ec",
      "incomplete_value": true,
      "site": "009266ec",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:5fe:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00926698",
      "incomplete_value": true,
      "site": "00926698",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:652:8"
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
      "definition_site": "009266f0",
      "incomplete_value": true,
      "site": "009266f0",
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
      "definition_site": "0092669c",
      "incomplete_value": true,
      "site": "0092669c",
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
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00926710",
      "incomplete_value": true,
      "site": "00926720",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c61:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009266bc",
      "incomplete_value": true,
      "site": "009266cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cbd:8"
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
      "unmatched:009265c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009265f8",
      "DATA",
      [
        "storage",
        "00c86528",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00926674",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00926788"
      ]
    ]
  ],
  "added": [
    [
      "00926614",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0092664c",
      "DATA",
      [
        "storage",
        "00c865f8",
        null,
        "pointer"
      ]
    ],
    [
      "009266c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00926788"
      ]
    ]
  ]
}
~~~


~~~diff
- 00926624 ["INT_ADD", "register:40f0:8", ["const:926624:8", "const:4:8"]]
- 00926624 ["CALL", null, ["callee:0046e804:8"]]
+ 00926678 ["INT_ADD", "register:40f0:8", ["const:926678:8", "const:4:8"]]
+ 00926678 ["CALL", null, ["callee:0046e804:8"]]
- 00926644 ["INT_ADD", "register:40f0:8", ["const:926644:8", "const:4:8"]]
- 00926644 ["CALL", null, ["callee:00851550:8"]]
+ 00926698 ["INT_ADD", "register:40f0:8", ["const:926698:8", "const:4:8"]]
+ 00926698 ["CALL", null, ["callee:00851550:8"]]
- 00926678 ["INT_ADD", "register:40f0:8", ["const:926678:8", "const:4:8"]]
- 00926678 ["CALL", null, ["ram:470e54:8"]]
+ 009266cc ["INT_ADD", "register:40f0:8", ["const:9266cc:8", "const:4:8"]]
+ 009266cc ["CALL", null, ["ram:470e94:8"]]
~~~


<a id="compare-225d141ce5e92436026b8da92ddb2a39"></a>

### [`00926e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00926/00926e60.md) → [`00926eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00926/00926eb4.md) FUN_00926eb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0092709c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/0092709c.md) · 呼出先 6件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00672b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672b48.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009270f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/009270f0.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 98.60% / 新版 98.60%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00926ed0",
      "incomplete_value": false,
      "site": "00926ed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:5f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00926e7c",
      "incomplete_value": false,
      "site": "00926e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:528:8"
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
      "00926ed4",
      "DATA",
      [
        "storage",
        "00c86528",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00926ed4",
      "DATA",
      [
        "storage",
        "00c865f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00926ed4 ["INT_ADD", "register:40f0:8", ["const:926ed4:8", "const:4:8"]]
- 00926ed4 ["CALL", null, ["callee:00c57f50:8"]]
+ 00926f28 ["INT_ADD", "register:40f0:8", ["const:926f28:8", "const:4:8"]]
+ 00926f28 ["CALL", null, ["callee:00c57f50:8"]]
- 00926e7c ["COPY", "tmp:0:8", ["const:528:8"]]
- 00926e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00926e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00926e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00926ed0 ["COPY", "tmp:0:8", ["const:5f8:8"]]
+ 00926ed0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00926ed0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00926ed0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00926e84 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00926e84 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 00926ed8 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00926ed8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-648dcaebc8f2ee867e3fa0d6d1ca65a7"></a>

### [`009270c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/009270c4.md) → [`00927118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927118.md) FUN_00927118

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
      "definition_site": "00927138",
      "incomplete_value": false,
      "site": "0092713c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:618:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009270e4",
      "incomplete_value": false,
      "site": "009270e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:548:8"
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
      "0092713c",
      "DATA",
      [
        "storage",
        "00c86548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092713c",
      "DATA",
      [
        "storage",
        "00c86618",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009270d8 ["INT_ADD", "register:40f0:8", ["const:9270d8:8", "const:4:8"]]
- 009270d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0092712c ["INT_ADD", "register:40f0:8", ["const:92712c:8", "const:4:8"]]
+ 0092712c ["CALL", null, ["callee:00c57f60:8"]]
- 009270e4 ["COPY", "tmp:0:8", ["const:548:8"]]
- 009270e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009270e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009270e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00927138 ["COPY", "tmp:0:8", ["const:618:8"]]
+ 00927138 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00927138 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00927138 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6ae6c91fbbdbfcf284f2ee64a3d7767f"></a>

### [`009270fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/009270fc.md) → [`00927150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927150.md) FUN_00927150

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
      "definition_site": "00927154",
      "incomplete_value": false,
      "site": "00927158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:618:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00927100",
      "incomplete_value": false,
      "site": "00927104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:548:8"
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
      "00927158",
      "DATA",
      [
        "storage",
        "00c86548",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00927158",
      "DATA",
      [
        "storage",
        "00c86618",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00927100 ["COPY", "tmp:0:8", ["const:548:8"]]
- 00927100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00927100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00927100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00927154 ["COPY", "tmp:0:8", ["const:618:8"]]
+ 00927154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00927154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00927154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e368aaea49927f1eaa4e2042171387d7"></a>

### [`0092711c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/0092711c.md) → [`00927170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927170.md) FUN_00927170

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`009d8840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d8/009d8840.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009d8894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d8/009d8894.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009271a0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092714c",
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
      "009271a0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009271a0",
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
- 0092714c ["INT_ADD", "register:40f0:8", ["const:92714c:8", "const:4:8"]]
- 0092714c ["CALL", null, ["ram:47acf4:8"]]
+ 009271a0 ["INT_ADD", "register:40f0:8", ["const:9271a0:8", "const:4:8"]]
+ 009271a0 ["CALL", null, ["ram:47ad34:8"]]
- 00927158 ["INT_ADD", "register:40f0:8", ["const:927158:8", "const:4:8"]]
- 00927158 ["CALL", null, ["callee:0047ce14:8"]]
+ 009271ac ["INT_ADD", "register:40f0:8", ["const:9271ac:8", "const:4:8"]]
+ 009271ac ["CALL", null, ["callee:0047ce14:8"]]
- 00927190 ["INT_ADD", "register:40f0:8", ["const:927190:8", "const:4:8"]]
- 00927190 ["CALL", null, ["callee:009d8894:8"]]
+ 009271e4 ["INT_ADD", "register:40f0:8", ["const:9271e4:8", "const:4:8"]]
+ 009271e4 ["CALL", null, ["callee:009d8894:8"]]
~~~


<a id="compare-9c5c6949e6a54f18430814be58f3d253"></a>

### [`009271e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/009271e4.md) → [`00927238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927238.md) _INIT_180

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00927274",
      "incomplete_value": true,
      "site": "00927290",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00927220",
      "incomplete_value": true,
      "site": "0092723c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00927314",
      "incomplete_value": true,
      "site": "00927330",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:f10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009272c0",
      "incomplete_value": true,
      "site": "009272dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00927334",
      "incomplete_value": true,
      "site": "00927378",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009272e0",
      "incomplete_value": true,
      "site": "00927324",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00927274",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00927298",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009272b8",
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
      "00927274",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00927298",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009272b8",
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
- 00927358 ["INT_ADD", "register:40f0:8", ["const:927358:8", "const:4:8"]]
- 00927358 ["CALL", null, ["callee:0043b838:8"]]
+ 009273ac ["INT_ADD", "register:40f0:8", ["const:9273ac:8", "const:4:8"]]
+ 009273ac ["CALL", null, ["callee:0043b838:8"]]
- 00927380 ["INT_ADD", "register:40f0:8", ["const:927380:8", "const:4:8"]]
- 00927380 ["CALL", null, ["callee:0043b838:8"]]
+ 009273d4 ["INT_ADD", "register:40f0:8", ["const:9273d4:8", "const:4:8"]]
+ 009273d4 ["CALL", null, ["callee:0043b838:8"]]
- 00927418 ["INT_ADD", "register:40f0:8", ["const:927418:8", "const:4:8"]]
- 00927418 ["CALL", null, ["callee:00c57f00:8"]]
+ 0092746c ["INT_ADD", "register:40f0:8", ["const:92746c:8", "const:4:8"]]
+ 0092746c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-32a9cca6f12e14a4dc8ad2ee11e0a2e2"></a>

### [`00927574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/00927574.md) → [`009275c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/009275c8.md) _INIT_181

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
      "definition_site": "00927604",
      "incomplete_value": true,
      "site": "00927620",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009275b0",
      "incomplete_value": true,
      "site": "009275cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00927628",
      "incomplete_value": true,
      "site": "00927644",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009275d4",
      "incomplete_value": true,
      "site": "009275f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00927648",
      "incomplete_value": true,
      "site": "00927664",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009275f4",
      "incomplete_value": true,
      "site": "00927610",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00927604",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00927628",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00927648",
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
      "00927604",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00927628",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00927648",
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
- 00927668 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00927668 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00927668 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00927668 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009276bc ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 009276bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009276bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009276bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009276d4 ["INT_ADD", "register:40f0:8", ["const:9276d4:8", "const:4:8"]]
- 009276d4 ["CALL", null, ["callee:0043b838:8"]]
+ 00927728 ["INT_ADD", "register:40f0:8", ["const:927728:8", "const:4:8"]]
+ 00927728 ["CALL", null, ["callee:0043b838:8"]]
- 00927710 ["INT_ADD", "register:40f0:8", ["const:927710:8", "const:4:8"]]
- 00927710 ["CALL", null, ["callee:0043b838:8"]]
+ 00927764 ["INT_ADD", "register:40f0:8", ["const:927764:8", "const:4:8"]]
+ 00927764 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-8483592655ad1ec806c9ffb510829933"></a>

### [`00927904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/00927904.md) → [`00927958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927958.md) _INIT_182

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00927a9c",
      "incomplete_value": true,
      "site": "00927aa0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00927b78",
      "incomplete_value": false,
      "site": "00927b8c",
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
      "definition_site": "00927b24",
      "incomplete_value": false,
      "site": "00927b38",
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
      "definition_site": "00927b80",
      "incomplete_value": false,
      "site": "00927b8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00927b2c",
      "incomplete_value": false,
      "site": "00927b38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:a68:8"
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
      "unmatched:00927934",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00927940",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0092795c",
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
      "00927988",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00927994",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009279b0",
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
- 00927aa0 ["INT_ADD", "register:40f0:8", ["const:927aa0:8", "const:4:8"]]
- 00927aa0 ["CALL", null, ["callee:0043b838:8"]]
+ 00927af4 ["INT_ADD", "register:40f0:8", ["const:927af4:8", "const:4:8"]]
+ 00927af4 ["CALL", null, ["callee:0043b838:8"]]
- 00927ae4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00927ae4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00927ae4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00927ae4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00927b38 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00927b38 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00927b38 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00927b38 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00927b38 ["INT_ADD", "register:40f0:8", ["const:927b38:8", "const:4:8"]]
- 00927b38 ["CALL", null, ["callee:00c57f00:8"]]
+ 00927b8c ["INT_ADD", "register:40f0:8", ["const:927b8c:8", "const:4:8"]]
+ 00927b8c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-02823f21e60c8c3cf7b7c00c15b50a78"></a>

### [`00927c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/00927c94.md) → [`00927ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927ce8.md) FUN_00927ce8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00928318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/00928318.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment

命令の説明率　旧版 95.96% / 新版 95.96%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00927d9c",
      "incomplete_value": true,
      "site": "00927dac",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00927e10",
      "incomplete_value": true,
      "site": "00927e14",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00927f78",
      "incomplete_value": true,
      "site": "00927f84",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 13,
    "slot": 1
  }
]
~~~


~~~diff
- 00927dac ["INT_ADD", "register:40f0:8", ["const:927dac:8", "const:4:8"]]
- 00927dac ["CALL", null, ["callee:00c580d0:8"]]
+ 00927e00 ["INT_ADD", "register:40f0:8", ["const:927e00:8", "const:4:8"]]
+ 00927e00 ["CALL", null, ["callee:00c580d0:8"]]
- 00927dc0 ["INT_ADD", "register:40f0:8", ["const:927dc0:8", "const:4:8"]]
- 00927dc0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00927e14 ["INT_ADD", "register:40f0:8", ["const:927e14:8", "const:4:8"]]
+ 00927e14 ["CALL", null, ["callee:00c57f80:8"]]
- 00927f30 ["INT_ADD", "register:40f0:8", ["const:927f30:8", "const:4:8"]]
- 00927f30 ["CALL", null, ["callee:00c580d0:8"]]
+ 00927f84 ["INT_ADD", "register:40f0:8", ["const:927f84:8", "const:4:8"]]
+ 00927f84 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-f7b14612e4bf6ba7351db953bf81c97b"></a>

### [`00927fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00927/00927fac.md) → [`00928000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928000.md) FUN_00928000

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00928318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/00928318.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.21% / 新版 91.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00928098",
      "incomplete_value": true,
      "site": "0092809c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00928164",
      "incomplete_value": true,
      "site": "00928168",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "unmatched:00927fac",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00927fb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00927fb4",
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
      "00928000",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00928004",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00928008",
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
- 00928048 ["INT_ADD", "register:40f0:8", ["const:928048:8", "const:4:8"]]
- 00928048 ["CALL", null, ["callee:00c57f80:8"]]
+ 0092809c ["INT_ADD", "register:40f0:8", ["const:92809c:8", "const:4:8"]]
+ 0092809c ["CALL", null, ["callee:00c57f80:8"]]
- 00928114 ["INT_ADD", "register:40f0:8", ["const:928114:8", "const:4:8"]]
- 00928114 ["CALL", null, ["callee:00470880:8"]]
+ 00928168 ["INT_ADD", "register:40f0:8", ["const:928168:8", "const:4:8"]]
+ 00928168 ["CALL", null, ["callee:00470880:8"]]
- 00927fac ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00927fac ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00927fac ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00927fac ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-e4905bc278ce5ff364110e6c86c04e1b"></a>

### [`00928194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/00928194.md) → [`009281e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/009281e8.md) FUN_009281e8

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-08938ebed0eb81ec62783f89f8fb8b8a"></a>

### [`009281a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/009281a0.md) → [`009281f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/009281f4.md) FUN_009281f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 5件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00928318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/00928318.md) [`009287d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/009287d4.md) [`00c580e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580e0.md) [`00c580f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md)
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 5件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) [`00928828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928828.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.63% / 新版 96.63%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 5件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009281e8",
      "incomplete_value": true,
      "site": "009281f0",
      "value": [
        "live",
        "register:4098:8"
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
        "00928240"
      ],
      [
        "FALL_THROUGH",
        "00928294"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00928294",
      "incomplete_value": true,
      "site": "009282a4",
      "value": [
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
    },
    "old": {
      "definition_site": "00928240",
      "incomplete_value": true,
      "site": "00928250",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "FLOAT_LESS",
            "1",
            [
              [
                "live",
                "register:5100:8"
              ],
              [
                "live",
                "register:5000:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:1"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00928240"
      ],
      [
        "FALL_THROUGH",
        "00928294"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00928294",
      "incomplete_value": true,
      "site": "009282a4",
      "value": [
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
    },
    "old": {
      "definition_site": "00928240",
      "incomplete_value": true,
      "site": "00928250",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "FLOAT_LESS",
            "1",
            [
              [
                "live",
                "register:5100:8"
              ],
              [
                "live",
                "register:5000:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:1"
          ]
        ]
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
      "unmatched:00928240",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00928324"
      ]
    ]
  ],
  "added": [
    [
      "00928294",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00928324"
      ]
    ]
  ]
}
~~~


~~~diff
- 009281f0 ["INT_ADD", "register:40f0:8", ["const:9281f0:8", "const:4:8"]]
- 009281f0 ["CALL", null, ["callee:0092836c:8"]]
+ 00928244 ["INT_ADD", "register:40f0:8", ["const:928244:8", "const:4:8"]]
+ 00928244 ["CALL", null, ["callee:0092836c:8"]]
- 009281b0 ["COPY", "tmp:0:8", ["const:10:8"]]
- 009281b0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 009281b0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 009281b0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 009281c4 ["INT_ADD", "register:40f0:8", ["const:9281c4:8", "const:4:8"]]
- 009281c4 ["CALL", null, ["callee:0048cec4:8"]]
+ 00928218 ["INT_ADD", "register:40f0:8", ["const:928218:8", "const:4:8"]]
+ 00928218 ["CALL", null, ["callee:0048cec4:8"]]
~~~


<a id="compare-6cc7046aa3d2a03cea27af5a4be7c625"></a>

### [`00928318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/00928318.md) → [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) FUN_0092836c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009281a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/009281a0.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md)
- 新版 呼出元 1件 [`009281f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/009281f4.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.67% / 新版 89.67%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009283a4",
      "incomplete_value": true,
      "site": "009283a8",
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
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00928400",
      "incomplete_value": true,
      "site": "00928410",
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
            "const:38:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00928404",
      "incomplete_value": true,
      "site": "00928410",
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
      "unmatched:00928378",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00928378",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00928380",
      "READ",
      [
        "storage",
        "002b6880",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009283cc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009283cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "009283d4",
      "READ",
      [
        "storage",
        "002b68c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009283a8 ["INT_ADD", "register:40f0:8", ["const:9283a8:8", "const:4:8"]]
- 009283a8 ["CALL", null, ["callee:00447f34:8"]]
+ 009283fc ["INT_ADD", "register:40f0:8", ["const:9283fc:8", "const:4:8"]]
+ 009283fc ["CALL", null, ["callee:00447f34:8"]]
- 009283bc ["INT_ADD", "register:40f0:8", ["const:9283bc:8", "const:4:8"]]
- 009283bc ["CALL", null, ["callee:00b11188:8"]]
+ 00928410 ["INT_ADD", "register:40f0:8", ["const:928410:8", "const:4:8"]]
+ 00928410 ["CALL", null, ["callee:00b11188:8"]]
- 009283e0 ["INT_ADD", "register:40f0:8", ["const:9283e0:8", "const:4:8"]]
- 009283e0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00928434 ["INT_ADD", "register:40f0:8", ["const:928434:8", "const:4:8"]]
+ 00928434 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-55f5378c7bb2318f6f41fd7e329fae41"></a>

### [`009287d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/009287d4.md) → [`00928828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928828.md) FUN_00928828

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`009281a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/009281a0.md) [`00929178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929178.md) [`00929498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929498.md) · 呼出先 29件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md)
- 新版 呼出元 3件 [`009281f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/009281f4.md) [`009291cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009291cc.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.89% / 新版 84.89%

優先判定に残った影響 `call_argument_candidate` 24件, `store_condition` 3件, `store_value` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 15件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00928c54",
      "incomplete_value": false,
      "site": "00928c54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:698:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00928c00",
      "incomplete_value": false,
      "site": "00928c00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:5c8:8"
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00928860",
      "incomplete_value": true,
      "site": "00928860",
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
      "definition_site": "0092880c",
      "incomplete_value": true,
      "site": "0092880c",
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
      "definition_site": "00928868",
      "incomplete_value": false,
      "site": "0092887c",
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
      "definition_site": "00928814",
      "incomplete_value": false,
      "site": "00928828",
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
      "0092885c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00928868",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00928870",
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
      "0092885c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00928868",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00928870",
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
- 00928828 ["INT_ADD", "register:40f0:8", ["const:928828:8", "const:4:8"]]
- 00928828 ["CALL", null, ["callee:00c586e0:8"]]
+ 0092887c ["INT_ADD", "register:40f0:8", ["const:92887c:8", "const:4:8"]]
+ 0092887c ["CALL", null, ["callee:00c586e0:8"]]
- 00928880 ["INT_ADD", "register:40f0:8", ["const:928880:8", "const:4:8"]]
- 00928880 ["CALL", null, ["callee:00447f34:8"]]
+ 009288d4 ["INT_ADD", "register:40f0:8", ["const:9288d4:8", "const:4:8"]]
+ 009288d4 ["CALL", null, ["callee:00447f34:8"]]
- 009288d4 ["INT_ADD", "register:40f0:8", ["const:9288d4:8", "const:4:8"]]
- 009288d4 ["CALL", null, ["callee:0047e64c:8"]]
+ 00928928 ["INT_ADD", "register:40f0:8", ["const:928928:8", "const:4:8"]]
+ 00928928 ["CALL", null, ["callee:0047e64c:8"]]
~~~


<a id="compare-2eb5b6601bc446f97c3c2f9ec573ba6a"></a>

### [`0092919c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/0092919c.md) → [`009291f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009291f0.md) FUN_009291f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00929230",
      "incomplete_value": true,
      "site": "00929234",
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
            "const:170:8"
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
      "unmatched:009291dc",
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
      "00929230",
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
- 009291e0 ["INT_ADD", "register:40f0:8", ["const:9291e0:8", "const:4:8"]]
- 009291e0 ["CALL", null, ["callee:00442970:8"]]
+ 00929234 ["INT_ADD", "register:40f0:8", ["const:929234:8", "const:4:8"]]
+ 00929234 ["CALL", null, ["callee:00442970:8"]]
- 009291dc ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 009291dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009291dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009291dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00929230 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 00929230 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00929230 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00929230 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-751159c5434b2e8822f5a86aa9cfae1d"></a>

### [`00929248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929248.md) → [`0092929c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/0092929c.md) FUN_0092929c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`00853c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c78.md) [`00854670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/00854670.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) [`009287d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/009287d4.md) [`00929498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929498.md) · 呼出先 14件 [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md) [`0069ef14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069e/0069ef14.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`006a2d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d48.md) [`006a2d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2d4c.md)
- 新版 呼出元 5件 [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`008546c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008546c8.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`00928828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928828.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md) · 呼出先 14件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.04% / 新版 83.04%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0092930c",
      "incomplete_value": true,
      "site": "00929310",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00929328",
      "incomplete_value": false,
      "site": "0092932c",
      "value": [
        "leaf",
        "const:88:8"
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0092935c",
      "incomplete_value": true,
      "site": "00929364",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0092924c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00929250",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00929284",
      "DATA",
      [
        "storage",
        "00c867c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009292a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009292a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009292d8",
      "DATA",
      [
        "storage",
        "00c86898",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929310 ["INT_ADD", "register:40f0:8", ["const:929310:8", "const:4:8"]]
- 00929310 ["CALL", null, ["callee:005509f0:8"]]
+ 00929364 ["INT_ADD", "register:40f0:8", ["const:929364:8", "const:4:8"]]
+ 00929364 ["CALL", null, ["callee:005509f0:8"]]
- 0092932c ["INT_ADD", "register:40f0:8", ["const:92932c:8", "const:4:8"]]
- 0092932c ["CALL", null, ["callee:00c57f60:8"]]
+ 00929380 ["INT_ADD", "register:40f0:8", ["const:929380:8", "const:4:8"]]
+ 00929380 ["CALL", null, ["callee:00c57f60:8"]]
- 00929364 ["INT_ADD", "register:40f0:8", ["const:929364:8", "const:4:8"]]
- 00929364 ["CALL", null, ["callee:006a2da4:8"]]
+ 009293b8 ["INT_ADD", "register:40f0:8", ["const:9293b8:8", "const:4:8"]]
+ 009293b8 ["CALL", null, ["callee:006a2da4:8"]]
~~~


<a id="compare-92ccec3b62d4a10b7c325d74d9c1e9da"></a>

### [`00929498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929498.md) → [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md) FUN_009294ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00929cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929cb0.md) [`00929d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929d84.md) · 呼出先 27件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md)
- 新版 呼出元 2件 [`00929d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929d04.md) [`00929dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929dd8.md) · 呼出先 27件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.55% / 新版 91.55%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `store_value` 4件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00929610",
      "incomplete_value": true,
      "site": "00929610",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:c7f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009295bc",
      "incomplete_value": true,
      "site": "009295bc",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:cdb:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00929654",
      "incomplete_value": false,
      "site": "00929654",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:798:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929600",
      "incomplete_value": false,
      "site": "00929600",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:6c8:8"
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
      "definition_site": "00929708",
      "incomplete_value": true,
      "site": "00929708",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:c7f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009296b4",
      "incomplete_value": true,
      "site": "009296b4",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:cdb:8"
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
      "00929570",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0092957c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00929a90"
      ]
    ],
    [
      "009295f8",
      "READ",
      [
        "storage",
        "002a5cdb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00929570",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "009295d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00929a90"
      ]
    ],
    [
      "009295f8",
      "READ",
      [
        "storage",
        "002a5c7f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009294cc ["INT_ADD", "register:40f0:8", ["const:9294cc:8", "const:4:8"]]
- 009294cc ["CALL", null, ["callee:0048cec4:8"]]
+ 00929520 ["INT_ADD", "register:40f0:8", ["const:929520:8", "const:4:8"]]
+ 00929520 ["CALL", null, ["callee:0048cec4:8"]]
- 00929520 ["INT_ADD", "register:40f0:8", ["const:929520:8", "const:4:8"]]
- 00929520 ["CALL", null, ["callee:00442970:8"]]
+ 00929574 ["INT_ADD", "register:40f0:8", ["const:929574:8", "const:4:8"]]
+ 00929574 ["CALL", null, ["callee:00442970:8"]]
- 00929574 ["INT_SUB", "register:4060:8", ["register:4060:8", "register:4050:8"]]
~~~


<a id="compare-25a20257837e921a631958e047cfe9a1"></a>

### [`00929c0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929c0c.md) → [`00929c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929c60.md) FUN_00929c60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 3件 [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md) [`00481098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481098.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00929c30",
      "incomplete_value": true,
      "site": "00929c38",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00929c3c",
      "incomplete_value": true,
      "site": "00929c44",
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
      "unmatched:00929c0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00929c10",
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
      "00929c60",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00929c64",
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
- 00929c38 ["INT_ADD", "register:40f0:8", ["const:929c38:8", "const:4:8"]]
- 00929c38 ["CALL", null, ["callee:00480bd0:8"]]
+ 00929c8c ["INT_ADD", "register:40f0:8", ["const:929c8c:8", "const:4:8"]]
+ 00929c8c ["CALL", null, ["callee:00480bd0:8"]]
- 00929c44 ["INT_ADD", "register:40f0:8", ["const:929c44:8", "const:4:8"]]
- 00929c44 ["CALL", null, ["callee:00480e68:8"]]
+ 00929c98 ["INT_ADD", "register:40f0:8", ["const:929c98:8", "const:4:8"]]
+ 00929c98 ["CALL", null, ["callee:00480e68:8"]]
- 00929c0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00929c0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00929c0c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00929c0c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f1b605731a30baf3fa3b2ad8b52e7d25"></a>

### [`00929c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929c60.md) → [`00929cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929cb4.md) FUN_00929cb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00929c84",
      "DATA",
      [
        "storage",
        "00c865c8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00929c88",
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
      "00929cd8",
      "DATA",
      [
        "storage",
        "00c86698",
        null,
        "undefined *"
      ]
    ],
    [
      "00929cdc",
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
- 00929c74 ["INT_ADD", "register:40f0:8", ["const:929c74:8", "const:4:8"]]
- 00929c74 ["CALL", null, ["callee:00c57f60:8"]]
+ 00929cc8 ["INT_ADD", "register:40f0:8", ["const:929cc8:8", "const:4:8"]]
+ 00929cc8 ["CALL", null, ["callee:00c57f60:8"]]
- 00929c80 ["COPY", "tmp:0:8", ["const:5c8:8"]]
- 00929c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00929c84 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00929c84 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00929c84 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00929c84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f58bbfa880d3e124d3e415edcd3a533b"></a>

### [`00929c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929c94.md) → [`00929ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929ce8.md) FUN_00929ce8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 40.00% / 新版 40.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00929ca0",
      "DATA",
      [
        "storage",
        "00c865c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00929cf4",
      "DATA",
      [
        "storage",
        "00c86698",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929c98 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 00929c9c ["COPY", "tmp:0:8", ["const:5c8:8"]]
- 00929c9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00929c9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00929c9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00929ca0 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00929ca0 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 00929ca0 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 00929ca0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-776c6ec911dce6a9132630e5e2d6efe2"></a>

### [`00929cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929cb0.md) → [`00929d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929d04.md) FUN_00929d04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00929498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929498.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929d24",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929cd0",
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
      "site": "00929d30",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929cdc",
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
      "unmatched:00929cc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00929d44"
      ]
    ],
    [
      "00929d24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00929d30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00929d14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00929d44"
      ]
    ],
    [
      "00929d24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00929d30",
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
- 00929cd0 ["INT_ADD", "register:40f0:8", ["const:929cd0:8", "const:4:8"]]
- 00929cd0 ["CALL", null, ["ram:47acf4:8"]]
+ 00929d24 ["INT_ADD", "register:40f0:8", ["const:929d24:8", "const:4:8"]]
+ 00929d24 ["CALL", null, ["ram:47ad34:8"]]
- 00929cdc ["INT_ADD", "register:40f0:8", ["const:929cdc:8", "const:4:8"]]
- 00929cdc ["CALL", null, ["ram:47acf4:8"]]
+ 00929d30 ["INT_ADD", "register:40f0:8", ["const:929d30:8", "const:4:8"]]
+ 00929d30 ["CALL", null, ["ram:47ad34:8"]]
- 00929cc0 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-62d45c4b01127ab25d019cd7cd237319"></a>

### [`00929d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929d34.md) → [`00929d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929d88.md) FUN_00929d88

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
      "definition_site": "00929dac",
      "incomplete_value": false,
      "site": "00929dac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929d58",
      "incomplete_value": false,
      "site": "00929d58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:648:8"
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
      "00929dac",
      "DATA",
      [
        "storage",
        "00c86648",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00929dac",
      "DATA",
      [
        "storage",
        "00c86718",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929d48 ["INT_ADD", "register:40f0:8", ["const:929d48:8", "const:4:8"]]
- 00929d48 ["CALL", null, ["callee:00c57f60:8"]]
+ 00929d9c ["INT_ADD", "register:40f0:8", ["const:929d9c:8", "const:4:8"]]
+ 00929d9c ["CALL", null, ["callee:00c57f60:8"]]
- 00929d54 ["COPY", "tmp:0:8", ["const:648:8"]]
- 00929d54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929d54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929d54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00929da8 ["COPY", "tmp:0:8", ["const:718:8"]]
+ 00929da8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00929da8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00929da8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6944670f917ed461abaa0d45acfa208f"></a>

### [`00929d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929d68.md) → [`00929dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929dbc.md) FUN_00929dbc

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
      "definition_site": "00929dc8",
      "incomplete_value": false,
      "site": "00929dc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929d74",
      "incomplete_value": false,
      "site": "00929d74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:648:8"
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
      "00929dc8",
      "DATA",
      [
        "storage",
        "00c86648",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00929dc8",
      "DATA",
      [
        "storage",
        "00c86718",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929d70 ["COPY", "tmp:0:8", ["const:648:8"]]
- 00929d70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00929d70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00929d70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00929dc4 ["COPY", "tmp:0:8", ["const:718:8"]]
+ 00929dc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00929dc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00929dc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-558d8ec01fca8f3bfc728a0cc6981734"></a>

### [`00929d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929d84.md) → [`00929dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929dd8.md) FUN_00929dd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00929498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929498.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929df8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929da4",
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
      "site": "00929e04",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929db0",
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
      "00929df8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00929e04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00929df8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00929e04",
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
- 00929da4 ["INT_ADD", "register:40f0:8", ["const:929da4:8", "const:4:8"]]
- 00929da4 ["CALL", null, ["ram:47acf4:8"]]
+ 00929df8 ["INT_ADD", "register:40f0:8", ["const:929df8:8", "const:4:8"]]
+ 00929df8 ["CALL", null, ["ram:47ad34:8"]]
- 00929db0 ["INT_ADD", "register:40f0:8", ["const:929db0:8", "const:4:8"]]
- 00929db0 ["CALL", null, ["ram:47acf4:8"]]
+ 00929e04 ["INT_ADD", "register:40f0:8", ["const:929e04:8", "const:4:8"]]
+ 00929e04 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-d139c371f88338bf2780fdea1f7dd00d"></a>

### [`00929e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929e08.md) → [`00929e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929e5c.md) FUN_00929e5c

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
      "unmatched:00929e2c",
      "DATA",
      [
        "storage",
        "00c866c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00929e80",
      "DATA",
      [
        "storage",
        "00c86798",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929e1c ["INT_ADD", "register:40f0:8", ["const:929e1c:8", "const:4:8"]]
- 00929e1c ["CALL", null, ["callee:00c57f60:8"]]
+ 00929e70 ["INT_ADD", "register:40f0:8", ["const:929e70:8", "const:4:8"]]
+ 00929e70 ["CALL", null, ["callee:00c57f60:8"]]
- 00929e28 ["COPY", "tmp:0:8", ["const:6c8:8"]]
- 00929e28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929e28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929e28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00929e2c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00929e2c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00929e2c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00929e2c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d1230e438659652a30bbbcc78be5718a"></a>

### [`00929e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929e3c.md) → [`00929e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929e90.md) FUN_00929e90

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
      "unmatched:00929e48",
      "DATA",
      [
        "storage",
        "00c866c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00929e9c",
      "DATA",
      [
        "storage",
        "00c86798",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929e44 ["COPY", "tmp:0:8", ["const:6c8:8"]]
- 00929e44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00929e44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00929e44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00929e48 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00929e48 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 00929e48 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 00929e48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
+ 00929e98 ["COPY", "tmp:0:8", ["const:798:8"]]
+ 00929e98 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00929e98 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00929e98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b7810dc70bad56b73ea9c6b1cdf8c557"></a>

### [`00929e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929e58.md) → [`00929eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929eac.md) FUN_00929eac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00929e80",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00929ed4",
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
- 00929e64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00929e64 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00929eb8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00929eb8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00929e6c ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 00929e6c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00929ec0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 00929ec0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00929e80 ["INT_ADD", "register:40f0:8", ["const:929e80:8", "const:4:8"]]
- 00929e80 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-0a5f8b2ecd96c832d1b7a68033d528f3"></a>

### [`00929ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929ee0.md) → [`00929f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929f34.md) FUN_00929f34

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
      "definition_site": "00929f58",
      "incomplete_value": false,
      "site": "00929f58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:818:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929f04",
      "incomplete_value": false,
      "site": "00929f04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:748:8"
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
      "00929f58",
      "DATA",
      [
        "storage",
        "00c86748",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00929f58",
      "DATA",
      [
        "storage",
        "00c86818",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929ef4 ["INT_ADD", "register:40f0:8", ["const:929ef4:8", "const:4:8"]]
- 00929ef4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00929f48 ["INT_ADD", "register:40f0:8", ["const:929f48:8", "const:4:8"]]
+ 00929f48 ["CALL", null, ["callee:00c57f60:8"]]
- 00929f00 ["COPY", "tmp:0:8", ["const:748:8"]]
- 00929f00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929f00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929f00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00929f54 ["COPY", "tmp:0:8", ["const:818:8"]]
+ 00929f54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00929f54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00929f54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-191f18d785fbf0f25efe75131a243236"></a>

### [`00929f14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929f14.md) → [`00929f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929f68.md) FUN_00929f68

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
      "definition_site": "00929f74",
      "incomplete_value": false,
      "site": "00929f74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:818:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929f20",
      "incomplete_value": false,
      "site": "00929f20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:748:8"
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
      "00929f74",
      "DATA",
      [
        "storage",
        "00c86748",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00929f74",
      "DATA",
      [
        "storage",
        "00c86818",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929f1c ["COPY", "tmp:0:8", ["const:748:8"]]
- 00929f1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00929f1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00929f1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00929f70 ["COPY", "tmp:0:8", ["const:818:8"]]
+ 00929f70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00929f70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00929f70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-63bf8fed67c17314a1bb6fc32496e8d2"></a>

### [`00929f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929f30.md) → [`00929f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929f84.md) FUN_00929f84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929fac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929f58",
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
      "00929fac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00929fac",
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
- 00929f58 ["INT_ADD", "register:40f0:8", ["const:929f58:8", "const:4:8"]]
- 00929f58 ["CALL", null, ["ram:47acf4:8"]]
+ 00929fac ["INT_ADD", "register:40f0:8", ["const:929fac:8", "const:4:8"]]
+ 00929fac ["CALL", null, ["ram:47ad34:8"]]
- 00929f64 ["INT_ADD", "register:40f0:8", ["const:929f64:8", "const:4:8"]]
- 00929f64 ["CALL", null, ["callee:0047ce14:8"]]
+ 00929fb8 ["INT_ADD", "register:40f0:8", ["const:929fb8:8", "const:4:8"]]
+ 00929fb8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-47c4028fba72cb386b186cafe9623b48"></a>

### [`00929fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929fb8.md) → [`0092a00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a00c.md) FUN_0092a00c

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
      "definition_site": "0092a02c",
      "incomplete_value": false,
      "site": "0092a030",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:898:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929fd8",
      "incomplete_value": false,
      "site": "00929fdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:7c8:8"
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
      "0092a030",
      "DATA",
      [
        "storage",
        "00c867c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092a030",
      "DATA",
      [
        "storage",
        "00c86898",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929fcc ["INT_ADD", "register:40f0:8", ["const:929fcc:8", "const:4:8"]]
- 00929fcc ["CALL", null, ["callee:00c57f60:8"]]
+ 0092a020 ["INT_ADD", "register:40f0:8", ["const:92a020:8", "const:4:8"]]
+ 0092a020 ["CALL", null, ["callee:00c57f60:8"]]
- 00929fd8 ["COPY", "tmp:0:8", ["const:7c8:8"]]
- 00929fd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929fd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929fd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092a02c ["COPY", "tmp:0:8", ["const:898:8"]]
+ 0092a02c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a02c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a02c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58c8383eade95c53a45a8dcfa252192a"></a>

### [`00929ff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00929/00929ff0.md) → [`0092a044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a044.md) FUN_0092a044

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
      "definition_site": "0092a048",
      "incomplete_value": false,
      "site": "0092a04c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:898:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929ff4",
      "incomplete_value": false,
      "site": "00929ff8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:7c8:8"
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
      "0092a04c",
      "DATA",
      [
        "storage",
        "00c867c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092a04c",
      "DATA",
      [
        "storage",
        "00c86898",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929ff4 ["COPY", "tmp:0:8", ["const:7c8:8"]]
- 00929ff4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929ff4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929ff4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092a048 ["COPY", "tmp:0:8", ["const:898:8"]]
+ 0092a048 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a048 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a048 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cfc9da5fb10b13adc16cc88fc8d67fab"></a>

### [`0092a050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a050.md) → [`0092a0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a0a4.md) FUN_0092a0a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0092a010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a010.md) [`0092a3d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a3d4.md) · 呼出先 10件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005509bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509bc.md) [`00597ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec8.md)
- 新版 呼出元 2件 [`0092a064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a064.md) [`0092a428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a428.md) · 呼出先 10件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005509fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509fc.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0092a1f8",
      "incomplete_value": true,
      "site": "0092a1fc",
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
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0092a0f0",
      "READ",
      [
        "storage",
        "002aefc2",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0092a0f4",
      "READ",
      [
        "storage",
        "002aefc8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0092a144",
      "READ",
      [
        "storage",
        "002aef66",
        null,
        "string"
      ]
    ],
    [
      "0092a148",
      "READ",
      [
        "storage",
        "002aef6c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092a1a8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0092a1a8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0092a1a8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0092a1a8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0092a1fc ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0092a1fc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0092a1fc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0092a1fc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 0092a1fc ["INT_ADD", "register:40f0:8", ["const:92a1fc:8", "const:4:8"]]
- 0092a1fc ["CALL", null, ["callee:00c57f80:8"]]
+ 0092a250 ["INT_ADD", "register:40f0:8", ["const:92a250:8", "const:4:8"]]
+ 0092a250 ["CALL", null, ["callee:00c57f80:8"]]
- 0092a07c ["INT_ADD", "register:40f0:8", ["const:92a07c:8", "const:4:8"]]
- 0092a07c ["CALL", null, ["callee:00851550:8"]]
+ 0092a0d0 ["INT_ADD", "register:40f0:8", ["const:92a0d0:8", "const:4:8"]]
+ 0092a0d0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4d4adbe86d0caf123e80a9a55ca68675"></a>

### [`0092a37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a37c.md) → [`0092a3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a3d0.md) FUN_0092a3d0

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
      "definition_site": "0092a3f0",
      "incomplete_value": false,
      "site": "0092a3f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:918:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a39c",
      "incomplete_value": false,
      "site": "0092a3a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:848:8"
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
      "0092a3f4",
      "DATA",
      [
        "storage",
        "00c86848",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092a3f4",
      "DATA",
      [
        "storage",
        "00c86918",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092a390 ["INT_ADD", "register:40f0:8", ["const:92a390:8", "const:4:8"]]
- 0092a390 ["CALL", null, ["callee:00c57f60:8"]]
+ 0092a3e4 ["INT_ADD", "register:40f0:8", ["const:92a3e4:8", "const:4:8"]]
+ 0092a3e4 ["CALL", null, ["callee:00c57f60:8"]]
- 0092a39c ["COPY", "tmp:0:8", ["const:848:8"]]
- 0092a39c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092a39c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092a39c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092a3f0 ["COPY", "tmp:0:8", ["const:918:8"]]
+ 0092a3f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a3f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a3f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d1e0a57abed25b24010a334ac03eeaf7"></a>

### [`0092a3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a3b4.md) → [`0092a408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a408.md) FUN_0092a408

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092a40c",
      "incomplete_value": false,
      "site": "0092a410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:918:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a3b8",
      "incomplete_value": false,
      "site": "0092a3bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:848:8"
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
      "0092a410",
      "DATA",
      [
        "storage",
        "00c86848",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092a410",
      "DATA",
      [
        "storage",
        "00c86918",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092a3b8 ["COPY", "tmp:0:8", ["const:848:8"]]
- 0092a3b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092a3b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092a3b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092a40c ["COPY", "tmp:0:8", ["const:918:8"]]
+ 0092a40c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a40c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a40c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0092a3c4 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 0092a3c4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "const:8:8"]]
- 0092a3c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 0092a418 ["COPY", "tmp:0:4", ["register:4040:4"]]
+ 0092a418 ["INT_ADD", "tmp:1:8", ["register:4008:8", "const:8:8"]]
+ 0092a418 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
~~~


<a id="compare-086f4764b464a44c8de099d4bcd9711a"></a>

### [`0092a414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a414.md) → [`0092a468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a468.md) _INIT_183

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092a5c4",
      "incomplete_value": true,
      "site": "0092a5c8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092a5b4",
      "incomplete_value": true,
      "site": "0092a5c8",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092a5bc",
      "incomplete_value": true,
      "site": "0092a5c8",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:0092a444",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0092a450",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0092a46c",
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
      "0092a498",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0092a4a4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0092a4c0",
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
- 0092a574 ["INT_ADD", "register:40f0:8", ["const:92a574:8", "const:4:8"]]
- 0092a574 ["CALL", null, ["callee:0043b838:8"]]
+ 0092a5c8 ["INT_ADD", "register:40f0:8", ["const:92a5c8:8", "const:4:8"]]
+ 0092a5c8 ["CALL", null, ["callee:0043b838:8"]]
- 0092a5c4 ["INT_ADD", "register:40f0:8", ["const:92a5c4:8", "const:4:8"]]
- 0092a5c4 ["CALL", null, ["callee:0043b838:8"]]
+ 0092a618 ["INT_ADD", "register:40f0:8", ["const:92a618:8", "const:4:8"]]
+ 0092a618 ["CALL", null, ["callee:0043b838:8"]]
- 0092a5d8 ["INT_ADD", "register:40f0:8", ["const:92a5d8:8", "const:4:8"]]
- 0092a5d8 ["CALL", null, ["callee:0043b838:8"]]
+ 0092a62c ["INT_ADD", "register:40f0:8", ["const:92a62c:8", "const:4:8"]]
+ 0092a62c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-0a881ce19d4689ff27406a1578a118cf"></a>

### [`0092a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a7a4.md) → [`0092a7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a7f8.md) FUN_0092a7f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0092dcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092d/0092dcc0.md) [`00930414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930414.md) [`00934d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00934/00934d58.md) · 呼出先 55件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047d0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d0c8.md) [`0047d0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d0d0.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 3件 [`0092dd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092d/0092dd14.md) [`00930468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930468.md) [`00934dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934dac.md) · 呼出先 55件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047d108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d108.md) [`0047d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d110.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 43.10% / 新版 43.10%

優先判定に残った影響 `call_argument_candidate` 17件, `call_target` 2件, `store_condition` 1件, `store_value` 10件, `unresolved_branch_alignment` 136件, `unresolved_call_alignment` 368件, `unresolved_store_alignment` 218件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092a8fc",
      "incomplete_value": true,
      "site": "0092a904",
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
                "const:e18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092a8a8",
      "incomplete_value": true,
      "site": "0092a8b0",
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
                "const:dd8:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092ab2c",
      "incomplete_value": false,
      "site": "0092ab2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092aad8",
      "incomplete_value": false,
      "site": "0092aad8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092af20",
      "incomplete_value": false,
      "site": "0092af20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092aecc",
      "incomplete_value": false,
      "site": "0092aecc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:948:8"
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
      "unmatched:0092a800",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0092a870"
      ]
    ],
    [
      "unmatched:0092a838",
      "READ",
      [
        "storage",
        "002c2260",
        null,
        null
      ]
    ],
    [
      "unmatched:0092a8a0",
      "READ",
      [
        "storage",
        "002c40b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0092a854",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0092a870"
      ]
    ],
    [
      "0092a88c",
      "READ",
      [
        "storage",
        "002c22a0",
        null,
        null
      ]
    ],
    [
      "0092a8f4",
      "READ",
      [
        "storage",
        "002c40f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
+ 0092a8b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bf5:8"]]
+ 0092a8b0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0092a8b0 ["INT_ZEXT", "register:4060:8", ["tmp:1:1"]]
+ 0092aad8 ["COPY", "tmp:0:8", ["const:8:8"]]
+ 0092aad8 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
+ 0092aad8 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
+ 0092aad8 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
- 0092ac18 ["INT_ADD", "register:40f0:8", ["const:92ac18:8", "const:4:8"]]
- 0092ac18 ["CALL", null, ["callee:00a475a0:8"]]
+ 0092ac6c ["INT_ADD", "register:40f0:8", ["const:92ac6c:8", "const:4:8"]]
+ 0092ac6c ["CALL", null, ["callee:00a475a0:8"]]
~~~


<a id="compare-4355b519952b8bc608ab65d5772f3676"></a>

### [`0092daf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092d/0092daf0.md) → [`0092db44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092d/0092db44.md) FUN_0092db44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0092a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092a/0092a7a4.md) [`0092e66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092e/0092e66c.md) [`0093355c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/0093355c.md) [`00933684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/00933684.md) [`00933e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/00933e30.md) · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 6件 [`0092a7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a7f8.md) [`0092e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e6c0.md) [`009335b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009335b0.md) [`009336d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009336d8.md) [`00933e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933e84.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.69% / 新版 84.69%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092dbe8",
      "incomplete_value": true,
      "site": "0092dc00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:656:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092db94",
      "incomplete_value": true,
      "site": "0092dbac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6a3:8"
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
      "definition_site": "0092dc54",
      "incomplete_value": true,
      "site": "0092dc6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:338:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092dc00",
      "incomplete_value": true,
      "site": "0092dc18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:309:8"
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0092db4c",
      "incomplete_value": false,
      "site": "0092db54",
      "value": [
        "leaf",
        "const:19:8"
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
      "unmatched:0092db24",
      "READ",
      [
        "storage",
        "0029f688",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0092db3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x4f]",
        null,
        null
      ]
    ],
    [
      "0092dbcc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0092dc50"
      ]
    ]
  ],
  "added": [
    [
      "0092db78",
      "READ",
      [
        "storage",
        "0029f63b",
        null,
        "string"
      ]
    ],
    [
      "0092db90",
      "WRITE",
      [
        "storage",
        "Stack[-0x4f]",
        null,
        null
      ]
    ],
    [
      "0092dbcc",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0092dca4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092db54 ["INT_ADD", "register:40f0:8", ["const:92db54:8", "const:4:8"]]
- 0092db54 ["CALL", null, ["callee:00936618:8"]]
+ 0092dba8 ["INT_ADD", "register:40f0:8", ["const:92dba8:8", "const:4:8"]]
+ 0092dba8 ["CALL", null, ["callee:00936618:8"]]
- 0092db14 ["INT_ADD", "register:40f0:8", ["const:92db14:8", "const:4:8"]]
- 0092db14 ["CALL", null, ["callee:00851550:8"]]
+ 0092db68 ["INT_ADD", "register:40f0:8", ["const:92db68:8", "const:4:8"]]
+ 0092db68 ["CALL", null, ["callee:00851550:8"]]
- 0092db1c ["COPY", "tmp:0:8", ["const:688:8"]]
- 0092db1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0092db1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0092db1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fa5d975f4158da24fc3140ae69fcc9af"></a>

### [`0092dcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092d/0092dcc0.md) → [`0092dd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092d/0092dd14.md) FUN_0092dd14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00930508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930508.md) · 呼出先 15件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`0093055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/0093055c.md) · 呼出先 15件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 91.89% / 新版 91.89%

アドレスに依存する影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0092dce8",
      "incomplete_value": false,
      "site": "0092dcf0",
      "value": [
        "leaf",
        "const:b2:8"
      ]
    },
    "ordinal": 1,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0092df20",
      "incomplete_value": false,
      "site": "0092df30",
      "value": [
        "leaf",
        "const:10:8"
      ]
    },
    "ordinal": 20,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0092df60",
      "incomplete_value": true,
      "site": "0092df6c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:3f:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0092e070",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "unmatched:0092e0a8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:0092e0ac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ],
  "added": [
    [
      "0092e0c4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "0092e0fc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "0092e100",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092dcf0 ["INT_ADD", "register:40f0:8", ["const:92dcf0:8", "const:4:8"]]
- 0092dcf0 ["CALL", null, ["callee:00467b6c:8"]]
+ 0092dd44 ["INT_ADD", "register:40f0:8", ["const:92dd44:8", "const:4:8"]]
+ 0092dd44 ["CALL", null, ["callee:00467b6c:8"]]
- 0092df30 ["INT_ADD", "register:40f0:8", ["const:92df30:8", "const:4:8"]]
- 0092df30 ["CALL", null, ["callee:00468fc8:8"]]
+ 0092df84 ["INT_ADD", "register:40f0:8", ["const:92df84:8", "const:4:8"]]
+ 0092df84 ["CALL", null, ["callee:00468fc8:8"]]
- 0092df6c ["INT_ADD", "register:40f0:8", ["const:92df6c:8", "const:4:8"]]
- 0092df6c ["CALL", null, ["callee:00468fc8:8"]]
+ 0092dfc0 ["INT_ADD", "register:40f0:8", ["const:92dfc0:8", "const:4:8"]]
+ 0092dfc0 ["CALL", null, ["callee:00468fc8:8"]]
~~~


<a id="compare-b973f52964af73b1233f6d97762a3a68"></a>

### [`0092e3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092e/0092e3e0.md) → [`0092e434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e434.md) FUN_0092e434

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`0093047c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/0093047c.md) [`0093155c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/0093155c.md) [`00931b08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931b08.md) [`00a994a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a994a4.md) [`00a99ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a99ffc.md) · 呼出先 7件 [`0074e2c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074e/0074e2c4.md) [`0074e2cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074e/0074e2cc.md) [`0074e2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074e/0074e2d4.md) [`0074e2dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074e/0074e2dc.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 5件 [`009304d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009304d0.md) [`009315b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009315b0.md) [`00931b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b5c.md) [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) [`00a9a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a06c.md) · 呼出先 7件 [`0074e31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e31c.md) [`0074e324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e324.md) [`0074e32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e32c.md) [`0074e334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e334.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 96.93% / 新版 96.93%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092e630",
      "incomplete_value": true,
      "site": "0092e634",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 39,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092e62c",
      "incomplete_value": false,
      "site": "0092e634",
      "value": [
        "leaf",
        "const:450:8"
      ]
    },
    "old": null,
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092e654",
      "incomplete_value": true,
      "site": "0092e658",
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
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092e600",
      "incomplete_value": true,
      "site": "0092e604",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0092e4fc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b7a20"
      ]
    ]
  ],
  "added": [
    [
      "0092e550",
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
- 0092e5e0 ["INT_ADD", "register:40f0:8", ["const:92e5e0:8", "const:4:8"]]
- 0092e5e0 ["CALL", null, ["callee:008b7a20:8"]]
+ 0092e634 ["INT_ADD", "register:40f0:8", ["const:92e634:8", "const:4:8"]]
+ 0092e634 ["CALL", null, ["callee:008b7a20:8"]]
- 0092e604 ["INT_ADD", "register:40f0:8", ["const:92e604:8", "const:4:8"]]
- 0092e604 ["CALL", null, ["callee:008b7a20:8"]]
+ 0092e658 ["INT_ADD", "register:40f0:8", ["const:92e658:8", "const:4:8"]]
+ 0092e658 ["CALL", null, ["callee:008b7a20:8"]]
- 0092e634 ["INT_ADD", "register:40f0:8", ["const:92e634:8", "const:4:8"]]
- 0092e634 ["CALL", null, ["callee:0074e32c:8"]]
+ 0092e688 ["INT_ADD", "register:40f0:8", ["const:92e688:8", "const:4:8"]]
+ 0092e688 ["CALL", null, ["callee:0074e32c:8"]]
~~~


<a id="compare-dea3a3958e7abae5eb6b94734314c898"></a>

### [`0092e66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092e/0092e66c.md) → [`0092e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e6c0.md) FUN_0092e6c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00930414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930414.md) [`00934d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00934/00934d58.md) · 呼出先 39件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047d0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d0c8.md) [`0047d0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d0d0.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 2件 [`00930468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930468.md) [`00934dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934dac.md) · 呼出先 39件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047d108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d108.md) [`0047d110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d110.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 54.36% / 新版 54.36%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 17件, `store_condition` 4件, `store_value` 1件, `unresolved_branch_alignment` 52件, `unresolved_call_alignment` 132件, `unresolved_store_alignment` 96件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092e754",
      "incomplete_value": true,
      "site": "0092e758",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:110:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092e700",
      "incomplete_value": true,
      "site": "0092e704",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d0:8"
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
      "definition_site": "0092e788",
      "incomplete_value": true,
      "site": "0092e798",
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
                "const:e58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092e734",
      "incomplete_value": true,
      "site": "0092e744",
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
                "const:e18:8"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "0092f84c",
      "incomplete_value": true,
      "site": "0092f84c",
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
      "definition_site": "0092f7f8",
      "incomplete_value": true,
      "site": "0092f7f8",
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
    "ordinal": 91,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0092e694",
      "WRITE",
      [
        "storage",
        "Stack[-0x220]",
        null,
        null
      ]
    ],
    [
      "unmatched:0092e69c",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0092e754",
      "READ",
      [
        "storage",
        "002c20d0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0092e6e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x220]",
        null,
        null
      ]
    ],
    [
      "0092e6f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0092e754",
      "READ",
      [
        "storage",
        "002c2110",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0092e6b0 ["INT_ADD", "register:40f0:8", ["const:92e6b0:8", "const:4:8"]]
- 0092e6b0 ["CALL", null, ["callee:00c53d70:8"]]
+ 0092e704 ["INT_ADD", "register:40f0:8", ["const:92e704:8", "const:4:8"]]
+ 0092e704 ["CALL", null, ["callee:00c53d70:8"]]
- 0092e75c ["INT_ADD", "register:40f0:8", ["const:92e75c:8", "const:4:8"]]
- 0092e75c ["CALL", null, ["callee:00489f8c:8"]]
+ 0092e7b0 ["INT_ADD", "register:40f0:8", ["const:92e7b0:8", "const:4:8"]]
+ 0092e7b0 ["CALL", null, ["callee:00489f8c:8"]]
- 0092e770 ["INT_ADD", "register:40f0:8", ["const:92e770:8", "const:4:8"]]
- 0092e770 ["CALL", null, ["callee:00489f8c:8"]]
+ 0092e7c4 ["INT_ADD", "register:40f0:8", ["const:92e7c4:8", "const:4:8"]]
+ 0092e7c4 ["CALL", null, ["callee:00489f8c:8"]]
~~~


<a id="compare-e92e9d1ec3a3f8cca31e9e06c240a1b4"></a>

### [`0092fe40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092f/0092fe40.md) → [`0092fe94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092f/0092fe94.md) FUN_0092fe94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00930508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930508.md) · 呼出先 12件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 1件 [`0093055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/0093055c.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 97.10% / 新版 97.10%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_call_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009300a8",
      "incomplete_value": true,
      "site": "009300b4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:2a:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00930100",
      "incomplete_value": true,
      "site": "00930104",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "live",
            "register:5000:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00930168",
      "incomplete_value": true,
      "site": "00930184",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 26,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0092fe5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "unmatched:0092fe78",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b7a20"
      ]
    ],
    [
      "unmatched:009301dc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6df4"
      ]
    ]
  ],
  "added": [
    [
      "0092feb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0092fecc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b7a20"
      ]
    ],
    [
      "00930230",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6df4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009300b4 ["INT_ADD", "register:40f0:8", ["const:9300b4:8", "const:4:8"]]
- 009300b4 ["CALL", null, ["callee:00469c44:8"]]
+ 00930108 ["INT_ADD", "register:40f0:8", ["const:930108:8", "const:4:8"]]
+ 00930108 ["CALL", null, ["callee:00469c44:8"]]
- 00930104 ["INT_ADD", "register:40f0:8", ["const:930104:8", "const:4:8"]]
- 00930104 ["CALL", null, ["callee:00469c44:8"]]
+ 00930158 ["INT_ADD", "register:40f0:8", ["const:930158:8", "const:4:8"]]
+ 00930158 ["CALL", null, ["callee:00469c44:8"]]
- 00930130 ["INT_ADD", "register:40f0:8", ["const:930130:8", "const:4:8"]]
- 00930130 ["CALL", null, ["callee:00468fc8:8"]]
+ 00930184 ["INT_ADD", "register:40f0:8", ["const:930184:8", "const:4:8"]]
+ 00930184 ["CALL", null, ["callee:00468fc8:8"]]
~~~


<a id="compare-ef698e9d5f23090c2de48d37fa362794"></a>

### [`0093047c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/0093047c.md) → [`009304d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009304d0.md) FUN_009304d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00930768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930768.md) [`00933b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/00933b28.md) [`009348d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00934/009348d0.md) · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047d1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d1bc.md) [`00726f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00726/00726f70.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0092e3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092e/0092e3e0.md)
- 新版 呼出元 3件 [`009307bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009307bc.md) [`00933b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933b7c.md) [`00934924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934924.md) · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md) [`00726fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/00726fc8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0092e434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e434.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009304fc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009304a8",
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
      "009304fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009304fc",
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
- 009304a8 ["INT_ADD", "register:40f0:8", ["const:9304a8:8", "const:4:8"]]
- 009304a8 ["CALL", null, ["ram:47acf4:8"]]
+ 009304fc ["INT_ADD", "register:40f0:8", ["const:9304fc:8", "const:4:8"]]
+ 009304fc ["CALL", null, ["ram:47ad34:8"]]
- 0093049c ["INT_ADD", "register:40f0:8", ["const:93049c:8", "const:4:8"]]
- 0093049c ["CALL", null, ["callee:00851550:8"]]
+ 009304f0 ["INT_ADD", "register:40f0:8", ["const:9304f0:8", "const:4:8"]]
+ 009304f0 ["CALL", null, ["callee:00851550:8"]]
- 009304b0 ["INT_ADD", "register:40f0:8", ["const:9304b0:8", "const:4:8"]]
- 009304b0 ["CALL", null, ["callee:0047d1fc:8"]]
+ 00930504 ["INT_ADD", "register:40f0:8", ["const:930504:8", "const:4:8"]]
+ 00930504 ["CALL", null, ["callee:0047d1fc:8"]]
~~~


<a id="compare-3310fed1871ddd85bafbc31f11b5be9f"></a>

### [`00930534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930534.md) → [`00930588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930588.md) FUN_00930588

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`0093355c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/0093355c.md) [`00933684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/00933684.md) [`00933e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/00933e30.md) [`00933f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00933/00933f58.md) · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 4件 [`009335b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009335b0.md) [`009336d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/009336d8.md) [`00933e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933e84.md) [`00933fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933fac.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009305bc",
      "incomplete_value": true,
      "site": "009305d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:63b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930568",
      "incomplete_value": true,
      "site": "00930580",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:688:8"
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
      "definition_site": "00930600",
      "incomplete_value": true,
      "site": "00930618",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:656:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009305ac",
      "incomplete_value": true,
      "site": "009305c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6a3:8"
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
      "definition_site": "00930644",
      "incomplete_value": true,
      "site": "0093065c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:338:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009305f0",
      "incomplete_value": true,
      "site": "00930608",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:309:8"
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
      "009305bc",
      "READ",
      [
        "storage",
        "0029f688",
        null,
        "string"
      ]
    ],
    [
      "00930600",
      "READ",
      [
        "storage",
        "002a26a3",
        null,
        "string"
      ]
    ],
    [
      "00930644",
      "READ",
      [
        "storage",
        "002a9309",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009305bc",
      "READ",
      [
        "storage",
        "0029f63b",
        null,
        "string"
      ]
    ],
    [
      "00930600",
      "READ",
      [
        "storage",
        "002a2656",
        null,
        "string"
      ]
    ],
    [
      "00930644",
      "READ",
      [
        "storage",
        "002a9338",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930558 ["INT_ADD", "register:40f0:8", ["const:930558:8", "const:4:8"]]
- 00930558 ["CALL", null, ["callee:00851550:8"]]
+ 009305ac ["INT_ADD", "register:40f0:8", ["const:9305ac:8", "const:4:8"]]
+ 009305ac ["CALL", null, ["callee:00851550:8"]]
- 00930560 ["COPY", "tmp:0:8", ["const:688:8"]]
- 00930560 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00930560 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00930560 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009305b4 ["COPY", "tmp:0:8", ["const:63b:8"]]
+ 009305b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009305b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009305b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00930564 ["COPY", "register:4050:8", ["const:6567:8"]]
~~~


<a id="compare-b7da5449faeef8a396e0285f5f6fa049"></a>

### [`0093072c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/0093072c.md) → [`00930780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930780.md) FUN_00930780

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
      "definition_site": "00930794",
      "incomplete_value": false,
      "site": "00930798",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930740",
      "incomplete_value": false,
      "site": "00930744",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
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
      "00930798",
      "DATA",
      [
        "storage",
        "00c868c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00930798",
      "DATA",
      [
        "storage",
        "00c86998",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930738 ["INT_ADD", "register:40f0:8", ["const:930738:8", "const:4:8"]]
- 00930738 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093078c ["INT_ADD", "register:40f0:8", ["const:93078c:8", "const:4:8"]]
+ 0093078c ["CALL", null, ["callee:00c57f60:8"]]
- 00930740 ["COPY", "tmp:0:8", ["const:8c8:8"]]
- 00930740 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930740 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930740 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00930794 ["COPY", "tmp:0:8", ["const:998:8"]]
+ 00930794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00930794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00930794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-49dff19989242617739e47ad11177f81"></a>

### [`00930750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930750.md) → [`009307a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009307a4.md) FUN_009307a4

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
      "definition_site": "009307a8",
      "incomplete_value": false,
      "site": "009307ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930754",
      "incomplete_value": false,
      "site": "00930758",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
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
      "009307ac",
      "DATA",
      [
        "storage",
        "00c868c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009307ac",
      "DATA",
      [
        "storage",
        "00c86998",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930754 ["COPY", "tmp:0:8", ["const:8c8:8"]]
- 00930754 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930754 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930754 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009307a8 ["COPY", "tmp:0:8", ["const:998:8"]]
+ 009307a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009307a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009307a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4190abe804d52fbdabed77429873c865"></a>

### [`00930768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930768.md) → [`009307bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009307bc.md) FUN_009307bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`0093047c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/0093047c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`009304d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009304d0.md)

変更の種類 call, call_target, cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0093089c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930848",
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
      "site": "009308a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930854",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0093089c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009308a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0093089c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009308a8",
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
- 00930848 ["INT_ADD", "register:40f0:8", ["const:930848:8", "const:4:8"]]
- 00930848 ["CALL", null, ["ram:47acf4:8"]]
+ 0093089c ["INT_ADD", "register:40f0:8", ["const:93089c:8", "const:4:8"]]
+ 0093089c ["CALL", null, ["ram:47ad34:8"]]
- 00930854 ["INT_ADD", "register:40f0:8", ["const:930854:8", "const:4:8"]]
- 00930854 ["CALL", null, ["ram:47acf4:8"]]
+ 009308a8 ["INT_ADD", "register:40f0:8", ["const:9308a8:8", "const:4:8"]]
+ 009308a8 ["CALL", null, ["ram:47ad34:8"]]
- 00930780 ["INT_ADD", "register:40f0:8", ["const:930780:8", "const:4:8"]]
- 00930780 ["CALL", null, ["callee:008b6efc:8"]]
+ 009307d4 ["INT_ADD", "register:40f0:8", ["const:9307d4:8", "const:4:8"]]
+ 009307d4 ["CALL", null, ["callee:008b6efc:8"]]
~~~


<a id="compare-48d7ff8d8db600cc10665bad71320d3c"></a>

### [`00930898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930898.md) → [`009308ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009308ec.md) FUN_009308ec

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
      "definition_site": "00930900",
      "incomplete_value": false,
      "site": "00930904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009308ac",
      "incomplete_value": false,
      "site": "009308b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:948:8"
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
      "00930904",
      "DATA",
      [
        "storage",
        "00c86948",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00930904",
      "DATA",
      [
        "storage",
        "00c86a18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009308a4 ["INT_ADD", "register:40f0:8", ["const:9308a4:8", "const:4:8"]]
- 009308a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009308f8 ["INT_ADD", "register:40f0:8", ["const:9308f8:8", "const:4:8"]]
+ 009308f8 ["CALL", null, ["callee:00c57f60:8"]]
- 009308ac ["COPY", "tmp:0:8", ["const:948:8"]]
- 009308ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009308ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009308ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00930900 ["COPY", "tmp:0:8", ["const:a18:8"]]
+ 00930900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00930900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00930900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6a23521937a435263c3059ec9a5698f5"></a>

### [`009308bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/009308bc.md) → [`00930910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930910.md) FUN_00930910

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
      "definition_site": "00930914",
      "incomplete_value": false,
      "site": "00930918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009308c0",
      "incomplete_value": false,
      "site": "009308c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:948:8"
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
      "00930918",
      "DATA",
      [
        "storage",
        "00c86948",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00930918",
      "DATA",
      [
        "storage",
        "00c86a18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009308c0 ["COPY", "tmp:0:8", ["const:948:8"]]
- 009308c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009308c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009308c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00930914 ["COPY", "tmp:0:8", ["const:a18:8"]]
+ 00930914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00930914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00930914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-820800d4db792107599cf777c68d7e83"></a>

### [`009308d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/009308d4.md) → [`00930928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930928.md) FUN_00930928

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468d8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md)

変更の種類 call, call_argument_candidate, call_target, constant, local_def_use, operands_and_dependencies

命令の説明率　旧版 95.38% / 新版 95.38%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0093093c",
      "incomplete_value": true,
      "site": "00930940",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "009308e8",
      "incomplete_value": true,
      "site": "009308ec",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930a08",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009309b4",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "00930a14",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009309c0",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00930a08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00930a14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00930a08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00930a14",
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
- 009308ec ["INT_ADD", "register:40f0:8", ["const:9308ec:8", "const:4:8"]]
- 009308ec ["CALL", null, ["callee:008b6efc:8"]]
+ 00930940 ["INT_ADD", "register:40f0:8", ["const:930940:8", "const:4:8"]]
+ 00930940 ["CALL", null, ["callee:008b6efc:8"]]
- 009309b4 ["INT_ADD", "register:40f0:8", ["const:9309b4:8", "const:4:8"]]
- 009309b4 ["CALL", null, ["ram:47acf4:8"]]
+ 00930a08 ["INT_ADD", "register:40f0:8", ["const:930a08:8", "const:4:8"]]
+ 00930a08 ["CALL", null, ["ram:47ad34:8"]]
- 009309c0 ["INT_ADD", "register:40f0:8", ["const:9309c0:8", "const:4:8"]]
- 009309c0 ["CALL", null, ["ram:47acf4:8"]]
+ 00930a14 ["INT_ADD", "register:40f0:8", ["const:930a14:8", "const:4:8"]]
+ 00930a14 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-bdfc41a6fbd9c1257f56e85a0acb7473"></a>

### [`00930a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930a04.md) → [`00930a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930a58.md) FUN_00930a58

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
      "definition_site": "00930a6c",
      "incomplete_value": false,
      "site": "00930a70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930a18",
      "incomplete_value": false,
      "site": "00930a1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:9c8:8"
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
      "00930a70",
      "DATA",
      [
        "storage",
        "00c869c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00930a70",
      "DATA",
      [
        "storage",
        "00c86a98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930a10 ["INT_ADD", "register:40f0:8", ["const:930a10:8", "const:4:8"]]
- 00930a10 ["CALL", null, ["callee:00c57f60:8"]]
+ 00930a64 ["INT_ADD", "register:40f0:8", ["const:930a64:8", "const:4:8"]]
+ 00930a64 ["CALL", null, ["callee:00c57f60:8"]]
- 00930a18 ["COPY", "tmp:0:8", ["const:9c8:8"]]
- 00930a18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930a18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930a18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00930a6c ["COPY", "tmp:0:8", ["const:a98:8"]]
+ 00930a6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00930a6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00930a6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9118ee2e3ee4757ecfe344536e4d750e"></a>

### [`00930a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930a28.md) → [`00930a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930a7c.md) FUN_00930a7c

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
      "definition_site": "00930a80",
      "incomplete_value": false,
      "site": "00930a84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930a2c",
      "incomplete_value": false,
      "site": "00930a30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:9c8:8"
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
      "00930a84",
      "DATA",
      [
        "storage",
        "00c869c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00930a84",
      "DATA",
      [
        "storage",
        "00c86a98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930a2c ["COPY", "tmp:0:8", ["const:9c8:8"]]
- 00930a2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930a2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930a2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00930a80 ["COPY", "tmp:0:8", ["const:a98:8"]]
+ 00930a80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00930a80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00930a80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-df92e73466ea2e45f7b5c9534b50d116"></a>

### [`00930a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930a40.md) → [`00930a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930a94.md) FUN_00930a94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 22件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)

変更の種類 call, call_target, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.39% / 新版 96.39%

優先判定に残った影響 `call_target` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00930e1c",
      "incomplete_value": false,
      "site": "00930e1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930dc8",
      "incomplete_value": false,
      "site": "00930dc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930b8c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930b38",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "00930bb0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00930b5c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00930b8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00930bb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00930bcc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00930b8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00930bb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00930bcc",
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
- 00930b24 ["INT_ADD", "register:40f0:8", ["const:930b24:8", "const:4:8"]]
- 00930b24 ["CALL", null, ["callee:00851550:8"]]
+ 00930b78 ["INT_ADD", "register:40f0:8", ["const:930b78:8", "const:4:8"]]
+ 00930b78 ["CALL", null, ["callee:00851550:8"]]
- 00930b38 ["INT_ADD", "register:40f0:8", ["const:930b38:8", "const:4:8"]]
- 00930b38 ["CALL", null, ["ram:48ccf8:8"]]
+ 00930b8c ["INT_ADD", "register:40f0:8", ["const:930b8c:8", "const:4:8"]]
+ 00930b8c ["CALL", null, ["ram:48cd38:8"]]
- 00930b5c ["INT_ADD", "register:40f0:8", ["const:930b5c:8", "const:4:8"]]
- 00930b5c ["CALL", null, ["ram:47acf4:8"]]
+ 00930bb0 ["INT_ADD", "register:40f0:8", ["const:930bb0:8", "const:4:8"]]
+ 00930bb0 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-428aefb682658bccd4b58fd6a9f7bfe1"></a>

### [`00930fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930fc0.md) → [`00931014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931014.md) FUN_00931014

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
      "definition_site": "00931028",
      "incomplete_value": false,
      "site": "0093102c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00930fd4",
      "incomplete_value": false,
      "site": "00930fd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "0093102c",
      "DATA",
      [
        "storage",
        "00c86a38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093102c",
      "DATA",
      [
        "storage",
        "00c86b08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930fcc ["INT_ADD", "register:40f0:8", ["const:930fcc:8", "const:4:8"]]
- 00930fcc ["CALL", null, ["callee:00c57f60:8"]]
+ 00931020 ["INT_ADD", "register:40f0:8", ["const:931020:8", "const:4:8"]]
+ 00931020 ["CALL", null, ["callee:00c57f60:8"]]
- 00930fd4 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00930fd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930fd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930fd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931028 ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 00931028 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931028 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931028 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ec93b53b255cbc1afbb842ee9084bcdf"></a>

### [`00930fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930fe4.md) → [`00931038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931038.md) FUN_00931038

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00930fec",
      "DATA",
      [
        "storage",
        "00c86a38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931040",
      "DATA",
      [
        "storage",
        "00c86b08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00930fe4 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 00930fe8 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00930fe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00930fe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00930fe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00930fec ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00930fec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-25ae56fce8de12a0e415aba3e9e9a464"></a>

### [`00930ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00930/00930ffc.md) → [`00931050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931050.md) FUN_00931050

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00931060",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009310c8"
      ]
    ]
  ],
  "added": [
    [
      "009310b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009310c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931018 ["INT_ADD", "register:40f0:8", ["const:931018:8", "const:4:8"]]
- 00931018 ["CALL", null, ["callee:00851550:8"]]
+ 0093106c ["INT_ADD", "register:40f0:8", ["const:93106c:8", "const:4:8"]]
+ 0093106c ["CALL", null, ["callee:00851550:8"]]
- 00931020 ["INT_ADD", "register:40f0:8", ["const:931020:8", "const:4:8"]]
- 00931020 ["CALL", null, ["callee:00764f38:8"]]
+ 00931074 ["INT_ADD", "register:40f0:8", ["const:931074:8", "const:4:8"]]
+ 00931074 ["CALL", null, ["callee:00764f38:8"]]
- 00931028 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00931028 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00931028 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00931028 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0093107c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0093107c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0093107c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0093107c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-377f96fc09c1050c002e05591733dc5b"></a>

### [`009310a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009310a4.md) → [`009310f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009310f8.md) FUN_009310f8

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
      "definition_site": "0093110c",
      "incomplete_value": false,
      "site": "00931110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009310b8",
      "incomplete_value": false,
      "site": "009310bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "00931110",
      "DATA",
      [
        "storage",
        "00c86ab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931110",
      "DATA",
      [
        "storage",
        "00c86b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009310b0 ["INT_ADD", "register:40f0:8", ["const:9310b0:8", "const:4:8"]]
- 009310b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00931104 ["INT_ADD", "register:40f0:8", ["const:931104:8", "const:4:8"]]
+ 00931104 ["CALL", null, ["callee:00c57f60:8"]]
- 009310b8 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 009310b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009310b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009310b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093110c ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 0093110c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093110c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093110c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b8c7eb0e8209c821161ad1d8de65c88a"></a>

### [`009310c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009310c8.md) → [`0093111c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/0093111c.md) FUN_0093111c

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
      "definition_site": "00931120",
      "incomplete_value": false,
      "site": "00931124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009310cc",
      "incomplete_value": false,
      "site": "009310d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "00931124",
      "DATA",
      [
        "storage",
        "00c86ab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931124",
      "DATA",
      [
        "storage",
        "00c86b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009310cc ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 009310cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009310cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009310cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931120 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 00931120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2190124bef8f610e0b3f8f1a2656ab87"></a>

### [`00931188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931188.md) → [`009311dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009311dc.md) FUN_009311dc

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
      "definition_site": "009311f0",
      "incomplete_value": false,
      "site": "009311f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093119c",
      "incomplete_value": false,
      "site": "009311a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b48:8"
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
      "009311f4",
      "DATA",
      [
        "storage",
        "00c86b48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009311f4",
      "DATA",
      [
        "storage",
        "00c86c18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931194 ["INT_ADD", "register:40f0:8", ["const:931194:8", "const:4:8"]]
- 00931194 ["CALL", null, ["callee:00c57f60:8"]]
+ 009311e8 ["INT_ADD", "register:40f0:8", ["const:9311e8:8", "const:4:8"]]
+ 009311e8 ["CALL", null, ["callee:00c57f60:8"]]
- 0093119c ["COPY", "tmp:0:8", ["const:b48:8"]]
- 0093119c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093119c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093119c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009311f0 ["COPY", "tmp:0:8", ["const:c18:8"]]
+ 009311f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009311f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009311f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9e2a002fc77071bece8754b579263de6"></a>

### [`009311ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009311ac.md) → [`00931200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931200.md) FUN_00931200

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
      "definition_site": "00931204",
      "incomplete_value": false,
      "site": "00931208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009311b0",
      "incomplete_value": false,
      "site": "009311b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:b48:8"
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
      "00931208",
      "DATA",
      [
        "storage",
        "00c86b48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931208",
      "DATA",
      [
        "storage",
        "00c86c18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009311b0 ["COPY", "tmp:0:8", ["const:b48:8"]]
- 009311b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009311b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009311b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931204 ["COPY", "tmp:0:8", ["const:c18:8"]]
+ 00931204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c85fc565c3f91643707a1e9f188b4aa5"></a>

### [`009311c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009311c4.md) → [`00931218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931218.md) FUN_00931218

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00493690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493690.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 93.89% / 新版 93.89%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00931324",
      "incomplete_value": true,
      "site": "00931324",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:33a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009312d0",
      "incomplete_value": true,
      "site": "009312d0",
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
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:2fa:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0093136c",
      "incomplete_value": false,
      "site": "00931374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931318",
      "incomplete_value": false,
      "site": "00931320",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
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
      "site": "009312fc",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009312a8",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "009312fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "00931310",
      "READ",
      [
        "storage",
        "002c12fa",
        null,
        "string"
      ]
    ],
    [
      "00931374",
      "DATA",
      [
        "storage",
        "00c86bb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009312fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00931310",
      "READ",
      [
        "storage",
        "002c133a",
        null,
        "string"
      ]
    ],
    [
      "00931374",
      "DATA",
      [
        "storage",
        "00c86c88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093127c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0093127c ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 009312d0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009312d0 ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
- 009312a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009312a4 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 009312f8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009312f8 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
- 009312a8 ["INT_ADD", "register:40f0:8", ["const:9312a8:8", "const:4:8"]]
- 009312a8 ["CALL", null, ["ram:48ccf8:8"]]
+ 009312fc ["INT_ADD", "register:40f0:8", ["const:9312fc:8", "const:4:8"]]
+ 009312fc ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-94505321cb0f63d146fd36ebf5148166"></a>

### [`00931478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931478.md) → [`009314cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009314cc.md) FUN_009314cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009314e0",
      "incomplete_value": false,
      "site": "009314e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093148c",
      "incomplete_value": false,
      "site": "00931490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
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
    "new": null,
    "old": {
      "definition_site": "00931480",
      "incomplete_value": false,
      "site": "00931484",
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
      "009314e4",
      "DATA",
      [
        "storage",
        "00c86bb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009314e4",
      "DATA",
      [
        "storage",
        "00c86c88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931484 ["INT_ADD", "register:40f0:8", ["const:931484:8", "const:4:8"]]
- 00931484 ["CALL", null, ["callee:00c57f60:8"]]
+ 009314d8 ["INT_ADD", "register:40f0:8", ["const:9314d8:8", "const:4:8"]]
+ 009314d8 ["CALL", null, ["callee:00c57f60:8"]]
- 0093148c ["COPY", "tmp:0:8", ["const:bb8:8"]]
- 0093148c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093148c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093148c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009314e0 ["COPY", "tmp:0:8", ["const:c88:8"]]
+ 009314e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009314e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009314e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-86f879b9061ff9581f711ed2df681da6"></a>

### [`0093149c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/0093149c.md) → [`009314f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009314f0.md) FUN_009314f0

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
      "definition_site": "009314f4",
      "incomplete_value": false,
      "site": "009314f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009314a0",
      "incomplete_value": false,
      "site": "009314a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "009314f8",
      "DATA",
      [
        "storage",
        "00c86bb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009314f8",
      "DATA",
      [
        "storage",
        "00c86c88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009314a0 ["COPY", "tmp:0:8", ["const:bb8:8"]]
- 009314a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009314a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009314a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009314f4 ["COPY", "tmp:0:8", ["const:c88:8"]]
+ 009314f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009314f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009314f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-794fc46bdb5e1b528ddc194d88fc06c0"></a>

### [`0093150c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/0093150c.md) → [`00931560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931560.md) FUN_00931560

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
      "unmatched:0093150c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00931510",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00931530",
      "DATA",
      [
        "storage",
        "00c86c48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931560",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00931564",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00931584",
      "DATA",
      [
        "storage",
        "00c86d18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093150c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0093150c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0093150c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0093150c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00931510 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00931510 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00931514 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-5106e401fc2dbab1d9210a3448caabb5"></a>

### [`00931540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931540.md) → [`00931594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931594.md) FUN_00931594

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
      "definition_site": "009315a0",
      "incomplete_value": false,
      "site": "009315a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093154c",
      "incomplete_value": false,
      "site": "0093154c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:c48:8"
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
      "009315a0",
      "DATA",
      [
        "storage",
        "00c86c48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009315a0",
      "DATA",
      [
        "storage",
        "00c86d18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931548 ["COPY", "tmp:0:8", ["const:c48:8"]]
- 00931548 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00931548 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00931548 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0093159c ["COPY", "tmp:0:8", ["const:d18:8"]]
+ 0093159c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0093159c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0093159c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-29bdf53718e2b8b085c32189a12f0e45"></a>

### [`0093155c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/0093155c.md) → [`009315b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009315b0.md) FUN_009315b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0056085c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/0056085c.md) [`007685a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007685a4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.24% / 新版 91.24%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009315a4",
      "incomplete_value": false,
      "site": "009315a8",
      "value": [
        "leaf",
        "const:2:8"
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
      "definition_site": "00931600",
      "incomplete_value": true,
      "site": "00931604",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009316e0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0093168c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00931610",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00931670"
      ]
    ],
    [
      "unmatched:009315e0",
      "DATA",
      [
        "storage",
        "00333f9c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0093163c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00931890"
      ]
    ]
  ],
  "added": [
    [
      "00931610",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009316c4"
      ]
    ],
    [
      "00931634",
      "DATA",
      [
        "storage",
        "00333f9c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00931690",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00931890"
      ]
    ]
  ]
}
~~~


~~~diff
- 009315a8 ["INT_ADD", "register:40f0:8", ["const:9315a8:8", "const:4:8"]]
- 009315a8 ["CALL", null, ["callee:00a46944:8"]]
+ 009315fc ["INT_ADD", "register:40f0:8", ["const:9315fc:8", "const:4:8"]]
+ 009315fc ["CALL", null, ["callee:00a46944:8"]]
- 009315b0 ["INT_ADD", "register:40f0:8", ["const:9315b0:8", "const:4:8"]]
- 009315b0 ["CALL", null, ["callee:00a4692c:8"]]
+ 00931604 ["INT_ADD", "register:40f0:8", ["const:931604:8", "const:4:8"]]
+ 00931604 ["CALL", null, ["callee:00a4692c:8"]]
- 00931604 ["INT_ADD", "register:40f0:8", ["const:931604:8", "const:4:8"]]
- 00931604 ["CALL", null, ["callee:00a46944:8"]]
+ 00931658 ["INT_ADD", "register:40f0:8", ["const:931658:8", "const:4:8"]]
+ 00931658 ["CALL", null, ["callee:00a46944:8"]]
~~~


<a id="compare-b31fe482df63820bf22b000ee27d19f0"></a>

### [`009318f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009318f0.md) → [`00931944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931944.md) FUN_00931944

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
      "definition_site": "00931958",
      "incomplete_value": false,
      "site": "0093195c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:d88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931904",
      "incomplete_value": false,
      "site": "00931908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "0093195c",
      "DATA",
      [
        "storage",
        "00c86cb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093195c",
      "DATA",
      [
        "storage",
        "00c86d88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009318fc ["INT_ADD", "register:40f0:8", ["const:9318fc:8", "const:4:8"]]
- 009318fc ["CALL", null, ["callee:00c57f60:8"]]
+ 00931950 ["INT_ADD", "register:40f0:8", ["const:931950:8", "const:4:8"]]
+ 00931950 ["CALL", null, ["callee:00c57f60:8"]]
- 00931904 ["COPY", "tmp:0:8", ["const:cb8:8"]]
- 00931904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931958 ["COPY", "tmp:0:8", ["const:d88:8"]]
+ 00931958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-33d6c735b4e2a801105fa74c84e8e55b"></a>

### [`00931914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931914.md) → [`00931968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931968.md) FUN_00931968

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
      "definition_site": "0093196c",
      "incomplete_value": false,
      "site": "00931970",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:d88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931918",
      "incomplete_value": false,
      "site": "0093191c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "00931970",
      "DATA",
      [
        "storage",
        "00c86cb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931970",
      "DATA",
      [
        "storage",
        "00c86d88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931918 ["COPY", "tmp:0:8", ["const:cb8:8"]]
- 00931918 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931918 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931918 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093196c ["COPY", "tmp:0:8", ["const:d88:8"]]
+ 0093196c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093196c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093196c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea8a8201a7e5cfe0ec282fe5f745ec7a"></a>

### [`009319d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009319d4.md) → [`00931a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931a28.md) FUN_00931a28

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
      "definition_site": "00931a3c",
      "incomplete_value": false,
      "site": "00931a40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009319e8",
      "incomplete_value": false,
      "site": "009319ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "00931a40",
      "DATA",
      [
        "storage",
        "00c86d38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931a40",
      "DATA",
      [
        "storage",
        "00c86e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009319e0 ["INT_ADD", "register:40f0:8", ["const:9319e0:8", "const:4:8"]]
- 009319e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00931a34 ["INT_ADD", "register:40f0:8", ["const:931a34:8", "const:4:8"]]
+ 00931a34 ["CALL", null, ["callee:00c57f60:8"]]
- 009319e8 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009319e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009319e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009319e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931a3c ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00931a3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-86bab303c57ec9af2cb8851dc1182c94"></a>

### [`009319f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/009319f8.md) → [`00931a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931a4c.md) FUN_00931a4c

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
      "definition_site": "00931a50",
      "incomplete_value": false,
      "site": "00931a54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009319fc",
      "incomplete_value": false,
      "site": "00931a00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "00931a54",
      "DATA",
      [
        "storage",
        "00c86d38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931a54",
      "DATA",
      [
        "storage",
        "00c86e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009319fc ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009319fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009319fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009319fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931a50 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00931a50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931a50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-93fe3d25d0f0b72f635651612a7c641a"></a>

### [`00931ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931ab8.md) → [`00931b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b0c.md) FUN_00931b0c

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
      "definition_site": "00931b30",
      "incomplete_value": false,
      "site": "00931b30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931adc",
      "incomplete_value": false,
      "site": "00931adc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
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
      "00931b30",
      "DATA",
      [
        "storage",
        "00c86dc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931b30",
      "DATA",
      [
        "storage",
        "00c86e98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931acc ["INT_ADD", "register:40f0:8", ["const:931acc:8", "const:4:8"]]
- 00931acc ["CALL", null, ["callee:00c57f60:8"]]
+ 00931b20 ["INT_ADD", "register:40f0:8", ["const:931b20:8", "const:4:8"]]
+ 00931b20 ["CALL", null, ["callee:00c57f60:8"]]
- 00931ad8 ["COPY", "tmp:0:8", ["const:dc8:8"]]
- 00931ad8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931ad8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931ad8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931b2c ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00931b2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931b2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931b2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b20ecc6edf2231bfb6ce98db3100ed5"></a>

### [`00931aec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931aec.md) → [`00931b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b40.md) FUN_00931b40

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
      "definition_site": "00931b4c",
      "incomplete_value": false,
      "site": "00931b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931af8",
      "incomplete_value": false,
      "site": "00931af8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:dc8:8"
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
      "00931b4c",
      "DATA",
      [
        "storage",
        "00c86dc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931b4c",
      "DATA",
      [
        "storage",
        "00c86e98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931af4 ["COPY", "tmp:0:8", ["const:dc8:8"]]
- 00931af4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00931af4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00931af4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00931b48 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00931b48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00931b48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00931b48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-524a837333d97f969261fa5e8a0e035a"></a>

### [`00931b08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931b08.md) → [`00931b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b5c.md) FUN_00931b5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0056085c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/0056085c.md) [`007685a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007685a4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.04% / 新版 97.04%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00931d74",
      "incomplete_value": false,
      "site": "00931d84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931d20",
      "incomplete_value": false,
      "site": "00931d30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00931dac",
      "incomplete_value": false,
      "site": "00931dbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931d58",
      "incomplete_value": false,
      "site": "00931d68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
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
      "site": "00931c70",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00931c1c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "00931c70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00931c8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00931d84",
      "DATA",
      [
        "storage",
        "00c86e38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931c70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00931c8c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00931d84",
      "DATA",
      [
        "storage",
        "00c86f08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931c1c ["INT_ADD", "register:40f0:8", ["const:931c1c:8", "const:4:8"]]
- 00931c1c ["CALL", null, ["ram:47acf4:8"]]
+ 00931c70 ["INT_ADD", "register:40f0:8", ["const:931c70:8", "const:4:8"]]
+ 00931c70 ["CALL", null, ["ram:47ad34:8"]]
- 00931c38 ["INT_ADD", "register:40f0:8", ["const:931c38:8", "const:4:8"]]
- 00931c38 ["CALL", null, ["ram:47acf4:8"]]
+ 00931c8c ["INT_ADD", "register:40f0:8", ["const:931c8c:8", "const:4:8"]]
+ 00931c8c ["CALL", null, ["ram:47ad34:8"]]
- 00931d14 ["INT_ADD", "register:40f0:8", ["const:931d14:8", "const:4:8"]]
- 00931d14 ["CALL", null, ["callee:0056089c:8"]]
+ 00931d68 ["INT_ADD", "register:40f0:8", ["const:931d68:8", "const:4:8"]]
+ 00931d68 ["CALL", null, ["callee:0056089c:8"]]
~~~


<a id="compare-bbdb61a43b43145b162ab9e17adb88e8"></a>

### [`00931ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931ec0.md) → [`00931f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931f14.md) FUN_00931f14

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
      "definition_site": "00931f28",
      "incomplete_value": false,
      "site": "00931f2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931ed4",
      "incomplete_value": false,
      "site": "00931ed8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e38:8"
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
      "00931f2c",
      "DATA",
      [
        "storage",
        "00c86e38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931f2c",
      "DATA",
      [
        "storage",
        "00c86f08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931ecc ["INT_ADD", "register:40f0:8", ["const:931ecc:8", "const:4:8"]]
- 00931ecc ["CALL", null, ["callee:00c57f60:8"]]
+ 00931f20 ["INT_ADD", "register:40f0:8", ["const:931f20:8", "const:4:8"]]
+ 00931f20 ["CALL", null, ["callee:00c57f60:8"]]
- 00931ed4 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 00931ed4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931ed4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931ed4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931f28 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 00931f28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931f28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931f28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a7e3df77d67d6312197c015054af1595"></a>

### [`00931ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00931/00931ee4.md) → [`00931f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931f38.md) FUN_00931f38

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
      "definition_site": "00931f3c",
      "incomplete_value": false,
      "site": "00931f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00931ee8",
      "incomplete_value": false,
      "site": "00931eec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c86000:8"
          ],
          [
            "leaf",
            "const:e38:8"
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
      "00931f40",
      "DATA",
      [
        "storage",
        "00c86e38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00931f40",
      "DATA",
      [
        "storage",
        "00c86f08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00931ee8 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 00931ee8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00931ee8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00931ee8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00931f3c ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 00931f3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00931f3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00931f3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


